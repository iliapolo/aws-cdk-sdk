/**
 * @schema AutoScalingAttachInstancesQuery
 */
export interface AutoScalingAttachInstancesQuery {
  /**
   * @schema AutoScalingAttachInstancesQuery#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema AutoScalingAttachInstancesQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

}

/**
 * @schema AutoScalingAttachLoadBalancerTargetGroupsType
 */
export interface AutoScalingAttachLoadBalancerTargetGroupsType {
  /**
   * @schema AutoScalingAttachLoadBalancerTargetGroupsType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingAttachLoadBalancerTargetGroupsType#TargetGroupARNs
   */
  readonly targetGroupArNs: string[];

}

/**
 * @schema AutoScalingAttachLoadBalancerTargetGroupsResultType
 */
export interface AutoScalingAttachLoadBalancerTargetGroupsResultType {
}

/**
 * @schema AutoScalingAttachLoadBalancersType
 */
export interface AutoScalingAttachLoadBalancersType {
  /**
   * @schema AutoScalingAttachLoadBalancersType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingAttachLoadBalancersType#LoadBalancerNames
   */
  readonly loadBalancerNames: string[];

}

/**
 * @schema AutoScalingAttachLoadBalancersResultType
 */
export interface AutoScalingAttachLoadBalancersResultType {
}

/**
 * @schema AutoScalingBatchDeleteScheduledActionType
 */
export interface AutoScalingBatchDeleteScheduledActionType {
  /**
   * @schema AutoScalingBatchDeleteScheduledActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingBatchDeleteScheduledActionType#ScheduledActionNames
   */
  readonly scheduledActionNames: string[];

}

/**
 * @schema AutoScalingBatchDeleteScheduledActionAnswer
 */
export interface AutoScalingBatchDeleteScheduledActionAnswer {
  /**
   * @schema AutoScalingBatchDeleteScheduledActionAnswer#FailedScheduledActions
   */
  readonly failedScheduledActions?: AutoScalingFailedScheduledUpdateGroupActionRequest[];

}

/**
 * @schema AutoScalingBatchPutScheduledUpdateGroupActionType
 */
export interface AutoScalingBatchPutScheduledUpdateGroupActionType {
  /**
   * @schema AutoScalingBatchPutScheduledUpdateGroupActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingBatchPutScheduledUpdateGroupActionType#ScheduledUpdateGroupActions
   */
  readonly scheduledUpdateGroupActions: AutoScalingScheduledUpdateGroupActionRequest[];

}

/**
 * @schema AutoScalingBatchPutScheduledUpdateGroupActionAnswer
 */
export interface AutoScalingBatchPutScheduledUpdateGroupActionAnswer {
  /**
   * @schema AutoScalingBatchPutScheduledUpdateGroupActionAnswer#FailedScheduledUpdateGroupActions
   */
  readonly failedScheduledUpdateGroupActions?: AutoScalingFailedScheduledUpdateGroupActionRequest[];

}

/**
 * @schema AutoScalingCancelInstanceRefreshType
 */
export interface AutoScalingCancelInstanceRefreshType {
  /**
   * @schema AutoScalingCancelInstanceRefreshType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

}

/**
 * @schema AutoScalingCancelInstanceRefreshAnswer
 */
export interface AutoScalingCancelInstanceRefreshAnswer {
  /**
   * @schema AutoScalingCancelInstanceRefreshAnswer#InstanceRefreshId
   */
  readonly instanceRefreshId?: string;

}

/**
 * @schema AutoScalingCompleteLifecycleActionType
 */
export interface AutoScalingCompleteLifecycleActionType {
  /**
   * @schema AutoScalingCompleteLifecycleActionType#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema AutoScalingCompleteLifecycleActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingCompleteLifecycleActionType#LifecycleActionToken
   */
  readonly lifecycleActionToken?: string;

  /**
   * @schema AutoScalingCompleteLifecycleActionType#LifecycleActionResult
   */
  readonly lifecycleActionResult: string;

  /**
   * @schema AutoScalingCompleteLifecycleActionType#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema AutoScalingCompleteLifecycleActionAnswer
 */
export interface AutoScalingCompleteLifecycleActionAnswer {
}

/**
 * @schema AutoScalingCreateAutoScalingGroupType
 */
export interface AutoScalingCreateAutoScalingGroupType {
  /**
   * @schema AutoScalingCreateAutoScalingGroupType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#LaunchTemplate
   */
  readonly launchTemplate?: AutoScalingLaunchTemplateSpecification;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#MixedInstancesPolicy
   */
  readonly mixedInstancesPolicy?: AutoScalingMixedInstancesPolicy;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#MinSize
   */
  readonly minSize: number;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#MaxSize
   */
  readonly maxSize: number;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#DesiredCapacity
   */
  readonly desiredCapacity?: number;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#DefaultCooldown
   */
  readonly defaultCooldown?: number;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#LoadBalancerNames
   */
  readonly loadBalancerNames?: string[];

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#TargetGroupARNs
   */
  readonly targetGroupArNs?: string[];

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#HealthCheckType
   */
  readonly healthCheckType?: string;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#HealthCheckGracePeriod
   */
  readonly healthCheckGracePeriod?: number;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#PlacementGroup
   */
  readonly placementGroup?: string;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#VPCZoneIdentifier
   */
  readonly vpcZoneIdentifier?: string;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#TerminationPolicies
   */
  readonly terminationPolicies?: string[];

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#NewInstancesProtectedFromScaleIn
   */
  readonly newInstancesProtectedFromScaleIn?: boolean;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#CapacityRebalance
   */
  readonly capacityRebalance?: boolean;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#LifecycleHookSpecificationList
   */
  readonly lifecycleHookSpecificationList?: AutoScalingLifecycleHookSpecification[];

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#Tags
   */
  readonly tags?: AutoScalingTag[];

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#ServiceLinkedRoleARN
   */
  readonly serviceLinkedRoleArn?: string;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#MaxInstanceLifetime
   */
  readonly maxInstanceLifetime?: number;

}

/**
 * @schema AutoScalingCreateLaunchConfigurationType
 */
export interface AutoScalingCreateLaunchConfigurationType {
  /**
   * @schema AutoScalingCreateLaunchConfigurationType#LaunchConfigurationName
   */
  readonly launchConfigurationName: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#ClassicLinkVPCId
   */
  readonly classicLinkVpcId?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#ClassicLinkVPCSecurityGroups
   */
  readonly classicLinkVpcSecurityGroups?: string[];

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#UserData
   */
  readonly userData?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: AutoScalingBlockDeviceMapping[];

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#InstanceMonitoring
   */
  readonly instanceMonitoring?: AutoScalingInstanceMonitoring;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#IamInstanceProfile
   */
  readonly iamInstanceProfile?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#PlacementTenancy
   */
  readonly placementTenancy?: string;

  /**
   * @schema AutoScalingCreateLaunchConfigurationType#MetadataOptions
   */
  readonly metadataOptions?: AutoScalingInstanceMetadataOptions;

}

/**
 * @schema AutoScalingCreateOrUpdateTagsType
 */
export interface AutoScalingCreateOrUpdateTagsType {
  /**
   * @schema AutoScalingCreateOrUpdateTagsType#Tags
   */
  readonly tags: AutoScalingTag[];

}

/**
 * @schema AutoScalingDeleteAutoScalingGroupType
 */
export interface AutoScalingDeleteAutoScalingGroupType {
  /**
   * @schema AutoScalingDeleteAutoScalingGroupType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDeleteAutoScalingGroupType#ForceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema AutoScalingLaunchConfigurationNameType
 */
export interface AutoScalingLaunchConfigurationNameType {
  /**
   * @schema AutoScalingLaunchConfigurationNameType#LaunchConfigurationName
   */
  readonly launchConfigurationName: string;

}

/**
 * @schema AutoScalingDeleteLifecycleHookType
 */
export interface AutoScalingDeleteLifecycleHookType {
  /**
   * @schema AutoScalingDeleteLifecycleHookType#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema AutoScalingDeleteLifecycleHookType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

}

/**
 * @schema AutoScalingDeleteLifecycleHookAnswer
 */
export interface AutoScalingDeleteLifecycleHookAnswer {
}

/**
 * @schema AutoScalingDeleteNotificationConfigurationType
 */
export interface AutoScalingDeleteNotificationConfigurationType {
  /**
   * @schema AutoScalingDeleteNotificationConfigurationType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDeleteNotificationConfigurationType#TopicARN
   */
  readonly topicArn: string;

}

/**
 * @schema AutoScalingDeletePolicyType
 */
export interface AutoScalingDeletePolicyType {
  /**
   * @schema AutoScalingDeletePolicyType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDeletePolicyType#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema AutoScalingDeleteScheduledActionType
 */
export interface AutoScalingDeleteScheduledActionType {
  /**
   * @schema AutoScalingDeleteScheduledActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDeleteScheduledActionType#ScheduledActionName
   */
  readonly scheduledActionName: string;

}

/**
 * @schema AutoScalingDeleteTagsType
 */
export interface AutoScalingDeleteTagsType {
  /**
   * @schema AutoScalingDeleteTagsType#Tags
   */
  readonly tags: AutoScalingTag[];

}

/**
 * @schema AutoScalingDescribeAccountLimitsAnswer
 */
export interface AutoScalingDescribeAccountLimitsAnswer {
  /**
   * @schema AutoScalingDescribeAccountLimitsAnswer#MaxNumberOfAutoScalingGroups
   */
  readonly maxNumberOfAutoScalingGroups?: number;

  /**
   * @schema AutoScalingDescribeAccountLimitsAnswer#MaxNumberOfLaunchConfigurations
   */
  readonly maxNumberOfLaunchConfigurations?: number;

  /**
   * @schema AutoScalingDescribeAccountLimitsAnswer#NumberOfAutoScalingGroups
   */
  readonly numberOfAutoScalingGroups?: number;

  /**
   * @schema AutoScalingDescribeAccountLimitsAnswer#NumberOfLaunchConfigurations
   */
  readonly numberOfLaunchConfigurations?: number;

}

/**
 * @schema AutoScalingDescribeAdjustmentTypesAnswer
 */
export interface AutoScalingDescribeAdjustmentTypesAnswer {
  /**
   * @schema AutoScalingDescribeAdjustmentTypesAnswer#AdjustmentTypes
   */
  readonly adjustmentTypes?: AutoScalingAdjustmentType[];

}

/**
 * @schema AutoScalingAutoScalingGroupNamesType
 */
export interface AutoScalingAutoScalingGroupNamesType {
  /**
   * @schema AutoScalingAutoScalingGroupNamesType#AutoScalingGroupNames
   */
  readonly autoScalingGroupNames?: string[];

  /**
   * @schema AutoScalingAutoScalingGroupNamesType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingAutoScalingGroupNamesType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingAutoScalingGroupsType
 */
export interface AutoScalingAutoScalingGroupsType {
  /**
   * @schema AutoScalingAutoScalingGroupsType#AutoScalingGroups
   */
  readonly autoScalingGroups: AutoScalingAutoScalingGroup[];

  /**
   * @schema AutoScalingAutoScalingGroupsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingDescribeAutoScalingInstancesType
 */
export interface AutoScalingDescribeAutoScalingInstancesType {
  /**
   * @schema AutoScalingDescribeAutoScalingInstancesType#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema AutoScalingDescribeAutoScalingInstancesType#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema AutoScalingDescribeAutoScalingInstancesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingAutoScalingInstancesType
 */
export interface AutoScalingAutoScalingInstancesType {
  /**
   * @schema AutoScalingAutoScalingInstancesType#AutoScalingInstances
   */
  readonly autoScalingInstances?: AutoScalingAutoScalingInstanceDetails[];

  /**
   * @schema AutoScalingAutoScalingInstancesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingDescribeAutoScalingNotificationTypesAnswer
 */
export interface AutoScalingDescribeAutoScalingNotificationTypesAnswer {
  /**
   * @schema AutoScalingDescribeAutoScalingNotificationTypesAnswer#AutoScalingNotificationTypes
   */
  readonly autoScalingNotificationTypes?: string[];

}

/**
 * @schema AutoScalingDescribeInstanceRefreshesType
 */
export interface AutoScalingDescribeInstanceRefreshesType {
  /**
   * @schema AutoScalingDescribeInstanceRefreshesType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDescribeInstanceRefreshesType#InstanceRefreshIds
   */
  readonly instanceRefreshIds?: string[];

  /**
   * @schema AutoScalingDescribeInstanceRefreshesType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingDescribeInstanceRefreshesType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingDescribeInstanceRefreshesAnswer
 */
export interface AutoScalingDescribeInstanceRefreshesAnswer {
  /**
   * @schema AutoScalingDescribeInstanceRefreshesAnswer#InstanceRefreshes
   */
  readonly instanceRefreshes?: AutoScalingInstanceRefresh[];

  /**
   * @schema AutoScalingDescribeInstanceRefreshesAnswer#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingLaunchConfigurationNamesType
 */
export interface AutoScalingLaunchConfigurationNamesType {
  /**
   * @schema AutoScalingLaunchConfigurationNamesType#LaunchConfigurationNames
   */
  readonly launchConfigurationNames?: string[];

  /**
   * @schema AutoScalingLaunchConfigurationNamesType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingLaunchConfigurationNamesType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingLaunchConfigurationsType
 */
export interface AutoScalingLaunchConfigurationsType {
  /**
   * @schema AutoScalingLaunchConfigurationsType#LaunchConfigurations
   */
  readonly launchConfigurations: AutoScalingLaunchConfiguration[];

  /**
   * @schema AutoScalingLaunchConfigurationsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingDescribeLifecycleHookTypesAnswer
 */
export interface AutoScalingDescribeLifecycleHookTypesAnswer {
  /**
   * @schema AutoScalingDescribeLifecycleHookTypesAnswer#LifecycleHookTypes
   */
  readonly lifecycleHookTypes?: string[];

}

/**
 * @schema AutoScalingDescribeLifecycleHooksType
 */
export interface AutoScalingDescribeLifecycleHooksType {
  /**
   * @schema AutoScalingDescribeLifecycleHooksType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDescribeLifecycleHooksType#LifecycleHookNames
   */
  readonly lifecycleHookNames?: string[];

}

/**
 * @schema AutoScalingDescribeLifecycleHooksAnswer
 */
export interface AutoScalingDescribeLifecycleHooksAnswer {
  /**
   * @schema AutoScalingDescribeLifecycleHooksAnswer#LifecycleHooks
   */
  readonly lifecycleHooks?: AutoScalingLifecycleHook[];

}

/**
 * @schema AutoScalingDescribeLoadBalancerTargetGroupsRequest
 */
export interface AutoScalingDescribeLoadBalancerTargetGroupsRequest {
  /**
   * @schema AutoScalingDescribeLoadBalancerTargetGroupsRequest#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDescribeLoadBalancerTargetGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingDescribeLoadBalancerTargetGroupsRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingDescribeLoadBalancerTargetGroupsResponse
 */
export interface AutoScalingDescribeLoadBalancerTargetGroupsResponse {
  /**
   * @schema AutoScalingDescribeLoadBalancerTargetGroupsResponse#LoadBalancerTargetGroups
   */
  readonly loadBalancerTargetGroups?: AutoScalingLoadBalancerTargetGroupState[];

  /**
   * @schema AutoScalingDescribeLoadBalancerTargetGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingDescribeLoadBalancersRequest
 */
export interface AutoScalingDescribeLoadBalancersRequest {
  /**
   * @schema AutoScalingDescribeLoadBalancersRequest#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDescribeLoadBalancersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingDescribeLoadBalancersRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingDescribeLoadBalancersResponse
 */
export interface AutoScalingDescribeLoadBalancersResponse {
  /**
   * @schema AutoScalingDescribeLoadBalancersResponse#LoadBalancers
   */
  readonly loadBalancers?: AutoScalingLoadBalancerState[];

  /**
   * @schema AutoScalingDescribeLoadBalancersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingDescribeMetricCollectionTypesAnswer
 */
export interface AutoScalingDescribeMetricCollectionTypesAnswer {
  /**
   * @schema AutoScalingDescribeMetricCollectionTypesAnswer#Metrics
   */
  readonly metrics?: AutoScalingMetricCollectionType[];

  /**
   * @schema AutoScalingDescribeMetricCollectionTypesAnswer#Granularities
   */
  readonly granularities?: AutoScalingMetricGranularityType[];

}

/**
 * @schema AutoScalingDescribeNotificationConfigurationsType
 */
export interface AutoScalingDescribeNotificationConfigurationsType {
  /**
   * @schema AutoScalingDescribeNotificationConfigurationsType#AutoScalingGroupNames
   */
  readonly autoScalingGroupNames?: string[];

  /**
   * @schema AutoScalingDescribeNotificationConfigurationsType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingDescribeNotificationConfigurationsType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingDescribeNotificationConfigurationsAnswer
 */
export interface AutoScalingDescribeNotificationConfigurationsAnswer {
  /**
   * @schema AutoScalingDescribeNotificationConfigurationsAnswer#NotificationConfigurations
   */
  readonly notificationConfigurations: AutoScalingNotificationConfiguration[];

  /**
   * @schema AutoScalingDescribeNotificationConfigurationsAnswer#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingDescribePoliciesType
 */
export interface AutoScalingDescribePoliciesType {
  /**
   * @schema AutoScalingDescribePoliciesType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDescribePoliciesType#PolicyNames
   */
  readonly policyNames?: string[];

  /**
   * @schema AutoScalingDescribePoliciesType#PolicyTypes
   */
  readonly policyTypes?: string[];

  /**
   * @schema AutoScalingDescribePoliciesType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingDescribePoliciesType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingPoliciesType
 */
export interface AutoScalingPoliciesType {
  /**
   * @schema AutoScalingPoliciesType#ScalingPolicies
   */
  readonly scalingPolicies?: AutoScalingScalingPolicy[];

  /**
   * @schema AutoScalingPoliciesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingDescribeScalingActivitiesType
 */
export interface AutoScalingDescribeScalingActivitiesType {
  /**
   * @schema AutoScalingDescribeScalingActivitiesType#ActivityIds
   */
  readonly activityIds?: string[];

  /**
   * @schema AutoScalingDescribeScalingActivitiesType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDescribeScalingActivitiesType#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema AutoScalingDescribeScalingActivitiesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingActivitiesType
 */
export interface AutoScalingActivitiesType {
  /**
   * @schema AutoScalingActivitiesType#Activities
   */
  readonly activities: AutoScalingActivity[];

  /**
   * @schema AutoScalingActivitiesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingProcessesType
 */
export interface AutoScalingProcessesType {
  /**
   * @schema AutoScalingProcessesType#Processes
   */
  readonly processes?: AutoScalingProcessType[];

}

/**
 * @schema AutoScalingDescribeScheduledActionsType
 */
export interface AutoScalingDescribeScheduledActionsType {
  /**
   * @schema AutoScalingDescribeScheduledActionsType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDescribeScheduledActionsType#ScheduledActionNames
   */
  readonly scheduledActionNames?: string[];

  /**
   * @schema AutoScalingDescribeScheduledActionsType#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AutoScalingDescribeScheduledActionsType#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AutoScalingDescribeScheduledActionsType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingDescribeScheduledActionsType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingScheduledActionsType
 */
export interface AutoScalingScheduledActionsType {
  /**
   * @schema AutoScalingScheduledActionsType#ScheduledUpdateGroupActions
   */
  readonly scheduledUpdateGroupActions?: AutoScalingScheduledUpdateGroupAction[];

  /**
   * @schema AutoScalingScheduledActionsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingDescribeTagsType
 */
export interface AutoScalingDescribeTagsType {
  /**
   * @schema AutoScalingDescribeTagsType#Filters
   */
  readonly filters?: AutoScalingFilter[];

  /**
   * @schema AutoScalingDescribeTagsType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingDescribeTagsType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingTagsType
 */
export interface AutoScalingTagsType {
  /**
   * @schema AutoScalingTagsType#Tags
   */
  readonly tags?: AutoScalingTagDescription[];

  /**
   * @schema AutoScalingTagsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingDescribeTerminationPolicyTypesAnswer
 */
export interface AutoScalingDescribeTerminationPolicyTypesAnswer {
  /**
   * @schema AutoScalingDescribeTerminationPolicyTypesAnswer#TerminationPolicyTypes
   */
  readonly terminationPolicyTypes?: string[];

}

/**
 * @schema AutoScalingDetachInstancesQuery
 */
export interface AutoScalingDetachInstancesQuery {
  /**
   * @schema AutoScalingDetachInstancesQuery#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema AutoScalingDetachInstancesQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDetachInstancesQuery#ShouldDecrementDesiredCapacity
   */
  readonly shouldDecrementDesiredCapacity: boolean;

}

/**
 * @schema AutoScalingDetachInstancesAnswer
 */
export interface AutoScalingDetachInstancesAnswer {
  /**
   * @schema AutoScalingDetachInstancesAnswer#Activities
   */
  readonly activities?: AutoScalingActivity[];

}

/**
 * @schema AutoScalingDetachLoadBalancerTargetGroupsType
 */
export interface AutoScalingDetachLoadBalancerTargetGroupsType {
  /**
   * @schema AutoScalingDetachLoadBalancerTargetGroupsType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDetachLoadBalancerTargetGroupsType#TargetGroupARNs
   */
  readonly targetGroupArNs: string[];

}

/**
 * @schema AutoScalingDetachLoadBalancerTargetGroupsResultType
 */
export interface AutoScalingDetachLoadBalancerTargetGroupsResultType {
}

/**
 * @schema AutoScalingDetachLoadBalancersType
 */
export interface AutoScalingDetachLoadBalancersType {
  /**
   * @schema AutoScalingDetachLoadBalancersType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDetachLoadBalancersType#LoadBalancerNames
   */
  readonly loadBalancerNames: string[];

}

/**
 * @schema AutoScalingDetachLoadBalancersResultType
 */
export interface AutoScalingDetachLoadBalancersResultType {
}

/**
 * @schema AutoScalingDisableMetricsCollectionQuery
 */
export interface AutoScalingDisableMetricsCollectionQuery {
  /**
   * @schema AutoScalingDisableMetricsCollectionQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingDisableMetricsCollectionQuery#Metrics
   */
  readonly metrics?: string[];

}

/**
 * @schema AutoScalingEnableMetricsCollectionQuery
 */
export interface AutoScalingEnableMetricsCollectionQuery {
  /**
   * @schema AutoScalingEnableMetricsCollectionQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingEnableMetricsCollectionQuery#Metrics
   */
  readonly metrics?: string[];

  /**
   * @schema AutoScalingEnableMetricsCollectionQuery#Granularity
   */
  readonly granularity: string;

}

/**
 * @schema AutoScalingEnterStandbyQuery
 */
export interface AutoScalingEnterStandbyQuery {
  /**
   * @schema AutoScalingEnterStandbyQuery#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema AutoScalingEnterStandbyQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingEnterStandbyQuery#ShouldDecrementDesiredCapacity
   */
  readonly shouldDecrementDesiredCapacity: boolean;

}

/**
 * @schema AutoScalingEnterStandbyAnswer
 */
export interface AutoScalingEnterStandbyAnswer {
  /**
   * @schema AutoScalingEnterStandbyAnswer#Activities
   */
  readonly activities?: AutoScalingActivity[];

}

/**
 * @schema AutoScalingExecutePolicyType
 */
export interface AutoScalingExecutePolicyType {
  /**
   * @schema AutoScalingExecutePolicyType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingExecutePolicyType#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema AutoScalingExecutePolicyType#HonorCooldown
   */
  readonly honorCooldown?: boolean;

  /**
   * @schema AutoScalingExecutePolicyType#MetricValue
   */
  readonly metricValue?: number;

  /**
   * @schema AutoScalingExecutePolicyType#BreachThreshold
   */
  readonly breachThreshold?: number;

}

/**
 * @schema AutoScalingExitStandbyQuery
 */
export interface AutoScalingExitStandbyQuery {
  /**
   * @schema AutoScalingExitStandbyQuery#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema AutoScalingExitStandbyQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

}

/**
 * @schema AutoScalingExitStandbyAnswer
 */
export interface AutoScalingExitStandbyAnswer {
  /**
   * @schema AutoScalingExitStandbyAnswer#Activities
   */
  readonly activities?: AutoScalingActivity[];

}

/**
 * @schema AutoScalingPutLifecycleHookType
 */
export interface AutoScalingPutLifecycleHookType {
  /**
   * @schema AutoScalingPutLifecycleHookType#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema AutoScalingPutLifecycleHookType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingPutLifecycleHookType#LifecycleTransition
   */
  readonly lifecycleTransition?: string;

  /**
   * @schema AutoScalingPutLifecycleHookType#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema AutoScalingPutLifecycleHookType#NotificationTargetARN
   */
  readonly notificationTargetArn?: string;

  /**
   * @schema AutoScalingPutLifecycleHookType#NotificationMetadata
   */
  readonly notificationMetadata?: string;

  /**
   * @schema AutoScalingPutLifecycleHookType#HeartbeatTimeout
   */
  readonly heartbeatTimeout?: number;

  /**
   * @schema AutoScalingPutLifecycleHookType#DefaultResult
   */
  readonly defaultResult?: string;

}

/**
 * @schema AutoScalingPutLifecycleHookAnswer
 */
export interface AutoScalingPutLifecycleHookAnswer {
}

/**
 * @schema AutoScalingPutNotificationConfigurationType
 */
export interface AutoScalingPutNotificationConfigurationType {
  /**
   * @schema AutoScalingPutNotificationConfigurationType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingPutNotificationConfigurationType#TopicARN
   */
  readonly topicArn: string;

  /**
   * @schema AutoScalingPutNotificationConfigurationType#NotificationTypes
   */
  readonly notificationTypes: string[];

}

/**
 * @schema AutoScalingPutScalingPolicyType
 */
export interface AutoScalingPutScalingPolicyType {
  /**
   * @schema AutoScalingPutScalingPolicyType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingPutScalingPolicyType#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema AutoScalingPutScalingPolicyType#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema AutoScalingPutScalingPolicyType#AdjustmentType
   */
  readonly adjustmentType?: string;

  /**
   * @schema AutoScalingPutScalingPolicyType#MinAdjustmentStep
   */
  readonly minAdjustmentStep?: number;

  /**
   * @schema AutoScalingPutScalingPolicyType#MinAdjustmentMagnitude
   */
  readonly minAdjustmentMagnitude?: number;

  /**
   * @schema AutoScalingPutScalingPolicyType#ScalingAdjustment
   */
  readonly scalingAdjustment?: number;

  /**
   * @schema AutoScalingPutScalingPolicyType#Cooldown
   */
  readonly cooldown?: number;

  /**
   * @schema AutoScalingPutScalingPolicyType#MetricAggregationType
   */
  readonly metricAggregationType?: string;

  /**
   * @schema AutoScalingPutScalingPolicyType#StepAdjustments
   */
  readonly stepAdjustments?: AutoScalingStepAdjustment[];

  /**
   * @schema AutoScalingPutScalingPolicyType#EstimatedInstanceWarmup
   */
  readonly estimatedInstanceWarmup?: number;

  /**
   * @schema AutoScalingPutScalingPolicyType#TargetTrackingConfiguration
   */
  readonly targetTrackingConfiguration?: AutoScalingTargetTrackingConfiguration;

  /**
   * @schema AutoScalingPutScalingPolicyType#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AutoScalingPolicyArnType
 */
export interface AutoScalingPolicyArnType {
  /**
   * @schema AutoScalingPolicyArnType#PolicyARN
   */
  readonly policyArn?: string;

  /**
   * @schema AutoScalingPolicyArnType#Alarms
   */
  readonly alarms?: AutoScalingAlarm[];

}

/**
 * @schema AutoScalingPutScheduledUpdateGroupActionType
 */
export interface AutoScalingPutScheduledUpdateGroupActionType {
  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#Time
   */
  readonly time?: string;

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#Recurrence
   */
  readonly recurrence?: string;

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#DesiredCapacity
   */
  readonly desiredCapacity?: number;

}

/**
 * @schema AutoScalingRecordLifecycleActionHeartbeatType
 */
export interface AutoScalingRecordLifecycleActionHeartbeatType {
  /**
   * @schema AutoScalingRecordLifecycleActionHeartbeatType#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema AutoScalingRecordLifecycleActionHeartbeatType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingRecordLifecycleActionHeartbeatType#LifecycleActionToken
   */
  readonly lifecycleActionToken?: string;

  /**
   * @schema AutoScalingRecordLifecycleActionHeartbeatType#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema AutoScalingRecordLifecycleActionHeartbeatAnswer
 */
export interface AutoScalingRecordLifecycleActionHeartbeatAnswer {
}

/**
 * @schema AutoScalingScalingProcessQuery
 */
export interface AutoScalingScalingProcessQuery {
  /**
   * @schema AutoScalingScalingProcessQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingScalingProcessQuery#ScalingProcesses
   */
  readonly scalingProcesses?: string[];

}

/**
 * @schema AutoScalingSetDesiredCapacityType
 */
export interface AutoScalingSetDesiredCapacityType {
  /**
   * @schema AutoScalingSetDesiredCapacityType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingSetDesiredCapacityType#DesiredCapacity
   */
  readonly desiredCapacity: number;

  /**
   * @schema AutoScalingSetDesiredCapacityType#HonorCooldown
   */
  readonly honorCooldown?: boolean;

}

/**
 * @schema AutoScalingSetInstanceHealthQuery
 */
export interface AutoScalingSetInstanceHealthQuery {
  /**
   * @schema AutoScalingSetInstanceHealthQuery#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AutoScalingSetInstanceHealthQuery#HealthStatus
   */
  readonly healthStatus: string;

  /**
   * @schema AutoScalingSetInstanceHealthQuery#ShouldRespectGracePeriod
   */
  readonly shouldRespectGracePeriod?: boolean;

}

/**
 * @schema AutoScalingSetInstanceProtectionQuery
 */
export interface AutoScalingSetInstanceProtectionQuery {
  /**
   * @schema AutoScalingSetInstanceProtectionQuery#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema AutoScalingSetInstanceProtectionQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingSetInstanceProtectionQuery#ProtectedFromScaleIn
   */
  readonly protectedFromScaleIn: boolean;

}

/**
 * @schema AutoScalingSetInstanceProtectionAnswer
 */
export interface AutoScalingSetInstanceProtectionAnswer {
}

/**
 * @schema AutoScalingStartInstanceRefreshType
 */
export interface AutoScalingStartInstanceRefreshType {
  /**
   * @schema AutoScalingStartInstanceRefreshType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingStartInstanceRefreshType#Strategy
   */
  readonly strategy?: string;

  /**
   * @schema AutoScalingStartInstanceRefreshType#Preferences
   */
  readonly preferences?: AutoScalingRefreshPreferences;

}

/**
 * @schema AutoScalingStartInstanceRefreshAnswer
 */
export interface AutoScalingStartInstanceRefreshAnswer {
  /**
   * @schema AutoScalingStartInstanceRefreshAnswer#InstanceRefreshId
   */
  readonly instanceRefreshId?: string;

}

/**
 * @schema AutoScalingTerminateInstanceInAutoScalingGroupType
 */
export interface AutoScalingTerminateInstanceInAutoScalingGroupType {
  /**
   * @schema AutoScalingTerminateInstanceInAutoScalingGroupType#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AutoScalingTerminateInstanceInAutoScalingGroupType#ShouldDecrementDesiredCapacity
   */
  readonly shouldDecrementDesiredCapacity: boolean;

}

/**
 * @schema AutoScalingActivityType
 */
export interface AutoScalingActivityType {
  /**
   * @schema AutoScalingActivityType#Activity
   */
  readonly activity?: AutoScalingActivity;

}

/**
 * @schema AutoScalingUpdateAutoScalingGroupType
 */
export interface AutoScalingUpdateAutoScalingGroupType {
  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#LaunchTemplate
   */
  readonly launchTemplate?: AutoScalingLaunchTemplateSpecification;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#MixedInstancesPolicy
   */
  readonly mixedInstancesPolicy?: AutoScalingMixedInstancesPolicy;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#DesiredCapacity
   */
  readonly desiredCapacity?: number;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#DefaultCooldown
   */
  readonly defaultCooldown?: number;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#HealthCheckType
   */
  readonly healthCheckType?: string;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#HealthCheckGracePeriod
   */
  readonly healthCheckGracePeriod?: number;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#PlacementGroup
   */
  readonly placementGroup?: string;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#VPCZoneIdentifier
   */
  readonly vpcZoneIdentifier?: string;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#TerminationPolicies
   */
  readonly terminationPolicies?: string[];

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#NewInstancesProtectedFromScaleIn
   */
  readonly newInstancesProtectedFromScaleIn?: boolean;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#ServiceLinkedRoleARN
   */
  readonly serviceLinkedRoleArn?: string;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#MaxInstanceLifetime
   */
  readonly maxInstanceLifetime?: number;

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#CapacityRebalance
   */
  readonly capacityRebalance?: boolean;

}

/**
 * @schema AutoScalingFailedScheduledUpdateGroupActionRequest
 */
export interface AutoScalingFailedScheduledUpdateGroupActionRequest {
  /**
   * @schema AutoScalingFailedScheduledUpdateGroupActionRequest#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema AutoScalingFailedScheduledUpdateGroupActionRequest#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AutoScalingFailedScheduledUpdateGroupActionRequest#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema AutoScalingScheduledUpdateGroupActionRequest
 */
export interface AutoScalingScheduledUpdateGroupActionRequest {
  /**
   * @schema AutoScalingScheduledUpdateGroupActionRequest#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupActionRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupActionRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupActionRequest#Recurrence
   */
  readonly recurrence?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupActionRequest#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema AutoScalingScheduledUpdateGroupActionRequest#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema AutoScalingScheduledUpdateGroupActionRequest#DesiredCapacity
   */
  readonly desiredCapacity?: number;

}

/**
 * @schema AutoScalingLaunchTemplateSpecification
 */
export interface AutoScalingLaunchTemplateSpecification {
  /**
   * @schema AutoScalingLaunchTemplateSpecification#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema AutoScalingLaunchTemplateSpecification#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema AutoScalingLaunchTemplateSpecification#Version
   */
  readonly version?: string;

}

/**
 * @schema AutoScalingMixedInstancesPolicy
 */
export interface AutoScalingMixedInstancesPolicy {
  /**
   * @schema AutoScalingMixedInstancesPolicy#LaunchTemplate
   */
  readonly launchTemplate?: AutoScalingLaunchTemplate;

  /**
   * @schema AutoScalingMixedInstancesPolicy#InstancesDistribution
   */
  readonly instancesDistribution?: AutoScalingInstancesDistribution;

}

/**
 * @schema AutoScalingLifecycleHookSpecification
 */
export interface AutoScalingLifecycleHookSpecification {
  /**
   * @schema AutoScalingLifecycleHookSpecification#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema AutoScalingLifecycleHookSpecification#LifecycleTransition
   */
  readonly lifecycleTransition: string;

  /**
   * @schema AutoScalingLifecycleHookSpecification#NotificationMetadata
   */
  readonly notificationMetadata?: string;

  /**
   * @schema AutoScalingLifecycleHookSpecification#HeartbeatTimeout
   */
  readonly heartbeatTimeout?: number;

  /**
   * @schema AutoScalingLifecycleHookSpecification#DefaultResult
   */
  readonly defaultResult?: string;

  /**
   * @schema AutoScalingLifecycleHookSpecification#NotificationTargetARN
   */
  readonly notificationTargetArn?: string;

  /**
   * @schema AutoScalingLifecycleHookSpecification#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema AutoScalingTag
 */
export interface AutoScalingTag {
  /**
   * @schema AutoScalingTag#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema AutoScalingTag#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema AutoScalingTag#Key
   */
  readonly key: string;

  /**
   * @schema AutoScalingTag#Value
   */
  readonly value?: string;

  /**
   * @schema AutoScalingTag#PropagateAtLaunch
   */
  readonly propagateAtLaunch?: boolean;

}

/**
 * @schema AutoScalingBlockDeviceMapping
 */
export interface AutoScalingBlockDeviceMapping {
  /**
   * @schema AutoScalingBlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema AutoScalingBlockDeviceMapping#DeviceName
   */
  readonly deviceName: string;

  /**
   * @schema AutoScalingBlockDeviceMapping#Ebs
   */
  readonly ebs?: AutoScalingEbs;

  /**
   * @schema AutoScalingBlockDeviceMapping#NoDevice
   */
  readonly noDevice?: boolean;

}

/**
 * @schema AutoScalingInstanceMonitoring
 */
export interface AutoScalingInstanceMonitoring {
  /**
   * @schema AutoScalingInstanceMonitoring#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AutoScalingInstanceMetadataOptions
 */
export interface AutoScalingInstanceMetadataOptions {
  /**
   * @schema AutoScalingInstanceMetadataOptions#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema AutoScalingInstanceMetadataOptions#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema AutoScalingInstanceMetadataOptions#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema AutoScalingAdjustmentType
 */
export interface AutoScalingAdjustmentType {
  /**
   * @schema AutoScalingAdjustmentType#AdjustmentType
   */
  readonly adjustmentType?: string;

}

/**
 * @schema AutoScalingAutoScalingGroup
 */
export interface AutoScalingAutoScalingGroup {
  /**
   * @schema AutoScalingAutoScalingGroup#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingAutoScalingGroup#AutoScalingGroupARN
   */
  readonly autoScalingGroupArn?: string;

  /**
   * @schema AutoScalingAutoScalingGroup#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema AutoScalingAutoScalingGroup#LaunchTemplate
   */
  readonly launchTemplate?: AutoScalingLaunchTemplateSpecification;

  /**
   * @schema AutoScalingAutoScalingGroup#MixedInstancesPolicy
   */
  readonly mixedInstancesPolicy?: AutoScalingMixedInstancesPolicy;

  /**
   * @schema AutoScalingAutoScalingGroup#MinSize
   */
  readonly minSize: number;

  /**
   * @schema AutoScalingAutoScalingGroup#MaxSize
   */
  readonly maxSize: number;

  /**
   * @schema AutoScalingAutoScalingGroup#DesiredCapacity
   */
  readonly desiredCapacity: number;

  /**
   * @schema AutoScalingAutoScalingGroup#DefaultCooldown
   */
  readonly defaultCooldown: number;

  /**
   * @schema AutoScalingAutoScalingGroup#AvailabilityZones
   */
  readonly availabilityZones: string[];

  /**
   * @schema AutoScalingAutoScalingGroup#LoadBalancerNames
   */
  readonly loadBalancerNames?: string[];

  /**
   * @schema AutoScalingAutoScalingGroup#TargetGroupARNs
   */
  readonly targetGroupArNs?: string[];

  /**
   * @schema AutoScalingAutoScalingGroup#HealthCheckType
   */
  readonly healthCheckType: string;

  /**
   * @schema AutoScalingAutoScalingGroup#HealthCheckGracePeriod
   */
  readonly healthCheckGracePeriod?: number;

  /**
   * @schema AutoScalingAutoScalingGroup#Instances
   */
  readonly instances?: AutoScalingInstance[];

  /**
   * @schema AutoScalingAutoScalingGroup#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema AutoScalingAutoScalingGroup#SuspendedProcesses
   */
  readonly suspendedProcesses?: AutoScalingSuspendedProcess[];

  /**
   * @schema AutoScalingAutoScalingGroup#PlacementGroup
   */
  readonly placementGroup?: string;

  /**
   * @schema AutoScalingAutoScalingGroup#VPCZoneIdentifier
   */
  readonly vpcZoneIdentifier?: string;

  /**
   * @schema AutoScalingAutoScalingGroup#EnabledMetrics
   */
  readonly enabledMetrics?: AutoScalingEnabledMetric[];

  /**
   * @schema AutoScalingAutoScalingGroup#Status
   */
  readonly status?: string;

  /**
   * @schema AutoScalingAutoScalingGroup#Tags
   */
  readonly tags?: AutoScalingTagDescription[];

  /**
   * @schema AutoScalingAutoScalingGroup#TerminationPolicies
   */
  readonly terminationPolicies?: string[];

  /**
   * @schema AutoScalingAutoScalingGroup#NewInstancesProtectedFromScaleIn
   */
  readonly newInstancesProtectedFromScaleIn?: boolean;

  /**
   * @schema AutoScalingAutoScalingGroup#ServiceLinkedRoleARN
   */
  readonly serviceLinkedRoleArn?: string;

  /**
   * @schema AutoScalingAutoScalingGroup#MaxInstanceLifetime
   */
  readonly maxInstanceLifetime?: number;

  /**
   * @schema AutoScalingAutoScalingGroup#CapacityRebalance
   */
  readonly capacityRebalance?: boolean;

}

/**
 * @schema AutoScalingAutoScalingInstanceDetails
 */
export interface AutoScalingAutoScalingInstanceDetails {
  /**
   * @schema AutoScalingAutoScalingInstanceDetails#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#LifecycleState
   */
  readonly lifecycleState: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#HealthStatus
   */
  readonly healthStatus: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#LaunchTemplate
   */
  readonly launchTemplate?: AutoScalingLaunchTemplateSpecification;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#ProtectedFromScaleIn
   */
  readonly protectedFromScaleIn: boolean;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#WeightedCapacity
   */
  readonly weightedCapacity?: string;

}

/**
 * @schema AutoScalingInstanceRefresh
 */
export interface AutoScalingInstanceRefresh {
  /**
   * @schema AutoScalingInstanceRefresh#InstanceRefreshId
   */
  readonly instanceRefreshId?: string;

  /**
   * @schema AutoScalingInstanceRefresh#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingInstanceRefresh#Status
   */
  readonly status?: string;

  /**
   * @schema AutoScalingInstanceRefresh#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema AutoScalingInstanceRefresh#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AutoScalingInstanceRefresh#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AutoScalingInstanceRefresh#PercentageComplete
   */
  readonly percentageComplete?: number;

  /**
   * @schema AutoScalingInstanceRefresh#InstancesToUpdate
   */
  readonly instancesToUpdate?: number;

}

/**
 * @schema AutoScalingLaunchConfiguration
 */
export interface AutoScalingLaunchConfiguration {
  /**
   * @schema AutoScalingLaunchConfiguration#LaunchConfigurationName
   */
  readonly launchConfigurationName: string;

  /**
   * @schema AutoScalingLaunchConfiguration#LaunchConfigurationARN
   */
  readonly launchConfigurationArn?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#ImageId
   */
  readonly imageId: string;

  /**
   * @schema AutoScalingLaunchConfiguration#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema AutoScalingLaunchConfiguration#ClassicLinkVPCId
   */
  readonly classicLinkVpcId?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#ClassicLinkVPCSecurityGroups
   */
  readonly classicLinkVpcSecurityGroups?: string[];

  /**
   * @schema AutoScalingLaunchConfiguration#UserData
   */
  readonly userData?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema AutoScalingLaunchConfiguration#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: AutoScalingBlockDeviceMapping[];

  /**
   * @schema AutoScalingLaunchConfiguration#InstanceMonitoring
   */
  readonly instanceMonitoring?: AutoScalingInstanceMonitoring;

  /**
   * @schema AutoScalingLaunchConfiguration#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#IamInstanceProfile
   */
  readonly iamInstanceProfile?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema AutoScalingLaunchConfiguration#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema AutoScalingLaunchConfiguration#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema AutoScalingLaunchConfiguration#PlacementTenancy
   */
  readonly placementTenancy?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#MetadataOptions
   */
  readonly metadataOptions?: AutoScalingInstanceMetadataOptions;

}

/**
 * @schema AutoScalingLifecycleHook
 */
export interface AutoScalingLifecycleHook {
  /**
   * @schema AutoScalingLifecycleHook#LifecycleHookName
   */
  readonly lifecycleHookName?: string;

  /**
   * @schema AutoScalingLifecycleHook#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingLifecycleHook#LifecycleTransition
   */
  readonly lifecycleTransition?: string;

  /**
   * @schema AutoScalingLifecycleHook#NotificationTargetARN
   */
  readonly notificationTargetArn?: string;

  /**
   * @schema AutoScalingLifecycleHook#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema AutoScalingLifecycleHook#NotificationMetadata
   */
  readonly notificationMetadata?: string;

  /**
   * @schema AutoScalingLifecycleHook#HeartbeatTimeout
   */
  readonly heartbeatTimeout?: number;

  /**
   * @schema AutoScalingLifecycleHook#GlobalTimeout
   */
  readonly globalTimeout?: number;

  /**
   * @schema AutoScalingLifecycleHook#DefaultResult
   */
  readonly defaultResult?: string;

}

/**
 * @schema AutoScalingLoadBalancerTargetGroupState
 */
export interface AutoScalingLoadBalancerTargetGroupState {
  /**
   * @schema AutoScalingLoadBalancerTargetGroupState#LoadBalancerTargetGroupARN
   */
  readonly loadBalancerTargetGroupArn?: string;

  /**
   * @schema AutoScalingLoadBalancerTargetGroupState#State
   */
  readonly state?: string;

}

/**
 * @schema AutoScalingLoadBalancerState
 */
export interface AutoScalingLoadBalancerState {
  /**
   * @schema AutoScalingLoadBalancerState#LoadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema AutoScalingLoadBalancerState#State
   */
  readonly state?: string;

}

/**
 * @schema AutoScalingMetricCollectionType
 */
export interface AutoScalingMetricCollectionType {
  /**
   * @schema AutoScalingMetricCollectionType#Metric
   */
  readonly metric?: string;

}

/**
 * @schema AutoScalingMetricGranularityType
 */
export interface AutoScalingMetricGranularityType {
  /**
   * @schema AutoScalingMetricGranularityType#Granularity
   */
  readonly granularity?: string;

}

/**
 * @schema AutoScalingNotificationConfiguration
 */
export interface AutoScalingNotificationConfiguration {
  /**
   * @schema AutoScalingNotificationConfiguration#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingNotificationConfiguration#TopicARN
   */
  readonly topicArn?: string;

  /**
   * @schema AutoScalingNotificationConfiguration#NotificationType
   */
  readonly notificationType?: string;

}

/**
 * @schema AutoScalingScalingPolicy
 */
export interface AutoScalingScalingPolicy {
  /**
   * @schema AutoScalingScalingPolicy#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingScalingPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema AutoScalingScalingPolicy#PolicyARN
   */
  readonly policyArn?: string;

  /**
   * @schema AutoScalingScalingPolicy#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema AutoScalingScalingPolicy#AdjustmentType
   */
  readonly adjustmentType?: string;

  /**
   * @schema AutoScalingScalingPolicy#MinAdjustmentStep
   */
  readonly minAdjustmentStep?: number;

  /**
   * @schema AutoScalingScalingPolicy#MinAdjustmentMagnitude
   */
  readonly minAdjustmentMagnitude?: number;

  /**
   * @schema AutoScalingScalingPolicy#ScalingAdjustment
   */
  readonly scalingAdjustment?: number;

  /**
   * @schema AutoScalingScalingPolicy#Cooldown
   */
  readonly cooldown?: number;

  /**
   * @schema AutoScalingScalingPolicy#StepAdjustments
   */
  readonly stepAdjustments?: AutoScalingStepAdjustment[];

  /**
   * @schema AutoScalingScalingPolicy#MetricAggregationType
   */
  readonly metricAggregationType?: string;

  /**
   * @schema AutoScalingScalingPolicy#EstimatedInstanceWarmup
   */
  readonly estimatedInstanceWarmup?: number;

  /**
   * @schema AutoScalingScalingPolicy#Alarms
   */
  readonly alarms?: AutoScalingAlarm[];

  /**
   * @schema AutoScalingScalingPolicy#TargetTrackingConfiguration
   */
  readonly targetTrackingConfiguration?: AutoScalingTargetTrackingConfiguration;

  /**
   * @schema AutoScalingScalingPolicy#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AutoScalingActivity
 */
export interface AutoScalingActivity {
  /**
   * @schema AutoScalingActivity#ActivityId
   */
  readonly activityId: string;

  /**
   * @schema AutoScalingActivity#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingActivity#Description
   */
  readonly description?: string;

  /**
   * @schema AutoScalingActivity#Cause
   */
  readonly cause: string;

  /**
   * @schema AutoScalingActivity#StartTime
   */
  readonly startTime: string;

  /**
   * @schema AutoScalingActivity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AutoScalingActivity#StatusCode
   */
  readonly statusCode: string;

  /**
   * @schema AutoScalingActivity#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema AutoScalingActivity#Progress
   */
  readonly progress?: number;

  /**
   * @schema AutoScalingActivity#Details
   */
  readonly details?: string;

}

/**
 * @schema AutoScalingProcessType
 */
export interface AutoScalingProcessType {
  /**
   * @schema AutoScalingProcessType#ProcessName
   */
  readonly processName: string;

}

/**
 * @schema AutoScalingScheduledUpdateGroupAction
 */
export interface AutoScalingScheduledUpdateGroupAction {
  /**
   * @schema AutoScalingScheduledUpdateGroupAction#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#ScheduledActionARN
   */
  readonly scheduledActionArn?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#Time
   */
  readonly time?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#Recurrence
   */
  readonly recurrence?: string;

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#DesiredCapacity
   */
  readonly desiredCapacity?: number;

}

/**
 * @schema AutoScalingFilter
 */
export interface AutoScalingFilter {
  /**
   * @schema AutoScalingFilter#Name
   */
  readonly name?: string;

  /**
   * @schema AutoScalingFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema AutoScalingTagDescription
 */
export interface AutoScalingTagDescription {
  /**
   * @schema AutoScalingTagDescription#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema AutoScalingTagDescription#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema AutoScalingTagDescription#Key
   */
  readonly key?: string;

  /**
   * @schema AutoScalingTagDescription#Value
   */
  readonly value?: string;

  /**
   * @schema AutoScalingTagDescription#PropagateAtLaunch
   */
  readonly propagateAtLaunch?: boolean;

}

/**
 * @schema AutoScalingStepAdjustment
 */
export interface AutoScalingStepAdjustment {
  /**
   * @schema AutoScalingStepAdjustment#MetricIntervalLowerBound
   */
  readonly metricIntervalLowerBound?: number;

  /**
   * @schema AutoScalingStepAdjustment#MetricIntervalUpperBound
   */
  readonly metricIntervalUpperBound?: number;

  /**
   * @schema AutoScalingStepAdjustment#ScalingAdjustment
   */
  readonly scalingAdjustment: number;

}

/**
 * @schema AutoScalingTargetTrackingConfiguration
 */
export interface AutoScalingTargetTrackingConfiguration {
  /**
   * @schema AutoScalingTargetTrackingConfiguration#PredefinedMetricSpecification
   */
  readonly predefinedMetricSpecification?: AutoScalingPredefinedMetricSpecification;

  /**
   * @schema AutoScalingTargetTrackingConfiguration#CustomizedMetricSpecification
   */
  readonly customizedMetricSpecification?: AutoScalingCustomizedMetricSpecification;

  /**
   * @schema AutoScalingTargetTrackingConfiguration#TargetValue
   */
  readonly targetValue: number;

  /**
   * @schema AutoScalingTargetTrackingConfiguration#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

}

/**
 * @schema AutoScalingAlarm
 */
export interface AutoScalingAlarm {
  /**
   * @schema AutoScalingAlarm#AlarmName
   */
  readonly alarmName?: string;

  /**
   * @schema AutoScalingAlarm#AlarmARN
   */
  readonly alarmArn?: string;

}

/**
 * @schema AutoScalingRefreshPreferences
 */
export interface AutoScalingRefreshPreferences {
  /**
   * @schema AutoScalingRefreshPreferences#MinHealthyPercentage
   */
  readonly minHealthyPercentage?: number;

  /**
   * @schema AutoScalingRefreshPreferences#InstanceWarmup
   */
  readonly instanceWarmup?: number;

}

/**
 * @schema AutoScalingLaunchTemplate
 */
export interface AutoScalingLaunchTemplate {
  /**
   * @schema AutoScalingLaunchTemplate#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: AutoScalingLaunchTemplateSpecification;

  /**
   * @schema AutoScalingLaunchTemplate#Overrides
   */
  readonly overrides?: AutoScalingLaunchTemplateOverrides[];

}

/**
 * @schema AutoScalingInstancesDistribution
 */
export interface AutoScalingInstancesDistribution {
  /**
   * @schema AutoScalingInstancesDistribution#OnDemandAllocationStrategy
   */
  readonly onDemandAllocationStrategy?: string;

  /**
   * @schema AutoScalingInstancesDistribution#OnDemandBaseCapacity
   */
  readonly onDemandBaseCapacity?: number;

  /**
   * @schema AutoScalingInstancesDistribution#OnDemandPercentageAboveBaseCapacity
   */
  readonly onDemandPercentageAboveBaseCapacity?: number;

  /**
   * @schema AutoScalingInstancesDistribution#SpotAllocationStrategy
   */
  readonly spotAllocationStrategy?: string;

  /**
   * @schema AutoScalingInstancesDistribution#SpotInstancePools
   */
  readonly spotInstancePools?: number;

  /**
   * @schema AutoScalingInstancesDistribution#SpotMaxPrice
   */
  readonly spotMaxPrice?: string;

}

/**
 * @schema AutoScalingEbs
 */
export interface AutoScalingEbs {
  /**
   * @schema AutoScalingEbs#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema AutoScalingEbs#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema AutoScalingEbs#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema AutoScalingEbs#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema AutoScalingEbs#Iops
   */
  readonly iops?: number;

  /**
   * @schema AutoScalingEbs#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema AutoScalingInstance
 */
export interface AutoScalingInstance {
  /**
   * @schema AutoScalingInstance#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AutoScalingInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AutoScalingInstance#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema AutoScalingInstance#LifecycleState
   */
  readonly lifecycleState: string;

  /**
   * @schema AutoScalingInstance#HealthStatus
   */
  readonly healthStatus: string;

  /**
   * @schema AutoScalingInstance#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema AutoScalingInstance#LaunchTemplate
   */
  readonly launchTemplate?: AutoScalingLaunchTemplateSpecification;

  /**
   * @schema AutoScalingInstance#ProtectedFromScaleIn
   */
  readonly protectedFromScaleIn: boolean;

  /**
   * @schema AutoScalingInstance#WeightedCapacity
   */
  readonly weightedCapacity?: string;

}

/**
 * @schema AutoScalingSuspendedProcess
 */
export interface AutoScalingSuspendedProcess {
  /**
   * @schema AutoScalingSuspendedProcess#ProcessName
   */
  readonly processName?: string;

  /**
   * @schema AutoScalingSuspendedProcess#SuspensionReason
   */
  readonly suspensionReason?: string;

}

/**
 * @schema AutoScalingEnabledMetric
 */
export interface AutoScalingEnabledMetric {
  /**
   * @schema AutoScalingEnabledMetric#Metric
   */
  readonly metric?: string;

  /**
   * @schema AutoScalingEnabledMetric#Granularity
   */
  readonly granularity?: string;

}

/**
 * @schema AutoScalingPredefinedMetricSpecification
 */
export interface AutoScalingPredefinedMetricSpecification {
  /**
   * @schema AutoScalingPredefinedMetricSpecification#PredefinedMetricType
   */
  readonly predefinedMetricType: string;

  /**
   * @schema AutoScalingPredefinedMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * @schema AutoScalingCustomizedMetricSpecification
 */
export interface AutoScalingCustomizedMetricSpecification {
  /**
   * @schema AutoScalingCustomizedMetricSpecification#MetricName
   */
  readonly metricName: string;

  /**
   * @schema AutoScalingCustomizedMetricSpecification#Namespace
   */
  readonly namespace: string;

  /**
   * @schema AutoScalingCustomizedMetricSpecification#Dimensions
   */
  readonly dimensions?: AutoScalingMetricDimension[];

  /**
   * @schema AutoScalingCustomizedMetricSpecification#Statistic
   */
  readonly statistic: string;

  /**
   * @schema AutoScalingCustomizedMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * @schema AutoScalingLaunchTemplateOverrides
 */
export interface AutoScalingLaunchTemplateOverrides {
  /**
   * @schema AutoScalingLaunchTemplateOverrides#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AutoScalingLaunchTemplateOverrides#WeightedCapacity
   */
  readonly weightedCapacity?: string;

  /**
   * @schema AutoScalingLaunchTemplateOverrides#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: AutoScalingLaunchTemplateSpecification;

}

/**
 * @schema AutoScalingMetricDimension
 */
export interface AutoScalingMetricDimension {
  /**
   * @schema AutoScalingMetricDimension#Name
   */
  readonly name: string;

  /**
   * @schema AutoScalingMetricDimension#Value
   */
  readonly value: string;

}
