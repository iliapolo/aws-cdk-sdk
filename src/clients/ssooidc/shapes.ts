/**
 * @schema CreateTokenRequest
 */
export interface CreateTokenRequest {
  /**
   * @schema CreateTokenRequest#clientId
   */
  readonly clientId: string;

  /**
   * @schema CreateTokenRequest#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema CreateTokenRequest#grantType
   */
  readonly grantType: string;

  /**
   * @schema CreateTokenRequest#deviceCode
   */
  readonly deviceCode: string;

  /**
   * @schema CreateTokenRequest#code
   */
  readonly code?: string;

  /**
   * @schema CreateTokenRequest#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema CreateTokenRequest#scope
   */
  readonly scope?: string[];

  /**
   * @schema CreateTokenRequest#redirectUri
   */
  readonly redirectUri?: string;

}

/**
 * @schema CreateTokenResponse
 */
export interface CreateTokenResponse {
  /**
   * @schema CreateTokenResponse#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema CreateTokenResponse#tokenType
   */
  readonly tokenType?: string;

  /**
   * @schema CreateTokenResponse#expiresIn
   */
  readonly expiresIn?: number;

  /**
   * @schema CreateTokenResponse#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema CreateTokenResponse#idToken
   */
  readonly idToken?: string;

}

/**
 * @schema RegisterClientRequest
 */
export interface RegisterClientRequest {
  /**
   * @schema RegisterClientRequest#clientName
   */
  readonly clientName: string;

  /**
   * @schema RegisterClientRequest#clientType
   */
  readonly clientType: string;

  /**
   * @schema RegisterClientRequest#scopes
   */
  readonly scopes?: string[];

}

/**
 * @schema RegisterClientResponse
 */
export interface RegisterClientResponse {
  /**
   * @schema RegisterClientResponse#clientId
   */
  readonly clientId?: string;

  /**
   * @schema RegisterClientResponse#clientSecret
   */
  readonly clientSecret?: string;

  /**
   * @schema RegisterClientResponse#clientIdIssuedAt
   */
  readonly clientIdIssuedAt?: number;

  /**
   * @schema RegisterClientResponse#clientSecretExpiresAt
   */
  readonly clientSecretExpiresAt?: number;

  /**
   * @schema RegisterClientResponse#authorizationEndpoint
   */
  readonly authorizationEndpoint?: string;

  /**
   * @schema RegisterClientResponse#tokenEndpoint
   */
  readonly tokenEndpoint?: string;

}

/**
 * @schema StartDeviceAuthorizationRequest
 */
export interface StartDeviceAuthorizationRequest {
  /**
   * @schema StartDeviceAuthorizationRequest#clientId
   */
  readonly clientId: string;

  /**
   * @schema StartDeviceAuthorizationRequest#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema StartDeviceAuthorizationRequest#startUrl
   */
  readonly startUrl: string;

}

/**
 * @schema StartDeviceAuthorizationResponse
 */
export interface StartDeviceAuthorizationResponse {
  /**
   * @schema StartDeviceAuthorizationResponse#deviceCode
   */
  readonly deviceCode?: string;

  /**
   * @schema StartDeviceAuthorizationResponse#userCode
   */
  readonly userCode?: string;

  /**
   * @schema StartDeviceAuthorizationResponse#verificationUri
   */
  readonly verificationUri?: string;

  /**
   * @schema StartDeviceAuthorizationResponse#verificationUriComplete
   */
  readonly verificationUriComplete?: string;

  /**
   * @schema StartDeviceAuthorizationResponse#expiresIn
   */
  readonly expiresIn?: number;

  /**
   * @schema StartDeviceAuthorizationResponse#interval
   */
  readonly interval?: number;

}
