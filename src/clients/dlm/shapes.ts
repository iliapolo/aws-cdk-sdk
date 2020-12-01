/**
 * @schema CreateLifecyclePolicyRequest
 */
export interface CreateLifecyclePolicyRequest {
  /**
   * @schema CreateLifecyclePolicyRequest#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema CreateLifecyclePolicyRequest#Description
   */
  readonly description: string;

  /**
   * @schema CreateLifecyclePolicyRequest#State
   */
  readonly state: string;

  /**
   * @schema CreateLifecyclePolicyRequest#PolicyDetails
   */
  readonly policyDetails: PolicyDetails;

  /**
   * @schema CreateLifecyclePolicyRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateLifecyclePolicyResponse
 */
export interface CreateLifecyclePolicyResponse {
  /**
   * @schema CreateLifecyclePolicyResponse#PolicyId
   */
  readonly policyId?: string;

}

/**
 * @schema DeleteLifecyclePolicyRequest
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * @schema DeleteLifecyclePolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema DeleteLifecyclePolicyResponse
 */
export interface DeleteLifecyclePolicyResponse {
}

/**
 * @schema GetLifecyclePoliciesRequest
 */
export interface GetLifecyclePoliciesRequest {
  /**
   * @schema GetLifecyclePoliciesRequest#PolicyIds
   */
  readonly policyIds?: string[];

  /**
   * @schema GetLifecyclePoliciesRequest#State
   */
  readonly state?: string;

  /**
   * @schema GetLifecyclePoliciesRequest#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema GetLifecyclePoliciesRequest#TargetTags
   */
  readonly targetTags?: string[];

  /**
   * @schema GetLifecyclePoliciesRequest#TagsToAdd
   */
  readonly tagsToAdd?: string[];

}

/**
 * @schema GetLifecyclePoliciesResponse
 */
export interface GetLifecyclePoliciesResponse {
  /**
   * @schema GetLifecyclePoliciesResponse#Policies
   */
  readonly policies?: LifecyclePolicySummary[];

}

/**
 * @schema GetLifecyclePolicyRequest
 */
export interface GetLifecyclePolicyRequest {
  /**
   * @schema GetLifecyclePolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema GetLifecyclePolicyResponse
 */
export interface GetLifecyclePolicyResponse {
  /**
   * @schema GetLifecyclePolicyResponse#Policy
   */
  readonly policy?: LifecyclePolicy;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
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
  readonly tags?: { [key: string]: string };

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

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
   * @schema UntagResourceRequest#ResourceArn
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
 * @schema UpdateLifecyclePolicyRequest
 */
export interface UpdateLifecyclePolicyRequest {
  /**
   * @schema UpdateLifecyclePolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema UpdateLifecyclePolicyRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema UpdateLifecyclePolicyRequest#State
   */
  readonly state?: string;

  /**
   * @schema UpdateLifecyclePolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateLifecyclePolicyRequest#PolicyDetails
   */
  readonly policyDetails?: PolicyDetails;

}

/**
 * @schema UpdateLifecyclePolicyResponse
 */
export interface UpdateLifecyclePolicyResponse {
}

/**
 * @schema PolicyDetails
 */
export interface PolicyDetails {
  /**
   * @schema PolicyDetails#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema PolicyDetails#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema PolicyDetails#TargetTags
   */
  readonly targetTags?: Tag[];

  /**
   * @schema PolicyDetails#Schedules
   */
  readonly schedules?: Schedule[];

  /**
   * @schema PolicyDetails#Parameters
   */
  readonly parameters?: Parameters;

}

/**
 * @schema LifecyclePolicySummary
 */
export interface LifecyclePolicySummary {
  /**
   * @schema LifecyclePolicySummary#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema LifecyclePolicySummary#Description
   */
  readonly description?: string;

  /**
   * @schema LifecyclePolicySummary#State
   */
  readonly state?: string;

  /**
   * @schema LifecyclePolicySummary#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LifecyclePolicySummary#PolicyType
   */
  readonly policyType?: string;

}

/**
 * @schema LifecyclePolicy
 */
export interface LifecyclePolicy {
  /**
   * @schema LifecyclePolicy#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema LifecyclePolicy#Description
   */
  readonly description?: string;

  /**
   * @schema LifecyclePolicy#State
   */
  readonly state?: string;

  /**
   * @schema LifecyclePolicy#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema LifecyclePolicy#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema LifecyclePolicy#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema LifecyclePolicy#DateModified
   */
  readonly dateModified?: string;

  /**
   * @schema LifecyclePolicy#PolicyDetails
   */
  readonly policyDetails?: PolicyDetails;

  /**
   * @schema LifecyclePolicy#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LifecyclePolicy#PolicyArn
   */
  readonly policyArn?: string;

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
 * @schema Schedule
 */
export interface Schedule {
  /**
   * @schema Schedule#Name
   */
  readonly name?: string;

  /**
   * @schema Schedule#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema Schedule#TagsToAdd
   */
  readonly tagsToAdd?: Tag[];

  /**
   * @schema Schedule#VariableTags
   */
  readonly variableTags?: Tag[];

  /**
   * @schema Schedule#CreateRule
   */
  readonly createRule?: CreateRule;

  /**
   * @schema Schedule#RetainRule
   */
  readonly retainRule?: RetainRule;

  /**
   * @schema Schedule#FastRestoreRule
   */
  readonly fastRestoreRule?: FastRestoreRule;

  /**
   * @schema Schedule#CrossRegionCopyRules
   */
  readonly crossRegionCopyRules?: CrossRegionCopyRule[];

}

/**
 * @schema Parameters
 */
export interface Parameters {
  /**
   * @schema Parameters#ExcludeBootVolume
   */
  readonly excludeBootVolume?: boolean;

  /**
   * @schema Parameters#NoReboot
   */
  readonly noReboot?: boolean;

}

/**
 * @schema CreateRule
 */
export interface CreateRule {
  /**
   * @schema CreateRule#Interval
   */
  readonly interval?: number;

  /**
   * @schema CreateRule#IntervalUnit
   */
  readonly intervalUnit?: string;

  /**
   * @schema CreateRule#Times
   */
  readonly times?: string[];

  /**
   * @schema CreateRule#CronExpression
   */
  readonly cronExpression?: string;

}

/**
 * @schema RetainRule
 */
export interface RetainRule {
  /**
   * @schema RetainRule#Count
   */
  readonly count?: number;

  /**
   * @schema RetainRule#Interval
   */
  readonly interval?: number;

  /**
   * @schema RetainRule#IntervalUnit
   */
  readonly intervalUnit?: string;

}

/**
 * @schema FastRestoreRule
 */
export interface FastRestoreRule {
  /**
   * @schema FastRestoreRule#Count
   */
  readonly count?: number;

  /**
   * @schema FastRestoreRule#Interval
   */
  readonly interval?: number;

  /**
   * @schema FastRestoreRule#IntervalUnit
   */
  readonly intervalUnit?: string;

  /**
   * @schema FastRestoreRule#AvailabilityZones
   */
  readonly availabilityZones: string[];

}

/**
 * @schema CrossRegionCopyRule
 */
export interface CrossRegionCopyRule {
  /**
   * @schema CrossRegionCopyRule#TargetRegion
   */
  readonly targetRegion: string;

  /**
   * @schema CrossRegionCopyRule#Encrypted
   */
  readonly encrypted: boolean;

  /**
   * @schema CrossRegionCopyRule#CmkArn
   */
  readonly cmkArn?: string;

  /**
   * @schema CrossRegionCopyRule#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema CrossRegionCopyRule#RetainRule
   */
  readonly retainRule?: CrossRegionCopyRetainRule;

}

/**
 * @schema CrossRegionCopyRetainRule
 */
export interface CrossRegionCopyRetainRule {
  /**
   * @schema CrossRegionCopyRetainRule#Interval
   */
  readonly interval?: number;

  /**
   * @schema CrossRegionCopyRetainRule#IntervalUnit
   */
  readonly intervalUnit?: string;

}
