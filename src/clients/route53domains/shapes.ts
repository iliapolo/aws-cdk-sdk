/**
 * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest
 */
export interface Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest {
  /**
   * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest(obj: Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse
 */
export interface Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse {
  /**
   * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse(obj: Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest
 */
export interface Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest {
  /**
   * @schema Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest(obj: Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse
 */
export interface Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse {
  /**
   * @schema Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse(obj: Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsCheckDomainAvailabilityRequest
 */
export interface Route53DomainsCheckDomainAvailabilityRequest {
  /**
   * @schema Route53DomainsCheckDomainAvailabilityRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsCheckDomainAvailabilityRequest#IdnLangCode
   */
  readonly idnLangCode?: string;

}

/**
 * Converts an object of type 'Route53DomainsCheckDomainAvailabilityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsCheckDomainAvailabilityRequest(obj: Route53DomainsCheckDomainAvailabilityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'IdnLangCode': obj.idnLangCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsCheckDomainAvailabilityResponse
 */
export interface Route53DomainsCheckDomainAvailabilityResponse {
  /**
   * @schema Route53DomainsCheckDomainAvailabilityResponse#Availability
   */
  readonly availability?: string;

}

/**
 * Converts an object of type 'Route53DomainsCheckDomainAvailabilityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsCheckDomainAvailabilityResponse(obj: Route53DomainsCheckDomainAvailabilityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Availability': obj.availability,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsCheckDomainTransferabilityRequest
 */
export interface Route53DomainsCheckDomainTransferabilityRequest {
  /**
   * @schema Route53DomainsCheckDomainTransferabilityRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsCheckDomainTransferabilityRequest#AuthCode
   */
  readonly authCode?: string;

}

/**
 * Converts an object of type 'Route53DomainsCheckDomainTransferabilityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsCheckDomainTransferabilityRequest(obj: Route53DomainsCheckDomainTransferabilityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AuthCode': obj.authCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsCheckDomainTransferabilityResponse
 */
export interface Route53DomainsCheckDomainTransferabilityResponse {
  /**
   * @schema Route53DomainsCheckDomainTransferabilityResponse#Transferability
   */
  readonly transferability?: Route53DomainsDomainTransferability;

}

/**
 * Converts an object of type 'Route53DomainsCheckDomainTransferabilityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsCheckDomainTransferabilityResponse(obj: Route53DomainsCheckDomainTransferabilityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Transferability': toJson_Route53DomainsDomainTransferability(obj.transferability),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsDeleteTagsForDomainRequest
 */
export interface Route53DomainsDeleteTagsForDomainRequest {
  /**
   * @schema Route53DomainsDeleteTagsForDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsDeleteTagsForDomainRequest#TagsToDelete
   */
  readonly tagsToDelete?: string[];

}

/**
 * Converts an object of type 'Route53DomainsDeleteTagsForDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsDeleteTagsForDomainRequest(obj: Route53DomainsDeleteTagsForDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'TagsToDelete': obj.tagsToDelete?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsDeleteTagsForDomainResponse
 */
export interface Route53DomainsDeleteTagsForDomainResponse {
}

/**
 * Converts an object of type 'Route53DomainsDeleteTagsForDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsDeleteTagsForDomainResponse(obj: Route53DomainsDeleteTagsForDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsDisableDomainAutoRenewRequest
 */
export interface Route53DomainsDisableDomainAutoRenewRequest {
  /**
   * @schema Route53DomainsDisableDomainAutoRenewRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsDisableDomainAutoRenewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsDisableDomainAutoRenewRequest(obj: Route53DomainsDisableDomainAutoRenewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsDisableDomainAutoRenewResponse
 */
export interface Route53DomainsDisableDomainAutoRenewResponse {
}

/**
 * Converts an object of type 'Route53DomainsDisableDomainAutoRenewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsDisableDomainAutoRenewResponse(obj: Route53DomainsDisableDomainAutoRenewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsDisableDomainTransferLockRequest
 */
export interface Route53DomainsDisableDomainTransferLockRequest {
  /**
   * @schema Route53DomainsDisableDomainTransferLockRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsDisableDomainTransferLockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsDisableDomainTransferLockRequest(obj: Route53DomainsDisableDomainTransferLockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsDisableDomainTransferLockResponse
 */
export interface Route53DomainsDisableDomainTransferLockResponse {
  /**
   * @schema Route53DomainsDisableDomainTransferLockResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsDisableDomainTransferLockResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsDisableDomainTransferLockResponse(obj: Route53DomainsDisableDomainTransferLockResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsEnableDomainAutoRenewRequest
 */
export interface Route53DomainsEnableDomainAutoRenewRequest {
  /**
   * @schema Route53DomainsEnableDomainAutoRenewRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsEnableDomainAutoRenewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsEnableDomainAutoRenewRequest(obj: Route53DomainsEnableDomainAutoRenewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsEnableDomainAutoRenewResponse
 */
export interface Route53DomainsEnableDomainAutoRenewResponse {
}

/**
 * Converts an object of type 'Route53DomainsEnableDomainAutoRenewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsEnableDomainAutoRenewResponse(obj: Route53DomainsEnableDomainAutoRenewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsEnableDomainTransferLockRequest
 */
export interface Route53DomainsEnableDomainTransferLockRequest {
  /**
   * @schema Route53DomainsEnableDomainTransferLockRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsEnableDomainTransferLockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsEnableDomainTransferLockRequest(obj: Route53DomainsEnableDomainTransferLockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsEnableDomainTransferLockResponse
 */
export interface Route53DomainsEnableDomainTransferLockResponse {
  /**
   * @schema Route53DomainsEnableDomainTransferLockResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsEnableDomainTransferLockResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsEnableDomainTransferLockResponse(obj: Route53DomainsEnableDomainTransferLockResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsGetContactReachabilityStatusRequest
 */
export interface Route53DomainsGetContactReachabilityStatusRequest {
  /**
   * @schema Route53DomainsGetContactReachabilityStatusRequest#domainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsGetContactReachabilityStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsGetContactReachabilityStatusRequest(obj: Route53DomainsGetContactReachabilityStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsGetContactReachabilityStatusResponse
 */
export interface Route53DomainsGetContactReachabilityStatusResponse {
  /**
   * @schema Route53DomainsGetContactReachabilityStatusResponse#domainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsGetContactReachabilityStatusResponse#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'Route53DomainsGetContactReachabilityStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsGetContactReachabilityStatusResponse(obj: Route53DomainsGetContactReachabilityStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsGetDomainDetailRequest
 */
export interface Route53DomainsGetDomainDetailRequest {
  /**
   * @schema Route53DomainsGetDomainDetailRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsGetDomainDetailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsGetDomainDetailRequest(obj: Route53DomainsGetDomainDetailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsGetDomainDetailResponse
 */
export interface Route53DomainsGetDomainDetailResponse {
  /**
   * @schema Route53DomainsGetDomainDetailResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#Nameservers
   */
  readonly nameservers?: Route53DomainsNameserver[];

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AdminContact
   */
  readonly adminContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistrantContact
   */
  readonly registrantContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#TechContact
   */
  readonly techContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AdminPrivacy
   */
  readonly adminPrivacy?: boolean;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistrantPrivacy
   */
  readonly registrantPrivacy?: boolean;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#TechPrivacy
   */
  readonly techPrivacy?: boolean;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistrarName
   */
  readonly registrarName?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#WhoIsServer
   */
  readonly whoIsServer?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistrarUrl
   */
  readonly registrarUrl?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AbuseContactEmail
   */
  readonly abuseContactEmail?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AbuseContactPhone
   */
  readonly abuseContactPhone?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistryDomainId
   */
  readonly registryDomainId?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#UpdatedDate
   */
  readonly updatedDate?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#Reseller
   */
  readonly reseller?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#DnsSec
   */
  readonly dnsSec?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#StatusList
   */
  readonly statusList?: string[];

}

/**
 * Converts an object of type 'Route53DomainsGetDomainDetailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsGetDomainDetailResponse(obj: Route53DomainsGetDomainDetailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Nameservers': obj.nameservers?.map(y => toJson_Route53DomainsNameserver(y)),
    'AutoRenew': obj.autoRenew,
    'AdminContact': toJson_Route53DomainsContactDetail(obj.adminContact),
    'RegistrantContact': toJson_Route53DomainsContactDetail(obj.registrantContact),
    'TechContact': toJson_Route53DomainsContactDetail(obj.techContact),
    'AdminPrivacy': obj.adminPrivacy,
    'RegistrantPrivacy': obj.registrantPrivacy,
    'TechPrivacy': obj.techPrivacy,
    'RegistrarName': obj.registrarName,
    'WhoIsServer': obj.whoIsServer,
    'RegistrarUrl': obj.registrarUrl,
    'AbuseContactEmail': obj.abuseContactEmail,
    'AbuseContactPhone': obj.abuseContactPhone,
    'RegistryDomainId': obj.registryDomainId,
    'CreationDate': obj.creationDate,
    'UpdatedDate': obj.updatedDate,
    'ExpirationDate': obj.expirationDate,
    'Reseller': obj.reseller,
    'DnsSec': obj.dnsSec,
    'StatusList': obj.statusList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsGetDomainSuggestionsRequest
 */
export interface Route53DomainsGetDomainSuggestionsRequest {
  /**
   * @schema Route53DomainsGetDomainSuggestionsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsGetDomainSuggestionsRequest#SuggestionCount
   */
  readonly suggestionCount?: number;

  /**
   * @schema Route53DomainsGetDomainSuggestionsRequest#OnlyAvailable
   */
  readonly onlyAvailable?: boolean;

}

/**
 * Converts an object of type 'Route53DomainsGetDomainSuggestionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsGetDomainSuggestionsRequest(obj: Route53DomainsGetDomainSuggestionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'SuggestionCount': obj.suggestionCount,
    'OnlyAvailable': obj.onlyAvailable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsGetDomainSuggestionsResponse
 */
export interface Route53DomainsGetDomainSuggestionsResponse {
  /**
   * @schema Route53DomainsGetDomainSuggestionsResponse#SuggestionsList
   */
  readonly suggestionsList?: Route53DomainsDomainSuggestion[];

}

/**
 * Converts an object of type 'Route53DomainsGetDomainSuggestionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsGetDomainSuggestionsResponse(obj: Route53DomainsGetDomainSuggestionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuggestionsList': obj.suggestionsList?.map(y => toJson_Route53DomainsDomainSuggestion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsGetOperationDetailRequest
 */
export interface Route53DomainsGetOperationDetailRequest {
  /**
   * @schema Route53DomainsGetOperationDetailRequest#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsGetOperationDetailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsGetOperationDetailRequest(obj: Route53DomainsGetOperationDetailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsGetOperationDetailResponse
 */
export interface Route53DomainsGetOperationDetailResponse {
  /**
   * @schema Route53DomainsGetOperationDetailResponse#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#Status
   */
  readonly status?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#Message
   */
  readonly message?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#Type
   */
  readonly type?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#SubmittedDate
   */
  readonly submittedDate?: string;

}

/**
 * Converts an object of type 'Route53DomainsGetOperationDetailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsGetOperationDetailResponse(obj: Route53DomainsGetOperationDetailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
    'Status': obj.status,
    'Message': obj.message,
    'DomainName': obj.domainName,
    'Type': obj.type,
    'SubmittedDate': obj.submittedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsListDomainsRequest
 */
export interface Route53DomainsListDomainsRequest {
  /**
   * @schema Route53DomainsListDomainsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53DomainsListDomainsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'Route53DomainsListDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsListDomainsRequest(obj: Route53DomainsListDomainsRequest | undefined): Record<string, any> | undefined {
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
 * @schema Route53DomainsListDomainsResponse
 */
export interface Route53DomainsListDomainsResponse {
  /**
   * @schema Route53DomainsListDomainsResponse#Domains
   */
  readonly domains?: Route53DomainsDomainSummary[];

  /**
   * @schema Route53DomainsListDomainsResponse#NextPageMarker
   */
  readonly nextPageMarker?: string;

}

/**
 * Converts an object of type 'Route53DomainsListDomainsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsListDomainsResponse(obj: Route53DomainsListDomainsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domains': obj.domains?.map(y => toJson_Route53DomainsDomainSummary(y)),
    'NextPageMarker': obj.nextPageMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsListOperationsRequest
 */
export interface Route53DomainsListOperationsRequest {
  /**
   * @schema Route53DomainsListOperationsRequest#SubmittedSince
   */
  readonly submittedSince?: string;

  /**
   * @schema Route53DomainsListOperationsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53DomainsListOperationsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'Route53DomainsListOperationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsListOperationsRequest(obj: Route53DomainsListOperationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubmittedSince': obj.submittedSince,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsListOperationsResponse
 */
export interface Route53DomainsListOperationsResponse {
  /**
   * @schema Route53DomainsListOperationsResponse#Operations
   */
  readonly operations?: Route53DomainsOperationSummary[];

  /**
   * @schema Route53DomainsListOperationsResponse#NextPageMarker
   */
  readonly nextPageMarker?: string;

}

/**
 * Converts an object of type 'Route53DomainsListOperationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsListOperationsResponse(obj: Route53DomainsListOperationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Operations': obj.operations?.map(y => toJson_Route53DomainsOperationSummary(y)),
    'NextPageMarker': obj.nextPageMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsListTagsForDomainRequest
 */
export interface Route53DomainsListTagsForDomainRequest {
  /**
   * @schema Route53DomainsListTagsForDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsListTagsForDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsListTagsForDomainRequest(obj: Route53DomainsListTagsForDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsListTagsForDomainResponse
 */
export interface Route53DomainsListTagsForDomainResponse {
  /**
   * @schema Route53DomainsListTagsForDomainResponse#TagList
   */
  readonly tagList?: Route53DomainsTag[];

}

/**
 * Converts an object of type 'Route53DomainsListTagsForDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsListTagsForDomainResponse(obj: Route53DomainsListTagsForDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_Route53DomainsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsRegisterDomainRequest
 */
export interface Route53DomainsRegisterDomainRequest {
  /**
   * @schema Route53DomainsRegisterDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsRegisterDomainRequest#IdnLangCode
   */
  readonly idnLangCode?: string;

  /**
   * @schema Route53DomainsRegisterDomainRequest#DurationInYears
   */
  readonly durationInYears?: number;

  /**
   * @schema Route53DomainsRegisterDomainRequest#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema Route53DomainsRegisterDomainRequest#AdminContact
   */
  readonly adminContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsRegisterDomainRequest#RegistrantContact
   */
  readonly registrantContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsRegisterDomainRequest#TechContact
   */
  readonly techContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsRegisterDomainRequest#PrivacyProtectAdminContact
   */
  readonly privacyProtectAdminContact?: boolean;

  /**
   * @schema Route53DomainsRegisterDomainRequest#PrivacyProtectRegistrantContact
   */
  readonly privacyProtectRegistrantContact?: boolean;

  /**
   * @schema Route53DomainsRegisterDomainRequest#PrivacyProtectTechContact
   */
  readonly privacyProtectTechContact?: boolean;

}

/**
 * Converts an object of type 'Route53DomainsRegisterDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsRegisterDomainRequest(obj: Route53DomainsRegisterDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'IdnLangCode': obj.idnLangCode,
    'DurationInYears': obj.durationInYears,
    'AutoRenew': obj.autoRenew,
    'AdminContact': toJson_Route53DomainsContactDetail(obj.adminContact),
    'RegistrantContact': toJson_Route53DomainsContactDetail(obj.registrantContact),
    'TechContact': toJson_Route53DomainsContactDetail(obj.techContact),
    'PrivacyProtectAdminContact': obj.privacyProtectAdminContact,
    'PrivacyProtectRegistrantContact': obj.privacyProtectRegistrantContact,
    'PrivacyProtectTechContact': obj.privacyProtectTechContact,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsRegisterDomainResponse
 */
export interface Route53DomainsRegisterDomainResponse {
  /**
   * @schema Route53DomainsRegisterDomainResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsRegisterDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsRegisterDomainResponse(obj: Route53DomainsRegisterDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest
 */
export interface Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest {
  /**
   * @schema Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest(obj: Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse
 */
export interface Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse {
  /**
   * @schema Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse(obj: Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsRenewDomainRequest
 */
export interface Route53DomainsRenewDomainRequest {
  /**
   * @schema Route53DomainsRenewDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsRenewDomainRequest#DurationInYears
   */
  readonly durationInYears?: number;

  /**
   * @schema Route53DomainsRenewDomainRequest#CurrentExpiryYear
   */
  readonly currentExpiryYear?: number;

}

/**
 * Converts an object of type 'Route53DomainsRenewDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsRenewDomainRequest(obj: Route53DomainsRenewDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DurationInYears': obj.durationInYears,
    'CurrentExpiryYear': obj.currentExpiryYear,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsRenewDomainResponse
 */
export interface Route53DomainsRenewDomainResponse {
  /**
   * @schema Route53DomainsRenewDomainResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsRenewDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsRenewDomainResponse(obj: Route53DomainsRenewDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsResendContactReachabilityEmailRequest
 */
export interface Route53DomainsResendContactReachabilityEmailRequest {
  /**
   * @schema Route53DomainsResendContactReachabilityEmailRequest#domainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsResendContactReachabilityEmailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsResendContactReachabilityEmailRequest(obj: Route53DomainsResendContactReachabilityEmailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsResendContactReachabilityEmailResponse
 */
export interface Route53DomainsResendContactReachabilityEmailResponse {
  /**
   * @schema Route53DomainsResendContactReachabilityEmailResponse#domainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsResendContactReachabilityEmailResponse#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Route53DomainsResendContactReachabilityEmailResponse#isAlreadyVerified
   */
  readonly isAlreadyVerified?: boolean;

}

/**
 * Converts an object of type 'Route53DomainsResendContactReachabilityEmailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsResendContactReachabilityEmailResponse(obj: Route53DomainsResendContactReachabilityEmailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'emailAddress': obj.emailAddress,
    'isAlreadyVerified': obj.isAlreadyVerified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsRetrieveDomainAuthCodeRequest
 */
export interface Route53DomainsRetrieveDomainAuthCodeRequest {
  /**
   * @schema Route53DomainsRetrieveDomainAuthCodeRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'Route53DomainsRetrieveDomainAuthCodeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsRetrieveDomainAuthCodeRequest(obj: Route53DomainsRetrieveDomainAuthCodeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsRetrieveDomainAuthCodeResponse
 */
export interface Route53DomainsRetrieveDomainAuthCodeResponse {
  /**
   * @schema Route53DomainsRetrieveDomainAuthCodeResponse#AuthCode
   */
  readonly authCode?: string;

}

/**
 * Converts an object of type 'Route53DomainsRetrieveDomainAuthCodeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsRetrieveDomainAuthCodeResponse(obj: Route53DomainsRetrieveDomainAuthCodeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthCode': obj.authCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsTransferDomainRequest
 */
export interface Route53DomainsTransferDomainRequest {
  /**
   * @schema Route53DomainsTransferDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsTransferDomainRequest#IdnLangCode
   */
  readonly idnLangCode?: string;

  /**
   * @schema Route53DomainsTransferDomainRequest#DurationInYears
   */
  readonly durationInYears?: number;

  /**
   * @schema Route53DomainsTransferDomainRequest#Nameservers
   */
  readonly nameservers?: Route53DomainsNameserver[];

  /**
   * @schema Route53DomainsTransferDomainRequest#AuthCode
   */
  readonly authCode?: string;

  /**
   * @schema Route53DomainsTransferDomainRequest#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema Route53DomainsTransferDomainRequest#AdminContact
   */
  readonly adminContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsTransferDomainRequest#RegistrantContact
   */
  readonly registrantContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsTransferDomainRequest#TechContact
   */
  readonly techContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsTransferDomainRequest#PrivacyProtectAdminContact
   */
  readonly privacyProtectAdminContact?: boolean;

  /**
   * @schema Route53DomainsTransferDomainRequest#PrivacyProtectRegistrantContact
   */
  readonly privacyProtectRegistrantContact?: boolean;

  /**
   * @schema Route53DomainsTransferDomainRequest#PrivacyProtectTechContact
   */
  readonly privacyProtectTechContact?: boolean;

}

/**
 * Converts an object of type 'Route53DomainsTransferDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsTransferDomainRequest(obj: Route53DomainsTransferDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'IdnLangCode': obj.idnLangCode,
    'DurationInYears': obj.durationInYears,
    'Nameservers': obj.nameservers?.map(y => toJson_Route53DomainsNameserver(y)),
    'AuthCode': obj.authCode,
    'AutoRenew': obj.autoRenew,
    'AdminContact': toJson_Route53DomainsContactDetail(obj.adminContact),
    'RegistrantContact': toJson_Route53DomainsContactDetail(obj.registrantContact),
    'TechContact': toJson_Route53DomainsContactDetail(obj.techContact),
    'PrivacyProtectAdminContact': obj.privacyProtectAdminContact,
    'PrivacyProtectRegistrantContact': obj.privacyProtectRegistrantContact,
    'PrivacyProtectTechContact': obj.privacyProtectTechContact,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsTransferDomainResponse
 */
export interface Route53DomainsTransferDomainResponse {
  /**
   * @schema Route53DomainsTransferDomainResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsTransferDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsTransferDomainResponse(obj: Route53DomainsTransferDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsTransferDomainToAnotherAwsAccountRequest
 */
export interface Route53DomainsTransferDomainToAnotherAwsAccountRequest {
  /**
   * @schema Route53DomainsTransferDomainToAnotherAwsAccountRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsTransferDomainToAnotherAwsAccountRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'Route53DomainsTransferDomainToAnotherAwsAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsTransferDomainToAnotherAwsAccountRequest(obj: Route53DomainsTransferDomainToAnotherAwsAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsTransferDomainToAnotherAwsAccountResponse
 */
export interface Route53DomainsTransferDomainToAnotherAwsAccountResponse {
  /**
   * @schema Route53DomainsTransferDomainToAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema Route53DomainsTransferDomainToAnotherAwsAccountResponse#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'Route53DomainsTransferDomainToAnotherAwsAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsTransferDomainToAnotherAwsAccountResponse(obj: Route53DomainsTransferDomainToAnotherAwsAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsUpdateDomainContactRequest
 */
export interface Route53DomainsUpdateDomainContactRequest {
  /**
   * @schema Route53DomainsUpdateDomainContactRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsUpdateDomainContactRequest#AdminContact
   */
  readonly adminContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsUpdateDomainContactRequest#RegistrantContact
   */
  readonly registrantContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsUpdateDomainContactRequest#TechContact
   */
  readonly techContact?: Route53DomainsContactDetail;

}

/**
 * Converts an object of type 'Route53DomainsUpdateDomainContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsUpdateDomainContactRequest(obj: Route53DomainsUpdateDomainContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AdminContact': toJson_Route53DomainsContactDetail(obj.adminContact),
    'RegistrantContact': toJson_Route53DomainsContactDetail(obj.registrantContact),
    'TechContact': toJson_Route53DomainsContactDetail(obj.techContact),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsUpdateDomainContactResponse
 */
export interface Route53DomainsUpdateDomainContactResponse {
  /**
   * @schema Route53DomainsUpdateDomainContactResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsUpdateDomainContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsUpdateDomainContactResponse(obj: Route53DomainsUpdateDomainContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsUpdateDomainContactPrivacyRequest
 */
export interface Route53DomainsUpdateDomainContactPrivacyRequest {
  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyRequest#AdminPrivacy
   */
  readonly adminPrivacy?: boolean;

  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyRequest#RegistrantPrivacy
   */
  readonly registrantPrivacy?: boolean;

  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyRequest#TechPrivacy
   */
  readonly techPrivacy?: boolean;

}

/**
 * Converts an object of type 'Route53DomainsUpdateDomainContactPrivacyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsUpdateDomainContactPrivacyRequest(obj: Route53DomainsUpdateDomainContactPrivacyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AdminPrivacy': obj.adminPrivacy,
    'RegistrantPrivacy': obj.registrantPrivacy,
    'TechPrivacy': obj.techPrivacy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsUpdateDomainContactPrivacyResponse
 */
export interface Route53DomainsUpdateDomainContactPrivacyResponse {
  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsUpdateDomainContactPrivacyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsUpdateDomainContactPrivacyResponse(obj: Route53DomainsUpdateDomainContactPrivacyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsUpdateDomainNameserversRequest
 */
export interface Route53DomainsUpdateDomainNameserversRequest {
  /**
   * @schema Route53DomainsUpdateDomainNameserversRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsUpdateDomainNameserversRequest#FIAuthKey
   */
  readonly fiAuthKey?: string;

  /**
   * @schema Route53DomainsUpdateDomainNameserversRequest#Nameservers
   */
  readonly nameservers?: Route53DomainsNameserver[];

}

/**
 * Converts an object of type 'Route53DomainsUpdateDomainNameserversRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsUpdateDomainNameserversRequest(obj: Route53DomainsUpdateDomainNameserversRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'FIAuthKey': obj.fiAuthKey,
    'Nameservers': obj.nameservers?.map(y => toJson_Route53DomainsNameserver(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsUpdateDomainNameserversResponse
 */
export interface Route53DomainsUpdateDomainNameserversResponse {
  /**
   * @schema Route53DomainsUpdateDomainNameserversResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'Route53DomainsUpdateDomainNameserversResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsUpdateDomainNameserversResponse(obj: Route53DomainsUpdateDomainNameserversResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsUpdateTagsForDomainRequest
 */
export interface Route53DomainsUpdateTagsForDomainRequest {
  /**
   * @schema Route53DomainsUpdateTagsForDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsUpdateTagsForDomainRequest#TagsToUpdate
   */
  readonly tagsToUpdate?: Route53DomainsTag[];

}

/**
 * Converts an object of type 'Route53DomainsUpdateTagsForDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsUpdateTagsForDomainRequest(obj: Route53DomainsUpdateTagsForDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'TagsToUpdate': obj.tagsToUpdate?.map(y => toJson_Route53DomainsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsUpdateTagsForDomainResponse
 */
export interface Route53DomainsUpdateTagsForDomainResponse {
}

/**
 * Converts an object of type 'Route53DomainsUpdateTagsForDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsUpdateTagsForDomainResponse(obj: Route53DomainsUpdateTagsForDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsViewBillingRequest
 */
export interface Route53DomainsViewBillingRequest {
  /**
   * @schema Route53DomainsViewBillingRequest#Start
   */
  readonly start?: string;

  /**
   * @schema Route53DomainsViewBillingRequest#End
   */
  readonly end?: string;

  /**
   * @schema Route53DomainsViewBillingRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53DomainsViewBillingRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'Route53DomainsViewBillingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsViewBillingRequest(obj: Route53DomainsViewBillingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Start': obj.start,
    'End': obj.end,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsViewBillingResponse
 */
export interface Route53DomainsViewBillingResponse {
  /**
   * @schema Route53DomainsViewBillingResponse#NextPageMarker
   */
  readonly nextPageMarker?: string;

  /**
   * @schema Route53DomainsViewBillingResponse#BillingRecords
   */
  readonly billingRecords?: Route53DomainsBillingRecord[];

}

/**
 * Converts an object of type 'Route53DomainsViewBillingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsViewBillingResponse(obj: Route53DomainsViewBillingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextPageMarker': obj.nextPageMarker,
    'BillingRecords': obj.billingRecords?.map(y => toJson_Route53DomainsBillingRecord(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsDomainTransferability
 */
export interface Route53DomainsDomainTransferability {
  /**
   * @schema Route53DomainsDomainTransferability#Transferable
   */
  readonly transferable?: string;

}

/**
 * Converts an object of type 'Route53DomainsDomainTransferability' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsDomainTransferability(obj: Route53DomainsDomainTransferability | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Transferable': obj.transferable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsNameserver
 */
export interface Route53DomainsNameserver {
  /**
   * @schema Route53DomainsNameserver#Name
   */
  readonly name?: string;

  /**
   * @schema Route53DomainsNameserver#GlueIps
   */
  readonly glueIps?: string[];

}

/**
 * Converts an object of type 'Route53DomainsNameserver' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsNameserver(obj: Route53DomainsNameserver | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'GlueIps': obj.glueIps?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsContactDetail
 */
export interface Route53DomainsContactDetail {
  /**
   * @schema Route53DomainsContactDetail#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema Route53DomainsContactDetail#LastName
   */
  readonly lastName?: string;

  /**
   * @schema Route53DomainsContactDetail#ContactType
   */
  readonly contactType?: string;

  /**
   * @schema Route53DomainsContactDetail#OrganizationName
   */
  readonly organizationName?: string;

  /**
   * @schema Route53DomainsContactDetail#AddressLine1
   */
  readonly addressLine1?: string;

  /**
   * @schema Route53DomainsContactDetail#AddressLine2
   */
  readonly addressLine2?: string;

  /**
   * @schema Route53DomainsContactDetail#City
   */
  readonly city?: string;

  /**
   * @schema Route53DomainsContactDetail#State
   */
  readonly state?: string;

  /**
   * @schema Route53DomainsContactDetail#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema Route53DomainsContactDetail#ZipCode
   */
  readonly zipCode?: string;

  /**
   * @schema Route53DomainsContactDetail#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema Route53DomainsContactDetail#Email
   */
  readonly email?: string;

  /**
   * @schema Route53DomainsContactDetail#Fax
   */
  readonly fax?: string;

  /**
   * @schema Route53DomainsContactDetail#ExtraParams
   */
  readonly extraParams?: Route53DomainsExtraParam[];

}

/**
 * Converts an object of type 'Route53DomainsContactDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsContactDetail(obj: Route53DomainsContactDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'ContactType': obj.contactType,
    'OrganizationName': obj.organizationName,
    'AddressLine1': obj.addressLine1,
    'AddressLine2': obj.addressLine2,
    'City': obj.city,
    'State': obj.state,
    'CountryCode': obj.countryCode,
    'ZipCode': obj.zipCode,
    'PhoneNumber': obj.phoneNumber,
    'Email': obj.email,
    'Fax': obj.fax,
    'ExtraParams': obj.extraParams?.map(y => toJson_Route53DomainsExtraParam(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsDomainSuggestion
 */
export interface Route53DomainsDomainSuggestion {
  /**
   * @schema Route53DomainsDomainSuggestion#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsDomainSuggestion#Availability
   */
  readonly availability?: string;

}

/**
 * Converts an object of type 'Route53DomainsDomainSuggestion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsDomainSuggestion(obj: Route53DomainsDomainSuggestion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Availability': obj.availability,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsDomainSummary
 */
export interface Route53DomainsDomainSummary {
  /**
   * @schema Route53DomainsDomainSummary#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsDomainSummary#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema Route53DomainsDomainSummary#TransferLock
   */
  readonly transferLock?: boolean;

  /**
   * @schema Route53DomainsDomainSummary#Expiry
   */
  readonly expiry?: string;

}

/**
 * Converts an object of type 'Route53DomainsDomainSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsDomainSummary(obj: Route53DomainsDomainSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AutoRenew': obj.autoRenew,
    'TransferLock': obj.transferLock,
    'Expiry': obj.expiry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsOperationSummary
 */
export interface Route53DomainsOperationSummary {
  /**
   * @schema Route53DomainsOperationSummary#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema Route53DomainsOperationSummary#Status
   */
  readonly status?: string;

  /**
   * @schema Route53DomainsOperationSummary#Type
   */
  readonly type?: string;

  /**
   * @schema Route53DomainsOperationSummary#SubmittedDate
   */
  readonly submittedDate?: string;

}

/**
 * Converts an object of type 'Route53DomainsOperationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsOperationSummary(obj: Route53DomainsOperationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
    'Status': obj.status,
    'Type': obj.type,
    'SubmittedDate': obj.submittedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsTag
 */
export interface Route53DomainsTag {
  /**
   * @schema Route53DomainsTag#Key
   */
  readonly key?: string;

  /**
   * @schema Route53DomainsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Route53DomainsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsTag(obj: Route53DomainsTag | undefined): Record<string, any> | undefined {
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
 * @schema Route53DomainsBillingRecord
 */
export interface Route53DomainsBillingRecord {
  /**
   * @schema Route53DomainsBillingRecord#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsBillingRecord#Operation
   */
  readonly operation?: string;

  /**
   * @schema Route53DomainsBillingRecord#InvoiceId
   */
  readonly invoiceId?: string;

  /**
   * @schema Route53DomainsBillingRecord#BillDate
   */
  readonly billDate?: string;

  /**
   * @schema Route53DomainsBillingRecord#Price
   */
  readonly price?: number;

}

/**
 * Converts an object of type 'Route53DomainsBillingRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsBillingRecord(obj: Route53DomainsBillingRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Operation': obj.operation,
    'InvoiceId': obj.invoiceId,
    'BillDate': obj.billDate,
    'Price': obj.price,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DomainsExtraParam
 */
export interface Route53DomainsExtraParam {
  /**
   * @schema Route53DomainsExtraParam#Name
   */
  readonly name?: string;

  /**
   * @schema Route53DomainsExtraParam#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Route53DomainsExtraParam' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DomainsExtraParam(obj: Route53DomainsExtraParam | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
