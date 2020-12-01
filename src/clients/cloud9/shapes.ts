/**
 * @schema CreateEnvironmentEc2Request
 */
export interface CreateEnvironmentEc2Request {
  /**
   * @schema CreateEnvironmentEc2Request#name
   */
  readonly name: string;

  /**
   * @schema CreateEnvironmentEc2Request#description
   */
  readonly description?: string;

  /**
   * @schema CreateEnvironmentEc2Request#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateEnvironmentEc2Request#instanceType
   */
  readonly instanceType: string;

  /**
   * @schema CreateEnvironmentEc2Request#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CreateEnvironmentEc2Request#automaticStopTimeMinutes
   */
  readonly automaticStopTimeMinutes?: number;

  /**
   * @schema CreateEnvironmentEc2Request#ownerArn
   */
  readonly ownerArn?: string;

  /**
   * @schema CreateEnvironmentEc2Request#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateEnvironmentEc2Request#connectionType
   */
  readonly connectionType?: string;

}

/**
 * @schema CreateEnvironmentEc2Result
 */
export interface CreateEnvironmentEc2Result {
  /**
   * @schema CreateEnvironmentEc2Result#environmentId
   */
  readonly environmentId?: string;

}

/**
 * @schema CreateEnvironmentMembershipRequest
 */
export interface CreateEnvironmentMembershipRequest {
  /**
   * @schema CreateEnvironmentMembershipRequest#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema CreateEnvironmentMembershipRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema CreateEnvironmentMembershipRequest#permissions
   */
  readonly permissions: string;

}

/**
 * @schema CreateEnvironmentMembershipResult
 */
export interface CreateEnvironmentMembershipResult {
  /**
   * @schema CreateEnvironmentMembershipResult#membership
   */
  readonly membership?: EnvironmentMember;

}

/**
 * @schema DeleteEnvironmentRequest
 */
export interface DeleteEnvironmentRequest {
  /**
   * @schema DeleteEnvironmentRequest#environmentId
   */
  readonly environmentId: string;

}

/**
 * @schema DeleteEnvironmentResult
 */
export interface DeleteEnvironmentResult {
}

/**
 * @schema DeleteEnvironmentMembershipRequest
 */
export interface DeleteEnvironmentMembershipRequest {
  /**
   * @schema DeleteEnvironmentMembershipRequest#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema DeleteEnvironmentMembershipRequest#userArn
   */
  readonly userArn: string;

}

/**
 * @schema DeleteEnvironmentMembershipResult
 */
export interface DeleteEnvironmentMembershipResult {
}

/**
 * @schema DescribeEnvironmentMembershipsRequest
 */
export interface DescribeEnvironmentMembershipsRequest {
  /**
   * @schema DescribeEnvironmentMembershipsRequest#userArn
   */
  readonly userArn?: string;

  /**
   * @schema DescribeEnvironmentMembershipsRequest#environmentId
   */
  readonly environmentId?: string;

  /**
   * @schema DescribeEnvironmentMembershipsRequest#permissions
   */
  readonly permissions?: string[];

  /**
   * @schema DescribeEnvironmentMembershipsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEnvironmentMembershipsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeEnvironmentMembershipsResult
 */
export interface DescribeEnvironmentMembershipsResult {
  /**
   * @schema DescribeEnvironmentMembershipsResult#memberships
   */
  readonly memberships?: EnvironmentMember[];

  /**
   * @schema DescribeEnvironmentMembershipsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEnvironmentStatusRequest
 */
export interface DescribeEnvironmentStatusRequest {
  /**
   * @schema DescribeEnvironmentStatusRequest#environmentId
   */
  readonly environmentId: string;

}

/**
 * @schema DescribeEnvironmentStatusResult
 */
export interface DescribeEnvironmentStatusResult {
  /**
   * @schema DescribeEnvironmentStatusResult#status
   */
  readonly status?: string;

  /**
   * @schema DescribeEnvironmentStatusResult#message
   */
  readonly message?: string;

}

/**
 * @schema DescribeEnvironmentsRequest
 */
export interface DescribeEnvironmentsRequest {
  /**
   * @schema DescribeEnvironmentsRequest#environmentIds
   */
  readonly environmentIds: string[];

}

/**
 * @schema DescribeEnvironmentsResult
 */
export interface DescribeEnvironmentsResult {
  /**
   * @schema DescribeEnvironmentsResult#environments
   */
  readonly environments?: Environment[];

}

/**
 * @schema ListEnvironmentsRequest
 */
export interface ListEnvironmentsRequest {
  /**
   * @schema ListEnvironmentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEnvironmentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEnvironmentsResult
 */
export interface ListEnvironmentsResult {
  /**
   * @schema ListEnvironmentsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEnvironmentsResult#environmentIds
   */
  readonly environmentIds?: string[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateEnvironmentRequest
 */
export interface UpdateEnvironmentRequest {
  /**
   * @schema UpdateEnvironmentRequest#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema UpdateEnvironmentRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateEnvironmentRequest#description
   */
  readonly description?: string;

}

/**
 * @schema UpdateEnvironmentResult
 */
export interface UpdateEnvironmentResult {
}

/**
 * @schema UpdateEnvironmentMembershipRequest
 */
export interface UpdateEnvironmentMembershipRequest {
  /**
   * @schema UpdateEnvironmentMembershipRequest#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema UpdateEnvironmentMembershipRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema UpdateEnvironmentMembershipRequest#permissions
   */
  readonly permissions: string;

}

/**
 * @schema UpdateEnvironmentMembershipResult
 */
export interface UpdateEnvironmentMembershipResult {
  /**
   * @schema UpdateEnvironmentMembershipResult#membership
   */
  readonly membership?: EnvironmentMember;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema EnvironmentMember
 */
export interface EnvironmentMember {
  /**
   * @schema EnvironmentMember#permissions
   */
  readonly permissions?: string;

  /**
   * @schema EnvironmentMember#userId
   */
  readonly userId?: string;

  /**
   * @schema EnvironmentMember#userArn
   */
  readonly userArn?: string;

  /**
   * @schema EnvironmentMember#environmentId
   */
  readonly environmentId?: string;

  /**
   * @schema EnvironmentMember#lastAccess
   */
  readonly lastAccess?: string;

}

/**
 * @schema Environment
 */
export interface Environment {
  /**
   * @schema Environment#id
   */
  readonly id?: string;

  /**
   * @schema Environment#name
   */
  readonly name?: string;

  /**
   * @schema Environment#description
   */
  readonly description?: string;

  /**
   * @schema Environment#type
   */
  readonly type?: string;

  /**
   * @schema Environment#connectionType
   */
  readonly connectionType?: string;

  /**
   * @schema Environment#arn
   */
  readonly arn?: string;

  /**
   * @schema Environment#ownerArn
   */
  readonly ownerArn?: string;

  /**
   * @schema Environment#lifecycle
   */
  readonly lifecycle?: EnvironmentLifecycle;

}

/**
 * @schema EnvironmentLifecycle
 */
export interface EnvironmentLifecycle {
  /**
   * @schema EnvironmentLifecycle#status
   */
  readonly status?: string;

  /**
   * @schema EnvironmentLifecycle#reason
   */
  readonly reason?: string;

  /**
   * @schema EnvironmentLifecycle#failureResource
   */
  readonly failureResource?: string;

}
