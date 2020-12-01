/**
 * @schema DescribeGroupRequest
 */
export interface DescribeGroupRequest {
  /**
   * @schema DescribeGroupRequest#IdentityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema DescribeGroupRequest#GroupId
   */
  readonly groupId: string;

}

/**
 * @schema DescribeGroupResponse
 */
export interface DescribeGroupResponse {
  /**
   * @schema DescribeGroupResponse#GroupId
   */
  readonly groupId: string;

  /**
   * @schema DescribeGroupResponse#DisplayName
   */
  readonly displayName: string;

}

/**
 * @schema DescribeUserRequest
 */
export interface DescribeUserRequest {
  /**
   * @schema DescribeUserRequest#IdentityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema DescribeUserRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema DescribeUserResponse
 */
export interface DescribeUserResponse {
  /**
   * @schema DescribeUserResponse#UserName
   */
  readonly userName: string;

  /**
   * @schema DescribeUserResponse#UserId
   */
  readonly userId: string;

}

/**
 * @schema ListGroupsRequest
 */
export interface ListGroupsRequest {
  /**
   * @schema ListGroupsRequest#IdentityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema ListGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroupsRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListGroupsResponse
 */
export interface ListGroupsResponse {
  /**
   * @schema ListGroupsResponse#Groups
   */
  readonly groups: Group[];

  /**
   * @schema ListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUsersRequest
 */
export interface ListUsersRequest {
  /**
   * @schema ListUsersRequest#IdentityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema ListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUsersRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListUsersResponse
 */
export interface ListUsersResponse {
  /**
   * @schema ListUsersResponse#Users
   */
  readonly users: User[];

  /**
   * @schema ListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#AttributePath
   */
  readonly attributePath: string;

  /**
   * @schema Filter#AttributeValue
   */
  readonly attributeValue: string;

}

/**
 * @schema Group
 */
export interface Group {
  /**
   * @schema Group#GroupId
   */
  readonly groupId: string;

  /**
   * @schema Group#DisplayName
   */
  readonly displayName: string;

}

/**
 * @schema User
 */
export interface User {
  /**
   * @schema User#UserName
   */
  readonly userName: string;

  /**
   * @schema User#UserId
   */
  readonly userId: string;

}
