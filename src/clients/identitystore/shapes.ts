/**
 * @schema IdentityStoreDescribeGroupRequest
 */
export interface IdentityStoreDescribeGroupRequest {
  /**
   * @schema IdentityStoreDescribeGroupRequest#IdentityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema IdentityStoreDescribeGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema IdentityStoreDescribeGroupResponse
 */
export interface IdentityStoreDescribeGroupResponse {
  /**
   * @schema IdentityStoreDescribeGroupResponse#GroupId
   */
  readonly groupId: string;

  /**
   * @schema IdentityStoreDescribeGroupResponse#DisplayName
   */
  readonly displayName: string;

}

/**
 * @schema IdentityStoreDescribeUserRequest
 */
export interface IdentityStoreDescribeUserRequest {
  /**
   * @schema IdentityStoreDescribeUserRequest#IdentityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema IdentityStoreDescribeUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema IdentityStoreDescribeUserResponse
 */
export interface IdentityStoreDescribeUserResponse {
  /**
   * @schema IdentityStoreDescribeUserResponse#UserName
   */
  readonly userName: string;

  /**
   * @schema IdentityStoreDescribeUserResponse#UserId
   */
  readonly userId: string;

}

/**
 * @schema IdentityStoreListGroupsRequest
 */
export interface IdentityStoreListGroupsRequest {
  /**
   * @schema IdentityStoreListGroupsRequest#IdentityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema IdentityStoreListGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IdentityStoreListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IdentityStoreListGroupsRequest#Filters
   */
  readonly filters?: IdentityStoreFilter[];

}

/**
 * @schema IdentityStoreListGroupsResponse
 */
export interface IdentityStoreListGroupsResponse {
  /**
   * @schema IdentityStoreListGroupsResponse#Groups
   */
  readonly groups: IdentityStoreGroup[];

  /**
   * @schema IdentityStoreListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IdentityStoreListUsersRequest
 */
export interface IdentityStoreListUsersRequest {
  /**
   * @schema IdentityStoreListUsersRequest#IdentityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema IdentityStoreListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IdentityStoreListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IdentityStoreListUsersRequest#Filters
   */
  readonly filters?: IdentityStoreFilter[];

}

/**
 * @schema IdentityStoreListUsersResponse
 */
export interface IdentityStoreListUsersResponse {
  /**
   * @schema IdentityStoreListUsersResponse#Users
   */
  readonly users: IdentityStoreUser[];

  /**
   * @schema IdentityStoreListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IdentityStoreFilter
 */
export interface IdentityStoreFilter {
  /**
   * @schema IdentityStoreFilter#AttributePath
   */
  readonly attributePath: string;

  /**
   * @schema IdentityStoreFilter#AttributeValue
   */
  readonly attributeValue: string;

}

/**
 * @schema IdentityStoreGroup
 */
export interface IdentityStoreGroup {
  /**
   * @schema IdentityStoreGroup#GroupId
   */
  readonly groupId: string;

  /**
   * @schema IdentityStoreGroup#DisplayName
   */
  readonly displayName: string;

}

/**
 * @schema IdentityStoreUser
 */
export interface IdentityStoreUser {
  /**
   * @schema IdentityStoreUser#UserName
   */
  readonly userName: string;

  /**
   * @schema IdentityStoreUser#UserId
   */
  readonly userId: string;

}
