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

  public createGroup(input: shapes.WorkMailCreateGroupRequest): WorkMailResponsesCreateGroup {
    return new WorkMailResponsesCreateGroup(this, this.__resources, input);
  }

  public createOrganization(input: shapes.WorkMailCreateOrganizationRequest): WorkMailResponsesCreateOrganization {
    return new WorkMailResponsesCreateOrganization(this, this.__resources, input);
  }

  public createResource(input: shapes.WorkMailCreateResourceRequest): WorkMailResponsesCreateResource {
    return new WorkMailResponsesCreateResource(this, this.__resources, input);
  }

  public createUser(input: shapes.WorkMailCreateUserRequest): WorkMailResponsesCreateUser {
    return new WorkMailResponsesCreateUser(this, this.__resources, input);
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

  public deleteOrganization(input: shapes.WorkMailDeleteOrganizationRequest): WorkMailResponsesDeleteOrganization {
    return new WorkMailResponsesDeleteOrganization(this, this.__resources, input);
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

  public describeGroup(input: shapes.WorkMailDescribeGroupRequest): WorkMailResponsesDescribeGroup {
    return new WorkMailResponsesDescribeGroup(this, this.__resources, input);
  }

  public describeMailboxExportJob(input: shapes.WorkMailDescribeMailboxExportJobRequest): WorkMailResponsesDescribeMailboxExportJob {
    return new WorkMailResponsesDescribeMailboxExportJob(this, this.__resources, input);
  }

  public describeOrganization(input: shapes.WorkMailDescribeOrganizationRequest): WorkMailResponsesDescribeOrganization {
    return new WorkMailResponsesDescribeOrganization(this, this.__resources, input);
  }

  public describeResource(input: shapes.WorkMailDescribeResourceRequest): WorkMailResponsesDescribeResource {
    return new WorkMailResponsesDescribeResource(this, this.__resources, input);
  }

  public describeUser(input: shapes.WorkMailDescribeUserRequest): WorkMailResponsesDescribeUser {
    return new WorkMailResponsesDescribeUser(this, this.__resources, input);
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

  public fetchAccessControlEffect(input: shapes.WorkMailGetAccessControlEffectRequest): WorkMailResponsesFetchAccessControlEffect {
    return new WorkMailResponsesFetchAccessControlEffect(this, this.__resources, input);
  }

  public fetchDefaultRetentionPolicy(input: shapes.WorkMailGetDefaultRetentionPolicyRequest): WorkMailResponsesFetchDefaultRetentionPolicy {
    return new WorkMailResponsesFetchDefaultRetentionPolicy(this, this.__resources, input);
  }

  public fetchMailboxDetails(input: shapes.WorkMailGetMailboxDetailsRequest): WorkMailResponsesFetchMailboxDetails {
    return new WorkMailResponsesFetchMailboxDetails(this, this.__resources, input);
  }

  public listAccessControlRules(input: shapes.WorkMailListAccessControlRulesRequest): WorkMailResponsesListAccessControlRules {
    return new WorkMailResponsesListAccessControlRules(this, this.__resources, input);
  }

  public listAliases(input: shapes.WorkMailListAliasesRequest): WorkMailResponsesListAliases {
    return new WorkMailResponsesListAliases(this, this.__resources, input);
  }

  public listGroupMembers(input: shapes.WorkMailListGroupMembersRequest): WorkMailResponsesListGroupMembers {
    return new WorkMailResponsesListGroupMembers(this, this.__resources, input);
  }

  public listGroups(input: shapes.WorkMailListGroupsRequest): WorkMailResponsesListGroups {
    return new WorkMailResponsesListGroups(this, this.__resources, input);
  }

  public listMailboxExportJobs(input: shapes.WorkMailListMailboxExportJobsRequest): WorkMailResponsesListMailboxExportJobs {
    return new WorkMailResponsesListMailboxExportJobs(this, this.__resources, input);
  }

  public listMailboxPermissions(input: shapes.WorkMailListMailboxPermissionsRequest): WorkMailResponsesListMailboxPermissions {
    return new WorkMailResponsesListMailboxPermissions(this, this.__resources, input);
  }

  public listOrganizations(input: shapes.WorkMailListOrganizationsRequest): WorkMailResponsesListOrganizations {
    return new WorkMailResponsesListOrganizations(this, this.__resources, input);
  }

  public listResourceDelegates(input: shapes.WorkMailListResourceDelegatesRequest): WorkMailResponsesListResourceDelegates {
    return new WorkMailResponsesListResourceDelegates(this, this.__resources, input);
  }

  public listResources(input: shapes.WorkMailListResourcesRequest): WorkMailResponsesListResources {
    return new WorkMailResponsesListResources(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.WorkMailListTagsForResourceRequest): WorkMailResponsesListTagsForResource {
    return new WorkMailResponsesListTagsForResource(this, this.__resources, input);
  }

  public listUsers(input: shapes.WorkMailListUsersRequest): WorkMailResponsesListUsers {
    return new WorkMailResponsesListUsers(this, this.__resources, input);
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

  public startMailboxExportJob(input: shapes.WorkMailStartMailboxExportJobRequest): WorkMailResponsesStartMailboxExportJob {
    return new WorkMailResponsesStartMailboxExportJob(this, this.__resources, input);
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

export class WorkMailResponsesCreateGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailCreateGroupRequest) {
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
          OrganizationId: this.__input.organizationId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

}

export class WorkMailResponsesCreateOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailCreateOrganizationRequest) {
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
          DirectoryId: this.__input.directoryId,
          Alias: this.__input.alias,
          ClientToken: this.__input.clientToken,
          Domains: this.__input.domains,
          KmsKeyArn: this.__input.kmsKeyArn,
          EnableInteroperability: this.__input.enableInteroperability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOrganization.OrganizationId', props);
    return resource.getResponseField('OrganizationId') as unknown as string;
  }

}

export class WorkMailResponsesCreateResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailCreateResourceRequest) {
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
          OrganizationId: this.__input.organizationId,
          Name: this.__input.name,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResource.ResourceId', props);
    return resource.getResponseField('ResourceId') as unknown as string;
  }

}

export class WorkMailResponsesCreateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailCreateUserRequest) {
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
          OrganizationId: this.__input.organizationId,
          Name: this.__input.name,
          DisplayName: this.__input.displayName,
          Password: this.__input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

}

export class WorkMailResponsesDeleteOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailDeleteOrganizationRequest) {
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
          ClientToken: this.__input.clientToken,
          OrganizationId: this.__input.organizationId,
          DeleteDirectory: this.__input.deleteDirectory,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteOrganization.OrganizationId', props);
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
          ClientToken: this.__input.clientToken,
          OrganizationId: this.__input.organizationId,
          DeleteDirectory: this.__input.deleteDirectory,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteOrganization.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class WorkMailResponsesDescribeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailDescribeGroupRequest) {
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
          OrganizationId: this.__input.organizationId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.GroupId', props);
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
          OrganizationId: this.__input.organizationId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.Name', props);
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
          OrganizationId: this.__input.organizationId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.Email', props);
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
          OrganizationId: this.__input.organizationId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.State', props);
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
          OrganizationId: this.__input.organizationId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.EnabledDate', props);
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
          OrganizationId: this.__input.organizationId,
          GroupId: this.__input.groupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.DisabledDate', props);
    return resource.getResponseField('DisabledDate') as unknown as string;
  }

}

export class WorkMailResponsesDescribeMailboxExportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailDescribeMailboxExportJobRequest) {
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.EntityId', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.Description', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.RoleArn', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.KmsKeyArn', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.S3BucketName', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.S3Prefix', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.S3Path', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.EstimatedProgress', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.State', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.ErrorInfo', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.StartTime', props);
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
          JobId: this.__input.jobId,
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMailboxExportJob.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

}

export class WorkMailResponsesDescribeOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailDescribeOrganizationRequest) {
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.OrganizationId', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.Alias', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.State', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.DirectoryId', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.DirectoryType', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.DefaultMailDomain', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.CompletedDate', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.ErrorMessage', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrganization.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class WorkMailResponsesDescribeResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailDescribeResourceRequest) {
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.ResourceId', props);
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.Email', props);
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.Name', props);
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get bookingOptions(): WorkMailResponsesDescribeResourceBookingOptions {
    return new WorkMailResponsesDescribeResourceBookingOptions(this.__scope, this.__resources, this.__input);
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.State', props);
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.EnabledDate', props);
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.DisabledDate', props);
    return resource.getResponseField('DisabledDate') as unknown as string;
  }

}

export class WorkMailResponsesDescribeResourceBookingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailDescribeResourceRequest) {
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.BookingOptions.AutoAcceptRequests', props);
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.BookingOptions.AutoDeclineRecurringRequests', props);
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.BookingOptions.AutoDeclineConflictingRequests', props);
    return resource.getResponseField('BookingOptions.AutoDeclineConflictingRequests') as unknown as boolean;
  }

}

export class WorkMailResponsesDescribeUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailDescribeUserRequest) {
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.UserId', props);
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.Name', props);
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.Email', props);
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.DisplayName', props);
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.State', props);
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.UserRole', props);
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.EnabledDate', props);
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.DisabledDate', props);
    return resource.getResponseField('DisabledDate') as unknown as string;
  }

}

export class WorkMailResponsesFetchAccessControlEffect {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailGetAccessControlEffectRequest) {
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
          OrganizationId: this.__input.organizationId,
          IpAddress: this.__input.ipAddress,
          Action: this.__input.action,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessControlEffect.Effect', props);
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
          OrganizationId: this.__input.organizationId,
          IpAddress: this.__input.ipAddress,
          Action: this.__input.action,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessControlEffect.MatchedRules', props);
    return resource.getResponseField('MatchedRules') as unknown as string[];
  }

}

export class WorkMailResponsesFetchDefaultRetentionPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailGetDefaultRetentionPolicyRequest) {
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDefaultRetentionPolicy.Id', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDefaultRetentionPolicy.Name', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDefaultRetentionPolicy.Description', props);
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDefaultRetentionPolicy.FolderConfigurations', props);
    return resource.getResponseField('FolderConfigurations') as unknown as shapes.WorkMailFolderConfiguration[];
  }

}

export class WorkMailResponsesFetchMailboxDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailGetMailboxDetailsRequest) {
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMailboxDetails.MailboxQuota', props);
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
          OrganizationId: this.__input.organizationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMailboxDetails.MailboxSize', props);
    return resource.getResponseField('MailboxSize') as unknown as number;
  }

}

export class WorkMailResponsesListAccessControlRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListAccessControlRulesRequest) {
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
          OrganizationId: this.__input.organizationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessControlRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WorkMailAccessControlRule[];
  }

}

export class WorkMailResponsesListAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListAliasesRequest) {
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
          OrganizationId: this.__input.organizationId,
          EntityId: this.__input.entityId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAliases.Aliases', props);
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
          OrganizationId: this.__input.organizationId,
          EntityId: this.__input.entityId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailResponsesListGroupMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListGroupMembersRequest) {
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
          OrganizationId: this.__input.organizationId,
          GroupId: this.__input.groupId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupMembers.Members', props);
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
          OrganizationId: this.__input.organizationId,
          GroupId: this.__input.groupId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailResponsesListGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListGroupsRequest) {
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
          OrganizationId: this.__input.organizationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.Groups', props);
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
          OrganizationId: this.__input.organizationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailResponsesListMailboxExportJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListMailboxExportJobsRequest) {
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
          OrganizationId: this.__input.organizationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMailboxExportJobs.Jobs', props);
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
          OrganizationId: this.__input.organizationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMailboxExportJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailResponsesListMailboxPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListMailboxPermissionsRequest) {
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
          OrganizationId: this.__input.organizationId,
          EntityId: this.__input.entityId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMailboxPermissions.Permissions', props);
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
          OrganizationId: this.__input.organizationId,
          EntityId: this.__input.entityId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMailboxPermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailResponsesListOrganizations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListOrganizationsRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizations.OrganizationSummaries', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailResponsesListResourceDelegates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListResourceDelegatesRequest) {
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceDelegates.Delegates', props);
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
          OrganizationId: this.__input.organizationId,
          ResourceId: this.__input.resourceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceDelegates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailResponsesListResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListResourcesRequest) {
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
          OrganizationId: this.__input.organizationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResources.Resources', props);
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
          OrganizationId: this.__input.organizationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListTagsForResourceRequest) {
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
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.WorkMailTag[];
  }

}

export class WorkMailResponsesListUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailListUsersRequest) {
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
          OrganizationId: this.__input.organizationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.Users', props);
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
          OrganizationId: this.__input.organizationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkMailResponsesStartMailboxExportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkMailStartMailboxExportJobRequest) {
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
          ClientToken: this.__input.clientToken,
          OrganizationId: this.__input.organizationId,
          EntityId: this.__input.entityId,
          Description: this.__input.description,
          RoleArn: this.__input.roleArn,
          KmsKeyArn: this.__input.kmsKeyArn,
          S3BucketName: this.__input.s3BucketName,
          S3Prefix: this.__input.s3Prefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMailboxExportJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

