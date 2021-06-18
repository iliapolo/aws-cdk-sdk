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

  public createBudgetAction(input: shapes.BudgetsCreateBudgetActionRequest): BudgetsCreateBudgetAction {
    return new BudgetsCreateBudgetAction(this, 'CreateBudgetAction', this.__resources, input);
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

  public deleteBudgetAction(input: shapes.BudgetsDeleteBudgetActionRequest): BudgetsDeleteBudgetAction {
    return new BudgetsDeleteBudgetAction(this, 'DeleteBudgetAction', this.__resources, input);
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

  public describeBudget(input: shapes.BudgetsDescribeBudgetRequest): BudgetsDescribeBudget {
    return new BudgetsDescribeBudget(this, 'DescribeBudget', this.__resources, input);
  }

  public describeBudgetAction(input: shapes.BudgetsDescribeBudgetActionRequest): BudgetsDescribeBudgetAction {
    return new BudgetsDescribeBudgetAction(this, 'DescribeBudgetAction', this.__resources, input);
  }

  public describeBudgetActionHistories(input: shapes.BudgetsDescribeBudgetActionHistoriesRequest): BudgetsDescribeBudgetActionHistories {
    return new BudgetsDescribeBudgetActionHistories(this, 'DescribeBudgetActionHistories', this.__resources, input);
  }

  public describeBudgetActionsForAccount(input: shapes.BudgetsDescribeBudgetActionsForAccountRequest): BudgetsDescribeBudgetActionsForAccount {
    return new BudgetsDescribeBudgetActionsForAccount(this, 'DescribeBudgetActionsForAccount', this.__resources, input);
  }

  public describeBudgetActionsForBudget(input: shapes.BudgetsDescribeBudgetActionsForBudgetRequest): BudgetsDescribeBudgetActionsForBudget {
    return new BudgetsDescribeBudgetActionsForBudget(this, 'DescribeBudgetActionsForBudget', this.__resources, input);
  }

  public describeBudgetPerformanceHistory(input: shapes.BudgetsDescribeBudgetPerformanceHistoryRequest): BudgetsDescribeBudgetPerformanceHistory {
    return new BudgetsDescribeBudgetPerformanceHistory(this, 'DescribeBudgetPerformanceHistory', this.__resources, input);
  }

  public describeBudgets(input: shapes.BudgetsDescribeBudgetsRequest): BudgetsDescribeBudgets {
    return new BudgetsDescribeBudgets(this, 'DescribeBudgets', this.__resources, input);
  }

  public describeNotificationsForBudget(input: shapes.BudgetsDescribeNotificationsForBudgetRequest): BudgetsDescribeNotificationsForBudget {
    return new BudgetsDescribeNotificationsForBudget(this, 'DescribeNotificationsForBudget', this.__resources, input);
  }

  public describeSubscribersForNotification(input: shapes.BudgetsDescribeSubscribersForNotificationRequest): BudgetsDescribeSubscribersForNotification {
    return new BudgetsDescribeSubscribersForNotification(this, 'DescribeSubscribersForNotification', this.__resources, input);
  }

  public executeBudgetAction(input: shapes.BudgetsExecuteBudgetActionRequest): BudgetsExecuteBudgetAction {
    return new BudgetsExecuteBudgetAction(this, 'ExecuteBudgetAction', this.__resources, input);
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

  public updateBudgetAction(input: shapes.BudgetsUpdateBudgetActionRequest): BudgetsUpdateBudgetAction {
    return new BudgetsUpdateBudgetAction(this, 'UpdateBudgetAction', this.__resources, input);
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

export class BudgetsCreateBudgetAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsCreateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          NotificationType: this.input.notificationType,
          ActionType: this.input.actionType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition.iamActionDefinition?.policyArn,
              Roles: this.input.definition.iamActionDefinition?.roles,
              Groups: this.input.definition.iamActionDefinition?.groups,
              Users: this.input.definition.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition.scpActionDefinition?.policyId,
              TargetIds: this.input.definition.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition.ssmActionDefinition?.actionSubType,
              Region: this.input.definition.ssmActionDefinition?.region,
              InstanceIds: this.input.definition.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBudgetAction.AccountId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          NotificationType: this.input.notificationType,
          ActionType: this.input.actionType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition.iamActionDefinition?.policyArn,
              Roles: this.input.definition.iamActionDefinition?.roles,
              Groups: this.input.definition.iamActionDefinition?.groups,
              Users: this.input.definition.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition.scpActionDefinition?.policyId,
              TargetIds: this.input.definition.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition.ssmActionDefinition?.actionSubType,
              Region: this.input.definition.ssmActionDefinition?.region,
              InstanceIds: this.input.definition.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBudgetAction.BudgetName', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          NotificationType: this.input.notificationType,
          ActionType: this.input.actionType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition.iamActionDefinition?.policyArn,
              Roles: this.input.definition.iamActionDefinition?.roles,
              Groups: this.input.definition.iamActionDefinition?.groups,
              Users: this.input.definition.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition.scpActionDefinition?.policyId,
              TargetIds: this.input.definition.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition.ssmActionDefinition?.actionSubType,
              Region: this.input.definition.ssmActionDefinition?.region,
              InstanceIds: this.input.definition.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBudgetAction.ActionId', props);
    return resource.getResponseField('ActionId') as unknown as string;
  }

}

export class BudgetsDeleteBudgetAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDeleteBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.AccountId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.BudgetName', props);
    return resource.getResponseField('BudgetName') as unknown as string;
  }

  public get action(): BudgetsDeleteBudgetActionAction {
    return new BudgetsDeleteBudgetActionAction(this, 'Action', this.__resources, this.input);
  }

}

export class BudgetsDeleteBudgetActionAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDeleteBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.ActionId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.BudgetName', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.NotificationType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.ActionType', props);
    return resource.getResponseField('Action.ActionType') as unknown as string;
  }

  public get actionThreshold(): BudgetsDeleteBudgetActionActionActionThreshold {
    return new BudgetsDeleteBudgetActionActionActionThreshold(this, 'ActionThreshold', this.__resources, this.input);
  }

  public get definition(): BudgetsDeleteBudgetActionActionDefinition {
    return new BudgetsDeleteBudgetActionActionDefinition(this, 'Definition', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.ExecutionRoleArn', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.ApprovalModel', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Status', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Subscribers', props);
    return resource.getResponseField('Action.Subscribers') as unknown as shapes.BudgetsSubscriber[];
  }

}

export class BudgetsDeleteBudgetActionActionActionThreshold extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDeleteBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.ActionThreshold.ActionThresholdValue', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.ActionThreshold.ActionThresholdType', props);
    return resource.getResponseField('Action.ActionThreshold.ActionThresholdType') as unknown as string;
  }

}

export class BudgetsDeleteBudgetActionActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDeleteBudgetActionRequest) {
    super(scope, id);
  }

  public get iamActionDefinition(): BudgetsDeleteBudgetActionActionDefinitionIamActionDefinition {
    return new BudgetsDeleteBudgetActionActionDefinitionIamActionDefinition(this, 'IamActionDefinition', this.__resources, this.input);
  }

  public get scpActionDefinition(): BudgetsDeleteBudgetActionActionDefinitionScpActionDefinition {
    return new BudgetsDeleteBudgetActionActionDefinitionScpActionDefinition(this, 'ScpActionDefinition', this.__resources, this.input);
  }

  public get ssmActionDefinition(): BudgetsDeleteBudgetActionActionDefinitionSsmActionDefinition {
    return new BudgetsDeleteBudgetActionActionDefinitionSsmActionDefinition(this, 'SsmActionDefinition', this.__resources, this.input);
  }

}

export class BudgetsDeleteBudgetActionActionDefinitionIamActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDeleteBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Definition.IamActionDefinition.PolicyArn', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Definition.IamActionDefinition.Roles', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Definition.IamActionDefinition.Groups', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Definition.IamActionDefinition.Users', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.Users') as unknown as string[];
  }

}

export class BudgetsDeleteBudgetActionActionDefinitionScpActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDeleteBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Definition.ScpActionDefinition.PolicyId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Definition.ScpActionDefinition.TargetIds', props);
    return resource.getResponseField('Action.Definition.ScpActionDefinition.TargetIds') as unknown as string[];
  }

}

export class BudgetsDeleteBudgetActionActionDefinitionSsmActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDeleteBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Definition.SsmActionDefinition.ActionSubType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Definition.SsmActionDefinition.Region', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBudgetAction.Action.Definition.SsmActionDefinition.InstanceIds', props);
    return resource.getResponseField('Action.Definition.SsmActionDefinition.InstanceIds') as unknown as string[];
  }

}

export class BudgetsDescribeBudget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetRequest) {
    super(scope, id);
  }

  public get budget(): BudgetsDescribeBudgetBudget {
    return new BudgetsDescribeBudgetBudget(this, 'Budget', this.__resources, this.input);
  }

}

export class BudgetsDescribeBudgetBudget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.BudgetName', props);
    return resource.getResponseField('Budget.BudgetName') as unknown as string;
  }

  public get budgetLimit(): BudgetsDescribeBudgetBudgetBudgetLimit {
    return new BudgetsDescribeBudgetBudgetBudgetLimit(this, 'BudgetLimit', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.PlannedBudgetLimits', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostFilters', props);
    return resource.getResponseField('Budget.CostFilters') as unknown as Record<string, string[]>;
  }

  public get costTypes(): BudgetsDescribeBudgetBudgetCostTypes {
    return new BudgetsDescribeBudgetBudgetCostTypes(this, 'CostTypes', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.TimeUnit', props);
    return resource.getResponseField('Budget.TimeUnit') as unknown as string;
  }

  public get timePeriod(): BudgetsDescribeBudgetBudgetTimePeriod {
    return new BudgetsDescribeBudgetBudgetTimePeriod(this, 'TimePeriod', this.__resources, this.input);
  }

  public get calculatedSpend(): BudgetsDescribeBudgetBudgetCalculatedSpend {
    return new BudgetsDescribeBudgetBudgetCalculatedSpend(this, 'CalculatedSpend', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.BudgetType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.LastUpdatedTime', props);
    return resource.getResponseField('Budget.LastUpdatedTime') as unknown as string;
  }

}

export class BudgetsDescribeBudgetBudgetBudgetLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.BudgetLimit.Amount', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.BudgetLimit.Unit', props);
    return resource.getResponseField('Budget.BudgetLimit.Unit') as unknown as string;
  }

}

export class BudgetsDescribeBudgetBudgetCostTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.IncludeTax', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.IncludeSubscription', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.UseBlended', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.IncludeRefund', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.IncludeCredit', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.IncludeUpfront', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.IncludeRecurring', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.IncludeOtherSubscription', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.IncludeSupport', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.IncludeDiscount', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CostTypes.UseAmortized', props);
    return resource.getResponseField('Budget.CostTypes.UseAmortized') as unknown as boolean;
  }

}

export class BudgetsDescribeBudgetBudgetTimePeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.TimePeriod.Start', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.TimePeriod.End', props);
    return resource.getResponseField('Budget.TimePeriod.End') as unknown as string;
  }

}

export class BudgetsDescribeBudgetBudgetCalculatedSpend extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetRequest) {
    super(scope, id);
  }

  public get actualSpend(): BudgetsDescribeBudgetBudgetCalculatedSpendActualSpend {
    return new BudgetsDescribeBudgetBudgetCalculatedSpendActualSpend(this, 'ActualSpend', this.__resources, this.input);
  }

  public get forecastedSpend(): BudgetsDescribeBudgetBudgetCalculatedSpendForecastedSpend {
    return new BudgetsDescribeBudgetBudgetCalculatedSpendForecastedSpend(this, 'ForecastedSpend', this.__resources, this.input);
  }

}

export class BudgetsDescribeBudgetBudgetCalculatedSpendActualSpend extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CalculatedSpend.ActualSpend.Amount', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CalculatedSpend.ActualSpend.Unit', props);
    return resource.getResponseField('Budget.CalculatedSpend.ActualSpend.Unit') as unknown as string;
  }

}

export class BudgetsDescribeBudgetBudgetCalculatedSpendForecastedSpend extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CalculatedSpend.ForecastedSpend.Amount', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudget.Budget.CalculatedSpend.ForecastedSpend.Unit', props);
    return resource.getResponseField('Budget.CalculatedSpend.ForecastedSpend.Unit') as unknown as string;
  }

}

export class BudgetsDescribeBudgetAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.AccountId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.BudgetName', props);
    return resource.getResponseField('BudgetName') as unknown as string;
  }

  public get action(): BudgetsDescribeBudgetActionAction {
    return new BudgetsDescribeBudgetActionAction(this, 'Action', this.__resources, this.input);
  }

}

export class BudgetsDescribeBudgetActionAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.ActionId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.BudgetName', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.NotificationType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.ActionType', props);
    return resource.getResponseField('Action.ActionType') as unknown as string;
  }

  public get actionThreshold(): BudgetsDescribeBudgetActionActionActionThreshold {
    return new BudgetsDescribeBudgetActionActionActionThreshold(this, 'ActionThreshold', this.__resources, this.input);
  }

  public get definition(): BudgetsDescribeBudgetActionActionDefinition {
    return new BudgetsDescribeBudgetActionActionDefinition(this, 'Definition', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.ExecutionRoleArn', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.ApprovalModel', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Status', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Subscribers', props);
    return resource.getResponseField('Action.Subscribers') as unknown as shapes.BudgetsSubscriber[];
  }

}

export class BudgetsDescribeBudgetActionActionActionThreshold extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.ActionThreshold.ActionThresholdValue', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.ActionThreshold.ActionThresholdType', props);
    return resource.getResponseField('Action.ActionThreshold.ActionThresholdType') as unknown as string;
  }

}

export class BudgetsDescribeBudgetActionActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionRequest) {
    super(scope, id);
  }

  public get iamActionDefinition(): BudgetsDescribeBudgetActionActionDefinitionIamActionDefinition {
    return new BudgetsDescribeBudgetActionActionDefinitionIamActionDefinition(this, 'IamActionDefinition', this.__resources, this.input);
  }

  public get scpActionDefinition(): BudgetsDescribeBudgetActionActionDefinitionScpActionDefinition {
    return new BudgetsDescribeBudgetActionActionDefinitionScpActionDefinition(this, 'ScpActionDefinition', this.__resources, this.input);
  }

  public get ssmActionDefinition(): BudgetsDescribeBudgetActionActionDefinitionSsmActionDefinition {
    return new BudgetsDescribeBudgetActionActionDefinitionSsmActionDefinition(this, 'SsmActionDefinition', this.__resources, this.input);
  }

}

export class BudgetsDescribeBudgetActionActionDefinitionIamActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Definition.IamActionDefinition.PolicyArn', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Definition.IamActionDefinition.Roles', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Definition.IamActionDefinition.Groups', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Definition.IamActionDefinition.Users', props);
    return resource.getResponseField('Action.Definition.IamActionDefinition.Users') as unknown as string[];
  }

}

export class BudgetsDescribeBudgetActionActionDefinitionScpActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Definition.ScpActionDefinition.PolicyId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Definition.ScpActionDefinition.TargetIds', props);
    return resource.getResponseField('Action.Definition.ScpActionDefinition.TargetIds') as unknown as string[];
  }

}

export class BudgetsDescribeBudgetActionActionDefinitionSsmActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Definition.SsmActionDefinition.ActionSubType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Definition.SsmActionDefinition.Region', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetAction.Action.Definition.SsmActionDefinition.InstanceIds', props);
    return resource.getResponseField('Action.Definition.SsmActionDefinition.InstanceIds') as unknown as string[];
  }

}

export class BudgetsDescribeBudgetActionHistories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionHistoriesRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetActionHistories.ActionHistories', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetActionHistories.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsDescribeBudgetActionsForAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionsForAccountRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetActionsForAccount.Actions', props);
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
          AccountId: this.input.accountId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetActionsForAccount.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsDescribeBudgetActionsForBudget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetActionsForBudgetRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetActionsForBudget.Actions', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetActionsForBudget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsDescribeBudgetPerformanceHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetPerformanceHistoryRequest) {
    super(scope, id);
  }

  public get budgetPerformanceHistory(): BudgetsDescribeBudgetPerformanceHistoryBudgetPerformanceHistory {
    return new BudgetsDescribeBudgetPerformanceHistoryBudgetPerformanceHistory(this, 'BudgetPerformanceHistory', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsDescribeBudgetPerformanceHistoryBudgetPerformanceHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetPerformanceHistoryRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.BudgetName', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.BudgetType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostFilters', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostFilters') as unknown as Record<string, string[]>;
  }

  public get costTypes(): BudgetsDescribeBudgetPerformanceHistoryBudgetPerformanceHistoryCostTypes {
    return new BudgetsDescribeBudgetPerformanceHistoryBudgetPerformanceHistoryCostTypes(this, 'CostTypes', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.TimeUnit', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.BudgetedAndActualAmountsList', props);
    return resource.getResponseField('BudgetPerformanceHistory.BudgetedAndActualAmountsList') as unknown as shapes.BudgetsBudgetedAndActualAmounts[];
  }

}

export class BudgetsDescribeBudgetPerformanceHistoryBudgetPerformanceHistoryCostTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetPerformanceHistoryRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeTax', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeSubscription', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.UseBlended', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeRefund', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeCredit', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeUpfront', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeRecurring', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeOtherSubscription', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeSupport', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.IncludeDiscount', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          TimePeriod: {
            Start: this.input.timePeriod?.start,
            End: this.input.timePeriod?.end,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgetPerformanceHistory.BudgetPerformanceHistory.CostTypes.UseAmortized', props);
    return resource.getResponseField('BudgetPerformanceHistory.CostTypes.UseAmortized') as unknown as boolean;
  }

}

export class BudgetsDescribeBudgets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeBudgetsRequest) {
    super(scope, id);
  }

  public get budgets(): BudgetsDescribeBudgetsBudgets {
    return new BudgetsDescribeBudgetsBudgets(this, 'Budgets');
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
          AccountId: this.input.accountId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBudgets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsDescribeBudgetsBudgets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class BudgetsDescribeNotificationsForBudget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeNotificationsForBudgetRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationsForBudget.Notifications', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationsForBudget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsDescribeSubscribersForNotification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsDescribeSubscribersForNotificationRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          Notification: {
            NotificationType: this.input.notification.notificationType,
            ComparisonOperator: this.input.notification.comparisonOperator,
            Threshold: this.input.notification.threshold,
            ThresholdType: this.input.notification.thresholdType,
            NotificationState: this.input.notification.notificationState,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscribersForNotification.Subscribers', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          Notification: {
            NotificationType: this.input.notification.notificationType,
            ComparisonOperator: this.input.notification.comparisonOperator,
            Threshold: this.input.notification.threshold,
            ThresholdType: this.input.notification.thresholdType,
            NotificationState: this.input.notification.notificationState,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscribersForNotification.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BudgetsExecuteBudgetAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsExecuteBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          ExecutionType: this.input.executionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteBudgetAction.AccountId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          ExecutionType: this.input.executionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteBudgetAction.BudgetName', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          ExecutionType: this.input.executionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteBudgetAction.ActionId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          ExecutionType: this.input.executionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteBudgetAction.ExecutionType', props);
    return resource.getResponseField('ExecutionType') as unknown as string;
  }

}

export class BudgetsUpdateBudgetAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.AccountId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.BudgetName', props);
    return resource.getResponseField('BudgetName') as unknown as string;
  }

  public get oldAction(): BudgetsUpdateBudgetActionOldAction {
    return new BudgetsUpdateBudgetActionOldAction(this, 'OldAction', this.__resources, this.input);
  }

  public get newAction(): BudgetsUpdateBudgetActionNewAction {
    return new BudgetsUpdateBudgetActionNewAction(this, 'NewAction', this.__resources, this.input);
  }

}

export class BudgetsUpdateBudgetActionOldAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.ActionId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.BudgetName', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.NotificationType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.ActionType', props);
    return resource.getResponseField('OldAction.ActionType') as unknown as string;
  }

  public get actionThreshold(): BudgetsUpdateBudgetActionOldActionActionThreshold {
    return new BudgetsUpdateBudgetActionOldActionActionThreshold(this, 'ActionThreshold', this.__resources, this.input);
  }

  public get definition(): BudgetsUpdateBudgetActionOldActionDefinition {
    return new BudgetsUpdateBudgetActionOldActionDefinition(this, 'Definition', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.ExecutionRoleArn', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.ApprovalModel', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Status', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Subscribers', props);
    return resource.getResponseField('OldAction.Subscribers') as unknown as shapes.BudgetsSubscriber[];
  }

}

export class BudgetsUpdateBudgetActionOldActionActionThreshold extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.ActionThreshold.ActionThresholdValue', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.ActionThreshold.ActionThresholdType', props);
    return resource.getResponseField('OldAction.ActionThreshold.ActionThresholdType') as unknown as string;
  }

}

export class BudgetsUpdateBudgetActionOldActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
  }

  public get iamActionDefinition(): BudgetsUpdateBudgetActionOldActionDefinitionIamActionDefinition {
    return new BudgetsUpdateBudgetActionOldActionDefinitionIamActionDefinition(this, 'IamActionDefinition', this.__resources, this.input);
  }

  public get scpActionDefinition(): BudgetsUpdateBudgetActionOldActionDefinitionScpActionDefinition {
    return new BudgetsUpdateBudgetActionOldActionDefinitionScpActionDefinition(this, 'ScpActionDefinition', this.__resources, this.input);
  }

  public get ssmActionDefinition(): BudgetsUpdateBudgetActionOldActionDefinitionSsmActionDefinition {
    return new BudgetsUpdateBudgetActionOldActionDefinitionSsmActionDefinition(this, 'SsmActionDefinition', this.__resources, this.input);
  }

}

export class BudgetsUpdateBudgetActionOldActionDefinitionIamActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Definition.IamActionDefinition.PolicyArn', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Definition.IamActionDefinition.Roles', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Definition.IamActionDefinition.Groups', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Definition.IamActionDefinition.Users', props);
    return resource.getResponseField('OldAction.Definition.IamActionDefinition.Users') as unknown as string[];
  }

}

export class BudgetsUpdateBudgetActionOldActionDefinitionScpActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Definition.ScpActionDefinition.PolicyId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Definition.ScpActionDefinition.TargetIds', props);
    return resource.getResponseField('OldAction.Definition.ScpActionDefinition.TargetIds') as unknown as string[];
  }

}

export class BudgetsUpdateBudgetActionOldActionDefinitionSsmActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Definition.SsmActionDefinition.ActionSubType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Definition.SsmActionDefinition.Region', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.OldAction.Definition.SsmActionDefinition.InstanceIds', props);
    return resource.getResponseField('OldAction.Definition.SsmActionDefinition.InstanceIds') as unknown as string[];
  }

}

export class BudgetsUpdateBudgetActionNewAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.ActionId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.BudgetName', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.NotificationType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.ActionType', props);
    return resource.getResponseField('NewAction.ActionType') as unknown as string;
  }

  public get actionThreshold(): BudgetsUpdateBudgetActionNewActionActionThreshold {
    return new BudgetsUpdateBudgetActionNewActionActionThreshold(this, 'ActionThreshold', this.__resources, this.input);
  }

  public get definition(): BudgetsUpdateBudgetActionNewActionDefinition {
    return new BudgetsUpdateBudgetActionNewActionDefinition(this, 'Definition', this.__resources, this.input);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.ExecutionRoleArn', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.ApprovalModel', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Status', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Subscribers', props);
    return resource.getResponseField('NewAction.Subscribers') as unknown as shapes.BudgetsSubscriber[];
  }

}

export class BudgetsUpdateBudgetActionNewActionActionThreshold extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.ActionThreshold.ActionThresholdValue', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.ActionThreshold.ActionThresholdType', props);
    return resource.getResponseField('NewAction.ActionThreshold.ActionThresholdType') as unknown as string;
  }

}

export class BudgetsUpdateBudgetActionNewActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
  }

  public get iamActionDefinition(): BudgetsUpdateBudgetActionNewActionDefinitionIamActionDefinition {
    return new BudgetsUpdateBudgetActionNewActionDefinitionIamActionDefinition(this, 'IamActionDefinition', this.__resources, this.input);
  }

  public get scpActionDefinition(): BudgetsUpdateBudgetActionNewActionDefinitionScpActionDefinition {
    return new BudgetsUpdateBudgetActionNewActionDefinitionScpActionDefinition(this, 'ScpActionDefinition', this.__resources, this.input);
  }

  public get ssmActionDefinition(): BudgetsUpdateBudgetActionNewActionDefinitionSsmActionDefinition {
    return new BudgetsUpdateBudgetActionNewActionDefinitionSsmActionDefinition(this, 'SsmActionDefinition', this.__resources, this.input);
  }

}

export class BudgetsUpdateBudgetActionNewActionDefinitionIamActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Definition.IamActionDefinition.PolicyArn', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Definition.IamActionDefinition.Roles', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Definition.IamActionDefinition.Groups', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Definition.IamActionDefinition.Users', props);
    return resource.getResponseField('NewAction.Definition.IamActionDefinition.Users') as unknown as string[];
  }

}

export class BudgetsUpdateBudgetActionNewActionDefinitionScpActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Definition.ScpActionDefinition.PolicyId', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Definition.ScpActionDefinition.TargetIds', props);
    return resource.getResponseField('NewAction.Definition.ScpActionDefinition.TargetIds') as unknown as string[];
  }

}

export class BudgetsUpdateBudgetActionNewActionDefinitionSsmActionDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BudgetsUpdateBudgetActionRequest) {
    super(scope, id);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Definition.SsmActionDefinition.ActionSubType', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Definition.SsmActionDefinition.Region', props);
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
          AccountId: this.input.accountId,
          BudgetName: this.input.budgetName,
          ActionId: this.input.actionId,
          NotificationType: this.input.notificationType,
          ActionThreshold: {
            ActionThresholdValue: this.input.actionThreshold?.actionThresholdValue,
            ActionThresholdType: this.input.actionThreshold?.actionThresholdType,
          },
          Definition: {
            IamActionDefinition: {
              PolicyArn: this.input.definition?.iamActionDefinition?.policyArn,
              Roles: this.input.definition?.iamActionDefinition?.roles,
              Groups: this.input.definition?.iamActionDefinition?.groups,
              Users: this.input.definition?.iamActionDefinition?.users,
            },
            ScpActionDefinition: {
              PolicyId: this.input.definition?.scpActionDefinition?.policyId,
              TargetIds: this.input.definition?.scpActionDefinition?.targetIds,
            },
            SsmActionDefinition: {
              ActionSubType: this.input.definition?.ssmActionDefinition?.actionSubType,
              Region: this.input.definition?.ssmActionDefinition?.region,
              InstanceIds: this.input.definition?.ssmActionDefinition?.instanceIds,
            },
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ApprovalModel: this.input.approvalModel,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBudgetAction.NewAction.Definition.SsmActionDefinition.InstanceIds', props);
    return resource.getResponseField('NewAction.Definition.SsmActionDefinition.InstanceIds') as unknown as string[];
  }

}

