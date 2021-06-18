/**
 * @schema DlmCreateLifecyclePolicyRequest
 */
export interface DlmCreateLifecyclePolicyRequest {
  /**
   * @schema DlmCreateLifecyclePolicyRequest#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema DlmCreateLifecyclePolicyRequest#Description
   */
  readonly description: string;

  /**
   * @schema DlmCreateLifecyclePolicyRequest#State
   */
  readonly state: string;

  /**
   * @schema DlmCreateLifecyclePolicyRequest#PolicyDetails
   */
  readonly policyDetails: DlmPolicyDetails;

  /**
   * @schema DlmCreateLifecyclePolicyRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DlmCreateLifecyclePolicyResponse
 */
export interface DlmCreateLifecyclePolicyResponse {
  /**
   * @schema DlmCreateLifecyclePolicyResponse#PolicyId
   */
  readonly policyId?: string;

}

/**
 * @schema DlmDeleteLifecyclePolicyRequest
 */
export interface DlmDeleteLifecyclePolicyRequest {
  /**
   * @schema DlmDeleteLifecyclePolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema DlmDeleteLifecyclePolicyResponse
 */
export interface DlmDeleteLifecyclePolicyResponse {
}

/**
 * @schema DlmGetLifecyclePoliciesRequest
 */
export interface DlmGetLifecyclePoliciesRequest {
  /**
   * @schema DlmGetLifecyclePoliciesRequest#PolicyIds
   */
  readonly policyIds?: string[];

  /**
   * @schema DlmGetLifecyclePoliciesRequest#State
   */
  readonly state?: string;

  /**
   * @schema DlmGetLifecyclePoliciesRequest#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema DlmGetLifecyclePoliciesRequest#TargetTags
   */
  readonly targetTags?: string[];

  /**
   * @schema DlmGetLifecyclePoliciesRequest#TagsToAdd
   */
  readonly tagsToAdd?: string[];

}

/**
 * @schema DlmGetLifecyclePoliciesResponse
 */
export interface DlmGetLifecyclePoliciesResponse {
  /**
   * @schema DlmGetLifecyclePoliciesResponse#Policies
   */
  readonly policies?: DlmLifecyclePolicySummary[];

}

/**
 * @schema DlmGetLifecyclePolicyRequest
 */
export interface DlmGetLifecyclePolicyRequest {
  /**
   * @schema DlmGetLifecyclePolicyRequest#PolicyId
   */
  readonly policyId: string;

}

/**
 * @schema DlmGetLifecyclePolicyResponse
 */
export interface DlmGetLifecyclePolicyResponse {
  /**
   * @schema DlmGetLifecyclePolicyResponse#Policy
   */
  readonly policy?: DlmLifecyclePolicy;

}

/**
 * @schema DlmListTagsForResourceRequest
 */
export interface DlmListTagsForResourceRequest {
  /**
   * @schema DlmListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DlmListTagsForResourceResponse
 */
export interface DlmListTagsForResourceResponse {
  /**
   * @schema DlmListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DlmTagResourceRequest
 */
export interface DlmTagResourceRequest {
  /**
   * @schema DlmTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DlmTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema DlmTagResourceResponse
 */
export interface DlmTagResourceResponse {
}

/**
 * @schema DlmUntagResourceRequest
 */
export interface DlmUntagResourceRequest {
  /**
   * @schema DlmUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DlmUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DlmUntagResourceResponse
 */
export interface DlmUntagResourceResponse {
}

/**
 * @schema DlmUpdateLifecyclePolicyRequest
 */
export interface DlmUpdateLifecyclePolicyRequest {
  /**
   * @schema DlmUpdateLifecyclePolicyRequest#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema DlmUpdateLifecyclePolicyRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema DlmUpdateLifecyclePolicyRequest#State
   */
  readonly state?: string;

  /**
   * @schema DlmUpdateLifecyclePolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DlmUpdateLifecyclePolicyRequest#PolicyDetails
   */
  readonly policyDetails?: DlmPolicyDetails;

}

/**
 * @schema DlmUpdateLifecyclePolicyResponse
 */
export interface DlmUpdateLifecyclePolicyResponse {
}

/**
 * @schema DlmPolicyDetails
 */
export interface DlmPolicyDetails {
  /**
   * @schema DlmPolicyDetails#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema DlmPolicyDetails#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema DlmPolicyDetails#TargetTags
   */
  readonly targetTags?: DlmTag[];

  /**
   * @schema DlmPolicyDetails#Schedules
   */
  readonly schedules?: DlmSchedule[];

  /**
   * @schema DlmPolicyDetails#Parameters
   */
  readonly parameters?: DlmParameters;

}

/**
 * @schema DlmLifecyclePolicySummary
 */
export interface DlmLifecyclePolicySummary {
  /**
   * @schema DlmLifecyclePolicySummary#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema DlmLifecyclePolicySummary#Description
   */
  readonly description?: string;

  /**
   * @schema DlmLifecyclePolicySummary#State
   */
  readonly state?: string;

  /**
   * @schema DlmLifecyclePolicySummary#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DlmLifecyclePolicySummary#PolicyType
   */
  readonly policyType?: string;

}

/**
 * @schema DlmLifecyclePolicy
 */
export interface DlmLifecyclePolicy {
  /**
   * @schema DlmLifecyclePolicy#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema DlmLifecyclePolicy#Description
   */
  readonly description?: string;

  /**
   * @schema DlmLifecyclePolicy#State
   */
  readonly state?: string;

  /**
   * @schema DlmLifecyclePolicy#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema DlmLifecyclePolicy#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema DlmLifecyclePolicy#DateCreated
   */
  readonly dateCreated?: string;

  /**
   * @schema DlmLifecyclePolicy#DateModified
   */
  readonly dateModified?: string;

  /**
   * @schema DlmLifecyclePolicy#PolicyDetails
   */
  readonly policyDetails?: DlmPolicyDetails;

  /**
   * @schema DlmLifecyclePolicy#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DlmLifecyclePolicy#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema DlmTag
 */
export interface DlmTag {
  /**
   * @schema DlmTag#Key
   */
  readonly key: string;

  /**
   * @schema DlmTag#Value
   */
  readonly value: string;

}

/**
 * @schema DlmSchedule
 */
export interface DlmSchedule {
  /**
   * @schema DlmSchedule#Name
   */
  readonly name?: string;

  /**
   * @schema DlmSchedule#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema DlmSchedule#TagsToAdd
   */
  readonly tagsToAdd?: DlmTag[];

  /**
   * @schema DlmSchedule#VariableTags
   */
  readonly variableTags?: DlmTag[];

  /**
   * @schema DlmSchedule#CreateRule
   */
  readonly createRule?: DlmCreateRule;

  /**
   * @schema DlmSchedule#RetainRule
   */
  readonly retainRule?: DlmRetainRule;

  /**
   * @schema DlmSchedule#FastRestoreRule
   */
  readonly fastRestoreRule?: DlmFastRestoreRule;

  /**
   * @schema DlmSchedule#CrossRegionCopyRules
   */
  readonly crossRegionCopyRules?: DlmCrossRegionCopyRule[];

}

/**
 * @schema DlmParameters
 */
export interface DlmParameters {
  /**
   * @schema DlmParameters#ExcludeBootVolume
   */
  readonly excludeBootVolume?: boolean;

  /**
   * @schema DlmParameters#NoReboot
   */
  readonly noReboot?: boolean;

}

/**
 * @schema DlmCreateRule
 */
export interface DlmCreateRule {
  /**
   * @schema DlmCreateRule#Interval
   */
  readonly interval?: number;

  /**
   * @schema DlmCreateRule#IntervalUnit
   */
  readonly intervalUnit?: string;

  /**
   * @schema DlmCreateRule#Times
   */
  readonly times?: string[];

  /**
   * @schema DlmCreateRule#CronExpression
   */
  readonly cronExpression?: string;

}

/**
 * @schema DlmRetainRule
 */
export interface DlmRetainRule {
  /**
   * @schema DlmRetainRule#Count
   */
  readonly count?: number;

  /**
   * @schema DlmRetainRule#Interval
   */
  readonly interval?: number;

  /**
   * @schema DlmRetainRule#IntervalUnit
   */
  readonly intervalUnit?: string;

}

/**
 * @schema DlmFastRestoreRule
 */
export interface DlmFastRestoreRule {
  /**
   * @schema DlmFastRestoreRule#Count
   */
  readonly count?: number;

  /**
   * @schema DlmFastRestoreRule#Interval
   */
  readonly interval?: number;

  /**
   * @schema DlmFastRestoreRule#IntervalUnit
   */
  readonly intervalUnit?: string;

  /**
   * @schema DlmFastRestoreRule#AvailabilityZones
   */
  readonly availabilityZones: string[];

}

/**
 * @schema DlmCrossRegionCopyRule
 */
export interface DlmCrossRegionCopyRule {
  /**
   * @schema DlmCrossRegionCopyRule#TargetRegion
   */
  readonly targetRegion: string;

  /**
   * @schema DlmCrossRegionCopyRule#Encrypted
   */
  readonly encrypted: boolean;

  /**
   * @schema DlmCrossRegionCopyRule#CmkArn
   */
  readonly cmkArn?: string;

  /**
   * @schema DlmCrossRegionCopyRule#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema DlmCrossRegionCopyRule#RetainRule
   */
  readonly retainRule?: DlmCrossRegionCopyRetainRule;

}

/**
 * @schema DlmCrossRegionCopyRetainRule
 */
export interface DlmCrossRegionCopyRetainRule {
  /**
   * @schema DlmCrossRegionCopyRetainRule#Interval
   */
  readonly interval?: number;

  /**
   * @schema DlmCrossRegionCopyRetainRule#IntervalUnit
   */
  readonly intervalUnit?: string;

}
