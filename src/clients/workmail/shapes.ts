/**
 * @schema WorkMailAssociateDelegateToResourceRequest
 */
export interface WorkMailAssociateDelegateToResourceRequest {
  /**
   * @schema WorkMailAssociateDelegateToResourceRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailAssociateDelegateToResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkMailAssociateDelegateToResourceRequest#EntityId
   */
  readonly entityId?: string;

}

/**
 * Converts an object of type 'WorkMailAssociateDelegateToResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailAssociateDelegateToResourceRequest(obj: WorkMailAssociateDelegateToResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'ResourceId': obj.resourceId,
    'EntityId': obj.entityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailAssociateDelegateToResourceResponse
 */
export interface WorkMailAssociateDelegateToResourceResponse {
}

/**
 * Converts an object of type 'WorkMailAssociateDelegateToResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailAssociateDelegateToResourceResponse(obj: WorkMailAssociateDelegateToResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailAssociateMemberToGroupRequest
 */
export interface WorkMailAssociateMemberToGroupRequest {
  /**
   * @schema WorkMailAssociateMemberToGroupRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailAssociateMemberToGroupRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkMailAssociateMemberToGroupRequest#MemberId
   */
  readonly memberId?: string;

}

/**
 * Converts an object of type 'WorkMailAssociateMemberToGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailAssociateMemberToGroupRequest(obj: WorkMailAssociateMemberToGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'GroupId': obj.groupId,
    'MemberId': obj.memberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailAssociateMemberToGroupResponse
 */
export interface WorkMailAssociateMemberToGroupResponse {
}

/**
 * Converts an object of type 'WorkMailAssociateMemberToGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailAssociateMemberToGroupResponse(obj: WorkMailAssociateMemberToGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCancelMailboxExportJobRequest
 */
export interface WorkMailCancelMailboxExportJobRequest {
  /**
   * @schema WorkMailCancelMailboxExportJobRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema WorkMailCancelMailboxExportJobRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema WorkMailCancelMailboxExportJobRequest#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'WorkMailCancelMailboxExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCancelMailboxExportJobRequest(obj: WorkMailCancelMailboxExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'JobId': obj.jobId,
    'OrganizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCancelMailboxExportJobResponse
 */
export interface WorkMailCancelMailboxExportJobResponse {
}

/**
 * Converts an object of type 'WorkMailCancelMailboxExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCancelMailboxExportJobResponse(obj: WorkMailCancelMailboxExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateAliasRequest
 */
export interface WorkMailCreateAliasRequest {
  /**
   * @schema WorkMailCreateAliasRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailCreateAliasRequest#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailCreateAliasRequest#Alias
   */
  readonly alias?: string;

}

/**
 * Converts an object of type 'WorkMailCreateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateAliasRequest(obj: WorkMailCreateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
    'Alias': obj.alias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateAliasResponse
 */
export interface WorkMailCreateAliasResponse {
}

/**
 * Converts an object of type 'WorkMailCreateAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateAliasResponse(obj: WorkMailCreateAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateGroupRequest
 */
export interface WorkMailCreateGroupRequest {
  /**
   * @schema WorkMailCreateGroupRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailCreateGroupRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WorkMailCreateGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateGroupRequest(obj: WorkMailCreateGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateGroupResponse
 */
export interface WorkMailCreateGroupResponse {
  /**
   * @schema WorkMailCreateGroupResponse#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'WorkMailCreateGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateGroupResponse(obj: WorkMailCreateGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateMobileDeviceAccessRuleRequest
 */
export interface WorkMailCreateMobileDeviceAccessRuleRequest {
  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#Effect
   */
  readonly effect?: string;

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#DeviceTypes
   */
  readonly deviceTypes?: string[];

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#NotDeviceTypes
   */
  readonly notDeviceTypes?: string[];

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#DeviceModels
   */
  readonly deviceModels?: string[];

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#NotDeviceModels
   */
  readonly notDeviceModels?: string[];

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#DeviceOperatingSystems
   */
  readonly deviceOperatingSystems?: string[];

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#NotDeviceOperatingSystems
   */
  readonly notDeviceOperatingSystems?: string[];

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#DeviceUserAgents
   */
  readonly deviceUserAgents?: string[];

  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleRequest#NotDeviceUserAgents
   */
  readonly notDeviceUserAgents?: string[];

}

/**
 * Converts an object of type 'WorkMailCreateMobileDeviceAccessRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateMobileDeviceAccessRuleRequest(obj: WorkMailCreateMobileDeviceAccessRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'ClientToken': obj.clientToken,
    'Name': obj.name,
    'Description': obj.description,
    'Effect': obj.effect,
    'DeviceTypes': obj.deviceTypes?.map(y => y),
    'NotDeviceTypes': obj.notDeviceTypes?.map(y => y),
    'DeviceModels': obj.deviceModels?.map(y => y),
    'NotDeviceModels': obj.notDeviceModels?.map(y => y),
    'DeviceOperatingSystems': obj.deviceOperatingSystems?.map(y => y),
    'NotDeviceOperatingSystems': obj.notDeviceOperatingSystems?.map(y => y),
    'DeviceUserAgents': obj.deviceUserAgents?.map(y => y),
    'NotDeviceUserAgents': obj.notDeviceUserAgents?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateMobileDeviceAccessRuleResponse
 */
export interface WorkMailCreateMobileDeviceAccessRuleResponse {
  /**
   * @schema WorkMailCreateMobileDeviceAccessRuleResponse#MobileDeviceAccessRuleId
   */
  readonly mobileDeviceAccessRuleId?: string;

}

/**
 * Converts an object of type 'WorkMailCreateMobileDeviceAccessRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateMobileDeviceAccessRuleResponse(obj: WorkMailCreateMobileDeviceAccessRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MobileDeviceAccessRuleId': obj.mobileDeviceAccessRuleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateOrganizationRequest
 */
export interface WorkMailCreateOrganizationRequest {
  /**
   * @schema WorkMailCreateOrganizationRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkMailCreateOrganizationRequest#Alias
   */
  readonly alias?: string;

  /**
   * @schema WorkMailCreateOrganizationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema WorkMailCreateOrganizationRequest#Domains
   */
  readonly domains?: WorkMailDomain[];

  /**
   * @schema WorkMailCreateOrganizationRequest#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema WorkMailCreateOrganizationRequest#EnableInteroperability
   */
  readonly enableInteroperability?: boolean;

}

/**
 * Converts an object of type 'WorkMailCreateOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateOrganizationRequest(obj: WorkMailCreateOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryId': obj.directoryId,
    'Alias': obj.alias,
    'ClientToken': obj.clientToken,
    'Domains': obj.domains?.map(y => toJson_WorkMailDomain(y)),
    'KmsKeyArn': obj.kmsKeyArn,
    'EnableInteroperability': obj.enableInteroperability,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateOrganizationResponse
 */
export interface WorkMailCreateOrganizationResponse {
  /**
   * @schema WorkMailCreateOrganizationResponse#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'WorkMailCreateOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateOrganizationResponse(obj: WorkMailCreateOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateResourceRequest
 */
export interface WorkMailCreateResourceRequest {
  /**
   * @schema WorkMailCreateResourceRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailCreateResourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailCreateResourceRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'WorkMailCreateResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateResourceRequest(obj: WorkMailCreateResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Name': obj.name,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateResourceResponse
 */
export interface WorkMailCreateResourceResponse {
  /**
   * @schema WorkMailCreateResourceResponse#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'WorkMailCreateResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateResourceResponse(obj: WorkMailCreateResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateUserRequest
 */
export interface WorkMailCreateUserRequest {
  /**
   * @schema WorkMailCreateUserRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailCreateUserRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailCreateUserRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkMailCreateUserRequest#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'WorkMailCreateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateUserRequest(obj: WorkMailCreateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Name': obj.name,
    'DisplayName': obj.displayName,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailCreateUserResponse
 */
export interface WorkMailCreateUserResponse {
  /**
   * @schema WorkMailCreateUserResponse#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'WorkMailCreateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailCreateUserResponse(obj: WorkMailCreateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteAccessControlRuleRequest
 */
export interface WorkMailDeleteAccessControlRuleRequest {
  /**
   * @schema WorkMailDeleteAccessControlRuleRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteAccessControlRuleRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WorkMailDeleteAccessControlRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteAccessControlRuleRequest(obj: WorkMailDeleteAccessControlRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteAccessControlRuleResponse
 */
export interface WorkMailDeleteAccessControlRuleResponse {
}

/**
 * Converts an object of type 'WorkMailDeleteAccessControlRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteAccessControlRuleResponse(obj: WorkMailDeleteAccessControlRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteAliasRequest
 */
export interface WorkMailDeleteAliasRequest {
  /**
   * @schema WorkMailDeleteAliasRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteAliasRequest#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailDeleteAliasRequest#Alias
   */
  readonly alias?: string;

}

/**
 * Converts an object of type 'WorkMailDeleteAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteAliasRequest(obj: WorkMailDeleteAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
    'Alias': obj.alias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteAliasResponse
 */
export interface WorkMailDeleteAliasResponse {
}

/**
 * Converts an object of type 'WorkMailDeleteAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteAliasResponse(obj: WorkMailDeleteAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteGroupRequest
 */
export interface WorkMailDeleteGroupRequest {
  /**
   * @schema WorkMailDeleteGroupRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteGroupRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'WorkMailDeleteGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteGroupRequest(obj: WorkMailDeleteGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteGroupResponse
 */
export interface WorkMailDeleteGroupResponse {
}

/**
 * Converts an object of type 'WorkMailDeleteGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteGroupResponse(obj: WorkMailDeleteGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteMailboxPermissionsRequest
 */
export interface WorkMailDeleteMailboxPermissionsRequest {
  /**
   * @schema WorkMailDeleteMailboxPermissionsRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteMailboxPermissionsRequest#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailDeleteMailboxPermissionsRequest#GranteeId
   */
  readonly granteeId?: string;

}

/**
 * Converts an object of type 'WorkMailDeleteMailboxPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteMailboxPermissionsRequest(obj: WorkMailDeleteMailboxPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
    'GranteeId': obj.granteeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteMailboxPermissionsResponse
 */
export interface WorkMailDeleteMailboxPermissionsResponse {
}

/**
 * Converts an object of type 'WorkMailDeleteMailboxPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteMailboxPermissionsResponse(obj: WorkMailDeleteMailboxPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteMobileDeviceAccessRuleRequest
 */
export interface WorkMailDeleteMobileDeviceAccessRuleRequest {
  /**
   * @schema WorkMailDeleteMobileDeviceAccessRuleRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteMobileDeviceAccessRuleRequest#MobileDeviceAccessRuleId
   */
  readonly mobileDeviceAccessRuleId?: string;

}

/**
 * Converts an object of type 'WorkMailDeleteMobileDeviceAccessRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteMobileDeviceAccessRuleRequest(obj: WorkMailDeleteMobileDeviceAccessRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'MobileDeviceAccessRuleId': obj.mobileDeviceAccessRuleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteMobileDeviceAccessRuleResponse
 */
export interface WorkMailDeleteMobileDeviceAccessRuleResponse {
}

/**
 * Converts an object of type 'WorkMailDeleteMobileDeviceAccessRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteMobileDeviceAccessRuleResponse(obj: WorkMailDeleteMobileDeviceAccessRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteOrganizationRequest
 */
export interface WorkMailDeleteOrganizationRequest {
  /**
   * @schema WorkMailDeleteOrganizationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema WorkMailDeleteOrganizationRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteOrganizationRequest#DeleteDirectory
   */
  readonly deleteDirectory?: boolean;

}

/**
 * Converts an object of type 'WorkMailDeleteOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteOrganizationRequest(obj: WorkMailDeleteOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'OrganizationId': obj.organizationId,
    'DeleteDirectory': obj.deleteDirectory,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteOrganizationResponse
 */
export interface WorkMailDeleteOrganizationResponse {
  /**
   * @schema WorkMailDeleteOrganizationResponse#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteOrganizationResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'WorkMailDeleteOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteOrganizationResponse(obj: WorkMailDeleteOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteResourceRequest
 */
export interface WorkMailDeleteResourceRequest {
  /**
   * @schema WorkMailDeleteResourceRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteResourceRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'WorkMailDeleteResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteResourceRequest(obj: WorkMailDeleteResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteResourceResponse
 */
export interface WorkMailDeleteResourceResponse {
}

/**
 * Converts an object of type 'WorkMailDeleteResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteResourceResponse(obj: WorkMailDeleteResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteRetentionPolicyRequest
 */
export interface WorkMailDeleteRetentionPolicyRequest {
  /**
   * @schema WorkMailDeleteRetentionPolicyRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteRetentionPolicyRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'WorkMailDeleteRetentionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteRetentionPolicyRequest(obj: WorkMailDeleteRetentionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteRetentionPolicyResponse
 */
export interface WorkMailDeleteRetentionPolicyResponse {
}

/**
 * Converts an object of type 'WorkMailDeleteRetentionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteRetentionPolicyResponse(obj: WorkMailDeleteRetentionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteUserRequest
 */
export interface WorkMailDeleteUserRequest {
  /**
   * @schema WorkMailDeleteUserRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeleteUserRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'WorkMailDeleteUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteUserRequest(obj: WorkMailDeleteUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeleteUserResponse
 */
export interface WorkMailDeleteUserResponse {
}

/**
 * Converts an object of type 'WorkMailDeleteUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeleteUserResponse(obj: WorkMailDeleteUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeregisterFromWorkMailRequest
 */
export interface WorkMailDeregisterFromWorkMailRequest {
  /**
   * @schema WorkMailDeregisterFromWorkMailRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDeregisterFromWorkMailRequest#EntityId
   */
  readonly entityId?: string;

}

/**
 * Converts an object of type 'WorkMailDeregisterFromWorkMailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeregisterFromWorkMailRequest(obj: WorkMailDeregisterFromWorkMailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDeregisterFromWorkMailResponse
 */
export interface WorkMailDeregisterFromWorkMailResponse {
}

/**
 * Converts an object of type 'WorkMailDeregisterFromWorkMailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDeregisterFromWorkMailResponse(obj: WorkMailDeregisterFromWorkMailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeGroupRequest
 */
export interface WorkMailDescribeGroupRequest {
  /**
   * @schema WorkMailDescribeGroupRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDescribeGroupRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeGroupRequest(obj: WorkMailDescribeGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeGroupResponse
 */
export interface WorkMailDescribeGroupResponse {
  /**
   * @schema WorkMailDescribeGroupResponse#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailDescribeGroupResponse#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeGroupResponse(obj: WorkMailDescribeGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'Name': obj.name,
    'Email': obj.email,
    'State': obj.state,
    'EnabledDate': obj.enabledDate,
    'DisabledDate': obj.disabledDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeMailboxExportJobRequest
 */
export interface WorkMailDescribeMailboxExportJobRequest {
  /**
   * @schema WorkMailDescribeMailboxExportJobRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobRequest#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeMailboxExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeMailboxExportJobRequest(obj: WorkMailDescribeMailboxExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'OrganizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeMailboxExportJobResponse
 */
export interface WorkMailDescribeMailboxExportJobResponse {
  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#S3Prefix
   */
  readonly s3Prefix?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#S3Path
   */
  readonly s3Path?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#EstimatedProgress
   */
  readonly estimatedProgress?: number;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#ErrorInfo
   */
  readonly errorInfo?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema WorkMailDescribeMailboxExportJobResponse#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeMailboxExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeMailboxExportJobResponse(obj: WorkMailDescribeMailboxExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityId': obj.entityId,
    'Description': obj.description,
    'RoleArn': obj.roleArn,
    'KmsKeyArn': obj.kmsKeyArn,
    'S3BucketName': obj.s3BucketName,
    'S3Prefix': obj.s3Prefix,
    'S3Path': obj.s3Path,
    'EstimatedProgress': obj.estimatedProgress,
    'State': obj.state,
    'ErrorInfo': obj.errorInfo,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeOrganizationRequest
 */
export interface WorkMailDescribeOrganizationRequest {
  /**
   * @schema WorkMailDescribeOrganizationRequest#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeOrganizationRequest(obj: WorkMailDescribeOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeOrganizationResponse
 */
export interface WorkMailDescribeOrganizationResponse {
  /**
   * @schema WorkMailDescribeOrganizationResponse#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#Alias
   */
  readonly alias?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#DirectoryType
   */
  readonly directoryType?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#DefaultMailDomain
   */
  readonly defaultMailDomain?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#CompletedDate
   */
  readonly completedDate?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkMailDescribeOrganizationResponse#ARN
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeOrganizationResponse(obj: WorkMailDescribeOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Alias': obj.alias,
    'State': obj.state,
    'DirectoryId': obj.directoryId,
    'DirectoryType': obj.directoryType,
    'DefaultMailDomain': obj.defaultMailDomain,
    'CompletedDate': obj.completedDate,
    'ErrorMessage': obj.errorMessage,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeResourceRequest
 */
export interface WorkMailDescribeResourceRequest {
  /**
   * @schema WorkMailDescribeResourceRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDescribeResourceRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeResourceRequest(obj: WorkMailDescribeResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeResourceResponse
 */
export interface WorkMailDescribeResourceResponse {
  /**
   * @schema WorkMailDescribeResourceResponse#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#Type
   */
  readonly type?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#BookingOptions
   */
  readonly bookingOptions?: WorkMailBookingOptions;

  /**
   * @schema WorkMailDescribeResourceResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailDescribeResourceResponse#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeResourceResponse(obj: WorkMailDescribeResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'Email': obj.email,
    'Name': obj.name,
    'Type': obj.type,
    'BookingOptions': toJson_WorkMailBookingOptions(obj.bookingOptions),
    'State': obj.state,
    'EnabledDate': obj.enabledDate,
    'DisabledDate': obj.disabledDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeUserRequest
 */
export interface WorkMailDescribeUserRequest {
  /**
   * @schema WorkMailDescribeUserRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDescribeUserRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeUserRequest(obj: WorkMailDescribeUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDescribeUserResponse
 */
export interface WorkMailDescribeUserResponse {
  /**
   * @schema WorkMailDescribeUserResponse#UserId
   */
  readonly userId?: string;

  /**
   * @schema WorkMailDescribeUserResponse#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailDescribeUserResponse#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailDescribeUserResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkMailDescribeUserResponse#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailDescribeUserResponse#UserRole
   */
  readonly userRole?: string;

  /**
   * @schema WorkMailDescribeUserResponse#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailDescribeUserResponse#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * Converts an object of type 'WorkMailDescribeUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDescribeUserResponse(obj: WorkMailDescribeUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'Name': obj.name,
    'Email': obj.email,
    'DisplayName': obj.displayName,
    'State': obj.state,
    'UserRole': obj.userRole,
    'EnabledDate': obj.enabledDate,
    'DisabledDate': obj.disabledDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDisassociateDelegateFromResourceRequest
 */
export interface WorkMailDisassociateDelegateFromResourceRequest {
  /**
   * @schema WorkMailDisassociateDelegateFromResourceRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDisassociateDelegateFromResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkMailDisassociateDelegateFromResourceRequest#EntityId
   */
  readonly entityId?: string;

}

/**
 * Converts an object of type 'WorkMailDisassociateDelegateFromResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDisassociateDelegateFromResourceRequest(obj: WorkMailDisassociateDelegateFromResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'ResourceId': obj.resourceId,
    'EntityId': obj.entityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDisassociateDelegateFromResourceResponse
 */
export interface WorkMailDisassociateDelegateFromResourceResponse {
}

/**
 * Converts an object of type 'WorkMailDisassociateDelegateFromResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDisassociateDelegateFromResourceResponse(obj: WorkMailDisassociateDelegateFromResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDisassociateMemberFromGroupRequest
 */
export interface WorkMailDisassociateMemberFromGroupRequest {
  /**
   * @schema WorkMailDisassociateMemberFromGroupRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailDisassociateMemberFromGroupRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkMailDisassociateMemberFromGroupRequest#MemberId
   */
  readonly memberId?: string;

}

/**
 * Converts an object of type 'WorkMailDisassociateMemberFromGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDisassociateMemberFromGroupRequest(obj: WorkMailDisassociateMemberFromGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'GroupId': obj.groupId,
    'MemberId': obj.memberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDisassociateMemberFromGroupResponse
 */
export interface WorkMailDisassociateMemberFromGroupResponse {
}

/**
 * Converts an object of type 'WorkMailDisassociateMemberFromGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDisassociateMemberFromGroupResponse(obj: WorkMailDisassociateMemberFromGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailGetAccessControlEffectRequest
 */
export interface WorkMailGetAccessControlEffectRequest {
  /**
   * @schema WorkMailGetAccessControlEffectRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailGetAccessControlEffectRequest#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema WorkMailGetAccessControlEffectRequest#Action
   */
  readonly action?: string;

  /**
   * @schema WorkMailGetAccessControlEffectRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'WorkMailGetAccessControlEffectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailGetAccessControlEffectRequest(obj: WorkMailGetAccessControlEffectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'IpAddress': obj.ipAddress,
    'Action': obj.action,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailGetAccessControlEffectResponse
 */
export interface WorkMailGetAccessControlEffectResponse {
  /**
   * @schema WorkMailGetAccessControlEffectResponse#Effect
   */
  readonly effect?: string;

  /**
   * @schema WorkMailGetAccessControlEffectResponse#MatchedRules
   */
  readonly matchedRules?: string[];

}

/**
 * Converts an object of type 'WorkMailGetAccessControlEffectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailGetAccessControlEffectResponse(obj: WorkMailGetAccessControlEffectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Effect': obj.effect,
    'MatchedRules': obj.matchedRules?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailGetDefaultRetentionPolicyRequest
 */
export interface WorkMailGetDefaultRetentionPolicyRequest {
  /**
   * @schema WorkMailGetDefaultRetentionPolicyRequest#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'WorkMailGetDefaultRetentionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailGetDefaultRetentionPolicyRequest(obj: WorkMailGetDefaultRetentionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailGetDefaultRetentionPolicyResponse
 */
export interface WorkMailGetDefaultRetentionPolicyResponse {
  /**
   * @schema WorkMailGetDefaultRetentionPolicyResponse#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailGetDefaultRetentionPolicyResponse#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailGetDefaultRetentionPolicyResponse#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailGetDefaultRetentionPolicyResponse#FolderConfigurations
   */
  readonly folderConfigurations?: WorkMailFolderConfiguration[];

}

/**
 * Converts an object of type 'WorkMailGetDefaultRetentionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailGetDefaultRetentionPolicyResponse(obj: WorkMailGetDefaultRetentionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'FolderConfigurations': obj.folderConfigurations?.map(y => toJson_WorkMailFolderConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailGetMailboxDetailsRequest
 */
export interface WorkMailGetMailboxDetailsRequest {
  /**
   * @schema WorkMailGetMailboxDetailsRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailGetMailboxDetailsRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'WorkMailGetMailboxDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailGetMailboxDetailsRequest(obj: WorkMailGetMailboxDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailGetMailboxDetailsResponse
 */
export interface WorkMailGetMailboxDetailsResponse {
  /**
   * @schema WorkMailGetMailboxDetailsResponse#MailboxQuota
   */
  readonly mailboxQuota?: number;

  /**
   * @schema WorkMailGetMailboxDetailsResponse#MailboxSize
   */
  readonly mailboxSize?: number;

}

/**
 * Converts an object of type 'WorkMailGetMailboxDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailGetMailboxDetailsResponse(obj: WorkMailGetMailboxDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MailboxQuota': obj.mailboxQuota,
    'MailboxSize': obj.mailboxSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailGetMobileDeviceAccessEffectRequest
 */
export interface WorkMailGetMobileDeviceAccessEffectRequest {
  /**
   * @schema WorkMailGetMobileDeviceAccessEffectRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailGetMobileDeviceAccessEffectRequest#DeviceType
   */
  readonly deviceType?: string;

  /**
   * @schema WorkMailGetMobileDeviceAccessEffectRequest#DeviceModel
   */
  readonly deviceModel?: string;

  /**
   * @schema WorkMailGetMobileDeviceAccessEffectRequest#DeviceOperatingSystem
   */
  readonly deviceOperatingSystem?: string;

  /**
   * @schema WorkMailGetMobileDeviceAccessEffectRequest#DeviceUserAgent
   */
  readonly deviceUserAgent?: string;

}

/**
 * Converts an object of type 'WorkMailGetMobileDeviceAccessEffectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailGetMobileDeviceAccessEffectRequest(obj: WorkMailGetMobileDeviceAccessEffectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'DeviceType': obj.deviceType,
    'DeviceModel': obj.deviceModel,
    'DeviceOperatingSystem': obj.deviceOperatingSystem,
    'DeviceUserAgent': obj.deviceUserAgent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailGetMobileDeviceAccessEffectResponse
 */
export interface WorkMailGetMobileDeviceAccessEffectResponse {
  /**
   * @schema WorkMailGetMobileDeviceAccessEffectResponse#Effect
   */
  readonly effect?: string;

  /**
   * @schema WorkMailGetMobileDeviceAccessEffectResponse#MatchedRules
   */
  readonly matchedRules?: WorkMailMobileDeviceAccessMatchedRule[];

}

/**
 * Converts an object of type 'WorkMailGetMobileDeviceAccessEffectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailGetMobileDeviceAccessEffectResponse(obj: WorkMailGetMobileDeviceAccessEffectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Effect': obj.effect,
    'MatchedRules': obj.matchedRules?.map(y => toJson_WorkMailMobileDeviceAccessMatchedRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListAccessControlRulesRequest
 */
export interface WorkMailListAccessControlRulesRequest {
  /**
   * @schema WorkMailListAccessControlRulesRequest#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'WorkMailListAccessControlRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListAccessControlRulesRequest(obj: WorkMailListAccessControlRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListAccessControlRulesResponse
 */
export interface WorkMailListAccessControlRulesResponse {
  /**
   * @schema WorkMailListAccessControlRulesResponse#Rules
   */
  readonly rules?: WorkMailAccessControlRule[];

}

/**
 * Converts an object of type 'WorkMailListAccessControlRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListAccessControlRulesResponse(obj: WorkMailListAccessControlRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_WorkMailAccessControlRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListAliasesRequest
 */
export interface WorkMailListAliasesRequest {
  /**
   * @schema WorkMailListAliasesRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailListAliasesRequest#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailListAliasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListAliasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkMailListAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListAliasesRequest(obj: WorkMailListAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListAliasesResponse
 */
export interface WorkMailListAliasesResponse {
  /**
   * @schema WorkMailListAliasesResponse#Aliases
   */
  readonly aliases?: string[];

  /**
   * @schema WorkMailListAliasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkMailListAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListAliasesResponse(obj: WorkMailListAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Aliases': obj.aliases?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListGroupMembersRequest
 */
export interface WorkMailListGroupMembersRequest {
  /**
   * @schema WorkMailListGroupMembersRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailListGroupMembersRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkMailListGroupMembersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListGroupMembersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkMailListGroupMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListGroupMembersRequest(obj: WorkMailListGroupMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'GroupId': obj.groupId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListGroupMembersResponse
 */
export interface WorkMailListGroupMembersResponse {
  /**
   * @schema WorkMailListGroupMembersResponse#Members
   */
  readonly members?: WorkMailMember[];

  /**
   * @schema WorkMailListGroupMembersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkMailListGroupMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListGroupMembersResponse(obj: WorkMailListGroupMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Members': obj.members?.map(y => toJson_WorkMailMember(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListGroupsRequest
 */
export interface WorkMailListGroupsRequest {
  /**
   * @schema WorkMailListGroupsRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkMailListGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListGroupsRequest(obj: WorkMailListGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListGroupsResponse
 */
export interface WorkMailListGroupsResponse {
  /**
   * @schema WorkMailListGroupsResponse#Groups
   */
  readonly groups?: WorkMailGroup[];

  /**
   * @schema WorkMailListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkMailListGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListGroupsResponse(obj: WorkMailListGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Groups': obj.groups?.map(y => toJson_WorkMailGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListMailboxExportJobsRequest
 */
export interface WorkMailListMailboxExportJobsRequest {
  /**
   * @schema WorkMailListMailboxExportJobsRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailListMailboxExportJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListMailboxExportJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkMailListMailboxExportJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListMailboxExportJobsRequest(obj: WorkMailListMailboxExportJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListMailboxExportJobsResponse
 */
export interface WorkMailListMailboxExportJobsResponse {
  /**
   * @schema WorkMailListMailboxExportJobsResponse#Jobs
   */
  readonly jobs?: WorkMailMailboxExportJob[];

  /**
   * @schema WorkMailListMailboxExportJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkMailListMailboxExportJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListMailboxExportJobsResponse(obj: WorkMailListMailboxExportJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_WorkMailMailboxExportJob(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListMailboxPermissionsRequest
 */
export interface WorkMailListMailboxPermissionsRequest {
  /**
   * @schema WorkMailListMailboxPermissionsRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailListMailboxPermissionsRequest#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailListMailboxPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListMailboxPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkMailListMailboxPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListMailboxPermissionsRequest(obj: WorkMailListMailboxPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListMailboxPermissionsResponse
 */
export interface WorkMailListMailboxPermissionsResponse {
  /**
   * @schema WorkMailListMailboxPermissionsResponse#Permissions
   */
  readonly permissions?: WorkMailPermission[];

  /**
   * @schema WorkMailListMailboxPermissionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkMailListMailboxPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListMailboxPermissionsResponse(obj: WorkMailListMailboxPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Permissions': obj.permissions?.map(y => toJson_WorkMailPermission(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListMobileDeviceAccessRulesRequest
 */
export interface WorkMailListMobileDeviceAccessRulesRequest {
  /**
   * @schema WorkMailListMobileDeviceAccessRulesRequest#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'WorkMailListMobileDeviceAccessRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListMobileDeviceAccessRulesRequest(obj: WorkMailListMobileDeviceAccessRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListMobileDeviceAccessRulesResponse
 */
export interface WorkMailListMobileDeviceAccessRulesResponse {
  /**
   * @schema WorkMailListMobileDeviceAccessRulesResponse#Rules
   */
  readonly rules?: WorkMailMobileDeviceAccessRule[];

}

/**
 * Converts an object of type 'WorkMailListMobileDeviceAccessRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListMobileDeviceAccessRulesResponse(obj: WorkMailListMobileDeviceAccessRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_WorkMailMobileDeviceAccessRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListOrganizationsRequest
 */
export interface WorkMailListOrganizationsRequest {
  /**
   * @schema WorkMailListOrganizationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListOrganizationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkMailListOrganizationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListOrganizationsRequest(obj: WorkMailListOrganizationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListOrganizationsResponse
 */
export interface WorkMailListOrganizationsResponse {
  /**
   * @schema WorkMailListOrganizationsResponse#OrganizationSummaries
   */
  readonly organizationSummaries?: WorkMailOrganizationSummary[];

  /**
   * @schema WorkMailListOrganizationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkMailListOrganizationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListOrganizationsResponse(obj: WorkMailListOrganizationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationSummaries': obj.organizationSummaries?.map(y => toJson_WorkMailOrganizationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListResourceDelegatesRequest
 */
export interface WorkMailListResourceDelegatesRequest {
  /**
   * @schema WorkMailListResourceDelegatesRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailListResourceDelegatesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkMailListResourceDelegatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListResourceDelegatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkMailListResourceDelegatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListResourceDelegatesRequest(obj: WorkMailListResourceDelegatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'ResourceId': obj.resourceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListResourceDelegatesResponse
 */
export interface WorkMailListResourceDelegatesResponse {
  /**
   * @schema WorkMailListResourceDelegatesResponse#Delegates
   */
  readonly delegates?: WorkMailDelegate[];

  /**
   * @schema WorkMailListResourceDelegatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkMailListResourceDelegatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListResourceDelegatesResponse(obj: WorkMailListResourceDelegatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Delegates': obj.delegates?.map(y => toJson_WorkMailDelegate(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListResourcesRequest
 */
export interface WorkMailListResourcesRequest {
  /**
   * @schema WorkMailListResourcesRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailListResourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListResourcesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkMailListResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListResourcesRequest(obj: WorkMailListResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListResourcesResponse
 */
export interface WorkMailListResourcesResponse {
  /**
   * @schema WorkMailListResourcesResponse#Resources
   */
  readonly resources?: WorkMailResource[];

  /**
   * @schema WorkMailListResourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkMailListResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListResourcesResponse(obj: WorkMailListResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resources': obj.resources?.map(y => toJson_WorkMailResource(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListTagsForResourceRequest
 */
export interface WorkMailListTagsForResourceRequest {
  /**
   * @schema WorkMailListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WorkMailListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListTagsForResourceRequest(obj: WorkMailListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListTagsForResourceResponse
 */
export interface WorkMailListTagsForResourceResponse {
  /**
   * @schema WorkMailListTagsForResourceResponse#Tags
   */
  readonly tags?: WorkMailTag[];

}

/**
 * Converts an object of type 'WorkMailListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListTagsForResourceResponse(obj: WorkMailListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_WorkMailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListUsersRequest
 */
export interface WorkMailListUsersRequest {
  /**
   * @schema WorkMailListUsersRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkMailListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkMailListUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListUsersRequest(obj: WorkMailListUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailListUsersResponse
 */
export interface WorkMailListUsersResponse {
  /**
   * @schema WorkMailListUsersResponse#Users
   */
  readonly users?: WorkMailUser[];

  /**
   * @schema WorkMailListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkMailListUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailListUsersResponse(obj: WorkMailListUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Users': obj.users?.map(y => toJson_WorkMailUser(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailPutAccessControlRuleRequest
 */
export interface WorkMailPutAccessControlRuleRequest {
  /**
   * @schema WorkMailPutAccessControlRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailPutAccessControlRuleRequest#Effect
   */
  readonly effect?: string;

  /**
   * @schema WorkMailPutAccessControlRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailPutAccessControlRuleRequest#IpRanges
   */
  readonly ipRanges?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#NotIpRanges
   */
  readonly notIpRanges?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#Actions
   */
  readonly actions?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#NotActions
   */
  readonly notActions?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#NotUserIds
   */
  readonly notUserIds?: string[];

  /**
   * @schema WorkMailPutAccessControlRuleRequest#OrganizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'WorkMailPutAccessControlRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailPutAccessControlRuleRequest(obj: WorkMailPutAccessControlRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Effect': obj.effect,
    'Description': obj.description,
    'IpRanges': obj.ipRanges?.map(y => y),
    'NotIpRanges': obj.notIpRanges?.map(y => y),
    'Actions': obj.actions?.map(y => y),
    'NotActions': obj.notActions?.map(y => y),
    'UserIds': obj.userIds?.map(y => y),
    'NotUserIds': obj.notUserIds?.map(y => y),
    'OrganizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailPutAccessControlRuleResponse
 */
export interface WorkMailPutAccessControlRuleResponse {
}

/**
 * Converts an object of type 'WorkMailPutAccessControlRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailPutAccessControlRuleResponse(obj: WorkMailPutAccessControlRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailPutMailboxPermissionsRequest
 */
export interface WorkMailPutMailboxPermissionsRequest {
  /**
   * @schema WorkMailPutMailboxPermissionsRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailPutMailboxPermissionsRequest#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailPutMailboxPermissionsRequest#GranteeId
   */
  readonly granteeId?: string;

  /**
   * @schema WorkMailPutMailboxPermissionsRequest#PermissionValues
   */
  readonly permissionValues?: string[];

}

/**
 * Converts an object of type 'WorkMailPutMailboxPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailPutMailboxPermissionsRequest(obj: WorkMailPutMailboxPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
    'GranteeId': obj.granteeId,
    'PermissionValues': obj.permissionValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailPutMailboxPermissionsResponse
 */
export interface WorkMailPutMailboxPermissionsResponse {
}

/**
 * Converts an object of type 'WorkMailPutMailboxPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailPutMailboxPermissionsResponse(obj: WorkMailPutMailboxPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailPutRetentionPolicyRequest
 */
export interface WorkMailPutRetentionPolicyRequest {
  /**
   * @schema WorkMailPutRetentionPolicyRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailPutRetentionPolicyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailPutRetentionPolicyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailPutRetentionPolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailPutRetentionPolicyRequest#FolderConfigurations
   */
  readonly folderConfigurations?: WorkMailFolderConfiguration[];

}

/**
 * Converts an object of type 'WorkMailPutRetentionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailPutRetentionPolicyRequest(obj: WorkMailPutRetentionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'FolderConfigurations': obj.folderConfigurations?.map(y => toJson_WorkMailFolderConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailPutRetentionPolicyResponse
 */
export interface WorkMailPutRetentionPolicyResponse {
}

/**
 * Converts an object of type 'WorkMailPutRetentionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailPutRetentionPolicyResponse(obj: WorkMailPutRetentionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailRegisterToWorkMailRequest
 */
export interface WorkMailRegisterToWorkMailRequest {
  /**
   * @schema WorkMailRegisterToWorkMailRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailRegisterToWorkMailRequest#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailRegisterToWorkMailRequest#Email
   */
  readonly email?: string;

}

/**
 * Converts an object of type 'WorkMailRegisterToWorkMailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailRegisterToWorkMailRequest(obj: WorkMailRegisterToWorkMailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
    'Email': obj.email,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailRegisterToWorkMailResponse
 */
export interface WorkMailRegisterToWorkMailResponse {
}

/**
 * Converts an object of type 'WorkMailRegisterToWorkMailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailRegisterToWorkMailResponse(obj: WorkMailRegisterToWorkMailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailResetPasswordRequest
 */
export interface WorkMailResetPasswordRequest {
  /**
   * @schema WorkMailResetPasswordRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailResetPasswordRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema WorkMailResetPasswordRequest#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'WorkMailResetPasswordRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailResetPasswordRequest(obj: WorkMailResetPasswordRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'UserId': obj.userId,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailResetPasswordResponse
 */
export interface WorkMailResetPasswordResponse {
}

/**
 * Converts an object of type 'WorkMailResetPasswordResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailResetPasswordResponse(obj: WorkMailResetPasswordResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailStartMailboxExportJobRequest
 */
export interface WorkMailStartMailboxExportJobRequest {
  /**
   * @schema WorkMailStartMailboxExportJobRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema WorkMailStartMailboxExportJobRequest#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * Converts an object of type 'WorkMailStartMailboxExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailStartMailboxExportJobRequest(obj: WorkMailStartMailboxExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
    'Description': obj.description,
    'RoleArn': obj.roleArn,
    'KmsKeyArn': obj.kmsKeyArn,
    'S3BucketName': obj.s3BucketName,
    'S3Prefix': obj.s3Prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailStartMailboxExportJobResponse
 */
export interface WorkMailStartMailboxExportJobResponse {
  /**
   * @schema WorkMailStartMailboxExportJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'WorkMailStartMailboxExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailStartMailboxExportJobResponse(obj: WorkMailStartMailboxExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailTagResourceRequest
 */
export interface WorkMailTagResourceRequest {
  /**
   * @schema WorkMailTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema WorkMailTagResourceRequest#Tags
   */
  readonly tags?: WorkMailTag[];

}

/**
 * Converts an object of type 'WorkMailTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailTagResourceRequest(obj: WorkMailTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_WorkMailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailTagResourceResponse
 */
export interface WorkMailTagResourceResponse {
}

/**
 * Converts an object of type 'WorkMailTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailTagResourceResponse(obj: WorkMailTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUntagResourceRequest
 */
export interface WorkMailUntagResourceRequest {
  /**
   * @schema WorkMailUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema WorkMailUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'WorkMailUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUntagResourceRequest(obj: WorkMailUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUntagResourceResponse
 */
export interface WorkMailUntagResourceResponse {
}

/**
 * Converts an object of type 'WorkMailUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUntagResourceResponse(obj: WorkMailUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUpdateMailboxQuotaRequest
 */
export interface WorkMailUpdateMailboxQuotaRequest {
  /**
   * @schema WorkMailUpdateMailboxQuotaRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailUpdateMailboxQuotaRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema WorkMailUpdateMailboxQuotaRequest#MailboxQuota
   */
  readonly mailboxQuota?: number;

}

/**
 * Converts an object of type 'WorkMailUpdateMailboxQuotaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUpdateMailboxQuotaRequest(obj: WorkMailUpdateMailboxQuotaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'UserId': obj.userId,
    'MailboxQuota': obj.mailboxQuota,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUpdateMailboxQuotaResponse
 */
export interface WorkMailUpdateMailboxQuotaResponse {
}

/**
 * Converts an object of type 'WorkMailUpdateMailboxQuotaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUpdateMailboxQuotaResponse(obj: WorkMailUpdateMailboxQuotaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUpdateMobileDeviceAccessRuleRequest
 */
export interface WorkMailUpdateMobileDeviceAccessRuleRequest {
  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#MobileDeviceAccessRuleId
   */
  readonly mobileDeviceAccessRuleId?: string;

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#Effect
   */
  readonly effect?: string;

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#DeviceTypes
   */
  readonly deviceTypes?: string[];

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#NotDeviceTypes
   */
  readonly notDeviceTypes?: string[];

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#DeviceModels
   */
  readonly deviceModels?: string[];

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#NotDeviceModels
   */
  readonly notDeviceModels?: string[];

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#DeviceOperatingSystems
   */
  readonly deviceOperatingSystems?: string[];

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#NotDeviceOperatingSystems
   */
  readonly notDeviceOperatingSystems?: string[];

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#DeviceUserAgents
   */
  readonly deviceUserAgents?: string[];

  /**
   * @schema WorkMailUpdateMobileDeviceAccessRuleRequest#NotDeviceUserAgents
   */
  readonly notDeviceUserAgents?: string[];

}

/**
 * Converts an object of type 'WorkMailUpdateMobileDeviceAccessRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUpdateMobileDeviceAccessRuleRequest(obj: WorkMailUpdateMobileDeviceAccessRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'MobileDeviceAccessRuleId': obj.mobileDeviceAccessRuleId,
    'Name': obj.name,
    'Description': obj.description,
    'Effect': obj.effect,
    'DeviceTypes': obj.deviceTypes?.map(y => y),
    'NotDeviceTypes': obj.notDeviceTypes?.map(y => y),
    'DeviceModels': obj.deviceModels?.map(y => y),
    'NotDeviceModels': obj.notDeviceModels?.map(y => y),
    'DeviceOperatingSystems': obj.deviceOperatingSystems?.map(y => y),
    'NotDeviceOperatingSystems': obj.notDeviceOperatingSystems?.map(y => y),
    'DeviceUserAgents': obj.deviceUserAgents?.map(y => y),
    'NotDeviceUserAgents': obj.notDeviceUserAgents?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUpdateMobileDeviceAccessRuleResponse
 */
export interface WorkMailUpdateMobileDeviceAccessRuleResponse {
}

/**
 * Converts an object of type 'WorkMailUpdateMobileDeviceAccessRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUpdateMobileDeviceAccessRuleResponse(obj: WorkMailUpdateMobileDeviceAccessRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUpdatePrimaryEmailAddressRequest
 */
export interface WorkMailUpdatePrimaryEmailAddressRequest {
  /**
   * @schema WorkMailUpdatePrimaryEmailAddressRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailUpdatePrimaryEmailAddressRequest#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailUpdatePrimaryEmailAddressRequest#Email
   */
  readonly email?: string;

}

/**
 * Converts an object of type 'WorkMailUpdatePrimaryEmailAddressRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUpdatePrimaryEmailAddressRequest(obj: WorkMailUpdatePrimaryEmailAddressRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'EntityId': obj.entityId,
    'Email': obj.email,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUpdatePrimaryEmailAddressResponse
 */
export interface WorkMailUpdatePrimaryEmailAddressResponse {
}

/**
 * Converts an object of type 'WorkMailUpdatePrimaryEmailAddressResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUpdatePrimaryEmailAddressResponse(obj: WorkMailUpdatePrimaryEmailAddressResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUpdateResourceRequest
 */
export interface WorkMailUpdateResourceRequest {
  /**
   * @schema WorkMailUpdateResourceRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailUpdateResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkMailUpdateResourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailUpdateResourceRequest#BookingOptions
   */
  readonly bookingOptions?: WorkMailBookingOptions;

}

/**
 * Converts an object of type 'WorkMailUpdateResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUpdateResourceRequest(obj: WorkMailUpdateResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'ResourceId': obj.resourceId,
    'Name': obj.name,
    'BookingOptions': toJson_WorkMailBookingOptions(obj.bookingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailUpdateResourceResponse
 */
export interface WorkMailUpdateResourceResponse {
}

/**
 * Converts an object of type 'WorkMailUpdateResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUpdateResourceResponse(obj: WorkMailUpdateResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDomain
 */
export interface WorkMailDomain {
  /**
   * @schema WorkMailDomain#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema WorkMailDomain#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'WorkMailDomain' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDomain(obj: WorkMailDomain | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'HostedZoneId': obj.hostedZoneId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailBookingOptions
 */
export interface WorkMailBookingOptions {
  /**
   * @schema WorkMailBookingOptions#AutoAcceptRequests
   */
  readonly autoAcceptRequests?: boolean;

  /**
   * @schema WorkMailBookingOptions#AutoDeclineRecurringRequests
   */
  readonly autoDeclineRecurringRequests?: boolean;

  /**
   * @schema WorkMailBookingOptions#AutoDeclineConflictingRequests
   */
  readonly autoDeclineConflictingRequests?: boolean;

}

/**
 * Converts an object of type 'WorkMailBookingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailBookingOptions(obj: WorkMailBookingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoAcceptRequests': obj.autoAcceptRequests,
    'AutoDeclineRecurringRequests': obj.autoDeclineRecurringRequests,
    'AutoDeclineConflictingRequests': obj.autoDeclineConflictingRequests,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailFolderConfiguration
 */
export interface WorkMailFolderConfiguration {
  /**
   * @schema WorkMailFolderConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailFolderConfiguration#Action
   */
  readonly action?: string;

  /**
   * @schema WorkMailFolderConfiguration#Period
   */
  readonly period?: number;

}

/**
 * Converts an object of type 'WorkMailFolderConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailFolderConfiguration(obj: WorkMailFolderConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Action': obj.action,
    'Period': obj.period,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailMobileDeviceAccessMatchedRule
 */
export interface WorkMailMobileDeviceAccessMatchedRule {
  /**
   * @schema WorkMailMobileDeviceAccessMatchedRule#MobileDeviceAccessRuleId
   */
  readonly mobileDeviceAccessRuleId?: string;

  /**
   * @schema WorkMailMobileDeviceAccessMatchedRule#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WorkMailMobileDeviceAccessMatchedRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMobileDeviceAccessMatchedRule(obj: WorkMailMobileDeviceAccessMatchedRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MobileDeviceAccessRuleId': obj.mobileDeviceAccessRuleId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailAccessControlRule
 */
export interface WorkMailAccessControlRule {
  /**
   * @schema WorkMailAccessControlRule#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailAccessControlRule#Effect
   */
  readonly effect?: string;

  /**
   * @schema WorkMailAccessControlRule#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailAccessControlRule#IpRanges
   */
  readonly ipRanges?: string[];

  /**
   * @schema WorkMailAccessControlRule#NotIpRanges
   */
  readonly notIpRanges?: string[];

  /**
   * @schema WorkMailAccessControlRule#Actions
   */
  readonly actions?: string[];

  /**
   * @schema WorkMailAccessControlRule#NotActions
   */
  readonly notActions?: string[];

  /**
   * @schema WorkMailAccessControlRule#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema WorkMailAccessControlRule#NotUserIds
   */
  readonly notUserIds?: string[];

  /**
   * @schema WorkMailAccessControlRule#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema WorkMailAccessControlRule#DateModified
   */
  readonly dateModified?: string;

}

/**
 * Converts an object of type 'WorkMailAccessControlRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailAccessControlRule(obj: WorkMailAccessControlRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Effect': obj.effect,
    'Description': obj.description,
    'IpRanges': obj.ipRanges?.map(y => y),
    'NotIpRanges': obj.notIpRanges?.map(y => y),
    'Actions': obj.actions?.map(y => y),
    'NotActions': obj.notActions?.map(y => y),
    'UserIds': obj.userIds?.map(y => y),
    'NotUserIds': obj.notUserIds?.map(y => y),
    'DateCreated': obj.dateCreated,
    'DateModified': obj.dateModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailMember
 */
export interface WorkMailMember {
  /**
   * @schema WorkMailMember#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailMember#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailMember#Type
   */
  readonly type?: string;

  /**
   * @schema WorkMailMember#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailMember#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailMember#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * Converts an object of type 'WorkMailMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMember(obj: WorkMailMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Type': obj.type,
    'State': obj.state,
    'EnabledDate': obj.enabledDate,
    'DisabledDate': obj.disabledDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailGroup
 */
export interface WorkMailGroup {
  /**
   * @schema WorkMailGroup#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailGroup#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailGroup#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailGroup#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailGroup#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailGroup#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * Converts an object of type 'WorkMailGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailGroup(obj: WorkMailGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Email': obj.email,
    'Name': obj.name,
    'State': obj.state,
    'EnabledDate': obj.enabledDate,
    'DisabledDate': obj.disabledDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailMailboxExportJob
 */
export interface WorkMailMailboxExportJob {
  /**
   * @schema WorkMailMailboxExportJob#JobId
   */
  readonly jobId?: string;

  /**
   * @schema WorkMailMailboxExportJob#EntityId
   */
  readonly entityId?: string;

  /**
   * @schema WorkMailMailboxExportJob#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailMailboxExportJob#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema WorkMailMailboxExportJob#S3Path
   */
  readonly s3Path?: string;

  /**
   * @schema WorkMailMailboxExportJob#EstimatedProgress
   */
  readonly estimatedProgress?: number;

  /**
   * @schema WorkMailMailboxExportJob#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailMailboxExportJob#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema WorkMailMailboxExportJob#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'WorkMailMailboxExportJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMailboxExportJob(obj: WorkMailMailboxExportJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'EntityId': obj.entityId,
    'Description': obj.description,
    'S3BucketName': obj.s3BucketName,
    'S3Path': obj.s3Path,
    'EstimatedProgress': obj.estimatedProgress,
    'State': obj.state,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailPermission
 */
export interface WorkMailPermission {
  /**
   * @schema WorkMailPermission#GranteeId
   */
  readonly granteeId?: string;

  /**
   * @schema WorkMailPermission#GranteeType
   */
  readonly granteeType?: string;

  /**
   * @schema WorkMailPermission#PermissionValues
   */
  readonly permissionValues?: string[];

}

/**
 * Converts an object of type 'WorkMailPermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailPermission(obj: WorkMailPermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GranteeId': obj.granteeId,
    'GranteeType': obj.granteeType,
    'PermissionValues': obj.permissionValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailMobileDeviceAccessRule
 */
export interface WorkMailMobileDeviceAccessRule {
  /**
   * @schema WorkMailMobileDeviceAccessRule#MobileDeviceAccessRuleId
   */
  readonly mobileDeviceAccessRuleId?: string;

  /**
   * @schema WorkMailMobileDeviceAccessRule#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailMobileDeviceAccessRule#Description
   */
  readonly description?: string;

  /**
   * @schema WorkMailMobileDeviceAccessRule#Effect
   */
  readonly effect?: string;

  /**
   * @schema WorkMailMobileDeviceAccessRule#DeviceTypes
   */
  readonly deviceTypes?: string[];

  /**
   * @schema WorkMailMobileDeviceAccessRule#NotDeviceTypes
   */
  readonly notDeviceTypes?: string[];

  /**
   * @schema WorkMailMobileDeviceAccessRule#DeviceModels
   */
  readonly deviceModels?: string[];

  /**
   * @schema WorkMailMobileDeviceAccessRule#NotDeviceModels
   */
  readonly notDeviceModels?: string[];

  /**
   * @schema WorkMailMobileDeviceAccessRule#DeviceOperatingSystems
   */
  readonly deviceOperatingSystems?: string[];

  /**
   * @schema WorkMailMobileDeviceAccessRule#NotDeviceOperatingSystems
   */
  readonly notDeviceOperatingSystems?: string[];

  /**
   * @schema WorkMailMobileDeviceAccessRule#DeviceUserAgents
   */
  readonly deviceUserAgents?: string[];

  /**
   * @schema WorkMailMobileDeviceAccessRule#NotDeviceUserAgents
   */
  readonly notDeviceUserAgents?: string[];

  /**
   * @schema WorkMailMobileDeviceAccessRule#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema WorkMailMobileDeviceAccessRule#DateModified
   */
  readonly dateModified?: string;

}

/**
 * Converts an object of type 'WorkMailMobileDeviceAccessRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailMobileDeviceAccessRule(obj: WorkMailMobileDeviceAccessRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MobileDeviceAccessRuleId': obj.mobileDeviceAccessRuleId,
    'Name': obj.name,
    'Description': obj.description,
    'Effect': obj.effect,
    'DeviceTypes': obj.deviceTypes?.map(y => y),
    'NotDeviceTypes': obj.notDeviceTypes?.map(y => y),
    'DeviceModels': obj.deviceModels?.map(y => y),
    'NotDeviceModels': obj.notDeviceModels?.map(y => y),
    'DeviceOperatingSystems': obj.deviceOperatingSystems?.map(y => y),
    'NotDeviceOperatingSystems': obj.notDeviceOperatingSystems?.map(y => y),
    'DeviceUserAgents': obj.deviceUserAgents?.map(y => y),
    'NotDeviceUserAgents': obj.notDeviceUserAgents?.map(y => y),
    'DateCreated': obj.dateCreated,
    'DateModified': obj.dateModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailOrganizationSummary
 */
export interface WorkMailOrganizationSummary {
  /**
   * @schema WorkMailOrganizationSummary#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema WorkMailOrganizationSummary#Alias
   */
  readonly alias?: string;

  /**
   * @schema WorkMailOrganizationSummary#DefaultMailDomain
   */
  readonly defaultMailDomain?: string;

  /**
   * @schema WorkMailOrganizationSummary#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkMailOrganizationSummary#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'WorkMailOrganizationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailOrganizationSummary(obj: WorkMailOrganizationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationId': obj.organizationId,
    'Alias': obj.alias,
    'DefaultMailDomain': obj.defaultMailDomain,
    'ErrorMessage': obj.errorMessage,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailDelegate
 */
export interface WorkMailDelegate {
  /**
   * @schema WorkMailDelegate#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailDelegate#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'WorkMailDelegate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailDelegate(obj: WorkMailDelegate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailResource
 */
export interface WorkMailResource {
  /**
   * @schema WorkMailResource#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailResource#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailResource#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailResource#Type
   */
  readonly type?: string;

  /**
   * @schema WorkMailResource#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailResource#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailResource#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * Converts an object of type 'WorkMailResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailResource(obj: WorkMailResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Email': obj.email,
    'Name': obj.name,
    'Type': obj.type,
    'State': obj.state,
    'EnabledDate': obj.enabledDate,
    'DisabledDate': obj.disabledDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkMailTag
 */
export interface WorkMailTag {
  /**
   * @schema WorkMailTag#Key
   */
  readonly key?: string;

  /**
   * @schema WorkMailTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WorkMailTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailTag(obj: WorkMailTag | undefined): Record<string, any> | undefined {
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
 * @schema WorkMailUser
 */
export interface WorkMailUser {
  /**
   * @schema WorkMailUser#Id
   */
  readonly id?: string;

  /**
   * @schema WorkMailUser#Email
   */
  readonly email?: string;

  /**
   * @schema WorkMailUser#Name
   */
  readonly name?: string;

  /**
   * @schema WorkMailUser#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkMailUser#State
   */
  readonly state?: string;

  /**
   * @schema WorkMailUser#UserRole
   */
  readonly userRole?: string;

  /**
   * @schema WorkMailUser#EnabledDate
   */
  readonly enabledDate?: string;

  /**
   * @schema WorkMailUser#DisabledDate
   */
  readonly disabledDate?: string;

}

/**
 * Converts an object of type 'WorkMailUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkMailUser(obj: WorkMailUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Email': obj.email,
    'Name': obj.name,
    'DisplayName': obj.displayName,
    'State': obj.state,
    'UserRole': obj.userRole,
    'EnabledDate': obj.enabledDate,
    'DisabledDate': obj.disabledDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
