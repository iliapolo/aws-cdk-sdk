/**
 * @schema AddClientIdToOpenIdConnectProviderRequest
 */
export interface AddClientIdToOpenIdConnectProviderRequest {
  /**
   * @schema AddClientIdToOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

  /**
   * @schema AddClientIdToOpenIdConnectProviderRequest#ClientID
   */
  readonly clientId: string;

}

/**
 * @schema AddRoleToInstanceProfileRequest
 */
export interface AddRoleToInstanceProfileRequest {
  /**
   * @schema AddRoleToInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema AddRoleToInstanceProfileRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema AddUserToGroupRequest
 */
export interface AddUserToGroupRequest {
  /**
   * @schema AddUserToGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema AddUserToGroupRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema AttachGroupPolicyRequest
 */
export interface AttachGroupPolicyRequest {
  /**
   * @schema AttachGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema AttachGroupPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema AttachRolePolicyRequest
 */
export interface AttachRolePolicyRequest {
  /**
   * @schema AttachRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema AttachRolePolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema AttachUserPolicyRequest
 */
export interface AttachUserPolicyRequest {
  /**
   * @schema AttachUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema AttachUserPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema ChangePasswordRequest
 */
export interface ChangePasswordRequest {
  /**
   * @schema ChangePasswordRequest#OldPassword
   */
  readonly oldPassword: string;

  /**
   * @schema ChangePasswordRequest#NewPassword
   */
  readonly newPassword: string;

}

/**
 * @schema CreateAccessKeyRequest
 */
export interface CreateAccessKeyRequest {
  /**
   * @schema CreateAccessKeyRequest#UserName
   */
  readonly userName?: string;

}

/**
 * @schema CreateAccessKeyResponse
 */
export interface CreateAccessKeyResponse {
  /**
   * @schema CreateAccessKeyResponse#AccessKey
   */
  readonly accessKey: AccessKey;

}

/**
 * @schema CreateAccountAliasRequest
 */
export interface CreateAccountAliasRequest {
  /**
   * @schema CreateAccountAliasRequest#AccountAlias
   */
  readonly accountAlias: string;

}

/**
 * @schema CreateGroupRequest
 */
export interface CreateGroupRequest {
  /**
   * @schema CreateGroupRequest#Path
   */
  readonly path?: string;

  /**
   * @schema CreateGroupRequest#GroupName
   */
  readonly groupName: string;

}

/**
 * @schema CreateGroupResponse
 */
export interface CreateGroupResponse {
  /**
   * @schema CreateGroupResponse#Group
   */
  readonly group: Group;

}

/**
 * @schema CreateInstanceProfileRequest
 */
export interface CreateInstanceProfileRequest {
  /**
   * @schema CreateInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema CreateInstanceProfileRequest#Path
   */
  readonly path?: string;

}

/**
 * @schema CreateInstanceProfileResponse
 */
export interface CreateInstanceProfileResponse {
  /**
   * @schema CreateInstanceProfileResponse#InstanceProfile
   */
  readonly instanceProfile: InstanceProfile;

}

/**
 * @schema CreateLoginProfileRequest
 */
export interface CreateLoginProfileRequest {
  /**
   * @schema CreateLoginProfileRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema CreateLoginProfileRequest#Password
   */
  readonly password: string;

  /**
   * @schema CreateLoginProfileRequest#PasswordResetRequired
   */
  readonly passwordResetRequired?: boolean;

}

/**
 * @schema CreateLoginProfileResponse
 */
export interface CreateLoginProfileResponse {
  /**
   * @schema CreateLoginProfileResponse#LoginProfile
   */
  readonly loginProfile: LoginProfile;

}

/**
 * @schema CreateOpenIdConnectProviderRequest
 */
export interface CreateOpenIdConnectProviderRequest {
  /**
   * @schema CreateOpenIdConnectProviderRequest#Url
   */
  readonly url: string;

  /**
   * @schema CreateOpenIdConnectProviderRequest#ClientIDList
   */
  readonly clientIdList?: string[];

  /**
   * @schema CreateOpenIdConnectProviderRequest#ThumbprintList
   */
  readonly thumbprintList: string[];

}

/**
 * @schema CreateOpenIdConnectProviderResponse
 */
export interface CreateOpenIdConnectProviderResponse {
  /**
   * @schema CreateOpenIdConnectProviderResponse#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

}

/**
 * @schema CreatePolicyRequest
 */
export interface CreatePolicyRequest {
  /**
   * @schema CreatePolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema CreatePolicyRequest#Path
   */
  readonly path?: string;

  /**
   * @schema CreatePolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema CreatePolicyRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema CreatePolicyResponse
 */
export interface CreatePolicyResponse {
  /**
   * @schema CreatePolicyResponse#Policy
   */
  readonly policy?: Policy;

}

/**
 * @schema CreatePolicyVersionRequest
 */
export interface CreatePolicyVersionRequest {
  /**
   * @schema CreatePolicyVersionRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema CreatePolicyVersionRequest#PolicyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema CreatePolicyVersionRequest#SetAsDefault
   */
  readonly setAsDefault?: boolean;

}

/**
 * @schema CreatePolicyVersionResponse
 */
export interface CreatePolicyVersionResponse {
  /**
   * @schema CreatePolicyVersionResponse#PolicyVersion
   */
  readonly policyVersion?: PolicyVersion;

}

/**
 * @schema CreateRoleRequest
 */
export interface CreateRoleRequest {
  /**
   * @schema CreateRoleRequest#Path
   */
  readonly path?: string;

  /**
   * @schema CreateRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema CreateRoleRequest#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument: string;

  /**
   * @schema CreateRoleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRoleRequest#MaxSessionDuration
   */
  readonly maxSessionDuration?: number;

  /**
   * @schema CreateRoleRequest#PermissionsBoundary
   */
  readonly permissionsBoundary?: string;

  /**
   * @schema CreateRoleRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRoleResponse
 */
export interface CreateRoleResponse {
  /**
   * @schema CreateRoleResponse#Role
   */
  readonly role: Role;

}

/**
 * @schema CreateSamlProviderRequest
 */
export interface CreateSamlProviderRequest {
  /**
   * @schema CreateSamlProviderRequest#SAMLMetadataDocument
   */
  readonly samlMetadataDocument: string;

  /**
   * @schema CreateSamlProviderRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CreateSamlProviderResponse
 */
export interface CreateSamlProviderResponse {
  /**
   * @schema CreateSamlProviderResponse#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

}

/**
 * @schema CreateServiceLinkedRoleRequest
 */
export interface CreateServiceLinkedRoleRequest {
  /**
   * @schema CreateServiceLinkedRoleRequest#AWSServiceName
   */
  readonly awsServiceName: string;

  /**
   * @schema CreateServiceLinkedRoleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateServiceLinkedRoleRequest#CustomSuffix
   */
  readonly customSuffix?: string;

}

/**
 * @schema CreateServiceLinkedRoleResponse
 */
export interface CreateServiceLinkedRoleResponse {
  /**
   * @schema CreateServiceLinkedRoleResponse#Role
   */
  readonly role?: Role;

}

/**
 * @schema CreateServiceSpecificCredentialRequest
 */
export interface CreateServiceSpecificCredentialRequest {
  /**
   * @schema CreateServiceSpecificCredentialRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema CreateServiceSpecificCredentialRequest#ServiceName
   */
  readonly serviceName: string;

}

/**
 * @schema CreateServiceSpecificCredentialResponse
 */
export interface CreateServiceSpecificCredentialResponse {
  /**
   * @schema CreateServiceSpecificCredentialResponse#ServiceSpecificCredential
   */
  readonly serviceSpecificCredential?: ServiceSpecificCredential;

}

/**
 * @schema CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * @schema CreateUserRequest#Path
   */
  readonly path?: string;

  /**
   * @schema CreateUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema CreateUserRequest#PermissionsBoundary
   */
  readonly permissionsBoundary?: string;

  /**
   * @schema CreateUserRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   * @schema CreateUserResponse#User
   */
  readonly user?: User;

}

/**
 * @schema CreateVirtualMfaDeviceRequest
 */
export interface CreateVirtualMfaDeviceRequest {
  /**
   * @schema CreateVirtualMfaDeviceRequest#Path
   */
  readonly path?: string;

  /**
   * @schema CreateVirtualMfaDeviceRequest#VirtualMFADeviceName
   */
  readonly virtualMfaDeviceName: string;

}

/**
 * @schema CreateVirtualMfaDeviceResponse
 */
export interface CreateVirtualMfaDeviceResponse {
  /**
   * @schema CreateVirtualMfaDeviceResponse#VirtualMFADevice
   */
  readonly virtualMfaDevice: VirtualMfaDevice;

}

/**
 * @schema DeactivateMfaDeviceRequest
 */
export interface DeactivateMfaDeviceRequest {
  /**
   * @schema DeactivateMfaDeviceRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema DeactivateMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber: string;

}

/**
 * @schema DeleteAccessKeyRequest
 */
export interface DeleteAccessKeyRequest {
  /**
   * @schema DeleteAccessKeyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema DeleteAccessKeyRequest#AccessKeyId
   */
  readonly accessKeyId: string;

}

/**
 * @schema DeleteAccountAliasRequest
 */
export interface DeleteAccountAliasRequest {
  /**
   * @schema DeleteAccountAliasRequest#AccountAlias
   */
  readonly accountAlias: string;

}

/**
 * @schema DeleteGroupRequest
 */
export interface DeleteGroupRequest {
  /**
   * @schema DeleteGroupRequest#GroupName
   */
  readonly groupName: string;

}

/**
 * @schema DeleteGroupPolicyRequest
 */
export interface DeleteGroupPolicyRequest {
  /**
   * @schema DeleteGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema DeleteGroupPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema DeleteInstanceProfileRequest
 */
export interface DeleteInstanceProfileRequest {
  /**
   * @schema DeleteInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

}

/**
 * @schema DeleteLoginProfileRequest
 */
export interface DeleteLoginProfileRequest {
  /**
   * @schema DeleteLoginProfileRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema DeleteOpenIdConnectProviderRequest
 */
export interface DeleteOpenIdConnectProviderRequest {
  /**
   * @schema DeleteOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

}

/**
 * @schema DeletePolicyRequest
 */
export interface DeletePolicyRequest {
  /**
   * @schema DeletePolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema DeletePolicyVersionRequest
 */
export interface DeletePolicyVersionRequest {
  /**
   * @schema DeletePolicyVersionRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema DeletePolicyVersionRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema DeleteRoleRequest
 */
export interface DeleteRoleRequest {
  /**
   * @schema DeleteRoleRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema DeleteRolePermissionsBoundaryRequest
 */
export interface DeleteRolePermissionsBoundaryRequest {
  /**
   * @schema DeleteRolePermissionsBoundaryRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema DeleteRolePolicyRequest
 */
export interface DeleteRolePolicyRequest {
  /**
   * @schema DeleteRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema DeleteRolePolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema DeleteSamlProviderRequest
 */
export interface DeleteSamlProviderRequest {
  /**
   * @schema DeleteSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn: string;

}

/**
 * @schema DeleteSshPublicKeyRequest
 */
export interface DeleteSshPublicKeyRequest {
  /**
   * @schema DeleteSshPublicKeyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema DeleteSshPublicKeyRequest#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

}

/**
 * @schema DeleteServerCertificateRequest
 */
export interface DeleteServerCertificateRequest {
  /**
   * @schema DeleteServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName: string;

}

/**
 * @schema DeleteServiceLinkedRoleRequest
 */
export interface DeleteServiceLinkedRoleRequest {
  /**
   * @schema DeleteServiceLinkedRoleRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema DeleteServiceLinkedRoleResponse
 */
export interface DeleteServiceLinkedRoleResponse {
  /**
   * @schema DeleteServiceLinkedRoleResponse#DeletionTaskId
   */
  readonly deletionTaskId: string;

}

/**
 * @schema DeleteServiceSpecificCredentialRequest
 */
export interface DeleteServiceSpecificCredentialRequest {
  /**
   * @schema DeleteServiceSpecificCredentialRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema DeleteServiceSpecificCredentialRequest#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

}

/**
 * @schema DeleteSigningCertificateRequest
 */
export interface DeleteSigningCertificateRequest {
  /**
   * @schema DeleteSigningCertificateRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema DeleteSigningCertificateRequest#CertificateId
   */
  readonly certificateId: string;

}

/**
 * @schema DeleteUserRequest
 */
export interface DeleteUserRequest {
  /**
   * @schema DeleteUserRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema DeleteUserPermissionsBoundaryRequest
 */
export interface DeleteUserPermissionsBoundaryRequest {
  /**
   * @schema DeleteUserPermissionsBoundaryRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema DeleteUserPolicyRequest
 */
export interface DeleteUserPolicyRequest {
  /**
   * @schema DeleteUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema DeleteUserPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema DeleteVirtualMfaDeviceRequest
 */
export interface DeleteVirtualMfaDeviceRequest {
  /**
   * @schema DeleteVirtualMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber: string;

}

/**
 * @schema DetachGroupPolicyRequest
 */
export interface DetachGroupPolicyRequest {
  /**
   * @schema DetachGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema DetachGroupPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema DetachRolePolicyRequest
 */
export interface DetachRolePolicyRequest {
  /**
   * @schema DetachRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema DetachRolePolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema DetachUserPolicyRequest
 */
export interface DetachUserPolicyRequest {
  /**
   * @schema DetachUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema DetachUserPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema EnableMfaDeviceRequest
 */
export interface EnableMfaDeviceRequest {
  /**
   * @schema EnableMfaDeviceRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema EnableMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber: string;

  /**
   * @schema EnableMfaDeviceRequest#AuthenticationCode1
   */
  readonly authenticationCode1: string;

  /**
   * @schema EnableMfaDeviceRequest#AuthenticationCode2
   */
  readonly authenticationCode2: string;

}

/**
 * @schema GenerateCredentialReportResponse
 */
export interface GenerateCredentialReportResponse {
  /**
   * @schema GenerateCredentialReportResponse#State
   */
  readonly state?: string;

  /**
   * @schema GenerateCredentialReportResponse#Description
   */
  readonly description?: string;

}

/**
 * @schema GenerateOrganizationsAccessReportRequest
 */
export interface GenerateOrganizationsAccessReportRequest {
  /**
   * @schema GenerateOrganizationsAccessReportRequest#EntityPath
   */
  readonly entityPath: string;

  /**
   * @schema GenerateOrganizationsAccessReportRequest#OrganizationsPolicyId
   */
  readonly organizationsPolicyId?: string;

}

/**
 * @schema GenerateOrganizationsAccessReportResponse
 */
export interface GenerateOrganizationsAccessReportResponse {
  /**
   * @schema GenerateOrganizationsAccessReportResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema GenerateServiceLastAccessedDetailsRequest
 */
export interface GenerateServiceLastAccessedDetailsRequest {
  /**
   * @schema GenerateServiceLastAccessedDetailsRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema GenerateServiceLastAccessedDetailsRequest#Granularity
   */
  readonly granularity?: string;

}

/**
 * @schema GenerateServiceLastAccessedDetailsResponse
 */
export interface GenerateServiceLastAccessedDetailsResponse {
  /**
   * @schema GenerateServiceLastAccessedDetailsResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema GetAccessKeyLastUsedRequest
 */
export interface GetAccessKeyLastUsedRequest {
  /**
   * @schema GetAccessKeyLastUsedRequest#AccessKeyId
   */
  readonly accessKeyId: string;

}

/**
 * @schema GetAccessKeyLastUsedResponse
 */
export interface GetAccessKeyLastUsedResponse {
  /**
   * @schema GetAccessKeyLastUsedResponse#UserName
   */
  readonly userName?: string;

  /**
   * @schema GetAccessKeyLastUsedResponse#AccessKeyLastUsed
   */
  readonly accessKeyLastUsed?: AccessKeyLastUsed;

}

/**
 * @schema GetAccountAuthorizationDetailsRequest
 */
export interface GetAccountAuthorizationDetailsRequest {
  /**
   * @schema GetAccountAuthorizationDetailsRequest#Filter
   */
  readonly filter?: string[];

  /**
   * @schema GetAccountAuthorizationDetailsRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema GetAccountAuthorizationDetailsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetAccountAuthorizationDetailsResponse
 */
export interface GetAccountAuthorizationDetailsResponse {
  /**
   * @schema GetAccountAuthorizationDetailsResponse#UserDetailList
   */
  readonly userDetailList?: UserDetail[];

  /**
   * @schema GetAccountAuthorizationDetailsResponse#GroupDetailList
   */
  readonly groupDetailList?: GroupDetail[];

  /**
   * @schema GetAccountAuthorizationDetailsResponse#RoleDetailList
   */
  readonly roleDetailList?: RoleDetail[];

  /**
   * @schema GetAccountAuthorizationDetailsResponse#Policies
   */
  readonly policies?: ManagedPolicyDetail[];

  /**
   * @schema GetAccountAuthorizationDetailsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema GetAccountAuthorizationDetailsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetAccountPasswordPolicyResponse
 */
export interface GetAccountPasswordPolicyResponse {
  /**
   * @schema GetAccountPasswordPolicyResponse#PasswordPolicy
   */
  readonly passwordPolicy: PasswordPolicy;

}

/**
 * @schema GetAccountSummaryResponse
 */
export interface GetAccountSummaryResponse {
  /**
   * @schema GetAccountSummaryResponse#SummaryMap
   */
  readonly summaryMap?: { [key: string]: number };

}

/**
 * @schema GetContextKeysForCustomPolicyRequest
 */
export interface GetContextKeysForCustomPolicyRequest {
  /**
   * @schema GetContextKeysForCustomPolicyRequest#PolicyInputList
   */
  readonly policyInputList: string[];

}

/**
 * @schema GetContextKeysForPolicyResponse
 */
export interface GetContextKeysForPolicyResponse {
  /**
   * @schema GetContextKeysForPolicyResponse#ContextKeyNames
   */
  readonly contextKeyNames?: string[];

}

/**
 * @schema GetContextKeysForPrincipalPolicyRequest
 */
export interface GetContextKeysForPrincipalPolicyRequest {
  /**
   * @schema GetContextKeysForPrincipalPolicyRequest#PolicySourceArn
   */
  readonly policySourceArn: string;

  /**
   * @schema GetContextKeysForPrincipalPolicyRequest#PolicyInputList
   */
  readonly policyInputList?: string[];

}

/**
 * @schema GetCredentialReportResponse
 */
export interface GetCredentialReportResponse {
  /**
   * @schema GetCredentialReportResponse#Content
   */
  readonly content?: any;

  /**
   * @schema GetCredentialReportResponse#ReportFormat
   */
  readonly reportFormat?: string;

  /**
   * @schema GetCredentialReportResponse#GeneratedTime
   */
  readonly generatedTime?: string;

}

/**
 * @schema GetGroupRequest
 */
export interface GetGroupRequest {
  /**
   * @schema GetGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema GetGroupRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema GetGroupRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema GetGroupResponse
 */
export interface GetGroupResponse {
  /**
   * @schema GetGroupResponse#Group
   */
  readonly group: Group;

  /**
   * @schema GetGroupResponse#Users
   */
  readonly users: User[];

  /**
   * @schema GetGroupResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema GetGroupResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetGroupPolicyRequest
 */
export interface GetGroupPolicyRequest {
  /**
   * @schema GetGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema GetGroupPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema GetGroupPolicyResponse
 */
export interface GetGroupPolicyResponse {
  /**
   * @schema GetGroupPolicyResponse#GroupName
   */
  readonly groupName: string;

  /**
   * @schema GetGroupPolicyResponse#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema GetGroupPolicyResponse#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema GetInstanceProfileRequest
 */
export interface GetInstanceProfileRequest {
  /**
   * @schema GetInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

}

/**
 * @schema GetInstanceProfileResponse
 */
export interface GetInstanceProfileResponse {
  /**
   * @schema GetInstanceProfileResponse#InstanceProfile
   */
  readonly instanceProfile: InstanceProfile;

}

/**
 * @schema GetLoginProfileRequest
 */
export interface GetLoginProfileRequest {
  /**
   * @schema GetLoginProfileRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema GetLoginProfileResponse
 */
export interface GetLoginProfileResponse {
  /**
   * @schema GetLoginProfileResponse#LoginProfile
   */
  readonly loginProfile: LoginProfile;

}

/**
 * @schema GetOpenIdConnectProviderRequest
 */
export interface GetOpenIdConnectProviderRequest {
  /**
   * @schema GetOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

}

/**
 * @schema GetOpenIdConnectProviderResponse
 */
export interface GetOpenIdConnectProviderResponse {
  /**
   * @schema GetOpenIdConnectProviderResponse#Url
   */
  readonly url?: string;

  /**
   * @schema GetOpenIdConnectProviderResponse#ClientIDList
   */
  readonly clientIdList?: string[];

  /**
   * @schema GetOpenIdConnectProviderResponse#ThumbprintList
   */
  readonly thumbprintList?: string[];

  /**
   * @schema GetOpenIdConnectProviderResponse#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema GetOrganizationsAccessReportRequest
 */
export interface GetOrganizationsAccessReportRequest {
  /**
   * @schema GetOrganizationsAccessReportRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetOrganizationsAccessReportRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema GetOrganizationsAccessReportRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema GetOrganizationsAccessReportRequest#SortKey
   */
  readonly sortKey?: string;

}

/**
 * @schema GetOrganizationsAccessReportResponse
 */
export interface GetOrganizationsAccessReportResponse {
  /**
   * @schema GetOrganizationsAccessReportResponse#JobStatus
   */
  readonly jobStatus: string;

  /**
   * @schema GetOrganizationsAccessReportResponse#JobCreationDate
   */
  readonly jobCreationDate: string;

  /**
   * @schema GetOrganizationsAccessReportResponse#JobCompletionDate
   */
  readonly jobCompletionDate?: string;

  /**
   * @schema GetOrganizationsAccessReportResponse#NumberOfServicesAccessible
   */
  readonly numberOfServicesAccessible?: number;

  /**
   * @schema GetOrganizationsAccessReportResponse#NumberOfServicesNotAccessed
   */
  readonly numberOfServicesNotAccessed?: number;

  /**
   * @schema GetOrganizationsAccessReportResponse#AccessDetails
   */
  readonly accessDetails?: AccessDetail[];

  /**
   * @schema GetOrganizationsAccessReportResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema GetOrganizationsAccessReportResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema GetOrganizationsAccessReportResponse#ErrorDetails
   */
  readonly errorDetails?: ErrorDetails;

}

/**
 * @schema GetPolicyRequest
 */
export interface GetPolicyRequest {
  /**
   * @schema GetPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema GetPolicyResponse
 */
export interface GetPolicyResponse {
  /**
   * @schema GetPolicyResponse#Policy
   */
  readonly policy?: Policy;

}

/**
 * @schema GetPolicyVersionRequest
 */
export interface GetPolicyVersionRequest {
  /**
   * @schema GetPolicyVersionRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema GetPolicyVersionRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema GetPolicyVersionResponse
 */
export interface GetPolicyVersionResponse {
  /**
   * @schema GetPolicyVersionResponse#PolicyVersion
   */
  readonly policyVersion?: PolicyVersion;

}

/**
 * @schema GetRoleRequest
 */
export interface GetRoleRequest {
  /**
   * @schema GetRoleRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema GetRoleResponse
 */
export interface GetRoleResponse {
  /**
   * @schema GetRoleResponse#Role
   */
  readonly role: Role;

}

/**
 * @schema GetRolePolicyRequest
 */
export interface GetRolePolicyRequest {
  /**
   * @schema GetRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema GetRolePolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema GetRolePolicyResponse
 */
export interface GetRolePolicyResponse {
  /**
   * @schema GetRolePolicyResponse#RoleName
   */
  readonly roleName: string;

  /**
   * @schema GetRolePolicyResponse#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema GetRolePolicyResponse#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema GetSamlProviderRequest
 */
export interface GetSamlProviderRequest {
  /**
   * @schema GetSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn: string;

}

/**
 * @schema GetSamlProviderResponse
 */
export interface GetSamlProviderResponse {
  /**
   * @schema GetSamlProviderResponse#SAMLMetadataDocument
   */
  readonly samlMetadataDocument?: string;

  /**
   * @schema GetSamlProviderResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema GetSamlProviderResponse#ValidUntil
   */
  readonly validUntil?: string;

}

/**
 * @schema GetSshPublicKeyRequest
 */
export interface GetSshPublicKeyRequest {
  /**
   * @schema GetSshPublicKeyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema GetSshPublicKeyRequest#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema GetSshPublicKeyRequest#Encoding
   */
  readonly encoding: string;

}

/**
 * @schema GetSshPublicKeyResponse
 */
export interface GetSshPublicKeyResponse {
  /**
   * @schema GetSshPublicKeyResponse#SSHPublicKey
   */
  readonly sshPublicKey?: SshPublicKey;

}

/**
 * @schema GetServerCertificateRequest
 */
export interface GetServerCertificateRequest {
  /**
   * @schema GetServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName: string;

}

/**
 * @schema GetServerCertificateResponse
 */
export interface GetServerCertificateResponse {
  /**
   * @schema GetServerCertificateResponse#ServerCertificate
   */
  readonly serverCertificate: ServerCertificate;

}

/**
 * @schema GetServiceLastAccessedDetailsRequest
 */
export interface GetServiceLastAccessedDetailsRequest {
  /**
   * @schema GetServiceLastAccessedDetailsRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetServiceLastAccessedDetailsRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema GetServiceLastAccessedDetailsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetServiceLastAccessedDetailsResponse
 */
export interface GetServiceLastAccessedDetailsResponse {
  /**
   * @schema GetServiceLastAccessedDetailsResponse#JobStatus
   */
  readonly jobStatus: string;

  /**
   * @schema GetServiceLastAccessedDetailsResponse#JobType
   */
  readonly jobType?: string;

  /**
   * @schema GetServiceLastAccessedDetailsResponse#JobCreationDate
   */
  readonly jobCreationDate: string;

  /**
   * @schema GetServiceLastAccessedDetailsResponse#ServicesLastAccessed
   */
  readonly servicesLastAccessed: ServiceLastAccessed[];

  /**
   * @schema GetServiceLastAccessedDetailsResponse#JobCompletionDate
   */
  readonly jobCompletionDate: string;

  /**
   * @schema GetServiceLastAccessedDetailsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema GetServiceLastAccessedDetailsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema GetServiceLastAccessedDetailsResponse#Error
   */
  readonly error?: ErrorDetails;

}

/**
 * @schema GetServiceLastAccessedDetailsWithEntitiesRequest
 */
export interface GetServiceLastAccessedDetailsWithEntitiesRequest {
  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema GetServiceLastAccessedDetailsWithEntitiesResponse
 */
export interface GetServiceLastAccessedDetailsWithEntitiesResponse {
  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesResponse#JobStatus
   */
  readonly jobStatus: string;

  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesResponse#JobCreationDate
   */
  readonly jobCreationDate: string;

  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesResponse#JobCompletionDate
   */
  readonly jobCompletionDate: string;

  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesResponse#EntityDetailsList
   */
  readonly entityDetailsList: EntityDetails[];

  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema GetServiceLastAccessedDetailsWithEntitiesResponse#Error
   */
  readonly error?: ErrorDetails;

}

/**
 * @schema GetServiceLinkedRoleDeletionStatusRequest
 */
export interface GetServiceLinkedRoleDeletionStatusRequest {
  /**
   * @schema GetServiceLinkedRoleDeletionStatusRequest#DeletionTaskId
   */
  readonly deletionTaskId: string;

}

/**
 * @schema GetServiceLinkedRoleDeletionStatusResponse
 */
export interface GetServiceLinkedRoleDeletionStatusResponse {
  /**
   * @schema GetServiceLinkedRoleDeletionStatusResponse#Status
   */
  readonly status: string;

  /**
   * @schema GetServiceLinkedRoleDeletionStatusResponse#Reason
   */
  readonly reason?: DeletionTaskFailureReasonType;

}

/**
 * @schema GetUserRequest
 */
export interface GetUserRequest {
  /**
   * @schema GetUserRequest#UserName
   */
  readonly userName?: string;

}

/**
 * @schema GetUserResponse
 */
export interface GetUserResponse {
  /**
   * @schema GetUserResponse#User
   */
  readonly user: User;

}

/**
 * @schema GetUserPolicyRequest
 */
export interface GetUserPolicyRequest {
  /**
   * @schema GetUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema GetUserPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema GetUserPolicyResponse
 */
export interface GetUserPolicyResponse {
  /**
   * @schema GetUserPolicyResponse#UserName
   */
  readonly userName: string;

  /**
   * @schema GetUserPolicyResponse#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema GetUserPolicyResponse#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema ListAccessKeysRequest
 */
export interface ListAccessKeysRequest {
  /**
   * @schema ListAccessKeysRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema ListAccessKeysRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListAccessKeysRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListAccessKeysResponse
 */
export interface ListAccessKeysResponse {
  /**
   * @schema ListAccessKeysResponse#AccessKeyMetadata
   */
  readonly accessKeyMetadata: AccessKeyMetadata[];

  /**
   * @schema ListAccessKeysResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListAccessKeysResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListAccountAliasesRequest
 */
export interface ListAccountAliasesRequest {
  /**
   * @schema ListAccountAliasesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListAccountAliasesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListAccountAliasesResponse
 */
export interface ListAccountAliasesResponse {
  /**
   * @schema ListAccountAliasesResponse#AccountAliases
   */
  readonly accountAliases: string[];

  /**
   * @schema ListAccountAliasesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListAccountAliasesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListAttachedGroupPoliciesRequest
 */
export interface ListAttachedGroupPoliciesRequest {
  /**
   * @schema ListAttachedGroupPoliciesRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema ListAttachedGroupPoliciesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListAttachedGroupPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListAttachedGroupPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListAttachedGroupPoliciesResponse
 */
export interface ListAttachedGroupPoliciesResponse {
  /**
   * @schema ListAttachedGroupPoliciesResponse#AttachedPolicies
   */
  readonly attachedPolicies?: AttachedPolicy[];

  /**
   * @schema ListAttachedGroupPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListAttachedGroupPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListAttachedRolePoliciesRequest
 */
export interface ListAttachedRolePoliciesRequest {
  /**
   * @schema ListAttachedRolePoliciesRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema ListAttachedRolePoliciesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListAttachedRolePoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListAttachedRolePoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListAttachedRolePoliciesResponse
 */
export interface ListAttachedRolePoliciesResponse {
  /**
   * @schema ListAttachedRolePoliciesResponse#AttachedPolicies
   */
  readonly attachedPolicies?: AttachedPolicy[];

  /**
   * @schema ListAttachedRolePoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListAttachedRolePoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListAttachedUserPoliciesRequest
 */
export interface ListAttachedUserPoliciesRequest {
  /**
   * @schema ListAttachedUserPoliciesRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema ListAttachedUserPoliciesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListAttachedUserPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListAttachedUserPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListAttachedUserPoliciesResponse
 */
export interface ListAttachedUserPoliciesResponse {
  /**
   * @schema ListAttachedUserPoliciesResponse#AttachedPolicies
   */
  readonly attachedPolicies?: AttachedPolicy[];

  /**
   * @schema ListAttachedUserPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListAttachedUserPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListEntitiesForPolicyRequest
 */
export interface ListEntitiesForPolicyRequest {
  /**
   * @schema ListEntitiesForPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema ListEntitiesForPolicyRequest#EntityFilter
   */
  readonly entityFilter?: string;

  /**
   * @schema ListEntitiesForPolicyRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListEntitiesForPolicyRequest#PolicyUsageFilter
   */
  readonly policyUsageFilter?: string;

  /**
   * @schema ListEntitiesForPolicyRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListEntitiesForPolicyRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListEntitiesForPolicyResponse
 */
export interface ListEntitiesForPolicyResponse {
  /**
   * @schema ListEntitiesForPolicyResponse#PolicyGroups
   */
  readonly policyGroups?: PolicyGroup[];

  /**
   * @schema ListEntitiesForPolicyResponse#PolicyUsers
   */
  readonly policyUsers?: PolicyUser[];

  /**
   * @schema ListEntitiesForPolicyResponse#PolicyRoles
   */
  readonly policyRoles?: PolicyRole[];

  /**
   * @schema ListEntitiesForPolicyResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListEntitiesForPolicyResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListGroupPoliciesRequest
 */
export interface ListGroupPoliciesRequest {
  /**
   * @schema ListGroupPoliciesRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema ListGroupPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListGroupPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListGroupPoliciesResponse
 */
export interface ListGroupPoliciesResponse {
  /**
   * @schema ListGroupPoliciesResponse#PolicyNames
   */
  readonly policyNames: string[];

  /**
   * @schema ListGroupPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListGroupPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListGroupsRequest
 */
export interface ListGroupsRequest {
  /**
   * @schema ListGroupsRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListGroupsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListGroupsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListGroupsResponse
 */
export interface ListGroupsResponse {
  /**
   * @schema ListGroupsResponse#Groups
   */
  readonly groups: Group[];

  /**
   * @schema ListGroupsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListGroupsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListGroupsForUserRequest
 */
export interface ListGroupsForUserRequest {
  /**
   * @schema ListGroupsForUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema ListGroupsForUserRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListGroupsForUserRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListGroupsForUserResponse
 */
export interface ListGroupsForUserResponse {
  /**
   * @schema ListGroupsForUserResponse#Groups
   */
  readonly groups: Group[];

  /**
   * @schema ListGroupsForUserResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListGroupsForUserResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListInstanceProfilesRequest
 */
export interface ListInstanceProfilesRequest {
  /**
   * @schema ListInstanceProfilesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListInstanceProfilesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListInstanceProfilesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListInstanceProfilesResponse
 */
export interface ListInstanceProfilesResponse {
  /**
   * @schema ListInstanceProfilesResponse#InstanceProfiles
   */
  readonly instanceProfiles: InstanceProfile[];

  /**
   * @schema ListInstanceProfilesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListInstanceProfilesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListInstanceProfilesForRoleRequest
 */
export interface ListInstanceProfilesForRoleRequest {
  /**
   * @schema ListInstanceProfilesForRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema ListInstanceProfilesForRoleRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListInstanceProfilesForRoleRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListInstanceProfilesForRoleResponse
 */
export interface ListInstanceProfilesForRoleResponse {
  /**
   * @schema ListInstanceProfilesForRoleResponse#InstanceProfiles
   */
  readonly instanceProfiles: InstanceProfile[];

  /**
   * @schema ListInstanceProfilesForRoleResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListInstanceProfilesForRoleResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListMfaDevicesRequest
 */
export interface ListMfaDevicesRequest {
  /**
   * @schema ListMfaDevicesRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema ListMfaDevicesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListMfaDevicesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListMfaDevicesResponse
 */
export interface ListMfaDevicesResponse {
  /**
   * @schema ListMfaDevicesResponse#MFADevices
   */
  readonly mfaDevices: MfaDevice[];

  /**
   * @schema ListMfaDevicesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListMfaDevicesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListOpenIdConnectProvidersRequest
 */
export interface ListOpenIdConnectProvidersRequest {
}

/**
 * @schema ListOpenIdConnectProvidersResponse
 */
export interface ListOpenIdConnectProvidersResponse {
  /**
   * @schema ListOpenIdConnectProvidersResponse#OpenIDConnectProviderList
   */
  readonly openIdConnectProviderList?: OpenIdConnectProviderListEntry[];

}

/**
 * @schema ListPoliciesRequest
 */
export interface ListPoliciesRequest {
  /**
   * @schema ListPoliciesRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema ListPoliciesRequest#OnlyAttached
   */
  readonly onlyAttached?: boolean;

  /**
   * @schema ListPoliciesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListPoliciesRequest#PolicyUsageFilter
   */
  readonly policyUsageFilter?: string;

  /**
   * @schema ListPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListPoliciesResponse
 */
export interface ListPoliciesResponse {
  /**
   * @schema ListPoliciesResponse#Policies
   */
  readonly policies?: Policy[];

  /**
   * @schema ListPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListPoliciesGrantingServiceAccessRequest
 */
export interface ListPoliciesGrantingServiceAccessRequest {
  /**
   * @schema ListPoliciesGrantingServiceAccessRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListPoliciesGrantingServiceAccessRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema ListPoliciesGrantingServiceAccessRequest#ServiceNamespaces
   */
  readonly serviceNamespaces: string[];

}

/**
 * @schema ListPoliciesGrantingServiceAccessResponse
 */
export interface ListPoliciesGrantingServiceAccessResponse {
  /**
   * @schema ListPoliciesGrantingServiceAccessResponse#PoliciesGrantingServiceAccess
   */
  readonly policiesGrantingServiceAccess: ListPoliciesGrantingServiceAccessEntry[];

  /**
   * @schema ListPoliciesGrantingServiceAccessResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListPoliciesGrantingServiceAccessResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListPolicyVersionsRequest
 */
export interface ListPolicyVersionsRequest {
  /**
   * @schema ListPolicyVersionsRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema ListPolicyVersionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListPolicyVersionsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListPolicyVersionsResponse
 */
export interface ListPolicyVersionsResponse {
  /**
   * @schema ListPolicyVersionsResponse#Versions
   */
  readonly versions?: PolicyVersion[];

  /**
   * @schema ListPolicyVersionsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListPolicyVersionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListRolePoliciesRequest
 */
export interface ListRolePoliciesRequest {
  /**
   * @schema ListRolePoliciesRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema ListRolePoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListRolePoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListRolePoliciesResponse
 */
export interface ListRolePoliciesResponse {
  /**
   * @schema ListRolePoliciesResponse#PolicyNames
   */
  readonly policyNames: string[];

  /**
   * @schema ListRolePoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListRolePoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListRoleTagsRequest
 */
export interface ListRoleTagsRequest {
  /**
   * @schema ListRoleTagsRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema ListRoleTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListRoleTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListRoleTagsResponse
 */
export interface ListRoleTagsResponse {
  /**
   * @schema ListRoleTagsResponse#Tags
   */
  readonly tags: Tag[];

  /**
   * @schema ListRoleTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListRoleTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListRolesRequest
 */
export interface ListRolesRequest {
  /**
   * @schema ListRolesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListRolesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListRolesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListRolesResponse
 */
export interface ListRolesResponse {
  /**
   * @schema ListRolesResponse#Roles
   */
  readonly roles: Role[];

  /**
   * @schema ListRolesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListRolesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListSamlProvidersRequest
 */
export interface ListSamlProvidersRequest {
}

/**
 * @schema ListSamlProvidersResponse
 */
export interface ListSamlProvidersResponse {
  /**
   * @schema ListSamlProvidersResponse#SAMLProviderList
   */
  readonly samlProviderList?: SamlProviderListEntry[];

}

/**
 * @schema ListSshPublicKeysRequest
 */
export interface ListSshPublicKeysRequest {
  /**
   * @schema ListSshPublicKeysRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema ListSshPublicKeysRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListSshPublicKeysRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListSshPublicKeysResponse
 */
export interface ListSshPublicKeysResponse {
  /**
   * @schema ListSshPublicKeysResponse#SSHPublicKeys
   */
  readonly sshPublicKeys?: SshPublicKeyMetadata[];

  /**
   * @schema ListSshPublicKeysResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListSshPublicKeysResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListServerCertificatesRequest
 */
export interface ListServerCertificatesRequest {
  /**
   * @schema ListServerCertificatesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListServerCertificatesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListServerCertificatesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListServerCertificatesResponse
 */
export interface ListServerCertificatesResponse {
  /**
   * @schema ListServerCertificatesResponse#ServerCertificateMetadataList
   */
  readonly serverCertificateMetadataList: ServerCertificateMetadata[];

  /**
   * @schema ListServerCertificatesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListServerCertificatesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListServiceSpecificCredentialsRequest
 */
export interface ListServiceSpecificCredentialsRequest {
  /**
   * @schema ListServiceSpecificCredentialsRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema ListServiceSpecificCredentialsRequest#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * @schema ListServiceSpecificCredentialsResponse
 */
export interface ListServiceSpecificCredentialsResponse {
  /**
   * @schema ListServiceSpecificCredentialsResponse#ServiceSpecificCredentials
   */
  readonly serviceSpecificCredentials?: ServiceSpecificCredentialMetadata[];

}

/**
 * @schema ListSigningCertificatesRequest
 */
export interface ListSigningCertificatesRequest {
  /**
   * @schema ListSigningCertificatesRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema ListSigningCertificatesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListSigningCertificatesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListSigningCertificatesResponse
 */
export interface ListSigningCertificatesResponse {
  /**
   * @schema ListSigningCertificatesResponse#Certificates
   */
  readonly certificates: SigningCertificate[];

  /**
   * @schema ListSigningCertificatesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListSigningCertificatesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListUserPoliciesRequest
 */
export interface ListUserPoliciesRequest {
  /**
   * @schema ListUserPoliciesRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema ListUserPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListUserPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListUserPoliciesResponse
 */
export interface ListUserPoliciesResponse {
  /**
   * @schema ListUserPoliciesResponse#PolicyNames
   */
  readonly policyNames: string[];

  /**
   * @schema ListUserPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListUserPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListUserTagsRequest
 */
export interface ListUserTagsRequest {
  /**
   * @schema ListUserTagsRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema ListUserTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListUserTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListUserTagsResponse
 */
export interface ListUserTagsResponse {
  /**
   * @schema ListUserTagsResponse#Tags
   */
  readonly tags: Tag[];

  /**
   * @schema ListUserTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListUserTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListUsersRequest
 */
export interface ListUsersRequest {
  /**
   * @schema ListUsersRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema ListUsersRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListUsersRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListUsersResponse
 */
export interface ListUsersResponse {
  /**
   * @schema ListUsersResponse#Users
   */
  readonly users: User[];

  /**
   * @schema ListUsersResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListUsersResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListVirtualMfaDevicesRequest
 */
export interface ListVirtualMfaDevicesRequest {
  /**
   * @schema ListVirtualMfaDevicesRequest#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema ListVirtualMfaDevicesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListVirtualMfaDevicesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListVirtualMfaDevicesResponse
 */
export interface ListVirtualMfaDevicesResponse {
  /**
   * @schema ListVirtualMfaDevicesResponse#VirtualMFADevices
   */
  readonly virtualMfaDevices: VirtualMfaDevice[];

  /**
   * @schema ListVirtualMfaDevicesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListVirtualMfaDevicesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema PutGroupPolicyRequest
 */
export interface PutGroupPolicyRequest {
  /**
   * @schema PutGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema PutGroupPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema PutGroupPolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema PutRolePermissionsBoundaryRequest
 */
export interface PutRolePermissionsBoundaryRequest {
  /**
   * @schema PutRolePermissionsBoundaryRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema PutRolePermissionsBoundaryRequest#PermissionsBoundary
   */
  readonly permissionsBoundary: string;

}

/**
 * @schema PutRolePolicyRequest
 */
export interface PutRolePolicyRequest {
  /**
   * @schema PutRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema PutRolePolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema PutRolePolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema PutUserPermissionsBoundaryRequest
 */
export interface PutUserPermissionsBoundaryRequest {
  /**
   * @schema PutUserPermissionsBoundaryRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema PutUserPermissionsBoundaryRequest#PermissionsBoundary
   */
  readonly permissionsBoundary: string;

}

/**
 * @schema PutUserPolicyRequest
 */
export interface PutUserPolicyRequest {
  /**
   * @schema PutUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema PutUserPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema PutUserPolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema RemoveClientIdFromOpenIdConnectProviderRequest
 */
export interface RemoveClientIdFromOpenIdConnectProviderRequest {
  /**
   * @schema RemoveClientIdFromOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

  /**
   * @schema RemoveClientIdFromOpenIdConnectProviderRequest#ClientID
   */
  readonly clientId: string;

}

/**
 * @schema RemoveRoleFromInstanceProfileRequest
 */
export interface RemoveRoleFromInstanceProfileRequest {
  /**
   * @schema RemoveRoleFromInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema RemoveRoleFromInstanceProfileRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema RemoveUserFromGroupRequest
 */
export interface RemoveUserFromGroupRequest {
  /**
   * @schema RemoveUserFromGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema RemoveUserFromGroupRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema ResetServiceSpecificCredentialRequest
 */
export interface ResetServiceSpecificCredentialRequest {
  /**
   * @schema ResetServiceSpecificCredentialRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema ResetServiceSpecificCredentialRequest#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

}

/**
 * @schema ResetServiceSpecificCredentialResponse
 */
export interface ResetServiceSpecificCredentialResponse {
  /**
   * @schema ResetServiceSpecificCredentialResponse#ServiceSpecificCredential
   */
  readonly serviceSpecificCredential?: ServiceSpecificCredential;

}

/**
 * @schema ResyncMfaDeviceRequest
 */
export interface ResyncMfaDeviceRequest {
  /**
   * @schema ResyncMfaDeviceRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema ResyncMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber: string;

  /**
   * @schema ResyncMfaDeviceRequest#AuthenticationCode1
   */
  readonly authenticationCode1: string;

  /**
   * @schema ResyncMfaDeviceRequest#AuthenticationCode2
   */
  readonly authenticationCode2: string;

}

/**
 * @schema SetDefaultPolicyVersionRequest
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * @schema SetDefaultPolicyVersionRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema SetDefaultPolicyVersionRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema SetSecurityTokenServicePreferencesRequest
 */
export interface SetSecurityTokenServicePreferencesRequest {
  /**
   * @schema SetSecurityTokenServicePreferencesRequest#GlobalEndpointTokenVersion
   */
  readonly globalEndpointTokenVersion: string;

}

/**
 * @schema SimulateCustomPolicyRequest
 */
export interface SimulateCustomPolicyRequest {
  /**
   * @schema SimulateCustomPolicyRequest#PolicyInputList
   */
  readonly policyInputList: string[];

  /**
   * @schema SimulateCustomPolicyRequest#PermissionsBoundaryPolicyInputList
   */
  readonly permissionsBoundaryPolicyInputList?: string[];

  /**
   * @schema SimulateCustomPolicyRequest#ActionNames
   */
  readonly actionNames: string[];

  /**
   * @schema SimulateCustomPolicyRequest#ResourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema SimulateCustomPolicyRequest#ResourcePolicy
   */
  readonly resourcePolicy?: string;

  /**
   * @schema SimulateCustomPolicyRequest#ResourceOwner
   */
  readonly resourceOwner?: string;

  /**
   * @schema SimulateCustomPolicyRequest#CallerArn
   */
  readonly callerArn?: string;

  /**
   * @schema SimulateCustomPolicyRequest#ContextEntries
   */
  readonly contextEntries?: ContextEntry[];

  /**
   * @schema SimulateCustomPolicyRequest#ResourceHandlingOption
   */
  readonly resourceHandlingOption?: string;

  /**
   * @schema SimulateCustomPolicyRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema SimulateCustomPolicyRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema SimulatePolicyResponse
 */
export interface SimulatePolicyResponse {
  /**
   * @schema SimulatePolicyResponse#EvaluationResults
   */
  readonly evaluationResults?: EvaluationResult[];

  /**
   * @schema SimulatePolicyResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema SimulatePolicyResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema SimulatePrincipalPolicyRequest
 */
export interface SimulatePrincipalPolicyRequest {
  /**
   * @schema SimulatePrincipalPolicyRequest#PolicySourceArn
   */
  readonly policySourceArn: string;

  /**
   * @schema SimulatePrincipalPolicyRequest#PolicyInputList
   */
  readonly policyInputList?: string[];

  /**
   * @schema SimulatePrincipalPolicyRequest#PermissionsBoundaryPolicyInputList
   */
  readonly permissionsBoundaryPolicyInputList?: string[];

  /**
   * @schema SimulatePrincipalPolicyRequest#ActionNames
   */
  readonly actionNames: string[];

  /**
   * @schema SimulatePrincipalPolicyRequest#ResourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema SimulatePrincipalPolicyRequest#ResourcePolicy
   */
  readonly resourcePolicy?: string;

  /**
   * @schema SimulatePrincipalPolicyRequest#ResourceOwner
   */
  readonly resourceOwner?: string;

  /**
   * @schema SimulatePrincipalPolicyRequest#CallerArn
   */
  readonly callerArn?: string;

  /**
   * @schema SimulatePrincipalPolicyRequest#ContextEntries
   */
  readonly contextEntries?: ContextEntry[];

  /**
   * @schema SimulatePrincipalPolicyRequest#ResourceHandlingOption
   */
  readonly resourceHandlingOption?: string;

  /**
   * @schema SimulatePrincipalPolicyRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema SimulatePrincipalPolicyRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema TagRoleRequest
 */
export interface TagRoleRequest {
  /**
   * @schema TagRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema TagRoleRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagUserRequest
 */
export interface TagUserRequest {
  /**
   * @schema TagUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema TagUserRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema UntagRoleRequest
 */
export interface UntagRoleRequest {
  /**
   * @schema UntagRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema UntagRoleRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagUserRequest
 */
export interface UntagUserRequest {
  /**
   * @schema UntagUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema UntagUserRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateAccessKeyRequest
 */
export interface UpdateAccessKeyRequest {
  /**
   * @schema UpdateAccessKeyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema UpdateAccessKeyRequest#AccessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema UpdateAccessKeyRequest#Status
   */
  readonly status: string;

}

/**
 * @schema UpdateAccountPasswordPolicyRequest
 */
export interface UpdateAccountPasswordPolicyRequest {
  /**
   * @schema UpdateAccountPasswordPolicyRequest#MinimumPasswordLength
   */
  readonly minimumPasswordLength?: number;

  /**
   * @schema UpdateAccountPasswordPolicyRequest#RequireSymbols
   */
  readonly requireSymbols?: boolean;

  /**
   * @schema UpdateAccountPasswordPolicyRequest#RequireNumbers
   */
  readonly requireNumbers?: boolean;

  /**
   * @schema UpdateAccountPasswordPolicyRequest#RequireUppercaseCharacters
   */
  readonly requireUppercaseCharacters?: boolean;

  /**
   * @schema UpdateAccountPasswordPolicyRequest#RequireLowercaseCharacters
   */
  readonly requireLowercaseCharacters?: boolean;

  /**
   * @schema UpdateAccountPasswordPolicyRequest#AllowUsersToChangePassword
   */
  readonly allowUsersToChangePassword?: boolean;

  /**
   * @schema UpdateAccountPasswordPolicyRequest#MaxPasswordAge
   */
  readonly maxPasswordAge?: number;

  /**
   * @schema UpdateAccountPasswordPolicyRequest#PasswordReusePrevention
   */
  readonly passwordReusePrevention?: number;

  /**
   * @schema UpdateAccountPasswordPolicyRequest#HardExpiry
   */
  readonly hardExpiry?: boolean;

}

/**
 * @schema UpdateAssumeRolePolicyRequest
 */
export interface UpdateAssumeRolePolicyRequest {
  /**
   * @schema UpdateAssumeRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema UpdateAssumeRolePolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema UpdateGroupRequest
 */
export interface UpdateGroupRequest {
  /**
   * @schema UpdateGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema UpdateGroupRequest#NewPath
   */
  readonly newPath?: string;

  /**
   * @schema UpdateGroupRequest#NewGroupName
   */
  readonly newGroupName?: string;

}

/**
 * @schema UpdateLoginProfileRequest
 */
export interface UpdateLoginProfileRequest {
  /**
   * @schema UpdateLoginProfileRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema UpdateLoginProfileRequest#Password
   */
  readonly password?: string;

  /**
   * @schema UpdateLoginProfileRequest#PasswordResetRequired
   */
  readonly passwordResetRequired?: boolean;

}

/**
 * @schema UpdateOpenIdConnectProviderThumbprintRequest
 */
export interface UpdateOpenIdConnectProviderThumbprintRequest {
  /**
   * @schema UpdateOpenIdConnectProviderThumbprintRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

  /**
   * @schema UpdateOpenIdConnectProviderThumbprintRequest#ThumbprintList
   */
  readonly thumbprintList: string[];

}

/**
 * @schema UpdateRoleRequest
 */
export interface UpdateRoleRequest {
  /**
   * @schema UpdateRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema UpdateRoleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateRoleRequest#MaxSessionDuration
   */
  readonly maxSessionDuration?: number;

}

/**
 * @schema UpdateRoleResponse
 */
export interface UpdateRoleResponse {
}

/**
 * @schema UpdateRoleDescriptionRequest
 */
export interface UpdateRoleDescriptionRequest {
  /**
   * @schema UpdateRoleDescriptionRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema UpdateRoleDescriptionRequest#Description
   */
  readonly description: string;

}

/**
 * @schema UpdateRoleDescriptionResponse
 */
export interface UpdateRoleDescriptionResponse {
  /**
   * @schema UpdateRoleDescriptionResponse#Role
   */
  readonly role?: Role;

}

/**
 * @schema UpdateSamlProviderRequest
 */
export interface UpdateSamlProviderRequest {
  /**
   * @schema UpdateSamlProviderRequest#SAMLMetadataDocument
   */
  readonly samlMetadataDocument: string;

  /**
   * @schema UpdateSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn: string;

}

/**
 * @schema UpdateSamlProviderResponse
 */
export interface UpdateSamlProviderResponse {
  /**
   * @schema UpdateSamlProviderResponse#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

}

/**
 * @schema UpdateSshPublicKeyRequest
 */
export interface UpdateSshPublicKeyRequest {
  /**
   * @schema UpdateSshPublicKeyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema UpdateSshPublicKeyRequest#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema UpdateSshPublicKeyRequest#Status
   */
  readonly status: string;

}

/**
 * @schema UpdateServerCertificateRequest
 */
export interface UpdateServerCertificateRequest {
  /**
   * @schema UpdateServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName: string;

  /**
   * @schema UpdateServerCertificateRequest#NewPath
   */
  readonly newPath?: string;

  /**
   * @schema UpdateServerCertificateRequest#NewServerCertificateName
   */
  readonly newServerCertificateName?: string;

}

/**
 * @schema UpdateServiceSpecificCredentialRequest
 */
export interface UpdateServiceSpecificCredentialRequest {
  /**
   * @schema UpdateServiceSpecificCredentialRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema UpdateServiceSpecificCredentialRequest#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

  /**
   * @schema UpdateServiceSpecificCredentialRequest#Status
   */
  readonly status: string;

}

/**
 * @schema UpdateSigningCertificateRequest
 */
export interface UpdateSigningCertificateRequest {
  /**
   * @schema UpdateSigningCertificateRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema UpdateSigningCertificateRequest#CertificateId
   */
  readonly certificateId: string;

  /**
   * @schema UpdateSigningCertificateRequest#Status
   */
  readonly status: string;

}

/**
 * @schema UpdateUserRequest
 */
export interface UpdateUserRequest {
  /**
   * @schema UpdateUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema UpdateUserRequest#NewPath
   */
  readonly newPath?: string;

  /**
   * @schema UpdateUserRequest#NewUserName
   */
  readonly newUserName?: string;

}

/**
 * @schema UploadSshPublicKeyRequest
 */
export interface UploadSshPublicKeyRequest {
  /**
   * @schema UploadSshPublicKeyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema UploadSshPublicKeyRequest#SSHPublicKeyBody
   */
  readonly sshPublicKeyBody: string;

}

/**
 * @schema UploadSshPublicKeyResponse
 */
export interface UploadSshPublicKeyResponse {
  /**
   * @schema UploadSshPublicKeyResponse#SSHPublicKey
   */
  readonly sshPublicKey?: SshPublicKey;

}

/**
 * @schema UploadServerCertificateRequest
 */
export interface UploadServerCertificateRequest {
  /**
   * @schema UploadServerCertificateRequest#Path
   */
  readonly path?: string;

  /**
   * @schema UploadServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName: string;

  /**
   * @schema UploadServerCertificateRequest#CertificateBody
   */
  readonly certificateBody: string;

  /**
   * @schema UploadServerCertificateRequest#PrivateKey
   */
  readonly privateKey: string;

  /**
   * @schema UploadServerCertificateRequest#CertificateChain
   */
  readonly certificateChain?: string;

}

/**
 * @schema UploadServerCertificateResponse
 */
export interface UploadServerCertificateResponse {
  /**
   * @schema UploadServerCertificateResponse#ServerCertificateMetadata
   */
  readonly serverCertificateMetadata?: ServerCertificateMetadata;

}

/**
 * @schema UploadSigningCertificateRequest
 */
export interface UploadSigningCertificateRequest {
  /**
   * @schema UploadSigningCertificateRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema UploadSigningCertificateRequest#CertificateBody
   */
  readonly certificateBody: string;

}

/**
 * @schema UploadSigningCertificateResponse
 */
export interface UploadSigningCertificateResponse {
  /**
   * @schema UploadSigningCertificateResponse#Certificate
   */
  readonly certificate: SigningCertificate;

}

/**
 * @schema AccessKey
 */
export interface AccessKey {
  /**
   * @schema AccessKey#UserName
   */
  readonly userName: string;

  /**
   * @schema AccessKey#AccessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema AccessKey#Status
   */
  readonly status: string;

  /**
   * @schema AccessKey#SecretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema AccessKey#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema Group
 */
export interface Group {
  /**
   * @schema Group#Path
   */
  readonly path: string;

  /**
   * @schema Group#GroupName
   */
  readonly groupName: string;

  /**
   * @schema Group#GroupId
   */
  readonly groupId: string;

  /**
   * @schema Group#Arn
   */
  readonly arn: string;

  /**
   * @schema Group#CreateDate
   */
  readonly createDate: string;

}

/**
 * @schema InstanceProfile
 */
export interface InstanceProfile {
  /**
   * @schema InstanceProfile#Path
   */
  readonly path: string;

  /**
   * @schema InstanceProfile#InstanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema InstanceProfile#InstanceProfileId
   */
  readonly instanceProfileId: string;

  /**
   * @schema InstanceProfile#Arn
   */
  readonly arn: string;

  /**
   * @schema InstanceProfile#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema InstanceProfile#Roles
   */
  readonly roles: Role[];

}

/**
 * @schema LoginProfile
 */
export interface LoginProfile {
  /**
   * @schema LoginProfile#UserName
   */
  readonly userName: string;

  /**
   * @schema LoginProfile#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema LoginProfile#PasswordResetRequired
   */
  readonly passwordResetRequired?: boolean;

}

/**
 * @schema Policy
 */
export interface Policy {
  /**
   * @schema Policy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema Policy#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema Policy#Arn
   */
  readonly arn?: string;

  /**
   * @schema Policy#Path
   */
  readonly path?: string;

  /**
   * @schema Policy#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema Policy#AttachmentCount
   */
  readonly attachmentCount?: number;

  /**
   * @schema Policy#PermissionsBoundaryUsageCount
   */
  readonly permissionsBoundaryUsageCount?: number;

  /**
   * @schema Policy#IsAttachable
   */
  readonly isAttachable?: boolean;

  /**
   * @schema Policy#Description
   */
  readonly description?: string;

  /**
   * @schema Policy#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Policy#UpdateDate
   */
  readonly updateDate?: string;

}

/**
 * @schema PolicyVersion
 */
export interface PolicyVersion {
  /**
   * @schema PolicyVersion#Document
   */
  readonly document?: string;

  /**
   * @schema PolicyVersion#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema PolicyVersion#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema PolicyVersion#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema Role
 */
export interface Role {
  /**
   * @schema Role#Path
   */
  readonly path: string;

  /**
   * @schema Role#RoleName
   */
  readonly roleName: string;

  /**
   * @schema Role#RoleId
   */
  readonly roleId: string;

  /**
   * @schema Role#Arn
   */
  readonly arn: string;

  /**
   * @schema Role#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema Role#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema Role#Description
   */
  readonly description?: string;

  /**
   * @schema Role#MaxSessionDuration
   */
  readonly maxSessionDuration?: number;

  /**
   * @schema Role#PermissionsBoundary
   */
  readonly permissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * @schema Role#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Role#RoleLastUsed
   */
  readonly roleLastUsed?: RoleLastUsed;

}

/**
 * @schema ServiceSpecificCredential
 */
export interface ServiceSpecificCredential {
  /**
   * @schema ServiceSpecificCredential#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema ServiceSpecificCredential#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema ServiceSpecificCredential#ServiceUserName
   */
  readonly serviceUserName: string;

  /**
   * @schema ServiceSpecificCredential#ServicePassword
   */
  readonly servicePassword: string;

  /**
   * @schema ServiceSpecificCredential#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

  /**
   * @schema ServiceSpecificCredential#UserName
   */
  readonly userName: string;

  /**
   * @schema ServiceSpecificCredential#Status
   */
  readonly status: string;

}

/**
 * @schema User
 */
export interface User {
  /**
   * @schema User#Path
   */
  readonly path: string;

  /**
   * @schema User#UserName
   */
  readonly userName: string;

  /**
   * @schema User#UserId
   */
  readonly userId: string;

  /**
   * @schema User#Arn
   */
  readonly arn: string;

  /**
   * @schema User#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema User#PasswordLastUsed
   */
  readonly passwordLastUsed?: string;

  /**
   * @schema User#PermissionsBoundary
   */
  readonly permissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * @schema User#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema VirtualMfaDevice
 */
export interface VirtualMfaDevice {
  /**
   * @schema VirtualMfaDevice#SerialNumber
   */
  readonly serialNumber: string;

  /**
   * @schema VirtualMfaDevice#Base32StringSeed
   */
  readonly base32StringSeed?: any;

  /**
   * @schema VirtualMfaDevice#QRCodePNG
   */
  readonly qrCodePng?: any;

  /**
   * @schema VirtualMfaDevice#User
   */
  readonly user?: User;

  /**
   * @schema VirtualMfaDevice#EnableDate
   */
  readonly enableDate?: string;

}

/**
 * @schema AccessKeyLastUsed
 */
export interface AccessKeyLastUsed {
  /**
   * @schema AccessKeyLastUsed#LastUsedDate
   */
  readonly lastUsedDate: string;

  /**
   * @schema AccessKeyLastUsed#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema AccessKeyLastUsed#Region
   */
  readonly region: string;

}

/**
 * @schema UserDetail
 */
export interface UserDetail {
  /**
   * @schema UserDetail#Path
   */
  readonly path?: string;

  /**
   * @schema UserDetail#UserName
   */
  readonly userName?: string;

  /**
   * @schema UserDetail#UserId
   */
  readonly userId?: string;

  /**
   * @schema UserDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema UserDetail#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema UserDetail#UserPolicyList
   */
  readonly userPolicyList?: PolicyDetail[];

  /**
   * @schema UserDetail#GroupList
   */
  readonly groupList?: string[];

  /**
   * @schema UserDetail#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: AttachedPolicy[];

  /**
   * @schema UserDetail#PermissionsBoundary
   */
  readonly permissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * @schema UserDetail#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GroupDetail
 */
export interface GroupDetail {
  /**
   * @schema GroupDetail#Path
   */
  readonly path?: string;

  /**
   * @schema GroupDetail#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GroupDetail#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GroupDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema GroupDetail#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema GroupDetail#GroupPolicyList
   */
  readonly groupPolicyList?: PolicyDetail[];

  /**
   * @schema GroupDetail#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: AttachedPolicy[];

}

/**
 * @schema RoleDetail
 */
export interface RoleDetail {
  /**
   * @schema RoleDetail#Path
   */
  readonly path?: string;

  /**
   * @schema RoleDetail#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema RoleDetail#RoleId
   */
  readonly roleId?: string;

  /**
   * @schema RoleDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema RoleDetail#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema RoleDetail#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema RoleDetail#InstanceProfileList
   */
  readonly instanceProfileList?: InstanceProfile[];

  /**
   * @schema RoleDetail#RolePolicyList
   */
  readonly rolePolicyList?: PolicyDetail[];

  /**
   * @schema RoleDetail#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: AttachedPolicy[];

  /**
   * @schema RoleDetail#PermissionsBoundary
   */
  readonly permissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * @schema RoleDetail#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RoleDetail#RoleLastUsed
   */
  readonly roleLastUsed?: RoleLastUsed;

}

/**
 * @schema ManagedPolicyDetail
 */
export interface ManagedPolicyDetail {
  /**
   * @schema ManagedPolicyDetail#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema ManagedPolicyDetail#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema ManagedPolicyDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema ManagedPolicyDetail#Path
   */
  readonly path?: string;

  /**
   * @schema ManagedPolicyDetail#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema ManagedPolicyDetail#AttachmentCount
   */
  readonly attachmentCount?: number;

  /**
   * @schema ManagedPolicyDetail#PermissionsBoundaryUsageCount
   */
  readonly permissionsBoundaryUsageCount?: number;

  /**
   * @schema ManagedPolicyDetail#IsAttachable
   */
  readonly isAttachable?: boolean;

  /**
   * @schema ManagedPolicyDetail#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedPolicyDetail#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema ManagedPolicyDetail#UpdateDate
   */
  readonly updateDate?: string;

  /**
   * @schema ManagedPolicyDetail#PolicyVersionList
   */
  readonly policyVersionList?: PolicyVersion[];

}

/**
 * @schema PasswordPolicy
 */
export interface PasswordPolicy {
  /**
   * @schema PasswordPolicy#MinimumPasswordLength
   */
  readonly minimumPasswordLength?: number;

  /**
   * @schema PasswordPolicy#RequireSymbols
   */
  readonly requireSymbols?: boolean;

  /**
   * @schema PasswordPolicy#RequireNumbers
   */
  readonly requireNumbers?: boolean;

  /**
   * @schema PasswordPolicy#RequireUppercaseCharacters
   */
  readonly requireUppercaseCharacters?: boolean;

  /**
   * @schema PasswordPolicy#RequireLowercaseCharacters
   */
  readonly requireLowercaseCharacters?: boolean;

  /**
   * @schema PasswordPolicy#AllowUsersToChangePassword
   */
  readonly allowUsersToChangePassword?: boolean;

  /**
   * @schema PasswordPolicy#ExpirePasswords
   */
  readonly expirePasswords?: boolean;

  /**
   * @schema PasswordPolicy#MaxPasswordAge
   */
  readonly maxPasswordAge?: number;

  /**
   * @schema PasswordPolicy#PasswordReusePrevention
   */
  readonly passwordReusePrevention?: number;

  /**
   * @schema PasswordPolicy#HardExpiry
   */
  readonly hardExpiry?: boolean;

}

/**
 * @schema AccessDetail
 */
export interface AccessDetail {
  /**
   * @schema AccessDetail#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema AccessDetail#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema AccessDetail#Region
   */
  readonly region?: string;

  /**
   * @schema AccessDetail#EntityPath
   */
  readonly entityPath?: string;

  /**
   * @schema AccessDetail#LastAuthenticatedTime
   */
  readonly lastAuthenticatedTime?: string;

  /**
   * @schema AccessDetail#TotalAuthenticatedEntities
   */
  readonly totalAuthenticatedEntities?: number;

}

/**
 * @schema ErrorDetails
 */
export interface ErrorDetails {
  /**
   * @schema ErrorDetails#Message
   */
  readonly message: string;

  /**
   * @schema ErrorDetails#Code
   */
  readonly code: string;

}

/**
 * @schema SshPublicKey
 */
export interface SshPublicKey {
  /**
   * @schema SshPublicKey#UserName
   */
  readonly userName: string;

  /**
   * @schema SshPublicKey#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema SshPublicKey#Fingerprint
   */
  readonly fingerprint: string;

  /**
   * @schema SshPublicKey#SSHPublicKeyBody
   */
  readonly sshPublicKeyBody: string;

  /**
   * @schema SshPublicKey#Status
   */
  readonly status: string;

  /**
   * @schema SshPublicKey#UploadDate
   */
  readonly uploadDate?: string;

}

/**
 * @schema ServerCertificate
 */
export interface ServerCertificate {
  /**
   * @schema ServerCertificate#ServerCertificateMetadata
   */
  readonly serverCertificateMetadata: ServerCertificateMetadata;

  /**
   * @schema ServerCertificate#CertificateBody
   */
  readonly certificateBody: string;

  /**
   * @schema ServerCertificate#CertificateChain
   */
  readonly certificateChain?: string;

}

/**
 * @schema ServiceLastAccessed
 */
export interface ServiceLastAccessed {
  /**
   * @schema ServiceLastAccessed#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema ServiceLastAccessed#LastAuthenticated
   */
  readonly lastAuthenticated?: string;

  /**
   * @schema ServiceLastAccessed#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ServiceLastAccessed#LastAuthenticatedEntity
   */
  readonly lastAuthenticatedEntity?: string;

  /**
   * @schema ServiceLastAccessed#LastAuthenticatedRegion
   */
  readonly lastAuthenticatedRegion?: string;

  /**
   * @schema ServiceLastAccessed#TotalAuthenticatedEntities
   */
  readonly totalAuthenticatedEntities?: number;

  /**
   * @schema ServiceLastAccessed#TrackedActionsLastAccessed
   */
  readonly trackedActionsLastAccessed?: TrackedActionLastAccessed[];

}

/**
 * @schema EntityDetails
 */
export interface EntityDetails {
  /**
   * @schema EntityDetails#EntityInfo
   */
  readonly entityInfo: EntityInfo;

  /**
   * @schema EntityDetails#LastAuthenticated
   */
  readonly lastAuthenticated?: string;

}

/**
 * @schema DeletionTaskFailureReasonType
 */
export interface DeletionTaskFailureReasonType {
  /**
   * @schema DeletionTaskFailureReasonType#Reason
   */
  readonly reason?: string;

  /**
   * @schema DeletionTaskFailureReasonType#RoleUsageList
   */
  readonly roleUsageList?: RoleUsageType[];

}

/**
 * @schema AccessKeyMetadata
 */
export interface AccessKeyMetadata {
  /**
   * @schema AccessKeyMetadata#UserName
   */
  readonly userName?: string;

  /**
   * @schema AccessKeyMetadata#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema AccessKeyMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema AccessKeyMetadata#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema AttachedPolicy
 */
export interface AttachedPolicy {
  /**
   * @schema AttachedPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema AttachedPolicy#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema PolicyGroup
 */
export interface PolicyGroup {
  /**
   * @schema PolicyGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema PolicyGroup#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema PolicyUser
 */
export interface PolicyUser {
  /**
   * @schema PolicyUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema PolicyUser#UserId
   */
  readonly userId?: string;

}

/**
 * @schema PolicyRole
 */
export interface PolicyRole {
  /**
   * @schema PolicyRole#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema PolicyRole#RoleId
   */
  readonly roleId?: string;

}

/**
 * @schema MfaDevice
 */
export interface MfaDevice {
  /**
   * @schema MfaDevice#UserName
   */
  readonly userName: string;

  /**
   * @schema MfaDevice#SerialNumber
   */
  readonly serialNumber: string;

  /**
   * @schema MfaDevice#EnableDate
   */
  readonly enableDate: string;

}

/**
 * @schema OpenIdConnectProviderListEntry
 */
export interface OpenIdConnectProviderListEntry {
  /**
   * @schema OpenIdConnectProviderListEntry#Arn
   */
  readonly arn?: string;

}

/**
 * @schema ListPoliciesGrantingServiceAccessEntry
 */
export interface ListPoliciesGrantingServiceAccessEntry {
  /**
   * @schema ListPoliciesGrantingServiceAccessEntry#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ListPoliciesGrantingServiceAccessEntry#Policies
   */
  readonly policies?: PolicyGrantingServiceAccess[];

}

/**
 * @schema SamlProviderListEntry
 */
export interface SamlProviderListEntry {
  /**
   * @schema SamlProviderListEntry#Arn
   */
  readonly arn?: string;

  /**
   * @schema SamlProviderListEntry#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema SamlProviderListEntry#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema SshPublicKeyMetadata
 */
export interface SshPublicKeyMetadata {
  /**
   * @schema SshPublicKeyMetadata#UserName
   */
  readonly userName: string;

  /**
   * @schema SshPublicKeyMetadata#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema SshPublicKeyMetadata#Status
   */
  readonly status: string;

  /**
   * @schema SshPublicKeyMetadata#UploadDate
   */
  readonly uploadDate: string;

}

/**
 * @schema ServerCertificateMetadata
 */
export interface ServerCertificateMetadata {
  /**
   * @schema ServerCertificateMetadata#Path
   */
  readonly path: string;

  /**
   * @schema ServerCertificateMetadata#ServerCertificateName
   */
  readonly serverCertificateName: string;

  /**
   * @schema ServerCertificateMetadata#ServerCertificateId
   */
  readonly serverCertificateId: string;

  /**
   * @schema ServerCertificateMetadata#Arn
   */
  readonly arn: string;

  /**
   * @schema ServerCertificateMetadata#UploadDate
   */
  readonly uploadDate?: string;

  /**
   * @schema ServerCertificateMetadata#Expiration
   */
  readonly expiration?: string;

}

/**
 * @schema ServiceSpecificCredentialMetadata
 */
export interface ServiceSpecificCredentialMetadata {
  /**
   * @schema ServiceSpecificCredentialMetadata#UserName
   */
  readonly userName: string;

  /**
   * @schema ServiceSpecificCredentialMetadata#Status
   */
  readonly status: string;

  /**
   * @schema ServiceSpecificCredentialMetadata#ServiceUserName
   */
  readonly serviceUserName: string;

  /**
   * @schema ServiceSpecificCredentialMetadata#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema ServiceSpecificCredentialMetadata#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

  /**
   * @schema ServiceSpecificCredentialMetadata#ServiceName
   */
  readonly serviceName: string;

}

/**
 * @schema SigningCertificate
 */
export interface SigningCertificate {
  /**
   * @schema SigningCertificate#UserName
   */
  readonly userName: string;

  /**
   * @schema SigningCertificate#CertificateId
   */
  readonly certificateId: string;

  /**
   * @schema SigningCertificate#CertificateBody
   */
  readonly certificateBody: string;

  /**
   * @schema SigningCertificate#Status
   */
  readonly status: string;

  /**
   * @schema SigningCertificate#UploadDate
   */
  readonly uploadDate?: string;

}

/**
 * @schema ContextEntry
 */
export interface ContextEntry {
  /**
   * @schema ContextEntry#ContextKeyName
   */
  readonly contextKeyName?: string;

  /**
   * @schema ContextEntry#ContextKeyValues
   */
  readonly contextKeyValues?: string[];

  /**
   * @schema ContextEntry#ContextKeyType
   */
  readonly contextKeyType?: string;

}

/**
 * @schema EvaluationResult
 */
export interface EvaluationResult {
  /**
   * @schema EvaluationResult#EvalActionName
   */
  readonly evalActionName: string;

  /**
   * @schema EvaluationResult#EvalResourceName
   */
  readonly evalResourceName?: string;

  /**
   * @schema EvaluationResult#EvalDecision
   */
  readonly evalDecision: string;

  /**
   * @schema EvaluationResult#MatchedStatements
   */
  readonly matchedStatements?: Statement[];

  /**
   * @schema EvaluationResult#MissingContextValues
   */
  readonly missingContextValues?: string[];

  /**
   * @schema EvaluationResult#OrganizationsDecisionDetail
   */
  readonly organizationsDecisionDetail?: OrganizationsDecisionDetail;

  /**
   * @schema EvaluationResult#PermissionsBoundaryDecisionDetail
   */
  readonly permissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;

  /**
   * @schema EvaluationResult#EvalDecisionDetails
   */
  readonly evalDecisionDetails?: { [key: string]: string };

  /**
   * @schema EvaluationResult#ResourceSpecificResults
   */
  readonly resourceSpecificResults?: ResourceSpecificResult[];

}

/**
 * @schema AttachedPermissionsBoundary
 */
export interface AttachedPermissionsBoundary {
  /**
   * @schema AttachedPermissionsBoundary#PermissionsBoundaryType
   */
  readonly permissionsBoundaryType?: string;

  /**
   * @schema AttachedPermissionsBoundary#PermissionsBoundaryArn
   */
  readonly permissionsBoundaryArn?: string;

}

/**
 * @schema RoleLastUsed
 */
export interface RoleLastUsed {
  /**
   * @schema RoleLastUsed#LastUsedDate
   */
  readonly lastUsedDate?: string;

  /**
   * @schema RoleLastUsed#Region
   */
  readonly region?: string;

}

/**
 * @schema PolicyDetail
 */
export interface PolicyDetail {
  /**
   * @schema PolicyDetail#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema PolicyDetail#PolicyDocument
   */
  readonly policyDocument?: string;

}

/**
 * @schema TrackedActionLastAccessed
 */
export interface TrackedActionLastAccessed {
  /**
   * @schema TrackedActionLastAccessed#ActionName
   */
  readonly actionName?: string;

  /**
   * @schema TrackedActionLastAccessed#LastAccessedEntity
   */
  readonly lastAccessedEntity?: string;

  /**
   * @schema TrackedActionLastAccessed#LastAccessedTime
   */
  readonly lastAccessedTime?: string;

  /**
   * @schema TrackedActionLastAccessed#LastAccessedRegion
   */
  readonly lastAccessedRegion?: string;

}

/**
 * @schema EntityInfo
 */
export interface EntityInfo {
  /**
   * @schema EntityInfo#Arn
   */
  readonly arn: string;

  /**
   * @schema EntityInfo#Name
   */
  readonly name: string;

  /**
   * @schema EntityInfo#Type
   */
  readonly type: string;

  /**
   * @schema EntityInfo#Id
   */
  readonly id: string;

  /**
   * @schema EntityInfo#Path
   */
  readonly path?: string;

}

/**
 * @schema RoleUsageType
 */
export interface RoleUsageType {
  /**
   * @schema RoleUsageType#Region
   */
  readonly region?: string;

  /**
   * @schema RoleUsageType#Resources
   */
  readonly resources?: string[];

}

/**
 * @schema PolicyGrantingServiceAccess
 */
export interface PolicyGrantingServiceAccess {
  /**
   * @schema PolicyGrantingServiceAccess#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema PolicyGrantingServiceAccess#PolicyType
   */
  readonly policyType: string;

  /**
   * @schema PolicyGrantingServiceAccess#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema PolicyGrantingServiceAccess#EntityType
   */
  readonly entityType?: string;

  /**
   * @schema PolicyGrantingServiceAccess#EntityName
   */
  readonly entityName?: string;

}

/**
 * @schema Statement
 */
export interface Statement {
  /**
   * @schema Statement#SourcePolicyId
   */
  readonly sourcePolicyId?: string;

  /**
   * @schema Statement#SourcePolicyType
   */
  readonly sourcePolicyType?: string;

  /**
   * @schema Statement#StartPosition
   */
  readonly startPosition?: Position;

  /**
   * @schema Statement#EndPosition
   */
  readonly endPosition?: Position;

}

/**
 * @schema OrganizationsDecisionDetail
 */
export interface OrganizationsDecisionDetail {
  /**
   * @schema OrganizationsDecisionDetail#AllowedByOrganizations
   */
  readonly allowedByOrganizations?: boolean;

}

/**
 * @schema PermissionsBoundaryDecisionDetail
 */
export interface PermissionsBoundaryDecisionDetail {
  /**
   * @schema PermissionsBoundaryDecisionDetail#AllowedByPermissionsBoundary
   */
  readonly allowedByPermissionsBoundary?: boolean;

}

/**
 * @schema ResourceSpecificResult
 */
export interface ResourceSpecificResult {
  /**
   * @schema ResourceSpecificResult#EvalResourceName
   */
  readonly evalResourceName: string;

  /**
   * @schema ResourceSpecificResult#EvalResourceDecision
   */
  readonly evalResourceDecision: string;

  /**
   * @schema ResourceSpecificResult#MatchedStatements
   */
  readonly matchedStatements?: Statement[];

  /**
   * @schema ResourceSpecificResult#MissingContextValues
   */
  readonly missingContextValues?: string[];

  /**
   * @schema ResourceSpecificResult#EvalDecisionDetails
   */
  readonly evalDecisionDetails?: { [key: string]: string };

  /**
   * @schema ResourceSpecificResult#PermissionsBoundaryDecisionDetail
   */
  readonly permissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;

}

/**
 * @schema Position
 */
export interface Position {
  /**
   * @schema Position#Line
   */
  readonly line?: number;

  /**
   * @schema Position#Column
   */
  readonly column?: number;

}
