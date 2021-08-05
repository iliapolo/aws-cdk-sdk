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
 * @schema Cloud9CreateEnvironmentEc2Result
 */
export interface Cloud9CreateEnvironmentEc2Result {
  /**
   * @schema Cloud9CreateEnvironmentEc2Result#environmentId
   */
  readonly environmentId?: string;

}

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
 * @schema Cloud9CreateEnvironmentMembershipResult
 */
export interface Cloud9CreateEnvironmentMembershipResult {
  /**
   * @schema Cloud9CreateEnvironmentMembershipResult#membership
   */
  readonly membership?: Cloud9EnvironmentMember;

}

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
 * @schema Cloud9DeleteEnvironmentResult
 */
export interface Cloud9DeleteEnvironmentResult {
}

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
 * @schema Cloud9DeleteEnvironmentMembershipResult
 */
export interface Cloud9DeleteEnvironmentMembershipResult {
}

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
 * @schema Cloud9DescribeEnvironmentStatusRequest
 */
export interface Cloud9DescribeEnvironmentStatusRequest {
  /**
   * @schema Cloud9DescribeEnvironmentStatusRequest#environmentId
   */
  readonly environmentId: string;

}

/**
 * @schema Cloud9DescribeEnvironmentStatusResult
 */
export interface Cloud9DescribeEnvironmentStatusResult {
  /**
   * @schema Cloud9DescribeEnvironmentStatusResult#status
   */
  readonly status?: string;

  /**
   * @schema Cloud9DescribeEnvironmentStatusResult#message
   */
  readonly message?: string;

}

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
 * @schema Cloud9DescribeEnvironmentsResult
 */
export interface Cloud9DescribeEnvironmentsResult {
  /**
   * @schema Cloud9DescribeEnvironmentsResult#environments
   */
  readonly environments?: Cloud9Environment[];

}

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
 * @schema Cloud9ListTagsForResourceRequest
 */
export interface Cloud9ListTagsForResourceRequest {
  /**
   * @schema Cloud9ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

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
 * @schema Cloud9TagResourceRequest
 */
export interface Cloud9TagResourceRequest {
  /**
   * @schema Cloud9TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema Cloud9TagResourceRequest#Tags
   */
  readonly tags: Cloud9Tag[];

}

/**
 * @schema Cloud9TagResourceResponse
 */
export interface Cloud9TagResourceResponse {
}

/**
 * @schema Cloud9UntagResourceRequest
 */
export interface Cloud9UntagResourceRequest {
  /**
   * @schema Cloud9UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema Cloud9UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema Cloud9UntagResourceResponse
 */
export interface Cloud9UntagResourceResponse {
}

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
 * @schema Cloud9UpdateEnvironmentResult
 */
export interface Cloud9UpdateEnvironmentResult {
}

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
 * @schema Cloud9UpdateEnvironmentMembershipResult
 */
export interface Cloud9UpdateEnvironmentMembershipResult {
  /**
   * @schema Cloud9UpdateEnvironmentMembershipResult#membership
   */
  readonly membership?: Cloud9EnvironmentMember;

}

/**
 * @schema Cloud9Tag
 */
export interface Cloud9Tag {
  /**
   * @schema Cloud9Tag#Key
   */
  readonly key: string;

  /**
   * @schema Cloud9Tag#Value
   */
  readonly value: string;

}

/**
 * @schema Cloud9EnvironmentMember
 */
export interface Cloud9EnvironmentMember {
  /**
   * @schema Cloud9EnvironmentMember#permissions
   */
  readonly permissions?: string;

  /**
   * @schema Cloud9EnvironmentMember#userId
   */
  readonly userId?: string;

  /**
   * @schema Cloud9EnvironmentMember#userArn
   */
  readonly userArn?: string;

  /**
   * @schema Cloud9EnvironmentMember#environmentId
   */
  readonly environmentId?: string;

  /**
   * @schema Cloud9EnvironmentMember#lastAccess
   */
  readonly lastAccess?: string;

}

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
  readonly type?: string;

  /**
   * @schema Cloud9Environment#connectionType
   */
  readonly connectionType?: string;

  /**
   * @schema Cloud9Environment#arn
   */
  readonly arn?: string;

  /**
   * @schema Cloud9Environment#ownerArn
   */
  readonly ownerArn?: string;

  /**
   * @schema Cloud9Environment#lifecycle
   */
  readonly lifecycle?: Cloud9EnvironmentLifecycle;

}

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
