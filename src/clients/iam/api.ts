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

  public createAccessKey(input: shapes.IamCreateAccessKeyRequest): IAMResponsesCreateAccessKey {
    return new IAMResponsesCreateAccessKey(this, this.__resources, input);
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

  public createGroup(input: shapes.IamCreateGroupRequest): IAMResponsesCreateGroup {
    return new IAMResponsesCreateGroup(this, this.__resources, input);
  }

  public createInstanceProfile(input: shapes.IamCreateInstanceProfileRequest): IAMResponsesCreateInstanceProfile {
    return new IAMResponsesCreateInstanceProfile(this, this.__resources, input);
  }

  public createLoginProfile(input: shapes.IamCreateLoginProfileRequest): IAMResponsesCreateLoginProfile {
    return new IAMResponsesCreateLoginProfile(this, this.__resources, input);
  }

  public createOpenIdConnectProvider(input: shapes.IamCreateOpenIdConnectProviderRequest): IAMResponsesCreateOpenIdConnectProvider {
    return new IAMResponsesCreateOpenIdConnectProvider(this, this.__resources, input);
  }

  public createPolicy(input: shapes.IamCreatePolicyRequest): IAMResponsesCreatePolicy {
    return new IAMResponsesCreatePolicy(this, this.__resources, input);
  }

  public createPolicyVersion(input: shapes.IamCreatePolicyVersionRequest): IAMResponsesCreatePolicyVersion {
    return new IAMResponsesCreatePolicyVersion(this, this.__resources, input);
  }

  public createRole(input: shapes.IamCreateRoleRequest): IAMResponsesCreateRole {
    return new IAMResponsesCreateRole(this, this.__resources, input);
  }

  public createSamlProvider(input: shapes.IamCreateSamlProviderRequest): IAMResponsesCreateSamlProvider {
    return new IAMResponsesCreateSamlProvider(this, this.__resources, input);
  }

  public createServiceLinkedRole(input: shapes.IamCreateServiceLinkedRoleRequest): IAMResponsesCreateServiceLinkedRole {
    return new IAMResponsesCreateServiceLinkedRole(this, this.__resources, input);
  }

  public createServiceSpecificCredential(input: shapes.IamCreateServiceSpecificCredentialRequest): IAMResponsesCreateServiceSpecificCredential {
    return new IAMResponsesCreateServiceSpecificCredential(this, this.__resources, input);
  }

  public createUser(input: shapes.IamCreateUserRequest): IAMResponsesCreateUser {
    return new IAMResponsesCreateUser(this, this.__resources, input);
  }

  public createVirtualMfaDevice(input: shapes.IamCreateVirtualMfaDeviceRequest): IAMResponsesCreateVirtualMfaDevice {
    return new IAMResponsesCreateVirtualMfaDevice(this, this.__resources, input);
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

  public deleteServiceLinkedRole(input: shapes.IamDeleteServiceLinkedRoleRequest): IAMResponsesDeleteServiceLinkedRole {
    return new IAMResponsesDeleteServiceLinkedRole(this, this.__resources, input);
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

  public generateCredentialReport(): IAMResponsesGenerateCredentialReport {
    return new IAMResponsesGenerateCredentialReport(this, this.__resources);
  }

  public generateOrganizationsAccessReport(input: shapes.IamGenerateOrganizationsAccessReportRequest): IAMResponsesGenerateOrganizationsAccessReport {
    return new IAMResponsesGenerateOrganizationsAccessReport(this, this.__resources, input);
  }

  public generateServiceLastAccessedDetails(input: shapes.IamGenerateServiceLastAccessedDetailsRequest): IAMResponsesGenerateServiceLastAccessedDetails {
    return new IAMResponsesGenerateServiceLastAccessedDetails(this, this.__resources, input);
  }

  public fetchAccessKeyLastUsed(input: shapes.IamGetAccessKeyLastUsedRequest): IAMResponsesFetchAccessKeyLastUsed {
    return new IAMResponsesFetchAccessKeyLastUsed(this, this.__resources, input);
  }

  public fetchAccountAuthorizationDetails(input: shapes.IamGetAccountAuthorizationDetailsRequest): IAMResponsesFetchAccountAuthorizationDetails {
    return new IAMResponsesFetchAccountAuthorizationDetails(this, this.__resources, input);
  }

  public fetchAccountPasswordPolicy(): IAMResponsesFetchAccountPasswordPolicy {
    return new IAMResponsesFetchAccountPasswordPolicy(this, this.__resources);
  }

  public fetchAccountSummary(): IAMResponsesFetchAccountSummary {
    return new IAMResponsesFetchAccountSummary(this, this.__resources);
  }

  public fetchContextKeysForCustomPolicy(input: shapes.IamGetContextKeysForCustomPolicyRequest): IAMResponsesFetchContextKeysForCustomPolicy {
    return new IAMResponsesFetchContextKeysForCustomPolicy(this, this.__resources, input);
  }

  public fetchContextKeysForPrincipalPolicy(input: shapes.IamGetContextKeysForPrincipalPolicyRequest): IAMResponsesFetchContextKeysForPrincipalPolicy {
    return new IAMResponsesFetchContextKeysForPrincipalPolicy(this, this.__resources, input);
  }

  public fetchCredentialReport(): IAMResponsesFetchCredentialReport {
    return new IAMResponsesFetchCredentialReport(this, this.__resources);
  }

  public fetchGroup(input: shapes.IamGetGroupRequest): IAMResponsesFetchGroup {
    return new IAMResponsesFetchGroup(this, this.__resources, input);
  }

  public fetchGroupPolicy(input: shapes.IamGetGroupPolicyRequest): IAMResponsesFetchGroupPolicy {
    return new IAMResponsesFetchGroupPolicy(this, this.__resources, input);
  }

  public fetchInstanceProfile(input: shapes.IamGetInstanceProfileRequest): IAMResponsesFetchInstanceProfile {
    return new IAMResponsesFetchInstanceProfile(this, this.__resources, input);
  }

  public fetchLoginProfile(input: shapes.IamGetLoginProfileRequest): IAMResponsesFetchLoginProfile {
    return new IAMResponsesFetchLoginProfile(this, this.__resources, input);
  }

  public fetchOpenIdConnectProvider(input: shapes.IamGetOpenIdConnectProviderRequest): IAMResponsesFetchOpenIdConnectProvider {
    return new IAMResponsesFetchOpenIdConnectProvider(this, this.__resources, input);
  }

  public fetchOrganizationsAccessReport(input: shapes.IamGetOrganizationsAccessReportRequest): IAMResponsesFetchOrganizationsAccessReport {
    return new IAMResponsesFetchOrganizationsAccessReport(this, this.__resources, input);
  }

  public fetchPolicy(input: shapes.IamGetPolicyRequest): IAMResponsesFetchPolicy {
    return new IAMResponsesFetchPolicy(this, this.__resources, input);
  }

  public fetchPolicyVersion(input: shapes.IamGetPolicyVersionRequest): IAMResponsesFetchPolicyVersion {
    return new IAMResponsesFetchPolicyVersion(this, this.__resources, input);
  }

  public fetchRole(input: shapes.IamGetRoleRequest): IAMResponsesFetchRole {
    return new IAMResponsesFetchRole(this, this.__resources, input);
  }

  public fetchRolePolicy(input: shapes.IamGetRolePolicyRequest): IAMResponsesFetchRolePolicy {
    return new IAMResponsesFetchRolePolicy(this, this.__resources, input);
  }

  public fetchSamlProvider(input: shapes.IamGetSamlProviderRequest): IAMResponsesFetchSamlProvider {
    return new IAMResponsesFetchSamlProvider(this, this.__resources, input);
  }

  public fetchSshPublicKey(input: shapes.IamGetSshPublicKeyRequest): IAMResponsesFetchSshPublicKey {
    return new IAMResponsesFetchSshPublicKey(this, this.__resources, input);
  }

  public fetchServerCertificate(input: shapes.IamGetServerCertificateRequest): IAMResponsesFetchServerCertificate {
    return new IAMResponsesFetchServerCertificate(this, this.__resources, input);
  }

  public fetchServiceLastAccessedDetails(input: shapes.IamGetServiceLastAccessedDetailsRequest): IAMResponsesFetchServiceLastAccessedDetails {
    return new IAMResponsesFetchServiceLastAccessedDetails(this, this.__resources, input);
  }

  public fetchServiceLastAccessedDetailsWithEntities(input: shapes.IamGetServiceLastAccessedDetailsWithEntitiesRequest): IAMResponsesFetchServiceLastAccessedDetailsWithEntities {
    return new IAMResponsesFetchServiceLastAccessedDetailsWithEntities(this, this.__resources, input);
  }

  public fetchServiceLinkedRoleDeletionStatus(input: shapes.IamGetServiceLinkedRoleDeletionStatusRequest): IAMResponsesFetchServiceLinkedRoleDeletionStatus {
    return new IAMResponsesFetchServiceLinkedRoleDeletionStatus(this, this.__resources, input);
  }

  public fetchUser(input: shapes.IamGetUserRequest): IAMResponsesFetchUser {
    return new IAMResponsesFetchUser(this, this.__resources, input);
  }

  public fetchUserPolicy(input: shapes.IamGetUserPolicyRequest): IAMResponsesFetchUserPolicy {
    return new IAMResponsesFetchUserPolicy(this, this.__resources, input);
  }

  public listAccessKeys(input: shapes.IamListAccessKeysRequest): IAMResponsesListAccessKeys {
    return new IAMResponsesListAccessKeys(this, this.__resources, input);
  }

  public listAccountAliases(input: shapes.IamListAccountAliasesRequest): IAMResponsesListAccountAliases {
    return new IAMResponsesListAccountAliases(this, this.__resources, input);
  }

  public listAttachedGroupPolicies(input: shapes.IamListAttachedGroupPoliciesRequest): IAMResponsesListAttachedGroupPolicies {
    return new IAMResponsesListAttachedGroupPolicies(this, this.__resources, input);
  }

  public listAttachedRolePolicies(input: shapes.IamListAttachedRolePoliciesRequest): IAMResponsesListAttachedRolePolicies {
    return new IAMResponsesListAttachedRolePolicies(this, this.__resources, input);
  }

  public listAttachedUserPolicies(input: shapes.IamListAttachedUserPoliciesRequest): IAMResponsesListAttachedUserPolicies {
    return new IAMResponsesListAttachedUserPolicies(this, this.__resources, input);
  }

  public listEntitiesForPolicy(input: shapes.IamListEntitiesForPolicyRequest): IAMResponsesListEntitiesForPolicy {
    return new IAMResponsesListEntitiesForPolicy(this, this.__resources, input);
  }

  public listGroupPolicies(input: shapes.IamListGroupPoliciesRequest): IAMResponsesListGroupPolicies {
    return new IAMResponsesListGroupPolicies(this, this.__resources, input);
  }

  public listGroups(input: shapes.IamListGroupsRequest): IAMResponsesListGroups {
    return new IAMResponsesListGroups(this, this.__resources, input);
  }

  public listGroupsForUser(input: shapes.IamListGroupsForUserRequest): IAMResponsesListGroupsForUser {
    return new IAMResponsesListGroupsForUser(this, this.__resources, input);
  }

  public listInstanceProfileTags(input: shapes.IamListInstanceProfileTagsRequest): IAMResponsesListInstanceProfileTags {
    return new IAMResponsesListInstanceProfileTags(this, this.__resources, input);
  }

  public listInstanceProfiles(input: shapes.IamListInstanceProfilesRequest): IAMResponsesListInstanceProfiles {
    return new IAMResponsesListInstanceProfiles(this, this.__resources, input);
  }

  public listInstanceProfilesForRole(input: shapes.IamListInstanceProfilesForRoleRequest): IAMResponsesListInstanceProfilesForRole {
    return new IAMResponsesListInstanceProfilesForRole(this, this.__resources, input);
  }

  public listMfaDeviceTags(input: shapes.IamListMfaDeviceTagsRequest): IAMResponsesListMfaDeviceTags {
    return new IAMResponsesListMfaDeviceTags(this, this.__resources, input);
  }

  public listMfaDevices(input: shapes.IamListMfaDevicesRequest): IAMResponsesListMfaDevices {
    return new IAMResponsesListMfaDevices(this, this.__resources, input);
  }

  public listOpenIdConnectProviderTags(input: shapes.IamListOpenIdConnectProviderTagsRequest): IAMResponsesListOpenIdConnectProviderTags {
    return new IAMResponsesListOpenIdConnectProviderTags(this, this.__resources, input);
  }

  public listOpenIdConnectProviders(): IAMResponsesListOpenIdConnectProviders {
    return new IAMResponsesListOpenIdConnectProviders(this, this.__resources);
  }

  public listPolicies(input: shapes.IamListPoliciesRequest): IAMResponsesListPolicies {
    return new IAMResponsesListPolicies(this, this.__resources, input);
  }

  public listPoliciesGrantingServiceAccess(input: shapes.IamListPoliciesGrantingServiceAccessRequest): IAMResponsesListPoliciesGrantingServiceAccess {
    return new IAMResponsesListPoliciesGrantingServiceAccess(this, this.__resources, input);
  }

  public listPolicyTags(input: shapes.IamListPolicyTagsRequest): IAMResponsesListPolicyTags {
    return new IAMResponsesListPolicyTags(this, this.__resources, input);
  }

  public listPolicyVersions(input: shapes.IamListPolicyVersionsRequest): IAMResponsesListPolicyVersions {
    return new IAMResponsesListPolicyVersions(this, this.__resources, input);
  }

  public listRolePolicies(input: shapes.IamListRolePoliciesRequest): IAMResponsesListRolePolicies {
    return new IAMResponsesListRolePolicies(this, this.__resources, input);
  }

  public listRoleTags(input: shapes.IamListRoleTagsRequest): IAMResponsesListRoleTags {
    return new IAMResponsesListRoleTags(this, this.__resources, input);
  }

  public listRoles(input: shapes.IamListRolesRequest): IAMResponsesListRoles {
    return new IAMResponsesListRoles(this, this.__resources, input);
  }

  public listSamlProviderTags(input: shapes.IamListSamlProviderTagsRequest): IAMResponsesListSamlProviderTags {
    return new IAMResponsesListSamlProviderTags(this, this.__resources, input);
  }

  public listSamlProviders(): IAMResponsesListSamlProviders {
    return new IAMResponsesListSamlProviders(this, this.__resources);
  }

  public listSshPublicKeys(input: shapes.IamListSshPublicKeysRequest): IAMResponsesListSshPublicKeys {
    return new IAMResponsesListSshPublicKeys(this, this.__resources, input);
  }

  public listServerCertificateTags(input: shapes.IamListServerCertificateTagsRequest): IAMResponsesListServerCertificateTags {
    return new IAMResponsesListServerCertificateTags(this, this.__resources, input);
  }

  public listServerCertificates(input: shapes.IamListServerCertificatesRequest): IAMResponsesListServerCertificates {
    return new IAMResponsesListServerCertificates(this, this.__resources, input);
  }

  public listServiceSpecificCredentials(input: shapes.IamListServiceSpecificCredentialsRequest): IAMResponsesListServiceSpecificCredentials {
    return new IAMResponsesListServiceSpecificCredentials(this, this.__resources, input);
  }

  public listSigningCertificates(input: shapes.IamListSigningCertificatesRequest): IAMResponsesListSigningCertificates {
    return new IAMResponsesListSigningCertificates(this, this.__resources, input);
  }

  public listUserPolicies(input: shapes.IamListUserPoliciesRequest): IAMResponsesListUserPolicies {
    return new IAMResponsesListUserPolicies(this, this.__resources, input);
  }

  public listUserTags(input: shapes.IamListUserTagsRequest): IAMResponsesListUserTags {
    return new IAMResponsesListUserTags(this, this.__resources, input);
  }

  public listUsers(input: shapes.IamListUsersRequest): IAMResponsesListUsers {
    return new IAMResponsesListUsers(this, this.__resources, input);
  }

  public listVirtualMfaDevices(input: shapes.IamListVirtualMfaDevicesRequest): IAMResponsesListVirtualMfaDevices {
    return new IAMResponsesListVirtualMfaDevices(this, this.__resources, input);
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

  public resetServiceSpecificCredential(input: shapes.IamResetServiceSpecificCredentialRequest): IAMResponsesResetServiceSpecificCredential {
    return new IAMResponsesResetServiceSpecificCredential(this, this.__resources, input);
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

  public putDefaultPolicyVersion(input: shapes.IamSetDefaultPolicyVersionRequest): void {
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

  public putSecurityTokenServicePreferences(input: shapes.IamSetSecurityTokenServicePreferencesRequest): void {
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

  public simulateCustomPolicy(input: shapes.IamSimulateCustomPolicyRequest): IAMResponsesSimulateCustomPolicy {
    return new IAMResponsesSimulateCustomPolicy(this, this.__resources, input);
  }

  public simulatePrincipalPolicy(input: shapes.IamSimulatePrincipalPolicyRequest): IAMResponsesSimulatePrincipalPolicy {
    return new IAMResponsesSimulatePrincipalPolicy(this, this.__resources, input);
  }

  public tagInstanceProfile(input: shapes.IamTagInstanceProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.TagInstanceProfile'),
        parameters: {
          InstanceProfileName: input.instanceProfileName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagInstanceProfile', props);
  }

  public tagMfaDevice(input: shapes.IamTagMfaDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.TagMFADevice'),
        parameters: {
          SerialNumber: input.serialNumber,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagMFADevice', props);
  }

  public tagOpenIdConnectProvider(input: shapes.IamTagOpenIdConnectProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.TagOpenIDConnectProvider'),
        parameters: {
          OpenIDConnectProviderArn: input.openIdConnectProviderArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagOpenIDConnectProvider', props);
  }

  public tagPolicy(input: shapes.IamTagPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.TagPolicy'),
        parameters: {
          PolicyArn: input.policyArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagPolicy', props);
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

  public tagSamlProvider(input: shapes.IamTagSamlProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.TagSAMLProvider'),
        parameters: {
          SAMLProviderArn: input.samlProviderArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagSAMLProvider', props);
  }

  public tagServerCertificate(input: shapes.IamTagServerCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.TagServerCertificate'),
        parameters: {
          ServerCertificateName: input.serverCertificateName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagServerCertificate', props);
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

  public untagInstanceProfile(input: shapes.IamUntagInstanceProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UntagInstanceProfile'),
        parameters: {
          InstanceProfileName: input.instanceProfileName,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagInstanceProfile', props);
  }

  public untagMfaDevice(input: shapes.IamUntagMfaDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UntagMFADevice'),
        parameters: {
          SerialNumber: input.serialNumber,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagMFADevice', props);
  }

  public untagOpenIdConnectProvider(input: shapes.IamUntagOpenIdConnectProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UntagOpenIDConnectProvider'),
        parameters: {
          OpenIDConnectProviderArn: input.openIdConnectProviderArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagOpenIDConnectProvider', props);
  }

  public untagPolicy(input: shapes.IamUntagPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UntagPolicy'),
        parameters: {
          PolicyArn: input.policyArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagPolicy', props);
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

  public untagSamlProvider(input: shapes.IamUntagSamlProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UntagSAMLProvider'),
        parameters: {
          SAMLProviderArn: input.samlProviderArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagSAMLProvider', props);
  }

  public untagServerCertificate(input: shapes.IamUntagServerCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UntagServerCertificate'),
        parameters: {
          ServerCertificateName: input.serverCertificateName,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagServerCertificate', props);
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

  public updateRoleDescription(input: shapes.IamUpdateRoleDescriptionRequest): IAMResponsesUpdateRoleDescription {
    return new IAMResponsesUpdateRoleDescription(this, this.__resources, input);
  }

  public updateSamlProvider(input: shapes.IamUpdateSamlProviderRequest): IAMResponsesUpdateSamlProvider {
    return new IAMResponsesUpdateSamlProvider(this, this.__resources, input);
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

  public uploadSshPublicKey(input: shapes.IamUploadSshPublicKeyRequest): IAMResponsesUploadSshPublicKey {
    return new IAMResponsesUploadSshPublicKey(this, this.__resources, input);
  }

  public uploadServerCertificate(input: shapes.IamUploadServerCertificateRequest): IAMResponsesUploadServerCertificate {
    return new IAMResponsesUploadServerCertificate(this, this.__resources, input);
  }

  public uploadSigningCertificate(input: shapes.IamUploadSigningCertificateRequest): IAMResponsesUploadSigningCertificate {
    return new IAMResponsesUploadSigningCertificate(this, this.__resources, input);
  }

}

export class IAMResponsesCreateAccessKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateAccessKeyRequest) {
  }

  public get accessKey(): IAMResponsesCreateAccessKeyAccessKey {
    return new IAMResponsesCreateAccessKeyAccessKey(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateAccessKeyAccessKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateAccessKeyRequest) {
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessKey.AccessKey.UserName', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessKey.AccessKey.AccessKeyId', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessKey.AccessKey.Status', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessKey.AccessKey.SecretAccessKey', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessKey.AccessKey.CreateDate', props);
    return resource.getResponseField('AccessKey.CreateDate') as unknown as string;
  }

}

export class IAMResponsesCreateGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateGroupRequest) {
  }

  public get group(): IAMResponsesCreateGroupGroup {
    return new IAMResponsesCreateGroupGroup(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateGroupRequest) {
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
          Path: this.__input.path,
          GroupName: this.__input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.Path', props);
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
          Path: this.__input.path,
          GroupName: this.__input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.GroupName', props);
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
          Path: this.__input.path,
          GroupName: this.__input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.GroupId', props);
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
          Path: this.__input.path,
          GroupName: this.__input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.Arn', props);
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
          Path: this.__input.path,
          GroupName: this.__input.groupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.CreateDate', props);
    return resource.getResponseField('Group.CreateDate') as unknown as string;
  }

}

export class IAMResponsesCreateInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateInstanceProfileRequest) {
  }

  public get instanceProfile(): IAMResponsesCreateInstanceProfileInstanceProfile {
    return new IAMResponsesCreateInstanceProfileInstanceProfile(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateInstanceProfileInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateInstanceProfileRequest) {
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
          InstanceProfileName: this.__input.instanceProfileName,
          Path: this.__input.path,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.InstanceProfile.Path', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
          Path: this.__input.path,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.InstanceProfile.InstanceProfileName', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
          Path: this.__input.path,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.InstanceProfile.InstanceProfileId', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
          Path: this.__input.path,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.InstanceProfile.Arn', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
          Path: this.__input.path,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.InstanceProfile.CreateDate', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
          Path: this.__input.path,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.InstanceProfile.Roles', props);
    return resource.getResponseField('InstanceProfile.Roles') as unknown as shapes.IamRole[];
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateInstanceProfile.InstanceProfile.Tags'),
        outputPath: 'InstanceProfile.Tags',
        parameters: {
          InstanceProfileName: this.__input.instanceProfileName,
          Path: this.__input.path,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.InstanceProfile.Tags', props);
    return resource.getResponseField('InstanceProfile.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesCreateLoginProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateLoginProfileRequest) {
  }

  public get loginProfile(): IAMResponsesCreateLoginProfileLoginProfile {
    return new IAMResponsesCreateLoginProfileLoginProfile(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateLoginProfileLoginProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateLoginProfileRequest) {
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
          UserName: this.__input.userName,
          Password: this.__input.password,
          PasswordResetRequired: this.__input.passwordResetRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoginProfile.LoginProfile.UserName', props);
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
          UserName: this.__input.userName,
          Password: this.__input.password,
          PasswordResetRequired: this.__input.passwordResetRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoginProfile.LoginProfile.CreateDate', props);
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
          UserName: this.__input.userName,
          Password: this.__input.password,
          PasswordResetRequired: this.__input.passwordResetRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoginProfile.LoginProfile.PasswordResetRequired', props);
    return resource.getResponseField('LoginProfile.PasswordResetRequired') as unknown as boolean;
  }

}

export class IAMResponsesCreateOpenIdConnectProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateOpenIdConnectProviderRequest) {
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
          Url: this.__input.url,
          ClientIDList: this.__input.clientIdList,
          ThumbprintList: this.__input.thumbprintList,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOpenIDConnectProvider.OpenIDConnectProviderArn', props);
    return resource.getResponseField('OpenIDConnectProviderArn') as unknown as string;
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateOpenIDConnectProvider.Tags'),
        outputPath: 'Tags',
        parameters: {
          Url: this.__input.url,
          ClientIDList: this.__input.clientIdList,
          ThumbprintList: this.__input.thumbprintList,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOpenIDConnectProvider.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesCreatePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreatePolicyRequest) {
  }

  public get policy(): IAMResponsesCreatePolicyPolicy {
    return new IAMResponsesCreatePolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreatePolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreatePolicyRequest) {
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.PolicyName', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.PolicyId', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.Arn', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.Path', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.DefaultVersionId', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.AttachmentCount', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.PermissionsBoundaryUsageCount', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.IsAttachable', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.Description', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.CreateDate', props);
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
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.UpdateDate', props);
    return resource.getResponseField('Policy.UpdateDate') as unknown as string;
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreatePolicy.Policy.Tags'),
        outputPath: 'Policy.Tags',
        parameters: {
          PolicyName: this.__input.policyName,
          Path: this.__input.path,
          PolicyDocument: this.__input.policyDocument,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.Policy.Tags', props);
    return resource.getResponseField('Policy.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesCreatePolicyVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreatePolicyVersionRequest) {
  }

  public get policyVersion(): IAMResponsesCreatePolicyVersionPolicyVersion {
    return new IAMResponsesCreatePolicyVersionPolicyVersion(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreatePolicyVersionPolicyVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreatePolicyVersionRequest) {
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
          PolicyArn: this.__input.policyArn,
          PolicyDocument: this.__input.policyDocument,
          SetAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicyVersion.PolicyVersion.Document', props);
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
          PolicyArn: this.__input.policyArn,
          PolicyDocument: this.__input.policyDocument,
          SetAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicyVersion.PolicyVersion.VersionId', props);
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
          PolicyArn: this.__input.policyArn,
          PolicyDocument: this.__input.policyDocument,
          SetAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicyVersion.PolicyVersion.IsDefaultVersion', props);
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
          PolicyArn: this.__input.policyArn,
          PolicyDocument: this.__input.policyDocument,
          SetAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicyVersion.PolicyVersion.CreateDate', props);
    return resource.getResponseField('PolicyVersion.CreateDate') as unknown as string;
  }

}

export class IAMResponsesCreateRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateRoleRequest) {
  }

  public get role(): IAMResponsesCreateRoleRole {
    return new IAMResponsesCreateRoleRole(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateRoleRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateRoleRequest) {
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.Path', props);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.RoleName', props);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.RoleId', props);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.Arn', props);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.CreateDate', props);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.AssumeRolePolicyDocument', props);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.Description', props);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.MaxSessionDuration', props);
    return resource.getResponseField('Role.MaxSessionDuration') as unknown as number;
  }

  public get permissionsBoundary(): IAMResponsesCreateRoleRolePermissionsBoundary {
    return new IAMResponsesCreateRoleRolePermissionsBoundary(this.__scope, this.__resources, this.__input);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.Tags', props);
    return resource.getResponseField('Role.Tags') as unknown as shapes.IamTag[];
  }

  public get roleLastUsed(): IAMResponsesCreateRoleRoleRoleLastUsed {
    return new IAMResponsesCreateRoleRoleRoleLastUsed(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateRoleRolePermissionsBoundary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateRoleRequest) {
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.PermissionsBoundary.PermissionsBoundaryType', props);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMResponsesCreateRoleRoleRoleLastUsed {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateRoleRequest) {
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.RoleLastUsed.LastUsedDate', props);
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
          Path: this.__input.path,
          RoleName: this.__input.roleName,
          AssumeRolePolicyDocument: this.__input.assumeRolePolicyDocument,
          Description: this.__input.description,
          MaxSessionDuration: this.__input.maxSessionDuration,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRole.Role.RoleLastUsed.Region', props);
    return resource.getResponseField('Role.RoleLastUsed.Region') as unknown as string;
  }

}

export class IAMResponsesCreateSamlProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateSamlProviderRequest) {
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
          SAMLMetadataDocument: this.__input.samlMetadataDocument,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSAMLProvider.SAMLProviderArn', props);
    return resource.getResponseField('SAMLProviderArn') as unknown as string;
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateSAMLProvider.Tags'),
        outputPath: 'Tags',
        parameters: {
          SAMLMetadataDocument: this.__input.samlMetadataDocument,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSAMLProvider.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesCreateServiceLinkedRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateServiceLinkedRoleRequest) {
  }

  public get role(): IAMResponsesCreateServiceLinkedRoleRole {
    return new IAMResponsesCreateServiceLinkedRoleRole(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateServiceLinkedRoleRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateServiceLinkedRoleRequest) {
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.Path', props);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.RoleName', props);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.RoleId', props);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.Arn', props);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.CreateDate', props);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.AssumeRolePolicyDocument', props);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.Description', props);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.MaxSessionDuration', props);
    return resource.getResponseField('Role.MaxSessionDuration') as unknown as number;
  }

  public get permissionsBoundary(): IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary {
    return new IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary(this.__scope, this.__resources, this.__input);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.Tags', props);
    return resource.getResponseField('Role.Tags') as unknown as shapes.IamTag[];
  }

  public get roleLastUsed(): IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed {
    return new IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateServiceLinkedRoleRolePermissionsBoundary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateServiceLinkedRoleRequest) {
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.PermissionsBoundary.PermissionsBoundaryType', props);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMResponsesCreateServiceLinkedRoleRoleRoleLastUsed {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateServiceLinkedRoleRequest) {
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.RoleLastUsed.LastUsedDate', props);
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
          AWSServiceName: this.__input.awsServiceName,
          Description: this.__input.description,
          CustomSuffix: this.__input.customSuffix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceLinkedRole.Role.RoleLastUsed.Region', props);
    return resource.getResponseField('Role.RoleLastUsed.Region') as unknown as string;
  }

}

export class IAMResponsesCreateServiceSpecificCredential {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateServiceSpecificCredentialRequest) {
  }

  public get serviceSpecificCredential(): IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential {
    return new IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateServiceSpecificCredentialServiceSpecificCredential {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateServiceSpecificCredentialRequest) {
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
          UserName: this.__input.userName,
          ServiceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceSpecificCredential.ServiceSpecificCredential.CreateDate', props);
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
          UserName: this.__input.userName,
          ServiceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceSpecificCredential.ServiceSpecificCredential.ServiceName', props);
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
          UserName: this.__input.userName,
          ServiceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceSpecificCredential.ServiceSpecificCredential.ServiceUserName', props);
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
          UserName: this.__input.userName,
          ServiceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceSpecificCredential.ServiceSpecificCredential.ServicePassword', props);
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
          UserName: this.__input.userName,
          ServiceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceSpecificCredential.ServiceSpecificCredential.ServiceSpecificCredentialId', props);
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
          UserName: this.__input.userName,
          ServiceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceSpecificCredential.ServiceSpecificCredential.UserName', props);
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
          UserName: this.__input.userName,
          ServiceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceSpecificCredential.ServiceSpecificCredential.Status', props);
    return resource.getResponseField('ServiceSpecificCredential.Status') as unknown as string;
  }

}

export class IAMResponsesCreateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateUserRequest) {
  }

  public get user(): IAMResponsesCreateUserUser {
    return new IAMResponsesCreateUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateUserRequest) {
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
          Path: this.__input.path,
          UserName: this.__input.userName,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Path', props);
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
          Path: this.__input.path,
          UserName: this.__input.userName,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.UserName', props);
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
          Path: this.__input.path,
          UserName: this.__input.userName,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.UserId', props);
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
          Path: this.__input.path,
          UserName: this.__input.userName,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Arn', props);
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
          Path: this.__input.path,
          UserName: this.__input.userName,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.CreateDate', props);
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
          Path: this.__input.path,
          UserName: this.__input.userName,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.PasswordLastUsed', props);
    return resource.getResponseField('User.PasswordLastUsed') as unknown as string;
  }

  public get permissionsBoundary(): IAMResponsesCreateUserUserPermissionsBoundary {
    return new IAMResponsesCreateUserUserPermissionsBoundary(this.__scope, this.__resources, this.__input);
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
          Path: this.__input.path,
          UserName: this.__input.userName,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.Tags', props);
    return resource.getResponseField('User.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesCreateUserUserPermissionsBoundary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateUserRequest) {
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
          Path: this.__input.path,
          UserName: this.__input.userName,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.PermissionsBoundary.PermissionsBoundaryType', props);
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
          Path: this.__input.path,
          UserName: this.__input.userName,
          PermissionsBoundary: this.__input.permissionsBoundary,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.User.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('User.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMResponsesCreateVirtualMfaDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateVirtualMfaDeviceRequest) {
  }

  public get virtualMfaDevice(): IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice {
    return new IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesCreateVirtualMfaDeviceVirtualMfaDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateVirtualMfaDeviceRequest) {
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.SerialNumber', props);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.Base32StringSeed', props);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.QRCodePNG', props);
    return resource.getResponseField('VirtualMFADevice.QRCodePNG') as unknown as any;
  }

  public get user(): IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser {
    return new IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser(this.__scope, this.__resources, this.__input);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.EnableDate', props);
    return resource.getResponseField('VirtualMFADevice.EnableDate') as unknown as string;
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualMfaDevice',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.CreateVirtualMFADevice.VirtualMFADevice.Tags'),
        outputPath: 'VirtualMFADevice.Tags',
        parameters: {
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.Tags', props);
    return resource.getResponseField('VirtualMFADevice.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateVirtualMfaDeviceRequest) {
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.User.Path', props);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.User.UserName', props);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.User.UserId', props);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.User.Arn', props);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.User.CreateDate', props);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.User.PasswordLastUsed', props);
    return resource.getResponseField('VirtualMFADevice.User.PasswordLastUsed') as unknown as string;
  }

  public get permissionsBoundary(): IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary {
    return new IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary(this.__scope, this.__resources, this.__input);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.User.Tags', props);
    return resource.getResponseField('VirtualMFADevice.User.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesCreateVirtualMfaDeviceVirtualMfaDeviceUserPermissionsBoundary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamCreateVirtualMfaDeviceRequest) {
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryType', props);
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
          Path: this.__input.path,
          VirtualMFADeviceName: this.__input.virtualMfaDeviceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualMFADevice.VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('VirtualMFADevice.User.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMResponsesDeleteServiceLinkedRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamDeleteServiceLinkedRoleRequest) {
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceLinkedRole.DeletionTaskId', props);
    return resource.getResponseField('DeletionTaskId') as unknown as string;
  }

}

export class IAMResponsesGenerateCredentialReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateCredentialReport.State', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateCredentialReport.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class IAMResponsesGenerateOrganizationsAccessReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGenerateOrganizationsAccessReportRequest) {
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
          EntityPath: this.__input.entityPath,
          OrganizationsPolicyId: this.__input.organizationsPolicyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateOrganizationsAccessReport.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class IAMResponsesGenerateServiceLastAccessedDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGenerateServiceLastAccessedDetailsRequest) {
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
          Arn: this.__input.arn,
          Granularity: this.__input.granularity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateServiceLastAccessedDetails.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class IAMResponsesFetchAccessKeyLastUsed {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetAccessKeyLastUsedRequest) {
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
          AccessKeyId: this.__input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessKeyLastUsed.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

  public get accessKeyLastUsed(): IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed {
    return new IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchAccessKeyLastUsedAccessKeyLastUsed {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetAccessKeyLastUsedRequest) {
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
          AccessKeyId: this.__input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessKeyLastUsed.AccessKeyLastUsed.LastUsedDate', props);
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
          AccessKeyId: this.__input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessKeyLastUsed.AccessKeyLastUsed.ServiceName', props);
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
          AccessKeyId: this.__input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessKeyLastUsed.AccessKeyLastUsed.Region', props);
    return resource.getResponseField('AccessKeyLastUsed.Region') as unknown as string;
  }

}

export class IAMResponsesFetchAccountAuthorizationDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetAccountAuthorizationDetailsRequest) {
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
          Filter: this.__input.filter,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountAuthorizationDetails.UserDetailList', props);
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
          Filter: this.__input.filter,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountAuthorizationDetails.GroupDetailList', props);
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
          Filter: this.__input.filter,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountAuthorizationDetails.RoleDetailList', props);
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
          Filter: this.__input.filter,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountAuthorizationDetails.Policies', props);
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
          Filter: this.__input.filter,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountAuthorizationDetails.IsTruncated', props);
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
          Filter: this.__input.filter,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountAuthorizationDetails.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesFetchAccountPasswordPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get passwordPolicy(): IAMResponsesFetchAccountPasswordPolicyPasswordPolicy {
    return new IAMResponsesFetchAccountPasswordPolicyPasswordPolicy(this.__scope, this.__resources);
  }

}

export class IAMResponsesFetchAccountPasswordPolicyPasswordPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.MinimumPasswordLength', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.RequireSymbols', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.RequireNumbers', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.RequireUppercaseCharacters', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.RequireLowercaseCharacters', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.AllowUsersToChangePassword', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.ExpirePasswords', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.MaxPasswordAge', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.PasswordReusePrevention', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountPasswordPolicy.PasswordPolicy.HardExpiry', props);
    return resource.getResponseField('PasswordPolicy.HardExpiry') as unknown as boolean;
  }

}

export class IAMResponsesFetchAccountSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSummary.SummaryMap', props);
    return resource.getResponseField('SummaryMap') as unknown as Record<string, number>;
  }

}

export class IAMResponsesFetchContextKeysForCustomPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetContextKeysForCustomPolicyRequest) {
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
          PolicyInputList: this.__input.policyInputList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContextKeysForCustomPolicy.ContextKeyNames', props);
    return resource.getResponseField('ContextKeyNames') as unknown as string[];
  }

}

export class IAMResponsesFetchContextKeysForPrincipalPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetContextKeysForPrincipalPolicyRequest) {
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
          PolicySourceArn: this.__input.policySourceArn,
          PolicyInputList: this.__input.policyInputList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContextKeysForPrincipalPolicy.ContextKeyNames', props);
    return resource.getResponseField('ContextKeyNames') as unknown as string[];
  }

}

export class IAMResponsesFetchCredentialReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCredentialReport.Content', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCredentialReport.ReportFormat', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCredentialReport.GeneratedTime', props);
    return resource.getResponseField('GeneratedTime') as unknown as string;
  }

}

export class IAMResponsesFetchGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetGroupRequest) {
  }

  public get group(): IAMResponsesFetchGroupGroup {
    return new IAMResponsesFetchGroupGroup(this.__scope, this.__resources, this.__input);
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Users', props);
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.IsTruncated', props);
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesFetchGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetGroupRequest) {
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.Path', props);
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.GroupName', props);
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.GroupId', props);
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.Arn', props);
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.CreateDate', props);
    return resource.getResponseField('Group.CreateDate') as unknown as string;
  }

}

export class IAMResponsesFetchGroupPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetGroupPolicyRequest) {
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
          GroupName: this.__input.groupName,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupPolicy.GroupName', props);
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
          GroupName: this.__input.groupName,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupPolicy.PolicyName', props);
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
          GroupName: this.__input.groupName,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupPolicy.PolicyDocument', props);
    return resource.getResponseField('PolicyDocument') as unknown as string;
  }

}

export class IAMResponsesFetchInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetInstanceProfileRequest) {
  }

  public get instanceProfile(): IAMResponsesFetchInstanceProfileInstanceProfile {
    return new IAMResponsesFetchInstanceProfileInstanceProfile(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchInstanceProfileInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetInstanceProfileRequest) {
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
          InstanceProfileName: this.__input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.InstanceProfile.Path', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.InstanceProfile.InstanceProfileName', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.InstanceProfile.InstanceProfileId', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.InstanceProfile.Arn', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.InstanceProfile.CreateDate', props);
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
          InstanceProfileName: this.__input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.InstanceProfile.Roles', props);
    return resource.getResponseField('InstanceProfile.Roles') as unknown as shapes.IamRole[];
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetInstanceProfile.InstanceProfile.Tags'),
        outputPath: 'InstanceProfile.Tags',
        parameters: {
          InstanceProfileName: this.__input.instanceProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.InstanceProfile.Tags', props);
    return resource.getResponseField('InstanceProfile.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesFetchLoginProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetLoginProfileRequest) {
  }

  public get loginProfile(): IAMResponsesFetchLoginProfileLoginProfile {
    return new IAMResponsesFetchLoginProfileLoginProfile(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchLoginProfileLoginProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetLoginProfileRequest) {
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoginProfile.LoginProfile.UserName', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoginProfile.LoginProfile.CreateDate', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoginProfile.LoginProfile.PasswordResetRequired', props);
    return resource.getResponseField('LoginProfile.PasswordResetRequired') as unknown as boolean;
  }

}

export class IAMResponsesFetchOpenIdConnectProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetOpenIdConnectProviderRequest) {
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
          OpenIDConnectProviderArn: this.__input.openIdConnectProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpenIDConnectProvider.Url', props);
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
          OpenIDConnectProviderArn: this.__input.openIdConnectProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpenIDConnectProvider.ClientIDList', props);
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
          OpenIDConnectProviderArn: this.__input.openIdConnectProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpenIDConnectProvider.ThumbprintList', props);
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
          OpenIDConnectProviderArn: this.__input.openIdConnectProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpenIDConnectProvider.CreateDate', props);
    return resource.getResponseField('CreateDate') as unknown as string;
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpenIdConnectProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetOpenIDConnectProvider.Tags'),
        outputPath: 'Tags',
        parameters: {
          OpenIDConnectProviderArn: this.__input.openIdConnectProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpenIDConnectProvider.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesFetchOrganizationsAccessReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetOrganizationsAccessReportRequest) {
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.JobStatus', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.JobCreationDate', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.JobCompletionDate', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.NumberOfServicesAccessible', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.NumberOfServicesNotAccessed', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.AccessDetails', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.IsTruncated', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get errorDetails(): IAMResponsesFetchOrganizationsAccessReportErrorDetails {
    return new IAMResponsesFetchOrganizationsAccessReportErrorDetails(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchOrganizationsAccessReportErrorDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetOrganizationsAccessReportRequest) {
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.ErrorDetails.Message', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
          SortKey: this.__input.sortKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationsAccessReport.ErrorDetails.Code', props);
    return resource.getResponseField('ErrorDetails.Code') as unknown as string;
  }

}

export class IAMResponsesFetchPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetPolicyRequest) {
  }

  public get policy(): IAMResponsesFetchPolicyPolicy {
    return new IAMResponsesFetchPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetPolicyRequest) {
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.PolicyName', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.PolicyId', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.Arn', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.Path', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.DefaultVersionId', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.AttachmentCount', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.PermissionsBoundaryUsageCount', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.IsAttachable', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.Description', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.CreateDate', props);
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
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.UpdateDate', props);
    return resource.getResponseField('Policy.UpdateDate') as unknown as string;
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetPolicy.Policy.Tags'),
        outputPath: 'Policy.Tags',
        parameters: {
          PolicyArn: this.__input.policyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.Policy.Tags', props);
    return resource.getResponseField('Policy.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesFetchPolicyVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetPolicyVersionRequest) {
  }

  public get policyVersion(): IAMResponsesFetchPolicyVersionPolicyVersion {
    return new IAMResponsesFetchPolicyVersionPolicyVersion(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchPolicyVersionPolicyVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetPolicyVersionRequest) {
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
          PolicyArn: this.__input.policyArn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.PolicyVersion.Document', props);
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
          PolicyArn: this.__input.policyArn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.PolicyVersion.VersionId', props);
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
          PolicyArn: this.__input.policyArn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.PolicyVersion.IsDefaultVersion', props);
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
          PolicyArn: this.__input.policyArn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.PolicyVersion.CreateDate', props);
    return resource.getResponseField('PolicyVersion.CreateDate') as unknown as string;
  }

}

export class IAMResponsesFetchRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetRoleRequest) {
  }

  public get role(): IAMResponsesFetchRoleRole {
    return new IAMResponsesFetchRoleRole(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchRoleRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetRoleRequest) {
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.Path', props);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.RoleName', props);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.RoleId', props);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.Arn', props);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.CreateDate', props);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.AssumeRolePolicyDocument', props);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.Description', props);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.MaxSessionDuration', props);
    return resource.getResponseField('Role.MaxSessionDuration') as unknown as number;
  }

  public get permissionsBoundary(): IAMResponsesFetchRoleRolePermissionsBoundary {
    return new IAMResponsesFetchRoleRolePermissionsBoundary(this.__scope, this.__resources, this.__input);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.Tags', props);
    return resource.getResponseField('Role.Tags') as unknown as shapes.IamTag[];
  }

  public get roleLastUsed(): IAMResponsesFetchRoleRoleRoleLastUsed {
    return new IAMResponsesFetchRoleRoleRoleLastUsed(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchRoleRolePermissionsBoundary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetRoleRequest) {
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.PermissionsBoundary.PermissionsBoundaryType', props);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMResponsesFetchRoleRoleRoleLastUsed {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetRoleRequest) {
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.RoleLastUsed.LastUsedDate', props);
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
          RoleName: this.__input.roleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRole.Role.RoleLastUsed.Region', props);
    return resource.getResponseField('Role.RoleLastUsed.Region') as unknown as string;
  }

}

export class IAMResponsesFetchRolePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetRolePolicyRequest) {
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
          RoleName: this.__input.roleName,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRolePolicy.RoleName', props);
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
          RoleName: this.__input.roleName,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRolePolicy.PolicyName', props);
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
          RoleName: this.__input.roleName,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRolePolicy.PolicyDocument', props);
    return resource.getResponseField('PolicyDocument') as unknown as string;
  }

}

export class IAMResponsesFetchSamlProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetSamlProviderRequest) {
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
          SAMLProviderArn: this.__input.samlProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSAMLProvider.SAMLMetadataDocument', props);
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
          SAMLProviderArn: this.__input.samlProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSAMLProvider.CreateDate', props);
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
          SAMLProviderArn: this.__input.samlProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSAMLProvider.ValidUntil', props);
    return resource.getResponseField('ValidUntil') as unknown as string;
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamlProvider',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetSAMLProvider.Tags'),
        outputPath: 'Tags',
        parameters: {
          SAMLProviderArn: this.__input.samlProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSAMLProvider.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesFetchSshPublicKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetSshPublicKeyRequest) {
  }

  public get sshPublicKey(): IAMResponsesFetchSshPublicKeySshPublicKey {
    return new IAMResponsesFetchSshPublicKeySshPublicKey(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchSshPublicKeySshPublicKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetSshPublicKeyRequest) {
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
          UserName: this.__input.userName,
          SSHPublicKeyId: this.__input.sshPublicKeyId,
          Encoding: this.__input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSSHPublicKey.SSHPublicKey.UserName', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyId: this.__input.sshPublicKeyId,
          Encoding: this.__input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSSHPublicKey.SSHPublicKey.SSHPublicKeyId', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyId: this.__input.sshPublicKeyId,
          Encoding: this.__input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSSHPublicKey.SSHPublicKey.Fingerprint', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyId: this.__input.sshPublicKeyId,
          Encoding: this.__input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSSHPublicKey.SSHPublicKey.SSHPublicKeyBody', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyId: this.__input.sshPublicKeyId,
          Encoding: this.__input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSSHPublicKey.SSHPublicKey.Status', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyId: this.__input.sshPublicKeyId,
          Encoding: this.__input.encoding,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSSHPublicKey.SSHPublicKey.UploadDate', props);
    return resource.getResponseField('SSHPublicKey.UploadDate') as unknown as string;
  }

}

export class IAMResponsesFetchServerCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetServerCertificateRequest) {
  }

  public get serverCertificate(): IAMResponsesFetchServerCertificateServerCertificate {
    return new IAMResponsesFetchServerCertificateServerCertificate(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchServerCertificateServerCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetServerCertificateRequest) {
  }

  public get serverCertificateMetadata(): IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata {
    return new IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata(this.__scope, this.__resources, this.__input);
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
          ServerCertificateName: this.__input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServerCertificate.ServerCertificate.CertificateBody', props);
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
          ServerCertificateName: this.__input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServerCertificate.ServerCertificate.CertificateChain', props);
    return resource.getResponseField('ServerCertificate.CertificateChain') as unknown as string;
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.GetServerCertificate.ServerCertificate.Tags'),
        outputPath: 'ServerCertificate.Tags',
        parameters: {
          ServerCertificateName: this.__input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServerCertificate.ServerCertificate.Tags', props);
    return resource.getResponseField('ServerCertificate.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesFetchServerCertificateServerCertificateServerCertificateMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetServerCertificateRequest) {
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
          ServerCertificateName: this.__input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.Path', props);
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
          ServerCertificateName: this.__input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.ServerCertificateName', props);
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
          ServerCertificateName: this.__input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.ServerCertificateId', props);
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
          ServerCertificateName: this.__input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.Arn', props);
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
          ServerCertificateName: this.__input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.UploadDate', props);
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
          ServerCertificateName: this.__input.serverCertificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServerCertificate.ServerCertificate.ServerCertificateMetadata.Expiration', props);
    return resource.getResponseField('ServerCertificate.ServerCertificateMetadata.Expiration') as unknown as string;
  }

}

export class IAMResponsesFetchServiceLastAccessedDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetServiceLastAccessedDetailsRequest) {
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetails.JobStatus', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetails.JobType', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetails.JobCreationDate', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetails.ServicesLastAccessed', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetails.JobCompletionDate', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetails.IsTruncated', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetails.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get error(): IAMResponsesFetchServiceLastAccessedDetailsError {
    return new IAMResponsesFetchServiceLastAccessedDetailsError(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchServiceLastAccessedDetailsError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetServiceLastAccessedDetailsRequest) {
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetails.Error.Message', props);
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
          JobId: this.__input.jobId,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetails.Error.Code', props);
    return resource.getResponseField('Error.Code') as unknown as string;
  }

}

export class IAMResponsesFetchServiceLastAccessedDetailsWithEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetServiceLastAccessedDetailsWithEntitiesRequest) {
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
          JobId: this.__input.jobId,
          ServiceNamespace: this.__input.serviceNamespace,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetailsWithEntities.JobStatus', props);
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
          JobId: this.__input.jobId,
          ServiceNamespace: this.__input.serviceNamespace,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetailsWithEntities.JobCreationDate', props);
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
          JobId: this.__input.jobId,
          ServiceNamespace: this.__input.serviceNamespace,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetailsWithEntities.JobCompletionDate', props);
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
          JobId: this.__input.jobId,
          ServiceNamespace: this.__input.serviceNamespace,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetailsWithEntities.EntityDetailsList', props);
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
          JobId: this.__input.jobId,
          ServiceNamespace: this.__input.serviceNamespace,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetailsWithEntities.IsTruncated', props);
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
          JobId: this.__input.jobId,
          ServiceNamespace: this.__input.serviceNamespace,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetailsWithEntities.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get error(): IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError {
    return new IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchServiceLastAccessedDetailsWithEntitiesError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetServiceLastAccessedDetailsWithEntitiesRequest) {
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
          JobId: this.__input.jobId,
          ServiceNamespace: this.__input.serviceNamespace,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetailsWithEntities.Error.Message', props);
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
          JobId: this.__input.jobId,
          ServiceNamespace: this.__input.serviceNamespace,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLastAccessedDetailsWithEntities.Error.Code', props);
    return resource.getResponseField('Error.Code') as unknown as string;
  }

}

export class IAMResponsesFetchServiceLinkedRoleDeletionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetServiceLinkedRoleDeletionStatusRequest) {
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
          DeletionTaskId: this.__input.deletionTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLinkedRoleDeletionStatus.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get reason(): IAMResponsesFetchServiceLinkedRoleDeletionStatusReason {
    return new IAMResponsesFetchServiceLinkedRoleDeletionStatusReason(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchServiceLinkedRoleDeletionStatusReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetServiceLinkedRoleDeletionStatusRequest) {
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
          DeletionTaskId: this.__input.deletionTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLinkedRoleDeletionStatus.Reason.Reason', props);
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
          DeletionTaskId: this.__input.deletionTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceLinkedRoleDeletionStatus.Reason.RoleUsageList', props);
    return resource.getResponseField('Reason.RoleUsageList') as unknown as shapes.IamRoleUsageType[];
  }

}

export class IAMResponsesFetchUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetUserRequest) {
  }

  public get user(): IAMResponsesFetchUserUser {
    return new IAMResponsesFetchUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesFetchUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetUserRequest) {
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.Path', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.UserName', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.UserId', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.Arn', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.CreateDate', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.PasswordLastUsed', props);
    return resource.getResponseField('User.PasswordLastUsed') as unknown as string;
  }

  public get permissionsBoundary(): IAMResponsesFetchUserUserPermissionsBoundary {
    return new IAMResponsesFetchUserUserPermissionsBoundary(this.__scope, this.__resources, this.__input);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.Tags', props);
    return resource.getResponseField('User.Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesFetchUserUserPermissionsBoundary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetUserRequest) {
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.PermissionsBoundary.PermissionsBoundaryType', props);
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
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUser.User.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('User.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMResponsesFetchUserPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamGetUserPolicyRequest) {
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
          UserName: this.__input.userName,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserPolicy.UserName', props);
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
          UserName: this.__input.userName,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserPolicy.PolicyName', props);
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
          UserName: this.__input.userName,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserPolicy.PolicyDocument', props);
    return resource.getResponseField('PolicyDocument') as unknown as string;
  }

}

export class IAMResponsesListAccessKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListAccessKeysRequest) {
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessKeys.AccessKeyMetadata', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessKeys.IsTruncated', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessKeys.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListAccountAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListAccountAliasesRequest) {
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountAliases.AccountAliases', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountAliases.IsTruncated', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountAliases.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListAttachedGroupPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListAttachedGroupPoliciesRequest) {
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
          GroupName: this.__input.groupName,
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedGroupPolicies.AttachedPolicies', props);
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
          GroupName: this.__input.groupName,
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedGroupPolicies.IsTruncated', props);
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
          GroupName: this.__input.groupName,
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedGroupPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListAttachedRolePolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListAttachedRolePoliciesRequest) {
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
          RoleName: this.__input.roleName,
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedRolePolicies.AttachedPolicies', props);
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
          RoleName: this.__input.roleName,
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedRolePolicies.IsTruncated', props);
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
          RoleName: this.__input.roleName,
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedRolePolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListAttachedUserPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListAttachedUserPoliciesRequest) {
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
          UserName: this.__input.userName,
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedUserPolicies.AttachedPolicies', props);
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
          UserName: this.__input.userName,
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedUserPolicies.IsTruncated', props);
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
          UserName: this.__input.userName,
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedUserPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListEntitiesForPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListEntitiesForPolicyRequest) {
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
          PolicyArn: this.__input.policyArn,
          EntityFilter: this.__input.entityFilter,
          PathPrefix: this.__input.pathPrefix,
          PolicyUsageFilter: this.__input.policyUsageFilter,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitiesForPolicy.PolicyGroups', props);
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
          PolicyArn: this.__input.policyArn,
          EntityFilter: this.__input.entityFilter,
          PathPrefix: this.__input.pathPrefix,
          PolicyUsageFilter: this.__input.policyUsageFilter,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitiesForPolicy.PolicyUsers', props);
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
          PolicyArn: this.__input.policyArn,
          EntityFilter: this.__input.entityFilter,
          PathPrefix: this.__input.pathPrefix,
          PolicyUsageFilter: this.__input.policyUsageFilter,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitiesForPolicy.PolicyRoles', props);
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
          PolicyArn: this.__input.policyArn,
          EntityFilter: this.__input.entityFilter,
          PathPrefix: this.__input.pathPrefix,
          PolicyUsageFilter: this.__input.policyUsageFilter,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitiesForPolicy.IsTruncated', props);
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
          PolicyArn: this.__input.policyArn,
          EntityFilter: this.__input.entityFilter,
          PathPrefix: this.__input.pathPrefix,
          PolicyUsageFilter: this.__input.policyUsageFilter,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitiesForPolicy.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListGroupPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListGroupPoliciesRequest) {
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupPolicies.PolicyNames', props);
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupPolicies.IsTruncated', props);
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
          GroupName: this.__input.groupName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListGroupsRequest) {
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.Groups', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.IsTruncated', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListGroupsForUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListGroupsForUserRequest) {
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupsForUser.Groups', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupsForUser.IsTruncated', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupsForUser.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListInstanceProfileTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListInstanceProfileTagsRequest) {
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfileTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListInstanceProfileTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          InstanceProfileName: this.__input.instanceProfileName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfileTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfileTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListInstanceProfileTags.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          InstanceProfileName: this.__input.instanceProfileName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfileTags.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfileTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListInstanceProfileTags.Marker'),
        outputPath: 'Marker',
        parameters: {
          InstanceProfileName: this.__input.instanceProfileName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfileTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListInstanceProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListInstanceProfilesRequest) {
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfiles.InstanceProfiles', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfiles.IsTruncated', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfiles.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListInstanceProfilesForRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListInstanceProfilesForRoleRequest) {
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
          RoleName: this.__input.roleName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfilesForRole.InstanceProfiles', props);
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
          RoleName: this.__input.roleName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfilesForRole.IsTruncated', props);
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
          RoleName: this.__input.roleName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfilesForRole.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListMfaDeviceTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListMfaDeviceTagsRequest) {
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMfaDeviceTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListMFADeviceTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          SerialNumber: this.__input.serialNumber,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMFADeviceTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMfaDeviceTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListMFADeviceTags.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          SerialNumber: this.__input.serialNumber,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMFADeviceTags.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMfaDeviceTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListMFADeviceTags.Marker'),
        outputPath: 'Marker',
        parameters: {
          SerialNumber: this.__input.serialNumber,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMFADeviceTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListMfaDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListMfaDevicesRequest) {
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMFADevices.MFADevices', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMFADevices.IsTruncated', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMFADevices.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListOpenIdConnectProviderTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListOpenIdConnectProviderTagsRequest) {
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOpenIdConnectProviderTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListOpenIDConnectProviderTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          OpenIDConnectProviderArn: this.__input.openIdConnectProviderArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOpenIDConnectProviderTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOpenIdConnectProviderTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListOpenIDConnectProviderTags.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          OpenIDConnectProviderArn: this.__input.openIdConnectProviderArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOpenIDConnectProviderTags.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOpenIdConnectProviderTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListOpenIDConnectProviderTags.Marker'),
        outputPath: 'Marker',
        parameters: {
          OpenIDConnectProviderArn: this.__input.openIdConnectProviderArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOpenIDConnectProviderTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListOpenIdConnectProviders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOpenIDConnectProviders.OpenIDConnectProviderList', props);
    return resource.getResponseField('OpenIDConnectProviderList') as unknown as shapes.IamOpenIdConnectProviderListEntry[];
  }

}

export class IAMResponsesListPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListPoliciesRequest) {
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
          Scope: this.__input.scope,
          OnlyAttached: this.__input.onlyAttached,
          PathPrefix: this.__input.pathPrefix,
          PolicyUsageFilter: this.__input.policyUsageFilter,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicies.Policies', props);
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
          Scope: this.__input.scope,
          OnlyAttached: this.__input.onlyAttached,
          PathPrefix: this.__input.pathPrefix,
          PolicyUsageFilter: this.__input.policyUsageFilter,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicies.IsTruncated', props);
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
          Scope: this.__input.scope,
          OnlyAttached: this.__input.onlyAttached,
          PathPrefix: this.__input.pathPrefix,
          PolicyUsageFilter: this.__input.policyUsageFilter,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListPoliciesGrantingServiceAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListPoliciesGrantingServiceAccessRequest) {
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
          Marker: this.__input.marker,
          Arn: this.__input.arn,
          ServiceNamespaces: this.__input.serviceNamespaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPoliciesGrantingServiceAccess.PoliciesGrantingServiceAccess', props);
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
          Marker: this.__input.marker,
          Arn: this.__input.arn,
          ServiceNamespaces: this.__input.serviceNamespaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPoliciesGrantingServiceAccess.IsTruncated', props);
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
          Marker: this.__input.marker,
          Arn: this.__input.arn,
          ServiceNamespaces: this.__input.serviceNamespaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPoliciesGrantingServiceAccess.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListPolicyTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListPolicyTagsRequest) {
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPolicyTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          PolicyArn: this.__input.policyArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPolicyTags.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          PolicyArn: this.__input.policyArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyTags.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListPolicyTags.Marker'),
        outputPath: 'Marker',
        parameters: {
          PolicyArn: this.__input.policyArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListPolicyVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListPolicyVersionsRequest) {
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
          PolicyArn: this.__input.policyArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyVersions.Versions', props);
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
          PolicyArn: this.__input.policyArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyVersions.IsTruncated', props);
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
          PolicyArn: this.__input.policyArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyVersions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListRolePolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListRolePoliciesRequest) {
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
          RoleName: this.__input.roleName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRolePolicies.PolicyNames', props);
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
          RoleName: this.__input.roleName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRolePolicies.IsTruncated', props);
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
          RoleName: this.__input.roleName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRolePolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListRoleTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListRoleTagsRequest) {
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
          RoleName: this.__input.roleName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoleTags.Tags', props);
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
          RoleName: this.__input.roleName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoleTags.IsTruncated', props);
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
          RoleName: this.__input.roleName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoleTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListRoles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListRolesRequest) {
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoles.Roles', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoles.IsTruncated', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoles.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListSamlProviderTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListSamlProviderTagsRequest) {
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSamlProviderTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSAMLProviderTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          SAMLProviderArn: this.__input.samlProviderArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSAMLProviderTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSamlProviderTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSAMLProviderTags.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          SAMLProviderArn: this.__input.samlProviderArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSAMLProviderTags.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSamlProviderTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListSAMLProviderTags.Marker'),
        outputPath: 'Marker',
        parameters: {
          SAMLProviderArn: this.__input.samlProviderArn,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSAMLProviderTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListSamlProviders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSAMLProviders.SAMLProviderList', props);
    return resource.getResponseField('SAMLProviderList') as unknown as shapes.IamsamlProviderListEntry[];
  }

}

export class IAMResponsesListSshPublicKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListSshPublicKeysRequest) {
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSSHPublicKeys.SSHPublicKeys', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSSHPublicKeys.IsTruncated', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSSHPublicKeys.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListServerCertificateTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListServerCertificateTagsRequest) {
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServerCertificateTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListServerCertificateTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ServerCertificateName: this.__input.serverCertificateName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServerCertificateTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServerCertificateTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListServerCertificateTags.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          ServerCertificateName: this.__input.serverCertificateName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServerCertificateTags.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServerCertificateTags',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.ListServerCertificateTags.Marker'),
        outputPath: 'Marker',
        parameters: {
          ServerCertificateName: this.__input.serverCertificateName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServerCertificateTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListServerCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListServerCertificatesRequest) {
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServerCertificates.ServerCertificateMetadataList', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServerCertificates.IsTruncated', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServerCertificates.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListServiceSpecificCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListServiceSpecificCredentialsRequest) {
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
          UserName: this.__input.userName,
          ServiceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceSpecificCredentials.ServiceSpecificCredentials', props);
    return resource.getResponseField('ServiceSpecificCredentials') as unknown as shapes.IamServiceSpecificCredentialMetadata[];
  }

}

export class IAMResponsesListSigningCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListSigningCertificatesRequest) {
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSigningCertificates.Certificates', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSigningCertificates.IsTruncated', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSigningCertificates.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListUserPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListUserPoliciesRequest) {
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserPolicies.PolicyNames', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserPolicies.IsTruncated', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserPolicies.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListUserTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListUserTagsRequest) {
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserTags.Tags', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserTags.IsTruncated', props);
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
          UserName: this.__input.userName,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserTags.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListUsersRequest) {
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.Users', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.IsTruncated', props);
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
          PathPrefix: this.__input.pathPrefix,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesListVirtualMfaDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamListVirtualMfaDevicesRequest) {
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
          AssignmentStatus: this.__input.assignmentStatus,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVirtualMFADevices.VirtualMFADevices', props);
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
          AssignmentStatus: this.__input.assignmentStatus,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVirtualMFADevices.IsTruncated', props);
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
          AssignmentStatus: this.__input.assignmentStatus,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVirtualMFADevices.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesResetServiceSpecificCredential {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamResetServiceSpecificCredentialRequest) {
  }

  public get serviceSpecificCredential(): IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential {
    return new IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesResetServiceSpecificCredentialServiceSpecificCredential {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamResetServiceSpecificCredentialRequest) {
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
          UserName: this.__input.userName,
          ServiceSpecificCredentialId: this.__input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSpecificCredential.ServiceSpecificCredential.CreateDate', props);
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
          UserName: this.__input.userName,
          ServiceSpecificCredentialId: this.__input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSpecificCredential.ServiceSpecificCredential.ServiceName', props);
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
          UserName: this.__input.userName,
          ServiceSpecificCredentialId: this.__input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSpecificCredential.ServiceSpecificCredential.ServiceUserName', props);
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
          UserName: this.__input.userName,
          ServiceSpecificCredentialId: this.__input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSpecificCredential.ServiceSpecificCredential.ServicePassword', props);
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
          UserName: this.__input.userName,
          ServiceSpecificCredentialId: this.__input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSpecificCredential.ServiceSpecificCredential.ServiceSpecificCredentialId', props);
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
          UserName: this.__input.userName,
          ServiceSpecificCredentialId: this.__input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSpecificCredential.ServiceSpecificCredential.UserName', props);
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
          UserName: this.__input.userName,
          ServiceSpecificCredentialId: this.__input.serviceSpecificCredentialId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSpecificCredential.ServiceSpecificCredential.Status', props);
    return resource.getResponseField('ServiceSpecificCredential.Status') as unknown as string;
  }

}

export class IAMResponsesSimulateCustomPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamSimulateCustomPolicyRequest) {
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
          PolicyInputList: this.__input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.__input.permissionsBoundaryPolicyInputList,
          ActionNames: this.__input.actionNames,
          ResourceArns: this.__input.resourceArns,
          ResourcePolicy: this.__input.resourcePolicy,
          ResourceOwner: this.__input.resourceOwner,
          CallerArn: this.__input.callerArn,
          ContextEntries: this.__input.contextEntries,
          ResourceHandlingOption: this.__input.resourceHandlingOption,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SimulateCustomPolicy.EvaluationResults', props);
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
          PolicyInputList: this.__input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.__input.permissionsBoundaryPolicyInputList,
          ActionNames: this.__input.actionNames,
          ResourceArns: this.__input.resourceArns,
          ResourcePolicy: this.__input.resourcePolicy,
          ResourceOwner: this.__input.resourceOwner,
          CallerArn: this.__input.callerArn,
          ContextEntries: this.__input.contextEntries,
          ResourceHandlingOption: this.__input.resourceHandlingOption,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SimulateCustomPolicy.IsTruncated', props);
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
          PolicyInputList: this.__input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.__input.permissionsBoundaryPolicyInputList,
          ActionNames: this.__input.actionNames,
          ResourceArns: this.__input.resourceArns,
          ResourcePolicy: this.__input.resourcePolicy,
          ResourceOwner: this.__input.resourceOwner,
          CallerArn: this.__input.callerArn,
          ContextEntries: this.__input.contextEntries,
          ResourceHandlingOption: this.__input.resourceHandlingOption,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SimulateCustomPolicy.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesSimulatePrincipalPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamSimulatePrincipalPolicyRequest) {
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
          PolicySourceArn: this.__input.policySourceArn,
          PolicyInputList: this.__input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.__input.permissionsBoundaryPolicyInputList,
          ActionNames: this.__input.actionNames,
          ResourceArns: this.__input.resourceArns,
          ResourcePolicy: this.__input.resourcePolicy,
          ResourceOwner: this.__input.resourceOwner,
          CallerArn: this.__input.callerArn,
          ContextEntries: this.__input.contextEntries,
          ResourceHandlingOption: this.__input.resourceHandlingOption,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SimulatePrincipalPolicy.EvaluationResults', props);
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
          PolicySourceArn: this.__input.policySourceArn,
          PolicyInputList: this.__input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.__input.permissionsBoundaryPolicyInputList,
          ActionNames: this.__input.actionNames,
          ResourceArns: this.__input.resourceArns,
          ResourcePolicy: this.__input.resourcePolicy,
          ResourceOwner: this.__input.resourceOwner,
          CallerArn: this.__input.callerArn,
          ContextEntries: this.__input.contextEntries,
          ResourceHandlingOption: this.__input.resourceHandlingOption,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SimulatePrincipalPolicy.IsTruncated', props);
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
          PolicySourceArn: this.__input.policySourceArn,
          PolicyInputList: this.__input.policyInputList,
          PermissionsBoundaryPolicyInputList: this.__input.permissionsBoundaryPolicyInputList,
          ActionNames: this.__input.actionNames,
          ResourceArns: this.__input.resourceArns,
          ResourcePolicy: this.__input.resourcePolicy,
          ResourceOwner: this.__input.resourceOwner,
          CallerArn: this.__input.callerArn,
          ContextEntries: this.__input.contextEntries,
          ResourceHandlingOption: this.__input.resourceHandlingOption,
          MaxItems: this.__input.maxItems,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SimulatePrincipalPolicy.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class IAMResponsesUpdateRoleDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUpdateRoleDescriptionRequest) {
  }

  public get role(): IAMResponsesUpdateRoleDescriptionRole {
    return new IAMResponsesUpdateRoleDescriptionRole(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesUpdateRoleDescriptionRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUpdateRoleDescriptionRequest) {
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.Path', props);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.RoleName', props);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.RoleId', props);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.Arn', props);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.CreateDate', props);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.AssumeRolePolicyDocument', props);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.Description', props);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.MaxSessionDuration', props);
    return resource.getResponseField('Role.MaxSessionDuration') as unknown as number;
  }

  public get permissionsBoundary(): IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary {
    return new IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary(this.__scope, this.__resources, this.__input);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.Tags', props);
    return resource.getResponseField('Role.Tags') as unknown as shapes.IamTag[];
  }

  public get roleLastUsed(): IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed {
    return new IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesUpdateRoleDescriptionRolePermissionsBoundary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUpdateRoleDescriptionRequest) {
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.PermissionsBoundary.PermissionsBoundaryType', props);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.PermissionsBoundary.PermissionsBoundaryArn', props);
    return resource.getResponseField('Role.PermissionsBoundary.PermissionsBoundaryArn') as unknown as string;
  }

}

export class IAMResponsesUpdateRoleDescriptionRoleRoleLastUsed {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUpdateRoleDescriptionRequest) {
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.RoleLastUsed.LastUsedDate', props);
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
          RoleName: this.__input.roleName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleDescription.Role.RoleLastUsed.Region', props);
    return resource.getResponseField('Role.RoleLastUsed.Region') as unknown as string;
  }

}

export class IAMResponsesUpdateSamlProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUpdateSamlProviderRequest) {
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
          SAMLMetadataDocument: this.__input.samlMetadataDocument,
          SAMLProviderArn: this.__input.samlProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSAMLProvider.SAMLProviderArn', props);
    return resource.getResponseField('SAMLProviderArn') as unknown as string;
  }

}

export class IAMResponsesUploadSshPublicKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUploadSshPublicKeyRequest) {
  }

  public get sshPublicKey(): IAMResponsesUploadSshPublicKeySshPublicKey {
    return new IAMResponsesUploadSshPublicKeySshPublicKey(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesUploadSshPublicKeySshPublicKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUploadSshPublicKeyRequest) {
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
          UserName: this.__input.userName,
          SSHPublicKeyBody: this.__input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSSHPublicKey.SSHPublicKey.UserName', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyBody: this.__input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSSHPublicKey.SSHPublicKey.SSHPublicKeyId', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyBody: this.__input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSSHPublicKey.SSHPublicKey.Fingerprint', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyBody: this.__input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSSHPublicKey.SSHPublicKey.SSHPublicKeyBody', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyBody: this.__input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSSHPublicKey.SSHPublicKey.Status', props);
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
          UserName: this.__input.userName,
          SSHPublicKeyBody: this.__input.sshPublicKeyBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSSHPublicKey.SSHPublicKey.UploadDate', props);
    return resource.getResponseField('SSHPublicKey.UploadDate') as unknown as string;
  }

}

export class IAMResponsesUploadServerCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUploadServerCertificateRequest) {
  }

  public get serverCertificateMetadata(): IAMResponsesUploadServerCertificateServerCertificateMetadata {
    return new IAMResponsesUploadServerCertificateServerCertificateMetadata(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.IamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadServerCertificate',
        service: 'IAM',
        physicalResourceId: cr.PhysicalResourceId.of('IAM.UploadServerCertificate.Tags'),
        outputPath: 'Tags',
        parameters: {
          Path: this.__input.path,
          ServerCertificateName: this.__input.serverCertificateName,
          CertificateBody: this.__input.certificateBody,
          PrivateKey: this.__input.privateKey,
          CertificateChain: this.__input.certificateChain,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadServerCertificate.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.IamTag[];
  }

}

export class IAMResponsesUploadServerCertificateServerCertificateMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUploadServerCertificateRequest) {
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
          Path: this.__input.path,
          ServerCertificateName: this.__input.serverCertificateName,
          CertificateBody: this.__input.certificateBody,
          PrivateKey: this.__input.privateKey,
          CertificateChain: this.__input.certificateChain,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadServerCertificate.ServerCertificateMetadata.Path', props);
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
          Path: this.__input.path,
          ServerCertificateName: this.__input.serverCertificateName,
          CertificateBody: this.__input.certificateBody,
          PrivateKey: this.__input.privateKey,
          CertificateChain: this.__input.certificateChain,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadServerCertificate.ServerCertificateMetadata.ServerCertificateName', props);
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
          Path: this.__input.path,
          ServerCertificateName: this.__input.serverCertificateName,
          CertificateBody: this.__input.certificateBody,
          PrivateKey: this.__input.privateKey,
          CertificateChain: this.__input.certificateChain,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadServerCertificate.ServerCertificateMetadata.ServerCertificateId', props);
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
          Path: this.__input.path,
          ServerCertificateName: this.__input.serverCertificateName,
          CertificateBody: this.__input.certificateBody,
          PrivateKey: this.__input.privateKey,
          CertificateChain: this.__input.certificateChain,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadServerCertificate.ServerCertificateMetadata.Arn', props);
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
          Path: this.__input.path,
          ServerCertificateName: this.__input.serverCertificateName,
          CertificateBody: this.__input.certificateBody,
          PrivateKey: this.__input.privateKey,
          CertificateChain: this.__input.certificateChain,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadServerCertificate.ServerCertificateMetadata.UploadDate', props);
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
          Path: this.__input.path,
          ServerCertificateName: this.__input.serverCertificateName,
          CertificateBody: this.__input.certificateBody,
          PrivateKey: this.__input.privateKey,
          CertificateChain: this.__input.certificateChain,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadServerCertificate.ServerCertificateMetadata.Expiration', props);
    return resource.getResponseField('ServerCertificateMetadata.Expiration') as unknown as string;
  }

}

export class IAMResponsesUploadSigningCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUploadSigningCertificateRequest) {
  }

  public get certificate(): IAMResponsesUploadSigningCertificateCertificate {
    return new IAMResponsesUploadSigningCertificateCertificate(this.__scope, this.__resources, this.__input);
  }

}

export class IAMResponsesUploadSigningCertificateCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IamUploadSigningCertificateRequest) {
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
          UserName: this.__input.userName,
          CertificateBody: this.__input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSigningCertificate.Certificate.UserName', props);
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
          UserName: this.__input.userName,
          CertificateBody: this.__input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSigningCertificate.Certificate.CertificateId', props);
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
          UserName: this.__input.userName,
          CertificateBody: this.__input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSigningCertificate.Certificate.CertificateBody', props);
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
          UserName: this.__input.userName,
          CertificateBody: this.__input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSigningCertificate.Certificate.Status', props);
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
          UserName: this.__input.userName,
          CertificateBody: this.__input.certificateBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadSigningCertificate.Certificate.UploadDate', props);
    return resource.getResponseField('Certificate.UploadDate') as unknown as string;
  }

}

