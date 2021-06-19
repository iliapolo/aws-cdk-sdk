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

  public batchDeleteScheduledAction(input: shapes.AutoScalingBatchDeleteScheduledActionType): AutoScalingResponsesBatchDeleteScheduledAction {
    return new AutoScalingResponsesBatchDeleteScheduledAction(this, this.__resources, input);
  }

  public batchPutScheduledUpdateGroupAction(input: shapes.AutoScalingBatchPutScheduledUpdateGroupActionType): AutoScalingResponsesBatchPutScheduledUpdateGroupAction {
    return new AutoScalingResponsesBatchPutScheduledUpdateGroupAction(this, this.__resources, input);
  }

  public cancelInstanceRefresh(input: shapes.AutoScalingCancelInstanceRefreshType): AutoScalingResponsesCancelInstanceRefresh {
    return new AutoScalingResponsesCancelInstanceRefresh(this, this.__resources, input);
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

  public describeAccountLimits(): AutoScalingResponsesDescribeAccountLimits {
    return new AutoScalingResponsesDescribeAccountLimits(this, this.__resources);
  }

  public describeAdjustmentTypes(): AutoScalingResponsesDescribeAdjustmentTypes {
    return new AutoScalingResponsesDescribeAdjustmentTypes(this, this.__resources);
  }

  public describeAutoScalingGroups(input: shapes.AutoScalingAutoScalingGroupNamesType): AutoScalingResponsesDescribeAutoScalingGroups {
    return new AutoScalingResponsesDescribeAutoScalingGroups(this, this.__resources, input);
  }

  public describeAutoScalingInstances(input: shapes.AutoScalingDescribeAutoScalingInstancesType): AutoScalingResponsesDescribeAutoScalingInstances {
    return new AutoScalingResponsesDescribeAutoScalingInstances(this, this.__resources, input);
  }

  public describeAutoScalingNotificationTypes(): AutoScalingResponsesDescribeAutoScalingNotificationTypes {
    return new AutoScalingResponsesDescribeAutoScalingNotificationTypes(this, this.__resources);
  }

  public describeInstanceRefreshes(input: shapes.AutoScalingDescribeInstanceRefreshesType): AutoScalingResponsesDescribeInstanceRefreshes {
    return new AutoScalingResponsesDescribeInstanceRefreshes(this, this.__resources, input);
  }

  public describeLaunchConfigurations(input: shapes.AutoScalingLaunchConfigurationNamesType): AutoScalingResponsesDescribeLaunchConfigurations {
    return new AutoScalingResponsesDescribeLaunchConfigurations(this, this.__resources, input);
  }

  public describeLifecycleHookTypes(): AutoScalingResponsesDescribeLifecycleHookTypes {
    return new AutoScalingResponsesDescribeLifecycleHookTypes(this, this.__resources);
  }

  public describeLifecycleHooks(input: shapes.AutoScalingDescribeLifecycleHooksType): AutoScalingResponsesDescribeLifecycleHooks {
    return new AutoScalingResponsesDescribeLifecycleHooks(this, this.__resources, input);
  }

  public describeLoadBalancerTargetGroups(input: shapes.AutoScalingDescribeLoadBalancerTargetGroupsRequest): AutoScalingResponsesDescribeLoadBalancerTargetGroups {
    return new AutoScalingResponsesDescribeLoadBalancerTargetGroups(this, this.__resources, input);
  }

  public describeLoadBalancers(input: shapes.AutoScalingDescribeLoadBalancersRequest): AutoScalingResponsesDescribeLoadBalancers {
    return new AutoScalingResponsesDescribeLoadBalancers(this, this.__resources, input);
  }

  public describeMetricCollectionTypes(): AutoScalingResponsesDescribeMetricCollectionTypes {
    return new AutoScalingResponsesDescribeMetricCollectionTypes(this, this.__resources);
  }

  public describeNotificationConfigurations(input: shapes.AutoScalingDescribeNotificationConfigurationsType): AutoScalingResponsesDescribeNotificationConfigurations {
    return new AutoScalingResponsesDescribeNotificationConfigurations(this, this.__resources, input);
  }

  public describePolicies(input: shapes.AutoScalingDescribePoliciesType): AutoScalingResponsesDescribePolicies {
    return new AutoScalingResponsesDescribePolicies(this, this.__resources, input);
  }

  public describeScalingActivities(input: shapes.AutoScalingDescribeScalingActivitiesType): AutoScalingResponsesDescribeScalingActivities {
    return new AutoScalingResponsesDescribeScalingActivities(this, this.__resources, input);
  }

  public describeScalingProcessTypes(): AutoScalingResponsesDescribeScalingProcessTypes {
    return new AutoScalingResponsesDescribeScalingProcessTypes(this, this.__resources);
  }

  public describeScheduledActions(input: shapes.AutoScalingDescribeScheduledActionsType): AutoScalingResponsesDescribeScheduledActions {
    return new AutoScalingResponsesDescribeScheduledActions(this, this.__resources, input);
  }

  public describeTags(input: shapes.AutoScalingDescribeTagsType): AutoScalingResponsesDescribeTags {
    return new AutoScalingResponsesDescribeTags(this, this.__resources, input);
  }

  public describeTerminationPolicyTypes(): AutoScalingResponsesDescribeTerminationPolicyTypes {
    return new AutoScalingResponsesDescribeTerminationPolicyTypes(this, this.__resources);
  }

  public detachInstances(input: shapes.AutoScalingDetachInstancesQuery): AutoScalingResponsesDetachInstances {
    return new AutoScalingResponsesDetachInstances(this, this.__resources, input);
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

  public enterStandby(input: shapes.AutoScalingEnterStandbyQuery): AutoScalingResponsesEnterStandby {
    return new AutoScalingResponsesEnterStandby(this, this.__resources, input);
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

  public exitStandby(input: shapes.AutoScalingExitStandbyQuery): AutoScalingResponsesExitStandby {
    return new AutoScalingResponsesExitStandby(this, this.__resources, input);
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

  public putScalingPolicy(input: shapes.AutoScalingPutScalingPolicyType): AutoScalingResponsesPutScalingPolicy {
    return new AutoScalingResponsesPutScalingPolicy(this, this.__resources, input);
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

  public startInstanceRefresh(input: shapes.AutoScalingStartInstanceRefreshType): AutoScalingResponsesStartInstanceRefresh {
    return new AutoScalingResponsesStartInstanceRefresh(this, this.__resources, input);
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

  public terminateInstanceInAutoScalingGroup(input: shapes.AutoScalingTerminateInstanceInAutoScalingGroupType): AutoScalingResponsesTerminateInstanceInAutoScalingGroup {
    return new AutoScalingResponsesTerminateInstanceInAutoScalingGroup(this, this.__resources, input);
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

export class AutoScalingResponsesBatchDeleteScheduledAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingBatchDeleteScheduledActionType) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          ScheduledActionNames: this.__input.scheduledActionNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteScheduledAction.FailedScheduledActions', props);
    return resource.getResponseField('FailedScheduledActions') as unknown as shapes.AutoScalingFailedScheduledUpdateGroupActionRequest[];
  }

}

export class AutoScalingResponsesBatchPutScheduledUpdateGroupAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingBatchPutScheduledUpdateGroupActionType) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          ScheduledUpdateGroupActions: this.__input.scheduledUpdateGroupActions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchPutScheduledUpdateGroupAction.FailedScheduledUpdateGroupActions', props);
    return resource.getResponseField('FailedScheduledUpdateGroupActions') as unknown as shapes.AutoScalingFailedScheduledUpdateGroupActionRequest[];
  }

}

export class AutoScalingResponsesCancelInstanceRefresh {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingCancelInstanceRefreshType) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelInstanceRefresh.InstanceRefreshId', props);
    return resource.getResponseField('InstanceRefreshId') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeAccountLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountLimits.MaxNumberOfAutoScalingGroups', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountLimits.MaxNumberOfLaunchConfigurations', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountLimits.NumberOfAutoScalingGroups', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountLimits.NumberOfLaunchConfigurations', props);
    return resource.getResponseField('NumberOfLaunchConfigurations') as unknown as number;
  }

}

export class AutoScalingResponsesDescribeAdjustmentTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAdjustmentTypes.AdjustmentTypes', props);
    return resource.getResponseField('AdjustmentTypes') as unknown as shapes.AutoScalingAdjustmentType[];
  }

}

export class AutoScalingResponsesDescribeAutoScalingGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingAutoScalingGroupNamesType) {
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
          AutoScalingGroupNames: this.__input.autoScalingGroupNames,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingGroups.AutoScalingGroups', props);
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
          AutoScalingGroupNames: this.__input.autoScalingGroupNames,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeAutoScalingInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribeAutoScalingInstancesType) {
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
          InstanceIds: this.__input.instanceIds,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingInstances.AutoScalingInstances', props);
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
          InstanceIds: this.__input.instanceIds,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeAutoScalingNotificationTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingNotificationTypes.AutoScalingNotificationTypes', props);
    return resource.getResponseField('AutoScalingNotificationTypes') as unknown as string[];
  }

}

export class AutoScalingResponsesDescribeInstanceRefreshes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribeInstanceRefreshesType) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          InstanceRefreshIds: this.__input.instanceRefreshIds,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceRefreshes.InstanceRefreshes', props);
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          InstanceRefreshIds: this.__input.instanceRefreshIds,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceRefreshes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeLaunchConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingLaunchConfigurationNamesType) {
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
          LaunchConfigurationNames: this.__input.launchConfigurationNames,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLaunchConfigurations.LaunchConfigurations', props);
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
          LaunchConfigurationNames: this.__input.launchConfigurationNames,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLaunchConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeLifecycleHookTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLifecycleHookTypes.LifecycleHookTypes', props);
    return resource.getResponseField('LifecycleHookTypes') as unknown as string[];
  }

}

export class AutoScalingResponsesDescribeLifecycleHooks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribeLifecycleHooksType) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          LifecycleHookNames: this.__input.lifecycleHookNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLifecycleHooks.LifecycleHooks', props);
    return resource.getResponseField('LifecycleHooks') as unknown as shapes.AutoScalingLifecycleHook[];
  }

}

export class AutoScalingResponsesDescribeLoadBalancerTargetGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribeLoadBalancerTargetGroupsRequest) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoadBalancerTargetGroups.LoadBalancerTargetGroups', props);
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoadBalancerTargetGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeLoadBalancers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribeLoadBalancersRequest) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoadBalancers.LoadBalancers', props);
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoadBalancers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeMetricCollectionTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricCollectionTypes.Metrics', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricCollectionTypes.Granularities', props);
    return resource.getResponseField('Granularities') as unknown as shapes.AutoScalingMetricGranularityType[];
  }

}

export class AutoScalingResponsesDescribeNotificationConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribeNotificationConfigurationsType) {
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
          AutoScalingGroupNames: this.__input.autoScalingGroupNames,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationConfigurations.NotificationConfigurations', props);
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
          AutoScalingGroupNames: this.__input.autoScalingGroupNames,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotificationConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribePolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribePoliciesType) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          PolicyNames: this.__input.policyNames,
          PolicyTypes: this.__input.policyTypes,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePolicies.ScalingPolicies', props);
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          PolicyNames: this.__input.policyNames,
          PolicyTypes: this.__input.policyTypes,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeScalingActivities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribeScalingActivitiesType) {
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
          ActivityIds: this.__input.activityIds,
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingActivities.Activities', props);
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
          ActivityIds: this.__input.activityIds,
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          MaxRecords: this.__input.maxRecords,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingActivities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeScalingProcessTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingProcessTypes.Processes', props);
    return resource.getResponseField('Processes') as unknown as shapes.AutoScalingProcessType[];
  }

}

export class AutoScalingResponsesDescribeScheduledActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribeScheduledActionsType) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          ScheduledActionNames: this.__input.scheduledActionNames,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledActions.ScheduledUpdateGroupActions', props);
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          ScheduledActionNames: this.__input.scheduledActionNames,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledActions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDescribeTagsType) {
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
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTags.Tags', props);
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
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingResponsesDescribeTerminationPolicyTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTerminationPolicyTypes.TerminationPolicyTypes', props);
    return resource.getResponseField('TerminationPolicyTypes') as unknown as string[];
  }

}

export class AutoScalingResponsesDetachInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingDetachInstancesQuery) {
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
          InstanceIds: this.__input.instanceIds,
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachInstances.Activities', props);
    return resource.getResponseField('Activities') as unknown as shapes.AutoScalingActivity[];
  }

}

export class AutoScalingResponsesEnterStandby {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingEnterStandbyQuery) {
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
          InstanceIds: this.__input.instanceIds,
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnterStandby.Activities', props);
    return resource.getResponseField('Activities') as unknown as shapes.AutoScalingActivity[];
  }

}

export class AutoScalingResponsesExitStandby {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingExitStandbyQuery) {
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
          InstanceIds: this.__input.instanceIds,
          AutoScalingGroupName: this.__input.autoScalingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExitStandby.Activities', props);
    return resource.getResponseField('Activities') as unknown as shapes.AutoScalingActivity[];
  }

}

export class AutoScalingResponsesPutScalingPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingPutScalingPolicyType) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          PolicyName: this.__input.policyName,
          PolicyType: this.__input.policyType,
          AdjustmentType: this.__input.adjustmentType,
          MinAdjustmentStep: this.__input.minAdjustmentStep,
          MinAdjustmentMagnitude: this.__input.minAdjustmentMagnitude,
          ScalingAdjustment: this.__input.scalingAdjustment,
          Cooldown: this.__input.cooldown,
          MetricAggregationType: this.__input.metricAggregationType,
          StepAdjustments: this.__input.stepAdjustments,
          EstimatedInstanceWarmup: this.__input.estimatedInstanceWarmup,
          TargetTrackingConfiguration: {
            PredefinedMetricSpecification: {
              PredefinedMetricType: this.__input.targetTrackingConfiguration?.predefinedMetricSpecification?.predefinedMetricType,
              ResourceLabel: this.__input.targetTrackingConfiguration?.predefinedMetricSpecification?.resourceLabel,
            },
            CustomizedMetricSpecification: {
              MetricName: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.metricName,
              Namespace: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.namespace,
              Dimensions: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.dimensions,
              Statistic: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.statistic,
              Unit: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.unit,
            },
            TargetValue: this.__input.targetTrackingConfiguration?.targetValue,
            DisableScaleIn: this.__input.targetTrackingConfiguration?.disableScaleIn,
          },
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutScalingPolicy.PolicyARN', props);
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          PolicyName: this.__input.policyName,
          PolicyType: this.__input.policyType,
          AdjustmentType: this.__input.adjustmentType,
          MinAdjustmentStep: this.__input.minAdjustmentStep,
          MinAdjustmentMagnitude: this.__input.minAdjustmentMagnitude,
          ScalingAdjustment: this.__input.scalingAdjustment,
          Cooldown: this.__input.cooldown,
          MetricAggregationType: this.__input.metricAggregationType,
          StepAdjustments: this.__input.stepAdjustments,
          EstimatedInstanceWarmup: this.__input.estimatedInstanceWarmup,
          TargetTrackingConfiguration: {
            PredefinedMetricSpecification: {
              PredefinedMetricType: this.__input.targetTrackingConfiguration?.predefinedMetricSpecification?.predefinedMetricType,
              ResourceLabel: this.__input.targetTrackingConfiguration?.predefinedMetricSpecification?.resourceLabel,
            },
            CustomizedMetricSpecification: {
              MetricName: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.metricName,
              Namespace: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.namespace,
              Dimensions: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.dimensions,
              Statistic: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.statistic,
              Unit: this.__input.targetTrackingConfiguration?.customizedMetricSpecification?.unit,
            },
            TargetValue: this.__input.targetTrackingConfiguration?.targetValue,
            DisableScaleIn: this.__input.targetTrackingConfiguration?.disableScaleIn,
          },
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutScalingPolicy.Alarms', props);
    return resource.getResponseField('Alarms') as unknown as shapes.AutoScalingAlarm[];
  }

}

export class AutoScalingResponsesStartInstanceRefresh {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingStartInstanceRefreshType) {
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
          AutoScalingGroupName: this.__input.autoScalingGroupName,
          Strategy: this.__input.strategy,
          Preferences: {
            MinHealthyPercentage: this.__input.preferences?.minHealthyPercentage,
            InstanceWarmup: this.__input.preferences?.instanceWarmup,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartInstanceRefresh.InstanceRefreshId', props);
    return resource.getResponseField('InstanceRefreshId') as unknown as string;
  }

}

export class AutoScalingResponsesTerminateInstanceInAutoScalingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingTerminateInstanceInAutoScalingGroupType) {
  }

  public get activity(): AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity {
    return new AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity(this.__scope, this.__resources, this.__input);
  }

}

export class AutoScalingResponsesTerminateInstanceInAutoScalingGroupActivity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingTerminateInstanceInAutoScalingGroupType) {
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.ActivityId', props);
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.AutoScalingGroupName', props);
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.Description', props);
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.Cause', props);
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.StartTime', props);
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.EndTime', props);
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.StatusCode', props);
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.StatusMessage', props);
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.Progress', props);
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
          InstanceId: this.__input.instanceId,
          ShouldDecrementDesiredCapacity: this.__input.shouldDecrementDesiredCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateInstanceInAutoScalingGroup.Activity.Details', props);
    return resource.getResponseField('Activity.Details') as unknown as string;
  }

}

