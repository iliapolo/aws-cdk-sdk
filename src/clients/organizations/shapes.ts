/**
 * @schema OrganizationsAcceptHandshakeRequest
 */
export interface OrganizationsAcceptHandshakeRequest {
  /**
   * @schema OrganizationsAcceptHandshakeRequest#HandshakeId
   */
  readonly handshakeId?: string;

}

/**
 * Converts an object of type 'OrganizationsAcceptHandshakeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsAcceptHandshakeRequest(obj: OrganizationsAcceptHandshakeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HandshakeId': obj.handshakeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsAcceptHandshakeResponse
 */
export interface OrganizationsAcceptHandshakeResponse {
  /**
   * @schema OrganizationsAcceptHandshakeResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * Converts an object of type 'OrganizationsAcceptHandshakeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsAcceptHandshakeResponse(obj: OrganizationsAcceptHandshakeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Handshake': toJson_OrganizationsHandshake(obj.handshake),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsAttachPolicyRequest
 */
export interface OrganizationsAttachPolicyRequest {
  /**
   * @schema OrganizationsAttachPolicyRequest#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema OrganizationsAttachPolicyRequest#TargetId
   */
  readonly targetId?: string;

}

/**
 * Converts an object of type 'OrganizationsAttachPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsAttachPolicyRequest(obj: OrganizationsAttachPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'TargetId': obj.targetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCancelHandshakeRequest
 */
export interface OrganizationsCancelHandshakeRequest {
  /**
   * @schema OrganizationsCancelHandshakeRequest#HandshakeId
   */
  readonly handshakeId?: string;

}

/**
 * Converts an object of type 'OrganizationsCancelHandshakeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCancelHandshakeRequest(obj: OrganizationsCancelHandshakeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HandshakeId': obj.handshakeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCancelHandshakeResponse
 */
export interface OrganizationsCancelHandshakeResponse {
  /**
   * @schema OrganizationsCancelHandshakeResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * Converts an object of type 'OrganizationsCancelHandshakeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCancelHandshakeResponse(obj: OrganizationsCancelHandshakeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Handshake': toJson_OrganizationsHandshake(obj.handshake),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreateAccountRequest
 */
export interface OrganizationsCreateAccountRequest {
  /**
   * @schema OrganizationsCreateAccountRequest#Email
   */
  readonly email?: string;

  /**
   * @schema OrganizationsCreateAccountRequest#AccountName
   */
  readonly accountName?: string;

  /**
   * @schema OrganizationsCreateAccountRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema OrganizationsCreateAccountRequest#IamUserAccessToBilling
   */
  readonly iamUserAccessToBilling?: string;

  /**
   * @schema OrganizationsCreateAccountRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * Converts an object of type 'OrganizationsCreateAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreateAccountRequest(obj: OrganizationsCreateAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Email': obj.email,
    'AccountName': obj.accountName,
    'RoleName': obj.roleName,
    'IamUserAccessToBilling': obj.iamUserAccessToBilling,
    'Tags': obj.tags?.map(y => toJson_OrganizationsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreateAccountResponse
 */
export interface OrganizationsCreateAccountResponse {
  /**
   * @schema OrganizationsCreateAccountResponse#CreateAccountStatus
   */
  readonly createAccountStatus?: OrganizationsCreateAccountStatus;

}

/**
 * Converts an object of type 'OrganizationsCreateAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreateAccountResponse(obj: OrganizationsCreateAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateAccountStatus': toJson_OrganizationsCreateAccountStatus(obj.createAccountStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreateGovCloudAccountRequest
 */
export interface OrganizationsCreateGovCloudAccountRequest {
  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#Email
   */
  readonly email?: string;

  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#AccountName
   */
  readonly accountName?: string;

  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#IamUserAccessToBilling
   */
  readonly iamUserAccessToBilling?: string;

  /**
   * @schema OrganizationsCreateGovCloudAccountRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * Converts an object of type 'OrganizationsCreateGovCloudAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreateGovCloudAccountRequest(obj: OrganizationsCreateGovCloudAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Email': obj.email,
    'AccountName': obj.accountName,
    'RoleName': obj.roleName,
    'IamUserAccessToBilling': obj.iamUserAccessToBilling,
    'Tags': obj.tags?.map(y => toJson_OrganizationsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreateGovCloudAccountResponse
 */
export interface OrganizationsCreateGovCloudAccountResponse {
  /**
   * @schema OrganizationsCreateGovCloudAccountResponse#CreateAccountStatus
   */
  readonly createAccountStatus?: OrganizationsCreateAccountStatus;

}

/**
 * Converts an object of type 'OrganizationsCreateGovCloudAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreateGovCloudAccountResponse(obj: OrganizationsCreateGovCloudAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateAccountStatus': toJson_OrganizationsCreateAccountStatus(obj.createAccountStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreateOrganizationRequest
 */
export interface OrganizationsCreateOrganizationRequest {
  /**
   * @schema OrganizationsCreateOrganizationRequest#FeatureSet
   */
  readonly featureSet?: string;

}

/**
 * Converts an object of type 'OrganizationsCreateOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreateOrganizationRequest(obj: OrganizationsCreateOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FeatureSet': obj.featureSet,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreateOrganizationResponse
 */
export interface OrganizationsCreateOrganizationResponse {
  /**
   * @schema OrganizationsCreateOrganizationResponse#Organization
   */
  readonly organization?: OrganizationsOrganization;

}

/**
 * Converts an object of type 'OrganizationsCreateOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreateOrganizationResponse(obj: OrganizationsCreateOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Organization': toJson_OrganizationsOrganization(obj.organization),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreateOrganizationalUnitRequest
 */
export interface OrganizationsCreateOrganizationalUnitRequest {
  /**
   * @schema OrganizationsCreateOrganizationalUnitRequest#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema OrganizationsCreateOrganizationalUnitRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsCreateOrganizationalUnitRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * Converts an object of type 'OrganizationsCreateOrganizationalUnitRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreateOrganizationalUnitRequest(obj: OrganizationsCreateOrganizationalUnitRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParentId': obj.parentId,
    'Name': obj.name,
    'Tags': obj.tags?.map(y => toJson_OrganizationsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreateOrganizationalUnitResponse
 */
export interface OrganizationsCreateOrganizationalUnitResponse {
  /**
   * @schema OrganizationsCreateOrganizationalUnitResponse#OrganizationalUnit
   */
  readonly organizationalUnit?: OrganizationsOrganizationalUnit;

}

/**
 * Converts an object of type 'OrganizationsCreateOrganizationalUnitResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreateOrganizationalUnitResponse(obj: OrganizationsCreateOrganizationalUnitResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationalUnit': toJson_OrganizationsOrganizationalUnit(obj.organizationalUnit),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreatePolicyRequest
 */
export interface OrganizationsCreatePolicyRequest {
  /**
   * @schema OrganizationsCreatePolicyRequest#Content
   */
  readonly content?: string;

  /**
   * @schema OrganizationsCreatePolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema OrganizationsCreatePolicyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsCreatePolicyRequest#Type
   */
  readonly type?: string;

  /**
   * @schema OrganizationsCreatePolicyRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * Converts an object of type 'OrganizationsCreatePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreatePolicyRequest(obj: OrganizationsCreatePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
    'Description': obj.description,
    'Name': obj.name,
    'Type': obj.type,
    'Tags': obj.tags?.map(y => toJson_OrganizationsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsCreatePolicyResponse
 */
export interface OrganizationsCreatePolicyResponse {
  /**
   * @schema OrganizationsCreatePolicyResponse#Policy
   */
  readonly policy?: OrganizationsPolicy;

}

/**
 * Converts an object of type 'OrganizationsCreatePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreatePolicyResponse(obj: OrganizationsCreatePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_OrganizationsPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDeclineHandshakeRequest
 */
export interface OrganizationsDeclineHandshakeRequest {
  /**
   * @schema OrganizationsDeclineHandshakeRequest#HandshakeId
   */
  readonly handshakeId?: string;

}

/**
 * Converts an object of type 'OrganizationsDeclineHandshakeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDeclineHandshakeRequest(obj: OrganizationsDeclineHandshakeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HandshakeId': obj.handshakeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDeclineHandshakeResponse
 */
export interface OrganizationsDeclineHandshakeResponse {
  /**
   * @schema OrganizationsDeclineHandshakeResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * Converts an object of type 'OrganizationsDeclineHandshakeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDeclineHandshakeResponse(obj: OrganizationsDeclineHandshakeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Handshake': toJson_OrganizationsHandshake(obj.handshake),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDeleteOrganizationalUnitRequest
 */
export interface OrganizationsDeleteOrganizationalUnitRequest {
  /**
   * @schema OrganizationsDeleteOrganizationalUnitRequest#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

}

/**
 * Converts an object of type 'OrganizationsDeleteOrganizationalUnitRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDeleteOrganizationalUnitRequest(obj: OrganizationsDeleteOrganizationalUnitRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationalUnitId': obj.organizationalUnitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDeletePolicyRequest
 */
export interface OrganizationsDeletePolicyRequest {
  /**
   * @schema OrganizationsDeletePolicyRequest#PolicyId
   */
  readonly policyId?: string;

}

/**
 * Converts an object of type 'OrganizationsDeletePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDeletePolicyRequest(obj: OrganizationsDeletePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDeregisterDelegatedAdministratorRequest
 */
export interface OrganizationsDeregisterDelegatedAdministratorRequest {
  /**
   * @schema OrganizationsDeregisterDelegatedAdministratorRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema OrganizationsDeregisterDelegatedAdministratorRequest#ServicePrincipal
   */
  readonly servicePrincipal?: string;

}

/**
 * Converts an object of type 'OrganizationsDeregisterDelegatedAdministratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDeregisterDelegatedAdministratorRequest(obj: OrganizationsDeregisterDelegatedAdministratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'ServicePrincipal': obj.servicePrincipal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeAccountRequest
 */
export interface OrganizationsDescribeAccountRequest {
  /**
   * @schema OrganizationsDescribeAccountRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'OrganizationsDescribeAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeAccountRequest(obj: OrganizationsDescribeAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeAccountResponse
 */
export interface OrganizationsDescribeAccountResponse {
  /**
   * @schema OrganizationsDescribeAccountResponse#Account
   */
  readonly account?: OrganizationsAccount;

}

/**
 * Converts an object of type 'OrganizationsDescribeAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeAccountResponse(obj: OrganizationsDescribeAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Account': toJson_OrganizationsAccount(obj.account),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeCreateAccountStatusRequest
 */
export interface OrganizationsDescribeCreateAccountStatusRequest {
  /**
   * @schema OrganizationsDescribeCreateAccountStatusRequest#CreateAccountRequestId
   */
  readonly createAccountRequestId?: string;

}

/**
 * Converts an object of type 'OrganizationsDescribeCreateAccountStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeCreateAccountStatusRequest(obj: OrganizationsDescribeCreateAccountStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateAccountRequestId': obj.createAccountRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeCreateAccountStatusResponse
 */
export interface OrganizationsDescribeCreateAccountStatusResponse {
  /**
   * @schema OrganizationsDescribeCreateAccountStatusResponse#CreateAccountStatus
   */
  readonly createAccountStatus?: OrganizationsCreateAccountStatus;

}

/**
 * Converts an object of type 'OrganizationsDescribeCreateAccountStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeCreateAccountStatusResponse(obj: OrganizationsDescribeCreateAccountStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateAccountStatus': toJson_OrganizationsCreateAccountStatus(obj.createAccountStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeEffectivePolicyRequest
 */
export interface OrganizationsDescribeEffectivePolicyRequest {
  /**
   * @schema OrganizationsDescribeEffectivePolicyRequest#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema OrganizationsDescribeEffectivePolicyRequest#TargetId
   */
  readonly targetId?: string;

}

/**
 * Converts an object of type 'OrganizationsDescribeEffectivePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeEffectivePolicyRequest(obj: OrganizationsDescribeEffectivePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyType': obj.policyType,
    'TargetId': obj.targetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeEffectivePolicyResponse
 */
export interface OrganizationsDescribeEffectivePolicyResponse {
  /**
   * @schema OrganizationsDescribeEffectivePolicyResponse#EffectivePolicy
   */
  readonly effectivePolicy?: OrganizationsEffectivePolicy;

}

/**
 * Converts an object of type 'OrganizationsDescribeEffectivePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeEffectivePolicyResponse(obj: OrganizationsDescribeEffectivePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EffectivePolicy': toJson_OrganizationsEffectivePolicy(obj.effectivePolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeHandshakeRequest
 */
export interface OrganizationsDescribeHandshakeRequest {
  /**
   * @schema OrganizationsDescribeHandshakeRequest#HandshakeId
   */
  readonly handshakeId?: string;

}

/**
 * Converts an object of type 'OrganizationsDescribeHandshakeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeHandshakeRequest(obj: OrganizationsDescribeHandshakeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HandshakeId': obj.handshakeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeHandshakeResponse
 */
export interface OrganizationsDescribeHandshakeResponse {
  /**
   * @schema OrganizationsDescribeHandshakeResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * Converts an object of type 'OrganizationsDescribeHandshakeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeHandshakeResponse(obj: OrganizationsDescribeHandshakeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Handshake': toJson_OrganizationsHandshake(obj.handshake),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeOrganizationResponse
 */
export interface OrganizationsDescribeOrganizationResponse {
  /**
   * @schema OrganizationsDescribeOrganizationResponse#Organization
   */
  readonly organization?: OrganizationsOrganization;

}

/**
 * Converts an object of type 'OrganizationsDescribeOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeOrganizationResponse(obj: OrganizationsDescribeOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Organization': toJson_OrganizationsOrganization(obj.organization),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeOrganizationalUnitRequest
 */
export interface OrganizationsDescribeOrganizationalUnitRequest {
  /**
   * @schema OrganizationsDescribeOrganizationalUnitRequest#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

}

/**
 * Converts an object of type 'OrganizationsDescribeOrganizationalUnitRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeOrganizationalUnitRequest(obj: OrganizationsDescribeOrganizationalUnitRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationalUnitId': obj.organizationalUnitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribeOrganizationalUnitResponse
 */
export interface OrganizationsDescribeOrganizationalUnitResponse {
  /**
   * @schema OrganizationsDescribeOrganizationalUnitResponse#OrganizationalUnit
   */
  readonly organizationalUnit?: OrganizationsOrganizationalUnit;

}

/**
 * Converts an object of type 'OrganizationsDescribeOrganizationalUnitResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribeOrganizationalUnitResponse(obj: OrganizationsDescribeOrganizationalUnitResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationalUnit': toJson_OrganizationsOrganizationalUnit(obj.organizationalUnit),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribePolicyRequest
 */
export interface OrganizationsDescribePolicyRequest {
  /**
   * @schema OrganizationsDescribePolicyRequest#PolicyId
   */
  readonly policyId?: string;

}

/**
 * Converts an object of type 'OrganizationsDescribePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribePolicyRequest(obj: OrganizationsDescribePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDescribePolicyResponse
 */
export interface OrganizationsDescribePolicyResponse {
  /**
   * @schema OrganizationsDescribePolicyResponse#Policy
   */
  readonly policy?: OrganizationsPolicy;

}

/**
 * Converts an object of type 'OrganizationsDescribePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDescribePolicyResponse(obj: OrganizationsDescribePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_OrganizationsPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDetachPolicyRequest
 */
export interface OrganizationsDetachPolicyRequest {
  /**
   * @schema OrganizationsDetachPolicyRequest#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema OrganizationsDetachPolicyRequest#TargetId
   */
  readonly targetId?: string;

}

/**
 * Converts an object of type 'OrganizationsDetachPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDetachPolicyRequest(obj: OrganizationsDetachPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'TargetId': obj.targetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDisableAwsServiceAccessRequest
 */
export interface OrganizationsDisableAwsServiceAccessRequest {
  /**
   * @schema OrganizationsDisableAwsServiceAccessRequest#ServicePrincipal
   */
  readonly servicePrincipal?: string;

}

/**
 * Converts an object of type 'OrganizationsDisableAwsServiceAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDisableAwsServiceAccessRequest(obj: OrganizationsDisableAwsServiceAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServicePrincipal': obj.servicePrincipal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDisablePolicyTypeRequest
 */
export interface OrganizationsDisablePolicyTypeRequest {
  /**
   * @schema OrganizationsDisablePolicyTypeRequest#RootId
   */
  readonly rootId?: string;

  /**
   * @schema OrganizationsDisablePolicyTypeRequest#PolicyType
   */
  readonly policyType?: string;

}

/**
 * Converts an object of type 'OrganizationsDisablePolicyTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDisablePolicyTypeRequest(obj: OrganizationsDisablePolicyTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RootId': obj.rootId,
    'PolicyType': obj.policyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDisablePolicyTypeResponse
 */
export interface OrganizationsDisablePolicyTypeResponse {
  /**
   * @schema OrganizationsDisablePolicyTypeResponse#Root
   */
  readonly root?: OrganizationsRoot;

}

/**
 * Converts an object of type 'OrganizationsDisablePolicyTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDisablePolicyTypeResponse(obj: OrganizationsDisablePolicyTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Root': toJson_OrganizationsRoot(obj.root),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsEnableAwsServiceAccessRequest
 */
export interface OrganizationsEnableAwsServiceAccessRequest {
  /**
   * @schema OrganizationsEnableAwsServiceAccessRequest#ServicePrincipal
   */
  readonly servicePrincipal?: string;

}

/**
 * Converts an object of type 'OrganizationsEnableAwsServiceAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsEnableAwsServiceAccessRequest(obj: OrganizationsEnableAwsServiceAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServicePrincipal': obj.servicePrincipal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsEnableAllFeaturesRequest
 */
export interface OrganizationsEnableAllFeaturesRequest {
}

/**
 * Converts an object of type 'OrganizationsEnableAllFeaturesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsEnableAllFeaturesRequest(obj: OrganizationsEnableAllFeaturesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsEnableAllFeaturesResponse
 */
export interface OrganizationsEnableAllFeaturesResponse {
  /**
   * @schema OrganizationsEnableAllFeaturesResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * Converts an object of type 'OrganizationsEnableAllFeaturesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsEnableAllFeaturesResponse(obj: OrganizationsEnableAllFeaturesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Handshake': toJson_OrganizationsHandshake(obj.handshake),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsEnablePolicyTypeRequest
 */
export interface OrganizationsEnablePolicyTypeRequest {
  /**
   * @schema OrganizationsEnablePolicyTypeRequest#RootId
   */
  readonly rootId?: string;

  /**
   * @schema OrganizationsEnablePolicyTypeRequest#PolicyType
   */
  readonly policyType?: string;

}

/**
 * Converts an object of type 'OrganizationsEnablePolicyTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsEnablePolicyTypeRequest(obj: OrganizationsEnablePolicyTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RootId': obj.rootId,
    'PolicyType': obj.policyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsEnablePolicyTypeResponse
 */
export interface OrganizationsEnablePolicyTypeResponse {
  /**
   * @schema OrganizationsEnablePolicyTypeResponse#Root
   */
  readonly root?: OrganizationsRoot;

}

/**
 * Converts an object of type 'OrganizationsEnablePolicyTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsEnablePolicyTypeResponse(obj: OrganizationsEnablePolicyTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Root': toJson_OrganizationsRoot(obj.root),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsInviteAccountToOrganizationRequest
 */
export interface OrganizationsInviteAccountToOrganizationRequest {
  /**
   * @schema OrganizationsInviteAccountToOrganizationRequest#Target
   */
  readonly target?: OrganizationsHandshakeParty;

  /**
   * @schema OrganizationsInviteAccountToOrganizationRequest#Notes
   */
  readonly notes?: string;

  /**
   * @schema OrganizationsInviteAccountToOrganizationRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * Converts an object of type 'OrganizationsInviteAccountToOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsInviteAccountToOrganizationRequest(obj: OrganizationsInviteAccountToOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Target': toJson_OrganizationsHandshakeParty(obj.target),
    'Notes': obj.notes,
    'Tags': obj.tags?.map(y => toJson_OrganizationsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsInviteAccountToOrganizationResponse
 */
export interface OrganizationsInviteAccountToOrganizationResponse {
  /**
   * @schema OrganizationsInviteAccountToOrganizationResponse#Handshake
   */
  readonly handshake?: OrganizationsHandshake;

}

/**
 * Converts an object of type 'OrganizationsInviteAccountToOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsInviteAccountToOrganizationResponse(obj: OrganizationsInviteAccountToOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Handshake': toJson_OrganizationsHandshake(obj.handshake),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListAwsServiceAccessForOrganizationRequest
 */
export interface OrganizationsListAwsServiceAccessForOrganizationRequest {
  /**
   * @schema OrganizationsListAwsServiceAccessForOrganizationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListAwsServiceAccessForOrganizationRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListAwsServiceAccessForOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListAwsServiceAccessForOrganizationRequest(obj: OrganizationsListAwsServiceAccessForOrganizationRequest | undefined): Record<string, any> | undefined {
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
 * @schema OrganizationsListAwsServiceAccessForOrganizationResponse
 */
export interface OrganizationsListAwsServiceAccessForOrganizationResponse {
  /**
   * @schema OrganizationsListAwsServiceAccessForOrganizationResponse#EnabledServicePrincipals
   */
  readonly enabledServicePrincipals?: OrganizationsEnabledServicePrincipal[];

  /**
   * @schema OrganizationsListAwsServiceAccessForOrganizationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListAwsServiceAccessForOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListAwsServiceAccessForOrganizationResponse(obj: OrganizationsListAwsServiceAccessForOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnabledServicePrincipals': obj.enabledServicePrincipals?.map(y => toJson_OrganizationsEnabledServicePrincipal(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListAccountsRequest
 */
export interface OrganizationsListAccountsRequest {
  /**
   * @schema OrganizationsListAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListAccountsRequest(obj: OrganizationsListAccountsRequest | undefined): Record<string, any> | undefined {
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
 * @schema OrganizationsListAccountsResponse
 */
export interface OrganizationsListAccountsResponse {
  /**
   * @schema OrganizationsListAccountsResponse#Accounts
   */
  readonly accounts?: OrganizationsAccount[];

  /**
   * @schema OrganizationsListAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListAccountsResponse(obj: OrganizationsListAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accounts': obj.accounts?.map(y => toJson_OrganizationsAccount(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListAccountsForParentRequest
 */
export interface OrganizationsListAccountsForParentRequest {
  /**
   * @schema OrganizationsListAccountsForParentRequest#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema OrganizationsListAccountsForParentRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListAccountsForParentRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListAccountsForParentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListAccountsForParentRequest(obj: OrganizationsListAccountsForParentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParentId': obj.parentId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListAccountsForParentResponse
 */
export interface OrganizationsListAccountsForParentResponse {
  /**
   * @schema OrganizationsListAccountsForParentResponse#Accounts
   */
  readonly accounts?: OrganizationsAccount[];

  /**
   * @schema OrganizationsListAccountsForParentResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListAccountsForParentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListAccountsForParentResponse(obj: OrganizationsListAccountsForParentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accounts': obj.accounts?.map(y => toJson_OrganizationsAccount(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListChildrenRequest
 */
export interface OrganizationsListChildrenRequest {
  /**
   * @schema OrganizationsListChildrenRequest#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema OrganizationsListChildrenRequest#ChildType
   */
  readonly childType?: string;

  /**
   * @schema OrganizationsListChildrenRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListChildrenRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListChildrenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListChildrenRequest(obj: OrganizationsListChildrenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParentId': obj.parentId,
    'ChildType': obj.childType,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListChildrenResponse
 */
export interface OrganizationsListChildrenResponse {
  /**
   * @schema OrganizationsListChildrenResponse#Children
   */
  readonly children?: OrganizationsChild[];

  /**
   * @schema OrganizationsListChildrenResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListChildrenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListChildrenResponse(obj: OrganizationsListChildrenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Children': obj.children?.map(y => toJson_OrganizationsChild(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListCreateAccountStatusRequest
 */
export interface OrganizationsListCreateAccountStatusRequest {
  /**
   * @schema OrganizationsListCreateAccountStatusRequest#States
   */
  readonly states?: string[];

  /**
   * @schema OrganizationsListCreateAccountStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListCreateAccountStatusRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListCreateAccountStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListCreateAccountStatusRequest(obj: OrganizationsListCreateAccountStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'States': obj.states?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListCreateAccountStatusResponse
 */
export interface OrganizationsListCreateAccountStatusResponse {
  /**
   * @schema OrganizationsListCreateAccountStatusResponse#CreateAccountStatuses
   */
  readonly createAccountStatuses?: OrganizationsCreateAccountStatus[];

  /**
   * @schema OrganizationsListCreateAccountStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListCreateAccountStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListCreateAccountStatusResponse(obj: OrganizationsListCreateAccountStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateAccountStatuses': obj.createAccountStatuses?.map(y => toJson_OrganizationsCreateAccountStatus(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListDelegatedAdministratorsRequest
 */
export interface OrganizationsListDelegatedAdministratorsRequest {
  /**
   * @schema OrganizationsListDelegatedAdministratorsRequest#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema OrganizationsListDelegatedAdministratorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListDelegatedAdministratorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListDelegatedAdministratorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListDelegatedAdministratorsRequest(obj: OrganizationsListDelegatedAdministratorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServicePrincipal': obj.servicePrincipal,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListDelegatedAdministratorsResponse
 */
export interface OrganizationsListDelegatedAdministratorsResponse {
  /**
   * @schema OrganizationsListDelegatedAdministratorsResponse#DelegatedAdministrators
   */
  readonly delegatedAdministrators?: OrganizationsDelegatedAdministrator[];

  /**
   * @schema OrganizationsListDelegatedAdministratorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListDelegatedAdministratorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListDelegatedAdministratorsResponse(obj: OrganizationsListDelegatedAdministratorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DelegatedAdministrators': obj.delegatedAdministrators?.map(y => toJson_OrganizationsDelegatedAdministrator(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListDelegatedServicesForAccountRequest
 */
export interface OrganizationsListDelegatedServicesForAccountRequest {
  /**
   * @schema OrganizationsListDelegatedServicesForAccountRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema OrganizationsListDelegatedServicesForAccountRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListDelegatedServicesForAccountRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListDelegatedServicesForAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListDelegatedServicesForAccountRequest(obj: OrganizationsListDelegatedServicesForAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListDelegatedServicesForAccountResponse
 */
export interface OrganizationsListDelegatedServicesForAccountResponse {
  /**
   * @schema OrganizationsListDelegatedServicesForAccountResponse#DelegatedServices
   */
  readonly delegatedServices?: OrganizationsDelegatedService[];

  /**
   * @schema OrganizationsListDelegatedServicesForAccountResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListDelegatedServicesForAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListDelegatedServicesForAccountResponse(obj: OrganizationsListDelegatedServicesForAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DelegatedServices': obj.delegatedServices?.map(y => toJson_OrganizationsDelegatedService(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListHandshakesForAccountRequest
 */
export interface OrganizationsListHandshakesForAccountRequest {
  /**
   * @schema OrganizationsListHandshakesForAccountRequest#Filter
   */
  readonly filter?: OrganizationsHandshakeFilter;

  /**
   * @schema OrganizationsListHandshakesForAccountRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListHandshakesForAccountRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListHandshakesForAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListHandshakesForAccountRequest(obj: OrganizationsListHandshakesForAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_OrganizationsHandshakeFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListHandshakesForAccountResponse
 */
export interface OrganizationsListHandshakesForAccountResponse {
  /**
   * @schema OrganizationsListHandshakesForAccountResponse#Handshakes
   */
  readonly handshakes?: OrganizationsHandshake[];

  /**
   * @schema OrganizationsListHandshakesForAccountResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListHandshakesForAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListHandshakesForAccountResponse(obj: OrganizationsListHandshakesForAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Handshakes': obj.handshakes?.map(y => toJson_OrganizationsHandshake(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListHandshakesForOrganizationRequest
 */
export interface OrganizationsListHandshakesForOrganizationRequest {
  /**
   * @schema OrganizationsListHandshakesForOrganizationRequest#Filter
   */
  readonly filter?: OrganizationsHandshakeFilter;

  /**
   * @schema OrganizationsListHandshakesForOrganizationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListHandshakesForOrganizationRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListHandshakesForOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListHandshakesForOrganizationRequest(obj: OrganizationsListHandshakesForOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_OrganizationsHandshakeFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListHandshakesForOrganizationResponse
 */
export interface OrganizationsListHandshakesForOrganizationResponse {
  /**
   * @schema OrganizationsListHandshakesForOrganizationResponse#Handshakes
   */
  readonly handshakes?: OrganizationsHandshake[];

  /**
   * @schema OrganizationsListHandshakesForOrganizationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListHandshakesForOrganizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListHandshakesForOrganizationResponse(obj: OrganizationsListHandshakesForOrganizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Handshakes': obj.handshakes?.map(y => toJson_OrganizationsHandshake(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListOrganizationalUnitsForParentRequest
 */
export interface OrganizationsListOrganizationalUnitsForParentRequest {
  /**
   * @schema OrganizationsListOrganizationalUnitsForParentRequest#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema OrganizationsListOrganizationalUnitsForParentRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListOrganizationalUnitsForParentRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListOrganizationalUnitsForParentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListOrganizationalUnitsForParentRequest(obj: OrganizationsListOrganizationalUnitsForParentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParentId': obj.parentId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListOrganizationalUnitsForParentResponse
 */
export interface OrganizationsListOrganizationalUnitsForParentResponse {
  /**
   * @schema OrganizationsListOrganizationalUnitsForParentResponse#OrganizationalUnits
   */
  readonly organizationalUnits?: OrganizationsOrganizationalUnit[];

  /**
   * @schema OrganizationsListOrganizationalUnitsForParentResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListOrganizationalUnitsForParentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListOrganizationalUnitsForParentResponse(obj: OrganizationsListOrganizationalUnitsForParentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationalUnits': obj.organizationalUnits?.map(y => toJson_OrganizationsOrganizationalUnit(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListParentsRequest
 */
export interface OrganizationsListParentsRequest {
  /**
   * @schema OrganizationsListParentsRequest#ChildId
   */
  readonly childId?: string;

  /**
   * @schema OrganizationsListParentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListParentsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListParentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListParentsRequest(obj: OrganizationsListParentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChildId': obj.childId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListParentsResponse
 */
export interface OrganizationsListParentsResponse {
  /**
   * @schema OrganizationsListParentsResponse#Parents
   */
  readonly parents?: OrganizationsParent[];

  /**
   * @schema OrganizationsListParentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListParentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListParentsResponse(obj: OrganizationsListParentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parents': obj.parents?.map(y => toJson_OrganizationsParent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListPoliciesRequest
 */
export interface OrganizationsListPoliciesRequest {
  /**
   * @schema OrganizationsListPoliciesRequest#Filter
   */
  readonly filter?: string;

  /**
   * @schema OrganizationsListPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListPoliciesRequest(obj: OrganizationsListPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': obj.filter,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListPoliciesResponse
 */
export interface OrganizationsListPoliciesResponse {
  /**
   * @schema OrganizationsListPoliciesResponse#Policies
   */
  readonly policies?: OrganizationsPolicySummary[];

  /**
   * @schema OrganizationsListPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListPoliciesResponse(obj: OrganizationsListPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policies': obj.policies?.map(y => toJson_OrganizationsPolicySummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListPoliciesForTargetRequest
 */
export interface OrganizationsListPoliciesForTargetRequest {
  /**
   * @schema OrganizationsListPoliciesForTargetRequest#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema OrganizationsListPoliciesForTargetRequest#Filter
   */
  readonly filter?: string;

  /**
   * @schema OrganizationsListPoliciesForTargetRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListPoliciesForTargetRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListPoliciesForTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListPoliciesForTargetRequest(obj: OrganizationsListPoliciesForTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetId': obj.targetId,
    'Filter': obj.filter,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListPoliciesForTargetResponse
 */
export interface OrganizationsListPoliciesForTargetResponse {
  /**
   * @schema OrganizationsListPoliciesForTargetResponse#Policies
   */
  readonly policies?: OrganizationsPolicySummary[];

  /**
   * @schema OrganizationsListPoliciesForTargetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListPoliciesForTargetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListPoliciesForTargetResponse(obj: OrganizationsListPoliciesForTargetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policies': obj.policies?.map(y => toJson_OrganizationsPolicySummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListRootsRequest
 */
export interface OrganizationsListRootsRequest {
  /**
   * @schema OrganizationsListRootsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListRootsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListRootsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListRootsRequest(obj: OrganizationsListRootsRequest | undefined): Record<string, any> | undefined {
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
 * @schema OrganizationsListRootsResponse
 */
export interface OrganizationsListRootsResponse {
  /**
   * @schema OrganizationsListRootsResponse#Roots
   */
  readonly roots?: OrganizationsRoot[];

  /**
   * @schema OrganizationsListRootsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListRootsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListRootsResponse(obj: OrganizationsListRootsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Roots': obj.roots?.map(y => toJson_OrganizationsRoot(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListTagsForResourceRequest
 */
export interface OrganizationsListTagsForResourceRequest {
  /**
   * @schema OrganizationsListTagsForResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema OrganizationsListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListTagsForResourceRequest(obj: OrganizationsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListTagsForResourceResponse
 */
export interface OrganizationsListTagsForResourceResponse {
  /**
   * @schema OrganizationsListTagsForResourceResponse#Tags
   */
  readonly tags?: OrganizationsTag[];

  /**
   * @schema OrganizationsListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListTagsForResourceResponse(obj: OrganizationsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_OrganizationsTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListTargetsForPolicyRequest
 */
export interface OrganizationsListTargetsForPolicyRequest {
  /**
   * @schema OrganizationsListTargetsForPolicyRequest#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema OrganizationsListTargetsForPolicyRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OrganizationsListTargetsForPolicyRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OrganizationsListTargetsForPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListTargetsForPolicyRequest(obj: OrganizationsListTargetsForPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsListTargetsForPolicyResponse
 */
export interface OrganizationsListTargetsForPolicyResponse {
  /**
   * @schema OrganizationsListTargetsForPolicyResponse#Targets
   */
  readonly targets?: OrganizationsPolicyTargetSummary[];

  /**
   * @schema OrganizationsListTargetsForPolicyResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OrganizationsListTargetsForPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsListTargetsForPolicyResponse(obj: OrganizationsListTargetsForPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Targets': obj.targets?.map(y => toJson_OrganizationsPolicyTargetSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsMoveAccountRequest
 */
export interface OrganizationsMoveAccountRequest {
  /**
   * @schema OrganizationsMoveAccountRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema OrganizationsMoveAccountRequest#SourceParentId
   */
  readonly sourceParentId?: string;

  /**
   * @schema OrganizationsMoveAccountRequest#DestinationParentId
   */
  readonly destinationParentId?: string;

}

/**
 * Converts an object of type 'OrganizationsMoveAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsMoveAccountRequest(obj: OrganizationsMoveAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'SourceParentId': obj.sourceParentId,
    'DestinationParentId': obj.destinationParentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsRegisterDelegatedAdministratorRequest
 */
export interface OrganizationsRegisterDelegatedAdministratorRequest {
  /**
   * @schema OrganizationsRegisterDelegatedAdministratorRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema OrganizationsRegisterDelegatedAdministratorRequest#ServicePrincipal
   */
  readonly servicePrincipal?: string;

}

/**
 * Converts an object of type 'OrganizationsRegisterDelegatedAdministratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsRegisterDelegatedAdministratorRequest(obj: OrganizationsRegisterDelegatedAdministratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'ServicePrincipal': obj.servicePrincipal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsRemoveAccountFromOrganizationRequest
 */
export interface OrganizationsRemoveAccountFromOrganizationRequest {
  /**
   * @schema OrganizationsRemoveAccountFromOrganizationRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'OrganizationsRemoveAccountFromOrganizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsRemoveAccountFromOrganizationRequest(obj: OrganizationsRemoveAccountFromOrganizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsTagResourceRequest
 */
export interface OrganizationsTagResourceRequest {
  /**
   * @schema OrganizationsTagResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema OrganizationsTagResourceRequest#Tags
   */
  readonly tags?: OrganizationsTag[];

}

/**
 * Converts an object of type 'OrganizationsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsTagResourceRequest(obj: OrganizationsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'Tags': obj.tags?.map(y => toJson_OrganizationsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsUntagResourceRequest
 */
export interface OrganizationsUntagResourceRequest {
  /**
   * @schema OrganizationsUntagResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema OrganizationsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'OrganizationsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsUntagResourceRequest(obj: OrganizationsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsUpdateOrganizationalUnitRequest
 */
export interface OrganizationsUpdateOrganizationalUnitRequest {
  /**
   * @schema OrganizationsUpdateOrganizationalUnitRequest#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

  /**
   * @schema OrganizationsUpdateOrganizationalUnitRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'OrganizationsUpdateOrganizationalUnitRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsUpdateOrganizationalUnitRequest(obj: OrganizationsUpdateOrganizationalUnitRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationalUnitId': obj.organizationalUnitId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsUpdateOrganizationalUnitResponse
 */
export interface OrganizationsUpdateOrganizationalUnitResponse {
  /**
   * @schema OrganizationsUpdateOrganizationalUnitResponse#OrganizationalUnit
   */
  readonly organizationalUnit?: OrganizationsOrganizationalUnit;

}

/**
 * Converts an object of type 'OrganizationsUpdateOrganizationalUnitResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsUpdateOrganizationalUnitResponse(obj: OrganizationsUpdateOrganizationalUnitResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationalUnit': toJson_OrganizationsOrganizationalUnit(obj.organizationalUnit),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsUpdatePolicyRequest
 */
export interface OrganizationsUpdatePolicyRequest {
  /**
   * @schema OrganizationsUpdatePolicyRequest#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema OrganizationsUpdatePolicyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsUpdatePolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema OrganizationsUpdatePolicyRequest#Content
   */
  readonly content?: string;

}

/**
 * Converts an object of type 'OrganizationsUpdatePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsUpdatePolicyRequest(obj: OrganizationsUpdatePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'Name': obj.name,
    'Description': obj.description,
    'Content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsUpdatePolicyResponse
 */
export interface OrganizationsUpdatePolicyResponse {
  /**
   * @schema OrganizationsUpdatePolicyResponse#Policy
   */
  readonly policy?: OrganizationsPolicy;

}

/**
 * Converts an object of type 'OrganizationsUpdatePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsUpdatePolicyResponse(obj: OrganizationsUpdatePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_OrganizationsPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsHandshake
 */
export interface OrganizationsHandshake {
  /**
   * @schema OrganizationsHandshake#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsHandshake#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsHandshake#Parties
   */
  readonly parties?: OrganizationsHandshakeParty[];

  /**
   * @schema OrganizationsHandshake#State
   */
  readonly state?: string;

  /**
   * @schema OrganizationsHandshake#RequestedTimestamp
   */
  readonly requestedTimestamp?: string;

  /**
   * @schema OrganizationsHandshake#ExpirationTimestamp
   */
  readonly expirationTimestamp?: string;

  /**
   * @schema OrganizationsHandshake#Action
   */
  readonly action?: string;

  /**
   * @schema OrganizationsHandshake#Resources
   */
  readonly resources?: OrganizationsHandshakeResource[];

}

/**
 * Converts an object of type 'OrganizationsHandshake' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsHandshake(obj: OrganizationsHandshake | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Parties': obj.parties?.map(y => toJson_OrganizationsHandshakeParty(y)),
    'State': obj.state,
    'RequestedTimestamp': obj.requestedTimestamp,
    'ExpirationTimestamp': obj.expirationTimestamp,
    'Action': obj.action,
    'Resources': obj.resources?.map(y => toJson_OrganizationsHandshakeResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsTag
 */
export interface OrganizationsTag {
  /**
   * @schema OrganizationsTag#Key
   */
  readonly key?: string;

  /**
   * @schema OrganizationsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'OrganizationsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsTag(obj: OrganizationsTag | undefined): Record<string, any> | undefined {
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
 * @schema OrganizationsCreateAccountStatus
 */
export interface OrganizationsCreateAccountStatus {
  /**
   * @schema OrganizationsCreateAccountStatus#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#AccountName
   */
  readonly accountName?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#State
   */
  readonly state?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#RequestedTimestamp
   */
  readonly requestedTimestamp?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#CompletedTimestamp
   */
  readonly completedTimestamp?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#GovCloudAccountId
   */
  readonly govCloudAccountId?: string;

  /**
   * @schema OrganizationsCreateAccountStatus#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * Converts an object of type 'OrganizationsCreateAccountStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsCreateAccountStatus(obj: OrganizationsCreateAccountStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'AccountName': obj.accountName,
    'State': obj.state,
    'RequestedTimestamp': obj.requestedTimestamp,
    'CompletedTimestamp': obj.completedTimestamp,
    'AccountId': obj.accountId,
    'GovCloudAccountId': obj.govCloudAccountId,
    'FailureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsOrganization
 */
export interface OrganizationsOrganization {
  /**
   * @schema OrganizationsOrganization#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsOrganization#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsOrganization#FeatureSet
   */
  readonly featureSet?: string;

  /**
   * @schema OrganizationsOrganization#MasterAccountArn
   */
  readonly masterAccountArn?: string;

  /**
   * @schema OrganizationsOrganization#MasterAccountId
   */
  readonly masterAccountId?: string;

  /**
   * @schema OrganizationsOrganization#MasterAccountEmail
   */
  readonly masterAccountEmail?: string;

  /**
   * @schema OrganizationsOrganization#AvailablePolicyTypes
   */
  readonly availablePolicyTypes?: OrganizationsPolicyTypeSummary[];

}

/**
 * Converts an object of type 'OrganizationsOrganization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsOrganization(obj: OrganizationsOrganization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'FeatureSet': obj.featureSet,
    'MasterAccountArn': obj.masterAccountArn,
    'MasterAccountId': obj.masterAccountId,
    'MasterAccountEmail': obj.masterAccountEmail,
    'AvailablePolicyTypes': obj.availablePolicyTypes?.map(y => toJson_OrganizationsPolicyTypeSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsOrganizationalUnit
 */
export interface OrganizationsOrganizationalUnit {
  /**
   * @schema OrganizationsOrganizationalUnit#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsOrganizationalUnit#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsOrganizationalUnit#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'OrganizationsOrganizationalUnit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsOrganizationalUnit(obj: OrganizationsOrganizationalUnit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsPolicy
 */
export interface OrganizationsPolicy {
  /**
   * @schema OrganizationsPolicy#PolicySummary
   */
  readonly policySummary?: OrganizationsPolicySummary;

  /**
   * @schema OrganizationsPolicy#Content
   */
  readonly content?: string;

}

/**
 * Converts an object of type 'OrganizationsPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsPolicy(obj: OrganizationsPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicySummary': toJson_OrganizationsPolicySummary(obj.policySummary),
    'Content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsAccount
 */
export interface OrganizationsAccount {
  /**
   * @schema OrganizationsAccount#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsAccount#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsAccount#Email
   */
  readonly email?: string;

  /**
   * @schema OrganizationsAccount#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsAccount#Status
   */
  readonly status?: string;

  /**
   * @schema OrganizationsAccount#JoinedMethod
   */
  readonly joinedMethod?: string;

  /**
   * @schema OrganizationsAccount#JoinedTimestamp
   */
  readonly joinedTimestamp?: string;

}

/**
 * Converts an object of type 'OrganizationsAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsAccount(obj: OrganizationsAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Email': obj.email,
    'Name': obj.name,
    'Status': obj.status,
    'JoinedMethod': obj.joinedMethod,
    'JoinedTimestamp': obj.joinedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsEffectivePolicy
 */
export interface OrganizationsEffectivePolicy {
  /**
   * @schema OrganizationsEffectivePolicy#PolicyContent
   */
  readonly policyContent?: string;

  /**
   * @schema OrganizationsEffectivePolicy#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema OrganizationsEffectivePolicy#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema OrganizationsEffectivePolicy#PolicyType
   */
  readonly policyType?: string;

}

/**
 * Converts an object of type 'OrganizationsEffectivePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsEffectivePolicy(obj: OrganizationsEffectivePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyContent': obj.policyContent,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'TargetId': obj.targetId,
    'PolicyType': obj.policyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsRoot
 */
export interface OrganizationsRoot {
  /**
   * @schema OrganizationsRoot#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsRoot#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsRoot#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsRoot#PolicyTypes
   */
  readonly policyTypes?: OrganizationsPolicyTypeSummary[];

}

/**
 * Converts an object of type 'OrganizationsRoot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsRoot(obj: OrganizationsRoot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'PolicyTypes': obj.policyTypes?.map(y => toJson_OrganizationsPolicyTypeSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsHandshakeParty
 */
export interface OrganizationsHandshakeParty {
  /**
   * @schema OrganizationsHandshakeParty#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsHandshakeParty#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'OrganizationsHandshakeParty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsHandshakeParty(obj: OrganizationsHandshakeParty | undefined): Record<string, any> | undefined {
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
 * @schema OrganizationsEnabledServicePrincipal
 */
export interface OrganizationsEnabledServicePrincipal {
  /**
   * @schema OrganizationsEnabledServicePrincipal#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema OrganizationsEnabledServicePrincipal#DateEnabled
   */
  readonly dateEnabled?: string;

}

/**
 * Converts an object of type 'OrganizationsEnabledServicePrincipal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsEnabledServicePrincipal(obj: OrganizationsEnabledServicePrincipal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServicePrincipal': obj.servicePrincipal,
    'DateEnabled': obj.dateEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsChild
 */
export interface OrganizationsChild {
  /**
   * @schema OrganizationsChild#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsChild#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'OrganizationsChild' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsChild(obj: OrganizationsChild | undefined): Record<string, any> | undefined {
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
 * @schema OrganizationsDelegatedAdministrator
 */
export interface OrganizationsDelegatedAdministrator {
  /**
   * @schema OrganizationsDelegatedAdministrator#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#Email
   */
  readonly email?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#Status
   */
  readonly status?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#JoinedMethod
   */
  readonly joinedMethod?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#JoinedTimestamp
   */
  readonly joinedTimestamp?: string;

  /**
   * @schema OrganizationsDelegatedAdministrator#DelegationEnabledDate
   */
  readonly delegationEnabledDate?: string;

}

/**
 * Converts an object of type 'OrganizationsDelegatedAdministrator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDelegatedAdministrator(obj: OrganizationsDelegatedAdministrator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Email': obj.email,
    'Name': obj.name,
    'Status': obj.status,
    'JoinedMethod': obj.joinedMethod,
    'JoinedTimestamp': obj.joinedTimestamp,
    'DelegationEnabledDate': obj.delegationEnabledDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsDelegatedService
 */
export interface OrganizationsDelegatedService {
  /**
   * @schema OrganizationsDelegatedService#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema OrganizationsDelegatedService#DelegationEnabledDate
   */
  readonly delegationEnabledDate?: string;

}

/**
 * Converts an object of type 'OrganizationsDelegatedService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsDelegatedService(obj: OrganizationsDelegatedService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServicePrincipal': obj.servicePrincipal,
    'DelegationEnabledDate': obj.delegationEnabledDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsHandshakeFilter
 */
export interface OrganizationsHandshakeFilter {
  /**
   * @schema OrganizationsHandshakeFilter#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema OrganizationsHandshakeFilter#ParentHandshakeId
   */
  readonly parentHandshakeId?: string;

}

/**
 * Converts an object of type 'OrganizationsHandshakeFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsHandshakeFilter(obj: OrganizationsHandshakeFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionType': obj.actionType,
    'ParentHandshakeId': obj.parentHandshakeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsParent
 */
export interface OrganizationsParent {
  /**
   * @schema OrganizationsParent#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsParent#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'OrganizationsParent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsParent(obj: OrganizationsParent | undefined): Record<string, any> | undefined {
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
 * @schema OrganizationsPolicySummary
 */
export interface OrganizationsPolicySummary {
  /**
   * @schema OrganizationsPolicySummary#Id
   */
  readonly id?: string;

  /**
   * @schema OrganizationsPolicySummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsPolicySummary#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsPolicySummary#Description
   */
  readonly description?: string;

  /**
   * @schema OrganizationsPolicySummary#Type
   */
  readonly type?: string;

  /**
   * @schema OrganizationsPolicySummary#AwsManaged
   */
  readonly awsManaged?: boolean;

}

/**
 * Converts an object of type 'OrganizationsPolicySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsPolicySummary(obj: OrganizationsPolicySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
    'Type': obj.type,
    'AwsManaged': obj.awsManaged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsPolicyTargetSummary
 */
export interface OrganizationsPolicyTargetSummary {
  /**
   * @schema OrganizationsPolicyTargetSummary#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema OrganizationsPolicyTargetSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema OrganizationsPolicyTargetSummary#Name
   */
  readonly name?: string;

  /**
   * @schema OrganizationsPolicyTargetSummary#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'OrganizationsPolicyTargetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsPolicyTargetSummary(obj: OrganizationsPolicyTargetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetId': obj.targetId,
    'Arn': obj.arn,
    'Name': obj.name,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsHandshakeResource
 */
export interface OrganizationsHandshakeResource {
  /**
   * @schema OrganizationsHandshakeResource#Value
   */
  readonly value?: string;

  /**
   * @schema OrganizationsHandshakeResource#Type
   */
  readonly type?: string;

  /**
   * @schema OrganizationsHandshakeResource#Resources
   */
  readonly resources?: OrganizationsHandshakeResource[];

}

/**
 * Converts an object of type 'OrganizationsHandshakeResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsHandshakeResource(obj: OrganizationsHandshakeResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Type': obj.type,
    'Resources': obj.resources?.map(y => toJson_OrganizationsHandshakeResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OrganizationsPolicyTypeSummary
 */
export interface OrganizationsPolicyTypeSummary {
  /**
   * @schema OrganizationsPolicyTypeSummary#Type
   */
  readonly type?: string;

  /**
   * @schema OrganizationsPolicyTypeSummary#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'OrganizationsPolicyTypeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OrganizationsPolicyTypeSummary(obj: OrganizationsPolicyTypeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
