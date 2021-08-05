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
