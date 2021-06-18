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

  public describeScalableTargets(input: shapes.ApplicationAutoScalingDescribeScalableTargetsRequest): ApplicationAutoScalingDescribeScalableTargets {
    return new ApplicationAutoScalingDescribeScalableTargets(this, 'DescribeScalableTargets', this.__resources, input);
  }

  public describeScalingActivities(input: shapes.ApplicationAutoScalingDescribeScalingActivitiesRequest): ApplicationAutoScalingDescribeScalingActivities {
    return new ApplicationAutoScalingDescribeScalingActivities(this, 'DescribeScalingActivities', this.__resources, input);
  }

  public describeScalingPolicies(input: shapes.ApplicationAutoScalingDescribeScalingPoliciesRequest): ApplicationAutoScalingDescribeScalingPolicies {
    return new ApplicationAutoScalingDescribeScalingPolicies(this, 'DescribeScalingPolicies', this.__resources, input);
  }

  public describeScheduledActions(input: shapes.ApplicationAutoScalingDescribeScheduledActionsRequest): ApplicationAutoScalingDescribeScheduledActions {
    return new ApplicationAutoScalingDescribeScheduledActions(this, 'DescribeScheduledActions', this.__resources, input);
  }

  public putScalingPolicy(input: shapes.ApplicationAutoScalingPutScalingPolicyRequest): ApplicationAutoScalingPutScalingPolicy {
    return new ApplicationAutoScalingPutScalingPolicy(this, 'PutScalingPolicy', this.__resources, input);
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

export class ApplicationAutoScalingDescribeScalableTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationAutoScalingDescribeScalableTargetsRequest) {
    super(scope, id);
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
          ServiceNamespace: this.input.serviceNamespace,
          ResourceIds: this.input.resourceIds,
          ScalableDimension: this.input.scalableDimension,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalableTargets.ScalableTargets', props);
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
          ServiceNamespace: this.input.serviceNamespace,
          ResourceIds: this.input.resourceIds,
          ScalableDimension: this.input.scalableDimension,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalableTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationAutoScalingDescribeScalingActivities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationAutoScalingDescribeScalingActivitiesRequest) {
    super(scope, id);
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
          ServiceNamespace: this.input.serviceNamespace,
          ResourceId: this.input.resourceId,
          ScalableDimension: this.input.scalableDimension,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingActivities.ScalingActivities', props);
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
          ServiceNamespace: this.input.serviceNamespace,
          ResourceId: this.input.resourceId,
          ScalableDimension: this.input.scalableDimension,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingActivities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationAutoScalingDescribeScalingPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationAutoScalingDescribeScalingPoliciesRequest) {
    super(scope, id);
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
          PolicyNames: this.input.policyNames,
          ServiceNamespace: this.input.serviceNamespace,
          ResourceId: this.input.resourceId,
          ScalableDimension: this.input.scalableDimension,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingPolicies.ScalingPolicies', props);
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
          PolicyNames: this.input.policyNames,
          ServiceNamespace: this.input.serviceNamespace,
          ResourceId: this.input.resourceId,
          ScalableDimension: this.input.scalableDimension,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationAutoScalingDescribeScheduledActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationAutoScalingDescribeScheduledActionsRequest) {
    super(scope, id);
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
          ScheduledActionNames: this.input.scheduledActionNames,
          ServiceNamespace: this.input.serviceNamespace,
          ResourceId: this.input.resourceId,
          ScalableDimension: this.input.scalableDimension,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledActions.ScheduledActions', props);
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
          ScheduledActionNames: this.input.scheduledActionNames,
          ServiceNamespace: this.input.serviceNamespace,
          ResourceId: this.input.resourceId,
          ScalableDimension: this.input.scalableDimension,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledActions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationAutoScalingPutScalingPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationAutoScalingPutScalingPolicyRequest) {
    super(scope, id);
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
          PolicyName: this.input.policyName,
          ServiceNamespace: this.input.serviceNamespace,
          ResourceId: this.input.resourceId,
          ScalableDimension: this.input.scalableDimension,
          PolicyType: this.input.policyType,
          StepScalingPolicyConfiguration: {
            AdjustmentType: this.input.stepScalingPolicyConfiguration?.adjustmentType,
            StepAdjustments: this.input.stepScalingPolicyConfiguration?.stepAdjustments,
            MinAdjustmentMagnitude: this.input.stepScalingPolicyConfiguration?.minAdjustmentMagnitude,
            Cooldown: this.input.stepScalingPolicyConfiguration?.cooldown,
            MetricAggregationType: this.input.stepScalingPolicyConfiguration?.metricAggregationType,
          },
          TargetTrackingScalingPolicyConfiguration: {
            TargetValue: this.input.targetTrackingScalingPolicyConfiguration?.targetValue,
            PredefinedMetricSpecification: {
              PredefinedMetricType: this.input.targetTrackingScalingPolicyConfiguration?.predefinedMetricSpecification?.predefinedMetricType,
              ResourceLabel: this.input.targetTrackingScalingPolicyConfiguration?.predefinedMetricSpecification?.resourceLabel,
            },
            CustomizedMetricSpecification: {
              MetricName: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.metricName,
              Namespace: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.namespace,
              Dimensions: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.dimensions,
              Statistic: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.statistic,
              Unit: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.unit,
            },
            ScaleOutCooldown: this.input.targetTrackingScalingPolicyConfiguration?.scaleOutCooldown,
            ScaleInCooldown: this.input.targetTrackingScalingPolicyConfiguration?.scaleInCooldown,
            DisableScaleIn: this.input.targetTrackingScalingPolicyConfiguration?.disableScaleIn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutScalingPolicy.PolicyARN', props);
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
          PolicyName: this.input.policyName,
          ServiceNamespace: this.input.serviceNamespace,
          ResourceId: this.input.resourceId,
          ScalableDimension: this.input.scalableDimension,
          PolicyType: this.input.policyType,
          StepScalingPolicyConfiguration: {
            AdjustmentType: this.input.stepScalingPolicyConfiguration?.adjustmentType,
            StepAdjustments: this.input.stepScalingPolicyConfiguration?.stepAdjustments,
            MinAdjustmentMagnitude: this.input.stepScalingPolicyConfiguration?.minAdjustmentMagnitude,
            Cooldown: this.input.stepScalingPolicyConfiguration?.cooldown,
            MetricAggregationType: this.input.stepScalingPolicyConfiguration?.metricAggregationType,
          },
          TargetTrackingScalingPolicyConfiguration: {
            TargetValue: this.input.targetTrackingScalingPolicyConfiguration?.targetValue,
            PredefinedMetricSpecification: {
              PredefinedMetricType: this.input.targetTrackingScalingPolicyConfiguration?.predefinedMetricSpecification?.predefinedMetricType,
              ResourceLabel: this.input.targetTrackingScalingPolicyConfiguration?.predefinedMetricSpecification?.resourceLabel,
            },
            CustomizedMetricSpecification: {
              MetricName: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.metricName,
              Namespace: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.namespace,
              Dimensions: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.dimensions,
              Statistic: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.statistic,
              Unit: this.input.targetTrackingScalingPolicyConfiguration?.customizedMetricSpecification?.unit,
            },
            ScaleOutCooldown: this.input.targetTrackingScalingPolicyConfiguration?.scaleOutCooldown,
            ScaleInCooldown: this.input.targetTrackingScalingPolicyConfiguration?.scaleInCooldown,
            DisableScaleIn: this.input.targetTrackingScalingPolicyConfiguration?.disableScaleIn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutScalingPolicy.Alarms', props);
    return resource.getResponseField('Alarms') as unknown as shapes.ApplicationAutoScalingAlarm[];
  }

}

