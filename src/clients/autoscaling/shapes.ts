/**
 * @schema AttachInstancesQuery
 */
export interface AttachInstancesQuery {
  /**
   * @schema AttachInstancesQuery#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema AttachInstancesQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

}

/**
 * @schema AttachLoadBalancerTargetGroupsType
 */
export interface AttachLoadBalancerTargetGroupsType {
  /**
   * @schema AttachLoadBalancerTargetGroupsType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AttachLoadBalancerTargetGroupsType#TargetGroupARNs
   */
  readonly targetGroupArNs: string[];

}

/**
 * @schema AttachLoadBalancerTargetGroupsResultType
 */
export interface AttachLoadBalancerTargetGroupsResultType {
}

/**
 * @schema AttachLoadBalancersType
 */
export interface AttachLoadBalancersType {
  /**
   * @schema AttachLoadBalancersType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AttachLoadBalancersType#LoadBalancerNames
   */
  readonly loadBalancerNames: string[];

}

/**
 * @schema AttachLoadBalancersResultType
 */
export interface AttachLoadBalancersResultType {
}

/**
 * @schema BatchDeleteScheduledActionType
 */
export interface BatchDeleteScheduledActionType {
  /**
   * @schema BatchDeleteScheduledActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema BatchDeleteScheduledActionType#ScheduledActionNames
   */
  readonly scheduledActionNames: string[];

}

/**
 * @schema BatchDeleteScheduledActionAnswer
 */
export interface BatchDeleteScheduledActionAnswer {
  /**
   * @schema BatchDeleteScheduledActionAnswer#FailedScheduledActions
   */
  readonly failedScheduledActions?: FailedScheduledUpdateGroupActionRequest[];

}

/**
 * @schema BatchPutScheduledUpdateGroupActionType
 */
export interface BatchPutScheduledUpdateGroupActionType {
  /**
   * @schema BatchPutScheduledUpdateGroupActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema BatchPutScheduledUpdateGroupActionType#ScheduledUpdateGroupActions
   */
  readonly scheduledUpdateGroupActions: ScheduledUpdateGroupActionRequest[];

}

/**
 * @schema BatchPutScheduledUpdateGroupActionAnswer
 */
export interface BatchPutScheduledUpdateGroupActionAnswer {
  /**
   * @schema BatchPutScheduledUpdateGroupActionAnswer#FailedScheduledUpdateGroupActions
   */
  readonly failedScheduledUpdateGroupActions?: FailedScheduledUpdateGroupActionRequest[];

}

/**
 * @schema CancelInstanceRefreshType
 */
export interface CancelInstanceRefreshType {
  /**
   * @schema CancelInstanceRefreshType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

}

/**
 * @schema CancelInstanceRefreshAnswer
 */
export interface CancelInstanceRefreshAnswer {
  /**
   * @schema CancelInstanceRefreshAnswer#InstanceRefreshId
   */
  readonly instanceRefreshId?: string;

}

/**
 * @schema CompleteLifecycleActionType
 */
export interface CompleteLifecycleActionType {
  /**
   * @schema CompleteLifecycleActionType#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema CompleteLifecycleActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema CompleteLifecycleActionType#LifecycleActionToken
   */
  readonly lifecycleActionToken?: string;

  /**
   * @schema CompleteLifecycleActionType#LifecycleActionResult
   */
  readonly lifecycleActionResult: string;

  /**
   * @schema CompleteLifecycleActionType#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema CompleteLifecycleActionAnswer
 */
export interface CompleteLifecycleActionAnswer {
}

/**
 * @schema CreateAutoScalingGroupType
 */
export interface CreateAutoScalingGroupType {
  /**
   * @schema CreateAutoScalingGroupType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema CreateAutoScalingGroupType#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema CreateAutoScalingGroupType#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema CreateAutoScalingGroupType#MixedInstancesPolicy
   */
  readonly mixedInstancesPolicy?: MixedInstancesPolicy;

  /**
   * @schema CreateAutoScalingGroupType#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema CreateAutoScalingGroupType#MinSize
   */
  readonly minSize: number;

  /**
   * @schema CreateAutoScalingGroupType#MaxSize
   */
  readonly maxSize: number;

  /**
   * @schema CreateAutoScalingGroupType#DesiredCapacity
   */
  readonly desiredCapacity?: number;

  /**
   * @schema CreateAutoScalingGroupType#DefaultCooldown
   */
  readonly defaultCooldown?: number;

  /**
   * @schema CreateAutoScalingGroupType#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema CreateAutoScalingGroupType#LoadBalancerNames
   */
  readonly loadBalancerNames?: string[];

  /**
   * @schema CreateAutoScalingGroupType#TargetGroupARNs
   */
  readonly targetGroupArNs?: string[];

  /**
   * @schema CreateAutoScalingGroupType#HealthCheckType
   */
  readonly healthCheckType?: string;

  /**
   * @schema CreateAutoScalingGroupType#HealthCheckGracePeriod
   */
  readonly healthCheckGracePeriod?: number;

  /**
   * @schema CreateAutoScalingGroupType#PlacementGroup
   */
  readonly placementGroup?: string;

  /**
   * @schema CreateAutoScalingGroupType#VPCZoneIdentifier
   */
  readonly vpcZoneIdentifier?: string;

  /**
   * @schema CreateAutoScalingGroupType#TerminationPolicies
   */
  readonly terminationPolicies?: string[];

  /**
   * @schema CreateAutoScalingGroupType#NewInstancesProtectedFromScaleIn
   */
  readonly newInstancesProtectedFromScaleIn?: boolean;

  /**
   * @schema CreateAutoScalingGroupType#CapacityRebalance
   */
  readonly capacityRebalance?: boolean;

  /**
   * @schema CreateAutoScalingGroupType#LifecycleHookSpecificationList
   */
  readonly lifecycleHookSpecificationList?: LifecycleHookSpecification[];

  /**
   * @schema CreateAutoScalingGroupType#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateAutoScalingGroupType#ServiceLinkedRoleARN
   */
  readonly serviceLinkedRoleArn?: string;

  /**
   * @schema CreateAutoScalingGroupType#MaxInstanceLifetime
   */
  readonly maxInstanceLifetime?: number;

}

/**
 * @schema CreateLaunchConfigurationType
 */
export interface CreateLaunchConfigurationType {
  /**
   * @schema CreateLaunchConfigurationType#LaunchConfigurationName
   */
  readonly launchConfigurationName: string;

  /**
   * @schema CreateLaunchConfigurationType#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema CreateLaunchConfigurationType#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema CreateLaunchConfigurationType#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema CreateLaunchConfigurationType#ClassicLinkVPCId
   */
  readonly classicLinkVpcId?: string;

  /**
   * @schema CreateLaunchConfigurationType#ClassicLinkVPCSecurityGroups
   */
  readonly classicLinkVpcSecurityGroups?: string[];

  /**
   * @schema CreateLaunchConfigurationType#UserData
   */
  readonly userData?: string;

  /**
   * @schema CreateLaunchConfigurationType#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema CreateLaunchConfigurationType#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema CreateLaunchConfigurationType#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema CreateLaunchConfigurationType#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema CreateLaunchConfigurationType#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema CreateLaunchConfigurationType#InstanceMonitoring
   */
  readonly instanceMonitoring?: InstanceMonitoring;

  /**
   * @schema CreateLaunchConfigurationType#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema CreateLaunchConfigurationType#IamInstanceProfile
   */
  readonly iamInstanceProfile?: string;

  /**
   * @schema CreateLaunchConfigurationType#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema CreateLaunchConfigurationType#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema CreateLaunchConfigurationType#PlacementTenancy
   */
  readonly placementTenancy?: string;

  /**
   * @schema CreateLaunchConfigurationType#MetadataOptions
   */
  readonly metadataOptions?: InstanceMetadataOptions;

}

/**
 * @schema CreateOrUpdateTagsType
 */
export interface CreateOrUpdateTagsType {
  /**
   * @schema CreateOrUpdateTagsType#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema DeleteAutoScalingGroupType
 */
export interface DeleteAutoScalingGroupType {
  /**
   * @schema DeleteAutoScalingGroupType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DeleteAutoScalingGroupType#ForceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema LaunchConfigurationNameType
 */
export interface LaunchConfigurationNameType {
  /**
   * @schema LaunchConfigurationNameType#LaunchConfigurationName
   */
  readonly launchConfigurationName: string;

}

/**
 * @schema DeleteLifecycleHookType
 */
export interface DeleteLifecycleHookType {
  /**
   * @schema DeleteLifecycleHookType#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema DeleteLifecycleHookType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

}

/**
 * @schema DeleteLifecycleHookAnswer
 */
export interface DeleteLifecycleHookAnswer {
}

/**
 * @schema DeleteNotificationConfigurationType
 */
export interface DeleteNotificationConfigurationType {
  /**
   * @schema DeleteNotificationConfigurationType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DeleteNotificationConfigurationType#TopicARN
   */
  readonly topicArn: string;

}

/**
 * @schema DeletePolicyType
 */
export interface DeletePolicyType {
  /**
   * @schema DeletePolicyType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema DeletePolicyType#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema DeleteScheduledActionType
 */
export interface DeleteScheduledActionType {
  /**
   * @schema DeleteScheduledActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DeleteScheduledActionType#ScheduledActionName
   */
  readonly scheduledActionName: string;

}

/**
 * @schema DeleteTagsType
 */
export interface DeleteTagsType {
  /**
   * @schema DeleteTagsType#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema DescribeAccountLimitsAnswer
 */
export interface DescribeAccountLimitsAnswer {
  /**
   * @schema DescribeAccountLimitsAnswer#MaxNumberOfAutoScalingGroups
   */
  readonly maxNumberOfAutoScalingGroups?: number;

  /**
   * @schema DescribeAccountLimitsAnswer#MaxNumberOfLaunchConfigurations
   */
  readonly maxNumberOfLaunchConfigurations?: number;

  /**
   * @schema DescribeAccountLimitsAnswer#NumberOfAutoScalingGroups
   */
  readonly numberOfAutoScalingGroups?: number;

  /**
   * @schema DescribeAccountLimitsAnswer#NumberOfLaunchConfigurations
   */
  readonly numberOfLaunchConfigurations?: number;

}

/**
 * @schema DescribeAdjustmentTypesAnswer
 */
export interface DescribeAdjustmentTypesAnswer {
  /**
   * @schema DescribeAdjustmentTypesAnswer#AdjustmentTypes
   */
  readonly adjustmentTypes?: AdjustmentType[];

}

/**
 * @schema AutoScalingGroupNamesType
 */
export interface AutoScalingGroupNamesType {
  /**
   * @schema AutoScalingGroupNamesType#AutoScalingGroupNames
   */
  readonly autoScalingGroupNames?: string[];

  /**
   * @schema AutoScalingGroupNamesType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AutoScalingGroupNamesType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema AutoScalingGroupsType
 */
export interface AutoScalingGroupsType {
  /**
   * @schema AutoScalingGroupsType#AutoScalingGroups
   */
  readonly autoScalingGroups: AutoScalingGroup[];

  /**
   * @schema AutoScalingGroupsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAutoScalingInstancesType
 */
export interface DescribeAutoScalingInstancesType {
  /**
   * @schema DescribeAutoScalingInstancesType#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema DescribeAutoScalingInstancesType#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeAutoScalingInstancesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingInstancesType
 */
export interface AutoScalingInstancesType {
  /**
   * @schema AutoScalingInstancesType#AutoScalingInstances
   */
  readonly autoScalingInstances?: AutoScalingInstanceDetails[];

  /**
   * @schema AutoScalingInstancesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAutoScalingNotificationTypesAnswer
 */
export interface DescribeAutoScalingNotificationTypesAnswer {
  /**
   * @schema DescribeAutoScalingNotificationTypesAnswer#AutoScalingNotificationTypes
   */
  readonly autoScalingNotificationTypes?: string[];

}

/**
 * @schema DescribeInstanceRefreshesType
 */
export interface DescribeInstanceRefreshesType {
  /**
   * @schema DescribeInstanceRefreshesType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DescribeInstanceRefreshesType#InstanceRefreshIds
   */
  readonly instanceRefreshIds?: string[];

  /**
   * @schema DescribeInstanceRefreshesType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeInstanceRefreshesType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DescribeInstanceRefreshesAnswer
 */
export interface DescribeInstanceRefreshesAnswer {
  /**
   * @schema DescribeInstanceRefreshesAnswer#InstanceRefreshes
   */
  readonly instanceRefreshes?: InstanceRefresh[];

  /**
   * @schema DescribeInstanceRefreshesAnswer#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LaunchConfigurationNamesType
 */
export interface LaunchConfigurationNamesType {
  /**
   * @schema LaunchConfigurationNamesType#LaunchConfigurationNames
   */
  readonly launchConfigurationNames?: string[];

  /**
   * @schema LaunchConfigurationNamesType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LaunchConfigurationNamesType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema LaunchConfigurationsType
 */
export interface LaunchConfigurationsType {
  /**
   * @schema LaunchConfigurationsType#LaunchConfigurations
   */
  readonly launchConfigurations: LaunchConfiguration[];

  /**
   * @schema LaunchConfigurationsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeLifecycleHookTypesAnswer
 */
export interface DescribeLifecycleHookTypesAnswer {
  /**
   * @schema DescribeLifecycleHookTypesAnswer#LifecycleHookTypes
   */
  readonly lifecycleHookTypes?: string[];

}

/**
 * @schema DescribeLifecycleHooksType
 */
export interface DescribeLifecycleHooksType {
  /**
   * @schema DescribeLifecycleHooksType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DescribeLifecycleHooksType#LifecycleHookNames
   */
  readonly lifecycleHookNames?: string[];

}

/**
 * @schema DescribeLifecycleHooksAnswer
 */
export interface DescribeLifecycleHooksAnswer {
  /**
   * @schema DescribeLifecycleHooksAnswer#LifecycleHooks
   */
  readonly lifecycleHooks?: LifecycleHook[];

}

/**
 * @schema DescribeLoadBalancerTargetGroupsRequest
 */
export interface DescribeLoadBalancerTargetGroupsRequest {
  /**
   * @schema DescribeLoadBalancerTargetGroupsRequest#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DescribeLoadBalancerTargetGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLoadBalancerTargetGroupsRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DescribeLoadBalancerTargetGroupsResponse
 */
export interface DescribeLoadBalancerTargetGroupsResponse {
  /**
   * @schema DescribeLoadBalancerTargetGroupsResponse#LoadBalancerTargetGroups
   */
  readonly loadBalancerTargetGroups?: LoadBalancerTargetGroupState[];

  /**
   * @schema DescribeLoadBalancerTargetGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeLoadBalancersRequest
 */
export interface DescribeLoadBalancersRequest {
  /**
   * @schema DescribeLoadBalancersRequest#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DescribeLoadBalancersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLoadBalancersRequest#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DescribeLoadBalancersResponse
 */
export interface DescribeLoadBalancersResponse {
  /**
   * @schema DescribeLoadBalancersResponse#LoadBalancers
   */
  readonly loadBalancers?: LoadBalancerState[];

  /**
   * @schema DescribeLoadBalancersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMetricCollectionTypesAnswer
 */
export interface DescribeMetricCollectionTypesAnswer {
  /**
   * @schema DescribeMetricCollectionTypesAnswer#Metrics
   */
  readonly metrics?: MetricCollectionType[];

  /**
   * @schema DescribeMetricCollectionTypesAnswer#Granularities
   */
  readonly granularities?: MetricGranularityType[];

}

/**
 * @schema DescribeNotificationConfigurationsType
 */
export interface DescribeNotificationConfigurationsType {
  /**
   * @schema DescribeNotificationConfigurationsType#AutoScalingGroupNames
   */
  readonly autoScalingGroupNames?: string[];

  /**
   * @schema DescribeNotificationConfigurationsType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeNotificationConfigurationsType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema DescribeNotificationConfigurationsAnswer
 */
export interface DescribeNotificationConfigurationsAnswer {
  /**
   * @schema DescribeNotificationConfigurationsAnswer#NotificationConfigurations
   */
  readonly notificationConfigurations: NotificationConfiguration[];

  /**
   * @schema DescribeNotificationConfigurationsAnswer#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePoliciesType
 */
export interface DescribePoliciesType {
  /**
   * @schema DescribePoliciesType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema DescribePoliciesType#PolicyNames
   */
  readonly policyNames?: string[];

  /**
   * @schema DescribePoliciesType#PolicyTypes
   */
  readonly policyTypes?: string[];

  /**
   * @schema DescribePoliciesType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribePoliciesType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema PoliciesType
 */
export interface PoliciesType {
  /**
   * @schema PoliciesType#ScalingPolicies
   */
  readonly scalingPolicies?: ScalingPolicy[];

  /**
   * @schema PoliciesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalingActivitiesType
 */
export interface DescribeScalingActivitiesType {
  /**
   * @schema DescribeScalingActivitiesType#ActivityIds
   */
  readonly activityIds?: string[];

  /**
   * @schema DescribeScalingActivitiesType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema DescribeScalingActivitiesType#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeScalingActivitiesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ActivitiesType
 */
export interface ActivitiesType {
  /**
   * @schema ActivitiesType#Activities
   */
  readonly activities: Activity[];

  /**
   * @schema ActivitiesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ProcessesType
 */
export interface ProcessesType {
  /**
   * @schema ProcessesType#Processes
   */
  readonly processes?: ProcessType[];

}

/**
 * @schema DescribeScheduledActionsType
 */
export interface DescribeScheduledActionsType {
  /**
   * @schema DescribeScheduledActionsType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema DescribeScheduledActionsType#ScheduledActionNames
   */
  readonly scheduledActionNames?: string[];

  /**
   * @schema DescribeScheduledActionsType#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeScheduledActionsType#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeScheduledActionsType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeScheduledActionsType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema ScheduledActionsType
 */
export interface ScheduledActionsType {
  /**
   * @schema ScheduledActionsType#ScheduledUpdateGroupActions
   */
  readonly scheduledUpdateGroupActions?: ScheduledUpdateGroupAction[];

  /**
   * @schema ScheduledActionsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTagsType
 */
export interface DescribeTagsType {
  /**
   * @schema DescribeTagsType#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTagsType#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTagsType#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * @schema TagsType
 */
export interface TagsType {
  /**
   * @schema TagsType#Tags
   */
  readonly tags?: TagDescription[];

  /**
   * @schema TagsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTerminationPolicyTypesAnswer
 */
export interface DescribeTerminationPolicyTypesAnswer {
  /**
   * @schema DescribeTerminationPolicyTypesAnswer#TerminationPolicyTypes
   */
  readonly terminationPolicyTypes?: string[];

}

/**
 * @schema DetachInstancesQuery
 */
export interface DetachInstancesQuery {
  /**
   * @schema DetachInstancesQuery#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema DetachInstancesQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DetachInstancesQuery#ShouldDecrementDesiredCapacity
   */
  readonly shouldDecrementDesiredCapacity: boolean;

}

/**
 * @schema DetachInstancesAnswer
 */
export interface DetachInstancesAnswer {
  /**
   * @schema DetachInstancesAnswer#Activities
   */
  readonly activities?: Activity[];

}

/**
 * @schema DetachLoadBalancerTargetGroupsType
 */
export interface DetachLoadBalancerTargetGroupsType {
  /**
   * @schema DetachLoadBalancerTargetGroupsType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DetachLoadBalancerTargetGroupsType#TargetGroupARNs
   */
  readonly targetGroupArNs: string[];

}

/**
 * @schema DetachLoadBalancerTargetGroupsResultType
 */
export interface DetachLoadBalancerTargetGroupsResultType {
}

/**
 * @schema DetachLoadBalancersType
 */
export interface DetachLoadBalancersType {
  /**
   * @schema DetachLoadBalancersType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DetachLoadBalancersType#LoadBalancerNames
   */
  readonly loadBalancerNames: string[];

}

/**
 * @schema DetachLoadBalancersResultType
 */
export interface DetachLoadBalancersResultType {
}

/**
 * @schema DisableMetricsCollectionQuery
 */
export interface DisableMetricsCollectionQuery {
  /**
   * @schema DisableMetricsCollectionQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema DisableMetricsCollectionQuery#Metrics
   */
  readonly metrics?: string[];

}

/**
 * @schema EnableMetricsCollectionQuery
 */
export interface EnableMetricsCollectionQuery {
  /**
   * @schema EnableMetricsCollectionQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema EnableMetricsCollectionQuery#Metrics
   */
  readonly metrics?: string[];

  /**
   * @schema EnableMetricsCollectionQuery#Granularity
   */
  readonly granularity: string;

}

/**
 * @schema EnterStandbyQuery
 */
export interface EnterStandbyQuery {
  /**
   * @schema EnterStandbyQuery#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema EnterStandbyQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema EnterStandbyQuery#ShouldDecrementDesiredCapacity
   */
  readonly shouldDecrementDesiredCapacity: boolean;

}

/**
 * @schema EnterStandbyAnswer
 */
export interface EnterStandbyAnswer {
  /**
   * @schema EnterStandbyAnswer#Activities
   */
  readonly activities?: Activity[];

}

/**
 * @schema ExecutePolicyType
 */
export interface ExecutePolicyType {
  /**
   * @schema ExecutePolicyType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema ExecutePolicyType#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema ExecutePolicyType#HonorCooldown
   */
  readonly honorCooldown?: boolean;

  /**
   * @schema ExecutePolicyType#MetricValue
   */
  readonly metricValue?: number;

  /**
   * @schema ExecutePolicyType#BreachThreshold
   */
  readonly breachThreshold?: number;

}

/**
 * @schema ExitStandbyQuery
 */
export interface ExitStandbyQuery {
  /**
   * @schema ExitStandbyQuery#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema ExitStandbyQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

}

/**
 * @schema ExitStandbyAnswer
 */
export interface ExitStandbyAnswer {
  /**
   * @schema ExitStandbyAnswer#Activities
   */
  readonly activities?: Activity[];

}

/**
 * @schema PutLifecycleHookType
 */
export interface PutLifecycleHookType {
  /**
   * @schema PutLifecycleHookType#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema PutLifecycleHookType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema PutLifecycleHookType#LifecycleTransition
   */
  readonly lifecycleTransition?: string;

  /**
   * @schema PutLifecycleHookType#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema PutLifecycleHookType#NotificationTargetARN
   */
  readonly notificationTargetArn?: string;

  /**
   * @schema PutLifecycleHookType#NotificationMetadata
   */
  readonly notificationMetadata?: string;

  /**
   * @schema PutLifecycleHookType#HeartbeatTimeout
   */
  readonly heartbeatTimeout?: number;

  /**
   * @schema PutLifecycleHookType#DefaultResult
   */
  readonly defaultResult?: string;

}

/**
 * @schema PutLifecycleHookAnswer
 */
export interface PutLifecycleHookAnswer {
}

/**
 * @schema PutNotificationConfigurationType
 */
export interface PutNotificationConfigurationType {
  /**
   * @schema PutNotificationConfigurationType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema PutNotificationConfigurationType#TopicARN
   */
  readonly topicArn: string;

  /**
   * @schema PutNotificationConfigurationType#NotificationTypes
   */
  readonly notificationTypes: string[];

}

/**
 * @schema PutScalingPolicyType
 */
export interface PutScalingPolicyType {
  /**
   * @schema PutScalingPolicyType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema PutScalingPolicyType#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema PutScalingPolicyType#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema PutScalingPolicyType#AdjustmentType
   */
  readonly adjustmentType?: string;

  /**
   * @schema PutScalingPolicyType#MinAdjustmentStep
   */
  readonly minAdjustmentStep?: number;

  /**
   * @schema PutScalingPolicyType#MinAdjustmentMagnitude
   */
  readonly minAdjustmentMagnitude?: number;

  /**
   * @schema PutScalingPolicyType#ScalingAdjustment
   */
  readonly scalingAdjustment?: number;

  /**
   * @schema PutScalingPolicyType#Cooldown
   */
  readonly cooldown?: number;

  /**
   * @schema PutScalingPolicyType#MetricAggregationType
   */
  readonly metricAggregationType?: string;

  /**
   * @schema PutScalingPolicyType#StepAdjustments
   */
  readonly stepAdjustments?: StepAdjustment[];

  /**
   * @schema PutScalingPolicyType#EstimatedInstanceWarmup
   */
  readonly estimatedInstanceWarmup?: number;

  /**
   * @schema PutScalingPolicyType#TargetTrackingConfiguration
   */
  readonly targetTrackingConfiguration?: TargetTrackingConfiguration;

  /**
   * @schema PutScalingPolicyType#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema PolicyArnType
 */
export interface PolicyArnType {
  /**
   * @schema PolicyArnType#PolicyARN
   */
  readonly policyArn?: string;

  /**
   * @schema PolicyArnType#Alarms
   */
  readonly alarms?: Alarm[];

}

/**
 * @schema PutScheduledUpdateGroupActionType
 */
export interface PutScheduledUpdateGroupActionType {
  /**
   * @schema PutScheduledUpdateGroupActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema PutScheduledUpdateGroupActionType#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema PutScheduledUpdateGroupActionType#Time
   */
  readonly time?: string;

  /**
   * @schema PutScheduledUpdateGroupActionType#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema PutScheduledUpdateGroupActionType#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema PutScheduledUpdateGroupActionType#Recurrence
   */
  readonly recurrence?: string;

  /**
   * @schema PutScheduledUpdateGroupActionType#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema PutScheduledUpdateGroupActionType#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema PutScheduledUpdateGroupActionType#DesiredCapacity
   */
  readonly desiredCapacity?: number;

}

/**
 * @schema RecordLifecycleActionHeartbeatType
 */
export interface RecordLifecycleActionHeartbeatType {
  /**
   * @schema RecordLifecycleActionHeartbeatType#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema RecordLifecycleActionHeartbeatType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema RecordLifecycleActionHeartbeatType#LifecycleActionToken
   */
  readonly lifecycleActionToken?: string;

  /**
   * @schema RecordLifecycleActionHeartbeatType#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema RecordLifecycleActionHeartbeatAnswer
 */
export interface RecordLifecycleActionHeartbeatAnswer {
}

/**
 * @schema ScalingProcessQuery
 */
export interface ScalingProcessQuery {
  /**
   * @schema ScalingProcessQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema ScalingProcessQuery#ScalingProcesses
   */
  readonly scalingProcesses?: string[];

}

/**
 * @schema SetDesiredCapacityType
 */
export interface SetDesiredCapacityType {
  /**
   * @schema SetDesiredCapacityType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema SetDesiredCapacityType#DesiredCapacity
   */
  readonly desiredCapacity: number;

  /**
   * @schema SetDesiredCapacityType#HonorCooldown
   */
  readonly honorCooldown?: boolean;

}

/**
 * @schema SetInstanceHealthQuery
 */
export interface SetInstanceHealthQuery {
  /**
   * @schema SetInstanceHealthQuery#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SetInstanceHealthQuery#HealthStatus
   */
  readonly healthStatus: string;

  /**
   * @schema SetInstanceHealthQuery#ShouldRespectGracePeriod
   */
  readonly shouldRespectGracePeriod?: boolean;

}

/**
 * @schema SetInstanceProtectionQuery
 */
export interface SetInstanceProtectionQuery {
  /**
   * @schema SetInstanceProtectionQuery#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema SetInstanceProtectionQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema SetInstanceProtectionQuery#ProtectedFromScaleIn
   */
  readonly protectedFromScaleIn: boolean;

}

/**
 * @schema SetInstanceProtectionAnswer
 */
export interface SetInstanceProtectionAnswer {
}

/**
 * @schema StartInstanceRefreshType
 */
export interface StartInstanceRefreshType {
  /**
   * @schema StartInstanceRefreshType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema StartInstanceRefreshType#Strategy
   */
  readonly strategy?: string;

  /**
   * @schema StartInstanceRefreshType#Preferences
   */
  readonly preferences?: RefreshPreferences;

}

/**
 * @schema StartInstanceRefreshAnswer
 */
export interface StartInstanceRefreshAnswer {
  /**
   * @schema StartInstanceRefreshAnswer#InstanceRefreshId
   */
  readonly instanceRefreshId?: string;

}

/**
 * @schema TerminateInstanceInAutoScalingGroupType
 */
export interface TerminateInstanceInAutoScalingGroupType {
  /**
   * @schema TerminateInstanceInAutoScalingGroupType#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema TerminateInstanceInAutoScalingGroupType#ShouldDecrementDesiredCapacity
   */
  readonly shouldDecrementDesiredCapacity: boolean;

}

/**
 * @schema ActivityType
 */
export interface ActivityType {
  /**
   * @schema ActivityType#Activity
   */
  readonly activity?: Activity;

}

/**
 * @schema UpdateAutoScalingGroupType
 */
export interface UpdateAutoScalingGroupType {
  /**
   * @schema UpdateAutoScalingGroupType#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema UpdateAutoScalingGroupType#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema UpdateAutoScalingGroupType#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema UpdateAutoScalingGroupType#MixedInstancesPolicy
   */
  readonly mixedInstancesPolicy?: MixedInstancesPolicy;

  /**
   * @schema UpdateAutoScalingGroupType#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema UpdateAutoScalingGroupType#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema UpdateAutoScalingGroupType#DesiredCapacity
   */
  readonly desiredCapacity?: number;

  /**
   * @schema UpdateAutoScalingGroupType#DefaultCooldown
   */
  readonly defaultCooldown?: number;

  /**
   * @schema UpdateAutoScalingGroupType#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema UpdateAutoScalingGroupType#HealthCheckType
   */
  readonly healthCheckType?: string;

  /**
   * @schema UpdateAutoScalingGroupType#HealthCheckGracePeriod
   */
  readonly healthCheckGracePeriod?: number;

  /**
   * @schema UpdateAutoScalingGroupType#PlacementGroup
   */
  readonly placementGroup?: string;

  /**
   * @schema UpdateAutoScalingGroupType#VPCZoneIdentifier
   */
  readonly vpcZoneIdentifier?: string;

  /**
   * @schema UpdateAutoScalingGroupType#TerminationPolicies
   */
  readonly terminationPolicies?: string[];

  /**
   * @schema UpdateAutoScalingGroupType#NewInstancesProtectedFromScaleIn
   */
  readonly newInstancesProtectedFromScaleIn?: boolean;

  /**
   * @schema UpdateAutoScalingGroupType#ServiceLinkedRoleARN
   */
  readonly serviceLinkedRoleArn?: string;

  /**
   * @schema UpdateAutoScalingGroupType#MaxInstanceLifetime
   */
  readonly maxInstanceLifetime?: number;

  /**
   * @schema UpdateAutoScalingGroupType#CapacityRebalance
   */
  readonly capacityRebalance?: boolean;

}

/**
 * @schema FailedScheduledUpdateGroupActionRequest
 */
export interface FailedScheduledUpdateGroupActionRequest {
  /**
   * @schema FailedScheduledUpdateGroupActionRequest#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema FailedScheduledUpdateGroupActionRequest#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema FailedScheduledUpdateGroupActionRequest#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ScheduledUpdateGroupActionRequest
 */
export interface ScheduledUpdateGroupActionRequest {
  /**
   * @schema ScheduledUpdateGroupActionRequest#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema ScheduledUpdateGroupActionRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ScheduledUpdateGroupActionRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ScheduledUpdateGroupActionRequest#Recurrence
   */
  readonly recurrence?: string;

  /**
   * @schema ScheduledUpdateGroupActionRequest#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema ScheduledUpdateGroupActionRequest#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema ScheduledUpdateGroupActionRequest#DesiredCapacity
   */
  readonly desiredCapacity?: number;

}

/**
 * @schema LaunchTemplateSpecification
 */
export interface LaunchTemplateSpecification {
  /**
   * @schema LaunchTemplateSpecification#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema LaunchTemplateSpecification#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema LaunchTemplateSpecification#Version
   */
  readonly version?: string;

}

/**
 * @schema MixedInstancesPolicy
 */
export interface MixedInstancesPolicy {
  /**
   * @schema MixedInstancesPolicy#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplate;

  /**
   * @schema MixedInstancesPolicy#InstancesDistribution
   */
  readonly instancesDistribution?: InstancesDistribution;

}

/**
 * @schema LifecycleHookSpecification
 */
export interface LifecycleHookSpecification {
  /**
   * @schema LifecycleHookSpecification#LifecycleHookName
   */
  readonly lifecycleHookName: string;

  /**
   * @schema LifecycleHookSpecification#LifecycleTransition
   */
  readonly lifecycleTransition: string;

  /**
   * @schema LifecycleHookSpecification#NotificationMetadata
   */
  readonly notificationMetadata?: string;

  /**
   * @schema LifecycleHookSpecification#HeartbeatTimeout
   */
  readonly heartbeatTimeout?: number;

  /**
   * @schema LifecycleHookSpecification#DefaultResult
   */
  readonly defaultResult?: string;

  /**
   * @schema LifecycleHookSpecification#NotificationTargetARN
   */
  readonly notificationTargetArn?: string;

  /**
   * @schema LifecycleHookSpecification#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Tag#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

  /**
   * @schema Tag#PropagateAtLaunch
   */
  readonly propagateAtLaunch?: boolean;

}

/**
 * @schema BlockDeviceMapping
 */
export interface BlockDeviceMapping {
  /**
   * @schema BlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema BlockDeviceMapping#DeviceName
   */
  readonly deviceName: string;

  /**
   * @schema BlockDeviceMapping#Ebs
   */
  readonly ebs?: Ebs;

  /**
   * @schema BlockDeviceMapping#NoDevice
   */
  readonly noDevice?: boolean;

}

/**
 * @schema InstanceMonitoring
 */
export interface InstanceMonitoring {
  /**
   * @schema InstanceMonitoring#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema InstanceMetadataOptions
 */
export interface InstanceMetadataOptions {
  /**
   * @schema InstanceMetadataOptions#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema InstanceMetadataOptions#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema InstanceMetadataOptions#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema AdjustmentType
 */
export interface AdjustmentType {
  /**
   * @schema AdjustmentType#AdjustmentType
   */
  readonly adjustmentType?: string;

}

/**
 * @schema AutoScalingGroup
 */
export interface AutoScalingGroup {
  /**
   * @schema AutoScalingGroup#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingGroup#AutoScalingGroupARN
   */
  readonly autoScalingGroupArn?: string;

  /**
   * @schema AutoScalingGroup#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema AutoScalingGroup#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema AutoScalingGroup#MixedInstancesPolicy
   */
  readonly mixedInstancesPolicy?: MixedInstancesPolicy;

  /**
   * @schema AutoScalingGroup#MinSize
   */
  readonly minSize: number;

  /**
   * @schema AutoScalingGroup#MaxSize
   */
  readonly maxSize: number;

  /**
   * @schema AutoScalingGroup#DesiredCapacity
   */
  readonly desiredCapacity: number;

  /**
   * @schema AutoScalingGroup#DefaultCooldown
   */
  readonly defaultCooldown: number;

  /**
   * @schema AutoScalingGroup#AvailabilityZones
   */
  readonly availabilityZones: string[];

  /**
   * @schema AutoScalingGroup#LoadBalancerNames
   */
  readonly loadBalancerNames?: string[];

  /**
   * @schema AutoScalingGroup#TargetGroupARNs
   */
  readonly targetGroupArNs?: string[];

  /**
   * @schema AutoScalingGroup#HealthCheckType
   */
  readonly healthCheckType: string;

  /**
   * @schema AutoScalingGroup#HealthCheckGracePeriod
   */
  readonly healthCheckGracePeriod?: number;

  /**
   * @schema AutoScalingGroup#Instances
   */
  readonly instances?: Instance[];

  /**
   * @schema AutoScalingGroup#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema AutoScalingGroup#SuspendedProcesses
   */
  readonly suspendedProcesses?: SuspendedProcess[];

  /**
   * @schema AutoScalingGroup#PlacementGroup
   */
  readonly placementGroup?: string;

  /**
   * @schema AutoScalingGroup#VPCZoneIdentifier
   */
  readonly vpcZoneIdentifier?: string;

  /**
   * @schema AutoScalingGroup#EnabledMetrics
   */
  readonly enabledMetrics?: EnabledMetric[];

  /**
   * @schema AutoScalingGroup#Status
   */
  readonly status?: string;

  /**
   * @schema AutoScalingGroup#Tags
   */
  readonly tags?: TagDescription[];

  /**
   * @schema AutoScalingGroup#TerminationPolicies
   */
  readonly terminationPolicies?: string[];

  /**
   * @schema AutoScalingGroup#NewInstancesProtectedFromScaleIn
   */
  readonly newInstancesProtectedFromScaleIn?: boolean;

  /**
   * @schema AutoScalingGroup#ServiceLinkedRoleARN
   */
  readonly serviceLinkedRoleArn?: string;

  /**
   * @schema AutoScalingGroup#MaxInstanceLifetime
   */
  readonly maxInstanceLifetime?: number;

  /**
   * @schema AutoScalingGroup#CapacityRebalance
   */
  readonly capacityRebalance?: boolean;

}

/**
 * @schema AutoScalingInstanceDetails
 */
export interface AutoScalingInstanceDetails {
  /**
   * @schema AutoScalingInstanceDetails#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AutoScalingInstanceDetails#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AutoScalingInstanceDetails#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema AutoScalingInstanceDetails#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema AutoScalingInstanceDetails#LifecycleState
   */
  readonly lifecycleState: string;

  /**
   * @schema AutoScalingInstanceDetails#HealthStatus
   */
  readonly healthStatus: string;

  /**
   * @schema AutoScalingInstanceDetails#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema AutoScalingInstanceDetails#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema AutoScalingInstanceDetails#ProtectedFromScaleIn
   */
  readonly protectedFromScaleIn: boolean;

  /**
   * @schema AutoScalingInstanceDetails#WeightedCapacity
   */
  readonly weightedCapacity?: string;

}

/**
 * @schema InstanceRefresh
 */
export interface InstanceRefresh {
  /**
   * @schema InstanceRefresh#InstanceRefreshId
   */
  readonly instanceRefreshId?: string;

  /**
   * @schema InstanceRefresh#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema InstanceRefresh#Status
   */
  readonly status?: string;

  /**
   * @schema InstanceRefresh#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema InstanceRefresh#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema InstanceRefresh#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema InstanceRefresh#PercentageComplete
   */
  readonly percentageComplete?: number;

  /**
   * @schema InstanceRefresh#InstancesToUpdate
   */
  readonly instancesToUpdate?: number;

}

/**
 * @schema LaunchConfiguration
 */
export interface LaunchConfiguration {
  /**
   * @schema LaunchConfiguration#LaunchConfigurationName
   */
  readonly launchConfigurationName: string;

  /**
   * @schema LaunchConfiguration#LaunchConfigurationARN
   */
  readonly launchConfigurationArn?: string;

  /**
   * @schema LaunchConfiguration#ImageId
   */
  readonly imageId: string;

  /**
   * @schema LaunchConfiguration#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema LaunchConfiguration#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema LaunchConfiguration#ClassicLinkVPCId
   */
  readonly classicLinkVpcId?: string;

  /**
   * @schema LaunchConfiguration#ClassicLinkVPCSecurityGroups
   */
  readonly classicLinkVpcSecurityGroups?: string[];

  /**
   * @schema LaunchConfiguration#UserData
   */
  readonly userData?: string;

  /**
   * @schema LaunchConfiguration#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema LaunchConfiguration#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema LaunchConfiguration#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema LaunchConfiguration#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema LaunchConfiguration#InstanceMonitoring
   */
  readonly instanceMonitoring?: InstanceMonitoring;

  /**
   * @schema LaunchConfiguration#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema LaunchConfiguration#IamInstanceProfile
   */
  readonly iamInstanceProfile?: string;

  /**
   * @schema LaunchConfiguration#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema LaunchConfiguration#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema LaunchConfiguration#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema LaunchConfiguration#PlacementTenancy
   */
  readonly placementTenancy?: string;

  /**
   * @schema LaunchConfiguration#MetadataOptions
   */
  readonly metadataOptions?: InstanceMetadataOptions;

}

/**
 * @schema LifecycleHook
 */
export interface LifecycleHook {
  /**
   * @schema LifecycleHook#LifecycleHookName
   */
  readonly lifecycleHookName?: string;

  /**
   * @schema LifecycleHook#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema LifecycleHook#LifecycleTransition
   */
  readonly lifecycleTransition?: string;

  /**
   * @schema LifecycleHook#NotificationTargetARN
   */
  readonly notificationTargetArn?: string;

  /**
   * @schema LifecycleHook#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema LifecycleHook#NotificationMetadata
   */
  readonly notificationMetadata?: string;

  /**
   * @schema LifecycleHook#HeartbeatTimeout
   */
  readonly heartbeatTimeout?: number;

  /**
   * @schema LifecycleHook#GlobalTimeout
   */
  readonly globalTimeout?: number;

  /**
   * @schema LifecycleHook#DefaultResult
   */
  readonly defaultResult?: string;

}

/**
 * @schema LoadBalancerTargetGroupState
 */
export interface LoadBalancerTargetGroupState {
  /**
   * @schema LoadBalancerTargetGroupState#LoadBalancerTargetGroupARN
   */
  readonly loadBalancerTargetGroupArn?: string;

  /**
   * @schema LoadBalancerTargetGroupState#State
   */
  readonly state?: string;

}

/**
 * @schema LoadBalancerState
 */
export interface LoadBalancerState {
  /**
   * @schema LoadBalancerState#LoadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema LoadBalancerState#State
   */
  readonly state?: string;

}

/**
 * @schema MetricCollectionType
 */
export interface MetricCollectionType {
  /**
   * @schema MetricCollectionType#Metric
   */
  readonly metric?: string;

}

/**
 * @schema MetricGranularityType
 */
export interface MetricGranularityType {
  /**
   * @schema MetricGranularityType#Granularity
   */
  readonly granularity?: string;

}

/**
 * @schema NotificationConfiguration
 */
export interface NotificationConfiguration {
  /**
   * @schema NotificationConfiguration#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema NotificationConfiguration#TopicARN
   */
  readonly topicArn?: string;

  /**
   * @schema NotificationConfiguration#NotificationType
   */
  readonly notificationType?: string;

}

/**
 * @schema ScalingPolicy
 */
export interface ScalingPolicy {
  /**
   * @schema ScalingPolicy#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema ScalingPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema ScalingPolicy#PolicyARN
   */
  readonly policyArn?: string;

  /**
   * @schema ScalingPolicy#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema ScalingPolicy#AdjustmentType
   */
  readonly adjustmentType?: string;

  /**
   * @schema ScalingPolicy#MinAdjustmentStep
   */
  readonly minAdjustmentStep?: number;

  /**
   * @schema ScalingPolicy#MinAdjustmentMagnitude
   */
  readonly minAdjustmentMagnitude?: number;

  /**
   * @schema ScalingPolicy#ScalingAdjustment
   */
  readonly scalingAdjustment?: number;

  /**
   * @schema ScalingPolicy#Cooldown
   */
  readonly cooldown?: number;

  /**
   * @schema ScalingPolicy#StepAdjustments
   */
  readonly stepAdjustments?: StepAdjustment[];

  /**
   * @schema ScalingPolicy#MetricAggregationType
   */
  readonly metricAggregationType?: string;

  /**
   * @schema ScalingPolicy#EstimatedInstanceWarmup
   */
  readonly estimatedInstanceWarmup?: number;

  /**
   * @schema ScalingPolicy#Alarms
   */
  readonly alarms?: Alarm[];

  /**
   * @schema ScalingPolicy#TargetTrackingConfiguration
   */
  readonly targetTrackingConfiguration?: TargetTrackingConfiguration;

  /**
   * @schema ScalingPolicy#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Activity
 */
export interface Activity {
  /**
   * @schema Activity#ActivityId
   */
  readonly activityId: string;

  /**
   * @schema Activity#AutoScalingGroupName
   */
  readonly autoScalingGroupName: string;

  /**
   * @schema Activity#Description
   */
  readonly description?: string;

  /**
   * @schema Activity#Cause
   */
  readonly cause: string;

  /**
   * @schema Activity#StartTime
   */
  readonly startTime: string;

  /**
   * @schema Activity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Activity#StatusCode
   */
  readonly statusCode: string;

  /**
   * @schema Activity#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Activity#Progress
   */
  readonly progress?: number;

  /**
   * @schema Activity#Details
   */
  readonly details?: string;

}

/**
 * @schema ProcessType
 */
export interface ProcessType {
  /**
   * @schema ProcessType#ProcessName
   */
  readonly processName: string;

}

/**
 * @schema ScheduledUpdateGroupAction
 */
export interface ScheduledUpdateGroupAction {
  /**
   * @schema ScheduledUpdateGroupAction#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema ScheduledUpdateGroupAction#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema ScheduledUpdateGroupAction#ScheduledActionARN
   */
  readonly scheduledActionArn?: string;

  /**
   * @schema ScheduledUpdateGroupAction#Time
   */
  readonly time?: string;

  /**
   * @schema ScheduledUpdateGroupAction#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ScheduledUpdateGroupAction#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ScheduledUpdateGroupAction#Recurrence
   */
  readonly recurrence?: string;

  /**
   * @schema ScheduledUpdateGroupAction#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema ScheduledUpdateGroupAction#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema ScheduledUpdateGroupAction#DesiredCapacity
   */
  readonly desiredCapacity?: number;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name?: string;

  /**
   * @schema Filter#Values
   */
  readonly values?: string[];

}

/**
 * @schema TagDescription
 */
export interface TagDescription {
  /**
   * @schema TagDescription#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TagDescription#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TagDescription#Key
   */
  readonly key?: string;

  /**
   * @schema TagDescription#Value
   */
  readonly value?: string;

  /**
   * @schema TagDescription#PropagateAtLaunch
   */
  readonly propagateAtLaunch?: boolean;

}

/**
 * @schema StepAdjustment
 */
export interface StepAdjustment {
  /**
   * @schema StepAdjustment#MetricIntervalLowerBound
   */
  readonly metricIntervalLowerBound?: number;

  /**
   * @schema StepAdjustment#MetricIntervalUpperBound
   */
  readonly metricIntervalUpperBound?: number;

  /**
   * @schema StepAdjustment#ScalingAdjustment
   */
  readonly scalingAdjustment: number;

}

/**
 * @schema TargetTrackingConfiguration
 */
export interface TargetTrackingConfiguration {
  /**
   * @schema TargetTrackingConfiguration#PredefinedMetricSpecification
   */
  readonly predefinedMetricSpecification?: PredefinedMetricSpecification;

  /**
   * @schema TargetTrackingConfiguration#CustomizedMetricSpecification
   */
  readonly customizedMetricSpecification?: CustomizedMetricSpecification;

  /**
   * @schema TargetTrackingConfiguration#TargetValue
   */
  readonly targetValue: number;

  /**
   * @schema TargetTrackingConfiguration#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

}

/**
 * @schema Alarm
 */
export interface Alarm {
  /**
   * @schema Alarm#AlarmName
   */
  readonly alarmName?: string;

  /**
   * @schema Alarm#AlarmARN
   */
  readonly alarmArn?: string;

}

/**
 * @schema RefreshPreferences
 */
export interface RefreshPreferences {
  /**
   * @schema RefreshPreferences#MinHealthyPercentage
   */
  readonly minHealthyPercentage?: number;

  /**
   * @schema RefreshPreferences#InstanceWarmup
   */
  readonly instanceWarmup?: number;

}

/**
 * @schema LaunchTemplate
 */
export interface LaunchTemplate {
  /**
   * @schema LaunchTemplate#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: LaunchTemplateSpecification;

  /**
   * @schema LaunchTemplate#Overrides
   */
  readonly overrides?: LaunchTemplateOverrides[];

}

/**
 * @schema InstancesDistribution
 */
export interface InstancesDistribution {
  /**
   * @schema InstancesDistribution#OnDemandAllocationStrategy
   */
  readonly onDemandAllocationStrategy?: string;

  /**
   * @schema InstancesDistribution#OnDemandBaseCapacity
   */
  readonly onDemandBaseCapacity?: number;

  /**
   * @schema InstancesDistribution#OnDemandPercentageAboveBaseCapacity
   */
  readonly onDemandPercentageAboveBaseCapacity?: number;

  /**
   * @schema InstancesDistribution#SpotAllocationStrategy
   */
  readonly spotAllocationStrategy?: string;

  /**
   * @schema InstancesDistribution#SpotInstancePools
   */
  readonly spotInstancePools?: number;

  /**
   * @schema InstancesDistribution#SpotMaxPrice
   */
  readonly spotMaxPrice?: string;

}

/**
 * @schema Ebs
 */
export interface Ebs {
  /**
   * @schema Ebs#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ebs#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema Ebs#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema Ebs#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ebs#Iops
   */
  readonly iops?: number;

  /**
   * @schema Ebs#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema Instance
 */
export interface Instance {
  /**
   * @schema Instance#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Instance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Instance#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema Instance#LifecycleState
   */
  readonly lifecycleState: string;

  /**
   * @schema Instance#HealthStatus
   */
  readonly healthStatus: string;

  /**
   * @schema Instance#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema Instance#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema Instance#ProtectedFromScaleIn
   */
  readonly protectedFromScaleIn: boolean;

  /**
   * @schema Instance#WeightedCapacity
   */
  readonly weightedCapacity?: string;

}

/**
 * @schema SuspendedProcess
 */
export interface SuspendedProcess {
  /**
   * @schema SuspendedProcess#ProcessName
   */
  readonly processName?: string;

  /**
   * @schema SuspendedProcess#SuspensionReason
   */
  readonly suspensionReason?: string;

}

/**
 * @schema EnabledMetric
 */
export interface EnabledMetric {
  /**
   * @schema EnabledMetric#Metric
   */
  readonly metric?: string;

  /**
   * @schema EnabledMetric#Granularity
   */
  readonly granularity?: string;

}

/**
 * @schema PredefinedMetricSpecification
 */
export interface PredefinedMetricSpecification {
  /**
   * @schema PredefinedMetricSpecification#PredefinedMetricType
   */
  readonly predefinedMetricType: string;

  /**
   * @schema PredefinedMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * @schema CustomizedMetricSpecification
 */
export interface CustomizedMetricSpecification {
  /**
   * @schema CustomizedMetricSpecification#MetricName
   */
  readonly metricName: string;

  /**
   * @schema CustomizedMetricSpecification#Namespace
   */
  readonly namespace: string;

  /**
   * @schema CustomizedMetricSpecification#Dimensions
   */
  readonly dimensions?: MetricDimension[];

  /**
   * @schema CustomizedMetricSpecification#Statistic
   */
  readonly statistic: string;

  /**
   * @schema CustomizedMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * @schema LaunchTemplateOverrides
 */
export interface LaunchTemplateOverrides {
  /**
   * @schema LaunchTemplateOverrides#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema LaunchTemplateOverrides#WeightedCapacity
   */
  readonly weightedCapacity?: string;

  /**
   * @schema LaunchTemplateOverrides#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: LaunchTemplateSpecification;

}

/**
 * @schema MetricDimension
 */
export interface MetricDimension {
  /**
   * @schema MetricDimension#Name
   */
  readonly name: string;

  /**
   * @schema MetricDimension#Value
   */
  readonly value: string;

}
