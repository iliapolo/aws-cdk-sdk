import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WorkMailClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateDelegateToResource(input: shapes.WorkMailAssociateDelegateToResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateDelegateToResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.AssociateDelegateToResource'),
        parameters: {
          OrganizationId: input.organizationId,
          ResourceId: input.resourceId,
          EntityId: input.entityId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateDelegateToResource', props);
  }

  public associateMemberToGroup(input: shapes.WorkMailAssociateMemberToGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateMemberToGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.AssociateMemberToGroup'),
        parameters: {
          OrganizationId: input.organizationId,
          GroupId: input.groupId,
          MemberId: input.memberId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateMemberToGroup', props);
  }

  public cancelMailboxExportJob(input: shapes.WorkMailCancelMailboxExportJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.CancelMailboxExportJob'),
        parameters: {
          ClientToken: input.clientToken,
          JobId: input.jobId,
          OrganizationId: input.organizationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelMailboxExportJob', props);
  }

  public createAlias(input: shapes.WorkMailCreateAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.CreateAlias'),
        parameters: {
          OrganizationId: input.organizationId,
          EntityId: input.entityId,
          Alias: input.alias,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateAlias', props);
  }

  public createGroup(input: shapes.WorkMailCreateGroupRequest): WorkMailCreateGroup {
    return new WorkMailCreateGroup(this, 'CreateGroup', this.__resources, input);
  }

  public createOrganization(input: shapes.WorkMailCreateOrganizationRequest): WorkMailCreateOrganization {
    return new WorkMailCreateOrganization(this, 'CreateOrganization', this.__resources, input);
  }

  public createResource(input: shapes.WorkMailCreateResourceRequest): WorkMailCreateResource {
    return new WorkMailCreateResource(this, 'CreateResource', this.__resources, input);
  }

  public createUser(input: shapes.WorkMailCreateUserRequest): WorkMailCreateUser {
    return new WorkMailCreateUser(this, 'CreateUser', this.__resources, input);
  }

  public deleteAccessControlRule(input: shapes.WorkMailDeleteAccessControlRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccessControlRule',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeleteAccessControlRule'),
        parameters: {
          OrganizationId: input.organizationId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccessControlRule', props);
  }

  public deleteAlias(input: shapes.WorkMailDeleteAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAlias',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeleteAlias'),
        parameters: {
          OrganizationId: input.organizationId,
          EntityId: input.entityId,
          Alias: input.alias,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAlias', props);
  }

  public deleteGroup(input: shapes.WorkMailDeleteGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeleteGroup'),
        parameters: {
          OrganizationId: input.organizationId,
          GroupId: input.groupId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGroup', props);
  }

  public deleteMailboxPermissions(input: shapes.WorkMailDeleteMailboxPermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMailboxPermissions',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeleteMailboxPermissions'),
        parameters: {
          OrganizationId: input.organizationId,
          EntityId: input.entityId,
          GranteeId: input.granteeId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMailboxPermissions', props);
  }

  public deleteOrganization(input: shapes.WorkMailDeleteOrganizationRequest): WorkMailDeleteOrganization {
    return new WorkMailDeleteOrganization(this, 'DeleteOrganization', this.__resources, input);
  }

  public deleteResource(input: shapes.WorkMailDeleteResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeleteResource'),
        parameters: {
          OrganizationId: input.organizationId,
          ResourceId: input.resourceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResource', props);
  }

  public deleteRetentionPolicy(input: shapes.WorkMailDeleteRetentionPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRetentionPolicy',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeleteRetentionPolicy'),
        parameters: {
          OrganizationId: input.organizationId,
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRetentionPolicy', props);
  }

  public deleteUser(input: shapes.WorkMailDeleteUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeleteUser'),
        parameters: {
          OrganizationId: input.organizationId,
          UserId: input.userId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUser', props);
  }

  public deregisterFromWorkMail(input: shapes.WorkMailDeregisterFromWorkMailRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterFromWorkMail',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeregisterFromWorkMail'),
        parameters: {
          OrganizationId: input.organizationId,
          EntityId: input.entityId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterFromWorkMail', props);
  }

  public describeGroup(input: shapes.WorkMailDescribeGroupRequest): WorkMailDescribeGroup {
    return new WorkMailDescribeGroup(this, 'DescribeGroup', this.__resources, input);
  }

  public describeMailboxExportJob(input: shapes.WorkMailDescribeMailboxExportJobRequest): WorkMailDescribeMailboxExportJob {
    return new WorkMailDescribeMailboxExportJob(this, 'DescribeMailboxExportJob', this.__resources, input);
  }

  public describeOrganization(input: shapes.WorkMailDescribeOrganizationRequest): WorkMailDescribeOrganization {
    return new WorkMailDescribeOrganization(this, 'DescribeOrganization', this.__resources, input);
  }

  public describeResource(input: shapes.WorkMailDescribeResourceRequest): WorkMailDescribeResource {
    return new WorkMailDescribeResource(this, 'DescribeResource', this.__resources, input);
  }

  public describeUser(input: shapes.WorkMailDescribeUserRequest): WorkMailDescribeUser {
    return new WorkMailDescribeUser(this, 'DescribeUser', this.__resources, input);
  }

  public disassociateDelegateFromResource(input: shapes.WorkMailDisassociateDelegateFromResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateDelegateFromResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DisassociateDelegateFromResource'),
        parameters: {
          OrganizationId: input.organizationId,
          ResourceId: input.resourceId,
          EntityId: input.entityId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateDelegateFromResource', props);
  }

  public disassociateMemberFromGroup(input: shapes.WorkMailDisassociateMemberFromGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateMemberFromGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DisassociateMemberFromGroup'),
        parameters: {
          OrganizationId: input.organizationId,
          GroupId: input.groupId,
          MemberId: input.memberId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateMemberFromGroup', props);
  }

  public fetchAccessControlEffect(input: shapes.WorkMailGetAccessControlEffectRequest): WorkMailFetchAccessControlEffect {
    return new WorkMailFetchAccessControlEffect(this, 'FetchAccessControlEffect', this.__resources, input);
  }

  public fetchDefaultRetentionPolicy(input: shapes.WorkMailGetDefaultRetentionPolicyRequest): WorkMailFetchDefaultRetentionPolicy {
    return new WorkMailFetchDefaultRetentionPolicy(this, 'FetchDefaultRetentionPolicy', this.__resources, input);
  }

  public fetchMailboxDetails(input: shapes.WorkMailGetMailboxDetailsRequest): WorkMailFetchMailboxDetails {
    return new WorkMailFetchMailboxDetails(this, 'FetchMailboxDetails', this.__resources, input);
  }

  public listAccessControlRules(input: shapes.WorkMailListAccessControlRulesRequest): WorkMailListAccessControlRules {
    return new WorkMailListAccessControlRules(this, 'ListAccessControlRules', this.__resources, input);
  }

  public listAliases(input: shapes.WorkMailListAliasesRequest): WorkMailListAliases {
    return new WorkMailListAliases(this, 'ListAliases', this.__resources, input);
  }

  public listGroupMembers(input: shapes.WorkMailListGroupMembersRequest): WorkMailListGroupMembers {
    return new WorkMailListGroupMembers(this, 'ListGroupMembers', this.__resources, input);
  }

  public listGroups(input: shapes.WorkMailListGroupsRequest): WorkMailListGroups {
    return new WorkMailListGroups(this, 'ListGroups', this.__resources, input);
  }

  public listMailboxExportJobs(input: shapes.WorkMailListMailboxExportJobsRequest): WorkMailListMailboxExportJobs {
    return new WorkMailListMailboxExportJobs(this, 'ListMailboxExportJobs', this.__resources, input);
  }

  public listMailboxPermissions(input: shapes.WorkMailListMailboxPermissionsRequest): WorkMailListMailboxPermissions {
    return new WorkMailListMailboxPermissions(this, 'ListMailboxPermissions', this.__resources, input);
  }

  public listOrganizations(input: shapes.WorkMailListOrganizationsRequest): WorkMailListOrganizations {
    return new WorkMailListOrganizations(this, 'ListOrganizations', this.__resources, input);
  }

  public listResourceDelegates(input: shapes.WorkMailListResourceDelegatesRequest): WorkMailListResourceDelegates {
    return new WorkMailListResourceDelegates(this, 'ListResourceDelegates', this.__resources, input);
  }

  public listResources(input: shapes.WorkMailListResourcesRequest): WorkMailListResources {
    return new WorkMailListResources(this, 'ListResources', this.__resources, input);
  }

  public listTagsForResource(input: shapes.WorkMailListTagsForResourceRequest): WorkMailListTagsForResource {
    return new WorkMailListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listUsers(input: shapes.WorkMailListUsersRequest): WorkMailListUsers {
    return new WorkMailListUsers(this, 'ListUsers', this.__resources, input);
  }

  public putAccessControlRule(input: shapes.WorkMailPutAccessControlRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccessControlRule',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.PutAccessControlRule'),
        parameters: {
          Name: input.name,
          Effect: input.effect,
          Description: input.description,
          IpRanges: input.ipRanges,
          NotIpRanges: input.notIpRanges,
          Actions: input.actions,
          NotActions: input.notActions,
          UserIds: input.userIds,
          NotUserIds: input.notUserIds,
          OrganizationId: input.organizationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccessControlRule', props);
  }

  public putMailboxPermissions(input: shapes.WorkMailPutMailboxPermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMailboxPermissions',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.PutMailboxPermissions'),
        parameters: {
          OrganizationId: input.organizationId,
          EntityId: input.entityId,
          GranteeId: input.granteeId,
          PermissionValues: input.permissionValues,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutMailboxPermissions', props);
  }

  public putRetentionPolicy(input: shapes.WorkMailPutRetentionPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRetentionPolicy',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.PutRetentionPolicy'),
        parameters: {
          OrganizationId: input.organizationId,
          Id: input.id,
          Name: input.name,
          Description: input.description,
          FolderConfigurations: input.folderConfigurations,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutRetentionPolicy', props);
  }

  public registerToWorkMail(input: shapes.WorkMailRegisterToWorkMailRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerToWorkMail',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.RegisterToWorkMail'),
        parameters: {
          OrganizationId: input.organizationId,
          EntityId: input.entityId,
          Email: input.email,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterToWorkMail', props);
  }

  public resetPassword(input: shapes.WorkMailResetPasswordRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetPassword',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ResetPassword'),
        parameters: {
          OrganizationId: input.organizationId,
          UserId: input.userId,
          Password: input.password,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ResetPassword', props);
  }

  public startMailboxExportJob(input: shapes.WorkMailStartMailboxExportJobRequest): WorkMailStartMailboxExportJob {
    return new WorkMailStartMailboxExportJob(this, 'StartMailboxExportJob', this.__resources, input);
  }

  public tagResource(input: shapes.WorkMailTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.WorkMailUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateMailboxQuota(input: shapes.WorkMailUpdateMailboxQuotaRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMailboxQuota',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.UpdateMailboxQuota'),
        parameters: {
          OrganizationId: input.organizationId,
          UserId: input.userId,
          MailboxQuota: input.mailboxQuota,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateMailboxQuota', props);
  }

  public updatePrimaryEmailAddress(input: shapes.WorkMailUpdatePrimaryEmailAddressRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePrimaryEmailAddress',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.UpdatePrimaryEmailAddress'),
        parameters: {
          OrganizationId: input.organizationId,
          EntityId: input.entityId,
          Email: input.email,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePrimaryEmailAddress', props);
  }

  public updateResource(input: shapes.WorkMailUpdateResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.UpdateResource'),
        parameters: {
          OrganizationId: input.organizationId,
          ResourceId: input.resourceId,
          Name: input.name,
          BookingOptions: {
            AutoAcceptRequests: input.bookingOptions?.autoAcceptRequests,
            AutoDeclineRecurringRequests: input.bookingOptions?.autoDeclineRecurringRequests,
            AutoDeclineConflictingRequests: input.bookingOptions?.autoDeclineConflictingRequests,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateResource', props);
  }

}

export class WorkMailCreateGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailCreateGroupRequest) {
    super(scope, id);
  }

  public get groupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.CreateGroup.GroupId'),
        outputPath: 'GroupId',
        parameters: {
          OrganizationId: this.input.organizationId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

}

export class WorkMailCreateOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailCreateOrganizationRequest) {
    super(scope, id);
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.CreateOrganization.OrganizationId'),
        outputPath: 'OrganizationId',
        parameters: {
          DirectoryId: this.input.directoryId,
          Alias: this.input.alias,
          ClientToken: this.input.clientToken,
          Domains: this.input.domains,
          KmsKeyArn: this.input.kmsKeyArn,
          EnableInteroperability: this.input.enableInteroperability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOrganization.OrganizationId', props);
    return resource.getResponseField('OrganizationId') as unknown as string;
  }

}

export class WorkMailCreateResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailCreateResourceRequest) {
    super(scope, id);
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.CreateResource.ResourceId'),
        outputPath: 'ResourceId',
        parameters: {
          OrganizationId: this.input.organizationId,
          Name: this.input.name,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResource.ResourceId', props);
    return resource.getResponseField('ResourceId') as unknown as string;
  }

}

export class WorkMailCreateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailCreateUserRequest) {
    super(scope, id);
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.CreateUser.UserId'),
        outputPath: 'UserId',
        parameters: {
          OrganizationId: this.input.organizationId,
          Name: this.input.name,
          DisplayName: this.input.displayName,
          Password: this.input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

}

export class WorkMailDeleteOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailDeleteOrganizationRequest) {
    super(scope, id);
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeleteOrganization.OrganizationId'),
        outputPath: 'OrganizationId',
        parameters: {
          ClientToken: this.input.clientToken,
          OrganizationId: this.input.organizationId,
          DeleteDirectory: this.input.deleteDirectory,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteOrganization.OrganizationId', props);
    return resource.getResponseField('OrganizationId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DeleteOrganization.State'),
        outputPath: 'State',
        parameters: {
          ClientToken: this.input.clientToken,
          OrganizationId: this.input.organizationId,
          DeleteDirectory: this.input.deleteDirectory,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteOrganization.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class WorkMailDescribeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailDescribeGroupRequest) {
    super(scope, id);
  }

  public get groupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeGroup.GroupId'),
        outputPath: 'GroupId',
        parameters: {
          OrganizationId: this.input.organizationId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeGroup.Name'),
        outputPath: 'Name',
        parameters: {
          OrganizationId: this.input.organizationId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeGroup.Email'),
        outputPath: 'Email',
        parameters: {
          OrganizationId: this.input.organizationId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.Email', props);
    return resource.getResponseField('Email') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeGroup.State'),
        outputPath: 'State',
        parameters: {
          OrganizationId: this.input.organizationId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get enabledDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeGroup.EnabledDate'),
        outputPath: 'EnabledDate',
        parameters: {
          OrganizationId: this.input.organizationId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.EnabledDate', props);
    return resource.getResponseField('EnabledDate') as unknown as string;
  }

  public get disabledDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeGroup.DisabledDate'),
        outputPath: 'DisabledDate',
        parameters: {
          OrganizationId: this.input.organizationId,
          GroupId: this.input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.DisabledDate', props);
    return resource.getResponseField('DisabledDate') as unknown as string;
  }

}

export class WorkMailDescribeMailboxExportJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailDescribeMailboxExportJobRequest) {
    super(scope, id);
  }

  public get entityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.EntityId'),
        outputPath: 'EntityId',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.EntityId', props);
    return resource.getResponseField('EntityId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.Description'),
        outputPath: 'Description',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.KmsKeyArn'),
        outputPath: 'KmsKeyArn',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.KmsKeyArn', props);
    return resource.getResponseField('KmsKeyArn') as unknown as string;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.S3BucketName'),
        outputPath: 'S3BucketName',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.S3BucketName', props);
    return resource.getResponseField('S3BucketName') as unknown as string;
  }

  public get s3Prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.S3Prefix'),
        outputPath: 'S3Prefix',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.S3Prefix', props);
    return resource.getResponseField('S3Prefix') as unknown as string;
  }

  public get s3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.S3Path'),
        outputPath: 'S3Path',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.S3Path', props);
    return resource.getResponseField('S3Path') as unknown as string;
  }

  public get estimatedProgress(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.EstimatedProgress'),
        outputPath: 'EstimatedProgress',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.EstimatedProgress', props);
    return resource.getResponseField('EstimatedProgress') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.State'),
        outputPath: 'State',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get errorInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.ErrorInfo'),
        outputPath: 'ErrorInfo',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.ErrorInfo', props);
    return resource.getResponseField('ErrorInfo') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeMailboxExportJob.EndTime'),
        outputPath: 'EndTime',
        parameters: {
          JobId: this.input.jobId,
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMailboxExportJob.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

}

export class WorkMailDescribeOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailDescribeOrganizationRequest) {
    super(scope, id);
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeOrganization.OrganizationId'),
        outputPath: 'OrganizationId',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.OrganizationId', props);
    return resource.getResponseField('OrganizationId') as unknown as string;
  }

  public get alias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeOrganization.Alias'),
        outputPath: 'Alias',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.Alias', props);
    return resource.getResponseField('Alias') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeOrganization.State'),
        outputPath: 'State',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get directoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeOrganization.DirectoryId'),
        outputPath: 'DirectoryId',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.DirectoryId', props);
    return resource.getResponseField('DirectoryId') as unknown as string;
  }

  public get directoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeOrganization.DirectoryType'),
        outputPath: 'DirectoryType',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.DirectoryType', props);
    return resource.getResponseField('DirectoryType') as unknown as string;
  }

  public get defaultMailDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeOrganization.DefaultMailDomain'),
        outputPath: 'DefaultMailDomain',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.DefaultMailDomain', props);
    return resource.getResponseField('DefaultMailDomain') as unknown as string;
  }

  public get completedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeOrganization.CompletedDate'),
        outputPath: 'CompletedDate',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.CompletedDate', props);
    return resource.getResponseField('CompletedDate') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeOrganization.ErrorMessage'),
        outputPath: 'ErrorMessage',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.ErrorMessage', props);
    return resource.getResponseField('ErrorMessage') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrganization',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeOrganization.ARN'),
        outputPath: 'ARN',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrganization.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class WorkMailDescribeResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailDescribeResourceRequest) {
    super(scope, id);
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.ResourceId'),
        outputPath: 'ResourceId',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.ResourceId', props);
    return resource.getResponseField('ResourceId') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.Email'),
        outputPath: 'Email',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.Email', props);
    return resource.getResponseField('Email') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.Name'),
        outputPath: 'Name',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.Type'),
        outputPath: 'Type',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get bookingOptions(): WorkMailDescribeResourceBookingOptions {
    return new WorkMailDescribeResourceBookingOptions(this, 'BookingOptions', this.__resources, this.input);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.State'),
        outputPath: 'State',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get enabledDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.EnabledDate'),
        outputPath: 'EnabledDate',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.EnabledDate', props);
    return resource.getResponseField('EnabledDate') as unknown as string;
  }

  public get disabledDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.DisabledDate'),
        outputPath: 'DisabledDate',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.DisabledDate', props);
    return resource.getResponseField('DisabledDate') as unknown as string;
  }

}

export class WorkMailDescribeResourceBookingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailDescribeResourceRequest) {
    super(scope, id);
  }

  public get autoAcceptRequests(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.BookingOptions.AutoAcceptRequests'),
        outputPath: 'BookingOptions.AutoAcceptRequests',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.BookingOptions.AutoAcceptRequests', props);
    return resource.getResponseField('BookingOptions.AutoAcceptRequests') as unknown as boolean;
  }

  public get autoDeclineRecurringRequests(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.BookingOptions.AutoDeclineRecurringRequests'),
        outputPath: 'BookingOptions.AutoDeclineRecurringRequests',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.BookingOptions.AutoDeclineRecurringRequests', props);
    return resource.getResponseField('BookingOptions.AutoDeclineRecurringRequests') as unknown as boolean;
  }

  public get autoDeclineConflictingRequests(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeResource.BookingOptions.AutoDeclineConflictingRequests'),
        outputPath: 'BookingOptions.AutoDeclineConflictingRequests',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.BookingOptions.AutoDeclineConflictingRequests', props);
    return resource.getResponseField('BookingOptions.AutoDeclineConflictingRequests') as unknown as boolean;
  }

}

export class WorkMailDescribeUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailDescribeUserRequest) {
    super(scope, id);
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeUser.UserId'),
        outputPath: 'UserId',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeUser.Name'),
        outputPath: 'Name',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeUser.Email'),
        outputPath: 'Email',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.Email', props);
    return resource.getResponseField('Email') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeUser.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeUser.State'),
        outputPath: 'State',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get userRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeUser.UserRole'),
        outputPath: 'UserRole',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.UserRole', props);
    return resource.getResponseField('UserRole') as unknown as string;
  }

  public get enabledDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeUser.EnabledDate'),
        outputPath: 'EnabledDate',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.EnabledDate', props);
    return resource.getResponseField('EnabledDate') as unknown as string;
  }

  public get disabledDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.DescribeUser.DisabledDate'),
        outputPath: 'DisabledDate',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.DisabledDate', props);
    return resource.getResponseField('DisabledDate') as unknown as string;
  }

}

export class WorkMailFetchAccessControlEffect extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailGetAccessControlEffectRequest) {
    super(scope, id);
  }

  public get effect(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessControlEffect',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.GetAccessControlEffect.Effect'),
        outputPath: 'Effect',
        parameters: {
          OrganizationId: this.input.organizationId,
          IpAddress: this.input.ipAddress,
          Action: this.input.action,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessControlEffect.Effect', props);
    return resource.getResponseField('Effect') as unknown as string;
  }

  public get matchedRules(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessControlEffect',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.GetAccessControlEffect.MatchedRules'),
        outputPath: 'MatchedRules',
        parameters: {
          OrganizationId: this.input.organizationId,
          IpAddress: this.input.ipAddress,
          Action: this.input.action,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessControlEffect.MatchedRules', props);
    return resource.getResponseField('MatchedRules') as unknown as string[];
  }

}

export class WorkMailFetchDefaultRetentionPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailGetDefaultRetentionPolicyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDefaultRetentionPolicy',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.GetDefaultRetentionPolicy.Id'),
        outputPath: 'Id',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDefaultRetentionPolicy.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDefaultRetentionPolicy',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.GetDefaultRetentionPolicy.Name'),
        outputPath: 'Name',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDefaultRetentionPolicy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDefaultRetentionPolicy',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.GetDefaultRetentionPolicy.Description'),
        outputPath: 'Description',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDefaultRetentionPolicy.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get folderConfigurations(): shapes.WorkMailFolderConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDefaultRetentionPolicy',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.GetDefaultRetentionPolicy.FolderConfigurations'),
        outputPath: 'FolderConfigurations',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDefaultRetentionPolicy.FolderConfigurations', props);
    return resource.getResponseField('FolderConfigurations') as unknown as shapes.WorkMailFolderConfiguration[];
  }

}

export class WorkMailFetchMailboxDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailGetMailboxDetailsRequest) {
    super(scope, id);
  }

  public get mailboxQuota(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMailboxDetails',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.GetMailboxDetails.MailboxQuota'),
        outputPath: 'MailboxQuota',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMailboxDetails.MailboxQuota', props);
    return resource.getResponseField('MailboxQuota') as unknown as number;
  }

  public get mailboxSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMailboxDetails',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.GetMailboxDetails.MailboxSize'),
        outputPath: 'MailboxSize',
        parameters: {
          OrganizationId: this.input.organizationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMailboxDetails.MailboxSize', props);
    return resource.getResponseField('MailboxSize') as unknown as number;
  }

}

export class WorkMailListAccessControlRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListAccessControlRulesRequest) {
    super(scope, id);
  }

  public get rules(): shapes.WorkMailAccessControlRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessControlRules',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListAccessControlRules.Rules'),
        outputPath: 'Rules',
        parameters: {
          OrganizationId: this.input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccessControlRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WorkMailAccessControlRule[];
  }

}

export class WorkMailListAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListAliasesRequest) {
    super(scope, id);
  }

  public get aliases(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAliases',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListAliases.Aliases'),
        outputPath: 'Aliases',
        parameters: {
          OrganizationId: this.input.organizationId,
          EntityId: this.input.entityId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAliases',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListAliases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OrganizationId: this.input.organizationId,
          EntityId: this.input.entityId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailListGroupMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListGroupMembersRequest) {
    super(scope, id);
  }

  public get members(): shapes.WorkMailMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupMembers',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListGroupMembers.Members'),
        outputPath: 'Members',
        parameters: {
          OrganizationId: this.input.organizationId,
          GroupId: this.input.groupId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupMembers.Members', props);
    return resource.getResponseField('Members') as unknown as shapes.WorkMailMember[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupMembers',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListGroupMembers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OrganizationId: this.input.organizationId,
          GroupId: this.input.groupId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailListGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListGroupsRequest) {
    super(scope, id);
  }

  public get groups(): shapes.WorkMailGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListGroups.Groups'),
        outputPath: 'Groups',
        parameters: {
          OrganizationId: this.input.organizationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.Groups', props);
    return resource.getResponseField('Groups') as unknown as shapes.WorkMailGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OrganizationId: this.input.organizationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailListMailboxExportJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListMailboxExportJobsRequest) {
    super(scope, id);
  }

  public get jobs(): shapes.WorkMailMailboxExportJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMailboxExportJobs',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListMailboxExportJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          OrganizationId: this.input.organizationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMailboxExportJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.WorkMailMailboxExportJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMailboxExportJobs',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListMailboxExportJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OrganizationId: this.input.organizationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMailboxExportJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailListMailboxPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListMailboxPermissionsRequest) {
    super(scope, id);
  }

  public get permissions(): shapes.WorkMailPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMailboxPermissions',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListMailboxPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          OrganizationId: this.input.organizationId,
          EntityId: this.input.entityId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMailboxPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.WorkMailPermission[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMailboxPermissions',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListMailboxPermissions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OrganizationId: this.input.organizationId,
          EntityId: this.input.entityId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMailboxPermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailListOrganizations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListOrganizationsRequest) {
    super(scope, id);
  }

  public get organizationSummaries(): shapes.WorkMailOrganizationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizations',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListOrganizations.OrganizationSummaries'),
        outputPath: 'OrganizationSummaries',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizations.OrganizationSummaries', props);
    return resource.getResponseField('OrganizationSummaries') as unknown as shapes.WorkMailOrganizationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizations',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListOrganizations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailListResourceDelegates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListResourceDelegatesRequest) {
    super(scope, id);
  }

  public get delegates(): shapes.WorkMailDelegate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceDelegates',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListResourceDelegates.Delegates'),
        outputPath: 'Delegates',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceDelegates.Delegates', props);
    return resource.getResponseField('Delegates') as unknown as shapes.WorkMailDelegate[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceDelegates',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListResourceDelegates.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OrganizationId: this.input.organizationId,
          ResourceId: this.input.resourceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceDelegates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailListResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListResourcesRequest) {
    super(scope, id);
  }

  public get resources(): shapes.WorkMailResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListResources.Resources'),
        outputPath: 'Resources',
        parameters: {
          OrganizationId: this.input.organizationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResources.Resources', props);
    return resource.getResponseField('Resources') as unknown as shapes.WorkMailResource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListResources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OrganizationId: this.input.organizationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.WorkMailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.WorkMailTag[];
  }

}

export class WorkMailListUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailListUsersRequest) {
    super(scope, id);
  }

  public get users(): shapes.WorkMailUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListUsers.Users'),
        outputPath: 'Users',
        parameters: {
          OrganizationId: this.input.organizationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.WorkMailUser[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.ListUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OrganizationId: this.input.organizationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailStartMailboxExportJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkMailStartMailboxExportJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMailboxExportJob',
        service: 'WorkMail',
        physicalResourceId: cr.PhysicalResourceId.of('WorkMail.StartMailboxExportJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          ClientToken: this.input.clientToken,
          OrganizationId: this.input.organizationId,
          EntityId: this.input.entityId,
          Description: this.input.description,
          RoleArn: this.input.roleArn,
          KmsKeyArn: this.input.kmsKeyArn,
          S3BucketName: this.input.s3BucketName,
          S3Prefix: this.input.s3Prefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMailboxExportJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

