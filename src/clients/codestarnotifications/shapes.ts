/**
 * @schema CreateNotificationRuleRequest
 */
export interface CreateNotificationRuleRequest {
  /**
   * @schema CreateNotificationRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateNotificationRuleRequest#EventTypeIds
   */
  readonly eventTypeIds: string[];

  /**
   * @schema CreateNotificationRuleRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema CreateNotificationRuleRequest#Targets
   */
  readonly targets: Target[];

  /**
   * @schema CreateNotificationRuleRequest#DetailType
   */
  readonly detailType: string;

  /**
   * @schema CreateNotificationRuleRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateNotificationRuleRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateNotificationRuleRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema CreateNotificationRuleResult
 */
export interface CreateNotificationRuleResult {
  /**
   * @schema CreateNotificationRuleResult#Arn
   */
  readonly arn?: string;

}

/**
 * @schema DeleteNotificationRuleRequest
 */
export interface DeleteNotificationRuleRequest {
  /**
   * @schema DeleteNotificationRuleRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteNotificationRuleResult
 */
export interface DeleteNotificationRuleResult {
  /**
   * @schema DeleteNotificationRuleResult#Arn
   */
  readonly arn?: string;

}

/**
 * @schema DeleteTargetRequest
 */
export interface DeleteTargetRequest {
  /**
   * @schema DeleteTargetRequest#TargetAddress
   */
  readonly targetAddress: string;

  /**
   * @schema DeleteTargetRequest#ForceUnsubscribeAll
   */
  readonly forceUnsubscribeAll?: boolean;

}

/**
 * @schema DeleteTargetResult
 */
export interface DeleteTargetResult {
}

/**
 * @schema DescribeNotificationRuleRequest
 */
export interface DescribeNotificationRuleRequest {
  /**
   * @schema DescribeNotificationRuleRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema DescribeNotificationRuleResult
 */
export interface DescribeNotificationRuleResult {
  /**
   * @schema DescribeNotificationRuleResult#Arn
   */
  readonly arn: string;

  /**
   * @schema DescribeNotificationRuleResult#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeNotificationRuleResult#EventTypes
   */
  readonly eventTypes?: EventTypeSummary[];

  /**
   * @schema DescribeNotificationRuleResult#Resource
   */
  readonly resource?: string;

  /**
   * @schema DescribeNotificationRuleResult#Targets
   */
  readonly targets?: TargetSummary[];

  /**
   * @schema DescribeNotificationRuleResult#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema DescribeNotificationRuleResult#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DescribeNotificationRuleResult#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeNotificationRuleResult#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema DescribeNotificationRuleResult#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema DescribeNotificationRuleResult#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListEventTypesRequest
 */
export interface ListEventTypesRequest {
  /**
   * @schema ListEventTypesRequest#Filters
   */
  readonly filters?: ListEventTypesFilter[];

  /**
   * @schema ListEventTypesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEventTypesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEventTypesResult
 */
export interface ListEventTypesResult {
  /**
   * @schema ListEventTypesResult#EventTypes
   */
  readonly eventTypes?: EventTypeSummary[];

  /**
   * @schema ListEventTypesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNotificationRulesRequest
 */
export interface ListNotificationRulesRequest {
  /**
   * @schema ListNotificationRulesRequest#Filters
   */
  readonly filters?: ListNotificationRulesFilter[];

  /**
   * @schema ListNotificationRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNotificationRulesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListNotificationRulesResult
 */
export interface ListNotificationRulesResult {
  /**
   * @schema ListNotificationRulesResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNotificationRulesResult#NotificationRules
   */
  readonly notificationRules?: NotificationRuleSummary[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema ListTagsForResourceResult
 */
export interface ListTagsForResourceResult {
  /**
   * @schema ListTagsForResourceResult#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListTargetsRequest
 */
export interface ListTargetsRequest {
  /**
   * @schema ListTargetsRequest#Filters
   */
  readonly filters?: ListTargetsFilter[];

  /**
   * @schema ListTargetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTargetsResult
 */
export interface ListTargetsResult {
  /**
   * @schema ListTargetsResult#Targets
   */
  readonly targets?: TargetSummary[];

  /**
   * @schema ListTargetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SubscribeRequest
 */
export interface SubscribeRequest {
  /**
   * @schema SubscribeRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema SubscribeRequest#Target
   */
  readonly target: Target;

  /**
   * @schema SubscribeRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema SubscribeResult
 */
export interface SubscribeResult {
  /**
   * @schema SubscribeResult#Arn
   */
  readonly arn?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResult
 */
export interface TagResourceResult {
  /**
   * @schema TagResourceResult#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema UnsubscribeRequest
 */
export interface UnsubscribeRequest {
  /**
   * @schema UnsubscribeRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema UnsubscribeRequest#TargetAddress
   */
  readonly targetAddress: string;

}

/**
 * @schema UnsubscribeResult
 */
export interface UnsubscribeResult {
  /**
   * @schema UnsubscribeResult#Arn
   */
  readonly arn: string;

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResult
 */
export interface UntagResourceResult {
}

/**
 * @schema UpdateNotificationRuleRequest
 */
export interface UpdateNotificationRuleRequest {
  /**
   * @schema UpdateNotificationRuleRequest#Arn
   */
  readonly arn: string;

  /**
   * @schema UpdateNotificationRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateNotificationRuleRequest#Status
   */
  readonly status?: string;

  /**
   * @schema UpdateNotificationRuleRequest#EventTypeIds
   */
  readonly eventTypeIds?: string[];

  /**
   * @schema UpdateNotificationRuleRequest#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema UpdateNotificationRuleRequest#DetailType
   */
  readonly detailType?: string;

}

/**
 * @schema UpdateNotificationRuleResult
 */
export interface UpdateNotificationRuleResult {
}

/**
 * @schema Target
 */
export interface Target {
  /**
   * @schema Target#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema Target#TargetAddress
   */
  readonly targetAddress?: string;

}

/**
 * @schema EventTypeSummary
 */
export interface EventTypeSummary {
  /**
   * @schema EventTypeSummary#EventTypeId
   */
  readonly eventTypeId?: string;

  /**
   * @schema EventTypeSummary#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema EventTypeSummary#EventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * @schema EventTypeSummary#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema TargetSummary
 */
export interface TargetSummary {
  /**
   * @schema TargetSummary#TargetAddress
   */
  readonly targetAddress?: string;

  /**
   * @schema TargetSummary#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema TargetSummary#TargetStatus
   */
  readonly targetStatus?: string;

}

/**
 * @schema ListEventTypesFilter
 */
export interface ListEventTypesFilter {
  /**
   * @schema ListEventTypesFilter#Name
   */
  readonly name: string;

  /**
   * @schema ListEventTypesFilter#Value
   */
  readonly value: string;

}

/**
 * @schema ListNotificationRulesFilter
 */
export interface ListNotificationRulesFilter {
  /**
   * @schema ListNotificationRulesFilter#Name
   */
  readonly name: string;

  /**
   * @schema ListNotificationRulesFilter#Value
   */
  readonly value: string;

}

/**
 * @schema NotificationRuleSummary
 */
export interface NotificationRuleSummary {
  /**
   * @schema NotificationRuleSummary#Id
   */
  readonly id?: string;

  /**
   * @schema NotificationRuleSummary#Arn
   */
  readonly arn?: string;

}

/**
 * @schema ListTargetsFilter
 */
export interface ListTargetsFilter {
  /**
   * @schema ListTargetsFilter#Name
   */
  readonly name: string;

  /**
   * @schema ListTargetsFilter#Value
   */
  readonly value: string;

}
