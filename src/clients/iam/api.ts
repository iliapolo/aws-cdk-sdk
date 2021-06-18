import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IamClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addClientIdToOpenIdConnectProvider(input: shapes.IamAddClientIdToOpenIdConnectProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addClientIdToOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.AddClientIDToOpenIDConnectProvider'),
        parameters: {
          OpenIDConnectProviderArn: input.openIdConnectProviderArn,
          ClientID: input.clientId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddClientIDToOpenIDConnectProvider', props);
  }

  public addRoleToInstanceProfile(input: shapes.IamAddRoleToInstanceProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addRoleToInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.AddRoleToInstanceProfile'),
        parameters: {
          InstanceProfileName: input.instanceProfileName,
          RoleName: input.roleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddRoleToInstanceProfile', props);
  }

  public addUserToGroup(input: shapes.IamAddUserToGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addUserToGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.AddUserToGroup'),
        parameters: {
          GroupName: input.groupName,
          UserName: input.userName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddUserToGroup', props);
  }

  public attachGroupPolicy(input: shapes.IamAttachGroupPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachGroupPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.AttachGroupPolicy'),
        parameters: {
          GroupName: input.groupName,
          PolicyArn: input.policyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachGroupPolicy', props);
  }

  public attachRolePolicy(input: shapes.IamAttachRolePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachRolePolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.AttachRolePolicy'),
        parameters: {
          RoleName: input.roleName,
          PolicyArn: input.policyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachRolePolicy', props);
  }

  public attachUserPolicy(input: shapes.IamAttachUserPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachUserPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.AttachUserPolicy'),
        parameters: {
          UserName: input.userName,
          PolicyArn: input.policyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachUserPolicy', props);
  }

  public changePassword(input: shapes.IamChangePasswordRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changePassword',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ChangePassword'),
        parameters: {
          OldPassword: input.oldPassword,
          NewPassword: input.newPassword,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ChangePassword', props);
  }

  public createAccessKey(input: shapes.IamCreateAccessKeyRequest): IAMCreateAccessKey {
    return new IAMCreateAccessKey(this, 'CreateAccessKey', this.__resources, input);
  }

  public createAccountAlias(input: shapes.IamCreateAccountAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountAlias',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateAccountAlias'),
        parameters: {
          AccountAlias: input.accountAlias,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateAccountAlias', props);
  }

  public createGroup(input: shapes.IamCreateGroupRequest): IAMCreateGroup {
    return new IAMCreateGroup(this, 'CreateGroup', this.__resources, input);
  }

  public createInstanceProfile(input: shapes.IamCreateInstanceProfileRequest): IAMCreateInstanceProfile {
    return new IAMCreateInstanceProfile(this, 'CreateInstanceProfile', this.__resources, input);
  }

  public createLoginProfile(input: shapes.IamCreateLoginProfileRequest): IAMCreateLoginProfile {
    return new IAMCreateLoginProfile(this, 'CreateLoginProfile', this.__resources, input);
  }

  public createOpenIdConnectProvider(input: shapes.IamCreateOpenIdConnectProviderRequest): IAMCreateOpenIdConnectProvider {
    return new IAMCreateOpenIdConnectProvider(this, 'CreateOpenIdConnectProvider', this.__resources, input);
  }

  public createPolicy(input: shapes.IamCreatePolicyRequest): IAMCreatePolicy {
    return new IAMCreatePolicy(this, 'CreatePolicy', this.__resources, input);
  }

  public createPolicyVersion(input: shapes.IamCreatePolicyVersionRequest): IAMCreatePolicyVersion {
    return new IAMCreatePolicyVersion(this, 'CreatePolicyVersion', this.__resources, input);
  }

  public createRole(input: shapes.IamCreateRoleRequest): IAMCreateRole {
    return new IAMCreateRole(this, 'CreateRole', this.__resources, input);
  }

  public createSamlProvider(input: shapes.IamCreateSamlProviderRequest): IAMCreateSamlProvider {
    return new IAMCreateSamlProvider(this, 'CreateSamlProvider', this.__resources, input);
  }

  public createServiceLinkedRole(input: shapes.IamCreateServiceLinkedRoleRequest): IAMCreateServiceLinkedRole {
    return new IAMCreateServiceLinkedRole(this, 'CreateServiceLinkedRole', this.__resources, input);
  }

  public createServiceSpecificCredential(input: shapes.IamCreateServiceSpecificCredentialRequest): IAMCreateServiceSpecificCredential {
    return new IAMCreateServiceSpecificCredential(this, 'CreateServiceSpecificCredential', this.__resources, input);
  }

  public createUser(input: shapes.IamCreateUserRequest): IAMCreateUser {
    return new IAMCreateUser(this, 'CreateUser', this.__resources, input);
  }

  public createVirtualMfaDevice(input: shapes.IamCreateVirtualMfaDeviceRequest): IAMCreateVirtualMfaDevice {
    return new IAMCreateVirtualMfaDevice(this, 'CreateVirtualMfaDevice', this.__resources, input);
  }

  public deactivateMfaDevice(input: shapes.IamDeactivateMfaDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deactivateMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeactivateMFADevice'),
        parameters: {
          UserName: input.userName,
          SerialNumber: input.serialNumber,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeactivateMFADevice', props);
  }

  public deleteAccessKey(input: shapes.IamDeleteAccessKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccessKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteAccessKey'),
        parameters: {
          UserName: input.userName,
          AccessKeyId: input.accessKeyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccessKey', props);
  }

  public deleteAccountAlias(input: shapes.IamDeleteAccountAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAlias',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteAccountAlias'),
        parameters: {
          AccountAlias: input.accountAlias,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccountAlias', props);
  }

  public deleteAccountPasswordPolicy(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteAccountPasswordPolicy'),
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccountPasswordPolicy', props);
  }

  public deleteGroup(input: shapes.IamDeleteGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteGroup'),
        parameters: {
          GroupName: input.groupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGroup', props);
  }

  public deleteGroupPolicy(input: shapes.IamDeleteGroupPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroupPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteGroupPolicy'),
        parameters: {
          GroupName: input.groupName,
          PolicyName: input.policyName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGroupPolicy', props);
  }

  public deleteInstanceProfile(input: shapes.IamDeleteInstanceProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteInstanceProfile'),
        parameters: {
          InstanceProfileName: input.instanceProfileName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteInstanceProfile', props);
  }

  public deleteLoginProfile(input: shapes.IamDeleteLoginProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLoginProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteLoginProfile'),
        parameters: {
          UserName: input.userName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLoginProfile', props);
  }

  public deleteOpenIdConnectProvider(input: shapes.IamDeleteOpenIdConnectProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteOpenIDConnectProvider'),
        parameters: {
          OpenIDConnectProviderArn: input.openIdConnectProviderArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteOpenIDConnectProvider', props);
  }

  public deletePolicy(input: shapes.IamDeletePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeletePolicy'),
        parameters: {
          PolicyArn: input.policyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePolicy', props);
  }

  public deletePolicyVersion(input: shapes.IamDeletePolicyVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeletePolicyVersion'),
        parameters: {
          PolicyArn: input.policyArn,
          VersionId: input.versionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePolicyVersion', props);
  }

  public deleteRole(input: shapes.IamDeleteRoleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteRole'),
        parameters: {
          RoleName: input.roleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRole', props);
  }

  public deleteRolePermissionsBoundary(input: shapes.IamDeleteRolePermissionsBoundaryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRolePermissionsBoundary',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteRolePermissionsBoundary'),
        parameters: {
          RoleName: input.roleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRolePermissionsBoundary', props);
  }

  public deleteRolePolicy(input: shapes.IamDeleteRolePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRolePolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteRolePolicy'),
        parameters: {
          RoleName: input.roleName,
          PolicyName: input.policyName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRolePolicy', props);
  }

  public deleteSamlProvider(input: shapes.IamDeleteSamlProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteSAMLProvider'),
        parameters: {
          SAMLProviderArn: input.samlProviderArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSAMLProvider', props);
  }

  public deleteSshPublicKey(input: shapes.IamDeleteSshPublicKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteSSHPublicKey'),
        parameters: {
          UserName: input.userName,
          SSHPublicKeyId: input.sshPublicKeyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSSHPublicKey', props);
  }

  public deleteServerCertificate(input: shapes.IamDeleteServerCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteServerCertificate'),
        parameters: {
          ServerCertificateName: input.serverCertificateName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteServerCertificate', props);
  }

  public deleteServiceLinkedRole(input: shapes.IamDeleteServiceLinkedRoleRequest): IAMDeleteServiceLinkedRole {
    return new IAMDeleteServiceLinkedRole(this, 'DeleteServiceLinkedRole', this.__resources, input);
  }

  public deleteServiceSpecificCredential(input: shapes.IamDeleteServiceSpecificCredentialRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteServiceSpecificCredential'),
        parameters: {
          UserName: input.userName,
          ServiceSpecificCredentialId: input.serviceSpecificCredentialId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteServiceSpecificCredential', props);
  }

  public deleteSigningCertificate(input: shapes.IamDeleteSigningCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSigningCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteSigningCertificate'),
        parameters: {
          UserName: input.userName,
          CertificateId: input.certificateId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSigningCertificate', props);
  }

  public deleteUser(input: shapes.IamDeleteUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteUser'),
        parameters: {
          UserName: input.userName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUser', props);
  }

  public deleteUserPermissionsBoundary(input: shapes.IamDeleteUserPermissionsBoundaryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserPermissionsBoundary',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteUserPermissionsBoundary'),
        parameters: {
          UserName: input.userName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUserPermissionsBoundary', props);
  }

  public deleteUserPolicy(input: shapes.IamDeleteUserPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteUserPolicy'),
        parameters: {
          UserName: input.userName,
          PolicyName: input.policyName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUserPolicy', props);
  }

  public deleteVirtualMfaDevice(input: shapes.IamDeleteVirtualMfaDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteVirtualMFADevice'),
        parameters: {
          SerialNumber: input.serialNumber,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVirtualMFADevice', props);
  }

  public detachGroupPolicy(input: shapes.IamDetachGroupPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachGroupPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DetachGroupPolicy'),
        parameters: {
          GroupName: input.groupName,
          PolicyArn: input.policyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachGroupPolicy', props);
  }

  public detachRolePolicy(input: shapes.IamDetachRolePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachRolePolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DetachRolePolicy'),
        parameters: {
          RoleName: input.roleName,
          PolicyArn: input.policyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachRolePolicy', props);
  }

  public detachUserPolicy(input: shapes.IamDetachUserPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachUserPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DetachUserPolicy'),
        parameters: {
          UserName: input.userName,
          PolicyArn: input.policyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachUserPolicy', props);
  }

  public enableMfaDevice(input: shapes.IamEnableMfaDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.EnableMFADevice'),
        parameters: {
          UserName: input.userName,
          SerialNumber: input.serialNumber,
          AuthenticationCode1: input.authenticationCode1,
          AuthenticationCode2: input.authenticationCode2,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableMFADevice', props);
  }

  public generateCredentialReport(): IAMGenerateCredentialReport {
    return new IAMGenerateCredentialReport(this, 'GenerateCredentialReport', this.__resources);
  }

  public generateOrganizationsAccessReport(input: shapes.IamGenerateOrganizationsAccessReportRequest): IAMGenerateOrganizationsAccessReport {
    return new IAMGenerateOrganizationsAccessReport(this, 'GenerateOrganizationsAccessReport', this.__resources, input);
  }

  public generateServiceLastAccessedDetails(input: shapes.IamGenerateServiceLastAccessedDetailsRequest): IAMGenerateServiceLastAccessedDetails {
    return new IAMGenerateServiceLastAccessedDetails(this, 'GenerateServiceLastAccessedDetails', this.__resources, input);
  }

  public fetchAccessKeyLastUsed(input: shapes.IamGetAccessKeyLastUsedRequest): IAMFetchAccessKeyLastUsed {
    return new IAMFetchAccessKeyLastUsed(this, 'FetchAccessKeyLastUsed', this.__resources, input);
  }

  public fetchAccountAuthorizationDetails(input: shapes.IamGetAccountAuthorizationDetailsRequest): IAMFetchAccountAuthorizationDetails {
    return new IAMFetchAccountAuthorizationDetails(this, 'FetchAccountAuthorizationDetails', this.__resources, input);
  }

  public fetchAccountPasswordPolicy(): IAMFetchAccountPasswordPolicy {
    return new IAMFetchAccountPasswordPolicy(this, 'FetchAccountPasswordPolicy', this.__resources);
  }

  public fetchAccountSummary(): IAMFetchAccountSummary {
    return new IAMFetchAccountSummary(this, 'FetchAccountSummary', this.__resources);
  }

  public fetchContextKeysForCustomPolicy(input: shapes.IamGetContextKeysForCustomPolicyRequest): IAMFetchContextKeysForCustomPolicy {
    return new IAMFetchContextKeysForCustomPolicy(this, 'FetchContextKeysForCustomPolicy', this.__resources, input);
  }

  public fetchContextKeysForPrincipalPolicy(input: shapes.IamGetContextKeysForPrincipalPolicyRequest): IAMFetchContextKeysForPrincipalPolicy {
    return new IAMFetchContextKeysForPrincipalPolicy(this, 'FetchContextKeysForPrincipalPolicy', this.__resources, input);
  }

  public fetchCredentialReport(): IAMFetchCredentialReport {
    return new IAMFetchCredentialReport(this, 'FetchCredentialReport', this.__resources);
  }

  public fetchGroup(input: shapes.IamGetGroupRequest): IAMFetchGroup {
    return new IAMFetchGroup(this, 'FetchGroup', this.__resources, input);
  }

  public fetchGroupPolicy(input: shapes.IamGetGroupPolicyRequest): IAMFetchGroupPolicy {
    return new IAMFetchGroupPolicy(this, 'FetchGroupPolicy', this.__resources, input);
  }

  public fetchInstanceProfile(input: shapes.IamGetInstanceProfileRequest): IAMFetchInstanceProfile {
    return new IAMFetchInstanceProfile(this, 'FetchInstanceProfile', this.__resources, input);
  }

  public fetchLoginProfile(input: shapes.IamGetLoginProfileRequest): IAMFetchLoginProfile {
    return new IAMFetchLoginProfile(this, 'FetchLoginProfile', this.__resources, input);
  }

  public fetchOpenIdConnectProvider(input: shapes.IamGetOpenIdConnectProviderRequest): IAMFetchOpenIdConnectProvider {
    return new IAMFetchOpenIdConnectProvider(this, 'FetchOpenIdConnectProvider', this.__resources, input);
  }

  public fetchOrganizationsAccessReport(input: shapes.IamGetOrganizationsAccessReportRequest): IAMFetchOrganizationsAccessReport {
    return new IAMFetchOrganizationsAccessReport(this, 'FetchOrganizationsAccessReport', this.__resources, input);
  }

  public fetchPolicy(input: shapes.IamGetPolicyRequest): IAMFetchPolicy {
    return new IAMFetchPolicy(this, 'FetchPolicy', this.__resources, input);
  }

  public fetchPolicyVersion(input: shapes.IamGetPolicyVersionRequest): IAMFetchPolicyVersion {
    return new IAMFetchPolicyVersion(this, 'FetchPolicyVersion', this.__resources, input);
  }

  public fetchRole(input: shapes.IamGetRoleRequest): IAMFetchRole {
    return new IAMFetchRole(this, 'FetchRole', this.__resources, input);
  }

  public fetchRolePolicy(input: shapes.IamGetRolePolicyRequest): IAMFetchRolePolicy {
    return new IAMFetchRolePolicy(this, 'FetchRolePolicy', this.__resources, input);
  }

  public fetchSamlProvider(input: shapes.IamGetSamlProviderRequest): IAMFetchSamlProvider {
    return new IAMFetchSamlProvider(this, 'FetchSamlProvider', this.__resources, input);
  }

  public fetchSshPublicKey(input: shapes.IamGetSshPublicKeyRequest): IAMFetchSshPublicKey {
    return new IAMFetchSshPublicKey(this, 'FetchSshPublicKey', this.__resources, input);
  }

  public fetchServerCertificate(input: shapes.IamGetServerCertificateRequest): IAMFetchServerCertificate {
    return new IAMFetchServerCertificate(this, 'FetchServerCertificate', this.__resources, input);
  }

  public fetchServiceLastAccessedDetails(input: shapes.IamGetServiceLastAccessedDetailsRequest): IAMFetchServiceLastAccessedDetails {
    return new IAMFetchServiceLastAccessedDetails(this, 'FetchServiceLastAccessedDetails', this.__resources, input);
  }

  public fetchServiceLastAccessedDetailsWithEntities(input: shapes.IamGetServiceLastAccessedDetailsWithEntitiesRequest): IAMFetchServiceLastAccessedDetailsWithEntities {
    return new IAMFetchServiceLastAccessedDetailsWithEntities(this, 'FetchServiceLastAccessedDetailsWithEntities', this.__resources, input);
  }

  public fetchServiceLinkedRoleDeletionStatus(input: shapes.IamGetServiceLinkedRoleDeletionStatusRequest): IAMFetchServiceLinkedRoleDeletionStatus {
    return new IAMFetchServiceLinkedRoleDeletionStatus(this, 'FetchServiceLinkedRoleDeletionStatus', this.__resources, input);
  }

  public fetchUser(input: shapes.IamGetUserRequest): IAMFetchUser {
    return new IAMFetchUser(this, 'FetchUser', this.__resources, input);
  }

  public fetchUserPolicy(input: shapes.IamGetUserPolicyRequest): IAMFetchUserPolicy {
    return new IAMFetchUserPolicy(this, 'FetchUserPolicy', this.__resources, input);
  }

  public listAccessKeys(input: shapes.IamListAccessKeysRequest): IAMListAccessKeys {
    return new IAMListAccessKeys(this, 'ListAccessKeys', this.__resources, input);
  }

  public listAccountAliases(input: shapes.IamListAccountAliasesRequest): IAMListAccountAliases {
    return new IAMListAccountAliases(this, 'ListAccountAliases', this.__resources, input);
  }

  public listAttachedGroupPolicies(input: shapes.IamListAttachedGroupPoliciesRequest): IAMListAttachedGroupPolicies {
    return new IAMListAttachedGroupPolicies(this, 'ListAttachedGroupPolicies', this.__resources, input);
  }

  public listAttachedRolePolicies(input: shapes.IamListAttachedRolePoliciesRequest): IAMListAttachedRolePolicies {
    return new IAMListAttachedRolePolicies(this, 'ListAttachedRolePolicies', this.__resources, input);
  }

  public listAttachedUserPolicies(input: shapes.IamListAttachedUserPoliciesRequest): IAMListAttachedUserPolicies {
    return new IAMListAttachedUserPolicies(this, 'ListAttachedUserPolicies', this.__resources, input);
  }

  public listEntitiesForPolicy(input: shapes.IamListEntitiesForPolicyRequest): IAMListEntitiesForPolicy {
    return new IAMListEntitiesForPolicy(this, 'ListEntitiesForPolicy', this.__resources, input);
  }

  public listGroupPolicies(input: shapes.IamListGroupPoliciesRequest): IAMListGroupPolicies {
    return new IAMListGroupPolicies(this, 'ListGroupPolicies', this.__resources, input);
  }

  public listGroups(input: shapes.IamListGroupsRequest): IAMListGroups {
    return new IAMListGroups(this, 'ListGroups', this.__resources, input);
  }

  public listGroupsForUser(input: shapes.IamListGroupsForUserRequest): IAMListGroupsForUser {
    return new IAMListGroupsForUser(this, 'ListGroupsForUser', this.__resources, input);
  }

  public listInstanceProfiles(input: shapes.IamListInstanceProfilesRequest): IAMListInstanceProfiles {
    return new IAMListInstanceProfiles(this, 'ListInstanceProfiles', this.__resources, input);
  }

  public listInstanceProfilesForRole(input: shapes.IamListInstanceProfilesForRoleRequest): IAMListInstanceProfilesForRole {
    return new IAMListInstanceProfilesForRole(this, 'ListInstanceProfilesForRole', this.__resources, input);
  }

  public listMfaDevices(input: shapes.IamListMfaDevicesRequest): IAMListMfaDevices {
    return new IAMListMfaDevices(this, 'ListMfaDevices', this.__resources, input);
  }

  public listOpenIdConnectProviders(): IAMListOpenIdConnectProviders {
    return new IAMListOpenIdConnectProviders(this, 'ListOpenIdConnectProviders', this.__resources);
  }

  public listPolicies(input: shapes.IamListPoliciesRequest): IAMListPolicies {
    return new IAMListPolicies(this, 'ListPolicies', this.__resources, input);
  }

  public listPoliciesGrantingServiceAccess(input: shapes.IamListPoliciesGrantingServiceAccessRequest): IAMListPoliciesGrantingServiceAccess {
    return new IAMListPoliciesGrantingServiceAccess(this, 'ListPoliciesGrantingServiceAccess', this.__resources, input);
  }

  public listPolicyVersions(input: shapes.IamListPolicyVersionsRequest): IAMListPolicyVersions {
    return new IAMListPolicyVersions(this, 'ListPolicyVersions', this.__resources, input);
  }

  public listRolePolicies(input: shapes.IamListRolePoliciesRequest): IAMListRolePolicies {
    return new IAMListRolePolicies(this, 'ListRolePolicies', this.__resources, input);
  }

  public listRoleTags(input: shapes.IamListRoleTagsRequest): IAMListRoleTags {
    return new IAMListRoleTags(this, 'ListRoleTags', this.__resources, input);
  }

  public listRoles(input: shapes.IamListRolesRequest): IAMListRoles {
    return new IAMListRoles(this, 'ListRoles', this.__resources, input);
  }

  public listSamlProviders(): IAMListSamlProviders {
    return new IAMListSamlProviders(this, 'ListSamlProviders', this.__resources);
  }

  public listSshPublicKeys(input: shapes.IamListSshPublicKeysRequest): IAMListSshPublicKeys {
    return new IAMListSshPublicKeys(this, 'ListSshPublicKeys', this.__resources, input);
  }

  public listServerCertificates(input: shapes.IamListServerCertificatesRequest): IAMListServerCertificates {
    return new IAMListServerCertificates(this, 'ListServerCertificates', this.__resources, input);
  }

  public listServiceSpecificCredentials(input: shapes.IamListServiceSpecificCredentialsRequest): IAMListServiceSpecificCredentials {
    return new IAMListServiceSpecificCredentials(this, 'ListServiceSpecificCredentials', this.__resources, input);
  }

  public listSigningCertificates(input: shapes.IamListSigningCertificatesRequest): IAMListSigningCertificates {
    return new IAMListSigningCertificates(this, 'ListSigningCertificates', this.__resources, input);
  }

  public listUserPolicies(input: shapes.IamListUserPoliciesRequest): IAMListUserPolicies {
    return new IAMListUserPolicies(this, 'ListUserPolicies', this.__resources, input);
  }

  public listUserTags(input: shapes.IamListUserTagsRequest): IAMListUserTags {
    return new IAMListUserTags(this, 'ListUserTags', this.__resources, input);
  }

  public listUsers(input: shapes.IamListUsersRequest): IAMListUsers {
    return new IAMListUsers(this, 'ListUsers', this.__resources, input);
  }

  public listVirtualMfaDevices(input: shapes.IamListVirtualMfaDevicesRequest): IAMListVirtualMfaDevices {
    return new IAMListVirtualMfaDevices(this, 'ListVirtualMfaDevices', this.__resources, input);
  }

  public putGroupPolicy(input: shapes.IamPutGroupPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGroupPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.PutGroupPolicy'),
        parameters: {
          GroupName: input.groupName,
          PolicyName: input.policyName,
          PolicyDocument: input.policyDocument,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutGroupPolicy', props);
  }

  public putRolePermissionsBoundary(input: shapes.IamPutRolePermissionsBoundaryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRolePermissionsBoundary',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.PutRolePermissionsBoundary'),
        parameters: {
          RoleName: input.roleName,
          PermissionsBoundary: input.permissionsBoundary,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutRolePermissionsBoundary', props);
  }

  public putRolePolicy(input: shapes.IamPutRolePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRolePolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.PutRolePolicy'),
        parameters: {
          RoleName: input.roleName,
          PolicyName: input.policyName,
          PolicyDocument: input.policyDocument,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutRolePolicy', props);
  }

  public putUserPermissionsBoundary(input: shapes.IamPutUserPermissionsBoundaryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putUserPermissionsBoundary',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.PutUserPermissionsBoundary'),
        parameters: {
          UserName: input.userName,
          PermissionsBoundary: input.permissionsBoundary,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutUserPermissionsBoundary', props);
  }

  public putUserPolicy(input: shapes.IamPutUserPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putUserPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.PutUserPolicy'),
        parameters: {
          UserName: input.userName,
          PolicyName: input.policyName,
          PolicyDocument: input.policyDocument,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutUserPolicy', props);
  }

  public removeClientIdFromOpenIdConnectProvider(input: shapes.IamRemoveClientIdFromOpenIdConnectProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeClientIdFromOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.RemoveClientIDFromOpenIDConnectProvider'),
        parameters: {
          OpenIDConnectProviderArn: input.openIdConnectProviderArn,
          ClientID: input.clientId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveClientIDFromOpenIDConnectProvider', props);
  }

  public removeRoleFromInstanceProfile(input: shapes.IamRemoveRoleFromInstanceProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeRoleFromInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.RemoveRoleFromInstanceProfile'),
        parameters: {
          InstanceProfileName: input.instanceProfileName,
          RoleName: input.roleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveRoleFromInstanceProfile', props);
  }

  public removeUserFromGroup(input: shapes.IamRemoveUserFromGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeUserFromGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.RemoveUserFromGroup'),
        parameters: {
          GroupName: input.groupName,
          UserName: input.userName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveUserFromGroup', props);
  }

  public resetServiceSpecificCredential(input: shapes.IamResetServiceSpecificCredentialRequest): IAMResetServiceSpecificCredential {
    return new IAMResetServiceSpecificCredential(this, 'ResetServiceSpecificCredential', this.__resources, input);
  }

  public resyncMfaDevice(input: shapes.IamResyncMfaDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resyncMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ResyncMFADevice'),
        parameters: {
          UserName: input.userName,
          SerialNumber: input.serialNumber,
          AuthenticationCode1: input.authenticationCode1,
          AuthenticationCode2: input.authenticationCode2,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ResyncMFADevice', props);
  }

  public setDefaultPolicyVersion(input: shapes.IamSetDefaultPolicyVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setDefaultPolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.SetDefaultPolicyVersion'),
        parameters: {
          PolicyArn: input.policyArn,
          VersionId: input.versionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetDefaultPolicyVersion', props);
  }

  public setSecurityTokenServicePreferences(input: shapes.IamSetSecurityTokenServicePreferencesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setSecurityTokenServicePreferences',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.SetSecurityTokenServicePreferences'),
        parameters: {
          GlobalEndpointTokenVersion: input.globalEndpointTokenVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetSecurityTokenServicePreferences', props);
  }

  public simulateCustomPolicy(input: shapes.IamSimulateCustomPolicyRequest): IAMSimulateCustomPolicy {
    return new IAMSimulateCustomPolicy(this, 'SimulateCustomPolicy', this.__resources, input);
  }

  public simulatePrincipalPolicy(input: shapes.IamSimulatePrincipalPolicyRequest): IAMSimulatePrincipalPolicy {
    return new IAMSimulatePrincipalPolicy(this, 'SimulatePrincipalPolicy', this.__resources, input);
  }

  public tagRole(input: shapes.IamTagRoleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.TagRole'),
        parameters: {
          RoleName: input.roleName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagRole', props);
  }

  public tagUser(input: shapes.IamTagUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.TagUser'),
        parameters: {
          UserName: input.userName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagUser', props);
  }

  public untagRole(input: shapes.IamUntagRoleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UntagRole'),
        parameters: {
          RoleName: input.roleName,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagRole', props);
  }

  public untagUser(input: shapes.IamUntagUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UntagUser'),
        parameters: {
          UserName: input.userName,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagUser', props);
  }

  public updateAccessKey(input: shapes.IamUpdateAccessKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccessKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateAccessKey'),
        parameters: {
          UserName: input.userName,
          AccessKeyId: input.accessKeyId,
          Status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAccessKey', props);
  }

  public updateAccountPasswordPolicy(input: shapes.IamUpdateAccountPasswordPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateAccountPasswordPolicy'),
        parameters: {
          MinimumPasswordLength: input.minimumPasswordLength,
          RequireSymbols: input.requireSymbols,
          RequireNumbers: input.requireNumbers,
          RequireUppercaseCharacters: input.requireUppercaseCharacters,
          RequireLowercaseCharacters: input.requireLowercaseCharacters,
          AllowUsersToChangePassword: input.allowUsersToChangePassword,
          MaxPasswordAge: input.maxPasswordAge,
          PasswordReusePrevention: input.passwordReusePrevention,
          HardExpiry: input.hardExpiry,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAccountPasswordPolicy', props);
  }

  public updateAssumeRolePolicy(input: shapes.IamUpdateAssumeRolePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssumeRolePolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateAssumeRolePolicy'),
        parameters: {
          RoleName: input.roleName,
          PolicyDocument: input.policyDocument,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAssumeRolePolicy', props);
  }

  public updateGroup(input: shapes.IamUpdateGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateGroup'),
        parameters: {
          GroupName: input.groupName,
          NewPath: input.newPath,
          NewGroupName: input.newGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateGroup', props);
  }

  public updateLoginProfile(input: shapes.IamUpdateLoginProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLoginProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateLoginProfile'),
        parameters: {
          UserName: input.userName,
          Password: input.password,
          PasswordResetRequired: input.passwordResetRequired,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLoginProfile', props);
  }

  public updateOpenIdConnectProviderThumbprint(input: shapes.IamUpdateOpenIdConnectProviderThumbprintRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateOpenIdConnectProviderThumbprint',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateOpenIDConnectProviderThumbprint'),
        parameters: {
          OpenIDConnectProviderArn: input.openIdConnectProviderArn,
          ThumbprintList: input.thumbprintList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateOpenIDConnectProviderThumbprint', props);
  }

  public updateRole(input: shapes.IamUpdateRoleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRole'),
        parameters: {
          RoleName: input.roleName,
          Description: input.description,
          MaxSessionDuration: input.maxSessionDuration,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRole', props);
  }

  public updateRoleDescription(input: shapes.IamUpdateRoleDescriptionRequest): IAMUpdateRoleDescription {
    return new IAMUpdateRoleDescription(this, 'UpdateRoleDescription', this.__resources, input);
  }

  public updateSamlProvider(input: shapes.IamUpdateSamlProviderRequest): IAMUpdateSamlProvider {
    return new IAMUpdateSamlProvider(this, 'UpdateSamlProvider', this.__resources, input);
  }

  public updateSshPublicKey(input: shapes.IamUpdateSshPublicKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateSSHPublicKey'),
        parameters: {
          UserName: input.userName,
          SSHPublicKeyId: input.sshPublicKeyId,
          Status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateSSHPublicKey', props);
  }

  public updateServerCertificate(input: shapes.IamUpdateServerCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateServerCertificate'),
        parameters: {
          ServerCertificateName: input.serverCertificateName,
          NewPath: input.newPath,
          NewServerCertificateName: input.newServerCertificateName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateServerCertificate', props);
  }

  public updateServiceSpecificCredential(input: shapes.IamUpdateServiceSpecificCredentialRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateServiceSpecificCredential'),
        parameters: {
          UserName: input.userName,
          ServiceSpecificCredentialId: input.serviceSpecificCredentialId,
          Status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateServiceSpecificCredential', props);
  }

  public updateSigningCertificate(input: shapes.IamUpdateSigningCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSigningCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateSigningCertificate'),
        parameters: {
          UserName: input.userName,
          CertificateId: input.certificateId,
          Status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateSigningCertificate', props);
  }

  public updateUser(input: shapes.IamUpdateUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateUser'),
        parameters: {
          UserName: input.userName,
          NewPath: input.newPath,
          NewUserName: input.newUserName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUser', props);
  }

  public uploadSshPublicKey(input: shapes.IamUploadSshPublicKeyRequest): IAMUploadSshPublicKey {
    return new IAMUploadSshPublicKey(this, 'UploadSshPublicKey', this.__resources, input);
  }

  public uploadServerCertificate(input: shapes.IamUploadServerCertificateRequest): IAMUploadServerCertificate {
    return new IAMUploadServerCertificate(this, 'UploadServerCertificate', this.__resources, input);
  }

  public uploadSigningCertificate(input: shapes.IamUploadSigningCertificateRequest): IAMUploadSigningCertificate {
    return new IAMUploadSigningCertificate(this, 'UploadSigningCertificate', this.__resources, input);
  }

}

export class IAMCreateAccessKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateAccessKeyRequest) {
    super(scope, id);
  }

  public get accessKey(): IAMCreateAccessKeyAccessKey {
    return new IAMCreateAccessKeyAccessKey(this, 'AccessKey', this.__resources, this.input);
  }

}

export class IAMCreateAccessKeyAccessKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateAccessKeyRequest) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateAccessKey.AccessKey.UserName'),
        outputPath: 'AccessKey.UserName',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccessKey.AccessKey.UserName', props);
    return resource.getResponseField('AccessKey.UserName') as unknown as string;
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateAccessKey.AccessKey.AccessKeyId'),
        outputPath: 'AccessKey.AccessKeyId',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccessKey.AccessKey.AccessKeyId', props);
    return resource.getResponseField('AccessKey.AccessKeyId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateAccessKey.AccessKey.Status'),
        outputPath: 'AccessKey.Status',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccessKey.AccessKey.Status', props);
    return resource.getResponseField('AccessKey.Status') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateAccessKey.AccessKey.SecretAccessKey'),
        outputPath: 'AccessKey.SecretAccessKey',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccessKey.AccessKey.SecretAccessKey', props);
    return resource.getResponseField('AccessKey.SecretAccessKey') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateAccessKey.AccessKey.CreateDate'),
        outputPath: 'AccessKey.CreateDate',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccessKey.AccessKey.CreateDate', props);
    return resource.getResponseField('AccessKey.CreateDate') as unknown as string;
  }

}

export class IAMCreateGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateGroupRequest) {
    super(scope, id);
  }

  public get group(): IAMCreateGroupGroup {
    return new IAMCreateGroupGroup(this, 'Group', this.__resources, this.input);
  }

}

export class IAMCreateGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateGroupRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateGroup.Group.Path'),
        outputPath: 'Group.Path',
        parameters: {
          Path: this.input.path,
          GroupName: this.input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.Path', props);
    return resource.getResponseField('Group.Path') as unknown as string;
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          Path: this.input.path,
          GroupName: this.input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }

  public get groupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateGroup.Group.GroupId'),
        outputPath: 'Group.GroupId',
        parameters: {
          Path: this.input.path,
          GroupName: this.input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.GroupId', props);
    return resource.getResponseField('Group.GroupId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateGroup.Group.Arn'),
        outputPath: 'Group.Arn',
        parameters: {
          Path: this.input.path,
          GroupName: this.input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.Arn', props);
    return resource.getResponseField('Group.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateGroup.Group.CreateDate'),
        outputPath: 'Group.CreateDate',
        parameters: {
          Path: this.input.path,
          GroupName: this.input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.CreateDate', props);
    return resource.getResponseField('Group.CreateDate') as unknown as string;
  }

}

export class IAMCreateInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateInstanceProfileRequest) {
    super(scope, id);
  }

  public get instanceProfile(): IAMCreateInstanceProfileInstanceProfile {
    return new IAMCreateInstanceProfileInstanceProfile(this, 'InstanceProfile', this.__resources, this.input);
  }

}

export class IAMCreateInstanceProfileInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateInstanceProfileRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateInstanceProfile.InstanceProfile.Path'),
        outputPath: 'InstanceProfile.Path',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.InstanceProfile.Path', props);
    return resource.getResponseField('InstanceProfile.Path') as unknown as string;
  }

  public get instanceProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateInstanceProfile.InstanceProfile.InstanceProfileName'),
        outputPath: 'InstanceProfile.InstanceProfileName',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.InstanceProfile.InstanceProfileName', props);
    return resource.getResponseField('InstanceProfile.InstanceProfileName') as unknown as string;
  }

  public get instanceProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateInstanceProfile.InstanceProfile.InstanceProfileId'),
        outputPath: 'InstanceProfile.InstanceProfileId',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.InstanceProfile.InstanceProfileId', props);
    return resource.getResponseField('InstanceProfile.InstanceProfileId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateInstanceProfile.InstanceProfile.Arn'),
        outputPath: 'InstanceProfile.Arn',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.InstanceProfile.Arn', props);
    return resource.getResponseField('InstanceProfile.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateInstanceProfile.InstanceProfile.CreateDate'),
        outputPath: 'InstanceProfile.CreateDate',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.InstanceProfile.CreateDate', props);
    return resource.getResponseField('InstanceProfile.CreateDate') as unknown as string;
  }

  public get roles(): shapes.IamRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateInstanceProfile.InstanceProfile.Roles'),
        outputPath: 'InstanceProfile.Roles',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.InstanceProfile.Roles', props);
    return resource.getResponseField('InstanceProfile.Roles') as unknown as shapes.IamRole[];
  }

}

export class IAMCreateLoginProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateLoginProfileRequest) {
    super(scope, id);
  }

  public get loginProfile(): IAMCreateLoginProfileLoginProfile {
    return new IAMCreateLoginProfileLoginProfile(this, 'LoginProfile', this.__resources, this.input);
  }

}

export class IAMCreateLoginProfileLoginProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateLoginProfileRequest) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoginProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateLoginProfile.LoginProfile.UserName'),
        outputPath: 'LoginProfile.UserName',
        parameters: {
          UserName: this.input.userName,
          Password: this.input.password,
          PasswordResetRequired: this.input.passwordResetRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoginProfile.LoginProfile.UserName', props);
    return resource.getResponseField('LoginProfile.UserName') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoginProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateLoginProfile.LoginProfile.CreateDate'),
        outputPath: 'LoginProfile.CreateDate',
        parameters: {
          UserName: this.input.userName,
          Password: this.input.password,
          PasswordResetRequired: this.input.passwordResetRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoginProfile.LoginProfile.CreateDate', props);
    return resource.getResponseField('LoginProfile.CreateDate') as unknown as string;
  }

  public get passwordResetRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoginProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateLoginProfile.LoginProfile.PasswordResetRequired'),
        outputPath: 'LoginProfile.PasswordResetRequired',
        parameters: {
          UserName: this.input.userName,
          Password: this.input.password,
          PasswordResetRequired: this.input.passwordResetRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoginProfile.LoginProfile.PasswordResetRequired', props);
    return resource.getResponseField('LoginProfile.PasswordResetRequired') as unknown as boolean;
  }

}

export class IAMCreateOpenIdConnectProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateOpenIdConnectProviderRequest) {
    super(scope, id);
  }

  public get openIdConnectProviderArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateOpenIDConnectProvider.OpenIDConnectProviderArn'),
        outputPath: 'OpenIDConnectProviderArn',
        parameters: {
          Url: this.input.url,
          ClientIDList: this.input.clientIdList,
          ThumbprintList: this.input.thumbprintList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOpenIDConnectProvider.OpenIDConnectProviderArn', props);
    return resource.getResponseField('OpenIDConnectProviderArn') as unknown as string;
  }

}

export class IAMCreatePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreatePolicyRequest) {
    super(scope, id);
  }

  public get policy(): IAMCreatePolicyPolicy {
    return new IAMCreatePolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class IAMCreatePolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreatePolicyRequest) {
    super(scope, id);
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.PolicyName'),
        outputPath: 'Policy.PolicyName',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.PolicyName', props);
    return resource.getResponseField('Policy.PolicyName') as unknown as string;
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.PolicyId'),
        outputPath: 'Policy.PolicyId',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.PolicyId', props);
    return resource.getResponseField('Policy.PolicyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.Arn'),
        outputPath: 'Policy.Arn',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.Arn', props);
    return resource.getResponseField('Policy.Arn') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.Path'),
        outputPath: 'Policy.Path',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.Path', props);
    return resource.getResponseField('Policy.Path') as unknown as string;
  }

  public get defaultVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.DefaultVersionId'),
        outputPath: 'Policy.DefaultVersionId',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.DefaultVersionId', props);
    return resource.getResponseField('Policy.DefaultVersionId') as unknown as string;
  }

  public get attachmentCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.AttachmentCount'),
        outputPath: 'Policy.AttachmentCount',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.AttachmentCount', props);
    return resource.getResponseField('Policy.AttachmentCount') as unknown as number;
  }

  public get permissionsBoundaryUsageCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.PermissionsBoundaryUsageCount'),
        outputPath: 'Policy.PermissionsBoundaryUsageCount',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.PermissionsBoundaryUsageCount', props);
    return resource.getResponseField('Policy.PermissionsBoundaryUsageCount') as unknown as number;
  }

  public get isAttachable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.IsAttachable'),
        outputPath: 'Policy.IsAttachable',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.IsAttachable', props);
    return resource.getResponseField('Policy.IsAttachable') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.Description'),
        outputPath: 'Policy.Description',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.Description', props);
    return resource.getResponseField('Policy.Description') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.CreateDate'),
        outputPath: 'Policy.CreateDate',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.CreateDate', props);
    return resource.getResponseField('Policy.CreateDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.UpdateDate'),
        outputPath: 'Policy.UpdateDate',
        parameters: {
          PolicyName: this.input.policyName,
          Path: this.input.path,
          PolicyDocument: this.input.policyDocument,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.Policy.UpdateDate', props);
    return resource.getResponseField('Policy.UpdateDate') as unknown as string;
  }

}

export class IAMCreatePolicyVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreatePolicyVersionRequest) {
    super(scope, id);
  }

  public get policyVersion(): IAMCreatePolicyVersionPolicyVersion {
    return new IAMCreatePolicyVersionPolicyVersion(this, 'PolicyVersion', this.__resources, this.input);
  }

}

export class IAMCreatePolicyVersionPolicyVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreatePolicyVersionRequest) {
    super(scope, id);
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicyVersion.PolicyVersion.Document'),
        outputPath: 'PolicyVersion.Document',
        parameters: {
          PolicyArn: this.input.policyArn,
          PolicyDocument: this.input.policyDocument,
          SetAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicyVersion.PolicyVersion.Document', props);
    return resource.getResponseField('PolicyVersion.Document') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicyVersion.PolicyVersion.VersionId'),
        outputPath: 'PolicyVersion.VersionId',
        parameters: {
          PolicyArn: this.input.policyArn,
          PolicyDocument: this.input.policyDocument,
          SetAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicyVersion.PolicyVersion.VersionId', props);
    return resource.getResponseField('PolicyVersion.VersionId') as unknown as string;
  }

  public get isDefaultVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicyVersion.PolicyVersion.IsDefaultVersion'),
        outputPath: 'PolicyVersion.IsDefaultVersion',
        parameters: {
          PolicyArn: this.input.policyArn,
          PolicyDocument: this.input.policyDocument,
          SetAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicyVersion.PolicyVersion.IsDefaultVersion', props);
    return resource.getResponseField('PolicyVersion.IsDefaultVersion') as unknown as boolean;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicyVersion.PolicyVersion.CreateDate'),
        outputPath: 'PolicyVersion.CreateDate',
        parameters: {
          PolicyArn: this.input.policyArn,
          PolicyDocument: this.input.policyDocument,
          SetAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicyVersion.PolicyVersion.CreateDate', props);
    return resource.getResponseField('PolicyVersion.CreateDate') as unknown as string;
  }

}

export class IAMCreateRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateRoleRequest) {
    super(scope, id);
  }

  public get role(): IAMCreateRoleRole {
    return new IAMCreateRoleRole(this, 'Role', this.__resources, this.input);
  }

}

export class IAMCreateRoleRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateRoleRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.Path'),
        outputPath: 'Role.Path',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.Path', props);
    return resource.getResponseField('Role.Path') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.RoleName'),
        outputPath: 'Role.RoleName',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.RoleName', props);
    return resource.getResponseField('Role.RoleName') as unknown as string;
  }

  public get roleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.RoleId'),
        outputPath: 'Role.RoleId',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.RoleId', props);
    return resource.getResponseField('Role.RoleId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.Arn'),
        outputPath: 'Role.Arn',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.Arn', props);
    return resource.getResponseField('Role.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.CreateDate'),
        outputPath: 'Role.CreateDate',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.CreateDate', props);
    return resource.getResponseField('Role.CreateDate') as unknown as string;
  }

  public get assumeRolePolicyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.AssumeRolePolicyDocument'),
        outputPath: 'Role.AssumeRolePolicyDocument',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.AssumeRolePolicyDocument', props);
    return resource.getResponseField('Role.AssumeRolePolicyDocument') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.Description'),
        outputPath: 'Role.Description',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.Description', props);
    return resource.getResponseField('Role.Description') as unknown as string;
  }

  public get maxSessionDuration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.MaxSessionDuration'),
        outputPath: 'Role.MaxSessionDuration',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.MaxSessionDuration', props);
    return resource.getResponseField('Role.MaxSessionDuration') as unknown as number;
  }

  public get permissionsBoundary(): IAMCreateRoleRolePermissionsBoundary {
    return new IAMCreateRoleRolePermissionsBoundary(this, 'PermissionsBoundary', this.__resources, this.input);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.Tags'),
        outputPath: 'Role.Tags',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.Tags', props);
    return resource.getResponseField('Role.Tags') as unknown as shapes.IamTag[];
  }

  public get roleLastUsed(): IAMCreateRoleRoleRoleLastUsed {
    return new IAMCreateRoleRoleRoleLastUsed(this, 'RoleLastUsed', this.__resources, this.input);
  }

}

export class IAMCreateRoleRolePermissionsBoundary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateRoleRequest) {
    super(scope, id);
  }

  public get permissionsBoundaryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.PermissionsBoundary.PermissionsBoundaryType'),
        outputPath: 'Role.PermissionsBoundary.PermissionsBoundaryType',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.PermissionsBoundary.PermissionsBoundaryType', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryType') as unknown as string;
  }

  public get permissionsBoundaryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.PermissionsBoundary.PermissionsBoundaryArn'),
        outputPath: 'Role.PermissionsBoundary.PermissionsBoundaryArn',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMCreateRoleRoleRoleLastUsed extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateRoleRequest) {
    super(scope, id);
  }

  public get lastUsedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.RoleLastUsed.LastUsedDate'),
        outputPath: 'Role.RoleLastUsed.LastUsedDate',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.RoleLastUsed.LastUsedDate', props);
    return resource.getResponseField('Role.RoleLastUsed.LastUsedDate') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateRole.Role.RoleLastUsed.Region'),
        outputPath: 'Role.RoleLastUsed.Region',
        parameters: {
          Path: this.input.path,
          RoleName: this.input.roleName,
          AssumeRolePolicyDocument: this.input.assumeRolePolicyDocument,
          Description: this.input.description,
          MaxSessionDuration: this.input.maxSessionDuration,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRole.Role.RoleLastUsed.Region', props);
    return resource.getResponseField('Role.RoleLastUsed.Region') as unknown as string;
  }

}

export class IAMCreateSamlProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateSamlProviderRequest) {
    super(scope, id);
  }

  public get samlProviderArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateSAMLProvider.SAMLProviderArn'),
        outputPath: 'SAMLProviderArn',
        parameters: {
          SAMLMetadataDocument: this.input.samlMetadataDocument,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSAMLProvider.SAMLProviderArn', props);
    return resource.getResponseField('SAMLProviderArn') as unknown as string;
  }

}

export class IAMCreateServiceLinkedRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateServiceLinkedRoleRequest) {
    super(scope, id);
  }

  public get role(): IAMCreateServiceLinkedRoleRole {
    return new IAMCreateServiceLinkedRoleRole(this, 'Role', this.__resources, this.input);
  }

}

export class IAMCreateServiceLinkedRoleRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateServiceLinkedRoleRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.Path'),
        outputPath: 'Role.Path',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.Path', props);
    return resource.getResponseField('Role.Path') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.RoleName'),
        outputPath: 'Role.RoleName',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.RoleName', props);
    return resource.getResponseField('Role.RoleName') as unknown as string;
  }

  public get roleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.RoleId'),
        outputPath: 'Role.RoleId',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.RoleId', props);
    return resource.getResponseField('Role.RoleId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.Arn'),
        outputPath: 'Role.Arn',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.Arn', props);
    return resource.getResponseField('Role.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.CreateDate'),
        outputPath: 'Role.CreateDate',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.CreateDate', props);
    return resource.getResponseField('Role.CreateDate') as unknown as string;
  }

  public get assumeRolePolicyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.AssumeRolePolicyDocument'),
        outputPath: 'Role.AssumeRolePolicyDocument',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.AssumeRolePolicyDocument', props);
    return resource.getResponseField('Role.AssumeRolePolicyDocument') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.Description'),
        outputPath: 'Role.Description',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.Description', props);
    return resource.getResponseField('Role.Description') as unknown as string;
  }

  public get maxSessionDuration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.MaxSessionDuration'),
        outputPath: 'Role.MaxSessionDuration',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.MaxSessionDuration', props);
    return resource.getResponseField('Role.MaxSessionDuration') as unknown as number;
  }

  public get permissionsBoundary(): IAMCreateServiceLinkedRoleRolePermissionsBoundary {
    return new IAMCreateServiceLinkedRoleRolePermissionsBoundary(this, 'PermissionsBoundary', this.__resources, this.input);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.Tags'),
        outputPath: 'Role.Tags',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.Tags', props);
    return resource.getResponseField('Role.Tags') as unknown as shapes.IamTag[];
  }

  public get roleLastUsed(): IAMCreateServiceLinkedRoleRoleRoleLastUsed {
    return new IAMCreateServiceLinkedRoleRoleRoleLastUsed(this, 'RoleLastUsed', this.__resources, this.input);
  }

}

export class IAMCreateServiceLinkedRoleRolePermissionsBoundary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateServiceLinkedRoleRequest) {
    super(scope, id);
  }

  public get permissionsBoundaryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.PermissionsBoundary.PermissionsBoundaryType'),
        outputPath: 'Role.PermissionsBoundary.PermissionsBoundaryType',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.PermissionsBoundary.PermissionsBoundaryType', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryType') as unknown as string;
  }

  public get permissionsBoundaryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.PermissionsBoundary.PermissionsBoundaryArn'),
        outputPath: 'Role.PermissionsBoundary.PermissionsBoundaryArn',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMCreateServiceLinkedRoleRoleRoleLastUsed extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateServiceLinkedRoleRequest) {
    super(scope, id);
  }

  public get lastUsedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.RoleLastUsed.LastUsedDate'),
        outputPath: 'Role.RoleLastUsed.LastUsedDate',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.RoleLastUsed.LastUsedDate', props);
    return resource.getResponseField('Role.RoleLastUsed.LastUsedDate') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceLinkedRole.Role.RoleLastUsed.Region'),
        outputPath: 'Role.RoleLastUsed.Region',
        parameters: {
          AWSServiceName: this.input.awsServiceName,
          Description: this.input.description,
          CustomSuffix: this.input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceLinkedRole.Role.RoleLastUsed.Region', props);
    return resource.getResponseField('Role.RoleLastUsed.Region') as unknown as string;
  }

}

export class IAMCreateServiceSpecificCredential extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateServiceSpecificCredentialRequest) {
    super(scope, id);
  }

  public get serviceSpecificCredential(): IAMCreateServiceSpecificCredentialServiceSpecificCredential {
    return new IAMCreateServiceSpecificCredentialServiceSpecificCredential(this, 'ServiceSpecificCredential', this.__resources, this.input);
  }

}

export class IAMCreateServiceSpecificCredentialServiceSpecificCredential extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateServiceSpecificCredentialRequest) {
    super(scope, id);
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceSpecificCredential.ServiceSpecificCredential.CreateDate'),
        outputPath: 'ServiceSpecificCredential.CreateDate',
        parameters: {
          UserName: this.input.userName,
          ServiceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceSpecificCredential.ServiceSpecificCredential.CreateDate', props);
    return resource.getResponseField('ServiceSpecificCredential.CreateDate') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceSpecificCredential.ServiceSpecificCredential.ServiceName'),
        outputPath: 'ServiceSpecificCredential.ServiceName',
        parameters: {
          UserName: this.input.userName,
          ServiceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceSpecificCredential.ServiceSpecificCredential.ServiceName', props);
    return resource.getResponseField('ServiceSpecificCredential.ServiceName') as unknown as string;
  }

  public get serviceUserName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceSpecificCredential.ServiceSpecificCredential.ServiceUserName'),
        outputPath: 'ServiceSpecificCredential.ServiceUserName',
        parameters: {
          UserName: this.input.userName,
          ServiceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceSpecificCredential.ServiceSpecificCredential.ServiceUserName', props);
    return resource.getResponseField('ServiceSpecificCredential.ServiceUserName') as unknown as string;
  }

  public get servicePassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceSpecificCredential.ServiceSpecificCredential.ServicePassword'),
        outputPath: 'ServiceSpecificCredential.ServicePassword',
        parameters: {
          UserName: this.input.userName,
          ServiceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceSpecificCredential.ServiceSpecificCredential.ServicePassword', props);
    return resource.getResponseField('ServiceSpecificCredential.ServicePassword') as unknown as string;
  }

  public get serviceSpecificCredentialId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceSpecificCredential.ServiceSpecificCredential.ServiceSpecificCredentialId'),
        outputPath: 'ServiceSpecificCredential.ServiceSpecificCredentialId',
        parameters: {
          UserName: this.input.userName,
          ServiceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceSpecificCredential.ServiceSpecificCredential.ServiceSpecificCredentialId', props);
    return resource.getResponseField('ServiceSpecificCredential.ServiceSpecificCredentialId') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceSpecificCredential.ServiceSpecificCredential.UserName'),
        outputPath: 'ServiceSpecificCredential.UserName',
        parameters: {
          UserName: this.input.userName,
          ServiceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceSpecificCredential.ServiceSpecificCredential.UserName', props);
    return resource.getResponseField('ServiceSpecificCredential.UserName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateServiceSpecificCredential.ServiceSpecificCredential.Status'),
        outputPath: 'ServiceSpecificCredential.Status',
        parameters: {
          UserName: this.input.userName,
          ServiceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceSpecificCredential.ServiceSpecificCredential.Status', props);
    return resource.getResponseField('ServiceSpecificCredential.Status') as unknown as string;
  }

}

export class IAMCreateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateUserRequest) {
    super(scope, id);
  }

  public get user(): IAMCreateUserUser {
    return new IAMCreateUserUser(this, 'User', this.__resources, this.input);
  }

}

export class IAMCreateUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateUserRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateUser.User.Path'),
        outputPath: 'User.Path',
        parameters: {
          Path: this.input.path,
          UserName: this.input.userName,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Path', props);
    return resource.getResponseField('User.Path') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateUser.User.UserName'),
        outputPath: 'User.UserName',
        parameters: {
          Path: this.input.path,
          UserName: this.input.userName,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.UserName', props);
    return resource.getResponseField('User.UserName') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateUser.User.UserId'),
        outputPath: 'User.UserId',
        parameters: {
          Path: this.input.path,
          UserName: this.input.userName,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.UserId', props);
    return resource.getResponseField('User.UserId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateUser.User.Arn'),
        outputPath: 'User.Arn',
        parameters: {
          Path: this.input.path,
          UserName: this.input.userName,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Arn', props);
    return resource.getResponseField('User.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateUser.User.CreateDate'),
        outputPath: 'User.CreateDate',
        parameters: {
          Path: this.input.path,
          UserName: this.input.userName,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.CreateDate', props);
    return resource.getResponseField('User.CreateDate') as unknown as string;
  }

  public get passwordLastUsed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateUser.User.PasswordLastUsed'),
        outputPath: 'User.PasswordLastUsed',
        parameters: {
          Path: this.input.path,
          UserName: this.input.userName,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.PasswordLastUsed', props);
    return resource.getResponseField('User.PasswordLastUsed') as unknown as string;
  }

  public get permissionsBoundary(): IAMCreateUserUserPermissionsBoundary {
    return new IAMCreateUserUserPermissionsBoundary(this, 'PermissionsBoundary', this.__resources, this.input);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateUser.User.Tags'),
        outputPath: 'User.Tags',
        parameters: {
          Path: this.input.path,
          UserName: this.input.userName,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.Tags', props);
    return resource.getResponseField('User.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMCreateUserUserPermissionsBoundary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateUserRequest) {
    super(scope, id);
  }

  public get permissionsBoundaryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateUser.User.PermissionsBoundary.PermissionsBoundaryType'),
        outputPath: 'User.PermissionsBoundary.PermissionsBoundaryType',
        parameters: {
          Path: this.input.path,
          UserName: this.input.userName,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.PermissionsBoundary.PermissionsBoundaryType', props);
    return resource.getResponseField('User.PermissionsBoundary.PermissionsBoundaryType') as unknown as string;
  }

  public get permissionsBoundaryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateUser.User.PermissionsBoundary.PermissionsBoundaryArn'),
        outputPath: 'User.PermissionsBoundary.PermissionsBoundaryArn',
        parameters: {
          Path: this.input.path,
          UserName: this.input.userName,
          PermissionsBoundary: this.input.permissionsBoundary,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.User.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('User.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMCreateVirtualMfaDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateVirtualMfaDeviceRequest) {
    super(scope, id);
  }

  public get virtualMfaDevice(): IAMCreateVirtualMfaDeviceVirtualMfaDevice {
    return new IAMCreateVirtualMfaDeviceVirtualMfaDevice(this, 'VirtualMfaDevice', this.__resources, this.input);
  }

}

export class IAMCreateVirtualMfaDeviceVirtualMfaDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateVirtualMfaDeviceRequest) {
    super(scope, id);
  }

  public get serialNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.SerialNumber'),
        outputPath: 'VirtualMFADevice.SerialNumber',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.SerialNumber', props);
    return resource.getResponseField('VirtualMFADevice.SerialNumber') as unknown as string;
  }

  public get base32StringSeed(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.Base32StringSeed'),
        outputPath: 'VirtualMFADevice.Base32StringSeed',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.Base32StringSeed', props);
    return resource.getResponseField('VirtualMFADevice.Base32StringSeed') as unknown as any;
  }

  public get qrCodePng(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.QRCodePNG'),
        outputPath: 'VirtualMFADevice.QRCodePNG',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.QRCodePNG', props);
    return resource.getResponseField('VirtualMFADevice.QRCodePNG') as unknown as any;
  }

  public get user(): IAMCreateVirtualMfaDeviceVirtualMfaDeviceUser {
    return new IAMCreateVirtualMfaDeviceVirtualMfaDeviceUser(this, 'User', this.__resources, this.input);
  }

  public get enableDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.EnableDate'),
        outputPath: 'VirtualMFADevice.EnableDate',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.EnableDate', props);
    return resource.getResponseField('VirtualMFADevice.EnableDate') as unknown as string;
  }

}

export class IAMCreateVirtualMfaDeviceVirtualMfaDeviceUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateVirtualMfaDeviceRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.User.Path'),
        outputPath: 'VirtualMFADevice.User.Path',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.User.Path', props);
    return resource.getResponseField('VirtualMFADevice.User.Path') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.User.UserName'),
        outputPath: 'VirtualMFADevice.User.UserName',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.User.UserName', props);
    return resource.getResponseField('VirtualMFADevice.User.UserName') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.User.UserId'),
        outputPath: 'VirtualMFADevice.User.UserId',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.User.UserId', props);
    return resource.getResponseField('VirtualMFADevice.User.UserId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.User.Arn'),
        outputPath: 'VirtualMFADevice.User.Arn',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.User.Arn', props);
    return resource.getResponseField('VirtualMFADevice.User.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.User.CreateDate'),
        outputPath: 'VirtualMFADevice.User.CreateDate',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.User.CreateDate', props);
    return resource.getResponseField('VirtualMFADevice.User.CreateDate') as unknown as string;
  }

  public get passwordLastUsed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.User.PasswordLastUsed'),
        outputPath: 'VirtualMFADevice.User.PasswordLastUsed',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.User.PasswordLastUsed', props);
    return resource.getResponseField('VirtualMFADevice.User.PasswordLastUsed') as unknown as string;
  }

  public get permissionsBoundary(): IAMCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary {
    return new IAMCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary(this, 'PermissionsBoundary', this.__resources, this.input);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.User.Tags'),
        outputPath: 'VirtualMFADevice.User.Tags',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.User.Tags', props);
    return resource.getResponseField('VirtualMFADevice.User.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamCreateVirtualMfaDeviceRequest) {
    super(scope, id);
  }

  public get permissionsBoundaryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryType'),
        outputPath: 'VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryType',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryType', props);
    return resource.getResponseField('VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryType') as unknown as string;
  }

  public get permissionsBoundaryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryArn'),
        outputPath: 'VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryArn',
        parameters: {
          Path: this.input.path,
          VirtualMFADeviceName: this.input.virtualMfaDeviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVirtualMFADevice.VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMDeleteServiceLinkedRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamDeleteServiceLinkedRoleRequest) {
    super(scope, id);
  }

  public get deletionTaskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceLinkedRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.DeleteServiceLinkedRole.DeletionTaskId'),
        outputPath: 'DeletionTaskId',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteServiceLinkedRole.DeletionTaskId', props);
    return resource.getResponseField('DeletionTaskId') as unknown as string;
  }

}

export class IAMGenerateCredentialReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateCredentialReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GenerateCredentialReport.State'),
        outputPath: 'State',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateCredentialReport.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateCredentialReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GenerateCredentialReport.Description'),
        outputPath: 'Description',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateCredentialReport.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class IAMGenerateOrganizationsAccessReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGenerateOrganizationsAccessReportRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GenerateOrganizationsAccessReport.JobId'),
        outputPath: 'JobId',
        parameters: {
          EntityPath: this.input.entityPath,
          OrganizationsPolicyId: this.input.organizationsPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateOrganizationsAccessReport.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class IAMGenerateServiceLastAccessedDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGenerateServiceLastAccessedDetailsRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GenerateServiceLastAccessedDetails.JobId'),
        outputPath: 'JobId',
        parameters: {
          Arn: this.input.arn,
          Granularity: this.input.granularity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateServiceLastAccessedDetails.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class IAMFetchAccessKeyLastUsed extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetAccessKeyLastUsedRequest) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessKeyLastUsed',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccessKeyLastUsed.UserName'),
        outputPath: 'UserName',
        parameters: {
          AccessKeyId: this.input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessKeyLastUsed.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

  public get accessKeyLastUsed(): IAMFetchAccessKeyLastUsedAccessKeyLastUsed {
    return new IAMFetchAccessKeyLastUsedAccessKeyLastUsed(this, 'AccessKeyLastUsed', this.__resources, this.input);
  }

}

export class IAMFetchAccessKeyLastUsedAccessKeyLastUsed extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetAccessKeyLastUsedRequest) {
    super(scope, id);
  }

  public get lastUsedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessKeyLastUsed',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccessKeyLastUsed.AccessKeyLastUsed.LastUsedDate'),
        outputPath: 'AccessKeyLastUsed.LastUsedDate',
        parameters: {
          AccessKeyId: this.input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessKeyLastUsed.AccessKeyLastUsed.LastUsedDate', props);
    return resource.getResponseField('AccessKeyLastUsed.LastUsedDate') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessKeyLastUsed',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccessKeyLastUsed.AccessKeyLastUsed.ServiceName'),
        outputPath: 'AccessKeyLastUsed.ServiceName',
        parameters: {
          AccessKeyId: this.input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessKeyLastUsed.AccessKeyLastUsed.ServiceName', props);
    return resource.getResponseField('AccessKeyLastUsed.ServiceName') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessKeyLastUsed',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccessKeyLastUsed.AccessKeyLastUsed.Region'),
        outputPath: 'AccessKeyLastUsed.Region',
        parameters: {
          AccessKeyId: this.input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessKeyLastUsed.AccessKeyLastUsed.Region', props);
    return resource.getResponseField('AccessKeyLastUsed.Region') as unknown as string;
  }

}

export class IAMFetchAccountAuthorizationDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetAccountAuthorizationDetailsRequest) {
    super(scope, id);
  }

  public get userDetailList(): shapes.IamUserDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountAuthorizationDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountAuthorizationDetails.UserDetailList'),
        outputPath: 'UserDetailList',
        parameters: {
          Filter: this.input.filter,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountAuthorizationDetails.UserDetailList', props);
    return resource.getResponseField('UserDetailList') as unknown as shapes.IamUserDetail[];
  }

  public get groupDetailList(): shapes.IamGroupDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountAuthorizationDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountAuthorizationDetails.GroupDetailList'),
        outputPath: 'GroupDetailList',
        parameters: {
          Filter: this.input.filter,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountAuthorizationDetails.GroupDetailList', props);
    return resource.getResponseField('GroupDetailList') as unknown as shapes.IamGroupDetail[];
  }

  public get roleDetailList(): shapes.IamRoleDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountAuthorizationDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountAuthorizationDetails.RoleDetailList'),
        outputPath: 'RoleDetailList',
        parameters: {
          Filter: this.input.filter,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountAuthorizationDetails.RoleDetailList', props);
    return resource.getResponseField('RoleDetailList') as unknown as shapes.IamRoleDetail[];
  }

  public get policies(): shapes.IamManagedPolicyDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountAuthorizationDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountAuthorizationDetails.Policies'),
        outputPath: 'Policies',
        parameters: {
          Filter: this.input.filter,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountAuthorizationDetails.Policies', props);
    return resource.getResponseField('Policies') as unknown as shapes.IamManagedPolicyDetail[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountAuthorizationDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountAuthorizationDetails.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Filter: this.input.filter,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountAuthorizationDetails.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountAuthorizationDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountAuthorizationDetails.Marker'),
        outputPath: 'Marker',
        parameters: {
          Filter: this.input.filter,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountAuthorizationDetails.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMFetchAccountPasswordPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get passwordPolicy(): IAMFetchAccountPasswordPolicyPasswordPolicy {
    return new IAMFetchAccountPasswordPolicyPasswordPolicy(this, 'PasswordPolicy', this.__resources);
  }

}

export class IAMFetchAccountPasswordPolicyPasswordPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get minimumPasswordLength(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.MinimumPasswordLength'),
        outputPath: 'PasswordPolicy.MinimumPasswordLength',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.MinimumPasswordLength', props);
    return resource.getResponseField('PasswordPolicy.MinimumPasswordLength') as unknown as number;
  }

  public get requireSymbols(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.RequireSymbols'),
        outputPath: 'PasswordPolicy.RequireSymbols',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.RequireSymbols', props);
    return resource.getResponseField('PasswordPolicy.RequireSymbols') as unknown as boolean;
  }

  public get requireNumbers(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.RequireNumbers'),
        outputPath: 'PasswordPolicy.RequireNumbers',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.RequireNumbers', props);
    return resource.getResponseField('PasswordPolicy.RequireNumbers') as unknown as boolean;
  }

  public get requireUppercaseCharacters(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.RequireUppercaseCharacters'),
        outputPath: 'PasswordPolicy.RequireUppercaseCharacters',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.RequireUppercaseCharacters', props);
    return resource.getResponseField('PasswordPolicy.RequireUppercaseCharacters') as unknown as boolean;
  }

  public get requireLowercaseCharacters(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.RequireLowercaseCharacters'),
        outputPath: 'PasswordPolicy.RequireLowercaseCharacters',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.RequireLowercaseCharacters', props);
    return resource.getResponseField('PasswordPolicy.RequireLowercaseCharacters') as unknown as boolean;
  }

  public get allowUsersToChangePassword(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.AllowUsersToChangePassword'),
        outputPath: 'PasswordPolicy.AllowUsersToChangePassword',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.AllowUsersToChangePassword', props);
    return resource.getResponseField('PasswordPolicy.AllowUsersToChangePassword') as unknown as boolean;
  }

  public get expirePasswords(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.ExpirePasswords'),
        outputPath: 'PasswordPolicy.ExpirePasswords',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.ExpirePasswords', props);
    return resource.getResponseField('PasswordPolicy.ExpirePasswords') as unknown as boolean;
  }

  public get maxPasswordAge(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.MaxPasswordAge'),
        outputPath: 'PasswordPolicy.MaxPasswordAge',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.MaxPasswordAge', props);
    return resource.getResponseField('PasswordPolicy.MaxPasswordAge') as unknown as number;
  }

  public get passwordReusePrevention(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.PasswordReusePrevention'),
        outputPath: 'PasswordPolicy.PasswordReusePrevention',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.PasswordReusePrevention', props);
    return resource.getResponseField('PasswordPolicy.PasswordReusePrevention') as unknown as number;
  }

  public get hardExpiry(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountPasswordPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountPasswordPolicy.PasswordPolicy.HardExpiry'),
        outputPath: 'PasswordPolicy.HardExpiry',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountPasswordPolicy.PasswordPolicy.HardExpiry', props);
    return resource.getResponseField('PasswordPolicy.HardExpiry') as unknown as boolean;
  }

}

export class IAMFetchAccountSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get summaryMap(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSummary',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetAccountSummary.SummaryMap'),
        outputPath: 'SummaryMap',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSummary.SummaryMap', props);
    return resource.getResponseField('SummaryMap') as unknown as Record<string, number>;
  }

}

export class IAMFetchContextKeysForCustomPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetContextKeysForCustomPolicyRequest) {
    super(scope, id);
  }

  public get contextKeyNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContextKeysForCustomPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetContextKeysForCustomPolicy.ContextKeyNames'),
        outputPath: 'ContextKeyNames',
        parameters: {
          PolicyInputList: this.input.policyInputList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContextKeysForCustomPolicy.ContextKeyNames', props);
    return resource.getResponseField('ContextKeyNames') as unknown as string[];
  }

}

export class IAMFetchContextKeysForPrincipalPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetContextKeysForPrincipalPolicyRequest) {
    super(scope, id);
  }

  public get contextKeyNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContextKeysForPrincipalPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetContextKeysForPrincipalPolicy.ContextKeyNames'),
        outputPath: 'ContextKeyNames',
        parameters: {
          PolicySourceArn: this.input.policySourceArn,
          PolicyInputList: this.input.policyInputList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContextKeysForPrincipalPolicy.ContextKeyNames', props);
    return resource.getResponseField('ContextKeyNames') as unknown as string[];
  }

}

export class IAMFetchCredentialReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get content(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCredentialReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetCredentialReport.Content'),
        outputPath: 'Content',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCredentialReport.Content', props);
    return resource.getResponseField('Content') as unknown as any;
  }

  public get reportFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCredentialReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetCredentialReport.ReportFormat'),
        outputPath: 'ReportFormat',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCredentialReport.ReportFormat', props);
    return resource.getResponseField('ReportFormat') as unknown as string;
  }

  public get generatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCredentialReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetCredentialReport.GeneratedTime'),
        outputPath: 'GeneratedTime',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCredentialReport.GeneratedTime', props);
    return resource.getResponseField('GeneratedTime') as unknown as string;
  }

}

export class IAMFetchGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetGroupRequest) {
    super(scope, id);
  }

  public get group(): IAMFetchGroupGroup {
    return new IAMFetchGroupGroup(this, 'Group', this.__resources, this.input);
  }

  public get users(): shapes.IamUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroup.Users'),
        outputPath: 'Users',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.IamUser[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroup.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroup.Marker'),
        outputPath: 'Marker',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMFetchGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetGroupRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroup.Group.Path'),
        outputPath: 'Group.Path',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.Path', props);
    return resource.getResponseField('Group.Path') as unknown as string;
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }

  public get groupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroup.Group.GroupId'),
        outputPath: 'Group.GroupId',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.GroupId', props);
    return resource.getResponseField('Group.GroupId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroup.Group.Arn'),
        outputPath: 'Group.Arn',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.Arn', props);
    return resource.getResponseField('Group.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroup.Group.CreateDate'),
        outputPath: 'Group.CreateDate',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.CreateDate', props);
    return resource.getResponseField('Group.CreateDate') as unknown as string;
  }

}

export class IAMFetchGroupPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetGroupPolicyRequest) {
    super(scope, id);
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroupPolicy.GroupName'),
        outputPath: 'GroupName',
        parameters: {
          GroupName: this.input.groupName,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupPolicy.GroupName', props);
    return resource.getResponseField('GroupName') as unknown as string;
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroupPolicy.PolicyName'),
        outputPath: 'PolicyName',
        parameters: {
          GroupName: this.input.groupName,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupPolicy.PolicyName', props);
    return resource.getResponseField('PolicyName') as unknown as string;
  }

  public get policyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetGroupPolicy.PolicyDocument'),
        outputPath: 'PolicyDocument',
        parameters: {
          GroupName: this.input.groupName,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupPolicy.PolicyDocument', props);
    return resource.getResponseField('PolicyDocument') as unknown as string;
  }

}

export class IAMFetchInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetInstanceProfileRequest) {
    super(scope, id);
  }

  public get instanceProfile(): IAMFetchInstanceProfileInstanceProfile {
    return new IAMFetchInstanceProfileInstanceProfile(this, 'InstanceProfile', this.__resources, this.input);
  }

}

export class IAMFetchInstanceProfileInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetInstanceProfileRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetInstanceProfile.InstanceProfile.Path'),
        outputPath: 'InstanceProfile.Path',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.InstanceProfile.Path', props);
    return resource.getResponseField('InstanceProfile.Path') as unknown as string;
  }

  public get instanceProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetInstanceProfile.InstanceProfile.InstanceProfileName'),
        outputPath: 'InstanceProfile.InstanceProfileName',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.InstanceProfile.InstanceProfileName', props);
    return resource.getResponseField('InstanceProfile.InstanceProfileName') as unknown as string;
  }

  public get instanceProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetInstanceProfile.InstanceProfile.InstanceProfileId'),
        outputPath: 'InstanceProfile.InstanceProfileId',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.InstanceProfile.InstanceProfileId', props);
    return resource.getResponseField('InstanceProfile.InstanceProfileId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetInstanceProfile.InstanceProfile.Arn'),
        outputPath: 'InstanceProfile.Arn',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.InstanceProfile.Arn', props);
    return resource.getResponseField('InstanceProfile.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetInstanceProfile.InstanceProfile.CreateDate'),
        outputPath: 'InstanceProfile.CreateDate',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.InstanceProfile.CreateDate', props);
    return resource.getResponseField('InstanceProfile.CreateDate') as unknown as string;
  }

  public get roles(): shapes.IamRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetInstanceProfile.InstanceProfile.Roles'),
        outputPath: 'InstanceProfile.Roles',
        parameters: {
          InstanceProfileName: this.input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.InstanceProfile.Roles', props);
    return resource.getResponseField('InstanceProfile.Roles') as unknown as shapes.IamRole[];
  }

}

export class IAMFetchLoginProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetLoginProfileRequest) {
    super(scope, id);
  }

  public get loginProfile(): IAMFetchLoginProfileLoginProfile {
    return new IAMFetchLoginProfileLoginProfile(this, 'LoginProfile', this.__resources, this.input);
  }

}

export class IAMFetchLoginProfileLoginProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetLoginProfileRequest) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoginProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetLoginProfile.LoginProfile.UserName'),
        outputPath: 'LoginProfile.UserName',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoginProfile.LoginProfile.UserName', props);
    return resource.getResponseField('LoginProfile.UserName') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoginProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetLoginProfile.LoginProfile.CreateDate'),
        outputPath: 'LoginProfile.CreateDate',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoginProfile.LoginProfile.CreateDate', props);
    return resource.getResponseField('LoginProfile.CreateDate') as unknown as string;
  }

  public get passwordResetRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoginProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetLoginProfile.LoginProfile.PasswordResetRequired'),
        outputPath: 'LoginProfile.PasswordResetRequired',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoginProfile.LoginProfile.PasswordResetRequired', props);
    return resource.getResponseField('LoginProfile.PasswordResetRequired') as unknown as boolean;
  }

}

export class IAMFetchOpenIdConnectProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetOpenIdConnectProviderRequest) {
    super(scope, id);
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOpenIDConnectProvider.Url'),
        outputPath: 'Url',
        parameters: {
          OpenIDConnectProviderArn: this.input.openIdConnectProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpenIDConnectProvider.Url', props);
    return resource.getResponseField('Url') as unknown as string;
  }

  public get clientIdList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOpenIDConnectProvider.ClientIDList'),
        outputPath: 'ClientIDList',
        parameters: {
          OpenIDConnectProviderArn: this.input.openIdConnectProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpenIDConnectProvider.ClientIDList', props);
    return resource.getResponseField('ClientIDList') as unknown as string[];
  }

  public get thumbprintList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOpenIDConnectProvider.ThumbprintList'),
        outputPath: 'ThumbprintList',
        parameters: {
          OpenIDConnectProviderArn: this.input.openIdConnectProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpenIDConnectProvider.ThumbprintList', props);
    return resource.getResponseField('ThumbprintList') as unknown as string[];
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOpenIDConnectProvider.CreateDate'),
        outputPath: 'CreateDate',
        parameters: {
          OpenIDConnectProviderArn: this.input.openIdConnectProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpenIDConnectProvider.CreateDate', props);
    return resource.getResponseField('CreateDate') as unknown as string;
  }

}

export class IAMFetchOrganizationsAccessReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetOrganizationsAccessReportRequest) {
    super(scope, id);
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get jobCreationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.JobCreationDate'),
        outputPath: 'JobCreationDate',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.JobCreationDate', props);
    return resource.getResponseField('JobCreationDate') as unknown as string;
  }

  public get jobCompletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.JobCompletionDate'),
        outputPath: 'JobCompletionDate',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.JobCompletionDate', props);
    return resource.getResponseField('JobCompletionDate') as unknown as string;
  }

  public get numberOfServicesAccessible(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.NumberOfServicesAccessible'),
        outputPath: 'NumberOfServicesAccessible',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.NumberOfServicesAccessible', props);
    return resource.getResponseField('NumberOfServicesAccessible') as unknown as number;
  }

  public get numberOfServicesNotAccessed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.NumberOfServicesNotAccessed'),
        outputPath: 'NumberOfServicesNotAccessed',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.NumberOfServicesNotAccessed', props);
    return resource.getResponseField('NumberOfServicesNotAccessed') as unknown as number;
  }

  public get accessDetails(): shapes.IamAccessDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.AccessDetails'),
        outputPath: 'AccessDetails',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.AccessDetails', props);
    return resource.getResponseField('AccessDetails') as unknown as shapes.IamAccessDetail[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.Marker'),
        outputPath: 'Marker',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get errorDetails(): IAMFetchOrganizationsAccessReportErrorDetails {
    return new IAMFetchOrganizationsAccessReportErrorDetails(this, 'ErrorDetails', this.__resources, this.input);
  }

}

export class IAMFetchOrganizationsAccessReportErrorDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetOrganizationsAccessReportRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.ErrorDetails.Message'),
        outputPath: 'ErrorDetails.Message',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.ErrorDetails.Message', props);
    return resource.getResponseField('ErrorDetails.Message') as unknown as string;
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationsAccessReport',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOrganizationsAccessReport.ErrorDetails.Code'),
        outputPath: 'ErrorDetails.Code',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
          SortKey: this.input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOrganizationsAccessReport.ErrorDetails.Code', props);
    return resource.getResponseField('ErrorDetails.Code') as unknown as string;
  }

}

export class IAMFetchPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetPolicyRequest) {
    super(scope, id);
  }

  public get policy(): IAMFetchPolicyPolicy {
    return new IAMFetchPolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class IAMFetchPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetPolicyRequest) {
    super(scope, id);
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.PolicyName'),
        outputPath: 'Policy.PolicyName',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.PolicyName', props);
    return resource.getResponseField('Policy.PolicyName') as unknown as string;
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.PolicyId'),
        outputPath: 'Policy.PolicyId',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.PolicyId', props);
    return resource.getResponseField('Policy.PolicyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.Arn'),
        outputPath: 'Policy.Arn',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.Arn', props);
    return resource.getResponseField('Policy.Arn') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.Path'),
        outputPath: 'Policy.Path',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.Path', props);
    return resource.getResponseField('Policy.Path') as unknown as string;
  }

  public get defaultVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.DefaultVersionId'),
        outputPath: 'Policy.DefaultVersionId',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.DefaultVersionId', props);
    return resource.getResponseField('Policy.DefaultVersionId') as unknown as string;
  }

  public get attachmentCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.AttachmentCount'),
        outputPath: 'Policy.AttachmentCount',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.AttachmentCount', props);
    return resource.getResponseField('Policy.AttachmentCount') as unknown as number;
  }

  public get permissionsBoundaryUsageCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.PermissionsBoundaryUsageCount'),
        outputPath: 'Policy.PermissionsBoundaryUsageCount',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.PermissionsBoundaryUsageCount', props);
    return resource.getResponseField('Policy.PermissionsBoundaryUsageCount') as unknown as number;
  }

  public get isAttachable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.IsAttachable'),
        outputPath: 'Policy.IsAttachable',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.IsAttachable', props);
    return resource.getResponseField('Policy.IsAttachable') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.Description'),
        outputPath: 'Policy.Description',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.Description', props);
    return resource.getResponseField('Policy.Description') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.CreateDate'),
        outputPath: 'Policy.CreateDate',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.CreateDate', props);
    return resource.getResponseField('Policy.CreateDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.UpdateDate'),
        outputPath: 'Policy.UpdateDate',
        parameters: {
          PolicyArn: this.input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.Policy.UpdateDate', props);
    return resource.getResponseField('Policy.UpdateDate') as unknown as string;
  }

}

export class IAMFetchPolicyVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetPolicyVersionRequest) {
    super(scope, id);
  }

  public get policyVersion(): IAMFetchPolicyVersionPolicyVersion {
    return new IAMFetchPolicyVersionPolicyVersion(this, 'PolicyVersion', this.__resources, this.input);
  }

}

export class IAMFetchPolicyVersionPolicyVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetPolicyVersionRequest) {
    super(scope, id);
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicyVersion.PolicyVersion.Document'),
        outputPath: 'PolicyVersion.Document',
        parameters: {
          PolicyArn: this.input.policyArn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.PolicyVersion.Document', props);
    return resource.getResponseField('PolicyVersion.Document') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicyVersion.PolicyVersion.VersionId'),
        outputPath: 'PolicyVersion.VersionId',
        parameters: {
          PolicyArn: this.input.policyArn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.PolicyVersion.VersionId', props);
    return resource.getResponseField('PolicyVersion.VersionId') as unknown as string;
  }

  public get isDefaultVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicyVersion.PolicyVersion.IsDefaultVersion'),
        outputPath: 'PolicyVersion.IsDefaultVersion',
        parameters: {
          PolicyArn: this.input.policyArn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.PolicyVersion.IsDefaultVersion', props);
    return resource.getResponseField('PolicyVersion.IsDefaultVersion') as unknown as boolean;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicyVersion.PolicyVersion.CreateDate'),
        outputPath: 'PolicyVersion.CreateDate',
        parameters: {
          PolicyArn: this.input.policyArn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.PolicyVersion.CreateDate', props);
    return resource.getResponseField('PolicyVersion.CreateDate') as unknown as string;
  }

}

export class IAMFetchRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetRoleRequest) {
    super(scope, id);
  }

  public get role(): IAMFetchRoleRole {
    return new IAMFetchRoleRole(this, 'Role', this.__resources, this.input);
  }

}

export class IAMFetchRoleRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetRoleRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.Path'),
        outputPath: 'Role.Path',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.Path', props);
    return resource.getResponseField('Role.Path') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.RoleName'),
        outputPath: 'Role.RoleName',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.RoleName', props);
    return resource.getResponseField('Role.RoleName') as unknown as string;
  }

  public get roleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.RoleId'),
        outputPath: 'Role.RoleId',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.RoleId', props);
    return resource.getResponseField('Role.RoleId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.Arn'),
        outputPath: 'Role.Arn',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.Arn', props);
    return resource.getResponseField('Role.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.CreateDate'),
        outputPath: 'Role.CreateDate',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.CreateDate', props);
    return resource.getResponseField('Role.CreateDate') as unknown as string;
  }

  public get assumeRolePolicyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.AssumeRolePolicyDocument'),
        outputPath: 'Role.AssumeRolePolicyDocument',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.AssumeRolePolicyDocument', props);
    return resource.getResponseField('Role.AssumeRolePolicyDocument') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.Description'),
        outputPath: 'Role.Description',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.Description', props);
    return resource.getResponseField('Role.Description') as unknown as string;
  }

  public get maxSessionDuration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.MaxSessionDuration'),
        outputPath: 'Role.MaxSessionDuration',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.MaxSessionDuration', props);
    return resource.getResponseField('Role.MaxSessionDuration') as unknown as number;
  }

  public get permissionsBoundary(): IAMFetchRoleRolePermissionsBoundary {
    return new IAMFetchRoleRolePermissionsBoundary(this, 'PermissionsBoundary', this.__resources, this.input);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.Tags'),
        outputPath: 'Role.Tags',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.Tags', props);
    return resource.getResponseField('Role.Tags') as unknown as shapes.IamTag[];
  }

  public get roleLastUsed(): IAMFetchRoleRoleRoleLastUsed {
    return new IAMFetchRoleRoleRoleLastUsed(this, 'RoleLastUsed', this.__resources, this.input);
  }

}

export class IAMFetchRoleRolePermissionsBoundary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetRoleRequest) {
    super(scope, id);
  }

  public get permissionsBoundaryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.PermissionsBoundary.PermissionsBoundaryType'),
        outputPath: 'Role.PermissionsBoundary.PermissionsBoundaryType',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.PermissionsBoundary.PermissionsBoundaryType', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryType') as unknown as string;
  }

  public get permissionsBoundaryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.PermissionsBoundary.PermissionsBoundaryArn'),
        outputPath: 'Role.PermissionsBoundary.PermissionsBoundaryArn',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMFetchRoleRoleRoleLastUsed extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetRoleRequest) {
    super(scope, id);
  }

  public get lastUsedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.RoleLastUsed.LastUsedDate'),
        outputPath: 'Role.RoleLastUsed.LastUsedDate',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.RoleLastUsed.LastUsedDate', props);
    return resource.getResponseField('Role.RoleLastUsed.LastUsedDate') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRole.Role.RoleLastUsed.Region'),
        outputPath: 'Role.RoleLastUsed.Region',
        parameters: {
          RoleName: this.input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRole.Role.RoleLastUsed.Region', props);
    return resource.getResponseField('Role.RoleLastUsed.Region') as unknown as string;
  }

}

export class IAMFetchRolePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetRolePolicyRequest) {
    super(scope, id);
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRolePolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRolePolicy.RoleName'),
        outputPath: 'RoleName',
        parameters: {
          RoleName: this.input.roleName,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRolePolicy.RoleName', props);
    return resource.getResponseField('RoleName') as unknown as string;
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRolePolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRolePolicy.PolicyName'),
        outputPath: 'PolicyName',
        parameters: {
          RoleName: this.input.roleName,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRolePolicy.PolicyName', props);
    return resource.getResponseField('PolicyName') as unknown as string;
  }

  public get policyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRolePolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetRolePolicy.PolicyDocument'),
        outputPath: 'PolicyDocument',
        parameters: {
          RoleName: this.input.roleName,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRolePolicy.PolicyDocument', props);
    return resource.getResponseField('PolicyDocument') as unknown as string;
  }

}

export class IAMFetchSamlProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetSamlProviderRequest) {
    super(scope, id);
  }

  public get samlMetadataDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSAMLProvider.SAMLMetadataDocument'),
        outputPath: 'SAMLMetadataDocument',
        parameters: {
          SAMLProviderArn: this.input.samlProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSAMLProvider.SAMLMetadataDocument', props);
    return resource.getResponseField('SAMLMetadataDocument') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSAMLProvider.CreateDate'),
        outputPath: 'CreateDate',
        parameters: {
          SAMLProviderArn: this.input.samlProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSAMLProvider.CreateDate', props);
    return resource.getResponseField('CreateDate') as unknown as string;
  }

  public get validUntil(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSAMLProvider.ValidUntil'),
        outputPath: 'ValidUntil',
        parameters: {
          SAMLProviderArn: this.input.samlProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSAMLProvider.ValidUntil', props);
    return resource.getResponseField('ValidUntil') as unknown as string;
  }

}

export class IAMFetchSshPublicKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetSshPublicKeyRequest) {
    super(scope, id);
  }

  public get sshPublicKey(): IAMFetchSshPublicKeySshPublicKey {
    return new IAMFetchSshPublicKeySshPublicKey(this, 'SshPublicKey', this.__resources, this.input);
  }

}

export class IAMFetchSshPublicKeySshPublicKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetSshPublicKeyRequest) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSSHPublicKey.SSHPublicKey.UserName'),
        outputPath: 'SSHPublicKey.UserName',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyId: this.input.sshPublicKeyId,
          Encoding: this.input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSSHPublicKey.SSHPublicKey.UserName', props);
    return resource.getResponseField('SSHPublicKey.UserName') as unknown as string;
  }

  public get sshPublicKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSSHPublicKey.SSHPublicKey.SSHPublicKeyId'),
        outputPath: 'SSHPublicKey.SSHPublicKeyId',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyId: this.input.sshPublicKeyId,
          Encoding: this.input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSSHPublicKey.SSHPublicKey.SSHPublicKeyId', props);
    return resource.getResponseField('SSHPublicKey.SSHPublicKeyId') as unknown as string;
  }

  public get fingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSSHPublicKey.SSHPublicKey.Fingerprint'),
        outputPath: 'SSHPublicKey.Fingerprint',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyId: this.input.sshPublicKeyId,
          Encoding: this.input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSSHPublicKey.SSHPublicKey.Fingerprint', props);
    return resource.getResponseField('SSHPublicKey.Fingerprint') as unknown as string;
  }

  public get sshPublicKeyBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSSHPublicKey.SSHPublicKey.SSHPublicKeyBody'),
        outputPath: 'SSHPublicKey.SSHPublicKeyBody',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyId: this.input.sshPublicKeyId,
          Encoding: this.input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSSHPublicKey.SSHPublicKey.SSHPublicKeyBody', props);
    return resource.getResponseField('SSHPublicKey.SSHPublicKeyBody') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSSHPublicKey.SSHPublicKey.Status'),
        outputPath: 'SSHPublicKey.Status',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyId: this.input.sshPublicKeyId,
          Encoding: this.input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSSHPublicKey.SSHPublicKey.Status', props);
    return resource.getResponseField('SSHPublicKey.Status') as unknown as string;
  }

  public get uploadDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSSHPublicKey.SSHPublicKey.UploadDate'),
        outputPath: 'SSHPublicKey.UploadDate',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyId: this.input.sshPublicKeyId,
          Encoding: this.input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSSHPublicKey.SSHPublicKey.UploadDate', props);
    return resource.getResponseField('SSHPublicKey.UploadDate') as unknown as string;
  }

}

export class IAMFetchServerCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetServerCertificateRequest) {
    super(scope, id);
  }

  public get serverCertificate(): IAMFetchServerCertificateServerCertificate {
    return new IAMFetchServerCertificateServerCertificate(this, 'ServerCertificate', this.__resources, this.input);
  }

}

export class IAMFetchServerCertificateServerCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetServerCertificateRequest) {
    super(scope, id);
  }

  public get serverCertificateMetadata(): IAMFetchServerCertificateServerCertificateServerCertificateMetadata {
    return new IAMFetchServerCertificateServerCertificateServerCertificateMetadata(this, 'ServerCertificateMetadata', this.__resources, this.input);
  }

  public get certificateBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServerCertificate.ServerCertificate.CertificateBody'),
        outputPath: 'ServerCertificate.CertificateBody',
        parameters: {
          ServerCertificateName: this.input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServerCertificate.ServerCertificate.CertificateBody', props);
    return resource.getResponseField('ServerCertificate.CertificateBody') as unknown as string;
  }

  public get certificateChain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServerCertificate.ServerCertificate.CertificateChain'),
        outputPath: 'ServerCertificate.CertificateChain',
        parameters: {
          ServerCertificateName: this.input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServerCertificate.ServerCertificate.CertificateChain', props);
    return resource.getResponseField('ServerCertificate.CertificateChain') as unknown as string;
  }

}

export class IAMFetchServerCertificateServerCertificateServerCertificateMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetServerCertificateRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServerCertificate.ServerCertificate.ServerCertificateMetadata.Path'),
        outputPath: 'ServerCertificate.ServerCertificateMetadata.Path',
        parameters: {
          ServerCertificateName: this.input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.Path', props);
    return resource.getResponseField('ServerCertificate.ServerCertificateMetadata.Path') as unknown as string;
  }

  public get serverCertificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServerCertificate.ServerCertificate.ServerCertificateMetadata.ServerCertificateName'),
        outputPath: 'ServerCertificate.ServerCertificateMetadata.ServerCertificateName',
        parameters: {
          ServerCertificateName: this.input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.ServerCertificateName', props);
    return resource.getResponseField('ServerCertificate.ServerCertificateMetadata.ServerCertificateName') as unknown as string;
  }

  public get serverCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServerCertificate.ServerCertificate.ServerCertificateMetadata.ServerCertificateId'),
        outputPath: 'ServerCertificate.ServerCertificateMetadata.ServerCertificateId',
        parameters: {
          ServerCertificateName: this.input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.ServerCertificateId', props);
    return resource.getResponseField('ServerCertificate.ServerCertificateMetadata.ServerCertificateId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServerCertificate.ServerCertificate.ServerCertificateMetadata.Arn'),
        outputPath: 'ServerCertificate.ServerCertificateMetadata.Arn',
        parameters: {
          ServerCertificateName: this.input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.Arn', props);
    return resource.getResponseField('ServerCertificate.ServerCertificateMetadata.Arn') as unknown as string;
  }

  public get uploadDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServerCertificate.ServerCertificate.ServerCertificateMetadata.UploadDate'),
        outputPath: 'ServerCertificate.ServerCertificateMetadata.UploadDate',
        parameters: {
          ServerCertificateName: this.input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.UploadDate', props);
    return resource.getResponseField('ServerCertificate.ServerCertificateMetadata.UploadDate') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServerCertificate.ServerCertificate.ServerCertificateMetadata.Expiration'),
        outputPath: 'ServerCertificate.ServerCertificateMetadata.Expiration',
        parameters: {
          ServerCertificateName: this.input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.Expiration', props);
    return resource.getResponseField('ServerCertificate.ServerCertificateMetadata.Expiration') as unknown as string;
  }

}

export class IAMFetchServiceLastAccessedDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetServiceLastAccessedDetailsRequest) {
    super(scope, id);
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetails.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetails.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetails.JobType'),
        outputPath: 'JobType',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetails.JobType', props);
    return resource.getResponseField('JobType') as unknown as string;
  }

  public get jobCreationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetails.JobCreationDate'),
        outputPath: 'JobCreationDate',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetails.JobCreationDate', props);
    return resource.getResponseField('JobCreationDate') as unknown as string;
  }

  public get servicesLastAccessed(): shapes.IamServiceLastAccessed[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetails.ServicesLastAccessed'),
        outputPath: 'ServicesLastAccessed',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetails.ServicesLastAccessed', props);
    return resource.getResponseField('ServicesLastAccessed') as unknown as shapes.IamServiceLastAccessed[];
  }

  public get jobCompletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetails.JobCompletionDate'),
        outputPath: 'JobCompletionDate',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetails.JobCompletionDate', props);
    return resource.getResponseField('JobCompletionDate') as unknown as string;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetails.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetails.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetails.Marker'),
        outputPath: 'Marker',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetails.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get error(): IAMFetchServiceLastAccessedDetailsError {
    return new IAMFetchServiceLastAccessedDetailsError(this, 'Error', this.__resources, this.input);
  }

}

export class IAMFetchServiceLastAccessedDetailsError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetServiceLastAccessedDetailsRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetails.Error.Message'),
        outputPath: 'Error.Message',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetails.Error.Message', props);
    return resource.getResponseField('Error.Message') as unknown as string;
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetails',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetails.Error.Code'),
        outputPath: 'Error.Code',
        parameters: {
          JobId: this.input.jobId,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetails.Error.Code', props);
    return resource.getResponseField('Error.Code') as unknown as string;
  }

}

export class IAMFetchServiceLastAccessedDetailsWithEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetServiceLastAccessedDetailsWithEntitiesRequest) {
    super(scope, id);
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetailsWithEntities',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetailsWithEntities.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
          ServiceNamespace: this.input.serviceNamespace,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetailsWithEntities.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get jobCreationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetailsWithEntities',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetailsWithEntities.JobCreationDate'),
        outputPath: 'JobCreationDate',
        parameters: {
          JobId: this.input.jobId,
          ServiceNamespace: this.input.serviceNamespace,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetailsWithEntities.JobCreationDate', props);
    return resource.getResponseField('JobCreationDate') as unknown as string;
  }

  public get jobCompletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetailsWithEntities',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetailsWithEntities.JobCompletionDate'),
        outputPath: 'JobCompletionDate',
        parameters: {
          JobId: this.input.jobId,
          ServiceNamespace: this.input.serviceNamespace,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetailsWithEntities.JobCompletionDate', props);
    return resource.getResponseField('JobCompletionDate') as unknown as string;
  }

  public get entityDetailsList(): shapes.IamEntityDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetailsWithEntities',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetailsWithEntities.EntityDetailsList'),
        outputPath: 'EntityDetailsList',
        parameters: {
          JobId: this.input.jobId,
          ServiceNamespace: this.input.serviceNamespace,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetailsWithEntities.EntityDetailsList', props);
    return resource.getResponseField('EntityDetailsList') as unknown as shapes.IamEntityDetails[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetailsWithEntities',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetailsWithEntities.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          JobId: this.input.jobId,
          ServiceNamespace: this.input.serviceNamespace,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetailsWithEntities.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetailsWithEntities',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetailsWithEntities.Marker'),
        outputPath: 'Marker',
        parameters: {
          JobId: this.input.jobId,
          ServiceNamespace: this.input.serviceNamespace,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetailsWithEntities.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get error(): IAMFetchServiceLastAccessedDetailsWithEntitiesError {
    return new IAMFetchServiceLastAccessedDetailsWithEntitiesError(this, 'Error', this.__resources, this.input);
  }

}

export class IAMFetchServiceLastAccessedDetailsWithEntitiesError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetServiceLastAccessedDetailsWithEntitiesRequest) {
    super(scope, id);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetailsWithEntities',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetailsWithEntities.Error.Message'),
        outputPath: 'Error.Message',
        parameters: {
          JobId: this.input.jobId,
          ServiceNamespace: this.input.serviceNamespace,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetailsWithEntities.Error.Message', props);
    return resource.getResponseField('Error.Message') as unknown as string;
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLastAccessedDetailsWithEntities',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLastAccessedDetailsWithEntities.Error.Code'),
        outputPath: 'Error.Code',
        parameters: {
          JobId: this.input.jobId,
          ServiceNamespace: this.input.serviceNamespace,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLastAccessedDetailsWithEntities.Error.Code', props);
    return resource.getResponseField('Error.Code') as unknown as string;
  }

}

export class IAMFetchServiceLinkedRoleDeletionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetServiceLinkedRoleDeletionStatusRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLinkedRoleDeletionStatus',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLinkedRoleDeletionStatus.Status'),
        outputPath: 'Status',
        parameters: {
          DeletionTaskId: this.input.deletionTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLinkedRoleDeletionStatus.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get reason(): IAMFetchServiceLinkedRoleDeletionStatusReason {
    return new IAMFetchServiceLinkedRoleDeletionStatusReason(this, 'Reason', this.__resources, this.input);
  }

}

export class IAMFetchServiceLinkedRoleDeletionStatusReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetServiceLinkedRoleDeletionStatusRequest) {
    super(scope, id);
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLinkedRoleDeletionStatus',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLinkedRoleDeletionStatus.Reason.Reason'),
        outputPath: 'Reason.Reason',
        parameters: {
          DeletionTaskId: this.input.deletionTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLinkedRoleDeletionStatus.Reason.Reason', props);
    return resource.getResponseField('Reason.Reason') as unknown as string;
  }

  public get roleUsageList(): shapes.IamRoleUsageType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceLinkedRoleDeletionStatus',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServiceLinkedRoleDeletionStatus.Reason.RoleUsageList'),
        outputPath: 'Reason.RoleUsageList',
        parameters: {
          DeletionTaskId: this.input.deletionTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceLinkedRoleDeletionStatus.Reason.RoleUsageList', props);
    return resource.getResponseField('Reason.RoleUsageList') as unknown as shapes.IamRoleUsageType[];
  }

}

export class IAMFetchUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetUserRequest) {
    super(scope, id);
  }

  public get user(): IAMFetchUserUser {
    return new IAMFetchUserUser(this, 'User', this.__resources, this.input);
  }

}

export class IAMFetchUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetUserRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUser.User.Path'),
        outputPath: 'User.Path',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.Path', props);
    return resource.getResponseField('User.Path') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUser.User.UserName'),
        outputPath: 'User.UserName',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.UserName', props);
    return resource.getResponseField('User.UserName') as unknown as string;
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUser.User.UserId'),
        outputPath: 'User.UserId',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.UserId', props);
    return resource.getResponseField('User.UserId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUser.User.Arn'),
        outputPath: 'User.Arn',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.Arn', props);
    return resource.getResponseField('User.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUser.User.CreateDate'),
        outputPath: 'User.CreateDate',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.CreateDate', props);
    return resource.getResponseField('User.CreateDate') as unknown as string;
  }

  public get passwordLastUsed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUser.User.PasswordLastUsed'),
        outputPath: 'User.PasswordLastUsed',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.PasswordLastUsed', props);
    return resource.getResponseField('User.PasswordLastUsed') as unknown as string;
  }

  public get permissionsBoundary(): IAMFetchUserUserPermissionsBoundary {
    return new IAMFetchUserUserPermissionsBoundary(this, 'PermissionsBoundary', this.__resources, this.input);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUser.User.Tags'),
        outputPath: 'User.Tags',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.Tags', props);
    return resource.getResponseField('User.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMFetchUserUserPermissionsBoundary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetUserRequest) {
    super(scope, id);
  }

  public get permissionsBoundaryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUser.User.PermissionsBoundary.PermissionsBoundaryType'),
        outputPath: 'User.PermissionsBoundary.PermissionsBoundaryType',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.PermissionsBoundary.PermissionsBoundaryType', props);
    return resource.getResponseField('User.PermissionsBoundary.PermissionsBoundaryType') as unknown as string;
  }

  public get permissionsBoundaryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUser.User.PermissionsBoundary.PermissionsBoundaryArn'),
        outputPath: 'User.PermissionsBoundary.PermissionsBoundaryArn',
        parameters: {
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUser.User.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('User.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMFetchUserPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamGetUserPolicyRequest) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUserPolicy.UserName'),
        outputPath: 'UserName',
        parameters: {
          UserName: this.input.userName,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserPolicy.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUserPolicy.PolicyName'),
        outputPath: 'PolicyName',
        parameters: {
          UserName: this.input.userName,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserPolicy.PolicyName', props);
    return resource.getResponseField('PolicyName') as unknown as string;
  }

  public get policyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetUserPolicy.PolicyDocument'),
        outputPath: 'PolicyDocument',
        parameters: {
          UserName: this.input.userName,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserPolicy.PolicyDocument', props);
    return resource.getResponseField('PolicyDocument') as unknown as string;
  }

}

export class IAMListAccessKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListAccessKeysRequest) {
    super(scope, id);
  }

  public get accessKeyMetadata(): shapes.IamAccessKeyMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessKeys',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAccessKeys.AccessKeyMetadata'),
        outputPath: 'AccessKeyMetadata',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccessKeys.AccessKeyMetadata', props);
    return resource.getResponseField('AccessKeyMetadata') as unknown as shapes.IamAccessKeyMetadata[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessKeys',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAccessKeys.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccessKeys.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessKeys',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAccessKeys.Marker'),
        outputPath: 'Marker',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccessKeys.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListAccountAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListAccountAliasesRequest) {
    super(scope, id);
  }

  public get accountAliases(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountAliases',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAccountAliases.AccountAliases'),
        outputPath: 'AccountAliases',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountAliases.AccountAliases', props);
    return resource.getResponseField('AccountAliases') as unknown as string[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountAliases',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAccountAliases.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountAliases.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountAliases',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAccountAliases.Marker'),
        outputPath: 'Marker',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccountAliases.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListAttachedGroupPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListAttachedGroupPoliciesRequest) {
    super(scope, id);
  }

  public get attachedPolicies(): shapes.IamAttachedPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedGroupPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAttachedGroupPolicies.AttachedPolicies'),
        outputPath: 'AttachedPolicies',
        parameters: {
          GroupName: this.input.groupName,
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedGroupPolicies.AttachedPolicies', props);
    return resource.getResponseField('AttachedPolicies') as unknown as shapes.IamAttachedPolicy[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedGroupPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAttachedGroupPolicies.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          GroupName: this.input.groupName,
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedGroupPolicies.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedGroupPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAttachedGroupPolicies.Marker'),
        outputPath: 'Marker',
        parameters: {
          GroupName: this.input.groupName,
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedGroupPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListAttachedRolePolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListAttachedRolePoliciesRequest) {
    super(scope, id);
  }

  public get attachedPolicies(): shapes.IamAttachedPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedRolePolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAttachedRolePolicies.AttachedPolicies'),
        outputPath: 'AttachedPolicies',
        parameters: {
          RoleName: this.input.roleName,
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedRolePolicies.AttachedPolicies', props);
    return resource.getResponseField('AttachedPolicies') as unknown as shapes.IamAttachedPolicy[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedRolePolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAttachedRolePolicies.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          RoleName: this.input.roleName,
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedRolePolicies.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedRolePolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAttachedRolePolicies.Marker'),
        outputPath: 'Marker',
        parameters: {
          RoleName: this.input.roleName,
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedRolePolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListAttachedUserPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListAttachedUserPoliciesRequest) {
    super(scope, id);
  }

  public get attachedPolicies(): shapes.IamAttachedPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedUserPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAttachedUserPolicies.AttachedPolicies'),
        outputPath: 'AttachedPolicies',
        parameters: {
          UserName: this.input.userName,
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedUserPolicies.AttachedPolicies', props);
    return resource.getResponseField('AttachedPolicies') as unknown as shapes.IamAttachedPolicy[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedUserPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAttachedUserPolicies.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          UserName: this.input.userName,
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedUserPolicies.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedUserPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListAttachedUserPolicies.Marker'),
        outputPath: 'Marker',
        parameters: {
          UserName: this.input.userName,
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedUserPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListEntitiesForPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListEntitiesForPolicyRequest) {
    super(scope, id);
  }

  public get policyGroups(): shapes.IamPolicyGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitiesForPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListEntitiesForPolicy.PolicyGroups'),
        outputPath: 'PolicyGroups',
        parameters: {
          PolicyArn: this.input.policyArn,
          EntityFilter: this.input.entityFilter,
          PathPrefix: this.input.pathPrefix,
          PolicyUsageFilter: this.input.policyUsageFilter,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitiesForPolicy.PolicyGroups', props);
    return resource.getResponseField('PolicyGroups') as unknown as shapes.IamPolicyGroup[];
  }

  public get policyUsers(): shapes.IamPolicyUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitiesForPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListEntitiesForPolicy.PolicyUsers'),
        outputPath: 'PolicyUsers',
        parameters: {
          PolicyArn: this.input.policyArn,
          EntityFilter: this.input.entityFilter,
          PathPrefix: this.input.pathPrefix,
          PolicyUsageFilter: this.input.policyUsageFilter,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitiesForPolicy.PolicyUsers', props);
    return resource.getResponseField('PolicyUsers') as unknown as shapes.IamPolicyUser[];
  }

  public get policyRoles(): shapes.IamPolicyRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitiesForPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListEntitiesForPolicy.PolicyRoles'),
        outputPath: 'PolicyRoles',
        parameters: {
          PolicyArn: this.input.policyArn,
          EntityFilter: this.input.entityFilter,
          PathPrefix: this.input.pathPrefix,
          PolicyUsageFilter: this.input.policyUsageFilter,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitiesForPolicy.PolicyRoles', props);
    return resource.getResponseField('PolicyRoles') as unknown as shapes.IamPolicyRole[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitiesForPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListEntitiesForPolicy.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PolicyArn: this.input.policyArn,
          EntityFilter: this.input.entityFilter,
          PathPrefix: this.input.pathPrefix,
          PolicyUsageFilter: this.input.policyUsageFilter,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitiesForPolicy.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitiesForPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListEntitiesForPolicy.Marker'),
        outputPath: 'Marker',
        parameters: {
          PolicyArn: this.input.policyArn,
          EntityFilter: this.input.entityFilter,
          PathPrefix: this.input.pathPrefix,
          PolicyUsageFilter: this.input.policyUsageFilter,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitiesForPolicy.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListGroupPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListGroupPoliciesRequest) {
    super(scope, id);
  }

  public get policyNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListGroupPolicies.PolicyNames'),
        outputPath: 'PolicyNames',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupPolicies.PolicyNames', props);
    return resource.getResponseField('PolicyNames') as unknown as string[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListGroupPolicies.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupPolicies.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListGroupPolicies.Marker'),
        outputPath: 'Marker',
        parameters: {
          GroupName: this.input.groupName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListGroupsRequest) {
    super(scope, id);
  }

  public get groups(): shapes.IamGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListGroups.Groups'),
        outputPath: 'Groups',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.Groups', props);
    return resource.getResponseField('Groups') as unknown as shapes.IamGroup[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListGroups.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListGroupsForUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListGroupsForUserRequest) {
    super(scope, id);
  }

  public get groups(): shapes.IamGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupsForUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListGroupsForUser.Groups'),
        outputPath: 'Groups',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupsForUser.Groups', props);
    return resource.getResponseField('Groups') as unknown as shapes.IamGroup[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupsForUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListGroupsForUser.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupsForUser.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupsForUser',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListGroupsForUser.Marker'),
        outputPath: 'Marker',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupsForUser.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListInstanceProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListInstanceProfilesRequest) {
    super(scope, id);
  }

  public get instanceProfiles(): shapes.IamInstanceProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfiles',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListInstanceProfiles.InstanceProfiles'),
        outputPath: 'InstanceProfiles',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceProfiles.InstanceProfiles', props);
    return resource.getResponseField('InstanceProfiles') as unknown as shapes.IamInstanceProfile[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfiles',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListInstanceProfiles.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceProfiles.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfiles',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListInstanceProfiles.Marker'),
        outputPath: 'Marker',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceProfiles.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListInstanceProfilesForRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListInstanceProfilesForRoleRequest) {
    super(scope, id);
  }

  public get instanceProfiles(): shapes.IamInstanceProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfilesForRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListInstanceProfilesForRole.InstanceProfiles'),
        outputPath: 'InstanceProfiles',
        parameters: {
          RoleName: this.input.roleName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceProfilesForRole.InstanceProfiles', props);
    return resource.getResponseField('InstanceProfiles') as unknown as shapes.IamInstanceProfile[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfilesForRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListInstanceProfilesForRole.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          RoleName: this.input.roleName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceProfilesForRole.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfilesForRole',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListInstanceProfilesForRole.Marker'),
        outputPath: 'Marker',
        parameters: {
          RoleName: this.input.roleName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceProfilesForRole.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListMfaDevices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListMfaDevicesRequest) {
    super(scope, id);
  }

  public get mfaDevices(): shapes.IammfaDevice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMfaDevices',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListMFADevices.MFADevices'),
        outputPath: 'MFADevices',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMFADevices.MFADevices', props);
    return resource.getResponseField('MFADevices') as unknown as shapes.IammfaDevice[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMfaDevices',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListMFADevices.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMFADevices.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMfaDevices',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListMFADevices.Marker'),
        outputPath: 'Marker',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMFADevices.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListOpenIdConnectProviders extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get openIdConnectProviderList(): shapes.IamOpenIdConnectProviderListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOpenIdConnectProviders',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListOpenIDConnectProviders.OpenIDConnectProviderList'),
        outputPath: 'OpenIDConnectProviderList',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOpenIDConnectProviders.OpenIDConnectProviderList', props);
    return resource.getResponseField('OpenIDConnectProviderList') as unknown as shapes.IamOpenIdConnectProviderListEntry[];
  }

}

export class IAMListPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListPoliciesRequest) {
    super(scope, id);
  }

  public get policies(): shapes.IamPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPolicies.Policies'),
        outputPath: 'Policies',
        parameters: {
          Scope: this.input.scope,
          OnlyAttached: this.input.onlyAttached,
          PathPrefix: this.input.pathPrefix,
          PolicyUsageFilter: this.input.policyUsageFilter,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicies.Policies', props);
    return resource.getResponseField('Policies') as unknown as shapes.IamPolicy[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPolicies.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Scope: this.input.scope,
          OnlyAttached: this.input.onlyAttached,
          PathPrefix: this.input.pathPrefix,
          PolicyUsageFilter: this.input.policyUsageFilter,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicies.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPolicies.Marker'),
        outputPath: 'Marker',
        parameters: {
          Scope: this.input.scope,
          OnlyAttached: this.input.onlyAttached,
          PathPrefix: this.input.pathPrefix,
          PolicyUsageFilter: this.input.policyUsageFilter,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListPoliciesGrantingServiceAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListPoliciesGrantingServiceAccessRequest) {
    super(scope, id);
  }

  public get policiesGrantingServiceAccess(): shapes.IamListPoliciesGrantingServiceAccessEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPoliciesGrantingServiceAccess',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPoliciesGrantingServiceAccess.PoliciesGrantingServiceAccess'),
        outputPath: 'PoliciesGrantingServiceAccess',
        parameters: {
          Marker: this.input.marker,
          Arn: this.input.arn,
          ServiceNamespaces: this.input.serviceNamespaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPoliciesGrantingServiceAccess.PoliciesGrantingServiceAccess', props);
    return resource.getResponseField('PoliciesGrantingServiceAccess') as unknown as shapes.IamListPoliciesGrantingServiceAccessEntry[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPoliciesGrantingServiceAccess',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPoliciesGrantingServiceAccess.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Marker: this.input.marker,
          Arn: this.input.arn,
          ServiceNamespaces: this.input.serviceNamespaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPoliciesGrantingServiceAccess.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPoliciesGrantingServiceAccess',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPoliciesGrantingServiceAccess.Marker'),
        outputPath: 'Marker',
        parameters: {
          Marker: this.input.marker,
          Arn: this.input.arn,
          ServiceNamespaces: this.input.serviceNamespaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPoliciesGrantingServiceAccess.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListPolicyVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListPolicyVersionsRequest) {
    super(scope, id);
  }

  public get versions(): shapes.IamPolicyVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyVersions',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPolicyVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          PolicyArn: this.input.policyArn,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicyVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.IamPolicyVersion[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyVersions',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPolicyVersions.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PolicyArn: this.input.policyArn,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicyVersions.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyVersions',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPolicyVersions.Marker'),
        outputPath: 'Marker',
        parameters: {
          PolicyArn: this.input.policyArn,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicyVersions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListRolePolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListRolePoliciesRequest) {
    super(scope, id);
  }

  public get policyNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRolePolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListRolePolicies.PolicyNames'),
        outputPath: 'PolicyNames',
        parameters: {
          RoleName: this.input.roleName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRolePolicies.PolicyNames', props);
    return resource.getResponseField('PolicyNames') as unknown as string[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRolePolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListRolePolicies.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          RoleName: this.input.roleName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRolePolicies.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRolePolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListRolePolicies.Marker'),
        outputPath: 'Marker',
        parameters: {
          RoleName: this.input.roleName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRolePolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListRoleTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListRoleTagsRequest) {
    super(scope, id);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoleTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListRoleTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          RoleName: this.input.roleName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoleTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoleTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListRoleTags.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          RoleName: this.input.roleName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoleTags.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoleTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListRoleTags.Marker'),
        outputPath: 'Marker',
        parameters: {
          RoleName: this.input.roleName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoleTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListRoles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListRolesRequest) {
    super(scope, id);
  }

  public get roles(): shapes.IamRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoles',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListRoles.Roles'),
        outputPath: 'Roles',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoles.Roles', props);
    return resource.getResponseField('Roles') as unknown as shapes.IamRole[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoles',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListRoles.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoles.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoles',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListRoles.Marker'),
        outputPath: 'Marker',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoles.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListSamlProviders extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get samlProviderList(): shapes.IamsamlProviderListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSamlProviders',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSAMLProviders.SAMLProviderList'),
        outputPath: 'SAMLProviderList',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSAMLProviders.SAMLProviderList', props);
    return resource.getResponseField('SAMLProviderList') as unknown as shapes.IamsamlProviderListEntry[];
  }

}

export class IAMListSshPublicKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListSshPublicKeysRequest) {
    super(scope, id);
  }

  public get sshPublicKeys(): shapes.IamsshPublicKeyMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSshPublicKeys',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSSHPublicKeys.SSHPublicKeys'),
        outputPath: 'SSHPublicKeys',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSSHPublicKeys.SSHPublicKeys', props);
    return resource.getResponseField('SSHPublicKeys') as unknown as shapes.IamsshPublicKeyMetadata[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSshPublicKeys',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSSHPublicKeys.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSSHPublicKeys.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSshPublicKeys',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSSHPublicKeys.Marker'),
        outputPath: 'Marker',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSSHPublicKeys.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListServerCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListServerCertificatesRequest) {
    super(scope, id);
  }

  public get serverCertificateMetadataList(): shapes.IamServerCertificateMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServerCertificates',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListServerCertificates.ServerCertificateMetadataList'),
        outputPath: 'ServerCertificateMetadataList',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServerCertificates.ServerCertificateMetadataList', props);
    return resource.getResponseField('ServerCertificateMetadataList') as unknown as shapes.IamServerCertificateMetadata[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServerCertificates',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListServerCertificates.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServerCertificates.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServerCertificates',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListServerCertificates.Marker'),
        outputPath: 'Marker',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServerCertificates.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListServiceSpecificCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListServiceSpecificCredentialsRequest) {
    super(scope, id);
  }

  public get serviceSpecificCredentials(): shapes.IamServiceSpecificCredentialMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceSpecificCredentials',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListServiceSpecificCredentials.ServiceSpecificCredentials'),
        outputPath: 'ServiceSpecificCredentials',
        parameters: {
          UserName: this.input.userName,
          ServiceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServiceSpecificCredentials.ServiceSpecificCredentials', props);
    return resource.getResponseField('ServiceSpecificCredentials') as unknown as shapes.IamServiceSpecificCredentialMetadata[];
  }

}

export class IAMListSigningCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListSigningCertificatesRequest) {
    super(scope, id);
  }

  public get certificates(): shapes.IamSigningCertificate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSigningCertificates',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSigningCertificates.Certificates'),
        outputPath: 'Certificates',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSigningCertificates.Certificates', props);
    return resource.getResponseField('Certificates') as unknown as shapes.IamSigningCertificate[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSigningCertificates',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSigningCertificates.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSigningCertificates.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSigningCertificates',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSigningCertificates.Marker'),
        outputPath: 'Marker',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSigningCertificates.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListUserPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListUserPoliciesRequest) {
    super(scope, id);
  }

  public get policyNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListUserPolicies.PolicyNames'),
        outputPath: 'PolicyNames',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserPolicies.PolicyNames', props);
    return resource.getResponseField('PolicyNames') as unknown as string[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListUserPolicies.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserPolicies.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserPolicies',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListUserPolicies.Marker'),
        outputPath: 'Marker',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListUserTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListUserTagsRequest) {
    super(scope, id);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListUserTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListUserTags.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserTags.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListUserTags.Marker'),
        outputPath: 'Marker',
        parameters: {
          UserName: this.input.userName,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListUsersRequest) {
    super(scope, id);
  }

  public get users(): shapes.IamUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListUsers.Users'),
        outputPath: 'Users',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.IamUser[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListUsers.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListUsers.Marker'),
        outputPath: 'Marker',
        parameters: {
          PathPrefix: this.input.pathPrefix,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMListVirtualMfaDevices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamListVirtualMfaDevicesRequest) {
    super(scope, id);
  }

  public get virtualMfaDevices(): shapes.IamVirtualMfaDevice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVirtualMfaDevices',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListVirtualMFADevices.VirtualMFADevices'),
        outputPath: 'VirtualMFADevices',
        parameters: {
          AssignmentStatus: this.input.assignmentStatus,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVirtualMFADevices.VirtualMFADevices', props);
    return resource.getResponseField('VirtualMFADevices') as unknown as shapes.IamVirtualMfaDevice[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVirtualMfaDevices',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListVirtualMFADevices.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          AssignmentStatus: this.input.assignmentStatus,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVirtualMFADevices.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVirtualMfaDevices',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListVirtualMFADevices.Marker'),
        outputPath: 'Marker',
        parameters: {
          AssignmentStatus: this.input.assignmentStatus,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVirtualMFADevices.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResetServiceSpecificCredential extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamResetServiceSpecificCredentialRequest) {
    super(scope, id);
  }

  public get serviceSpecificCredential(): IAMResetServiceSpecificCredentialServiceSpecificCredential {
    return new IAMResetServiceSpecificCredentialServiceSpecificCredential(this, 'ServiceSpecificCredential', this.__resources, this.input);
  }

}

export class IAMResetServiceSpecificCredentialServiceSpecificCredential extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamResetServiceSpecificCredentialRequest) {
    super(scope, id);
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ResetServiceSpecificCredential.ServiceSpecificCredential.CreateDate'),
        outputPath: 'ServiceSpecificCredential.CreateDate',
        parameters: {
          UserName: this.input.userName,
          ServiceSpecificCredentialId: this.input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSpecificCredential.ServiceSpecificCredential.CreateDate', props);
    return resource.getResponseField('ServiceSpecificCredential.CreateDate') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ResetServiceSpecificCredential.ServiceSpecificCredential.ServiceName'),
        outputPath: 'ServiceSpecificCredential.ServiceName',
        parameters: {
          UserName: this.input.userName,
          ServiceSpecificCredentialId: this.input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSpecificCredential.ServiceSpecificCredential.ServiceName', props);
    return resource.getResponseField('ServiceSpecificCredential.ServiceName') as unknown as string;
  }

  public get serviceUserName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ResetServiceSpecificCredential.ServiceSpecificCredential.ServiceUserName'),
        outputPath: 'ServiceSpecificCredential.ServiceUserName',
        parameters: {
          UserName: this.input.userName,
          ServiceSpecificCredentialId: this.input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSpecificCredential.ServiceSpecificCredential.ServiceUserName', props);
    return resource.getResponseField('ServiceSpecificCredential.ServiceUserName') as unknown as string;
  }

  public get servicePassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ResetServiceSpecificCredential.ServiceSpecificCredential.ServicePassword'),
        outputPath: 'ServiceSpecificCredential.ServicePassword',
        parameters: {
          UserName: this.input.userName,
          ServiceSpecificCredentialId: this.input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSpecificCredential.ServiceSpecificCredential.ServicePassword', props);
    return resource.getResponseField('ServiceSpecificCredential.ServicePassword') as unknown as string;
  }

  public get serviceSpecificCredentialId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ResetServiceSpecificCredential.ServiceSpecificCredential.ServiceSpecificCredentialId'),
        outputPath: 'ServiceSpecificCredential.ServiceSpecificCredentialId',
        parameters: {
          UserName: this.input.userName,
          ServiceSpecificCredentialId: this.input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSpecificCredential.ServiceSpecificCredential.ServiceSpecificCredentialId', props);
    return resource.getResponseField('ServiceSpecificCredential.ServiceSpecificCredentialId') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ResetServiceSpecificCredential.ServiceSpecificCredential.UserName'),
        outputPath: 'ServiceSpecificCredential.UserName',
        parameters: {
          UserName: this.input.userName,
          ServiceSpecificCredentialId: this.input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSpecificCredential.ServiceSpecificCredential.UserName', props);
    return resource.getResponseField('ServiceSpecificCredential.UserName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSpecificCredential',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ResetServiceSpecificCredential.ServiceSpecificCredential.Status'),
        outputPath: 'ServiceSpecificCredential.Status',
        parameters: {
          UserName: this.input.userName,
          ServiceSpecificCredentialId: this.input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSpecificCredential.ServiceSpecificCredential.Status', props);
    return resource.getResponseField('ServiceSpecificCredential.Status') as unknown as string;
  }

}

export class IAMSimulateCustomPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamSimulateCustomPolicyRequest) {
    super(scope, id);
  }

  public get evaluationResults(): shapes.IamEvaluationResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'simulateCustomPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.SimulateCustomPolicy.EvaluationResults'),
        outputPath: 'EvaluationResults',
        parameters: {
          PolicyInputList: this.input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.input.permissionsBoundaryPolicyInputList,
          ActionNames: this.input.actionNames,
          ResourceArns: this.input.resourceArns,
          ResourcePolicy: this.input.resourcePolicy,
          ResourceOwner: this.input.resourceOwner,
          CallerArn: this.input.callerArn,
          ContextEntries: this.input.contextEntries,
          ResourceHandlingOption: this.input.resourceHandlingOption,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SimulateCustomPolicy.EvaluationResults', props);
    return resource.getResponseField('EvaluationResults') as unknown as shapes.IamEvaluationResult[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'simulateCustomPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.SimulateCustomPolicy.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PolicyInputList: this.input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.input.permissionsBoundaryPolicyInputList,
          ActionNames: this.input.actionNames,
          ResourceArns: this.input.resourceArns,
          ResourcePolicy: this.input.resourcePolicy,
          ResourceOwner: this.input.resourceOwner,
          CallerArn: this.input.callerArn,
          ContextEntries: this.input.contextEntries,
          ResourceHandlingOption: this.input.resourceHandlingOption,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SimulateCustomPolicy.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'simulateCustomPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.SimulateCustomPolicy.Marker'),
        outputPath: 'Marker',
        parameters: {
          PolicyInputList: this.input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.input.permissionsBoundaryPolicyInputList,
          ActionNames: this.input.actionNames,
          ResourceArns: this.input.resourceArns,
          ResourcePolicy: this.input.resourcePolicy,
          ResourceOwner: this.input.resourceOwner,
          CallerArn: this.input.callerArn,
          ContextEntries: this.input.contextEntries,
          ResourceHandlingOption: this.input.resourceHandlingOption,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SimulateCustomPolicy.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMSimulatePrincipalPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamSimulatePrincipalPolicyRequest) {
    super(scope, id);
  }

  public get evaluationResults(): shapes.IamEvaluationResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'simulatePrincipalPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.SimulatePrincipalPolicy.EvaluationResults'),
        outputPath: 'EvaluationResults',
        parameters: {
          PolicySourceArn: this.input.policySourceArn,
          PolicyInputList: this.input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.input.permissionsBoundaryPolicyInputList,
          ActionNames: this.input.actionNames,
          ResourceArns: this.input.resourceArns,
          ResourcePolicy: this.input.resourcePolicy,
          ResourceOwner: this.input.resourceOwner,
          CallerArn: this.input.callerArn,
          ContextEntries: this.input.contextEntries,
          ResourceHandlingOption: this.input.resourceHandlingOption,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SimulatePrincipalPolicy.EvaluationResults', props);
    return resource.getResponseField('EvaluationResults') as unknown as shapes.IamEvaluationResult[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'simulatePrincipalPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.SimulatePrincipalPolicy.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PolicySourceArn: this.input.policySourceArn,
          PolicyInputList: this.input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.input.permissionsBoundaryPolicyInputList,
          ActionNames: this.input.actionNames,
          ResourceArns: this.input.resourceArns,
          ResourcePolicy: this.input.resourcePolicy,
          ResourceOwner: this.input.resourceOwner,
          CallerArn: this.input.callerArn,
          ContextEntries: this.input.contextEntries,
          ResourceHandlingOption: this.input.resourceHandlingOption,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SimulatePrincipalPolicy.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'simulatePrincipalPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.SimulatePrincipalPolicy.Marker'),
        outputPath: 'Marker',
        parameters: {
          PolicySourceArn: this.input.policySourceArn,
          PolicyInputList: this.input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.input.permissionsBoundaryPolicyInputList,
          ActionNames: this.input.actionNames,
          ResourceArns: this.input.resourceArns,
          ResourcePolicy: this.input.resourcePolicy,
          ResourceOwner: this.input.resourceOwner,
          CallerArn: this.input.callerArn,
          ContextEntries: this.input.contextEntries,
          ResourceHandlingOption: this.input.resourceHandlingOption,
          MaxItems: this.input.maxItems,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SimulatePrincipalPolicy.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMUpdateRoleDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUpdateRoleDescriptionRequest) {
    super(scope, id);
  }

  public get role(): IAMUpdateRoleDescriptionRole {
    return new IAMUpdateRoleDescriptionRole(this, 'Role', this.__resources, this.input);
  }

}

export class IAMUpdateRoleDescriptionRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUpdateRoleDescriptionRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.Path'),
        outputPath: 'Role.Path',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.Path', props);
    return resource.getResponseField('Role.Path') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.RoleName'),
        outputPath: 'Role.RoleName',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.RoleName', props);
    return resource.getResponseField('Role.RoleName') as unknown as string;
  }

  public get roleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.RoleId'),
        outputPath: 'Role.RoleId',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.RoleId', props);
    return resource.getResponseField('Role.RoleId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.Arn'),
        outputPath: 'Role.Arn',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.Arn', props);
    return resource.getResponseField('Role.Arn') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.CreateDate'),
        outputPath: 'Role.CreateDate',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.CreateDate', props);
    return resource.getResponseField('Role.CreateDate') as unknown as string;
  }

  public get assumeRolePolicyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.AssumeRolePolicyDocument'),
        outputPath: 'Role.AssumeRolePolicyDocument',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.AssumeRolePolicyDocument', props);
    return resource.getResponseField('Role.AssumeRolePolicyDocument') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.Description'),
        outputPath: 'Role.Description',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.Description', props);
    return resource.getResponseField('Role.Description') as unknown as string;
  }

  public get maxSessionDuration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.MaxSessionDuration'),
        outputPath: 'Role.MaxSessionDuration',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.MaxSessionDuration', props);
    return resource.getResponseField('Role.MaxSessionDuration') as unknown as number;
  }

  public get permissionsBoundary(): IAMUpdateRoleDescriptionRolePermissionsBoundary {
    return new IAMUpdateRoleDescriptionRolePermissionsBoundary(this, 'PermissionsBoundary', this.__resources, this.input);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.Tags'),
        outputPath: 'Role.Tags',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.Tags', props);
    return resource.getResponseField('Role.Tags') as unknown as shapes.IamTag[];
  }

  public get roleLastUsed(): IAMUpdateRoleDescriptionRoleRoleLastUsed {
    return new IAMUpdateRoleDescriptionRoleRoleLastUsed(this, 'RoleLastUsed', this.__resources, this.input);
  }

}

export class IAMUpdateRoleDescriptionRolePermissionsBoundary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUpdateRoleDescriptionRequest) {
    super(scope, id);
  }

  public get permissionsBoundaryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.PermissionsBoundary.PermissionsBoundaryType'),
        outputPath: 'Role.PermissionsBoundary.PermissionsBoundaryType',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.PermissionsBoundary.PermissionsBoundaryType', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryType') as unknown as string;
  }

  public get permissionsBoundaryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.PermissionsBoundary.PermissionsBoundaryArn'),
        outputPath: 'Role.PermissionsBoundary.PermissionsBoundaryArn',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMUpdateRoleDescriptionRoleRoleLastUsed extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUpdateRoleDescriptionRequest) {
    super(scope, id);
  }

  public get lastUsedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.RoleLastUsed.LastUsedDate'),
        outputPath: 'Role.RoleLastUsed.LastUsedDate',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.RoleLastUsed.LastUsedDate', props);
    return resource.getResponseField('Role.RoleLastUsed.LastUsedDate') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleDescription',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateRoleDescription.Role.RoleLastUsed.Region'),
        outputPath: 'Role.RoleLastUsed.Region',
        parameters: {
          RoleName: this.input.roleName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleDescription.Role.RoleLastUsed.Region', props);
    return resource.getResponseField('Role.RoleLastUsed.Region') as unknown as string;
  }

}

export class IAMUpdateSamlProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUpdateSamlProviderRequest) {
    super(scope, id);
  }

  public get samlProviderArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UpdateSAMLProvider.SAMLProviderArn'),
        outputPath: 'SAMLProviderArn',
        parameters: {
          SAMLMetadataDocument: this.input.samlMetadataDocument,
          SAMLProviderArn: this.input.samlProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSAMLProvider.SAMLProviderArn', props);
    return resource.getResponseField('SAMLProviderArn') as unknown as string;
  }

}

export class IAMUploadSshPublicKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUploadSshPublicKeyRequest) {
    super(scope, id);
  }

  public get sshPublicKey(): IAMUploadSshPublicKeySshPublicKey {
    return new IAMUploadSshPublicKeySshPublicKey(this, 'SshPublicKey', this.__resources, this.input);
  }

}

export class IAMUploadSshPublicKeySshPublicKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUploadSshPublicKeyRequest) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSSHPublicKey.SSHPublicKey.UserName'),
        outputPath: 'SSHPublicKey.UserName',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyBody: this.input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSSHPublicKey.SSHPublicKey.UserName', props);
    return resource.getResponseField('SSHPublicKey.UserName') as unknown as string;
  }

  public get sshPublicKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSSHPublicKey.SSHPublicKey.SSHPublicKeyId'),
        outputPath: 'SSHPublicKey.SSHPublicKeyId',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyBody: this.input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSSHPublicKey.SSHPublicKey.SSHPublicKeyId', props);
    return resource.getResponseField('SSHPublicKey.SSHPublicKeyId') as unknown as string;
  }

  public get fingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSSHPublicKey.SSHPublicKey.Fingerprint'),
        outputPath: 'SSHPublicKey.Fingerprint',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyBody: this.input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSSHPublicKey.SSHPublicKey.Fingerprint', props);
    return resource.getResponseField('SSHPublicKey.Fingerprint') as unknown as string;
  }

  public get sshPublicKeyBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSSHPublicKey.SSHPublicKey.SSHPublicKeyBody'),
        outputPath: 'SSHPublicKey.SSHPublicKeyBody',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyBody: this.input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSSHPublicKey.SSHPublicKey.SSHPublicKeyBody', props);
    return resource.getResponseField('SSHPublicKey.SSHPublicKeyBody') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSSHPublicKey.SSHPublicKey.Status'),
        outputPath: 'SSHPublicKey.Status',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyBody: this.input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSSHPublicKey.SSHPublicKey.Status', props);
    return resource.getResponseField('SSHPublicKey.Status') as unknown as string;
  }

  public get uploadDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSshPublicKey',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSSHPublicKey.SSHPublicKey.UploadDate'),
        outputPath: 'SSHPublicKey.UploadDate',
        parameters: {
          UserName: this.input.userName,
          SSHPublicKeyBody: this.input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSSHPublicKey.SSHPublicKey.UploadDate', props);
    return resource.getResponseField('SSHPublicKey.UploadDate') as unknown as string;
  }

}

export class IAMUploadServerCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUploadServerCertificateRequest) {
    super(scope, id);
  }

  public get serverCertificateMetadata(): IAMUploadServerCertificateServerCertificateMetadata {
    return new IAMUploadServerCertificateServerCertificateMetadata(this, 'ServerCertificateMetadata', this.__resources, this.input);
  }

}

export class IAMUploadServerCertificateServerCertificateMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUploadServerCertificateRequest) {
    super(scope, id);
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadServerCertificate.ServerCertificateMetadata.Path'),
        outputPath: 'ServerCertificateMetadata.Path',
        parameters: {
          Path: this.input.path,
          ServerCertificateName: this.input.serverCertificateName,
          CertificateBody: this.input.certificateBody,
          PrivateKey: this.input.privateKey,
          CertificateChain: this.input.certificateChain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadServerCertificate.ServerCertificateMetadata.Path', props);
    return resource.getResponseField('ServerCertificateMetadata.Path') as unknown as string;
  }

  public get serverCertificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadServerCertificate.ServerCertificateMetadata.ServerCertificateName'),
        outputPath: 'ServerCertificateMetadata.ServerCertificateName',
        parameters: {
          Path: this.input.path,
          ServerCertificateName: this.input.serverCertificateName,
          CertificateBody: this.input.certificateBody,
          PrivateKey: this.input.privateKey,
          CertificateChain: this.input.certificateChain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadServerCertificate.ServerCertificateMetadata.ServerCertificateName', props);
    return resource.getResponseField('ServerCertificateMetadata.ServerCertificateName') as unknown as string;
  }

  public get serverCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadServerCertificate.ServerCertificateMetadata.ServerCertificateId'),
        outputPath: 'ServerCertificateMetadata.ServerCertificateId',
        parameters: {
          Path: this.input.path,
          ServerCertificateName: this.input.serverCertificateName,
          CertificateBody: this.input.certificateBody,
          PrivateKey: this.input.privateKey,
          CertificateChain: this.input.certificateChain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadServerCertificate.ServerCertificateMetadata.ServerCertificateId', props);
    return resource.getResponseField('ServerCertificateMetadata.ServerCertificateId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadServerCertificate.ServerCertificateMetadata.Arn'),
        outputPath: 'ServerCertificateMetadata.Arn',
        parameters: {
          Path: this.input.path,
          ServerCertificateName: this.input.serverCertificateName,
          CertificateBody: this.input.certificateBody,
          PrivateKey: this.input.privateKey,
          CertificateChain: this.input.certificateChain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadServerCertificate.ServerCertificateMetadata.Arn', props);
    return resource.getResponseField('ServerCertificateMetadata.Arn') as unknown as string;
  }

  public get uploadDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadServerCertificate.ServerCertificateMetadata.UploadDate'),
        outputPath: 'ServerCertificateMetadata.UploadDate',
        parameters: {
          Path: this.input.path,
          ServerCertificateName: this.input.serverCertificateName,
          CertificateBody: this.input.certificateBody,
          PrivateKey: this.input.privateKey,
          CertificateChain: this.input.certificateChain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadServerCertificate.ServerCertificateMetadata.UploadDate', props);
    return resource.getResponseField('ServerCertificateMetadata.UploadDate') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadServerCertificate.ServerCertificateMetadata.Expiration'),
        outputPath: 'ServerCertificateMetadata.Expiration',
        parameters: {
          Path: this.input.path,
          ServerCertificateName: this.input.serverCertificateName,
          CertificateBody: this.input.certificateBody,
          PrivateKey: this.input.privateKey,
          CertificateChain: this.input.certificateChain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadServerCertificate.ServerCertificateMetadata.Expiration', props);
    return resource.getResponseField('ServerCertificateMetadata.Expiration') as unknown as string;
  }

}

export class IAMUploadSigningCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUploadSigningCertificateRequest) {
    super(scope, id);
  }

  public get certificate(): IAMUploadSigningCertificateCertificate {
    return new IAMUploadSigningCertificateCertificate(this, 'Certificate', this.__resources, this.input);
  }

}

export class IAMUploadSigningCertificateCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IamUploadSigningCertificateRequest) {
    super(scope, id);
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSigningCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSigningCertificate.Certificate.UserName'),
        outputPath: 'Certificate.UserName',
        parameters: {
          UserName: this.input.userName,
          CertificateBody: this.input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSigningCertificate.Certificate.UserName', props);
    return resource.getResponseField('Certificate.UserName') as unknown as string;
  }

  public get certificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSigningCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSigningCertificate.Certificate.CertificateId'),
        outputPath: 'Certificate.CertificateId',
        parameters: {
          UserName: this.input.userName,
          CertificateBody: this.input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSigningCertificate.Certificate.CertificateId', props);
    return resource.getResponseField('Certificate.CertificateId') as unknown as string;
  }

  public get certificateBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSigningCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSigningCertificate.Certificate.CertificateBody'),
        outputPath: 'Certificate.CertificateBody',
        parameters: {
          UserName: this.input.userName,
          CertificateBody: this.input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSigningCertificate.Certificate.CertificateBody', props);
    return resource.getResponseField('Certificate.CertificateBody') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSigningCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSigningCertificate.Certificate.Status'),
        outputPath: 'Certificate.Status',
        parameters: {
          UserName: this.input.userName,
          CertificateBody: this.input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSigningCertificate.Certificate.Status', props);
    return resource.getResponseField('Certificate.Status') as unknown as string;
  }

  public get uploadDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadSigningCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadSigningCertificate.Certificate.UploadDate'),
        outputPath: 'Certificate.UploadDate',
        parameters: {
          UserName: this.input.userName,
          CertificateBody: this.input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadSigningCertificate.Certificate.UploadDate', props);
    return resource.getResponseField('Certificate.UploadDate') as unknown as string;
  }

}

