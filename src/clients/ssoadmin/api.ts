import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SsoAdminClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public attachManagedPolicyToPermissionSet(input: shapes.SsoAdminAttachManagedPolicyToPermissionSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachManagedPolicyToPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.AttachManagedPolicyToPermissionSet'),
        parameters: {
          InstanceArn: input.instanceArn,
          PermissionSetArn: input.permissionSetArn,
          ManagedPolicyArn: input.managedPolicyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachManagedPolicyToPermissionSet', props);
  }

  public createAccountAssignment(input: shapes.SsoAdminCreateAccountAssignmentRequest): SSOAdminResponsesCreateAccountAssignment {
    return new SSOAdminResponsesCreateAccountAssignment(this, this.__resources, input);
  }

  public createInstanceAccessControlAttributeConfiguration(input: shapes.SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceAccessControlAttributeConfiguration',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateInstanceAccessControlAttributeConfiguration'),
        parameters: {
          InstanceArn: input.instanceArn,
          InstanceAccessControlAttributeConfiguration: {
            AccessControlAttributes: input.instanceAccessControlAttributeConfiguration.accessControlAttributes,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateInstanceAccessControlAttributeConfiguration', props);
  }

  public createPermissionSet(input: shapes.SsoAdminCreatePermissionSetRequest): SSOAdminResponsesCreatePermissionSet {
    return new SSOAdminResponsesCreatePermissionSet(this, this.__resources, input);
  }

  public deleteAccountAssignment(input: shapes.SsoAdminDeleteAccountAssignmentRequest): SSOAdminResponsesDeleteAccountAssignment {
    return new SSOAdminResponsesDeleteAccountAssignment(this, this.__resources, input);
  }

  public deleteInlinePolicyFromPermissionSet(input: shapes.SsoAdminDeleteInlinePolicyFromPermissionSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInlinePolicyFromPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteInlinePolicyFromPermissionSet'),
        parameters: {
          InstanceArn: input.instanceArn,
          PermissionSetArn: input.permissionSetArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteInlinePolicyFromPermissionSet', props);
  }

  public deleteInstanceAccessControlAttributeConfiguration(input: shapes.SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInstanceAccessControlAttributeConfiguration',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteInstanceAccessControlAttributeConfiguration'),
        parameters: {
          InstanceArn: input.instanceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteInstanceAccessControlAttributeConfiguration', props);
  }

  public deletePermissionSet(input: shapes.SsoAdminDeletePermissionSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeletePermissionSet'),
        parameters: {
          InstanceArn: input.instanceArn,
          PermissionSetArn: input.permissionSetArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePermissionSet', props);
  }

  public describeAccountAssignmentCreationStatus(input: shapes.SsoAdminDescribeAccountAssignmentCreationStatusRequest): SSOAdminResponsesDescribeAccountAssignmentCreationStatus {
    return new SSOAdminResponsesDescribeAccountAssignmentCreationStatus(this, this.__resources, input);
  }

  public describeAccountAssignmentDeletionStatus(input: shapes.SsoAdminDescribeAccountAssignmentDeletionStatusRequest): SSOAdminResponsesDescribeAccountAssignmentDeletionStatus {
    return new SSOAdminResponsesDescribeAccountAssignmentDeletionStatus(this, this.__resources, input);
  }

  public describeInstanceAccessControlAttributeConfiguration(input: shapes.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest): SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration {
    return new SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration(this, this.__resources, input);
  }

  public describePermissionSet(input: shapes.SsoAdminDescribePermissionSetRequest): SSOAdminResponsesDescribePermissionSet {
    return new SSOAdminResponsesDescribePermissionSet(this, this.__resources, input);
  }

  public describePermissionSetProvisioningStatus(input: shapes.SsoAdminDescribePermissionSetProvisioningStatusRequest): SSOAdminResponsesDescribePermissionSetProvisioningStatus {
    return new SSOAdminResponsesDescribePermissionSetProvisioningStatus(this, this.__resources, input);
  }

  public detachManagedPolicyFromPermissionSet(input: shapes.SsoAdminDetachManagedPolicyFromPermissionSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachManagedPolicyFromPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DetachManagedPolicyFromPermissionSet'),
        parameters: {
          InstanceArn: input.instanceArn,
          PermissionSetArn: input.permissionSetArn,
          ManagedPolicyArn: input.managedPolicyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachManagedPolicyFromPermissionSet', props);
  }

  public fetchInlinePolicyForPermissionSet(input: shapes.SsoAdminGetInlinePolicyForPermissionSetRequest): SSOAdminResponsesFetchInlinePolicyForPermissionSet {
    return new SSOAdminResponsesFetchInlinePolicyForPermissionSet(this, this.__resources, input);
  }

  public listAccountAssignmentCreationStatus(input: shapes.SsoAdminListAccountAssignmentCreationStatusRequest): SSOAdminResponsesListAccountAssignmentCreationStatus {
    return new SSOAdminResponsesListAccountAssignmentCreationStatus(this, this.__resources, input);
  }

  public listAccountAssignmentDeletionStatus(input: shapes.SsoAdminListAccountAssignmentDeletionStatusRequest): SSOAdminResponsesListAccountAssignmentDeletionStatus {
    return new SSOAdminResponsesListAccountAssignmentDeletionStatus(this, this.__resources, input);
  }

  public listAccountAssignments(input: shapes.SsoAdminListAccountAssignmentsRequest): SSOAdminResponsesListAccountAssignments {
    return new SSOAdminResponsesListAccountAssignments(this, this.__resources, input);
  }

  public listAccountsForProvisionedPermissionSet(input: shapes.SsoAdminListAccountsForProvisionedPermissionSetRequest): SSOAdminResponsesListAccountsForProvisionedPermissionSet {
    return new SSOAdminResponsesListAccountsForProvisionedPermissionSet(this, this.__resources, input);
  }

  public listInstances(input: shapes.SsoAdminListInstancesRequest): SSOAdminResponsesListInstances {
    return new SSOAdminResponsesListInstances(this, this.__resources, input);
  }

  public listManagedPoliciesInPermissionSet(input: shapes.SsoAdminListManagedPoliciesInPermissionSetRequest): SSOAdminResponsesListManagedPoliciesInPermissionSet {
    return new SSOAdminResponsesListManagedPoliciesInPermissionSet(this, this.__resources, input);
  }

  public listPermissionSetProvisioningStatus(input: shapes.SsoAdminListPermissionSetProvisioningStatusRequest): SSOAdminResponsesListPermissionSetProvisioningStatus {
    return new SSOAdminResponsesListPermissionSetProvisioningStatus(this, this.__resources, input);
  }

  public listPermissionSets(input: shapes.SsoAdminListPermissionSetsRequest): SSOAdminResponsesListPermissionSets {
    return new SSOAdminResponsesListPermissionSets(this, this.__resources, input);
  }

  public listPermissionSetsProvisionedToAccount(input: shapes.SsoAdminListPermissionSetsProvisionedToAccountRequest): SSOAdminResponsesListPermissionSetsProvisionedToAccount {
    return new SSOAdminResponsesListPermissionSetsProvisionedToAccount(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SsoAdminListTagsForResourceRequest): SSOAdminResponsesListTagsForResource {
    return new SSOAdminResponsesListTagsForResource(this, this.__resources, input);
  }

  public provisionPermissionSet(input: shapes.SsoAdminProvisionPermissionSetRequest): SSOAdminResponsesProvisionPermissionSet {
    return new SSOAdminResponsesProvisionPermissionSet(this, this.__resources, input);
  }

  public putInlinePolicyToPermissionSet(input: shapes.SsoAdminPutInlinePolicyToPermissionSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInlinePolicyToPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.PutInlinePolicyToPermissionSet'),
        parameters: {
          InstanceArn: input.instanceArn,
          PermissionSetArn: input.permissionSetArn,
          InlinePolicy: input.inlinePolicy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutInlinePolicyToPermissionSet', props);
  }

  public tagResource(input: shapes.SsoAdminTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.TagResource'),
        parameters: {
          InstanceArn: input.instanceArn,
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SsoAdminUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.UntagResource'),
        parameters: {
          InstanceArn: input.instanceArn,
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateInstanceAccessControlAttributeConfiguration(input: shapes.SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceAccessControlAttributeConfiguration',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.UpdateInstanceAccessControlAttributeConfiguration'),
        parameters: {
          InstanceArn: input.instanceArn,
          InstanceAccessControlAttributeConfiguration: {
            AccessControlAttributes: input.instanceAccessControlAttributeConfiguration.accessControlAttributes,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateInstanceAccessControlAttributeConfiguration', props);
  }

  public updatePermissionSet(input: shapes.SsoAdminUpdatePermissionSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.UpdatePermissionSet'),
        parameters: {
          InstanceArn: input.instanceArn,
          PermissionSetArn: input.permissionSetArn,
          Description: input.description,
          SessionDuration: input.sessionDuration,
          RelayState: input.relayState,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePermissionSet', props);
  }

}

export class SSOAdminResponsesCreateAccountAssignment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminCreateAccountAssignmentRequest) {
  }

  public get accountAssignmentCreationStatus(): SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus {
    return new SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus(this.__scope, this.__resources, this.__input);
  }

}

export class SSOAdminResponsesCreateAccountAssignmentAccountAssignmentCreationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminCreateAccountAssignmentRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateAccountAssignment.AccountAssignmentCreationStatus.Status'),
        outputPath: 'AccountAssignmentCreationStatus.Status',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountAssignment.AccountAssignmentCreationStatus.Status', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.Status') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateAccountAssignment.AccountAssignmentCreationStatus.RequestId'),
        outputPath: 'AccountAssignmentCreationStatus.RequestId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountAssignment.AccountAssignmentCreationStatus.RequestId', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.RequestId') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateAccountAssignment.AccountAssignmentCreationStatus.FailureReason'),
        outputPath: 'AccountAssignmentCreationStatus.FailureReason',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountAssignment.AccountAssignmentCreationStatus.FailureReason', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.FailureReason') as unknown as string;
  }

  public get targetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateAccountAssignment.AccountAssignmentCreationStatus.TargetId'),
        outputPath: 'AccountAssignmentCreationStatus.TargetId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountAssignment.AccountAssignmentCreationStatus.TargetId', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.TargetId') as unknown as string;
  }

  public get targetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateAccountAssignment.AccountAssignmentCreationStatus.TargetType'),
        outputPath: 'AccountAssignmentCreationStatus.TargetType',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountAssignment.AccountAssignmentCreationStatus.TargetType', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.TargetType') as unknown as string;
  }

  public get permissionSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateAccountAssignment.AccountAssignmentCreationStatus.PermissionSetArn'),
        outputPath: 'AccountAssignmentCreationStatus.PermissionSetArn',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountAssignment.AccountAssignmentCreationStatus.PermissionSetArn', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.PermissionSetArn') as unknown as string;
  }

  public get principalType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateAccountAssignment.AccountAssignmentCreationStatus.PrincipalType'),
        outputPath: 'AccountAssignmentCreationStatus.PrincipalType',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountAssignment.AccountAssignmentCreationStatus.PrincipalType', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.PrincipalType') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateAccountAssignment.AccountAssignmentCreationStatus.PrincipalId'),
        outputPath: 'AccountAssignmentCreationStatus.PrincipalId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountAssignment.AccountAssignmentCreationStatus.PrincipalId', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.PrincipalId') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreateAccountAssignment.AccountAssignmentCreationStatus.CreatedDate'),
        outputPath: 'AccountAssignmentCreationStatus.CreatedDate',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountAssignment.AccountAssignmentCreationStatus.CreatedDate', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminResponsesCreatePermissionSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminCreatePermissionSetRequest) {
  }

  public get permissionSet(): SSOAdminResponsesCreatePermissionSetPermissionSet {
    return new SSOAdminResponsesCreatePermissionSetPermissionSet(this.__scope, this.__resources, this.__input);
  }

}

export class SSOAdminResponsesCreatePermissionSetPermissionSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminCreatePermissionSetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreatePermissionSet.PermissionSet.Name'),
        outputPath: 'PermissionSet.Name',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          InstanceArn: this.__input.instanceArn,
          SessionDuration: this.__input.sessionDuration,
          RelayState: this.__input.relayState,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePermissionSet.PermissionSet.Name', props);
    return resource.getResponseField('PermissionSet.Name') as unknown as string;
  }

  public get permissionSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreatePermissionSet.PermissionSet.PermissionSetArn'),
        outputPath: 'PermissionSet.PermissionSetArn',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          InstanceArn: this.__input.instanceArn,
          SessionDuration: this.__input.sessionDuration,
          RelayState: this.__input.relayState,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePermissionSet.PermissionSet.PermissionSetArn', props);
    return resource.getResponseField('PermissionSet.PermissionSetArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreatePermissionSet.PermissionSet.Description'),
        outputPath: 'PermissionSet.Description',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          InstanceArn: this.__input.instanceArn,
          SessionDuration: this.__input.sessionDuration,
          RelayState: this.__input.relayState,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePermissionSet.PermissionSet.Description', props);
    return resource.getResponseField('PermissionSet.Description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreatePermissionSet.PermissionSet.CreatedDate'),
        outputPath: 'PermissionSet.CreatedDate',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          InstanceArn: this.__input.instanceArn,
          SessionDuration: this.__input.sessionDuration,
          RelayState: this.__input.relayState,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePermissionSet.PermissionSet.CreatedDate', props);
    return resource.getResponseField('PermissionSet.CreatedDate') as unknown as string;
  }

  public get sessionDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreatePermissionSet.PermissionSet.SessionDuration'),
        outputPath: 'PermissionSet.SessionDuration',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          InstanceArn: this.__input.instanceArn,
          SessionDuration: this.__input.sessionDuration,
          RelayState: this.__input.relayState,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePermissionSet.PermissionSet.SessionDuration', props);
    return resource.getResponseField('PermissionSet.SessionDuration') as unknown as string;
  }

  public get relayState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.CreatePermissionSet.PermissionSet.RelayState'),
        outputPath: 'PermissionSet.RelayState',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          InstanceArn: this.__input.instanceArn,
          SessionDuration: this.__input.sessionDuration,
          RelayState: this.__input.relayState,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePermissionSet.PermissionSet.RelayState', props);
    return resource.getResponseField('PermissionSet.RelayState') as unknown as string;
  }

}

export class SSOAdminResponsesDeleteAccountAssignment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDeleteAccountAssignmentRequest) {
  }

  public get accountAssignmentDeletionStatus(): SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus {
    return new SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus(this.__scope, this.__resources, this.__input);
  }

}

export class SSOAdminResponsesDeleteAccountAssignmentAccountAssignmentDeletionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDeleteAccountAssignmentRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteAccountAssignment.AccountAssignmentDeletionStatus.Status'),
        outputPath: 'AccountAssignmentDeletionStatus.Status',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.Status', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.Status') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteAccountAssignment.AccountAssignmentDeletionStatus.RequestId'),
        outputPath: 'AccountAssignmentDeletionStatus.RequestId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.RequestId', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.RequestId') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteAccountAssignment.AccountAssignmentDeletionStatus.FailureReason'),
        outputPath: 'AccountAssignmentDeletionStatus.FailureReason',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.FailureReason', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.FailureReason') as unknown as string;
  }

  public get targetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteAccountAssignment.AccountAssignmentDeletionStatus.TargetId'),
        outputPath: 'AccountAssignmentDeletionStatus.TargetId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.TargetId', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.TargetId') as unknown as string;
  }

  public get targetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteAccountAssignment.AccountAssignmentDeletionStatus.TargetType'),
        outputPath: 'AccountAssignmentDeletionStatus.TargetType',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.TargetType', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.TargetType') as unknown as string;
  }

  public get permissionSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteAccountAssignment.AccountAssignmentDeletionStatus.PermissionSetArn'),
        outputPath: 'AccountAssignmentDeletionStatus.PermissionSetArn',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.PermissionSetArn', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.PermissionSetArn') as unknown as string;
  }

  public get principalType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteAccountAssignment.AccountAssignmentDeletionStatus.PrincipalType'),
        outputPath: 'AccountAssignmentDeletionStatus.PrincipalType',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.PrincipalType', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.PrincipalType') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteAccountAssignment.AccountAssignmentDeletionStatus.PrincipalId'),
        outputPath: 'AccountAssignmentDeletionStatus.PrincipalId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.PrincipalId', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.PrincipalId') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAssignment',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DeleteAccountAssignment.AccountAssignmentDeletionStatus.CreatedDate'),
        outputPath: 'AccountAssignmentDeletionStatus.CreatedDate',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
          PermissionSetArn: this.__input.permissionSetArn,
          PrincipalType: this.__input.principalType,
          PrincipalId: this.__input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.CreatedDate', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminResponsesDescribeAccountAssignmentCreationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribeAccountAssignmentCreationStatusRequest) {
  }

  public get accountAssignmentCreationStatus(): SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus {
    return new SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus(this.__scope, this.__resources, this.__input);
  }

}

export class SSOAdminResponsesDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribeAccountAssignmentCreationStatusRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.Status'),
        outputPath: 'AccountAssignmentCreationStatus.Status',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentCreationRequestId: this.__input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.Status', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.Status') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.RequestId'),
        outputPath: 'AccountAssignmentCreationStatus.RequestId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentCreationRequestId: this.__input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.RequestId', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.RequestId') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.FailureReason'),
        outputPath: 'AccountAssignmentCreationStatus.FailureReason',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentCreationRequestId: this.__input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.FailureReason', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.FailureReason') as unknown as string;
  }

  public get targetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.TargetId'),
        outputPath: 'AccountAssignmentCreationStatus.TargetId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentCreationRequestId: this.__input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.TargetId', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.TargetId') as unknown as string;
  }

  public get targetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.TargetType'),
        outputPath: 'AccountAssignmentCreationStatus.TargetType',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentCreationRequestId: this.__input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.TargetType', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.TargetType') as unknown as string;
  }

  public get permissionSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.PermissionSetArn'),
        outputPath: 'AccountAssignmentCreationStatus.PermissionSetArn',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentCreationRequestId: this.__input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.PermissionSetArn', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.PermissionSetArn') as unknown as string;
  }

  public get principalType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.PrincipalType'),
        outputPath: 'AccountAssignmentCreationStatus.PrincipalType',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentCreationRequestId: this.__input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.PrincipalType', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.PrincipalType') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.PrincipalId'),
        outputPath: 'AccountAssignmentCreationStatus.PrincipalId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentCreationRequestId: this.__input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.PrincipalId', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.PrincipalId') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.CreatedDate'),
        outputPath: 'AccountAssignmentCreationStatus.CreatedDate',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentCreationRequestId: this.__input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.CreatedDate', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminResponsesDescribeAccountAssignmentDeletionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribeAccountAssignmentDeletionStatusRequest) {
  }

  public get accountAssignmentDeletionStatus(): SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus {
    return new SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus(this.__scope, this.__resources, this.__input);
  }

}

export class SSOAdminResponsesDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribeAccountAssignmentDeletionStatusRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.Status'),
        outputPath: 'AccountAssignmentDeletionStatus.Status',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentDeletionRequestId: this.__input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.Status', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.Status') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.RequestId'),
        outputPath: 'AccountAssignmentDeletionStatus.RequestId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentDeletionRequestId: this.__input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.RequestId', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.RequestId') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.FailureReason'),
        outputPath: 'AccountAssignmentDeletionStatus.FailureReason',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentDeletionRequestId: this.__input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.FailureReason', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.FailureReason') as unknown as string;
  }

  public get targetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.TargetId'),
        outputPath: 'AccountAssignmentDeletionStatus.TargetId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentDeletionRequestId: this.__input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.TargetId', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.TargetId') as unknown as string;
  }

  public get targetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.TargetType'),
        outputPath: 'AccountAssignmentDeletionStatus.TargetType',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentDeletionRequestId: this.__input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.TargetType', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.TargetType') as unknown as string;
  }

  public get permissionSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.PermissionSetArn'),
        outputPath: 'AccountAssignmentDeletionStatus.PermissionSetArn',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentDeletionRequestId: this.__input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.PermissionSetArn', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.PermissionSetArn') as unknown as string;
  }

  public get principalType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.PrincipalType'),
        outputPath: 'AccountAssignmentDeletionStatus.PrincipalType',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentDeletionRequestId: this.__input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.PrincipalType', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.PrincipalType') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.PrincipalId'),
        outputPath: 'AccountAssignmentDeletionStatus.PrincipalId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentDeletionRequestId: this.__input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.PrincipalId', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.PrincipalId') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.CreatedDate'),
        outputPath: 'AccountAssignmentDeletionStatus.CreatedDate',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountAssignmentDeletionRequestId: this.__input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.CreatedDate', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminResponsesDescribeInstanceAccessControlAttributeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceAccessControlAttributeConfiguration',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeInstanceAccessControlAttributeConfiguration.Status'),
        outputPath: 'Status',
        parameters: {
          InstanceArn: this.__input.instanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceAccessControlAttributeConfiguration.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceAccessControlAttributeConfiguration',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeInstanceAccessControlAttributeConfiguration.StatusReason'),
        outputPath: 'StatusReason',
        parameters: {
          InstanceArn: this.__input.instanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceAccessControlAttributeConfiguration.StatusReason', props);
    return resource.getResponseField('StatusReason') as unknown as string;
  }

  public get instanceAccessControlAttributeConfiguration(): SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration {
    return new SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class SSOAdminResponsesDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest) {
  }

  public get accessControlAttributes(): shapes.SsoAdminAccessControlAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceAccessControlAttributeConfiguration',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribeInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfiguration.AccessControlAttributes'),
        outputPath: 'InstanceAccessControlAttributeConfiguration.AccessControlAttributes',
        parameters: {
          InstanceArn: this.__input.instanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfiguration.AccessControlAttributes', props);
    return resource.getResponseField('InstanceAccessControlAttributeConfiguration.AccessControlAttributes') as unknown as shapes.SsoAdminAccessControlAttribute[];
  }

}

export class SSOAdminResponsesDescribePermissionSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribePermissionSetRequest) {
  }

  public get permissionSet(): SSOAdminResponsesDescribePermissionSetPermissionSet {
    return new SSOAdminResponsesDescribePermissionSetPermissionSet(this.__scope, this.__resources, this.__input);
  }

}

export class SSOAdminResponsesDescribePermissionSetPermissionSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribePermissionSetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSet.PermissionSet.Name'),
        outputPath: 'PermissionSet.Name',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSet.PermissionSet.Name', props);
    return resource.getResponseField('PermissionSet.Name') as unknown as string;
  }

  public get permissionSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSet.PermissionSet.PermissionSetArn'),
        outputPath: 'PermissionSet.PermissionSetArn',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSet.PermissionSet.PermissionSetArn', props);
    return resource.getResponseField('PermissionSet.PermissionSetArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSet.PermissionSet.Description'),
        outputPath: 'PermissionSet.Description',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSet.PermissionSet.Description', props);
    return resource.getResponseField('PermissionSet.Description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSet.PermissionSet.CreatedDate'),
        outputPath: 'PermissionSet.CreatedDate',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSet.PermissionSet.CreatedDate', props);
    return resource.getResponseField('PermissionSet.CreatedDate') as unknown as string;
  }

  public get sessionDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSet.PermissionSet.SessionDuration'),
        outputPath: 'PermissionSet.SessionDuration',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSet.PermissionSet.SessionDuration', props);
    return resource.getResponseField('PermissionSet.SessionDuration') as unknown as string;
  }

  public get relayState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSet.PermissionSet.RelayState'),
        outputPath: 'PermissionSet.RelayState',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSet.PermissionSet.RelayState', props);
    return resource.getResponseField('PermissionSet.RelayState') as unknown as string;
  }

}

export class SSOAdminResponsesDescribePermissionSetProvisioningStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribePermissionSetProvisioningStatusRequest) {
  }

  public get permissionSetProvisioningStatus(): SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus {
    return new SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus(this.__scope, this.__resources, this.__input);
  }

}

export class SSOAdminResponsesDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminDescribePermissionSetProvisioningStatusRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSetProvisioningStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.Status'),
        outputPath: 'PermissionSetProvisioningStatus.Status',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          ProvisionPermissionSetRequestId: this.__input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.Status', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.Status') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSetProvisioningStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.RequestId'),
        outputPath: 'PermissionSetProvisioningStatus.RequestId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          ProvisionPermissionSetRequestId: this.__input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.RequestId', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.RequestId') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSetProvisioningStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.AccountId'),
        outputPath: 'PermissionSetProvisioningStatus.AccountId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          ProvisionPermissionSetRequestId: this.__input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.AccountId', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.AccountId') as unknown as string;
  }

  public get permissionSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSetProvisioningStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.PermissionSetArn'),
        outputPath: 'PermissionSetProvisioningStatus.PermissionSetArn',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          ProvisionPermissionSetRequestId: this.__input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.PermissionSetArn', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.PermissionSetArn') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSetProvisioningStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.FailureReason'),
        outputPath: 'PermissionSetProvisioningStatus.FailureReason',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          ProvisionPermissionSetRequestId: this.__input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.FailureReason', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.FailureReason') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissionSetProvisioningStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.CreatedDate'),
        outputPath: 'PermissionSetProvisioningStatus.CreatedDate',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          ProvisionPermissionSetRequestId: this.__input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.CreatedDate', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminResponsesFetchInlinePolicyForPermissionSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminGetInlinePolicyForPermissionSetRequest) {
  }

  public get inlinePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInlinePolicyForPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.GetInlinePolicyForPermissionSet.InlinePolicy'),
        outputPath: 'InlinePolicy',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInlinePolicyForPermissionSet.InlinePolicy', props);
    return resource.getResponseField('InlinePolicy') as unknown as string;
  }

}

export class SSOAdminResponsesListAccountAssignmentCreationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListAccountAssignmentCreationStatusRequest) {
  }

  public get accountAssignmentsCreationStatus(): shapes.SsoAdminAccountAssignmentOperationStatusMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListAccountAssignmentCreationStatus.AccountAssignmentsCreationStatus'),
        outputPath: 'AccountAssignmentsCreationStatus',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filter: {
            Status: this.__input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountAssignmentCreationStatus.AccountAssignmentsCreationStatus', props);
    return resource.getResponseField('AccountAssignmentsCreationStatus') as unknown as shapes.SsoAdminAccountAssignmentOperationStatusMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountAssignmentCreationStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListAccountAssignmentCreationStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filter: {
            Status: this.__input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountAssignmentCreationStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminResponsesListAccountAssignmentDeletionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListAccountAssignmentDeletionStatusRequest) {
  }

  public get accountAssignmentsDeletionStatus(): shapes.SsoAdminAccountAssignmentOperationStatusMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListAccountAssignmentDeletionStatus.AccountAssignmentsDeletionStatus'),
        outputPath: 'AccountAssignmentsDeletionStatus',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filter: {
            Status: this.__input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountAssignmentDeletionStatus.AccountAssignmentsDeletionStatus', props);
    return resource.getResponseField('AccountAssignmentsDeletionStatus') as unknown as shapes.SsoAdminAccountAssignmentOperationStatusMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountAssignmentDeletionStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListAccountAssignmentDeletionStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filter: {
            Status: this.__input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountAssignmentDeletionStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminResponsesListAccountAssignments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListAccountAssignmentsRequest) {
  }

  public get accountAssignments(): shapes.SsoAdminAccountAssignment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountAssignments',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListAccountAssignments.AccountAssignments'),
        outputPath: 'AccountAssignments',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountId: this.__input.accountId,
          PermissionSetArn: this.__input.permissionSetArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountAssignments.AccountAssignments', props);
    return resource.getResponseField('AccountAssignments') as unknown as shapes.SsoAdminAccountAssignment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountAssignments',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListAccountAssignments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountId: this.__input.accountId,
          PermissionSetArn: this.__input.permissionSetArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountAssignments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminResponsesListAccountsForProvisionedPermissionSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListAccountsForProvisionedPermissionSetRequest) {
  }

  public get accountIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountsForProvisionedPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListAccountsForProvisionedPermissionSet.AccountIds'),
        outputPath: 'AccountIds',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          ProvisioningStatus: this.__input.provisioningStatus,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountsForProvisionedPermissionSet.AccountIds', props);
    return resource.getResponseField('AccountIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountsForProvisionedPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListAccountsForProvisionedPermissionSet.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          ProvisioningStatus: this.__input.provisioningStatus,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountsForProvisionedPermissionSet.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminResponsesListInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListInstancesRequest) {
  }

  public get instances(): shapes.SsoAdminInstanceMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstances',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListInstances.Instances'),
        outputPath: 'Instances',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstances.Instances', props);
    return resource.getResponseField('Instances') as unknown as shapes.SsoAdminInstanceMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstances',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminResponsesListManagedPoliciesInPermissionSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListManagedPoliciesInPermissionSetRequest) {
  }

  public get attachedManagedPolicies(): shapes.SsoAdminAttachedManagedPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listManagedPoliciesInPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListManagedPoliciesInPermissionSet.AttachedManagedPolicies'),
        outputPath: 'AttachedManagedPolicies',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListManagedPoliciesInPermissionSet.AttachedManagedPolicies', props);
    return resource.getResponseField('AttachedManagedPolicies') as unknown as shapes.SsoAdminAttachedManagedPolicy[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listManagedPoliciesInPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListManagedPoliciesInPermissionSet.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListManagedPoliciesInPermissionSet.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminResponsesListPermissionSetProvisioningStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListPermissionSetProvisioningStatusRequest) {
  }

  public get permissionSetsProvisioningStatus(): shapes.SsoAdminPermissionSetProvisioningStatusMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissionSetProvisioningStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListPermissionSetProvisioningStatus.PermissionSetsProvisioningStatus'),
        outputPath: 'PermissionSetsProvisioningStatus',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filter: {
            Status: this.__input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissionSetProvisioningStatus.PermissionSetsProvisioningStatus', props);
    return resource.getResponseField('PermissionSetsProvisioningStatus') as unknown as shapes.SsoAdminPermissionSetProvisioningStatusMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissionSetProvisioningStatus',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListPermissionSetProvisioningStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filter: {
            Status: this.__input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissionSetProvisioningStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminResponsesListPermissionSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListPermissionSetsRequest) {
  }

  public get permissionSets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissionSets',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListPermissionSets.PermissionSets'),
        outputPath: 'PermissionSets',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissionSets.PermissionSets', props);
    return resource.getResponseField('PermissionSets') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissionSets',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListPermissionSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissionSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminResponsesListPermissionSetsProvisionedToAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListPermissionSetsProvisionedToAccountRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissionSetsProvisionedToAccount',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListPermissionSetsProvisionedToAccount.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountId: this.__input.accountId,
          ProvisioningStatus: this.__input.provisioningStatus,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissionSetsProvisionedToAccount.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get permissionSets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissionSetsProvisionedToAccount',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListPermissionSetsProvisionedToAccount.PermissionSets'),
        outputPath: 'PermissionSets',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          AccountId: this.__input.accountId,
          ProvisioningStatus: this.__input.provisioningStatus,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissionSetsProvisionedToAccount.PermissionSets', props);
    return resource.getResponseField('PermissionSets') as unknown as string[];
  }

}

export class SSOAdminResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminListTagsForResourceRequest) {
  }

  public get tags(): shapes.SsoAdminTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SsoAdminTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminResponsesProvisionPermissionSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminProvisionPermissionSetRequest) {
  }

  public get permissionSetProvisioningStatus(): SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus {
    return new SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus(this.__scope, this.__resources, this.__input);
  }

}

export class SSOAdminResponsesProvisionPermissionSetPermissionSetProvisioningStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsoAdminProvisionPermissionSetRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ProvisionPermissionSet.PermissionSetProvisioningStatus.Status'),
        outputPath: 'PermissionSetProvisioningStatus.Status',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.Status', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.Status') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ProvisionPermissionSet.PermissionSetProvisioningStatus.RequestId'),
        outputPath: 'PermissionSetProvisioningStatus.RequestId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.RequestId', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.RequestId') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ProvisionPermissionSet.PermissionSetProvisioningStatus.AccountId'),
        outputPath: 'PermissionSetProvisioningStatus.AccountId',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.AccountId', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.AccountId') as unknown as string;
  }

  public get permissionSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ProvisionPermissionSet.PermissionSetProvisioningStatus.PermissionSetArn'),
        outputPath: 'PermissionSetProvisioningStatus.PermissionSetArn',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.PermissionSetArn', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.PermissionSetArn') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ProvisionPermissionSet.PermissionSetProvisioningStatus.FailureReason'),
        outputPath: 'PermissionSetProvisioningStatus.FailureReason',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.FailureReason', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.FailureReason') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionPermissionSet',
        service: 'SSOAdmin',
        physicalResourceId: cr.PhysicalResourceId.of('SSOAdmin.ProvisionPermissionSet.PermissionSetProvisioningStatus.CreatedDate'),
        outputPath: 'PermissionSetProvisioningStatus.CreatedDate',
        parameters: {
          InstanceArn: this.__input.instanceArn,
          PermissionSetArn: this.__input.permissionSetArn,
          TargetId: this.__input.targetId,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.CreatedDate', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.CreatedDate') as unknown as string;
  }

}

