import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ApplicationAutoScalingClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public deleteScalingPolicy(input: shapes.ApplicationAutoScalingDeleteScalingPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteScalingPolicy',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DeleteScalingPolicy'),
        parameters: {
          PolicyName: input.policyName,
          ServiceNamespace: input.serviceNamespace,
          ResourceId: input.resourceId,
          ScalableDimension: input.scalableDimension,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteScalingPolicy', props);
  }

  public deleteScheduledAction(input: shapes.ApplicationAutoScalingDeleteScheduledActionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteScheduledAction',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DeleteScheduledAction'),
        parameters: {
          ServiceNamespace: input.serviceNamespace,
          ScheduledActionName: input.scheduledActionName,
          ResourceId: input.resourceId,
          ScalableDimension: input.scalableDimension,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteScheduledAction', props);
  }

  public deregisterScalableTarget(input: shapes.ApplicationAutoScalingDeregisterScalableTargetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterScalableTarget',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DeregisterScalableTarget'),
        parameters: {
          ServiceNamespace: input.serviceNamespace,
          ResourceId: input.resourceId,
          ScalableDimension: input.scalableDimension,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterScalableTarget', props);
  }

  public describeScalableTargets(input: shapes.ApplicationAutoScalingDescribeScalableTargetsRequest): ApplicationAutoScalingResponsesDescribeScalableTargets {
    return new ApplicationAutoScalingResponsesDescribeScalableTargets(this, this.__resources, input);
  }

  public describeScalingActivities(input: shapes.ApplicationAutoScalingDescribeScalingActivitiesRequest): ApplicationAutoScalingResponsesDescribeScalingActivities {
    return new ApplicationAutoScalingResponsesDescribeScalingActivities(this, this.__resources, input);
  }

  public describeScalingPolicies(input: shapes.ApplicationAutoScalingDescribeScalingPoliciesRequest): ApplicationAutoScalingResponsesDescribeScalingPolicies {
    return new ApplicationAutoScalingResponsesDescribeScalingPolicies(this, this.__resources, input);
  }

  public describeScheduledActions(input: shapes.ApplicationAutoScalingDescribeScheduledActionsRequest): ApplicationAutoScalingResponsesDescribeScheduledActions {
    return new ApplicationAutoScalingResponsesDescribeScheduledActions(this, this.__resources, input);
  }

  public putScalingPolicy(input: shapes.ApplicationAutoScalingPutScalingPolicyRequest): ApplicationAutoScalingResponsesPutScalingPolicy {
    return new ApplicationAutoScalingResponsesPutScalingPolicy(this, this.__resources, input);
  }

  public putScheduledAction(input: shapes.ApplicationAutoScalingPutScheduledActionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putScheduledAction',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.PutScheduledAction'),
        parameters: {
          ServiceNamespace: input.serviceNamespace,
          Schedule: input.schedule,
          Timezone: input.timezone,
          ScheduledActionName: input.scheduledActionName,
          ResourceId: input.resourceId,
          ScalableDimension: input.scalableDimension,
          StartTime: input.startTime,
          EndTime: input.endTime,
          ScalableTargetAction: {
            MinCapacity: input.scalableTargetAction?.minCapacity,
            MaxCapacity: input.scalableTargetAction?.maxCapacity,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutScheduledAction', props);
  }

  public registerScalableTarget(input: shapes.ApplicationAutoScalingRegisterScalableTargetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerScalableTarget',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.RegisterScalableTarget'),
        parameters: {
          ServiceNamespace: input.serviceNamespace,
          ResourceId: input.resourceId,
          ScalableDimension: input.scalableDimension,
          MinCapacity: input.minCapacity,
          MaxCapacity: input.maxCapacity,
          RoleARN: input.roleArn,
          SuspendedState: {
            DynamicScalingInSuspended: input.suspendedState?.dynamicScalingInSuspended,
            DynamicScalingOutSuspended: input.suspendedState?.dynamicScalingOutSuspended,
            ScheduledScalingSuspended: input.suspendedState?.scheduledScalingSuspended,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterScalableTarget', props);
  }

}

export class ApplicationAutoScalingResponsesDescribeScalableTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationAutoScalingDescribeScalableTargetsRequest) {
  }

  public get scalableTargets(): shapes.ApplicationAutoScalingScalableTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalableTargets',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DescribeScalableTargets.ScalableTargets'),
        outputPath: 'ScalableTargets',
        parameters: {
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceIds: this.__input.resourceIds,
          ScalableDimension: this.__input.scalableDimension,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalableTargets.ScalableTargets', props);
    return resource.getResponseField('ScalableTargets') as unknown as shapes.ApplicationAutoScalingScalableTarget[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalableTargets',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DescribeScalableTargets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceIds: this.__input.resourceIds,
          ScalableDimension: this.__input.scalableDimension,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalableTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationAutoScalingResponsesDescribeScalingActivities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationAutoScalingDescribeScalingActivitiesRequest) {
  }

  public get scalingActivities(): shapes.ApplicationAutoScalingScalingActivity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingActivities',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DescribeScalingActivities.ScalingActivities'),
        outputPath: 'ScalingActivities',
        parameters: {
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceId: this.__input.resourceId,
          ScalableDimension: this.__input.scalableDimension,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingActivities.ScalingActivities', props);
    return resource.getResponseField('ScalingActivities') as unknown as shapes.ApplicationAutoScalingScalingActivity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingActivities',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DescribeScalingActivities.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceId: this.__input.resourceId,
          ScalableDimension: this.__input.scalableDimension,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingActivities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationAutoScalingResponsesDescribeScalingPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationAutoScalingDescribeScalingPoliciesRequest) {
  }

  public get scalingPolicies(): shapes.ApplicationAutoScalingScalingPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingPolicies',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DescribeScalingPolicies.ScalingPolicies'),
        outputPath: 'ScalingPolicies',
        parameters: {
          PolicyNames: this.__input.policyNames,
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceId: this.__input.resourceId,
          ScalableDimension: this.__input.scalableDimension,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingPolicies.ScalingPolicies', props);
    return resource.getResponseField('ScalingPolicies') as unknown as shapes.ApplicationAutoScalingScalingPolicy[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingPolicies',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DescribeScalingPolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          PolicyNames: this.__input.policyNames,
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceId: this.__input.resourceId,
          ScalableDimension: this.__input.scalableDimension,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationAutoScalingResponsesDescribeScheduledActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationAutoScalingDescribeScheduledActionsRequest) {
  }

  public get scheduledActions(): shapes.ApplicationAutoScalingScheduledAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledActions',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DescribeScheduledActions.ScheduledActions'),
        outputPath: 'ScheduledActions',
        parameters: {
          ScheduledActionNames: this.__input.scheduledActionNames,
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceId: this.__input.resourceId,
          ScalableDimension: this.__input.scalableDimension,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledActions.ScheduledActions', props);
    return resource.getResponseField('ScheduledActions') as unknown as shapes.ApplicationAutoScalingScheduledAction[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledActions',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.DescribeScheduledActions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ScheduledActionNames: this.__input.scheduledActionNames,
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceId: this.__input.resourceId,
          ScalableDimension: this.__input.scalableDimension,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledActions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationAutoScalingResponsesPutScalingPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationAutoScalingPutScalingPolicyRequest) {
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putScalingPolicy',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.PutScalingPolicy.PolicyARN'),
        outputPath: 'PolicyARN',
        parameters: {
          PolicyName: this.__input.policyName,
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceId: this.__input.resourceId,
          ScalableDimension: this.__input.scalableDimension,
          PolicyType: this.__input.policyType,
          StepScalingPolicyConfiguration: {
            AdjustmentType: this.__input.stepScalingPolicyConfiguration?.adjustmentType,
            StepAdjustments: this.__input.stepScalingPolicyConfiguration?.stepAdjustments,
            MinAdjustmentMagnitude: this.__input.stepScalingPolicyConfiguration?.minAdjustmentMagnitude,
            Cooldown: this.__input.stepScalingPolicyConfiguration?.cooldown,
            MetricAggregationType: this.__input.stepScalingPolicyConfiguration?.metricAggregationType,
          },
          TargetTrackingScalingPolicyConfiguration: {
            TargetValue: this.__input.targetTrackingScalingPolicyConfiguration?.targetValue,
            PredefinedMetricSpecification: {
              PredefinedMetricType: this.__input.targetTrackingScalingPolicyConfiguration?.predefinedMetricSpecification?.predefinedMetricType,
              ResourceLabel: this.__input.targetTrackingScalingPolicyConfiguration?.predefinedMetricSpecification?.resourceLabel,
            },
            CustomizedMetricSpecification: {
              MetricName: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.metricName,
              Namespace: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.namespace,
              Dimensions: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.dimensions,
              Statistic: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.statistic,
              Unit: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.unit,
            },
            ScaleOutCooldown: this.__input.targetTrackingScalingPolicyConfiguration?.scaleOutCooldown,
            ScaleInCooldown: this.__input.targetTrackingScalingPolicyConfiguration?.scaleInCooldown,
            DisableScaleIn: this.__input.targetTrackingScalingPolicyConfiguration?.disableScaleIn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutScalingPolicy.PolicyARN', props);
    return resource.getResponseField('PolicyARN') as unknown as string;
  }

  public get alarms(): shapes.ApplicationAutoScalingAlarm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putScalingPolicy',
        service: 'ApplicationAutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationAutoScaling.PutScalingPolicy.Alarms'),
        outputPath: 'Alarms',
        parameters: {
          PolicyName: this.__input.policyName,
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceId: this.__input.resourceId,
          ScalableDimension: this.__input.scalableDimension,
          PolicyType: this.__input.policyType,
          StepScalingPolicyConfiguration: {
            AdjustmentType: this.__input.stepScalingPolicyConfiguration?.adjustmentType,
            StepAdjustments: this.__input.stepScalingPolicyConfiguration?.stepAdjustments,
            MinAdjustmentMagnitude: this.__input.stepScalingPolicyConfiguration?.minAdjustmentMagnitude,
            Cooldown: this.__input.stepScalingPolicyConfiguration?.cooldown,
            MetricAggregationType: this.__input.stepScalingPolicyConfiguration?.metricAggregationType,
          },
          TargetTrackingScalingPolicyConfiguration: {
            TargetValue: this.__input.targetTrackingScalingPolicyConfiguration?.targetValue,
            PredefinedMetricSpecification: {
              PredefinedMetricType: this.__input.targetTrackingScalingPolicyConfiguration?.predefinedMetricSpecification?.predefinedMetricType,
              ResourceLabel: this.__input.targetTrackingScalingPolicyConfiguration?.predefinedMetricSpecification?.resourceLabel,
            },
            CustomizedMetricSpecification: {
              MetricName: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.metricName,
              Namespace: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.namespace,
              Dimensions: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.dimensions,
              Statistic: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.statistic,
              Unit: this.__input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.unit,
            },
            ScaleOutCooldown: this.__input.targetTrackingScalingPolicyConfiguration?.scaleOutCooldown,
            ScaleInCooldown: this.__input.targetTrackingScalingPolicyConfiguration?.scaleInCooldown,
            DisableScaleIn: this.__input.targetTrackingScalingPolicyConfiguration?.disableScaleIn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutScalingPolicy.Alarms', props);
    return resource.getResponseField('Alarms') as unknown as shapes.ApplicationAutoScalingAlarm[];
  }

}

