/**
 * @schema CreateBudgetRequest
 */
export interface CreateBudgetRequest {
  /**
   * @schema CreateBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateBudgetRequest#Budget
   */
  readonly budget: Budget;

  /**
   * @schema CreateBudgetRequest#NotificationsWithSubscribers
   */
  readonly notificationsWithSubscribers?: NotificationWithSubscribers[];

}

/**
 * @schema CreateBudgetResponse
 */
export interface CreateBudgetResponse {
}

/**
 * @schema CreateBudgetActionRequest
 */
export interface CreateBudgetActionRequest {
  /**
   * @schema CreateBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema CreateBudgetActionRequest#NotificationType
   */
  readonly notificationType: string;

  /**
   * @schema CreateBudgetActionRequest#ActionType
   */
  readonly actionType: string;

  /**
   * @schema CreateBudgetActionRequest#ActionThreshold
   */
  readonly actionThreshold: ActionThreshold;

  /**
   * @schema CreateBudgetActionRequest#Definition
   */
  readonly definition: Definition;

  /**
   * @schema CreateBudgetActionRequest#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema CreateBudgetActionRequest#ApprovalModel
   */
  readonly approvalModel: string;

  /**
   * @schema CreateBudgetActionRequest#Subscribers
   */
  readonly subscribers: Subscriber[];

}

/**
 * @schema CreateBudgetActionResponse
 */
export interface CreateBudgetActionResponse {
  /**
   * @schema CreateBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema CreateBudgetActionResponse#ActionId
   */
  readonly actionId: string;

}

/**
 * @schema CreateNotificationRequest
 */
export interface CreateNotificationRequest {
  /**
   * @schema CreateNotificationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateNotificationRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema CreateNotificationRequest#Notification
   */
  readonly notification: Notification;

  /**
   * @schema CreateNotificationRequest#Subscribers
   */
  readonly subscribers: Subscriber[];

}

/**
 * @schema CreateNotificationResponse
 */
export interface CreateNotificationResponse {
}

/**
 * @schema CreateSubscriberRequest
 */
export interface CreateSubscriberRequest {
  /**
   * @schema CreateSubscriberRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateSubscriberRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema CreateSubscriberRequest#Notification
   */
  readonly notification: Notification;

  /**
   * @schema CreateSubscriberRequest#Subscriber
   */
  readonly subscriber: Subscriber;

}

/**
 * @schema CreateSubscriberResponse
 */
export interface CreateSubscriberResponse {
}

/**
 * @schema DeleteBudgetRequest
 */
export interface DeleteBudgetRequest {
  /**
   * @schema DeleteBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteBudgetRequest#BudgetName
   */
  readonly budgetName: string;

}

/**
 * @schema DeleteBudgetResponse
 */
export interface DeleteBudgetResponse {
}

/**
 * @schema DeleteBudgetActionRequest
 */
export interface DeleteBudgetActionRequest {
  /**
   * @schema DeleteBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DeleteBudgetActionRequest#ActionId
   */
  readonly actionId: string;

}

/**
 * @schema DeleteBudgetActionResponse
 */
export interface DeleteBudgetActionResponse {
  /**
   * @schema DeleteBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DeleteBudgetActionResponse#Action
   */
  readonly action: Action;

}

/**
 * @schema DeleteNotificationRequest
 */
export interface DeleteNotificationRequest {
  /**
   * @schema DeleteNotificationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteNotificationRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DeleteNotificationRequest#Notification
   */
  readonly notification: Notification;

}

/**
 * @schema DeleteNotificationResponse
 */
export interface DeleteNotificationResponse {
}

/**
 * @schema DeleteSubscriberRequest
 */
export interface DeleteSubscriberRequest {
  /**
   * @schema DeleteSubscriberRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteSubscriberRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DeleteSubscriberRequest#Notification
   */
  readonly notification: Notification;

  /**
   * @schema DeleteSubscriberRequest#Subscriber
   */
  readonly subscriber: Subscriber;

}

/**
 * @schema DeleteSubscriberResponse
 */
export interface DeleteSubscriberResponse {
}

/**
 * @schema DescribeBudgetRequest
 */
export interface DescribeBudgetRequest {
  /**
   * @schema DescribeBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeBudgetRequest#BudgetName
   */
  readonly budgetName: string;

}

/**
 * @schema DescribeBudgetResponse
 */
export interface DescribeBudgetResponse {
  /**
   * @schema DescribeBudgetResponse#Budget
   */
  readonly budget?: Budget;

}

/**
 * @schema DescribeBudgetActionRequest
 */
export interface DescribeBudgetActionRequest {
  /**
   * @schema DescribeBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DescribeBudgetActionRequest#ActionId
   */
  readonly actionId: string;

}

/**
 * @schema DescribeBudgetActionResponse
 */
export interface DescribeBudgetActionResponse {
  /**
   * @schema DescribeBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DescribeBudgetActionResponse#Action
   */
  readonly action: Action;

}

/**
 * @schema DescribeBudgetActionHistoriesRequest
 */
export interface DescribeBudgetActionHistoriesRequest {
  /**
   * @schema DescribeBudgetActionHistoriesRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeBudgetActionHistoriesRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DescribeBudgetActionHistoriesRequest#ActionId
   */
  readonly actionId: string;

  /**
   * @schema DescribeBudgetActionHistoriesRequest#TimePeriod
   */
  readonly timePeriod?: TimePeriod;

  /**
   * @schema DescribeBudgetActionHistoriesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBudgetActionHistoriesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBudgetActionHistoriesResponse
 */
export interface DescribeBudgetActionHistoriesResponse {
  /**
   * @schema DescribeBudgetActionHistoriesResponse#ActionHistories
   */
  readonly actionHistories: ActionHistory[];

  /**
   * @schema DescribeBudgetActionHistoriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBudgetActionsForAccountRequest
 */
export interface DescribeBudgetActionsForAccountRequest {
  /**
   * @schema DescribeBudgetActionsForAccountRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeBudgetActionsForAccountRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBudgetActionsForAccountRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBudgetActionsForAccountResponse
 */
export interface DescribeBudgetActionsForAccountResponse {
  /**
   * @schema DescribeBudgetActionsForAccountResponse#Actions
   */
  readonly actions: Action[];

  /**
   * @schema DescribeBudgetActionsForAccountResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBudgetActionsForBudgetRequest
 */
export interface DescribeBudgetActionsForBudgetRequest {
  /**
   * @schema DescribeBudgetActionsForBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeBudgetActionsForBudgetRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DescribeBudgetActionsForBudgetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBudgetActionsForBudgetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBudgetActionsForBudgetResponse
 */
export interface DescribeBudgetActionsForBudgetResponse {
  /**
   * @schema DescribeBudgetActionsForBudgetResponse#Actions
   */
  readonly actions: Action[];

  /**
   * @schema DescribeBudgetActionsForBudgetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBudgetPerformanceHistoryRequest
 */
export interface DescribeBudgetPerformanceHistoryRequest {
  /**
   * @schema DescribeBudgetPerformanceHistoryRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeBudgetPerformanceHistoryRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DescribeBudgetPerformanceHistoryRequest#TimePeriod
   */
  readonly timePeriod?: TimePeriod;

  /**
   * @schema DescribeBudgetPerformanceHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBudgetPerformanceHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBudgetPerformanceHistoryResponse
 */
export interface DescribeBudgetPerformanceHistoryResponse {
  /**
   * @schema DescribeBudgetPerformanceHistoryResponse#BudgetPerformanceHistory
   */
  readonly budgetPerformanceHistory?: BudgetPerformanceHistory;

  /**
   * @schema DescribeBudgetPerformanceHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBudgetsRequest
 */
export interface DescribeBudgetsRequest {
  /**
   * @schema DescribeBudgetsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeBudgetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeBudgetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeBudgetsResponse
 */
export interface DescribeBudgetsResponse {
  /**
   * @schema DescribeBudgetsResponse#Budgets
   */
  readonly budgets?: Budget[];

  /**
   * @schema DescribeBudgetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeNotificationsForBudgetRequest
 */
export interface DescribeNotificationsForBudgetRequest {
  /**
   * @schema DescribeNotificationsForBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeNotificationsForBudgetRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DescribeNotificationsForBudgetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeNotificationsForBudgetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeNotificationsForBudgetResponse
 */
export interface DescribeNotificationsForBudgetResponse {
  /**
   * @schema DescribeNotificationsForBudgetResponse#Notifications
   */
  readonly notifications?: Notification[];

  /**
   * @schema DescribeNotificationsForBudgetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSubscribersForNotificationRequest
 */
export interface DescribeSubscribersForNotificationRequest {
  /**
   * @schema DescribeSubscribersForNotificationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeSubscribersForNotificationRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DescribeSubscribersForNotificationRequest#Notification
   */
  readonly notification: Notification;

  /**
   * @schema DescribeSubscribersForNotificationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeSubscribersForNotificationRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSubscribersForNotificationResponse
 */
export interface DescribeSubscribersForNotificationResponse {
  /**
   * @schema DescribeSubscribersForNotificationResponse#Subscribers
   */
  readonly subscribers?: Subscriber[];

  /**
   * @schema DescribeSubscribersForNotificationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ExecuteBudgetActionRequest
 */
export interface ExecuteBudgetActionRequest {
  /**
   * @schema ExecuteBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ExecuteBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema ExecuteBudgetActionRequest#ActionId
   */
  readonly actionId: string;

  /**
   * @schema ExecuteBudgetActionRequest#ExecutionType
   */
  readonly executionType: string;

}

/**
 * @schema ExecuteBudgetActionResponse
 */
export interface ExecuteBudgetActionResponse {
  /**
   * @schema ExecuteBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ExecuteBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema ExecuteBudgetActionResponse#ActionId
   */
  readonly actionId: string;

  /**
   * @schema ExecuteBudgetActionResponse#ExecutionType
   */
  readonly executionType: string;

}

/**
 * @schema UpdateBudgetRequest
 */
export interface UpdateBudgetRequest {
  /**
   * @schema UpdateBudgetRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateBudgetRequest#NewBudget
   */
  readonly newBudget: Budget;

}

/**
 * @schema UpdateBudgetResponse
 */
export interface UpdateBudgetResponse {
}

/**
 * @schema UpdateBudgetActionRequest
 */
export interface UpdateBudgetActionRequest {
  /**
   * @schema UpdateBudgetActionRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateBudgetActionRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema UpdateBudgetActionRequest#ActionId
   */
  readonly actionId: string;

  /**
   * @schema UpdateBudgetActionRequest#NotificationType
   */
  readonly notificationType?: string;

  /**
   * @schema UpdateBudgetActionRequest#ActionThreshold
   */
  readonly actionThreshold?: ActionThreshold;

  /**
   * @schema UpdateBudgetActionRequest#Definition
   */
  readonly definition?: Definition;

  /**
   * @schema UpdateBudgetActionRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema UpdateBudgetActionRequest#ApprovalModel
   */
  readonly approvalModel?: string;

  /**
   * @schema UpdateBudgetActionRequest#Subscribers
   */
  readonly subscribers?: Subscriber[];

}

/**
 * @schema UpdateBudgetActionResponse
 */
export interface UpdateBudgetActionResponse {
  /**
   * @schema UpdateBudgetActionResponse#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateBudgetActionResponse#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema UpdateBudgetActionResponse#OldAction
   */
  readonly oldAction: Action;

  /**
   * @schema UpdateBudgetActionResponse#NewAction
   */
  readonly newAction: Action;

}

/**
 * @schema UpdateNotificationRequest
 */
export interface UpdateNotificationRequest {
  /**
   * @schema UpdateNotificationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateNotificationRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema UpdateNotificationRequest#OldNotification
   */
  readonly oldNotification: Notification;

  /**
   * @schema UpdateNotificationRequest#NewNotification
   */
  readonly newNotification: Notification;

}

/**
 * @schema UpdateNotificationResponse
 */
export interface UpdateNotificationResponse {
}

/**
 * @schema UpdateSubscriberRequest
 */
export interface UpdateSubscriberRequest {
  /**
   * @schema UpdateSubscriberRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateSubscriberRequest#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema UpdateSubscriberRequest#Notification
   */
  readonly notification: Notification;

  /**
   * @schema UpdateSubscriberRequest#OldSubscriber
   */
  readonly oldSubscriber: Subscriber;

  /**
   * @schema UpdateSubscriberRequest#NewSubscriber
   */
  readonly newSubscriber: Subscriber;

}

/**
 * @schema UpdateSubscriberResponse
 */
export interface UpdateSubscriberResponse {
}

/**
 * @schema Budget
 */
export interface Budget {
  /**
   * @schema Budget#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema Budget#BudgetLimit
   */
  readonly budgetLimit?: Spend;

  /**
   * @schema Budget#PlannedBudgetLimits
   */
  readonly plannedBudgetLimits?: { [key: string]: Spend };

  /**
   * @schema Budget#CostFilters
   */
  readonly costFilters?: { [key: string]: string[] };

  /**
   * @schema Budget#CostTypes
   */
  readonly costTypes?: CostTypes;

  /**
   * @schema Budget#TimeUnit
   */
  readonly timeUnit: string;

  /**
   * @schema Budget#TimePeriod
   */
  readonly timePeriod?: TimePeriod;

  /**
   * @schema Budget#CalculatedSpend
   */
  readonly calculatedSpend?: CalculatedSpend;

  /**
   * @schema Budget#BudgetType
   */
  readonly budgetType: string;

  /**
   * @schema Budget#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema NotificationWithSubscribers
 */
export interface NotificationWithSubscribers {
  /**
   * @schema NotificationWithSubscribers#Notification
   */
  readonly notification: Notification;

  /**
   * @schema NotificationWithSubscribers#Subscribers
   */
  readonly subscribers: Subscriber[];

}

/**
 * @schema ActionThreshold
 */
export interface ActionThreshold {
  /**
   * @schema ActionThreshold#ActionThresholdValue
   */
  readonly actionThresholdValue: number;

  /**
   * @schema ActionThreshold#ActionThresholdType
   */
  readonly actionThresholdType: string;

}

/**
 * @schema Definition
 */
export interface Definition {
  /**
   * @schema Definition#IamActionDefinition
   */
  readonly iamActionDefinition?: IamActionDefinition;

  /**
   * @schema Definition#ScpActionDefinition
   */
  readonly scpActionDefinition?: ScpActionDefinition;

  /**
   * @schema Definition#SsmActionDefinition
   */
  readonly ssmActionDefinition?: SsmActionDefinition;

}

/**
 * @schema Subscriber
 */
export interface Subscriber {
  /**
   * @schema Subscriber#SubscriptionType
   */
  readonly subscriptionType: string;

  /**
   * @schema Subscriber#Address
   */
  readonly address: string;

}

/**
 * @schema Notification
 */
export interface Notification {
  /**
   * @schema Notification#NotificationType
   */
  readonly notificationType: string;

  /**
   * @schema Notification#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema Notification#Threshold
   */
  readonly threshold: number;

  /**
   * @schema Notification#ThresholdType
   */
  readonly thresholdType?: string;

  /**
   * @schema Notification#NotificationState
   */
  readonly notificationState?: string;

}

/**
 * @schema Action
 */
export interface Action {
  /**
   * @schema Action#ActionId
   */
  readonly actionId: string;

  /**
   * @schema Action#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema Action#NotificationType
   */
  readonly notificationType: string;

  /**
   * @schema Action#ActionType
   */
  readonly actionType: string;

  /**
   * @schema Action#ActionThreshold
   */
  readonly actionThreshold: ActionThreshold;

  /**
   * @schema Action#Definition
   */
  readonly definition: Definition;

  /**
   * @schema Action#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema Action#ApprovalModel
   */
  readonly approvalModel: string;

  /**
   * @schema Action#Status
   */
  readonly status: string;

  /**
   * @schema Action#Subscribers
   */
  readonly subscribers: Subscriber[];

}

/**
 * @schema TimePeriod
 */
export interface TimePeriod {
  /**
   * @schema TimePeriod#Start
   */
  readonly start?: string;

  /**
   * @schema TimePeriod#End
   */
  readonly end?: string;

}

/**
 * @schema ActionHistory
 */
export interface ActionHistory {
  /**
   * @schema ActionHistory#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema ActionHistory#Status
   */
  readonly status: string;

  /**
   * @schema ActionHistory#EventType
   */
  readonly eventType: string;

  /**
   * @schema ActionHistory#ActionHistoryDetails
   */
  readonly actionHistoryDetails: ActionHistoryDetails;

}

/**
 * @schema BudgetPerformanceHistory
 */
export interface BudgetPerformanceHistory {
  /**
   * @schema BudgetPerformanceHistory#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetPerformanceHistory#BudgetType
   */
  readonly budgetType?: string;

  /**
   * @schema BudgetPerformanceHistory#CostFilters
   */
  readonly costFilters?: { [key: string]: string[] };

  /**
   * @schema BudgetPerformanceHistory#CostTypes
   */
  readonly costTypes?: CostTypes;

  /**
   * @schema BudgetPerformanceHistory#TimeUnit
   */
  readonly timeUnit?: string;

  /**
   * @schema BudgetPerformanceHistory#BudgetedAndActualAmountsList
   */
  readonly budgetedAndActualAmountsList?: BudgetedAndActualAmounts[];

}

/**
 * @schema Spend
 */
export interface Spend {
  /**
   * @schema Spend#Amount
   */
  readonly amount: string;

  /**
   * @schema Spend#Unit
   */
  readonly unit: string;

}

/**
 * @schema CostTypes
 */
export interface CostTypes {
  /**
   * @schema CostTypes#IncludeTax
   */
  readonly includeTax?: boolean;

  /**
   * @schema CostTypes#IncludeSubscription
   */
  readonly includeSubscription?: boolean;

  /**
   * @schema CostTypes#UseBlended
   */
  readonly useBlended?: boolean;

  /**
   * @schema CostTypes#IncludeRefund
   */
  readonly includeRefund?: boolean;

  /**
   * @schema CostTypes#IncludeCredit
   */
  readonly includeCredit?: boolean;

  /**
   * @schema CostTypes#IncludeUpfront
   */
  readonly includeUpfront?: boolean;

  /**
   * @schema CostTypes#IncludeRecurring
   */
  readonly includeRecurring?: boolean;

  /**
   * @schema CostTypes#IncludeOtherSubscription
   */
  readonly includeOtherSubscription?: boolean;

  /**
   * @schema CostTypes#IncludeSupport
   */
  readonly includeSupport?: boolean;

  /**
   * @schema CostTypes#IncludeDiscount
   */
  readonly includeDiscount?: boolean;

  /**
   * @schema CostTypes#UseAmortized
   */
  readonly useAmortized?: boolean;

}

/**
 * @schema CalculatedSpend
 */
export interface CalculatedSpend {
  /**
   * @schema CalculatedSpend#ActualSpend
   */
  readonly actualSpend: Spend;

  /**
   * @schema CalculatedSpend#ForecastedSpend
   */
  readonly forecastedSpend?: Spend;

}

/**
 * @schema IamActionDefinition
 */
export interface IamActionDefinition {
  /**
   * @schema IamActionDefinition#PolicyArn
   */
  readonly policyArn: string;

  /**
   * @schema IamActionDefinition#Roles
   */
  readonly roles?: string[];

  /**
   * @schema IamActionDefinition#Groups
   */
  readonly groups?: string[];

  /**
   * @schema IamActionDefinition#Users
   */
  readonly users?: string[];

}

/**
 * @schema ScpActionDefinition
 */
export interface ScpActionDefinition {
  /**
   * @schema ScpActionDefinition#PolicyId
   */
  readonly policyId: string;

  /**
   * @schema ScpActionDefinition#TargetIds
   */
  readonly targetIds: string[];

}

/**
 * @schema SsmActionDefinition
 */
export interface SsmActionDefinition {
  /**
   * @schema SsmActionDefinition#ActionSubType
   */
  readonly actionSubType: string;

  /**
   * @schema SsmActionDefinition#Region
   */
  readonly region: string;

  /**
   * @schema SsmActionDefinition#InstanceIds
   */
  readonly instanceIds: string[];

}

/**
 * @schema ActionHistoryDetails
 */
export interface ActionHistoryDetails {
  /**
   * @schema ActionHistoryDetails#Message
   */
  readonly message: string;

  /**
   * @schema ActionHistoryDetails#Action
   */
  readonly action: Action;

}

/**
 * @schema BudgetedAndActualAmounts
 */
export interface BudgetedAndActualAmounts {
  /**
   * @schema BudgetedAndActualAmounts#BudgetedAmount
   */
  readonly budgetedAmount?: Spend;

  /**
   * @schema BudgetedAndActualAmounts#ActualAmount
   */
  readonly actualAmount?: Spend;

  /**
   * @schema BudgetedAndActualAmounts#TimePeriod
   */
  readonly timePeriod?: TimePeriod;

}
