/**
 * @schema FmsAssociateAdminAccountRequest
 */
export interface FmsAssociateAdminAccountRequest {
  /**
   * @schema FmsAssociateAdminAccountRequest#AdminAccount
   */
  readonly adminAccount?: string;

}

/**
 * Converts an object of type 'FmsAssociateAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsAssociateAdminAccountRequest(obj: FmsAssociateAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccount': obj.adminAccount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsDeleteAppsListRequest
 */
export interface FmsDeleteAppsListRequest {
  /**
   * @schema FmsDeleteAppsListRequest#ListId
   */
  readonly listId?: string;

}

/**
 * Converts an object of type 'FmsDeleteAppsListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsDeleteAppsListRequest(obj: FmsDeleteAppsListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListId': obj.listId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsDeleteNotificationChannelRequest
 */
export interface FmsDeleteNotificationChannelRequest {
}

/**
 * Converts an object of type 'FmsDeleteNotificationChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsDeleteNotificationChannelRequest(obj: FmsDeleteNotificationChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsDeletePolicyRequest
 */
export interface FmsDeletePolicyRequest {
  /**
   * @schema FmsDeletePolicyRequest#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsDeletePolicyRequest#DeleteAllPolicyResources
   */
  readonly deleteAllPolicyResources?: boolean;

}

/**
 * Converts an object of type 'FmsDeletePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsDeletePolicyRequest(obj: FmsDeletePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'DeleteAllPolicyResources': obj.deleteAllPolicyResources,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsDeleteProtocolsListRequest
 */
export interface FmsDeleteProtocolsListRequest {
  /**
   * @schema FmsDeleteProtocolsListRequest#ListId
   */
  readonly listId?: string;

}

/**
 * Converts an object of type 'FmsDeleteProtocolsListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsDeleteProtocolsListRequest(obj: FmsDeleteProtocolsListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListId': obj.listId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsDisassociateAdminAccountRequest
 */
export interface FmsDisassociateAdminAccountRequest {
}

/**
 * Converts an object of type 'FmsDisassociateAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsDisassociateAdminAccountRequest(obj: FmsDisassociateAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetAdminAccountRequest
 */
export interface FmsGetAdminAccountRequest {
}

/**
 * Converts an object of type 'FmsGetAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetAdminAccountRequest(obj: FmsGetAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetAdminAccountResponse
 */
export interface FmsGetAdminAccountResponse {
  /**
   * @schema FmsGetAdminAccountResponse#AdminAccount
   */
  readonly adminAccount?: string;

  /**
   * @schema FmsGetAdminAccountResponse#RoleStatus
   */
  readonly roleStatus?: string;

}

/**
 * Converts an object of type 'FmsGetAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetAdminAccountResponse(obj: FmsGetAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccount': obj.adminAccount,
    'RoleStatus': obj.roleStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetAppsListRequest
 */
export interface FmsGetAppsListRequest {
  /**
   * @schema FmsGetAppsListRequest#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsGetAppsListRequest#DefaultList
   */
  readonly defaultList?: boolean;

}

/**
 * Converts an object of type 'FmsGetAppsListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetAppsListRequest(obj: FmsGetAppsListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListId': obj.listId,
    'DefaultList': obj.defaultList,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetAppsListResponse
 */
export interface FmsGetAppsListResponse {
  /**
   * @schema FmsGetAppsListResponse#AppsList
   */
  readonly appsList?: FmsAppsListData;

  /**
   * @schema FmsGetAppsListResponse#AppsListArn
   */
  readonly appsListArn?: string;

}

/**
 * Converts an object of type 'FmsGetAppsListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetAppsListResponse(obj: FmsGetAppsListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppsList': toJson_FmsAppsListData(obj.appsList),
    'AppsListArn': obj.appsListArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetComplianceDetailRequest
 */
export interface FmsGetComplianceDetailRequest {
  /**
   * @schema FmsGetComplianceDetailRequest#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsGetComplianceDetailRequest#MemberAccount
   */
  readonly memberAccount?: string;

}

/**
 * Converts an object of type 'FmsGetComplianceDetailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetComplianceDetailRequest(obj: FmsGetComplianceDetailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'MemberAccount': obj.memberAccount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetComplianceDetailResponse
 */
export interface FmsGetComplianceDetailResponse {
  /**
   * @schema FmsGetComplianceDetailResponse#PolicyComplianceDetail
   */
  readonly policyComplianceDetail?: FmsPolicyComplianceDetail;

}

/**
 * Converts an object of type 'FmsGetComplianceDetailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetComplianceDetailResponse(obj: FmsGetComplianceDetailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyComplianceDetail': toJson_FmsPolicyComplianceDetail(obj.policyComplianceDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetNotificationChannelRequest
 */
export interface FmsGetNotificationChannelRequest {
}

/**
 * Converts an object of type 'FmsGetNotificationChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetNotificationChannelRequest(obj: FmsGetNotificationChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetNotificationChannelResponse
 */
export interface FmsGetNotificationChannelResponse {
  /**
   * @schema FmsGetNotificationChannelResponse#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema FmsGetNotificationChannelResponse#SnsRoleName
   */
  readonly snsRoleName?: string;

}

/**
 * Converts an object of type 'FmsGetNotificationChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetNotificationChannelResponse(obj: FmsGetNotificationChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnsTopicArn': obj.snsTopicArn,
    'SnsRoleName': obj.snsRoleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetPolicyRequest
 */
export interface FmsGetPolicyRequest {
  /**
   * @schema FmsGetPolicyRequest#PolicyId
   */
  readonly policyId?: string;

}

/**
 * Converts an object of type 'FmsGetPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetPolicyRequest(obj: FmsGetPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetPolicyResponse
 */
export interface FmsGetPolicyResponse {
  /**
   * @schema FmsGetPolicyResponse#Policy
   */
  readonly policy?: FmsPolicy;

  /**
   * @schema FmsGetPolicyResponse#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'FmsGetPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetPolicyResponse(obj: FmsGetPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_FmsPolicy(obj.policy),
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetProtectionStatusRequest
 */
export interface FmsGetProtectionStatusRequest {
  /**
   * @schema FmsGetProtectionStatusRequest#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsGetProtectionStatusRequest#MemberAccountId
   */
  readonly memberAccountId?: string;

  /**
   * @schema FmsGetProtectionStatusRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema FmsGetProtectionStatusRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema FmsGetProtectionStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsGetProtectionStatusRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FmsGetProtectionStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetProtectionStatusRequest(obj: FmsGetProtectionStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'MemberAccountId': obj.memberAccountId,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetProtectionStatusResponse
 */
export interface FmsGetProtectionStatusResponse {
  /**
   * @schema FmsGetProtectionStatusResponse#AdminAccountId
   */
  readonly adminAccountId?: string;

  /**
   * @schema FmsGetProtectionStatusResponse#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema FmsGetProtectionStatusResponse#Data
   */
  readonly data?: string;

  /**
   * @schema FmsGetProtectionStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FmsGetProtectionStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetProtectionStatusResponse(obj: FmsGetProtectionStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminAccountId': obj.adminAccountId,
    'ServiceType': obj.serviceType,
    'Data': obj.data,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetProtocolsListRequest
 */
export interface FmsGetProtocolsListRequest {
  /**
   * @schema FmsGetProtocolsListRequest#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsGetProtocolsListRequest#DefaultList
   */
  readonly defaultList?: boolean;

}

/**
 * Converts an object of type 'FmsGetProtocolsListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetProtocolsListRequest(obj: FmsGetProtocolsListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListId': obj.listId,
    'DefaultList': obj.defaultList,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetProtocolsListResponse
 */
export interface FmsGetProtocolsListResponse {
  /**
   * @schema FmsGetProtocolsListResponse#ProtocolsList
   */
  readonly protocolsList?: FmsProtocolsListData;

  /**
   * @schema FmsGetProtocolsListResponse#ProtocolsListArn
   */
  readonly protocolsListArn?: string;

}

/**
 * Converts an object of type 'FmsGetProtocolsListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetProtocolsListResponse(obj: FmsGetProtocolsListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtocolsList': toJson_FmsProtocolsListData(obj.protocolsList),
    'ProtocolsListArn': obj.protocolsListArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetViolationDetailsRequest
 */
export interface FmsGetViolationDetailsRequest {
  /**
   * @schema FmsGetViolationDetailsRequest#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsGetViolationDetailsRequest#MemberAccount
   */
  readonly memberAccount?: string;

  /**
   * @schema FmsGetViolationDetailsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema FmsGetViolationDetailsRequest#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'FmsGetViolationDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetViolationDetailsRequest(obj: FmsGetViolationDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'MemberAccount': obj.memberAccount,
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsGetViolationDetailsResponse
 */
export interface FmsGetViolationDetailsResponse {
  /**
   * @schema FmsGetViolationDetailsResponse#ViolationDetail
   */
  readonly violationDetail?: FmsViolationDetail;

}

/**
 * Converts an object of type 'FmsGetViolationDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsGetViolationDetailsResponse(obj: FmsGetViolationDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationDetail': toJson_FmsViolationDetail(obj.violationDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsListAppsListsRequest
 */
export interface FmsListAppsListsRequest {
  /**
   * @schema FmsListAppsListsRequest#DefaultLists
   */
  readonly defaultLists?: boolean;

  /**
   * @schema FmsListAppsListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListAppsListsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FmsListAppsListsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListAppsListsRequest(obj: FmsListAppsListsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultLists': obj.defaultLists,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsListAppsListsResponse
 */
export interface FmsListAppsListsResponse {
  /**
   * @schema FmsListAppsListsResponse#AppsLists
   */
  readonly appsLists?: FmsAppsListDataSummary[];

  /**
   * @schema FmsListAppsListsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FmsListAppsListsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListAppsListsResponse(obj: FmsListAppsListsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppsLists': obj.appsLists?.map(y => toJson_FmsAppsListDataSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsListComplianceStatusRequest
 */
export interface FmsListComplianceStatusRequest {
  /**
   * @schema FmsListComplianceStatusRequest#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsListComplianceStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListComplianceStatusRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FmsListComplianceStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListComplianceStatusRequest(obj: FmsListComplianceStatusRequest | undefined): Record<string, any> | undefined {
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
 * @schema FmsListComplianceStatusResponse
 */
export interface FmsListComplianceStatusResponse {
  /**
   * @schema FmsListComplianceStatusResponse#PolicyComplianceStatusList
   */
  readonly policyComplianceStatusList?: FmsPolicyComplianceStatus[];

  /**
   * @schema FmsListComplianceStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FmsListComplianceStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListComplianceStatusResponse(obj: FmsListComplianceStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyComplianceStatusList': obj.policyComplianceStatusList?.map(y => toJson_FmsPolicyComplianceStatus(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsListMemberAccountsRequest
 */
export interface FmsListMemberAccountsRequest {
  /**
   * @schema FmsListMemberAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListMemberAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FmsListMemberAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListMemberAccountsRequest(obj: FmsListMemberAccountsRequest | undefined): Record<string, any> | undefined {
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
 * @schema FmsListMemberAccountsResponse
 */
export interface FmsListMemberAccountsResponse {
  /**
   * @schema FmsListMemberAccountsResponse#MemberAccounts
   */
  readonly memberAccounts?: string[];

  /**
   * @schema FmsListMemberAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FmsListMemberAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListMemberAccountsResponse(obj: FmsListMemberAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberAccounts': obj.memberAccounts?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsListPoliciesRequest
 */
export interface FmsListPoliciesRequest {
  /**
   * @schema FmsListPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FmsListPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListPoliciesRequest(obj: FmsListPoliciesRequest | undefined): Record<string, any> | undefined {
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
 * @schema FmsListPoliciesResponse
 */
export interface FmsListPoliciesResponse {
  /**
   * @schema FmsListPoliciesResponse#PolicyList
   */
  readonly policyList?: FmsPolicySummary[];

  /**
   * @schema FmsListPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FmsListPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListPoliciesResponse(obj: FmsListPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyList': obj.policyList?.map(y => toJson_FmsPolicySummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsListProtocolsListsRequest
 */
export interface FmsListProtocolsListsRequest {
  /**
   * @schema FmsListProtocolsListsRequest#DefaultLists
   */
  readonly defaultLists?: boolean;

  /**
   * @schema FmsListProtocolsListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FmsListProtocolsListsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FmsListProtocolsListsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListProtocolsListsRequest(obj: FmsListProtocolsListsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultLists': obj.defaultLists,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsListProtocolsListsResponse
 */
export interface FmsListProtocolsListsResponse {
  /**
   * @schema FmsListProtocolsListsResponse#ProtocolsLists
   */
  readonly protocolsLists?: FmsProtocolsListDataSummary[];

  /**
   * @schema FmsListProtocolsListsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FmsListProtocolsListsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListProtocolsListsResponse(obj: FmsListProtocolsListsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtocolsLists': obj.protocolsLists?.map(y => toJson_FmsProtocolsListDataSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsListTagsForResourceRequest
 */
export interface FmsListTagsForResourceRequest {
  /**
   * @schema FmsListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'FmsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListTagsForResourceRequest(obj: FmsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsListTagsForResourceResponse
 */
export interface FmsListTagsForResourceResponse {
  /**
   * @schema FmsListTagsForResourceResponse#TagList
   */
  readonly tagList?: FmsTag[];

}

/**
 * Converts an object of type 'FmsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsListTagsForResourceResponse(obj: FmsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_FmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPutAppsListRequest
 */
export interface FmsPutAppsListRequest {
  /**
   * @schema FmsPutAppsListRequest#AppsList
   */
  readonly appsList?: FmsAppsListData;

  /**
   * @schema FmsPutAppsListRequest#TagList
   */
  readonly tagList?: FmsTag[];

}

/**
 * Converts an object of type 'FmsPutAppsListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPutAppsListRequest(obj: FmsPutAppsListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppsList': toJson_FmsAppsListData(obj.appsList),
    'TagList': obj.tagList?.map(y => toJson_FmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPutAppsListResponse
 */
export interface FmsPutAppsListResponse {
  /**
   * @schema FmsPutAppsListResponse#AppsList
   */
  readonly appsList?: FmsAppsListData;

  /**
   * @schema FmsPutAppsListResponse#AppsListArn
   */
  readonly appsListArn?: string;

}

/**
 * Converts an object of type 'FmsPutAppsListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPutAppsListResponse(obj: FmsPutAppsListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppsList': toJson_FmsAppsListData(obj.appsList),
    'AppsListArn': obj.appsListArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPutNotificationChannelRequest
 */
export interface FmsPutNotificationChannelRequest {
  /**
   * @schema FmsPutNotificationChannelRequest#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema FmsPutNotificationChannelRequest#SnsRoleName
   */
  readonly snsRoleName?: string;

}

/**
 * Converts an object of type 'FmsPutNotificationChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPutNotificationChannelRequest(obj: FmsPutNotificationChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnsTopicArn': obj.snsTopicArn,
    'SnsRoleName': obj.snsRoleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPutPolicyRequest
 */
export interface FmsPutPolicyRequest {
  /**
   * @schema FmsPutPolicyRequest#Policy
   */
  readonly policy?: FmsPolicy;

  /**
   * @schema FmsPutPolicyRequest#TagList
   */
  readonly tagList?: FmsTag[];

}

/**
 * Converts an object of type 'FmsPutPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPutPolicyRequest(obj: FmsPutPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_FmsPolicy(obj.policy),
    'TagList': obj.tagList?.map(y => toJson_FmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPutPolicyResponse
 */
export interface FmsPutPolicyResponse {
  /**
   * @schema FmsPutPolicyResponse#Policy
   */
  readonly policy?: FmsPolicy;

  /**
   * @schema FmsPutPolicyResponse#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'FmsPutPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPutPolicyResponse(obj: FmsPutPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_FmsPolicy(obj.policy),
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPutProtocolsListRequest
 */
export interface FmsPutProtocolsListRequest {
  /**
   * @schema FmsPutProtocolsListRequest#ProtocolsList
   */
  readonly protocolsList?: FmsProtocolsListData;

  /**
   * @schema FmsPutProtocolsListRequest#TagList
   */
  readonly tagList?: FmsTag[];

}

/**
 * Converts an object of type 'FmsPutProtocolsListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPutProtocolsListRequest(obj: FmsPutProtocolsListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtocolsList': toJson_FmsProtocolsListData(obj.protocolsList),
    'TagList': obj.tagList?.map(y => toJson_FmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPutProtocolsListResponse
 */
export interface FmsPutProtocolsListResponse {
  /**
   * @schema FmsPutProtocolsListResponse#ProtocolsList
   */
  readonly protocolsList?: FmsProtocolsListData;

  /**
   * @schema FmsPutProtocolsListResponse#ProtocolsListArn
   */
  readonly protocolsListArn?: string;

}

/**
 * Converts an object of type 'FmsPutProtocolsListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPutProtocolsListResponse(obj: FmsPutProtocolsListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtocolsList': toJson_FmsProtocolsListData(obj.protocolsList),
    'ProtocolsListArn': obj.protocolsListArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsTagResourceRequest
 */
export interface FmsTagResourceRequest {
  /**
   * @schema FmsTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema FmsTagResourceRequest#TagList
   */
  readonly tagList?: FmsTag[];

}

/**
 * Converts an object of type 'FmsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsTagResourceRequest(obj: FmsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagList': obj.tagList?.map(y => toJson_FmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsTagResourceResponse
 */
export interface FmsTagResourceResponse {
}

/**
 * Converts an object of type 'FmsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsTagResourceResponse(obj: FmsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsUntagResourceRequest
 */
export interface FmsUntagResourceRequest {
  /**
   * @schema FmsUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema FmsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'FmsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsUntagResourceRequest(obj: FmsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsUntagResourceResponse
 */
export interface FmsUntagResourceResponse {
}

/**
 * Converts an object of type 'FmsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsUntagResourceResponse(obj: FmsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsAppsListData
 */
export interface FmsAppsListData {
  /**
   * @schema FmsAppsListData#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsAppsListData#ListName
   */
  readonly listName?: string;

  /**
   * @schema FmsAppsListData#ListUpdateToken
   */
  readonly listUpdateToken?: string;

  /**
   * @schema FmsAppsListData#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema FmsAppsListData#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema FmsAppsListData#AppsList
   */
  readonly appsList?: FmsApp[];

  /**
   * @schema FmsAppsListData#PreviousAppsList
   */
  readonly previousAppsList?: { [key: string]: FmsApp[] };

}

/**
 * Converts an object of type 'FmsAppsListData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsAppsListData(obj: FmsAppsListData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListId': obj.listId,
    'ListName': obj.listName,
    'ListUpdateToken': obj.listUpdateToken,
    'CreateTime': obj.createTime,
    'LastUpdateTime': obj.lastUpdateTime,
    'AppsList': obj.appsList?.map(y => toJson_FmsApp(y)),
    'PreviousAppsList': ((obj.previousAppsList) === undefined) ? undefined : (Object.entries(obj.previousAppsList).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_FmsApp(y)) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPolicyComplianceDetail
 */
export interface FmsPolicyComplianceDetail {
  /**
   * @schema FmsPolicyComplianceDetail#PolicyOwner
   */
  readonly policyOwner?: string;

  /**
   * @schema FmsPolicyComplianceDetail#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsPolicyComplianceDetail#MemberAccount
   */
  readonly memberAccount?: string;

  /**
   * @schema FmsPolicyComplianceDetail#Violators
   */
  readonly violators?: FmsComplianceViolator[];

  /**
   * @schema FmsPolicyComplianceDetail#EvaluationLimitExceeded
   */
  readonly evaluationLimitExceeded?: boolean;

  /**
   * @schema FmsPolicyComplianceDetail#ExpiredAt
   */
  readonly expiredAt?: string;

  /**
   * @schema FmsPolicyComplianceDetail#IssueInfoMap
   */
  readonly issueInfoMap?: { [key: string]: string };

}

/**
 * Converts an object of type 'FmsPolicyComplianceDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPolicyComplianceDetail(obj: FmsPolicyComplianceDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyOwner': obj.policyOwner,
    'PolicyId': obj.policyId,
    'MemberAccount': obj.memberAccount,
    'Violators': obj.violators?.map(y => toJson_FmsComplianceViolator(y)),
    'EvaluationLimitExceeded': obj.evaluationLimitExceeded,
    'ExpiredAt': obj.expiredAt,
    'IssueInfoMap': ((obj.issueInfoMap) === undefined) ? undefined : (Object.entries(obj.issueInfoMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPolicy
 */
export interface FmsPolicy {
  /**
   * @schema FmsPolicy#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema FmsPolicy#PolicyUpdateToken
   */
  readonly policyUpdateToken?: string;

  /**
   * @schema FmsPolicy#SecurityServicePolicyData
   */
  readonly securityServicePolicyData?: FmsSecurityServicePolicyData;

  /**
   * @schema FmsPolicy#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema FmsPolicy#ResourceTypeList
   */
  readonly resourceTypeList?: string[];

  /**
   * @schema FmsPolicy#ResourceTags
   */
  readonly resourceTags?: FmsResourceTag[];

  /**
   * @schema FmsPolicy#ExcludeResourceTags
   */
  readonly excludeResourceTags?: boolean;

  /**
   * @schema FmsPolicy#RemediationEnabled
   */
  readonly remediationEnabled?: boolean;

  /**
   * @schema FmsPolicy#IncludeMap
   */
  readonly includeMap?: { [key: string]: string[] };

  /**
   * @schema FmsPolicy#ExcludeMap
   */
  readonly excludeMap?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'FmsPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPolicy(obj: FmsPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'PolicyName': obj.policyName,
    'PolicyUpdateToken': obj.policyUpdateToken,
    'SecurityServicePolicyData': toJson_FmsSecurityServicePolicyData(obj.securityServicePolicyData),
    'ResourceType': obj.resourceType,
    'ResourceTypeList': obj.resourceTypeList?.map(y => y),
    'ResourceTags': obj.resourceTags?.map(y => toJson_FmsResourceTag(y)),
    'ExcludeResourceTags': obj.excludeResourceTags,
    'RemediationEnabled': obj.remediationEnabled,
    'IncludeMap': ((obj.includeMap) === undefined) ? undefined : (Object.entries(obj.includeMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'ExcludeMap': ((obj.excludeMap) === undefined) ? undefined : (Object.entries(obj.excludeMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsProtocolsListData
 */
export interface FmsProtocolsListData {
  /**
   * @schema FmsProtocolsListData#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsProtocolsListData#ListName
   */
  readonly listName?: string;

  /**
   * @schema FmsProtocolsListData#ListUpdateToken
   */
  readonly listUpdateToken?: string;

  /**
   * @schema FmsProtocolsListData#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema FmsProtocolsListData#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema FmsProtocolsListData#ProtocolsList
   */
  readonly protocolsList?: string[];

  /**
   * @schema FmsProtocolsListData#PreviousProtocolsList
   */
  readonly previousProtocolsList?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'FmsProtocolsListData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsProtocolsListData(obj: FmsProtocolsListData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListId': obj.listId,
    'ListName': obj.listName,
    'ListUpdateToken': obj.listUpdateToken,
    'CreateTime': obj.createTime,
    'LastUpdateTime': obj.lastUpdateTime,
    'ProtocolsList': obj.protocolsList?.map(y => y),
    'PreviousProtocolsList': ((obj.previousProtocolsList) === undefined) ? undefined : (Object.entries(obj.previousProtocolsList).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsViolationDetail
 */
export interface FmsViolationDetail {
  /**
   * @schema FmsViolationDetail#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsViolationDetail#MemberAccount
   */
  readonly memberAccount?: string;

  /**
   * @schema FmsViolationDetail#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema FmsViolationDetail#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema FmsViolationDetail#ResourceViolations
   */
  readonly resourceViolations?: FmsResourceViolation[];

  /**
   * @schema FmsViolationDetail#ResourceTags
   */
  readonly resourceTags?: FmsTag[];

  /**
   * @schema FmsViolationDetail#ResourceDescription
   */
  readonly resourceDescription?: string;

}

/**
 * Converts an object of type 'FmsViolationDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsViolationDetail(obj: FmsViolationDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'MemberAccount': obj.memberAccount,
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
    'ResourceViolations': obj.resourceViolations?.map(y => toJson_FmsResourceViolation(y)),
    'ResourceTags': obj.resourceTags?.map(y => toJson_FmsTag(y)),
    'ResourceDescription': obj.resourceDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsAppsListDataSummary
 */
export interface FmsAppsListDataSummary {
  /**
   * @schema FmsAppsListDataSummary#ListArn
   */
  readonly listArn?: string;

  /**
   * @schema FmsAppsListDataSummary#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsAppsListDataSummary#ListName
   */
  readonly listName?: string;

  /**
   * @schema FmsAppsListDataSummary#AppsList
   */
  readonly appsList?: FmsApp[];

}

/**
 * Converts an object of type 'FmsAppsListDataSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsAppsListDataSummary(obj: FmsAppsListDataSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListArn': obj.listArn,
    'ListId': obj.listId,
    'ListName': obj.listName,
    'AppsList': obj.appsList?.map(y => toJson_FmsApp(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPolicyComplianceStatus
 */
export interface FmsPolicyComplianceStatus {
  /**
   * @schema FmsPolicyComplianceStatus#PolicyOwner
   */
  readonly policyOwner?: string;

  /**
   * @schema FmsPolicyComplianceStatus#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsPolicyComplianceStatus#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema FmsPolicyComplianceStatus#MemberAccount
   */
  readonly memberAccount?: string;

  /**
   * @schema FmsPolicyComplianceStatus#EvaluationResults
   */
  readonly evaluationResults?: FmsEvaluationResult[];

  /**
   * @schema FmsPolicyComplianceStatus#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema FmsPolicyComplianceStatus#IssueInfoMap
   */
  readonly issueInfoMap?: { [key: string]: string };

}

/**
 * Converts an object of type 'FmsPolicyComplianceStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPolicyComplianceStatus(obj: FmsPolicyComplianceStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyOwner': obj.policyOwner,
    'PolicyId': obj.policyId,
    'PolicyName': obj.policyName,
    'MemberAccount': obj.memberAccount,
    'EvaluationResults': obj.evaluationResults?.map(y => toJson_FmsEvaluationResult(y)),
    'LastUpdated': obj.lastUpdated,
    'IssueInfoMap': ((obj.issueInfoMap) === undefined) ? undefined : (Object.entries(obj.issueInfoMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPolicySummary
 */
export interface FmsPolicySummary {
  /**
   * @schema FmsPolicySummary#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema FmsPolicySummary#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema FmsPolicySummary#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema FmsPolicySummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema FmsPolicySummary#SecurityServiceType
   */
  readonly securityServiceType?: string;

  /**
   * @schema FmsPolicySummary#RemediationEnabled
   */
  readonly remediationEnabled?: boolean;

}

/**
 * Converts an object of type 'FmsPolicySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPolicySummary(obj: FmsPolicySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'PolicyId': obj.policyId,
    'PolicyName': obj.policyName,
    'ResourceType': obj.resourceType,
    'SecurityServiceType': obj.securityServiceType,
    'RemediationEnabled': obj.remediationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsProtocolsListDataSummary
 */
export interface FmsProtocolsListDataSummary {
  /**
   * @schema FmsProtocolsListDataSummary#ListArn
   */
  readonly listArn?: string;

  /**
   * @schema FmsProtocolsListDataSummary#ListId
   */
  readonly listId?: string;

  /**
   * @schema FmsProtocolsListDataSummary#ListName
   */
  readonly listName?: string;

  /**
   * @schema FmsProtocolsListDataSummary#ProtocolsList
   */
  readonly protocolsList?: string[];

}

/**
 * Converts an object of type 'FmsProtocolsListDataSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsProtocolsListDataSummary(obj: FmsProtocolsListDataSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListArn': obj.listArn,
    'ListId': obj.listId,
    'ListName': obj.listName,
    'ProtocolsList': obj.protocolsList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsTag
 */
export interface FmsTag {
  /**
   * @schema FmsTag#Key
   */
  readonly key?: string;

  /**
   * @schema FmsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'FmsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsTag(obj: FmsTag | undefined): Record<string, any> | undefined {
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
 * @schema FmsApp
 */
export interface FmsApp {
  /**
   * @schema FmsApp#AppName
   */
  readonly appName?: string;

  /**
   * @schema FmsApp#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema FmsApp#Port
   */
  readonly port?: number;

}

/**
 * Converts an object of type 'FmsApp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsApp(obj: FmsApp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppName': obj.appName,
    'Protocol': obj.protocol,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsComplianceViolator
 */
export interface FmsComplianceViolator {
  /**
   * @schema FmsComplianceViolator#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema FmsComplianceViolator#ViolationReason
   */
  readonly violationReason?: string;

  /**
   * @schema FmsComplianceViolator#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'FmsComplianceViolator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsComplianceViolator(obj: FmsComplianceViolator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ViolationReason': obj.violationReason,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsSecurityServicePolicyData
 */
export interface FmsSecurityServicePolicyData {
  /**
   * @schema FmsSecurityServicePolicyData#Type
   */
  readonly type?: string;

  /**
   * @schema FmsSecurityServicePolicyData#ManagedServiceData
   */
  readonly managedServiceData?: string;

}

/**
 * Converts an object of type 'FmsSecurityServicePolicyData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsSecurityServicePolicyData(obj: FmsSecurityServicePolicyData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'ManagedServiceData': obj.managedServiceData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsResourceTag
 */
export interface FmsResourceTag {
  /**
   * @schema FmsResourceTag#Key
   */
  readonly key?: string;

  /**
   * @schema FmsResourceTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'FmsResourceTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsResourceTag(obj: FmsResourceTag | undefined): Record<string, any> | undefined {
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
 * @schema FmsResourceViolation
 */
export interface FmsResourceViolation {
  /**
   * @schema FmsResourceViolation#AwsVPCSecurityGroupViolation
   */
  readonly awsVpcSecurityGroupViolation?: FmsAwsVpcSecurityGroupViolation;

  /**
   * @schema FmsResourceViolation#AwsEc2NetworkInterfaceViolation
   */
  readonly awsEc2NetworkInterfaceViolation?: FmsAwsEc2NetworkInterfaceViolation;

  /**
   * @schema FmsResourceViolation#AwsEc2InstanceViolation
   */
  readonly awsEc2InstanceViolation?: FmsAwsEc2InstanceViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallMissingFirewallViolation
   */
  readonly networkFirewallMissingFirewallViolation?: FmsNetworkFirewallMissingFirewallViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallMissingSubnetViolation
   */
  readonly networkFirewallMissingSubnetViolation?: FmsNetworkFirewallMissingSubnetViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallMissingExpectedRTViolation
   */
  readonly networkFirewallMissingExpectedRtViolation?: FmsNetworkFirewallMissingExpectedRtViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallPolicyModifiedViolation
   */
  readonly networkFirewallPolicyModifiedViolation?: FmsNetworkFirewallPolicyModifiedViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallInternetTrafficNotInspectedViolation
   */
  readonly networkFirewallInternetTrafficNotInspectedViolation?: FmsNetworkFirewallInternetTrafficNotInspectedViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallInvalidRouteConfigurationViolation
   */
  readonly networkFirewallInvalidRouteConfigurationViolation?: FmsNetworkFirewallInvalidRouteConfigurationViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallBlackHoleRouteDetectedViolation
   */
  readonly networkFirewallBlackHoleRouteDetectedViolation?: FmsNetworkFirewallBlackHoleRouteDetectedViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallUnexpectedFirewallRoutesViolation
   */
  readonly networkFirewallUnexpectedFirewallRoutesViolation?: FmsNetworkFirewallUnexpectedFirewallRoutesViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallUnexpectedGatewayRoutesViolation
   */
  readonly networkFirewallUnexpectedGatewayRoutesViolation?: FmsNetworkFirewallUnexpectedGatewayRoutesViolation;

  /**
   * @schema FmsResourceViolation#NetworkFirewallMissingExpectedRoutesViolation
   */
  readonly networkFirewallMissingExpectedRoutesViolation?: FmsNetworkFirewallMissingExpectedRoutesViolation;

  /**
   * @schema FmsResourceViolation#DnsRuleGroupPriorityConflictViolation
   */
  readonly dnsRuleGroupPriorityConflictViolation?: FmsDnsRuleGroupPriorityConflictViolation;

  /**
   * @schema FmsResourceViolation#DnsDuplicateRuleGroupViolation
   */
  readonly dnsDuplicateRuleGroupViolation?: FmsDnsDuplicateRuleGroupViolation;

  /**
   * @schema FmsResourceViolation#DnsRuleGroupLimitExceededViolation
   */
  readonly dnsRuleGroupLimitExceededViolation?: FmsDnsRuleGroupLimitExceededViolation;

  /**
   * @schema FmsResourceViolation#PossibleRemediationActions
   */
  readonly possibleRemediationActions?: FmsPossibleRemediationActions;

}

/**
 * Converts an object of type 'FmsResourceViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsResourceViolation(obj: FmsResourceViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsVPCSecurityGroupViolation': toJson_FmsAwsVpcSecurityGroupViolation(obj.awsVpcSecurityGroupViolation),
    'AwsEc2NetworkInterfaceViolation': toJson_FmsAwsEc2NetworkInterfaceViolation(obj.awsEc2NetworkInterfaceViolation),
    'AwsEc2InstanceViolation': toJson_FmsAwsEc2InstanceViolation(obj.awsEc2InstanceViolation),
    'NetworkFirewallMissingFirewallViolation': toJson_FmsNetworkFirewallMissingFirewallViolation(obj.networkFirewallMissingFirewallViolation),
    'NetworkFirewallMissingSubnetViolation': toJson_FmsNetworkFirewallMissingSubnetViolation(obj.networkFirewallMissingSubnetViolation),
    'NetworkFirewallMissingExpectedRTViolation': toJson_FmsNetworkFirewallMissingExpectedRtViolation(obj.networkFirewallMissingExpectedRtViolation),
    'NetworkFirewallPolicyModifiedViolation': toJson_FmsNetworkFirewallPolicyModifiedViolation(obj.networkFirewallPolicyModifiedViolation),
    'NetworkFirewallInternetTrafficNotInspectedViolation': toJson_FmsNetworkFirewallInternetTrafficNotInspectedViolation(obj.networkFirewallInternetTrafficNotInspectedViolation),
    'NetworkFirewallInvalidRouteConfigurationViolation': toJson_FmsNetworkFirewallInvalidRouteConfigurationViolation(obj.networkFirewallInvalidRouteConfigurationViolation),
    'NetworkFirewallBlackHoleRouteDetectedViolation': toJson_FmsNetworkFirewallBlackHoleRouteDetectedViolation(obj.networkFirewallBlackHoleRouteDetectedViolation),
    'NetworkFirewallUnexpectedFirewallRoutesViolation': toJson_FmsNetworkFirewallUnexpectedFirewallRoutesViolation(obj.networkFirewallUnexpectedFirewallRoutesViolation),
    'NetworkFirewallUnexpectedGatewayRoutesViolation': toJson_FmsNetworkFirewallUnexpectedGatewayRoutesViolation(obj.networkFirewallUnexpectedGatewayRoutesViolation),
    'NetworkFirewallMissingExpectedRoutesViolation': toJson_FmsNetworkFirewallMissingExpectedRoutesViolation(obj.networkFirewallMissingExpectedRoutesViolation),
    'DnsRuleGroupPriorityConflictViolation': toJson_FmsDnsRuleGroupPriorityConflictViolation(obj.dnsRuleGroupPriorityConflictViolation),
    'DnsDuplicateRuleGroupViolation': toJson_FmsDnsDuplicateRuleGroupViolation(obj.dnsDuplicateRuleGroupViolation),
    'DnsRuleGroupLimitExceededViolation': toJson_FmsDnsRuleGroupLimitExceededViolation(obj.dnsRuleGroupLimitExceededViolation),
    'PossibleRemediationActions': toJson_FmsPossibleRemediationActions(obj.possibleRemediationActions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsEvaluationResult
 */
export interface FmsEvaluationResult {
  /**
   * @schema FmsEvaluationResult#ComplianceStatus
   */
  readonly complianceStatus?: string;

  /**
   * @schema FmsEvaluationResult#ViolatorCount
   */
  readonly violatorCount?: number;

  /**
   * @schema FmsEvaluationResult#EvaluationLimitExceeded
   */
  readonly evaluationLimitExceeded?: boolean;

}

/**
 * Converts an object of type 'FmsEvaluationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsEvaluationResult(obj: FmsEvaluationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComplianceStatus': obj.complianceStatus,
    'ViolatorCount': obj.violatorCount,
    'EvaluationLimitExceeded': obj.evaluationLimitExceeded,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsAwsVpcSecurityGroupViolation
 */
export interface FmsAwsVpcSecurityGroupViolation {
  /**
   * @schema FmsAwsVpcSecurityGroupViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsAwsVpcSecurityGroupViolation#ViolationTargetDescription
   */
  readonly violationTargetDescription?: string;

  /**
   * @schema FmsAwsVpcSecurityGroupViolation#PartialMatches
   */
  readonly partialMatches?: FmsPartialMatch[];

  /**
   * @schema FmsAwsVpcSecurityGroupViolation#PossibleSecurityGroupRemediationActions
   */
  readonly possibleSecurityGroupRemediationActions?: FmsSecurityGroupRemediationAction[];

}

/**
 * Converts an object of type 'FmsAwsVpcSecurityGroupViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsAwsVpcSecurityGroupViolation(obj: FmsAwsVpcSecurityGroupViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'ViolationTargetDescription': obj.violationTargetDescription,
    'PartialMatches': obj.partialMatches?.map(y => toJson_FmsPartialMatch(y)),
    'PossibleSecurityGroupRemediationActions': obj.possibleSecurityGroupRemediationActions?.map(y => toJson_FmsSecurityGroupRemediationAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsAwsEc2NetworkInterfaceViolation
 */
export interface FmsAwsEc2NetworkInterfaceViolation {
  /**
   * @schema FmsAwsEc2NetworkInterfaceViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsAwsEc2NetworkInterfaceViolation#ViolatingSecurityGroups
   */
  readonly violatingSecurityGroups?: string[];

}

/**
 * Converts an object of type 'FmsAwsEc2NetworkInterfaceViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsAwsEc2NetworkInterfaceViolation(obj: FmsAwsEc2NetworkInterfaceViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'ViolatingSecurityGroups': obj.violatingSecurityGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsAwsEc2InstanceViolation
 */
export interface FmsAwsEc2InstanceViolation {
  /**
   * @schema FmsAwsEc2InstanceViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsAwsEc2InstanceViolation#AwsEc2NetworkInterfaceViolations
   */
  readonly awsEc2NetworkInterfaceViolations?: FmsAwsEc2NetworkInterfaceViolation[];

}

/**
 * Converts an object of type 'FmsAwsEc2InstanceViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsAwsEc2InstanceViolation(obj: FmsAwsEc2InstanceViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'AwsEc2NetworkInterfaceViolations': obj.awsEc2NetworkInterfaceViolations?.map(y => toJson_FmsAwsEc2NetworkInterfaceViolation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallMissingFirewallViolation
 */
export interface FmsNetworkFirewallMissingFirewallViolation {
  /**
   * @schema FmsNetworkFirewallMissingFirewallViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallMissingFirewallViolation#VPC
   */
  readonly vpc?: string;

  /**
   * @schema FmsNetworkFirewallMissingFirewallViolation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema FmsNetworkFirewallMissingFirewallViolation#TargetViolationReason
   */
  readonly targetViolationReason?: string;

}

/**
 * Converts an object of type 'FmsNetworkFirewallMissingFirewallViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallMissingFirewallViolation(obj: FmsNetworkFirewallMissingFirewallViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'VPC': obj.vpc,
    'AvailabilityZone': obj.availabilityZone,
    'TargetViolationReason': obj.targetViolationReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallMissingSubnetViolation
 */
export interface FmsNetworkFirewallMissingSubnetViolation {
  /**
   * @schema FmsNetworkFirewallMissingSubnetViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallMissingSubnetViolation#VPC
   */
  readonly vpc?: string;

  /**
   * @schema FmsNetworkFirewallMissingSubnetViolation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema FmsNetworkFirewallMissingSubnetViolation#TargetViolationReason
   */
  readonly targetViolationReason?: string;

}

/**
 * Converts an object of type 'FmsNetworkFirewallMissingSubnetViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallMissingSubnetViolation(obj: FmsNetworkFirewallMissingSubnetViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'VPC': obj.vpc,
    'AvailabilityZone': obj.availabilityZone,
    'TargetViolationReason': obj.targetViolationReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallMissingExpectedRtViolation
 */
export interface FmsNetworkFirewallMissingExpectedRtViolation {
  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#VPC
   */
  readonly vpc?: string;

  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#CurrentRouteTable
   */
  readonly currentRouteTable?: string;

  /**
   * @schema FmsNetworkFirewallMissingExpectedRtViolation#ExpectedRouteTable
   */
  readonly expectedRouteTable?: string;

}

/**
 * Converts an object of type 'FmsNetworkFirewallMissingExpectedRtViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallMissingExpectedRtViolation(obj: FmsNetworkFirewallMissingExpectedRtViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'VPC': obj.vpc,
    'AvailabilityZone': obj.availabilityZone,
    'CurrentRouteTable': obj.currentRouteTable,
    'ExpectedRouteTable': obj.expectedRouteTable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallPolicyModifiedViolation
 */
export interface FmsNetworkFirewallPolicyModifiedViolation {
  /**
   * @schema FmsNetworkFirewallPolicyModifiedViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallPolicyModifiedViolation#CurrentPolicyDescription
   */
  readonly currentPolicyDescription?: FmsNetworkFirewallPolicyDescription;

  /**
   * @schema FmsNetworkFirewallPolicyModifiedViolation#ExpectedPolicyDescription
   */
  readonly expectedPolicyDescription?: FmsNetworkFirewallPolicyDescription;

}

/**
 * Converts an object of type 'FmsNetworkFirewallPolicyModifiedViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallPolicyModifiedViolation(obj: FmsNetworkFirewallPolicyModifiedViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'CurrentPolicyDescription': toJson_FmsNetworkFirewallPolicyDescription(obj.currentPolicyDescription),
    'ExpectedPolicyDescription': toJson_FmsNetworkFirewallPolicyDescription(obj.expectedPolicyDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation
 */
export interface FmsNetworkFirewallInternetTrafficNotInspectedViolation {
  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: string;

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#RouteTableId
   */
  readonly routeTableId?: string;

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#ViolatingRoutes
   */
  readonly violatingRoutes?: FmsRoute[];

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#IsRouteTableUsedInDifferentAZ
   */
  readonly isRouteTableUsedInDifferentAz?: boolean;

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#CurrentFirewallSubnetRouteTable
   */
  readonly currentFirewallSubnetRouteTable?: string;

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#ExpectedFirewallEndpoint
   */
  readonly expectedFirewallEndpoint?: string;

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#FirewallSubnetId
   */
  readonly firewallSubnetId?: string;

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#ExpectedFirewallSubnetRoutes
   */
  readonly expectedFirewallSubnetRoutes?: FmsExpectedRoute[];

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#ActualFirewallSubnetRoutes
   */
  readonly actualFirewallSubnetRoutes?: FmsRoute[];

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#InternetGatewayId
   */
  readonly internetGatewayId?: string;

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#CurrentInternetGatewayRouteTable
   */
  readonly currentInternetGatewayRouteTable?: string;

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#ExpectedInternetGatewayRoutes
   */
  readonly expectedInternetGatewayRoutes?: FmsExpectedRoute[];

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#ActualInternetGatewayRoutes
   */
  readonly actualInternetGatewayRoutes?: FmsRoute[];

  /**
   * @schema FmsNetworkFirewallInternetTrafficNotInspectedViolation#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'FmsNetworkFirewallInternetTrafficNotInspectedViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallInternetTrafficNotInspectedViolation(obj: FmsNetworkFirewallInternetTrafficNotInspectedViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetId': obj.subnetId,
    'SubnetAvailabilityZone': obj.subnetAvailabilityZone,
    'RouteTableId': obj.routeTableId,
    'ViolatingRoutes': obj.violatingRoutes?.map(y => toJson_FmsRoute(y)),
    'IsRouteTableUsedInDifferentAZ': obj.isRouteTableUsedInDifferentAz,
    'CurrentFirewallSubnetRouteTable': obj.currentFirewallSubnetRouteTable,
    'ExpectedFirewallEndpoint': obj.expectedFirewallEndpoint,
    'FirewallSubnetId': obj.firewallSubnetId,
    'ExpectedFirewallSubnetRoutes': obj.expectedFirewallSubnetRoutes?.map(y => toJson_FmsExpectedRoute(y)),
    'ActualFirewallSubnetRoutes': obj.actualFirewallSubnetRoutes?.map(y => toJson_FmsRoute(y)),
    'InternetGatewayId': obj.internetGatewayId,
    'CurrentInternetGatewayRouteTable': obj.currentInternetGatewayRouteTable,
    'ExpectedInternetGatewayRoutes': obj.expectedInternetGatewayRoutes?.map(y => toJson_FmsExpectedRoute(y)),
    'ActualInternetGatewayRoutes': obj.actualInternetGatewayRoutes?.map(y => toJson_FmsRoute(y)),
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation
 */
export interface FmsNetworkFirewallInvalidRouteConfigurationViolation {
  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#AffectedSubnets
   */
  readonly affectedSubnets?: string[];

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#RouteTableId
   */
  readonly routeTableId?: string;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#IsRouteTableUsedInDifferentAZ
   */
  readonly isRouteTableUsedInDifferentAz?: boolean;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#ViolatingRoute
   */
  readonly violatingRoute?: FmsRoute;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#CurrentFirewallSubnetRouteTable
   */
  readonly currentFirewallSubnetRouteTable?: string;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#ExpectedFirewallEndpoint
   */
  readonly expectedFirewallEndpoint?: string;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#ActualFirewallEndpoint
   */
  readonly actualFirewallEndpoint?: string;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#ExpectedFirewallSubnetId
   */
  readonly expectedFirewallSubnetId?: string;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#ActualFirewallSubnetId
   */
  readonly actualFirewallSubnetId?: string;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#ExpectedFirewallSubnetRoutes
   */
  readonly expectedFirewallSubnetRoutes?: FmsExpectedRoute[];

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#ActualFirewallSubnetRoutes
   */
  readonly actualFirewallSubnetRoutes?: FmsRoute[];

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#InternetGatewayId
   */
  readonly internetGatewayId?: string;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#CurrentInternetGatewayRouteTable
   */
  readonly currentInternetGatewayRouteTable?: string;

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#ExpectedInternetGatewayRoutes
   */
  readonly expectedInternetGatewayRoutes?: FmsExpectedRoute[];

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#ActualInternetGatewayRoutes
   */
  readonly actualInternetGatewayRoutes?: FmsRoute[];

  /**
   * @schema FmsNetworkFirewallInvalidRouteConfigurationViolation#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'FmsNetworkFirewallInvalidRouteConfigurationViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallInvalidRouteConfigurationViolation(obj: FmsNetworkFirewallInvalidRouteConfigurationViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AffectedSubnets': obj.affectedSubnets?.map(y => y),
    'RouteTableId': obj.routeTableId,
    'IsRouteTableUsedInDifferentAZ': obj.isRouteTableUsedInDifferentAz,
    'ViolatingRoute': toJson_FmsRoute(obj.violatingRoute),
    'CurrentFirewallSubnetRouteTable': obj.currentFirewallSubnetRouteTable,
    'ExpectedFirewallEndpoint': obj.expectedFirewallEndpoint,
    'ActualFirewallEndpoint': obj.actualFirewallEndpoint,
    'ExpectedFirewallSubnetId': obj.expectedFirewallSubnetId,
    'ActualFirewallSubnetId': obj.actualFirewallSubnetId,
    'ExpectedFirewallSubnetRoutes': obj.expectedFirewallSubnetRoutes?.map(y => toJson_FmsExpectedRoute(y)),
    'ActualFirewallSubnetRoutes': obj.actualFirewallSubnetRoutes?.map(y => toJson_FmsRoute(y)),
    'InternetGatewayId': obj.internetGatewayId,
    'CurrentInternetGatewayRouteTable': obj.currentInternetGatewayRouteTable,
    'ExpectedInternetGatewayRoutes': obj.expectedInternetGatewayRoutes?.map(y => toJson_FmsExpectedRoute(y)),
    'ActualInternetGatewayRoutes': obj.actualInternetGatewayRoutes?.map(y => toJson_FmsRoute(y)),
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallBlackHoleRouteDetectedViolation
 */
export interface FmsNetworkFirewallBlackHoleRouteDetectedViolation {
  /**
   * @schema FmsNetworkFirewallBlackHoleRouteDetectedViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallBlackHoleRouteDetectedViolation#RouteTableId
   */
  readonly routeTableId?: string;

  /**
   * @schema FmsNetworkFirewallBlackHoleRouteDetectedViolation#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema FmsNetworkFirewallBlackHoleRouteDetectedViolation#ViolatingRoutes
   */
  readonly violatingRoutes?: FmsRoute[];

}

/**
 * Converts an object of type 'FmsNetworkFirewallBlackHoleRouteDetectedViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallBlackHoleRouteDetectedViolation(obj: FmsNetworkFirewallBlackHoleRouteDetectedViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'RouteTableId': obj.routeTableId,
    'VpcId': obj.vpcId,
    'ViolatingRoutes': obj.violatingRoutes?.map(y => toJson_FmsRoute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallUnexpectedFirewallRoutesViolation
 */
export interface FmsNetworkFirewallUnexpectedFirewallRoutesViolation {
  /**
   * @schema FmsNetworkFirewallUnexpectedFirewallRoutesViolation#FirewallSubnetId
   */
  readonly firewallSubnetId?: string;

  /**
   * @schema FmsNetworkFirewallUnexpectedFirewallRoutesViolation#ViolatingRoutes
   */
  readonly violatingRoutes?: FmsRoute[];

  /**
   * @schema FmsNetworkFirewallUnexpectedFirewallRoutesViolation#RouteTableId
   */
  readonly routeTableId?: string;

  /**
   * @schema FmsNetworkFirewallUnexpectedFirewallRoutesViolation#FirewallEndpoint
   */
  readonly firewallEndpoint?: string;

  /**
   * @schema FmsNetworkFirewallUnexpectedFirewallRoutesViolation#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'FmsNetworkFirewallUnexpectedFirewallRoutesViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallUnexpectedFirewallRoutesViolation(obj: FmsNetworkFirewallUnexpectedFirewallRoutesViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirewallSubnetId': obj.firewallSubnetId,
    'ViolatingRoutes': obj.violatingRoutes?.map(y => toJson_FmsRoute(y)),
    'RouteTableId': obj.routeTableId,
    'FirewallEndpoint': obj.firewallEndpoint,
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallUnexpectedGatewayRoutesViolation
 */
export interface FmsNetworkFirewallUnexpectedGatewayRoutesViolation {
  /**
   * @schema FmsNetworkFirewallUnexpectedGatewayRoutesViolation#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema FmsNetworkFirewallUnexpectedGatewayRoutesViolation#ViolatingRoutes
   */
  readonly violatingRoutes?: FmsRoute[];

  /**
   * @schema FmsNetworkFirewallUnexpectedGatewayRoutesViolation#RouteTableId
   */
  readonly routeTableId?: string;

  /**
   * @schema FmsNetworkFirewallUnexpectedGatewayRoutesViolation#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'FmsNetworkFirewallUnexpectedGatewayRoutesViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallUnexpectedGatewayRoutesViolation(obj: FmsNetworkFirewallUnexpectedGatewayRoutesViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayId': obj.gatewayId,
    'ViolatingRoutes': obj.violatingRoutes?.map(y => toJson_FmsRoute(y)),
    'RouteTableId': obj.routeTableId,
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallMissingExpectedRoutesViolation
 */
export interface FmsNetworkFirewallMissingExpectedRoutesViolation {
  /**
   * @schema FmsNetworkFirewallMissingExpectedRoutesViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsNetworkFirewallMissingExpectedRoutesViolation#ExpectedRoutes
   */
  readonly expectedRoutes?: FmsExpectedRoute[];

  /**
   * @schema FmsNetworkFirewallMissingExpectedRoutesViolation#VpcId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'FmsNetworkFirewallMissingExpectedRoutesViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallMissingExpectedRoutesViolation(obj: FmsNetworkFirewallMissingExpectedRoutesViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'ExpectedRoutes': obj.expectedRoutes?.map(y => toJson_FmsExpectedRoute(y)),
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsDnsRuleGroupPriorityConflictViolation
 */
export interface FmsDnsRuleGroupPriorityConflictViolation {
  /**
   * @schema FmsDnsRuleGroupPriorityConflictViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsDnsRuleGroupPriorityConflictViolation#ViolationTargetDescription
   */
  readonly violationTargetDescription?: string;

  /**
   * @schema FmsDnsRuleGroupPriorityConflictViolation#ConflictingPriority
   */
  readonly conflictingPriority?: number;

  /**
   * @schema FmsDnsRuleGroupPriorityConflictViolation#ConflictingPolicyId
   */
  readonly conflictingPolicyId?: string;

  /**
   * @schema FmsDnsRuleGroupPriorityConflictViolation#UnavailablePriorities
   */
  readonly unavailablePriorities?: number[];

}

/**
 * Converts an object of type 'FmsDnsRuleGroupPriorityConflictViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsDnsRuleGroupPriorityConflictViolation(obj: FmsDnsRuleGroupPriorityConflictViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'ViolationTargetDescription': obj.violationTargetDescription,
    'ConflictingPriority': obj.conflictingPriority,
    'ConflictingPolicyId': obj.conflictingPolicyId,
    'UnavailablePriorities': obj.unavailablePriorities?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsDnsDuplicateRuleGroupViolation
 */
export interface FmsDnsDuplicateRuleGroupViolation {
  /**
   * @schema FmsDnsDuplicateRuleGroupViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsDnsDuplicateRuleGroupViolation#ViolationTargetDescription
   */
  readonly violationTargetDescription?: string;

}

/**
 * Converts an object of type 'FmsDnsDuplicateRuleGroupViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsDnsDuplicateRuleGroupViolation(obj: FmsDnsDuplicateRuleGroupViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'ViolationTargetDescription': obj.violationTargetDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsDnsRuleGroupLimitExceededViolation
 */
export interface FmsDnsRuleGroupLimitExceededViolation {
  /**
   * @schema FmsDnsRuleGroupLimitExceededViolation#ViolationTarget
   */
  readonly violationTarget?: string;

  /**
   * @schema FmsDnsRuleGroupLimitExceededViolation#ViolationTargetDescription
   */
  readonly violationTargetDescription?: string;

  /**
   * @schema FmsDnsRuleGroupLimitExceededViolation#NumberOfRuleGroupsAlreadyAssociated
   */
  readonly numberOfRuleGroupsAlreadyAssociated?: number;

}

/**
 * Converts an object of type 'FmsDnsRuleGroupLimitExceededViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsDnsRuleGroupLimitExceededViolation(obj: FmsDnsRuleGroupLimitExceededViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ViolationTarget': obj.violationTarget,
    'ViolationTargetDescription': obj.violationTargetDescription,
    'NumberOfRuleGroupsAlreadyAssociated': obj.numberOfRuleGroupsAlreadyAssociated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPossibleRemediationActions
 */
export interface FmsPossibleRemediationActions {
  /**
   * @schema FmsPossibleRemediationActions#Description
   */
  readonly description?: string;

  /**
   * @schema FmsPossibleRemediationActions#Actions
   */
  readonly actions?: FmsPossibleRemediationAction[];

}

/**
 * Converts an object of type 'FmsPossibleRemediationActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPossibleRemediationActions(obj: FmsPossibleRemediationActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Actions': obj.actions?.map(y => toJson_FmsPossibleRemediationAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPartialMatch
 */
export interface FmsPartialMatch {
  /**
   * @schema FmsPartialMatch#Reference
   */
  readonly reference?: string;

  /**
   * @schema FmsPartialMatch#TargetViolationReasons
   */
  readonly targetViolationReasons?: string[];

}

/**
 * Converts an object of type 'FmsPartialMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPartialMatch(obj: FmsPartialMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Reference': obj.reference,
    'TargetViolationReasons': obj.targetViolationReasons?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsSecurityGroupRemediationAction
 */
export interface FmsSecurityGroupRemediationAction {
  /**
   * @schema FmsSecurityGroupRemediationAction#RemediationActionType
   */
  readonly remediationActionType?: string;

  /**
   * @schema FmsSecurityGroupRemediationAction#Description
   */
  readonly description?: string;

  /**
   * @schema FmsSecurityGroupRemediationAction#RemediationResult
   */
  readonly remediationResult?: FmsSecurityGroupRuleDescription;

  /**
   * @schema FmsSecurityGroupRemediationAction#IsDefaultAction
   */
  readonly isDefaultAction?: boolean;

}

/**
 * Converts an object of type 'FmsSecurityGroupRemediationAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsSecurityGroupRemediationAction(obj: FmsSecurityGroupRemediationAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RemediationActionType': obj.remediationActionType,
    'Description': obj.description,
    'RemediationResult': toJson_FmsSecurityGroupRuleDescription(obj.remediationResult),
    'IsDefaultAction': obj.isDefaultAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsNetworkFirewallPolicyDescription
 */
export interface FmsNetworkFirewallPolicyDescription {
  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatelessRuleGroups
   */
  readonly statelessRuleGroups?: FmsStatelessRuleGroup[];

  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatelessDefaultActions
   */
  readonly statelessDefaultActions?: string[];

  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatelessFragmentDefaultActions
   */
  readonly statelessFragmentDefaultActions?: string[];

  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatelessCustomActions
   */
  readonly statelessCustomActions?: string[];

  /**
   * @schema FmsNetworkFirewallPolicyDescription#StatefulRuleGroups
   */
  readonly statefulRuleGroups?: FmsStatefulRuleGroup[];

}

/**
 * Converts an object of type 'FmsNetworkFirewallPolicyDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsNetworkFirewallPolicyDescription(obj: FmsNetworkFirewallPolicyDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatelessRuleGroups': obj.statelessRuleGroups?.map(y => toJson_FmsStatelessRuleGroup(y)),
    'StatelessDefaultActions': obj.statelessDefaultActions?.map(y => y),
    'StatelessFragmentDefaultActions': obj.statelessFragmentDefaultActions?.map(y => y),
    'StatelessCustomActions': obj.statelessCustomActions?.map(y => y),
    'StatefulRuleGroups': obj.statefulRuleGroups?.map(y => toJson_FmsStatefulRuleGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsRoute
 */
export interface FmsRoute {
  /**
   * @schema FmsRoute#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema FmsRoute#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema FmsRoute#Destination
   */
  readonly destination?: string;

  /**
   * @schema FmsRoute#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'FmsRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsRoute(obj: FmsRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationType': obj.destinationType,
    'TargetType': obj.targetType,
    'Destination': obj.destination,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsExpectedRoute
 */
export interface FmsExpectedRoute {
  /**
   * @schema FmsExpectedRoute#IpV4Cidr
   */
  readonly ipV4Cidr?: string;

  /**
   * @schema FmsExpectedRoute#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema FmsExpectedRoute#IpV6Cidr
   */
  readonly ipV6Cidr?: string;

  /**
   * @schema FmsExpectedRoute#ContributingSubnets
   */
  readonly contributingSubnets?: string[];

  /**
   * @schema FmsExpectedRoute#AllowedTargets
   */
  readonly allowedTargets?: string[];

  /**
   * @schema FmsExpectedRoute#RouteTableId
   */
  readonly routeTableId?: string;

}

/**
 * Converts an object of type 'FmsExpectedRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsExpectedRoute(obj: FmsExpectedRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpV4Cidr': obj.ipV4Cidr,
    'PrefixListId': obj.prefixListId,
    'IpV6Cidr': obj.ipV6Cidr,
    'ContributingSubnets': obj.contributingSubnets?.map(y => y),
    'AllowedTargets': obj.allowedTargets?.map(y => y),
    'RouteTableId': obj.routeTableId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsPossibleRemediationAction
 */
export interface FmsPossibleRemediationAction {
  /**
   * @schema FmsPossibleRemediationAction#Description
   */
  readonly description?: string;

  /**
   * @schema FmsPossibleRemediationAction#OrderedRemediationActions
   */
  readonly orderedRemediationActions?: FmsRemediationActionWithOrder[];

  /**
   * @schema FmsPossibleRemediationAction#IsDefaultAction
   */
  readonly isDefaultAction?: boolean;

}

/**
 * Converts an object of type 'FmsPossibleRemediationAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsPossibleRemediationAction(obj: FmsPossibleRemediationAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'OrderedRemediationActions': obj.orderedRemediationActions?.map(y => toJson_FmsRemediationActionWithOrder(y)),
    'IsDefaultAction': obj.isDefaultAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsSecurityGroupRuleDescription
 */
export interface FmsSecurityGroupRuleDescription {
  /**
   * @schema FmsSecurityGroupRuleDescription#IPV4Range
   */
  readonly ipv4Range?: string;

  /**
   * @schema FmsSecurityGroupRuleDescription#IPV6Range
   */
  readonly ipv6Range?: string;

  /**
   * @schema FmsSecurityGroupRuleDescription#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema FmsSecurityGroupRuleDescription#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema FmsSecurityGroupRuleDescription#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema FmsSecurityGroupRuleDescription#ToPort
   */
  readonly toPort?: number;

}

/**
 * Converts an object of type 'FmsSecurityGroupRuleDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsSecurityGroupRuleDescription(obj: FmsSecurityGroupRuleDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPV4Range': obj.ipv4Range,
    'IPV6Range': obj.ipv6Range,
    'PrefixListId': obj.prefixListId,
    'Protocol': obj.protocol,
    'FromPort': obj.fromPort,
    'ToPort': obj.toPort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsStatelessRuleGroup
 */
export interface FmsStatelessRuleGroup {
  /**
   * @schema FmsStatelessRuleGroup#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema FmsStatelessRuleGroup#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema FmsStatelessRuleGroup#Priority
   */
  readonly priority?: number;

}

/**
 * Converts an object of type 'FmsStatelessRuleGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsStatelessRuleGroup(obj: FmsStatelessRuleGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupName': obj.ruleGroupName,
    'ResourceId': obj.resourceId,
    'Priority': obj.priority,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsStatefulRuleGroup
 */
export interface FmsStatefulRuleGroup {
  /**
   * @schema FmsStatefulRuleGroup#RuleGroupName
   */
  readonly ruleGroupName?: string;

  /**
   * @schema FmsStatefulRuleGroup#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'FmsStatefulRuleGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsStatefulRuleGroup(obj: FmsStatefulRuleGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleGroupName': obj.ruleGroupName,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsRemediationActionWithOrder
 */
export interface FmsRemediationActionWithOrder {
  /**
   * @schema FmsRemediationActionWithOrder#RemediationAction
   */
  readonly remediationAction?: FmsRemediationAction;

  /**
   * @schema FmsRemediationActionWithOrder#Order
   */
  readonly order?: number;

}

/**
 * Converts an object of type 'FmsRemediationActionWithOrder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsRemediationActionWithOrder(obj: FmsRemediationActionWithOrder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RemediationAction': toJson_FmsRemediationAction(obj.remediationAction),
    'Order': obj.order,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsRemediationAction
 */
export interface FmsRemediationAction {
  /**
   * @schema FmsRemediationAction#Description
   */
  readonly description?: string;

  /**
   * @schema FmsRemediationAction#EC2CreateRouteAction
   */
  readonly ec2CreateRouteAction?: Fmsec2CreateRouteAction;

  /**
   * @schema FmsRemediationAction#EC2ReplaceRouteAction
   */
  readonly ec2ReplaceRouteAction?: Fmsec2ReplaceRouteAction;

  /**
   * @schema FmsRemediationAction#EC2DeleteRouteAction
   */
  readonly ec2DeleteRouteAction?: Fmsec2DeleteRouteAction;

  /**
   * @schema FmsRemediationAction#EC2CopyRouteTableAction
   */
  readonly ec2CopyRouteTableAction?: Fmsec2CopyRouteTableAction;

  /**
   * @schema FmsRemediationAction#EC2ReplaceRouteTableAssociationAction
   */
  readonly ec2ReplaceRouteTableAssociationAction?: Fmsec2ReplaceRouteTableAssociationAction;

  /**
   * @schema FmsRemediationAction#EC2AssociateRouteTableAction
   */
  readonly ec2AssociateRouteTableAction?: Fmsec2AssociateRouteTableAction;

  /**
   * @schema FmsRemediationAction#EC2CreateRouteTableAction
   */
  readonly ec2CreateRouteTableAction?: Fmsec2CreateRouteTableAction;

}

/**
 * Converts an object of type 'FmsRemediationAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsRemediationAction(obj: FmsRemediationAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'EC2CreateRouteAction': toJson_Fmsec2CreateRouteAction(obj.ec2CreateRouteAction),
    'EC2ReplaceRouteAction': toJson_Fmsec2ReplaceRouteAction(obj.ec2ReplaceRouteAction),
    'EC2DeleteRouteAction': toJson_Fmsec2DeleteRouteAction(obj.ec2DeleteRouteAction),
    'EC2CopyRouteTableAction': toJson_Fmsec2CopyRouteTableAction(obj.ec2CopyRouteTableAction),
    'EC2ReplaceRouteTableAssociationAction': toJson_Fmsec2ReplaceRouteTableAssociationAction(obj.ec2ReplaceRouteTableAssociationAction),
    'EC2AssociateRouteTableAction': toJson_Fmsec2AssociateRouteTableAction(obj.ec2AssociateRouteTableAction),
    'EC2CreateRouteTableAction': toJson_Fmsec2CreateRouteTableAction(obj.ec2CreateRouteTableAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Fmsec2CreateRouteAction
 */
export interface Fmsec2CreateRouteAction {
  /**
   * @schema Fmsec2CreateRouteAction#Description
   */
  readonly description?: string;

  /**
   * @schema Fmsec2CreateRouteAction#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Fmsec2CreateRouteAction#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema Fmsec2CreateRouteAction#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema Fmsec2CreateRouteAction#VpcEndpointId
   */
  readonly vpcEndpointId?: FmsActionTarget;

  /**
   * @schema Fmsec2CreateRouteAction#GatewayId
   */
  readonly gatewayId?: FmsActionTarget;

  /**
   * @schema Fmsec2CreateRouteAction#RouteTableId
   */
  readonly routeTableId?: FmsActionTarget;

}

/**
 * Converts an object of type 'Fmsec2CreateRouteAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Fmsec2CreateRouteAction(obj: Fmsec2CreateRouteAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'DestinationCidrBlock': obj.destinationCidrBlock,
    'DestinationPrefixListId': obj.destinationPrefixListId,
    'DestinationIpv6CidrBlock': obj.destinationIpv6CidrBlock,
    'VpcEndpointId': toJson_FmsActionTarget(obj.vpcEndpointId),
    'GatewayId': toJson_FmsActionTarget(obj.gatewayId),
    'RouteTableId': toJson_FmsActionTarget(obj.routeTableId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Fmsec2ReplaceRouteAction
 */
export interface Fmsec2ReplaceRouteAction {
  /**
   * @schema Fmsec2ReplaceRouteAction#Description
   */
  readonly description?: string;

  /**
   * @schema Fmsec2ReplaceRouteAction#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Fmsec2ReplaceRouteAction#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema Fmsec2ReplaceRouteAction#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema Fmsec2ReplaceRouteAction#GatewayId
   */
  readonly gatewayId?: FmsActionTarget;

  /**
   * @schema Fmsec2ReplaceRouteAction#RouteTableId
   */
  readonly routeTableId?: FmsActionTarget;

}

/**
 * Converts an object of type 'Fmsec2ReplaceRouteAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Fmsec2ReplaceRouteAction(obj: Fmsec2ReplaceRouteAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'DestinationCidrBlock': obj.destinationCidrBlock,
    'DestinationPrefixListId': obj.destinationPrefixListId,
    'DestinationIpv6CidrBlock': obj.destinationIpv6CidrBlock,
    'GatewayId': toJson_FmsActionTarget(obj.gatewayId),
    'RouteTableId': toJson_FmsActionTarget(obj.routeTableId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Fmsec2DeleteRouteAction
 */
export interface Fmsec2DeleteRouteAction {
  /**
   * @schema Fmsec2DeleteRouteAction#Description
   */
  readonly description?: string;

  /**
   * @schema Fmsec2DeleteRouteAction#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Fmsec2DeleteRouteAction#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema Fmsec2DeleteRouteAction#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema Fmsec2DeleteRouteAction#RouteTableId
   */
  readonly routeTableId?: FmsActionTarget;

}

/**
 * Converts an object of type 'Fmsec2DeleteRouteAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Fmsec2DeleteRouteAction(obj: Fmsec2DeleteRouteAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'DestinationCidrBlock': obj.destinationCidrBlock,
    'DestinationPrefixListId': obj.destinationPrefixListId,
    'DestinationIpv6CidrBlock': obj.destinationIpv6CidrBlock,
    'RouteTableId': toJson_FmsActionTarget(obj.routeTableId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Fmsec2CopyRouteTableAction
 */
export interface Fmsec2CopyRouteTableAction {
  /**
   * @schema Fmsec2CopyRouteTableAction#Description
   */
  readonly description?: string;

  /**
   * @schema Fmsec2CopyRouteTableAction#VpcId
   */
  readonly vpcId?: FmsActionTarget;

  /**
   * @schema Fmsec2CopyRouteTableAction#RouteTableId
   */
  readonly routeTableId?: FmsActionTarget;

}

/**
 * Converts an object of type 'Fmsec2CopyRouteTableAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Fmsec2CopyRouteTableAction(obj: Fmsec2CopyRouteTableAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'VpcId': toJson_FmsActionTarget(obj.vpcId),
    'RouteTableId': toJson_FmsActionTarget(obj.routeTableId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Fmsec2ReplaceRouteTableAssociationAction
 */
export interface Fmsec2ReplaceRouteTableAssociationAction {
  /**
   * @schema Fmsec2ReplaceRouteTableAssociationAction#Description
   */
  readonly description?: string;

  /**
   * @schema Fmsec2ReplaceRouteTableAssociationAction#AssociationId
   */
  readonly associationId?: FmsActionTarget;

  /**
   * @schema Fmsec2ReplaceRouteTableAssociationAction#RouteTableId
   */
  readonly routeTableId?: FmsActionTarget;

}

/**
 * Converts an object of type 'Fmsec2ReplaceRouteTableAssociationAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Fmsec2ReplaceRouteTableAssociationAction(obj: Fmsec2ReplaceRouteTableAssociationAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'AssociationId': toJson_FmsActionTarget(obj.associationId),
    'RouteTableId': toJson_FmsActionTarget(obj.routeTableId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Fmsec2AssociateRouteTableAction
 */
export interface Fmsec2AssociateRouteTableAction {
  /**
   * @schema Fmsec2AssociateRouteTableAction#Description
   */
  readonly description?: string;

  /**
   * @schema Fmsec2AssociateRouteTableAction#RouteTableId
   */
  readonly routeTableId?: FmsActionTarget;

  /**
   * @schema Fmsec2AssociateRouteTableAction#SubnetId
   */
  readonly subnetId?: FmsActionTarget;

  /**
   * @schema Fmsec2AssociateRouteTableAction#GatewayId
   */
  readonly gatewayId?: FmsActionTarget;

}

/**
 * Converts an object of type 'Fmsec2AssociateRouteTableAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Fmsec2AssociateRouteTableAction(obj: Fmsec2AssociateRouteTableAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'RouteTableId': toJson_FmsActionTarget(obj.routeTableId),
    'SubnetId': toJson_FmsActionTarget(obj.subnetId),
    'GatewayId': toJson_FmsActionTarget(obj.gatewayId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Fmsec2CreateRouteTableAction
 */
export interface Fmsec2CreateRouteTableAction {
  /**
   * @schema Fmsec2CreateRouteTableAction#Description
   */
  readonly description?: string;

  /**
   * @schema Fmsec2CreateRouteTableAction#VpcId
   */
  readonly vpcId?: FmsActionTarget;

}

/**
 * Converts an object of type 'Fmsec2CreateRouteTableAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Fmsec2CreateRouteTableAction(obj: Fmsec2CreateRouteTableAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'VpcId': toJson_FmsActionTarget(obj.vpcId),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FmsActionTarget
 */
export interface FmsActionTarget {
  /**
   * @schema FmsActionTarget#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema FmsActionTarget#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'FmsActionTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FmsActionTarget(obj: FmsActionTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
