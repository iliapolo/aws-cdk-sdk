/**
 * @schema CodeStarNotificationsCreateNotificationRuleRequest
 */
export interface CodeStarNotificationsCreateNotificationRuleRequest {
  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#EventTypeIds
   */
  readonly eventTypeIds?: string[];

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#Resource
   */
  readonly resource?: string;

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#Targets
   */
  readonly targets?: CodeStarNotificationsTarget[];

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsCreateNotificationRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsCreateNotificationRuleRequest(obj: CodeStarNotificationsCreateNotificationRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'EventTypeIds': obj.eventTypeIds?.map(y => y),
    'Resource': obj.resource,
    'Targets': obj.targets?.map(y => toJson_CodeStarNotificationsTarget(y)),
    'DetailType': obj.detailType,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsCreateNotificationRuleResult
 */
export interface CodeStarNotificationsCreateNotificationRuleResult {
  /**
   * @schema CodeStarNotificationsCreateNotificationRuleResult#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsCreateNotificationRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsCreateNotificationRuleResult(obj: CodeStarNotificationsCreateNotificationRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsDeleteNotificationRuleRequest
 */
export interface CodeStarNotificationsDeleteNotificationRuleRequest {
  /**
   * @schema CodeStarNotificationsDeleteNotificationRuleRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsDeleteNotificationRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsDeleteNotificationRuleRequest(obj: CodeStarNotificationsDeleteNotificationRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsDeleteNotificationRuleResult
 */
export interface CodeStarNotificationsDeleteNotificationRuleResult {
  /**
   * @schema CodeStarNotificationsDeleteNotificationRuleResult#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsDeleteNotificationRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsDeleteNotificationRuleResult(obj: CodeStarNotificationsDeleteNotificationRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsDeleteTargetRequest
 */
export interface CodeStarNotificationsDeleteTargetRequest {
  /**
   * @schema CodeStarNotificationsDeleteTargetRequest#TargetAddress
   */
  readonly targetAddress?: string;

  /**
   * @schema CodeStarNotificationsDeleteTargetRequest#ForceUnsubscribeAll
   */
  readonly forceUnsubscribeAll?: boolean;

}

/**
 * Converts an object of type 'CodeStarNotificationsDeleteTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsDeleteTargetRequest(obj: CodeStarNotificationsDeleteTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetAddress': obj.targetAddress,
    'ForceUnsubscribeAll': obj.forceUnsubscribeAll,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsDeleteTargetResult
 */
export interface CodeStarNotificationsDeleteTargetResult {
}

/**
 * Converts an object of type 'CodeStarNotificationsDeleteTargetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsDeleteTargetResult(obj: CodeStarNotificationsDeleteTargetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsDescribeNotificationRuleRequest
 */
export interface CodeStarNotificationsDescribeNotificationRuleRequest {
  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsDescribeNotificationRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsDescribeNotificationRuleRequest(obj: CodeStarNotificationsDescribeNotificationRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsDescribeNotificationRuleResult
 */
export interface CodeStarNotificationsDescribeNotificationRuleResult {
  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#Arn
   */
  readonly arn?: string;

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#Name
   */
  readonly name?: string;

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#EventTypes
   */
  readonly eventTypes?: CodeStarNotificationsEventTypeSummary[];

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#Resource
   */
  readonly resource?: string;

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#Targets
   */
  readonly targets?: CodeStarNotificationsTargetSummary[];

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#Status
   */
  readonly status?: string;

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeStarNotificationsDescribeNotificationRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsDescribeNotificationRuleResult(obj: CodeStarNotificationsDescribeNotificationRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'EventTypes': obj.eventTypes?.map(y => toJson_CodeStarNotificationsEventTypeSummary(y)),
    'Resource': obj.resource,
    'Targets': obj.targets?.map(y => toJson_CodeStarNotificationsTargetSummary(y)),
    'DetailType': obj.detailType,
    'CreatedBy': obj.createdBy,
    'Status': obj.status,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastModifiedTimestamp': obj.lastModifiedTimestamp,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListEventTypesRequest
 */
export interface CodeStarNotificationsListEventTypesRequest {
  /**
   * @schema CodeStarNotificationsListEventTypesRequest#Filters
   */
  readonly filters?: CodeStarNotificationsListEventTypesFilter[];

  /**
   * @schema CodeStarNotificationsListEventTypesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeStarNotificationsListEventTypesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeStarNotificationsListEventTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListEventTypesRequest(obj: CodeStarNotificationsListEventTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_CodeStarNotificationsListEventTypesFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListEventTypesResult
 */
export interface CodeStarNotificationsListEventTypesResult {
  /**
   * @schema CodeStarNotificationsListEventTypesResult#EventTypes
   */
  readonly eventTypes?: CodeStarNotificationsEventTypeSummary[];

  /**
   * @schema CodeStarNotificationsListEventTypesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsListEventTypesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListEventTypesResult(obj: CodeStarNotificationsListEventTypesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventTypes': obj.eventTypes?.map(y => toJson_CodeStarNotificationsEventTypeSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListNotificationRulesRequest
 */
export interface CodeStarNotificationsListNotificationRulesRequest {
  /**
   * @schema CodeStarNotificationsListNotificationRulesRequest#Filters
   */
  readonly filters?: CodeStarNotificationsListNotificationRulesFilter[];

  /**
   * @schema CodeStarNotificationsListNotificationRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeStarNotificationsListNotificationRulesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeStarNotificationsListNotificationRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListNotificationRulesRequest(obj: CodeStarNotificationsListNotificationRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_CodeStarNotificationsListNotificationRulesFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListNotificationRulesResult
 */
export interface CodeStarNotificationsListNotificationRulesResult {
  /**
   * @schema CodeStarNotificationsListNotificationRulesResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeStarNotificationsListNotificationRulesResult#NotificationRules
   */
  readonly notificationRules?: CodeStarNotificationsNotificationRuleSummary[];

}

/**
 * Converts an object of type 'CodeStarNotificationsListNotificationRulesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListNotificationRulesResult(obj: CodeStarNotificationsListNotificationRulesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'NotificationRules': obj.notificationRules?.map(y => toJson_CodeStarNotificationsNotificationRuleSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListTagsForResourceRequest
 */
export interface CodeStarNotificationsListTagsForResourceRequest {
  /**
   * @schema CodeStarNotificationsListTagsForResourceRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListTagsForResourceRequest(obj: CodeStarNotificationsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListTagsForResourceResult
 */
export interface CodeStarNotificationsListTagsForResourceResult {
  /**
   * @schema CodeStarNotificationsListTagsForResourceResult#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeStarNotificationsListTagsForResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListTagsForResourceResult(obj: CodeStarNotificationsListTagsForResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListTargetsRequest
 */
export interface CodeStarNotificationsListTargetsRequest {
  /**
   * @schema CodeStarNotificationsListTargetsRequest#Filters
   */
  readonly filters?: CodeStarNotificationsListTargetsFilter[];

  /**
   * @schema CodeStarNotificationsListTargetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeStarNotificationsListTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeStarNotificationsListTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListTargetsRequest(obj: CodeStarNotificationsListTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_CodeStarNotificationsListTargetsFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListTargetsResult
 */
export interface CodeStarNotificationsListTargetsResult {
  /**
   * @schema CodeStarNotificationsListTargetsResult#Targets
   */
  readonly targets?: CodeStarNotificationsTargetSummary[];

  /**
   * @schema CodeStarNotificationsListTargetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsListTargetsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListTargetsResult(obj: CodeStarNotificationsListTargetsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Targets': obj.targets?.map(y => toJson_CodeStarNotificationsTargetSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsSubscribeRequest
 */
export interface CodeStarNotificationsSubscribeRequest {
  /**
   * @schema CodeStarNotificationsSubscribeRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema CodeStarNotificationsSubscribeRequest#Target
   */
  readonly target?: CodeStarNotificationsTarget;

  /**
   * @schema CodeStarNotificationsSubscribeRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsSubscribeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsSubscribeRequest(obj: CodeStarNotificationsSubscribeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Target': toJson_CodeStarNotificationsTarget(obj.target),
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsSubscribeResult
 */
export interface CodeStarNotificationsSubscribeResult {
  /**
   * @schema CodeStarNotificationsSubscribeResult#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsSubscribeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsSubscribeResult(obj: CodeStarNotificationsSubscribeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsTagResourceRequest
 */
export interface CodeStarNotificationsTagResourceRequest {
  /**
   * @schema CodeStarNotificationsTagResourceRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema CodeStarNotificationsTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeStarNotificationsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsTagResourceRequest(obj: CodeStarNotificationsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsTagResourceResult
 */
export interface CodeStarNotificationsTagResourceResult {
  /**
   * @schema CodeStarNotificationsTagResourceResult#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeStarNotificationsTagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsTagResourceResult(obj: CodeStarNotificationsTagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsUnsubscribeRequest
 */
export interface CodeStarNotificationsUnsubscribeRequest {
  /**
   * @schema CodeStarNotificationsUnsubscribeRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema CodeStarNotificationsUnsubscribeRequest#TargetAddress
   */
  readonly targetAddress?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsUnsubscribeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsUnsubscribeRequest(obj: CodeStarNotificationsUnsubscribeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'TargetAddress': obj.targetAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsUnsubscribeResult
 */
export interface CodeStarNotificationsUnsubscribeResult {
  /**
   * @schema CodeStarNotificationsUnsubscribeResult#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsUnsubscribeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsUnsubscribeResult(obj: CodeStarNotificationsUnsubscribeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsUntagResourceRequest
 */
export interface CodeStarNotificationsUntagResourceRequest {
  /**
   * @schema CodeStarNotificationsUntagResourceRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema CodeStarNotificationsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'CodeStarNotificationsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsUntagResourceRequest(obj: CodeStarNotificationsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsUntagResourceResult
 */
export interface CodeStarNotificationsUntagResourceResult {
}

/**
 * Converts an object of type 'CodeStarNotificationsUntagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsUntagResourceResult(obj: CodeStarNotificationsUntagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsUpdateNotificationRuleRequest
 */
export interface CodeStarNotificationsUpdateNotificationRuleRequest {
  /**
   * @schema CodeStarNotificationsUpdateNotificationRuleRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema CodeStarNotificationsUpdateNotificationRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CodeStarNotificationsUpdateNotificationRuleRequest#Status
   */
  readonly status?: string;

  /**
   * @schema CodeStarNotificationsUpdateNotificationRuleRequest#EventTypeIds
   */
  readonly eventTypeIds?: string[];

  /**
   * @schema CodeStarNotificationsUpdateNotificationRuleRequest#Targets
   */
  readonly targets?: CodeStarNotificationsTarget[];

  /**
   * @schema CodeStarNotificationsUpdateNotificationRuleRequest#DetailType
   */
  readonly detailType?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsUpdateNotificationRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsUpdateNotificationRuleRequest(obj: CodeStarNotificationsUpdateNotificationRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Status': obj.status,
    'EventTypeIds': obj.eventTypeIds?.map(y => y),
    'Targets': obj.targets?.map(y => toJson_CodeStarNotificationsTarget(y)),
    'DetailType': obj.detailType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsUpdateNotificationRuleResult
 */
export interface CodeStarNotificationsUpdateNotificationRuleResult {
}

/**
 * Converts an object of type 'CodeStarNotificationsUpdateNotificationRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsUpdateNotificationRuleResult(obj: CodeStarNotificationsUpdateNotificationRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsTarget
 */
export interface CodeStarNotificationsTarget {
  /**
   * @schema CodeStarNotificationsTarget#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema CodeStarNotificationsTarget#TargetAddress
   */
  readonly targetAddress?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsTarget(obj: CodeStarNotificationsTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetType': obj.targetType,
    'TargetAddress': obj.targetAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsEventTypeSummary
 */
export interface CodeStarNotificationsEventTypeSummary {
  /**
   * @schema CodeStarNotificationsEventTypeSummary#EventTypeId
   */
  readonly eventTypeId?: string;

  /**
   * @schema CodeStarNotificationsEventTypeSummary#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema CodeStarNotificationsEventTypeSummary#EventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * @schema CodeStarNotificationsEventTypeSummary#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsEventTypeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsEventTypeSummary(obj: CodeStarNotificationsEventTypeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventTypeId': obj.eventTypeId,
    'ServiceName': obj.serviceName,
    'EventTypeName': obj.eventTypeName,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsTargetSummary
 */
export interface CodeStarNotificationsTargetSummary {
  /**
   * @schema CodeStarNotificationsTargetSummary#TargetAddress
   */
  readonly targetAddress?: string;

  /**
   * @schema CodeStarNotificationsTargetSummary#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema CodeStarNotificationsTargetSummary#TargetStatus
   */
  readonly targetStatus?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsTargetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsTargetSummary(obj: CodeStarNotificationsTargetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetAddress': obj.targetAddress,
    'TargetType': obj.targetType,
    'TargetStatus': obj.targetStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListEventTypesFilter
 */
export interface CodeStarNotificationsListEventTypesFilter {
  /**
   * @schema CodeStarNotificationsListEventTypesFilter#Name
   */
  readonly name?: string;

  /**
   * @schema CodeStarNotificationsListEventTypesFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsListEventTypesFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListEventTypesFilter(obj: CodeStarNotificationsListEventTypesFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListNotificationRulesFilter
 */
export interface CodeStarNotificationsListNotificationRulesFilter {
  /**
   * @schema CodeStarNotificationsListNotificationRulesFilter#Name
   */
  readonly name?: string;

  /**
   * @schema CodeStarNotificationsListNotificationRulesFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsListNotificationRulesFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListNotificationRulesFilter(obj: CodeStarNotificationsListNotificationRulesFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsNotificationRuleSummary
 */
export interface CodeStarNotificationsNotificationRuleSummary {
  /**
   * @schema CodeStarNotificationsNotificationRuleSummary#Id
   */
  readonly id?: string;

  /**
   * @schema CodeStarNotificationsNotificationRuleSummary#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsNotificationRuleSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsNotificationRuleSummary(obj: CodeStarNotificationsNotificationRuleSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarNotificationsListTargetsFilter
 */
export interface CodeStarNotificationsListTargetsFilter {
  /**
   * @schema CodeStarNotificationsListTargetsFilter#Name
   */
  readonly name?: string;

  /**
   * @schema CodeStarNotificationsListTargetsFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CodeStarNotificationsListTargetsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarNotificationsListTargetsFilter(obj: CodeStarNotificationsListTargetsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
