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
 * @schema SsoGetRoleCredentialsResponse
 */
export interface SsoGetRoleCredentialsResponse {
  /**
   * @schema SsoGetRoleCredentialsResponse#roleCredentials
   */
  readonly roleCredentials?: SsoRoleCredentials;

}

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
 * @schema SsoLogoutRequest
 */
export interface SsoLogoutRequest {
  /**
   * @schema SsoLogoutRequest#accessToken
   */
  readonly accessToken: string;

}

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
