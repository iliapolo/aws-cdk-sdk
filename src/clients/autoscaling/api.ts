import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AutoScalingClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public attachInstances(input: shapes.AutoScalingAttachInstancesQuery): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachInstances',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.AttachInstances'),
        parameters: {
          InstanceIds: input.instanceIds,
          AutoScalingGroupName: input.autoScalingGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachInstances', props);
  }

  public attachLoadBalancerTargetGroups(input: shapes.AutoScalingAttachLoadBalancerTargetGroupsType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachLoadBalancerTargetGroups',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.AttachLoadBalancerTargetGroups'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          TargetGroupARNs: input.targetGroupArNs,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachLoadBalancerTargetGroups', props);
  }

  public attachLoadBalancers(input: shapes.AutoScalingAttachLoadBalancersType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachLoadBalancers',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.AttachLoadBalancers'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          LoadBalancerNames: input.loadBalancerNames,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachLoadBalancers', props);
  }

  public batchDeleteScheduledAction(input: shapes.AutoScalingBatchDeleteScheduledActionType): AutoScalingBatchDeleteScheduledAction {
    return new AutoScalingBatchDeleteScheduledAction(this, 'BatchDeleteScheduledAction', this.__resources, input);
  }

  public batchPutScheduledUpdateGroupAction(input: shapes.AutoScalingBatchPutScheduledUpdateGroupActionType): AutoScalingBatchPutScheduledUpdateGroupAction {
    return new AutoScalingBatchPutScheduledUpdateGroupAction(this, 'BatchPutScheduledUpdateGroupAction', this.__resources, input);
  }

  public cancelInstanceRefresh(input: shapes.AutoScalingCancelInstanceRefreshType): AutoScalingCancelInstanceRefresh {
    return new AutoScalingCancelInstanceRefresh(this, 'CancelInstanceRefresh', this.__resources, input);
  }

  public completeLifecycleAction(input: shapes.AutoScalingCompleteLifecycleActionType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeLifecycleAction',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.CompleteLifecycleAction'),
        parameters: {
          LifecycleHookName: input.lifecycleHookName,
          AutoScalingGroupName: input.autoScalingGroupName,
          LifecycleActionToken: input.lifecycleActionToken,
          LifecycleActionResult: input.lifecycleActionResult,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CompleteLifecycleAction', props);
  }

  public createAutoScalingGroup(input: shapes.AutoScalingCreateAutoScalingGroupType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.CreateAutoScalingGroup'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          LaunchConfigurationName: input.launchConfigurationName,
          LaunchTemplate: {
            LaunchTemplateId: input.launchTemplate?.launchTemplateId,
            LaunchTemplateName: input.launchTemplate?.launchTemplateName,
            Version: input.launchTemplate?.version,
          },
          MixedInstancesPolicy: {
            LaunchTemplate: {
              LaunchTemplateSpecification: {
                LaunchTemplateId: input.mixedInstancesPolicy?.launchTemplate?.launchTemplateSpecification?.launchTemplateId,
                LaunchTemplateName: input.mixedInstancesPolicy?.launchTemplate?.launchTemplateSpecification?.launchTemplateName,
                Version: input.mixedInstancesPolicy?.launchTemplate?.launchTemplateSpecification?.version,
              },
              Overrides: input.mixedInstancesPolicy?.launchTemplate?.overrides,
            },
            InstancesDistribution: {
              OnDemandAllocationStrategy: input.mixedInstancesPolicy?.instancesDistribution?.onDemandAllocationStrategy,
              OnDemandBaseCapacity: input.mixedInstancesPolicy?.instancesDistribution?.onDemandBaseCapacity,
              OnDemandPercentageAboveBaseCapacity: input.mixedInstancesPolicy?.instancesDistribution?.onDemandPercentageAboveBaseCapacity,
              SpotAllocationStrategy: input.mixedInstancesPolicy?.instancesDistribution?.spotAllocationStrategy,
              SpotInstancePools: input.mixedInstancesPolicy?.instancesDistribution?.spotInstancePools,
              SpotMaxPrice: input.mixedInstancesPolicy?.instancesDistribution?.spotMaxPrice,
            },
          },
          InstanceId: input.instanceId,
          MinSize: input.minSize,
          MaxSize: input.maxSize,
          DesiredCapacity: input.desiredCapacity,
          DefaultCooldown: input.defaultCooldown,
          AvailabilityZones: input.availabilityZones,
          LoadBalancerNames: input.loadBalancerNames,
          TargetGroupARNs: input.targetGroupArNs,
          HealthCheckType: input.healthCheckType,
          HealthCheckGracePeriod: input.healthCheckGracePeriod,
          PlacementGroup: input.placementGroup,
          VPCZoneIdentifier: input.vpcZoneIdentifier,
          TerminationPolicies: input.terminationPolicies,
          NewInstancesProtectedFromScaleIn: input.newInstancesProtectedFromScaleIn,
          CapacityRebalance: input.capacityRebalance,
          LifecycleHookSpecificationList: input.lifecycleHookSpecificationList,
          Tags: input.tags,
          ServiceLinkedRoleARN: input.serviceLinkedRoleArn,
          MaxInstanceLifetime: input.maxInstanceLifetime,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateAutoScalingGroup', props);
  }

  public createLaunchConfiguration(input: shapes.AutoScalingCreateLaunchConfigurationType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLaunchConfiguration',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.CreateLaunchConfiguration'),
        parameters: {
          LaunchConfigurationName: input.launchConfigurationName,
          ImageId: input.imageId,
          KeyName: input.keyName,
          SecurityGroups: input.securityGroups,
          ClassicLinkVPCId: input.classicLinkVpcId,
          ClassicLinkVPCSecurityGroups: input.classicLinkVpcSecurityGroups,
          UserData: input.userData,
          InstanceId: input.instanceId,
          InstanceType: input.instanceType,
          KernelId: input.kernelId,
          RamdiskId: input.ramdiskId,
          BlockDeviceMappings: input.blockDeviceMappings,
          InstanceMonitoring: {
            Enabled: input.instanceMonitoring?.enabled,
          },
          SpotPrice: input.spotPrice,
          IamInstanceProfile: input.iamInstanceProfile,
          EbsOptimized: input.ebsOptimized,
          AssociatePublicIpAddress: input.associatePublicIpAddress,
          PlacementTenancy: input.placementTenancy,
          MetadataOptions: {
            HttpTokens: input.metadataOptions?.httpTokens,
            HttpPutResponseHopLimit: input.metadataOptions?.httpPutResponseHopLimit,
            HttpEndpoint: input.metadataOptions?.httpEndpoint,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateLaunchConfiguration', props);
  }

  public createOrUpdateTags(input: shapes.AutoScalingCreateOrUpdateTagsType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOrUpdateTags',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.CreateOrUpdateTags'),
        parameters: {
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateOrUpdateTags', props);
  }

  public deleteAutoScalingGroup(input: shapes.AutoScalingDeleteAutoScalingGroupType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DeleteAutoScalingGroup'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          ForceDelete: input.forceDelete,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAutoScalingGroup', props);
  }

  public deleteLaunchConfiguration(input: shapes.AutoScalingLaunchConfigurationNameType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLaunchConfiguration',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DeleteLaunchConfiguration'),
        parameters: {
          LaunchConfigurationName: input.launchConfigurationName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLaunchConfiguration', props);
  }

  public deleteLifecycleHook(input: shapes.AutoScalingDeleteLifecycleHookType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLifecycleHook',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DeleteLifecycleHook'),
        parameters: {
          LifecycleHookName: input.lifecycleHookName,
          AutoScalingGroupName: input.autoScalingGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLifecycleHook', props);
  }

  public deleteNotificationConfiguration(input: shapes.AutoScalingDeleteNotificationConfigurationType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNotificationConfiguration',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DeleteNotificationConfiguration'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          TopicARN: input.topicArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNotificationConfiguration', props);
  }

  public deletePolicy(input: shapes.AutoScalingDeletePolicyType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePolicy',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DeletePolicy'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          PolicyName: input.policyName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePolicy', props);
  }

  public deleteScheduledAction(input: shapes.AutoScalingDeleteScheduledActionType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteScheduledAction',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DeleteScheduledAction'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          ScheduledActionName: input.scheduledActionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteScheduledAction', props);
  }

  public deleteTags(input: shapes.AutoScalingDeleteTagsType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTags',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DeleteTags'),
        parameters: {
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTags', props);
  }

  public describeAccountLimits(): AutoScalingDescribeAccountLimits {
    return new AutoScalingDescribeAccountLimits(this, 'DescribeAccountLimits', this.__resources);
  }

  public describeAdjustmentTypes(): AutoScalingDescribeAdjustmentTypes {
    return new AutoScalingDescribeAdjustmentTypes(this, 'DescribeAdjustmentTypes', this.__resources);
  }

  public describeAutoScalingGroups(input: shapes.AutoScalingAutoScalingGroupNamesType): AutoScalingDescribeAutoScalingGroups {
    return new AutoScalingDescribeAutoScalingGroups(this, 'DescribeAutoScalingGroups', this.__resources, input);
  }

  public describeAutoScalingInstances(input: shapes.AutoScalingDescribeAutoScalingInstancesType): AutoScalingDescribeAutoScalingInstances {
    return new AutoScalingDescribeAutoScalingInstances(this, 'DescribeAutoScalingInstances', this.__resources, input);
  }

  public describeAutoScalingNotificationTypes(): AutoScalingDescribeAutoScalingNotificationTypes {
    return new AutoScalingDescribeAutoScalingNotificationTypes(this, 'DescribeAutoScalingNotificationTypes', this.__resources);
  }

  public describeInstanceRefreshes(input: shapes.AutoScalingDescribeInstanceRefreshesType): AutoScalingDescribeInstanceRefreshes {
    return new AutoScalingDescribeInstanceRefreshes(this, 'DescribeInstanceRefreshes', this.__resources, input);
  }

  public describeLaunchConfigurations(input: shapes.AutoScalingLaunchConfigurationNamesType): AutoScalingDescribeLaunchConfigurations {
    return new AutoScalingDescribeLaunchConfigurations(this, 'DescribeLaunchConfigurations', this.__resources, input);
  }

  public describeLifecycleHookTypes(): AutoScalingDescribeLifecycleHookTypes {
    return new AutoScalingDescribeLifecycleHookTypes(this, 'DescribeLifecycleHookTypes', this.__resources);
  }

  public describeLifecycleHooks(input: shapes.AutoScalingDescribeLifecycleHooksType): AutoScalingDescribeLifecycleHooks {
    return new AutoScalingDescribeLifecycleHooks(this, 'DescribeLifecycleHooks', this.__resources, input);
  }

  public describeLoadBalancerTargetGroups(input: shapes.AutoScalingDescribeLoadBalancerTargetGroupsRequest): AutoScalingDescribeLoadBalancerTargetGroups {
    return new AutoScalingDescribeLoadBalancerTargetGroups(this, 'DescribeLoadBalancerTargetGroups', this.__resources, input);
  }

  public describeLoadBalancers(input: shapes.AutoScalingDescribeLoadBalancersRequest): AutoScalingDescribeLoadBalancers {
    return new AutoScalingDescribeLoadBalancers(this, 'DescribeLoadBalancers', this.__resources, input);
  }

  public describeMetricCollectionTypes(): AutoScalingDescribeMetricCollectionTypes {
    return new AutoScalingDescribeMetricCollectionTypes(this, 'DescribeMetricCollectionTypes', this.__resources);
  }

  public describeNotificationConfigurations(input: shapes.AutoScalingDescribeNotificationConfigurationsType): AutoScalingDescribeNotificationConfigurations {
    return new AutoScalingDescribeNotificationConfigurations(this, 'DescribeNotificationConfigurations', this.__resources, input);
  }

  public describePolicies(input: shapes.AutoScalingDescribePoliciesType): AutoScalingDescribePolicies {
    return new AutoScalingDescribePolicies(this, 'DescribePolicies', this.__resources, input);
  }

  public describeScalingActivities(input: shapes.AutoScalingDescribeScalingActivitiesType): AutoScalingDescribeScalingActivities {
    return new AutoScalingDescribeScalingActivities(this, 'DescribeScalingActivities', this.__resources, input);
  }

  public describeScalingProcessTypes(): AutoScalingDescribeScalingProcessTypes {
    return new AutoScalingDescribeScalingProcessTypes(this, 'DescribeScalingProcessTypes', this.__resources);
  }

  public describeScheduledActions(input: shapes.AutoScalingDescribeScheduledActionsType): AutoScalingDescribeScheduledActions {
    return new AutoScalingDescribeScheduledActions(this, 'DescribeScheduledActions', this.__resources, input);
  }

  public describeTags(input: shapes.AutoScalingDescribeTagsType): AutoScalingDescribeTags {
    return new AutoScalingDescribeTags(this, 'DescribeTags', this.__resources, input);
  }

  public describeTerminationPolicyTypes(): AutoScalingDescribeTerminationPolicyTypes {
    return new AutoScalingDescribeTerminationPolicyTypes(this, 'DescribeTerminationPolicyTypes', this.__resources);
  }

  public detachInstances(input: shapes.AutoScalingDetachInstancesQuery): AutoScalingDetachInstances {
    return new AutoScalingDetachInstances(this, 'DetachInstances', this.__resources, input);
  }

  public detachLoadBalancerTargetGroups(input: shapes.AutoScalingDetachLoadBalancerTargetGroupsType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachLoadBalancerTargetGroups',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DetachLoadBalancerTargetGroups'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          TargetGroupARNs: input.targetGroupArNs,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachLoadBalancerTargetGroups', props);
  }

  public detachLoadBalancers(input: shapes.AutoScalingDetachLoadBalancersType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachLoadBalancers',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DetachLoadBalancers'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          LoadBalancerNames: input.loadBalancerNames,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachLoadBalancers', props);
  }

  public disableMetricsCollection(input: shapes.AutoScalingDisableMetricsCollectionQuery): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableMetricsCollection',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DisableMetricsCollection'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          Metrics: input.metrics,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableMetricsCollection', props);
  }

  public enableMetricsCollection(input: shapes.AutoScalingEnableMetricsCollectionQuery): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableMetricsCollection',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.EnableMetricsCollection'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          Metrics: input.metrics,
          Granularity: input.granularity,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableMetricsCollection', props);
  }

  public enterStandby(input: shapes.AutoScalingEnterStandbyQuery): AutoScalingEnterStandby {
    return new AutoScalingEnterStandby(this, 'EnterStandby', this.__resources, input);
  }

  public executePolicy(input: shapes.AutoScalingExecutePolicyType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executePolicy',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.ExecutePolicy'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          PolicyName: input.policyName,
          HonorCooldown: input.honorCooldown,
          MetricValue: input.metricValue,
          BreachThreshold: input.breachThreshold,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ExecutePolicy', props);
  }

  public exitStandby(input: shapes.AutoScalingExitStandbyQuery): AutoScalingExitStandby {
    return new AutoScalingExitStandby(this, 'ExitStandby', this.__resources, input);
  }

  public putLifecycleHook(input: shapes.AutoScalingPutLifecycleHookType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLifecycleHook',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.PutLifecycleHook'),
        parameters: {
          LifecycleHookName: input.lifecycleHookName,
          AutoScalingGroupName: input.autoScalingGroupName,
          LifecycleTransition: input.lifecycleTransition,
          RoleARN: input.roleArn,
          NotificationTargetARN: input.notificationTargetArn,
          NotificationMetadata: input.notificationMetadata,
          HeartbeatTimeout: input.heartbeatTimeout,
          DefaultResult: input.defaultResult,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutLifecycleHook', props);
  }

  public putNotificationConfiguration(input: shapes.AutoScalingPutNotificationConfigurationType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putNotificationConfiguration',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.PutNotificationConfiguration'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          TopicARN: input.topicArn,
          NotificationTypes: input.notificationTypes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutNotificationConfiguration', props);
  }

  public putScalingPolicy(input: shapes.AutoScalingPutScalingPolicyType): AutoScalingPutScalingPolicy {
    return new AutoScalingPutScalingPolicy(this, 'PutScalingPolicy', this.__resources, input);
  }

  public putScheduledUpdateGroupAction(input: shapes.AutoScalingPutScheduledUpdateGroupActionType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putScheduledUpdateGroupAction',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.PutScheduledUpdateGroupAction'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          ScheduledActionName: input.scheduledActionName,
          Time: input.time,
          StartTime: input.startTime,
          EndTime: input.endTime,
          Recurrence: input.recurrence,
          MinSize: input.minSize,
          MaxSize: input.maxSize,
          DesiredCapacity: input.desiredCapacity,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutScheduledUpdateGroupAction', props);
  }

  public recordLifecycleActionHeartbeat(input: shapes.AutoScalingRecordLifecycleActionHeartbeatType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'recordLifecycleActionHeartbeat',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.RecordLifecycleActionHeartbeat'),
        parameters: {
          LifecycleHookName: input.lifecycleHookName,
          AutoScalingGroupName: input.autoScalingGroupName,
          LifecycleActionToken: input.lifecycleActionToken,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RecordLifecycleActionHeartbeat', props);
  }

  public resumeProcesses(input: shapes.AutoScalingScalingProcessQuery): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeProcesses',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.ResumeProcesses'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          ScalingProcesses: input.scalingProcesses,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ResumeProcesses', props);
  }

  public setDesiredCapacity(input: shapes.AutoScalingSetDesiredCapacityType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setDesiredCapacity',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.SetDesiredCapacity'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          DesiredCapacity: input.desiredCapacity,
          HonorCooldown: input.honorCooldown,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetDesiredCapacity', props);
  }

  public setInstanceHealth(input: shapes.AutoScalingSetInstanceHealthQuery): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setInstanceHealth',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.SetInstanceHealth'),
        parameters: {
          InstanceId: input.instanceId,
          HealthStatus: input.healthStatus,
          ShouldRespectGracePeriod: input.shouldRespectGracePeriod,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetInstanceHealth', props);
  }

  public setInstanceProtection(input: shapes.AutoScalingSetInstanceProtectionQuery): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setInstanceProtection',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.SetInstanceProtection'),
        parameters: {
          InstanceIds: input.instanceIds,
          AutoScalingGroupName: input.autoScalingGroupName,
          ProtectedFromScaleIn: input.protectedFromScaleIn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetInstanceProtection', props);
  }

  public startInstanceRefresh(input: shapes.AutoScalingStartInstanceRefreshType): AutoScalingStartInstanceRefresh {
    return new AutoScalingStartInstanceRefresh(this, 'StartInstanceRefresh', this.__resources, input);
  }

  public suspendProcesses(input: shapes.AutoScalingScalingProcessQuery): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suspendProcesses',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.SuspendProcesses'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          ScalingProcesses: input.scalingProcesses,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SuspendProcesses', props);
  }

  public terminateInstanceInAutoScalingGroup(input: shapes.AutoScalingTerminateInstanceInAutoScalingGroupType): AutoScalingTerminateInstanceInAutoScalingGroup {
    return new AutoScalingTerminateInstanceInAutoScalingGroup(this, 'TerminateInstanceInAutoScalingGroup', this.__resources, input);
  }

  public updateAutoScalingGroup(input: shapes.AutoScalingUpdateAutoScalingGroupType): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.UpdateAutoScalingGroup'),
        parameters: {
          AutoScalingGroupName: input.autoScalingGroupName,
          LaunchConfigurationName: input.launchConfigurationName,
          LaunchTemplate: {
            LaunchTemplateId: input.launchTemplate?.launchTemplateId,
            LaunchTemplateName: input.launchTemplate?.launchTemplateName,
            Version: input.launchTemplate?.version,
          },
          MixedInstancesPolicy: {
            LaunchTemplate: {
              LaunchTemplateSpecification: {
                LaunchTemplateId: input.mixedInstancesPolicy?.launchTemplate?.launchTemplateSpecification?.launchTemplateId,
                LaunchTemplateName: input.mixedInstancesPolicy?.launchTemplate?.launchTemplateSpecification?.launchTemplateName,
                Version: input.mixedInstancesPolicy?.launchTemplate?.launchTemplateSpecification?.version,
              },
              Overrides: input.mixedInstancesPolicy?.launchTemplate?.overrides,
            },
            InstancesDistribution: {
              OnDemandAllocationStrategy: input.mixedInstancesPolicy?.instancesDistribution?.onDemandAllocationStrategy,
              OnDemandBaseCapacity: input.mixedInstancesPolicy?.instancesDistribution?.onDemandBaseCapacity,
              OnDemandPercentageAboveBaseCapacity: input.mixedInstancesPolicy?.instancesDistribution?.onDemandPercentageAboveBaseCapacity,
              SpotAllocationStrategy: input.mixedInstancesPolicy?.instancesDistribution?.spotAllocationStrategy,
              SpotInstancePools: input.mixedInstancesPolicy?.instancesDistribution?.spotInstancePools,
              SpotMaxPrice: input.mixedInstancesPolicy?.instancesDistribution?.spotMaxPrice,
            },
          },
          MinSize: input.minSize,
          MaxSize: input.maxSize,
          DesiredCapacity: input.desiredCapacity,
          DefaultCooldown: input.defaultCooldown,
          AvailabilityZones: input.availabilityZones,
          HealthCheckType: input.healthCheckType,
          HealthCheckGracePeriod: input.healthCheckGracePeriod,
          PlacementGroup: input.placementGroup,
          VPCZoneIdentifier: input.vpcZoneIdentifier,
          TerminationPolicies: input.terminationPolicies,
          NewInstancesProtectedFromScaleIn: input.newInstancesProtectedFromScaleIn,
          ServiceLinkedRoleARN: input.serviceLinkedRoleArn,
          MaxInstanceLifetime: input.maxInstanceLifetime,
          CapacityRebalance: input.capacityRebalance,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAutoScalingGroup', props);
  }

}

export class AutoScalingBatchDeleteScheduledAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingBatchDeleteScheduledActionType) {
    super(scope, id);
  }

  public get failedScheduledActions(): shapes.AutoScalingFailedScheduledUpdateGroupActionRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteScheduledAction',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.BatchDeleteScheduledAction.FailedScheduledActions'),
        outputPath: 'FailedScheduledActions',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          ScheduledActionNames: this.input.scheduledActionNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteScheduledAction.FailedScheduledActions', props);
    return resource.getResponseField('FailedScheduledActions') as unknown as shapes.AutoScalingFailedScheduledUpdateGroupActionRequest[];
  }

}

export class AutoScalingBatchPutScheduledUpdateGroupAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingBatchPutScheduledUpdateGroupActionType) {
    super(scope, id);
  }

  public get failedScheduledUpdateGroupActions(): shapes.AutoScalingFailedScheduledUpdateGroupActionRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchPutScheduledUpdateGroupAction',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.BatchPutScheduledUpdateGroupAction.FailedScheduledUpdateGroupActions'),
        outputPath: 'FailedScheduledUpdateGroupActions',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          ScheduledUpdateGroupActions: this.input.scheduledUpdateGroupActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchPutScheduledUpdateGroupAction.FailedScheduledUpdateGroupActions', props);
    return resource.getResponseField('FailedScheduledUpdateGroupActions') as unknown as shapes.AutoScalingFailedScheduledUpdateGroupActionRequest[];
  }

}

export class AutoScalingCancelInstanceRefresh extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingCancelInstanceRefreshType) {
    super(scope, id);
  }

  public get instanceRefreshId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelInstanceRefresh',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.CancelInstanceRefresh.InstanceRefreshId'),
        outputPath: 'InstanceRefreshId',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelInstanceRefresh.InstanceRefreshId', props);
    return resource.getResponseField('InstanceRefreshId') as unknown as string;
  }

}

export class AutoScalingDescribeAccountLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get maxNumberOfAutoScalingGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountLimits',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAccountLimits.MaxNumberOfAutoScalingGroups'),
        outputPath: 'MaxNumberOfAutoScalingGroups',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountLimits.MaxNumberOfAutoScalingGroups', props);
    return resource.getResponseField('MaxNumberOfAutoScalingGroups') as unknown as number;
  }

  public get maxNumberOfLaunchConfigurations(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountLimits',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAccountLimits.MaxNumberOfLaunchConfigurations'),
        outputPath: 'MaxNumberOfLaunchConfigurations',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountLimits.MaxNumberOfLaunchConfigurations', props);
    return resource.getResponseField('MaxNumberOfLaunchConfigurations') as unknown as number;
  }

  public get numberOfAutoScalingGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountLimits',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAccountLimits.NumberOfAutoScalingGroups'),
        outputPath: 'NumberOfAutoScalingGroups',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountLimits.NumberOfAutoScalingGroups', props);
    return resource.getResponseField('NumberOfAutoScalingGroups') as unknown as number;
  }

  public get numberOfLaunchConfigurations(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountLimits',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAccountLimits.NumberOfLaunchConfigurations'),
        outputPath: 'NumberOfLaunchConfigurations',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountLimits.NumberOfLaunchConfigurations', props);
    return resource.getResponseField('NumberOfLaunchConfigurations') as unknown as number;
  }

}

export class AutoScalingDescribeAdjustmentTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get adjustmentTypes(): shapes.AutoScalingAdjustmentType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAdjustmentTypes',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAdjustmentTypes.AdjustmentTypes'),
        outputPath: 'AdjustmentTypes',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAdjustmentTypes.AdjustmentTypes', props);
    return resource.getResponseField('AdjustmentTypes') as unknown as shapes.AutoScalingAdjustmentType[];
  }

}

export class AutoScalingDescribeAutoScalingGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingAutoScalingGroupNamesType) {
    super(scope, id);
  }

  public get autoScalingGroups(): shapes.AutoScalingAutoScalingGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingGroups',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAutoScalingGroups.AutoScalingGroups'),
        outputPath: 'AutoScalingGroups',
        parameters: {
          AutoScalingGroupNames: this.input.autoScalingGroupNames,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoScalingGroups.AutoScalingGroups', props);
    return resource.getResponseField('AutoScalingGroups') as unknown as shapes.AutoScalingAutoScalingGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingGroups',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAutoScalingGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutoScalingGroupNames: this.input.autoScalingGroupNames,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoScalingGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeAutoScalingInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribeAutoScalingInstancesType) {
    super(scope, id);
  }

  public get autoScalingInstances(): shapes.AutoScalingAutoScalingInstanceDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingInstances',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAutoScalingInstances.AutoScalingInstances'),
        outputPath: 'AutoScalingInstances',
        parameters: {
          InstanceIds: this.input.instanceIds,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoScalingInstances.AutoScalingInstances', props);
    return resource.getResponseField('AutoScalingInstances') as unknown as shapes.AutoScalingAutoScalingInstanceDetails[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingInstances',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAutoScalingInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceIds: this.input.instanceIds,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoScalingInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeAutoScalingNotificationTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get autoScalingNotificationTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingNotificationTypes',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeAutoScalingNotificationTypes.AutoScalingNotificationTypes'),
        outputPath: 'AutoScalingNotificationTypes',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoScalingNotificationTypes.AutoScalingNotificationTypes', props);
    return resource.getResponseField('AutoScalingNotificationTypes') as unknown as string[];
  }

}

export class AutoScalingDescribeInstanceRefreshes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribeInstanceRefreshesType) {
    super(scope, id);
  }

  public get instanceRefreshes(): shapes.AutoScalingInstanceRefresh[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceRefreshes',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeInstanceRefreshes.InstanceRefreshes'),
        outputPath: 'InstanceRefreshes',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          InstanceRefreshIds: this.input.instanceRefreshIds,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceRefreshes.InstanceRefreshes', props);
    return resource.getResponseField('InstanceRefreshes') as unknown as shapes.AutoScalingInstanceRefresh[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceRefreshes',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeInstanceRefreshes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          InstanceRefreshIds: this.input.instanceRefreshIds,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceRefreshes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeLaunchConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingLaunchConfigurationNamesType) {
    super(scope, id);
  }

  public get launchConfigurations(): shapes.AutoScalingLaunchConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLaunchConfigurations',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeLaunchConfigurations.LaunchConfigurations'),
        outputPath: 'LaunchConfigurations',
        parameters: {
          LaunchConfigurationNames: this.input.launchConfigurationNames,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLaunchConfigurations.LaunchConfigurations', props);
    return resource.getResponseField('LaunchConfigurations') as unknown as shapes.AutoScalingLaunchConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLaunchConfigurations',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeLaunchConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LaunchConfigurationNames: this.input.launchConfigurationNames,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLaunchConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeLifecycleHookTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get lifecycleHookTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLifecycleHookTypes',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeLifecycleHookTypes.LifecycleHookTypes'),
        outputPath: 'LifecycleHookTypes',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLifecycleHookTypes.LifecycleHookTypes', props);
    return resource.getResponseField('LifecycleHookTypes') as unknown as string[];
  }

}

export class AutoScalingDescribeLifecycleHooks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribeLifecycleHooksType) {
    super(scope, id);
  }

  public get lifecycleHooks(): shapes.AutoScalingLifecycleHook[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLifecycleHooks',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeLifecycleHooks.LifecycleHooks'),
        outputPath: 'LifecycleHooks',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          LifecycleHookNames: this.input.lifecycleHookNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLifecycleHooks.LifecycleHooks', props);
    return resource.getResponseField('LifecycleHooks') as unknown as shapes.AutoScalingLifecycleHook[];
  }

}

export class AutoScalingDescribeLoadBalancerTargetGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribeLoadBalancerTargetGroupsRequest) {
    super(scope, id);
  }

  public get loadBalancerTargetGroups(): shapes.AutoScalingLoadBalancerTargetGroupState[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoadBalancerTargetGroups',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeLoadBalancerTargetGroups.LoadBalancerTargetGroups'),
        outputPath: 'LoadBalancerTargetGroups',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoadBalancerTargetGroups.LoadBalancerTargetGroups', props);
    return resource.getResponseField('LoadBalancerTargetGroups') as unknown as shapes.AutoScalingLoadBalancerTargetGroupState[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoadBalancerTargetGroups',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeLoadBalancerTargetGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoadBalancerTargetGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeLoadBalancers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribeLoadBalancersRequest) {
    super(scope, id);
  }

  public get loadBalancers(): shapes.AutoScalingLoadBalancerState[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoadBalancers',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeLoadBalancers.LoadBalancers'),
        outputPath: 'LoadBalancers',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoadBalancers.LoadBalancers', props);
    return resource.getResponseField('LoadBalancers') as unknown as shapes.AutoScalingLoadBalancerState[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoadBalancers',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeLoadBalancers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoadBalancers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeMetricCollectionTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get metrics(): shapes.AutoScalingMetricCollectionType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricCollectionTypes',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeMetricCollectionTypes.Metrics'),
        outputPath: 'Metrics',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMetricCollectionTypes.Metrics', props);
    return resource.getResponseField('Metrics') as unknown as shapes.AutoScalingMetricCollectionType[];
  }

  public get granularities(): shapes.AutoScalingMetricGranularityType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricCollectionTypes',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeMetricCollectionTypes.Granularities'),
        outputPath: 'Granularities',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMetricCollectionTypes.Granularities', props);
    return resource.getResponseField('Granularities') as unknown as shapes.AutoScalingMetricGranularityType[];
  }

}

export class AutoScalingDescribeNotificationConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribeNotificationConfigurationsType) {
    super(scope, id);
  }

  public get notificationConfigurations(): shapes.AutoScalingNotificationConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationConfigurations',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeNotificationConfigurations.NotificationConfigurations'),
        outputPath: 'NotificationConfigurations',
        parameters: {
          AutoScalingGroupNames: this.input.autoScalingGroupNames,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationConfigurations.NotificationConfigurations', props);
    return resource.getResponseField('NotificationConfigurations') as unknown as shapes.AutoScalingNotificationConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotificationConfigurations',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeNotificationConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutoScalingGroupNames: this.input.autoScalingGroupNames,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotificationConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribePolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribePoliciesType) {
    super(scope, id);
  }

  public get scalingPolicies(): shapes.AutoScalingScalingPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePolicies',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribePolicies.ScalingPolicies'),
        outputPath: 'ScalingPolicies',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          PolicyNames: this.input.policyNames,
          PolicyTypes: this.input.policyTypes,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePolicies.ScalingPolicies', props);
    return resource.getResponseField('ScalingPolicies') as unknown as shapes.AutoScalingScalingPolicy[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePolicies',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribePolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          PolicyNames: this.input.policyNames,
          PolicyTypes: this.input.policyTypes,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeScalingActivities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribeScalingActivitiesType) {
    super(scope, id);
  }

  public get activities(): shapes.AutoScalingActivity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingActivities',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeScalingActivities.Activities'),
        outputPath: 'Activities',
        parameters: {
          ActivityIds: this.input.activityIds,
          AutoScalingGroupName: this.input.autoScalingGroupName,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingActivities.Activities', props);
    return resource.getResponseField('Activities') as unknown as shapes.AutoScalingActivity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingActivities',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeScalingActivities.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ActivityIds: this.input.activityIds,
          AutoScalingGroupName: this.input.autoScalingGroupName,
          MaxRecords: this.input.maxRecords,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingActivities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeScalingProcessTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get processes(): shapes.AutoScalingProcessType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingProcessTypes',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeScalingProcessTypes.Processes'),
        outputPath: 'Processes',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingProcessTypes.Processes', props);
    return resource.getResponseField('Processes') as unknown as shapes.AutoScalingProcessType[];
  }

}

export class AutoScalingDescribeScheduledActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribeScheduledActionsType) {
    super(scope, id);
  }

  public get scheduledUpdateGroupActions(): shapes.AutoScalingScheduledUpdateGroupAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledActions',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeScheduledActions.ScheduledUpdateGroupActions'),
        outputPath: 'ScheduledUpdateGroupActions',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          ScheduledActionNames: this.input.scheduledActionNames,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledActions.ScheduledUpdateGroupActions', props);
    return resource.getResponseField('ScheduledUpdateGroupActions') as unknown as shapes.AutoScalingScheduledUpdateGroupAction[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledActions',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeScheduledActions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          ScheduledActionNames: this.input.scheduledActionNames,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledActions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDescribeTagsType) {
    super(scope, id);
  }

  public get tags(): shapes.AutoScalingTagDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTags',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.AutoScalingTagDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTags',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeTags.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingDescribeTerminationPolicyTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get terminationPolicyTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTerminationPolicyTypes',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DescribeTerminationPolicyTypes.TerminationPolicyTypes'),
        outputPath: 'TerminationPolicyTypes',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTerminationPolicyTypes.TerminationPolicyTypes', props);
    return resource.getResponseField('TerminationPolicyTypes') as unknown as string[];
  }

}

export class AutoScalingDetachInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingDetachInstancesQuery) {
    super(scope, id);
  }

  public get activities(): shapes.AutoScalingActivity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachInstances',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.DetachInstances.Activities'),
        outputPath: 'Activities',
        parameters: {
          InstanceIds: this.input.instanceIds,
          AutoScalingGroupName: this.input.autoScalingGroupName,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachInstances.Activities', props);
    return resource.getResponseField('Activities') as unknown as shapes.AutoScalingActivity[];
  }

}

export class AutoScalingEnterStandby extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingEnterStandbyQuery) {
    super(scope, id);
  }

  public get activities(): shapes.AutoScalingActivity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enterStandby',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.EnterStandby.Activities'),
        outputPath: 'Activities',
        parameters: {
          InstanceIds: this.input.instanceIds,
          AutoScalingGroupName: this.input.autoScalingGroupName,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnterStandby.Activities', props);
    return resource.getResponseField('Activities') as unknown as shapes.AutoScalingActivity[];
  }

}

export class AutoScalingExitStandby extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingExitStandbyQuery) {
    super(scope, id);
  }

  public get activities(): shapes.AutoScalingActivity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exitStandby',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.ExitStandby.Activities'),
        outputPath: 'Activities',
        parameters: {
          InstanceIds: this.input.instanceIds,
          AutoScalingGroupName: this.input.autoScalingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExitStandby.Activities', props);
    return resource.getResponseField('Activities') as unknown as shapes.AutoScalingActivity[];
  }

}

export class AutoScalingPutScalingPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingPutScalingPolicyType) {
    super(scope, id);
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putScalingPolicy',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.PutScalingPolicy.PolicyARN'),
        outputPath: 'PolicyARN',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          PolicyName: this.input.policyName,
          PolicyType: this.input.policyType,
          AdjustmentType: this.input.adjustmentType,
          MinAdjustmentStep: this.input.minAdjustmentStep,
          MinAdjustmentMagnitude: this.input.minAdjustmentMagnitude,
          ScalingAdjustment: this.input.scalingAdjustment,
          Cooldown: this.input.cooldown,
          MetricAggregationType: this.input.metricAggregationType,
          StepAdjustments: this.input.stepAdjustments,
          EstimatedInstanceWarmup: this.input.estimatedInstanceWarmup,
          TargetTrackingConfiguration: {
            PredefinedMetricSpecification: {
              PredefinedMetricType: this.input.targetTrackingConfiguration?.predefinedMetricSpecification?.predefinedMetricType,
              ResourceLabel: this.input.targetTrackingConfiguration?.predefinedMetricSpecification?.resourceLabel,
            },
            CustomizedMetricSpecification: {
              MetricName: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.metricName,
              Namespace: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.namespace,
              Dimensions: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.dimensions,
              Statistic: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.statistic,
              Unit: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.unit,
            },
            TargetValue: this.input.targetTrackingConfiguration?.targetValue,
            DisableScaleIn: this.input.targetTrackingConfiguration?.disableScaleIn,
          },
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutScalingPolicy.PolicyARN', props);
    return resource.getResponseField('PolicyARN') as unknown as string;
  }

  public get alarms(): shapes.AutoScalingAlarm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putScalingPolicy',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.PutScalingPolicy.Alarms'),
        outputPath: 'Alarms',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          PolicyName: this.input.policyName,
          PolicyType: this.input.policyType,
          AdjustmentType: this.input.adjustmentType,
          MinAdjustmentStep: this.input.minAdjustmentStep,
          MinAdjustmentMagnitude: this.input.minAdjustmentMagnitude,
          ScalingAdjustment: this.input.scalingAdjustment,
          Cooldown: this.input.cooldown,
          MetricAggregationType: this.input.metricAggregationType,
          StepAdjustments: this.input.stepAdjustments,
          EstimatedInstanceWarmup: this.input.estimatedInstanceWarmup,
          TargetTrackingConfiguration: {
            PredefinedMetricSpecification: {
              PredefinedMetricType: this.input.targetTrackingConfiguration?.predefinedMetricSpecification?.predefinedMetricType,
              ResourceLabel: this.input.targetTrackingConfiguration?.predefinedMetricSpecification?.resourceLabel,
            },
            CustomizedMetricSpecification: {
              MetricName: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.metricName,
              Namespace: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.namespace,
              Dimensions: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.dimensions,
              Statistic: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.statistic,
              Unit: this.input.targetTrackingConfiguration?.customizedMetricSpecification?.unit,
            },
            TargetValue: this.input.targetTrackingConfiguration?.targetValue,
            DisableScaleIn: this.input.targetTrackingConfiguration?.disableScaleIn,
          },
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutScalingPolicy.Alarms', props);
    return resource.getResponseField('Alarms') as unknown as shapes.AutoScalingAlarm[];
  }

}

export class AutoScalingStartInstanceRefresh extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingStartInstanceRefreshType) {
    super(scope, id);
  }

  public get instanceRefreshId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startInstanceRefresh',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.StartInstanceRefresh.InstanceRefreshId'),
        outputPath: 'InstanceRefreshId',
        parameters: {
          AutoScalingGroupName: this.input.autoScalingGroupName,
          Strategy: this.input.strategy,
          Preferences: {
            MinHealthyPercentage: this.input.preferences?.minHealthyPercentage,
            InstanceWarmup: this.input.preferences?.instanceWarmup,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartInstanceRefresh.InstanceRefreshId', props);
    return resource.getResponseField('InstanceRefreshId') as unknown as string;
  }

}

export class AutoScalingTerminateInstanceInAutoScalingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingTerminateInstanceInAutoScalingGroupType) {
    super(scope, id);
  }

  public get activity(): AutoScalingTerminateInstanceInAutoScalingGroupActivity {
    return new AutoScalingTerminateInstanceInAutoScalingGroupActivity(this, 'Activity', this.__resources, this.input);
  }

}

export class AutoScalingTerminateInstanceInAutoScalingGroupActivity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingTerminateInstanceInAutoScalingGroupType) {
    super(scope, id);
  }

  public get activityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.ActivityId'),
        outputPath: 'Activity.ActivityId',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.ActivityId', props);
    return resource.getResponseField('Activity.ActivityId') as unknown as string;
  }

  public get autoScalingGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.AutoScalingGroupName'),
        outputPath: 'Activity.AutoScalingGroupName',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.AutoScalingGroupName', props);
    return resource.getResponseField('Activity.AutoScalingGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.Description'),
        outputPath: 'Activity.Description',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.Description', props);
    return resource.getResponseField('Activity.Description') as unknown as string;
  }

  public get cause(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.Cause'),
        outputPath: 'Activity.Cause',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.Cause', props);
    return resource.getResponseField('Activity.Cause') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.StartTime'),
        outputPath: 'Activity.StartTime',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.StartTime', props);
    return resource.getResponseField('Activity.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.EndTime'),
        outputPath: 'Activity.EndTime',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.EndTime', props);
    return resource.getResponseField('Activity.EndTime') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.StatusCode'),
        outputPath: 'Activity.StatusCode',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.StatusCode', props);
    return resource.getResponseField('Activity.StatusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.StatusMessage'),
        outputPath: 'Activity.StatusMessage',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.StatusMessage', props);
    return resource.getResponseField('Activity.StatusMessage') as unknown as string;
  }

  public get progress(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.Progress'),
        outputPath: 'Activity.Progress',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.Progress', props);
    return resource.getResponseField('Activity.Progress') as unknown as number;
  }

  public get details(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateInstanceInAutoScalingGroup',
        service: 'AutoScaling',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScaling.TerminateInstanceInAutoScalingGroup.Activity.Details'),
        outputPath: 'Activity.Details',
        parameters: {
          InstanceId: this.input.instanceId,
          ShouldDecrementDesiredCapacity: this.input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateInstanceInAutoScalingGroup.Activity.Details', props);
    return resource.getResponseField('Activity.Details') as unknown as string;
  }

}

