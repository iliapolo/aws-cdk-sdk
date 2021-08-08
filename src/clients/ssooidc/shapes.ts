/**
 * @schema SsooidcCreateTokenRequest
 */
export interface SsooidcCreateTokenRequest {
  /**
   * @schema SsooidcCreateTokenRequest#clientId
   */
  readonly clientId: string;

  /**
   * @schema SsooidcCreateTokenRequest#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema SsooidcCreateTokenRequest#grantType
   */
  readonly grantType: string;

  /**
   * @schema SsooidcCreateTokenRequest#deviceCode
   */
  readonly deviceCode: string;

  /**
   * @schema SsooidcCreateTokenRequest#code
   */
  readonly code?: string;

  /**
   * @schema SsooidcCreateTokenRequest#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema SsooidcCreateTokenRequest#scope
   */
  readonly scope?: string[];

  /**
   * @schema SsooidcCreateTokenRequest#redirectUri
   */
  readonly redirectUri?: string;

}

/**
 * Converts an object of type 'SsooidcCreateTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsooidcCreateTokenRequest(obj: SsooidcCreateTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientId': obj.clientId,
    'clientSecret': obj.clientSecret,
    'grantType': obj.grantType,
    'deviceCode': obj.deviceCode,
    'code': obj.code,
    'refreshToken': obj.refreshToken,
    'scope': obj.scope?.map(y => y),
    'redirectUri': obj.redirectUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsooidcCreateTokenResponse
 */
export interface SsooidcCreateTokenResponse {
  /**
   * @schema SsooidcCreateTokenResponse#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema SsooidcCreateTokenResponse#tokenType
   */
  readonly tokenType?: string;

  /**
   * @schema SsooidcCreateTokenResponse#expiresIn
   */
  readonly expiresIn?: number;

  /**
   * @schema SsooidcCreateTokenResponse#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema SsooidcCreateTokenResponse#idToken
   */
  readonly idToken?: string;

}

/**
 * Converts an object of type 'SsooidcCreateTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsooidcCreateTokenResponse(obj: SsooidcCreateTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessToken': obj.accessToken,
    'tokenType': obj.tokenType,
    'expiresIn': obj.expiresIn,
    'refreshToken': obj.refreshToken,
    'idToken': obj.idToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsooidcRegisterClientRequest
 */
export interface SsooidcRegisterClientRequest {
  /**
   * @schema SsooidcRegisterClientRequest#clientName
   */
  readonly clientName: string;

  /**
   * @schema SsooidcRegisterClientRequest#clientType
   */
  readonly clientType: string;

  /**
   * @schema SsooidcRegisterClientRequest#scopes
   */
  readonly scopes?: string[];

}

/**
 * Converts an object of type 'SsooidcRegisterClientRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsooidcRegisterClientRequest(obj: SsooidcRegisterClientRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientName': obj.clientName,
    'clientType': obj.clientType,
    'scopes': obj.scopes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsooidcRegisterClientResponse
 */
export interface SsooidcRegisterClientResponse {
  /**
   * @schema SsooidcRegisterClientResponse#clientId
   */
  readonly clientId?: string;

  /**
   * @schema SsooidcRegisterClientResponse#clientSecret
   */
  readonly clientSecret?: string;

  /**
   * @schema SsooidcRegisterClientResponse#clientIdIssuedAt
   */
  readonly clientIdIssuedAt?: number;

  /**
   * @schema SsooidcRegisterClientResponse#clientSecretExpiresAt
   */
  readonly clientSecretExpiresAt?: number;

  /**
   * @schema SsooidcRegisterClientResponse#authorizationEndpoint
   */
  readonly authorizationEndpoint?: string;

  /**
   * @schema SsooidcRegisterClientResponse#tokenEndpoint
   */
  readonly tokenEndpoint?: string;

}

/**
 * Converts an object of type 'SsooidcRegisterClientResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsooidcRegisterClientResponse(obj: SsooidcRegisterClientResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientId': obj.clientId,
    'clientSecret': obj.clientSecret,
    'clientIdIssuedAt': obj.clientIdIssuedAt,
    'clientSecretExpiresAt': obj.clientSecretExpiresAt,
    'authorizationEndpoint': obj.authorizationEndpoint,
    'tokenEndpoint': obj.tokenEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsooidcStartDeviceAuthorizationRequest
 */
export interface SsooidcStartDeviceAuthorizationRequest {
  /**
   * @schema SsooidcStartDeviceAuthorizationRequest#clientId
   */
  readonly clientId: string;

  /**
   * @schema SsooidcStartDeviceAuthorizationRequest#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema SsooidcStartDeviceAuthorizationRequest#startUrl
   */
  readonly startUrl: string;

}

/**
 * Converts an object of type 'SsooidcStartDeviceAuthorizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsooidcStartDeviceAuthorizationRequest(obj: SsooidcStartDeviceAuthorizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientId': obj.clientId,
    'clientSecret': obj.clientSecret,
    'startUrl': obj.startUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsooidcStartDeviceAuthorizationResponse
 */
export interface SsooidcStartDeviceAuthorizationResponse {
  /**
   * @schema SsooidcStartDeviceAuthorizationResponse#deviceCode
   */
  readonly deviceCode?: string;

  /**
   * @schema SsooidcStartDeviceAuthorizationResponse#userCode
   */
  readonly userCode?: string;

  /**
   * @schema SsooidcStartDeviceAuthorizationResponse#verificationUri
   */
  readonly verificationUri?: string;

  /**
   * @schema SsooidcStartDeviceAuthorizationResponse#verificationUriComplete
   */
  readonly verificationUriComplete?: string;

  /**
   * @schema SsooidcStartDeviceAuthorizationResponse#expiresIn
   */
  readonly expiresIn?: number;

  /**
   * @schema SsooidcStartDeviceAuthorizationResponse#interval
   */
  readonly interval?: number;

}

/**
 * Converts an object of type 'SsooidcStartDeviceAuthorizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsooidcStartDeviceAuthorizationResponse(obj: SsooidcStartDeviceAuthorizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceCode': obj.deviceCode,
    'userCode': obj.userCode,
    'verificationUri': obj.verificationUri,
    'verificationUriComplete': obj.verificationUriComplete,
    'expiresIn': obj.expiresIn,
    'interval': obj.interval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
