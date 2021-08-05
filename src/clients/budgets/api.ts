import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class BudgetsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createBudget(input: shapes.BudgetsCreateBudgetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.CreateBudget'),
        parameters: {
          AccountId: input.accountId,
          Budget: {
            BudgetName: input.budget.budgetName,
            BudgetLimit: {
              Amount: input.budget.budgetLimit?.amount,
              Unit: input.budget.budgetLimit?.unit,
            },
            PlannedBudgetLimits: input.budget.plannedBudgetLimits,
            CostFilters: input.budget.costFilters,
            CostTypes: {
              IncludeTax: input.budget.costTypes?.includeTax,
              IncludeSubscription: input.budget.costTypes?.includeSubscription,
              UseBlended: input.budget.costTypes?.useBlended,
              IncludeRefund: input.budget.costTypes?.includeRefund,
              IncludeCredit: input.budget.costTypes?.includeCredit,
              IncludeUpfront: input.budget.costTypes?.includeUpfront,
              IncludeRecurring: input.budget.costTypes?.includeRecurring,
              IncludeOtherSubscription: input.budget.costTypes?.includeOtherSubscription,
              IncludeSupport: input.budget.costTypes?.includeSupport,
              IncludeDiscount: input.budget.costTypes?.includeDiscount,
              UseAmortized: input.budget.costTypes?.useAmortized,
            },
            TimeUnit: input.budget.timeUnit,
            TimePeriod: {
              Start: input.budget.timePeriod?.start,
              End: input.budget.timePeriod?.end,
            },
            CalculatedSpend: {
              ActualSpend: {
                Amount: input.budget.calculatedSpend?.actualSpend.amount,
                Unit: input.budget.calculatedSpend?.actualSpend.unit,
              },
              ForecastedSpend: {
                Amount: input.budget.calculatedSpend?.forecastedSpend?.amount,
                Unit: input.budget.calculatedSpend?.forecastedSpend?.unit,
              },
            },
            BudgetType: input.budget.budgetType,
            LastUpdatedTime: input.budget.lastUpdatedTime,
          },
          NotificationsWithSubscribers: input.notificationsWithSubscribers,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateBudget', props);
  }

  public createBudgetAction(input: shapes.BudgetsCreateBudgetActionRequest): BudgetsResponsesCreateBudgetAction {
    return new BudgetsResponsesCreateBudgetAction(this, this.__resources, input);
  }

  public createNotification(input: shapes.BudgetsCreateNotificationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNotification',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.CreateNotification'),
        parameters: {
          AccountId: input.accountId,
          BudgetName: input.budgetName,
          Notification: {
            NotificationType: input.notification.notificationType,
            ComparisonOperator: input.notification.comparisonOperator,
            Threshold: input.notification.threshold,
            ThresholdType: input.notification.thresholdType,
            NotificationState: input.notification.notificationState,
          },
          Subscribers: input.subscribers,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateNotification', props);
  }

  public createSubscriber(input: shapes.BudgetsCreateSubscriberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscriber',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.CreateSubscriber'),
        parameters: {
          AccountId: input.accountId,
          BudgetName: input.budgetName,
          Notification: {
            NotificationType: input.notification.notificationType,
            ComparisonOperator: input.notification.comparisonOperator,
            Threshold: input.notification.threshold,
            ThresholdType: input.notification.thresholdType,
            NotificationState: input.notification.notificationState,
          },
          Subscriber: {
            SubscriptionType: input.subscriber.subscriptionType,
            Address: input.subscriber.address,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateSubscriber', props);
  }

  public deleteBudget(input: shapes.BudgetsDeleteBudgetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudget'),
        parameters: {
          AccountId: input.accountId,
          BudgetName: input.budgetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBudget', props);
  }

  public deleteBudgetAction(input: shapes.BudgetsDeleteBudgetActionRequest): BudgetsResponsesDeleteBudgetAction {
    return new BudgetsResponsesDeleteBudgetAction(this, this.__resources, input);
  }

  public deleteNotification(input: shapes.BudgetsDeleteNotificationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNotification',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteNotification'),
        parameters: {
          AccountId: input.accountId,
          BudgetName: input.budgetName,
          Notification: {
            NotificationType: input.notification.notificationType,
            ComparisonOperator: input.notification.comparisonOperator,
            Threshold: input.notification.threshold,
            ThresholdType: input.notification.thresholdType,
            NotificationState: input.notification.notificationState,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNotification', props);
  }

  public deleteSubscriber(input: shapes.BudgetsDeleteSubscriberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSubscriber',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteSubscriber'),
        parameters: {
          AccountId: input.accountId,
          BudgetName: input.budgetName,
          Notification: {
            NotificationType: input.notification.notificationType,
            ComparisonOperator: input.notification.comparisonOperator,
            Threshold: input.notification.threshold,
            ThresholdType: input.notification.thresholdType,
            NotificationState: input.notification.notificationState,
          },
          Subscriber: {
            SubscriptionType: input.subscriber.subscriptionType,
            Address: input.subscriber.address,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSubscriber', props);
  }

  public describeBudget(input: shapes.BudgetsDescribeBudgetRequest): BudgetsResponsesDescribeBudget {
    return new BudgetsResponsesDescribeBudget(this, this.__resources, input);
  }

  public describeBudgetAction(input: shapes.BudgetsDescribeBudgetActionRequest): BudgetsResponsesDescribeBudgetAction {
    return new BudgetsResponsesDescribeBudgetAction(this, this.__resources, input);
  }

  public describeBudgetActionHistories(input: shapes.BudgetsDescribeBudgetActionHistoriesRequest): BudgetsResponsesDescribeBudgetActionHistories {
    return new BudgetsResponsesDescribeBudgetActionHistories(this, this.__resources, input);
  }

  public describeBudgetActionsForAccount(input: shapes.BudgetsDescribeBudgetActionsForAccountRequest): BudgetsResponsesDescribeBudgetActionsForAccount {
    return new BudgetsResponsesDescribeBudgetActionsForAccount(this, this.__resources, input);
  }

  public describeBudgetActionsForBudget(input: shapes.BudgetsDescribeBudgetActionsForBudgetRequest): BudgetsResponsesDescribeBudgetActionsForBudget {
    return new BudgetsResponsesDescribeBudgetActionsForBudget(this, this.__resources, input);
  }

  public describeBudgetPerformanceHistory(input: shapes.BudgetsDescribeBudgetPerformanceHistoryRequest): BudgetsResponsesDescribeBudgetPerformanceHistory {
    return new BudgetsResponsesDescribeBudgetPerformanceHistory(this, this.__resources, input);
  }

  public describeBudgets(input: shapes.BudgetsDescribeBudgetsRequest): BudgetsResponsesDescribeBudgets {
    return new BudgetsResponsesDescribeBudgets(this, this.__resources, input);
  }

  public describeNotificationsForBudget(input: shapes.BudgetsDescribeNotificationsForBudgetRequest): BudgetsResponsesDescribeNotificationsForBudget {
    return new BudgetsResponsesDescribeNotificationsForBudget(this, this.__resources, input);
  }

  public describeSubscribersForNotification(input: shapes.BudgetsDescribeSubscribersForNotificationRequest): BudgetsResponsesDescribeSubscribersForNotification {
    return new BudgetsResponsesDescribeSubscribersForNotification(this, this.__resources, input);
  }

  public executeBudgetAction(input: shapes.BudgetsExecuteBudgetActionRequest): BudgetsResponsesExecuteBudgetAction {
    return new BudgetsResponsesExecuteBudgetAction(this, this.__resources, input);
  }

  public updateBudget(input: shapes.BudgetsUpdateBudgetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudget'),
        parameters: {
          AccountId: input.accountId,
          NewBudget: {
            BudgetName: input.newBudget.budgetName,
            BudgetLimit: {
              Amount: input.newBudget.budgetLimit?.amount,
              Unit: input.newBudget.budgetLimit?.unit,
            },
            PlannedBudgetLimits: input.newBudget.plannedBudgetLimits,
            CostFilters: input.newBudget.costFilters,
            CostTypes: {
              IncludeTax: input.newBudget.costTypes?.includeTax,
              IncludeSubscription: input.newBudget.costTypes?.includeSubscription,
              UseBlended: input.newBudget.costTypes?.useBlended,
              IncludeRefund: input.newBudget.costTypes?.includeRefund,
              IncludeCredit: input.newBudget.costTypes?.includeCredit,
              IncludeUpfront: input.newBudget.costTypes?.includeUpfront,
              IncludeRecurring: input.newBudget.costTypes?.includeRecurring,
              IncludeOtherSubscription: input.newBudget.costTypes?.includeOtherSubscription,
              IncludeSupport: input.newBudget.costTypes?.includeSupport,
              IncludeDiscount: input.newBudget.costTypes?.includeDiscount,
              UseAmortized: input.newBudget.costTypes?.useAmortized,
            },
            TimeUnit: input.newBudget.timeUnit,
            TimePeriod: {
              Start: input.newBudget.timePeriod?.start,
              End: input.newBudget.timePeriod?.end,
            },
            CalculatedSpend: {
              ActualSpend: {
                Amount: input.newBudget.calculatedSpend?.actualSpend.amount,
                Unit: input.newBudget.calculatedSpend?.actualSpend.unit,
              },
              ForecastedSpend: {
                Amount: input.newBudget.calculatedSpend?.forecastedSpend?.amount,
                Unit: input.newBudget.calculatedSpend?.forecastedSpend?.unit,
              },
            },
            BudgetType: input.newBudget.budgetType,
            LastUpdatedTime: input.newBudget.lastUpdatedTime,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateBudget', props);
  }

  public updateBudgetAction(input: shapes.BudgetsUpdateBudgetActionRequest): BudgetsResponsesUpdateBudgetAction {
    return new BudgetsResponsesUpdateBudgetAction(this, this.__resources, input);
  }

  public updateNotification(input: shapes.BudgetsUpdateNotificationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNotification',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateNotification'),
        parameters: {
          AccountId: input.accountId,
          BudgetName: input.budgetName,
          OldNotification: {
            NotificationType: input.oldNotification.notificationType,
            ComparisonOperator: input.oldNotification.comparisonOperator,
            Threshold: input.oldNotification.threshold,
            ThresholdType: input.oldNotification.thresholdType,
            NotificationState: input.oldNotification.notificationState,
          },
          NewNotification: {
            NotificationType: input.newNotification.notificationType,
            ComparisonOperator: input.newNotification.comparisonOperator,
            Threshold: input.newNotification.threshold,
            ThresholdType: input.newNotification.thresholdType,
            NotificationState: input.newNotification.notificationState,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateNotification', props);
  }

  public updateSubscriber(input: shapes.BudgetsUpdateSubscriberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubscriber',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateSubscriber'),
        parameters: {
          AccountId: input.accountId,
          BudgetName: input.budgetName,
          Notification: {
            NotificationType: input.notification.notificationType,
            ComparisonOperator: input.notification.comparisonOperator,
            Threshold: input.notification.threshold,
            ThresholdType: input.notification.thresholdType,
            NotificationState: input.notification.notificationState,
          },
          OldSubscriber: {
            SubscriptionType: input.oldSubscriber.subscriptionType,
            Address: input.oldSubscriber.address,
          },
          NewSubscriber: {
            SubscriptionType: input.newSubscriber.subscriptionType,
            Address: input.newSubscriber.address,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateSubscriber', props);
  }

}

export class BudgetsResponsesCreateBudgetAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsCreateBudgetActionRequest) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.CreateBudgetAction.AccountId'),
        outputPath: 'AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          NotificationType: this.__input.notificationType,
          ActionType: this.__input.actionType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition.iamActionDefinition?.policyArn,
              Roles: this.__input.definition.iamActionDefinition?.roles,
              Groups: this.__input.definition.iamActionDefinition?.groups,
              Users: this.__input.definition.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBudgetAction.AccountId', props);
    return resource.getResponseField('AccountId') as unknown as string;
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.CreateBudgetAction.BudgetName'),
        outputPath: 'BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          NotificationType: this.__input.notificationType,
          ActionType: this.__input.actionType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition.iamActionDefinition?.policyArn,
              Roles: this.__input.definition.iamActionDefinition?.roles,
              Groups: this.__input.definition.iamActionDefinition?.groups,
              Users: this.__input.definition.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBudgetAction.BudgetName', props);
    return resource.getResponseField('BudgetName') as unknown as string;
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.CreateBudgetAction.ActionId'),
        outputPath: 'ActionId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          NotificationType: this.__input.notificationType,
          ActionType: this.__input.actionType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition.iamActionDefinition?.policyArn,
              Roles: this.__input.definition.iamActionDefinition?.roles,
              Groups: this.__input.definition.iamActionDefinition?.groups,
              Users: this.__input.definition.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBudgetAction.ActionId', props);
    return resource.getResponseField('ActionId') as unknown as string;
  }

}

export class BudgetsResponsesDeleteBudgetAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDeleteBudgetActionRequest) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.AccountId'),
        outputPath: 'AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.AccountId', props);
    return resource.getResponseField('AccountId') as unknown as string;
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.BudgetName'),
        outputPath: 'BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.BudgetName', props);
    return resource.getResponseField('BudgetName') as unknown as string;
  }

  public get action(): BudgetsResponsesDeleteBudgetActionAction {
    return new BudgetsResponsesDeleteBudgetActionAction(this.__scope, this.__resources, this.__input);
  }

}

export class BudgetsResponsesDeleteBudgetActionAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDeleteBudgetActionRequest) {
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.ActionId'),
        outputPath: 'Action.ActionId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.ActionId', props);
    return resource.getResponseField('Action.ActionId') as unknown as string;
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.BudgetName'),
        outputPath: 'Action.BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.BudgetName', props);
    return resource.getResponseField('Action.BudgetName') as unknown as string;
  }

  public get notificationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.NotificationType'),
        outputPath: 'Action.NotificationType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.NotificationType', props);
    return resource.getResponseField('Action.NotificationType') as unknown as string;
  }

  public get actionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.ActionType'),
        outputPath: 'Action.ActionType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.ActionType', props);
    return resource.getResponseField('Action.ActionType') as unknown as string;
  }

  public get actionThreshold(): BudgetsResponsesDeleteBudgetActionActionActionThreshold {
    return new BudgetsResponsesDeleteBudgetActionActionActionThreshold(this.__scope, this.__resources, this.__input);
  }

  public get definition(): BudgetsResponsesDeleteBudgetActionActionDefinition {
    return new BudgetsResponsesDeleteBudgetActionActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.ExecutionRoleArn'),
        outputPath: 'Action.ExecutionRoleArn',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.ExecutionRoleArn', props);
    return resource.getResponseField('Action.ExecutionRoleArn') as unknown as string;
  }

  public get approvalModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.ApprovalModel'),
        outputPath: 'Action.ApprovalModel',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.ApprovalModel', props);
    return resource.getResponseField('Action.ApprovalModel') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Status'),
        outputPath: 'Action.Status',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Status', props);
    return resource.getResponseField('Action.Status') as unknown as string;
  }

  public get subscribers(): shapes.BudgetsSubscriber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Subscribers'),
        outputPath: 'Action.Subscribers',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Subscribers', props);
    return resource.getResponseField('Action.Subscribers') as unknown as shapes.BudgetsSubscriber[];
  }

}

export class BudgetsResponsesDeleteBudgetActionActionActionThreshold {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDeleteBudgetActionRequest) {
  }

  public get actionThresholdValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.ActionThreshold.ActionThresholdValue'),
        outputPath: 'Action.ActionThreshold.ActionThresholdValue',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.ActionThreshold.ActionThresholdValue', props);
    return resource.getResponseField('Action.ActionThreshold.ActionThresholdValue') as unknown as number;
  }

  public get actionThresholdType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.ActionThreshold.ActionThresholdType'),
        outputPath: 'Action.ActionThreshold.ActionThresholdType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.ActionThreshold.ActionThresholdType', props);
    return resource.getResponseField('Action.ActionThreshold.ActionThresholdType') as unknown as string;
  }

}

export class BudgetsResponsesDeleteBudgetActionActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDeleteBudgetActionRequest) {
  }

  public get iamActionDefinition(): BudgetsResponsesDeleteBudgetActionActionDefinitionIamActionDefinition {
    return new BudgetsResponsesDeleteBudgetActionActionDefinitionIamActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get scpActionDefinition(): BudgetsResponsesDeleteBudgetActionActionDefinitionScpActionDefinition {
    return new BudgetsResponsesDeleteBudgetActionActionDefinitionScpActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get ssmActionDefinition(): BudgetsResponsesDeleteBudgetActionActionDefinitionSsmActionDefinition {
    return new BudgetsResponsesDeleteBudgetActionActionDefinitionSsmActionDefinition(this.__scope, this.__resources, this.__input);
  }

}

export class BudgetsResponsesDeleteBudgetActionActionDefinitionIamActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDeleteBudgetActionRequest) {
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Definition.IamActionDefinition.PolicyArn'),
        outputPath: 'Action.Definition.IamActionDefinition.PolicyArn',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Definition.IamActionDefinition.PolicyArn', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.PolicyArn') as unknown as string;
  }

  public get roles(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Definition.IamActionDefinition.Roles'),
        outputPath: 'Action.Definition.IamActionDefinition.Roles',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Definition.IamActionDefinition.Roles', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.Roles') as unknown as string[];
  }

  public get groups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Definition.IamActionDefinition.Groups'),
        outputPath: 'Action.Definition.IamActionDefinition.Groups',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Definition.IamActionDefinition.Groups', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.Groups') as unknown as string[];
  }

  public get users(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Definition.IamActionDefinition.Users'),
        outputPath: 'Action.Definition.IamActionDefinition.Users',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Definition.IamActionDefinition.Users', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.Users') as unknown as string[];
  }

}

export class BudgetsResponsesDeleteBudgetActionActionDefinitionScpActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDeleteBudgetActionRequest) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Definition.ScpActionDefinition.PolicyId'),
        outputPath: 'Action.Definition.ScpActionDefinition.PolicyId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Definition.ScpActionDefinition.PolicyId', props);
    return resource.getResponseField('Action.Definition.ScpActionDefinition.PolicyId') as unknown as string;
  }

  public get targetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Definition.ScpActionDefinition.TargetIds'),
        outputPath: 'Action.Definition.ScpActionDefinition.TargetIds',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Definition.ScpActionDefinition.TargetIds', props);
    return resource.getResponseField('Action.Definition.ScpActionDefinition.TargetIds') as unknown as string[];
  }

}

export class BudgetsResponsesDeleteBudgetActionActionDefinitionSsmActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDeleteBudgetActionRequest) {
  }

  public get actionSubType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Definition.SsmActionDefinition.ActionSubType'),
        outputPath: 'Action.Definition.SsmActionDefinition.ActionSubType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Definition.SsmActionDefinition.ActionSubType', props);
    return resource.getResponseField('Action.Definition.SsmActionDefinition.ActionSubType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Definition.SsmActionDefinition.Region'),
        outputPath: 'Action.Definition.SsmActionDefinition.Region',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Definition.SsmActionDefinition.Region', props);
    return resource.getResponseField('Action.Definition.SsmActionDefinition.Region') as unknown as string;
  }

  public get instanceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DeleteBudgetAction.Action.Definition.SsmActionDefinition.InstanceIds'),
        outputPath: 'Action.Definition.SsmActionDefinition.InstanceIds',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBudgetAction.Action.Definition.SsmActionDefinition.InstanceIds', props);
    return resource.getResponseField('Action.Definition.SsmActionDefinition.InstanceIds') as unknown as string[];
  }

}

export class BudgetsResponsesDescribeBudget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetRequest) {
  }

  public get budget(): BudgetsResponsesDescribeBudgetBudget {
    return new BudgetsResponsesDescribeBudgetBudget(this.__scope, this.__resources, this.__input);
  }

}

export class BudgetsResponsesDescribeBudgetBudget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetRequest) {
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.BudgetName'),
        outputPath: 'Budget.BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.BudgetName', props);
    return resource.getResponseField('Budget.BudgetName') as unknown as string;
  }

  public get budgetLimit(): BudgetsResponsesDescribeBudgetBudgetBudgetLimit {
    return new BudgetsResponsesDescribeBudgetBudgetBudgetLimit(this.__scope, this.__resources, this.__input);
  }

  public get plannedBudgetLimits(): Record<string, shapes.BudgetsSpend> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.PlannedBudgetLimits'),
        outputPath: 'Budget.PlannedBudgetLimits',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.PlannedBudgetLimits', props);
    return resource.getResponseField('Budget.PlannedBudgetLimits') as unknown as Record<string, shapes.BudgetsSpend>;
  }

  public get costFilters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostFilters'),
        outputPath: 'Budget.CostFilters',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostFilters', props);
    return resource.getResponseField('Budget.CostFilters') as unknown as Record<string, string[]>;
  }

  public get costTypes(): BudgetsResponsesDescribeBudgetBudgetCostTypes {
    return new BudgetsResponsesDescribeBudgetBudgetCostTypes(this.__scope, this.__resources, this.__input);
  }

  public get timeUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.TimeUnit'),
        outputPath: 'Budget.TimeUnit',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.TimeUnit', props);
    return resource.getResponseField('Budget.TimeUnit') as unknown as string;
  }

  public get timePeriod(): BudgetsResponsesDescribeBudgetBudgetTimePeriod {
    return new BudgetsResponsesDescribeBudgetBudgetTimePeriod(this.__scope, this.__resources, this.__input);
  }

  public get calculatedSpend(): BudgetsResponsesDescribeBudgetBudgetCalculatedSpend {
    return new BudgetsResponsesDescribeBudgetBudgetCalculatedSpend(this.__scope, this.__resources, this.__input);
  }

  public get budgetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.BudgetType'),
        outputPath: 'Budget.BudgetType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.BudgetType', props);
    return resource.getResponseField('Budget.BudgetType') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.LastUpdatedTime'),
        outputPath: 'Budget.LastUpdatedTime',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.LastUpdatedTime', props);
    return resource.getResponseField('Budget.LastUpdatedTime') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetBudgetBudgetLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetRequest) {
  }

  public get amount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.BudgetLimit.Amount'),
        outputPath: 'Budget.BudgetLimit.Amount',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.BudgetLimit.Amount', props);
    return resource.getResponseField('Budget.BudgetLimit.Amount') as unknown as string;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.BudgetLimit.Unit'),
        outputPath: 'Budget.BudgetLimit.Unit',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.BudgetLimit.Unit', props);
    return resource.getResponseField('Budget.BudgetLimit.Unit') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetBudgetCostTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetRequest) {
  }

  public get includeTax(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.IncludeTax'),
        outputPath: 'Budget.CostTypes.IncludeTax',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.IncludeTax', props);
    return resource.getResponseField('Budget.CostTypes.IncludeTax') as unknown as boolean;
  }

  public get includeSubscription(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.IncludeSubscription'),
        outputPath: 'Budget.CostTypes.IncludeSubscription',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.IncludeSubscription', props);
    return resource.getResponseField('Budget.CostTypes.IncludeSubscription') as unknown as boolean;
  }

  public get useBlended(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.UseBlended'),
        outputPath: 'Budget.CostTypes.UseBlended',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.UseBlended', props);
    return resource.getResponseField('Budget.CostTypes.UseBlended') as unknown as boolean;
  }

  public get includeRefund(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.IncludeRefund'),
        outputPath: 'Budget.CostTypes.IncludeRefund',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.IncludeRefund', props);
    return resource.getResponseField('Budget.CostTypes.IncludeRefund') as unknown as boolean;
  }

  public get includeCredit(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.IncludeCredit'),
        outputPath: 'Budget.CostTypes.IncludeCredit',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.IncludeCredit', props);
    return resource.getResponseField('Budget.CostTypes.IncludeCredit') as unknown as boolean;
  }

  public get includeUpfront(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.IncludeUpfront'),
        outputPath: 'Budget.CostTypes.IncludeUpfront',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.IncludeUpfront', props);
    return resource.getResponseField('Budget.CostTypes.IncludeUpfront') as unknown as boolean;
  }

  public get includeRecurring(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.IncludeRecurring'),
        outputPath: 'Budget.CostTypes.IncludeRecurring',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.IncludeRecurring', props);
    return resource.getResponseField('Budget.CostTypes.IncludeRecurring') as unknown as boolean;
  }

  public get includeOtherSubscription(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.IncludeOtherSubscription'),
        outputPath: 'Budget.CostTypes.IncludeOtherSubscription',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.IncludeOtherSubscription', props);
    return resource.getResponseField('Budget.CostTypes.IncludeOtherSubscription') as unknown as boolean;
  }

  public get includeSupport(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.IncludeSupport'),
        outputPath: 'Budget.CostTypes.IncludeSupport',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.IncludeSupport', props);
    return resource.getResponseField('Budget.CostTypes.IncludeSupport') as unknown as boolean;
  }

  public get includeDiscount(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.IncludeDiscount'),
        outputPath: 'Budget.CostTypes.IncludeDiscount',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.IncludeDiscount', props);
    return resource.getResponseField('Budget.CostTypes.IncludeDiscount') as unknown as boolean;
  }

  public get useAmortized(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CostTypes.UseAmortized'),
        outputPath: 'Budget.CostTypes.UseAmortized',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CostTypes.UseAmortized', props);
    return resource.getResponseField('Budget.CostTypes.UseAmortized') as unknown as boolean;
  }

}

export class BudgetsResponsesDescribeBudgetBudgetTimePeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetRequest) {
  }

  public get start(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.TimePeriod.Start'),
        outputPath: 'Budget.TimePeriod.Start',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.TimePeriod.Start', props);
    return resource.getResponseField('Budget.TimePeriod.Start') as unknown as string;
  }

  public get end(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.TimePeriod.End'),
        outputPath: 'Budget.TimePeriod.End',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.TimePeriod.End', props);
    return resource.getResponseField('Budget.TimePeriod.End') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetBudgetCalculatedSpend {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetRequest) {
  }

  public get actualSpend(): BudgetsResponsesDescribeBudgetBudgetCalculatedSpendActualSpend {
    return new BudgetsResponsesDescribeBudgetBudgetCalculatedSpendActualSpend(this.__scope, this.__resources, this.__input);
  }

  public get forecastedSpend(): BudgetsResponsesDescribeBudgetBudgetCalculatedSpendForecastedSpend {
    return new BudgetsResponsesDescribeBudgetBudgetCalculatedSpendForecastedSpend(this.__scope, this.__resources, this.__input);
  }

}

export class BudgetsResponsesDescribeBudgetBudgetCalculatedSpendActualSpend {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetRequest) {
  }

  public get amount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CalculatedSpend.ActualSpend.Amount'),
        outputPath: 'Budget.CalculatedSpend.ActualSpend.Amount',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CalculatedSpend.ActualSpend.Amount', props);
    return resource.getResponseField('Budget.CalculatedSpend.ActualSpend.Amount') as unknown as string;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CalculatedSpend.ActualSpend.Unit'),
        outputPath: 'Budget.CalculatedSpend.ActualSpend.Unit',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CalculatedSpend.ActualSpend.Unit', props);
    return resource.getResponseField('Budget.CalculatedSpend.ActualSpend.Unit') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetBudgetCalculatedSpendForecastedSpend {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetRequest) {
  }

  public get amount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CalculatedSpend.ForecastedSpend.Amount'),
        outputPath: 'Budget.CalculatedSpend.ForecastedSpend.Amount',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CalculatedSpend.ForecastedSpend.Amount', props);
    return resource.getResponseField('Budget.CalculatedSpend.ForecastedSpend.Amount') as unknown as string;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudget.Budget.CalculatedSpend.ForecastedSpend.Unit'),
        outputPath: 'Budget.CalculatedSpend.ForecastedSpend.Unit',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudget.Budget.CalculatedSpend.ForecastedSpend.Unit', props);
    return resource.getResponseField('Budget.CalculatedSpend.ForecastedSpend.Unit') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionRequest) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.AccountId'),
        outputPath: 'AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.AccountId', props);
    return resource.getResponseField('AccountId') as unknown as string;
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.BudgetName'),
        outputPath: 'BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.BudgetName', props);
    return resource.getResponseField('BudgetName') as unknown as string;
  }

  public get action(): BudgetsResponsesDescribeBudgetActionAction {
    return new BudgetsResponsesDescribeBudgetActionAction(this.__scope, this.__resources, this.__input);
  }

}

export class BudgetsResponsesDescribeBudgetActionAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionRequest) {
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.ActionId'),
        outputPath: 'Action.ActionId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.ActionId', props);
    return resource.getResponseField('Action.ActionId') as unknown as string;
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.BudgetName'),
        outputPath: 'Action.BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.BudgetName', props);
    return resource.getResponseField('Action.BudgetName') as unknown as string;
  }

  public get notificationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.NotificationType'),
        outputPath: 'Action.NotificationType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.NotificationType', props);
    return resource.getResponseField('Action.NotificationType') as unknown as string;
  }

  public get actionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.ActionType'),
        outputPath: 'Action.ActionType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.ActionType', props);
    return resource.getResponseField('Action.ActionType') as unknown as string;
  }

  public get actionThreshold(): BudgetsResponsesDescribeBudgetActionActionActionThreshold {
    return new BudgetsResponsesDescribeBudgetActionActionActionThreshold(this.__scope, this.__resources, this.__input);
  }

  public get definition(): BudgetsResponsesDescribeBudgetActionActionDefinition {
    return new BudgetsResponsesDescribeBudgetActionActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.ExecutionRoleArn'),
        outputPath: 'Action.ExecutionRoleArn',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.ExecutionRoleArn', props);
    return resource.getResponseField('Action.ExecutionRoleArn') as unknown as string;
  }

  public get approvalModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.ApprovalModel'),
        outputPath: 'Action.ApprovalModel',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.ApprovalModel', props);
    return resource.getResponseField('Action.ApprovalModel') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Status'),
        outputPath: 'Action.Status',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Status', props);
    return resource.getResponseField('Action.Status') as unknown as string;
  }

  public get subscribers(): shapes.BudgetsSubscriber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Subscribers'),
        outputPath: 'Action.Subscribers',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Subscribers', props);
    return resource.getResponseField('Action.Subscribers') as unknown as shapes.BudgetsSubscriber[];
  }

}

export class BudgetsResponsesDescribeBudgetActionActionActionThreshold {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionRequest) {
  }

  public get actionThresholdValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.ActionThreshold.ActionThresholdValue'),
        outputPath: 'Action.ActionThreshold.ActionThresholdValue',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.ActionThreshold.ActionThresholdValue', props);
    return resource.getResponseField('Action.ActionThreshold.ActionThresholdValue') as unknown as number;
  }

  public get actionThresholdType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.ActionThreshold.ActionThresholdType'),
        outputPath: 'Action.ActionThreshold.ActionThresholdType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.ActionThreshold.ActionThresholdType', props);
    return resource.getResponseField('Action.ActionThreshold.ActionThresholdType') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetActionActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionRequest) {
  }

  public get iamActionDefinition(): BudgetsResponsesDescribeBudgetActionActionDefinitionIamActionDefinition {
    return new BudgetsResponsesDescribeBudgetActionActionDefinitionIamActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get scpActionDefinition(): BudgetsResponsesDescribeBudgetActionActionDefinitionScpActionDefinition {
    return new BudgetsResponsesDescribeBudgetActionActionDefinitionScpActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get ssmActionDefinition(): BudgetsResponsesDescribeBudgetActionActionDefinitionSsmActionDefinition {
    return new BudgetsResponsesDescribeBudgetActionActionDefinitionSsmActionDefinition(this.__scope, this.__resources, this.__input);
  }

}

export class BudgetsResponsesDescribeBudgetActionActionDefinitionIamActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionRequest) {
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Definition.IamActionDefinition.PolicyArn'),
        outputPath: 'Action.Definition.IamActionDefinition.PolicyArn',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Definition.IamActionDefinition.PolicyArn', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.PolicyArn') as unknown as string;
  }

  public get roles(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Definition.IamActionDefinition.Roles'),
        outputPath: 'Action.Definition.IamActionDefinition.Roles',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Definition.IamActionDefinition.Roles', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.Roles') as unknown as string[];
  }

  public get groups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Definition.IamActionDefinition.Groups'),
        outputPath: 'Action.Definition.IamActionDefinition.Groups',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Definition.IamActionDefinition.Groups', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.Groups') as unknown as string[];
  }

  public get users(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Definition.IamActionDefinition.Users'),
        outputPath: 'Action.Definition.IamActionDefinition.Users',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Definition.IamActionDefinition.Users', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.Users') as unknown as string[];
  }

}

export class BudgetsResponsesDescribeBudgetActionActionDefinitionScpActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionRequest) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Definition.ScpActionDefinition.PolicyId'),
        outputPath: 'Action.Definition.ScpActionDefinition.PolicyId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Definition.ScpActionDefinition.PolicyId', props);
    return resource.getResponseField('Action.Definition.ScpActionDefinition.PolicyId') as unknown as string;
  }

  public get targetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Definition.ScpActionDefinition.TargetIds'),
        outputPath: 'Action.Definition.ScpActionDefinition.TargetIds',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Definition.ScpActionDefinition.TargetIds', props);
    return resource.getResponseField('Action.Definition.ScpActionDefinition.TargetIds') as unknown as string[];
  }

}

export class BudgetsResponsesDescribeBudgetActionActionDefinitionSsmActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionRequest) {
  }

  public get actionSubType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Definition.SsmActionDefinition.ActionSubType'),
        outputPath: 'Action.Definition.SsmActionDefinition.ActionSubType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Definition.SsmActionDefinition.ActionSubType', props);
    return resource.getResponseField('Action.Definition.SsmActionDefinition.ActionSubType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Definition.SsmActionDefinition.Region'),
        outputPath: 'Action.Definition.SsmActionDefinition.Region',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Definition.SsmActionDefinition.Region', props);
    return resource.getResponseField('Action.Definition.SsmActionDefinition.Region') as unknown as string;
  }

  public get instanceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetAction.Action.Definition.SsmActionDefinition.InstanceIds'),
        outputPath: 'Action.Definition.SsmActionDefinition.InstanceIds',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetAction.Action.Definition.SsmActionDefinition.InstanceIds', props);
    return resource.getResponseField('Action.Definition.SsmActionDefinition.InstanceIds') as unknown as string[];
  }

}

export class BudgetsResponsesDescribeBudgetActionHistories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionHistoriesRequest) {
  }

  public get actionHistories(): shapes.BudgetsActionHistory[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetActionHistories',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetActionHistories.ActionHistories'),
        outputPath: 'ActionHistories',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetActionHistories.ActionHistories', props);
    return resource.getResponseField('ActionHistories') as unknown as shapes.BudgetsActionHistory[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetActionHistories',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetActionHistories.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetActionHistories.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetActionsForAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionsForAccountRequest) {
  }

  public get actions(): shapes.BudgetsAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetActionsForAccount',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetActionsForAccount.Actions'),
        outputPath: 'Actions',
        parameters: {
          AccountId: this.__input.accountId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetActionsForAccount.Actions', props);
    return resource.getResponseField('Actions') as unknown as shapes.BudgetsAction[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetActionsForAccount',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetActionsForAccount.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetActionsForAccount.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetActionsForBudget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetActionsForBudgetRequest) {
  }

  public get actions(): shapes.BudgetsAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetActionsForBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetActionsForBudget.Actions'),
        outputPath: 'Actions',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetActionsForBudget.Actions', props);
    return resource.getResponseField('Actions') as unknown as shapes.BudgetsAction[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetActionsForBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetActionsForBudget.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetActionsForBudget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetPerformanceHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetPerformanceHistoryRequest) {
  }

  public get budgetPerformanceHistory(): BudgetsResponsesDescribeBudgetPerformanceHistoryBudgetPerformanceHistory {
    return new BudgetsResponsesDescribeBudgetPerformanceHistoryBudgetPerformanceHistory(this.__scope, this.__resources, this.__input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsResponsesDescribeBudgetPerformanceHistoryBudgetPerformanceHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetPerformanceHistoryRequest) {
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.BudgetName'),
        outputPath: 'BudgetPerformanceHistory.BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.BudgetName', props);
    return resource.getResponseField('BudgetPerformanceHistory.BudgetName') as unknown as string;
  }

  public get budgetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.BudgetType'),
        outputPath: 'BudgetPerformanceHistory.BudgetType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.BudgetType', props);
    return resource.getResponseField('BudgetPerformanceHistory.BudgetType') as unknown as string;
  }

  public get costFilters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostFilters'),
        outputPath: 'BudgetPerformanceHistory.CostFilters',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostFilters', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostFilters') as unknown as Record<string, string[]>;
  }

  public get costTypes(): BudgetsResponsesDescribeBudgetPerformanceHistoryBudgetPerformanceHistoryCostTypes {
    return new BudgetsResponsesDescribeBudgetPerformanceHistoryBudgetPerformanceHistoryCostTypes(this.__scope, this.__resources, this.__input);
  }

  public get timeUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.TimeUnit'),
        outputPath: 'BudgetPerformanceHistory.TimeUnit',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.TimeUnit', props);
    return resource.getResponseField('BudgetPerformanceHistory.TimeUnit') as unknown as string;
  }

  public get budgetedAndActualAmountsList(): shapes.BudgetsBudgetedAndActualAmounts[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.BudgetedAndActualAmountsList'),
        outputPath: 'BudgetPerformanceHistory.BudgetedAndActualAmountsList',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.BudgetedAndActualAmountsList', props);
    return resource.getResponseField('BudgetPerformanceHistory.BudgetedAndActualAmountsList') as unknown as shapes.BudgetsBudgetedAndActualAmounts[];
  }

}

export class BudgetsResponsesDescribeBudgetPerformanceHistoryBudgetPerformanceHistoryCostTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetPerformanceHistoryRequest) {
  }

  public get includeTax(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeTax'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.IncludeTax',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeTax', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.IncludeTax') as unknown as boolean;
  }

  public get includeSubscription(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeSubscription'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.IncludeSubscription',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeSubscription', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.IncludeSubscription') as unknown as boolean;
  }

  public get useBlended(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.UseBlended'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.UseBlended',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.UseBlended', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.UseBlended') as unknown as boolean;
  }

  public get includeRefund(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeRefund'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.IncludeRefund',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeRefund', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.IncludeRefund') as unknown as boolean;
  }

  public get includeCredit(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeCredit'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.IncludeCredit',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeCredit', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.IncludeCredit') as unknown as boolean;
  }

  public get includeUpfront(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeUpfront'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.IncludeUpfront',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeUpfront', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.IncludeUpfront') as unknown as boolean;
  }

  public get includeRecurring(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeRecurring'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.IncludeRecurring',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeRecurring', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.IncludeRecurring') as unknown as boolean;
  }

  public get includeOtherSubscription(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeOtherSubscription'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.IncludeOtherSubscription',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeOtherSubscription', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.IncludeOtherSubscription') as unknown as boolean;
  }

  public get includeSupport(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeSupport'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.IncludeSupport',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeSupport', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.IncludeSupport') as unknown as boolean;
  }

  public get includeDiscount(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeDiscount'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.IncludeDiscount',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeDiscount', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.IncludeDiscount') as unknown as boolean;
  }

  public get useAmortized(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgetPerformanceHistory',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.UseAmortized'),
        outputPath: 'BudgetPerformanceHistory.CostTypes.UseAmortized',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          TimePeriod: {
            Start: this.__input.timePeriod?.start,
            End: this.__input.timePeriod?.end,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.UseAmortized', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.UseAmortized') as unknown as boolean;
  }

}

export class BudgetsResponsesDescribeBudgets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeBudgetsRequest) {
  }

  public get budgets(): shapes.BudgetsBudget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgets',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgets.Budgets'),
        outputPath: 'Budgets',
        parameters: {
          AccountId: this.__input.accountId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgets.Budgets', props);
    return resource.getResponseField('Budgets') as unknown as shapes.BudgetsBudget[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBudgets',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeBudgets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBudgets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsResponsesDescribeNotificationsForBudget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeNotificationsForBudgetRequest) {
  }

  public get notifications(): shapes.BudgetsNotification[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationsForBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeNotificationsForBudget.Notifications'),
        outputPath: 'Notifications',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationsForBudget.Notifications', props);
    return resource.getResponseField('Notifications') as unknown as shapes.BudgetsNotification[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationsForBudget',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeNotificationsForBudget.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationsForBudget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsResponsesDescribeSubscribersForNotification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsDescribeSubscribersForNotificationRequest) {
  }

  public get subscribers(): shapes.BudgetsSubscriber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscribersForNotification',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeSubscribersForNotification.Subscribers'),
        outputPath: 'Subscribers',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          Notification: {
            NotificationType: this.__input.notification.notificationType,
            ComparisonOperator: this.__input.notification.comparisonOperator,
            Threshold: this.__input.notification.threshold,
            ThresholdType: this.__input.notification.thresholdType,
            NotificationState: this.__input.notification.notificationState,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscribersForNotification.Subscribers', props);
    return resource.getResponseField('Subscribers') as unknown as shapes.BudgetsSubscriber[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscribersForNotification',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.DescribeSubscribersForNotification.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          Notification: {
            NotificationType: this.__input.notification.notificationType,
            ComparisonOperator: this.__input.notification.comparisonOperator,
            Threshold: this.__input.notification.threshold,
            ThresholdType: this.__input.notification.thresholdType,
            NotificationState: this.__input.notification.notificationState,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscribersForNotification.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsResponsesExecuteBudgetAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsExecuteBudgetActionRequest) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.ExecuteBudgetAction.AccountId'),
        outputPath: 'AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          ExecutionType: this.__input.executionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteBudgetAction.AccountId', props);
    return resource.getResponseField('AccountId') as unknown as string;
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.ExecuteBudgetAction.BudgetName'),
        outputPath: 'BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          ExecutionType: this.__input.executionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteBudgetAction.BudgetName', props);
    return resource.getResponseField('BudgetName') as unknown as string;
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.ExecuteBudgetAction.ActionId'),
        outputPath: 'ActionId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          ExecutionType: this.__input.executionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteBudgetAction.ActionId', props);
    return resource.getResponseField('ActionId') as unknown as string;
  }

  public get executionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.ExecuteBudgetAction.ExecutionType'),
        outputPath: 'ExecutionType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          ExecutionType: this.__input.executionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteBudgetAction.ExecutionType', props);
    return resource.getResponseField('ExecutionType') as unknown as string;
  }

}

export class BudgetsResponsesUpdateBudgetAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.AccountId'),
        outputPath: 'AccountId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.AccountId', props);
    return resource.getResponseField('AccountId') as unknown as string;
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.BudgetName'),
        outputPath: 'BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.BudgetName', props);
    return resource.getResponseField('BudgetName') as unknown as string;
  }

  public get oldAction(): BudgetsResponsesUpdateBudgetActionOldAction {
    return new BudgetsResponsesUpdateBudgetActionOldAction(this.__scope, this.__resources, this.__input);
  }

  public get newAction(): BudgetsResponsesUpdateBudgetActionNewAction {
    return new BudgetsResponsesUpdateBudgetActionNewAction(this.__scope, this.__resources, this.__input);
  }

}

export class BudgetsResponsesUpdateBudgetActionOldAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.ActionId'),
        outputPath: 'OldAction.ActionId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.ActionId', props);
    return resource.getResponseField('OldAction.ActionId') as unknown as string;
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.BudgetName'),
        outputPath: 'OldAction.BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.BudgetName', props);
    return resource.getResponseField('OldAction.BudgetName') as unknown as string;
  }

  public get notificationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.NotificationType'),
        outputPath: 'OldAction.NotificationType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.NotificationType', props);
    return resource.getResponseField('OldAction.NotificationType') as unknown as string;
  }

  public get actionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.ActionType'),
        outputPath: 'OldAction.ActionType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.ActionType', props);
    return resource.getResponseField('OldAction.ActionType') as unknown as string;
  }

  public get actionThreshold(): BudgetsResponsesUpdateBudgetActionOldActionActionThreshold {
    return new BudgetsResponsesUpdateBudgetActionOldActionActionThreshold(this.__scope, this.__resources, this.__input);
  }

  public get definition(): BudgetsResponsesUpdateBudgetActionOldActionDefinition {
    return new BudgetsResponsesUpdateBudgetActionOldActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.ExecutionRoleArn'),
        outputPath: 'OldAction.ExecutionRoleArn',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.ExecutionRoleArn', props);
    return resource.getResponseField('OldAction.ExecutionRoleArn') as unknown as string;
  }

  public get approvalModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.ApprovalModel'),
        outputPath: 'OldAction.ApprovalModel',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.ApprovalModel', props);
    return resource.getResponseField('OldAction.ApprovalModel') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Status'),
        outputPath: 'OldAction.Status',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Status', props);
    return resource.getResponseField('OldAction.Status') as unknown as string;
  }

  public get subscribers(): shapes.BudgetsSubscriber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Subscribers'),
        outputPath: 'OldAction.Subscribers',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Subscribers', props);
    return resource.getResponseField('OldAction.Subscribers') as unknown as shapes.BudgetsSubscriber[];
  }

}

export class BudgetsResponsesUpdateBudgetActionOldActionActionThreshold {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get actionThresholdValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.ActionThreshold.ActionThresholdValue'),
        outputPath: 'OldAction.ActionThreshold.ActionThresholdValue',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.ActionThreshold.ActionThresholdValue', props);
    return resource.getResponseField('OldAction.ActionThreshold.ActionThresholdValue') as unknown as number;
  }

  public get actionThresholdType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.ActionThreshold.ActionThresholdType'),
        outputPath: 'OldAction.ActionThreshold.ActionThresholdType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.ActionThreshold.ActionThresholdType', props);
    return resource.getResponseField('OldAction.ActionThreshold.ActionThresholdType') as unknown as string;
  }

}

export class BudgetsResponsesUpdateBudgetActionOldActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get iamActionDefinition(): BudgetsResponsesUpdateBudgetActionOldActionDefinitionIamActionDefinition {
    return new BudgetsResponsesUpdateBudgetActionOldActionDefinitionIamActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get scpActionDefinition(): BudgetsResponsesUpdateBudgetActionOldActionDefinitionScpActionDefinition {
    return new BudgetsResponsesUpdateBudgetActionOldActionDefinitionScpActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get ssmActionDefinition(): BudgetsResponsesUpdateBudgetActionOldActionDefinitionSsmActionDefinition {
    return new BudgetsResponsesUpdateBudgetActionOldActionDefinitionSsmActionDefinition(this.__scope, this.__resources, this.__input);
  }

}

export class BudgetsResponsesUpdateBudgetActionOldActionDefinitionIamActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Definition.IamActionDefinition.PolicyArn'),
        outputPath: 'OldAction.Definition.IamActionDefinition.PolicyArn',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Definition.IamActionDefinition.PolicyArn', props);
    return resource.getResponseField('OldAction.Definition.IamActionDefinition.PolicyArn') as unknown as string;
  }

  public get roles(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Definition.IamActionDefinition.Roles'),
        outputPath: 'OldAction.Definition.IamActionDefinition.Roles',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Definition.IamActionDefinition.Roles', props);
    return resource.getResponseField('OldAction.Definition.IamActionDefinition.Roles') as unknown as string[];
  }

  public get groups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Definition.IamActionDefinition.Groups'),
        outputPath: 'OldAction.Definition.IamActionDefinition.Groups',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Definition.IamActionDefinition.Groups', props);
    return resource.getResponseField('OldAction.Definition.IamActionDefinition.Groups') as unknown as string[];
  }

  public get users(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Definition.IamActionDefinition.Users'),
        outputPath: 'OldAction.Definition.IamActionDefinition.Users',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Definition.IamActionDefinition.Users', props);
    return resource.getResponseField('OldAction.Definition.IamActionDefinition.Users') as unknown as string[];
  }

}

export class BudgetsResponsesUpdateBudgetActionOldActionDefinitionScpActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Definition.ScpActionDefinition.PolicyId'),
        outputPath: 'OldAction.Definition.ScpActionDefinition.PolicyId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Definition.ScpActionDefinition.PolicyId', props);
    return resource.getResponseField('OldAction.Definition.ScpActionDefinition.PolicyId') as unknown as string;
  }

  public get targetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Definition.ScpActionDefinition.TargetIds'),
        outputPath: 'OldAction.Definition.ScpActionDefinition.TargetIds',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Definition.ScpActionDefinition.TargetIds', props);
    return resource.getResponseField('OldAction.Definition.ScpActionDefinition.TargetIds') as unknown as string[];
  }

}

export class BudgetsResponsesUpdateBudgetActionOldActionDefinitionSsmActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get actionSubType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Definition.SsmActionDefinition.ActionSubType'),
        outputPath: 'OldAction.Definition.SsmActionDefinition.ActionSubType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Definition.SsmActionDefinition.ActionSubType', props);
    return resource.getResponseField('OldAction.Definition.SsmActionDefinition.ActionSubType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Definition.SsmActionDefinition.Region'),
        outputPath: 'OldAction.Definition.SsmActionDefinition.Region',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Definition.SsmActionDefinition.Region', props);
    return resource.getResponseField('OldAction.Definition.SsmActionDefinition.Region') as unknown as string;
  }

  public get instanceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.OldAction.Definition.SsmActionDefinition.InstanceIds'),
        outputPath: 'OldAction.Definition.SsmActionDefinition.InstanceIds',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.OldAction.Definition.SsmActionDefinition.InstanceIds', props);
    return resource.getResponseField('OldAction.Definition.SsmActionDefinition.InstanceIds') as unknown as string[];
  }

}

export class BudgetsResponsesUpdateBudgetActionNewAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.ActionId'),
        outputPath: 'NewAction.ActionId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.ActionId', props);
    return resource.getResponseField('NewAction.ActionId') as unknown as string;
  }

  public get budgetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.BudgetName'),
        outputPath: 'NewAction.BudgetName',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.BudgetName', props);
    return resource.getResponseField('NewAction.BudgetName') as unknown as string;
  }

  public get notificationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.NotificationType'),
        outputPath: 'NewAction.NotificationType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.NotificationType', props);
    return resource.getResponseField('NewAction.NotificationType') as unknown as string;
  }

  public get actionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.ActionType'),
        outputPath: 'NewAction.ActionType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.ActionType', props);
    return resource.getResponseField('NewAction.ActionType') as unknown as string;
  }

  public get actionThreshold(): BudgetsResponsesUpdateBudgetActionNewActionActionThreshold {
    return new BudgetsResponsesUpdateBudgetActionNewActionActionThreshold(this.__scope, this.__resources, this.__input);
  }

  public get definition(): BudgetsResponsesUpdateBudgetActionNewActionDefinition {
    return new BudgetsResponsesUpdateBudgetActionNewActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.ExecutionRoleArn'),
        outputPath: 'NewAction.ExecutionRoleArn',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.ExecutionRoleArn', props);
    return resource.getResponseField('NewAction.ExecutionRoleArn') as unknown as string;
  }

  public get approvalModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.ApprovalModel'),
        outputPath: 'NewAction.ApprovalModel',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.ApprovalModel', props);
    return resource.getResponseField('NewAction.ApprovalModel') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Status'),
        outputPath: 'NewAction.Status',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Status', props);
    return resource.getResponseField('NewAction.Status') as unknown as string;
  }

  public get subscribers(): shapes.BudgetsSubscriber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Subscribers'),
        outputPath: 'NewAction.Subscribers',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Subscribers', props);
    return resource.getResponseField('NewAction.Subscribers') as unknown as shapes.BudgetsSubscriber[];
  }

}

export class BudgetsResponsesUpdateBudgetActionNewActionActionThreshold {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get actionThresholdValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.ActionThreshold.ActionThresholdValue'),
        outputPath: 'NewAction.ActionThreshold.ActionThresholdValue',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.ActionThreshold.ActionThresholdValue', props);
    return resource.getResponseField('NewAction.ActionThreshold.ActionThresholdValue') as unknown as number;
  }

  public get actionThresholdType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.ActionThreshold.ActionThresholdType'),
        outputPath: 'NewAction.ActionThreshold.ActionThresholdType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.ActionThreshold.ActionThresholdType', props);
    return resource.getResponseField('NewAction.ActionThreshold.ActionThresholdType') as unknown as string;
  }

}

export class BudgetsResponsesUpdateBudgetActionNewActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get iamActionDefinition(): BudgetsResponsesUpdateBudgetActionNewActionDefinitionIamActionDefinition {
    return new BudgetsResponsesUpdateBudgetActionNewActionDefinitionIamActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get scpActionDefinition(): BudgetsResponsesUpdateBudgetActionNewActionDefinitionScpActionDefinition {
    return new BudgetsResponsesUpdateBudgetActionNewActionDefinitionScpActionDefinition(this.__scope, this.__resources, this.__input);
  }

  public get ssmActionDefinition(): BudgetsResponsesUpdateBudgetActionNewActionDefinitionSsmActionDefinition {
    return new BudgetsResponsesUpdateBudgetActionNewActionDefinitionSsmActionDefinition(this.__scope, this.__resources, this.__input);
  }

}

export class BudgetsResponsesUpdateBudgetActionNewActionDefinitionIamActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Definition.IamActionDefinition.PolicyArn'),
        outputPath: 'NewAction.Definition.IamActionDefinition.PolicyArn',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Definition.IamActionDefinition.PolicyArn', props);
    return resource.getResponseField('NewAction.Definition.IamActionDefinition.PolicyArn') as unknown as string;
  }

  public get roles(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Definition.IamActionDefinition.Roles'),
        outputPath: 'NewAction.Definition.IamActionDefinition.Roles',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Definition.IamActionDefinition.Roles', props);
    return resource.getResponseField('NewAction.Definition.IamActionDefinition.Roles') as unknown as string[];
  }

  public get groups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Definition.IamActionDefinition.Groups'),
        outputPath: 'NewAction.Definition.IamActionDefinition.Groups',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Definition.IamActionDefinition.Groups', props);
    return resource.getResponseField('NewAction.Definition.IamActionDefinition.Groups') as unknown as string[];
  }

  public get users(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Definition.IamActionDefinition.Users'),
        outputPath: 'NewAction.Definition.IamActionDefinition.Users',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Definition.IamActionDefinition.Users', props);
    return resource.getResponseField('NewAction.Definition.IamActionDefinition.Users') as unknown as string[];
  }

}

export class BudgetsResponsesUpdateBudgetActionNewActionDefinitionScpActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Definition.ScpActionDefinition.PolicyId'),
        outputPath: 'NewAction.Definition.ScpActionDefinition.PolicyId',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Definition.ScpActionDefinition.PolicyId', props);
    return resource.getResponseField('NewAction.Definition.ScpActionDefinition.PolicyId') as unknown as string;
  }

  public get targetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Definition.ScpActionDefinition.TargetIds'),
        outputPath: 'NewAction.Definition.ScpActionDefinition.TargetIds',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Definition.ScpActionDefinition.TargetIds', props);
    return resource.getResponseField('NewAction.Definition.ScpActionDefinition.TargetIds') as unknown as string[];
  }

}

export class BudgetsResponsesUpdateBudgetActionNewActionDefinitionSsmActionDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BudgetsUpdateBudgetActionRequest) {
  }

  public get actionSubType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Definition.SsmActionDefinition.ActionSubType'),
        outputPath: 'NewAction.Definition.SsmActionDefinition.ActionSubType',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Definition.SsmActionDefinition.ActionSubType', props);
    return resource.getResponseField('NewAction.Definition.SsmActionDefinition.ActionSubType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Definition.SsmActionDefinition.Region'),
        outputPath: 'NewAction.Definition.SsmActionDefinition.Region',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Definition.SsmActionDefinition.Region', props);
    return resource.getResponseField('NewAction.Definition.SsmActionDefinition.Region') as unknown as string;
  }

  public get instanceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBudgetAction',
        service: 'Budgets',
        physicalResourceId: cr.PhysicalResourceId.of('Budgets.UpdateBudgetAction.NewAction.Definition.SsmActionDefinition.InstanceIds'),
        outputPath: 'NewAction.Definition.SsmActionDefinition.InstanceIds',
        parameters: {
          AccountId: this.__input.accountId,
          BudgetName: this.__input.budgetName,
          ActionId: this.__input.actionId,
          NotificationType: this.__input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.__input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.__input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.__input.definition?.iamActionDefinition?.policyArn,
              Roles: this.__input.definition?.iamActionDefinition?.roles,
              Groups: this.__input.definition?.iamActionDefinition?.groups,
              Users: this.__input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.__input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.__input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.__input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.__input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.__input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ApprovalModel: this.__input.approvalModel,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBudgetAction.NewAction.Definition.SsmActionDefinition.InstanceIds', props);
    return resource.getResponseField('NewAction.Definition.SsmActionDefinition.InstanceIds') as unknown as string[];
  }

}

