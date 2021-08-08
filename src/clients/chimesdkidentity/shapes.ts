/**
 * @schema ChimeSdkIdentityCreateAppInstanceRequest
 */
export interface ChimeSdkIdentityCreateAppInstanceRequest {
  /**
   * @schema ChimeSdkIdentityCreateAppInstanceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceRequest#Tags
   */
  readonly tags?: ChimeSdkIdentityTag[];

}

/**
 * Converts an object of type 'ChimeSdkIdentityCreateAppInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityCreateAppInstanceRequest(obj: ChimeSdkIdentityCreateAppInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Metadata': obj.metadata,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_ChimeSdkIdentityTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityCreateAppInstanceResponse
 */
export interface ChimeSdkIdentityCreateAppInstanceResponse {
  /**
   * @schema ChimeSdkIdentityCreateAppInstanceResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityCreateAppInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityCreateAppInstanceResponse(obj: ChimeSdkIdentityCreateAppInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityCreateAppInstanceAdminRequest
 */
export interface ChimeSdkIdentityCreateAppInstanceAdminRequest {
  /**
   * @schema ChimeSdkIdentityCreateAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn?: string;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityCreateAppInstanceAdminRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityCreateAppInstanceAdminRequest(obj: ChimeSdkIdentityCreateAppInstanceAdminRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdminArn': obj.appInstanceAdminArn,
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityCreateAppInstanceAdminResponse
 */
export interface ChimeSdkIdentityCreateAppInstanceAdminResponse {
  /**
   * @schema ChimeSdkIdentityCreateAppInstanceAdminResponse#AppInstanceAdmin
   */
  readonly appInstanceAdmin?: ChimeSdkIdentityIdentity;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceAdminResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityCreateAppInstanceAdminResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityCreateAppInstanceAdminResponse(obj: ChimeSdkIdentityCreateAppInstanceAdminResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdmin': toJson_ChimeSdkIdentityIdentity(obj.appInstanceAdmin),
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityCreateAppInstanceUserRequest
 */
export interface ChimeSdkIdentityCreateAppInstanceUserRequest {
  /**
   * @schema ChimeSdkIdentityCreateAppInstanceUserRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceUserRequest#AppInstanceUserId
   */
  readonly appInstanceUserId?: string;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceUserRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceUserRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceUserRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeSdkIdentityCreateAppInstanceUserRequest#Tags
   */
  readonly tags?: ChimeSdkIdentityTag[];

}

/**
 * Converts an object of type 'ChimeSdkIdentityCreateAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityCreateAppInstanceUserRequest(obj: ChimeSdkIdentityCreateAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'AppInstanceUserId': obj.appInstanceUserId,
    'Name': obj.name,
    'Metadata': obj.metadata,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_ChimeSdkIdentityTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityCreateAppInstanceUserResponse
 */
export interface ChimeSdkIdentityCreateAppInstanceUserResponse {
  /**
   * @schema ChimeSdkIdentityCreateAppInstanceUserResponse#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityCreateAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityCreateAppInstanceUserResponse(obj: ChimeSdkIdentityCreateAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityDeleteAppInstanceRequest
 */
export interface ChimeSdkIdentityDeleteAppInstanceRequest {
  /**
   * @schema ChimeSdkIdentityDeleteAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityDeleteAppInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityDeleteAppInstanceRequest(obj: ChimeSdkIdentityDeleteAppInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityDeleteAppInstanceAdminRequest
 */
export interface ChimeSdkIdentityDeleteAppInstanceAdminRequest {
  /**
   * @schema ChimeSdkIdentityDeleteAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn?: string;

  /**
   * @schema ChimeSdkIdentityDeleteAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityDeleteAppInstanceAdminRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityDeleteAppInstanceAdminRequest(obj: ChimeSdkIdentityDeleteAppInstanceAdminRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdminArn': obj.appInstanceAdminArn,
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityDeleteAppInstanceUserRequest
 */
export interface ChimeSdkIdentityDeleteAppInstanceUserRequest {
  /**
   * @schema ChimeSdkIdentityDeleteAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityDeleteAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityDeleteAppInstanceUserRequest(obj: ChimeSdkIdentityDeleteAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityDescribeAppInstanceRequest
 */
export interface ChimeSdkIdentityDescribeAppInstanceRequest {
  /**
   * @schema ChimeSdkIdentityDescribeAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityDescribeAppInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityDescribeAppInstanceRequest(obj: ChimeSdkIdentityDescribeAppInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityDescribeAppInstanceResponse
 */
export interface ChimeSdkIdentityDescribeAppInstanceResponse {
  /**
   * @schema ChimeSdkIdentityDescribeAppInstanceResponse#AppInstance
   */
  readonly appInstance?: ChimeSdkIdentityAppInstance;

}

/**
 * Converts an object of type 'ChimeSdkIdentityDescribeAppInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityDescribeAppInstanceResponse(obj: ChimeSdkIdentityDescribeAppInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstance': toJson_ChimeSdkIdentityAppInstance(obj.appInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityDescribeAppInstanceAdminRequest
 */
export interface ChimeSdkIdentityDescribeAppInstanceAdminRequest {
  /**
   * @schema ChimeSdkIdentityDescribeAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn?: string;

  /**
   * @schema ChimeSdkIdentityDescribeAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityDescribeAppInstanceAdminRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityDescribeAppInstanceAdminRequest(obj: ChimeSdkIdentityDescribeAppInstanceAdminRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdminArn': obj.appInstanceAdminArn,
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityDescribeAppInstanceAdminResponse
 */
export interface ChimeSdkIdentityDescribeAppInstanceAdminResponse {
  /**
   * @schema ChimeSdkIdentityDescribeAppInstanceAdminResponse#AppInstanceAdmin
   */
  readonly appInstanceAdmin?: ChimeSdkIdentityAppInstanceAdmin;

}

/**
 * Converts an object of type 'ChimeSdkIdentityDescribeAppInstanceAdminResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityDescribeAppInstanceAdminResponse(obj: ChimeSdkIdentityDescribeAppInstanceAdminResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdmin': toJson_ChimeSdkIdentityAppInstanceAdmin(obj.appInstanceAdmin),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityDescribeAppInstanceUserRequest
 */
export interface ChimeSdkIdentityDescribeAppInstanceUserRequest {
  /**
   * @schema ChimeSdkIdentityDescribeAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityDescribeAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityDescribeAppInstanceUserRequest(obj: ChimeSdkIdentityDescribeAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityDescribeAppInstanceUserResponse
 */
export interface ChimeSdkIdentityDescribeAppInstanceUserResponse {
  /**
   * @schema ChimeSdkIdentityDescribeAppInstanceUserResponse#AppInstanceUser
   */
  readonly appInstanceUser?: ChimeSdkIdentityAppInstanceUser;

}

/**
 * Converts an object of type 'ChimeSdkIdentityDescribeAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityDescribeAppInstanceUserResponse(obj: ChimeSdkIdentityDescribeAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUser': toJson_ChimeSdkIdentityAppInstanceUser(obj.appInstanceUser),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest
 */
export interface ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest {
  /**
   * @schema ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest(obj: ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityGetAppInstanceRetentionSettingsResponse
 */
export interface ChimeSdkIdentityGetAppInstanceRetentionSettingsResponse {
  /**
   * @schema ChimeSdkIdentityGetAppInstanceRetentionSettingsResponse#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: ChimeSdkIdentityAppInstanceRetentionSettings;

  /**
   * @schema ChimeSdkIdentityGetAppInstanceRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityGetAppInstanceRetentionSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityGetAppInstanceRetentionSettingsResponse(obj: ChimeSdkIdentityGetAppInstanceRetentionSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceRetentionSettings': toJson_ChimeSdkIdentityAppInstanceRetentionSettings(obj.appInstanceRetentionSettings),
    'InitiateDeletionTimestamp': obj.initiateDeletionTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityListAppInstanceAdminsRequest
 */
export interface ChimeSdkIdentityListAppInstanceAdminsRequest {
  /**
   * @schema ChimeSdkIdentityListAppInstanceAdminsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityListAppInstanceAdminsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkIdentityListAppInstanceAdminsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityListAppInstanceAdminsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityListAppInstanceAdminsRequest(obj: ChimeSdkIdentityListAppInstanceAdminsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityListAppInstanceAdminsResponse
 */
export interface ChimeSdkIdentityListAppInstanceAdminsResponse {
  /**
   * @schema ChimeSdkIdentityListAppInstanceAdminsResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityListAppInstanceAdminsResponse#AppInstanceAdmins
   */
  readonly appInstanceAdmins?: ChimeSdkIdentityAppInstanceAdminSummary[];

  /**
   * @schema ChimeSdkIdentityListAppInstanceAdminsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityListAppInstanceAdminsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityListAppInstanceAdminsResponse(obj: ChimeSdkIdentityListAppInstanceAdminsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'AppInstanceAdmins': obj.appInstanceAdmins?.map(y => toJson_ChimeSdkIdentityAppInstanceAdminSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityListAppInstanceUsersRequest
 */
export interface ChimeSdkIdentityListAppInstanceUsersRequest {
  /**
   * @schema ChimeSdkIdentityListAppInstanceUsersRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityListAppInstanceUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkIdentityListAppInstanceUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityListAppInstanceUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityListAppInstanceUsersRequest(obj: ChimeSdkIdentityListAppInstanceUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityListAppInstanceUsersResponse
 */
export interface ChimeSdkIdentityListAppInstanceUsersResponse {
  /**
   * @schema ChimeSdkIdentityListAppInstanceUsersResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityListAppInstanceUsersResponse#AppInstanceUsers
   */
  readonly appInstanceUsers?: ChimeSdkIdentityAppInstanceUserSummary[];

  /**
   * @schema ChimeSdkIdentityListAppInstanceUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityListAppInstanceUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityListAppInstanceUsersResponse(obj: ChimeSdkIdentityListAppInstanceUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'AppInstanceUsers': obj.appInstanceUsers?.map(y => toJson_ChimeSdkIdentityAppInstanceUserSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityListAppInstancesRequest
 */
export interface ChimeSdkIdentityListAppInstancesRequest {
  /**
   * @schema ChimeSdkIdentityListAppInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkIdentityListAppInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityListAppInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityListAppInstancesRequest(obj: ChimeSdkIdentityListAppInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityListAppInstancesResponse
 */
export interface ChimeSdkIdentityListAppInstancesResponse {
  /**
   * @schema ChimeSdkIdentityListAppInstancesResponse#AppInstances
   */
  readonly appInstances?: ChimeSdkIdentityAppInstanceSummary[];

  /**
   * @schema ChimeSdkIdentityListAppInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityListAppInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityListAppInstancesResponse(obj: ChimeSdkIdentityListAppInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstances': obj.appInstances?.map(y => toJson_ChimeSdkIdentityAppInstanceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest
 */
export interface ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest {
  /**
   * @schema ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: ChimeSdkIdentityAppInstanceRetentionSettings;

}

/**
 * Converts an object of type 'ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest(obj: ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'AppInstanceRetentionSettings': toJson_ChimeSdkIdentityAppInstanceRetentionSettings(obj.appInstanceRetentionSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityPutAppInstanceRetentionSettingsResponse
 */
export interface ChimeSdkIdentityPutAppInstanceRetentionSettingsResponse {
  /**
   * @schema ChimeSdkIdentityPutAppInstanceRetentionSettingsResponse#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: ChimeSdkIdentityAppInstanceRetentionSettings;

  /**
   * @schema ChimeSdkIdentityPutAppInstanceRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityPutAppInstanceRetentionSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityPutAppInstanceRetentionSettingsResponse(obj: ChimeSdkIdentityPutAppInstanceRetentionSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceRetentionSettings': toJson_ChimeSdkIdentityAppInstanceRetentionSettings(obj.appInstanceRetentionSettings),
    'InitiateDeletionTimestamp': obj.initiateDeletionTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityUpdateAppInstanceRequest
 */
export interface ChimeSdkIdentityUpdateAppInstanceRequest {
  /**
   * @schema ChimeSdkIdentityUpdateAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityUpdateAppInstanceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkIdentityUpdateAppInstanceRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityUpdateAppInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityUpdateAppInstanceRequest(obj: ChimeSdkIdentityUpdateAppInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityUpdateAppInstanceResponse
 */
export interface ChimeSdkIdentityUpdateAppInstanceResponse {
  /**
   * @schema ChimeSdkIdentityUpdateAppInstanceResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityUpdateAppInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityUpdateAppInstanceResponse(obj: ChimeSdkIdentityUpdateAppInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityUpdateAppInstanceUserRequest
 */
export interface ChimeSdkIdentityUpdateAppInstanceUserRequest {
  /**
   * @schema ChimeSdkIdentityUpdateAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeSdkIdentityUpdateAppInstanceUserRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkIdentityUpdateAppInstanceUserRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityUpdateAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityUpdateAppInstanceUserRequest(obj: ChimeSdkIdentityUpdateAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityUpdateAppInstanceUserResponse
 */
export interface ChimeSdkIdentityUpdateAppInstanceUserResponse {
  /**
   * @schema ChimeSdkIdentityUpdateAppInstanceUserResponse#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityUpdateAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityUpdateAppInstanceUserResponse(obj: ChimeSdkIdentityUpdateAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityTag
 */
export interface ChimeSdkIdentityTag {
  /**
   * @schema ChimeSdkIdentityTag#Key
   */
  readonly key?: string;

  /**
   * @schema ChimeSdkIdentityTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityTag(obj: ChimeSdkIdentityTag | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkIdentityIdentity
 */
export interface ChimeSdkIdentityIdentity {
  /**
   * @schema ChimeSdkIdentityIdentity#Arn
   */
  readonly arn?: string;

  /**
   * @schema ChimeSdkIdentityIdentity#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityIdentity(obj: ChimeSdkIdentityIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityAppInstance
 */
export interface ChimeSdkIdentityAppInstance {
  /**
   * @schema ChimeSdkIdentityAppInstance#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityAppInstance#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkIdentityAppInstance#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSdkIdentityAppInstance#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ChimeSdkIdentityAppInstance#Metadata
   */
  readonly metadata?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityAppInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityAppInstance(obj: ChimeSdkIdentityAppInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'Name': obj.name,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'Metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityAppInstanceAdmin
 */
export interface ChimeSdkIdentityAppInstanceAdmin {
  /**
   * @schema ChimeSdkIdentityAppInstanceAdmin#Admin
   */
  readonly admin?: ChimeSdkIdentityIdentity;

  /**
   * @schema ChimeSdkIdentityAppInstanceAdmin#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityAppInstanceAdmin#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityAppInstanceAdmin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityAppInstanceAdmin(obj: ChimeSdkIdentityAppInstanceAdmin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Admin': toJson_ChimeSdkIdentityIdentity(obj.admin),
    'AppInstanceArn': obj.appInstanceArn,
    'CreatedTimestamp': obj.createdTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityAppInstanceUser
 */
export interface ChimeSdkIdentityAppInstanceUser {
  /**
   * @schema ChimeSdkIdentityAppInstanceUser#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeSdkIdentityAppInstanceUser#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkIdentityAppInstanceUser#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkIdentityAppInstanceUser#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSdkIdentityAppInstanceUser#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityAppInstanceUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityAppInstanceUser(obj: ChimeSdkIdentityAppInstanceUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityAppInstanceRetentionSettings
 */
export interface ChimeSdkIdentityAppInstanceRetentionSettings {
  /**
   * @schema ChimeSdkIdentityAppInstanceRetentionSettings#ChannelRetentionSettings
   */
  readonly channelRetentionSettings?: ChimeSdkIdentityChannelRetentionSettings;

}

/**
 * Converts an object of type 'ChimeSdkIdentityAppInstanceRetentionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityAppInstanceRetentionSettings(obj: ChimeSdkIdentityAppInstanceRetentionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelRetentionSettings': toJson_ChimeSdkIdentityChannelRetentionSettings(obj.channelRetentionSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityAppInstanceAdminSummary
 */
export interface ChimeSdkIdentityAppInstanceAdminSummary {
  /**
   * @schema ChimeSdkIdentityAppInstanceAdminSummary#Admin
   */
  readonly admin?: ChimeSdkIdentityIdentity;

}

/**
 * Converts an object of type 'ChimeSdkIdentityAppInstanceAdminSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityAppInstanceAdminSummary(obj: ChimeSdkIdentityAppInstanceAdminSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Admin': toJson_ChimeSdkIdentityIdentity(obj.admin),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityAppInstanceUserSummary
 */
export interface ChimeSdkIdentityAppInstanceUserSummary {
  /**
   * @schema ChimeSdkIdentityAppInstanceUserSummary#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeSdkIdentityAppInstanceUserSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkIdentityAppInstanceUserSummary#Metadata
   */
  readonly metadata?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityAppInstanceUserSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityAppInstanceUserSummary(obj: ChimeSdkIdentityAppInstanceUserSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityAppInstanceSummary
 */
export interface ChimeSdkIdentityAppInstanceSummary {
  /**
   * @schema ChimeSdkIdentityAppInstanceSummary#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkIdentityAppInstanceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkIdentityAppInstanceSummary#Metadata
   */
  readonly metadata?: string;

}

/**
 * Converts an object of type 'ChimeSdkIdentityAppInstanceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityAppInstanceSummary(obj: ChimeSdkIdentityAppInstanceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkIdentityChannelRetentionSettings
 */
export interface ChimeSdkIdentityChannelRetentionSettings {
  /**
   * @schema ChimeSdkIdentityChannelRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * Converts an object of type 'ChimeSdkIdentityChannelRetentionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkIdentityChannelRetentionSettings(obj: ChimeSdkIdentityChannelRetentionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RetentionDays': obj.retentionDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
