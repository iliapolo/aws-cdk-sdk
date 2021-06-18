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

  public createAccountAssignment(input: shapes.SsoAdminCreateAccountAssignmentRequest): SSOAdminCreateAccountAssignment {
    return new SSOAdminCreateAccountAssignment(this, 'CreateAccountAssignment', this.__resources, input);
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

  public createPermissionSet(input: shapes.SsoAdminCreatePermissionSetRequest): SSOAdminCreatePermissionSet {
    return new SSOAdminCreatePermissionSet(this, 'CreatePermissionSet', this.__resources, input);
  }

  public deleteAccountAssignment(input: shapes.SsoAdminDeleteAccountAssignmentRequest): SSOAdminDeleteAccountAssignment {
    return new SSOAdminDeleteAccountAssignment(this, 'DeleteAccountAssignment', this.__resources, input);
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

  public describeAccountAssignmentCreationStatus(input: shapes.SsoAdminDescribeAccountAssignmentCreationStatusRequest): SSOAdminDescribeAccountAssignmentCreationStatus {
    return new SSOAdminDescribeAccountAssignmentCreationStatus(this, 'DescribeAccountAssignmentCreationStatus', this.__resources, input);
  }

  public describeAccountAssignmentDeletionStatus(input: shapes.SsoAdminDescribeAccountAssignmentDeletionStatusRequest): SSOAdminDescribeAccountAssignmentDeletionStatus {
    return new SSOAdminDescribeAccountAssignmentDeletionStatus(this, 'DescribeAccountAssignmentDeletionStatus', this.__resources, input);
  }

  public describeInstanceAccessControlAttributeConfiguration(input: shapes.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest): SSOAdminDescribeInstanceAccessControlAttributeConfiguration {
    return new SSOAdminDescribeInstanceAccessControlAttributeConfiguration(this, 'DescribeInstanceAccessControlAttributeConfiguration', this.__resources, input);
  }

  public describePermissionSet(input: shapes.SsoAdminDescribePermissionSetRequest): SSOAdminDescribePermissionSet {
    return new SSOAdminDescribePermissionSet(this, 'DescribePermissionSet', this.__resources, input);
  }

  public describePermissionSetProvisioningStatus(input: shapes.SsoAdminDescribePermissionSetProvisioningStatusRequest): SSOAdminDescribePermissionSetProvisioningStatus {
    return new SSOAdminDescribePermissionSetProvisioningStatus(this, 'DescribePermissionSetProvisioningStatus', this.__resources, input);
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

  public fetchInlinePolicyForPermissionSet(input: shapes.SsoAdminGetInlinePolicyForPermissionSetRequest): SSOAdminFetchInlinePolicyForPermissionSet {
    return new SSOAdminFetchInlinePolicyForPermissionSet(this, 'FetchInlinePolicyForPermissionSet', this.__resources, input);
  }

  public listAccountAssignmentCreationStatus(input: shapes.SsoAdminListAccountAssignmentCreationStatusRequest): SSOAdminListAccountAssignmentCreationStatus {
    return new SSOAdminListAccountAssignmentCreationStatus(this, 'ListAccountAssignmentCreationStatus', this.__resources, input);
  }

  public listAccountAssignmentDeletionStatus(input: shapes.SsoAdminListAccountAssignmentDeletionStatusRequest): SSOAdminListAccountAssignmentDeletionStatus {
    return new SSOAdminListAccountAssignmentDeletionStatus(this, 'ListAccountAssignmentDeletionStatus', this.__resources, input);
  }

  public listAccountAssignments(input: shapes.SsoAdminListAccountAssignmentsRequest): SSOAdminListAccountAssignments {
    return new SSOAdminListAccountAssignments(this, 'ListAccountAssignments', this.__resources, input);
  }

  public listAccountsForProvisionedPermissionSet(input: shapes.SsoAdminListAccountsForProvisionedPermissionSetRequest): SSOAdminListAccountsForProvisionedPermissionSet {
    return new SSOAdminListAccountsForProvisionedPermissionSet(this, 'ListAccountsForProvisionedPermissionSet', this.__resources, input);
  }

  public listInstances(input: shapes.SsoAdminListInstancesRequest): SSOAdminListInstances {
    return new SSOAdminListInstances(this, 'ListInstances', this.__resources, input);
  }

  public listManagedPoliciesInPermissionSet(input: shapes.SsoAdminListManagedPoliciesInPermissionSetRequest): SSOAdminListManagedPoliciesInPermissionSet {
    return new SSOAdminListManagedPoliciesInPermissionSet(this, 'ListManagedPoliciesInPermissionSet', this.__resources, input);
  }

  public listPermissionSetProvisioningStatus(input: shapes.SsoAdminListPermissionSetProvisioningStatusRequest): SSOAdminListPermissionSetProvisioningStatus {
    return new SSOAdminListPermissionSetProvisioningStatus(this, 'ListPermissionSetProvisioningStatus', this.__resources, input);
  }

  public listPermissionSets(input: shapes.SsoAdminListPermissionSetsRequest): SSOAdminListPermissionSets {
    return new SSOAdminListPermissionSets(this, 'ListPermissionSets', this.__resources, input);
  }

  public listPermissionSetsProvisionedToAccount(input: shapes.SsoAdminListPermissionSetsProvisionedToAccountRequest): SSOAdminListPermissionSetsProvisionedToAccount {
    return new SSOAdminListPermissionSetsProvisionedToAccount(this, 'ListPermissionSetsProvisionedToAccount', this.__resources, input);
  }

  public listTagsForResource(input: shapes.SsoAdminListTagsForResourceRequest): SSOAdminListTagsForResource {
    return new SSOAdminListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public provisionPermissionSet(input: shapes.SsoAdminProvisionPermissionSetRequest): SSOAdminProvisionPermissionSet {
    return new SSOAdminProvisionPermissionSet(this, 'ProvisionPermissionSet', this.__resources, input);
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

export class SSOAdminCreateAccountAssignment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminCreateAccountAssignmentRequest) {
    super(scope, id);
  }

  public get accountAssignmentCreationStatus(): SSOAdminCreateAccountAssignmentAccountAssignmentCreationStatus {
    return new SSOAdminCreateAccountAssignmentAccountAssignmentCreationStatus(this, 'AccountAssignmentCreationStatus', this.__resources, this.input);
  }

}

export class SSOAdminCreateAccountAssignmentAccountAssignmentCreationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminCreateAccountAssignmentRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountAssignment.AccountAssignmentCreationStatus.Status', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountAssignment.AccountAssignmentCreationStatus.RequestId', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountAssignment.AccountAssignmentCreationStatus.FailureReason', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountAssignment.AccountAssignmentCreationStatus.TargetId', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountAssignment.AccountAssignmentCreationStatus.TargetType', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountAssignment.AccountAssignmentCreationStatus.PermissionSetArn', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountAssignment.AccountAssignmentCreationStatus.PrincipalType', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountAssignment.AccountAssignmentCreationStatus.PrincipalId', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountAssignment.AccountAssignmentCreationStatus.CreatedDate', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminCreatePermissionSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminCreatePermissionSetRequest) {
    super(scope, id);
  }

  public get permissionSet(): SSOAdminCreatePermissionSetPermissionSet {
    return new SSOAdminCreatePermissionSetPermissionSet(this, 'PermissionSet', this.__resources, this.input);
  }

}

export class SSOAdminCreatePermissionSetPermissionSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminCreatePermissionSetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          InstanceArn: this.input.instanceArn,
          SessionDuration: this.input.sessionDuration,
          RelayState: this.input.relayState,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePermissionSet.PermissionSet.Name', props);
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
          Name: this.input.name,
          Description: this.input.description,
          InstanceArn: this.input.instanceArn,
          SessionDuration: this.input.sessionDuration,
          RelayState: this.input.relayState,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePermissionSet.PermissionSet.PermissionSetArn', props);
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
          Name: this.input.name,
          Description: this.input.description,
          InstanceArn: this.input.instanceArn,
          SessionDuration: this.input.sessionDuration,
          RelayState: this.input.relayState,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePermissionSet.PermissionSet.Description', props);
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
          Name: this.input.name,
          Description: this.input.description,
          InstanceArn: this.input.instanceArn,
          SessionDuration: this.input.sessionDuration,
          RelayState: this.input.relayState,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePermissionSet.PermissionSet.CreatedDate', props);
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
          Name: this.input.name,
          Description: this.input.description,
          InstanceArn: this.input.instanceArn,
          SessionDuration: this.input.sessionDuration,
          RelayState: this.input.relayState,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePermissionSet.PermissionSet.SessionDuration', props);
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
          Name: this.input.name,
          Description: this.input.description,
          InstanceArn: this.input.instanceArn,
          SessionDuration: this.input.sessionDuration,
          RelayState: this.input.relayState,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePermissionSet.PermissionSet.RelayState', props);
    return resource.getResponseField('PermissionSet.RelayState') as unknown as string;
  }

}

export class SSOAdminDeleteAccountAssignment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDeleteAccountAssignmentRequest) {
    super(scope, id);
  }

  public get accountAssignmentDeletionStatus(): SSOAdminDeleteAccountAssignmentAccountAssignmentDeletionStatus {
    return new SSOAdminDeleteAccountAssignmentAccountAssignmentDeletionStatus(this, 'AccountAssignmentDeletionStatus', this.__resources, this.input);
  }

}

export class SSOAdminDeleteAccountAssignmentAccountAssignmentDeletionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDeleteAccountAssignmentRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.Status', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.RequestId', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.FailureReason', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.TargetId', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.TargetType', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.PermissionSetArn', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.PrincipalType', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.PrincipalId', props);
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
          InstanceArn: this.input.instanceArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
          PermissionSetArn: this.input.permissionSetArn,
          PrincipalType: this.input.principalType,
          PrincipalId: this.input.principalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountAssignment.AccountAssignmentDeletionStatus.CreatedDate', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminDescribeAccountAssignmentCreationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribeAccountAssignmentCreationStatusRequest) {
    super(scope, id);
  }

  public get accountAssignmentCreationStatus(): SSOAdminDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus {
    return new SSOAdminDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus(this, 'AccountAssignmentCreationStatus', this.__resources, this.input);
  }

}

export class SSOAdminDescribeAccountAssignmentCreationStatusAccountAssignmentCreationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribeAccountAssignmentCreationStatusRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentCreationRequestId: this.input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.Status', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentCreationRequestId: this.input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.RequestId', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentCreationRequestId: this.input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.FailureReason', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentCreationRequestId: this.input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.TargetId', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentCreationRequestId: this.input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.TargetType', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentCreationRequestId: this.input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.PermissionSetArn', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentCreationRequestId: this.input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.PrincipalType', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentCreationRequestId: this.input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.PrincipalId', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentCreationRequestId: this.input.accountAssignmentCreationRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentCreationStatus.AccountAssignmentCreationStatus.CreatedDate', props);
    return resource.getResponseField('AccountAssignmentCreationStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminDescribeAccountAssignmentDeletionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribeAccountAssignmentDeletionStatusRequest) {
    super(scope, id);
  }

  public get accountAssignmentDeletionStatus(): SSOAdminDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus {
    return new SSOAdminDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus(this, 'AccountAssignmentDeletionStatus', this.__resources, this.input);
  }

}

export class SSOAdminDescribeAccountAssignmentDeletionStatusAccountAssignmentDeletionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribeAccountAssignmentDeletionStatusRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentDeletionRequestId: this.input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.Status', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentDeletionRequestId: this.input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.RequestId', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentDeletionRequestId: this.input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.FailureReason', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentDeletionRequestId: this.input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.TargetId', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentDeletionRequestId: this.input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.TargetType', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentDeletionRequestId: this.input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.PermissionSetArn', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentDeletionRequestId: this.input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.PrincipalType', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentDeletionRequestId: this.input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.PrincipalId', props);
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
          InstanceArn: this.input.instanceArn,
          AccountAssignmentDeletionRequestId: this.input.accountAssignmentDeletionRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAssignmentDeletionStatus.AccountAssignmentDeletionStatus.CreatedDate', props);
    return resource.getResponseField('AccountAssignmentDeletionStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminDescribeInstanceAccessControlAttributeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceAccessControlAttributeConfiguration.Status', props);
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
          InstanceArn: this.input.instanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceAccessControlAttributeConfiguration.StatusReason', props);
    return resource.getResponseField('StatusReason') as unknown as string;
  }

  public get instanceAccessControlAttributeConfiguration(): SSOAdminDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration {
    return new SSOAdminDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration(this, 'InstanceAccessControlAttributeConfiguration', this.__resources, this.input);
  }

}

export class SSOAdminDescribeInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfiguration.AccessControlAttributes', props);
    return resource.getResponseField('InstanceAccessControlAttributeConfiguration.AccessControlAttributes') as unknown as shapes.SsoAdminAccessControlAttribute[];
  }

}

export class SSOAdminDescribePermissionSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribePermissionSetRequest) {
    super(scope, id);
  }

  public get permissionSet(): SSOAdminDescribePermissionSetPermissionSet {
    return new SSOAdminDescribePermissionSetPermissionSet(this, 'PermissionSet', this.__resources, this.input);
  }

}

export class SSOAdminDescribePermissionSetPermissionSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribePermissionSetRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSet.PermissionSet.Name', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSet.PermissionSet.PermissionSetArn', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSet.PermissionSet.Description', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSet.PermissionSet.CreatedDate', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSet.PermissionSet.SessionDuration', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSet.PermissionSet.RelayState', props);
    return resource.getResponseField('PermissionSet.RelayState') as unknown as string;
  }

}

export class SSOAdminDescribePermissionSetProvisioningStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribePermissionSetProvisioningStatusRequest) {
    super(scope, id);
  }

  public get permissionSetProvisioningStatus(): SSOAdminDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus {
    return new SSOAdminDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus(this, 'PermissionSetProvisioningStatus', this.__resources, this.input);
  }

}

export class SSOAdminDescribePermissionSetProvisioningStatusPermissionSetProvisioningStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminDescribePermissionSetProvisioningStatusRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          ProvisionPermissionSetRequestId: this.input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.Status', props);
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
          InstanceArn: this.input.instanceArn,
          ProvisionPermissionSetRequestId: this.input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.RequestId', props);
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
          InstanceArn: this.input.instanceArn,
          ProvisionPermissionSetRequestId: this.input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.AccountId', props);
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
          InstanceArn: this.input.instanceArn,
          ProvisionPermissionSetRequestId: this.input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.PermissionSetArn', props);
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
          InstanceArn: this.input.instanceArn,
          ProvisionPermissionSetRequestId: this.input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.FailureReason', props);
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
          InstanceArn: this.input.instanceArn,
          ProvisionPermissionSetRequestId: this.input.provisionPermissionSetRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissionSetProvisioningStatus.PermissionSetProvisioningStatus.CreatedDate', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.CreatedDate') as unknown as string;
  }

}

export class SSOAdminFetchInlinePolicyForPermissionSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminGetInlinePolicyForPermissionSetRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInlinePolicyForPermissionSet.InlinePolicy', props);
    return resource.getResponseField('InlinePolicy') as unknown as string;
  }

}

export class SSOAdminListAccountAssignmentCreationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListAccountAssignmentCreationStatusRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filter: {
            Status: this.input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountAssignmentCreationStatus.AccountAssignmentsCreationStatus', props);
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
          InstanceArn: this.input.instanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filter: {
            Status: this.input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountAssignmentCreationStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminListAccountAssignmentDeletionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListAccountAssignmentDeletionStatusRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filter: {
            Status: this.input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountAssignmentDeletionStatus.AccountAssignmentsDeletionStatus', props);
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
          InstanceArn: this.input.instanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filter: {
            Status: this.input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountAssignmentDeletionStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminListAccountAssignments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListAccountAssignmentsRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          AccountId: this.input.accountId,
          PermissionSetArn: this.input.permissionSetArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountAssignments.AccountAssignments', props);
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
          InstanceArn: this.input.instanceArn,
          AccountId: this.input.accountId,
          PermissionSetArn: this.input.permissionSetArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountAssignments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminListAccountsForProvisionedPermissionSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListAccountsForProvisionedPermissionSetRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          ProvisioningStatus: this.input.provisioningStatus,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountsForProvisionedPermissionSet.AccountIds', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          ProvisioningStatus: this.input.provisioningStatus,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountsForProvisionedPermissionSet.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminListInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListInstancesRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstances.Instances', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminListManagedPoliciesInPermissionSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListManagedPoliciesInPermissionSetRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListManagedPoliciesInPermissionSet.AttachedManagedPolicies', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListManagedPoliciesInPermissionSet.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminListPermissionSetProvisioningStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListPermissionSetProvisioningStatusRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filter: {
            Status: this.input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissionSetProvisioningStatus.PermissionSetsProvisioningStatus', props);
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
          InstanceArn: this.input.instanceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filter: {
            Status: this.input.filter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissionSetProvisioningStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminListPermissionSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListPermissionSetsRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissionSets.PermissionSets', props);
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
          InstanceArn: this.input.instanceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissionSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminListPermissionSetsProvisionedToAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListPermissionSetsProvisionedToAccountRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          AccountId: this.input.accountId,
          ProvisioningStatus: this.input.provisioningStatus,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissionSetsProvisionedToAccount.NextToken', props);
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
          InstanceArn: this.input.instanceArn,
          AccountId: this.input.accountId,
          ProvisioningStatus: this.input.provisioningStatus,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissionSetsProvisionedToAccount.PermissionSets', props);
    return resource.getResponseField('PermissionSets') as unknown as string[];
  }

}

export class SSOAdminListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminListTagsForResourceRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
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
          InstanceArn: this.input.instanceArn,
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSOAdminProvisionPermissionSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminProvisionPermissionSetRequest) {
    super(scope, id);
  }

  public get permissionSetProvisioningStatus(): SSOAdminProvisionPermissionSetPermissionSetProvisioningStatus {
    return new SSOAdminProvisionPermissionSetPermissionSetProvisioningStatus(this, 'PermissionSetProvisioningStatus', this.__resources, this.input);
  }

}

export class SSOAdminProvisionPermissionSetPermissionSetProvisioningStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsoAdminProvisionPermissionSetRequest) {
    super(scope, id);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.Status', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.RequestId', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.AccountId', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.PermissionSetArn', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.FailureReason', props);
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
          InstanceArn: this.input.instanceArn,
          PermissionSetArn: this.input.permissionSetArn,
          TargetId: this.input.targetId,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionPermissionSet.PermissionSetProvisioningStatus.CreatedDate', props);
    return resource.getResponseField('PermissionSetProvisioningStatus.CreatedDate') as unknown as string;
  }

}

