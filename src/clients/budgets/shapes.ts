/**
 * @schema BudgetsCreateBudgetRequest
 */
export interface BudgetsCreateBudgetRequest {
  /**
   * @schema BudgetsCreateBudgetRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsCreateBudgetRequest#Budget
   */
  readonly budget?: BudgetsBudget;

  /**
   * @schema BudgetsCreateBudgetRequest#NotificationsWithSubscribers
   */
  readonly notificationsWithSubscribers?: BudgetsNotificationWithSubscribers[];

}

/**
 * Converts an object of type 'BudgetsCreateBudgetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCreateBudgetRequest(obj: BudgetsCreateBudgetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Budget': toJson_BudgetsBudget(obj.budget),
    'NotificationsWithSubscribers': obj.notificationsWithSubscribers?.map(y => toJson_BudgetsNotificationWithSubscribers(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsCreateBudgetResponse
 */
export interface BudgetsCreateBudgetResponse {
}

/**
 * Converts an object of type 'BudgetsCreateBudgetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCreateBudgetResponse(obj: BudgetsCreateBudgetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsCreateBudgetActionRequest
 */
export interface BudgetsCreateBudgetActionRequest {
  /**
   * @schema BudgetsCreateBudgetActionRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#NotificationType
   */
  readonly notificationType?: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#ActionThreshold
   */
  readonly actionThreshold?: BudgetsActionThreshold;

  /**
   * @schema BudgetsCreateBudgetActionRequest#Definition
   */
  readonly definition?: BudgetsDefinition;

  /**
   * @schema BudgetsCreateBudgetActionRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#ApprovalModel
   */
  readonly approvalModel?: string;

  /**
   * @schema BudgetsCreateBudgetActionRequest#Subscribers
   */
  readonly subscribers?: BudgetsSubscriber[];

}

/**
 * Converts an object of type 'BudgetsCreateBudgetActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCreateBudgetActionRequest(obj: BudgetsCreateBudgetActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'NotificationType': obj.notificationType,
    'ActionType': obj.actionType,
    'ActionThreshold': toJson_BudgetsActionThreshold(obj.actionThreshold),
    'Definition': toJson_BudgetsDefinition(obj.definition),
    'ExecutionRoleArn': obj.executionRoleArn,
    'ApprovalModel': obj.approvalModel,
    'Subscribers': obj.subscribers?.map(y => toJson_BudgetsSubscriber(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsCreateBudgetActionResponse
 */
export interface BudgetsCreateBudgetActionResponse {
  /**
   * @schema BudgetsCreateBudgetActionResponse#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsCreateBudgetActionResponse#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsCreateBudgetActionResponse#ActionId
   */
  readonly actionId?: string;

}

/**
 * Converts an object of type 'BudgetsCreateBudgetActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCreateBudgetActionResponse(obj: BudgetsCreateBudgetActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'ActionId': obj.actionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsCreateNotificationRequest
 */
export interface BudgetsCreateNotificationRequest {
  /**
   * @schema BudgetsCreateNotificationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsCreateNotificationRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsCreateNotificationRequest#Notification
   */
  readonly notification?: BudgetsNotification;

  /**
   * @schema BudgetsCreateNotificationRequest#Subscribers
   */
  readonly subscribers?: BudgetsSubscriber[];

}

/**
 * Converts an object of type 'BudgetsCreateNotificationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCreateNotificationRequest(obj: BudgetsCreateNotificationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'Notification': toJson_BudgetsNotification(obj.notification),
    'Subscribers': obj.subscribers?.map(y => toJson_BudgetsSubscriber(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsCreateNotificationResponse
 */
export interface BudgetsCreateNotificationResponse {
}

/**
 * Converts an object of type 'BudgetsCreateNotificationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCreateNotificationResponse(obj: BudgetsCreateNotificationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsCreateSubscriberRequest
 */
export interface BudgetsCreateSubscriberRequest {
  /**
   * @schema BudgetsCreateSubscriberRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsCreateSubscriberRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsCreateSubscriberRequest#Notification
   */
  readonly notification?: BudgetsNotification;

  /**
   * @schema BudgetsCreateSubscriberRequest#Subscriber
   */
  readonly subscriber?: BudgetsSubscriber;

}

/**
 * Converts an object of type 'BudgetsCreateSubscriberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCreateSubscriberRequest(obj: BudgetsCreateSubscriberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'Notification': toJson_BudgetsNotification(obj.notification),
    'Subscriber': toJson_BudgetsSubscriber(obj.subscriber),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsCreateSubscriberResponse
 */
export interface BudgetsCreateSubscriberResponse {
}

/**
 * Converts an object of type 'BudgetsCreateSubscriberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCreateSubscriberResponse(obj: BudgetsCreateSubscriberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDeleteBudgetRequest
 */
export interface BudgetsDeleteBudgetRequest {
  /**
   * @schema BudgetsDeleteBudgetRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDeleteBudgetRequest#BudgetName
   */
  readonly budgetName?: string;

}

/**
 * Converts an object of type 'BudgetsDeleteBudgetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDeleteBudgetRequest(obj: BudgetsDeleteBudgetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDeleteBudgetResponse
 */
export interface BudgetsDeleteBudgetResponse {
}

/**
 * Converts an object of type 'BudgetsDeleteBudgetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDeleteBudgetResponse(obj: BudgetsDeleteBudgetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDeleteBudgetActionRequest
 */
export interface BudgetsDeleteBudgetActionRequest {
  /**
   * @schema BudgetsDeleteBudgetActionRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDeleteBudgetActionRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsDeleteBudgetActionRequest#ActionId
   */
  readonly actionId?: string;

}

/**
 * Converts an object of type 'BudgetsDeleteBudgetActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDeleteBudgetActionRequest(obj: BudgetsDeleteBudgetActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'ActionId': obj.actionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDeleteBudgetActionResponse
 */
export interface BudgetsDeleteBudgetActionResponse {
  /**
   * @schema BudgetsDeleteBudgetActionResponse#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDeleteBudgetActionResponse#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsDeleteBudgetActionResponse#Action
   */
  readonly action?: BudgetsAction;

}

/**
 * Converts an object of type 'BudgetsDeleteBudgetActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDeleteBudgetActionResponse(obj: BudgetsDeleteBudgetActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'Action': toJson_BudgetsAction(obj.action),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDeleteNotificationRequest
 */
export interface BudgetsDeleteNotificationRequest {
  /**
   * @schema BudgetsDeleteNotificationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDeleteNotificationRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsDeleteNotificationRequest#Notification
   */
  readonly notification?: BudgetsNotification;

}

/**
 * Converts an object of type 'BudgetsDeleteNotificationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDeleteNotificationRequest(obj: BudgetsDeleteNotificationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'Notification': toJson_BudgetsNotification(obj.notification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDeleteNotificationResponse
 */
export interface BudgetsDeleteNotificationResponse {
}

/**
 * Converts an object of type 'BudgetsDeleteNotificationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDeleteNotificationResponse(obj: BudgetsDeleteNotificationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDeleteSubscriberRequest
 */
export interface BudgetsDeleteSubscriberRequest {
  /**
   * @schema BudgetsDeleteSubscriberRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDeleteSubscriberRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsDeleteSubscriberRequest#Notification
   */
  readonly notification?: BudgetsNotification;

  /**
   * @schema BudgetsDeleteSubscriberRequest#Subscriber
   */
  readonly subscriber?: BudgetsSubscriber;

}

/**
 * Converts an object of type 'BudgetsDeleteSubscriberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDeleteSubscriberRequest(obj: BudgetsDeleteSubscriberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'Notification': toJson_BudgetsNotification(obj.notification),
    'Subscriber': toJson_BudgetsSubscriber(obj.subscriber),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDeleteSubscriberResponse
 */
export interface BudgetsDeleteSubscriberResponse {
}

/**
 * Converts an object of type 'BudgetsDeleteSubscriberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDeleteSubscriberResponse(obj: BudgetsDeleteSubscriberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetRequest
 */
export interface BudgetsDescribeBudgetRequest {
  /**
   * @schema BudgetsDescribeBudgetRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDescribeBudgetRequest#BudgetName
   */
  readonly budgetName?: string;

}

/**
 * Converts an object of type 'BudgetsDescribeBudgetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetRequest(obj: BudgetsDescribeBudgetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'BudgetsDescribeBudgetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetResponse(obj: BudgetsDescribeBudgetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Budget': toJson_BudgetsBudget(obj.budget),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetActionRequest
 */
export interface BudgetsDescribeBudgetActionRequest {
  /**
   * @schema BudgetsDescribeBudgetActionRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDescribeBudgetActionRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsDescribeBudgetActionRequest#ActionId
   */
  readonly actionId?: string;

}

/**
 * Converts an object of type 'BudgetsDescribeBudgetActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetActionRequest(obj: BudgetsDescribeBudgetActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'ActionId': obj.actionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetActionResponse
 */
export interface BudgetsDescribeBudgetActionResponse {
  /**
   * @schema BudgetsDescribeBudgetActionResponse#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDescribeBudgetActionResponse#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsDescribeBudgetActionResponse#Action
   */
  readonly action?: BudgetsAction;

}

/**
 * Converts an object of type 'BudgetsDescribeBudgetActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetActionResponse(obj: BudgetsDescribeBudgetActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'Action': toJson_BudgetsAction(obj.action),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetActionHistoriesRequest
 */
export interface BudgetsDescribeBudgetActionHistoriesRequest {
  /**
   * @schema BudgetsDescribeBudgetActionHistoriesRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDescribeBudgetActionHistoriesRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsDescribeBudgetActionHistoriesRequest#ActionId
   */
  readonly actionId?: string;

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
 * Converts an object of type 'BudgetsDescribeBudgetActionHistoriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetActionHistoriesRequest(obj: BudgetsDescribeBudgetActionHistoriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'ActionId': obj.actionId,
    'TimePeriod': toJson_BudgetsTimePeriod(obj.timePeriod),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetActionHistoriesResponse
 */
export interface BudgetsDescribeBudgetActionHistoriesResponse {
  /**
   * @schema BudgetsDescribeBudgetActionHistoriesResponse#ActionHistories
   */
  readonly actionHistories?: BudgetsActionHistory[];

  /**
   * @schema BudgetsDescribeBudgetActionHistoriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BudgetsDescribeBudgetActionHistoriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetActionHistoriesResponse(obj: BudgetsDescribeBudgetActionHistoriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionHistories': obj.actionHistories?.map(y => toJson_BudgetsActionHistory(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetActionsForAccountRequest
 */
export interface BudgetsDescribeBudgetActionsForAccountRequest {
  /**
   * @schema BudgetsDescribeBudgetActionsForAccountRequest#AccountId
   */
  readonly accountId?: string;

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
 * Converts an object of type 'BudgetsDescribeBudgetActionsForAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetActionsForAccountRequest(obj: BudgetsDescribeBudgetActionsForAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetActionsForAccountResponse
 */
export interface BudgetsDescribeBudgetActionsForAccountResponse {
  /**
   * @schema BudgetsDescribeBudgetActionsForAccountResponse#Actions
   */
  readonly actions?: BudgetsAction[];

  /**
   * @schema BudgetsDescribeBudgetActionsForAccountResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BudgetsDescribeBudgetActionsForAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetActionsForAccountResponse(obj: BudgetsDescribeBudgetActionsForAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Actions': obj.actions?.map(y => toJson_BudgetsAction(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetActionsForBudgetRequest
 */
export interface BudgetsDescribeBudgetActionsForBudgetRequest {
  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetRequest#BudgetName
   */
  readonly budgetName?: string;

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
 * Converts an object of type 'BudgetsDescribeBudgetActionsForBudgetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetActionsForBudgetRequest(obj: BudgetsDescribeBudgetActionsForBudgetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetActionsForBudgetResponse
 */
export interface BudgetsDescribeBudgetActionsForBudgetResponse {
  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetResponse#Actions
   */
  readonly actions?: BudgetsAction[];

  /**
   * @schema BudgetsDescribeBudgetActionsForBudgetResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BudgetsDescribeBudgetActionsForBudgetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetActionsForBudgetResponse(obj: BudgetsDescribeBudgetActionsForBudgetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Actions': obj.actions?.map(y => toJson_BudgetsAction(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetPerformanceHistoryRequest
 */
export interface BudgetsDescribeBudgetPerformanceHistoryRequest {
  /**
   * @schema BudgetsDescribeBudgetPerformanceHistoryRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDescribeBudgetPerformanceHistoryRequest#BudgetName
   */
  readonly budgetName?: string;

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
 * Converts an object of type 'BudgetsDescribeBudgetPerformanceHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetPerformanceHistoryRequest(obj: BudgetsDescribeBudgetPerformanceHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'TimePeriod': toJson_BudgetsTimePeriod(obj.timePeriod),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'BudgetsDescribeBudgetPerformanceHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetPerformanceHistoryResponse(obj: BudgetsDescribeBudgetPerformanceHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BudgetPerformanceHistory': toJson_BudgetsBudgetPerformanceHistory(obj.budgetPerformanceHistory),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeBudgetsRequest
 */
export interface BudgetsDescribeBudgetsRequest {
  /**
   * @schema BudgetsDescribeBudgetsRequest#AccountId
   */
  readonly accountId?: string;

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
 * Converts an object of type 'BudgetsDescribeBudgetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetsRequest(obj: BudgetsDescribeBudgetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'BudgetsDescribeBudgetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeBudgetsResponse(obj: BudgetsDescribeBudgetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Budgets': obj.budgets?.map(y => toJson_BudgetsBudget(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeNotificationsForBudgetRequest
 */
export interface BudgetsDescribeNotificationsForBudgetRequest {
  /**
   * @schema BudgetsDescribeNotificationsForBudgetRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDescribeNotificationsForBudgetRequest#BudgetName
   */
  readonly budgetName?: string;

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
 * Converts an object of type 'BudgetsDescribeNotificationsForBudgetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeNotificationsForBudgetRequest(obj: BudgetsDescribeNotificationsForBudgetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'BudgetsDescribeNotificationsForBudgetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeNotificationsForBudgetResponse(obj: BudgetsDescribeNotificationsForBudgetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Notifications': obj.notifications?.map(y => toJson_BudgetsNotification(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsDescribeSubscribersForNotificationRequest
 */
export interface BudgetsDescribeSubscribersForNotificationRequest {
  /**
   * @schema BudgetsDescribeSubscribersForNotificationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsDescribeSubscribersForNotificationRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsDescribeSubscribersForNotificationRequest#Notification
   */
  readonly notification?: BudgetsNotification;

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
 * Converts an object of type 'BudgetsDescribeSubscribersForNotificationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeSubscribersForNotificationRequest(obj: BudgetsDescribeSubscribersForNotificationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'Notification': toJson_BudgetsNotification(obj.notification),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'BudgetsDescribeSubscribersForNotificationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDescribeSubscribersForNotificationResponse(obj: BudgetsDescribeSubscribersForNotificationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subscribers': obj.subscribers?.map(y => toJson_BudgetsSubscriber(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsExecuteBudgetActionRequest
 */
export interface BudgetsExecuteBudgetActionRequest {
  /**
   * @schema BudgetsExecuteBudgetActionRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsExecuteBudgetActionRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsExecuteBudgetActionRequest#ActionId
   */
  readonly actionId?: string;

  /**
   * @schema BudgetsExecuteBudgetActionRequest#ExecutionType
   */
  readonly executionType?: string;

}

/**
 * Converts an object of type 'BudgetsExecuteBudgetActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsExecuteBudgetActionRequest(obj: BudgetsExecuteBudgetActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'ActionId': obj.actionId,
    'ExecutionType': obj.executionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsExecuteBudgetActionResponse
 */
export interface BudgetsExecuteBudgetActionResponse {
  /**
   * @schema BudgetsExecuteBudgetActionResponse#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsExecuteBudgetActionResponse#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsExecuteBudgetActionResponse#ActionId
   */
  readonly actionId?: string;

  /**
   * @schema BudgetsExecuteBudgetActionResponse#ExecutionType
   */
  readonly executionType?: string;

}

/**
 * Converts an object of type 'BudgetsExecuteBudgetActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsExecuteBudgetActionResponse(obj: BudgetsExecuteBudgetActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'ActionId': obj.actionId,
    'ExecutionType': obj.executionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsUpdateBudgetRequest
 */
export interface BudgetsUpdateBudgetRequest {
  /**
   * @schema BudgetsUpdateBudgetRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsUpdateBudgetRequest#NewBudget
   */
  readonly newBudget?: BudgetsBudget;

}

/**
 * Converts an object of type 'BudgetsUpdateBudgetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsUpdateBudgetRequest(obj: BudgetsUpdateBudgetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'NewBudget': toJson_BudgetsBudget(obj.newBudget),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsUpdateBudgetResponse
 */
export interface BudgetsUpdateBudgetResponse {
}

/**
 * Converts an object of type 'BudgetsUpdateBudgetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsUpdateBudgetResponse(obj: BudgetsUpdateBudgetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsUpdateBudgetActionRequest
 */
export interface BudgetsUpdateBudgetActionRequest {
  /**
   * @schema BudgetsUpdateBudgetActionRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsUpdateBudgetActionRequest#ActionId
   */
  readonly actionId?: string;

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
 * Converts an object of type 'BudgetsUpdateBudgetActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsUpdateBudgetActionRequest(obj: BudgetsUpdateBudgetActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'ActionId': obj.actionId,
    'NotificationType': obj.notificationType,
    'ActionThreshold': toJson_BudgetsActionThreshold(obj.actionThreshold),
    'Definition': toJson_BudgetsDefinition(obj.definition),
    'ExecutionRoleArn': obj.executionRoleArn,
    'ApprovalModel': obj.approvalModel,
    'Subscribers': obj.subscribers?.map(y => toJson_BudgetsSubscriber(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsUpdateBudgetActionResponse
 */
export interface BudgetsUpdateBudgetActionResponse {
  /**
   * @schema BudgetsUpdateBudgetActionResponse#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsUpdateBudgetActionResponse#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsUpdateBudgetActionResponse#OldAction
   */
  readonly oldAction?: BudgetsAction;

  /**
   * @schema BudgetsUpdateBudgetActionResponse#NewAction
   */
  readonly newAction?: BudgetsAction;

}

/**
 * Converts an object of type 'BudgetsUpdateBudgetActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsUpdateBudgetActionResponse(obj: BudgetsUpdateBudgetActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'OldAction': toJson_BudgetsAction(obj.oldAction),
    'NewAction': toJson_BudgetsAction(obj.newAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsUpdateNotificationRequest
 */
export interface BudgetsUpdateNotificationRequest {
  /**
   * @schema BudgetsUpdateNotificationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsUpdateNotificationRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsUpdateNotificationRequest#OldNotification
   */
  readonly oldNotification?: BudgetsNotification;

  /**
   * @schema BudgetsUpdateNotificationRequest#NewNotification
   */
  readonly newNotification?: BudgetsNotification;

}

/**
 * Converts an object of type 'BudgetsUpdateNotificationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsUpdateNotificationRequest(obj: BudgetsUpdateNotificationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'OldNotification': toJson_BudgetsNotification(obj.oldNotification),
    'NewNotification': toJson_BudgetsNotification(obj.newNotification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsUpdateNotificationResponse
 */
export interface BudgetsUpdateNotificationResponse {
}

/**
 * Converts an object of type 'BudgetsUpdateNotificationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsUpdateNotificationResponse(obj: BudgetsUpdateNotificationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsUpdateSubscriberRequest
 */
export interface BudgetsUpdateSubscriberRequest {
  /**
   * @schema BudgetsUpdateSubscriberRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BudgetsUpdateSubscriberRequest#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsUpdateSubscriberRequest#Notification
   */
  readonly notification?: BudgetsNotification;

  /**
   * @schema BudgetsUpdateSubscriberRequest#OldSubscriber
   */
  readonly oldSubscriber?: BudgetsSubscriber;

  /**
   * @schema BudgetsUpdateSubscriberRequest#NewSubscriber
   */
  readonly newSubscriber?: BudgetsSubscriber;

}

/**
 * Converts an object of type 'BudgetsUpdateSubscriberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsUpdateSubscriberRequest(obj: BudgetsUpdateSubscriberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BudgetName': obj.budgetName,
    'Notification': toJson_BudgetsNotification(obj.notification),
    'OldSubscriber': toJson_BudgetsSubscriber(obj.oldSubscriber),
    'NewSubscriber': toJson_BudgetsSubscriber(obj.newSubscriber),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsUpdateSubscriberResponse
 */
export interface BudgetsUpdateSubscriberResponse {
}

/**
 * Converts an object of type 'BudgetsUpdateSubscriberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsUpdateSubscriberResponse(obj: BudgetsUpdateSubscriberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsBudget
 */
export interface BudgetsBudget {
  /**
   * @schema BudgetsBudget#BudgetName
   */
  readonly budgetName?: string;

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
  readonly timeUnit?: string;

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
  readonly budgetType?: string;

  /**
   * @schema BudgetsBudget#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'BudgetsBudget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsBudget(obj: BudgetsBudget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BudgetName': obj.budgetName,
    'BudgetLimit': toJson_BudgetsSpend(obj.budgetLimit),
    'PlannedBudgetLimits': ((obj.plannedBudgetLimits) === undefined) ? undefined : (Object.entries(obj.plannedBudgetLimits).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_BudgetsSpend(i[1]) }), {})),
    'CostFilters': ((obj.costFilters) === undefined) ? undefined : (Object.entries(obj.costFilters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'CostTypes': toJson_BudgetsCostTypes(obj.costTypes),
    'TimeUnit': obj.timeUnit,
    'TimePeriod': toJson_BudgetsTimePeriod(obj.timePeriod),
    'CalculatedSpend': toJson_BudgetsCalculatedSpend(obj.calculatedSpend),
    'BudgetType': obj.budgetType,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsNotificationWithSubscribers
 */
export interface BudgetsNotificationWithSubscribers {
  /**
   * @schema BudgetsNotificationWithSubscribers#Notification
   */
  readonly notification?: BudgetsNotification;

  /**
   * @schema BudgetsNotificationWithSubscribers#Subscribers
   */
  readonly subscribers?: BudgetsSubscriber[];

}

/**
 * Converts an object of type 'BudgetsNotificationWithSubscribers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsNotificationWithSubscribers(obj: BudgetsNotificationWithSubscribers | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Notification': toJson_BudgetsNotification(obj.notification),
    'Subscribers': obj.subscribers?.map(y => toJson_BudgetsSubscriber(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsActionThreshold
 */
export interface BudgetsActionThreshold {
  /**
   * @schema BudgetsActionThreshold#ActionThresholdValue
   */
  readonly actionThresholdValue?: number;

  /**
   * @schema BudgetsActionThreshold#ActionThresholdType
   */
  readonly actionThresholdType?: string;

}

/**
 * Converts an object of type 'BudgetsActionThreshold' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsActionThreshold(obj: BudgetsActionThreshold | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionThresholdValue': obj.actionThresholdValue,
    'ActionThresholdType': obj.actionThresholdType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'BudgetsDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsDefinition(obj: BudgetsDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamActionDefinition': toJson_BudgetsIamActionDefinition(obj.iamActionDefinition),
    'ScpActionDefinition': toJson_BudgetsScpActionDefinition(obj.scpActionDefinition),
    'SsmActionDefinition': toJson_BudgetsSsmActionDefinition(obj.ssmActionDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsSubscriber
 */
export interface BudgetsSubscriber {
  /**
   * @schema BudgetsSubscriber#SubscriptionType
   */
  readonly subscriptionType?: string;

  /**
   * @schema BudgetsSubscriber#Address
   */
  readonly address?: string;

}

/**
 * Converts an object of type 'BudgetsSubscriber' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsSubscriber(obj: BudgetsSubscriber | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionType': obj.subscriptionType,
    'Address': obj.address,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsNotification
 */
export interface BudgetsNotification {
  /**
   * @schema BudgetsNotification#NotificationType
   */
  readonly notificationType?: string;

  /**
   * @schema BudgetsNotification#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema BudgetsNotification#Threshold
   */
  readonly threshold?: number;

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
 * Converts an object of type 'BudgetsNotification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsNotification(obj: BudgetsNotification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NotificationType': obj.notificationType,
    'ComparisonOperator': obj.comparisonOperator,
    'Threshold': obj.threshold,
    'ThresholdType': obj.thresholdType,
    'NotificationState': obj.notificationState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsAction
 */
export interface BudgetsAction {
  /**
   * @schema BudgetsAction#ActionId
   */
  readonly actionId?: string;

  /**
   * @schema BudgetsAction#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema BudgetsAction#NotificationType
   */
  readonly notificationType?: string;

  /**
   * @schema BudgetsAction#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema BudgetsAction#ActionThreshold
   */
  readonly actionThreshold?: BudgetsActionThreshold;

  /**
   * @schema BudgetsAction#Definition
   */
  readonly definition?: BudgetsDefinition;

  /**
   * @schema BudgetsAction#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema BudgetsAction#ApprovalModel
   */
  readonly approvalModel?: string;

  /**
   * @schema BudgetsAction#Status
   */
  readonly status?: string;

  /**
   * @schema BudgetsAction#Subscribers
   */
  readonly subscribers?: BudgetsSubscriber[];

}

/**
 * Converts an object of type 'BudgetsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsAction(obj: BudgetsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionId': obj.actionId,
    'BudgetName': obj.budgetName,
    'NotificationType': obj.notificationType,
    'ActionType': obj.actionType,
    'ActionThreshold': toJson_BudgetsActionThreshold(obj.actionThreshold),
    'Definition': toJson_BudgetsDefinition(obj.definition),
    'ExecutionRoleArn': obj.executionRoleArn,
    'ApprovalModel': obj.approvalModel,
    'Status': obj.status,
    'Subscribers': obj.subscribers?.map(y => toJson_BudgetsSubscriber(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'BudgetsTimePeriod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsTimePeriod(obj: BudgetsTimePeriod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Start': obj.start,
    'End': obj.end,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsActionHistory
 */
export interface BudgetsActionHistory {
  /**
   * @schema BudgetsActionHistory#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema BudgetsActionHistory#Status
   */
  readonly status?: string;

  /**
   * @schema BudgetsActionHistory#EventType
   */
  readonly eventType?: string;

  /**
   * @schema BudgetsActionHistory#ActionHistoryDetails
   */
  readonly actionHistoryDetails?: BudgetsActionHistoryDetails;

}

/**
 * Converts an object of type 'BudgetsActionHistory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsActionHistory(obj: BudgetsActionHistory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Status': obj.status,
    'EventType': obj.eventType,
    'ActionHistoryDetails': toJson_BudgetsActionHistoryDetails(obj.actionHistoryDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'BudgetsBudgetPerformanceHistory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsBudgetPerformanceHistory(obj: BudgetsBudgetPerformanceHistory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BudgetName': obj.budgetName,
    'BudgetType': obj.budgetType,
    'CostFilters': ((obj.costFilters) === undefined) ? undefined : (Object.entries(obj.costFilters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'CostTypes': toJson_BudgetsCostTypes(obj.costTypes),
    'TimeUnit': obj.timeUnit,
    'BudgetedAndActualAmountsList': obj.budgetedAndActualAmountsList?.map(y => toJson_BudgetsBudgetedAndActualAmounts(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsSpend
 */
export interface BudgetsSpend {
  /**
   * @schema BudgetsSpend#Amount
   */
  readonly amount?: string;

  /**
   * @schema BudgetsSpend#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'BudgetsSpend' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsSpend(obj: BudgetsSpend | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Amount': obj.amount,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'BudgetsCostTypes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCostTypes(obj: BudgetsCostTypes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IncludeTax': obj.includeTax,
    'IncludeSubscription': obj.includeSubscription,
    'UseBlended': obj.useBlended,
    'IncludeRefund': obj.includeRefund,
    'IncludeCredit': obj.includeCredit,
    'IncludeUpfront': obj.includeUpfront,
    'IncludeRecurring': obj.includeRecurring,
    'IncludeOtherSubscription': obj.includeOtherSubscription,
    'IncludeSupport': obj.includeSupport,
    'IncludeDiscount': obj.includeDiscount,
    'UseAmortized': obj.useAmortized,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsCalculatedSpend
 */
export interface BudgetsCalculatedSpend {
  /**
   * @schema BudgetsCalculatedSpend#ActualSpend
   */
  readonly actualSpend?: BudgetsSpend;

  /**
   * @schema BudgetsCalculatedSpend#ForecastedSpend
   */
  readonly forecastedSpend?: BudgetsSpend;

}

/**
 * Converts an object of type 'BudgetsCalculatedSpend' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsCalculatedSpend(obj: BudgetsCalculatedSpend | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActualSpend': toJson_BudgetsSpend(obj.actualSpend),
    'ForecastedSpend': toJson_BudgetsSpend(obj.forecastedSpend),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsIamActionDefinition
 */
export interface BudgetsIamActionDefinition {
  /**
   * @schema BudgetsIamActionDefinition#PolicyArn
   */
  readonly policyArn?: string;

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
 * Converts an object of type 'BudgetsIamActionDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsIamActionDefinition(obj: BudgetsIamActionDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyArn': obj.policyArn,
    'Roles': obj.roles?.map(y => y),
    'Groups': obj.groups?.map(y => y),
    'Users': obj.users?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsScpActionDefinition
 */
export interface BudgetsScpActionDefinition {
  /**
   * @schema BudgetsScpActionDefinition#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema BudgetsScpActionDefinition#TargetIds
   */
  readonly targetIds?: string[];

}

/**
 * Converts an object of type 'BudgetsScpActionDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsScpActionDefinition(obj: BudgetsScpActionDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'TargetIds': obj.targetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsSsmActionDefinition
 */
export interface BudgetsSsmActionDefinition {
  /**
   * @schema BudgetsSsmActionDefinition#ActionSubType
   */
  readonly actionSubType?: string;

  /**
   * @schema BudgetsSsmActionDefinition#Region
   */
  readonly region?: string;

  /**
   * @schema BudgetsSsmActionDefinition#InstanceIds
   */
  readonly instanceIds?: string[];

}

/**
 * Converts an object of type 'BudgetsSsmActionDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsSsmActionDefinition(obj: BudgetsSsmActionDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActionSubType': obj.actionSubType,
    'Region': obj.region,
    'InstanceIds': obj.instanceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BudgetsActionHistoryDetails
 */
export interface BudgetsActionHistoryDetails {
  /**
   * @schema BudgetsActionHistoryDetails#Message
   */
  readonly message?: string;

  /**
   * @schema BudgetsActionHistoryDetails#Action
   */
  readonly action?: BudgetsAction;

}

/**
 * Converts an object of type 'BudgetsActionHistoryDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsActionHistoryDetails(obj: BudgetsActionHistoryDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
    'Action': toJson_BudgetsAction(obj.action),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'BudgetsBudgetedAndActualAmounts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BudgetsBudgetedAndActualAmounts(obj: BudgetsBudgetedAndActualAmounts | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BudgetedAmount': toJson_BudgetsSpend(obj.budgetedAmount),
    'ActualAmount': toJson_BudgetsSpend(obj.actualAmount),
    'TimePeriod': toJson_BudgetsTimePeriod(obj.timePeriod),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
