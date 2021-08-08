/**
 * @schema SsoAdminAttachManagedPolicyToPermissionSetRequest
 */
export interface SsoAdminAttachManagedPolicyToPermissionSetRequest {
  /**
   * @schema SsoAdminAttachManagedPolicyToPermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminAttachManagedPolicyToPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminAttachManagedPolicyToPermissionSetRequest#ManagedPolicyArn
   */
  readonly managedPolicyArn?: string;

}

/**
 * Converts an object of type 'SsoAdminAttachManagedPolicyToPermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminAttachManagedPolicyToPermissionSetRequest(obj: SsoAdminAttachManagedPolicyToPermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
    'ManagedPolicyArn': obj.managedPolicyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminAttachManagedPolicyToPermissionSetResponse
 */
export interface SsoAdminAttachManagedPolicyToPermissionSetResponse {
}

/**
 * Converts an object of type 'SsoAdminAttachManagedPolicyToPermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminAttachManagedPolicyToPermissionSetResponse(obj: SsoAdminAttachManagedPolicyToPermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminCreateAccountAssignmentRequest
 */
export interface SsoAdminCreateAccountAssignmentRequest {
  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema SsoAdminCreateAccountAssignmentRequest#PrincipalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'SsoAdminCreateAccountAssignmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminCreateAccountAssignmentRequest(obj: SsoAdminCreateAccountAssignmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'TargetId': obj.targetId,
    'TargetType': obj.targetType,
    'PermissionSetArn': obj.permissionSetArn,
    'PrincipalType': obj.principalType,
    'PrincipalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminCreateAccountAssignmentResponse
 */
export interface SsoAdminCreateAccountAssignmentResponse {
  /**
   * @schema SsoAdminCreateAccountAssignmentResponse#AccountAssignmentCreationStatus
   */
  readonly accountAssignmentCreationStatus?: SsoAdminAccountAssignmentOperationStatus;

}

/**
 * Converts an object of type 'SsoAdminCreateAccountAssignmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminCreateAccountAssignmentResponse(obj: SsoAdminCreateAccountAssignmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAssignmentCreationStatus': toJson_SsoAdminAccountAssignmentOperationStatus(obj.accountAssignmentCreationStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest
 */
export interface SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest#InstanceAccessControlAttributeConfiguration
   */
  readonly instanceAccessControlAttributeConfiguration?: SsoAdminInstanceAccessControlAttributeConfiguration;

}

/**
 * Converts an object of type 'SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest(obj: SsoAdminCreateInstanceAccessControlAttributeConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'InstanceAccessControlAttributeConfiguration': toJson_SsoAdminInstanceAccessControlAttributeConfiguration(obj.instanceAccessControlAttributeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse
 */
export interface SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse {
}

/**
 * Converts an object of type 'SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse(obj: SsoAdminCreateInstanceAccessControlAttributeConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminCreatePermissionSetRequest
 */
export interface SsoAdminCreatePermissionSetRequest {
  /**
   * @schema SsoAdminCreatePermissionSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#SessionDuration
   */
  readonly sessionDuration?: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#RelayState
   */
  readonly relayState?: string;

  /**
   * @schema SsoAdminCreatePermissionSetRequest#Tags
   */
  readonly tags?: SsoAdminTag[];

}

/**
 * Converts an object of type 'SsoAdminCreatePermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminCreatePermissionSetRequest(obj: SsoAdminCreatePermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'InstanceArn': obj.instanceArn,
    'SessionDuration': obj.sessionDuration,
    'RelayState': obj.relayState,
    'Tags': obj.tags?.map(y => toJson_SsoAdminTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminCreatePermissionSetResponse
 */
export interface SsoAdminCreatePermissionSetResponse {
  /**
   * @schema SsoAdminCreatePermissionSetResponse#PermissionSet
   */
  readonly permissionSet?: SsoAdminPermissionSet;

}

/**
 * Converts an object of type 'SsoAdminCreatePermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminCreatePermissionSetResponse(obj: SsoAdminCreatePermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PermissionSet': toJson_SsoAdminPermissionSet(obj.permissionSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDeleteAccountAssignmentRequest
 */
export interface SsoAdminDeleteAccountAssignmentRequest {
  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema SsoAdminDeleteAccountAssignmentRequest#PrincipalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'SsoAdminDeleteAccountAssignmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDeleteAccountAssignmentRequest(obj: SsoAdminDeleteAccountAssignmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'TargetId': obj.targetId,
    'TargetType': obj.targetType,
    'PermissionSetArn': obj.permissionSetArn,
    'PrincipalType': obj.principalType,
    'PrincipalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDeleteAccountAssignmentResponse
 */
export interface SsoAdminDeleteAccountAssignmentResponse {
  /**
   * @schema SsoAdminDeleteAccountAssignmentResponse#AccountAssignmentDeletionStatus
   */
  readonly accountAssignmentDeletionStatus?: SsoAdminAccountAssignmentOperationStatus;

}

/**
 * Converts an object of type 'SsoAdminDeleteAccountAssignmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDeleteAccountAssignmentResponse(obj: SsoAdminDeleteAccountAssignmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAssignmentDeletionStatus': toJson_SsoAdminAccountAssignmentOperationStatus(obj.accountAssignmentDeletionStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDeleteInlinePolicyFromPermissionSetRequest
 */
export interface SsoAdminDeleteInlinePolicyFromPermissionSetRequest {
  /**
   * @schema SsoAdminDeleteInlinePolicyFromPermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminDeleteInlinePolicyFromPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

}

/**
 * Converts an object of type 'SsoAdminDeleteInlinePolicyFromPermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDeleteInlinePolicyFromPermissionSetRequest(obj: SsoAdminDeleteInlinePolicyFromPermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDeleteInlinePolicyFromPermissionSetResponse
 */
export interface SsoAdminDeleteInlinePolicyFromPermissionSetResponse {
}

/**
 * Converts an object of type 'SsoAdminDeleteInlinePolicyFromPermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDeleteInlinePolicyFromPermissionSetResponse(obj: SsoAdminDeleteInlinePolicyFromPermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest
 */
export interface SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn?: string;

}

/**
 * Converts an object of type 'SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest(obj: SsoAdminDeleteInstanceAccessControlAttributeConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse
 */
export interface SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse {
}

/**
 * Converts an object of type 'SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse(obj: SsoAdminDeleteInstanceAccessControlAttributeConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDeletePermissionSetRequest
 */
export interface SsoAdminDeletePermissionSetRequest {
  /**
   * @schema SsoAdminDeletePermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminDeletePermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

}

/**
 * Converts an object of type 'SsoAdminDeletePermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDeletePermissionSetRequest(obj: SsoAdminDeletePermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDeletePermissionSetResponse
 */
export interface SsoAdminDeletePermissionSetResponse {
}

/**
 * Converts an object of type 'SsoAdminDeletePermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDeletePermissionSetResponse(obj: SsoAdminDeletePermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribeAccountAssignmentCreationStatusRequest
 */
export interface SsoAdminDescribeAccountAssignmentCreationStatusRequest {
  /**
   * @schema SsoAdminDescribeAccountAssignmentCreationStatusRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminDescribeAccountAssignmentCreationStatusRequest#AccountAssignmentCreationRequestId
   */
  readonly accountAssignmentCreationRequestId?: string;

}

/**
 * Converts an object of type 'SsoAdminDescribeAccountAssignmentCreationStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribeAccountAssignmentCreationStatusRequest(obj: SsoAdminDescribeAccountAssignmentCreationStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'AccountAssignmentCreationRequestId': obj.accountAssignmentCreationRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribeAccountAssignmentCreationStatusResponse
 */
export interface SsoAdminDescribeAccountAssignmentCreationStatusResponse {
  /**
   * @schema SsoAdminDescribeAccountAssignmentCreationStatusResponse#AccountAssignmentCreationStatus
   */
  readonly accountAssignmentCreationStatus?: SsoAdminAccountAssignmentOperationStatus;

}

/**
 * Converts an object of type 'SsoAdminDescribeAccountAssignmentCreationStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribeAccountAssignmentCreationStatusResponse(obj: SsoAdminDescribeAccountAssignmentCreationStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAssignmentCreationStatus': toJson_SsoAdminAccountAssignmentOperationStatus(obj.accountAssignmentCreationStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribeAccountAssignmentDeletionStatusRequest
 */
export interface SsoAdminDescribeAccountAssignmentDeletionStatusRequest {
  /**
   * @schema SsoAdminDescribeAccountAssignmentDeletionStatusRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminDescribeAccountAssignmentDeletionStatusRequest#AccountAssignmentDeletionRequestId
   */
  readonly accountAssignmentDeletionRequestId?: string;

}

/**
 * Converts an object of type 'SsoAdminDescribeAccountAssignmentDeletionStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribeAccountAssignmentDeletionStatusRequest(obj: SsoAdminDescribeAccountAssignmentDeletionStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'AccountAssignmentDeletionRequestId': obj.accountAssignmentDeletionRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribeAccountAssignmentDeletionStatusResponse
 */
export interface SsoAdminDescribeAccountAssignmentDeletionStatusResponse {
  /**
   * @schema SsoAdminDescribeAccountAssignmentDeletionStatusResponse#AccountAssignmentDeletionStatus
   */
  readonly accountAssignmentDeletionStatus?: SsoAdminAccountAssignmentOperationStatus;

}

/**
 * Converts an object of type 'SsoAdminDescribeAccountAssignmentDeletionStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribeAccountAssignmentDeletionStatusResponse(obj: SsoAdminDescribeAccountAssignmentDeletionStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAssignmentDeletionStatus': toJson_SsoAdminAccountAssignmentOperationStatus(obj.accountAssignmentDeletionStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest
 */
export interface SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn?: string;

}

/**
 * Converts an object of type 'SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest(obj: SsoAdminDescribeInstanceAccessControlAttributeConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse
 */
export interface SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse {
  /**
   * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse#InstanceAccessControlAttributeConfiguration
   */
  readonly instanceAccessControlAttributeConfiguration?: SsoAdminInstanceAccessControlAttributeConfiguration;

}

/**
 * Converts an object of type 'SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse(obj: SsoAdminDescribeInstanceAccessControlAttributeConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'InstanceAccessControlAttributeConfiguration': toJson_SsoAdminInstanceAccessControlAttributeConfiguration(obj.instanceAccessControlAttributeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribePermissionSetRequest
 */
export interface SsoAdminDescribePermissionSetRequest {
  /**
   * @schema SsoAdminDescribePermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminDescribePermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

}

/**
 * Converts an object of type 'SsoAdminDescribePermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribePermissionSetRequest(obj: SsoAdminDescribePermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribePermissionSetResponse
 */
export interface SsoAdminDescribePermissionSetResponse {
  /**
   * @schema SsoAdminDescribePermissionSetResponse#PermissionSet
   */
  readonly permissionSet?: SsoAdminPermissionSet;

}

/**
 * Converts an object of type 'SsoAdminDescribePermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribePermissionSetResponse(obj: SsoAdminDescribePermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PermissionSet': toJson_SsoAdminPermissionSet(obj.permissionSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribePermissionSetProvisioningStatusRequest
 */
export interface SsoAdminDescribePermissionSetProvisioningStatusRequest {
  /**
   * @schema SsoAdminDescribePermissionSetProvisioningStatusRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminDescribePermissionSetProvisioningStatusRequest#ProvisionPermissionSetRequestId
   */
  readonly provisionPermissionSetRequestId?: string;

}

/**
 * Converts an object of type 'SsoAdminDescribePermissionSetProvisioningStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribePermissionSetProvisioningStatusRequest(obj: SsoAdminDescribePermissionSetProvisioningStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'ProvisionPermissionSetRequestId': obj.provisionPermissionSetRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDescribePermissionSetProvisioningStatusResponse
 */
export interface SsoAdminDescribePermissionSetProvisioningStatusResponse {
  /**
   * @schema SsoAdminDescribePermissionSetProvisioningStatusResponse#PermissionSetProvisioningStatus
   */
  readonly permissionSetProvisioningStatus?: SsoAdminPermissionSetProvisioningStatus;

}

/**
 * Converts an object of type 'SsoAdminDescribePermissionSetProvisioningStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDescribePermissionSetProvisioningStatusResponse(obj: SsoAdminDescribePermissionSetProvisioningStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PermissionSetProvisioningStatus': toJson_SsoAdminPermissionSetProvisioningStatus(obj.permissionSetProvisioningStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDetachManagedPolicyFromPermissionSetRequest
 */
export interface SsoAdminDetachManagedPolicyFromPermissionSetRequest {
  /**
   * @schema SsoAdminDetachManagedPolicyFromPermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminDetachManagedPolicyFromPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminDetachManagedPolicyFromPermissionSetRequest#ManagedPolicyArn
   */
  readonly managedPolicyArn?: string;

}

/**
 * Converts an object of type 'SsoAdminDetachManagedPolicyFromPermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDetachManagedPolicyFromPermissionSetRequest(obj: SsoAdminDetachManagedPolicyFromPermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
    'ManagedPolicyArn': obj.managedPolicyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminDetachManagedPolicyFromPermissionSetResponse
 */
export interface SsoAdminDetachManagedPolicyFromPermissionSetResponse {
}

/**
 * Converts an object of type 'SsoAdminDetachManagedPolicyFromPermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminDetachManagedPolicyFromPermissionSetResponse(obj: SsoAdminDetachManagedPolicyFromPermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminGetInlinePolicyForPermissionSetRequest
 */
export interface SsoAdminGetInlinePolicyForPermissionSetRequest {
  /**
   * @schema SsoAdminGetInlinePolicyForPermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminGetInlinePolicyForPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

}

/**
 * Converts an object of type 'SsoAdminGetInlinePolicyForPermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminGetInlinePolicyForPermissionSetRequest(obj: SsoAdminGetInlinePolicyForPermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminGetInlinePolicyForPermissionSetResponse
 */
export interface SsoAdminGetInlinePolicyForPermissionSetResponse {
  /**
   * @schema SsoAdminGetInlinePolicyForPermissionSetResponse#InlinePolicy
   */
  readonly inlinePolicy?: string;

}

/**
 * Converts an object of type 'SsoAdminGetInlinePolicyForPermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminGetInlinePolicyForPermissionSetResponse(obj: SsoAdminGetInlinePolicyForPermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InlinePolicy': obj.inlinePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListAccountAssignmentCreationStatusRequest
 */
export interface SsoAdminListAccountAssignmentCreationStatusRequest {
  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusRequest#Filter
   */
  readonly filter?: SsoAdminOperationStatusFilter;

}

/**
 * Converts an object of type 'SsoAdminListAccountAssignmentCreationStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListAccountAssignmentCreationStatusRequest(obj: SsoAdminListAccountAssignmentCreationStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filter': toJson_SsoAdminOperationStatusFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListAccountAssignmentCreationStatusResponse
 */
export interface SsoAdminListAccountAssignmentCreationStatusResponse {
  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusResponse#AccountAssignmentsCreationStatus
   */
  readonly accountAssignmentsCreationStatus?: SsoAdminAccountAssignmentOperationStatusMetadata[];

  /**
   * @schema SsoAdminListAccountAssignmentCreationStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListAccountAssignmentCreationStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListAccountAssignmentCreationStatusResponse(obj: SsoAdminListAccountAssignmentCreationStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAssignmentsCreationStatus': obj.accountAssignmentsCreationStatus?.map(y => toJson_SsoAdminAccountAssignmentOperationStatusMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListAccountAssignmentDeletionStatusRequest
 */
export interface SsoAdminListAccountAssignmentDeletionStatusRequest {
  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusRequest#Filter
   */
  readonly filter?: SsoAdminOperationStatusFilter;

}

/**
 * Converts an object of type 'SsoAdminListAccountAssignmentDeletionStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListAccountAssignmentDeletionStatusRequest(obj: SsoAdminListAccountAssignmentDeletionStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filter': toJson_SsoAdminOperationStatusFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListAccountAssignmentDeletionStatusResponse
 */
export interface SsoAdminListAccountAssignmentDeletionStatusResponse {
  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusResponse#AccountAssignmentsDeletionStatus
   */
  readonly accountAssignmentsDeletionStatus?: SsoAdminAccountAssignmentOperationStatusMetadata[];

  /**
   * @schema SsoAdminListAccountAssignmentDeletionStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListAccountAssignmentDeletionStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListAccountAssignmentDeletionStatusResponse(obj: SsoAdminListAccountAssignmentDeletionStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAssignmentsDeletionStatus': obj.accountAssignmentsDeletionStatus?.map(y => toJson_SsoAdminAccountAssignmentOperationStatusMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListAccountAssignmentsRequest
 */
export interface SsoAdminListAccountAssignmentsRequest {
  /**
   * @schema SsoAdminListAccountAssignmentsRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminListAccountAssignmentsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SsoAdminListAccountAssignmentsRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminListAccountAssignmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListAccountAssignmentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListAccountAssignmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListAccountAssignmentsRequest(obj: SsoAdminListAccountAssignmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'AccountId': obj.accountId,
    'PermissionSetArn': obj.permissionSetArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListAccountAssignmentsResponse
 */
export interface SsoAdminListAccountAssignmentsResponse {
  /**
   * @schema SsoAdminListAccountAssignmentsResponse#AccountAssignments
   */
  readonly accountAssignments?: SsoAdminAccountAssignment[];

  /**
   * @schema SsoAdminListAccountAssignmentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListAccountAssignmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListAccountAssignmentsResponse(obj: SsoAdminListAccountAssignmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountAssignments': obj.accountAssignments?.map(y => toJson_SsoAdminAccountAssignment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest
 */
export interface SsoAdminListAccountsForProvisionedPermissionSetRequest {
  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#ProvisioningStatus
   */
  readonly provisioningStatus?: string;

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListAccountsForProvisionedPermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListAccountsForProvisionedPermissionSetRequest(obj: SsoAdminListAccountsForProvisionedPermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
    'ProvisioningStatus': obj.provisioningStatus,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListAccountsForProvisionedPermissionSetResponse
 */
export interface SsoAdminListAccountsForProvisionedPermissionSetResponse {
  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetResponse#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema SsoAdminListAccountsForProvisionedPermissionSetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListAccountsForProvisionedPermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListAccountsForProvisionedPermissionSetResponse(obj: SsoAdminListAccountsForProvisionedPermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListInstancesRequest
 */
export interface SsoAdminListInstancesRequest {
  /**
   * @schema SsoAdminListInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListInstancesRequest(obj: SsoAdminListInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListInstancesResponse
 */
export interface SsoAdminListInstancesResponse {
  /**
   * @schema SsoAdminListInstancesResponse#Instances
   */
  readonly instances?: SsoAdminInstanceMetadata[];

  /**
   * @schema SsoAdminListInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListInstancesResponse(obj: SsoAdminListInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Instances': obj.instances?.map(y => toJson_SsoAdminInstanceMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListManagedPoliciesInPermissionSetRequest
 */
export interface SsoAdminListManagedPoliciesInPermissionSetRequest {
  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListManagedPoliciesInPermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListManagedPoliciesInPermissionSetRequest(obj: SsoAdminListManagedPoliciesInPermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListManagedPoliciesInPermissionSetResponse
 */
export interface SsoAdminListManagedPoliciesInPermissionSetResponse {
  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetResponse#AttachedManagedPolicies
   */
  readonly attachedManagedPolicies?: SsoAdminAttachedManagedPolicy[];

  /**
   * @schema SsoAdminListManagedPoliciesInPermissionSetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListManagedPoliciesInPermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListManagedPoliciesInPermissionSetResponse(obj: SsoAdminListManagedPoliciesInPermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedManagedPolicies': obj.attachedManagedPolicies?.map(y => toJson_SsoAdminAttachedManagedPolicy(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListPermissionSetProvisioningStatusRequest
 */
export interface SsoAdminListPermissionSetProvisioningStatusRequest {
  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusRequest#Filter
   */
  readonly filter?: SsoAdminOperationStatusFilter;

}

/**
 * Converts an object of type 'SsoAdminListPermissionSetProvisioningStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListPermissionSetProvisioningStatusRequest(obj: SsoAdminListPermissionSetProvisioningStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filter': toJson_SsoAdminOperationStatusFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListPermissionSetProvisioningStatusResponse
 */
export interface SsoAdminListPermissionSetProvisioningStatusResponse {
  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusResponse#PermissionSetsProvisioningStatus
   */
  readonly permissionSetsProvisioningStatus?: SsoAdminPermissionSetProvisioningStatusMetadata[];

  /**
   * @schema SsoAdminListPermissionSetProvisioningStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListPermissionSetProvisioningStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListPermissionSetProvisioningStatusResponse(obj: SsoAdminListPermissionSetProvisioningStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PermissionSetsProvisioningStatus': obj.permissionSetsProvisioningStatus?.map(y => toJson_SsoAdminPermissionSetProvisioningStatusMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListPermissionSetsRequest
 */
export interface SsoAdminListPermissionSetsRequest {
  /**
   * @schema SsoAdminListPermissionSetsRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminListPermissionSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListPermissionSetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsoAdminListPermissionSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListPermissionSetsRequest(obj: SsoAdminListPermissionSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListPermissionSetsResponse
 */
export interface SsoAdminListPermissionSetsResponse {
  /**
   * @schema SsoAdminListPermissionSetsResponse#PermissionSets
   */
  readonly permissionSets?: string[];

  /**
   * @schema SsoAdminListPermissionSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListPermissionSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListPermissionSetsResponse(obj: SsoAdminListPermissionSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PermissionSets': obj.permissionSets?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest
 */
export interface SsoAdminListPermissionSetsProvisionedToAccountRequest {
  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#ProvisioningStatus
   */
  readonly provisioningStatus?: string;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListPermissionSetsProvisionedToAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListPermissionSetsProvisionedToAccountRequest(obj: SsoAdminListPermissionSetsProvisionedToAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'AccountId': obj.accountId,
    'ProvisioningStatus': obj.provisioningStatus,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListPermissionSetsProvisionedToAccountResponse
 */
export interface SsoAdminListPermissionSetsProvisionedToAccountResponse {
  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoAdminListPermissionSetsProvisionedToAccountResponse#PermissionSets
   */
  readonly permissionSets?: string[];

}

/**
 * Converts an object of type 'SsoAdminListPermissionSetsProvisionedToAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListPermissionSetsProvisionedToAccountResponse(obj: SsoAdminListPermissionSetsProvisionedToAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PermissionSets': obj.permissionSets?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListTagsForResourceRequest
 */
export interface SsoAdminListTagsForResourceRequest {
  /**
   * @schema SsoAdminListTagsForResourceRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SsoAdminListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListTagsForResourceRequest(obj: SsoAdminListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'ResourceArn': obj.resourceArn,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminListTagsForResourceResponse
 */
export interface SsoAdminListTagsForResourceResponse {
  /**
   * @schema SsoAdminListTagsForResourceResponse#Tags
   */
  readonly tags?: SsoAdminTag[];

  /**
   * @schema SsoAdminListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsoAdminListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminListTagsForResourceResponse(obj: SsoAdminListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_SsoAdminTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminProvisionPermissionSetRequest
 */
export interface SsoAdminProvisionPermissionSetRequest {
  /**
   * @schema SsoAdminProvisionPermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminProvisionPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminProvisionPermissionSetRequest#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema SsoAdminProvisionPermissionSetRequest#TargetType
   */
  readonly targetType?: string;

}

/**
 * Converts an object of type 'SsoAdminProvisionPermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminProvisionPermissionSetRequest(obj: SsoAdminProvisionPermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
    'TargetId': obj.targetId,
    'TargetType': obj.targetType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminProvisionPermissionSetResponse
 */
export interface SsoAdminProvisionPermissionSetResponse {
  /**
   * @schema SsoAdminProvisionPermissionSetResponse#PermissionSetProvisioningStatus
   */
  readonly permissionSetProvisioningStatus?: SsoAdminPermissionSetProvisioningStatus;

}

/**
 * Converts an object of type 'SsoAdminProvisionPermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminProvisionPermissionSetResponse(obj: SsoAdminProvisionPermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PermissionSetProvisioningStatus': toJson_SsoAdminPermissionSetProvisioningStatus(obj.permissionSetProvisioningStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminPutInlinePolicyToPermissionSetRequest
 */
export interface SsoAdminPutInlinePolicyToPermissionSetRequest {
  /**
   * @schema SsoAdminPutInlinePolicyToPermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminPutInlinePolicyToPermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminPutInlinePolicyToPermissionSetRequest#InlinePolicy
   */
  readonly inlinePolicy?: string;

}

/**
 * Converts an object of type 'SsoAdminPutInlinePolicyToPermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminPutInlinePolicyToPermissionSetRequest(obj: SsoAdminPutInlinePolicyToPermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
    'InlinePolicy': obj.inlinePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminPutInlinePolicyToPermissionSetResponse
 */
export interface SsoAdminPutInlinePolicyToPermissionSetResponse {
}

/**
 * Converts an object of type 'SsoAdminPutInlinePolicyToPermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminPutInlinePolicyToPermissionSetResponse(obj: SsoAdminPutInlinePolicyToPermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminTagResourceRequest
 */
export interface SsoAdminTagResourceRequest {
  /**
   * @schema SsoAdminTagResourceRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SsoAdminTagResourceRequest#Tags
   */
  readonly tags?: SsoAdminTag[];

}

/**
 * Converts an object of type 'SsoAdminTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminTagResourceRequest(obj: SsoAdminTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_SsoAdminTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminTagResourceResponse
 */
export interface SsoAdminTagResourceResponse {
}

/**
 * Converts an object of type 'SsoAdminTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminTagResourceResponse(obj: SsoAdminTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminUntagResourceRequest
 */
export interface SsoAdminUntagResourceRequest {
  /**
   * @schema SsoAdminUntagResourceRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SsoAdminUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'SsoAdminUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminUntagResourceRequest(obj: SsoAdminUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminUntagResourceResponse
 */
export interface SsoAdminUntagResourceResponse {
}

/**
 * Converts an object of type 'SsoAdminUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminUntagResourceResponse(obj: SsoAdminUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest
 */
export interface SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @schema SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest#InstanceAccessControlAttributeConfiguration
   */
  readonly instanceAccessControlAttributeConfiguration?: SsoAdminInstanceAccessControlAttributeConfiguration;

}

/**
 * Converts an object of type 'SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest(obj: SsoAdminUpdateInstanceAccessControlAttributeConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'InstanceAccessControlAttributeConfiguration': toJson_SsoAdminInstanceAccessControlAttributeConfiguration(obj.instanceAccessControlAttributeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse
 */
export interface SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse {
}

/**
 * Converts an object of type 'SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse(obj: SsoAdminUpdateInstanceAccessControlAttributeConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminUpdatePermissionSetRequest
 */
export interface SsoAdminUpdatePermissionSetRequest {
  /**
   * @schema SsoAdminUpdatePermissionSetRequest#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminUpdatePermissionSetRequest#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminUpdatePermissionSetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsoAdminUpdatePermissionSetRequest#SessionDuration
   */
  readonly sessionDuration?: string;

  /**
   * @schema SsoAdminUpdatePermissionSetRequest#RelayState
   */
  readonly relayState?: string;

}

/**
 * Converts an object of type 'SsoAdminUpdatePermissionSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminUpdatePermissionSetRequest(obj: SsoAdminUpdatePermissionSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'PermissionSetArn': obj.permissionSetArn,
    'Description': obj.description,
    'SessionDuration': obj.sessionDuration,
    'RelayState': obj.relayState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminUpdatePermissionSetResponse
 */
export interface SsoAdminUpdatePermissionSetResponse {
}

/**
 * Converts an object of type 'SsoAdminUpdatePermissionSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminUpdatePermissionSetResponse(obj: SsoAdminUpdatePermissionSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminAccountAssignmentOperationStatus
 */
export interface SsoAdminAccountAssignmentOperationStatus {
  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatus#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * Converts an object of type 'SsoAdminAccountAssignmentOperationStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminAccountAssignmentOperationStatus(obj: SsoAdminAccountAssignmentOperationStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'RequestId': obj.requestId,
    'FailureReason': obj.failureReason,
    'TargetId': obj.targetId,
    'TargetType': obj.targetType,
    'PermissionSetArn': obj.permissionSetArn,
    'PrincipalType': obj.principalType,
    'PrincipalId': obj.principalId,
    'CreatedDate': obj.createdDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminInstanceAccessControlAttributeConfiguration
 */
export interface SsoAdminInstanceAccessControlAttributeConfiguration {
  /**
   * @schema SsoAdminInstanceAccessControlAttributeConfiguration#AccessControlAttributes
   */
  readonly accessControlAttributes?: SsoAdminAccessControlAttribute[];

}

/**
 * Converts an object of type 'SsoAdminInstanceAccessControlAttributeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminInstanceAccessControlAttributeConfiguration(obj: SsoAdminInstanceAccessControlAttributeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessControlAttributes': obj.accessControlAttributes?.map(y => toJson_SsoAdminAccessControlAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminTag
 */
export interface SsoAdminTag {
  /**
   * @schema SsoAdminTag#Key
   */
  readonly key?: string;

  /**
   * @schema SsoAdminTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SsoAdminTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminTag(obj: SsoAdminTag | undefined): Record<string, any> | undefined {
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
 * @schema SsoAdminPermissionSet
 */
export interface SsoAdminPermissionSet {
  /**
   * @schema SsoAdminPermissionSet#Name
   */
  readonly name?: string;

  /**
   * @schema SsoAdminPermissionSet#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminPermissionSet#Description
   */
  readonly description?: string;

  /**
   * @schema SsoAdminPermissionSet#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsoAdminPermissionSet#SessionDuration
   */
  readonly sessionDuration?: string;

  /**
   * @schema SsoAdminPermissionSet#RelayState
   */
  readonly relayState?: string;

}

/**
 * Converts an object of type 'SsoAdminPermissionSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminPermissionSet(obj: SsoAdminPermissionSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'PermissionSetArn': obj.permissionSetArn,
    'Description': obj.description,
    'CreatedDate': obj.createdDate,
    'SessionDuration': obj.sessionDuration,
    'RelayState': obj.relayState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminPermissionSetProvisioningStatus
 */
export interface SsoAdminPermissionSetProvisioningStatus {
  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatus#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * Converts an object of type 'SsoAdminPermissionSetProvisioningStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminPermissionSetProvisioningStatus(obj: SsoAdminPermissionSetProvisioningStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'RequestId': obj.requestId,
    'AccountId': obj.accountId,
    'PermissionSetArn': obj.permissionSetArn,
    'FailureReason': obj.failureReason,
    'CreatedDate': obj.createdDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminOperationStatusFilter
 */
export interface SsoAdminOperationStatusFilter {
  /**
   * @schema SsoAdminOperationStatusFilter#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SsoAdminOperationStatusFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminOperationStatusFilter(obj: SsoAdminOperationStatusFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminAccountAssignmentOperationStatusMetadata
 */
export interface SsoAdminAccountAssignmentOperationStatusMetadata {
  /**
   * @schema SsoAdminAccountAssignmentOperationStatusMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatusMetadata#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SsoAdminAccountAssignmentOperationStatusMetadata#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * Converts an object of type 'SsoAdminAccountAssignmentOperationStatusMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminAccountAssignmentOperationStatusMetadata(obj: SsoAdminAccountAssignmentOperationStatusMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'RequestId': obj.requestId,
    'CreatedDate': obj.createdDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminAccountAssignment
 */
export interface SsoAdminAccountAssignment {
  /**
   * @schema SsoAdminAccountAssignment#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SsoAdminAccountAssignment#PermissionSetArn
   */
  readonly permissionSetArn?: string;

  /**
   * @schema SsoAdminAccountAssignment#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema SsoAdminAccountAssignment#PrincipalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'SsoAdminAccountAssignment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminAccountAssignment(obj: SsoAdminAccountAssignment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'PermissionSetArn': obj.permissionSetArn,
    'PrincipalType': obj.principalType,
    'PrincipalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminInstanceMetadata
 */
export interface SsoAdminInstanceMetadata {
  /**
   * @schema SsoAdminInstanceMetadata#InstanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema SsoAdminInstanceMetadata#IdentityStoreId
   */
  readonly identityStoreId?: string;

}

/**
 * Converts an object of type 'SsoAdminInstanceMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminInstanceMetadata(obj: SsoAdminInstanceMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceArn': obj.instanceArn,
    'IdentityStoreId': obj.identityStoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminAttachedManagedPolicy
 */
export interface SsoAdminAttachedManagedPolicy {
  /**
   * @schema SsoAdminAttachedManagedPolicy#Name
   */
  readonly name?: string;

  /**
   * @schema SsoAdminAttachedManagedPolicy#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'SsoAdminAttachedManagedPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminAttachedManagedPolicy(obj: SsoAdminAttachedManagedPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminPermissionSetProvisioningStatusMetadata
 */
export interface SsoAdminPermissionSetProvisioningStatusMetadata {
  /**
   * @schema SsoAdminPermissionSetProvisioningStatusMetadata#Status
   */
  readonly status?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatusMetadata#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SsoAdminPermissionSetProvisioningStatusMetadata#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * Converts an object of type 'SsoAdminPermissionSetProvisioningStatusMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminPermissionSetProvisioningStatusMetadata(obj: SsoAdminPermissionSetProvisioningStatusMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'RequestId': obj.requestId,
    'CreatedDate': obj.createdDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminAccessControlAttribute
 */
export interface SsoAdminAccessControlAttribute {
  /**
   * @schema SsoAdminAccessControlAttribute#Key
   */
  readonly key?: string;

  /**
   * @schema SsoAdminAccessControlAttribute#Value
   */
  readonly value?: SsoAdminAccessControlAttributeValue;

}

/**
 * Converts an object of type 'SsoAdminAccessControlAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminAccessControlAttribute(obj: SsoAdminAccessControlAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': toJson_SsoAdminAccessControlAttributeValue(obj.value),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAdminAccessControlAttributeValue
 */
export interface SsoAdminAccessControlAttributeValue {
  /**
   * @schema SsoAdminAccessControlAttributeValue#Source
   */
  readonly source?: string[];

}

/**
 * Converts an object of type 'SsoAdminAccessControlAttributeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAdminAccessControlAttributeValue(obj: SsoAdminAccessControlAttributeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Source': obj.source?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
