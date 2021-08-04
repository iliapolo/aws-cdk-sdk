/**
 * @schema IamAddClientIdToOpenIdConnectProviderRequest
 */
export interface IamAddClientIdToOpenIdConnectProviderRequest {
  /**
   * @schema IamAddClientIdToOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

  /**
   * @schema IamAddClientIdToOpenIdConnectProviderRequest#ClientID
   */
  readonly clientId: string;

}

/**
 * @schema IamAddRoleToInstanceProfileRequest
 */
export interface IamAddRoleToInstanceProfileRequest {
  /**
   * @schema IamAddRoleToInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema IamAddRoleToInstanceProfileRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema IamAddUserToGroupRequest
 */
export interface IamAddUserToGroupRequest {
  /**
   * @schema IamAddUserToGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamAddUserToGroupRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema IamAttachGroupPolicyRequest
 */
export interface IamAttachGroupPolicyRequest {
  /**
   * @schema IamAttachGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamAttachGroupPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema IamAttachRolePolicyRequest
 */
export interface IamAttachRolePolicyRequest {
  /**
   * @schema IamAttachRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamAttachRolePolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema IamAttachUserPolicyRequest
 */
export interface IamAttachUserPolicyRequest {
  /**
   * @schema IamAttachUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamAttachUserPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema IamChangePasswordRequest
 */
export interface IamChangePasswordRequest {
  /**
   * @schema IamChangePasswordRequest#OldPassword
   */
  readonly oldPassword: string;

  /**
   * @schema IamChangePasswordRequest#NewPassword
   */
  readonly newPassword: string;

}

/**
 * @schema IamCreateAccessKeyRequest
 */
export interface IamCreateAccessKeyRequest {
  /**
   * @schema IamCreateAccessKeyRequest#UserName
   */
  readonly userName?: string;

}

/**
 * @schema IamCreateAccessKeyResponse
 */
export interface IamCreateAccessKeyResponse {
  /**
   * @schema IamCreateAccessKeyResponse#AccessKey
   */
  readonly accessKey: IamAccessKey;

}

/**
 * @schema IamCreateAccountAliasRequest
 */
export interface IamCreateAccountAliasRequest {
  /**
   * @schema IamCreateAccountAliasRequest#AccountAlias
   */
  readonly accountAlias: string;

}

/**
 * @schema IamCreateGroupRequest
 */
export interface IamCreateGroupRequest {
  /**
   * @schema IamCreateGroupRequest#Path
   */
  readonly path?: string;

  /**
   * @schema IamCreateGroupRequest#GroupName
   */
  readonly groupName: string;

}

/**
 * @schema IamCreateGroupResponse
 */
export interface IamCreateGroupResponse {
  /**
   * @schema IamCreateGroupResponse#Group
   */
  readonly group: IamGroup;

}

/**
 * @schema IamCreateInstanceProfileRequest
 */
export interface IamCreateInstanceProfileRequest {
  /**
   * @schema IamCreateInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema IamCreateInstanceProfileRequest#Path
   */
  readonly path?: string;

}

/**
 * @schema IamCreateInstanceProfileResponse
 */
export interface IamCreateInstanceProfileResponse {
  /**
   * @schema IamCreateInstanceProfileResponse#InstanceProfile
   */
  readonly instanceProfile: IamInstanceProfile;

}

/**
 * @schema IamCreateLoginProfileRequest
 */
export interface IamCreateLoginProfileRequest {
  /**
   * @schema IamCreateLoginProfileRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamCreateLoginProfileRequest#Password
   */
  readonly password: string;

  /**
   * @schema IamCreateLoginProfileRequest#PasswordResetRequired
   */
  readonly passwordResetRequired?: boolean;

}

/**
 * @schema IamCreateLoginProfileResponse
 */
export interface IamCreateLoginProfileResponse {
  /**
   * @schema IamCreateLoginProfileResponse#LoginProfile
   */
  readonly loginProfile: IamLoginProfile;

}

/**
 * @schema IamCreateOpenIdConnectProviderRequest
 */
export interface IamCreateOpenIdConnectProviderRequest {
  /**
   * @schema IamCreateOpenIdConnectProviderRequest#Url
   */
  readonly url: string;

  /**
   * @schema IamCreateOpenIdConnectProviderRequest#ClientIDList
   */
  readonly clientIdList?: string[];

  /**
   * @schema IamCreateOpenIdConnectProviderRequest#ThumbprintList
   */
  readonly thumbprintList: string[];

}

/**
 * @schema IamCreateOpenIdConnectProviderResponse
 */
export interface IamCreateOpenIdConnectProviderResponse {
  /**
   * @schema IamCreateOpenIdConnectProviderResponse#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

}

/**
 * @schema IamCreatePolicyRequest
 */
export interface IamCreatePolicyRequest {
  /**
   * @schema IamCreatePolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema IamCreatePolicyRequest#Path
   */
  readonly path?: string;

  /**
   * @schema IamCreatePolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema IamCreatePolicyRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema IamCreatePolicyResponse
 */
export interface IamCreatePolicyResponse {
  /**
   * @schema IamCreatePolicyResponse#Policy
   */
  readonly policy?: IamPolicy;

}

/**
 * @schema IamCreatePolicyVersionRequest
 */
export interface IamCreatePolicyVersionRequest {
  /**
   * @schema IamCreatePolicyVersionRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema IamCreatePolicyVersionRequest#PolicyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema IamCreatePolicyVersionRequest#SetAsDefault
   */
  readonly setAsDefault?: boolean;

}

/**
 * @schema IamCreatePolicyVersionResponse
 */
export interface IamCreatePolicyVersionResponse {
  /**
   * @schema IamCreatePolicyVersionResponse#PolicyVersion
   */
  readonly policyVersion?: IamPolicyVersion;

}

/**
 * @schema IamCreateRoleRequest
 */
export interface IamCreateRoleRequest {
  /**
   * @schema IamCreateRoleRequest#Path
   */
  readonly path?: string;

  /**
   * @schema IamCreateRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamCreateRoleRequest#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument: string;

  /**
   * @schema IamCreateRoleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IamCreateRoleRequest#MaxSessionDuration
   */
  readonly maxSessionDuration?: number;

  /**
   * @schema IamCreateRoleRequest#PermissionsBoundary
   */
  readonly permissionsBoundary?: string;

  /**
   * @schema IamCreateRoleRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * @schema IamCreateRoleResponse
 */
export interface IamCreateRoleResponse {
  /**
   * @schema IamCreateRoleResponse#Role
   */
  readonly role: IamRole;

}

/**
 * @schema IamCreateSamlProviderRequest
 */
export interface IamCreateSamlProviderRequest {
  /**
   * @schema IamCreateSamlProviderRequest#SAMLMetadataDocument
   */
  readonly samlMetadataDocument: string;

  /**
   * @schema IamCreateSamlProviderRequest#Name
   */
  readonly name: string;

}

/**
 * @schema IamCreateSamlProviderResponse
 */
export interface IamCreateSamlProviderResponse {
  /**
   * @schema IamCreateSamlProviderResponse#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

}

/**
 * @schema IamCreateServiceLinkedRoleRequest
 */
export interface IamCreateServiceLinkedRoleRequest {
  /**
   * @schema IamCreateServiceLinkedRoleRequest#AWSServiceName
   */
  readonly awsServiceName: string;

  /**
   * @schema IamCreateServiceLinkedRoleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IamCreateServiceLinkedRoleRequest#CustomSuffix
   */
  readonly customSuffix?: string;

}

/**
 * @schema IamCreateServiceLinkedRoleResponse
 */
export interface IamCreateServiceLinkedRoleResponse {
  /**
   * @schema IamCreateServiceLinkedRoleResponse#Role
   */
  readonly role?: IamRole;

}

/**
 * @schema IamCreateServiceSpecificCredentialRequest
 */
export interface IamCreateServiceSpecificCredentialRequest {
  /**
   * @schema IamCreateServiceSpecificCredentialRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamCreateServiceSpecificCredentialRequest#ServiceName
   */
  readonly serviceName: string;

}

/**
 * @schema IamCreateServiceSpecificCredentialResponse
 */
export interface IamCreateServiceSpecificCredentialResponse {
  /**
   * @schema IamCreateServiceSpecificCredentialResponse#ServiceSpecificCredential
   */
  readonly serviceSpecificCredential?: IamServiceSpecificCredential;

}

/**
 * @schema IamCreateUserRequest
 */
export interface IamCreateUserRequest {
  /**
   * @schema IamCreateUserRequest#Path
   */
  readonly path?: string;

  /**
   * @schema IamCreateUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamCreateUserRequest#PermissionsBoundary
   */
  readonly permissionsBoundary?: string;

  /**
   * @schema IamCreateUserRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * @schema IamCreateUserResponse
 */
export interface IamCreateUserResponse {
  /**
   * @schema IamCreateUserResponse#User
   */
  readonly user?: IamUser;

}

/**
 * @schema IamCreateVirtualMfaDeviceRequest
 */
export interface IamCreateVirtualMfaDeviceRequest {
  /**
   * @schema IamCreateVirtualMfaDeviceRequest#Path
   */
  readonly path?: string;

  /**
   * @schema IamCreateVirtualMfaDeviceRequest#VirtualMFADeviceName
   */
  readonly virtualMfaDeviceName: string;

}

/**
 * @schema IamCreateVirtualMfaDeviceResponse
 */
export interface IamCreateVirtualMfaDeviceResponse {
  /**
   * @schema IamCreateVirtualMfaDeviceResponse#VirtualMFADevice
   */
  readonly virtualMfaDevice: IamVirtualMfaDevice;

}

/**
 * @schema IamDeactivateMfaDeviceRequest
 */
export interface IamDeactivateMfaDeviceRequest {
  /**
   * @schema IamDeactivateMfaDeviceRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamDeactivateMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber: string;

}

/**
 * @schema IamDeleteAccessKeyRequest
 */
export interface IamDeleteAccessKeyRequest {
  /**
   * @schema IamDeleteAccessKeyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamDeleteAccessKeyRequest#AccessKeyId
   */
  readonly accessKeyId: string;

}

/**
 * @schema IamDeleteAccountAliasRequest
 */
export interface IamDeleteAccountAliasRequest {
  /**
   * @schema IamDeleteAccountAliasRequest#AccountAlias
   */
  readonly accountAlias: string;

}

/**
 * @schema IamDeleteGroupRequest
 */
export interface IamDeleteGroupRequest {
  /**
   * @schema IamDeleteGroupRequest#GroupName
   */
  readonly groupName: string;

}

/**
 * @schema IamDeleteGroupPolicyRequest
 */
export interface IamDeleteGroupPolicyRequest {
  /**
   * @schema IamDeleteGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamDeleteGroupPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema IamDeleteInstanceProfileRequest
 */
export interface IamDeleteInstanceProfileRequest {
  /**
   * @schema IamDeleteInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

}

/**
 * @schema IamDeleteLoginProfileRequest
 */
export interface IamDeleteLoginProfileRequest {
  /**
   * @schema IamDeleteLoginProfileRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema IamDeleteOpenIdConnectProviderRequest
 */
export interface IamDeleteOpenIdConnectProviderRequest {
  /**
   * @schema IamDeleteOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

}

/**
 * @schema IamDeletePolicyRequest
 */
export interface IamDeletePolicyRequest {
  /**
   * @schema IamDeletePolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema IamDeletePolicyVersionRequest
 */
export interface IamDeletePolicyVersionRequest {
  /**
   * @schema IamDeletePolicyVersionRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema IamDeletePolicyVersionRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema IamDeleteRoleRequest
 */
export interface IamDeleteRoleRequest {
  /**
   * @schema IamDeleteRoleRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema IamDeleteRolePermissionsBoundaryRequest
 */
export interface IamDeleteRolePermissionsBoundaryRequest {
  /**
   * @schema IamDeleteRolePermissionsBoundaryRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema IamDeleteRolePolicyRequest
 */
export interface IamDeleteRolePolicyRequest {
  /**
   * @schema IamDeleteRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamDeleteRolePolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema IamDeleteSamlProviderRequest
 */
export interface IamDeleteSamlProviderRequest {
  /**
   * @schema IamDeleteSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn: string;

}

/**
 * @schema IamDeleteSshPublicKeyRequest
 */
export interface IamDeleteSshPublicKeyRequest {
  /**
   * @schema IamDeleteSshPublicKeyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamDeleteSshPublicKeyRequest#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

}

/**
 * @schema IamDeleteServerCertificateRequest
 */
export interface IamDeleteServerCertificateRequest {
  /**
   * @schema IamDeleteServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName: string;

}

/**
 * @schema IamDeleteServiceLinkedRoleRequest
 */
export interface IamDeleteServiceLinkedRoleRequest {
  /**
   * @schema IamDeleteServiceLinkedRoleRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema IamDeleteServiceLinkedRoleResponse
 */
export interface IamDeleteServiceLinkedRoleResponse {
  /**
   * @schema IamDeleteServiceLinkedRoleResponse#DeletionTaskId
   */
  readonly deletionTaskId: string;

}

/**
 * @schema IamDeleteServiceSpecificCredentialRequest
 */
export interface IamDeleteServiceSpecificCredentialRequest {
  /**
   * @schema IamDeleteServiceSpecificCredentialRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamDeleteServiceSpecificCredentialRequest#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

}

/**
 * @schema IamDeleteSigningCertificateRequest
 */
export interface IamDeleteSigningCertificateRequest {
  /**
   * @schema IamDeleteSigningCertificateRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamDeleteSigningCertificateRequest#CertificateId
   */
  readonly certificateId: string;

}

/**
 * @schema IamDeleteUserRequest
 */
export interface IamDeleteUserRequest {
  /**
   * @schema IamDeleteUserRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema IamDeleteUserPermissionsBoundaryRequest
 */
export interface IamDeleteUserPermissionsBoundaryRequest {
  /**
   * @schema IamDeleteUserPermissionsBoundaryRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema IamDeleteUserPolicyRequest
 */
export interface IamDeleteUserPolicyRequest {
  /**
   * @schema IamDeleteUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamDeleteUserPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema IamDeleteVirtualMfaDeviceRequest
 */
export interface IamDeleteVirtualMfaDeviceRequest {
  /**
   * @schema IamDeleteVirtualMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber: string;

}

/**
 * @schema IamDetachGroupPolicyRequest
 */
export interface IamDetachGroupPolicyRequest {
  /**
   * @schema IamDetachGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamDetachGroupPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema IamDetachRolePolicyRequest
 */
export interface IamDetachRolePolicyRequest {
  /**
   * @schema IamDetachRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamDetachRolePolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema IamDetachUserPolicyRequest
 */
export interface IamDetachUserPolicyRequest {
  /**
   * @schema IamDetachUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamDetachUserPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema IamEnableMfaDeviceRequest
 */
export interface IamEnableMfaDeviceRequest {
  /**
   * @schema IamEnableMfaDeviceRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamEnableMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber: string;

  /**
   * @schema IamEnableMfaDeviceRequest#AuthenticationCode1
   */
  readonly authenticationCode1: string;

  /**
   * @schema IamEnableMfaDeviceRequest#AuthenticationCode2
   */
  readonly authenticationCode2: string;

}

/**
 * @schema IamGenerateCredentialReportResponse
 */
export interface IamGenerateCredentialReportResponse {
  /**
   * @schema IamGenerateCredentialReportResponse#State
   */
  readonly state?: string;

  /**
   * @schema IamGenerateCredentialReportResponse#Description
   */
  readonly description?: string;

}

/**
 * @schema IamGenerateOrganizationsAccessReportRequest
 */
export interface IamGenerateOrganizationsAccessReportRequest {
  /**
   * @schema IamGenerateOrganizationsAccessReportRequest#EntityPath
   */
  readonly entityPath: string;

  /**
   * @schema IamGenerateOrganizationsAccessReportRequest#OrganizationsPolicyId
   */
  readonly organizationsPolicyId?: string;

}

/**
 * @schema IamGenerateOrganizationsAccessReportResponse
 */
export interface IamGenerateOrganizationsAccessReportResponse {
  /**
   * @schema IamGenerateOrganizationsAccessReportResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema IamGenerateServiceLastAccessedDetailsRequest
 */
export interface IamGenerateServiceLastAccessedDetailsRequest {
  /**
   * @schema IamGenerateServiceLastAccessedDetailsRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema IamGenerateServiceLastAccessedDetailsRequest#Granularity
   */
  readonly granularity?: string;

}

/**
 * @schema IamGenerateServiceLastAccessedDetailsResponse
 */
export interface IamGenerateServiceLastAccessedDetailsResponse {
  /**
   * @schema IamGenerateServiceLastAccessedDetailsResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema IamGetAccessKeyLastUsedRequest
 */
export interface IamGetAccessKeyLastUsedRequest {
  /**
   * @schema IamGetAccessKeyLastUsedRequest#AccessKeyId
   */
  readonly accessKeyId: string;

}

/**
 * @schema IamGetAccessKeyLastUsedResponse
 */
export interface IamGetAccessKeyLastUsedResponse {
  /**
   * @schema IamGetAccessKeyLastUsedResponse#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamGetAccessKeyLastUsedResponse#AccessKeyLastUsed
   */
  readonly accessKeyLastUsed?: IamAccessKeyLastUsed;

}

/**
 * @schema IamGetAccountAuthorizationDetailsRequest
 */
export interface IamGetAccountAuthorizationDetailsRequest {
  /**
   * @schema IamGetAccountAuthorizationDetailsRequest#Filter
   */
  readonly filter?: string[];

  /**
   * @schema IamGetAccountAuthorizationDetailsRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema IamGetAccountAuthorizationDetailsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamGetAccountAuthorizationDetailsResponse
 */
export interface IamGetAccountAuthorizationDetailsResponse {
  /**
   * @schema IamGetAccountAuthorizationDetailsResponse#UserDetailList
   */
  readonly userDetailList?: IamUserDetail[];

  /**
   * @schema IamGetAccountAuthorizationDetailsResponse#GroupDetailList
   */
  readonly groupDetailList?: IamGroupDetail[];

  /**
   * @schema IamGetAccountAuthorizationDetailsResponse#RoleDetailList
   */
  readonly roleDetailList?: IamRoleDetail[];

  /**
   * @schema IamGetAccountAuthorizationDetailsResponse#Policies
   */
  readonly policies?: IamManagedPolicyDetail[];

  /**
   * @schema IamGetAccountAuthorizationDetailsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamGetAccountAuthorizationDetailsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamGetAccountPasswordPolicyResponse
 */
export interface IamGetAccountPasswordPolicyResponse {
  /**
   * @schema IamGetAccountPasswordPolicyResponse#PasswordPolicy
   */
  readonly passwordPolicy: IamPasswordPolicy;

}

/**
 * @schema IamGetAccountSummaryResponse
 */
export interface IamGetAccountSummaryResponse {
  /**
   * @schema IamGetAccountSummaryResponse#SummaryMap
   */
  readonly summaryMap?: { [key: string]: number };

}

/**
 * @schema IamGetContextKeysForCustomPolicyRequest
 */
export interface IamGetContextKeysForCustomPolicyRequest {
  /**
   * @schema IamGetContextKeysForCustomPolicyRequest#PolicyInputList
   */
  readonly policyInputList: string[];

}

/**
 * @schema IamGetContextKeysForPolicyResponse
 */
export interface IamGetContextKeysForPolicyResponse {
  /**
   * @schema IamGetContextKeysForPolicyResponse#ContextKeyNames
   */
  readonly contextKeyNames?: string[];

}

/**
 * @schema IamGetContextKeysForPrincipalPolicyRequest
 */
export interface IamGetContextKeysForPrincipalPolicyRequest {
  /**
   * @schema IamGetContextKeysForPrincipalPolicyRequest#PolicySourceArn
   */
  readonly policySourceArn: string;

  /**
   * @schema IamGetContextKeysForPrincipalPolicyRequest#PolicyInputList
   */
  readonly policyInputList?: string[];

}

/**
 * @schema IamGetCredentialReportResponse
 */
export interface IamGetCredentialReportResponse {
  /**
   * @schema IamGetCredentialReportResponse#Content
   */
  readonly content?: any;

  /**
   * @schema IamGetCredentialReportResponse#ReportFormat
   */
  readonly reportFormat?: string;

  /**
   * @schema IamGetCredentialReportResponse#GeneratedTime
   */
  readonly generatedTime?: string;

}

/**
 * @schema IamGetGroupRequest
 */
export interface IamGetGroupRequest {
  /**
   * @schema IamGetGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamGetGroupRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamGetGroupRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamGetGroupResponse
 */
export interface IamGetGroupResponse {
  /**
   * @schema IamGetGroupResponse#Group
   */
  readonly group: IamGroup;

  /**
   * @schema IamGetGroupResponse#Users
   */
  readonly users: IamUser[];

  /**
   * @schema IamGetGroupResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamGetGroupResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamGetGroupPolicyRequest
 */
export interface IamGetGroupPolicyRequest {
  /**
   * @schema IamGetGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamGetGroupPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema IamGetGroupPolicyResponse
 */
export interface IamGetGroupPolicyResponse {
  /**
   * @schema IamGetGroupPolicyResponse#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamGetGroupPolicyResponse#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema IamGetGroupPolicyResponse#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema IamGetInstanceProfileRequest
 */
export interface IamGetInstanceProfileRequest {
  /**
   * @schema IamGetInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

}

/**
 * @schema IamGetInstanceProfileResponse
 */
export interface IamGetInstanceProfileResponse {
  /**
   * @schema IamGetInstanceProfileResponse#InstanceProfile
   */
  readonly instanceProfile: IamInstanceProfile;

}

/**
 * @schema IamGetLoginProfileRequest
 */
export interface IamGetLoginProfileRequest {
  /**
   * @schema IamGetLoginProfileRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema IamGetLoginProfileResponse
 */
export interface IamGetLoginProfileResponse {
  /**
   * @schema IamGetLoginProfileResponse#LoginProfile
   */
  readonly loginProfile: IamLoginProfile;

}

/**
 * @schema IamGetOpenIdConnectProviderRequest
 */
export interface IamGetOpenIdConnectProviderRequest {
  /**
   * @schema IamGetOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

}

/**
 * @schema IamGetOpenIdConnectProviderResponse
 */
export interface IamGetOpenIdConnectProviderResponse {
  /**
   * @schema IamGetOpenIdConnectProviderResponse#Url
   */
  readonly url?: string;

  /**
   * @schema IamGetOpenIdConnectProviderResponse#ClientIDList
   */
  readonly clientIdList?: string[];

  /**
   * @schema IamGetOpenIdConnectProviderResponse#ThumbprintList
   */
  readonly thumbprintList?: string[];

  /**
   * @schema IamGetOpenIdConnectProviderResponse#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema IamGetOrganizationsAccessReportRequest
 */
export interface IamGetOrganizationsAccessReportRequest {
  /**
   * @schema IamGetOrganizationsAccessReportRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema IamGetOrganizationsAccessReportRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema IamGetOrganizationsAccessReportRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamGetOrganizationsAccessReportRequest#SortKey
   */
  readonly sortKey?: string;

}

/**
 * @schema IamGetOrganizationsAccessReportResponse
 */
export interface IamGetOrganizationsAccessReportResponse {
  /**
   * @schema IamGetOrganizationsAccessReportResponse#JobStatus
   */
  readonly jobStatus: string;

  /**
   * @schema IamGetOrganizationsAccessReportResponse#JobCreationDate
   */
  readonly jobCreationDate: string;

  /**
   * @schema IamGetOrganizationsAccessReportResponse#JobCompletionDate
   */
  readonly jobCompletionDate?: string;

  /**
   * @schema IamGetOrganizationsAccessReportResponse#NumberOfServicesAccessible
   */
  readonly numberOfServicesAccessible?: number;

  /**
   * @schema IamGetOrganizationsAccessReportResponse#NumberOfServicesNotAccessed
   */
  readonly numberOfServicesNotAccessed?: number;

  /**
   * @schema IamGetOrganizationsAccessReportResponse#AccessDetails
   */
  readonly accessDetails?: IamAccessDetail[];

  /**
   * @schema IamGetOrganizationsAccessReportResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamGetOrganizationsAccessReportResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamGetOrganizationsAccessReportResponse#ErrorDetails
   */
  readonly errorDetails?: IamErrorDetails;

}

/**
 * @schema IamGetPolicyRequest
 */
export interface IamGetPolicyRequest {
  /**
   * @schema IamGetPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

}

/**
 * @schema IamGetPolicyResponse
 */
export interface IamGetPolicyResponse {
  /**
   * @schema IamGetPolicyResponse#Policy
   */
  readonly policy?: IamPolicy;

}

/**
 * @schema IamGetPolicyVersionRequest
 */
export interface IamGetPolicyVersionRequest {
  /**
   * @schema IamGetPolicyVersionRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema IamGetPolicyVersionRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema IamGetPolicyVersionResponse
 */
export interface IamGetPolicyVersionResponse {
  /**
   * @schema IamGetPolicyVersionResponse#PolicyVersion
   */
  readonly policyVersion?: IamPolicyVersion;

}

/**
 * @schema IamGetRoleRequest
 */
export interface IamGetRoleRequest {
  /**
   * @schema IamGetRoleRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema IamGetRoleResponse
 */
export interface IamGetRoleResponse {
  /**
   * @schema IamGetRoleResponse#Role
   */
  readonly role: IamRole;

}

/**
 * @schema IamGetRolePolicyRequest
 */
export interface IamGetRolePolicyRequest {
  /**
   * @schema IamGetRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamGetRolePolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema IamGetRolePolicyResponse
 */
export interface IamGetRolePolicyResponse {
  /**
   * @schema IamGetRolePolicyResponse#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamGetRolePolicyResponse#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema IamGetRolePolicyResponse#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema IamGetSamlProviderRequest
 */
export interface IamGetSamlProviderRequest {
  /**
   * @schema IamGetSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn: string;

}

/**
 * @schema IamGetSamlProviderResponse
 */
export interface IamGetSamlProviderResponse {
  /**
   * @schema IamGetSamlProviderResponse#SAMLMetadataDocument
   */
  readonly samlMetadataDocument?: string;

  /**
   * @schema IamGetSamlProviderResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamGetSamlProviderResponse#ValidUntil
   */
  readonly validUntil?: string;

}

/**
 * @schema IamGetSshPublicKeyRequest
 */
export interface IamGetSshPublicKeyRequest {
  /**
   * @schema IamGetSshPublicKeyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamGetSshPublicKeyRequest#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema IamGetSshPublicKeyRequest#Encoding
   */
  readonly encoding: string;

}

/**
 * @schema IamGetSshPublicKeyResponse
 */
export interface IamGetSshPublicKeyResponse {
  /**
   * @schema IamGetSshPublicKeyResponse#SSHPublicKey
   */
  readonly sshPublicKey?: IamsshPublicKey;

}

/**
 * @schema IamGetServerCertificateRequest
 */
export interface IamGetServerCertificateRequest {
  /**
   * @schema IamGetServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName: string;

}

/**
 * @schema IamGetServerCertificateResponse
 */
export interface IamGetServerCertificateResponse {
  /**
   * @schema IamGetServerCertificateResponse#ServerCertificate
   */
  readonly serverCertificate: IamServerCertificate;

}

/**
 * @schema IamGetServiceLastAccessedDetailsRequest
 */
export interface IamGetServiceLastAccessedDetailsRequest {
  /**
   * @schema IamGetServiceLastAccessedDetailsRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema IamGetServiceLastAccessedDetailsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamGetServiceLastAccessedDetailsResponse
 */
export interface IamGetServiceLastAccessedDetailsResponse {
  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#JobStatus
   */
  readonly jobStatus: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#JobType
   */
  readonly jobType?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#JobCreationDate
   */
  readonly jobCreationDate: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#ServicesLastAccessed
   */
  readonly servicesLastAccessed: IamServiceLastAccessed[];

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#JobCompletionDate
   */
  readonly jobCompletionDate: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#Error
   */
  readonly error?: IamErrorDetails;

}

/**
 * @schema IamGetServiceLastAccessedDetailsWithEntitiesRequest
 */
export interface IamGetServiceLastAccessedDetailsWithEntitiesRequest {
  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse
 */
export interface IamGetServiceLastAccessedDetailsWithEntitiesResponse {
  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#JobStatus
   */
  readonly jobStatus: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#JobCreationDate
   */
  readonly jobCreationDate: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#JobCompletionDate
   */
  readonly jobCompletionDate: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#EntityDetailsList
   */
  readonly entityDetailsList: IamEntityDetails[];

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#Error
   */
  readonly error?: IamErrorDetails;

}

/**
 * @schema IamGetServiceLinkedRoleDeletionStatusRequest
 */
export interface IamGetServiceLinkedRoleDeletionStatusRequest {
  /**
   * @schema IamGetServiceLinkedRoleDeletionStatusRequest#DeletionTaskId
   */
  readonly deletionTaskId: string;

}

/**
 * @schema IamGetServiceLinkedRoleDeletionStatusResponse
 */
export interface IamGetServiceLinkedRoleDeletionStatusResponse {
  /**
   * @schema IamGetServiceLinkedRoleDeletionStatusResponse#Status
   */
  readonly status: string;

  /**
   * @schema IamGetServiceLinkedRoleDeletionStatusResponse#Reason
   */
  readonly reason?: IamDeletionTaskFailureReasonType;

}

/**
 * @schema IamGetUserRequest
 */
export interface IamGetUserRequest {
  /**
   * @schema IamGetUserRequest#UserName
   */
  readonly userName?: string;

}

/**
 * @schema IamGetUserResponse
 */
export interface IamGetUserResponse {
  /**
   * @schema IamGetUserResponse#User
   */
  readonly user: IamUser;

}

/**
 * @schema IamGetUserPolicyRequest
 */
export interface IamGetUserPolicyRequest {
  /**
   * @schema IamGetUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamGetUserPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema IamGetUserPolicyResponse
 */
export interface IamGetUserPolicyResponse {
  /**
   * @schema IamGetUserPolicyResponse#UserName
   */
  readonly userName: string;

  /**
   * @schema IamGetUserPolicyResponse#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema IamGetUserPolicyResponse#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema IamListAccessKeysRequest
 */
export interface IamListAccessKeysRequest {
  /**
   * @schema IamListAccessKeysRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamListAccessKeysRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListAccessKeysRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListAccessKeysResponse
 */
export interface IamListAccessKeysResponse {
  /**
   * @schema IamListAccessKeysResponse#AccessKeyMetadata
   */
  readonly accessKeyMetadata: IamAccessKeyMetadata[];

  /**
   * @schema IamListAccessKeysResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListAccessKeysResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListAccountAliasesRequest
 */
export interface IamListAccountAliasesRequest {
  /**
   * @schema IamListAccountAliasesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListAccountAliasesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListAccountAliasesResponse
 */
export interface IamListAccountAliasesResponse {
  /**
   * @schema IamListAccountAliasesResponse#AccountAliases
   */
  readonly accountAliases: string[];

  /**
   * @schema IamListAccountAliasesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListAccountAliasesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListAttachedGroupPoliciesRequest
 */
export interface IamListAttachedGroupPoliciesRequest {
  /**
   * @schema IamListAttachedGroupPoliciesRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamListAttachedGroupPoliciesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListAttachedGroupPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListAttachedGroupPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListAttachedGroupPoliciesResponse
 */
export interface IamListAttachedGroupPoliciesResponse {
  /**
   * @schema IamListAttachedGroupPoliciesResponse#AttachedPolicies
   */
  readonly attachedPolicies?: IamAttachedPolicy[];

  /**
   * @schema IamListAttachedGroupPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListAttachedGroupPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListAttachedRolePoliciesRequest
 */
export interface IamListAttachedRolePoliciesRequest {
  /**
   * @schema IamListAttachedRolePoliciesRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamListAttachedRolePoliciesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListAttachedRolePoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListAttachedRolePoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListAttachedRolePoliciesResponse
 */
export interface IamListAttachedRolePoliciesResponse {
  /**
   * @schema IamListAttachedRolePoliciesResponse#AttachedPolicies
   */
  readonly attachedPolicies?: IamAttachedPolicy[];

  /**
   * @schema IamListAttachedRolePoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListAttachedRolePoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListAttachedUserPoliciesRequest
 */
export interface IamListAttachedUserPoliciesRequest {
  /**
   * @schema IamListAttachedUserPoliciesRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamListAttachedUserPoliciesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListAttachedUserPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListAttachedUserPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListAttachedUserPoliciesResponse
 */
export interface IamListAttachedUserPoliciesResponse {
  /**
   * @schema IamListAttachedUserPoliciesResponse#AttachedPolicies
   */
  readonly attachedPolicies?: IamAttachedPolicy[];

  /**
   * @schema IamListAttachedUserPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListAttachedUserPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListEntitiesForPolicyRequest
 */
export interface IamListEntitiesForPolicyRequest {
  /**
   * @schema IamListEntitiesForPolicyRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema IamListEntitiesForPolicyRequest#EntityFilter
   */
  readonly entityFilter?: string;

  /**
   * @schema IamListEntitiesForPolicyRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListEntitiesForPolicyRequest#PolicyUsageFilter
   */
  readonly policyUsageFilter?: string;

  /**
   * @schema IamListEntitiesForPolicyRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListEntitiesForPolicyRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListEntitiesForPolicyResponse
 */
export interface IamListEntitiesForPolicyResponse {
  /**
   * @schema IamListEntitiesForPolicyResponse#PolicyGroups
   */
  readonly policyGroups?: IamPolicyGroup[];

  /**
   * @schema IamListEntitiesForPolicyResponse#PolicyUsers
   */
  readonly policyUsers?: IamPolicyUser[];

  /**
   * @schema IamListEntitiesForPolicyResponse#PolicyRoles
   */
  readonly policyRoles?: IamPolicyRole[];

  /**
   * @schema IamListEntitiesForPolicyResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListEntitiesForPolicyResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListGroupPoliciesRequest
 */
export interface IamListGroupPoliciesRequest {
  /**
   * @schema IamListGroupPoliciesRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamListGroupPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListGroupPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListGroupPoliciesResponse
 */
export interface IamListGroupPoliciesResponse {
  /**
   * @schema IamListGroupPoliciesResponse#PolicyNames
   */
  readonly policyNames: string[];

  /**
   * @schema IamListGroupPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListGroupPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListGroupsRequest
 */
export interface IamListGroupsRequest {
  /**
   * @schema IamListGroupsRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListGroupsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListGroupsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListGroupsResponse
 */
export interface IamListGroupsResponse {
  /**
   * @schema IamListGroupsResponse#Groups
   */
  readonly groups: IamGroup[];

  /**
   * @schema IamListGroupsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListGroupsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListGroupsForUserRequest
 */
export interface IamListGroupsForUserRequest {
  /**
   * @schema IamListGroupsForUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamListGroupsForUserRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListGroupsForUserRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListGroupsForUserResponse
 */
export interface IamListGroupsForUserResponse {
  /**
   * @schema IamListGroupsForUserResponse#Groups
   */
  readonly groups: IamGroup[];

  /**
   * @schema IamListGroupsForUserResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListGroupsForUserResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListInstanceProfilesRequest
 */
export interface IamListInstanceProfilesRequest {
  /**
   * @schema IamListInstanceProfilesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListInstanceProfilesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListInstanceProfilesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListInstanceProfilesResponse
 */
export interface IamListInstanceProfilesResponse {
  /**
   * @schema IamListInstanceProfilesResponse#InstanceProfiles
   */
  readonly instanceProfiles: IamInstanceProfile[];

  /**
   * @schema IamListInstanceProfilesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListInstanceProfilesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListInstanceProfilesForRoleRequest
 */
export interface IamListInstanceProfilesForRoleRequest {
  /**
   * @schema IamListInstanceProfilesForRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamListInstanceProfilesForRoleRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListInstanceProfilesForRoleRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListInstanceProfilesForRoleResponse
 */
export interface IamListInstanceProfilesForRoleResponse {
  /**
   * @schema IamListInstanceProfilesForRoleResponse#InstanceProfiles
   */
  readonly instanceProfiles: IamInstanceProfile[];

  /**
   * @schema IamListInstanceProfilesForRoleResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListInstanceProfilesForRoleResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListMfaDevicesRequest
 */
export interface IamListMfaDevicesRequest {
  /**
   * @schema IamListMfaDevicesRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamListMfaDevicesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListMfaDevicesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListMfaDevicesResponse
 */
export interface IamListMfaDevicesResponse {
  /**
   * @schema IamListMfaDevicesResponse#MFADevices
   */
  readonly mfaDevices: IammfaDevice[];

  /**
   * @schema IamListMfaDevicesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListMfaDevicesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListOpenIdConnectProvidersRequest
 */
export interface IamListOpenIdConnectProvidersRequest {
}

/**
 * @schema IamListOpenIdConnectProvidersResponse
 */
export interface IamListOpenIdConnectProvidersResponse {
  /**
   * @schema IamListOpenIdConnectProvidersResponse#OpenIDConnectProviderList
   */
  readonly openIdConnectProviderList?: IamOpenIdConnectProviderListEntry[];

}

/**
 * @schema IamListPoliciesRequest
 */
export interface IamListPoliciesRequest {
  /**
   * @schema IamListPoliciesRequest#Scope
   */
  readonly scope?: string;

  /**
   * @schema IamListPoliciesRequest#OnlyAttached
   */
  readonly onlyAttached?: boolean;

  /**
   * @schema IamListPoliciesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListPoliciesRequest#PolicyUsageFilter
   */
  readonly policyUsageFilter?: string;

  /**
   * @schema IamListPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListPoliciesResponse
 */
export interface IamListPoliciesResponse {
  /**
   * @schema IamListPoliciesResponse#Policies
   */
  readonly policies?: IamPolicy[];

  /**
   * @schema IamListPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListPoliciesGrantingServiceAccessRequest
 */
export interface IamListPoliciesGrantingServiceAccessRequest {
  /**
   * @schema IamListPoliciesGrantingServiceAccessRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListPoliciesGrantingServiceAccessRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema IamListPoliciesGrantingServiceAccessRequest#ServiceNamespaces
   */
  readonly serviceNamespaces: string[];

}

/**
 * @schema IamListPoliciesGrantingServiceAccessResponse
 */
export interface IamListPoliciesGrantingServiceAccessResponse {
  /**
   * @schema IamListPoliciesGrantingServiceAccessResponse#PoliciesGrantingServiceAccess
   */
  readonly policiesGrantingServiceAccess: IamListPoliciesGrantingServiceAccessEntry[];

  /**
   * @schema IamListPoliciesGrantingServiceAccessResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListPoliciesGrantingServiceAccessResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListPolicyVersionsRequest
 */
export interface IamListPolicyVersionsRequest {
  /**
   * @schema IamListPolicyVersionsRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema IamListPolicyVersionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListPolicyVersionsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListPolicyVersionsResponse
 */
export interface IamListPolicyVersionsResponse {
  /**
   * @schema IamListPolicyVersionsResponse#Versions
   */
  readonly versions?: IamPolicyVersion[];

  /**
   * @schema IamListPolicyVersionsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListPolicyVersionsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListRolePoliciesRequest
 */
export interface IamListRolePoliciesRequest {
  /**
   * @schema IamListRolePoliciesRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamListRolePoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListRolePoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListRolePoliciesResponse
 */
export interface IamListRolePoliciesResponse {
  /**
   * @schema IamListRolePoliciesResponse#PolicyNames
   */
  readonly policyNames: string[];

  /**
   * @schema IamListRolePoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListRolePoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListRoleTagsRequest
 */
export interface IamListRoleTagsRequest {
  /**
   * @schema IamListRoleTagsRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamListRoleTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListRoleTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListRoleTagsResponse
 */
export interface IamListRoleTagsResponse {
  /**
   * @schema IamListRoleTagsResponse#Tags
   */
  readonly tags: IamTag[];

  /**
   * @schema IamListRoleTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListRoleTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListRolesRequest
 */
export interface IamListRolesRequest {
  /**
   * @schema IamListRolesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListRolesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListRolesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListRolesResponse
 */
export interface IamListRolesResponse {
  /**
   * @schema IamListRolesResponse#Roles
   */
  readonly roles: IamRole[];

  /**
   * @schema IamListRolesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListRolesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListSamlProvidersRequest
 */
export interface IamListSamlProvidersRequest {
}

/**
 * @schema IamListSamlProvidersResponse
 */
export interface IamListSamlProvidersResponse {
  /**
   * @schema IamListSamlProvidersResponse#SAMLProviderList
   */
  readonly samlProviderList?: IamsamlProviderListEntry[];

}

/**
 * @schema IamListSshPublicKeysRequest
 */
export interface IamListSshPublicKeysRequest {
  /**
   * @schema IamListSshPublicKeysRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamListSshPublicKeysRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListSshPublicKeysRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListSshPublicKeysResponse
 */
export interface IamListSshPublicKeysResponse {
  /**
   * @schema IamListSshPublicKeysResponse#SSHPublicKeys
   */
  readonly sshPublicKeys?: IamsshPublicKeyMetadata[];

  /**
   * @schema IamListSshPublicKeysResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListSshPublicKeysResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListServerCertificatesRequest
 */
export interface IamListServerCertificatesRequest {
  /**
   * @schema IamListServerCertificatesRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListServerCertificatesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListServerCertificatesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListServerCertificatesResponse
 */
export interface IamListServerCertificatesResponse {
  /**
   * @schema IamListServerCertificatesResponse#ServerCertificateMetadataList
   */
  readonly serverCertificateMetadataList: IamServerCertificateMetadata[];

  /**
   * @schema IamListServerCertificatesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListServerCertificatesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListServiceSpecificCredentialsRequest
 */
export interface IamListServiceSpecificCredentialsRequest {
  /**
   * @schema IamListServiceSpecificCredentialsRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamListServiceSpecificCredentialsRequest#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * @schema IamListServiceSpecificCredentialsResponse
 */
export interface IamListServiceSpecificCredentialsResponse {
  /**
   * @schema IamListServiceSpecificCredentialsResponse#ServiceSpecificCredentials
   */
  readonly serviceSpecificCredentials?: IamServiceSpecificCredentialMetadata[];

}

/**
 * @schema IamListSigningCertificatesRequest
 */
export interface IamListSigningCertificatesRequest {
  /**
   * @schema IamListSigningCertificatesRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamListSigningCertificatesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListSigningCertificatesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListSigningCertificatesResponse
 */
export interface IamListSigningCertificatesResponse {
  /**
   * @schema IamListSigningCertificatesResponse#Certificates
   */
  readonly certificates: IamSigningCertificate[];

  /**
   * @schema IamListSigningCertificatesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListSigningCertificatesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListUserPoliciesRequest
 */
export interface IamListUserPoliciesRequest {
  /**
   * @schema IamListUserPoliciesRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamListUserPoliciesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListUserPoliciesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListUserPoliciesResponse
 */
export interface IamListUserPoliciesResponse {
  /**
   * @schema IamListUserPoliciesResponse#PolicyNames
   */
  readonly policyNames: string[];

  /**
   * @schema IamListUserPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListUserPoliciesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListUserTagsRequest
 */
export interface IamListUserTagsRequest {
  /**
   * @schema IamListUserTagsRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamListUserTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListUserTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListUserTagsResponse
 */
export interface IamListUserTagsResponse {
  /**
   * @schema IamListUserTagsResponse#Tags
   */
  readonly tags: IamTag[];

  /**
   * @schema IamListUserTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListUserTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListUsersRequest
 */
export interface IamListUsersRequest {
  /**
   * @schema IamListUsersRequest#PathPrefix
   */
  readonly pathPrefix?: string;

  /**
   * @schema IamListUsersRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListUsersRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListUsersResponse
 */
export interface IamListUsersResponse {
  /**
   * @schema IamListUsersResponse#Users
   */
  readonly users: IamUser[];

  /**
   * @schema IamListUsersResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListUsersResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamListVirtualMfaDevicesRequest
 */
export interface IamListVirtualMfaDevicesRequest {
  /**
   * @schema IamListVirtualMfaDevicesRequest#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema IamListVirtualMfaDevicesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListVirtualMfaDevicesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema IamListVirtualMfaDevicesResponse
 */
export interface IamListVirtualMfaDevicesResponse {
  /**
   * @schema IamListVirtualMfaDevicesResponse#VirtualMFADevices
   */
  readonly virtualMfaDevices: IamVirtualMfaDevice[];

  /**
   * @schema IamListVirtualMfaDevicesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListVirtualMfaDevicesResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamPutGroupPolicyRequest
 */
export interface IamPutGroupPolicyRequest {
  /**
   * @schema IamPutGroupPolicyRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamPutGroupPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema IamPutGroupPolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema IamPutRolePermissionsBoundaryRequest
 */
export interface IamPutRolePermissionsBoundaryRequest {
  /**
   * @schema IamPutRolePermissionsBoundaryRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamPutRolePermissionsBoundaryRequest#PermissionsBoundary
   */
  readonly permissionsBoundary: string;

}

/**
 * @schema IamPutRolePolicyRequest
 */
export interface IamPutRolePolicyRequest {
  /**
   * @schema IamPutRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamPutRolePolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema IamPutRolePolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema IamPutUserPermissionsBoundaryRequest
 */
export interface IamPutUserPermissionsBoundaryRequest {
  /**
   * @schema IamPutUserPermissionsBoundaryRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamPutUserPermissionsBoundaryRequest#PermissionsBoundary
   */
  readonly permissionsBoundary: string;

}

/**
 * @schema IamPutUserPolicyRequest
 */
export interface IamPutUserPolicyRequest {
  /**
   * @schema IamPutUserPolicyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamPutUserPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema IamPutUserPolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema IamRemoveClientIdFromOpenIdConnectProviderRequest
 */
export interface IamRemoveClientIdFromOpenIdConnectProviderRequest {
  /**
   * @schema IamRemoveClientIdFromOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

  /**
   * @schema IamRemoveClientIdFromOpenIdConnectProviderRequest#ClientID
   */
  readonly clientId: string;

}

/**
 * @schema IamRemoveRoleFromInstanceProfileRequest
 */
export interface IamRemoveRoleFromInstanceProfileRequest {
  /**
   * @schema IamRemoveRoleFromInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema IamRemoveRoleFromInstanceProfileRequest#RoleName
   */
  readonly roleName: string;

}

/**
 * @schema IamRemoveUserFromGroupRequest
 */
export interface IamRemoveUserFromGroupRequest {
  /**
   * @schema IamRemoveUserFromGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamRemoveUserFromGroupRequest#UserName
   */
  readonly userName: string;

}

/**
 * @schema IamResetServiceSpecificCredentialRequest
 */
export interface IamResetServiceSpecificCredentialRequest {
  /**
   * @schema IamResetServiceSpecificCredentialRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamResetServiceSpecificCredentialRequest#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

}

/**
 * @schema IamResetServiceSpecificCredentialResponse
 */
export interface IamResetServiceSpecificCredentialResponse {
  /**
   * @schema IamResetServiceSpecificCredentialResponse#ServiceSpecificCredential
   */
  readonly serviceSpecificCredential?: IamServiceSpecificCredential;

}

/**
 * @schema IamResyncMfaDeviceRequest
 */
export interface IamResyncMfaDeviceRequest {
  /**
   * @schema IamResyncMfaDeviceRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamResyncMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber: string;

  /**
   * @schema IamResyncMfaDeviceRequest#AuthenticationCode1
   */
  readonly authenticationCode1: string;

  /**
   * @schema IamResyncMfaDeviceRequest#AuthenticationCode2
   */
  readonly authenticationCode2: string;

}

/**
 * @schema IamSetDefaultPolicyVersionRequest
 */
export interface IamSetDefaultPolicyVersionRequest {
  /**
   * @schema IamSetDefaultPolicyVersionRequest#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema IamSetDefaultPolicyVersionRequest#VersionId
   */
  readonly versionId: string;

}

/**
 * @schema IamSetSecurityTokenServicePreferencesRequest
 */
export interface IamSetSecurityTokenServicePreferencesRequest {
  /**
   * @schema IamSetSecurityTokenServicePreferencesRequest#GlobalEndpointTokenVersion
   */
  readonly globalEndpointTokenVersion: string;

}

/**
 * @schema IamSimulateCustomPolicyRequest
 */
export interface IamSimulateCustomPolicyRequest {
  /**
   * @schema IamSimulateCustomPolicyRequest#PolicyInputList
   */
  readonly policyInputList: string[];

  /**
   * @schema IamSimulateCustomPolicyRequest#PermissionsBoundaryPolicyInputList
   */
  readonly permissionsBoundaryPolicyInputList?: string[];

  /**
   * @schema IamSimulateCustomPolicyRequest#ActionNames
   */
  readonly actionNames: string[];

  /**
   * @schema IamSimulateCustomPolicyRequest#ResourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema IamSimulateCustomPolicyRequest#ResourcePolicy
   */
  readonly resourcePolicy?: string;

  /**
   * @schema IamSimulateCustomPolicyRequest#ResourceOwner
   */
  readonly resourceOwner?: string;

  /**
   * @schema IamSimulateCustomPolicyRequest#CallerArn
   */
  readonly callerArn?: string;

  /**
   * @schema IamSimulateCustomPolicyRequest#ContextEntries
   */
  readonly contextEntries?: IamContextEntry[];

  /**
   * @schema IamSimulateCustomPolicyRequest#ResourceHandlingOption
   */
  readonly resourceHandlingOption?: string;

  /**
   * @schema IamSimulateCustomPolicyRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema IamSimulateCustomPolicyRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamSimulatePolicyResponse
 */
export interface IamSimulatePolicyResponse {
  /**
   * @schema IamSimulatePolicyResponse#EvaluationResults
   */
  readonly evaluationResults?: IamEvaluationResult[];

  /**
   * @schema IamSimulatePolicyResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamSimulatePolicyResponse#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamSimulatePrincipalPolicyRequest
 */
export interface IamSimulatePrincipalPolicyRequest {
  /**
   * @schema IamSimulatePrincipalPolicyRequest#PolicySourceArn
   */
  readonly policySourceArn: string;

  /**
   * @schema IamSimulatePrincipalPolicyRequest#PolicyInputList
   */
  readonly policyInputList?: string[];

  /**
   * @schema IamSimulatePrincipalPolicyRequest#PermissionsBoundaryPolicyInputList
   */
  readonly permissionsBoundaryPolicyInputList?: string[];

  /**
   * @schema IamSimulatePrincipalPolicyRequest#ActionNames
   */
  readonly actionNames: string[];

  /**
   * @schema IamSimulatePrincipalPolicyRequest#ResourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema IamSimulatePrincipalPolicyRequest#ResourcePolicy
   */
  readonly resourcePolicy?: string;

  /**
   * @schema IamSimulatePrincipalPolicyRequest#ResourceOwner
   */
  readonly resourceOwner?: string;

  /**
   * @schema IamSimulatePrincipalPolicyRequest#CallerArn
   */
  readonly callerArn?: string;

  /**
   * @schema IamSimulatePrincipalPolicyRequest#ContextEntries
   */
  readonly contextEntries?: IamContextEntry[];

  /**
   * @schema IamSimulatePrincipalPolicyRequest#ResourceHandlingOption
   */
  readonly resourceHandlingOption?: string;

  /**
   * @schema IamSimulatePrincipalPolicyRequest#MaxItems
   */
  readonly maxItems?: number;

  /**
   * @schema IamSimulatePrincipalPolicyRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema IamTagRoleRequest
 */
export interface IamTagRoleRequest {
  /**
   * @schema IamTagRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamTagRoleRequest#Tags
   */
  readonly tags: IamTag[];

}

/**
 * @schema IamTagUserRequest
 */
export interface IamTagUserRequest {
  /**
   * @schema IamTagUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamTagUserRequest#Tags
   */
  readonly tags: IamTag[];

}

/**
 * @schema IamUntagRoleRequest
 */
export interface IamUntagRoleRequest {
  /**
   * @schema IamUntagRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamUntagRoleRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema IamUntagUserRequest
 */
export interface IamUntagUserRequest {
  /**
   * @schema IamUntagUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamUntagUserRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema IamUpdateAccessKeyRequest
 */
export interface IamUpdateAccessKeyRequest {
  /**
   * @schema IamUpdateAccessKeyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamUpdateAccessKeyRequest#AccessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema IamUpdateAccessKeyRequest#Status
   */
  readonly status: string;

}

/**
 * @schema IamUpdateAccountPasswordPolicyRequest
 */
export interface IamUpdateAccountPasswordPolicyRequest {
  /**
   * @schema IamUpdateAccountPasswordPolicyRequest#MinimumPasswordLength
   */
  readonly minimumPasswordLength?: number;

  /**
   * @schema IamUpdateAccountPasswordPolicyRequest#RequireSymbols
   */
  readonly requireSymbols?: boolean;

  /**
   * @schema IamUpdateAccountPasswordPolicyRequest#RequireNumbers
   */
  readonly requireNumbers?: boolean;

  /**
   * @schema IamUpdateAccountPasswordPolicyRequest#RequireUppercaseCharacters
   */
  readonly requireUppercaseCharacters?: boolean;

  /**
   * @schema IamUpdateAccountPasswordPolicyRequest#RequireLowercaseCharacters
   */
  readonly requireLowercaseCharacters?: boolean;

  /**
   * @schema IamUpdateAccountPasswordPolicyRequest#AllowUsersToChangePassword
   */
  readonly allowUsersToChangePassword?: boolean;

  /**
   * @schema IamUpdateAccountPasswordPolicyRequest#MaxPasswordAge
   */
  readonly maxPasswordAge?: number;

  /**
   * @schema IamUpdateAccountPasswordPolicyRequest#PasswordReusePrevention
   */
  readonly passwordReusePrevention?: number;

  /**
   * @schema IamUpdateAccountPasswordPolicyRequest#HardExpiry
   */
  readonly hardExpiry?: boolean;

}

/**
 * @schema IamUpdateAssumeRolePolicyRequest
 */
export interface IamUpdateAssumeRolePolicyRequest {
  /**
   * @schema IamUpdateAssumeRolePolicyRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamUpdateAssumeRolePolicyRequest#PolicyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema IamUpdateGroupRequest
 */
export interface IamUpdateGroupRequest {
  /**
   * @schema IamUpdateGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamUpdateGroupRequest#NewPath
   */
  readonly newPath?: string;

  /**
   * @schema IamUpdateGroupRequest#NewGroupName
   */
  readonly newGroupName?: string;

}

/**
 * @schema IamUpdateLoginProfileRequest
 */
export interface IamUpdateLoginProfileRequest {
  /**
   * @schema IamUpdateLoginProfileRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamUpdateLoginProfileRequest#Password
   */
  readonly password?: string;

  /**
   * @schema IamUpdateLoginProfileRequest#PasswordResetRequired
   */
  readonly passwordResetRequired?: boolean;

}

/**
 * @schema IamUpdateOpenIdConnectProviderThumbprintRequest
 */
export interface IamUpdateOpenIdConnectProviderThumbprintRequest {
  /**
   * @schema IamUpdateOpenIdConnectProviderThumbprintRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn: string;

  /**
   * @schema IamUpdateOpenIdConnectProviderThumbprintRequest#ThumbprintList
   */
  readonly thumbprintList: string[];

}

/**
 * @schema IamUpdateRoleRequest
 */
export interface IamUpdateRoleRequest {
  /**
   * @schema IamUpdateRoleRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamUpdateRoleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IamUpdateRoleRequest#MaxSessionDuration
   */
  readonly maxSessionDuration?: number;

}

/**
 * @schema IamUpdateRoleResponse
 */
export interface IamUpdateRoleResponse {
}

/**
 * @schema IamUpdateRoleDescriptionRequest
 */
export interface IamUpdateRoleDescriptionRequest {
  /**
   * @schema IamUpdateRoleDescriptionRequest#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamUpdateRoleDescriptionRequest#Description
   */
  readonly description: string;

}

/**
 * @schema IamUpdateRoleDescriptionResponse
 */
export interface IamUpdateRoleDescriptionResponse {
  /**
   * @schema IamUpdateRoleDescriptionResponse#Role
   */
  readonly role?: IamRole;

}

/**
 * @schema IamUpdateSamlProviderRequest
 */
export interface IamUpdateSamlProviderRequest {
  /**
   * @schema IamUpdateSamlProviderRequest#SAMLMetadataDocument
   */
  readonly samlMetadataDocument: string;

  /**
   * @schema IamUpdateSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn: string;

}

/**
 * @schema IamUpdateSamlProviderResponse
 */
export interface IamUpdateSamlProviderResponse {
  /**
   * @schema IamUpdateSamlProviderResponse#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

}

/**
 * @schema IamUpdateSshPublicKeyRequest
 */
export interface IamUpdateSshPublicKeyRequest {
  /**
   * @schema IamUpdateSshPublicKeyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamUpdateSshPublicKeyRequest#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema IamUpdateSshPublicKeyRequest#Status
   */
  readonly status: string;

}

/**
 * @schema IamUpdateServerCertificateRequest
 */
export interface IamUpdateServerCertificateRequest {
  /**
   * @schema IamUpdateServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName: string;

  /**
   * @schema IamUpdateServerCertificateRequest#NewPath
   */
  readonly newPath?: string;

  /**
   * @schema IamUpdateServerCertificateRequest#NewServerCertificateName
   */
  readonly newServerCertificateName?: string;

}

/**
 * @schema IamUpdateServiceSpecificCredentialRequest
 */
export interface IamUpdateServiceSpecificCredentialRequest {
  /**
   * @schema IamUpdateServiceSpecificCredentialRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamUpdateServiceSpecificCredentialRequest#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

  /**
   * @schema IamUpdateServiceSpecificCredentialRequest#Status
   */
  readonly status: string;

}

/**
 * @schema IamUpdateSigningCertificateRequest
 */
export interface IamUpdateSigningCertificateRequest {
  /**
   * @schema IamUpdateSigningCertificateRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamUpdateSigningCertificateRequest#CertificateId
   */
  readonly certificateId: string;

  /**
   * @schema IamUpdateSigningCertificateRequest#Status
   */
  readonly status: string;

}

/**
 * @schema IamUpdateUserRequest
 */
export interface IamUpdateUserRequest {
  /**
   * @schema IamUpdateUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamUpdateUserRequest#NewPath
   */
  readonly newPath?: string;

  /**
   * @schema IamUpdateUserRequest#NewUserName
   */
  readonly newUserName?: string;

}

/**
 * @schema IamUploadSshPublicKeyRequest
 */
export interface IamUploadSshPublicKeyRequest {
  /**
   * @schema IamUploadSshPublicKeyRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema IamUploadSshPublicKeyRequest#SSHPublicKeyBody
   */
  readonly sshPublicKeyBody: string;

}

/**
 * @schema IamUploadSshPublicKeyResponse
 */
export interface IamUploadSshPublicKeyResponse {
  /**
   * @schema IamUploadSshPublicKeyResponse#SSHPublicKey
   */
  readonly sshPublicKey?: IamsshPublicKey;

}

/**
 * @schema IamUploadServerCertificateRequest
 */
export interface IamUploadServerCertificateRequest {
  /**
   * @schema IamUploadServerCertificateRequest#Path
   */
  readonly path?: string;

  /**
   * @schema IamUploadServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName: string;

  /**
   * @schema IamUploadServerCertificateRequest#CertificateBody
   */
  readonly certificateBody: string;

  /**
   * @schema IamUploadServerCertificateRequest#PrivateKey
   */
  readonly privateKey: string;

  /**
   * @schema IamUploadServerCertificateRequest#CertificateChain
   */
  readonly certificateChain?: string;

}

/**
 * @schema IamUploadServerCertificateResponse
 */
export interface IamUploadServerCertificateResponse {
  /**
   * @schema IamUploadServerCertificateResponse#ServerCertificateMetadata
   */
  readonly serverCertificateMetadata?: IamServerCertificateMetadata;

}

/**
 * @schema IamUploadSigningCertificateRequest
 */
export interface IamUploadSigningCertificateRequest {
  /**
   * @schema IamUploadSigningCertificateRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamUploadSigningCertificateRequest#CertificateBody
   */
  readonly certificateBody: string;

}

/**
 * @schema IamUploadSigningCertificateResponse
 */
export interface IamUploadSigningCertificateResponse {
  /**
   * @schema IamUploadSigningCertificateResponse#Certificate
   */
  readonly certificate: IamSigningCertificate;

}

/**
 * @schema IamAccessKey
 */
export interface IamAccessKey {
  /**
   * @schema IamAccessKey#UserName
   */
  readonly userName: string;

  /**
   * @schema IamAccessKey#AccessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema IamAccessKey#Status
   */
  readonly status: string;

  /**
   * @schema IamAccessKey#SecretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema IamAccessKey#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema IamGroup
 */
export interface IamGroup {
  /**
   * @schema IamGroup#Path
   */
  readonly path: string;

  /**
   * @schema IamGroup#GroupName
   */
  readonly groupName: string;

  /**
   * @schema IamGroup#GroupId
   */
  readonly groupId: string;

  /**
   * @schema IamGroup#Arn
   */
  readonly arn: string;

  /**
   * @schema IamGroup#CreateDate
   */
  readonly createDate: string;

}

/**
 * @schema IamInstanceProfile
 */
export interface IamInstanceProfile {
  /**
   * @schema IamInstanceProfile#Path
   */
  readonly path: string;

  /**
   * @schema IamInstanceProfile#InstanceProfileName
   */
  readonly instanceProfileName: string;

  /**
   * @schema IamInstanceProfile#InstanceProfileId
   */
  readonly instanceProfileId: string;

  /**
   * @schema IamInstanceProfile#Arn
   */
  readonly arn: string;

  /**
   * @schema IamInstanceProfile#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema IamInstanceProfile#Roles
   */
  readonly roles: IamRole[];

}

/**
 * @schema IamLoginProfile
 */
export interface IamLoginProfile {
  /**
   * @schema IamLoginProfile#UserName
   */
  readonly userName: string;

  /**
   * @schema IamLoginProfile#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema IamLoginProfile#PasswordResetRequired
   */
  readonly passwordResetRequired?: boolean;

}

/**
 * @schema IamPolicy
 */
export interface IamPolicy {
  /**
   * @schema IamPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamPolicy#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema IamPolicy#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamPolicy#Path
   */
  readonly path?: string;

  /**
   * @schema IamPolicy#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema IamPolicy#AttachmentCount
   */
  readonly attachmentCount?: number;

  /**
   * @schema IamPolicy#PermissionsBoundaryUsageCount
   */
  readonly permissionsBoundaryUsageCount?: number;

  /**
   * @schema IamPolicy#IsAttachable
   */
  readonly isAttachable?: boolean;

  /**
   * @schema IamPolicy#Description
   */
  readonly description?: string;

  /**
   * @schema IamPolicy#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamPolicy#UpdateDate
   */
  readonly updateDate?: string;

}

/**
 * @schema IamPolicyVersion
 */
export interface IamPolicyVersion {
  /**
   * @schema IamPolicyVersion#Document
   */
  readonly document?: string;

  /**
   * @schema IamPolicyVersion#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema IamPolicyVersion#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema IamPolicyVersion#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema IamTag
 */
export interface IamTag {
  /**
   * @schema IamTag#Key
   */
  readonly key: string;

  /**
   * @schema IamTag#Value
   */
  readonly value: string;

}

/**
 * @schema IamRole
 */
export interface IamRole {
  /**
   * @schema IamRole#Path
   */
  readonly path: string;

  /**
   * @schema IamRole#RoleName
   */
  readonly roleName: string;

  /**
   * @schema IamRole#RoleId
   */
  readonly roleId: string;

  /**
   * @schema IamRole#Arn
   */
  readonly arn: string;

  /**
   * @schema IamRole#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema IamRole#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema IamRole#Description
   */
  readonly description?: string;

  /**
   * @schema IamRole#MaxSessionDuration
   */
  readonly maxSessionDuration?: number;

  /**
   * @schema IamRole#PermissionsBoundary
   */
  readonly permissionsBoundary?: IamAttachedPermissionsBoundary;

  /**
   * @schema IamRole#Tags
   */
  readonly tags?: IamTag[];

  /**
   * @schema IamRole#RoleLastUsed
   */
  readonly roleLastUsed?: IamRoleLastUsed;

}

/**
 * @schema IamServiceSpecificCredential
 */
export interface IamServiceSpecificCredential {
  /**
   * @schema IamServiceSpecificCredential#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema IamServiceSpecificCredential#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema IamServiceSpecificCredential#ServiceUserName
   */
  readonly serviceUserName: string;

  /**
   * @schema IamServiceSpecificCredential#ServicePassword
   */
  readonly servicePassword: string;

  /**
   * @schema IamServiceSpecificCredential#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

  /**
   * @schema IamServiceSpecificCredential#UserName
   */
  readonly userName: string;

  /**
   * @schema IamServiceSpecificCredential#Status
   */
  readonly status: string;

}

/**
 * @schema IamUser
 */
export interface IamUser {
  /**
   * @schema IamUser#Path
   */
  readonly path: string;

  /**
   * @schema IamUser#UserName
   */
  readonly userName: string;

  /**
   * @schema IamUser#UserId
   */
  readonly userId: string;

  /**
   * @schema IamUser#Arn
   */
  readonly arn: string;

  /**
   * @schema IamUser#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema IamUser#PasswordLastUsed
   */
  readonly passwordLastUsed?: string;

  /**
   * @schema IamUser#PermissionsBoundary
   */
  readonly permissionsBoundary?: IamAttachedPermissionsBoundary;

  /**
   * @schema IamUser#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * @schema IamVirtualMfaDevice
 */
export interface IamVirtualMfaDevice {
  /**
   * @schema IamVirtualMfaDevice#SerialNumber
   */
  readonly serialNumber: string;

  /**
   * @schema IamVirtualMfaDevice#Base32StringSeed
   */
  readonly base32StringSeed?: any;

  /**
   * @schema IamVirtualMfaDevice#QRCodePNG
   */
  readonly qrCodePng?: any;

  /**
   * @schema IamVirtualMfaDevice#User
   */
  readonly user?: IamUser;

  /**
   * @schema IamVirtualMfaDevice#EnableDate
   */
  readonly enableDate?: string;

}

/**
 * @schema IamAccessKeyLastUsed
 */
export interface IamAccessKeyLastUsed {
  /**
   * @schema IamAccessKeyLastUsed#LastUsedDate
   */
  readonly lastUsedDate: string;

  /**
   * @schema IamAccessKeyLastUsed#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema IamAccessKeyLastUsed#Region
   */
  readonly region: string;

}

/**
 * @schema IamUserDetail
 */
export interface IamUserDetail {
  /**
   * @schema IamUserDetail#Path
   */
  readonly path?: string;

  /**
   * @schema IamUserDetail#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamUserDetail#UserId
   */
  readonly userId?: string;

  /**
   * @schema IamUserDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamUserDetail#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamUserDetail#UserPolicyList
   */
  readonly userPolicyList?: IamPolicyDetail[];

  /**
   * @schema IamUserDetail#GroupList
   */
  readonly groupList?: string[];

  /**
   * @schema IamUserDetail#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: IamAttachedPolicy[];

  /**
   * @schema IamUserDetail#PermissionsBoundary
   */
  readonly permissionsBoundary?: IamAttachedPermissionsBoundary;

  /**
   * @schema IamUserDetail#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * @schema IamGroupDetail
 */
export interface IamGroupDetail {
  /**
   * @schema IamGroupDetail#Path
   */
  readonly path?: string;

  /**
   * @schema IamGroupDetail#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamGroupDetail#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema IamGroupDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamGroupDetail#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamGroupDetail#GroupPolicyList
   */
  readonly groupPolicyList?: IamPolicyDetail[];

  /**
   * @schema IamGroupDetail#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: IamAttachedPolicy[];

}

/**
 * @schema IamRoleDetail
 */
export interface IamRoleDetail {
  /**
   * @schema IamRoleDetail#Path
   */
  readonly path?: string;

  /**
   * @schema IamRoleDetail#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamRoleDetail#RoleId
   */
  readonly roleId?: string;

  /**
   * @schema IamRoleDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamRoleDetail#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamRoleDetail#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

  /**
   * @schema IamRoleDetail#InstanceProfileList
   */
  readonly instanceProfileList?: IamInstanceProfile[];

  /**
   * @schema IamRoleDetail#RolePolicyList
   */
  readonly rolePolicyList?: IamPolicyDetail[];

  /**
   * @schema IamRoleDetail#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: IamAttachedPolicy[];

  /**
   * @schema IamRoleDetail#PermissionsBoundary
   */
  readonly permissionsBoundary?: IamAttachedPermissionsBoundary;

  /**
   * @schema IamRoleDetail#Tags
   */
  readonly tags?: IamTag[];

  /**
   * @schema IamRoleDetail#RoleLastUsed
   */
  readonly roleLastUsed?: IamRoleLastUsed;

}

/**
 * @schema IamManagedPolicyDetail
 */
export interface IamManagedPolicyDetail {
  /**
   * @schema IamManagedPolicyDetail#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamManagedPolicyDetail#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema IamManagedPolicyDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamManagedPolicyDetail#Path
   */
  readonly path?: string;

  /**
   * @schema IamManagedPolicyDetail#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema IamManagedPolicyDetail#AttachmentCount
   */
  readonly attachmentCount?: number;

  /**
   * @schema IamManagedPolicyDetail#PermissionsBoundaryUsageCount
   */
  readonly permissionsBoundaryUsageCount?: number;

  /**
   * @schema IamManagedPolicyDetail#IsAttachable
   */
  readonly isAttachable?: boolean;

  /**
   * @schema IamManagedPolicyDetail#Description
   */
  readonly description?: string;

  /**
   * @schema IamManagedPolicyDetail#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamManagedPolicyDetail#UpdateDate
   */
  readonly updateDate?: string;

  /**
   * @schema IamManagedPolicyDetail#PolicyVersionList
   */
  readonly policyVersionList?: IamPolicyVersion[];

}

/**
 * @schema IamPasswordPolicy
 */
export interface IamPasswordPolicy {
  /**
   * @schema IamPasswordPolicy#MinimumPasswordLength
   */
  readonly minimumPasswordLength?: number;

  /**
   * @schema IamPasswordPolicy#RequireSymbols
   */
  readonly requireSymbols?: boolean;

  /**
   * @schema IamPasswordPolicy#RequireNumbers
   */
  readonly requireNumbers?: boolean;

  /**
   * @schema IamPasswordPolicy#RequireUppercaseCharacters
   */
  readonly requireUppercaseCharacters?: boolean;

  /**
   * @schema IamPasswordPolicy#RequireLowercaseCharacters
   */
  readonly requireLowercaseCharacters?: boolean;

  /**
   * @schema IamPasswordPolicy#AllowUsersToChangePassword
   */
  readonly allowUsersToChangePassword?: boolean;

  /**
   * @schema IamPasswordPolicy#ExpirePasswords
   */
  readonly expirePasswords?: boolean;

  /**
   * @schema IamPasswordPolicy#MaxPasswordAge
   */
  readonly maxPasswordAge?: number;

  /**
   * @schema IamPasswordPolicy#PasswordReusePrevention
   */
  readonly passwordReusePrevention?: number;

  /**
   * @schema IamPasswordPolicy#HardExpiry
   */
  readonly hardExpiry?: boolean;

}

/**
 * @schema IamAccessDetail
 */
export interface IamAccessDetail {
  /**
   * @schema IamAccessDetail#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema IamAccessDetail#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema IamAccessDetail#Region
   */
  readonly region?: string;

  /**
   * @schema IamAccessDetail#EntityPath
   */
  readonly entityPath?: string;

  /**
   * @schema IamAccessDetail#LastAuthenticatedTime
   */
  readonly lastAuthenticatedTime?: string;

  /**
   * @schema IamAccessDetail#TotalAuthenticatedEntities
   */
  readonly totalAuthenticatedEntities?: number;

}

/**
 * @schema IamErrorDetails
 */
export interface IamErrorDetails {
  /**
   * @schema IamErrorDetails#Message
   */
  readonly message: string;

  /**
   * @schema IamErrorDetails#Code
   */
  readonly code: string;

}

/**
 * @schema IamsshPublicKey
 */
export interface IamsshPublicKey {
  /**
   * @schema IamsshPublicKey#UserName
   */
  readonly userName: string;

  /**
   * @schema IamsshPublicKey#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema IamsshPublicKey#Fingerprint
   */
  readonly fingerprint: string;

  /**
   * @schema IamsshPublicKey#SSHPublicKeyBody
   */
  readonly sshPublicKeyBody: string;

  /**
   * @schema IamsshPublicKey#Status
   */
  readonly status: string;

  /**
   * @schema IamsshPublicKey#UploadDate
   */
  readonly uploadDate?: string;

}

/**
 * @schema IamServerCertificate
 */
export interface IamServerCertificate {
  /**
   * @schema IamServerCertificate#ServerCertificateMetadata
   */
  readonly serverCertificateMetadata: IamServerCertificateMetadata;

  /**
   * @schema IamServerCertificate#CertificateBody
   */
  readonly certificateBody: string;

  /**
   * @schema IamServerCertificate#CertificateChain
   */
  readonly certificateChain?: string;

}

/**
 * @schema IamServiceLastAccessed
 */
export interface IamServiceLastAccessed {
  /**
   * @schema IamServiceLastAccessed#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema IamServiceLastAccessed#LastAuthenticated
   */
  readonly lastAuthenticated?: string;

  /**
   * @schema IamServiceLastAccessed#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema IamServiceLastAccessed#LastAuthenticatedEntity
   */
  readonly lastAuthenticatedEntity?: string;

  /**
   * @schema IamServiceLastAccessed#LastAuthenticatedRegion
   */
  readonly lastAuthenticatedRegion?: string;

  /**
   * @schema IamServiceLastAccessed#TotalAuthenticatedEntities
   */
  readonly totalAuthenticatedEntities?: number;

  /**
   * @schema IamServiceLastAccessed#TrackedActionsLastAccessed
   */
  readonly trackedActionsLastAccessed?: IamTrackedActionLastAccessed[];

}

/**
 * @schema IamEntityDetails
 */
export interface IamEntityDetails {
  /**
   * @schema IamEntityDetails#EntityInfo
   */
  readonly entityInfo: IamEntityInfo;

  /**
   * @schema IamEntityDetails#LastAuthenticated
   */
  readonly lastAuthenticated?: string;

}

/**
 * @schema IamDeletionTaskFailureReasonType
 */
export interface IamDeletionTaskFailureReasonType {
  /**
   * @schema IamDeletionTaskFailureReasonType#Reason
   */
  readonly reason?: string;

  /**
   * @schema IamDeletionTaskFailureReasonType#RoleUsageList
   */
  readonly roleUsageList?: IamRoleUsageType[];

}

/**
 * @schema IamAccessKeyMetadata
 */
export interface IamAccessKeyMetadata {
  /**
   * @schema IamAccessKeyMetadata#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamAccessKeyMetadata#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema IamAccessKeyMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema IamAccessKeyMetadata#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema IamAttachedPolicy
 */
export interface IamAttachedPolicy {
  /**
   * @schema IamAttachedPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamAttachedPolicy#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema IamPolicyGroup
 */
export interface IamPolicyGroup {
  /**
   * @schema IamPolicyGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamPolicyGroup#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema IamPolicyUser
 */
export interface IamPolicyUser {
  /**
   * @schema IamPolicyUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamPolicyUser#UserId
   */
  readonly userId?: string;

}

/**
 * @schema IamPolicyRole
 */
export interface IamPolicyRole {
  /**
   * @schema IamPolicyRole#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamPolicyRole#RoleId
   */
  readonly roleId?: string;

}

/**
 * @schema IammfaDevice
 */
export interface IammfaDevice {
  /**
   * @schema IammfaDevice#UserName
   */
  readonly userName: string;

  /**
   * @schema IammfaDevice#SerialNumber
   */
  readonly serialNumber: string;

  /**
   * @schema IammfaDevice#EnableDate
   */
  readonly enableDate: string;

}

/**
 * @schema IamOpenIdConnectProviderListEntry
 */
export interface IamOpenIdConnectProviderListEntry {
  /**
   * @schema IamOpenIdConnectProviderListEntry#Arn
   */
  readonly arn?: string;

}

/**
 * @schema IamListPoliciesGrantingServiceAccessEntry
 */
export interface IamListPoliciesGrantingServiceAccessEntry {
  /**
   * @schema IamListPoliciesGrantingServiceAccessEntry#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema IamListPoliciesGrantingServiceAccessEntry#Policies
   */
  readonly policies?: IamPolicyGrantingServiceAccess[];

}

/**
 * @schema IamsamlProviderListEntry
 */
export interface IamsamlProviderListEntry {
  /**
   * @schema IamsamlProviderListEntry#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamsamlProviderListEntry#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema IamsamlProviderListEntry#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema IamsshPublicKeyMetadata
 */
export interface IamsshPublicKeyMetadata {
  /**
   * @schema IamsshPublicKeyMetadata#UserName
   */
  readonly userName: string;

  /**
   * @schema IamsshPublicKeyMetadata#SSHPublicKeyId
   */
  readonly sshPublicKeyId: string;

  /**
   * @schema IamsshPublicKeyMetadata#Status
   */
  readonly status: string;

  /**
   * @schema IamsshPublicKeyMetadata#UploadDate
   */
  readonly uploadDate: string;

}

/**
 * @schema IamServerCertificateMetadata
 */
export interface IamServerCertificateMetadata {
  /**
   * @schema IamServerCertificateMetadata#Path
   */
  readonly path: string;

  /**
   * @schema IamServerCertificateMetadata#ServerCertificateName
   */
  readonly serverCertificateName: string;

  /**
   * @schema IamServerCertificateMetadata#ServerCertificateId
   */
  readonly serverCertificateId: string;

  /**
   * @schema IamServerCertificateMetadata#Arn
   */
  readonly arn: string;

  /**
   * @schema IamServerCertificateMetadata#UploadDate
   */
  readonly uploadDate?: string;

  /**
   * @schema IamServerCertificateMetadata#Expiration
   */
  readonly expiration?: string;

}

/**
 * @schema IamServiceSpecificCredentialMetadata
 */
export interface IamServiceSpecificCredentialMetadata {
  /**
   * @schema IamServiceSpecificCredentialMetadata#UserName
   */
  readonly userName: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#Status
   */
  readonly status: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#ServiceUserName
   */
  readonly serviceUserName: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#CreateDate
   */
  readonly createDate: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#ServiceName
   */
  readonly serviceName: string;

}

/**
 * @schema IamSigningCertificate
 */
export interface IamSigningCertificate {
  /**
   * @schema IamSigningCertificate#UserName
   */
  readonly userName: string;

  /**
   * @schema IamSigningCertificate#CertificateId
   */
  readonly certificateId: string;

  /**
   * @schema IamSigningCertificate#CertificateBody
   */
  readonly certificateBody: string;

  /**
   * @schema IamSigningCertificate#Status
   */
  readonly status: string;

  /**
   * @schema IamSigningCertificate#UploadDate
   */
  readonly uploadDate?: string;

}

/**
 * @schema IamContextEntry
 */
export interface IamContextEntry {
  /**
   * @schema IamContextEntry#ContextKeyName
   */
  readonly contextKeyName?: string;

  /**
   * @schema IamContextEntry#ContextKeyValues
   */
  readonly contextKeyValues?: string[];

  /**
   * @schema IamContextEntry#ContextKeyType
   */
  readonly contextKeyType?: string;

}

/**
 * @schema IamEvaluationResult
 */
export interface IamEvaluationResult {
  /**
   * @schema IamEvaluationResult#EvalActionName
   */
  readonly evalActionName: string;

  /**
   * @schema IamEvaluationResult#EvalResourceName
   */
  readonly evalResourceName?: string;

  /**
   * @schema IamEvaluationResult#EvalDecision
   */
  readonly evalDecision: string;

  /**
   * @schema IamEvaluationResult#MatchedStatements
   */
  readonly matchedStatements?: IamStatement[];

  /**
   * @schema IamEvaluationResult#MissingContextValues
   */
  readonly missingContextValues?: string[];

  /**
   * @schema IamEvaluationResult#OrganizationsDecisionDetail
   */
  readonly organizationsDecisionDetail?: IamOrganizationsDecisionDetail;

  /**
   * @schema IamEvaluationResult#PermissionsBoundaryDecisionDetail
   */
  readonly permissionsBoundaryDecisionDetail?: IamPermissionsBoundaryDecisionDetail;

  /**
   * @schema IamEvaluationResult#EvalDecisionDetails
   */
  readonly evalDecisionDetails?: { [key: string]: string };

  /**
   * @schema IamEvaluationResult#ResourceSpecificResults
   */
  readonly resourceSpecificResults?: IamResourceSpecificResult[];

}

/**
 * @schema IamAttachedPermissionsBoundary
 */
export interface IamAttachedPermissionsBoundary {
  /**
   * @schema IamAttachedPermissionsBoundary#PermissionsBoundaryType
   */
  readonly permissionsBoundaryType?: string;

  /**
   * @schema IamAttachedPermissionsBoundary#PermissionsBoundaryArn
   */
  readonly permissionsBoundaryArn?: string;

}

/**
 * @schema IamRoleLastUsed
 */
export interface IamRoleLastUsed {
  /**
   * @schema IamRoleLastUsed#LastUsedDate
   */
  readonly lastUsedDate?: string;

  /**
   * @schema IamRoleLastUsed#Region
   */
  readonly region?: string;

}

/**
 * @schema IamPolicyDetail
 */
export interface IamPolicyDetail {
  /**
   * @schema IamPolicyDetail#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamPolicyDetail#PolicyDocument
   */
  readonly policyDocument?: string;

}

/**
 * @schema IamTrackedActionLastAccessed
 */
export interface IamTrackedActionLastAccessed {
  /**
   * @schema IamTrackedActionLastAccessed#ActionName
   */
  readonly actionName?: string;

  /**
   * @schema IamTrackedActionLastAccessed#LastAccessedEntity
   */
  readonly lastAccessedEntity?: string;

  /**
   * @schema IamTrackedActionLastAccessed#LastAccessedTime
   */
  readonly lastAccessedTime?: string;

  /**
   * @schema IamTrackedActionLastAccessed#LastAccessedRegion
   */
  readonly lastAccessedRegion?: string;

}

/**
 * @schema IamEntityInfo
 */
export interface IamEntityInfo {
  /**
   * @schema IamEntityInfo#Arn
   */
  readonly arn: string;

  /**
   * @schema IamEntityInfo#Name
   */
  readonly name: string;

  /**
   * @schema IamEntityInfo#Type
   */
  readonly type: string;

  /**
   * @schema IamEntityInfo#Id
   */
  readonly id: string;

  /**
   * @schema IamEntityInfo#Path
   */
  readonly path?: string;

}

/**
 * @schema IamRoleUsageType
 */
export interface IamRoleUsageType {
  /**
   * @schema IamRoleUsageType#Region
   */
  readonly region?: string;

  /**
   * @schema IamRoleUsageType#Resources
   */
  readonly resources?: string[];

}

/**
 * @schema IamPolicyGrantingServiceAccess
 */
export interface IamPolicyGrantingServiceAccess {
  /**
   * @schema IamPolicyGrantingServiceAccess#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema IamPolicyGrantingServiceAccess#PolicyType
   */
  readonly policyType: string;

  /**
   * @schema IamPolicyGrantingServiceAccess#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IamPolicyGrantingServiceAccess#EntityType
   */
  readonly entityType?: string;

  /**
   * @schema IamPolicyGrantingServiceAccess#EntityName
   */
  readonly entityName?: string;

}

/**
 * @schema IamStatement
 */
export interface IamStatement {
  /**
   * @schema IamStatement#SourcePolicyId
   */
  readonly sourcePolicyId?: string;

  /**
   * @schema IamStatement#SourcePolicyType
   */
  readonly sourcePolicyType?: string;

  /**
   * @schema IamStatement#StartPosition
   */
  readonly startPosition?: IamPosition;

  /**
   * @schema IamStatement#EndPosition
   */
  readonly endPosition?: IamPosition;

}

/**
 * @schema IamOrganizationsDecisionDetail
 */
export interface IamOrganizationsDecisionDetail {
  /**
   * @schema IamOrganizationsDecisionDetail#AllowedByOrganizations
   */
  readonly allowedByOrganizations?: boolean;

}

/**
 * @schema IamPermissionsBoundaryDecisionDetail
 */
export interface IamPermissionsBoundaryDecisionDetail {
  /**
   * @schema IamPermissionsBoundaryDecisionDetail#AllowedByPermissionsBoundary
   */
  readonly allowedByPermissionsBoundary?: boolean;

}

/**
 * @schema IamResourceSpecificResult
 */
export interface IamResourceSpecificResult {
  /**
   * @schema IamResourceSpecificResult#EvalResourceName
   */
  readonly evalResourceName: string;

  /**
   * @schema IamResourceSpecificResult#EvalResourceDecision
   */
  readonly evalResourceDecision: string;

  /**
   * @schema IamResourceSpecificResult#MatchedStatements
   */
  readonly matchedStatements?: IamStatement[];

  /**
   * @schema IamResourceSpecificResult#MissingContextValues
   */
  readonly missingContextValues?: string[];

  /**
   * @schema IamResourceSpecificResult#EvalDecisionDetails
   */
  readonly evalDecisionDetails?: { [key: string]: string };

  /**
   * @schema IamResourceSpecificResult#PermissionsBoundaryDecisionDetail
   */
  readonly permissionsBoundaryDecisionDetail?: IamPermissionsBoundaryDecisionDetail;

}

/**
 * @schema IamPosition
 */
export interface IamPosition {
  /**
   * @schema IamPosition#Line
   */
  readonly line?: number;

  /**
   * @schema IamPosition#Column
   */
  readonly column?: number;

}
