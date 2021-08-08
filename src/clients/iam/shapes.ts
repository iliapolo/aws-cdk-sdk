/**
 * @schema IamAddClientIdToOpenIdConnectProviderRequest
 */
export interface IamAddClientIdToOpenIdConnectProviderRequest {
  /**
   * @schema IamAddClientIdToOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

  /**
   * @schema IamAddClientIdToOpenIdConnectProviderRequest#ClientID
   */
  readonly clientId?: string;

}

/**
 * Converts an object of type 'IamAddClientIdToOpenIdConnectProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAddClientIdToOpenIdConnectProviderRequest(obj: IamAddClientIdToOpenIdConnectProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderArn': obj.openIdConnectProviderArn,
    'ClientID': obj.clientId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamAddRoleToInstanceProfileRequest
 */
export interface IamAddRoleToInstanceProfileRequest {
  /**
   * @schema IamAddRoleToInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema IamAddRoleToInstanceProfileRequest#RoleName
   */
  readonly roleName?: string;

}

/**
 * Converts an object of type 'IamAddRoleToInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAddRoleToInstanceProfileRequest(obj: IamAddRoleToInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfileName': obj.instanceProfileName,
    'RoleName': obj.roleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamAddUserToGroupRequest
 */
export interface IamAddUserToGroupRequest {
  /**
   * @schema IamAddUserToGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamAddUserToGroupRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'IamAddUserToGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAddUserToGroupRequest(obj: IamAddUserToGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamAttachGroupPolicyRequest
 */
export interface IamAttachGroupPolicyRequest {
  /**
   * @schema IamAttachGroupPolicyRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamAttachGroupPolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'IamAttachGroupPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAttachGroupPolicyRequest(obj: IamAttachGroupPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamAttachRolePolicyRequest
 */
export interface IamAttachRolePolicyRequest {
  /**
   * @schema IamAttachRolePolicyRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamAttachRolePolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'IamAttachRolePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAttachRolePolicyRequest(obj: IamAttachRolePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamAttachUserPolicyRequest
 */
export interface IamAttachUserPolicyRequest {
  /**
   * @schema IamAttachUserPolicyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamAttachUserPolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'IamAttachUserPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAttachUserPolicyRequest(obj: IamAttachUserPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamChangePasswordRequest
 */
export interface IamChangePasswordRequest {
  /**
   * @schema IamChangePasswordRequest#OldPassword
   */
  readonly oldPassword?: string;

  /**
   * @schema IamChangePasswordRequest#NewPassword
   */
  readonly newPassword?: string;

}

/**
 * Converts an object of type 'IamChangePasswordRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamChangePasswordRequest(obj: IamChangePasswordRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OldPassword': obj.oldPassword,
    'NewPassword': obj.newPassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamCreateAccessKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateAccessKeyRequest(obj: IamCreateAccessKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateAccessKeyResponse
 */
export interface IamCreateAccessKeyResponse {
  /**
   * @schema IamCreateAccessKeyResponse#AccessKey
   */
  readonly accessKey?: IamAccessKey;

}

/**
 * Converts an object of type 'IamCreateAccessKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateAccessKeyResponse(obj: IamCreateAccessKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessKey': toJson_IamAccessKey(obj.accessKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateAccountAliasRequest
 */
export interface IamCreateAccountAliasRequest {
  /**
   * @schema IamCreateAccountAliasRequest#AccountAlias
   */
  readonly accountAlias?: string;

}

/**
 * Converts an object of type 'IamCreateAccountAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateAccountAliasRequest(obj: IamCreateAccountAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAlias': obj.accountAlias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly groupName?: string;

}

/**
 * Converts an object of type 'IamCreateGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateGroupRequest(obj: IamCreateGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'GroupName': obj.groupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateGroupResponse
 */
export interface IamCreateGroupResponse {
  /**
   * @schema IamCreateGroupResponse#Group
   */
  readonly group?: IamGroup;

}

/**
 * Converts an object of type 'IamCreateGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateGroupResponse(obj: IamCreateGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_IamGroup(obj.group),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateInstanceProfileRequest
 */
export interface IamCreateInstanceProfileRequest {
  /**
   * @schema IamCreateInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema IamCreateInstanceProfileRequest#Path
   */
  readonly path?: string;

  /**
   * @schema IamCreateInstanceProfileRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamCreateInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateInstanceProfileRequest(obj: IamCreateInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfileName': obj.instanceProfileName,
    'Path': obj.path,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateInstanceProfileResponse
 */
export interface IamCreateInstanceProfileResponse {
  /**
   * @schema IamCreateInstanceProfileResponse#InstanceProfile
   */
  readonly instanceProfile?: IamInstanceProfile;

}

/**
 * Converts an object of type 'IamCreateInstanceProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateInstanceProfileResponse(obj: IamCreateInstanceProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfile': toJson_IamInstanceProfile(obj.instanceProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateLoginProfileRequest
 */
export interface IamCreateLoginProfileRequest {
  /**
   * @schema IamCreateLoginProfileRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamCreateLoginProfileRequest#Password
   */
  readonly password?: string;

  /**
   * @schema IamCreateLoginProfileRequest#PasswordResetRequired
   */
  readonly passwordResetRequired?: boolean;

}

/**
 * Converts an object of type 'IamCreateLoginProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateLoginProfileRequest(obj: IamCreateLoginProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Password': obj.password,
    'PasswordResetRequired': obj.passwordResetRequired,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateLoginProfileResponse
 */
export interface IamCreateLoginProfileResponse {
  /**
   * @schema IamCreateLoginProfileResponse#LoginProfile
   */
  readonly loginProfile?: IamLoginProfile;

}

/**
 * Converts an object of type 'IamCreateLoginProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateLoginProfileResponse(obj: IamCreateLoginProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoginProfile': toJson_IamLoginProfile(obj.loginProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateOpenIdConnectProviderRequest
 */
export interface IamCreateOpenIdConnectProviderRequest {
  /**
   * @schema IamCreateOpenIdConnectProviderRequest#Url
   */
  readonly url?: string;

  /**
   * @schema IamCreateOpenIdConnectProviderRequest#ClientIDList
   */
  readonly clientIdList?: string[];

  /**
   * @schema IamCreateOpenIdConnectProviderRequest#ThumbprintList
   */
  readonly thumbprintList?: string[];

  /**
   * @schema IamCreateOpenIdConnectProviderRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamCreateOpenIdConnectProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateOpenIdConnectProviderRequest(obj: IamCreateOpenIdConnectProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'ClientIDList': obj.clientIdList?.map(y => y),
    'ThumbprintList': obj.thumbprintList?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateOpenIdConnectProviderResponse
 */
export interface IamCreateOpenIdConnectProviderResponse {
  /**
   * @schema IamCreateOpenIdConnectProviderResponse#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

  /**
   * @schema IamCreateOpenIdConnectProviderResponse#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamCreateOpenIdConnectProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateOpenIdConnectProviderResponse(obj: IamCreateOpenIdConnectProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderArn': obj.openIdConnectProviderArn,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreatePolicyRequest
 */
export interface IamCreatePolicyRequest {
  /**
   * @schema IamCreatePolicyRequest#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamCreatePolicyRequest#Path
   */
  readonly path?: string;

  /**
   * @schema IamCreatePolicyRequest#PolicyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema IamCreatePolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IamCreatePolicyRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamCreatePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreatePolicyRequest(obj: IamCreatePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'Path': obj.path,
    'PolicyDocument': obj.policyDocument,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamCreatePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreatePolicyResponse(obj: IamCreatePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_IamPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreatePolicyVersionRequest
 */
export interface IamCreatePolicyVersionRequest {
  /**
   * @schema IamCreatePolicyVersionRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IamCreatePolicyVersionRequest#PolicyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema IamCreatePolicyVersionRequest#SetAsDefault
   */
  readonly setAsDefault?: boolean;

}

/**
 * Converts an object of type 'IamCreatePolicyVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreatePolicyVersionRequest(obj: IamCreatePolicyVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'PolicyDocument': obj.policyDocument,
    'SetAsDefault': obj.setAsDefault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamCreatePolicyVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreatePolicyVersionResponse(obj: IamCreatePolicyVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyVersion': toJson_IamPolicyVersion(obj.policyVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly roleName?: string;

  /**
   * @schema IamCreateRoleRequest#AssumeRolePolicyDocument
   */
  readonly assumeRolePolicyDocument?: string;

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
 * Converts an object of type 'IamCreateRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateRoleRequest(obj: IamCreateRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'RoleName': obj.roleName,
    'AssumeRolePolicyDocument': obj.assumeRolePolicyDocument,
    'Description': obj.description,
    'MaxSessionDuration': obj.maxSessionDuration,
    'PermissionsBoundary': obj.permissionsBoundary,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateRoleResponse
 */
export interface IamCreateRoleResponse {
  /**
   * @schema IamCreateRoleResponse#Role
   */
  readonly role?: IamRole;

}

/**
 * Converts an object of type 'IamCreateRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateRoleResponse(obj: IamCreateRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Role': toJson_IamRole(obj.role),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateSamlProviderRequest
 */
export interface IamCreateSamlProviderRequest {
  /**
   * @schema IamCreateSamlProviderRequest#SAMLMetadataDocument
   */
  readonly samlMetadataDocument?: string;

  /**
   * @schema IamCreateSamlProviderRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IamCreateSamlProviderRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamCreateSamlProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateSamlProviderRequest(obj: IamCreateSamlProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLMetadataDocument': obj.samlMetadataDocument,
    'Name': obj.name,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateSamlProviderResponse
 */
export interface IamCreateSamlProviderResponse {
  /**
   * @schema IamCreateSamlProviderResponse#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

  /**
   * @schema IamCreateSamlProviderResponse#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamCreateSamlProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateSamlProviderResponse(obj: IamCreateSamlProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLProviderArn': obj.samlProviderArn,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateServiceLinkedRoleRequest
 */
export interface IamCreateServiceLinkedRoleRequest {
  /**
   * @schema IamCreateServiceLinkedRoleRequest#AWSServiceName
   */
  readonly awsServiceName?: string;

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
 * Converts an object of type 'IamCreateServiceLinkedRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateServiceLinkedRoleRequest(obj: IamCreateServiceLinkedRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AWSServiceName': obj.awsServiceName,
    'Description': obj.description,
    'CustomSuffix': obj.customSuffix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamCreateServiceLinkedRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateServiceLinkedRoleResponse(obj: IamCreateServiceLinkedRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Role': toJson_IamRole(obj.role),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateServiceSpecificCredentialRequest
 */
export interface IamCreateServiceSpecificCredentialRequest {
  /**
   * @schema IamCreateServiceSpecificCredentialRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamCreateServiceSpecificCredentialRequest#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'IamCreateServiceSpecificCredentialRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateServiceSpecificCredentialRequest(obj: IamCreateServiceSpecificCredentialRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'ServiceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamCreateServiceSpecificCredentialResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateServiceSpecificCredentialResponse(obj: IamCreateServiceSpecificCredentialResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceSpecificCredential': toJson_IamServiceSpecificCredential(obj.serviceSpecificCredential),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly userName?: string;

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
 * Converts an object of type 'IamCreateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateUserRequest(obj: IamCreateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'UserName': obj.userName,
    'PermissionsBoundary': obj.permissionsBoundary,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamCreateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateUserResponse(obj: IamCreateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_IamUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly virtualMfaDeviceName?: string;

  /**
   * @schema IamCreateVirtualMfaDeviceRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamCreateVirtualMfaDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateVirtualMfaDeviceRequest(obj: IamCreateVirtualMfaDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'VirtualMFADeviceName': obj.virtualMfaDeviceName,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamCreateVirtualMfaDeviceResponse
 */
export interface IamCreateVirtualMfaDeviceResponse {
  /**
   * @schema IamCreateVirtualMfaDeviceResponse#VirtualMFADevice
   */
  readonly virtualMfaDevice?: IamVirtualMfaDevice;

}

/**
 * Converts an object of type 'IamCreateVirtualMfaDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamCreateVirtualMfaDeviceResponse(obj: IamCreateVirtualMfaDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VirtualMFADevice': toJson_IamVirtualMfaDevice(obj.virtualMfaDevice),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeactivateMfaDeviceRequest
 */
export interface IamDeactivateMfaDeviceRequest {
  /**
   * @schema IamDeactivateMfaDeviceRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamDeactivateMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

}

/**
 * Converts an object of type 'IamDeactivateMfaDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeactivateMfaDeviceRequest(obj: IamDeactivateMfaDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SerialNumber': obj.serialNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly accessKeyId?: string;

}

/**
 * Converts an object of type 'IamDeleteAccessKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteAccessKeyRequest(obj: IamDeleteAccessKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AccessKeyId': obj.accessKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteAccountAliasRequest
 */
export interface IamDeleteAccountAliasRequest {
  /**
   * @schema IamDeleteAccountAliasRequest#AccountAlias
   */
  readonly accountAlias?: string;

}

/**
 * Converts an object of type 'IamDeleteAccountAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteAccountAliasRequest(obj: IamDeleteAccountAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAlias': obj.accountAlias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteGroupRequest
 */
export interface IamDeleteGroupRequest {
  /**
   * @schema IamDeleteGroupRequest#GroupName
   */
  readonly groupName?: string;

}

/**
 * Converts an object of type 'IamDeleteGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteGroupRequest(obj: IamDeleteGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteGroupPolicyRequest
 */
export interface IamDeleteGroupPolicyRequest {
  /**
   * @schema IamDeleteGroupPolicyRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamDeleteGroupPolicyRequest#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'IamDeleteGroupPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteGroupPolicyRequest(obj: IamDeleteGroupPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteInstanceProfileRequest
 */
export interface IamDeleteInstanceProfileRequest {
  /**
   * @schema IamDeleteInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName?: string;

}

/**
 * Converts an object of type 'IamDeleteInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteInstanceProfileRequest(obj: IamDeleteInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfileName': obj.instanceProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteLoginProfileRequest
 */
export interface IamDeleteLoginProfileRequest {
  /**
   * @schema IamDeleteLoginProfileRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'IamDeleteLoginProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteLoginProfileRequest(obj: IamDeleteLoginProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteOpenIdConnectProviderRequest
 */
export interface IamDeleteOpenIdConnectProviderRequest {
  /**
   * @schema IamDeleteOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

}

/**
 * Converts an object of type 'IamDeleteOpenIdConnectProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteOpenIdConnectProviderRequest(obj: IamDeleteOpenIdConnectProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderArn': obj.openIdConnectProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeletePolicyRequest
 */
export interface IamDeletePolicyRequest {
  /**
   * @schema IamDeletePolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'IamDeletePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeletePolicyRequest(obj: IamDeletePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeletePolicyVersionRequest
 */
export interface IamDeletePolicyVersionRequest {
  /**
   * @schema IamDeletePolicyVersionRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IamDeletePolicyVersionRequest#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'IamDeletePolicyVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeletePolicyVersionRequest(obj: IamDeletePolicyVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteRoleRequest
 */
export interface IamDeleteRoleRequest {
  /**
   * @schema IamDeleteRoleRequest#RoleName
   */
  readonly roleName?: string;

}

/**
 * Converts an object of type 'IamDeleteRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteRoleRequest(obj: IamDeleteRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteRolePermissionsBoundaryRequest
 */
export interface IamDeleteRolePermissionsBoundaryRequest {
  /**
   * @schema IamDeleteRolePermissionsBoundaryRequest#RoleName
   */
  readonly roleName?: string;

}

/**
 * Converts an object of type 'IamDeleteRolePermissionsBoundaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteRolePermissionsBoundaryRequest(obj: IamDeleteRolePermissionsBoundaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteRolePolicyRequest
 */
export interface IamDeleteRolePolicyRequest {
  /**
   * @schema IamDeleteRolePolicyRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamDeleteRolePolicyRequest#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'IamDeleteRolePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteRolePolicyRequest(obj: IamDeleteRolePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteSamlProviderRequest
 */
export interface IamDeleteSamlProviderRequest {
  /**
   * @schema IamDeleteSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

}

/**
 * Converts an object of type 'IamDeleteSamlProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteSamlProviderRequest(obj: IamDeleteSamlProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLProviderArn': obj.samlProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteSshPublicKeyRequest
 */
export interface IamDeleteSshPublicKeyRequest {
  /**
   * @schema IamDeleteSshPublicKeyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamDeleteSshPublicKeyRequest#SSHPublicKeyId
   */
  readonly sshPublicKeyId?: string;

}

/**
 * Converts an object of type 'IamDeleteSshPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteSshPublicKeyRequest(obj: IamDeleteSshPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SSHPublicKeyId': obj.sshPublicKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteServerCertificateRequest
 */
export interface IamDeleteServerCertificateRequest {
  /**
   * @schema IamDeleteServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName?: string;

}

/**
 * Converts an object of type 'IamDeleteServerCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteServerCertificateRequest(obj: IamDeleteServerCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificateName': obj.serverCertificateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteServiceLinkedRoleRequest
 */
export interface IamDeleteServiceLinkedRoleRequest {
  /**
   * @schema IamDeleteServiceLinkedRoleRequest#RoleName
   */
  readonly roleName?: string;

}

/**
 * Converts an object of type 'IamDeleteServiceLinkedRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteServiceLinkedRoleRequest(obj: IamDeleteServiceLinkedRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteServiceLinkedRoleResponse
 */
export interface IamDeleteServiceLinkedRoleResponse {
  /**
   * @schema IamDeleteServiceLinkedRoleResponse#DeletionTaskId
   */
  readonly deletionTaskId?: string;

}

/**
 * Converts an object of type 'IamDeleteServiceLinkedRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteServiceLinkedRoleResponse(obj: IamDeleteServiceLinkedRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeletionTaskId': obj.deletionTaskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly serviceSpecificCredentialId?: string;

}

/**
 * Converts an object of type 'IamDeleteServiceSpecificCredentialRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteServiceSpecificCredentialRequest(obj: IamDeleteServiceSpecificCredentialRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'ServiceSpecificCredentialId': obj.serviceSpecificCredentialId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly certificateId?: string;

}

/**
 * Converts an object of type 'IamDeleteSigningCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteSigningCertificateRequest(obj: IamDeleteSigningCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'CertificateId': obj.certificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteUserRequest
 */
export interface IamDeleteUserRequest {
  /**
   * @schema IamDeleteUserRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'IamDeleteUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteUserRequest(obj: IamDeleteUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteUserPermissionsBoundaryRequest
 */
export interface IamDeleteUserPermissionsBoundaryRequest {
  /**
   * @schema IamDeleteUserPermissionsBoundaryRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'IamDeleteUserPermissionsBoundaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteUserPermissionsBoundaryRequest(obj: IamDeleteUserPermissionsBoundaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteUserPolicyRequest
 */
export interface IamDeleteUserPolicyRequest {
  /**
   * @schema IamDeleteUserPolicyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamDeleteUserPolicyRequest#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'IamDeleteUserPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteUserPolicyRequest(obj: IamDeleteUserPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDeleteVirtualMfaDeviceRequest
 */
export interface IamDeleteVirtualMfaDeviceRequest {
  /**
   * @schema IamDeleteVirtualMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

}

/**
 * Converts an object of type 'IamDeleteVirtualMfaDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeleteVirtualMfaDeviceRequest(obj: IamDeleteVirtualMfaDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SerialNumber': obj.serialNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDetachGroupPolicyRequest
 */
export interface IamDetachGroupPolicyRequest {
  /**
   * @schema IamDetachGroupPolicyRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamDetachGroupPolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'IamDetachGroupPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDetachGroupPolicyRequest(obj: IamDetachGroupPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDetachRolePolicyRequest
 */
export interface IamDetachRolePolicyRequest {
  /**
   * @schema IamDetachRolePolicyRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamDetachRolePolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'IamDetachRolePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDetachRolePolicyRequest(obj: IamDetachRolePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamDetachUserPolicyRequest
 */
export interface IamDetachUserPolicyRequest {
  /**
   * @schema IamDetachUserPolicyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamDetachUserPolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'IamDetachUserPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDetachUserPolicyRequest(obj: IamDetachUserPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamEnableMfaDeviceRequest
 */
export interface IamEnableMfaDeviceRequest {
  /**
   * @schema IamEnableMfaDeviceRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamEnableMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema IamEnableMfaDeviceRequest#AuthenticationCode1
   */
  readonly authenticationCode1?: string;

  /**
   * @schema IamEnableMfaDeviceRequest#AuthenticationCode2
   */
  readonly authenticationCode2?: string;

}

/**
 * Converts an object of type 'IamEnableMfaDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamEnableMfaDeviceRequest(obj: IamEnableMfaDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SerialNumber': obj.serialNumber,
    'AuthenticationCode1': obj.authenticationCode1,
    'AuthenticationCode2': obj.authenticationCode2,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGenerateCredentialReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGenerateCredentialReportResponse(obj: IamGenerateCredentialReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGenerateOrganizationsAccessReportRequest
 */
export interface IamGenerateOrganizationsAccessReportRequest {
  /**
   * @schema IamGenerateOrganizationsAccessReportRequest#EntityPath
   */
  readonly entityPath?: string;

  /**
   * @schema IamGenerateOrganizationsAccessReportRequest#OrganizationsPolicyId
   */
  readonly organizationsPolicyId?: string;

}

/**
 * Converts an object of type 'IamGenerateOrganizationsAccessReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGenerateOrganizationsAccessReportRequest(obj: IamGenerateOrganizationsAccessReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityPath': obj.entityPath,
    'OrganizationsPolicyId': obj.organizationsPolicyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGenerateOrganizationsAccessReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGenerateOrganizationsAccessReportResponse(obj: IamGenerateOrganizationsAccessReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGenerateServiceLastAccessedDetailsRequest
 */
export interface IamGenerateServiceLastAccessedDetailsRequest {
  /**
   * @schema IamGenerateServiceLastAccessedDetailsRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamGenerateServiceLastAccessedDetailsRequest#Granularity
   */
  readonly granularity?: string;

}

/**
 * Converts an object of type 'IamGenerateServiceLastAccessedDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGenerateServiceLastAccessedDetailsRequest(obj: IamGenerateServiceLastAccessedDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Granularity': obj.granularity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGenerateServiceLastAccessedDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGenerateServiceLastAccessedDetailsResponse(obj: IamGenerateServiceLastAccessedDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetAccessKeyLastUsedRequest
 */
export interface IamGetAccessKeyLastUsedRequest {
  /**
   * @schema IamGetAccessKeyLastUsedRequest#AccessKeyId
   */
  readonly accessKeyId?: string;

}

/**
 * Converts an object of type 'IamGetAccessKeyLastUsedRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetAccessKeyLastUsedRequest(obj: IamGetAccessKeyLastUsedRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessKeyId': obj.accessKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetAccessKeyLastUsedResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetAccessKeyLastUsedResponse(obj: IamGetAccessKeyLastUsedResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AccessKeyLastUsed': toJson_IamAccessKeyLastUsed(obj.accessKeyLastUsed),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetAccountAuthorizationDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetAccountAuthorizationDetailsRequest(obj: IamGetAccountAuthorizationDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': obj.filter?.map(y => y),
    'MaxItems': obj.maxItems,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetAccountAuthorizationDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetAccountAuthorizationDetailsResponse(obj: IamGetAccountAuthorizationDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserDetailList': obj.userDetailList?.map(y => toJson_IamUserDetail(y)),
    'GroupDetailList': obj.groupDetailList?.map(y => toJson_IamGroupDetail(y)),
    'RoleDetailList': obj.roleDetailList?.map(y => toJson_IamRoleDetail(y)),
    'Policies': obj.policies?.map(y => toJson_IamManagedPolicyDetail(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetAccountPasswordPolicyResponse
 */
export interface IamGetAccountPasswordPolicyResponse {
  /**
   * @schema IamGetAccountPasswordPolicyResponse#PasswordPolicy
   */
  readonly passwordPolicy?: IamPasswordPolicy;

}

/**
 * Converts an object of type 'IamGetAccountPasswordPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetAccountPasswordPolicyResponse(obj: IamGetAccountPasswordPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PasswordPolicy': toJson_IamPasswordPolicy(obj.passwordPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetAccountSummaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetAccountSummaryResponse(obj: IamGetAccountSummaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SummaryMap': ((obj.summaryMap) === undefined) ? undefined : (Object.entries(obj.summaryMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetContextKeysForCustomPolicyRequest
 */
export interface IamGetContextKeysForCustomPolicyRequest {
  /**
   * @schema IamGetContextKeysForCustomPolicyRequest#PolicyInputList
   */
  readonly policyInputList?: string[];

}

/**
 * Converts an object of type 'IamGetContextKeysForCustomPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetContextKeysForCustomPolicyRequest(obj: IamGetContextKeysForCustomPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyInputList': obj.policyInputList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetContextKeysForPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetContextKeysForPolicyResponse(obj: IamGetContextKeysForPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContextKeyNames': obj.contextKeyNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetContextKeysForPrincipalPolicyRequest
 */
export interface IamGetContextKeysForPrincipalPolicyRequest {
  /**
   * @schema IamGetContextKeysForPrincipalPolicyRequest#PolicySourceArn
   */
  readonly policySourceArn?: string;

  /**
   * @schema IamGetContextKeysForPrincipalPolicyRequest#PolicyInputList
   */
  readonly policyInputList?: string[];

}

/**
 * Converts an object of type 'IamGetContextKeysForPrincipalPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetContextKeysForPrincipalPolicyRequest(obj: IamGetContextKeysForPrincipalPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicySourceArn': obj.policySourceArn,
    'PolicyInputList': obj.policyInputList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetCredentialReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetCredentialReportResponse(obj: IamGetCredentialReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
    'ReportFormat': obj.reportFormat,
    'GeneratedTime': obj.generatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetGroupRequest
 */
export interface IamGetGroupRequest {
  /**
   * @schema IamGetGroupRequest#GroupName
   */
  readonly groupName?: string;

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
 * Converts an object of type 'IamGetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetGroupRequest(obj: IamGetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetGroupResponse
 */
export interface IamGetGroupResponse {
  /**
   * @schema IamGetGroupResponse#Group
   */
  readonly group?: IamGroup;

  /**
   * @schema IamGetGroupResponse#Users
   */
  readonly users?: IamUser[];

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
 * Converts an object of type 'IamGetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetGroupResponse(obj: IamGetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_IamGroup(obj.group),
    'Users': obj.users?.map(y => toJson_IamUser(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetGroupPolicyRequest
 */
export interface IamGetGroupPolicyRequest {
  /**
   * @schema IamGetGroupPolicyRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamGetGroupPolicyRequest#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'IamGetGroupPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetGroupPolicyRequest(obj: IamGetGroupPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetGroupPolicyResponse
 */
export interface IamGetGroupPolicyResponse {
  /**
   * @schema IamGetGroupPolicyResponse#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamGetGroupPolicyResponse#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamGetGroupPolicyResponse#PolicyDocument
   */
  readonly policyDocument?: string;

}

/**
 * Converts an object of type 'IamGetGroupPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetGroupPolicyResponse(obj: IamGetGroupPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'PolicyName': obj.policyName,
    'PolicyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetInstanceProfileRequest
 */
export interface IamGetInstanceProfileRequest {
  /**
   * @schema IamGetInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName?: string;

}

/**
 * Converts an object of type 'IamGetInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetInstanceProfileRequest(obj: IamGetInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfileName': obj.instanceProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetInstanceProfileResponse
 */
export interface IamGetInstanceProfileResponse {
  /**
   * @schema IamGetInstanceProfileResponse#InstanceProfile
   */
  readonly instanceProfile?: IamInstanceProfile;

}

/**
 * Converts an object of type 'IamGetInstanceProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetInstanceProfileResponse(obj: IamGetInstanceProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfile': toJson_IamInstanceProfile(obj.instanceProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetLoginProfileRequest
 */
export interface IamGetLoginProfileRequest {
  /**
   * @schema IamGetLoginProfileRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'IamGetLoginProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetLoginProfileRequest(obj: IamGetLoginProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetLoginProfileResponse
 */
export interface IamGetLoginProfileResponse {
  /**
   * @schema IamGetLoginProfileResponse#LoginProfile
   */
  readonly loginProfile?: IamLoginProfile;

}

/**
 * Converts an object of type 'IamGetLoginProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetLoginProfileResponse(obj: IamGetLoginProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoginProfile': toJson_IamLoginProfile(obj.loginProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetOpenIdConnectProviderRequest
 */
export interface IamGetOpenIdConnectProviderRequest {
  /**
   * @schema IamGetOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

}

/**
 * Converts an object of type 'IamGetOpenIdConnectProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetOpenIdConnectProviderRequest(obj: IamGetOpenIdConnectProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderArn': obj.openIdConnectProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IamGetOpenIdConnectProviderResponse#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamGetOpenIdConnectProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetOpenIdConnectProviderResponse(obj: IamGetOpenIdConnectProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
    'ClientIDList': obj.clientIdList?.map(y => y),
    'ThumbprintList': obj.thumbprintList?.map(y => y),
    'CreateDate': obj.createDate,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetOrganizationsAccessReportRequest
 */
export interface IamGetOrganizationsAccessReportRequest {
  /**
   * @schema IamGetOrganizationsAccessReportRequest#JobId
   */
  readonly jobId?: string;

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
 * Converts an object of type 'IamGetOrganizationsAccessReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetOrganizationsAccessReportRequest(obj: IamGetOrganizationsAccessReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxItems': obj.maxItems,
    'Marker': obj.marker,
    'SortKey': obj.sortKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetOrganizationsAccessReportResponse
 */
export interface IamGetOrganizationsAccessReportResponse {
  /**
   * @schema IamGetOrganizationsAccessReportResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema IamGetOrganizationsAccessReportResponse#JobCreationDate
   */
  readonly jobCreationDate?: string;

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
 * Converts an object of type 'IamGetOrganizationsAccessReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetOrganizationsAccessReportResponse(obj: IamGetOrganizationsAccessReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'JobCreationDate': obj.jobCreationDate,
    'JobCompletionDate': obj.jobCompletionDate,
    'NumberOfServicesAccessible': obj.numberOfServicesAccessible,
    'NumberOfServicesNotAccessed': obj.numberOfServicesNotAccessed,
    'AccessDetails': obj.accessDetails?.map(y => toJson_IamAccessDetail(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
    'ErrorDetails': toJson_IamErrorDetails(obj.errorDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetPolicyRequest
 */
export interface IamGetPolicyRequest {
  /**
   * @schema IamGetPolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'IamGetPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetPolicyRequest(obj: IamGetPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetPolicyResponse(obj: IamGetPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_IamPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetPolicyVersionRequest
 */
export interface IamGetPolicyVersionRequest {
  /**
   * @schema IamGetPolicyVersionRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IamGetPolicyVersionRequest#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'IamGetPolicyVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetPolicyVersionRequest(obj: IamGetPolicyVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetPolicyVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetPolicyVersionResponse(obj: IamGetPolicyVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyVersion': toJson_IamPolicyVersion(obj.policyVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetRoleRequest
 */
export interface IamGetRoleRequest {
  /**
   * @schema IamGetRoleRequest#RoleName
   */
  readonly roleName?: string;

}

/**
 * Converts an object of type 'IamGetRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetRoleRequest(obj: IamGetRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetRoleResponse
 */
export interface IamGetRoleResponse {
  /**
   * @schema IamGetRoleResponse#Role
   */
  readonly role?: IamRole;

}

/**
 * Converts an object of type 'IamGetRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetRoleResponse(obj: IamGetRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Role': toJson_IamRole(obj.role),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetRolePolicyRequest
 */
export interface IamGetRolePolicyRequest {
  /**
   * @schema IamGetRolePolicyRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamGetRolePolicyRequest#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'IamGetRolePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetRolePolicyRequest(obj: IamGetRolePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetRolePolicyResponse
 */
export interface IamGetRolePolicyResponse {
  /**
   * @schema IamGetRolePolicyResponse#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamGetRolePolicyResponse#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamGetRolePolicyResponse#PolicyDocument
   */
  readonly policyDocument?: string;

}

/**
 * Converts an object of type 'IamGetRolePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetRolePolicyResponse(obj: IamGetRolePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'PolicyName': obj.policyName,
    'PolicyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetSamlProviderRequest
 */
export interface IamGetSamlProviderRequest {
  /**
   * @schema IamGetSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

}

/**
 * Converts an object of type 'IamGetSamlProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetSamlProviderRequest(obj: IamGetSamlProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLProviderArn': obj.samlProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IamGetSamlProviderResponse#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamGetSamlProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetSamlProviderResponse(obj: IamGetSamlProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLMetadataDocument': obj.samlMetadataDocument,
    'CreateDate': obj.createDate,
    'ValidUntil': obj.validUntil,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetSshPublicKeyRequest
 */
export interface IamGetSshPublicKeyRequest {
  /**
   * @schema IamGetSshPublicKeyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamGetSshPublicKeyRequest#SSHPublicKeyId
   */
  readonly sshPublicKeyId?: string;

  /**
   * @schema IamGetSshPublicKeyRequest#Encoding
   */
  readonly encoding?: string;

}

/**
 * Converts an object of type 'IamGetSshPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetSshPublicKeyRequest(obj: IamGetSshPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SSHPublicKeyId': obj.sshPublicKeyId,
    'Encoding': obj.encoding,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetSshPublicKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetSshPublicKeyResponse(obj: IamGetSshPublicKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SSHPublicKey': toJson_IamsshPublicKey(obj.sshPublicKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetServerCertificateRequest
 */
export interface IamGetServerCertificateRequest {
  /**
   * @schema IamGetServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName?: string;

}

/**
 * Converts an object of type 'IamGetServerCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetServerCertificateRequest(obj: IamGetServerCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificateName': obj.serverCertificateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetServerCertificateResponse
 */
export interface IamGetServerCertificateResponse {
  /**
   * @schema IamGetServerCertificateResponse#ServerCertificate
   */
  readonly serverCertificate?: IamServerCertificate;

}

/**
 * Converts an object of type 'IamGetServerCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetServerCertificateResponse(obj: IamGetServerCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificate': toJson_IamServerCertificate(obj.serverCertificate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetServiceLastAccessedDetailsRequest
 */
export interface IamGetServiceLastAccessedDetailsRequest {
  /**
   * @schema IamGetServiceLastAccessedDetailsRequest#JobId
   */
  readonly jobId?: string;

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
 * Converts an object of type 'IamGetServiceLastAccessedDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetServiceLastAccessedDetailsRequest(obj: IamGetServiceLastAccessedDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxItems': obj.maxItems,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetServiceLastAccessedDetailsResponse
 */
export interface IamGetServiceLastAccessedDetailsResponse {
  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#JobType
   */
  readonly jobType?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#JobCreationDate
   */
  readonly jobCreationDate?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#ServicesLastAccessed
   */
  readonly servicesLastAccessed?: IamServiceLastAccessed[];

  /**
   * @schema IamGetServiceLastAccessedDetailsResponse#JobCompletionDate
   */
  readonly jobCompletionDate?: string;

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
 * Converts an object of type 'IamGetServiceLastAccessedDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetServiceLastAccessedDetailsResponse(obj: IamGetServiceLastAccessedDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'JobType': obj.jobType,
    'JobCreationDate': obj.jobCreationDate,
    'ServicesLastAccessed': obj.servicesLastAccessed?.map(y => toJson_IamServiceLastAccessed(y)),
    'JobCompletionDate': obj.jobCompletionDate,
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
    'Error': toJson_IamErrorDetails(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetServiceLastAccessedDetailsWithEntitiesRequest
 */
export interface IamGetServiceLastAccessedDetailsWithEntitiesRequest {
  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

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
 * Converts an object of type 'IamGetServiceLastAccessedDetailsWithEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetServiceLastAccessedDetailsWithEntitiesRequest(obj: IamGetServiceLastAccessedDetailsWithEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'ServiceNamespace': obj.serviceNamespace,
    'MaxItems': obj.maxItems,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse
 */
export interface IamGetServiceLastAccessedDetailsWithEntitiesResponse {
  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#JobCreationDate
   */
  readonly jobCreationDate?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#JobCompletionDate
   */
  readonly jobCompletionDate?: string;

  /**
   * @schema IamGetServiceLastAccessedDetailsWithEntitiesResponse#EntityDetailsList
   */
  readonly entityDetailsList?: IamEntityDetails[];

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
 * Converts an object of type 'IamGetServiceLastAccessedDetailsWithEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetServiceLastAccessedDetailsWithEntitiesResponse(obj: IamGetServiceLastAccessedDetailsWithEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'JobCreationDate': obj.jobCreationDate,
    'JobCompletionDate': obj.jobCompletionDate,
    'EntityDetailsList': obj.entityDetailsList?.map(y => toJson_IamEntityDetails(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
    'Error': toJson_IamErrorDetails(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetServiceLinkedRoleDeletionStatusRequest
 */
export interface IamGetServiceLinkedRoleDeletionStatusRequest {
  /**
   * @schema IamGetServiceLinkedRoleDeletionStatusRequest#DeletionTaskId
   */
  readonly deletionTaskId?: string;

}

/**
 * Converts an object of type 'IamGetServiceLinkedRoleDeletionStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetServiceLinkedRoleDeletionStatusRequest(obj: IamGetServiceLinkedRoleDeletionStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeletionTaskId': obj.deletionTaskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetServiceLinkedRoleDeletionStatusResponse
 */
export interface IamGetServiceLinkedRoleDeletionStatusResponse {
  /**
   * @schema IamGetServiceLinkedRoleDeletionStatusResponse#Status
   */
  readonly status?: string;

  /**
   * @schema IamGetServiceLinkedRoleDeletionStatusResponse#Reason
   */
  readonly reason?: IamDeletionTaskFailureReasonType;

}

/**
 * Converts an object of type 'IamGetServiceLinkedRoleDeletionStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetServiceLinkedRoleDeletionStatusResponse(obj: IamGetServiceLinkedRoleDeletionStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Reason': toJson_IamDeletionTaskFailureReasonType(obj.reason),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGetUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetUserRequest(obj: IamGetUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetUserResponse
 */
export interface IamGetUserResponse {
  /**
   * @schema IamGetUserResponse#User
   */
  readonly user?: IamUser;

}

/**
 * Converts an object of type 'IamGetUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetUserResponse(obj: IamGetUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_IamUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetUserPolicyRequest
 */
export interface IamGetUserPolicyRequest {
  /**
   * @schema IamGetUserPolicyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamGetUserPolicyRequest#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'IamGetUserPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetUserPolicyRequest(obj: IamGetUserPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGetUserPolicyResponse
 */
export interface IamGetUserPolicyResponse {
  /**
   * @schema IamGetUserPolicyResponse#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamGetUserPolicyResponse#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamGetUserPolicyResponse#PolicyDocument
   */
  readonly policyDocument?: string;

}

/**
 * Converts an object of type 'IamGetUserPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGetUserPolicyResponse(obj: IamGetUserPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'PolicyName': obj.policyName,
    'PolicyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListAccessKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAccessKeysRequest(obj: IamListAccessKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListAccessKeysResponse
 */
export interface IamListAccessKeysResponse {
  /**
   * @schema IamListAccessKeysResponse#AccessKeyMetadata
   */
  readonly accessKeyMetadata?: IamAccessKeyMetadata[];

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
 * Converts an object of type 'IamListAccessKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAccessKeysResponse(obj: IamListAccessKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessKeyMetadata': obj.accessKeyMetadata?.map(y => toJson_IamAccessKeyMetadata(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListAccountAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAccountAliasesRequest(obj: IamListAccountAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListAccountAliasesResponse
 */
export interface IamListAccountAliasesResponse {
  /**
   * @schema IamListAccountAliasesResponse#AccountAliases
   */
  readonly accountAliases?: string[];

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
 * Converts an object of type 'IamListAccountAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAccountAliasesResponse(obj: IamListAccountAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAliases': obj.accountAliases?.map(y => y),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListAttachedGroupPoliciesRequest
 */
export interface IamListAttachedGroupPoliciesRequest {
  /**
   * @schema IamListAttachedGroupPoliciesRequest#GroupName
   */
  readonly groupName?: string;

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
 * Converts an object of type 'IamListAttachedGroupPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAttachedGroupPoliciesRequest(obj: IamListAttachedGroupPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'PathPrefix': obj.pathPrefix,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListAttachedGroupPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAttachedGroupPoliciesResponse(obj: IamListAttachedGroupPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedPolicies': obj.attachedPolicies?.map(y => toJson_IamAttachedPolicy(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListAttachedRolePoliciesRequest
 */
export interface IamListAttachedRolePoliciesRequest {
  /**
   * @schema IamListAttachedRolePoliciesRequest#RoleName
   */
  readonly roleName?: string;

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
 * Converts an object of type 'IamListAttachedRolePoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAttachedRolePoliciesRequest(obj: IamListAttachedRolePoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'PathPrefix': obj.pathPrefix,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListAttachedRolePoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAttachedRolePoliciesResponse(obj: IamListAttachedRolePoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedPolicies': obj.attachedPolicies?.map(y => toJson_IamAttachedPolicy(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListAttachedUserPoliciesRequest
 */
export interface IamListAttachedUserPoliciesRequest {
  /**
   * @schema IamListAttachedUserPoliciesRequest#UserName
   */
  readonly userName?: string;

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
 * Converts an object of type 'IamListAttachedUserPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAttachedUserPoliciesRequest(obj: IamListAttachedUserPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'PathPrefix': obj.pathPrefix,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListAttachedUserPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListAttachedUserPoliciesResponse(obj: IamListAttachedUserPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedPolicies': obj.attachedPolicies?.map(y => toJson_IamAttachedPolicy(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListEntitiesForPolicyRequest
 */
export interface IamListEntitiesForPolicyRequest {
  /**
   * @schema IamListEntitiesForPolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

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
 * Converts an object of type 'IamListEntitiesForPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListEntitiesForPolicyRequest(obj: IamListEntitiesForPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'EntityFilter': obj.entityFilter,
    'PathPrefix': obj.pathPrefix,
    'PolicyUsageFilter': obj.policyUsageFilter,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListEntitiesForPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListEntitiesForPolicyResponse(obj: IamListEntitiesForPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyGroups': obj.policyGroups?.map(y => toJson_IamPolicyGroup(y)),
    'PolicyUsers': obj.policyUsers?.map(y => toJson_IamPolicyUser(y)),
    'PolicyRoles': obj.policyRoles?.map(y => toJson_IamPolicyRole(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListGroupPoliciesRequest
 */
export interface IamListGroupPoliciesRequest {
  /**
   * @schema IamListGroupPoliciesRequest#GroupName
   */
  readonly groupName?: string;

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
 * Converts an object of type 'IamListGroupPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListGroupPoliciesRequest(obj: IamListGroupPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListGroupPoliciesResponse
 */
export interface IamListGroupPoliciesResponse {
  /**
   * @schema IamListGroupPoliciesResponse#PolicyNames
   */
  readonly policyNames?: string[];

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
 * Converts an object of type 'IamListGroupPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListGroupPoliciesResponse(obj: IamListGroupPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyNames': obj.policyNames?.map(y => y),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListGroupsRequest(obj: IamListGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PathPrefix': obj.pathPrefix,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListGroupsResponse
 */
export interface IamListGroupsResponse {
  /**
   * @schema IamListGroupsResponse#Groups
   */
  readonly groups?: IamGroup[];

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
 * Converts an object of type 'IamListGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListGroupsResponse(obj: IamListGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Groups': obj.groups?.map(y => toJson_IamGroup(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListGroupsForUserRequest
 */
export interface IamListGroupsForUserRequest {
  /**
   * @schema IamListGroupsForUserRequest#UserName
   */
  readonly userName?: string;

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
 * Converts an object of type 'IamListGroupsForUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListGroupsForUserRequest(obj: IamListGroupsForUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListGroupsForUserResponse
 */
export interface IamListGroupsForUserResponse {
  /**
   * @schema IamListGroupsForUserResponse#Groups
   */
  readonly groups?: IamGroup[];

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
 * Converts an object of type 'IamListGroupsForUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListGroupsForUserResponse(obj: IamListGroupsForUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Groups': obj.groups?.map(y => toJson_IamGroup(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListInstanceProfileTagsRequest
 */
export interface IamListInstanceProfileTagsRequest {
  /**
   * @schema IamListInstanceProfileTagsRequest#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema IamListInstanceProfileTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListInstanceProfileTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'IamListInstanceProfileTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListInstanceProfileTagsRequest(obj: IamListInstanceProfileTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfileName': obj.instanceProfileName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListInstanceProfileTagsResponse
 */
export interface IamListInstanceProfileTagsResponse {
  /**
   * @schema IamListInstanceProfileTagsResponse#Tags
   */
  readonly tags?: IamTag[];

  /**
   * @schema IamListInstanceProfileTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListInstanceProfileTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'IamListInstanceProfileTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListInstanceProfileTagsResponse(obj: IamListInstanceProfileTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListInstanceProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListInstanceProfilesRequest(obj: IamListInstanceProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PathPrefix': obj.pathPrefix,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListInstanceProfilesResponse
 */
export interface IamListInstanceProfilesResponse {
  /**
   * @schema IamListInstanceProfilesResponse#InstanceProfiles
   */
  readonly instanceProfiles?: IamInstanceProfile[];

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
 * Converts an object of type 'IamListInstanceProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListInstanceProfilesResponse(obj: IamListInstanceProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfiles': obj.instanceProfiles?.map(y => toJson_IamInstanceProfile(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListInstanceProfilesForRoleRequest
 */
export interface IamListInstanceProfilesForRoleRequest {
  /**
   * @schema IamListInstanceProfilesForRoleRequest#RoleName
   */
  readonly roleName?: string;

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
 * Converts an object of type 'IamListInstanceProfilesForRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListInstanceProfilesForRoleRequest(obj: IamListInstanceProfilesForRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListInstanceProfilesForRoleResponse
 */
export interface IamListInstanceProfilesForRoleResponse {
  /**
   * @schema IamListInstanceProfilesForRoleResponse#InstanceProfiles
   */
  readonly instanceProfiles?: IamInstanceProfile[];

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
 * Converts an object of type 'IamListInstanceProfilesForRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListInstanceProfilesForRoleResponse(obj: IamListInstanceProfilesForRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfiles': obj.instanceProfiles?.map(y => toJson_IamInstanceProfile(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListMfaDeviceTagsRequest
 */
export interface IamListMfaDeviceTagsRequest {
  /**
   * @schema IamListMfaDeviceTagsRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema IamListMfaDeviceTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListMfaDeviceTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'IamListMfaDeviceTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListMfaDeviceTagsRequest(obj: IamListMfaDeviceTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SerialNumber': obj.serialNumber,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListMfaDeviceTagsResponse
 */
export interface IamListMfaDeviceTagsResponse {
  /**
   * @schema IamListMfaDeviceTagsResponse#Tags
   */
  readonly tags?: IamTag[];

  /**
   * @schema IamListMfaDeviceTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListMfaDeviceTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'IamListMfaDeviceTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListMfaDeviceTagsResponse(obj: IamListMfaDeviceTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListMfaDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListMfaDevicesRequest(obj: IamListMfaDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListMfaDevicesResponse
 */
export interface IamListMfaDevicesResponse {
  /**
   * @schema IamListMfaDevicesResponse#MFADevices
   */
  readonly mfaDevices?: IammfaDevice[];

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
 * Converts an object of type 'IamListMfaDevicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListMfaDevicesResponse(obj: IamListMfaDevicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MFADevices': obj.mfaDevices?.map(y => toJson_IammfaDevice(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListOpenIdConnectProviderTagsRequest
 */
export interface IamListOpenIdConnectProviderTagsRequest {
  /**
   * @schema IamListOpenIdConnectProviderTagsRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

  /**
   * @schema IamListOpenIdConnectProviderTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListOpenIdConnectProviderTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'IamListOpenIdConnectProviderTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListOpenIdConnectProviderTagsRequest(obj: IamListOpenIdConnectProviderTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderArn': obj.openIdConnectProviderArn,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListOpenIdConnectProviderTagsResponse
 */
export interface IamListOpenIdConnectProviderTagsResponse {
  /**
   * @schema IamListOpenIdConnectProviderTagsResponse#Tags
   */
  readonly tags?: IamTag[];

  /**
   * @schema IamListOpenIdConnectProviderTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListOpenIdConnectProviderTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'IamListOpenIdConnectProviderTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListOpenIdConnectProviderTagsResponse(obj: IamListOpenIdConnectProviderTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListOpenIdConnectProvidersRequest
 */
export interface IamListOpenIdConnectProvidersRequest {
}

/**
 * Converts an object of type 'IamListOpenIdConnectProvidersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListOpenIdConnectProvidersRequest(obj: IamListOpenIdConnectProvidersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListOpenIdConnectProvidersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListOpenIdConnectProvidersResponse(obj: IamListOpenIdConnectProvidersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderList': obj.openIdConnectProviderList?.map(y => toJson_IamOpenIdConnectProviderListEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListPoliciesRequest(obj: IamListPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scope': obj.scope,
    'OnlyAttached': obj.onlyAttached,
    'PathPrefix': obj.pathPrefix,
    'PolicyUsageFilter': obj.policyUsageFilter,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListPoliciesResponse(obj: IamListPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policies': obj.policies?.map(y => toJson_IamPolicy(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly arn?: string;

  /**
   * @schema IamListPoliciesGrantingServiceAccessRequest#ServiceNamespaces
   */
  readonly serviceNamespaces?: string[];

}

/**
 * Converts an object of type 'IamListPoliciesGrantingServiceAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListPoliciesGrantingServiceAccessRequest(obj: IamListPoliciesGrantingServiceAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Arn': obj.arn,
    'ServiceNamespaces': obj.serviceNamespaces?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListPoliciesGrantingServiceAccessResponse
 */
export interface IamListPoliciesGrantingServiceAccessResponse {
  /**
   * @schema IamListPoliciesGrantingServiceAccessResponse#PoliciesGrantingServiceAccess
   */
  readonly policiesGrantingServiceAccess?: IamListPoliciesGrantingServiceAccessEntry[];

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
 * Converts an object of type 'IamListPoliciesGrantingServiceAccessResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListPoliciesGrantingServiceAccessResponse(obj: IamListPoliciesGrantingServiceAccessResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoliciesGrantingServiceAccess': obj.policiesGrantingServiceAccess?.map(y => toJson_IamListPoliciesGrantingServiceAccessEntry(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListPolicyTagsRequest
 */
export interface IamListPolicyTagsRequest {
  /**
   * @schema IamListPolicyTagsRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IamListPolicyTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListPolicyTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'IamListPolicyTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListPolicyTagsRequest(obj: IamListPolicyTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListPolicyTagsResponse
 */
export interface IamListPolicyTagsResponse {
  /**
   * @schema IamListPolicyTagsResponse#Tags
   */
  readonly tags?: IamTag[];

  /**
   * @schema IamListPolicyTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListPolicyTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'IamListPolicyTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListPolicyTagsResponse(obj: IamListPolicyTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListPolicyVersionsRequest
 */
export interface IamListPolicyVersionsRequest {
  /**
   * @schema IamListPolicyVersionsRequest#PolicyArn
   */
  readonly policyArn?: string;

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
 * Converts an object of type 'IamListPolicyVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListPolicyVersionsRequest(obj: IamListPolicyVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListPolicyVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListPolicyVersionsResponse(obj: IamListPolicyVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Versions': obj.versions?.map(y => toJson_IamPolicyVersion(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListRolePoliciesRequest
 */
export interface IamListRolePoliciesRequest {
  /**
   * @schema IamListRolePoliciesRequest#RoleName
   */
  readonly roleName?: string;

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
 * Converts an object of type 'IamListRolePoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListRolePoliciesRequest(obj: IamListRolePoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListRolePoliciesResponse
 */
export interface IamListRolePoliciesResponse {
  /**
   * @schema IamListRolePoliciesResponse#PolicyNames
   */
  readonly policyNames?: string[];

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
 * Converts an object of type 'IamListRolePoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListRolePoliciesResponse(obj: IamListRolePoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyNames': obj.policyNames?.map(y => y),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListRoleTagsRequest
 */
export interface IamListRoleTagsRequest {
  /**
   * @schema IamListRoleTagsRequest#RoleName
   */
  readonly roleName?: string;

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
 * Converts an object of type 'IamListRoleTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListRoleTagsRequest(obj: IamListRoleTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListRoleTagsResponse
 */
export interface IamListRoleTagsResponse {
  /**
   * @schema IamListRoleTagsResponse#Tags
   */
  readonly tags?: IamTag[];

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
 * Converts an object of type 'IamListRoleTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListRoleTagsResponse(obj: IamListRoleTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListRolesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListRolesRequest(obj: IamListRolesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PathPrefix': obj.pathPrefix,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListRolesResponse
 */
export interface IamListRolesResponse {
  /**
   * @schema IamListRolesResponse#Roles
   */
  readonly roles?: IamRole[];

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
 * Converts an object of type 'IamListRolesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListRolesResponse(obj: IamListRolesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Roles': obj.roles?.map(y => toJson_IamRole(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListSamlProviderTagsRequest
 */
export interface IamListSamlProviderTagsRequest {
  /**
   * @schema IamListSamlProviderTagsRequest#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

  /**
   * @schema IamListSamlProviderTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListSamlProviderTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'IamListSamlProviderTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListSamlProviderTagsRequest(obj: IamListSamlProviderTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLProviderArn': obj.samlProviderArn,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListSamlProviderTagsResponse
 */
export interface IamListSamlProviderTagsResponse {
  /**
   * @schema IamListSamlProviderTagsResponse#Tags
   */
  readonly tags?: IamTag[];

  /**
   * @schema IamListSamlProviderTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListSamlProviderTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'IamListSamlProviderTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListSamlProviderTagsResponse(obj: IamListSamlProviderTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListSamlProvidersRequest
 */
export interface IamListSamlProvidersRequest {
}

/**
 * Converts an object of type 'IamListSamlProvidersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListSamlProvidersRequest(obj: IamListSamlProvidersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListSamlProvidersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListSamlProvidersResponse(obj: IamListSamlProvidersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLProviderList': obj.samlProviderList?.map(y => toJson_IamsamlProviderListEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListSshPublicKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListSshPublicKeysRequest(obj: IamListSshPublicKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListSshPublicKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListSshPublicKeysResponse(obj: IamListSshPublicKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SSHPublicKeys': obj.sshPublicKeys?.map(y => toJson_IamsshPublicKeyMetadata(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListServerCertificateTagsRequest
 */
export interface IamListServerCertificateTagsRequest {
  /**
   * @schema IamListServerCertificateTagsRequest#ServerCertificateName
   */
  readonly serverCertificateName?: string;

  /**
   * @schema IamListServerCertificateTagsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema IamListServerCertificateTagsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'IamListServerCertificateTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListServerCertificateTagsRequest(obj: IamListServerCertificateTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificateName': obj.serverCertificateName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListServerCertificateTagsResponse
 */
export interface IamListServerCertificateTagsResponse {
  /**
   * @schema IamListServerCertificateTagsResponse#Tags
   */
  readonly tags?: IamTag[];

  /**
   * @schema IamListServerCertificateTagsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema IamListServerCertificateTagsResponse#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'IamListServerCertificateTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListServerCertificateTagsResponse(obj: IamListServerCertificateTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListServerCertificatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListServerCertificatesRequest(obj: IamListServerCertificatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PathPrefix': obj.pathPrefix,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListServerCertificatesResponse
 */
export interface IamListServerCertificatesResponse {
  /**
   * @schema IamListServerCertificatesResponse#ServerCertificateMetadataList
   */
  readonly serverCertificateMetadataList?: IamServerCertificateMetadata[];

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
 * Converts an object of type 'IamListServerCertificatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListServerCertificatesResponse(obj: IamListServerCertificatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificateMetadataList': obj.serverCertificateMetadataList?.map(y => toJson_IamServerCertificateMetadata(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListServiceSpecificCredentialsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListServiceSpecificCredentialsRequest(obj: IamListServiceSpecificCredentialsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'ServiceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListServiceSpecificCredentialsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListServiceSpecificCredentialsResponse(obj: IamListServiceSpecificCredentialsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceSpecificCredentials': obj.serviceSpecificCredentials?.map(y => toJson_IamServiceSpecificCredentialMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListSigningCertificatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListSigningCertificatesRequest(obj: IamListSigningCertificatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListSigningCertificatesResponse
 */
export interface IamListSigningCertificatesResponse {
  /**
   * @schema IamListSigningCertificatesResponse#Certificates
   */
  readonly certificates?: IamSigningCertificate[];

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
 * Converts an object of type 'IamListSigningCertificatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListSigningCertificatesResponse(obj: IamListSigningCertificatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificates': obj.certificates?.map(y => toJson_IamSigningCertificate(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListUserPoliciesRequest
 */
export interface IamListUserPoliciesRequest {
  /**
   * @schema IamListUserPoliciesRequest#UserName
   */
  readonly userName?: string;

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
 * Converts an object of type 'IamListUserPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListUserPoliciesRequest(obj: IamListUserPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListUserPoliciesResponse
 */
export interface IamListUserPoliciesResponse {
  /**
   * @schema IamListUserPoliciesResponse#PolicyNames
   */
  readonly policyNames?: string[];

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
 * Converts an object of type 'IamListUserPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListUserPoliciesResponse(obj: IamListUserPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyNames': obj.policyNames?.map(y => y),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListUserTagsRequest
 */
export interface IamListUserTagsRequest {
  /**
   * @schema IamListUserTagsRequest#UserName
   */
  readonly userName?: string;

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
 * Converts an object of type 'IamListUserTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListUserTagsRequest(obj: IamListUserTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListUserTagsResponse
 */
export interface IamListUserTagsResponse {
  /**
   * @schema IamListUserTagsResponse#Tags
   */
  readonly tags?: IamTag[];

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
 * Converts an object of type 'IamListUserTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListUserTagsResponse(obj: IamListUserTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListUsersRequest(obj: IamListUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PathPrefix': obj.pathPrefix,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListUsersResponse
 */
export interface IamListUsersResponse {
  /**
   * @schema IamListUsersResponse#Users
   */
  readonly users?: IamUser[];

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
 * Converts an object of type 'IamListUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListUsersResponse(obj: IamListUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Users': obj.users?.map(y => toJson_IamUser(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListVirtualMfaDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListVirtualMfaDevicesRequest(obj: IamListVirtualMfaDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssignmentStatus': obj.assignmentStatus,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamListVirtualMfaDevicesResponse
 */
export interface IamListVirtualMfaDevicesResponse {
  /**
   * @schema IamListVirtualMfaDevicesResponse#VirtualMFADevices
   */
  readonly virtualMfaDevices?: IamVirtualMfaDevice[];

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
 * Converts an object of type 'IamListVirtualMfaDevicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListVirtualMfaDevicesResponse(obj: IamListVirtualMfaDevicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VirtualMFADevices': obj.virtualMfaDevices?.map(y => toJson_IamVirtualMfaDevice(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamPutGroupPolicyRequest
 */
export interface IamPutGroupPolicyRequest {
  /**
   * @schema IamPutGroupPolicyRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamPutGroupPolicyRequest#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamPutGroupPolicyRequest#PolicyDocument
   */
  readonly policyDocument?: string;

}

/**
 * Converts an object of type 'IamPutGroupPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPutGroupPolicyRequest(obj: IamPutGroupPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'PolicyName': obj.policyName,
    'PolicyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamPutRolePermissionsBoundaryRequest
 */
export interface IamPutRolePermissionsBoundaryRequest {
  /**
   * @schema IamPutRolePermissionsBoundaryRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamPutRolePermissionsBoundaryRequest#PermissionsBoundary
   */
  readonly permissionsBoundary?: string;

}

/**
 * Converts an object of type 'IamPutRolePermissionsBoundaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPutRolePermissionsBoundaryRequest(obj: IamPutRolePermissionsBoundaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'PermissionsBoundary': obj.permissionsBoundary,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamPutRolePolicyRequest
 */
export interface IamPutRolePolicyRequest {
  /**
   * @schema IamPutRolePolicyRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamPutRolePolicyRequest#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamPutRolePolicyRequest#PolicyDocument
   */
  readonly policyDocument?: string;

}

/**
 * Converts an object of type 'IamPutRolePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPutRolePolicyRequest(obj: IamPutRolePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'PolicyName': obj.policyName,
    'PolicyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamPutUserPermissionsBoundaryRequest
 */
export interface IamPutUserPermissionsBoundaryRequest {
  /**
   * @schema IamPutUserPermissionsBoundaryRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamPutUserPermissionsBoundaryRequest#PermissionsBoundary
   */
  readonly permissionsBoundary?: string;

}

/**
 * Converts an object of type 'IamPutUserPermissionsBoundaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPutUserPermissionsBoundaryRequest(obj: IamPutUserPermissionsBoundaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'PermissionsBoundary': obj.permissionsBoundary,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamPutUserPolicyRequest
 */
export interface IamPutUserPolicyRequest {
  /**
   * @schema IamPutUserPolicyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamPutUserPolicyRequest#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamPutUserPolicyRequest#PolicyDocument
   */
  readonly policyDocument?: string;

}

/**
 * Converts an object of type 'IamPutUserPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPutUserPolicyRequest(obj: IamPutUserPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'PolicyName': obj.policyName,
    'PolicyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamRemoveClientIdFromOpenIdConnectProviderRequest
 */
export interface IamRemoveClientIdFromOpenIdConnectProviderRequest {
  /**
   * @schema IamRemoveClientIdFromOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

  /**
   * @schema IamRemoveClientIdFromOpenIdConnectProviderRequest#ClientID
   */
  readonly clientId?: string;

}

/**
 * Converts an object of type 'IamRemoveClientIdFromOpenIdConnectProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamRemoveClientIdFromOpenIdConnectProviderRequest(obj: IamRemoveClientIdFromOpenIdConnectProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderArn': obj.openIdConnectProviderArn,
    'ClientID': obj.clientId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamRemoveRoleFromInstanceProfileRequest
 */
export interface IamRemoveRoleFromInstanceProfileRequest {
  /**
   * @schema IamRemoveRoleFromInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema IamRemoveRoleFromInstanceProfileRequest#RoleName
   */
  readonly roleName?: string;

}

/**
 * Converts an object of type 'IamRemoveRoleFromInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamRemoveRoleFromInstanceProfileRequest(obj: IamRemoveRoleFromInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfileName': obj.instanceProfileName,
    'RoleName': obj.roleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamRemoveUserFromGroupRequest
 */
export interface IamRemoveUserFromGroupRequest {
  /**
   * @schema IamRemoveUserFromGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamRemoveUserFromGroupRequest#UserName
   */
  readonly userName?: string;

}

/**
 * Converts an object of type 'IamRemoveUserFromGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamRemoveUserFromGroupRequest(obj: IamRemoveUserFromGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'UserName': obj.userName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly serviceSpecificCredentialId?: string;

}

/**
 * Converts an object of type 'IamResetServiceSpecificCredentialRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamResetServiceSpecificCredentialRequest(obj: IamResetServiceSpecificCredentialRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'ServiceSpecificCredentialId': obj.serviceSpecificCredentialId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamResetServiceSpecificCredentialResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamResetServiceSpecificCredentialResponse(obj: IamResetServiceSpecificCredentialResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceSpecificCredential': toJson_IamServiceSpecificCredential(obj.serviceSpecificCredential),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamResyncMfaDeviceRequest
 */
export interface IamResyncMfaDeviceRequest {
  /**
   * @schema IamResyncMfaDeviceRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamResyncMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema IamResyncMfaDeviceRequest#AuthenticationCode1
   */
  readonly authenticationCode1?: string;

  /**
   * @schema IamResyncMfaDeviceRequest#AuthenticationCode2
   */
  readonly authenticationCode2?: string;

}

/**
 * Converts an object of type 'IamResyncMfaDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamResyncMfaDeviceRequest(obj: IamResyncMfaDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SerialNumber': obj.serialNumber,
    'AuthenticationCode1': obj.authenticationCode1,
    'AuthenticationCode2': obj.authenticationCode2,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamSetDefaultPolicyVersionRequest
 */
export interface IamSetDefaultPolicyVersionRequest {
  /**
   * @schema IamSetDefaultPolicyVersionRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IamSetDefaultPolicyVersionRequest#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'IamSetDefaultPolicyVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamSetDefaultPolicyVersionRequest(obj: IamSetDefaultPolicyVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamSetSecurityTokenServicePreferencesRequest
 */
export interface IamSetSecurityTokenServicePreferencesRequest {
  /**
   * @schema IamSetSecurityTokenServicePreferencesRequest#GlobalEndpointTokenVersion
   */
  readonly globalEndpointTokenVersion?: string;

}

/**
 * Converts an object of type 'IamSetSecurityTokenServicePreferencesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamSetSecurityTokenServicePreferencesRequest(obj: IamSetSecurityTokenServicePreferencesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalEndpointTokenVersion': obj.globalEndpointTokenVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamSimulateCustomPolicyRequest
 */
export interface IamSimulateCustomPolicyRequest {
  /**
   * @schema IamSimulateCustomPolicyRequest#PolicyInputList
   */
  readonly policyInputList?: string[];

  /**
   * @schema IamSimulateCustomPolicyRequest#PermissionsBoundaryPolicyInputList
   */
  readonly permissionsBoundaryPolicyInputList?: string[];

  /**
   * @schema IamSimulateCustomPolicyRequest#ActionNames
   */
  readonly actionNames?: string[];

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
 * Converts an object of type 'IamSimulateCustomPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamSimulateCustomPolicyRequest(obj: IamSimulateCustomPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyInputList': obj.policyInputList?.map(y => y),
    'PermissionsBoundaryPolicyInputList': obj.permissionsBoundaryPolicyInputList?.map(y => y),
    'ActionNames': obj.actionNames?.map(y => y),
    'ResourceArns': obj.resourceArns?.map(y => y),
    'ResourcePolicy': obj.resourcePolicy,
    'ResourceOwner': obj.resourceOwner,
    'CallerArn': obj.callerArn,
    'ContextEntries': obj.contextEntries?.map(y => toJson_IamContextEntry(y)),
    'ResourceHandlingOption': obj.resourceHandlingOption,
    'MaxItems': obj.maxItems,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamSimulatePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamSimulatePolicyResponse(obj: IamSimulatePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationResults': obj.evaluationResults?.map(y => toJson_IamEvaluationResult(y)),
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamSimulatePrincipalPolicyRequest
 */
export interface IamSimulatePrincipalPolicyRequest {
  /**
   * @schema IamSimulatePrincipalPolicyRequest#PolicySourceArn
   */
  readonly policySourceArn?: string;

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
  readonly actionNames?: string[];

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
 * Converts an object of type 'IamSimulatePrincipalPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamSimulatePrincipalPolicyRequest(obj: IamSimulatePrincipalPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicySourceArn': obj.policySourceArn,
    'PolicyInputList': obj.policyInputList?.map(y => y),
    'PermissionsBoundaryPolicyInputList': obj.permissionsBoundaryPolicyInputList?.map(y => y),
    'ActionNames': obj.actionNames?.map(y => y),
    'ResourceArns': obj.resourceArns?.map(y => y),
    'ResourcePolicy': obj.resourcePolicy,
    'ResourceOwner': obj.resourceOwner,
    'CallerArn': obj.callerArn,
    'ContextEntries': obj.contextEntries?.map(y => toJson_IamContextEntry(y)),
    'ResourceHandlingOption': obj.resourceHandlingOption,
    'MaxItems': obj.maxItems,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamTagInstanceProfileRequest
 */
export interface IamTagInstanceProfileRequest {
  /**
   * @schema IamTagInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema IamTagInstanceProfileRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamTagInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTagInstanceProfileRequest(obj: IamTagInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfileName': obj.instanceProfileName,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamTagMfaDeviceRequest
 */
export interface IamTagMfaDeviceRequest {
  /**
   * @schema IamTagMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema IamTagMfaDeviceRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamTagMfaDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTagMfaDeviceRequest(obj: IamTagMfaDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SerialNumber': obj.serialNumber,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamTagOpenIdConnectProviderRequest
 */
export interface IamTagOpenIdConnectProviderRequest {
  /**
   * @schema IamTagOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

  /**
   * @schema IamTagOpenIdConnectProviderRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamTagOpenIdConnectProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTagOpenIdConnectProviderRequest(obj: IamTagOpenIdConnectProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderArn': obj.openIdConnectProviderArn,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamTagPolicyRequest
 */
export interface IamTagPolicyRequest {
  /**
   * @schema IamTagPolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IamTagPolicyRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamTagPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTagPolicyRequest(obj: IamTagPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamTagRoleRequest
 */
export interface IamTagRoleRequest {
  /**
   * @schema IamTagRoleRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamTagRoleRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamTagRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTagRoleRequest(obj: IamTagRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamTagSamlProviderRequest
 */
export interface IamTagSamlProviderRequest {
  /**
   * @schema IamTagSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

  /**
   * @schema IamTagSamlProviderRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamTagSamlProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTagSamlProviderRequest(obj: IamTagSamlProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLProviderArn': obj.samlProviderArn,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamTagServerCertificateRequest
 */
export interface IamTagServerCertificateRequest {
  /**
   * @schema IamTagServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName?: string;

  /**
   * @schema IamTagServerCertificateRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamTagServerCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTagServerCertificateRequest(obj: IamTagServerCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificateName': obj.serverCertificateName,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamTagUserRequest
 */
export interface IamTagUserRequest {
  /**
   * @schema IamTagUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamTagUserRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamTagUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTagUserRequest(obj: IamTagUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUntagInstanceProfileRequest
 */
export interface IamUntagInstanceProfileRequest {
  /**
   * @schema IamUntagInstanceProfileRequest#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema IamUntagInstanceProfileRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'IamUntagInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUntagInstanceProfileRequest(obj: IamUntagInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceProfileName': obj.instanceProfileName,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUntagMfaDeviceRequest
 */
export interface IamUntagMfaDeviceRequest {
  /**
   * @schema IamUntagMfaDeviceRequest#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema IamUntagMfaDeviceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'IamUntagMfaDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUntagMfaDeviceRequest(obj: IamUntagMfaDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SerialNumber': obj.serialNumber,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUntagOpenIdConnectProviderRequest
 */
export interface IamUntagOpenIdConnectProviderRequest {
  /**
   * @schema IamUntagOpenIdConnectProviderRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

  /**
   * @schema IamUntagOpenIdConnectProviderRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'IamUntagOpenIdConnectProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUntagOpenIdConnectProviderRequest(obj: IamUntagOpenIdConnectProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderArn': obj.openIdConnectProviderArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUntagPolicyRequest
 */
export interface IamUntagPolicyRequest {
  /**
   * @schema IamUntagPolicyRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IamUntagPolicyRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'IamUntagPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUntagPolicyRequest(obj: IamUntagPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUntagRoleRequest
 */
export interface IamUntagRoleRequest {
  /**
   * @schema IamUntagRoleRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamUntagRoleRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'IamUntagRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUntagRoleRequest(obj: IamUntagRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUntagSamlProviderRequest
 */
export interface IamUntagSamlProviderRequest {
  /**
   * @schema IamUntagSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

  /**
   * @schema IamUntagSamlProviderRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'IamUntagSamlProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUntagSamlProviderRequest(obj: IamUntagSamlProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLProviderArn': obj.samlProviderArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUntagServerCertificateRequest
 */
export interface IamUntagServerCertificateRequest {
  /**
   * @schema IamUntagServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName?: string;

  /**
   * @schema IamUntagServerCertificateRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'IamUntagServerCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUntagServerCertificateRequest(obj: IamUntagServerCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificateName': obj.serverCertificateName,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUntagUserRequest
 */
export interface IamUntagUserRequest {
  /**
   * @schema IamUntagUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamUntagUserRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'IamUntagUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUntagUserRequest(obj: IamUntagUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly accessKeyId?: string;

  /**
   * @schema IamUpdateAccessKeyRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IamUpdateAccessKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateAccessKeyRequest(obj: IamUpdateAccessKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AccessKeyId': obj.accessKeyId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamUpdateAccountPasswordPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateAccountPasswordPolicyRequest(obj: IamUpdateAccountPasswordPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinimumPasswordLength': obj.minimumPasswordLength,
    'RequireSymbols': obj.requireSymbols,
    'RequireNumbers': obj.requireNumbers,
    'RequireUppercaseCharacters': obj.requireUppercaseCharacters,
    'RequireLowercaseCharacters': obj.requireLowercaseCharacters,
    'AllowUsersToChangePassword': obj.allowUsersToChangePassword,
    'MaxPasswordAge': obj.maxPasswordAge,
    'PasswordReusePrevention': obj.passwordReusePrevention,
    'HardExpiry': obj.hardExpiry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateAssumeRolePolicyRequest
 */
export interface IamUpdateAssumeRolePolicyRequest {
  /**
   * @schema IamUpdateAssumeRolePolicyRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamUpdateAssumeRolePolicyRequest#PolicyDocument
   */
  readonly policyDocument?: string;

}

/**
 * Converts an object of type 'IamUpdateAssumeRolePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateAssumeRolePolicyRequest(obj: IamUpdateAssumeRolePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'PolicyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateGroupRequest
 */
export interface IamUpdateGroupRequest {
  /**
   * @schema IamUpdateGroupRequest#GroupName
   */
  readonly groupName?: string;

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
 * Converts an object of type 'IamUpdateGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateGroupRequest(obj: IamUpdateGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'NewPath': obj.newPath,
    'NewGroupName': obj.newGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateLoginProfileRequest
 */
export interface IamUpdateLoginProfileRequest {
  /**
   * @schema IamUpdateLoginProfileRequest#UserName
   */
  readonly userName?: string;

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
 * Converts an object of type 'IamUpdateLoginProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateLoginProfileRequest(obj: IamUpdateLoginProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Password': obj.password,
    'PasswordResetRequired': obj.passwordResetRequired,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateOpenIdConnectProviderThumbprintRequest
 */
export interface IamUpdateOpenIdConnectProviderThumbprintRequest {
  /**
   * @schema IamUpdateOpenIdConnectProviderThumbprintRequest#OpenIDConnectProviderArn
   */
  readonly openIdConnectProviderArn?: string;

  /**
   * @schema IamUpdateOpenIdConnectProviderThumbprintRequest#ThumbprintList
   */
  readonly thumbprintList?: string[];

}

/**
 * Converts an object of type 'IamUpdateOpenIdConnectProviderThumbprintRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateOpenIdConnectProviderThumbprintRequest(obj: IamUpdateOpenIdConnectProviderThumbprintRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpenIDConnectProviderArn': obj.openIdConnectProviderArn,
    'ThumbprintList': obj.thumbprintList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateRoleRequest
 */
export interface IamUpdateRoleRequest {
  /**
   * @schema IamUpdateRoleRequest#RoleName
   */
  readonly roleName?: string;

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
 * Converts an object of type 'IamUpdateRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateRoleRequest(obj: IamUpdateRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'Description': obj.description,
    'MaxSessionDuration': obj.maxSessionDuration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateRoleResponse
 */
export interface IamUpdateRoleResponse {
}

/**
 * Converts an object of type 'IamUpdateRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateRoleResponse(obj: IamUpdateRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateRoleDescriptionRequest
 */
export interface IamUpdateRoleDescriptionRequest {
  /**
   * @schema IamUpdateRoleDescriptionRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamUpdateRoleDescriptionRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'IamUpdateRoleDescriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateRoleDescriptionRequest(obj: IamUpdateRoleDescriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamUpdateRoleDescriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateRoleDescriptionResponse(obj: IamUpdateRoleDescriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Role': toJson_IamRole(obj.role),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateSamlProviderRequest
 */
export interface IamUpdateSamlProviderRequest {
  /**
   * @schema IamUpdateSamlProviderRequest#SAMLMetadataDocument
   */
  readonly samlMetadataDocument?: string;

  /**
   * @schema IamUpdateSamlProviderRequest#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

}

/**
 * Converts an object of type 'IamUpdateSamlProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateSamlProviderRequest(obj: IamUpdateSamlProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLMetadataDocument': obj.samlMetadataDocument,
    'SAMLProviderArn': obj.samlProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamUpdateSamlProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateSamlProviderResponse(obj: IamUpdateSamlProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SAMLProviderArn': obj.samlProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateSshPublicKeyRequest
 */
export interface IamUpdateSshPublicKeyRequest {
  /**
   * @schema IamUpdateSshPublicKeyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamUpdateSshPublicKeyRequest#SSHPublicKeyId
   */
  readonly sshPublicKeyId?: string;

  /**
   * @schema IamUpdateSshPublicKeyRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IamUpdateSshPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateSshPublicKeyRequest(obj: IamUpdateSshPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SSHPublicKeyId': obj.sshPublicKeyId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateServerCertificateRequest
 */
export interface IamUpdateServerCertificateRequest {
  /**
   * @schema IamUpdateServerCertificateRequest#ServerCertificateName
   */
  readonly serverCertificateName?: string;

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
 * Converts an object of type 'IamUpdateServerCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateServerCertificateRequest(obj: IamUpdateServerCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificateName': obj.serverCertificateName,
    'NewPath': obj.newPath,
    'NewServerCertificateName': obj.newServerCertificateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly serviceSpecificCredentialId?: string;

  /**
   * @schema IamUpdateServiceSpecificCredentialRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IamUpdateServiceSpecificCredentialRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateServiceSpecificCredentialRequest(obj: IamUpdateServiceSpecificCredentialRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'ServiceSpecificCredentialId': obj.serviceSpecificCredentialId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly certificateId?: string;

  /**
   * @schema IamUpdateSigningCertificateRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IamUpdateSigningCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateSigningCertificateRequest(obj: IamUpdateSigningCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'CertificateId': obj.certificateId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUpdateUserRequest
 */
export interface IamUpdateUserRequest {
  /**
   * @schema IamUpdateUserRequest#UserName
   */
  readonly userName?: string;

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
 * Converts an object of type 'IamUpdateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUpdateUserRequest(obj: IamUpdateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'NewPath': obj.newPath,
    'NewUserName': obj.newUserName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUploadSshPublicKeyRequest
 */
export interface IamUploadSshPublicKeyRequest {
  /**
   * @schema IamUploadSshPublicKeyRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamUploadSshPublicKeyRequest#SSHPublicKeyBody
   */
  readonly sshPublicKeyBody?: string;

}

/**
 * Converts an object of type 'IamUploadSshPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUploadSshPublicKeyRequest(obj: IamUploadSshPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SSHPublicKeyBody': obj.sshPublicKeyBody,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamUploadSshPublicKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUploadSshPublicKeyResponse(obj: IamUploadSshPublicKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SSHPublicKey': toJson_IamsshPublicKey(obj.sshPublicKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly serverCertificateName?: string;

  /**
   * @schema IamUploadServerCertificateRequest#CertificateBody
   */
  readonly certificateBody?: string;

  /**
   * @schema IamUploadServerCertificateRequest#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema IamUploadServerCertificateRequest#CertificateChain
   */
  readonly certificateChain?: string;

  /**
   * @schema IamUploadServerCertificateRequest#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamUploadServerCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUploadServerCertificateRequest(obj: IamUploadServerCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'ServerCertificateName': obj.serverCertificateName,
    'CertificateBody': obj.certificateBody,
    'PrivateKey': obj.privateKey,
    'CertificateChain': obj.certificateChain,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUploadServerCertificateResponse
 */
export interface IamUploadServerCertificateResponse {
  /**
   * @schema IamUploadServerCertificateResponse#ServerCertificateMetadata
   */
  readonly serverCertificateMetadata?: IamServerCertificateMetadata;

  /**
   * @schema IamUploadServerCertificateResponse#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamUploadServerCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUploadServerCertificateResponse(obj: IamUploadServerCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificateMetadata': toJson_IamServerCertificateMetadata(obj.serverCertificateMetadata),
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly certificateBody?: string;

}

/**
 * Converts an object of type 'IamUploadSigningCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUploadSigningCertificateRequest(obj: IamUploadSigningCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'CertificateBody': obj.certificateBody,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUploadSigningCertificateResponse
 */
export interface IamUploadSigningCertificateResponse {
  /**
   * @schema IamUploadSigningCertificateResponse#Certificate
   */
  readonly certificate?: IamSigningCertificate;

}

/**
 * Converts an object of type 'IamUploadSigningCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUploadSigningCertificateResponse(obj: IamUploadSigningCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': toJson_IamSigningCertificate(obj.certificate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamAccessKey
 */
export interface IamAccessKey {
  /**
   * @schema IamAccessKey#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamAccessKey#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema IamAccessKey#Status
   */
  readonly status?: string;

  /**
   * @schema IamAccessKey#SecretAccessKey
   */
  readonly secretAccessKey?: string;

  /**
   * @schema IamAccessKey#CreateDate
   */
  readonly createDate?: string;

}

/**
 * Converts an object of type 'IamAccessKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAccessKey(obj: IamAccessKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AccessKeyId': obj.accessKeyId,
    'Status': obj.status,
    'SecretAccessKey': obj.secretAccessKey,
    'CreateDate': obj.createDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamGroup
 */
export interface IamGroup {
  /**
   * @schema IamGroup#Path
   */
  readonly path?: string;

  /**
   * @schema IamGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema IamGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema IamGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamGroup#CreateDate
   */
  readonly createDate?: string;

}

/**
 * Converts an object of type 'IamGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGroup(obj: IamGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'GroupName': obj.groupName,
    'GroupId': obj.groupId,
    'Arn': obj.arn,
    'CreateDate': obj.createDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamTag
 */
export interface IamTag {
  /**
   * @schema IamTag#Key
   */
  readonly key?: string;

  /**
   * @schema IamTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'IamTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTag(obj: IamTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamInstanceProfile
 */
export interface IamInstanceProfile {
  /**
   * @schema IamInstanceProfile#Path
   */
  readonly path?: string;

  /**
   * @schema IamInstanceProfile#InstanceProfileName
   */
  readonly instanceProfileName?: string;

  /**
   * @schema IamInstanceProfile#InstanceProfileId
   */
  readonly instanceProfileId?: string;

  /**
   * @schema IamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamInstanceProfile#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamInstanceProfile#Roles
   */
  readonly roles?: IamRole[];

  /**
   * @schema IamInstanceProfile#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamInstanceProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamInstanceProfile(obj: IamInstanceProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'InstanceProfileName': obj.instanceProfileName,
    'InstanceProfileId': obj.instanceProfileId,
    'Arn': obj.arn,
    'CreateDate': obj.createDate,
    'Roles': obj.roles?.map(y => toJson_IamRole(y)),
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamLoginProfile
 */
export interface IamLoginProfile {
  /**
   * @schema IamLoginProfile#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamLoginProfile#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamLoginProfile#PasswordResetRequired
   */
  readonly passwordResetRequired?: boolean;

}

/**
 * Converts an object of type 'IamLoginProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamLoginProfile(obj: IamLoginProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'CreateDate': obj.createDate,
    'PasswordResetRequired': obj.passwordResetRequired,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IamPolicy#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicy(obj: IamPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'PolicyId': obj.policyId,
    'Arn': obj.arn,
    'Path': obj.path,
    'DefaultVersionId': obj.defaultVersionId,
    'AttachmentCount': obj.attachmentCount,
    'PermissionsBoundaryUsageCount': obj.permissionsBoundaryUsageCount,
    'IsAttachable': obj.isAttachable,
    'Description': obj.description,
    'CreateDate': obj.createDate,
    'UpdateDate': obj.updateDate,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamPolicyVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyVersion(obj: IamPolicyVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Document': obj.document,
    'VersionId': obj.versionId,
    'IsDefaultVersion': obj.isDefaultVersion,
    'CreateDate': obj.createDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamRole
 */
export interface IamRole {
  /**
   * @schema IamRole#Path
   */
  readonly path?: string;

  /**
   * @schema IamRole#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema IamRole#RoleId
   */
  readonly roleId?: string;

  /**
   * @schema IamRole#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamRole#CreateDate
   */
  readonly createDate?: string;

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
 * Converts an object of type 'IamRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamRole(obj: IamRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'RoleName': obj.roleName,
    'RoleId': obj.roleId,
    'Arn': obj.arn,
    'CreateDate': obj.createDate,
    'AssumeRolePolicyDocument': obj.assumeRolePolicyDocument,
    'Description': obj.description,
    'MaxSessionDuration': obj.maxSessionDuration,
    'PermissionsBoundary': toJson_IamAttachedPermissionsBoundary(obj.permissionsBoundary),
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'RoleLastUsed': toJson_IamRoleLastUsed(obj.roleLastUsed),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamServiceSpecificCredential
 */
export interface IamServiceSpecificCredential {
  /**
   * @schema IamServiceSpecificCredential#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamServiceSpecificCredential#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema IamServiceSpecificCredential#ServiceUserName
   */
  readonly serviceUserName?: string;

  /**
   * @schema IamServiceSpecificCredential#ServicePassword
   */
  readonly servicePassword?: string;

  /**
   * @schema IamServiceSpecificCredential#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId?: string;

  /**
   * @schema IamServiceSpecificCredential#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamServiceSpecificCredential#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IamServiceSpecificCredential' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamServiceSpecificCredential(obj: IamServiceSpecificCredential | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateDate': obj.createDate,
    'ServiceName': obj.serviceName,
    'ServiceUserName': obj.serviceUserName,
    'ServicePassword': obj.servicePassword,
    'ServiceSpecificCredentialId': obj.serviceSpecificCredentialId,
    'UserName': obj.userName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamUser
 */
export interface IamUser {
  /**
   * @schema IamUser#Path
   */
  readonly path?: string;

  /**
   * @schema IamUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamUser#UserId
   */
  readonly userId?: string;

  /**
   * @schema IamUser#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamUser#CreateDate
   */
  readonly createDate?: string;

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
 * Converts an object of type 'IamUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUser(obj: IamUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'UserName': obj.userName,
    'UserId': obj.userId,
    'Arn': obj.arn,
    'CreateDate': obj.createDate,
    'PasswordLastUsed': obj.passwordLastUsed,
    'PermissionsBoundary': toJson_IamAttachedPermissionsBoundary(obj.permissionsBoundary),
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamVirtualMfaDevice
 */
export interface IamVirtualMfaDevice {
  /**
   * @schema IamVirtualMfaDevice#SerialNumber
   */
  readonly serialNumber?: string;

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

  /**
   * @schema IamVirtualMfaDevice#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamVirtualMfaDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamVirtualMfaDevice(obj: IamVirtualMfaDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SerialNumber': obj.serialNumber,
    'Base32StringSeed': obj.base32StringSeed,
    'QRCodePNG': obj.qrCodePng,
    'User': toJson_IamUser(obj.user),
    'EnableDate': obj.enableDate,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamAccessKeyLastUsed
 */
export interface IamAccessKeyLastUsed {
  /**
   * @schema IamAccessKeyLastUsed#LastUsedDate
   */
  readonly lastUsedDate?: string;

  /**
   * @schema IamAccessKeyLastUsed#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema IamAccessKeyLastUsed#Region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'IamAccessKeyLastUsed' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAccessKeyLastUsed(obj: IamAccessKeyLastUsed | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastUsedDate': obj.lastUsedDate,
    'ServiceName': obj.serviceName,
    'Region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamUserDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamUserDetail(obj: IamUserDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'UserName': obj.userName,
    'UserId': obj.userId,
    'Arn': obj.arn,
    'CreateDate': obj.createDate,
    'UserPolicyList': obj.userPolicyList?.map(y => toJson_IamPolicyDetail(y)),
    'GroupList': obj.groupList?.map(y => y),
    'AttachedManagedPolicies': obj.attachedManagedPolicies?.map(y => toJson_IamAttachedPolicy(y)),
    'PermissionsBoundary': toJson_IamAttachedPermissionsBoundary(obj.permissionsBoundary),
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamGroupDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamGroupDetail(obj: IamGroupDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'GroupName': obj.groupName,
    'GroupId': obj.groupId,
    'Arn': obj.arn,
    'CreateDate': obj.createDate,
    'GroupPolicyList': obj.groupPolicyList?.map(y => toJson_IamPolicyDetail(y)),
    'AttachedManagedPolicies': obj.attachedManagedPolicies?.map(y => toJson_IamAttachedPolicy(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamRoleDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamRoleDetail(obj: IamRoleDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'RoleName': obj.roleName,
    'RoleId': obj.roleId,
    'Arn': obj.arn,
    'CreateDate': obj.createDate,
    'AssumeRolePolicyDocument': obj.assumeRolePolicyDocument,
    'InstanceProfileList': obj.instanceProfileList?.map(y => toJson_IamInstanceProfile(y)),
    'RolePolicyList': obj.rolePolicyList?.map(y => toJson_IamPolicyDetail(y)),
    'AttachedManagedPolicies': obj.attachedManagedPolicies?.map(y => toJson_IamAttachedPolicy(y)),
    'PermissionsBoundary': toJson_IamAttachedPermissionsBoundary(obj.permissionsBoundary),
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
    'RoleLastUsed': toJson_IamRoleLastUsed(obj.roleLastUsed),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamManagedPolicyDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamManagedPolicyDetail(obj: IamManagedPolicyDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'PolicyId': obj.policyId,
    'Arn': obj.arn,
    'Path': obj.path,
    'DefaultVersionId': obj.defaultVersionId,
    'AttachmentCount': obj.attachmentCount,
    'PermissionsBoundaryUsageCount': obj.permissionsBoundaryUsageCount,
    'IsAttachable': obj.isAttachable,
    'Description': obj.description,
    'CreateDate': obj.createDate,
    'UpdateDate': obj.updateDate,
    'PolicyVersionList': obj.policyVersionList?.map(y => toJson_IamPolicyVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamPasswordPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPasswordPolicy(obj: IamPasswordPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinimumPasswordLength': obj.minimumPasswordLength,
    'RequireSymbols': obj.requireSymbols,
    'RequireNumbers': obj.requireNumbers,
    'RequireUppercaseCharacters': obj.requireUppercaseCharacters,
    'RequireLowercaseCharacters': obj.requireLowercaseCharacters,
    'AllowUsersToChangePassword': obj.allowUsersToChangePassword,
    'ExpirePasswords': obj.expirePasswords,
    'MaxPasswordAge': obj.maxPasswordAge,
    'PasswordReusePrevention': obj.passwordReusePrevention,
    'HardExpiry': obj.hardExpiry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamAccessDetail
 */
export interface IamAccessDetail {
  /**
   * @schema IamAccessDetail#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema IamAccessDetail#ServiceNamespace
   */
  readonly serviceNamespace?: string;

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
 * Converts an object of type 'IamAccessDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAccessDetail(obj: IamAccessDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceName': obj.serviceName,
    'ServiceNamespace': obj.serviceNamespace,
    'Region': obj.region,
    'EntityPath': obj.entityPath,
    'LastAuthenticatedTime': obj.lastAuthenticatedTime,
    'TotalAuthenticatedEntities': obj.totalAuthenticatedEntities,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamErrorDetails
 */
export interface IamErrorDetails {
  /**
   * @schema IamErrorDetails#Message
   */
  readonly message?: string;

  /**
   * @schema IamErrorDetails#Code
   */
  readonly code?: string;

}

/**
 * Converts an object of type 'IamErrorDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamErrorDetails(obj: IamErrorDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
    'Code': obj.code,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamsshPublicKey
 */
export interface IamsshPublicKey {
  /**
   * @schema IamsshPublicKey#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamsshPublicKey#SSHPublicKeyId
   */
  readonly sshPublicKeyId?: string;

  /**
   * @schema IamsshPublicKey#Fingerprint
   */
  readonly fingerprint?: string;

  /**
   * @schema IamsshPublicKey#SSHPublicKeyBody
   */
  readonly sshPublicKeyBody?: string;

  /**
   * @schema IamsshPublicKey#Status
   */
  readonly status?: string;

  /**
   * @schema IamsshPublicKey#UploadDate
   */
  readonly uploadDate?: string;

}

/**
 * Converts an object of type 'IamsshPublicKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamsshPublicKey(obj: IamsshPublicKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SSHPublicKeyId': obj.sshPublicKeyId,
    'Fingerprint': obj.fingerprint,
    'SSHPublicKeyBody': obj.sshPublicKeyBody,
    'Status': obj.status,
    'UploadDate': obj.uploadDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamServerCertificate
 */
export interface IamServerCertificate {
  /**
   * @schema IamServerCertificate#ServerCertificateMetadata
   */
  readonly serverCertificateMetadata?: IamServerCertificateMetadata;

  /**
   * @schema IamServerCertificate#CertificateBody
   */
  readonly certificateBody?: string;

  /**
   * @schema IamServerCertificate#CertificateChain
   */
  readonly certificateChain?: string;

  /**
   * @schema IamServerCertificate#Tags
   */
  readonly tags?: IamTag[];

}

/**
 * Converts an object of type 'IamServerCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamServerCertificate(obj: IamServerCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerCertificateMetadata': toJson_IamServerCertificateMetadata(obj.serverCertificateMetadata),
    'CertificateBody': obj.certificateBody,
    'CertificateChain': obj.certificateChain,
    'Tags': obj.tags?.map(y => toJson_IamTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamServiceLastAccessed
 */
export interface IamServiceLastAccessed {
  /**
   * @schema IamServiceLastAccessed#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema IamServiceLastAccessed#LastAuthenticated
   */
  readonly lastAuthenticated?: string;

  /**
   * @schema IamServiceLastAccessed#ServiceNamespace
   */
  readonly serviceNamespace?: string;

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
 * Converts an object of type 'IamServiceLastAccessed' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamServiceLastAccessed(obj: IamServiceLastAccessed | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceName': obj.serviceName,
    'LastAuthenticated': obj.lastAuthenticated,
    'ServiceNamespace': obj.serviceNamespace,
    'LastAuthenticatedEntity': obj.lastAuthenticatedEntity,
    'LastAuthenticatedRegion': obj.lastAuthenticatedRegion,
    'TotalAuthenticatedEntities': obj.totalAuthenticatedEntities,
    'TrackedActionsLastAccessed': obj.trackedActionsLastAccessed?.map(y => toJson_IamTrackedActionLastAccessed(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamEntityDetails
 */
export interface IamEntityDetails {
  /**
   * @schema IamEntityDetails#EntityInfo
   */
  readonly entityInfo?: IamEntityInfo;

  /**
   * @schema IamEntityDetails#LastAuthenticated
   */
  readonly lastAuthenticated?: string;

}

/**
 * Converts an object of type 'IamEntityDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamEntityDetails(obj: IamEntityDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityInfo': toJson_IamEntityInfo(obj.entityInfo),
    'LastAuthenticated': obj.lastAuthenticated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamDeletionTaskFailureReasonType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamDeletionTaskFailureReasonType(obj: IamDeletionTaskFailureReasonType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Reason': obj.reason,
    'RoleUsageList': obj.roleUsageList?.map(y => toJson_IamRoleUsageType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamAccessKeyMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAccessKeyMetadata(obj: IamAccessKeyMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AccessKeyId': obj.accessKeyId,
    'Status': obj.status,
    'CreateDate': obj.createDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamAttachedPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAttachedPolicy(obj: IamAttachedPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamPolicyGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyGroup(obj: IamPolicyGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamPolicyUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyUser(obj: IamPolicyUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamPolicyRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyRole(obj: IamPolicyRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleName': obj.roleName,
    'RoleId': obj.roleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IammfaDevice
 */
export interface IammfaDevice {
  /**
   * @schema IammfaDevice#UserName
   */
  readonly userName?: string;

  /**
   * @schema IammfaDevice#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema IammfaDevice#EnableDate
   */
  readonly enableDate?: string;

}

/**
 * Converts an object of type 'IammfaDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IammfaDevice(obj: IammfaDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SerialNumber': obj.serialNumber,
    'EnableDate': obj.enableDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamOpenIdConnectProviderListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamOpenIdConnectProviderListEntry(obj: IamOpenIdConnectProviderListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamListPoliciesGrantingServiceAccessEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamListPoliciesGrantingServiceAccessEntry(obj: IamListPoliciesGrantingServiceAccessEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNamespace': obj.serviceNamespace,
    'Policies': obj.policies?.map(y => toJson_IamPolicyGrantingServiceAccess(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamsamlProviderListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamsamlProviderListEntry(obj: IamsamlProviderListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ValidUntil': obj.validUntil,
    'CreateDate': obj.createDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamsshPublicKeyMetadata
 */
export interface IamsshPublicKeyMetadata {
  /**
   * @schema IamsshPublicKeyMetadata#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamsshPublicKeyMetadata#SSHPublicKeyId
   */
  readonly sshPublicKeyId?: string;

  /**
   * @schema IamsshPublicKeyMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema IamsshPublicKeyMetadata#UploadDate
   */
  readonly uploadDate?: string;

}

/**
 * Converts an object of type 'IamsshPublicKeyMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamsshPublicKeyMetadata(obj: IamsshPublicKeyMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'SSHPublicKeyId': obj.sshPublicKeyId,
    'Status': obj.status,
    'UploadDate': obj.uploadDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamServerCertificateMetadata
 */
export interface IamServerCertificateMetadata {
  /**
   * @schema IamServerCertificateMetadata#Path
   */
  readonly path?: string;

  /**
   * @schema IamServerCertificateMetadata#ServerCertificateName
   */
  readonly serverCertificateName?: string;

  /**
   * @schema IamServerCertificateMetadata#ServerCertificateId
   */
  readonly serverCertificateId?: string;

  /**
   * @schema IamServerCertificateMetadata#Arn
   */
  readonly arn?: string;

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
 * Converts an object of type 'IamServerCertificateMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamServerCertificateMetadata(obj: IamServerCertificateMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'ServerCertificateName': obj.serverCertificateName,
    'ServerCertificateId': obj.serverCertificateId,
    'Arn': obj.arn,
    'UploadDate': obj.uploadDate,
    'Expiration': obj.expiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamServiceSpecificCredentialMetadata
 */
export interface IamServiceSpecificCredentialMetadata {
  /**
   * @schema IamServiceSpecificCredentialMetadata#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#ServiceUserName
   */
  readonly serviceUserName?: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#ServiceSpecificCredentialId
   */
  readonly serviceSpecificCredentialId?: string;

  /**
   * @schema IamServiceSpecificCredentialMetadata#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'IamServiceSpecificCredentialMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamServiceSpecificCredentialMetadata(obj: IamServiceSpecificCredentialMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Status': obj.status,
    'ServiceUserName': obj.serviceUserName,
    'CreateDate': obj.createDate,
    'ServiceSpecificCredentialId': obj.serviceSpecificCredentialId,
    'ServiceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamSigningCertificate
 */
export interface IamSigningCertificate {
  /**
   * @schema IamSigningCertificate#UserName
   */
  readonly userName?: string;

  /**
   * @schema IamSigningCertificate#CertificateId
   */
  readonly certificateId?: string;

  /**
   * @schema IamSigningCertificate#CertificateBody
   */
  readonly certificateBody?: string;

  /**
   * @schema IamSigningCertificate#Status
   */
  readonly status?: string;

  /**
   * @schema IamSigningCertificate#UploadDate
   */
  readonly uploadDate?: string;

}

/**
 * Converts an object of type 'IamSigningCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamSigningCertificate(obj: IamSigningCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'CertificateId': obj.certificateId,
    'CertificateBody': obj.certificateBody,
    'Status': obj.status,
    'UploadDate': obj.uploadDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamContextEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamContextEntry(obj: IamContextEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContextKeyName': obj.contextKeyName,
    'ContextKeyValues': obj.contextKeyValues?.map(y => y),
    'ContextKeyType': obj.contextKeyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamEvaluationResult
 */
export interface IamEvaluationResult {
  /**
   * @schema IamEvaluationResult#EvalActionName
   */
  readonly evalActionName?: string;

  /**
   * @schema IamEvaluationResult#EvalResourceName
   */
  readonly evalResourceName?: string;

  /**
   * @schema IamEvaluationResult#EvalDecision
   */
  readonly evalDecision?: string;

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
 * Converts an object of type 'IamEvaluationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamEvaluationResult(obj: IamEvaluationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvalActionName': obj.evalActionName,
    'EvalResourceName': obj.evalResourceName,
    'EvalDecision': obj.evalDecision,
    'MatchedStatements': obj.matchedStatements?.map(y => toJson_IamStatement(y)),
    'MissingContextValues': obj.missingContextValues?.map(y => y),
    'OrganizationsDecisionDetail': toJson_IamOrganizationsDecisionDetail(obj.organizationsDecisionDetail),
    'PermissionsBoundaryDecisionDetail': toJson_IamPermissionsBoundaryDecisionDetail(obj.permissionsBoundaryDecisionDetail),
    'EvalDecisionDetails': ((obj.evalDecisionDetails) === undefined) ? undefined : (Object.entries(obj.evalDecisionDetails).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResourceSpecificResults': obj.resourceSpecificResults?.map(y => toJson_IamResourceSpecificResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamAttachedPermissionsBoundary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamAttachedPermissionsBoundary(obj: IamAttachedPermissionsBoundary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PermissionsBoundaryType': obj.permissionsBoundaryType,
    'PermissionsBoundaryArn': obj.permissionsBoundaryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamRoleLastUsed' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamRoleLastUsed(obj: IamRoleLastUsed | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastUsedDate': obj.lastUsedDate,
    'Region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamPolicyDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyDetail(obj: IamPolicyDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'PolicyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamTrackedActionLastAccessed' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamTrackedActionLastAccessed(obj: IamTrackedActionLastAccessed | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionName': obj.actionName,
    'LastAccessedEntity': obj.lastAccessedEntity,
    'LastAccessedTime': obj.lastAccessedTime,
    'LastAccessedRegion': obj.lastAccessedRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamEntityInfo
 */
export interface IamEntityInfo {
  /**
   * @schema IamEntityInfo#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamEntityInfo#Name
   */
  readonly name?: string;

  /**
   * @schema IamEntityInfo#Type
   */
  readonly type?: string;

  /**
   * @schema IamEntityInfo#Id
   */
  readonly id?: string;

  /**
   * @schema IamEntityInfo#Path
   */
  readonly path?: string;

}

/**
 * Converts an object of type 'IamEntityInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamEntityInfo(obj: IamEntityInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Type': obj.type,
    'Id': obj.id,
    'Path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamRoleUsageType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamRoleUsageType(obj: IamRoleUsageType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Region': obj.region,
    'Resources': obj.resources?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamPolicyGrantingServiceAccess
 */
export interface IamPolicyGrantingServiceAccess {
  /**
   * @schema IamPolicyGrantingServiceAccess#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema IamPolicyGrantingServiceAccess#PolicyType
   */
  readonly policyType?: string;

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
 * Converts an object of type 'IamPolicyGrantingServiceAccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyGrantingServiceAccess(obj: IamPolicyGrantingServiceAccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'PolicyType': obj.policyType,
    'PolicyArn': obj.policyArn,
    'EntityType': obj.entityType,
    'EntityName': obj.entityName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamStatement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamStatement(obj: IamStatement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourcePolicyId': obj.sourcePolicyId,
    'SourcePolicyType': obj.sourcePolicyType,
    'StartPosition': toJson_IamPosition(obj.startPosition),
    'EndPosition': toJson_IamPosition(obj.endPosition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamOrganizationsDecisionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamOrganizationsDecisionDetail(obj: IamOrganizationsDecisionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowedByOrganizations': obj.allowedByOrganizations,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IamPermissionsBoundaryDecisionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPermissionsBoundaryDecisionDetail(obj: IamPermissionsBoundaryDecisionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowedByPermissionsBoundary': obj.allowedByPermissionsBoundary,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IamResourceSpecificResult
 */
export interface IamResourceSpecificResult {
  /**
   * @schema IamResourceSpecificResult#EvalResourceName
   */
  readonly evalResourceName?: string;

  /**
   * @schema IamResourceSpecificResult#EvalResourceDecision
   */
  readonly evalResourceDecision?: string;

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
 * Converts an object of type 'IamResourceSpecificResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamResourceSpecificResult(obj: IamResourceSpecificResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvalResourceName': obj.evalResourceName,
    'EvalResourceDecision': obj.evalResourceDecision,
    'MatchedStatements': obj.matchedStatements?.map(y => toJson_IamStatement(y)),
    'MissingContextValues': obj.missingContextValues?.map(y => y),
    'EvalDecisionDetails': ((obj.evalDecisionDetails) === undefined) ? undefined : (Object.entries(obj.evalDecisionDetails).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'PermissionsBoundaryDecisionDetail': toJson_IamPermissionsBoundaryDecisionDetail(obj.permissionsBoundaryDecisionDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'IamPosition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPosition(obj: IamPosition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Line': obj.line,
    'Column': obj.column,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
