/**
 * @schema EventBridgeActivateEventSourceRequest
 */
export interface EventBridgeActivateEventSourceRequest {
  /**
   * @schema EventBridgeActivateEventSourceRequest#Name
   */
  readonly name: string;

}

/**
 * @schema EventBridgeCancelReplayRequest
 */
export interface EventBridgeCancelReplayRequest {
  /**
   * @schema EventBridgeCancelReplayRequest#ReplayName
   */
  readonly replayName: string;

}

/**
 * @schema EventBridgeCancelReplayResponse
 */
export interface EventBridgeCancelReplayResponse {
  /**
   * @schema EventBridgeCancelReplayResponse#ReplayArn
   */
  readonly replayArn?: string;

  /**
   * @schema EventBridgeCancelReplayResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeCancelReplayResponse#StateReason
   */
  readonly stateReason?: string;

}

/**
 * @schema EventBridgeCreateArchiveRequest
 */
export interface EventBridgeCreateArchiveRequest {
  /**
   * @schema EventBridgeCreateArchiveRequest#ArchiveName
   */
  readonly archiveName: string;

  /**
   * @schema EventBridgeCreateArchiveRequest#EventSourceArn
   */
  readonly eventSourceArn: string;

  /**
   * @schema EventBridgeCreateArchiveRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeCreateArchiveRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeCreateArchiveRequest#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema EventBridgeCreateArchiveResponse
 */
export interface EventBridgeCreateArchiveResponse {
  /**
   * @schema EventBridgeCreateArchiveResponse#ArchiveArn
   */
  readonly archiveArn?: string;

  /**
   * @schema EventBridgeCreateArchiveResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeCreateArchiveResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeCreateArchiveResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema EventBridgeCreateEventBusRequest
 */
export interface EventBridgeCreateEventBusRequest {
  /**
   * @schema EventBridgeCreateEventBusRequest#Name
   */
  readonly name: string;

  /**
   * @schema EventBridgeCreateEventBusRequest#EventSourceName
   */
  readonly eventSourceName?: string;

  /**
   * @schema EventBridgeCreateEventBusRequest#Tags
   */
  readonly tags?: EventBridgeTag[];

}

/**
 * @schema EventBridgeCreateEventBusResponse
 */
export interface EventBridgeCreateEventBusResponse {
  /**
   * @schema EventBridgeCreateEventBusResponse#EventBusArn
   */
  readonly eventBusArn?: string;

}

/**
 * @schema EventBridgeCreatePartnerEventSourceRequest
 */
export interface EventBridgeCreatePartnerEventSourceRequest {
  /**
   * @schema EventBridgeCreatePartnerEventSourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema EventBridgeCreatePartnerEventSourceRequest#Account
   */
  readonly account: string;

}

/**
 * @schema EventBridgeCreatePartnerEventSourceResponse
 */
export interface EventBridgeCreatePartnerEventSourceResponse {
  /**
   * @schema EventBridgeCreatePartnerEventSourceResponse#EventSourceArn
   */
  readonly eventSourceArn?: string;

}

/**
 * @schema EventBridgeDeactivateEventSourceRequest
 */
export interface EventBridgeDeactivateEventSourceRequest {
  /**
   * @schema EventBridgeDeactivateEventSourceRequest#Name
   */
  readonly name: string;

}

/**
 * @schema EventBridgeDeleteArchiveRequest
 */
export interface EventBridgeDeleteArchiveRequest {
  /**
   * @schema EventBridgeDeleteArchiveRequest#ArchiveName
   */
  readonly archiveName: string;

}

/**
 * @schema EventBridgeDeleteArchiveResponse
 */
export interface EventBridgeDeleteArchiveResponse {
}

/**
 * @schema EventBridgeDeleteEventBusRequest
 */
export interface EventBridgeDeleteEventBusRequest {
  /**
   * @schema EventBridgeDeleteEventBusRequest#Name
   */
  readonly name: string;

}

/**
 * @schema EventBridgeDeletePartnerEventSourceRequest
 */
export interface EventBridgeDeletePartnerEventSourceRequest {
  /**
   * @schema EventBridgeDeletePartnerEventSourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema EventBridgeDeletePartnerEventSourceRequest#Account
   */
  readonly account: string;

}

/**
 * @schema EventBridgeDeleteRuleRequest
 */
export interface EventBridgeDeleteRuleRequest {
  /**
   * @schema EventBridgeDeleteRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema EventBridgeDeleteRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeDeleteRuleRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema EventBridgeDescribeArchiveRequest
 */
export interface EventBridgeDescribeArchiveRequest {
  /**
   * @schema EventBridgeDescribeArchiveRequest#ArchiveName
   */
  readonly archiveName: string;

}

/**
 * @schema EventBridgeDescribeArchiveResponse
 */
export interface EventBridgeDescribeArchiveResponse {
  /**
   * @schema EventBridgeDescribeArchiveResponse#ArchiveArn
   */
  readonly archiveArn?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#ArchiveName
   */
  readonly archiveName?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeDescribeArchiveResponse#RetentionDays
   */
  readonly retentionDays?: number;

  /**
   * @schema EventBridgeDescribeArchiveResponse#SizeBytes
   */
  readonly sizeBytes?: number;

  /**
   * @schema EventBridgeDescribeArchiveResponse#EventCount
   */
  readonly eventCount?: number;

  /**
   * @schema EventBridgeDescribeArchiveResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema EventBridgeDescribeEventBusRequest
 */
export interface EventBridgeDescribeEventBusRequest {
  /**
   * @schema EventBridgeDescribeEventBusRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema EventBridgeDescribeEventBusResponse
 */
export interface EventBridgeDescribeEventBusResponse {
  /**
   * @schema EventBridgeDescribeEventBusResponse#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDescribeEventBusResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeDescribeEventBusResponse#Policy
   */
  readonly policy?: string;

}

/**
 * @schema EventBridgeDescribeEventSourceRequest
 */
export interface EventBridgeDescribeEventSourceRequest {
  /**
   * @schema EventBridgeDescribeEventSourceRequest#Name
   */
  readonly name: string;

}

/**
 * @schema EventBridgeDescribeEventSourceResponse
 */
export interface EventBridgeDescribeEventSourceResponse {
  /**
   * @schema EventBridgeDescribeEventSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDescribeEventSourceResponse#State
   */
  readonly state?: string;

}

/**
 * @schema EventBridgeDescribePartnerEventSourceRequest
 */
export interface EventBridgeDescribePartnerEventSourceRequest {
  /**
   * @schema EventBridgeDescribePartnerEventSourceRequest#Name
   */
  readonly name: string;

}

/**
 * @schema EventBridgeDescribePartnerEventSourceResponse
 */
export interface EventBridgeDescribePartnerEventSourceResponse {
  /**
   * @schema EventBridgeDescribePartnerEventSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeDescribePartnerEventSourceResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema EventBridgeDescribeReplayRequest
 */
export interface EventBridgeDescribeReplayRequest {
  /**
   * @schema EventBridgeDescribeReplayRequest#ReplayName
   */
  readonly replayName: string;

}

/**
 * @schema EventBridgeDescribeReplayResponse
 */
export interface EventBridgeDescribeReplayResponse {
  /**
   * @schema EventBridgeDescribeReplayResponse#ReplayName
   */
  readonly replayName?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#ReplayArn
   */
  readonly replayArn?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#Destination
   */
  readonly destination?: EventBridgeReplayDestination;

  /**
   * @schema EventBridgeDescribeReplayResponse#EventStartTime
   */
  readonly eventStartTime?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#EventEndTime
   */
  readonly eventEndTime?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#EventLastReplayedTime
   */
  readonly eventLastReplayedTime?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#ReplayStartTime
   */
  readonly replayStartTime?: string;

  /**
   * @schema EventBridgeDescribeReplayResponse#ReplayEndTime
   */
  readonly replayEndTime?: string;

}

/**
 * @schema EventBridgeDescribeRuleRequest
 */
export interface EventBridgeDescribeRuleRequest {
  /**
   * @schema EventBridgeDescribeRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema EventBridgeDescribeRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema EventBridgeDescribeRuleResponse
 */
export interface EventBridgeDescribeRuleResponse {
  /**
   * @schema EventBridgeDescribeRuleResponse#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#ManagedBy
   */
  readonly managedBy?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeDescribeRuleResponse#CreatedBy
   */
  readonly createdBy?: string;

}

/**
 * @schema EventBridgeDisableRuleRequest
 */
export interface EventBridgeDisableRuleRequest {
  /**
   * @schema EventBridgeDisableRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema EventBridgeDisableRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema EventBridgeEnableRuleRequest
 */
export interface EventBridgeEnableRuleRequest {
  /**
   * @schema EventBridgeEnableRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema EventBridgeEnableRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema EventBridgeListArchivesRequest
 */
export interface EventBridgeListArchivesRequest {
  /**
   * @schema EventBridgeListArchivesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListArchivesRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeListArchivesRequest#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeListArchivesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListArchivesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema EventBridgeListArchivesResponse
 */
export interface EventBridgeListArchivesResponse {
  /**
   * @schema EventBridgeListArchivesResponse#Archives
   */
  readonly archives?: EventBridgeArchive[];

  /**
   * @schema EventBridgeListArchivesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventBridgeListEventBusesRequest
 */
export interface EventBridgeListEventBusesRequest {
  /**
   * @schema EventBridgeListEventBusesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListEventBusesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListEventBusesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema EventBridgeListEventBusesResponse
 */
export interface EventBridgeListEventBusesResponse {
  /**
   * @schema EventBridgeListEventBusesResponse#EventBuses
   */
  readonly eventBuses?: EventBridgeEventBus[];

  /**
   * @schema EventBridgeListEventBusesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventBridgeListEventSourcesRequest
 */
export interface EventBridgeListEventSourcesRequest {
  /**
   * @schema EventBridgeListEventSourcesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListEventSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListEventSourcesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema EventBridgeListEventSourcesResponse
 */
export interface EventBridgeListEventSourcesResponse {
  /**
   * @schema EventBridgeListEventSourcesResponse#EventSources
   */
  readonly eventSources?: EventBridgeEventSource[];

  /**
   * @schema EventBridgeListEventSourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventBridgeListPartnerEventSourceAccountsRequest
 */
export interface EventBridgeListPartnerEventSourceAccountsRequest {
  /**
   * @schema EventBridgeListPartnerEventSourceAccountsRequest#EventSourceName
   */
  readonly eventSourceName: string;

  /**
   * @schema EventBridgeListPartnerEventSourceAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListPartnerEventSourceAccountsRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema EventBridgeListPartnerEventSourceAccountsResponse
 */
export interface EventBridgeListPartnerEventSourceAccountsResponse {
  /**
   * @schema EventBridgeListPartnerEventSourceAccountsResponse#PartnerEventSourceAccounts
   */
  readonly partnerEventSourceAccounts?: EventBridgePartnerEventSourceAccount[];

  /**
   * @schema EventBridgeListPartnerEventSourceAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventBridgeListPartnerEventSourcesRequest
 */
export interface EventBridgeListPartnerEventSourcesRequest {
  /**
   * @schema EventBridgeListPartnerEventSourcesRequest#NamePrefix
   */
  readonly namePrefix: string;

  /**
   * @schema EventBridgeListPartnerEventSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListPartnerEventSourcesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema EventBridgeListPartnerEventSourcesResponse
 */
export interface EventBridgeListPartnerEventSourcesResponse {
  /**
   * @schema EventBridgeListPartnerEventSourcesResponse#PartnerEventSources
   */
  readonly partnerEventSources?: EventBridgePartnerEventSource[];

  /**
   * @schema EventBridgeListPartnerEventSourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventBridgeListReplaysRequest
 */
export interface EventBridgeListReplaysRequest {
  /**
   * @schema EventBridgeListReplaysRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListReplaysRequest#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeListReplaysRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeListReplaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListReplaysRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema EventBridgeListReplaysResponse
 */
export interface EventBridgeListReplaysResponse {
  /**
   * @schema EventBridgeListReplaysResponse#Replays
   */
  readonly replays?: EventBridgeReplay[];

  /**
   * @schema EventBridgeListReplaysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventBridgeListRuleNamesByTargetRequest
 */
export interface EventBridgeListRuleNamesByTargetRequest {
  /**
   * @schema EventBridgeListRuleNamesByTargetRequest#TargetArn
   */
  readonly targetArn: string;

  /**
   * @schema EventBridgeListRuleNamesByTargetRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeListRuleNamesByTargetRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListRuleNamesByTargetRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema EventBridgeListRuleNamesByTargetResponse
 */
export interface EventBridgeListRuleNamesByTargetResponse {
  /**
   * @schema EventBridgeListRuleNamesByTargetResponse#RuleNames
   */
  readonly ruleNames?: string[];

  /**
   * @schema EventBridgeListRuleNamesByTargetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventBridgeListRulesRequest
 */
export interface EventBridgeListRulesRequest {
  /**
   * @schema EventBridgeListRulesRequest#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema EventBridgeListRulesRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeListRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListRulesRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema EventBridgeListRulesResponse
 */
export interface EventBridgeListRulesResponse {
  /**
   * @schema EventBridgeListRulesResponse#Rules
   */
  readonly rules?: EventBridgeRule[];

  /**
   * @schema EventBridgeListRulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventBridgeListTagsForResourceRequest
 */
export interface EventBridgeListTagsForResourceRequest {
  /**
   * @schema EventBridgeListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema EventBridgeListTagsForResourceResponse
 */
export interface EventBridgeListTagsForResourceResponse {
  /**
   * @schema EventBridgeListTagsForResourceResponse#Tags
   */
  readonly tags?: EventBridgeTag[];

}

/**
 * @schema EventBridgeListTargetsByRuleRequest
 */
export interface EventBridgeListTargetsByRuleRequest {
  /**
   * @schema EventBridgeListTargetsByRuleRequest#Rule
   */
  readonly rule: string;

  /**
   * @schema EventBridgeListTargetsByRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeListTargetsByRuleRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EventBridgeListTargetsByRuleRequest#Limit
   */
  readonly limit?: number;

}

/**
 * @schema EventBridgeListTargetsByRuleResponse
 */
export interface EventBridgeListTargetsByRuleResponse {
  /**
   * @schema EventBridgeListTargetsByRuleResponse#Targets
   */
  readonly targets?: EventBridgeTarget[];

  /**
   * @schema EventBridgeListTargetsByRuleResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EventBridgePutEventsRequest
 */
export interface EventBridgePutEventsRequest {
  /**
   * @schema EventBridgePutEventsRequest#Entries
   */
  readonly entries: EventBridgePutEventsRequestEntry[];

}

/**
 * @schema EventBridgePutEventsResponse
 */
export interface EventBridgePutEventsResponse {
  /**
   * @schema EventBridgePutEventsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema EventBridgePutEventsResponse#Entries
   */
  readonly entries?: EventBridgePutEventsResultEntry[];

}

/**
 * @schema EventBridgePutPartnerEventsRequest
 */
export interface EventBridgePutPartnerEventsRequest {
  /**
   * @schema EventBridgePutPartnerEventsRequest#Entries
   */
  readonly entries: EventBridgePutPartnerEventsRequestEntry[];

}

/**
 * @schema EventBridgePutPartnerEventsResponse
 */
export interface EventBridgePutPartnerEventsResponse {
  /**
   * @schema EventBridgePutPartnerEventsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema EventBridgePutPartnerEventsResponse#Entries
   */
  readonly entries?: EventBridgePutPartnerEventsResultEntry[];

}

/**
 * @schema EventBridgePutPermissionRequest
 */
export interface EventBridgePutPermissionRequest {
  /**
   * @schema EventBridgePutPermissionRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgePutPermissionRequest#Action
   */
  readonly action?: string;

  /**
   * @schema EventBridgePutPermissionRequest#Principal
   */
  readonly principal?: string;

  /**
   * @schema EventBridgePutPermissionRequest#StatementId
   */
  readonly statementId?: string;

  /**
   * @schema EventBridgePutPermissionRequest#Condition
   */
  readonly condition?: EventBridgeCondition;

  /**
   * @schema EventBridgePutPermissionRequest#Policy
   */
  readonly policy?: string;

}

/**
 * @schema EventBridgePutRuleRequest
 */
export interface EventBridgePutRuleRequest {
  /**
   * @schema EventBridgePutRuleRequest#Name
   */
  readonly name: string;

  /**
   * @schema EventBridgePutRuleRequest#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema EventBridgePutRuleRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgePutRuleRequest#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgePutRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgePutRuleRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EventBridgePutRuleRequest#Tags
   */
  readonly tags?: EventBridgeTag[];

  /**
   * @schema EventBridgePutRuleRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema EventBridgePutRuleResponse
 */
export interface EventBridgePutRuleResponse {
  /**
   * @schema EventBridgePutRuleResponse#RuleArn
   */
  readonly ruleArn?: string;

}

/**
 * @schema EventBridgePutTargetsRequest
 */
export interface EventBridgePutTargetsRequest {
  /**
   * @schema EventBridgePutTargetsRequest#Rule
   */
  readonly rule: string;

  /**
   * @schema EventBridgePutTargetsRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgePutTargetsRequest#Targets
   */
  readonly targets: EventBridgeTarget[];

}

/**
 * @schema EventBridgePutTargetsResponse
 */
export interface EventBridgePutTargetsResponse {
  /**
   * @schema EventBridgePutTargetsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema EventBridgePutTargetsResponse#FailedEntries
   */
  readonly failedEntries?: EventBridgePutTargetsResultEntry[];

}

/**
 * @schema EventBridgeRemovePermissionRequest
 */
export interface EventBridgeRemovePermissionRequest {
  /**
   * @schema EventBridgeRemovePermissionRequest#StatementId
   */
  readonly statementId?: string;

  /**
   * @schema EventBridgeRemovePermissionRequest#RemoveAllPermissions
   */
  readonly removeAllPermissions?: boolean;

  /**
   * @schema EventBridgeRemovePermissionRequest#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema EventBridgeRemoveTargetsRequest
 */
export interface EventBridgeRemoveTargetsRequest {
  /**
   * @schema EventBridgeRemoveTargetsRequest#Rule
   */
  readonly rule: string;

  /**
   * @schema EventBridgeRemoveTargetsRequest#EventBusName
   */
  readonly eventBusName?: string;

  /**
   * @schema EventBridgeRemoveTargetsRequest#Ids
   */
  readonly ids: string[];

  /**
   * @schema EventBridgeRemoveTargetsRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema EventBridgeRemoveTargetsResponse
 */
export interface EventBridgeRemoveTargetsResponse {
  /**
   * @schema EventBridgeRemoveTargetsResponse#FailedEntryCount
   */
  readonly failedEntryCount?: number;

  /**
   * @schema EventBridgeRemoveTargetsResponse#FailedEntries
   */
  readonly failedEntries?: EventBridgeRemoveTargetsResultEntry[];

}

/**
 * @schema EventBridgeStartReplayRequest
 */
export interface EventBridgeStartReplayRequest {
  /**
   * @schema EventBridgeStartReplayRequest#ReplayName
   */
  readonly replayName: string;

  /**
   * @schema EventBridgeStartReplayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeStartReplayRequest#EventSourceArn
   */
  readonly eventSourceArn: string;

  /**
   * @schema EventBridgeStartReplayRequest#EventStartTime
   */
  readonly eventStartTime: string;

  /**
   * @schema EventBridgeStartReplayRequest#EventEndTime
   */
  readonly eventEndTime: string;

  /**
   * @schema EventBridgeStartReplayRequest#Destination
   */
  readonly destination: EventBridgeReplayDestination;

}

/**
 * @schema EventBridgeStartReplayResponse
 */
export interface EventBridgeStartReplayResponse {
  /**
   * @schema EventBridgeStartReplayResponse#ReplayArn
   */
  readonly replayArn?: string;

  /**
   * @schema EventBridgeStartReplayResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeStartReplayResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeStartReplayResponse#ReplayStartTime
   */
  readonly replayStartTime?: string;

}

/**
 * @schema EventBridgeTagResourceRequest
 */
export interface EventBridgeTagResourceRequest {
  /**
   * @schema EventBridgeTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema EventBridgeTagResourceRequest#Tags
   */
  readonly tags: EventBridgeTag[];

}

/**
 * @schema EventBridgeTagResourceResponse
 */
export interface EventBridgeTagResourceResponse {
}

/**
 * @schema EventBridgeTestEventPatternRequest
 */
export interface EventBridgeTestEventPatternRequest {
  /**
   * @schema EventBridgeTestEventPatternRequest#EventPattern
   */
  readonly eventPattern: string;

  /**
   * @schema EventBridgeTestEventPatternRequest#Event
   */
  readonly event: string;

}

/**
 * @schema EventBridgeTestEventPatternResponse
 */
export interface EventBridgeTestEventPatternResponse {
  /**
   * @schema EventBridgeTestEventPatternResponse#Result
   */
  readonly result?: boolean;

}

/**
 * @schema EventBridgeUntagResourceRequest
 */
export interface EventBridgeUntagResourceRequest {
  /**
   * @schema EventBridgeUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema EventBridgeUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema EventBridgeUntagResourceResponse
 */
export interface EventBridgeUntagResourceResponse {
}

/**
 * @schema EventBridgeUpdateArchiveRequest
 */
export interface EventBridgeUpdateArchiveRequest {
  /**
   * @schema EventBridgeUpdateArchiveRequest#ArchiveName
   */
  readonly archiveName: string;

  /**
   * @schema EventBridgeUpdateArchiveRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeUpdateArchiveRequest#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeUpdateArchiveRequest#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * @schema EventBridgeUpdateArchiveResponse
 */
export interface EventBridgeUpdateArchiveResponse {
  /**
   * @schema EventBridgeUpdateArchiveResponse#ArchiveArn
   */
  readonly archiveArn?: string;

  /**
   * @schema EventBridgeUpdateArchiveResponse#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeUpdateArchiveResponse#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeUpdateArchiveResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema EventBridgeTag
 */
export interface EventBridgeTag {
  /**
   * @schema EventBridgeTag#Key
   */
  readonly key: string;

  /**
   * @schema EventBridgeTag#Value
   */
  readonly value: string;

}

/**
 * @schema EventBridgeReplayDestination
 */
export interface EventBridgeReplayDestination {
  /**
   * @schema EventBridgeReplayDestination#Arn
   */
  readonly arn: string;

  /**
   * @schema EventBridgeReplayDestination#FilterArns
   */
  readonly filterArns?: string[];

}

/**
 * @schema EventBridgeArchive
 */
export interface EventBridgeArchive {
  /**
   * @schema EventBridgeArchive#ArchiveName
   */
  readonly archiveName?: string;

  /**
   * @schema EventBridgeArchive#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeArchive#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeArchive#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeArchive#RetentionDays
   */
  readonly retentionDays?: number;

  /**
   * @schema EventBridgeArchive#SizeBytes
   */
  readonly sizeBytes?: number;

  /**
   * @schema EventBridgeArchive#EventCount
   */
  readonly eventCount?: number;

  /**
   * @schema EventBridgeArchive#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema EventBridgeEventBus
 */
export interface EventBridgeEventBus {
  /**
   * @schema EventBridgeEventBus#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeEventBus#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeEventBus#Policy
   */
  readonly policy?: string;

}

/**
 * @schema EventBridgeEventSource
 */
export interface EventBridgeEventSource {
  /**
   * @schema EventBridgeEventSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeEventSource#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema EventBridgeEventSource#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgeEventSource#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema EventBridgeEventSource#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeEventSource#State
   */
  readonly state?: string;

}

/**
 * @schema EventBridgePartnerEventSourceAccount
 */
export interface EventBridgePartnerEventSourceAccount {
  /**
   * @schema EventBridgePartnerEventSourceAccount#Account
   */
  readonly account?: string;

  /**
   * @schema EventBridgePartnerEventSourceAccount#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EventBridgePartnerEventSourceAccount#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema EventBridgePartnerEventSourceAccount#State
   */
  readonly state?: string;

}

/**
 * @schema EventBridgePartnerEventSource
 */
export interface EventBridgePartnerEventSource {
  /**
   * @schema EventBridgePartnerEventSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgePartnerEventSource#Name
   */
  readonly name?: string;

}

/**
 * @schema EventBridgeReplay
 */
export interface EventBridgeReplay {
  /**
   * @schema EventBridgeReplay#ReplayName
   */
  readonly replayName?: string;

  /**
   * @schema EventBridgeReplay#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventBridgeReplay#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeReplay#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema EventBridgeReplay#EventStartTime
   */
  readonly eventStartTime?: string;

  /**
   * @schema EventBridgeReplay#EventEndTime
   */
  readonly eventEndTime?: string;

  /**
   * @schema EventBridgeReplay#EventLastReplayedTime
   */
  readonly eventLastReplayedTime?: string;

  /**
   * @schema EventBridgeReplay#ReplayStartTime
   */
  readonly replayStartTime?: string;

  /**
   * @schema EventBridgeReplay#ReplayEndTime
   */
  readonly replayEndTime?: string;

}

/**
 * @schema EventBridgeRule
 */
export interface EventBridgeRule {
  /**
   * @schema EventBridgeRule#Name
   */
  readonly name?: string;

  /**
   * @schema EventBridgeRule#Arn
   */
  readonly arn?: string;

  /**
   * @schema EventBridgeRule#EventPattern
   */
  readonly eventPattern?: string;

  /**
   * @schema EventBridgeRule#State
   */
  readonly state?: string;

  /**
   * @schema EventBridgeRule#Description
   */
  readonly description?: string;

  /**
   * @schema EventBridgeRule#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema EventBridgeRule#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EventBridgeRule#ManagedBy
   */
  readonly managedBy?: string;

  /**
   * @schema EventBridgeRule#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema EventBridgeTarget
 */
export interface EventBridgeTarget {
  /**
   * @schema EventBridgeTarget#Id
   */
  readonly id: string;

  /**
   * @schema EventBridgeTarget#Arn
   */
  readonly arn: string;

  /**
   * @schema EventBridgeTarget#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EventBridgeTarget#Input
   */
  readonly input?: string;

  /**
   * @schema EventBridgeTarget#InputPath
   */
  readonly inputPath?: string;

  /**
   * @schema EventBridgeTarget#InputTransformer
   */
  readonly inputTransformer?: EventBridgeInputTransformer;

  /**
   * @schema EventBridgeTarget#KinesisParameters
   */
  readonly kinesisParameters?: EventBridgeKinesisParameters;

  /**
   * @schema EventBridgeTarget#RunCommandParameters
   */
  readonly runCommandParameters?: EventBridgeRunCommandParameters;

  /**
   * @schema EventBridgeTarget#EcsParameters
   */
  readonly ecsParameters?: EventBridgeEcsParameters;

  /**
   * @schema EventBridgeTarget#BatchParameters
   */
  readonly batchParameters?: EventBridgeBatchParameters;

  /**
   * @schema EventBridgeTarget#SqsParameters
   */
  readonly sqsParameters?: EventBridgeSqsParameters;

  /**
   * @schema EventBridgeTarget#HttpParameters
   */
  readonly httpParameters?: EventBridgeHttpParameters;

  /**
   * @schema EventBridgeTarget#RedshiftDataParameters
   */
  readonly redshiftDataParameters?: EventBridgeRedshiftDataParameters;

  /**
   * @schema EventBridgeTarget#DeadLetterConfig
   */
  readonly deadLetterConfig?: EventBridgeDeadLetterConfig;

  /**
   * @schema EventBridgeTarget#RetryPolicy
   */
  readonly retryPolicy?: EventBridgeRetryPolicy;

}

/**
 * @schema EventBridgePutEventsRequestEntry
 */
export interface EventBridgePutEventsRequestEntry {
  /**
   * @schema EventBridgePutEventsRequestEntry#Time
   */
  readonly time?: string;

  /**
   * @schema EventBridgePutEventsRequestEntry#Source
   */
  readonly source?: string;

  /**
   * @schema EventBridgePutEventsRequestEntry#Resources
   */
  readonly resources?: string[];

  /**
   * @schema EventBridgePutEventsRequestEntry#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema EventBridgePutEventsRequestEntry#Detail
   */
  readonly detail?: string;

  /**
   * @schema EventBridgePutEventsRequestEntry#EventBusName
   */
  readonly eventBusName?: string;

}

/**
 * @schema EventBridgePutEventsResultEntry
 */
export interface EventBridgePutEventsResultEntry {
  /**
   * @schema EventBridgePutEventsResultEntry#EventId
   */
  readonly eventId?: string;

  /**
   * @schema EventBridgePutEventsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EventBridgePutEventsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema EventBridgePutPartnerEventsRequestEntry
 */
export interface EventBridgePutPartnerEventsRequestEntry {
  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#Time
   */
  readonly time?: string;

  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#Source
   */
  readonly source?: string;

  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#Resources
   */
  readonly resources?: string[];

  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema EventBridgePutPartnerEventsRequestEntry#Detail
   */
  readonly detail?: string;

}

/**
 * @schema EventBridgePutPartnerEventsResultEntry
 */
export interface EventBridgePutPartnerEventsResultEntry {
  /**
   * @schema EventBridgePutPartnerEventsResultEntry#EventId
   */
  readonly eventId?: string;

  /**
   * @schema EventBridgePutPartnerEventsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EventBridgePutPartnerEventsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema EventBridgeCondition
 */
export interface EventBridgeCondition {
  /**
   * @schema EventBridgeCondition#Type
   */
  readonly type: string;

  /**
   * @schema EventBridgeCondition#Key
   */
  readonly key: string;

  /**
   * @schema EventBridgeCondition#Value
   */
  readonly value: string;

}

/**
 * @schema EventBridgePutTargetsResultEntry
 */
export interface EventBridgePutTargetsResultEntry {
  /**
   * @schema EventBridgePutTargetsResultEntry#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema EventBridgePutTargetsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EventBridgePutTargetsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema EventBridgeRemoveTargetsResultEntry
 */
export interface EventBridgeRemoveTargetsResultEntry {
  /**
   * @schema EventBridgeRemoveTargetsResultEntry#TargetId
   */
  readonly targetId?: string;

  /**
   * @schema EventBridgeRemoveTargetsResultEntry#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EventBridgeRemoveTargetsResultEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema EventBridgeInputTransformer
 */
export interface EventBridgeInputTransformer {
  /**
   * @schema EventBridgeInputTransformer#InputPathsMap
   */
  readonly inputPathsMap?: { [key: string]: string };

  /**
   * @schema EventBridgeInputTransformer#InputTemplate
   */
  readonly inputTemplate: string;

}

/**
 * @schema EventBridgeKinesisParameters
 */
export interface EventBridgeKinesisParameters {
  /**
   * @schema EventBridgeKinesisParameters#PartitionKeyPath
   */
  readonly partitionKeyPath: string;

}

/**
 * @schema EventBridgeRunCommandParameters
 */
export interface EventBridgeRunCommandParameters {
  /**
   * @schema EventBridgeRunCommandParameters#RunCommandTargets
   */
  readonly runCommandTargets: EventBridgeRunCommandTarget[];

}

/**
 * @schema EventBridgeEcsParameters
 */
export interface EventBridgeEcsParameters {
  /**
   * @schema EventBridgeEcsParameters#TaskDefinitionArn
   */
  readonly taskDefinitionArn: string;

  /**
   * @schema EventBridgeEcsParameters#TaskCount
   */
  readonly taskCount?: number;

  /**
   * @schema EventBridgeEcsParameters#LaunchType
   */
  readonly launchType?: string;

  /**
   * @schema EventBridgeEcsParameters#NetworkConfiguration
   */
  readonly networkConfiguration?: EventBridgeNetworkConfiguration;

  /**
   * @schema EventBridgeEcsParameters#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EventBridgeEcsParameters#Group
   */
  readonly group?: string;

}

/**
 * @schema EventBridgeBatchParameters
 */
export interface EventBridgeBatchParameters {
  /**
   * @schema EventBridgeBatchParameters#JobDefinition
   */
  readonly jobDefinition: string;

  /**
   * @schema EventBridgeBatchParameters#JobName
   */
  readonly jobName: string;

  /**
   * @schema EventBridgeBatchParameters#ArrayProperties
   */
  readonly arrayProperties?: EventBridgeBatchArrayProperties;

  /**
   * @schema EventBridgeBatchParameters#RetryStrategy
   */
  readonly retryStrategy?: EventBridgeBatchRetryStrategy;

}

/**
 * @schema EventBridgeSqsParameters
 */
export interface EventBridgeSqsParameters {
  /**
   * @schema EventBridgeSqsParameters#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * @schema EventBridgeHttpParameters
 */
export interface EventBridgeHttpParameters {
  /**
   * @schema EventBridgeHttpParameters#PathParameterValues
   */
  readonly pathParameterValues?: string[];

  /**
   * @schema EventBridgeHttpParameters#HeaderParameters
   */
  readonly headerParameters?: { [key: string]: string };

  /**
   * @schema EventBridgeHttpParameters#QueryStringParameters
   */
  readonly queryStringParameters?: { [key: string]: string };

}

/**
 * @schema EventBridgeRedshiftDataParameters
 */
export interface EventBridgeRedshiftDataParameters {
  /**
   * @schema EventBridgeRedshiftDataParameters#SecretManagerArn
   */
  readonly secretManagerArn?: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#Database
   */
  readonly database: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#Sql
   */
  readonly sql: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#StatementName
   */
  readonly statementName?: string;

  /**
   * @schema EventBridgeRedshiftDataParameters#WithEvent
   */
  readonly withEvent?: boolean;

}

/**
 * @schema EventBridgeDeadLetterConfig
 */
export interface EventBridgeDeadLetterConfig {
  /**
   * @schema EventBridgeDeadLetterConfig#Arn
   */
  readonly arn?: string;

}

/**
 * @schema EventBridgeRetryPolicy
 */
export interface EventBridgeRetryPolicy {
  /**
   * @schema EventBridgeRetryPolicy#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema EventBridgeRetryPolicy#MaximumEventAgeInSeconds
   */
  readonly maximumEventAgeInSeconds?: number;

}

/**
 * @schema EventBridgeRunCommandTarget
 */
export interface EventBridgeRunCommandTarget {
  /**
   * @schema EventBridgeRunCommandTarget#Key
   */
  readonly key: string;

  /**
   * @schema EventBridgeRunCommandTarget#Values
   */
  readonly values: string[];

}

/**
 * @schema EventBridgeNetworkConfiguration
 */
export interface EventBridgeNetworkConfiguration {
  /**
   * @schema EventBridgeNetworkConfiguration#awsvpcConfiguration
   */
  readonly awsvpcConfiguration?: EventBridgeAwsVpcConfiguration;

}

/**
 * @schema EventBridgeBatchArrayProperties
 */
export interface EventBridgeBatchArrayProperties {
  /**
   * @schema EventBridgeBatchArrayProperties#Size
   */
  readonly size?: number;

}

/**
 * @schema EventBridgeBatchRetryStrategy
 */
export interface EventBridgeBatchRetryStrategy {
  /**
   * @schema EventBridgeBatchRetryStrategy#Attempts
   */
  readonly attempts?: number;

}

/**
 * @schema EventBridgeAwsVpcConfiguration
 */
export interface EventBridgeAwsVpcConfiguration {
  /**
   * @schema EventBridgeAwsVpcConfiguration#Subnets
   */
  readonly subnets: string[];

  /**
   * @schema EventBridgeAwsVpcConfiguration#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema EventBridgeAwsVpcConfiguration#AssignPublicIp
   */
  readonly assignPublicIp?: string;

}
