/**
 * @schema SsoGetRoleCredentialsRequest
 */
export interface SsoGetRoleCredentialsRequest {
  /**
   * @schema SsoGetRoleCredentialsRequest#roleName
   */
  readonly roleName: string;

  /**
   * @schema SsoGetRoleCredentialsRequest#accountId
   */
  readonly accountId: string;

  /**
   * @schema SsoGetRoleCredentialsRequest#accessToken
   */
  readonly accessToken: string;

}

/**
 * Converts an object of type 'SsoGetRoleCredentialsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoGetRoleCredentialsRequest(obj: SsoGetRoleCredentialsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleName': obj.roleName,
    'accountId': obj.accountId,
    'accessToken': obj.accessToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoGetRoleCredentialsResponse
 */
export interface SsoGetRoleCredentialsResponse {
  /**
   * @schema SsoGetRoleCredentialsResponse#roleCredentials
   */
  readonly roleCredentials?: SsoRoleCredentials;

}

/**
 * Converts an object of type 'SsoGetRoleCredentialsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoGetRoleCredentialsResponse(obj: SsoGetRoleCredentialsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleCredentials': toJson_SsoRoleCredentials(obj.roleCredentials),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoListAccountRolesRequest
 */
export interface SsoListAccountRolesRequest {
  /**
   * @schema SsoListAccountRolesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoListAccountRolesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoListAccountRolesRequest#accessToken
   */
  readonly accessToken: string;

  /**
   * @schema SsoListAccountRolesRequest#accountId
   */
  readonly accountId: string;

}

/**
 * Converts an object of type 'SsoListAccountRolesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoListAccountRolesRequest(obj: SsoListAccountRolesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'accessToken': obj.accessToken,
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoListAccountRolesResponse
 */
export interface SsoListAccountRolesResponse {
  /**
   * @schema SsoListAccountRolesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoListAccountRolesResponse#roleList
   */
  readonly roleList?: SsoRoleInfo[];

}

/**
 * Converts an object of type 'SsoListAccountRolesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoListAccountRolesResponse(obj: SsoListAccountRolesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'roleList': obj.roleList?.map(y => toJson_SsoRoleInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoListAccountsRequest
 */
export interface SsoListAccountsRequest {
  /**
   * @schema SsoListAccountsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoListAccountsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsoListAccountsRequest#accessToken
   */
  readonly accessToken: string;

}

/**
 * Converts an object of type 'SsoListAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoListAccountsRequest(obj: SsoListAccountsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'accessToken': obj.accessToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoListAccountsResponse
 */
export interface SsoListAccountsResponse {
  /**
   * @schema SsoListAccountsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsoListAccountsResponse#accountList
   */
  readonly accountList?: SsoAccountInfo[];

}

/**
 * Converts an object of type 'SsoListAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoListAccountsResponse(obj: SsoListAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'accountList': obj.accountList?.map(y => toJson_SsoAccountInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoLogoutRequest
 */
export interface SsoLogoutRequest {
  /**
   * @schema SsoLogoutRequest#accessToken
   */
  readonly accessToken: string;

}

/**
 * Converts an object of type 'SsoLogoutRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoLogoutRequest(obj: SsoLogoutRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessToken': obj.accessToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoRoleCredentials
 */
export interface SsoRoleCredentials {
  /**
   * @schema SsoRoleCredentials#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema SsoRoleCredentials#secretAccessKey
   */
  readonly secretAccessKey?: string;

  /**
   * @schema SsoRoleCredentials#sessionToken
   */
  readonly sessionToken?: string;

  /**
   * @schema SsoRoleCredentials#expiration
   */
  readonly expiration?: number;

}

/**
 * Converts an object of type 'SsoRoleCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoRoleCredentials(obj: SsoRoleCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeyId': obj.accessKeyId,
    'secretAccessKey': obj.secretAccessKey,
    'sessionToken': obj.sessionToken,
    'expiration': obj.expiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoRoleInfo
 */
export interface SsoRoleInfo {
  /**
   * @schema SsoRoleInfo#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SsoRoleInfo#accountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'SsoRoleInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoRoleInfo(obj: SsoRoleInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleName': obj.roleName,
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsoAccountInfo
 */
export interface SsoAccountInfo {
  /**
   * @schema SsoAccountInfo#accountId
   */
  readonly accountId?: string;

  /**
   * @schema SsoAccountInfo#accountName
   */
  readonly accountName?: string;

  /**
   * @schema SsoAccountInfo#emailAddress
   */
  readonly emailAddress?: string;

}

/**
 * Converts an object of type 'SsoAccountInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsoAccountInfo(obj: SsoAccountInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'accountName': obj.accountName,
    'emailAddress': obj.emailAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
