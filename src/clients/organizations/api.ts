import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class OrganizationsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptHandshake(input: shapes.OrganizationsAcceptHandshakeRequest): OrganizationsResponsesAcceptHandshake {
    return new OrganizationsResponsesAcceptHandshake(this, this.__resources, input);
  }

  public attachPolicy(input: shapes.OrganizationsAttachPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.AttachPolicy'),
        parameters: {
          PolicyId: input.policyId,
          TargetId: input.targetId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachPolicy', props);
  }

  public cancelHandshake(input: shapes.OrganizationsCancelHandshakeRequest): OrganizationsResponsesCancelHandshake {
    return new OrganizationsResponsesCancelHandshake(this, this.__resources, input);
  }

  public createAccount(input: shapes.OrganizationsCreateAccountRequest): OrganizationsResponsesCreateAccount {
    return new OrganizationsResponsesCreateAccount(this, this.__resources, input);
  }

  public createGovCloudAccount(input: shapes.OrganizationsCreateGovCloudAccountRequest): OrganizationsResponsesCreateGovCloudAccount {
    return new OrganizationsResponsesCreateGovCloudAccount(this, this.__resources, input);
  }

  public createOrganization(input: shapes.OrganizationsCreateOrganizationRequest): OrganizationsResponsesCreateOrganization {
    return new OrganizationsResponsesCreateOrganization(this, this.__resources, input);
  }

  public createOrganizationalUnit(input: shapes.OrganizationsCreateOrganizationalUnitRequest): OrganizationsResponsesCreateOrganizationalUnit {
    return new OrganizationsResponsesCreateOrganizationalUnit(this, this.__resources, input);
  }

  public createPolicy(input: shapes.OrganizationsCreatePolicyRequest): OrganizationsResponsesCreatePolicy {
    return new OrganizationsResponsesCreatePolicy(this, this.__resources, input);
  }

  public declineHandshake(input: shapes.OrganizationsDeclineHandshakeRequest): OrganizationsResponsesDeclineHandshake {
    return new OrganizationsResponsesDeclineHandshake(this, this.__resources, input);
  }

  public deleteOrganization(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeleteOrganization'),
      },
    };
    new cr.AwsCustomResource(this, 'DeleteOrganization', props);
  }

  public deleteOrganizationalUnit(input: shapes.OrganizationsDeleteOrganizationalUnitRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeleteOrganizationalUnit'),
        parameters: {
          OrganizationalUnitId: input.organizationalUnitId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteOrganizationalUnit', props);
  }

  public deletePolicy(input: shapes.OrganizationsDeletePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeletePolicy'),
        parameters: {
          PolicyId: input.policyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePolicy', props);
  }

  public deregisterDelegatedAdministrator(input: shapes.OrganizationsDeregisterDelegatedAdministratorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterDelegatedAdministrator',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeregisterDelegatedAdministrator'),
        parameters: {
          AccountId: input.accountId,
          ServicePrincipal: input.servicePrincipal,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterDelegatedAdministrator', props);
  }

  public describeAccount(input: shapes.OrganizationsDescribeAccountRequest): OrganizationsResponsesDescribeAccount {
    return new OrganizationsResponsesDescribeAccount(this, this.__resources, input);
  }

  public describeCreateAccountStatus(input: shapes.OrganizationsDescribeCreateAccountStatusRequest): OrganizationsResponsesDescribeCreateAccountStatus {
    return new OrganizationsResponsesDescribeCreateAccountStatus(this, this.__resources, input);
  }

  public describeEffectivePolicy(input: shapes.OrganizationsDescribeEffectivePolicyRequest): OrganizationsResponsesDescribeEffectivePolicy {
    return new OrganizationsResponsesDescribeEffectivePolicy(this, this.__resources, input);
  }

  public describeHandshake(input: shapes.OrganizationsDescribeHandshakeRequest): OrganizationsResponsesDescribeHandshake {
    return new OrganizationsResponsesDescribeHandshake(this, this.__resources, input);
  }

  public describeOrganization(): OrganizationsResponsesDescribeOrganization {
    return new OrganizationsResponsesDescribeOrganization(this, this.__resources);
  }

  public describeOrganizationalUnit(input: shapes.OrganizationsDescribeOrganizationalUnitRequest): OrganizationsResponsesDescribeOrganizationalUnit {
    return new OrganizationsResponsesDescribeOrganizationalUnit(this, this.__resources, input);
  }

  public describePolicy(input: shapes.OrganizationsDescribePolicyRequest): OrganizationsResponsesDescribePolicy {
    return new OrganizationsResponsesDescribePolicy(this, this.__resources, input);
  }

  public detachPolicy(input: shapes.OrganizationsDetachPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DetachPolicy'),
        parameters: {
          PolicyId: input.policyId,
          TargetId: input.targetId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachPolicy', props);
  }

  public disableAwsServiceAccess(input: shapes.OrganizationsDisableAwsServiceAccessRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableAwsServiceAccess',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DisableAWSServiceAccess'),
        parameters: {
          ServicePrincipal: input.servicePrincipal,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableAWSServiceAccess', props);
  }

  public disablePolicyType(input: shapes.OrganizationsDisablePolicyTypeRequest): OrganizationsResponsesDisablePolicyType {
    return new OrganizationsResponsesDisablePolicyType(this, this.__resources, input);
  }

  public enableAwsServiceAccess(input: shapes.OrganizationsEnableAwsServiceAccessRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAwsServiceAccess',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnableAWSServiceAccess'),
        parameters: {
          ServicePrincipal: input.servicePrincipal,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableAWSServiceAccess', props);
  }

  public enableAllFeatures(): OrganizationsResponsesEnableAllFeatures {
    return new OrganizationsResponsesEnableAllFeatures(this, this.__resources);
  }

  public enablePolicyType(input: shapes.OrganizationsEnablePolicyTypeRequest): OrganizationsResponsesEnablePolicyType {
    return new OrganizationsResponsesEnablePolicyType(this, this.__resources, input);
  }

  public inviteAccountToOrganization(input: shapes.OrganizationsInviteAccountToOrganizationRequest): OrganizationsResponsesInviteAccountToOrganization {
    return new OrganizationsResponsesInviteAccountToOrganization(this, this.__resources, input);
  }

  public leaveOrganization(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'leaveOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.LeaveOrganization'),
      },
    };
    new cr.AwsCustomResource(this, 'LeaveOrganization', props);
  }

  public listAwsServiceAccessForOrganization(input: shapes.OrganizationsListAwsServiceAccessForOrganizationRequest): OrganizationsResponsesListAwsServiceAccessForOrganization {
    return new OrganizationsResponsesListAwsServiceAccessForOrganization(this, this.__resources, input);
  }

  public listAccounts(input: shapes.OrganizationsListAccountsRequest): OrganizationsResponsesListAccounts {
    return new OrganizationsResponsesListAccounts(this, this.__resources, input);
  }

  public listAccountsForParent(input: shapes.OrganizationsListAccountsForParentRequest): OrganizationsResponsesListAccountsForParent {
    return new OrganizationsResponsesListAccountsForParent(this, this.__resources, input);
  }

  public listChildren(input: shapes.OrganizationsListChildrenRequest): OrganizationsResponsesListChildren {
    return new OrganizationsResponsesListChildren(this, this.__resources, input);
  }

  public listCreateAccountStatus(input: shapes.OrganizationsListCreateAccountStatusRequest): OrganizationsResponsesListCreateAccountStatus {
    return new OrganizationsResponsesListCreateAccountStatus(this, this.__resources, input);
  }

  public listDelegatedAdministrators(input: shapes.OrganizationsListDelegatedAdministratorsRequest): OrganizationsResponsesListDelegatedAdministrators {
    return new OrganizationsResponsesListDelegatedAdministrators(this, this.__resources, input);
  }

  public listDelegatedServicesForAccount(input: shapes.OrganizationsListDelegatedServicesForAccountRequest): OrganizationsResponsesListDelegatedServicesForAccount {
    return new OrganizationsResponsesListDelegatedServicesForAccount(this, this.__resources, input);
  }

  public listHandshakesForAccount(input: shapes.OrganizationsListHandshakesForAccountRequest): OrganizationsResponsesListHandshakesForAccount {
    return new OrganizationsResponsesListHandshakesForAccount(this, this.__resources, input);
  }

  public listHandshakesForOrganization(input: shapes.OrganizationsListHandshakesForOrganizationRequest): OrganizationsResponsesListHandshakesForOrganization {
    return new OrganizationsResponsesListHandshakesForOrganization(this, this.__resources, input);
  }

  public listOrganizationalUnitsForParent(input: shapes.OrganizationsListOrganizationalUnitsForParentRequest): OrganizationsResponsesListOrganizationalUnitsForParent {
    return new OrganizationsResponsesListOrganizationalUnitsForParent(this, this.__resources, input);
  }

  public listParents(input: shapes.OrganizationsListParentsRequest): OrganizationsResponsesListParents {
    return new OrganizationsResponsesListParents(this, this.__resources, input);
  }

  public listPolicies(input: shapes.OrganizationsListPoliciesRequest): OrganizationsResponsesListPolicies {
    return new OrganizationsResponsesListPolicies(this, this.__resources, input);
  }

  public listPoliciesForTarget(input: shapes.OrganizationsListPoliciesForTargetRequest): OrganizationsResponsesListPoliciesForTarget {
    return new OrganizationsResponsesListPoliciesForTarget(this, this.__resources, input);
  }

  public listRoots(input: shapes.OrganizationsListRootsRequest): OrganizationsResponsesListRoots {
    return new OrganizationsResponsesListRoots(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.OrganizationsListTagsForResourceRequest): OrganizationsResponsesListTagsForResource {
    return new OrganizationsResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTargetsForPolicy(input: shapes.OrganizationsListTargetsForPolicyRequest): OrganizationsResponsesListTargetsForPolicy {
    return new OrganizationsResponsesListTargetsForPolicy(this, this.__resources, input);
  }

  public moveAccount(input: shapes.OrganizationsMoveAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'moveAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.MoveAccount'),
        parameters: {
          AccountId: input.accountId,
          SourceParentId: input.sourceParentId,
          DestinationParentId: input.destinationParentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'MoveAccount', props);
  }

  public registerDelegatedAdministrator(input: shapes.OrganizationsRegisterDelegatedAdministratorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerDelegatedAdministrator',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.RegisterDelegatedAdministrator'),
        parameters: {
          AccountId: input.accountId,
          ServicePrincipal: input.servicePrincipal,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterDelegatedAdministrator', props);
  }

  public removeAccountFromOrganization(input: shapes.OrganizationsRemoveAccountFromOrganizationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeAccountFromOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.RemoveAccountFromOrganization'),
        parameters: {
          AccountId: input.accountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveAccountFromOrganization', props);
  }

  public tagResource(input: shapes.OrganizationsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.TagResource'),
        parameters: {
          ResourceId: input.resourceId,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.OrganizationsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UntagResource'),
        parameters: {
          ResourceId: input.resourceId,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateOrganizationalUnit(input: shapes.OrganizationsUpdateOrganizationalUnitRequest): OrganizationsResponsesUpdateOrganizationalUnit {
    return new OrganizationsResponsesUpdateOrganizationalUnit(this, this.__resources, input);
  }

  public updatePolicy(input: shapes.OrganizationsUpdatePolicyRequest): OrganizationsResponsesUpdatePolicy {
    return new OrganizationsResponsesUpdatePolicy(this, this.__resources, input);
  }

}

export class OrganizationsResponsesAcceptHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsAcceptHandshakeRequest) {
  }

  public get handshake(): OrganizationsResponsesAcceptHandshakeHandshake {
    return new OrganizationsResponsesAcceptHandshakeHandshake(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesAcceptHandshakeHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsAcceptHandshakeRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.AcceptHandshake.Handshake.Id'),
        outputPath: 'Handshake.Id',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptHandshake.Handshake.Id', props);
    return resource.getResponseField('Handshake.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.AcceptHandshake.Handshake.Arn'),
        outputPath: 'Handshake.Arn',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptHandshake.Handshake.Arn', props);
    return resource.getResponseField('Handshake.Arn') as unknown as string;
  }

  public get parties(): shapes.OrganizationsHandshakeParty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.AcceptHandshake.Handshake.Parties'),
        outputPath: 'Handshake.Parties',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptHandshake.Handshake.Parties', props);
    return resource.getResponseField('Handshake.Parties') as unknown as shapes.OrganizationsHandshakeParty[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.AcceptHandshake.Handshake.State'),
        outputPath: 'Handshake.State',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptHandshake.Handshake.State', props);
    return resource.getResponseField('Handshake.State') as unknown as string;
  }

  public get requestedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.AcceptHandshake.Handshake.RequestedTimestamp'),
        outputPath: 'Handshake.RequestedTimestamp',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptHandshake.Handshake.RequestedTimestamp', props);
    return resource.getResponseField('Handshake.RequestedTimestamp') as unknown as string;
  }

  public get expirationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.AcceptHandshake.Handshake.ExpirationTimestamp'),
        outputPath: 'Handshake.ExpirationTimestamp',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptHandshake.Handshake.ExpirationTimestamp', props);
    return resource.getResponseField('Handshake.ExpirationTimestamp') as unknown as string;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.AcceptHandshake.Handshake.Action'),
        outputPath: 'Handshake.Action',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptHandshake.Handshake.Action', props);
    return resource.getResponseField('Handshake.Action') as unknown as string;
  }

  public get resources(): shapes.OrganizationsHandshakeResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.AcceptHandshake.Handshake.Resources'),
        outputPath: 'Handshake.Resources',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptHandshake.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsResponsesCancelHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCancelHandshakeRequest) {
  }

  public get handshake(): OrganizationsResponsesCancelHandshakeHandshake {
    return new OrganizationsResponsesCancelHandshakeHandshake(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesCancelHandshakeHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCancelHandshakeRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CancelHandshake.Handshake.Id'),
        outputPath: 'Handshake.Id',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelHandshake.Handshake.Id', props);
    return resource.getResponseField('Handshake.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CancelHandshake.Handshake.Arn'),
        outputPath: 'Handshake.Arn',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelHandshake.Handshake.Arn', props);
    return resource.getResponseField('Handshake.Arn') as unknown as string;
  }

  public get parties(): shapes.OrganizationsHandshakeParty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CancelHandshake.Handshake.Parties'),
        outputPath: 'Handshake.Parties',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelHandshake.Handshake.Parties', props);
    return resource.getResponseField('Handshake.Parties') as unknown as shapes.OrganizationsHandshakeParty[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CancelHandshake.Handshake.State'),
        outputPath: 'Handshake.State',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelHandshake.Handshake.State', props);
    return resource.getResponseField('Handshake.State') as unknown as string;
  }

  public get requestedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CancelHandshake.Handshake.RequestedTimestamp'),
        outputPath: 'Handshake.RequestedTimestamp',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelHandshake.Handshake.RequestedTimestamp', props);
    return resource.getResponseField('Handshake.RequestedTimestamp') as unknown as string;
  }

  public get expirationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CancelHandshake.Handshake.ExpirationTimestamp'),
        outputPath: 'Handshake.ExpirationTimestamp',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelHandshake.Handshake.ExpirationTimestamp', props);
    return resource.getResponseField('Handshake.ExpirationTimestamp') as unknown as string;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CancelHandshake.Handshake.Action'),
        outputPath: 'Handshake.Action',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelHandshake.Handshake.Action', props);
    return resource.getResponseField('Handshake.Action') as unknown as string;
  }

  public get resources(): shapes.OrganizationsHandshakeResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CancelHandshake.Handshake.Resources'),
        outputPath: 'Handshake.Resources',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelHandshake.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsResponsesCreateAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreateAccountRequest) {
  }

  public get createAccountStatus(): OrganizationsResponsesCreateAccountCreateAccountStatus {
    return new OrganizationsResponsesCreateAccountCreateAccountStatus(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesCreateAccountCreateAccountStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreateAccountRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateAccount.CreateAccountStatus.Id'),
        outputPath: 'CreateAccountStatus.Id',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.CreateAccountStatus.Id', props);
    return resource.getResponseField('CreateAccountStatus.Id') as unknown as string;
  }

  public get accountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateAccount.CreateAccountStatus.AccountName'),
        outputPath: 'CreateAccountStatus.AccountName',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.CreateAccountStatus.AccountName', props);
    return resource.getResponseField('CreateAccountStatus.AccountName') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateAccount.CreateAccountStatus.State'),
        outputPath: 'CreateAccountStatus.State',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.CreateAccountStatus.State', props);
    return resource.getResponseField('CreateAccountStatus.State') as unknown as string;
  }

  public get requestedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateAccount.CreateAccountStatus.RequestedTimestamp'),
        outputPath: 'CreateAccountStatus.RequestedTimestamp',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.CreateAccountStatus.RequestedTimestamp', props);
    return resource.getResponseField('CreateAccountStatus.RequestedTimestamp') as unknown as string;
  }

  public get completedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateAccount.CreateAccountStatus.CompletedTimestamp'),
        outputPath: 'CreateAccountStatus.CompletedTimestamp',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.CreateAccountStatus.CompletedTimestamp', props);
    return resource.getResponseField('CreateAccountStatus.CompletedTimestamp') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateAccount.CreateAccountStatus.AccountId'),
        outputPath: 'CreateAccountStatus.AccountId',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.CreateAccountStatus.AccountId', props);
    return resource.getResponseField('CreateAccountStatus.AccountId') as unknown as string;
  }

  public get govCloudAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateAccount.CreateAccountStatus.GovCloudAccountId'),
        outputPath: 'CreateAccountStatus.GovCloudAccountId',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.CreateAccountStatus.GovCloudAccountId', props);
    return resource.getResponseField('CreateAccountStatus.GovCloudAccountId') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateAccount.CreateAccountStatus.FailureReason'),
        outputPath: 'CreateAccountStatus.FailureReason',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccount.CreateAccountStatus.FailureReason', props);
    return resource.getResponseField('CreateAccountStatus.FailureReason') as unknown as string;
  }

}

export class OrganizationsResponsesCreateGovCloudAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreateGovCloudAccountRequest) {
  }

  public get createAccountStatus(): OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus {
    return new OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesCreateGovCloudAccountCreateAccountStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreateGovCloudAccountRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGovCloudAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateGovCloudAccount.CreateAccountStatus.Id'),
        outputPath: 'CreateAccountStatus.Id',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGovCloudAccount.CreateAccountStatus.Id', props);
    return resource.getResponseField('CreateAccountStatus.Id') as unknown as string;
  }

  public get accountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGovCloudAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateGovCloudAccount.CreateAccountStatus.AccountName'),
        outputPath: 'CreateAccountStatus.AccountName',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGovCloudAccount.CreateAccountStatus.AccountName', props);
    return resource.getResponseField('CreateAccountStatus.AccountName') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGovCloudAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateGovCloudAccount.CreateAccountStatus.State'),
        outputPath: 'CreateAccountStatus.State',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGovCloudAccount.CreateAccountStatus.State', props);
    return resource.getResponseField('CreateAccountStatus.State') as unknown as string;
  }

  public get requestedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGovCloudAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateGovCloudAccount.CreateAccountStatus.RequestedTimestamp'),
        outputPath: 'CreateAccountStatus.RequestedTimestamp',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGovCloudAccount.CreateAccountStatus.RequestedTimestamp', props);
    return resource.getResponseField('CreateAccountStatus.RequestedTimestamp') as unknown as string;
  }

  public get completedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGovCloudAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateGovCloudAccount.CreateAccountStatus.CompletedTimestamp'),
        outputPath: 'CreateAccountStatus.CompletedTimestamp',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGovCloudAccount.CreateAccountStatus.CompletedTimestamp', props);
    return resource.getResponseField('CreateAccountStatus.CompletedTimestamp') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGovCloudAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateGovCloudAccount.CreateAccountStatus.AccountId'),
        outputPath: 'CreateAccountStatus.AccountId',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGovCloudAccount.CreateAccountStatus.AccountId', props);
    return resource.getResponseField('CreateAccountStatus.AccountId') as unknown as string;
  }

  public get govCloudAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGovCloudAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateGovCloudAccount.CreateAccountStatus.GovCloudAccountId'),
        outputPath: 'CreateAccountStatus.GovCloudAccountId',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGovCloudAccount.CreateAccountStatus.GovCloudAccountId', props);
    return resource.getResponseField('CreateAccountStatus.GovCloudAccountId') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGovCloudAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateGovCloudAccount.CreateAccountStatus.FailureReason'),
        outputPath: 'CreateAccountStatus.FailureReason',
        parameters: {
          Email: this.__input.email,
          AccountName: this.__input.accountName,
          RoleName: this.__input.roleName,
          IamUserAccessToBilling: this.__input.iamUserAccessToBilling,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGovCloudAccount.CreateAccountStatus.FailureReason', props);
    return resource.getResponseField('CreateAccountStatus.FailureReason') as unknown as string;
  }

}

export class OrganizationsResponsesCreateOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreateOrganizationRequest) {
  }

  public get organization(): OrganizationsResponsesCreateOrganizationOrganization {
    return new OrganizationsResponsesCreateOrganizationOrganization(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesCreateOrganizationOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreateOrganizationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganization.Organization.Id'),
        outputPath: 'Organization.Id',
        parameters: {
          FeatureSet: this.__input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganization.Organization.Id', props);
    return resource.getResponseField('Organization.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganization.Organization.Arn'),
        outputPath: 'Organization.Arn',
        parameters: {
          FeatureSet: this.__input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganization.Organization.Arn', props);
    return resource.getResponseField('Organization.Arn') as unknown as string;
  }

  public get featureSet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganization.Organization.FeatureSet'),
        outputPath: 'Organization.FeatureSet',
        parameters: {
          FeatureSet: this.__input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganization.Organization.FeatureSet', props);
    return resource.getResponseField('Organization.FeatureSet') as unknown as string;
  }

  public get masterAccountArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganization.Organization.MasterAccountArn'),
        outputPath: 'Organization.MasterAccountArn',
        parameters: {
          FeatureSet: this.__input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganization.Organization.MasterAccountArn', props);
    return resource.getResponseField('Organization.MasterAccountArn') as unknown as string;
  }

  public get masterAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganization.Organization.MasterAccountId'),
        outputPath: 'Organization.MasterAccountId',
        parameters: {
          FeatureSet: this.__input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganization.Organization.MasterAccountId', props);
    return resource.getResponseField('Organization.MasterAccountId') as unknown as string;
  }

  public get masterAccountEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganization.Organization.MasterAccountEmail'),
        outputPath: 'Organization.MasterAccountEmail',
        parameters: {
          FeatureSet: this.__input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganization.Organization.MasterAccountEmail', props);
    return resource.getResponseField('Organization.MasterAccountEmail') as unknown as string;
  }

  public get availablePolicyTypes(): shapes.OrganizationsPolicyTypeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganization.Organization.AvailablePolicyTypes'),
        outputPath: 'Organization.AvailablePolicyTypes',
        parameters: {
          FeatureSet: this.__input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganization.Organization.AvailablePolicyTypes', props);
    return resource.getResponseField('Organization.AvailablePolicyTypes') as unknown as shapes.OrganizationsPolicyTypeSummary[];
  }

}

export class OrganizationsResponsesCreateOrganizationalUnit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreateOrganizationalUnitRequest) {
  }

  public get organizationalUnit(): OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit {
    return new OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesCreateOrganizationalUnitOrganizationalUnit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreateOrganizationalUnitRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganizationalUnit.OrganizationalUnit.Id'),
        outputPath: 'OrganizationalUnit.Id',
        parameters: {
          ParentId: this.__input.parentId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganizationalUnit.OrganizationalUnit.Id', props);
    return resource.getResponseField('OrganizationalUnit.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganizationalUnit.OrganizationalUnit.Arn'),
        outputPath: 'OrganizationalUnit.Arn',
        parameters: {
          ParentId: this.__input.parentId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganizationalUnit.OrganizationalUnit.Arn', props);
    return resource.getResponseField('OrganizationalUnit.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreateOrganizationalUnit.OrganizationalUnit.Name'),
        outputPath: 'OrganizationalUnit.Name',
        parameters: {
          ParentId: this.__input.parentId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganizationalUnit.OrganizationalUnit.Name', props);
    return resource.getResponseField('OrganizationalUnit.Name') as unknown as string;
  }

}

export class OrganizationsResponsesCreatePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreatePolicyRequest) {
  }

  public get policy(): OrganizationsResponsesCreatePolicyPolicy {
    return new OrganizationsResponsesCreatePolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesCreatePolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreatePolicyRequest) {
  }

  public get policySummary(): OrganizationsResponsesCreatePolicyPolicyPolicySummary {
    return new OrganizationsResponsesCreatePolicyPolicyPolicySummary(this.__scope, this.__resources, this.__input);
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreatePolicy.Policy.Content'),
        outputPath: 'Policy.Content',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          Name: this.__input.name,
          Type: this.__input.type,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.Content', props);
    return resource.getResponseField('Policy.Content') as unknown as string;
  }

}

export class OrganizationsResponsesCreatePolicyPolicyPolicySummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsCreatePolicyRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreatePolicy.Policy.PolicySummary.Id'),
        outputPath: 'Policy.PolicySummary.Id',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          Name: this.__input.name,
          Type: this.__input.type,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.PolicySummary.Id', props);
    return resource.getResponseField('Policy.PolicySummary.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreatePolicy.Policy.PolicySummary.Arn'),
        outputPath: 'Policy.PolicySummary.Arn',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          Name: this.__input.name,
          Type: this.__input.type,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.PolicySummary.Arn', props);
    return resource.getResponseField('Policy.PolicySummary.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreatePolicy.Policy.PolicySummary.Name'),
        outputPath: 'Policy.PolicySummary.Name',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          Name: this.__input.name,
          Type: this.__input.type,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.PolicySummary.Name', props);
    return resource.getResponseField('Policy.PolicySummary.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreatePolicy.Policy.PolicySummary.Description'),
        outputPath: 'Policy.PolicySummary.Description',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          Name: this.__input.name,
          Type: this.__input.type,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.PolicySummary.Description', props);
    return resource.getResponseField('Policy.PolicySummary.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreatePolicy.Policy.PolicySummary.Type'),
        outputPath: 'Policy.PolicySummary.Type',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          Name: this.__input.name,
          Type: this.__input.type,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.PolicySummary.Type', props);
    return resource.getResponseField('Policy.PolicySummary.Type') as unknown as string;
  }

  public get awsManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.CreatePolicy.Policy.PolicySummary.AwsManaged'),
        outputPath: 'Policy.PolicySummary.AwsManaged',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          Name: this.__input.name,
          Type: this.__input.type,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.PolicySummary.AwsManaged', props);
    return resource.getResponseField('Policy.PolicySummary.AwsManaged') as unknown as boolean;
  }

}

export class OrganizationsResponsesDeclineHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDeclineHandshakeRequest) {
  }

  public get handshake(): OrganizationsResponsesDeclineHandshakeHandshake {
    return new OrganizationsResponsesDeclineHandshakeHandshake(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesDeclineHandshakeHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDeclineHandshakeRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeclineHandshake.Handshake.Id'),
        outputPath: 'Handshake.Id',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineHandshake.Handshake.Id', props);
    return resource.getResponseField('Handshake.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeclineHandshake.Handshake.Arn'),
        outputPath: 'Handshake.Arn',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineHandshake.Handshake.Arn', props);
    return resource.getResponseField('Handshake.Arn') as unknown as string;
  }

  public get parties(): shapes.OrganizationsHandshakeParty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeclineHandshake.Handshake.Parties'),
        outputPath: 'Handshake.Parties',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineHandshake.Handshake.Parties', props);
    return resource.getResponseField('Handshake.Parties') as unknown as shapes.OrganizationsHandshakeParty[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeclineHandshake.Handshake.State'),
        outputPath: 'Handshake.State',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineHandshake.Handshake.State', props);
    return resource.getResponseField('Handshake.State') as unknown as string;
  }

  public get requestedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeclineHandshake.Handshake.RequestedTimestamp'),
        outputPath: 'Handshake.RequestedTimestamp',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineHandshake.Handshake.RequestedTimestamp', props);
    return resource.getResponseField('Handshake.RequestedTimestamp') as unknown as string;
  }

  public get expirationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeclineHandshake.Handshake.ExpirationTimestamp'),
        outputPath: 'Handshake.ExpirationTimestamp',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineHandshake.Handshake.ExpirationTimestamp', props);
    return resource.getResponseField('Handshake.ExpirationTimestamp') as unknown as string;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeclineHandshake.Handshake.Action'),
        outputPath: 'Handshake.Action',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineHandshake.Handshake.Action', props);
    return resource.getResponseField('Handshake.Action') as unknown as string;
  }

  public get resources(): shapes.OrganizationsHandshakeResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'declineHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DeclineHandshake.Handshake.Resources'),
        outputPath: 'Handshake.Resources',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeclineHandshake.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsResponsesDescribeAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeAccountRequest) {
  }

  public get account(): OrganizationsResponsesDescribeAccountAccount {
    return new OrganizationsResponsesDescribeAccountAccount(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesDescribeAccountAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeAccountRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeAccount.Account.Id'),
        outputPath: 'Account.Id',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccount.Account.Id', props);
    return resource.getResponseField('Account.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeAccount.Account.Arn'),
        outputPath: 'Account.Arn',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccount.Account.Arn', props);
    return resource.getResponseField('Account.Arn') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeAccount.Account.Email'),
        outputPath: 'Account.Email',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccount.Account.Email', props);
    return resource.getResponseField('Account.Email') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeAccount.Account.Name'),
        outputPath: 'Account.Name',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccount.Account.Name', props);
    return resource.getResponseField('Account.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeAccount.Account.Status'),
        outputPath: 'Account.Status',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccount.Account.Status', props);
    return resource.getResponseField('Account.Status') as unknown as string;
  }

  public get joinedMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeAccount.Account.JoinedMethod'),
        outputPath: 'Account.JoinedMethod',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccount.Account.JoinedMethod', props);
    return resource.getResponseField('Account.JoinedMethod') as unknown as string;
  }

  public get joinedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeAccount.Account.JoinedTimestamp'),
        outputPath: 'Account.JoinedTimestamp',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccount.Account.JoinedTimestamp', props);
    return resource.getResponseField('Account.JoinedTimestamp') as unknown as string;
  }

}

export class OrganizationsResponsesDescribeCreateAccountStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeCreateAccountStatusRequest) {
  }

  public get createAccountStatus(): OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus {
    return new OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesDescribeCreateAccountStatusCreateAccountStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeCreateAccountStatusRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeCreateAccountStatus.CreateAccountStatus.Id'),
        outputPath: 'CreateAccountStatus.Id',
        parameters: {
          CreateAccountRequestId: this.__input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCreateAccountStatus.CreateAccountStatus.Id', props);
    return resource.getResponseField('CreateAccountStatus.Id') as unknown as string;
  }

  public get accountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeCreateAccountStatus.CreateAccountStatus.AccountName'),
        outputPath: 'CreateAccountStatus.AccountName',
        parameters: {
          CreateAccountRequestId: this.__input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCreateAccountStatus.CreateAccountStatus.AccountName', props);
    return resource.getResponseField('CreateAccountStatus.AccountName') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeCreateAccountStatus.CreateAccountStatus.State'),
        outputPath: 'CreateAccountStatus.State',
        parameters: {
          CreateAccountRequestId: this.__input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCreateAccountStatus.CreateAccountStatus.State', props);
    return resource.getResponseField('CreateAccountStatus.State') as unknown as string;
  }

  public get requestedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeCreateAccountStatus.CreateAccountStatus.RequestedTimestamp'),
        outputPath: 'CreateAccountStatus.RequestedTimestamp',
        parameters: {
          CreateAccountRequestId: this.__input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCreateAccountStatus.CreateAccountStatus.RequestedTimestamp', props);
    return resource.getResponseField('CreateAccountStatus.RequestedTimestamp') as unknown as string;
  }

  public get completedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeCreateAccountStatus.CreateAccountStatus.CompletedTimestamp'),
        outputPath: 'CreateAccountStatus.CompletedTimestamp',
        parameters: {
          CreateAccountRequestId: this.__input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCreateAccountStatus.CreateAccountStatus.CompletedTimestamp', props);
    return resource.getResponseField('CreateAccountStatus.CompletedTimestamp') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeCreateAccountStatus.CreateAccountStatus.AccountId'),
        outputPath: 'CreateAccountStatus.AccountId',
        parameters: {
          CreateAccountRequestId: this.__input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCreateAccountStatus.CreateAccountStatus.AccountId', props);
    return resource.getResponseField('CreateAccountStatus.AccountId') as unknown as string;
  }

  public get govCloudAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeCreateAccountStatus.CreateAccountStatus.GovCloudAccountId'),
        outputPath: 'CreateAccountStatus.GovCloudAccountId',
        parameters: {
          CreateAccountRequestId: this.__input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCreateAccountStatus.CreateAccountStatus.GovCloudAccountId', props);
    return resource.getResponseField('CreateAccountStatus.GovCloudAccountId') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeCreateAccountStatus.CreateAccountStatus.FailureReason'),
        outputPath: 'CreateAccountStatus.FailureReason',
        parameters: {
          CreateAccountRequestId: this.__input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCreateAccountStatus.CreateAccountStatus.FailureReason', props);
    return resource.getResponseField('CreateAccountStatus.FailureReason') as unknown as string;
  }

}

export class OrganizationsResponsesDescribeEffectivePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeEffectivePolicyRequest) {
  }

  public get effectivePolicy(): OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy {
    return new OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesDescribeEffectivePolicyEffectivePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeEffectivePolicyRequest) {
  }

  public get policyContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEffectivePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeEffectivePolicy.EffectivePolicy.PolicyContent'),
        outputPath: 'EffectivePolicy.PolicyContent',
        parameters: {
          PolicyType: this.__input.policyType,
          TargetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEffectivePolicy.EffectivePolicy.PolicyContent', props);
    return resource.getResponseField('EffectivePolicy.PolicyContent') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEffectivePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeEffectivePolicy.EffectivePolicy.LastUpdatedTimestamp'),
        outputPath: 'EffectivePolicy.LastUpdatedTimestamp',
        parameters: {
          PolicyType: this.__input.policyType,
          TargetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEffectivePolicy.EffectivePolicy.LastUpdatedTimestamp', props);
    return resource.getResponseField('EffectivePolicy.LastUpdatedTimestamp') as unknown as string;
  }

  public get targetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEffectivePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeEffectivePolicy.EffectivePolicy.TargetId'),
        outputPath: 'EffectivePolicy.TargetId',
        parameters: {
          PolicyType: this.__input.policyType,
          TargetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEffectivePolicy.EffectivePolicy.TargetId', props);
    return resource.getResponseField('EffectivePolicy.TargetId') as unknown as string;
  }

  public get policyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEffectivePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeEffectivePolicy.EffectivePolicy.PolicyType'),
        outputPath: 'EffectivePolicy.PolicyType',
        parameters: {
          PolicyType: this.__input.policyType,
          TargetId: this.__input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEffectivePolicy.EffectivePolicy.PolicyType', props);
    return resource.getResponseField('EffectivePolicy.PolicyType') as unknown as string;
  }

}

export class OrganizationsResponsesDescribeHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeHandshakeRequest) {
  }

  public get handshake(): OrganizationsResponsesDescribeHandshakeHandshake {
    return new OrganizationsResponsesDescribeHandshakeHandshake(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesDescribeHandshakeHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeHandshakeRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeHandshake.Handshake.Id'),
        outputPath: 'Handshake.Id',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHandshake.Handshake.Id', props);
    return resource.getResponseField('Handshake.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeHandshake.Handshake.Arn'),
        outputPath: 'Handshake.Arn',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHandshake.Handshake.Arn', props);
    return resource.getResponseField('Handshake.Arn') as unknown as string;
  }

  public get parties(): shapes.OrganizationsHandshakeParty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeHandshake.Handshake.Parties'),
        outputPath: 'Handshake.Parties',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHandshake.Handshake.Parties', props);
    return resource.getResponseField('Handshake.Parties') as unknown as shapes.OrganizationsHandshakeParty[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeHandshake.Handshake.State'),
        outputPath: 'Handshake.State',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHandshake.Handshake.State', props);
    return resource.getResponseField('Handshake.State') as unknown as string;
  }

  public get requestedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeHandshake.Handshake.RequestedTimestamp'),
        outputPath: 'Handshake.RequestedTimestamp',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHandshake.Handshake.RequestedTimestamp', props);
    return resource.getResponseField('Handshake.RequestedTimestamp') as unknown as string;
  }

  public get expirationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeHandshake.Handshake.ExpirationTimestamp'),
        outputPath: 'Handshake.ExpirationTimestamp',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHandshake.Handshake.ExpirationTimestamp', props);
    return resource.getResponseField('Handshake.ExpirationTimestamp') as unknown as string;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeHandshake.Handshake.Action'),
        outputPath: 'Handshake.Action',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHandshake.Handshake.Action', props);
    return resource.getResponseField('Handshake.Action') as unknown as string;
  }

  public get resources(): shapes.OrganizationsHandshakeResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHandshake',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeHandshake.Handshake.Resources'),
        outputPath: 'Handshake.Resources',
        parameters: {
          HandshakeId: this.__input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHandshake.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsResponsesDescribeOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get organization(): OrganizationsResponsesDescribeOrganizationOrganization {
    return new OrganizationsResponsesDescribeOrganizationOrganization(this.__scope, this.__resources);
  }

}

export class OrganizationsResponsesDescribeOrganizationOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganization.Organization.Id'),
        outputPath: 'Organization.Id',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.Organization.Id', props);
    return resource.getResponseField('Organization.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganization.Organization.Arn'),
        outputPath: 'Organization.Arn',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.Organization.Arn', props);
    return resource.getResponseField('Organization.Arn') as unknown as string;
  }

  public get featureSet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganization.Organization.FeatureSet'),
        outputPath: 'Organization.FeatureSet',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.Organization.FeatureSet', props);
    return resource.getResponseField('Organization.FeatureSet') as unknown as string;
  }

  public get masterAccountArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganization.Organization.MasterAccountArn'),
        outputPath: 'Organization.MasterAccountArn',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.Organization.MasterAccountArn', props);
    return resource.getResponseField('Organization.MasterAccountArn') as unknown as string;
  }

  public get masterAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganization.Organization.MasterAccountId'),
        outputPath: 'Organization.MasterAccountId',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.Organization.MasterAccountId', props);
    return resource.getResponseField('Organization.MasterAccountId') as unknown as string;
  }

  public get masterAccountEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganization.Organization.MasterAccountEmail'),
        outputPath: 'Organization.MasterAccountEmail',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.Organization.MasterAccountEmail', props);
    return resource.getResponseField('Organization.MasterAccountEmail') as unknown as string;
  }

  public get availablePolicyTypes(): shapes.OrganizationsPolicyTypeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganization.Organization.AvailablePolicyTypes'),
        outputPath: 'Organization.AvailablePolicyTypes',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.Organization.AvailablePolicyTypes', props);
    return resource.getResponseField('Organization.AvailablePolicyTypes') as unknown as shapes.OrganizationsPolicyTypeSummary[];
  }

}

export class OrganizationsResponsesDescribeOrganizationalUnit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeOrganizationalUnitRequest) {
  }

  public get organizationalUnit(): OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit {
    return new OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesDescribeOrganizationalUnitOrganizationalUnit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribeOrganizationalUnitRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganizationalUnit.OrganizationalUnit.Id'),
        outputPath: 'OrganizationalUnit.Id',
        parameters: {
          OrganizationalUnitId: this.__input.organizationalUnitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationalUnit.OrganizationalUnit.Id', props);
    return resource.getResponseField('OrganizationalUnit.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganizationalUnit.OrganizationalUnit.Arn'),
        outputPath: 'OrganizationalUnit.Arn',
        parameters: {
          OrganizationalUnitId: this.__input.organizationalUnitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationalUnit.OrganizationalUnit.Arn', props);
    return resource.getResponseField('OrganizationalUnit.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribeOrganizationalUnit.OrganizationalUnit.Name'),
        outputPath: 'OrganizationalUnit.Name',
        parameters: {
          OrganizationalUnitId: this.__input.organizationalUnitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganizationalUnit.OrganizationalUnit.Name', props);
    return resource.getResponseField('OrganizationalUnit.Name') as unknown as string;
  }

}

export class OrganizationsResponsesDescribePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribePolicyRequest) {
  }

  public get policy(): OrganizationsResponsesDescribePolicyPolicy {
    return new OrganizationsResponsesDescribePolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesDescribePolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribePolicyRequest) {
  }

  public get policySummary(): OrganizationsResponsesDescribePolicyPolicyPolicySummary {
    return new OrganizationsResponsesDescribePolicyPolicyPolicySummary(this.__scope, this.__resources, this.__input);
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribePolicy.Policy.Content'),
        outputPath: 'Policy.Content',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePolicy.Policy.Content', props);
    return resource.getResponseField('Policy.Content') as unknown as string;
  }

}

export class OrganizationsResponsesDescribePolicyPolicyPolicySummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDescribePolicyRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribePolicy.Policy.PolicySummary.Id'),
        outputPath: 'Policy.PolicySummary.Id',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePolicy.Policy.PolicySummary.Id', props);
    return resource.getResponseField('Policy.PolicySummary.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribePolicy.Policy.PolicySummary.Arn'),
        outputPath: 'Policy.PolicySummary.Arn',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePolicy.Policy.PolicySummary.Arn', props);
    return resource.getResponseField('Policy.PolicySummary.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribePolicy.Policy.PolicySummary.Name'),
        outputPath: 'Policy.PolicySummary.Name',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePolicy.Policy.PolicySummary.Name', props);
    return resource.getResponseField('Policy.PolicySummary.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribePolicy.Policy.PolicySummary.Description'),
        outputPath: 'Policy.PolicySummary.Description',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePolicy.Policy.PolicySummary.Description', props);
    return resource.getResponseField('Policy.PolicySummary.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribePolicy.Policy.PolicySummary.Type'),
        outputPath: 'Policy.PolicySummary.Type',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePolicy.Policy.PolicySummary.Type', props);
    return resource.getResponseField('Policy.PolicySummary.Type') as unknown as string;
  }

  public get awsManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DescribePolicy.Policy.PolicySummary.AwsManaged'),
        outputPath: 'Policy.PolicySummary.AwsManaged',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePolicy.Policy.PolicySummary.AwsManaged', props);
    return resource.getResponseField('Policy.PolicySummary.AwsManaged') as unknown as boolean;
  }

}

export class OrganizationsResponsesDisablePolicyType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDisablePolicyTypeRequest) {
  }

  public get root(): OrganizationsResponsesDisablePolicyTypeRoot {
    return new OrganizationsResponsesDisablePolicyTypeRoot(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesDisablePolicyTypeRoot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsDisablePolicyTypeRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disablePolicyType',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DisablePolicyType.Root.Id'),
        outputPath: 'Root.Id',
        parameters: {
          RootId: this.__input.rootId,
          PolicyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisablePolicyType.Root.Id', props);
    return resource.getResponseField('Root.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disablePolicyType',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DisablePolicyType.Root.Arn'),
        outputPath: 'Root.Arn',
        parameters: {
          RootId: this.__input.rootId,
          PolicyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisablePolicyType.Root.Arn', props);
    return resource.getResponseField('Root.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disablePolicyType',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DisablePolicyType.Root.Name'),
        outputPath: 'Root.Name',
        parameters: {
          RootId: this.__input.rootId,
          PolicyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisablePolicyType.Root.Name', props);
    return resource.getResponseField('Root.Name') as unknown as string;
  }

  public get policyTypes(): shapes.OrganizationsPolicyTypeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disablePolicyType',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.DisablePolicyType.Root.PolicyTypes'),
        outputPath: 'Root.PolicyTypes',
        parameters: {
          RootId: this.__input.rootId,
          PolicyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisablePolicyType.Root.PolicyTypes', props);
    return resource.getResponseField('Root.PolicyTypes') as unknown as shapes.OrganizationsPolicyTypeSummary[];
  }

}

export class OrganizationsResponsesEnableAllFeatures {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get handshake(): OrganizationsResponsesEnableAllFeaturesHandshake {
    return new OrganizationsResponsesEnableAllFeaturesHandshake(this.__scope, this.__resources);
  }

}

export class OrganizationsResponsesEnableAllFeaturesHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAllFeatures',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnableAllFeatures.Handshake.Id'),
        outputPath: 'Handshake.Id',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableAllFeatures.Handshake.Id', props);
    return resource.getResponseField('Handshake.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAllFeatures',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnableAllFeatures.Handshake.Arn'),
        outputPath: 'Handshake.Arn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableAllFeatures.Handshake.Arn', props);
    return resource.getResponseField('Handshake.Arn') as unknown as string;
  }

  public get parties(): shapes.OrganizationsHandshakeParty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAllFeatures',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnableAllFeatures.Handshake.Parties'),
        outputPath: 'Handshake.Parties',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableAllFeatures.Handshake.Parties', props);
    return resource.getResponseField('Handshake.Parties') as unknown as shapes.OrganizationsHandshakeParty[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAllFeatures',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnableAllFeatures.Handshake.State'),
        outputPath: 'Handshake.State',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableAllFeatures.Handshake.State', props);
    return resource.getResponseField('Handshake.State') as unknown as string;
  }

  public get requestedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAllFeatures',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnableAllFeatures.Handshake.RequestedTimestamp'),
        outputPath: 'Handshake.RequestedTimestamp',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableAllFeatures.Handshake.RequestedTimestamp', props);
    return resource.getResponseField('Handshake.RequestedTimestamp') as unknown as string;
  }

  public get expirationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAllFeatures',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnableAllFeatures.Handshake.ExpirationTimestamp'),
        outputPath: 'Handshake.ExpirationTimestamp',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableAllFeatures.Handshake.ExpirationTimestamp', props);
    return resource.getResponseField('Handshake.ExpirationTimestamp') as unknown as string;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAllFeatures',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnableAllFeatures.Handshake.Action'),
        outputPath: 'Handshake.Action',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableAllFeatures.Handshake.Action', props);
    return resource.getResponseField('Handshake.Action') as unknown as string;
  }

  public get resources(): shapes.OrganizationsHandshakeResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAllFeatures',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnableAllFeatures.Handshake.Resources'),
        outputPath: 'Handshake.Resources',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableAllFeatures.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsResponsesEnablePolicyType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsEnablePolicyTypeRequest) {
  }

  public get root(): OrganizationsResponsesEnablePolicyTypeRoot {
    return new OrganizationsResponsesEnablePolicyTypeRoot(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesEnablePolicyTypeRoot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsEnablePolicyTypeRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enablePolicyType',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnablePolicyType.Root.Id'),
        outputPath: 'Root.Id',
        parameters: {
          RootId: this.__input.rootId,
          PolicyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnablePolicyType.Root.Id', props);
    return resource.getResponseField('Root.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enablePolicyType',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnablePolicyType.Root.Arn'),
        outputPath: 'Root.Arn',
        parameters: {
          RootId: this.__input.rootId,
          PolicyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnablePolicyType.Root.Arn', props);
    return resource.getResponseField('Root.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enablePolicyType',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnablePolicyType.Root.Name'),
        outputPath: 'Root.Name',
        parameters: {
          RootId: this.__input.rootId,
          PolicyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnablePolicyType.Root.Name', props);
    return resource.getResponseField('Root.Name') as unknown as string;
  }

  public get policyTypes(): shapes.OrganizationsPolicyTypeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enablePolicyType',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.EnablePolicyType.Root.PolicyTypes'),
        outputPath: 'Root.PolicyTypes',
        parameters: {
          RootId: this.__input.rootId,
          PolicyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnablePolicyType.Root.PolicyTypes', props);
    return resource.getResponseField('Root.PolicyTypes') as unknown as shapes.OrganizationsPolicyTypeSummary[];
  }

}

export class OrganizationsResponsesInviteAccountToOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsInviteAccountToOrganizationRequest) {
  }

  public get handshake(): OrganizationsResponsesInviteAccountToOrganizationHandshake {
    return new OrganizationsResponsesInviteAccountToOrganizationHandshake(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesInviteAccountToOrganizationHandshake {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsInviteAccountToOrganizationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteAccountToOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.InviteAccountToOrganization.Handshake.Id'),
        outputPath: 'Handshake.Id',
        parameters: {
          Target: {
            Id: this.__input.target.id,
            Type: this.__input.target.type,
          },
          Notes: this.__input.notes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteAccountToOrganization.Handshake.Id', props);
    return resource.getResponseField('Handshake.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteAccountToOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.InviteAccountToOrganization.Handshake.Arn'),
        outputPath: 'Handshake.Arn',
        parameters: {
          Target: {
            Id: this.__input.target.id,
            Type: this.__input.target.type,
          },
          Notes: this.__input.notes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteAccountToOrganization.Handshake.Arn', props);
    return resource.getResponseField('Handshake.Arn') as unknown as string;
  }

  public get parties(): shapes.OrganizationsHandshakeParty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteAccountToOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.InviteAccountToOrganization.Handshake.Parties'),
        outputPath: 'Handshake.Parties',
        parameters: {
          Target: {
            Id: this.__input.target.id,
            Type: this.__input.target.type,
          },
          Notes: this.__input.notes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteAccountToOrganization.Handshake.Parties', props);
    return resource.getResponseField('Handshake.Parties') as unknown as shapes.OrganizationsHandshakeParty[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteAccountToOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.InviteAccountToOrganization.Handshake.State'),
        outputPath: 'Handshake.State',
        parameters: {
          Target: {
            Id: this.__input.target.id,
            Type: this.__input.target.type,
          },
          Notes: this.__input.notes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteAccountToOrganization.Handshake.State', props);
    return resource.getResponseField('Handshake.State') as unknown as string;
  }

  public get requestedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteAccountToOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.InviteAccountToOrganization.Handshake.RequestedTimestamp'),
        outputPath: 'Handshake.RequestedTimestamp',
        parameters: {
          Target: {
            Id: this.__input.target.id,
            Type: this.__input.target.type,
          },
          Notes: this.__input.notes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteAccountToOrganization.Handshake.RequestedTimestamp', props);
    return resource.getResponseField('Handshake.RequestedTimestamp') as unknown as string;
  }

  public get expirationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteAccountToOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.InviteAccountToOrganization.Handshake.ExpirationTimestamp'),
        outputPath: 'Handshake.ExpirationTimestamp',
        parameters: {
          Target: {
            Id: this.__input.target.id,
            Type: this.__input.target.type,
          },
          Notes: this.__input.notes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteAccountToOrganization.Handshake.ExpirationTimestamp', props);
    return resource.getResponseField('Handshake.ExpirationTimestamp') as unknown as string;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteAccountToOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.InviteAccountToOrganization.Handshake.Action'),
        outputPath: 'Handshake.Action',
        parameters: {
          Target: {
            Id: this.__input.target.id,
            Type: this.__input.target.type,
          },
          Notes: this.__input.notes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteAccountToOrganization.Handshake.Action', props);
    return resource.getResponseField('Handshake.Action') as unknown as string;
  }

  public get resources(): shapes.OrganizationsHandshakeResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inviteAccountToOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.InviteAccountToOrganization.Handshake.Resources'),
        outputPath: 'Handshake.Resources',
        parameters: {
          Target: {
            Id: this.__input.target.id,
            Type: this.__input.target.type,
          },
          Notes: this.__input.notes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InviteAccountToOrganization.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsResponsesListAwsServiceAccessForOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListAwsServiceAccessForOrganizationRequest) {
  }

  public get enabledServicePrincipals(): shapes.OrganizationsEnabledServicePrincipal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAwsServiceAccessForOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListAWSServiceAccessForOrganization.EnabledServicePrincipals'),
        outputPath: 'EnabledServicePrincipals',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAWSServiceAccessForOrganization.EnabledServicePrincipals', props);
    return resource.getResponseField('EnabledServicePrincipals') as unknown as shapes.OrganizationsEnabledServicePrincipal[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAwsServiceAccessForOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListAWSServiceAccessForOrganization.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAWSServiceAccessForOrganization.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListAccounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListAccountsRequest) {
  }

  public get accounts(): shapes.OrganizationsAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccounts',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListAccounts.Accounts'),
        outputPath: 'Accounts',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccounts.Accounts', props);
    return resource.getResponseField('Accounts') as unknown as shapes.OrganizationsAccount[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccounts',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListAccounts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListAccountsForParent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListAccountsForParentRequest) {
  }

  public get accounts(): shapes.OrganizationsAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountsForParent',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListAccountsForParent.Accounts'),
        outputPath: 'Accounts',
        parameters: {
          ParentId: this.__input.parentId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountsForParent.Accounts', props);
    return resource.getResponseField('Accounts') as unknown as shapes.OrganizationsAccount[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountsForParent',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListAccountsForParent.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ParentId: this.__input.parentId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountsForParent.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListChildren {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListChildrenRequest) {
  }

  public get children(): shapes.OrganizationsChild[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChildren',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListChildren.Children'),
        outputPath: 'Children',
        parameters: {
          ParentId: this.__input.parentId,
          ChildType: this.__input.childType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChildren.Children', props);
    return resource.getResponseField('Children') as unknown as shapes.OrganizationsChild[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChildren',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListChildren.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ParentId: this.__input.parentId,
          ChildType: this.__input.childType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChildren.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListCreateAccountStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListCreateAccountStatusRequest) {
  }

  public get createAccountStatuses(): shapes.OrganizationsCreateAccountStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListCreateAccountStatus.CreateAccountStatuses'),
        outputPath: 'CreateAccountStatuses',
        parameters: {
          States: this.__input.states,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCreateAccountStatus.CreateAccountStatuses', props);
    return resource.getResponseField('CreateAccountStatuses') as unknown as shapes.OrganizationsCreateAccountStatus[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCreateAccountStatus',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListCreateAccountStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          States: this.__input.states,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCreateAccountStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListDelegatedAdministrators {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListDelegatedAdministratorsRequest) {
  }

  public get delegatedAdministrators(): shapes.OrganizationsDelegatedAdministrator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDelegatedAdministrators',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListDelegatedAdministrators.DelegatedAdministrators'),
        outputPath: 'DelegatedAdministrators',
        parameters: {
          ServicePrincipal: this.__input.servicePrincipal,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDelegatedAdministrators.DelegatedAdministrators', props);
    return resource.getResponseField('DelegatedAdministrators') as unknown as shapes.OrganizationsDelegatedAdministrator[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDelegatedAdministrators',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListDelegatedAdministrators.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServicePrincipal: this.__input.servicePrincipal,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDelegatedAdministrators.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListDelegatedServicesForAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListDelegatedServicesForAccountRequest) {
  }

  public get delegatedServices(): shapes.OrganizationsDelegatedService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDelegatedServicesForAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListDelegatedServicesForAccount.DelegatedServices'),
        outputPath: 'DelegatedServices',
        parameters: {
          AccountId: this.__input.accountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDelegatedServicesForAccount.DelegatedServices', props);
    return resource.getResponseField('DelegatedServices') as unknown as shapes.OrganizationsDelegatedService[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDelegatedServicesForAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListDelegatedServicesForAccount.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDelegatedServicesForAccount.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListHandshakesForAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListHandshakesForAccountRequest) {
  }

  public get handshakes(): shapes.OrganizationsHandshake[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHandshakesForAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListHandshakesForAccount.Handshakes'),
        outputPath: 'Handshakes',
        parameters: {
          Filter: {
            ActionType: this.__input.filter?.actionType,
            ParentHandshakeId: this.__input.filter?.parentHandshakeId,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHandshakesForAccount.Handshakes', props);
    return resource.getResponseField('Handshakes') as unknown as shapes.OrganizationsHandshake[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHandshakesForAccount',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListHandshakesForAccount.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            ActionType: this.__input.filter?.actionType,
            ParentHandshakeId: this.__input.filter?.parentHandshakeId,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHandshakesForAccount.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListHandshakesForOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListHandshakesForOrganizationRequest) {
  }

  public get handshakes(): shapes.OrganizationsHandshake[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHandshakesForOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListHandshakesForOrganization.Handshakes'),
        outputPath: 'Handshakes',
        parameters: {
          Filter: {
            ActionType: this.__input.filter?.actionType,
            ParentHandshakeId: this.__input.filter?.parentHandshakeId,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHandshakesForOrganization.Handshakes', props);
    return resource.getResponseField('Handshakes') as unknown as shapes.OrganizationsHandshake[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHandshakesForOrganization',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListHandshakesForOrganization.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            ActionType: this.__input.filter?.actionType,
            ParentHandshakeId: this.__input.filter?.parentHandshakeId,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHandshakesForOrganization.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListOrganizationalUnitsForParent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListOrganizationalUnitsForParentRequest) {
  }

  public get organizationalUnits(): shapes.OrganizationsOrganizationalUnit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationalUnitsForParent',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListOrganizationalUnitsForParent.OrganizationalUnits'),
        outputPath: 'OrganizationalUnits',
        parameters: {
          ParentId: this.__input.parentId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationalUnitsForParent.OrganizationalUnits', props);
    return resource.getResponseField('OrganizationalUnits') as unknown as shapes.OrganizationsOrganizationalUnit[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationalUnitsForParent',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListOrganizationalUnitsForParent.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ParentId: this.__input.parentId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationalUnitsForParent.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListParents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListParentsRequest) {
  }

  public get parents(): shapes.OrganizationsParent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParents',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListParents.Parents'),
        outputPath: 'Parents',
        parameters: {
          ChildId: this.__input.childId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParents.Parents', props);
    return resource.getResponseField('Parents') as unknown as shapes.OrganizationsParent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParents',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListParents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChildId: this.__input.childId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListPoliciesRequest) {
  }

  public get policies(): shapes.OrganizationsPolicySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicies',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListPolicies.Policies'),
        outputPath: 'Policies',
        parameters: {
          Filter: this.__input.filter,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicies.Policies', props);
    return resource.getResponseField('Policies') as unknown as shapes.OrganizationsPolicySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicies',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListPolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: this.__input.filter,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListPoliciesForTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListPoliciesForTargetRequest) {
  }

  public get policies(): shapes.OrganizationsPolicySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPoliciesForTarget',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListPoliciesForTarget.Policies'),
        outputPath: 'Policies',
        parameters: {
          TargetId: this.__input.targetId,
          Filter: this.__input.filter,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPoliciesForTarget.Policies', props);
    return resource.getResponseField('Policies') as unknown as shapes.OrganizationsPolicySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPoliciesForTarget',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListPoliciesForTarget.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TargetId: this.__input.targetId,
          Filter: this.__input.filter,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPoliciesForTarget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListRoots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListRootsRequest) {
  }

  public get roots(): shapes.OrganizationsRoot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoots',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListRoots.Roots'),
        outputPath: 'Roots',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoots.Roots', props);
    return resource.getResponseField('Roots') as unknown as shapes.OrganizationsRoot[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoots',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListRoots.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoots.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListTagsForResourceRequest) {
  }

  public get tags(): shapes.OrganizationsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceId: this.__input.resourceId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.OrganizationsTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceId: this.__input.resourceId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesListTargetsForPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsListTargetsForPolicyRequest) {
  }

  public get targets(): shapes.OrganizationsPolicyTargetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargetsForPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListTargetsForPolicy.Targets'),
        outputPath: 'Targets',
        parameters: {
          PolicyId: this.__input.policyId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargetsForPolicy.Targets', props);
    return resource.getResponseField('Targets') as unknown as shapes.OrganizationsPolicyTargetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargetsForPolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.ListTargetsForPolicy.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          PolicyId: this.__input.policyId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargetsForPolicy.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsResponsesUpdateOrganizationalUnit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsUpdateOrganizationalUnitRequest) {
  }

  public get organizationalUnit(): OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit {
    return new OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesUpdateOrganizationalUnitOrganizationalUnit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsUpdateOrganizationalUnitRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdateOrganizationalUnit.OrganizationalUnit.Id'),
        outputPath: 'OrganizationalUnit.Id',
        parameters: {
          OrganizationalUnitId: this.__input.organizationalUnitId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateOrganizationalUnit.OrganizationalUnit.Id', props);
    return resource.getResponseField('OrganizationalUnit.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdateOrganizationalUnit.OrganizationalUnit.Arn'),
        outputPath: 'OrganizationalUnit.Arn',
        parameters: {
          OrganizationalUnitId: this.__input.organizationalUnitId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateOrganizationalUnit.OrganizationalUnit.Arn', props);
    return resource.getResponseField('OrganizationalUnit.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateOrganizationalUnit',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdateOrganizationalUnit.OrganizationalUnit.Name'),
        outputPath: 'OrganizationalUnit.Name',
        parameters: {
          OrganizationalUnitId: this.__input.organizationalUnitId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateOrganizationalUnit.OrganizationalUnit.Name', props);
    return resource.getResponseField('OrganizationalUnit.Name') as unknown as string;
  }

}

export class OrganizationsResponsesUpdatePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsUpdatePolicyRequest) {
  }

  public get policy(): OrganizationsResponsesUpdatePolicyPolicy {
    return new OrganizationsResponsesUpdatePolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class OrganizationsResponsesUpdatePolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsUpdatePolicyRequest) {
  }

  public get policySummary(): OrganizationsResponsesUpdatePolicyPolicyPolicySummary {
    return new OrganizationsResponsesUpdatePolicyPolicyPolicySummary(this.__scope, this.__resources, this.__input);
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdatePolicy.Policy.Content'),
        outputPath: 'Policy.Content',
        parameters: {
          PolicyId: this.__input.policyId,
          Name: this.__input.name,
          Description: this.__input.description,
          Content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePolicy.Policy.Content', props);
    return resource.getResponseField('Policy.Content') as unknown as string;
  }

}

export class OrganizationsResponsesUpdatePolicyPolicyPolicySummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OrganizationsUpdatePolicyRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdatePolicy.Policy.PolicySummary.Id'),
        outputPath: 'Policy.PolicySummary.Id',
        parameters: {
          PolicyId: this.__input.policyId,
          Name: this.__input.name,
          Description: this.__input.description,
          Content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePolicy.Policy.PolicySummary.Id', props);
    return resource.getResponseField('Policy.PolicySummary.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdatePolicy.Policy.PolicySummary.Arn'),
        outputPath: 'Policy.PolicySummary.Arn',
        parameters: {
          PolicyId: this.__input.policyId,
          Name: this.__input.name,
          Description: this.__input.description,
          Content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePolicy.Policy.PolicySummary.Arn', props);
    return resource.getResponseField('Policy.PolicySummary.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdatePolicy.Policy.PolicySummary.Name'),
        outputPath: 'Policy.PolicySummary.Name',
        parameters: {
          PolicyId: this.__input.policyId,
          Name: this.__input.name,
          Description: this.__input.description,
          Content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePolicy.Policy.PolicySummary.Name', props);
    return resource.getResponseField('Policy.PolicySummary.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdatePolicy.Policy.PolicySummary.Description'),
        outputPath: 'Policy.PolicySummary.Description',
        parameters: {
          PolicyId: this.__input.policyId,
          Name: this.__input.name,
          Description: this.__input.description,
          Content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePolicy.Policy.PolicySummary.Description', props);
    return resource.getResponseField('Policy.PolicySummary.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdatePolicy.Policy.PolicySummary.Type'),
        outputPath: 'Policy.PolicySummary.Type',
        parameters: {
          PolicyId: this.__input.policyId,
          Name: this.__input.name,
          Description: this.__input.description,
          Content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePolicy.Policy.PolicySummary.Type', props);
    return resource.getResponseField('Policy.PolicySummary.Type') as unknown as string;
  }

  public get awsManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePolicy',
        service: 'Organizations',
        physicalResourceId: cr.PhysicalResourceId.of('Organizations.UpdatePolicy.Policy.PolicySummary.AwsManaged'),
        outputPath: 'Policy.PolicySummary.AwsManaged',
        parameters: {
          PolicyId: this.__input.policyId,
          Name: this.__input.name,
          Description: this.__input.description,
          Content: this.__input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePolicy.Policy.PolicySummary.AwsManaged', props);
    return resource.getResponseField('Policy.PolicySummary.AwsManaged') as unknown as boolean;
  }

}

