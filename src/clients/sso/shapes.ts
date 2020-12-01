/**
 * @schema GetRoleCredentialsRequest
 */
export interface GetRoleCredentialsRequest {
  /**
   * @schema GetRoleCredentialsRequest#roleName
   */
  readonly roleName: string;

  /**
   * @schema GetRoleCredentialsRequest#accountId
   */
  readonly accountId: string;

  /**
   * @schema GetRoleCredentialsRequest#accessToken
   */
  readonly accessToken: string;

}

/**
 * @schema GetRoleCredentialsResponse
 */
export interface GetRoleCredentialsResponse {
  /**
   * @schema GetRoleCredentialsResponse#roleCredentials
   */
  readonly roleCredentials?: RoleCredentials;

}

/**
 * @schema ListAccountRolesRequest
 */
export interface ListAccountRolesRequest {
  /**
   * @schema ListAccountRolesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountRolesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAccountRolesRequest#accessToken
   */
  readonly accessToken: string;

  /**
   * @schema ListAccountRolesRequest#accountId
   */
  readonly accountId: string;

}

/**
 * @schema ListAccountRolesResponse
 */
export interface ListAccountRolesResponse {
  /**
   * @schema ListAccountRolesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountRolesResponse#roleList
   */
  readonly roleList?: RoleInfo[];

}

/**
 * @schema ListAccountsRequest
 */
export interface ListAccountsRequest {
  /**
   * @schema ListAccountsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAccountsRequest#accessToken
   */
  readonly accessToken: string;

}

/**
 * @schema ListAccountsResponse
 */
export interface ListAccountsResponse {
  /**
   * @schema ListAccountsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountsResponse#accountList
   */
  readonly accountList?: AccountInfo[];

}

/**
 * @schema LogoutRequest
 */
export interface LogoutRequest {
  /**
   * @schema LogoutRequest#accessToken
   */
  readonly accessToken: string;

}

/**
 * @schema RoleCredentials
 */
export interface RoleCredentials {
  /**
   * @schema RoleCredentials#accessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema RoleCredentials#secretAccessKey
   */
  readonly secretAccessKey?: string;

  /**
   * @schema RoleCredentials#sessionToken
   */
  readonly sessionToken?: string;

  /**
   * @schema RoleCredentials#expiration
   */
  readonly expiration?: number;

}

/**
 * @schema RoleInfo
 */
export interface RoleInfo {
  /**
   * @schema RoleInfo#roleName
   */
  readonly roleName?: string;

  /**
   * @schema RoleInfo#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema AccountInfo
 */
export interface AccountInfo {
  /**
   * @schema AccountInfo#accountId
   */
  readonly accountId?: string;

  /**
   * @schema AccountInfo#accountName
   */
  readonly accountName?: string;

  /**
   * @schema AccountInfo#emailAddress
   */
  readonly emailAddress?: string;

}
