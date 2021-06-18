import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class RamClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptResourceShareInvitation(input: shapes.RamAcceptResourceShareInvitationRequest): RAMAcceptResourceShareInvitation {
    return new RAMAcceptResourceShareInvitation(this, 'AcceptResourceShareInvitation', this.__resources, input);
  }

  public associateResourceShare(input: shapes.RamAssociateResourceShareRequest): RAMAssociateResourceShare {
    return new RAMAssociateResourceShare(this, 'AssociateResourceShare', this.__resources, input);
  }

  public associateResourceSharePermission(input: shapes.RamAssociateResourceSharePermissionRequest): RAMAssociateResourceSharePermission {
    return new RAMAssociateResourceSharePermission(this, 'AssociateResourceSharePermission', this.__resources, input);
  }

  public createResourceShare(input: shapes.RamCreateResourceShareRequest): RAMCreateResourceShare {
    return new RAMCreateResourceShare(this, 'CreateResourceShare', this.__resources, input);
  }

  public deleteResourceShare(input: shapes.RamDeleteResourceShareRequest): RAMDeleteResourceShare {
    return new RAMDeleteResourceShare(this, 'DeleteResourceShare', this.__resources, input);
  }

  public disassociateResourceShare(input: shapes.RamDisassociateResourceShareRequest): RAMDisassociateResourceShare {
    return new RAMDisassociateResourceShare(this, 'DisassociateResourceShare', this.__resources, input);
  }

  public disassociateResourceSharePermission(input: shapes.RamDisassociateResourceSharePermissionRequest): RAMDisassociateResourceSharePermission {
    return new RAMDisassociateResourceSharePermission(this, 'DisassociateResourceSharePermission', this.__resources, input);
  }

  public enableSharingWithAwsOrganization(): RAMEnableSharingWithAwsOrganization {
    return new RAMEnableSharingWithAwsOrganization(this, 'EnableSharingWithAwsOrganization', this.__resources);
  }

  public fetchPermission(input: shapes.RamGetPermissionRequest): RAMFetchPermission {
    return new RAMFetchPermission(this, 'FetchPermission', this.__resources, input);
  }

  public fetchResourcePolicies(input: shapes.RamGetResourcePoliciesRequest): RAMFetchResourcePolicies {
    return new RAMFetchResourcePolicies(this, 'FetchResourcePolicies', this.__resources, input);
  }

  public fetchResourceShareAssociations(input: shapes.RamGetResourceShareAssociationsRequest): RAMFetchResourceShareAssociations {
    return new RAMFetchResourceShareAssociations(this, 'FetchResourceShareAssociations', this.__resources, input);
  }

  public fetchResourceShareInvitations(input: shapes.RamGetResourceShareInvitationsRequest): RAMFetchResourceShareInvitations {
    return new RAMFetchResourceShareInvitations(this, 'FetchResourceShareInvitations', this.__resources, input);
  }

  public fetchResourceShares(input: shapes.RamGetResourceSharesRequest): RAMFetchResourceShares {
    return new RAMFetchResourceShares(this, 'FetchResourceShares', this.__resources, input);
  }

  public listPendingInvitationResources(input: shapes.RamListPendingInvitationResourcesRequest): RAMListPendingInvitationResources {
    return new RAMListPendingInvitationResources(this, 'ListPendingInvitationResources', this.__resources, input);
  }

  public listPermissions(input: shapes.RamListPermissionsRequest): RAMListPermissions {
    return new RAMListPermissions(this, 'ListPermissions', this.__resources, input);
  }

  public listPrincipals(input: shapes.RamListPrincipalsRequest): RAMListPrincipals {
    return new RAMListPrincipals(this, 'ListPrincipals', this.__resources, input);
  }

  public listResourceSharePermissions(input: shapes.RamListResourceSharePermissionsRequest): RAMListResourceSharePermissions {
    return new RAMListResourceSharePermissions(this, 'ListResourceSharePermissions', this.__resources, input);
  }

  public listResourceTypes(input: shapes.RamListResourceTypesRequest): RAMListResourceTypes {
    return new RAMListResourceTypes(this, 'ListResourceTypes', this.__resources, input);
  }

  public listResources(input: shapes.RamListResourcesRequest): RAMListResources {
    return new RAMListResources(this, 'ListResources', this.__resources, input);
  }

  public promoteResourceShareCreatedFromPolicy(input: shapes.RamPromoteResourceShareCreatedFromPolicyRequest): RAMPromoteResourceShareCreatedFromPolicy {
    return new RAMPromoteResourceShareCreatedFromPolicy(this, 'PromoteResourceShareCreatedFromPolicy', this.__resources, input);
  }

  public rejectResourceShareInvitation(input: shapes.RamRejectResourceShareInvitationRequest): RAMRejectResourceShareInvitation {
    return new RAMRejectResourceShareInvitation(this, 'RejectResourceShareInvitation', this.__resources, input);
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

  public updateResourceShare(input: shapes.RamUpdateResourceShareRequest): RAMUpdateResourceShare {
    return new RAMUpdateResourceShare(this, 'UpdateResourceShare', this.__resources, input);
  }

}

export class RAMAcceptResourceShareInvitation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamAcceptResourceShareInvitationRequest) {
    super(scope, id);
  }

  public get resourceShareInvitation(): RAMAcceptResourceShareInvitationResourceShareInvitation {
    return new RAMAcceptResourceShareInvitationResourceShareInvitation(this, 'ResourceShareInvitation', this.__resources, this.input);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptResourceShareInvitation.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMAcceptResourceShareInvitationResourceShareInvitation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamAcceptResourceShareInvitationRequest) {
    super(scope, id);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptResourceShareInvitation.resourceShareInvitation.resourceShareInvitationArn', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptResourceShareInvitation.resourceShareInvitation.resourceShareName', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptResourceShareInvitation.resourceShareInvitation.resourceShareArn', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptResourceShareInvitation.resourceShareInvitation.senderAccountId', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptResourceShareInvitation.resourceShareInvitation.receiverAccountId', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptResourceShareInvitation.resourceShareInvitation.invitationTimestamp', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptResourceShareInvitation.resourceShareInvitation.status', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptResourceShareInvitation.resourceShareInvitation.resourceShareAssociations', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareAssociations') as unknown as shapes.RamResourceShareAssociation[];
  }

}

export class RAMAssociateResourceShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamAssociateResourceShareRequest) {
    super(scope, id);
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
          resourceShareArn: this.input.resourceShareArn,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResourceShare.resourceShareAssociations', props);
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
          resourceShareArn: this.input.resourceShareArn,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMAssociateResourceSharePermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamAssociateResourceSharePermissionRequest) {
    super(scope, id);
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
          resourceShareArn: this.input.resourceShareArn,
          permissionArn: this.input.permissionArn,
          replace: this.input.replace,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResourceSharePermission.returnValue', props);
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
          resourceShareArn: this.input.resourceShareArn,
          permissionArn: this.input.permissionArn,
          replace: this.input.replace,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResourceSharePermission.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMCreateResourceShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamCreateResourceShareRequest) {
    super(scope, id);
  }

  public get resourceShare(): RAMCreateResourceShareResourceShare {
    return new RAMCreateResourceShareResourceShare(this, 'ResourceShare', this.__resources, this.input);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMCreateResourceShareResourceShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamCreateResourceShareRequest) {
    super(scope, id);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.resourceShareArn', props);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.name', props);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.owningAccountId', props);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.allowExternalPrincipals', props);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.status', props);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.statusMessage', props);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.tags', props);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.creationTime', props);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.lastUpdatedTime', props);
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
          name: this.input.name,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          tags: this.input.tags,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
          permissionArns: this.input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceShare.resourceShare.featureSet', props);
    return resource.getResponseField('resourceShare.featureSet') as unknown as string;
  }

}

export class RAMDeleteResourceShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamDeleteResourceShareRequest) {
    super(scope, id);
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
          resourceShareArn: this.input.resourceShareArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResourceShare.returnValue', props);
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
          resourceShareArn: this.input.resourceShareArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMDisassociateResourceShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamDisassociateResourceShareRequest) {
    super(scope, id);
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
          resourceShareArn: this.input.resourceShareArn,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResourceShare.resourceShareAssociations', props);
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
          resourceShareArn: this.input.resourceShareArn,
          resourceArns: this.input.resourceArns,
          principals: this.input.principals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMDisassociateResourceSharePermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamDisassociateResourceSharePermissionRequest) {
    super(scope, id);
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
          resourceShareArn: this.input.resourceShareArn,
          permissionArn: this.input.permissionArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResourceSharePermission.returnValue', props);
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
          resourceShareArn: this.input.resourceShareArn,
          permissionArn: this.input.permissionArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResourceSharePermission.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMEnableSharingWithAwsOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'EnableSharingWithAwsOrganization.returnValue', props);
    return resource.getResponseField('returnValue') as unknown as boolean;
  }

}

export class RAMFetchPermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamGetPermissionRequest) {
    super(scope, id);
  }

  public get permission(): RAMFetchPermissionPermission {
    return new RAMFetchPermissionPermission(this, 'Permission', this.__resources, this.input);
  }

}

export class RAMFetchPermissionPermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamGetPermissionRequest) {
    super(scope, id);
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
          permissionArn: this.input.permissionArn,
          permissionVersion: this.input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermission.permission.arn', props);
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
          permissionArn: this.input.permissionArn,
          permissionVersion: this.input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermission.permission.version', props);
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
          permissionArn: this.input.permissionArn,
          permissionVersion: this.input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermission.permission.defaultVersion', props);
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
          permissionArn: this.input.permissionArn,
          permissionVersion: this.input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermission.permission.name', props);
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
          permissionArn: this.input.permissionArn,
          permissionVersion: this.input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermission.permission.resourceType', props);
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
          permissionArn: this.input.permissionArn,
          permissionVersion: this.input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermission.permission.permission', props);
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
          permissionArn: this.input.permissionArn,
          permissionVersion: this.input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermission.permission.creationTime', props);
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
          permissionArn: this.input.permissionArn,
          permissionVersion: this.input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermission.permission.lastUpdatedTime', props);
    return resource.getResponseField('permission.lastUpdatedTime') as unknown as string;
  }

}

export class RAMFetchResourcePolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamGetResourcePoliciesRequest) {
    super(scope, id);
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
          resourceArns: this.input.resourceArns,
          principal: this.input.principal,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicies.policies', props);
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
          resourceArns: this.input.resourceArns,
          principal: this.input.principal,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicies.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMFetchResourceShareAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamGetResourceShareAssociationsRequest) {
    super(scope, id);
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
          associationType: this.input.associationType,
          resourceShareArns: this.input.resourceShareArns,
          resourceArn: this.input.resourceArn,
          principal: this.input.principal,
          associationStatus: this.input.associationStatus,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceShareAssociations.resourceShareAssociations', props);
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
          associationType: this.input.associationType,
          resourceShareArns: this.input.resourceShareArns,
          resourceArn: this.input.resourceArn,
          principal: this.input.principal,
          associationStatus: this.input.associationStatus,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceShareAssociations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMFetchResourceShareInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamGetResourceShareInvitationsRequest) {
    super(scope, id);
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
          resourceShareInvitationArns: this.input.resourceShareInvitationArns,
          resourceShareArns: this.input.resourceShareArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceShareInvitations.resourceShareInvitations', props);
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
          resourceShareInvitationArns: this.input.resourceShareInvitationArns,
          resourceShareArns: this.input.resourceShareArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceShareInvitations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMFetchResourceShares extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamGetResourceSharesRequest) {
    super(scope, id);
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
          resourceShareArns: this.input.resourceShareArns,
          resourceShareStatus: this.input.resourceShareStatus,
          resourceOwner: this.input.resourceOwner,
          name: this.input.name,
          tagFilters: this.input.tagFilters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceShares.resourceShares', props);
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
          resourceShareArns: this.input.resourceShareArns,
          resourceShareStatus: this.input.resourceShareStatus,
          resourceOwner: this.input.resourceOwner,
          name: this.input.name,
          tagFilters: this.input.tagFilters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceShares.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMListPendingInvitationResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamListPendingInvitationResourcesRequest) {
    super(scope, id);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPendingInvitationResources.resources', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPendingInvitationResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMListPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamListPermissionsRequest) {
    super(scope, id);
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
          resourceType: this.input.resourceType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissions.permissions', props);
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
          resourceType: this.input.resourceType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMListPrincipals extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamListPrincipalsRequest) {
    super(scope, id);
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
          resourceOwner: this.input.resourceOwner,
          resourceArn: this.input.resourceArn,
          principals: this.input.principals,
          resourceType: this.input.resourceType,
          resourceShareArns: this.input.resourceShareArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrincipals.principals', props);
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
          resourceOwner: this.input.resourceOwner,
          resourceArn: this.input.resourceArn,
          principals: this.input.principals,
          resourceType: this.input.resourceType,
          resourceShareArns: this.input.resourceShareArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrincipals.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMListResourceSharePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamListResourceSharePermissionsRequest) {
    super(scope, id);
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
          resourceShareArn: this.input.resourceShareArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceSharePermissions.permissions', props);
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
          resourceShareArn: this.input.resourceShareArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceSharePermissions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMListResourceTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamListResourceTypesRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceTypes.resourceTypes', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMListResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamListResourcesRequest) {
    super(scope, id);
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
          resourceOwner: this.input.resourceOwner,
          principal: this.input.principal,
          resourceType: this.input.resourceType,
          resourceArns: this.input.resourceArns,
          resourceShareArns: this.input.resourceShareArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResources.resources', props);
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
          resourceOwner: this.input.resourceOwner,
          principal: this.input.principal,
          resourceType: this.input.resourceType,
          resourceArns: this.input.resourceArns,
          resourceShareArns: this.input.resourceShareArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMPromoteResourceShareCreatedFromPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamPromoteResourceShareCreatedFromPolicyRequest) {
    super(scope, id);
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
          resourceShareArn: this.input.resourceShareArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PromoteResourceShareCreatedFromPolicy.returnValue', props);
    return resource.getResponseField('returnValue') as unknown as boolean;
  }

}

export class RAMRejectResourceShareInvitation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamRejectResourceShareInvitationRequest) {
    super(scope, id);
  }

  public get resourceShareInvitation(): RAMRejectResourceShareInvitationResourceShareInvitation {
    return new RAMRejectResourceShareInvitationResourceShareInvitation(this, 'ResourceShareInvitation', this.__resources, this.input);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectResourceShareInvitation.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMRejectResourceShareInvitationResourceShareInvitation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamRejectResourceShareInvitationRequest) {
    super(scope, id);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectResourceShareInvitation.resourceShareInvitation.resourceShareInvitationArn', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectResourceShareInvitation.resourceShareInvitation.resourceShareName', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectResourceShareInvitation.resourceShareInvitation.resourceShareArn', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectResourceShareInvitation.resourceShareInvitation.senderAccountId', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectResourceShareInvitation.resourceShareInvitation.receiverAccountId', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectResourceShareInvitation.resourceShareInvitation.invitationTimestamp', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectResourceShareInvitation.resourceShareInvitation.status', props);
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
          resourceShareInvitationArn: this.input.resourceShareInvitationArn,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectResourceShareInvitation.resourceShareInvitation.resourceShareAssociations', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareAssociations') as unknown as shapes.RamResourceShareAssociation[];
  }

}

export class RAMUpdateResourceShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamUpdateResourceShareRequest) {
    super(scope, id);
  }

  public get resourceShare(): RAMUpdateResourceShareResourceShare {
    return new RAMUpdateResourceShareResourceShare(this, 'ResourceShare', this.__resources, this.input);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMUpdateResourceShareResourceShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RamUpdateResourceShareRequest) {
    super(scope, id);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.resourceShareArn', props);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.name', props);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.owningAccountId', props);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.allowExternalPrincipals', props);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.status', props);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.statusMessage', props);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.tags', props);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.creationTime', props);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.lastUpdatedTime', props);
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
          resourceShareArn: this.input.resourceShareArn,
          name: this.input.name,
          allowExternalPrincipals: this.input.allowExternalPrincipals,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResourceShare.resourceShare.featureSet', props);
    return resource.getResponseField('resourceShare.featureSet') as unknown as string;
  }

}

