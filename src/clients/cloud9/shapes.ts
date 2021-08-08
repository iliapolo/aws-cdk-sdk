/**
 * @schema Cloud9CreateEnvironmentEc2Request
 */
export interface Cloud9CreateEnvironmentEc2Request {
  /**
   * @schema Cloud9CreateEnvironmentEc2Request#name
   */
  readonly name: string;

  /**
   * @schema Cloud9CreateEnvironmentEc2Request#description
   */
  readonly description?: string;

  /**
   * @schema Cloud9CreateEnvironmentEc2Request#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema Cloud9CreateEnvironmentEc2Request#instanceType
   */
  readonly instanceType: string;

  /**
   * @schema Cloud9CreateEnvironmentEc2Request#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Cloud9CreateEnvironmentEc2Request#imageId
   */
  readonly imageId?: string;

  /**
   * @schema Cloud9CreateEnvironmentEc2Request#automaticStopTimeMinutes
   */
  readonly automaticStopTimeMinutes?: number;

  /**
   * @schema Cloud9CreateEnvironmentEc2Request#ownerArn
   */
  readonly ownerArn?: string;

  /**
   * @schema Cloud9CreateEnvironmentEc2Request#tags
   */
  readonly tags?: Cloud9Tag[];

  /**
   * @schema Cloud9CreateEnvironmentEc2Request#connectionType
   */
  readonly connectionType?: string;

}

/**
 * Converts an object of type 'Cloud9CreateEnvironmentEc2Request' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9CreateEnvironmentEc2Request(obj: Cloud9CreateEnvironmentEc2Request | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'clientRequestToken': obj.clientRequestToken,
    'instanceType': obj.instanceType,
    'subnetId': obj.subnetId,
    'imageId': obj.imageId,
    'automaticStopTimeMinutes': obj.automaticStopTimeMinutes,
    'ownerArn': obj.ownerArn,
    'tags': obj.tags?.map(y => toJson_Cloud9Tag(y)),
    'connectionType': obj.connectionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9CreateEnvironmentEc2Result
 */
export interface Cloud9CreateEnvironmentEc2Result {
  /**
   * @schema Cloud9CreateEnvironmentEc2Result#environmentId
   */
  readonly environmentId?: string;

}

/**
 * Converts an object of type 'Cloud9CreateEnvironmentEc2Result' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9CreateEnvironmentEc2Result(obj: Cloud9CreateEnvironmentEc2Result | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9CreateEnvironmentMembershipRequest
 */
export interface Cloud9CreateEnvironmentMembershipRequest {
  /**
   * @schema Cloud9CreateEnvironmentMembershipRequest#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema Cloud9CreateEnvironmentMembershipRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema Cloud9CreateEnvironmentMembershipRequest#permissions
   */
  readonly permissions: string;

}

/**
 * Converts an object of type 'Cloud9CreateEnvironmentMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9CreateEnvironmentMembershipRequest(obj: Cloud9CreateEnvironmentMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
    'userArn': obj.userArn,
    'permissions': obj.permissions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9CreateEnvironmentMembershipResult
 */
export interface Cloud9CreateEnvironmentMembershipResult {
  /**
   * @schema Cloud9CreateEnvironmentMembershipResult#membership
   */
  readonly membership: Cloud9EnvironmentMember;

}

/**
 * Converts an object of type 'Cloud9CreateEnvironmentMembershipResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9CreateEnvironmentMembershipResult(obj: Cloud9CreateEnvironmentMembershipResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'membership': toJson_Cloud9EnvironmentMember(obj.membership),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DeleteEnvironmentRequest
 */
export interface Cloud9DeleteEnvironmentRequest {
  /**
   * @schema Cloud9DeleteEnvironmentRequest#environmentId
   */
  readonly environmentId: string;

}

/**
 * Converts an object of type 'Cloud9DeleteEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DeleteEnvironmentRequest(obj: Cloud9DeleteEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DeleteEnvironmentResult
 */
export interface Cloud9DeleteEnvironmentResult {
}

/**
 * Converts an object of type 'Cloud9DeleteEnvironmentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DeleteEnvironmentResult(obj: Cloud9DeleteEnvironmentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DeleteEnvironmentMembershipRequest
 */
export interface Cloud9DeleteEnvironmentMembershipRequest {
  /**
   * @schema Cloud9DeleteEnvironmentMembershipRequest#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema Cloud9DeleteEnvironmentMembershipRequest#userArn
   */
  readonly userArn: string;

}

/**
 * Converts an object of type 'Cloud9DeleteEnvironmentMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DeleteEnvironmentMembershipRequest(obj: Cloud9DeleteEnvironmentMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
    'userArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DeleteEnvironmentMembershipResult
 */
export interface Cloud9DeleteEnvironmentMembershipResult {
}

/**
 * Converts an object of type 'Cloud9DeleteEnvironmentMembershipResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DeleteEnvironmentMembershipResult(obj: Cloud9DeleteEnvironmentMembershipResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DescribeEnvironmentMembershipsRequest
 */
export interface Cloud9DescribeEnvironmentMembershipsRequest {
  /**
   * @schema Cloud9DescribeEnvironmentMembershipsRequest#userArn
   */
  readonly userArn?: string;

  /**
   * @schema Cloud9DescribeEnvironmentMembershipsRequest#environmentId
   */
  readonly environmentId?: string;

  /**
   * @schema Cloud9DescribeEnvironmentMembershipsRequest#permissions
   */
  readonly permissions?: string[];

  /**
   * @schema Cloud9DescribeEnvironmentMembershipsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Cloud9DescribeEnvironmentMembershipsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'Cloud9DescribeEnvironmentMembershipsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DescribeEnvironmentMembershipsRequest(obj: Cloud9DescribeEnvironmentMembershipsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'environmentId': obj.environmentId,
    'permissions': obj.permissions?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DescribeEnvironmentMembershipsResult
 */
export interface Cloud9DescribeEnvironmentMembershipsResult {
  /**
   * @schema Cloud9DescribeEnvironmentMembershipsResult#memberships
   */
  readonly memberships?: Cloud9EnvironmentMember[];

  /**
   * @schema Cloud9DescribeEnvironmentMembershipsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Cloud9DescribeEnvironmentMembershipsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DescribeEnvironmentMembershipsResult(obj: Cloud9DescribeEnvironmentMembershipsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'memberships': obj.memberships?.map(y => toJson_Cloud9EnvironmentMember(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DescribeEnvironmentStatusRequest
 */
export interface Cloud9DescribeEnvironmentStatusRequest {
  /**
   * @schema Cloud9DescribeEnvironmentStatusRequest#environmentId
   */
  readonly environmentId: string;

}

/**
 * Converts an object of type 'Cloud9DescribeEnvironmentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DescribeEnvironmentStatusRequest(obj: Cloud9DescribeEnvironmentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DescribeEnvironmentStatusResult
 */
export interface Cloud9DescribeEnvironmentStatusResult {
  /**
   * @schema Cloud9DescribeEnvironmentStatusResult#status
   */
  readonly status: string;

  /**
   * @schema Cloud9DescribeEnvironmentStatusResult#message
   */
  readonly message: string;

}

/**
 * Converts an object of type 'Cloud9DescribeEnvironmentStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DescribeEnvironmentStatusResult(obj: Cloud9DescribeEnvironmentStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DescribeEnvironmentsRequest
 */
export interface Cloud9DescribeEnvironmentsRequest {
  /**
   * @schema Cloud9DescribeEnvironmentsRequest#environmentIds
   */
  readonly environmentIds: string[];

}

/**
 * Converts an object of type 'Cloud9DescribeEnvironmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DescribeEnvironmentsRequest(obj: Cloud9DescribeEnvironmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentIds': obj.environmentIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9DescribeEnvironmentsResult
 */
export interface Cloud9DescribeEnvironmentsResult {
  /**
   * @schema Cloud9DescribeEnvironmentsResult#environments
   */
  readonly environments?: Cloud9Environment[];

}

/**
 * Converts an object of type 'Cloud9DescribeEnvironmentsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9DescribeEnvironmentsResult(obj: Cloud9DescribeEnvironmentsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environments': obj.environments?.map(y => toJson_Cloud9Environment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9ListEnvironmentsRequest
 */
export interface Cloud9ListEnvironmentsRequest {
  /**
   * @schema Cloud9ListEnvironmentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Cloud9ListEnvironmentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'Cloud9ListEnvironmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9ListEnvironmentsRequest(obj: Cloud9ListEnvironmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9ListEnvironmentsResult
 */
export interface Cloud9ListEnvironmentsResult {
  /**
   * @schema Cloud9ListEnvironmentsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Cloud9ListEnvironmentsResult#environmentIds
   */
  readonly environmentIds?: string[];

}

/**
 * Converts an object of type 'Cloud9ListEnvironmentsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9ListEnvironmentsResult(obj: Cloud9ListEnvironmentsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'environmentIds': obj.environmentIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9ListTagsForResourceRequest
 */
export interface Cloud9ListTagsForResourceRequest {
  /**
   * @schema Cloud9ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Cloud9ListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9ListTagsForResourceRequest(obj: Cloud9ListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9ListTagsForResourceResponse
 */
export interface Cloud9ListTagsForResourceResponse {
  /**
   * @schema Cloud9ListTagsForResourceResponse#Tags
   */
  readonly tags?: Cloud9Tag[];

}

/**
 * Converts an object of type 'Cloud9ListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9ListTagsForResourceResponse(obj: Cloud9ListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_Cloud9Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9TagResourceRequest
 */
export interface Cloud9TagResourceRequest {
  /**
   * @schema Cloud9TagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema Cloud9TagResourceRequest#Tags
   */
  readonly tags?: Cloud9Tag[];

}

/**
 * Converts an object of type 'Cloud9TagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9TagResourceRequest(obj: Cloud9TagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_Cloud9Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9TagResourceResponse
 */
export interface Cloud9TagResourceResponse {
}

/**
 * Converts an object of type 'Cloud9TagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9TagResourceResponse(obj: Cloud9TagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9UntagResourceRequest
 */
export interface Cloud9UntagResourceRequest {
  /**
   * @schema Cloud9UntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema Cloud9UntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'Cloud9UntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9UntagResourceRequest(obj: Cloud9UntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9UntagResourceResponse
 */
export interface Cloud9UntagResourceResponse {
}

/**
 * Converts an object of type 'Cloud9UntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9UntagResourceResponse(obj: Cloud9UntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9UpdateEnvironmentRequest
 */
export interface Cloud9UpdateEnvironmentRequest {
  /**
   * @schema Cloud9UpdateEnvironmentRequest#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema Cloud9UpdateEnvironmentRequest#name
   */
  readonly name?: string;

  /**
   * @schema Cloud9UpdateEnvironmentRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'Cloud9UpdateEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9UpdateEnvironmentRequest(obj: Cloud9UpdateEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
    'name': obj.name,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9UpdateEnvironmentResult
 */
export interface Cloud9UpdateEnvironmentResult {
}

/**
 * Converts an object of type 'Cloud9UpdateEnvironmentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9UpdateEnvironmentResult(obj: Cloud9UpdateEnvironmentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9UpdateEnvironmentMembershipRequest
 */
export interface Cloud9UpdateEnvironmentMembershipRequest {
  /**
   * @schema Cloud9UpdateEnvironmentMembershipRequest#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema Cloud9UpdateEnvironmentMembershipRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema Cloud9UpdateEnvironmentMembershipRequest#permissions
   */
  readonly permissions: string;

}

/**
 * Converts an object of type 'Cloud9UpdateEnvironmentMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9UpdateEnvironmentMembershipRequest(obj: Cloud9UpdateEnvironmentMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
    'userArn': obj.userArn,
    'permissions': obj.permissions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9UpdateEnvironmentMembershipResult
 */
export interface Cloud9UpdateEnvironmentMembershipResult {
  /**
   * @schema Cloud9UpdateEnvironmentMembershipResult#membership
   */
  readonly membership?: Cloud9EnvironmentMember;

}

/**
 * Converts an object of type 'Cloud9UpdateEnvironmentMembershipResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9UpdateEnvironmentMembershipResult(obj: Cloud9UpdateEnvironmentMembershipResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'membership': toJson_Cloud9EnvironmentMember(obj.membership),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9Tag
 */
export interface Cloud9Tag {
  /**
   * @schema Cloud9Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Cloud9Tag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Cloud9Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9Tag(obj: Cloud9Tag | undefined): Record<string, any> | undefined {
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
 * @schema Cloud9EnvironmentMember
 */
export interface Cloud9EnvironmentMember {
  /**
   * @schema Cloud9EnvironmentMember#permissions
   */
  readonly permissions: string;

  /**
   * @schema Cloud9EnvironmentMember#userId
   */
  readonly userId: string;

  /**
   * @schema Cloud9EnvironmentMember#userArn
   */
  readonly userArn: string;

  /**
   * @schema Cloud9EnvironmentMember#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema Cloud9EnvironmentMember#lastAccess
   */
  readonly lastAccess?: string;

}

/**
 * Converts an object of type 'Cloud9EnvironmentMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9EnvironmentMember(obj: Cloud9EnvironmentMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'permissions': obj.permissions,
    'userId': obj.userId,
    'userArn': obj.userArn,
    'environmentId': obj.environmentId,
    'lastAccess': obj.lastAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9Environment
 */
export interface Cloud9Environment {
  /**
   * @schema Cloud9Environment#id
   */
  readonly id?: string;

  /**
   * @schema Cloud9Environment#name
   */
  readonly name?: string;

  /**
   * @schema Cloud9Environment#description
   */
  readonly description?: string;

  /**
   * @schema Cloud9Environment#type
   */
  readonly type: string;

  /**
   * @schema Cloud9Environment#connectionType
   */
  readonly connectionType?: string;

  /**
   * @schema Cloud9Environment#arn
   */
  readonly arn: string;

  /**
   * @schema Cloud9Environment#ownerArn
   */
  readonly ownerArn: string;

  /**
   * @schema Cloud9Environment#lifecycle
   */
  readonly lifecycle?: Cloud9EnvironmentLifecycle;

  /**
   * @schema Cloud9Environment#managedCredentialsStatus
   */
  readonly managedCredentialsStatus?: string;

}

/**
 * Converts an object of type 'Cloud9Environment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9Environment(obj: Cloud9Environment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'connectionType': obj.connectionType,
    'arn': obj.arn,
    'ownerArn': obj.ownerArn,
    'lifecycle': toJson_Cloud9EnvironmentLifecycle(obj.lifecycle),
    'managedCredentialsStatus': obj.managedCredentialsStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Cloud9EnvironmentLifecycle
 */
export interface Cloud9EnvironmentLifecycle {
  /**
   * @schema Cloud9EnvironmentLifecycle#status
   */
  readonly status?: string;

  /**
   * @schema Cloud9EnvironmentLifecycle#reason
   */
  readonly reason?: string;

  /**
   * @schema Cloud9EnvironmentLifecycle#failureResource
   */
  readonly failureResource?: string;

}

/**
 * Converts an object of type 'Cloud9EnvironmentLifecycle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Cloud9EnvironmentLifecycle(obj: Cloud9EnvironmentLifecycle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'reason': obj.reason,
    'failureResource': obj.failureResource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
