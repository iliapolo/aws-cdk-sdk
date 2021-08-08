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
  readonly autoScalingGroupName?: string;

}

/**
 * Converts an object of type 'AutoScalingAttachInstancesQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAttachInstancesQuery(obj: AutoScalingAttachInstancesQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIds': obj.instanceIds?.map(y => y),
    'AutoScalingGroupName': obj.autoScalingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingAttachLoadBalancerTargetGroupsType
 */
export interface AutoScalingAttachLoadBalancerTargetGroupsType {
  /**
   * @schema AutoScalingAttachLoadBalancerTargetGroupsType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingAttachLoadBalancerTargetGroupsType#TargetGroupARNs
   */
  readonly targetGroupArNs?: string[];

}

/**
 * Converts an object of type 'AutoScalingAttachLoadBalancerTargetGroupsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAttachLoadBalancerTargetGroupsType(obj: AutoScalingAttachLoadBalancerTargetGroupsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'TargetGroupARNs': obj.targetGroupArNs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingAttachLoadBalancerTargetGroupsResultType
 */
export interface AutoScalingAttachLoadBalancerTargetGroupsResultType {
}

/**
 * Converts an object of type 'AutoScalingAttachLoadBalancerTargetGroupsResultType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAttachLoadBalancerTargetGroupsResultType(obj: AutoScalingAttachLoadBalancerTargetGroupsResultType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingAttachLoadBalancersType
 */
export interface AutoScalingAttachLoadBalancersType {
  /**
   * @schema AutoScalingAttachLoadBalancersType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingAttachLoadBalancersType#LoadBalancerNames
   */
  readonly loadBalancerNames?: string[];

}

/**
 * Converts an object of type 'AutoScalingAttachLoadBalancersType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAttachLoadBalancersType(obj: AutoScalingAttachLoadBalancersType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'LoadBalancerNames': obj.loadBalancerNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingAttachLoadBalancersResultType
 */
export interface AutoScalingAttachLoadBalancersResultType {
}

/**
 * Converts an object of type 'AutoScalingAttachLoadBalancersResultType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAttachLoadBalancersResultType(obj: AutoScalingAttachLoadBalancersResultType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingBatchDeleteScheduledActionType
 */
export interface AutoScalingBatchDeleteScheduledActionType {
  /**
   * @schema AutoScalingBatchDeleteScheduledActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingBatchDeleteScheduledActionType#ScheduledActionNames
   */
  readonly scheduledActionNames?: string[];

}

/**
 * Converts an object of type 'AutoScalingBatchDeleteScheduledActionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingBatchDeleteScheduledActionType(obj: AutoScalingBatchDeleteScheduledActionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ScheduledActionNames': obj.scheduledActionNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingBatchDeleteScheduledActionAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingBatchDeleteScheduledActionAnswer(obj: AutoScalingBatchDeleteScheduledActionAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedScheduledActions': obj.failedScheduledActions?.map(y => toJson_AutoScalingFailedScheduledUpdateGroupActionRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingBatchPutScheduledUpdateGroupActionType
 */
export interface AutoScalingBatchPutScheduledUpdateGroupActionType {
  /**
   * @schema AutoScalingBatchPutScheduledUpdateGroupActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingBatchPutScheduledUpdateGroupActionType#ScheduledUpdateGroupActions
   */
  readonly scheduledUpdateGroupActions?: AutoScalingScheduledUpdateGroupActionRequest[];

}

/**
 * Converts an object of type 'AutoScalingBatchPutScheduledUpdateGroupActionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingBatchPutScheduledUpdateGroupActionType(obj: AutoScalingBatchPutScheduledUpdateGroupActionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ScheduledUpdateGroupActions': obj.scheduledUpdateGroupActions?.map(y => toJson_AutoScalingScheduledUpdateGroupActionRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingBatchPutScheduledUpdateGroupActionAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingBatchPutScheduledUpdateGroupActionAnswer(obj: AutoScalingBatchPutScheduledUpdateGroupActionAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedScheduledUpdateGroupActions': obj.failedScheduledUpdateGroupActions?.map(y => toJson_AutoScalingFailedScheduledUpdateGroupActionRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingCancelInstanceRefreshType
 */
export interface AutoScalingCancelInstanceRefreshType {
  /**
   * @schema AutoScalingCancelInstanceRefreshType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

}

/**
 * Converts an object of type 'AutoScalingCancelInstanceRefreshType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingCancelInstanceRefreshType(obj: AutoScalingCancelInstanceRefreshType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingCancelInstanceRefreshAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingCancelInstanceRefreshAnswer(obj: AutoScalingCancelInstanceRefreshAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceRefreshId': obj.instanceRefreshId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingCompleteLifecycleActionType
 */
export interface AutoScalingCompleteLifecycleActionType {
  /**
   * @schema AutoScalingCompleteLifecycleActionType#LifecycleHookName
   */
  readonly lifecycleHookName?: string;

  /**
   * @schema AutoScalingCompleteLifecycleActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingCompleteLifecycleActionType#LifecycleActionToken
   */
  readonly lifecycleActionToken?: string;

  /**
   * @schema AutoScalingCompleteLifecycleActionType#LifecycleActionResult
   */
  readonly lifecycleActionResult?: string;

  /**
   * @schema AutoScalingCompleteLifecycleActionType#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'AutoScalingCompleteLifecycleActionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingCompleteLifecycleActionType(obj: AutoScalingCompleteLifecycleActionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LifecycleHookName': obj.lifecycleHookName,
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'LifecycleActionToken': obj.lifecycleActionToken,
    'LifecycleActionResult': obj.lifecycleActionResult,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingCompleteLifecycleActionAnswer
 */
export interface AutoScalingCompleteLifecycleActionAnswer {
}

/**
 * Converts an object of type 'AutoScalingCompleteLifecycleActionAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingCompleteLifecycleActionAnswer(obj: AutoScalingCompleteLifecycleActionAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingCreateAutoScalingGroupType
 */
export interface AutoScalingCreateAutoScalingGroupType {
  /**
   * @schema AutoScalingCreateAutoScalingGroupType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

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
  readonly minSize?: number;

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#MaxSize
   */
  readonly maxSize?: number;

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

  /**
   * @schema AutoScalingCreateAutoScalingGroupType#Context
   */
  readonly context?: string;

}

/**
 * Converts an object of type 'AutoScalingCreateAutoScalingGroupType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingCreateAutoScalingGroupType(obj: AutoScalingCreateAutoScalingGroupType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'LaunchConfigurationName': obj.launchConfigurationName,
    'LaunchTemplate': toJson_AutoScalingLaunchTemplateSpecification(obj.launchTemplate),
    'MixedInstancesPolicy': toJson_AutoScalingMixedInstancesPolicy(obj.mixedInstancesPolicy),
    'InstanceId': obj.instanceId,
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'DesiredCapacity': obj.desiredCapacity,
    'DefaultCooldown': obj.defaultCooldown,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'LoadBalancerNames': obj.loadBalancerNames?.map(y => y),
    'TargetGroupARNs': obj.targetGroupArNs?.map(y => y),
    'HealthCheckType': obj.healthCheckType,
    'HealthCheckGracePeriod': obj.healthCheckGracePeriod,
    'PlacementGroup': obj.placementGroup,
    'VPCZoneIdentifier': obj.vpcZoneIdentifier,
    'TerminationPolicies': obj.terminationPolicies?.map(y => y),
    'NewInstancesProtectedFromScaleIn': obj.newInstancesProtectedFromScaleIn,
    'CapacityRebalance': obj.capacityRebalance,
    'LifecycleHookSpecificationList': obj.lifecycleHookSpecificationList?.map(y => toJson_AutoScalingLifecycleHookSpecification(y)),
    'Tags': obj.tags?.map(y => toJson_AutoScalingTag(y)),
    'ServiceLinkedRoleARN': obj.serviceLinkedRoleArn,
    'MaxInstanceLifetime': obj.maxInstanceLifetime,
    'Context': obj.context,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingCreateLaunchConfigurationType
 */
export interface AutoScalingCreateLaunchConfigurationType {
  /**
   * @schema AutoScalingCreateLaunchConfigurationType#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

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
 * Converts an object of type 'AutoScalingCreateLaunchConfigurationType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingCreateLaunchConfigurationType(obj: AutoScalingCreateLaunchConfigurationType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchConfigurationName': obj.launchConfigurationName,
    'ImageId': obj.imageId,
    'KeyName': obj.keyName,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'ClassicLinkVPCId': obj.classicLinkVpcId,
    'ClassicLinkVPCSecurityGroups': obj.classicLinkVpcSecurityGroups?.map(y => y),
    'UserData': obj.userData,
    'InstanceId': obj.instanceId,
    'InstanceType': obj.instanceType,
    'KernelId': obj.kernelId,
    'RamdiskId': obj.ramdiskId,
    'BlockDeviceMappings': obj.blockDeviceMappings?.map(y => toJson_AutoScalingBlockDeviceMapping(y)),
    'InstanceMonitoring': toJson_AutoScalingInstanceMonitoring(obj.instanceMonitoring),
    'SpotPrice': obj.spotPrice,
    'IamInstanceProfile': obj.iamInstanceProfile,
    'EbsOptimized': obj.ebsOptimized,
    'AssociatePublicIpAddress': obj.associatePublicIpAddress,
    'PlacementTenancy': obj.placementTenancy,
    'MetadataOptions': toJson_AutoScalingInstanceMetadataOptions(obj.metadataOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingCreateOrUpdateTagsType
 */
export interface AutoScalingCreateOrUpdateTagsType {
  /**
   * @schema AutoScalingCreateOrUpdateTagsType#Tags
   */
  readonly tags?: AutoScalingTag[];

}

/**
 * Converts an object of type 'AutoScalingCreateOrUpdateTagsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingCreateOrUpdateTagsType(obj: AutoScalingCreateOrUpdateTagsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_AutoScalingTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDeleteAutoScalingGroupType
 */
export interface AutoScalingDeleteAutoScalingGroupType {
  /**
   * @schema AutoScalingDeleteAutoScalingGroupType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDeleteAutoScalingGroupType#ForceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * Converts an object of type 'AutoScalingDeleteAutoScalingGroupType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDeleteAutoScalingGroupType(obj: AutoScalingDeleteAutoScalingGroupType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ForceDelete': obj.forceDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingLaunchConfigurationNameType
 */
export interface AutoScalingLaunchConfigurationNameType {
  /**
   * @schema AutoScalingLaunchConfigurationNameType#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

}

/**
 * Converts an object of type 'AutoScalingLaunchConfigurationNameType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLaunchConfigurationNameType(obj: AutoScalingLaunchConfigurationNameType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchConfigurationName': obj.launchConfigurationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDeleteLifecycleHookType
 */
export interface AutoScalingDeleteLifecycleHookType {
  /**
   * @schema AutoScalingDeleteLifecycleHookType#LifecycleHookName
   */
  readonly lifecycleHookName?: string;

  /**
   * @schema AutoScalingDeleteLifecycleHookType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

}

/**
 * Converts an object of type 'AutoScalingDeleteLifecycleHookType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDeleteLifecycleHookType(obj: AutoScalingDeleteLifecycleHookType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LifecycleHookName': obj.lifecycleHookName,
    'AutoScalingGroupName': obj.autoScalingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDeleteLifecycleHookAnswer
 */
export interface AutoScalingDeleteLifecycleHookAnswer {
}

/**
 * Converts an object of type 'AutoScalingDeleteLifecycleHookAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDeleteLifecycleHookAnswer(obj: AutoScalingDeleteLifecycleHookAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDeleteNotificationConfigurationType
 */
export interface AutoScalingDeleteNotificationConfigurationType {
  /**
   * @schema AutoScalingDeleteNotificationConfigurationType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDeleteNotificationConfigurationType#TopicARN
   */
  readonly topicArn?: string;

}

/**
 * Converts an object of type 'AutoScalingDeleteNotificationConfigurationType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDeleteNotificationConfigurationType(obj: AutoScalingDeleteNotificationConfigurationType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'TopicARN': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly policyName?: string;

}

/**
 * Converts an object of type 'AutoScalingDeletePolicyType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDeletePolicyType(obj: AutoScalingDeletePolicyType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDeleteScheduledActionType
 */
export interface AutoScalingDeleteScheduledActionType {
  /**
   * @schema AutoScalingDeleteScheduledActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDeleteScheduledActionType#ScheduledActionName
   */
  readonly scheduledActionName?: string;

}

/**
 * Converts an object of type 'AutoScalingDeleteScheduledActionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDeleteScheduledActionType(obj: AutoScalingDeleteScheduledActionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ScheduledActionName': obj.scheduledActionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDeleteTagsType
 */
export interface AutoScalingDeleteTagsType {
  /**
   * @schema AutoScalingDeleteTagsType#Tags
   */
  readonly tags?: AutoScalingTag[];

}

/**
 * Converts an object of type 'AutoScalingDeleteTagsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDeleteTagsType(obj: AutoScalingDeleteTagsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_AutoScalingTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDeleteWarmPoolType
 */
export interface AutoScalingDeleteWarmPoolType {
  /**
   * @schema AutoScalingDeleteWarmPoolType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDeleteWarmPoolType#ForceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * Converts an object of type 'AutoScalingDeleteWarmPoolType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDeleteWarmPoolType(obj: AutoScalingDeleteWarmPoolType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ForceDelete': obj.forceDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDeleteWarmPoolAnswer
 */
export interface AutoScalingDeleteWarmPoolAnswer {
}

/**
 * Converts an object of type 'AutoScalingDeleteWarmPoolAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDeleteWarmPoolAnswer(obj: AutoScalingDeleteWarmPoolAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeAccountLimitsAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeAccountLimitsAnswer(obj: AutoScalingDescribeAccountLimitsAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxNumberOfAutoScalingGroups': obj.maxNumberOfAutoScalingGroups,
    'MaxNumberOfLaunchConfigurations': obj.maxNumberOfLaunchConfigurations,
    'NumberOfAutoScalingGroups': obj.numberOfAutoScalingGroups,
    'NumberOfLaunchConfigurations': obj.numberOfLaunchConfigurations,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeAdjustmentTypesAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeAdjustmentTypesAnswer(obj: AutoScalingDescribeAdjustmentTypesAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdjustmentTypes': obj.adjustmentTypes?.map(y => toJson_AutoScalingAdjustmentType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingAutoScalingGroupNamesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAutoScalingGroupNamesType(obj: AutoScalingAutoScalingGroupNamesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupNames': obj.autoScalingGroupNames?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingAutoScalingGroupsType
 */
export interface AutoScalingAutoScalingGroupsType {
  /**
   * @schema AutoScalingAutoScalingGroupsType#AutoScalingGroups
   */
  readonly autoScalingGroups?: AutoScalingAutoScalingGroup[];

  /**
   * @schema AutoScalingAutoScalingGroupsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AutoScalingAutoScalingGroupsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAutoScalingGroupsType(obj: AutoScalingAutoScalingGroupsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroups': obj.autoScalingGroups?.map(y => toJson_AutoScalingAutoScalingGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeAutoScalingInstancesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeAutoScalingInstancesType(obj: AutoScalingDescribeAutoScalingInstancesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIds': obj.instanceIds?.map(y => y),
    'MaxRecords': obj.maxRecords,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingAutoScalingInstancesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAutoScalingInstancesType(obj: AutoScalingAutoScalingInstancesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingInstances': obj.autoScalingInstances?.map(y => toJson_AutoScalingAutoScalingInstanceDetails(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeAutoScalingNotificationTypesAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeAutoScalingNotificationTypesAnswer(obj: AutoScalingDescribeAutoScalingNotificationTypesAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingNotificationTypes': obj.autoScalingNotificationTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDescribeInstanceRefreshesType
 */
export interface AutoScalingDescribeInstanceRefreshesType {
  /**
   * @schema AutoScalingDescribeInstanceRefreshesType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

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
 * Converts an object of type 'AutoScalingDescribeInstanceRefreshesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeInstanceRefreshesType(obj: AutoScalingDescribeInstanceRefreshesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'InstanceRefreshIds': obj.instanceRefreshIds?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeInstanceRefreshesAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeInstanceRefreshesAnswer(obj: AutoScalingDescribeInstanceRefreshesAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceRefreshes': obj.instanceRefreshes?.map(y => toJson_AutoScalingInstanceRefresh(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingLaunchConfigurationNamesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLaunchConfigurationNamesType(obj: AutoScalingLaunchConfigurationNamesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchConfigurationNames': obj.launchConfigurationNames?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingLaunchConfigurationsType
 */
export interface AutoScalingLaunchConfigurationsType {
  /**
   * @schema AutoScalingLaunchConfigurationsType#LaunchConfigurations
   */
  readonly launchConfigurations?: AutoScalingLaunchConfiguration[];

  /**
   * @schema AutoScalingLaunchConfigurationsType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AutoScalingLaunchConfigurationsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLaunchConfigurationsType(obj: AutoScalingLaunchConfigurationsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchConfigurations': obj.launchConfigurations?.map(y => toJson_AutoScalingLaunchConfiguration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeLifecycleHookTypesAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeLifecycleHookTypesAnswer(obj: AutoScalingDescribeLifecycleHookTypesAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LifecycleHookTypes': obj.lifecycleHookTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDescribeLifecycleHooksType
 */
export interface AutoScalingDescribeLifecycleHooksType {
  /**
   * @schema AutoScalingDescribeLifecycleHooksType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDescribeLifecycleHooksType#LifecycleHookNames
   */
  readonly lifecycleHookNames?: string[];

}

/**
 * Converts an object of type 'AutoScalingDescribeLifecycleHooksType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeLifecycleHooksType(obj: AutoScalingDescribeLifecycleHooksType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'LifecycleHookNames': obj.lifecycleHookNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeLifecycleHooksAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeLifecycleHooksAnswer(obj: AutoScalingDescribeLifecycleHooksAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LifecycleHooks': obj.lifecycleHooks?.map(y => toJson_AutoScalingLifecycleHook(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDescribeLoadBalancerTargetGroupsRequest
 */
export interface AutoScalingDescribeLoadBalancerTargetGroupsRequest {
  /**
   * @schema AutoScalingDescribeLoadBalancerTargetGroupsRequest#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

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
 * Converts an object of type 'AutoScalingDescribeLoadBalancerTargetGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeLoadBalancerTargetGroupsRequest(obj: AutoScalingDescribeLoadBalancerTargetGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'NextToken': obj.nextToken,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeLoadBalancerTargetGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeLoadBalancerTargetGroupsResponse(obj: AutoScalingDescribeLoadBalancerTargetGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoadBalancerTargetGroups': obj.loadBalancerTargetGroups?.map(y => toJson_AutoScalingLoadBalancerTargetGroupState(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDescribeLoadBalancersRequest
 */
export interface AutoScalingDescribeLoadBalancersRequest {
  /**
   * @schema AutoScalingDescribeLoadBalancersRequest#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

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
 * Converts an object of type 'AutoScalingDescribeLoadBalancersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeLoadBalancersRequest(obj: AutoScalingDescribeLoadBalancersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'NextToken': obj.nextToken,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeLoadBalancersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeLoadBalancersResponse(obj: AutoScalingDescribeLoadBalancersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoadBalancers': obj.loadBalancers?.map(y => toJson_AutoScalingLoadBalancerState(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeMetricCollectionTypesAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeMetricCollectionTypesAnswer(obj: AutoScalingDescribeMetricCollectionTypesAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metrics': obj.metrics?.map(y => toJson_AutoScalingMetricCollectionType(y)),
    'Granularities': obj.granularities?.map(y => toJson_AutoScalingMetricGranularityType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeNotificationConfigurationsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeNotificationConfigurationsType(obj: AutoScalingDescribeNotificationConfigurationsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupNames': obj.autoScalingGroupNames?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDescribeNotificationConfigurationsAnswer
 */
export interface AutoScalingDescribeNotificationConfigurationsAnswer {
  /**
   * @schema AutoScalingDescribeNotificationConfigurationsAnswer#NotificationConfigurations
   */
  readonly notificationConfigurations?: AutoScalingNotificationConfiguration[];

  /**
   * @schema AutoScalingDescribeNotificationConfigurationsAnswer#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AutoScalingDescribeNotificationConfigurationsAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeNotificationConfigurationsAnswer(obj: AutoScalingDescribeNotificationConfigurationsAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NotificationConfigurations': obj.notificationConfigurations?.map(y => toJson_AutoScalingNotificationConfiguration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribePoliciesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribePoliciesType(obj: AutoScalingDescribePoliciesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'PolicyNames': obj.policyNames?.map(y => y),
    'PolicyTypes': obj.policyTypes?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingPoliciesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPoliciesType(obj: AutoScalingPoliciesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPolicies': obj.scalingPolicies?.map(y => toJson_AutoScalingScalingPolicy(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema AutoScalingDescribeScalingActivitiesType#IncludeDeletedGroups
   */
  readonly includeDeletedGroups?: boolean;

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
 * Converts an object of type 'AutoScalingDescribeScalingActivitiesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeScalingActivitiesType(obj: AutoScalingDescribeScalingActivitiesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivityIds': obj.activityIds?.map(y => y),
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'IncludeDeletedGroups': obj.includeDeletedGroups,
    'MaxRecords': obj.maxRecords,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingActivitiesType
 */
export interface AutoScalingActivitiesType {
  /**
   * @schema AutoScalingActivitiesType#Activities
   */
  readonly activities?: AutoScalingActivity[];

  /**
   * @schema AutoScalingActivitiesType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AutoScalingActivitiesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingActivitiesType(obj: AutoScalingActivitiesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Activities': obj.activities?.map(y => toJson_AutoScalingActivity(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingProcessesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingProcessesType(obj: AutoScalingProcessesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Processes': obj.processes?.map(y => toJson_AutoScalingProcessType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeScheduledActionsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeScheduledActionsType(obj: AutoScalingDescribeScheduledActionsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ScheduledActionNames': obj.scheduledActionNames?.map(y => y),
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'NextToken': obj.nextToken,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingScheduledActionsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingScheduledActionsType(obj: AutoScalingScheduledActionsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledUpdateGroupActions': obj.scheduledUpdateGroupActions?.map(y => toJson_AutoScalingScheduledUpdateGroupAction(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeTagsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeTagsType(obj: AutoScalingDescribeTagsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_AutoScalingFilter(y)),
    'NextToken': obj.nextToken,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingTagsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingTagsType(obj: AutoScalingTagsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_AutoScalingTagDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDescribeTerminationPolicyTypesAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeTerminationPolicyTypesAnswer(obj: AutoScalingDescribeTerminationPolicyTypesAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TerminationPolicyTypes': obj.terminationPolicyTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDescribeWarmPoolType
 */
export interface AutoScalingDescribeWarmPoolType {
  /**
   * @schema AutoScalingDescribeWarmPoolType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDescribeWarmPoolType#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema AutoScalingDescribeWarmPoolType#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AutoScalingDescribeWarmPoolType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeWarmPoolType(obj: AutoScalingDescribeWarmPoolType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'MaxRecords': obj.maxRecords,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDescribeWarmPoolAnswer
 */
export interface AutoScalingDescribeWarmPoolAnswer {
  /**
   * @schema AutoScalingDescribeWarmPoolAnswer#WarmPoolConfiguration
   */
  readonly warmPoolConfiguration?: AutoScalingWarmPoolConfiguration;

  /**
   * @schema AutoScalingDescribeWarmPoolAnswer#Instances
   */
  readonly instances?: AutoScalingInstance[];

  /**
   * @schema AutoScalingDescribeWarmPoolAnswer#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AutoScalingDescribeWarmPoolAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDescribeWarmPoolAnswer(obj: AutoScalingDescribeWarmPoolAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WarmPoolConfiguration': toJson_AutoScalingWarmPoolConfiguration(obj.warmPoolConfiguration),
    'Instances': obj.instances?.map(y => toJson_AutoScalingInstance(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDetachInstancesQuery#ShouldDecrementDesiredCapacity
   */
  readonly shouldDecrementDesiredCapacity?: boolean;

}

/**
 * Converts an object of type 'AutoScalingDetachInstancesQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDetachInstancesQuery(obj: AutoScalingDetachInstancesQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIds': obj.instanceIds?.map(y => y),
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ShouldDecrementDesiredCapacity': obj.shouldDecrementDesiredCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingDetachInstancesAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDetachInstancesAnswer(obj: AutoScalingDetachInstancesAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Activities': obj.activities?.map(y => toJson_AutoScalingActivity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDetachLoadBalancerTargetGroupsType
 */
export interface AutoScalingDetachLoadBalancerTargetGroupsType {
  /**
   * @schema AutoScalingDetachLoadBalancerTargetGroupsType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDetachLoadBalancerTargetGroupsType#TargetGroupARNs
   */
  readonly targetGroupArNs?: string[];

}

/**
 * Converts an object of type 'AutoScalingDetachLoadBalancerTargetGroupsType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDetachLoadBalancerTargetGroupsType(obj: AutoScalingDetachLoadBalancerTargetGroupsType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'TargetGroupARNs': obj.targetGroupArNs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDetachLoadBalancerTargetGroupsResultType
 */
export interface AutoScalingDetachLoadBalancerTargetGroupsResultType {
}

/**
 * Converts an object of type 'AutoScalingDetachLoadBalancerTargetGroupsResultType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDetachLoadBalancerTargetGroupsResultType(obj: AutoScalingDetachLoadBalancerTargetGroupsResultType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDetachLoadBalancersType
 */
export interface AutoScalingDetachLoadBalancersType {
  /**
   * @schema AutoScalingDetachLoadBalancersType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDetachLoadBalancersType#LoadBalancerNames
   */
  readonly loadBalancerNames?: string[];

}

/**
 * Converts an object of type 'AutoScalingDetachLoadBalancersType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDetachLoadBalancersType(obj: AutoScalingDetachLoadBalancersType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'LoadBalancerNames': obj.loadBalancerNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDetachLoadBalancersResultType
 */
export interface AutoScalingDetachLoadBalancersResultType {
}

/**
 * Converts an object of type 'AutoScalingDetachLoadBalancersResultType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDetachLoadBalancersResultType(obj: AutoScalingDetachLoadBalancersResultType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDisableMetricsCollectionQuery
 */
export interface AutoScalingDisableMetricsCollectionQuery {
  /**
   * @schema AutoScalingDisableMetricsCollectionQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingDisableMetricsCollectionQuery#Metrics
   */
  readonly metrics?: string[];

}

/**
 * Converts an object of type 'AutoScalingDisableMetricsCollectionQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDisableMetricsCollectionQuery(obj: AutoScalingDisableMetricsCollectionQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'Metrics': obj.metrics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingEnableMetricsCollectionQuery
 */
export interface AutoScalingEnableMetricsCollectionQuery {
  /**
   * @schema AutoScalingEnableMetricsCollectionQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingEnableMetricsCollectionQuery#Metrics
   */
  readonly metrics?: string[];

  /**
   * @schema AutoScalingEnableMetricsCollectionQuery#Granularity
   */
  readonly granularity?: string;

}

/**
 * Converts an object of type 'AutoScalingEnableMetricsCollectionQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingEnableMetricsCollectionQuery(obj: AutoScalingEnableMetricsCollectionQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'Metrics': obj.metrics?.map(y => y),
    'Granularity': obj.granularity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingEnterStandbyQuery#ShouldDecrementDesiredCapacity
   */
  readonly shouldDecrementDesiredCapacity?: boolean;

}

/**
 * Converts an object of type 'AutoScalingEnterStandbyQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingEnterStandbyQuery(obj: AutoScalingEnterStandbyQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIds': obj.instanceIds?.map(y => y),
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ShouldDecrementDesiredCapacity': obj.shouldDecrementDesiredCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingEnterStandbyAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingEnterStandbyAnswer(obj: AutoScalingEnterStandbyAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Activities': obj.activities?.map(y => toJson_AutoScalingActivity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly policyName?: string;

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
 * Converts an object of type 'AutoScalingExecutePolicyType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingExecutePolicyType(obj: AutoScalingExecutePolicyType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'PolicyName': obj.policyName,
    'HonorCooldown': obj.honorCooldown,
    'MetricValue': obj.metricValue,
    'BreachThreshold': obj.breachThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly autoScalingGroupName?: string;

}

/**
 * Converts an object of type 'AutoScalingExitStandbyQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingExitStandbyQuery(obj: AutoScalingExitStandbyQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIds': obj.instanceIds?.map(y => y),
    'AutoScalingGroupName': obj.autoScalingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingExitStandbyAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingExitStandbyAnswer(obj: AutoScalingExitStandbyAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Activities': obj.activities?.map(y => toJson_AutoScalingActivity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingGetPredictiveScalingForecastType
 */
export interface AutoScalingGetPredictiveScalingForecastType {
  /**
   * @schema AutoScalingGetPredictiveScalingForecastType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingGetPredictiveScalingForecastType#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema AutoScalingGetPredictiveScalingForecastType#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AutoScalingGetPredictiveScalingForecastType#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'AutoScalingGetPredictiveScalingForecastType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingGetPredictiveScalingForecastType(obj: AutoScalingGetPredictiveScalingForecastType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'PolicyName': obj.policyName,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingGetPredictiveScalingForecastAnswer
 */
export interface AutoScalingGetPredictiveScalingForecastAnswer {
  /**
   * @schema AutoScalingGetPredictiveScalingForecastAnswer#LoadForecast
   */
  readonly loadForecast?: AutoScalingLoadForecast[];

  /**
   * @schema AutoScalingGetPredictiveScalingForecastAnswer#CapacityForecast
   */
  readonly capacityForecast?: AutoScalingCapacityForecast;

  /**
   * @schema AutoScalingGetPredictiveScalingForecastAnswer#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'AutoScalingGetPredictiveScalingForecastAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingGetPredictiveScalingForecastAnswer(obj: AutoScalingGetPredictiveScalingForecastAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoadForecast': obj.loadForecast?.map(y => toJson_AutoScalingLoadForecast(y)),
    'CapacityForecast': toJson_AutoScalingCapacityForecast(obj.capacityForecast),
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPutLifecycleHookType
 */
export interface AutoScalingPutLifecycleHookType {
  /**
   * @schema AutoScalingPutLifecycleHookType#LifecycleHookName
   */
  readonly lifecycleHookName?: string;

  /**
   * @schema AutoScalingPutLifecycleHookType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

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
 * Converts an object of type 'AutoScalingPutLifecycleHookType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPutLifecycleHookType(obj: AutoScalingPutLifecycleHookType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LifecycleHookName': obj.lifecycleHookName,
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'LifecycleTransition': obj.lifecycleTransition,
    'RoleARN': obj.roleArn,
    'NotificationTargetARN': obj.notificationTargetArn,
    'NotificationMetadata': obj.notificationMetadata,
    'HeartbeatTimeout': obj.heartbeatTimeout,
    'DefaultResult': obj.defaultResult,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPutLifecycleHookAnswer
 */
export interface AutoScalingPutLifecycleHookAnswer {
}

/**
 * Converts an object of type 'AutoScalingPutLifecycleHookAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPutLifecycleHookAnswer(obj: AutoScalingPutLifecycleHookAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPutNotificationConfigurationType
 */
export interface AutoScalingPutNotificationConfigurationType {
  /**
   * @schema AutoScalingPutNotificationConfigurationType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingPutNotificationConfigurationType#TopicARN
   */
  readonly topicArn?: string;

  /**
   * @schema AutoScalingPutNotificationConfigurationType#NotificationTypes
   */
  readonly notificationTypes?: string[];

}

/**
 * Converts an object of type 'AutoScalingPutNotificationConfigurationType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPutNotificationConfigurationType(obj: AutoScalingPutNotificationConfigurationType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'TopicARN': obj.topicArn,
    'NotificationTypes': obj.notificationTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPutScalingPolicyType
 */
export interface AutoScalingPutScalingPolicyType {
  /**
   * @schema AutoScalingPutScalingPolicyType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingPutScalingPolicyType#PolicyName
   */
  readonly policyName?: string;

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

  /**
   * @schema AutoScalingPutScalingPolicyType#PredictiveScalingConfiguration
   */
  readonly predictiveScalingConfiguration?: AutoScalingPredictiveScalingConfiguration;

}

/**
 * Converts an object of type 'AutoScalingPutScalingPolicyType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPutScalingPolicyType(obj: AutoScalingPutScalingPolicyType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'PolicyName': obj.policyName,
    'PolicyType': obj.policyType,
    'AdjustmentType': obj.adjustmentType,
    'MinAdjustmentStep': obj.minAdjustmentStep,
    'MinAdjustmentMagnitude': obj.minAdjustmentMagnitude,
    'ScalingAdjustment': obj.scalingAdjustment,
    'Cooldown': obj.cooldown,
    'MetricAggregationType': obj.metricAggregationType,
    'StepAdjustments': obj.stepAdjustments?.map(y => toJson_AutoScalingStepAdjustment(y)),
    'EstimatedInstanceWarmup': obj.estimatedInstanceWarmup,
    'TargetTrackingConfiguration': toJson_AutoScalingTargetTrackingConfiguration(obj.targetTrackingConfiguration),
    'Enabled': obj.enabled,
    'PredictiveScalingConfiguration': toJson_AutoScalingPredictiveScalingConfiguration(obj.predictiveScalingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingPolicyArnType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPolicyArnType(obj: AutoScalingPolicyArnType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyARN': obj.policyArn,
    'Alarms': obj.alarms?.map(y => toJson_AutoScalingAlarm(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPutScheduledUpdateGroupActionType
 */
export interface AutoScalingPutScheduledUpdateGroupActionType {
  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#ScheduledActionName
   */
  readonly scheduledActionName?: string;

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

  /**
   * @schema AutoScalingPutScheduledUpdateGroupActionType#TimeZone
   */
  readonly timeZone?: string;

}

/**
 * Converts an object of type 'AutoScalingPutScheduledUpdateGroupActionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPutScheduledUpdateGroupActionType(obj: AutoScalingPutScheduledUpdateGroupActionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ScheduledActionName': obj.scheduledActionName,
    'Time': obj.time,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Recurrence': obj.recurrence,
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'DesiredCapacity': obj.desiredCapacity,
    'TimeZone': obj.timeZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPutWarmPoolType
 */
export interface AutoScalingPutWarmPoolType {
  /**
   * @schema AutoScalingPutWarmPoolType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingPutWarmPoolType#MaxGroupPreparedCapacity
   */
  readonly maxGroupPreparedCapacity?: number;

  /**
   * @schema AutoScalingPutWarmPoolType#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema AutoScalingPutWarmPoolType#PoolState
   */
  readonly poolState?: string;

}

/**
 * Converts an object of type 'AutoScalingPutWarmPoolType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPutWarmPoolType(obj: AutoScalingPutWarmPoolType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'MaxGroupPreparedCapacity': obj.maxGroupPreparedCapacity,
    'MinSize': obj.minSize,
    'PoolState': obj.poolState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPutWarmPoolAnswer
 */
export interface AutoScalingPutWarmPoolAnswer {
}

/**
 * Converts an object of type 'AutoScalingPutWarmPoolAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPutWarmPoolAnswer(obj: AutoScalingPutWarmPoolAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingRecordLifecycleActionHeartbeatType
 */
export interface AutoScalingRecordLifecycleActionHeartbeatType {
  /**
   * @schema AutoScalingRecordLifecycleActionHeartbeatType#LifecycleHookName
   */
  readonly lifecycleHookName?: string;

  /**
   * @schema AutoScalingRecordLifecycleActionHeartbeatType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

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
 * Converts an object of type 'AutoScalingRecordLifecycleActionHeartbeatType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingRecordLifecycleActionHeartbeatType(obj: AutoScalingRecordLifecycleActionHeartbeatType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LifecycleHookName': obj.lifecycleHookName,
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'LifecycleActionToken': obj.lifecycleActionToken,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingRecordLifecycleActionHeartbeatAnswer
 */
export interface AutoScalingRecordLifecycleActionHeartbeatAnswer {
}

/**
 * Converts an object of type 'AutoScalingRecordLifecycleActionHeartbeatAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingRecordLifecycleActionHeartbeatAnswer(obj: AutoScalingRecordLifecycleActionHeartbeatAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingScalingProcessQuery
 */
export interface AutoScalingScalingProcessQuery {
  /**
   * @schema AutoScalingScalingProcessQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingScalingProcessQuery#ScalingProcesses
   */
  readonly scalingProcesses?: string[];

}

/**
 * Converts an object of type 'AutoScalingScalingProcessQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingScalingProcessQuery(obj: AutoScalingScalingProcessQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ScalingProcesses': obj.scalingProcesses?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingSetDesiredCapacityType
 */
export interface AutoScalingSetDesiredCapacityType {
  /**
   * @schema AutoScalingSetDesiredCapacityType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingSetDesiredCapacityType#DesiredCapacity
   */
  readonly desiredCapacity?: number;

  /**
   * @schema AutoScalingSetDesiredCapacityType#HonorCooldown
   */
  readonly honorCooldown?: boolean;

}

/**
 * Converts an object of type 'AutoScalingSetDesiredCapacityType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingSetDesiredCapacityType(obj: AutoScalingSetDesiredCapacityType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'DesiredCapacity': obj.desiredCapacity,
    'HonorCooldown': obj.honorCooldown,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingSetInstanceHealthQuery
 */
export interface AutoScalingSetInstanceHealthQuery {
  /**
   * @schema AutoScalingSetInstanceHealthQuery#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AutoScalingSetInstanceHealthQuery#HealthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema AutoScalingSetInstanceHealthQuery#ShouldRespectGracePeriod
   */
  readonly shouldRespectGracePeriod?: boolean;

}

/**
 * Converts an object of type 'AutoScalingSetInstanceHealthQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingSetInstanceHealthQuery(obj: AutoScalingSetInstanceHealthQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'HealthStatus': obj.healthStatus,
    'ShouldRespectGracePeriod': obj.shouldRespectGracePeriod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingSetInstanceProtectionQuery
 */
export interface AutoScalingSetInstanceProtectionQuery {
  /**
   * @schema AutoScalingSetInstanceProtectionQuery#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema AutoScalingSetInstanceProtectionQuery#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingSetInstanceProtectionQuery#ProtectedFromScaleIn
   */
  readonly protectedFromScaleIn?: boolean;

}

/**
 * Converts an object of type 'AutoScalingSetInstanceProtectionQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingSetInstanceProtectionQuery(obj: AutoScalingSetInstanceProtectionQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIds': obj.instanceIds?.map(y => y),
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ProtectedFromScaleIn': obj.protectedFromScaleIn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingSetInstanceProtectionAnswer
 */
export interface AutoScalingSetInstanceProtectionAnswer {
}

/**
 * Converts an object of type 'AutoScalingSetInstanceProtectionAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingSetInstanceProtectionAnswer(obj: AutoScalingSetInstanceProtectionAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingStartInstanceRefreshType
 */
export interface AutoScalingStartInstanceRefreshType {
  /**
   * @schema AutoScalingStartInstanceRefreshType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingStartInstanceRefreshType#Strategy
   */
  readonly strategy?: string;

  /**
   * @schema AutoScalingStartInstanceRefreshType#DesiredConfiguration
   */
  readonly desiredConfiguration?: AutoScalingDesiredConfiguration;

  /**
   * @schema AutoScalingStartInstanceRefreshType#Preferences
   */
  readonly preferences?: AutoScalingRefreshPreferences;

}

/**
 * Converts an object of type 'AutoScalingStartInstanceRefreshType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingStartInstanceRefreshType(obj: AutoScalingStartInstanceRefreshType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'Strategy': obj.strategy,
    'DesiredConfiguration': toJson_AutoScalingDesiredConfiguration(obj.desiredConfiguration),
    'Preferences': toJson_AutoScalingRefreshPreferences(obj.preferences),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingStartInstanceRefreshAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingStartInstanceRefreshAnswer(obj: AutoScalingStartInstanceRefreshAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceRefreshId': obj.instanceRefreshId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingTerminateInstanceInAutoScalingGroupType
 */
export interface AutoScalingTerminateInstanceInAutoScalingGroupType {
  /**
   * @schema AutoScalingTerminateInstanceInAutoScalingGroupType#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AutoScalingTerminateInstanceInAutoScalingGroupType#ShouldDecrementDesiredCapacity
   */
  readonly shouldDecrementDesiredCapacity?: boolean;

}

/**
 * Converts an object of type 'AutoScalingTerminateInstanceInAutoScalingGroupType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingTerminateInstanceInAutoScalingGroupType(obj: AutoScalingTerminateInstanceInAutoScalingGroupType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ShouldDecrementDesiredCapacity': obj.shouldDecrementDesiredCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingActivityType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingActivityType(obj: AutoScalingActivityType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Activity': toJson_AutoScalingActivity(obj.activity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingUpdateAutoScalingGroupType
 */
export interface AutoScalingUpdateAutoScalingGroupType {
  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

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

  /**
   * @schema AutoScalingUpdateAutoScalingGroupType#Context
   */
  readonly context?: string;

}

/**
 * Converts an object of type 'AutoScalingUpdateAutoScalingGroupType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingUpdateAutoScalingGroupType(obj: AutoScalingUpdateAutoScalingGroupType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'LaunchConfigurationName': obj.launchConfigurationName,
    'LaunchTemplate': toJson_AutoScalingLaunchTemplateSpecification(obj.launchTemplate),
    'MixedInstancesPolicy': toJson_AutoScalingMixedInstancesPolicy(obj.mixedInstancesPolicy),
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'DesiredCapacity': obj.desiredCapacity,
    'DefaultCooldown': obj.defaultCooldown,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'HealthCheckType': obj.healthCheckType,
    'HealthCheckGracePeriod': obj.healthCheckGracePeriod,
    'PlacementGroup': obj.placementGroup,
    'VPCZoneIdentifier': obj.vpcZoneIdentifier,
    'TerminationPolicies': obj.terminationPolicies?.map(y => y),
    'NewInstancesProtectedFromScaleIn': obj.newInstancesProtectedFromScaleIn,
    'ServiceLinkedRoleARN': obj.serviceLinkedRoleArn,
    'MaxInstanceLifetime': obj.maxInstanceLifetime,
    'CapacityRebalance': obj.capacityRebalance,
    'Context': obj.context,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingFailedScheduledUpdateGroupActionRequest
 */
export interface AutoScalingFailedScheduledUpdateGroupActionRequest {
  /**
   * @schema AutoScalingFailedScheduledUpdateGroupActionRequest#ScheduledActionName
   */
  readonly scheduledActionName?: string;

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
 * Converts an object of type 'AutoScalingFailedScheduledUpdateGroupActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingFailedScheduledUpdateGroupActionRequest(obj: AutoScalingFailedScheduledUpdateGroupActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActionName': obj.scheduledActionName,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingScheduledUpdateGroupActionRequest
 */
export interface AutoScalingScheduledUpdateGroupActionRequest {
  /**
   * @schema AutoScalingScheduledUpdateGroupActionRequest#ScheduledActionName
   */
  readonly scheduledActionName?: string;

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

  /**
   * @schema AutoScalingScheduledUpdateGroupActionRequest#TimeZone
   */
  readonly timeZone?: string;

}

/**
 * Converts an object of type 'AutoScalingScheduledUpdateGroupActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingScheduledUpdateGroupActionRequest(obj: AutoScalingScheduledUpdateGroupActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActionName': obj.scheduledActionName,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Recurrence': obj.recurrence,
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'DesiredCapacity': obj.desiredCapacity,
    'TimeZone': obj.timeZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingLaunchTemplateSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLaunchTemplateSpecification(obj: AutoScalingLaunchTemplateSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchTemplateId': obj.launchTemplateId,
    'LaunchTemplateName': obj.launchTemplateName,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingMixedInstancesPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingMixedInstancesPolicy(obj: AutoScalingMixedInstancesPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchTemplate': toJson_AutoScalingLaunchTemplate(obj.launchTemplate),
    'InstancesDistribution': toJson_AutoScalingInstancesDistribution(obj.instancesDistribution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingLifecycleHookSpecification
 */
export interface AutoScalingLifecycleHookSpecification {
  /**
   * @schema AutoScalingLifecycleHookSpecification#LifecycleHookName
   */
  readonly lifecycleHookName?: string;

  /**
   * @schema AutoScalingLifecycleHookSpecification#LifecycleTransition
   */
  readonly lifecycleTransition?: string;

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
 * Converts an object of type 'AutoScalingLifecycleHookSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLifecycleHookSpecification(obj: AutoScalingLifecycleHookSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LifecycleHookName': obj.lifecycleHookName,
    'LifecycleTransition': obj.lifecycleTransition,
    'NotificationMetadata': obj.notificationMetadata,
    'HeartbeatTimeout': obj.heartbeatTimeout,
    'DefaultResult': obj.defaultResult,
    'NotificationTargetARN': obj.notificationTargetArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly key?: string;

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
 * Converts an object of type 'AutoScalingTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingTag(obj: AutoScalingTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
    'Key': obj.key,
    'Value': obj.value,
    'PropagateAtLaunch': obj.propagateAtLaunch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly deviceName?: string;

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
 * Converts an object of type 'AutoScalingBlockDeviceMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingBlockDeviceMapping(obj: AutoScalingBlockDeviceMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VirtualName': obj.virtualName,
    'DeviceName': obj.deviceName,
    'Ebs': toJson_AutoScalingEbs(obj.ebs),
    'NoDevice': obj.noDevice,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingInstanceMonitoring' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingInstanceMonitoring(obj: AutoScalingInstanceMonitoring | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingInstanceMetadataOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingInstanceMetadataOptions(obj: AutoScalingInstanceMetadataOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HttpTokens': obj.httpTokens,
    'HttpPutResponseHopLimit': obj.httpPutResponseHopLimit,
    'HttpEndpoint': obj.httpEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingAdjustmentType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAdjustmentType(obj: AutoScalingAdjustmentType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdjustmentType': obj.adjustmentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingAutoScalingGroup
 */
export interface AutoScalingAutoScalingGroup {
  /**
   * @schema AutoScalingAutoScalingGroup#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

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
  readonly minSize?: number;

  /**
   * @schema AutoScalingAutoScalingGroup#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema AutoScalingAutoScalingGroup#DesiredCapacity
   */
  readonly desiredCapacity?: number;

  /**
   * @schema AutoScalingAutoScalingGroup#PredictedCapacity
   */
  readonly predictedCapacity?: number;

  /**
   * @schema AutoScalingAutoScalingGroup#DefaultCooldown
   */
  readonly defaultCooldown?: number;

  /**
   * @schema AutoScalingAutoScalingGroup#AvailabilityZones
   */
  readonly availabilityZones?: string[];

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
  readonly healthCheckType?: string;

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
  readonly createdTime?: string;

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

  /**
   * @schema AutoScalingAutoScalingGroup#WarmPoolConfiguration
   */
  readonly warmPoolConfiguration?: AutoScalingWarmPoolConfiguration;

  /**
   * @schema AutoScalingAutoScalingGroup#WarmPoolSize
   */
  readonly warmPoolSize?: number;

  /**
   * @schema AutoScalingAutoScalingGroup#Context
   */
  readonly context?: string;

}

/**
 * Converts an object of type 'AutoScalingAutoScalingGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAutoScalingGroup(obj: AutoScalingAutoScalingGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'AutoScalingGroupARN': obj.autoScalingGroupArn,
    'LaunchConfigurationName': obj.launchConfigurationName,
    'LaunchTemplate': toJson_AutoScalingLaunchTemplateSpecification(obj.launchTemplate),
    'MixedInstancesPolicy': toJson_AutoScalingMixedInstancesPolicy(obj.mixedInstancesPolicy),
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'DesiredCapacity': obj.desiredCapacity,
    'PredictedCapacity': obj.predictedCapacity,
    'DefaultCooldown': obj.defaultCooldown,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'LoadBalancerNames': obj.loadBalancerNames?.map(y => y),
    'TargetGroupARNs': obj.targetGroupArNs?.map(y => y),
    'HealthCheckType': obj.healthCheckType,
    'HealthCheckGracePeriod': obj.healthCheckGracePeriod,
    'Instances': obj.instances?.map(y => toJson_AutoScalingInstance(y)),
    'CreatedTime': obj.createdTime,
    'SuspendedProcesses': obj.suspendedProcesses?.map(y => toJson_AutoScalingSuspendedProcess(y)),
    'PlacementGroup': obj.placementGroup,
    'VPCZoneIdentifier': obj.vpcZoneIdentifier,
    'EnabledMetrics': obj.enabledMetrics?.map(y => toJson_AutoScalingEnabledMetric(y)),
    'Status': obj.status,
    'Tags': obj.tags?.map(y => toJson_AutoScalingTagDescription(y)),
    'TerminationPolicies': obj.terminationPolicies?.map(y => y),
    'NewInstancesProtectedFromScaleIn': obj.newInstancesProtectedFromScaleIn,
    'ServiceLinkedRoleARN': obj.serviceLinkedRoleArn,
    'MaxInstanceLifetime': obj.maxInstanceLifetime,
    'CapacityRebalance': obj.capacityRebalance,
    'WarmPoolConfiguration': toJson_AutoScalingWarmPoolConfiguration(obj.warmPoolConfiguration),
    'WarmPoolSize': obj.warmPoolSize,
    'Context': obj.context,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingAutoScalingInstanceDetails
 */
export interface AutoScalingAutoScalingInstanceDetails {
  /**
   * @schema AutoScalingAutoScalingInstanceDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#LifecycleState
   */
  readonly lifecycleState?: string;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#HealthStatus
   */
  readonly healthStatus?: string;

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
  readonly protectedFromScaleIn?: boolean;

  /**
   * @schema AutoScalingAutoScalingInstanceDetails#WeightedCapacity
   */
  readonly weightedCapacity?: string;

}

/**
 * Converts an object of type 'AutoScalingAutoScalingInstanceDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAutoScalingInstanceDetails(obj: AutoScalingAutoScalingInstanceDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'InstanceType': obj.instanceType,
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'AvailabilityZone': obj.availabilityZone,
    'LifecycleState': obj.lifecycleState,
    'HealthStatus': obj.healthStatus,
    'LaunchConfigurationName': obj.launchConfigurationName,
    'LaunchTemplate': toJson_AutoScalingLaunchTemplateSpecification(obj.launchTemplate),
    'ProtectedFromScaleIn': obj.protectedFromScaleIn,
    'WeightedCapacity': obj.weightedCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema AutoScalingInstanceRefresh#ProgressDetails
   */
  readonly progressDetails?: AutoScalingInstanceRefreshProgressDetails;

  /**
   * @schema AutoScalingInstanceRefresh#Preferences
   */
  readonly preferences?: AutoScalingRefreshPreferences;

  /**
   * @schema AutoScalingInstanceRefresh#DesiredConfiguration
   */
  readonly desiredConfiguration?: AutoScalingDesiredConfiguration;

}

/**
 * Converts an object of type 'AutoScalingInstanceRefresh' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingInstanceRefresh(obj: AutoScalingInstanceRefresh | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceRefreshId': obj.instanceRefreshId,
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'PercentageComplete': obj.percentageComplete,
    'InstancesToUpdate': obj.instancesToUpdate,
    'ProgressDetails': toJson_AutoScalingInstanceRefreshProgressDetails(obj.progressDetails),
    'Preferences': toJson_AutoScalingRefreshPreferences(obj.preferences),
    'DesiredConfiguration': toJson_AutoScalingDesiredConfiguration(obj.desiredConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingLaunchConfiguration
 */
export interface AutoScalingLaunchConfiguration {
  /**
   * @schema AutoScalingLaunchConfiguration#LaunchConfigurationName
   */
  readonly launchConfigurationName?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#LaunchConfigurationARN
   */
  readonly launchConfigurationArn?: string;

  /**
   * @schema AutoScalingLaunchConfiguration#ImageId
   */
  readonly imageId?: string;

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
  readonly instanceType?: string;

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
  readonly createdTime?: string;

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
 * Converts an object of type 'AutoScalingLaunchConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLaunchConfiguration(obj: AutoScalingLaunchConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchConfigurationName': obj.launchConfigurationName,
    'LaunchConfigurationARN': obj.launchConfigurationArn,
    'ImageId': obj.imageId,
    'KeyName': obj.keyName,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'ClassicLinkVPCId': obj.classicLinkVpcId,
    'ClassicLinkVPCSecurityGroups': obj.classicLinkVpcSecurityGroups?.map(y => y),
    'UserData': obj.userData,
    'InstanceType': obj.instanceType,
    'KernelId': obj.kernelId,
    'RamdiskId': obj.ramdiskId,
    'BlockDeviceMappings': obj.blockDeviceMappings?.map(y => toJson_AutoScalingBlockDeviceMapping(y)),
    'InstanceMonitoring': toJson_AutoScalingInstanceMonitoring(obj.instanceMonitoring),
    'SpotPrice': obj.spotPrice,
    'IamInstanceProfile': obj.iamInstanceProfile,
    'CreatedTime': obj.createdTime,
    'EbsOptimized': obj.ebsOptimized,
    'AssociatePublicIpAddress': obj.associatePublicIpAddress,
    'PlacementTenancy': obj.placementTenancy,
    'MetadataOptions': toJson_AutoScalingInstanceMetadataOptions(obj.metadataOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingLifecycleHook' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLifecycleHook(obj: AutoScalingLifecycleHook | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LifecycleHookName': obj.lifecycleHookName,
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'LifecycleTransition': obj.lifecycleTransition,
    'NotificationTargetARN': obj.notificationTargetArn,
    'RoleARN': obj.roleArn,
    'NotificationMetadata': obj.notificationMetadata,
    'HeartbeatTimeout': obj.heartbeatTimeout,
    'GlobalTimeout': obj.globalTimeout,
    'DefaultResult': obj.defaultResult,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingLoadBalancerTargetGroupState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLoadBalancerTargetGroupState(obj: AutoScalingLoadBalancerTargetGroupState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoadBalancerTargetGroupARN': obj.loadBalancerTargetGroupArn,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingLoadBalancerState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLoadBalancerState(obj: AutoScalingLoadBalancerState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoadBalancerName': obj.loadBalancerName,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingMetricCollectionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingMetricCollectionType(obj: AutoScalingMetricCollectionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metric': obj.metric,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingMetricGranularityType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingMetricGranularityType(obj: AutoScalingMetricGranularityType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Granularity': obj.granularity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingNotificationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingNotificationConfiguration(obj: AutoScalingNotificationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'TopicARN': obj.topicArn,
    'NotificationType': obj.notificationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema AutoScalingScalingPolicy#PredictiveScalingConfiguration
   */
  readonly predictiveScalingConfiguration?: AutoScalingPredictiveScalingConfiguration;

}

/**
 * Converts an object of type 'AutoScalingScalingPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingScalingPolicy(obj: AutoScalingScalingPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'PolicyName': obj.policyName,
    'PolicyARN': obj.policyArn,
    'PolicyType': obj.policyType,
    'AdjustmentType': obj.adjustmentType,
    'MinAdjustmentStep': obj.minAdjustmentStep,
    'MinAdjustmentMagnitude': obj.minAdjustmentMagnitude,
    'ScalingAdjustment': obj.scalingAdjustment,
    'Cooldown': obj.cooldown,
    'StepAdjustments': obj.stepAdjustments?.map(y => toJson_AutoScalingStepAdjustment(y)),
    'MetricAggregationType': obj.metricAggregationType,
    'EstimatedInstanceWarmup': obj.estimatedInstanceWarmup,
    'Alarms': obj.alarms?.map(y => toJson_AutoScalingAlarm(y)),
    'TargetTrackingConfiguration': toJson_AutoScalingTargetTrackingConfiguration(obj.targetTrackingConfiguration),
    'Enabled': obj.enabled,
    'PredictiveScalingConfiguration': toJson_AutoScalingPredictiveScalingConfiguration(obj.predictiveScalingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingActivity
 */
export interface AutoScalingActivity {
  /**
   * @schema AutoScalingActivity#ActivityId
   */
  readonly activityId?: string;

  /**
   * @schema AutoScalingActivity#AutoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingActivity#Description
   */
  readonly description?: string;

  /**
   * @schema AutoScalingActivity#Cause
   */
  readonly cause?: string;

  /**
   * @schema AutoScalingActivity#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AutoScalingActivity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AutoScalingActivity#StatusCode
   */
  readonly statusCode?: string;

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

  /**
   * @schema AutoScalingActivity#AutoScalingGroupState
   */
  readonly autoScalingGroupState?: string;

  /**
   * @schema AutoScalingActivity#AutoScalingGroupARN
   */
  readonly autoScalingGroupArn?: string;

}

/**
 * Converts an object of type 'AutoScalingActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingActivity(obj: AutoScalingActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivityId': obj.activityId,
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'Description': obj.description,
    'Cause': obj.cause,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'StatusCode': obj.statusCode,
    'StatusMessage': obj.statusMessage,
    'Progress': obj.progress,
    'Details': obj.details,
    'AutoScalingGroupState': obj.autoScalingGroupState,
    'AutoScalingGroupARN': obj.autoScalingGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingProcessType
 */
export interface AutoScalingProcessType {
  /**
   * @schema AutoScalingProcessType#ProcessName
   */
  readonly processName?: string;

}

/**
 * Converts an object of type 'AutoScalingProcessType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingProcessType(obj: AutoScalingProcessType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProcessName': obj.processName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema AutoScalingScheduledUpdateGroupAction#TimeZone
   */
  readonly timeZone?: string;

}

/**
 * Converts an object of type 'AutoScalingScheduledUpdateGroupAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingScheduledUpdateGroupAction(obj: AutoScalingScheduledUpdateGroupAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingGroupName': obj.autoScalingGroupName,
    'ScheduledActionName': obj.scheduledActionName,
    'ScheduledActionARN': obj.scheduledActionArn,
    'Time': obj.time,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Recurrence': obj.recurrence,
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'DesiredCapacity': obj.desiredCapacity,
    'TimeZone': obj.timeZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingFilter(obj: AutoScalingFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingTagDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingTagDescription(obj: AutoScalingTagDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
    'Key': obj.key,
    'Value': obj.value,
    'PropagateAtLaunch': obj.propagateAtLaunch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingWarmPoolConfiguration
 */
export interface AutoScalingWarmPoolConfiguration {
  /**
   * @schema AutoScalingWarmPoolConfiguration#MaxGroupPreparedCapacity
   */
  readonly maxGroupPreparedCapacity?: number;

  /**
   * @schema AutoScalingWarmPoolConfiguration#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema AutoScalingWarmPoolConfiguration#PoolState
   */
  readonly poolState?: string;

  /**
   * @schema AutoScalingWarmPoolConfiguration#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AutoScalingWarmPoolConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingWarmPoolConfiguration(obj: AutoScalingWarmPoolConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxGroupPreparedCapacity': obj.maxGroupPreparedCapacity,
    'MinSize': obj.minSize,
    'PoolState': obj.poolState,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingInstance
 */
export interface AutoScalingInstance {
  /**
   * @schema AutoScalingInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AutoScalingInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AutoScalingInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema AutoScalingInstance#LifecycleState
   */
  readonly lifecycleState?: string;

  /**
   * @schema AutoScalingInstance#HealthStatus
   */
  readonly healthStatus?: string;

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
  readonly protectedFromScaleIn?: boolean;

  /**
   * @schema AutoScalingInstance#WeightedCapacity
   */
  readonly weightedCapacity?: string;

}

/**
 * Converts an object of type 'AutoScalingInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingInstance(obj: AutoScalingInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'InstanceType': obj.instanceType,
    'AvailabilityZone': obj.availabilityZone,
    'LifecycleState': obj.lifecycleState,
    'HealthStatus': obj.healthStatus,
    'LaunchConfigurationName': obj.launchConfigurationName,
    'LaunchTemplate': toJson_AutoScalingLaunchTemplateSpecification(obj.launchTemplate),
    'ProtectedFromScaleIn': obj.protectedFromScaleIn,
    'WeightedCapacity': obj.weightedCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingLoadForecast
 */
export interface AutoScalingLoadForecast {
  /**
   * @schema AutoScalingLoadForecast#Timestamps
   */
  readonly timestamps?: string[];

  /**
   * @schema AutoScalingLoadForecast#Values
   */
  readonly values?: number[];

  /**
   * @schema AutoScalingLoadForecast#MetricSpecification
   */
  readonly metricSpecification?: AutoScalingPredictiveScalingMetricSpecification;

}

/**
 * Converts an object of type 'AutoScalingLoadForecast' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLoadForecast(obj: AutoScalingLoadForecast | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamps': obj.timestamps?.map(y => y),
    'Values': obj.values?.map(y => y),
    'MetricSpecification': toJson_AutoScalingPredictiveScalingMetricSpecification(obj.metricSpecification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingCapacityForecast
 */
export interface AutoScalingCapacityForecast {
  /**
   * @schema AutoScalingCapacityForecast#Timestamps
   */
  readonly timestamps?: string[];

  /**
   * @schema AutoScalingCapacityForecast#Values
   */
  readonly values?: number[];

}

/**
 * Converts an object of type 'AutoScalingCapacityForecast' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingCapacityForecast(obj: AutoScalingCapacityForecast | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamps': obj.timestamps?.map(y => y),
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly scalingAdjustment?: number;

}

/**
 * Converts an object of type 'AutoScalingStepAdjustment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingStepAdjustment(obj: AutoScalingStepAdjustment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricIntervalLowerBound': obj.metricIntervalLowerBound,
    'MetricIntervalUpperBound': obj.metricIntervalUpperBound,
    'ScalingAdjustment': obj.scalingAdjustment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly targetValue?: number;

  /**
   * @schema AutoScalingTargetTrackingConfiguration#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

}

/**
 * Converts an object of type 'AutoScalingTargetTrackingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingTargetTrackingConfiguration(obj: AutoScalingTargetTrackingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PredefinedMetricSpecification': toJson_AutoScalingPredefinedMetricSpecification(obj.predefinedMetricSpecification),
    'CustomizedMetricSpecification': toJson_AutoScalingCustomizedMetricSpecification(obj.customizedMetricSpecification),
    'TargetValue': obj.targetValue,
    'DisableScaleIn': obj.disableScaleIn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPredictiveScalingConfiguration
 */
export interface AutoScalingPredictiveScalingConfiguration {
  /**
   * @schema AutoScalingPredictiveScalingConfiguration#MetricSpecifications
   */
  readonly metricSpecifications?: AutoScalingPredictiveScalingMetricSpecification[];

  /**
   * @schema AutoScalingPredictiveScalingConfiguration#Mode
   */
  readonly mode?: string;

  /**
   * @schema AutoScalingPredictiveScalingConfiguration#SchedulingBufferTime
   */
  readonly schedulingBufferTime?: number;

  /**
   * @schema AutoScalingPredictiveScalingConfiguration#MaxCapacityBreachBehavior
   */
  readonly maxCapacityBreachBehavior?: string;

  /**
   * @schema AutoScalingPredictiveScalingConfiguration#MaxCapacityBuffer
   */
  readonly maxCapacityBuffer?: number;

}

/**
 * Converts an object of type 'AutoScalingPredictiveScalingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPredictiveScalingConfiguration(obj: AutoScalingPredictiveScalingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricSpecifications': obj.metricSpecifications?.map(y => toJson_AutoScalingPredictiveScalingMetricSpecification(y)),
    'Mode': obj.mode,
    'SchedulingBufferTime': obj.schedulingBufferTime,
    'MaxCapacityBreachBehavior': obj.maxCapacityBreachBehavior,
    'MaxCapacityBuffer': obj.maxCapacityBuffer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingAlarm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingAlarm(obj: AutoScalingAlarm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlarmName': obj.alarmName,
    'AlarmARN': obj.alarmArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingDesiredConfiguration
 */
export interface AutoScalingDesiredConfiguration {
  /**
   * @schema AutoScalingDesiredConfiguration#LaunchTemplate
   */
  readonly launchTemplate?: AutoScalingLaunchTemplateSpecification;

  /**
   * @schema AutoScalingDesiredConfiguration#MixedInstancesPolicy
   */
  readonly mixedInstancesPolicy?: AutoScalingMixedInstancesPolicy;

}

/**
 * Converts an object of type 'AutoScalingDesiredConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingDesiredConfiguration(obj: AutoScalingDesiredConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchTemplate': toJson_AutoScalingLaunchTemplateSpecification(obj.launchTemplate),
    'MixedInstancesPolicy': toJson_AutoScalingMixedInstancesPolicy(obj.mixedInstancesPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema AutoScalingRefreshPreferences#CheckpointPercentages
   */
  readonly checkpointPercentages?: number[];

  /**
   * @schema AutoScalingRefreshPreferences#CheckpointDelay
   */
  readonly checkpointDelay?: number;

  /**
   * @schema AutoScalingRefreshPreferences#SkipMatching
   */
  readonly skipMatching?: boolean;

}

/**
 * Converts an object of type 'AutoScalingRefreshPreferences' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingRefreshPreferences(obj: AutoScalingRefreshPreferences | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinHealthyPercentage': obj.minHealthyPercentage,
    'InstanceWarmup': obj.instanceWarmup,
    'CheckpointPercentages': obj.checkpointPercentages?.map(y => y),
    'CheckpointDelay': obj.checkpointDelay,
    'SkipMatching': obj.skipMatching,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingLaunchTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLaunchTemplate(obj: AutoScalingLaunchTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchTemplateSpecification': toJson_AutoScalingLaunchTemplateSpecification(obj.launchTemplateSpecification),
    'Overrides': obj.overrides?.map(y => toJson_AutoScalingLaunchTemplateOverrides(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingInstancesDistribution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingInstancesDistribution(obj: AutoScalingInstancesDistribution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OnDemandAllocationStrategy': obj.onDemandAllocationStrategy,
    'OnDemandBaseCapacity': obj.onDemandBaseCapacity,
    'OnDemandPercentageAboveBaseCapacity': obj.onDemandPercentageAboveBaseCapacity,
    'SpotAllocationStrategy': obj.spotAllocationStrategy,
    'SpotInstancePools': obj.spotInstancePools,
    'SpotMaxPrice': obj.spotMaxPrice,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema AutoScalingEbs#Throughput
   */
  readonly throughput?: number;

}

/**
 * Converts an object of type 'AutoScalingEbs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingEbs(obj: AutoScalingEbs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotId': obj.snapshotId,
    'VolumeSize': obj.volumeSize,
    'VolumeType': obj.volumeType,
    'DeleteOnTermination': obj.deleteOnTermination,
    'Iops': obj.iops,
    'Encrypted': obj.encrypted,
    'Throughput': obj.throughput,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingSuspendedProcess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingSuspendedProcess(obj: AutoScalingSuspendedProcess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProcessName': obj.processName,
    'SuspensionReason': obj.suspensionReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingEnabledMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingEnabledMetric(obj: AutoScalingEnabledMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metric': obj.metric,
    'Granularity': obj.granularity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingInstanceRefreshProgressDetails
 */
export interface AutoScalingInstanceRefreshProgressDetails {
  /**
   * @schema AutoScalingInstanceRefreshProgressDetails#LivePoolProgress
   */
  readonly livePoolProgress?: AutoScalingInstanceRefreshLivePoolProgress;

  /**
   * @schema AutoScalingInstanceRefreshProgressDetails#WarmPoolProgress
   */
  readonly warmPoolProgress?: AutoScalingInstanceRefreshWarmPoolProgress;

}

/**
 * Converts an object of type 'AutoScalingInstanceRefreshProgressDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingInstanceRefreshProgressDetails(obj: AutoScalingInstanceRefreshProgressDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LivePoolProgress': toJson_AutoScalingInstanceRefreshLivePoolProgress(obj.livePoolProgress),
    'WarmPoolProgress': toJson_AutoScalingInstanceRefreshWarmPoolProgress(obj.warmPoolProgress),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPredictiveScalingMetricSpecification
 */
export interface AutoScalingPredictiveScalingMetricSpecification {
  /**
   * @schema AutoScalingPredictiveScalingMetricSpecification#TargetValue
   */
  readonly targetValue?: number;

  /**
   * @schema AutoScalingPredictiveScalingMetricSpecification#PredefinedMetricPairSpecification
   */
  readonly predefinedMetricPairSpecification?: AutoScalingPredictiveScalingPredefinedMetricPair;

  /**
   * @schema AutoScalingPredictiveScalingMetricSpecification#PredefinedScalingMetricSpecification
   */
  readonly predefinedScalingMetricSpecification?: AutoScalingPredictiveScalingPredefinedScalingMetric;

  /**
   * @schema AutoScalingPredictiveScalingMetricSpecification#PredefinedLoadMetricSpecification
   */
  readonly predefinedLoadMetricSpecification?: AutoScalingPredictiveScalingPredefinedLoadMetric;

}

/**
 * Converts an object of type 'AutoScalingPredictiveScalingMetricSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPredictiveScalingMetricSpecification(obj: AutoScalingPredictiveScalingMetricSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetValue': obj.targetValue,
    'PredefinedMetricPairSpecification': toJson_AutoScalingPredictiveScalingPredefinedMetricPair(obj.predefinedMetricPairSpecification),
    'PredefinedScalingMetricSpecification': toJson_AutoScalingPredictiveScalingPredefinedScalingMetric(obj.predefinedScalingMetricSpecification),
    'PredefinedLoadMetricSpecification': toJson_AutoScalingPredictiveScalingPredefinedLoadMetric(obj.predefinedLoadMetricSpecification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPredefinedMetricSpecification
 */
export interface AutoScalingPredefinedMetricSpecification {
  /**
   * @schema AutoScalingPredefinedMetricSpecification#PredefinedMetricType
   */
  readonly predefinedMetricType?: string;

  /**
   * @schema AutoScalingPredefinedMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * Converts an object of type 'AutoScalingPredefinedMetricSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPredefinedMetricSpecification(obj: AutoScalingPredefinedMetricSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PredefinedMetricType': obj.predefinedMetricType,
    'ResourceLabel': obj.resourceLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingCustomizedMetricSpecification
 */
export interface AutoScalingCustomizedMetricSpecification {
  /**
   * @schema AutoScalingCustomizedMetricSpecification#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema AutoScalingCustomizedMetricSpecification#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema AutoScalingCustomizedMetricSpecification#Dimensions
   */
  readonly dimensions?: AutoScalingMetricDimension[];

  /**
   * @schema AutoScalingCustomizedMetricSpecification#Statistic
   */
  readonly statistic?: string;

  /**
   * @schema AutoScalingCustomizedMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'AutoScalingCustomizedMetricSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingCustomizedMetricSpecification(obj: AutoScalingCustomizedMetricSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'Namespace': obj.namespace,
    'Dimensions': obj.dimensions?.map(y => toJson_AutoScalingMetricDimension(y)),
    'Statistic': obj.statistic,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingLaunchTemplateOverrides' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingLaunchTemplateOverrides(obj: AutoScalingLaunchTemplateOverrides | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceType': obj.instanceType,
    'WeightedCapacity': obj.weightedCapacity,
    'LaunchTemplateSpecification': toJson_AutoScalingLaunchTemplateSpecification(obj.launchTemplateSpecification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingInstanceRefreshLivePoolProgress
 */
export interface AutoScalingInstanceRefreshLivePoolProgress {
  /**
   * @schema AutoScalingInstanceRefreshLivePoolProgress#PercentageComplete
   */
  readonly percentageComplete?: number;

  /**
   * @schema AutoScalingInstanceRefreshLivePoolProgress#InstancesToUpdate
   */
  readonly instancesToUpdate?: number;

}

/**
 * Converts an object of type 'AutoScalingInstanceRefreshLivePoolProgress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingInstanceRefreshLivePoolProgress(obj: AutoScalingInstanceRefreshLivePoolProgress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PercentageComplete': obj.percentageComplete,
    'InstancesToUpdate': obj.instancesToUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingInstanceRefreshWarmPoolProgress
 */
export interface AutoScalingInstanceRefreshWarmPoolProgress {
  /**
   * @schema AutoScalingInstanceRefreshWarmPoolProgress#PercentageComplete
   */
  readonly percentageComplete?: number;

  /**
   * @schema AutoScalingInstanceRefreshWarmPoolProgress#InstancesToUpdate
   */
  readonly instancesToUpdate?: number;

}

/**
 * Converts an object of type 'AutoScalingInstanceRefreshWarmPoolProgress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingInstanceRefreshWarmPoolProgress(obj: AutoScalingInstanceRefreshWarmPoolProgress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PercentageComplete': obj.percentageComplete,
    'InstancesToUpdate': obj.instancesToUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPredictiveScalingPredefinedMetricPair
 */
export interface AutoScalingPredictiveScalingPredefinedMetricPair {
  /**
   * @schema AutoScalingPredictiveScalingPredefinedMetricPair#PredefinedMetricType
   */
  readonly predefinedMetricType?: string;

  /**
   * @schema AutoScalingPredictiveScalingPredefinedMetricPair#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * Converts an object of type 'AutoScalingPredictiveScalingPredefinedMetricPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPredictiveScalingPredefinedMetricPair(obj: AutoScalingPredictiveScalingPredefinedMetricPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PredefinedMetricType': obj.predefinedMetricType,
    'ResourceLabel': obj.resourceLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPredictiveScalingPredefinedScalingMetric
 */
export interface AutoScalingPredictiveScalingPredefinedScalingMetric {
  /**
   * @schema AutoScalingPredictiveScalingPredefinedScalingMetric#PredefinedMetricType
   */
  readonly predefinedMetricType?: string;

  /**
   * @schema AutoScalingPredictiveScalingPredefinedScalingMetric#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * Converts an object of type 'AutoScalingPredictiveScalingPredefinedScalingMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPredictiveScalingPredefinedScalingMetric(obj: AutoScalingPredictiveScalingPredefinedScalingMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PredefinedMetricType': obj.predefinedMetricType,
    'ResourceLabel': obj.resourceLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPredictiveScalingPredefinedLoadMetric
 */
export interface AutoScalingPredictiveScalingPredefinedLoadMetric {
  /**
   * @schema AutoScalingPredictiveScalingPredefinedLoadMetric#PredefinedMetricType
   */
  readonly predefinedMetricType?: string;

  /**
   * @schema AutoScalingPredictiveScalingPredefinedLoadMetric#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * Converts an object of type 'AutoScalingPredictiveScalingPredefinedLoadMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPredictiveScalingPredefinedLoadMetric(obj: AutoScalingPredictiveScalingPredefinedLoadMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PredefinedMetricType': obj.predefinedMetricType,
    'ResourceLabel': obj.resourceLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingMetricDimension
 */
export interface AutoScalingMetricDimension {
  /**
   * @schema AutoScalingMetricDimension#Name
   */
  readonly name?: string;

  /**
   * @schema AutoScalingMetricDimension#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AutoScalingMetricDimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingMetricDimension(obj: AutoScalingMetricDimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
