/**
 * @schema ActivateEventSourceRequest
 */
export interface ActivateEventSourceRequest {
  /**
   * @schema ActivateEventSourceRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CancelReplayRequest
 */
export interface CancelReplayRequest {
  /**
   * @schema CancelReplayRequest#ReplayName
   */
  readonly replayName: string;

}

/**
 * @schema CancelReplayResponse
 */
export interface CancelReplayResponse {
  /**
   * @schema CancelReplayResponse#ReplayArn
   */
  readonly replayArn?: string;

  /**
   * @schema CancelReplayResponse#State
   */
  readonly state?: string;

  /**
   * @schema CancelReplayResponse#StateReason
   */
  readonly stateReason?: string;

}

/**
 * @schema CreateArchiveRequest
 */
export interface CreateArchiveRequest {
  /**
   * @schema CreateArchiveRequest#ArchiveName
   */
  readonly archiveName: string;

  /**
   * @schema CreateArchiveRequest#EventSourceArn
   */
  readonly eventSourceArn: string;

  /**
   * @schema CreateArchiveRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateArchiveRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema CreateArchiveRequest#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema CreateArchiveResponse
 */
export interface CreateArchiveResponse {
  /**
   * @schema CreateArchiveResponse#ArchiveArn
   */
  readonly archiveArn?: string;

  /**
   * @schema CreateArchiveResponse#State
   */
  readonly state?: string;

  /**
   * @schema CreateArchiveResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema CreateArchiveResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema CreateEventBusRequest
 */
export interface CreateEventBusRequest {
  /**
   * @schema CreateEventBusRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateEventBusRequest#EventSourceName
   */
  readonly eventSourceName?: string;

  /**
   * @schema CreateEventBusRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateEventBusResponse
 */
export interface CreateEventBusResponse {
  /**
   * @schema CreateEventBusResponse#EventBusArn
   */
  readonly eventBusArn?: string;

}

/**
 * @schema CreatePartnerEventSourceRequest
 */
export interface CreatePartnerEventSourceRequest {
  /**
   * @schema CreatePartnerEventSourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreatePartnerEventSourceRequest#Account
   */
  readonly account: string;

}

/**
 * @schema CreatePartnerEventSourceResponse
 */
export interface CreatePartnerEventSourceResponse {
  /**
   * @schema CreatePartnerEventSourceResponse#EventSourceArn
   */
  readonly eventSourceArn?: string;

}

/**
 * @schema DeactivateEventSourceRequest
 */
export interface DeactivateEventSourceRequest {
  /**
   * @schema DeactivateEventSourceRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteArchiveRequest
 */
export interface DeleteArchiveRequest {
  /**
   * @schema DeleteArchiveRequest#ArchiveName
   */
  readonly archiveName: string;

}

/**
 * @schema DeleteArchiveResponse
 */
export interface DeleteArchiveResponse {
}

/**
 * @schema DeleteEventBusRequest
 */
export interface DeleteEventBusRequest {
  /**
   * @schema DeleteEventBusRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeletePartnerEventSourceRequest
 */
export interface DeletePartnerEventSourceRequest {
  /**
   * @schema DeletePartnerEventSourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema DeletePartnerEventSourceRequest#Account
   */
  readonly account: string;

}

/**
 * @schema DeleteRuleRequest
 */
export interface DeleteRuleRequest {
  /**
   * @schema DeleteRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema DeleteRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema DeleteRuleRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema DescribeArchiveRequest
 */
export interface DescribeArchiveRequest {
  /**
   * @schema DescribeArchiveRequest#ArchiveName
   */
  readonly archiveName: string;

}

/**
 * @schema DescribeArchiveResponse
 */
export interface DescribeArchiveResponse {
  /**
   * @schema DescribeArchiveResponse#ArchiveArn
   */
  readonly archiveArn?: string;

  /**
   * @schema DescribeArchiveResponse#ArchiveName
   */
  readonly archiveName?: string;

  /**
   * @schema DescribeArchiveResponse#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema DescribeArchiveResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeArchiveResponse#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema DescribeArchiveResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeArchiveResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema DescribeArchiveResponse#RetentionDays
   */
  readonly retentionDays?: number;

  /**
   * @schema DescribeArchiveResponse#SizeBytes
   */
  readonly sizeBytes?: number;

  /**
   * @schema DescribeArchiveResponse#EventCount
   */
  readonly eventCount?: number;

  /**
   * @schema DescribeArchiveResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema DescribeEventBusRequest
 */
export interface DescribeEventBusRequest {
  /**
   * @schema DescribeEventBusRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema DescribeEventBusResponse
 */
export interface DescribeEventBusResponse {
  /**
   * @schema DescribeEventBusResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeEventBusResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeEventBusResponse#Policy
   */
  readonly policy?: string;

}

/**
 * @schema DescribeEventSourceRequest
 */
export interface DescribeEventSourceRequest {
  /**
   * @schema DescribeEventSourceRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeEventSourceResponse
 */
export interface DescribeEventSourceResponse {
  /**
   * @schema DescribeEventSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeEventSourceResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DescribeEventSourceResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeEventSourceResponse#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema DescribeEventSourceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeEventSourceResponse#State
   */
  readonly state?: string;

}

/**
 * @schema DescribePartnerEventSourceRequest
 */
export interface DescribePartnerEventSourceRequest {
  /**
   * @schema DescribePartnerEventSourceRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribePartnerEventSourceResponse
 */
export interface DescribePartnerEventSourceResponse {
  /**
   * @schema DescribePartnerEventSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribePartnerEventSourceResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema DescribeReplayRequest
 */
export interface DescribeReplayRequest {
  /**
   * @schema DescribeReplayRequest#ReplayName
   */
  readonly replayName: string;

}

/**
 * @schema DescribeReplayResponse
 */
export interface DescribeReplayResponse {
  /**
   * @schema DescribeReplayResponse#ReplayName
   */
  readonly replayName?: string;

  /**
   * @schema DescribeReplayResponse#ReplayArn
   */
  readonly replayArn?: string;

  /**
   * @schema DescribeReplayResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeReplayResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeReplayResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema DescribeReplayResponse#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema DescribeReplayResponse#Destination
   */
  readonly destination?: ReplayDestination;

  /**
   * @schema DescribeReplayResponse#EventStartTime
   */
  readonly eventStartTime?: string;

  /**
   * @schema DescribeReplayResponse#EventEndTime
   */
  readonly eventEndTime?: string;

  /**
   * @schema DescribeReplayResponse#EventLastReplayedTime
   */
  readonly eventLastReplayedTime?: string;

  /**
   * @schema DescribeReplayResponse#ReplayStartTime
   */
  readonly replayStartTime?: string;

  /**
   * @schema DescribeReplayResponse#ReplayEndTime
   */
  readonly replayEndTime?: string;

}

/**
 * @schema DescribeRuleRequest
 */
export interface DescribeRuleRequest {
  /**
   * @schema DescribeRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema DescribeRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema DescribeRuleResponse
 */
export interface DescribeRuleResponse {
  /**
   * @schema DescribeRuleResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeRuleResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeRuleResponse#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema DescribeRuleResponse#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema DescribeRuleResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeRuleResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeRuleResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeRuleResponse#ManagedBy
   */
  readonly managedBy?: string;

  /**
   * @schema DescribeRuleResponse#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema DescribeRuleResponse#CreatedBy
   */
  readonly createdBy?: string;

}

/**
 * @schema DisableRuleRequest
 */
export interface DisableRuleRequest {
  /**
   * @schema DisableRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema DisableRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema EnableRuleRequest
 */
export interface EnableRuleRequest {
  /**
   * @schema EnableRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema EnableRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema ListArchivesRequest
 */
export interface ListArchivesRequest {
  /**
   * @schema ListArchivesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema ListArchivesRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema ListArchivesRequest#State
   */
  readonly state?: string;

  /**
   * @schema ListArchivesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListArchivesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListArchivesResponse
 */
export interface ListArchivesResponse {
  /**
   * @schema ListArchivesResponse#Archives
   */
  readonly archives?: Archive[];

  /**
   * @schema ListArchivesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEventBusesRequest
 */
export interface ListEventBusesRequest {
  /**
   * @schema ListEventBusesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema ListEventBusesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEventBusesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListEventBusesResponse
 */
export interface ListEventBusesResponse {
  /**
   * @schema ListEventBusesResponse#EventBuses
   */
  readonly eventBuses?: EventBus[];

  /**
   * @schema ListEventBusesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEventSourcesRequest
 */
export interface ListEventSourcesRequest {
  /**
   * @schema ListEventSourcesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema ListEventSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEventSourcesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListEventSourcesResponse
 */
export interface ListEventSourcesResponse {
  /**
   * @schema ListEventSourcesResponse#EventSources
   */
  readonly eventSources?: EventSource[];

  /**
   * @schema ListEventSourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPartnerEventSourceAccountsRequest
 */
export interface ListPartnerEventSourceAccountsRequest {
  /**
   * @schema ListPartnerEventSourceAccountsRequest#EventSourceName
   */
  readonly eventSourceName: string;

  /**
   * @schema ListPartnerEventSourceAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPartnerEventSourceAccountsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListPartnerEventSourceAccountsResponse
 */
export interface ListPartnerEventSourceAccountsResponse {
  /**
   * @schema ListPartnerEventSourceAccountsResponse#PartnerEventSourceAccounts
   */
  readonly partnerEventSourceAccounts?: PartnerEventSourceAccount[];

  /**
   * @schema ListPartnerEventSourceAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPartnerEventSourcesRequest
 */
export interface ListPartnerEventSourcesRequest {
  /**
   * @schema ListPartnerEventSourcesRequest#NamePrefix
   */
  readonly namePrefix: string;

  /**
   * @schema ListPartnerEventSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPartnerEventSourcesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListPartnerEventSourcesResponse
 */
export interface ListPartnerEventSourcesResponse {
  /**
   * @schema ListPartnerEventSourcesResponse#PartnerEventSources
   */
  readonly partnerEventSources?: PartnerEventSource[];

  /**
   * @schema ListPartnerEventSourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListReplaysRequest
 */
export interface ListReplaysRequest {
  /**
   * @schema ListReplaysRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema ListReplaysRequest#State
   */
  readonly state?: string;

  /**
   * @schema ListReplaysRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema ListReplaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListReplaysRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListReplaysResponse
 */
export interface ListReplaysResponse {
  /**
   * @schema ListReplaysResponse#Replays
   */
  readonly replays?: Replay[];

  /**
   * @schema ListReplaysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRuleNamesByTargetRequest
 */
export interface ListRuleNamesByTargetRequest {
  /**
   * @schema ListRuleNamesByTargetRequest#TargetArn
   */
  readonly targetArn: string;

  /**
   * @schema ListRuleNamesByTargetRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema ListRuleNamesByTargetRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRuleNamesByTargetRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListRuleNamesByTargetResponse
 */
export interface ListRuleNamesByTargetResponse {
  /**
   * @schema ListRuleNamesByTargetResponse#RuleNames
   */
  readonly ruleNames?: string[];

  /**
   * @schema ListRuleNamesByTargetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRulesRequest
 */
export interface ListRulesRequest {
  /**
   * @schema ListRulesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema ListRulesRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema ListRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRulesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListRulesResponse
 */
export interface ListRulesResponse {
  /**
   * @schema ListRulesResponse#Rules
   */
  readonly rules?: Rule[];

  /**
   * @schema ListRulesResponse#NextToken
   */
  readonly nextToken?: string;

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
 * @schema ListTargetsByRuleRequest
 */
export interface ListTargetsByRuleRequest {
  /**
   * @schema ListTargetsByRuleRequest#Rule
   */
  readonly rule: string;

  /**
   * @schema ListTargetsByRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema ListTargetsByRuleRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTargetsByRuleRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListTargetsByRuleResponse
 */
export interface ListTargetsByRuleResponse {
  /**
   * @schema ListTargetsByRuleResponse#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema ListTargetsByRuleResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutEventsRequest
 */
export interface PutEventsRequest {
  /**
   * @schema PutEventsRequest#Entries
   */
  readonly entries: PutEventsRequestEntry[];

}

/**
 * @schema PutEventsResponse
 */
export interface PutEventsResponse {
  /**
   * @schema PutEventsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema PutEventsResponse#Entries
   */
  readonly entries?: PutEventsResultEntry[];

}

/**
 * @schema PutPartnerEventsRequest
 */
export interface PutPartnerEventsRequest {
  /**
   * @schema PutPartnerEventsRequest#Entries
   */
  readonly entries: PutPartnerEventsRequestEntry[];

}

/**
 * @schema PutPartnerEventsResponse
 */
export interface PutPartnerEventsResponse {
  /**
   * @schema PutPartnerEventsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema PutPartnerEventsResponse#Entries
   */
  readonly entries?: PutPartnerEventsResultEntry[];

}

/**
 * @schema PutPermissionRequest
 */
export interface PutPermissionRequest {
  /**
   * @schema PutPermissionRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema PutPermissionRequest#Action
   */
  readonly action?: string;

  /**
   * @schema PutPermissionRequest#Principal
   */
  readonly principal?: string;

  /**
   * @schema PutPermissionRequest#StatementId
   */
  readonly statementId?: string;

  /**
   * @schema PutPermissionRequest#Condition
   */
  readonly condition?: Condition;

  /**
   * @schema PutPermissionRequest#Policy
   */
  readonly policy?: string;

}

/**
 * @schema PutRuleRequest
 */
export interface PutRuleRequest {
  /**
   * @schema PutRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema PutRuleRequest#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema PutRuleRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema PutRuleRequest#State
   */
  readonly state?: string;

  /**
   * @schema PutRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema PutRuleRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PutRuleRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema PutRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema PutRuleResponse
 */
export interface PutRuleResponse {
  /**
   * @schema PutRuleResponse#RuleArn
   */
  readonly ruleArn?: string;

}

/**
 * @schema PutTargetsRequest
 */
export interface PutTargetsRequest {
  /**
   * @schema PutTargetsRequest#Rule
   */
  readonly rule: string;

  /**
   * @schema PutTargetsRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema PutTargetsRequest#Targets
   */
  readonly targets: Target[];

}

/**
 * @schema PutTargetsResponse
 */
export interface PutTargetsResponse {
  /**
   * @schema PutTargetsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema PutTargetsResponse#FailedEntries
   */
  readonly failedEntries?: PutTargetsResultEntry[];

}

/**
 * @schema RemovePermissionRequest
 */
export interface RemovePermissionRequest {
  /**
   * @schema RemovePermissionRequest#StatementId
   */
  readonly statementId?: string;

  /**
   * @schema RemovePermissionRequest#RemoveAllPermissions
   */
  readonly removeAllPermissions?: boolean;

  /**
   * @schema RemovePermissionRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema RemoveTargetsRequest
 */
export interface RemoveTargetsRequest {
  /**
   * @schema RemoveTargetsRequest#Rule
   */
  readonly rule: string;

  /**
   * @schema RemoveTargetsRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema RemoveTargetsRequest#Ids
   */
  readonly ids: string[];

  /**
   * @schema RemoveTargetsRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema RemoveTargetsResponse
 */
export interface RemoveTargetsResponse {
  /**
   * @schema RemoveTargetsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema RemoveTargetsResponse#FailedEntries
   */
  readonly failedEntries?: RemoveTargetsResultEntry[];

}

/**
 * @schema StartReplayRequest
 */
export interface StartReplayRequest {
  /**
   * @schema StartReplayRequest#ReplayName
   */
  readonly replayName: string;

  /**
   * @schema StartReplayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema StartReplayRequest#EventSourceArn
   */
  readonly eventSourceArn: string;

  /**
   * @schema StartReplayRequest#EventStartTime
   */
  readonly eventStartTime: string;

  /**
   * @schema StartReplayRequest#EventEndTime
   */
  readonly eventEndTime: string;

  /**
   * @schema StartReplayRequest#Destination
   */
  readonly destination: ReplayDestination;

}

/**
 * @schema StartReplayResponse
 */
export interface StartReplayResponse {
  /**
   * @schema StartReplayResponse#ReplayArn
   */
  readonly replayArn?: string;

  /**
   * @schema StartReplayResponse#State
   */
  readonly state?: string;

  /**
   * @schema StartReplayResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema StartReplayResponse#ReplayStartTime
   */
  readonly replayStartTime?: string;

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
 * @schema TestEventPatternRequest
 */
export interface TestEventPatternRequest {
  /**
   * @schema TestEventPatternRequest#EventPattern
   */
  readonly eventPattern: string;

  /**
   * @schema TestEventPatternRequest#Event
   */
  readonly event: string;

}

/**
 * @schema TestEventPatternResponse
 */
export interface TestEventPatternResponse {
  /**
   * @schema TestEventPatternResponse#Result
   */
  readonly result?: boolean;

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
 * @schema UpdateArchiveRequest
 */
export interface UpdateArchiveRequest {
  /**
   * @schema UpdateArchiveRequest#ArchiveName
   */
  readonly archiveName: string;

  /**
   * @schema UpdateArchiveRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateArchiveRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema UpdateArchiveRequest#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema UpdateArchiveResponse
 */
export interface UpdateArchiveResponse {
  /**
   * @schema UpdateArchiveResponse#ArchiveArn
   */
  readonly archiveArn?: string;

  /**
   * @schema UpdateArchiveResponse#State
   */
  readonly state?: string;

  /**
   * @schema UpdateArchiveResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema UpdateArchiveResponse#CreationTime
   */
  readonly creationTime?: string;

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
 * @schema ReplayDestination
 */
export interface ReplayDestination {
  /**
   * @schema ReplayDestination#Arn
   */
  readonly arn: string;

  /**
   * @schema ReplayDestination#FilterArns
   */
  readonly filterArns?: string[];

}

/**
 * @schema Archive
 */
export interface Archive {
  /**
   * @schema Archive#ArchiveName
   */
  readonly archiveName?: string;

  /**
   * @schema Archive#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema Archive#State
   */
  readonly state?: string;

  /**
   * @schema Archive#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema Archive#RetentionDays
   */
  readonly retentionDays?: number;

  /**
   * @schema Archive#SizeBytes
   */
  readonly sizeBytes?: number;

  /**
   * @schema Archive#EventCount
   */
  readonly eventCount?: number;

  /**
   * @schema Archive#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema EventBus
 */
export interface EventBus {
  /**
   * @schema EventBus#Name
   */
  readonly name?: string;

  /**
   * @schema EventBus#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBus#Policy
   */
  readonly policy?: string;

}

/**
 * @schema EventSource
 */
export interface EventSource {
  /**
   * @schema EventSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventSource#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema EventSource#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventSource#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema EventSource#Name
   */
  readonly name?: string;

  /**
   * @schema EventSource#State
   */
  readonly state?: string;

}

/**
 * @schema PartnerEventSourceAccount
 */
export interface PartnerEventSourceAccount {
  /**
   * @schema PartnerEventSourceAccount#Account
   */
  readonly account?: string;

  /**
   * @schema PartnerEventSourceAccount#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema PartnerEventSourceAccount#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema PartnerEventSourceAccount#State
   */
  readonly state?: string;

}

/**
 * @schema PartnerEventSource
 */
export interface PartnerEventSource {
  /**
   * @schema PartnerEventSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema PartnerEventSource#Name
   */
  readonly name?: string;

}

/**
 * @schema Replay
 */
export interface Replay {
  /**
   * @schema Replay#ReplayName
   */
  readonly replayName?: string;

  /**
   * @schema Replay#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema Replay#State
   */
  readonly state?: string;

  /**
   * @schema Replay#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema Replay#EventStartTime
   */
  readonly eventStartTime?: string;

  /**
   * @schema Replay#EventEndTime
   */
  readonly eventEndTime?: string;

  /**
   * @schema Replay#EventLastReplayedTime
   */
  readonly eventLastReplayedTime?: string;

  /**
   * @schema Replay#ReplayStartTime
   */
  readonly replayStartTime?: string;

  /**
   * @schema Replay#ReplayEndTime
   */
  readonly replayEndTime?: string;

}

/**
 * @schema Rule
 */
export interface Rule {
  /**
   * @schema Rule#Name
   */
  readonly name?: string;

  /**
   * @schema Rule#Arn
   */
  readonly arn?: string;

  /**
   * @schema Rule#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema Rule#State
   */
  readonly state?: string;

  /**
   * @schema Rule#Description
   */
  readonly description?: string;

  /**
   * @schema Rule#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema Rule#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Rule#ManagedBy
   */
  readonly managedBy?: string;

  /**
   * @schema Rule#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema Target
 */
export interface Target {
  /**
   * @schema Target#Id
   */
  readonly id: string;

  /**
   * @schema Target#Arn
   */
  readonly arn: string;

  /**
   * @schema Target#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Target#Input
   */
  readonly input?: string;

  /**
   * @schema Target#InputPath
   */
  readonly inputPath?: string;

  /**
   * @schema Target#InputTransformer
   */
  readonly inputTransformer?: InputTransformer;

  /**
   * @schema Target#KinesisParameters
   */
  readonly kinesisParameters?: KinesisParameters;

  /**
   * @schema Target#RunCommandParameters
   */
  readonly runCommandParameters?: RunCommandParameters;

  /**
   * @schema Target#EcsParameters
   */
  readonly ecsParameters?: EcsParameters;

  /**
   * @schema Target#BatchParameters
   */
  readonly batchParameters?: BatchParameters;

  /**
   * @schema Target#SqsParameters
   */
  readonly sqsParameters?: SqsParameters;

  /**
   * @schema Target#HttpParameters
   */
  readonly httpParameters?: HttpParameters;

  /**
   * @schema Target#RedshiftDataParameters
   */
  readonly redshiftDataParameters?: RedshiftDataParameters;

  /**
   * @schema Target#DeadLetterConfig
   */
  readonly deadLetterConfig?: DeadLetterConfig;

  /**
   * @schema Target#RetryPolicy
   */
  readonly retryPolicy?: RetryPolicy;

}

/**
 * @schema PutEventsRequestEntry
 */
export interface PutEventsRequestEntry {
  /**
   * @schema PutEventsRequestEntry#Time
   */
  readonly time?: string;

  /**
   * @schema PutEventsRequestEntry#Source
   */
  readonly source?: string;

  /**
   * @schema PutEventsRequestEntry#Resources
   */
  readonly resources?: string[];

  /**
   * @schema PutEventsRequestEntry#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema PutEventsRequestEntry#Detail
   */
  readonly detail?: string;

  /**
   * @schema PutEventsRequestEntry#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema PutEventsResultEntry
 */
export interface PutEventsResultEntry {
  /**
   * @schema PutEventsResultEntry#EventId
   */
  readonly eventId?: string;

  /**
   * @schema PutEventsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema PutEventsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema PutPartnerEventsRequestEntry
 */
export interface PutPartnerEventsRequestEntry {
  /**
   * @schema PutPartnerEventsRequestEntry#Time
   */
  readonly time?: string;

  /**
   * @schema PutPartnerEventsRequestEntry#Source
   */
  readonly source?: string;

  /**
   * @schema PutPartnerEventsRequestEntry#Resources
   */
  readonly resources?: string[];

  /**
   * @schema PutPartnerEventsRequestEntry#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema PutPartnerEventsRequestEntry#Detail
   */
  readonly detail?: string;

}

/**
 * @schema PutPartnerEventsResultEntry
 */
export interface PutPartnerEventsResultEntry {
  /**
   * @schema PutPartnerEventsResultEntry#EventId
   */
  readonly eventId?: string;

  /**
   * @schema PutPartnerEventsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema PutPartnerEventsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Condition
 */
export interface Condition {
  /**
   * @schema Condition#Type
   */
  readonly type: string;

  /**
   * @schema Condition#Key
   */
  readonly key: string;

  /**
   * @schema Condition#Value
   */
  readonly value: string;

}

/**
 * @schema PutTargetsResultEntry
 */
export interface PutTargetsResultEntry {
  /**
   * @schema PutTargetsResultEntry#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema PutTargetsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema PutTargetsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema RemoveTargetsResultEntry
 */
export interface RemoveTargetsResultEntry {
  /**
   * @schema RemoveTargetsResultEntry#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema RemoveTargetsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema RemoveTargetsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema InputTransformer
 */
export interface InputTransformer {
  /**
   * @schema InputTransformer#InputPathsMap
   */
  readonly inputPathsMap?: { [key: string]: string };

  /**
   * @schema InputTransformer#InputTemplate
   */
  readonly inputTemplate: string;

}

/**
 * @schema KinesisParameters
 */
export interface KinesisParameters {
  /**
   * @schema KinesisParameters#PartitionKeyPath
   */
  readonly partitionKeyPath: string;

}

/**
 * @schema RunCommandParameters
 */
export interface RunCommandParameters {
  /**
   * @schema RunCommandParameters#RunCommandTargets
   */
  readonly runCommandTargets: RunCommandTarget[];

}

/**
 * @schema EcsParameters
 */
export interface EcsParameters {
  /**
   * @schema EcsParameters#TaskDefinitionArn
   */
  readonly taskDefinitionArn: string;

  /**
   * @schema EcsParameters#TaskCount
   */
  readonly taskCount?: number;

  /**
   * @schema EcsParameters#LaunchType
   */
  readonly launchType?: string;

  /**
   * @schema EcsParameters#NetworkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema EcsParameters#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EcsParameters#Group
   */
  readonly group?: string;

}

/**
 * @schema BatchParameters
 */
export interface BatchParameters {
  /**
   * @schema BatchParameters#JobDefinition
   */
  readonly jobDefinition: string;

  /**
   * @schema BatchParameters#JobName
   */
  readonly jobName: string;

  /**
   * @schema BatchParameters#ArrayProperties
   */
  readonly arrayProperties?: BatchArrayProperties;

  /**
   * @schema BatchParameters#RetryStrategy
   */
  readonly retryStrategy?: BatchRetryStrategy;

}

/**
 * @schema SqsParameters
 */
export interface SqsParameters {
  /**
   * @schema SqsParameters#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * @schema HttpParameters
 */
export interface HttpParameters {
  /**
   * @schema HttpParameters#PathParameterValues
   */
  readonly pathParameterValues?: string[];

  /**
   * @schema HttpParameters#HeaderParameters
   */
  readonly headerParameters?: { [key: string]: string };

  /**
   * @schema HttpParameters#QueryStringParameters
   */
  readonly queryStringParameters?: { [key: string]: string };

}

/**
 * @schema RedshiftDataParameters
 */
export interface RedshiftDataParameters {
  /**
   * @schema RedshiftDataParameters#SecretManagerArn
   */
  readonly secretManagerArn?: string;

  /**
   * @schema RedshiftDataParameters#Database
   */
  readonly database: string;

  /**
   * @schema RedshiftDataParameters#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RedshiftDataParameters#Sql
   */
  readonly sql: string;

  /**
   * @schema RedshiftDataParameters#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema RedshiftDataParameters#WithEvent
   */
  readonly withEvent?: boolean;

}

/**
 * @schema DeadLetterConfig
 */
export interface DeadLetterConfig {
  /**
   * @schema DeadLetterConfig#Arn
   */
  readonly arn?: string;

}

/**
 * @schema RetryPolicy
 */
export interface RetryPolicy {
  /**
   * @schema RetryPolicy#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema RetryPolicy#MaximumEventAgeInSeconds
   */
  readonly maximumEventAgeInSeconds?: number;

}

/**
 * @schema RunCommandTarget
 */
export interface RunCommandTarget {
  /**
   * @schema RunCommandTarget#Key
   */
  readonly key: string;

  /**
   * @schema RunCommandTarget#Values
   */
  readonly values: string[];

}

/**
 * @schema NetworkConfiguration
 */
export interface NetworkConfiguration {
  /**
   * @schema NetworkConfiguration#awsvpcConfiguration
   */
  readonly awsvpcConfiguration?: AwsVpcConfiguration;

}

/**
 * @schema BatchArrayProperties
 */
export interface BatchArrayProperties {
  /**
   * @schema BatchArrayProperties#Size
   */
  readonly size?: number;

}

/**
 * @schema BatchRetryStrategy
 */
export interface BatchRetryStrategy {
  /**
   * @schema BatchRetryStrategy#Attempts
   */
  readonly attempts?: number;

}

/**
 * @schema AwsVpcConfiguration
 */
export interface AwsVpcConfiguration {
  /**
   * @schema AwsVpcConfiguration#Subnets
   */
  readonly subnets: string[];

  /**
   * @schema AwsVpcConfiguration#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema AwsVpcConfiguration#AssignPublicIp
   */
  readonly assignPublicIp?: string;

}
