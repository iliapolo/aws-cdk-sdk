import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class OrganizationsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptHandshake(input: shapes.OrganizationsAcceptHandshakeRequest): OrganizationsAcceptHandshake {
    return new OrganizationsAcceptHandshake(this, 'AcceptHandshake', this.__resources, input);
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

  public cancelHandshake(input: shapes.OrganizationsCancelHandshakeRequest): OrganizationsCancelHandshake {
    return new OrganizationsCancelHandshake(this, 'CancelHandshake', this.__resources, input);
  }

  public createAccount(input: shapes.OrganizationsCreateAccountRequest): OrganizationsCreateAccount {
    return new OrganizationsCreateAccount(this, 'CreateAccount', this.__resources, input);
  }

  public createGovCloudAccount(input: shapes.OrganizationsCreateGovCloudAccountRequest): OrganizationsCreateGovCloudAccount {
    return new OrganizationsCreateGovCloudAccount(this, 'CreateGovCloudAccount', this.__resources, input);
  }

  public createOrganization(input: shapes.OrganizationsCreateOrganizationRequest): OrganizationsCreateOrganization {
    return new OrganizationsCreateOrganization(this, 'CreateOrganization', this.__resources, input);
  }

  public createOrganizationalUnit(input: shapes.OrganizationsCreateOrganizationalUnitRequest): OrganizationsCreateOrganizationalUnit {
    return new OrganizationsCreateOrganizationalUnit(this, 'CreateOrganizationalUnit', this.__resources, input);
  }

  public createPolicy(input: shapes.OrganizationsCreatePolicyRequest): OrganizationsCreatePolicy {
    return new OrganizationsCreatePolicy(this, 'CreatePolicy', this.__resources, input);
  }

  public declineHandshake(input: shapes.OrganizationsDeclineHandshakeRequest): OrganizationsDeclineHandshake {
    return new OrganizationsDeclineHandshake(this, 'DeclineHandshake', this.__resources, input);
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

  public describeAccount(input: shapes.OrganizationsDescribeAccountRequest): OrganizationsDescribeAccount {
    return new OrganizationsDescribeAccount(this, 'DescribeAccount', this.__resources, input);
  }

  public describeCreateAccountStatus(input: shapes.OrganizationsDescribeCreateAccountStatusRequest): OrganizationsDescribeCreateAccountStatus {
    return new OrganizationsDescribeCreateAccountStatus(this, 'DescribeCreateAccountStatus', this.__resources, input);
  }

  public describeEffectivePolicy(input: shapes.OrganizationsDescribeEffectivePolicyRequest): OrganizationsDescribeEffectivePolicy {
    return new OrganizationsDescribeEffectivePolicy(this, 'DescribeEffectivePolicy', this.__resources, input);
  }

  public describeHandshake(input: shapes.OrganizationsDescribeHandshakeRequest): OrganizationsDescribeHandshake {
    return new OrganizationsDescribeHandshake(this, 'DescribeHandshake', this.__resources, input);
  }

  public describeOrganization(): OrganizationsDescribeOrganization {
    return new OrganizationsDescribeOrganization(this, 'DescribeOrganization', this.__resources);
  }

  public describeOrganizationalUnit(input: shapes.OrganizationsDescribeOrganizationalUnitRequest): OrganizationsDescribeOrganizationalUnit {
    return new OrganizationsDescribeOrganizationalUnit(this, 'DescribeOrganizationalUnit', this.__resources, input);
  }

  public describePolicy(input: shapes.OrganizationsDescribePolicyRequest): OrganizationsDescribePolicy {
    return new OrganizationsDescribePolicy(this, 'DescribePolicy', this.__resources, input);
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

  public disablePolicyType(input: shapes.OrganizationsDisablePolicyTypeRequest): OrganizationsDisablePolicyType {
    return new OrganizationsDisablePolicyType(this, 'DisablePolicyType', this.__resources, input);
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

  public enableAllFeatures(): OrganizationsEnableAllFeatures {
    return new OrganizationsEnableAllFeatures(this, 'EnableAllFeatures', this.__resources);
  }

  public enablePolicyType(input: shapes.OrganizationsEnablePolicyTypeRequest): OrganizationsEnablePolicyType {
    return new OrganizationsEnablePolicyType(this, 'EnablePolicyType', this.__resources, input);
  }

  public inviteAccountToOrganization(input: shapes.OrganizationsInviteAccountToOrganizationRequest): OrganizationsInviteAccountToOrganization {
    return new OrganizationsInviteAccountToOrganization(this, 'InviteAccountToOrganization', this.__resources, input);
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

  public listAwsServiceAccessForOrganization(input: shapes.OrganizationsListAwsServiceAccessForOrganizationRequest): OrganizationsListAwsServiceAccessForOrganization {
    return new OrganizationsListAwsServiceAccessForOrganization(this, 'ListAwsServiceAccessForOrganization', this.__resources, input);
  }

  public listAccounts(input: shapes.OrganizationsListAccountsRequest): OrganizationsListAccounts {
    return new OrganizationsListAccounts(this, 'ListAccounts', this.__resources, input);
  }

  public listAccountsForParent(input: shapes.OrganizationsListAccountsForParentRequest): OrganizationsListAccountsForParent {
    return new OrganizationsListAccountsForParent(this, 'ListAccountsForParent', this.__resources, input);
  }

  public listChildren(input: shapes.OrganizationsListChildrenRequest): OrganizationsListChildren {
    return new OrganizationsListChildren(this, 'ListChildren', this.__resources, input);
  }

  public listCreateAccountStatus(input: shapes.OrganizationsListCreateAccountStatusRequest): OrganizationsListCreateAccountStatus {
    return new OrganizationsListCreateAccountStatus(this, 'ListCreateAccountStatus', this.__resources, input);
  }

  public listDelegatedAdministrators(input: shapes.OrganizationsListDelegatedAdministratorsRequest): OrganizationsListDelegatedAdministrators {
    return new OrganizationsListDelegatedAdministrators(this, 'ListDelegatedAdministrators', this.__resources, input);
  }

  public listDelegatedServicesForAccount(input: shapes.OrganizationsListDelegatedServicesForAccountRequest): OrganizationsListDelegatedServicesForAccount {
    return new OrganizationsListDelegatedServicesForAccount(this, 'ListDelegatedServicesForAccount', this.__resources, input);
  }

  public listHandshakesForAccount(input: shapes.OrganizationsListHandshakesForAccountRequest): OrganizationsListHandshakesForAccount {
    return new OrganizationsListHandshakesForAccount(this, 'ListHandshakesForAccount', this.__resources, input);
  }

  public listHandshakesForOrganization(input: shapes.OrganizationsListHandshakesForOrganizationRequest): OrganizationsListHandshakesForOrganization {
    return new OrganizationsListHandshakesForOrganization(this, 'ListHandshakesForOrganization', this.__resources, input);
  }

  public listOrganizationalUnitsForParent(input: shapes.OrganizationsListOrganizationalUnitsForParentRequest): OrganizationsListOrganizationalUnitsForParent {
    return new OrganizationsListOrganizationalUnitsForParent(this, 'ListOrganizationalUnitsForParent', this.__resources, input);
  }

  public listParents(input: shapes.OrganizationsListParentsRequest): OrganizationsListParents {
    return new OrganizationsListParents(this, 'ListParents', this.__resources, input);
  }

  public listPolicies(input: shapes.OrganizationsListPoliciesRequest): OrganizationsListPolicies {
    return new OrganizationsListPolicies(this, 'ListPolicies', this.__resources, input);
  }

  public listPoliciesForTarget(input: shapes.OrganizationsListPoliciesForTargetRequest): OrganizationsListPoliciesForTarget {
    return new OrganizationsListPoliciesForTarget(this, 'ListPoliciesForTarget', this.__resources, input);
  }

  public listRoots(input: shapes.OrganizationsListRootsRequest): OrganizationsListRoots {
    return new OrganizationsListRoots(this, 'ListRoots', this.__resources, input);
  }

  public listTagsForResource(input: shapes.OrganizationsListTagsForResourceRequest): OrganizationsListTagsForResource {
    return new OrganizationsListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTargetsForPolicy(input: shapes.OrganizationsListTargetsForPolicyRequest): OrganizationsListTargetsForPolicy {
    return new OrganizationsListTargetsForPolicy(this, 'ListTargetsForPolicy', this.__resources, input);
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

  public updateOrganizationalUnit(input: shapes.OrganizationsUpdateOrganizationalUnitRequest): OrganizationsUpdateOrganizationalUnit {
    return new OrganizationsUpdateOrganizationalUnit(this, 'UpdateOrganizationalUnit', this.__resources, input);
  }

  public updatePolicy(input: shapes.OrganizationsUpdatePolicyRequest): OrganizationsUpdatePolicy {
    return new OrganizationsUpdatePolicy(this, 'UpdatePolicy', this.__resources, input);
  }

}

export class OrganizationsAcceptHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsAcceptHandshakeRequest) {
    super(scope, id);
  }

  public get handshake(): OrganizationsAcceptHandshakeHandshake {
    return new OrganizationsAcceptHandshakeHandshake(this, 'Handshake', this.__resources, this.input);
  }

}

export class OrganizationsAcceptHandshakeHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsAcceptHandshakeRequest) {
    super(scope, id);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptHandshake.Handshake.Id', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptHandshake.Handshake.Arn', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptHandshake.Handshake.Parties', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptHandshake.Handshake.State', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptHandshake.Handshake.RequestedTimestamp', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptHandshake.Handshake.ExpirationTimestamp', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptHandshake.Handshake.Action', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptHandshake.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsCancelHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCancelHandshakeRequest) {
    super(scope, id);
  }

  public get handshake(): OrganizationsCancelHandshakeHandshake {
    return new OrganizationsCancelHandshakeHandshake(this, 'Handshake', this.__resources, this.input);
  }

}

export class OrganizationsCancelHandshakeHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCancelHandshakeRequest) {
    super(scope, id);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelHandshake.Handshake.Id', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelHandshake.Handshake.Arn', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelHandshake.Handshake.Parties', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelHandshake.Handshake.State', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelHandshake.Handshake.RequestedTimestamp', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelHandshake.Handshake.ExpirationTimestamp', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelHandshake.Handshake.Action', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelHandshake.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsCreateAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreateAccountRequest) {
    super(scope, id);
  }

  public get createAccountStatus(): OrganizationsCreateAccountCreateAccountStatus {
    return new OrganizationsCreateAccountCreateAccountStatus(this, 'CreateAccountStatus', this.__resources, this.input);
  }

}

export class OrganizationsCreateAccountCreateAccountStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreateAccountRequest) {
    super(scope, id);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.CreateAccountStatus.Id', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.CreateAccountStatus.AccountName', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.CreateAccountStatus.State', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.CreateAccountStatus.RequestedTimestamp', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.CreateAccountStatus.CompletedTimestamp', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.CreateAccountStatus.AccountId', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.CreateAccountStatus.GovCloudAccountId', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccount.CreateAccountStatus.FailureReason', props);
    return resource.getResponseField('CreateAccountStatus.FailureReason') as unknown as string;
  }

}

export class OrganizationsCreateGovCloudAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreateGovCloudAccountRequest) {
    super(scope, id);
  }

  public get createAccountStatus(): OrganizationsCreateGovCloudAccountCreateAccountStatus {
    return new OrganizationsCreateGovCloudAccountCreateAccountStatus(this, 'CreateAccountStatus', this.__resources, this.input);
  }

}

export class OrganizationsCreateGovCloudAccountCreateAccountStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreateGovCloudAccountRequest) {
    super(scope, id);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGovCloudAccount.CreateAccountStatus.Id', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGovCloudAccount.CreateAccountStatus.AccountName', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGovCloudAccount.CreateAccountStatus.State', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGovCloudAccount.CreateAccountStatus.RequestedTimestamp', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGovCloudAccount.CreateAccountStatus.CompletedTimestamp', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGovCloudAccount.CreateAccountStatus.AccountId', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGovCloudAccount.CreateAccountStatus.GovCloudAccountId', props);
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
          Email: this.input.email,
          AccountName: this.input.accountName,
          RoleName: this.input.roleName,
          IamUserAccessToBilling: this.input.iamUserAccessToBilling,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGovCloudAccount.CreateAccountStatus.FailureReason', props);
    return resource.getResponseField('CreateAccountStatus.FailureReason') as unknown as string;
  }

}

export class OrganizationsCreateOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreateOrganizationRequest) {
    super(scope, id);
  }

  public get organization(): OrganizationsCreateOrganizationOrganization {
    return new OrganizationsCreateOrganizationOrganization(this, 'Organization', this.__resources, this.input);
  }

}

export class OrganizationsCreateOrganizationOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreateOrganizationRequest) {
    super(scope, id);
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
          FeatureSet: this.input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganization.Organization.Id', props);
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
          FeatureSet: this.input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganization.Organization.Arn', props);
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
          FeatureSet: this.input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganization.Organization.FeatureSet', props);
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
          FeatureSet: this.input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganization.Organization.MasterAccountArn', props);
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
          FeatureSet: this.input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganization.Organization.MasterAccountId', props);
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
          FeatureSet: this.input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganization.Organization.MasterAccountEmail', props);
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
          FeatureSet: this.input.featureSet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganization.Organization.AvailablePolicyTypes', props);
    return resource.getResponseField('Organization.AvailablePolicyTypes') as unknown as shapes.OrganizationsPolicyTypeSummary[];
  }

}

export class OrganizationsCreateOrganizationalUnit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreateOrganizationalUnitRequest) {
    super(scope, id);
  }

  public get organizationalUnit(): OrganizationsCreateOrganizationalUnitOrganizationalUnit {
    return new OrganizationsCreateOrganizationalUnitOrganizationalUnit(this, 'OrganizationalUnit', this.__resources, this.input);
  }

}

export class OrganizationsCreateOrganizationalUnitOrganizationalUnit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreateOrganizationalUnitRequest) {
    super(scope, id);
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
          ParentId: this.input.parentId,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganizationalUnit.OrganizationalUnit.Id', props);
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
          ParentId: this.input.parentId,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganizationalUnit.OrganizationalUnit.Arn', props);
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
          ParentId: this.input.parentId,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganizationalUnit.OrganizationalUnit.Name', props);
    return resource.getResponseField('OrganizationalUnit.Name') as unknown as string;
  }

}

export class OrganizationsCreatePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreatePolicyRequest) {
    super(scope, id);
  }

  public get policy(): OrganizationsCreatePolicyPolicy {
    return new OrganizationsCreatePolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class OrganizationsCreatePolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreatePolicyRequest) {
    super(scope, id);
  }

  public get policySummary(): OrganizationsCreatePolicyPolicyPolicySummary {
    return new OrganizationsCreatePolicyPolicyPolicySummary(this, 'PolicySummary', this.__resources, this.input);
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
          Content: this.input.content,
          Description: this.input.description,
          Name: this.input.name,
          Type: this.input.type,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.Content', props);
    return resource.getResponseField('Policy.Content') as unknown as string;
  }

}

export class OrganizationsCreatePolicyPolicyPolicySummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsCreatePolicyRequest) {
    super(scope, id);
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
          Content: this.input.content,
          Description: this.input.description,
          Name: this.input.name,
          Type: this.input.type,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.PolicySummary.Id', props);
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
          Content: this.input.content,
          Description: this.input.description,
          Name: this.input.name,
          Type: this.input.type,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.PolicySummary.Arn', props);
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
          Content: this.input.content,
          Description: this.input.description,
          Name: this.input.name,
          Type: this.input.type,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.PolicySummary.Name', props);
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
          Content: this.input.content,
          Description: this.input.description,
          Name: this.input.name,
          Type: this.input.type,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.PolicySummary.Description', props);
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
          Content: this.input.content,
          Description: this.input.description,
          Name: this.input.name,
          Type: this.input.type,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.PolicySummary.Type', props);
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
          Content: this.input.content,
          Description: this.input.description,
          Name: this.input.name,
          Type: this.input.type,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.PolicySummary.AwsManaged', props);
    return resource.getResponseField('Policy.PolicySummary.AwsManaged') as unknown as boolean;
  }

}

export class OrganizationsDeclineHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDeclineHandshakeRequest) {
    super(scope, id);
  }

  public get handshake(): OrganizationsDeclineHandshakeHandshake {
    return new OrganizationsDeclineHandshakeHandshake(this, 'Handshake', this.__resources, this.input);
  }

}

export class OrganizationsDeclineHandshakeHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDeclineHandshakeRequest) {
    super(scope, id);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineHandshake.Handshake.Id', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineHandshake.Handshake.Arn', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineHandshake.Handshake.Parties', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineHandshake.Handshake.State', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineHandshake.Handshake.RequestedTimestamp', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineHandshake.Handshake.ExpirationTimestamp', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineHandshake.Handshake.Action', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeclineHandshake.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsDescribeAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeAccountRequest) {
    super(scope, id);
  }

  public get account(): OrganizationsDescribeAccountAccount {
    return new OrganizationsDescribeAccountAccount(this, 'Account', this.__resources, this.input);
  }

}

export class OrganizationsDescribeAccountAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeAccountRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccount.Account.Id', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccount.Account.Arn', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccount.Account.Email', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccount.Account.Name', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccount.Account.Status', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccount.Account.JoinedMethod', props);
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
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccount.Account.JoinedTimestamp', props);
    return resource.getResponseField('Account.JoinedTimestamp') as unknown as string;
  }

}

export class OrganizationsDescribeCreateAccountStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeCreateAccountStatusRequest) {
    super(scope, id);
  }

  public get createAccountStatus(): OrganizationsDescribeCreateAccountStatusCreateAccountStatus {
    return new OrganizationsDescribeCreateAccountStatusCreateAccountStatus(this, 'CreateAccountStatus', this.__resources, this.input);
  }

}

export class OrganizationsDescribeCreateAccountStatusCreateAccountStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeCreateAccountStatusRequest) {
    super(scope, id);
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
          CreateAccountRequestId: this.input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCreateAccountStatus.CreateAccountStatus.Id', props);
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
          CreateAccountRequestId: this.input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCreateAccountStatus.CreateAccountStatus.AccountName', props);
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
          CreateAccountRequestId: this.input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCreateAccountStatus.CreateAccountStatus.State', props);
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
          CreateAccountRequestId: this.input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCreateAccountStatus.CreateAccountStatus.RequestedTimestamp', props);
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
          CreateAccountRequestId: this.input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCreateAccountStatus.CreateAccountStatus.CompletedTimestamp', props);
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
          CreateAccountRequestId: this.input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCreateAccountStatus.CreateAccountStatus.AccountId', props);
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
          CreateAccountRequestId: this.input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCreateAccountStatus.CreateAccountStatus.GovCloudAccountId', props);
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
          CreateAccountRequestId: this.input.createAccountRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCreateAccountStatus.CreateAccountStatus.FailureReason', props);
    return resource.getResponseField('CreateAccountStatus.FailureReason') as unknown as string;
  }

}

export class OrganizationsDescribeEffectivePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeEffectivePolicyRequest) {
    super(scope, id);
  }

  public get effectivePolicy(): OrganizationsDescribeEffectivePolicyEffectivePolicy {
    return new OrganizationsDescribeEffectivePolicyEffectivePolicy(this, 'EffectivePolicy', this.__resources, this.input);
  }

}

export class OrganizationsDescribeEffectivePolicyEffectivePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeEffectivePolicyRequest) {
    super(scope, id);
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
          PolicyType: this.input.policyType,
          TargetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEffectivePolicy.EffectivePolicy.PolicyContent', props);
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
          PolicyType: this.input.policyType,
          TargetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEffectivePolicy.EffectivePolicy.LastUpdatedTimestamp', props);
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
          PolicyType: this.input.policyType,
          TargetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEffectivePolicy.EffectivePolicy.TargetId', props);
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
          PolicyType: this.input.policyType,
          TargetId: this.input.targetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEffectivePolicy.EffectivePolicy.PolicyType', props);
    return resource.getResponseField('EffectivePolicy.PolicyType') as unknown as string;
  }

}

export class OrganizationsDescribeHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeHandshakeRequest) {
    super(scope, id);
  }

  public get handshake(): OrganizationsDescribeHandshakeHandshake {
    return new OrganizationsDescribeHandshakeHandshake(this, 'Handshake', this.__resources, this.input);
  }

}

export class OrganizationsDescribeHandshakeHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeHandshakeRequest) {
    super(scope, id);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHandshake.Handshake.Id', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHandshake.Handshake.Arn', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHandshake.Handshake.Parties', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHandshake.Handshake.State', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHandshake.Handshake.RequestedTimestamp', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHandshake.Handshake.ExpirationTimestamp', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHandshake.Handshake.Action', props);
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
          HandshakeId: this.input.handshakeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHandshake.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsDescribeOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get organization(): OrganizationsDescribeOrganizationOrganization {
    return new OrganizationsDescribeOrganizationOrganization(this, 'Organization', this.__resources);
  }

}

export class OrganizationsDescribeOrganizationOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.Organization.Id', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.Organization.Arn', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.Organization.FeatureSet', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.Organization.MasterAccountArn', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.Organization.MasterAccountId', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.Organization.MasterAccountEmail', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.Organization.AvailablePolicyTypes', props);
    return resource.getResponseField('Organization.AvailablePolicyTypes') as unknown as shapes.OrganizationsPolicyTypeSummary[];
  }

}

export class OrganizationsDescribeOrganizationalUnit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeOrganizationalUnitRequest) {
    super(scope, id);
  }

  public get organizationalUnit(): OrganizationsDescribeOrganizationalUnitOrganizationalUnit {
    return new OrganizationsDescribeOrganizationalUnitOrganizationalUnit(this, 'OrganizationalUnit', this.__resources, this.input);
  }

}

export class OrganizationsDescribeOrganizationalUnitOrganizationalUnit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribeOrganizationalUnitRequest) {
    super(scope, id);
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
          OrganizationalUnitId: this.input.organizationalUnitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationalUnit.OrganizationalUnit.Id', props);
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
          OrganizationalUnitId: this.input.organizationalUnitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationalUnit.OrganizationalUnit.Arn', props);
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
          OrganizationalUnitId: this.input.organizationalUnitId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganizationalUnit.OrganizationalUnit.Name', props);
    return resource.getResponseField('OrganizationalUnit.Name') as unknown as string;
  }

}

export class OrganizationsDescribePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribePolicyRequest) {
    super(scope, id);
  }

  public get policy(): OrganizationsDescribePolicyPolicy {
    return new OrganizationsDescribePolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class OrganizationsDescribePolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribePolicyRequest) {
    super(scope, id);
  }

  public get policySummary(): OrganizationsDescribePolicyPolicyPolicySummary {
    return new OrganizationsDescribePolicyPolicyPolicySummary(this, 'PolicySummary', this.__resources, this.input);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePolicy.Policy.Content', props);
    return resource.getResponseField('Policy.Content') as unknown as string;
  }

}

export class OrganizationsDescribePolicyPolicyPolicySummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDescribePolicyRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePolicy.Policy.PolicySummary.Id', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePolicy.Policy.PolicySummary.Arn', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePolicy.Policy.PolicySummary.Name', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePolicy.Policy.PolicySummary.Description', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePolicy.Policy.PolicySummary.Type', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePolicy.Policy.PolicySummary.AwsManaged', props);
    return resource.getResponseField('Policy.PolicySummary.AwsManaged') as unknown as boolean;
  }

}

export class OrganizationsDisablePolicyType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDisablePolicyTypeRequest) {
    super(scope, id);
  }

  public get root(): OrganizationsDisablePolicyTypeRoot {
    return new OrganizationsDisablePolicyTypeRoot(this, 'Root', this.__resources, this.input);
  }

}

export class OrganizationsDisablePolicyTypeRoot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsDisablePolicyTypeRequest) {
    super(scope, id);
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
          RootId: this.input.rootId,
          PolicyType: this.input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisablePolicyType.Root.Id', props);
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
          RootId: this.input.rootId,
          PolicyType: this.input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisablePolicyType.Root.Arn', props);
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
          RootId: this.input.rootId,
          PolicyType: this.input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisablePolicyType.Root.Name', props);
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
          RootId: this.input.rootId,
          PolicyType: this.input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisablePolicyType.Root.PolicyTypes', props);
    return resource.getResponseField('Root.PolicyTypes') as unknown as shapes.OrganizationsPolicyTypeSummary[];
  }

}

export class OrganizationsEnableAllFeatures extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get handshake(): OrganizationsEnableAllFeaturesHandshake {
    return new OrganizationsEnableAllFeaturesHandshake(this, 'Handshake', this.__resources);
  }

}

export class OrganizationsEnableAllFeaturesHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'EnableAllFeatures.Handshake.Id', props);
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
    const resource = new cr.AwsCustomResource(this, 'EnableAllFeatures.Handshake.Arn', props);
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
    const resource = new cr.AwsCustomResource(this, 'EnableAllFeatures.Handshake.Parties', props);
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
    const resource = new cr.AwsCustomResource(this, 'EnableAllFeatures.Handshake.State', props);
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
    const resource = new cr.AwsCustomResource(this, 'EnableAllFeatures.Handshake.RequestedTimestamp', props);
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
    const resource = new cr.AwsCustomResource(this, 'EnableAllFeatures.Handshake.ExpirationTimestamp', props);
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
    const resource = new cr.AwsCustomResource(this, 'EnableAllFeatures.Handshake.Action', props);
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
    const resource = new cr.AwsCustomResource(this, 'EnableAllFeatures.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsEnablePolicyType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsEnablePolicyTypeRequest) {
    super(scope, id);
  }

  public get root(): OrganizationsEnablePolicyTypeRoot {
    return new OrganizationsEnablePolicyTypeRoot(this, 'Root', this.__resources, this.input);
  }

}

export class OrganizationsEnablePolicyTypeRoot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsEnablePolicyTypeRequest) {
    super(scope, id);
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
          RootId: this.input.rootId,
          PolicyType: this.input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnablePolicyType.Root.Id', props);
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
          RootId: this.input.rootId,
          PolicyType: this.input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnablePolicyType.Root.Arn', props);
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
          RootId: this.input.rootId,
          PolicyType: this.input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnablePolicyType.Root.Name', props);
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
          RootId: this.input.rootId,
          PolicyType: this.input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnablePolicyType.Root.PolicyTypes', props);
    return resource.getResponseField('Root.PolicyTypes') as unknown as shapes.OrganizationsPolicyTypeSummary[];
  }

}

export class OrganizationsInviteAccountToOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsInviteAccountToOrganizationRequest) {
    super(scope, id);
  }

  public get handshake(): OrganizationsInviteAccountToOrganizationHandshake {
    return new OrganizationsInviteAccountToOrganizationHandshake(this, 'Handshake', this.__resources, this.input);
  }

}

export class OrganizationsInviteAccountToOrganizationHandshake extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsInviteAccountToOrganizationRequest) {
    super(scope, id);
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
            Id: this.input.target.id,
            Type: this.input.target.type,
          },
          Notes: this.input.notes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteAccountToOrganization.Handshake.Id', props);
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
            Id: this.input.target.id,
            Type: this.input.target.type,
          },
          Notes: this.input.notes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteAccountToOrganization.Handshake.Arn', props);
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
            Id: this.input.target.id,
            Type: this.input.target.type,
          },
          Notes: this.input.notes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteAccountToOrganization.Handshake.Parties', props);
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
            Id: this.input.target.id,
            Type: this.input.target.type,
          },
          Notes: this.input.notes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteAccountToOrganization.Handshake.State', props);
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
            Id: this.input.target.id,
            Type: this.input.target.type,
          },
          Notes: this.input.notes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteAccountToOrganization.Handshake.RequestedTimestamp', props);
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
            Id: this.input.target.id,
            Type: this.input.target.type,
          },
          Notes: this.input.notes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteAccountToOrganization.Handshake.ExpirationTimestamp', props);
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
            Id: this.input.target.id,
            Type: this.input.target.type,
          },
          Notes: this.input.notes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteAccountToOrganization.Handshake.Action', props);
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
            Id: this.input.target.id,
            Type: this.input.target.type,
          },
          Notes: this.input.notes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InviteAccountToOrganization.Handshake.Resources', props);
    return resource.getResponseField('Handshake.Resources') as unknown as shapes.OrganizationsHandshakeResource[];
  }

}

export class OrganizationsListAwsServiceAccessForOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListAwsServiceAccessForOrganizationRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAWSServiceAccessForOrganization.EnabledServicePrincipals', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAWSServiceAccessForOrganization.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListAccounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListAccountsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccounts.Accounts', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccounts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListAccountsForParent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListAccountsForParentRequest) {
    super(scope, id);
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
          ParentId: this.input.parentId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountsForParent.Accounts', props);
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
          ParentId: this.input.parentId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountsForParent.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListChildren extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListChildrenRequest) {
    super(scope, id);
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
          ParentId: this.input.parentId,
          ChildType: this.input.childType,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChildren.Children', props);
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
          ParentId: this.input.parentId,
          ChildType: this.input.childType,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChildren.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListCreateAccountStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListCreateAccountStatusRequest) {
    super(scope, id);
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
          States: this.input.states,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCreateAccountStatus.CreateAccountStatuses', props);
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
          States: this.input.states,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCreateAccountStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListDelegatedAdministrators extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListDelegatedAdministratorsRequest) {
    super(scope, id);
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
          ServicePrincipal: this.input.servicePrincipal,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDelegatedAdministrators.DelegatedAdministrators', props);
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
          ServicePrincipal: this.input.servicePrincipal,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDelegatedAdministrators.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListDelegatedServicesForAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListDelegatedServicesForAccountRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDelegatedServicesForAccount.DelegatedServices', props);
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
          AccountId: this.input.accountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDelegatedServicesForAccount.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListHandshakesForAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListHandshakesForAccountRequest) {
    super(scope, id);
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
            ActionType: this.input.filter?.actionType,
            ParentHandshakeId: this.input.filter?.parentHandshakeId,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHandshakesForAccount.Handshakes', props);
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
            ActionType: this.input.filter?.actionType,
            ParentHandshakeId: this.input.filter?.parentHandshakeId,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHandshakesForAccount.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListHandshakesForOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListHandshakesForOrganizationRequest) {
    super(scope, id);
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
            ActionType: this.input.filter?.actionType,
            ParentHandshakeId: this.input.filter?.parentHandshakeId,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHandshakesForOrganization.Handshakes', props);
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
            ActionType: this.input.filter?.actionType,
            ParentHandshakeId: this.input.filter?.parentHandshakeId,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHandshakesForOrganization.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListOrganizationalUnitsForParent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListOrganizationalUnitsForParentRequest) {
    super(scope, id);
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
          ParentId: this.input.parentId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationalUnitsForParent.OrganizationalUnits', props);
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
          ParentId: this.input.parentId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationalUnitsForParent.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListParents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListParentsRequest) {
    super(scope, id);
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
          ChildId: this.input.childId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParents.Parents', props);
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
          ChildId: this.input.childId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListPoliciesRequest) {
    super(scope, id);
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
          Filter: this.input.filter,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicies.Policies', props);
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
          Filter: this.input.filter,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListPoliciesForTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListPoliciesForTargetRequest) {
    super(scope, id);
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
          TargetId: this.input.targetId,
          Filter: this.input.filter,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPoliciesForTarget.Policies', props);
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
          TargetId: this.input.targetId,
          Filter: this.input.filter,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPoliciesForTarget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListRoots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListRootsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoots.Roots', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoots.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceId: this.input.resourceId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
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
          ResourceId: this.input.resourceId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsListTargetsForPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsListTargetsForPolicyRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargetsForPolicy.Targets', props);
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
          PolicyId: this.input.policyId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargetsForPolicy.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OrganizationsUpdateOrganizationalUnit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsUpdateOrganizationalUnitRequest) {
    super(scope, id);
  }

  public get organizationalUnit(): OrganizationsUpdateOrganizationalUnitOrganizationalUnit {
    return new OrganizationsUpdateOrganizationalUnitOrganizationalUnit(this, 'OrganizationalUnit', this.__resources, this.input);
  }

}

export class OrganizationsUpdateOrganizationalUnitOrganizationalUnit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsUpdateOrganizationalUnitRequest) {
    super(scope, id);
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
          OrganizationalUnitId: this.input.organizationalUnitId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOrganizationalUnit.OrganizationalUnit.Id', props);
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
          OrganizationalUnitId: this.input.organizationalUnitId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOrganizationalUnit.OrganizationalUnit.Arn', props);
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
          OrganizationalUnitId: this.input.organizationalUnitId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateOrganizationalUnit.OrganizationalUnit.Name', props);
    return resource.getResponseField('OrganizationalUnit.Name') as unknown as string;
  }

}

export class OrganizationsUpdatePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsUpdatePolicyRequest) {
    super(scope, id);
  }

  public get policy(): OrganizationsUpdatePolicyPolicy {
    return new OrganizationsUpdatePolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class OrganizationsUpdatePolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsUpdatePolicyRequest) {
    super(scope, id);
  }

  public get policySummary(): OrganizationsUpdatePolicyPolicyPolicySummary {
    return new OrganizationsUpdatePolicyPolicyPolicySummary(this, 'PolicySummary', this.__resources, this.input);
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
          PolicyId: this.input.policyId,
          Name: this.input.name,
          Description: this.input.description,
          Content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePolicy.Policy.Content', props);
    return resource.getResponseField('Policy.Content') as unknown as string;
  }

}

export class OrganizationsUpdatePolicyPolicyPolicySummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OrganizationsUpdatePolicyRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
          Name: this.input.name,
          Description: this.input.description,
          Content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePolicy.Policy.PolicySummary.Id', props);
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
          PolicyId: this.input.policyId,
          Name: this.input.name,
          Description: this.input.description,
          Content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePolicy.Policy.PolicySummary.Arn', props);
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
          PolicyId: this.input.policyId,
          Name: this.input.name,
          Description: this.input.description,
          Content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePolicy.Policy.PolicySummary.Name', props);
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
          PolicyId: this.input.policyId,
          Name: this.input.name,
          Description: this.input.description,
          Content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePolicy.Policy.PolicySummary.Description', props);
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
          PolicyId: this.input.policyId,
          Name: this.input.name,
          Description: this.input.description,
          Content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePolicy.Policy.PolicySummary.Type', props);
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
          PolicyId: this.input.policyId,
          Name: this.input.name,
          Description: this.input.description,
          Content: this.input.content,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePolicy.Policy.PolicySummary.AwsManaged', props);
    return resource.getResponseField('Policy.PolicySummary.AwsManaged') as unknown as boolean;
  }

}

