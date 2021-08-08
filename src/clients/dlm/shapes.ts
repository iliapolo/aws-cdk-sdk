/**
 * @schema DlmCreateLifecyclePolicyRequest
 */
export interface DlmCreateLifecyclePolicyRequest {
  /**
   * @schema DlmCreateLifecyclePolicyRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema DlmCreateLifecyclePolicyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DlmCreateLifecyclePolicyRequest#State
   */
  readonly state?: string;

  /**
   * @schema DlmCreateLifecyclePolicyRequest#PolicyDetails
   */
  readonly policyDetails?: DlmPolicyDetails;

  /**
   * @schema DlmCreateLifecyclePolicyRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DlmCreateLifecyclePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmCreateLifecyclePolicyRequest(obj: DlmCreateLifecyclePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExecutionRoleArn': obj.executionRoleArn,
    'Description': obj.description,
    'State': obj.state,
    'PolicyDetails': toJson_DlmPolicyDetails(obj.policyDetails),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DlmCreateLifecyclePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmCreateLifecyclePolicyResponse(obj: DlmCreateLifecyclePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmDeleteLifecyclePolicyRequest
 */
export interface DlmDeleteLifecyclePolicyRequest {
  /**
   * @schema DlmDeleteLifecyclePolicyRequest#PolicyId
   */
  readonly policyId?: string;

}

/**
 * Converts an object of type 'DlmDeleteLifecyclePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmDeleteLifecyclePolicyRequest(obj: DlmDeleteLifecyclePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmDeleteLifecyclePolicyResponse
 */
export interface DlmDeleteLifecyclePolicyResponse {
}

/**
 * Converts an object of type 'DlmDeleteLifecyclePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmDeleteLifecyclePolicyResponse(obj: DlmDeleteLifecyclePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DlmGetLifecyclePoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmGetLifecyclePoliciesRequest(obj: DlmGetLifecyclePoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyIds': obj.policyIds?.map(y => y),
    'State': obj.state,
    'ResourceTypes': obj.resourceTypes?.map(y => y),
    'TargetTags': obj.targetTags?.map(y => y),
    'TagsToAdd': obj.tagsToAdd?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DlmGetLifecyclePoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmGetLifecyclePoliciesResponse(obj: DlmGetLifecyclePoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policies': obj.policies?.map(y => toJson_DlmLifecyclePolicySummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmGetLifecyclePolicyRequest
 */
export interface DlmGetLifecyclePolicyRequest {
  /**
   * @schema DlmGetLifecyclePolicyRequest#PolicyId
   */
  readonly policyId?: string;

}

/**
 * Converts an object of type 'DlmGetLifecyclePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmGetLifecyclePolicyRequest(obj: DlmGetLifecyclePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DlmGetLifecyclePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmGetLifecyclePolicyResponse(obj: DlmGetLifecyclePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_DlmLifecyclePolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmListTagsForResourceRequest
 */
export interface DlmListTagsForResourceRequest {
  /**
   * @schema DlmListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'DlmListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmListTagsForResourceRequest(obj: DlmListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DlmListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmListTagsForResourceResponse(obj: DlmListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmTagResourceRequest
 */
export interface DlmTagResourceRequest {
  /**
   * @schema DlmTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DlmTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'DlmTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmTagResourceRequest(obj: DlmTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmTagResourceResponse
 */
export interface DlmTagResourceResponse {
}

/**
 * Converts an object of type 'DlmTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmTagResourceResponse(obj: DlmTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmUntagResourceRequest
 */
export interface DlmUntagResourceRequest {
  /**
   * @schema DlmUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DlmUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'DlmUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmUntagResourceRequest(obj: DlmUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmUntagResourceResponse
 */
export interface DlmUntagResourceResponse {
}

/**
 * Converts an object of type 'DlmUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmUntagResourceResponse(obj: DlmUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmUpdateLifecyclePolicyRequest
 */
export interface DlmUpdateLifecyclePolicyRequest {
  /**
   * @schema DlmUpdateLifecyclePolicyRequest#PolicyId
   */
  readonly policyId?: string;

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
 * Converts an object of type 'DlmUpdateLifecyclePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmUpdateLifecyclePolicyRequest(obj: DlmUpdateLifecyclePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'ExecutionRoleArn': obj.executionRoleArn,
    'State': obj.state,
    'Description': obj.description,
    'PolicyDetails': toJson_DlmPolicyDetails(obj.policyDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmUpdateLifecyclePolicyResponse
 */
export interface DlmUpdateLifecyclePolicyResponse {
}

/**
 * Converts an object of type 'DlmUpdateLifecyclePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmUpdateLifecyclePolicyResponse(obj: DlmUpdateLifecyclePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema DlmPolicyDetails#ResourceLocations
   */
  readonly resourceLocations?: string[];

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

  /**
   * @schema DlmPolicyDetails#EventSource
   */
  readonly eventSource?: DlmEventSource;

  /**
   * @schema DlmPolicyDetails#Actions
   */
  readonly actions?: DlmAction[];

}

/**
 * Converts an object of type 'DlmPolicyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmPolicyDetails(obj: DlmPolicyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyType': obj.policyType,
    'ResourceTypes': obj.resourceTypes?.map(y => y),
    'ResourceLocations': obj.resourceLocations?.map(y => y),
    'TargetTags': obj.targetTags?.map(y => toJson_DlmTag(y)),
    'Schedules': obj.schedules?.map(y => toJson_DlmSchedule(y)),
    'Parameters': toJson_DlmParameters(obj.parameters),
    'EventSource': toJson_DlmEventSource(obj.eventSource),
    'Actions': obj.actions?.map(y => toJson_DlmAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DlmLifecyclePolicySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmLifecyclePolicySummary(obj: DlmLifecyclePolicySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'Description': obj.description,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'PolicyType': obj.policyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DlmLifecyclePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmLifecyclePolicy(obj: DlmLifecyclePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'Description': obj.description,
    'State': obj.state,
    'StatusMessage': obj.statusMessage,
    'ExecutionRoleArn': obj.executionRoleArn,
    'DateCreated': obj.dateCreated,
    'DateModified': obj.dateModified,
    'PolicyDetails': toJson_DlmPolicyDetails(obj.policyDetails),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmTag
 */
export interface DlmTag {
  /**
   * @schema DlmTag#Key
   */
  readonly key?: string;

  /**
   * @schema DlmTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DlmTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmTag(obj: DlmTag | undefined): Record<string, any> | undefined {
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

  /**
   * @schema DlmSchedule#ShareRules
   */
  readonly shareRules?: DlmShareRule[];

}

/**
 * Converts an object of type 'DlmSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmSchedule(obj: DlmSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CopyTags': obj.copyTags,
    'TagsToAdd': obj.tagsToAdd?.map(y => toJson_DlmTag(y)),
    'VariableTags': obj.variableTags?.map(y => toJson_DlmTag(y)),
    'CreateRule': toJson_DlmCreateRule(obj.createRule),
    'RetainRule': toJson_DlmRetainRule(obj.retainRule),
    'FastRestoreRule': toJson_DlmFastRestoreRule(obj.fastRestoreRule),
    'CrossRegionCopyRules': obj.crossRegionCopyRules?.map(y => toJson_DlmCrossRegionCopyRule(y)),
    'ShareRules': obj.shareRules?.map(y => toJson_DlmShareRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DlmParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmParameters(obj: DlmParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExcludeBootVolume': obj.excludeBootVolume,
    'NoReboot': obj.noReboot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmEventSource
 */
export interface DlmEventSource {
  /**
   * @schema DlmEventSource#Type
   */
  readonly type?: string;

  /**
   * @schema DlmEventSource#Parameters
   */
  readonly parameters?: DlmEventParameters;

}

/**
 * Converts an object of type 'DlmEventSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmEventSource(obj: DlmEventSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Parameters': toJson_DlmEventParameters(obj.parameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmAction
 */
export interface DlmAction {
  /**
   * @schema DlmAction#Name
   */
  readonly name?: string;

  /**
   * @schema DlmAction#CrossRegionCopy
   */
  readonly crossRegionCopy?: DlmCrossRegionCopyAction[];

}

/**
 * Converts an object of type 'DlmAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmAction(obj: DlmAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CrossRegionCopy': obj.crossRegionCopy?.map(y => toJson_DlmCrossRegionCopyAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmCreateRule
 */
export interface DlmCreateRule {
  /**
   * @schema DlmCreateRule#Location
   */
  readonly location?: string;

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
 * Converts an object of type 'DlmCreateRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmCreateRule(obj: DlmCreateRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Location': obj.location,
    'Interval': obj.interval,
    'IntervalUnit': obj.intervalUnit,
    'Times': obj.times?.map(y => y),
    'CronExpression': obj.cronExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'DlmRetainRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmRetainRule(obj: DlmRetainRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Count': obj.count,
    'Interval': obj.interval,
    'IntervalUnit': obj.intervalUnit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly availabilityZones?: string[];

}

/**
 * Converts an object of type 'DlmFastRestoreRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmFastRestoreRule(obj: DlmFastRestoreRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Count': obj.count,
    'Interval': obj.interval,
    'IntervalUnit': obj.intervalUnit,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmCrossRegionCopyRule
 */
export interface DlmCrossRegionCopyRule {
  /**
   * @schema DlmCrossRegionCopyRule#TargetRegion
   */
  readonly targetRegion?: string;

  /**
   * @schema DlmCrossRegionCopyRule#Target
   */
  readonly target?: string;

  /**
   * @schema DlmCrossRegionCopyRule#Encrypted
   */
  readonly encrypted?: boolean;

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
 * Converts an object of type 'DlmCrossRegionCopyRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmCrossRegionCopyRule(obj: DlmCrossRegionCopyRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetRegion': obj.targetRegion,
    'Target': obj.target,
    'Encrypted': obj.encrypted,
    'CmkArn': obj.cmkArn,
    'CopyTags': obj.copyTags,
    'RetainRule': toJson_DlmCrossRegionCopyRetainRule(obj.retainRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmShareRule
 */
export interface DlmShareRule {
  /**
   * @schema DlmShareRule#TargetAccounts
   */
  readonly targetAccounts?: string[];

  /**
   * @schema DlmShareRule#UnshareInterval
   */
  readonly unshareInterval?: number;

  /**
   * @schema DlmShareRule#UnshareIntervalUnit
   */
  readonly unshareIntervalUnit?: string;

}

/**
 * Converts an object of type 'DlmShareRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmShareRule(obj: DlmShareRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetAccounts': obj.targetAccounts?.map(y => y),
    'UnshareInterval': obj.unshareInterval,
    'UnshareIntervalUnit': obj.unshareIntervalUnit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmEventParameters
 */
export interface DlmEventParameters {
  /**
   * @schema DlmEventParameters#EventType
   */
  readonly eventType?: string;

  /**
   * @schema DlmEventParameters#SnapshotOwner
   */
  readonly snapshotOwner?: string[];

  /**
   * @schema DlmEventParameters#DescriptionRegex
   */
  readonly descriptionRegex?: string;

}

/**
 * Converts an object of type 'DlmEventParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmEventParameters(obj: DlmEventParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventType': obj.eventType,
    'SnapshotOwner': obj.snapshotOwner?.map(y => y),
    'DescriptionRegex': obj.descriptionRegex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmCrossRegionCopyAction
 */
export interface DlmCrossRegionCopyAction {
  /**
   * @schema DlmCrossRegionCopyAction#Target
   */
  readonly target?: string;

  /**
   * @schema DlmCrossRegionCopyAction#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: DlmEncryptionConfiguration;

  /**
   * @schema DlmCrossRegionCopyAction#RetainRule
   */
  readonly retainRule?: DlmCrossRegionCopyRetainRule;

}

/**
 * Converts an object of type 'DlmCrossRegionCopyAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmCrossRegionCopyAction(obj: DlmCrossRegionCopyAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Target': obj.target,
    'EncryptionConfiguration': toJson_DlmEncryptionConfiguration(obj.encryptionConfiguration),
    'RetainRule': toJson_DlmCrossRegionCopyRetainRule(obj.retainRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'DlmCrossRegionCopyRetainRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmCrossRegionCopyRetainRule(obj: DlmCrossRegionCopyRetainRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Interval': obj.interval,
    'IntervalUnit': obj.intervalUnit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DlmEncryptionConfiguration
 */
export interface DlmEncryptionConfiguration {
  /**
   * @schema DlmEncryptionConfiguration#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema DlmEncryptionConfiguration#CmkArn
   */
  readonly cmkArn?: string;

}

/**
 * Converts an object of type 'DlmEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DlmEncryptionConfiguration(obj: DlmEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Encrypted': obj.encrypted,
    'CmkArn': obj.cmkArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
