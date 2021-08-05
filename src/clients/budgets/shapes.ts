/**
 * @schema BudgetsCreateBudgetRequest
 */
export interface BudgetsCreateBudgetRequest {
  /**
   * @schema BudgetsCreateBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsCreateBudgetRequest#Budget
   */
  readonly budget: BudgetsBudget;

  /**
   * @schema BudgetsCreateBudgetRequest#NotificationsWithSubscribers
   */
  readonly notificationsWithSubscribers?: BudgetsNotificationWithSubscribers[];

}

/**
 * @schema BudgetsCreateBudgetResponse
 */
export interface BudgetsCreateBudgetResponse {
}

/**
 * @schema BudgetsCreateBudgetActionRequest
 */
export interface BudgetsCreateBudgetActionRequest {
  /**
   * @schema BudgetsCreateBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#NotificationType
   */
  readonly notificationType: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#ActionType
   */
  readonly actionType: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#ActionThreshold
   */
  readonly actionThreshold: BudgetsActionThreshold;

  /**
   * @schema BudgetsCreateBudgetActionRequest#Definition
   */
  readonly definition: BudgetsDefinition;

  /**
   * @schema BudgetsCreateBudgetActionRequest#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#ApprovalModel
   */
  readonly approvalModel: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#Subscribers
   */
  readonly subscribers: BudgetsSubscriber[];

}

/**
 * @schema BudgetsCreateBudgetActionResponse
 */
export interface BudgetsCreateBudgetActionResponse {
  /**
   * @schema BudgetsCreateBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsCreateBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsCreateBudgetActionResponse#ActionId
   */
  readonly actionId: string;

}

/**
 * @schema BudgetsCreateNotificationRequest
 */
export interface BudgetsCreateNotificationRequest {
  /**
   * @schema BudgetsCreateNotificationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsCreateNotificationRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsCreateNotificationRequest#Notification
   */
  readonly notification: BudgetsNotification;

  /**
   * @schema BudgetsCreateNotificationRequest#Subscribers
   */
  readonly subscribers: BudgetsSubscriber[];

}

/**
 * @schema BudgetsCreateNotificationResponse
 */
export interface BudgetsCreateNotificationResponse {
}

/**
 * @schema BudgetsCreateSubscriberRequest
 */
export interface BudgetsCreateSubscriberRequest {
  /**
   * @schema BudgetsCreateSubscriberRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsCreateSubscriberRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsCreateSubscriberRequest#Notification
   */
  readonly notification: BudgetsNotification;

  /**
   * @schema BudgetsCreateSubscriberRequest#Subscriber
   */
  readonly subscriber: BudgetsSubscriber;

}

/**
 * @schema BudgetsCreateSubscriberResponse
 */
export interface BudgetsCreateSubscriberResponse {
}

/**
 * @schema BudgetsDeleteBudgetRequest
 */
export interface BudgetsDeleteBudgetRequest {
  /**
   * @schema BudgetsDeleteBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDeleteBudgetRequest#BudgetName
   */
  readonly budgetName: string;

}

/**
 * @schema BudgetsDeleteBudgetResponse
 */
export interface BudgetsDeleteBudgetResponse {
}

/**
 * @schema BudgetsDeleteBudgetActionRequest
 */
export interface BudgetsDeleteBudgetActionRequest {
  /**
   * @schema BudgetsDeleteBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDeleteBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDeleteBudgetActionRequest#ActionId
   */
  readonly actionId: string;

}

/**
 * @schema BudgetsDeleteBudgetActionResponse
 */
export interface BudgetsDeleteBudgetActionResponse {
  /**
   * @schema BudgetsDeleteBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDeleteBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDeleteBudgetActionResponse#Action
   */
  readonly action: BudgetsAction;

}

/**
 * @schema BudgetsDeleteNotificationRequest
 */
export interface BudgetsDeleteNotificationRequest {
  /**
   * @schema BudgetsDeleteNotificationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDeleteNotificationRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDeleteNotificationRequest#Notification
   */
  readonly notification: BudgetsNotification;

}

/**
 * @schema BudgetsDeleteNotificationResponse
 */
export interface BudgetsDeleteNotificationResponse {
}

/**
 * @schema BudgetsDeleteSubscriberRequest
 */
export interface BudgetsDeleteSubscriberRequest {
  /**
   * @schema BudgetsDeleteSubscriberRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDeleteSubscriberRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDeleteSubscriberRequest#Notification
   */
  readonly notification: BudgetsNotification;

  /**
   * @schema BudgetsDeleteSubscriberRequest#Subscriber
   */
  readonly subscriber: BudgetsSubscriber;

}

/**
 * @schema BudgetsDeleteSubscriberResponse
 */
export interface BudgetsDeleteSubscriberResponse {
}

/**
 * @schema BudgetsDescribeBudgetRequest
 */
export interface BudgetsDescribeBudgetRequest {
  /**
   * @schema BudgetsDescribeBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeBudgetRequest#BudgetName
   */
  readonly budgetName: string;

}

/**
 * @schema BudgetsDescribeBudgetResponse
 */
export interface BudgetsDescribeBudgetResponse {
  /**
   * @schema BudgetsDescribeBudgetResponse#Budget
   */
  readonly budget?: BudgetsBudget;

}

/**
 * @schema BudgetsDescribeBudgetActionRequest
 */
export interface BudgetsDescribeBudgetActionRequest {
  /**
   * @schema BudgetsDescribeBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDescribeBudgetActionRequest#ActionId
   */
  readonly actionId: string;

}

/**
 * @schema BudgetsDescribeBudgetActionResponse
 */
export interface BudgetsDescribeBudgetActionResponse {
  /**
   * @schema BudgetsDescribeBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDescribeBudgetActionResponse#Action
   */
  readonly action: BudgetsAction;

}

/**
 * @schema BudgetsDescribeBudgetActionHistoriesRequest
 */
export interface BudgetsDescribeBudgetActionHistoriesRequest {
  /**
   * @schema BudgetsDescribeBudgetActionHistoriesRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeBudgetActionHistoriesRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDescribeBudgetActionHistoriesRequest#ActionId
   */
  readonly actionId: string;

  /**
   * @schema BudgetsDescribeBudgetActionHistoriesRequest#TimePeriod
   */
  readonly timePeriod?: BudgetsTimePeriod;

  /**
   * @schema BudgetsDescribeBudgetActionHistoriesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BudgetsDescribeBudgetActionHistoriesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeBudgetActionHistoriesResponse
 */
export interface BudgetsDescribeBudgetActionHistoriesResponse {
  /**
   * @schema BudgetsDescribeBudgetActionHistoriesResponse#ActionHistories
   */
  readonly actionHistories: BudgetsActionHistory[];

  /**
   * @schema BudgetsDescribeBudgetActionHistoriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeBudgetActionsForAccountRequest
 */
export interface BudgetsDescribeBudgetActionsForAccountRequest {
  /**
   * @schema BudgetsDescribeBudgetActionsForAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeBudgetActionsForAccountRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BudgetsDescribeBudgetActionsForAccountRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeBudgetActionsForAccountResponse
 */
export interface BudgetsDescribeBudgetActionsForAccountResponse {
  /**
   * @schema BudgetsDescribeBudgetActionsForAccountResponse#Actions
   */
  readonly actions: BudgetsAction[];

  /**
   * @schema BudgetsDescribeBudgetActionsForAccountResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeBudgetActionsForBudgetRequest
 */
export interface BudgetsDescribeBudgetActionsForBudgetRequest {
  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeBudgetActionsForBudgetResponse
 */
export interface BudgetsDescribeBudgetActionsForBudgetResponse {
  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetResponse#Actions
   */
  readonly actions: BudgetsAction[];

  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeBudgetPerformanceHistoryRequest
 */
export interface BudgetsDescribeBudgetPerformanceHistoryRequest {
  /**
   * @schema BudgetsDescribeBudgetPerformanceHistoryRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeBudgetPerformanceHistoryRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDescribeBudgetPerformanceHistoryRequest#TimePeriod
   */
  readonly timePeriod?: BudgetsTimePeriod;

  /**
   * @schema BudgetsDescribeBudgetPerformanceHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BudgetsDescribeBudgetPerformanceHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeBudgetPerformanceHistoryResponse
 */
export interface BudgetsDescribeBudgetPerformanceHistoryResponse {
  /**
   * @schema BudgetsDescribeBudgetPerformanceHistoryResponse#BudgetPerformanceHistory
   */
  readonly budgetPerformanceHistory?: BudgetsBudgetPerformanceHistory;

  /**
   * @schema BudgetsDescribeBudgetPerformanceHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeBudgetsRequest
 */
export interface BudgetsDescribeBudgetsRequest {
  /**
   * @schema BudgetsDescribeBudgetsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeBudgetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BudgetsDescribeBudgetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeBudgetsResponse
 */
export interface BudgetsDescribeBudgetsResponse {
  /**
   * @schema BudgetsDescribeBudgetsResponse#Budgets
   */
  readonly budgets?: BudgetsBudget[];

  /**
   * @schema BudgetsDescribeBudgetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeNotificationsForBudgetRequest
 */
export interface BudgetsDescribeNotificationsForBudgetRequest {
  /**
   * @schema BudgetsDescribeNotificationsForBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeNotificationsForBudgetRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDescribeNotificationsForBudgetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BudgetsDescribeNotificationsForBudgetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeNotificationsForBudgetResponse
 */
export interface BudgetsDescribeNotificationsForBudgetResponse {
  /**
   * @schema BudgetsDescribeNotificationsForBudgetResponse#Notifications
   */
  readonly notifications?: BudgetsNotification[];

  /**
   * @schema BudgetsDescribeNotificationsForBudgetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeSubscribersForNotificationRequest
 */
export interface BudgetsDescribeSubscribersForNotificationRequest {
  /**
   * @schema BudgetsDescribeSubscribersForNotificationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsDescribeSubscribersForNotificationRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsDescribeSubscribersForNotificationRequest#Notification
   */
  readonly notification: BudgetsNotification;

  /**
   * @schema BudgetsDescribeSubscribersForNotificationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BudgetsDescribeSubscribersForNotificationRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsDescribeSubscribersForNotificationResponse
 */
export interface BudgetsDescribeSubscribersForNotificationResponse {
  /**
   * @schema BudgetsDescribeSubscribersForNotificationResponse#Subscribers
   */
  readonly subscribers?: BudgetsSubscriber[];

  /**
   * @schema BudgetsDescribeSubscribersForNotificationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BudgetsExecuteBudgetActionRequest
 */
export interface BudgetsExecuteBudgetActionRequest {
  /**
   * @schema BudgetsExecuteBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsExecuteBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsExecuteBudgetActionRequest#ActionId
   */
  readonly actionId: string;

  /**
   * @schema BudgetsExecuteBudgetActionRequest#ExecutionType
   */
  readonly executionType: string;

}

/**
 * @schema BudgetsExecuteBudgetActionResponse
 */
export interface BudgetsExecuteBudgetActionResponse {
  /**
   * @schema BudgetsExecuteBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsExecuteBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsExecuteBudgetActionResponse#ActionId
   */
  readonly actionId: string;

  /**
   * @schema BudgetsExecuteBudgetActionResponse#ExecutionType
   */
  readonly executionType: string;

}

/**
 * @schema BudgetsUpdateBudgetRequest
 */
export interface BudgetsUpdateBudgetRequest {
  /**
   * @schema BudgetsUpdateBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsUpdateBudgetRequest#NewBudget
   */
  readonly newBudget: BudgetsBudget;

}

/**
 * @schema BudgetsUpdateBudgetResponse
 */
export interface BudgetsUpdateBudgetResponse {
}

/**
 * @schema BudgetsUpdateBudgetActionRequest
 */
export interface BudgetsUpdateBudgetActionRequest {
  /**
   * @schema BudgetsUpdateBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#ActionId
   */
  readonly actionId: string;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#NotificationType
   */
  readonly notificationType?: string;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#ActionThreshold
   */
  readonly actionThreshold?: BudgetsActionThreshold;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#Definition
   */
  readonly definition?: BudgetsDefinition;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#ApprovalModel
   */
  readonly approvalModel?: string;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#Subscribers
   */
  readonly subscribers?: BudgetsSubscriber[];

}

/**
 * @schema BudgetsUpdateBudgetActionResponse
 */
export interface BudgetsUpdateBudgetActionResponse {
  /**
   * @schema BudgetsUpdateBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsUpdateBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsUpdateBudgetActionResponse#OldAction
   */
  readonly oldAction: BudgetsAction;

  /**
   * @schema BudgetsUpdateBudgetActionResponse#NewAction
   */
  readonly newAction: BudgetsAction;

}

/**
 * @schema BudgetsUpdateNotificationRequest
 */
export interface BudgetsUpdateNotificationRequest {
  /**
   * @schema BudgetsUpdateNotificationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsUpdateNotificationRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsUpdateNotificationRequest#OldNotification
   */
  readonly oldNotification: BudgetsNotification;

  /**
   * @schema BudgetsUpdateNotificationRequest#NewNotification
   */
  readonly newNotification: BudgetsNotification;

}

/**
 * @schema BudgetsUpdateNotificationResponse
 */
export interface BudgetsUpdateNotificationResponse {
}

/**
 * @schema BudgetsUpdateSubscriberRequest
 */
export interface BudgetsUpdateSubscriberRequest {
  /**
   * @schema BudgetsUpdateSubscriberRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema BudgetsUpdateSubscriberRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsUpdateSubscriberRequest#Notification
   */
  readonly notification: BudgetsNotification;

  /**
   * @schema BudgetsUpdateSubscriberRequest#OldSubscriber
   */
  readonly oldSubscriber: BudgetsSubscriber;

  /**
   * @schema BudgetsUpdateSubscriberRequest#NewSubscriber
   */
  readonly newSubscriber: BudgetsSubscriber;

}

/**
 * @schema BudgetsUpdateSubscriberResponse
 */
export interface BudgetsUpdateSubscriberResponse {
}

/**
 * @schema BudgetsBudget
 */
export interface BudgetsBudget {
  /**
   * @schema BudgetsBudget#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsBudget#BudgetLimit
   */
  readonly budgetLimit?: BudgetsSpend;

  /**
   * @schema BudgetsBudget#PlannedBudgetLimits
   */
  readonly plannedBudgetLimits?: { [key: string]: BudgetsSpend };

  /**
   * @schema BudgetsBudget#CostFilters
   */
  readonly costFilters?: { [key: string]: string[] };

  /**
   * @schema BudgetsBudget#CostTypes
   */
  readonly costTypes?: BudgetsCostTypes;

  /**
   * @schema BudgetsBudget#TimeUnit
   */
  readonly timeUnit: string;

  /**
   * @schema BudgetsBudget#TimePeriod
   */
  readonly timePeriod?: BudgetsTimePeriod;

  /**
   * @schema BudgetsBudget#CalculatedSpend
   */
  readonly calculatedSpend?: BudgetsCalculatedSpend;

  /**
   * @schema BudgetsBudget#BudgetType
   */
  readonly budgetType: string;

  /**
   * @schema BudgetsBudget#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema BudgetsNotificationWithSubscribers
 */
export interface BudgetsNotificationWithSubscribers {
  /**
   * @schema BudgetsNotificationWithSubscribers#Notification
   */
  readonly notification: BudgetsNotification;

  /**
   * @schema BudgetsNotificationWithSubscribers#Subscribers
   */
  readonly subscribers: BudgetsSubscriber[];

}

/**
 * @schema BudgetsActionThreshold
 */
export interface BudgetsActionThreshold {
  /**
   * @schema BudgetsActionThreshold#ActionThresholdValue
   */
  readonly actionThresholdValue: number;

  /**
   * @schema BudgetsActionThreshold#ActionThresholdType
   */
  readonly actionThresholdType: string;

}

/**
 * @schema BudgetsDefinition
 */
export interface BudgetsDefinition {
  /**
   * @schema BudgetsDefinition#IamActionDefinition
   */
  readonly iamActionDefinition?: BudgetsIamActionDefinition;

  /**
   * @schema BudgetsDefinition#ScpActionDefinition
   */
  readonly scpActionDefinition?: BudgetsScpActionDefinition;

  /**
   * @schema BudgetsDefinition#SsmActionDefinition
   */
  readonly ssmActionDefinition?: BudgetsSsmActionDefinition;

}

/**
 * @schema BudgetsSubscriber
 */
export interface BudgetsSubscriber {
  /**
   * @schema BudgetsSubscriber#SubscriptionType
   */
  readonly subscriptionType: string;

  /**
   * @schema BudgetsSubscriber#Address
   */
  readonly address: string;

}

/**
 * @schema BudgetsNotification
 */
export interface BudgetsNotification {
  /**
   * @schema BudgetsNotification#NotificationType
   */
  readonly notificationType: string;

  /**
   * @schema BudgetsNotification#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema BudgetsNotification#Threshold
   */
  readonly threshold: number;

  /**
   * @schema BudgetsNotification#ThresholdType
   */
  readonly thresholdType?: string;

  /**
   * @schema BudgetsNotification#NotificationState
   */
  readonly notificationState?: string;

}

/**
 * @schema BudgetsAction
 */
export interface BudgetsAction {
  /**
   * @schema BudgetsAction#ActionId
   */
  readonly actionId: string;

  /**
   * @schema BudgetsAction#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema BudgetsAction#NotificationType
   */
  readonly notificationType: string;

  /**
   * @schema BudgetsAction#ActionType
   */
  readonly actionType: string;

  /**
   * @schema BudgetsAction#ActionThreshold
   */
  readonly actionThreshold: BudgetsActionThreshold;

  /**
   * @schema BudgetsAction#Definition
   */
  readonly definition: BudgetsDefinition;

  /**
   * @schema BudgetsAction#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema BudgetsAction#ApprovalModel
   */
  readonly approvalModel: string;

  /**
   * @schema BudgetsAction#Status
   */
  readonly status: string;

  /**
   * @schema BudgetsAction#Subscribers
   */
  readonly subscribers: BudgetsSubscriber[];

}

/**
 * @schema BudgetsTimePeriod
 */
export interface BudgetsTimePeriod {
  /**
   * @schema BudgetsTimePeriod#Start
   */
  readonly start?: string;

  /**
   * @schema BudgetsTimePeriod#End
   */
  readonly end?: string;

}

/**
 * @schema BudgetsActionHistory
 */
export interface BudgetsActionHistory {
  /**
   * @schema BudgetsActionHistory#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema BudgetsActionHistory#Status
   */
  readonly status: string;

  /**
   * @schema BudgetsActionHistory#EventType
   */
  readonly eventType: string;

  /**
   * @schema BudgetsActionHistory#ActionHistoryDetails
   */
  readonly actionHistoryDetails: BudgetsActionHistoryDetails;

}

/**
 * @schema BudgetsBudgetPerformanceHistory
 */
export interface BudgetsBudgetPerformanceHistory {
  /**
   * @schema BudgetsBudgetPerformanceHistory#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsBudgetPerformanceHistory#BudgetType
   */
  readonly budgetType?: string;

  /**
   * @schema BudgetsBudgetPerformanceHistory#CostFilters
   */
  readonly costFilters?: { [key: string]: string[] };

  /**
   * @schema BudgetsBudgetPerformanceHistory#CostTypes
   */
  readonly costTypes?: BudgetsCostTypes;

  /**
   * @schema BudgetsBudgetPerformanceHistory#TimeUnit
   */
  readonly timeUnit?: string;

  /**
   * @schema BudgetsBudgetPerformanceHistory#BudgetedAndActualAmountsList
   */
  readonly budgetedAndActualAmountsList?: BudgetsBudgetedAndActualAmounts[];

}

/**
 * @schema BudgetsSpend
 */
export interface BudgetsSpend {
  /**
   * @schema BudgetsSpend#Amount
   */
  readonly amount: string;

  /**
   * @schema BudgetsSpend#Unit
   */
  readonly unit: string;

}

/**
 * @schema BudgetsCostTypes
 */
export interface BudgetsCostTypes {
  /**
   * @schema BudgetsCostTypes#IncludeTax
   */
  readonly includeTax?: boolean;

  /**
   * @schema BudgetsCostTypes#IncludeSubscription
   */
  readonly includeSubscription?: boolean;

  /**
   * @schema BudgetsCostTypes#UseBlended
   */
  readonly useBlended?: boolean;

  /**
   * @schema BudgetsCostTypes#IncludeRefund
   */
  readonly includeRefund?: boolean;

  /**
   * @schema BudgetsCostTypes#IncludeCredit
   */
  readonly includeCredit?: boolean;

  /**
   * @schema BudgetsCostTypes#IncludeUpfront
   */
  readonly includeUpfront?: boolean;

  /**
   * @schema BudgetsCostTypes#IncludeRecurring
   */
  readonly includeRecurring?: boolean;

  /**
   * @schema BudgetsCostTypes#IncludeOtherSubscription
   */
  readonly includeOtherSubscription?: boolean;

  /**
   * @schema BudgetsCostTypes#IncludeSupport
   */
  readonly includeSupport?: boolean;

  /**
   * @schema BudgetsCostTypes#IncludeDiscount
   */
  readonly includeDiscount?: boolean;

  /**
   * @schema BudgetsCostTypes#UseAmortized
   */
  readonly useAmortized?: boolean;

}

/**
 * @schema BudgetsCalculatedSpend
 */
export interface BudgetsCalculatedSpend {
  /**
   * @schema BudgetsCalculatedSpend#ActualSpend
   */
  readonly actualSpend: BudgetsSpend;

  /**
   * @schema BudgetsCalculatedSpend#ForecastedSpend
   */
  readonly forecastedSpend?: BudgetsSpend;

}

/**
 * @schema BudgetsIamActionDefinition
 */
export interface BudgetsIamActionDefinition {
  /**
   * @schema BudgetsIamActionDefinition#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema BudgetsIamActionDefinition#Roles
   */
  readonly roles?: string[];

  /**
   * @schema BudgetsIamActionDefinition#Groups
   */
  readonly groups?: string[];

  /**
   * @schema BudgetsIamActionDefinition#Users
   */
  readonly users?: string[];

}

/**
 * @schema BudgetsScpActionDefinition
 */
export interface BudgetsScpActionDefinition {
  /**
   * @schema BudgetsScpActionDefinition#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema BudgetsScpActionDefinition#TargetIds
   */
  readonly targetIds: string[];

}

/**
 * @schema BudgetsSsmActionDefinition
 */
export interface BudgetsSsmActionDefinition {
  /**
   * @schema BudgetsSsmActionDefinition#ActionSubType
   */
  readonly actionSubType: string;

  /**
   * @schema BudgetsSsmActionDefinition#Region
   */
  readonly region: string;

  /**
   * @schema BudgetsSsmActionDefinition#InstanceIds
   */
  readonly instanceIds: string[];

}

/**
 * @schema BudgetsActionHistoryDetails
 */
export interface BudgetsActionHistoryDetails {
  /**
   * @schema BudgetsActionHistoryDetails#Message
   */
  readonly message: string;

  /**
   * @schema BudgetsActionHistoryDetails#Action
   */
  readonly action: BudgetsAction;

}

/**
 * @schema BudgetsBudgetedAndActualAmounts
 */
export interface BudgetsBudgetedAndActualAmounts {
  /**
   * @schema BudgetsBudgetedAndActualAmounts#BudgetedAmount
   */
  readonly budgetedAmount?: BudgetsSpend;

  /**
   * @schema BudgetsBudgetedAndActualAmounts#ActualAmount
   */
  readonly actualAmount?: BudgetsSpend;

  /**
   * @schema BudgetsBudgetedAndActualAmounts#TimePeriod
   */
  readonly timePeriod?: BudgetsTimePeriod;

}
