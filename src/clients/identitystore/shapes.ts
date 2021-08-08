/**
 * @schema IdentityStoreDescribeGroupRequest
 */
export interface IdentityStoreDescribeGroupRequest {
  /**
   * @schema IdentityStoreDescribeGroupRequest#IdentityStoreId
   */
  readonly identityStoreId?: string;

  /**
   * @schema IdentityStoreDescribeGroupRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'IdentityStoreDescribeGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreDescribeGroupRequest(obj: IdentityStoreDescribeGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityStoreId': obj.identityStoreId,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreDescribeGroupResponse
 */
export interface IdentityStoreDescribeGroupResponse {
  /**
   * @schema IdentityStoreDescribeGroupResponse#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema IdentityStoreDescribeGroupResponse#DisplayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'IdentityStoreDescribeGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreDescribeGroupResponse(obj: IdentityStoreDescribeGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreDescribeUserRequest
 */
export interface IdentityStoreDescribeUserRequest {
  /**
   * @schema IdentityStoreDescribeUserRequest#IdentityStoreId
   */
  readonly identityStoreId?: string;

  /**
   * @schema IdentityStoreDescribeUserRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'IdentityStoreDescribeUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreDescribeUserRequest(obj: IdentityStoreDescribeUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityStoreId': obj.identityStoreId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreDescribeUserResponse
 */
export interface IdentityStoreDescribeUserResponse {
  /**
   * @schema IdentityStoreDescribeUserResponse#UserName
   */
  readonly userName?: string;

  /**
   * @schema IdentityStoreDescribeUserResponse#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'IdentityStoreDescribeUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreDescribeUserResponse(obj: IdentityStoreDescribeUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreListGroupsRequest
 */
export interface IdentityStoreListGroupsRequest {
  /**
   * @schema IdentityStoreListGroupsRequest#IdentityStoreId
   */
  readonly identityStoreId?: string;

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
 * Converts an object of type 'IdentityStoreListGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreListGroupsRequest(obj: IdentityStoreListGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityStoreId': obj.identityStoreId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_IdentityStoreFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreListGroupsResponse
 */
export interface IdentityStoreListGroupsResponse {
  /**
   * @schema IdentityStoreListGroupsResponse#Groups
   */
  readonly groups?: IdentityStoreGroup[];

  /**
   * @schema IdentityStoreListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IdentityStoreListGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreListGroupsResponse(obj: IdentityStoreListGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Groups': obj.groups?.map(y => toJson_IdentityStoreGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreListUsersRequest
 */
export interface IdentityStoreListUsersRequest {
  /**
   * @schema IdentityStoreListUsersRequest#IdentityStoreId
   */
  readonly identityStoreId?: string;

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
 * Converts an object of type 'IdentityStoreListUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreListUsersRequest(obj: IdentityStoreListUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityStoreId': obj.identityStoreId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_IdentityStoreFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreListUsersResponse
 */
export interface IdentityStoreListUsersResponse {
  /**
   * @schema IdentityStoreListUsersResponse#Users
   */
  readonly users?: IdentityStoreUser[];

  /**
   * @schema IdentityStoreListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IdentityStoreListUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreListUsersResponse(obj: IdentityStoreListUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Users': obj.users?.map(y => toJson_IdentityStoreUser(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreFilter
 */
export interface IdentityStoreFilter {
  /**
   * @schema IdentityStoreFilter#AttributePath
   */
  readonly attributePath?: string;

  /**
   * @schema IdentityStoreFilter#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * Converts an object of type 'IdentityStoreFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreFilter(obj: IdentityStoreFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributePath': obj.attributePath,
    'AttributeValue': obj.attributeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreGroup
 */
export interface IdentityStoreGroup {
  /**
   * @schema IdentityStoreGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema IdentityStoreGroup#DisplayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'IdentityStoreGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreGroup(obj: IdentityStoreGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IdentityStoreUser
 */
export interface IdentityStoreUser {
  /**
   * @schema IdentityStoreUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema IdentityStoreUser#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'IdentityStoreUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IdentityStoreUser(obj: IdentityStoreUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
