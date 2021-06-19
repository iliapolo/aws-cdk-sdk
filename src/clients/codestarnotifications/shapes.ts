/**
 * @schema CodeStarNotificationsCreateNotificationRuleRequest
 */
export interface CodeStarNotificationsCreateNotificationRuleRequest {
  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#EventTypeIds
   */
  readonly eventTypeIds: string[];

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#Targets
   */
  readonly targets: CodeStarNotificationsTarget[];

  /**
   * @schema CodeStarNotificationsCreateNotificationRuleRequest#DetailType
   */
  readonly detailType: string;

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
 * @schema CodeStarNotificationsCreateNotificationRuleResult
 */
export interface CodeStarNotificationsCreateNotificationRuleResult {
  /**
   * @schema CodeStarNotificationsCreateNotificationRuleResult#Arn
   */
  readonly arn?: string;

}

/**
 * @schema CodeStarNotificationsDeleteNotificationRuleRequest
 */
export interface CodeStarNotificationsDeleteNotificationRuleRequest {
  /**
   * @schema CodeStarNotificationsDeleteNotificationRuleRequest#Arn
   */
  readonly arn: string;

}

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
 * @schema CodeStarNotificationsDeleteTargetRequest
 */
export interface CodeStarNotificationsDeleteTargetRequest {
  /**
   * @schema CodeStarNotificationsDeleteTargetRequest#TargetAddress
   */
  readonly targetAddress: string;

  /**
   * @schema CodeStarNotificationsDeleteTargetRequest#ForceUnsubscribeAll
   */
  readonly forceUnsubscribeAll?: boolean;

}

/**
 * @schema CodeStarNotificationsDeleteTargetResult
 */
export interface CodeStarNotificationsDeleteTargetResult {
}

/**
 * @schema CodeStarNotificationsDescribeNotificationRuleRequest
 */
export interface CodeStarNotificationsDescribeNotificationRuleRequest {
  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema CodeStarNotificationsDescribeNotificationRuleResult
 */
export interface CodeStarNotificationsDescribeNotificationRuleResult {
  /**
   * @schema CodeStarNotificationsDescribeNotificationRuleResult#Arn
   */
  readonly arn: string;

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
 * @schema CodeStarNotificationsListTagsForResourceRequest
 */
export interface CodeStarNotificationsListTagsForResourceRequest {
  /**
   * @schema CodeStarNotificationsListTagsForResourceRequest#Arn
   */
  readonly arn: string;

}

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
 * @schema CodeStarNotificationsSubscribeRequest
 */
export interface CodeStarNotificationsSubscribeRequest {
  /**
   * @schema CodeStarNotificationsSubscribeRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema CodeStarNotificationsSubscribeRequest#Target
   */
  readonly target: CodeStarNotificationsTarget;

  /**
   * @schema CodeStarNotificationsSubscribeRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

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
 * @schema CodeStarNotificationsTagResourceRequest
 */
export interface CodeStarNotificationsTagResourceRequest {
  /**
   * @schema CodeStarNotificationsTagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema CodeStarNotificationsTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

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
 * @schema CodeStarNotificationsUnsubscribeRequest
 */
export interface CodeStarNotificationsUnsubscribeRequest {
  /**
   * @schema CodeStarNotificationsUnsubscribeRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema CodeStarNotificationsUnsubscribeRequest#TargetAddress
   */
  readonly targetAddress: string;

}

/**
 * @schema CodeStarNotificationsUnsubscribeResult
 */
export interface CodeStarNotificationsUnsubscribeResult {
  /**
   * @schema CodeStarNotificationsUnsubscribeResult#Arn
   */
  readonly arn: string;

}

/**
 * @schema CodeStarNotificationsUntagResourceRequest
 */
export interface CodeStarNotificationsUntagResourceRequest {
  /**
   * @schema CodeStarNotificationsUntagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema CodeStarNotificationsUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema CodeStarNotificationsUntagResourceResult
 */
export interface CodeStarNotificationsUntagResourceResult {
}

/**
 * @schema CodeStarNotificationsUpdateNotificationRuleRequest
 */
export interface CodeStarNotificationsUpdateNotificationRuleRequest {
  /**
   * @schema CodeStarNotificationsUpdateNotificationRuleRequest#Arn
   */
  readonly arn: string;

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
 * @schema CodeStarNotificationsUpdateNotificationRuleResult
 */
export interface CodeStarNotificationsUpdateNotificationRuleResult {
}

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
 * @schema CodeStarNotificationsListEventTypesFilter
 */
export interface CodeStarNotificationsListEventTypesFilter {
  /**
   * @schema CodeStarNotificationsListEventTypesFilter#Name
   */
  readonly name: string;

  /**
   * @schema CodeStarNotificationsListEventTypesFilter#Value
   */
  readonly value: string;

}

/**
 * @schema CodeStarNotificationsListNotificationRulesFilter
 */
export interface CodeStarNotificationsListNotificationRulesFilter {
  /**
   * @schema CodeStarNotificationsListNotificationRulesFilter#Name
   */
  readonly name: string;

  /**
   * @schema CodeStarNotificationsListNotificationRulesFilter#Value
   */
  readonly value: string;

}

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
 * @schema CodeStarNotificationsListTargetsFilter
 */
export interface CodeStarNotificationsListTargetsFilter {
  /**
   * @schema CodeStarNotificationsListTargetsFilter#Name
   */
  readonly name: string;

  /**
   * @schema CodeStarNotificationsListTargetsFilter#Value
   */
  readonly value: string;

}
