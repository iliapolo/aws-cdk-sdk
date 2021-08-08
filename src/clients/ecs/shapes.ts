/**
 * @schema EcsCreateCapacityProviderRequest
 */
export interface EcsCreateCapacityProviderRequest {
  /**
   * @schema EcsCreateCapacityProviderRequest#name
   */
  readonly name: string;

  /**
   * @schema EcsCreateCapacityProviderRequest#autoScalingGroupProvider
   */
  readonly autoScalingGroupProvider: EcsAutoScalingGroupProvider;

  /**
   * @schema EcsCreateCapacityProviderRequest#tags
   */
  readonly tags?: EcsTag[];

}

/**
 * Converts an object of type 'EcsCreateCapacityProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCreateCapacityProviderRequest(obj: EcsCreateCapacityProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'autoScalingGroupProvider': toJson_EcsAutoScalingGroupProvider(obj.autoScalingGroupProvider),
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCreateCapacityProviderResponse
 */
export interface EcsCreateCapacityProviderResponse {
  /**
   * @schema EcsCreateCapacityProviderResponse#capacityProvider
   */
  readonly capacityProvider?: EcsCapacityProvider;

}

/**
 * Converts an object of type 'EcsCreateCapacityProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCreateCapacityProviderResponse(obj: EcsCreateCapacityProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProvider': toJson_EcsCapacityProvider(obj.capacityProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCreateClusterRequest
 */
export interface EcsCreateClusterRequest {
  /**
   * @schema EcsCreateClusterRequest#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema EcsCreateClusterRequest#tags
   */
  readonly tags?: EcsTag[];

  /**
   * @schema EcsCreateClusterRequest#settings
   */
  readonly settings?: EcsClusterSetting[];

  /**
   * @schema EcsCreateClusterRequest#configuration
   */
  readonly configuration?: EcsClusterConfiguration;

  /**
   * @schema EcsCreateClusterRequest#capacityProviders
   */
  readonly capacityProviders?: string[];

  /**
   * @schema EcsCreateClusterRequest#defaultCapacityProviderStrategy
   */
  readonly defaultCapacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

}

/**
 * Converts an object of type 'EcsCreateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCreateClusterRequest(obj: EcsCreateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
    'settings': obj.settings?.map(y => toJson_EcsClusterSetting(y)),
    'configuration': toJson_EcsClusterConfiguration(obj.configuration),
    'capacityProviders': obj.capacityProviders?.map(y => y),
    'defaultCapacityProviderStrategy': obj.defaultCapacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCreateClusterResponse
 */
export interface EcsCreateClusterResponse {
  /**
   * @schema EcsCreateClusterResponse#cluster
   */
  readonly cluster?: EcsCluster;

}

/**
 * Converts an object of type 'EcsCreateClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCreateClusterResponse(obj: EcsCreateClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': toJson_EcsCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCreateServiceRequest
 */
export interface EcsCreateServiceRequest {
  /**
   * @schema EcsCreateServiceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsCreateServiceRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema EcsCreateServiceRequest#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema EcsCreateServiceRequest#loadBalancers
   */
  readonly loadBalancers?: EcsLoadBalancer[];

  /**
   * @schema EcsCreateServiceRequest#serviceRegistries
   */
  readonly serviceRegistries?: EcsServiceRegistry[];

  /**
   * @schema EcsCreateServiceRequest#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema EcsCreateServiceRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema EcsCreateServiceRequest#launchType
   */
  readonly launchType?: string;

  /**
   * @schema EcsCreateServiceRequest#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

  /**
   * @schema EcsCreateServiceRequest#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EcsCreateServiceRequest#role
   */
  readonly role?: string;

  /**
   * @schema EcsCreateServiceRequest#deploymentConfiguration
   */
  readonly deploymentConfiguration?: EcsDeploymentConfiguration;

  /**
   * @schema EcsCreateServiceRequest#placementConstraints
   */
  readonly placementConstraints?: EcsPlacementConstraint[];

  /**
   * @schema EcsCreateServiceRequest#placementStrategy
   */
  readonly placementStrategy?: EcsPlacementStrategy[];

  /**
   * @schema EcsCreateServiceRequest#networkConfiguration
   */
  readonly networkConfiguration?: EcsNetworkConfiguration;

  /**
   * @schema EcsCreateServiceRequest#healthCheckGracePeriodSeconds
   */
  readonly healthCheckGracePeriodSeconds?: number;

  /**
   * @schema EcsCreateServiceRequest#schedulingStrategy
   */
  readonly schedulingStrategy?: string;

  /**
   * @schema EcsCreateServiceRequest#deploymentController
   */
  readonly deploymentController?: EcsDeploymentController;

  /**
   * @schema EcsCreateServiceRequest#tags
   */
  readonly tags?: EcsTag[];

  /**
   * @schema EcsCreateServiceRequest#enableECSManagedTags
   */
  readonly enableEcsManagedTags?: boolean;

  /**
   * @schema EcsCreateServiceRequest#propagateTags
   */
  readonly propagateTags?: string;

  /**
   * @schema EcsCreateServiceRequest#enableExecuteCommand
   */
  readonly enableExecuteCommand?: boolean;

}

/**
 * Converts an object of type 'EcsCreateServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCreateServiceRequest(obj: EcsCreateServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'serviceName': obj.serviceName,
    'taskDefinition': obj.taskDefinition,
    'loadBalancers': obj.loadBalancers?.map(y => toJson_EcsLoadBalancer(y)),
    'serviceRegistries': obj.serviceRegistries?.map(y => toJson_EcsServiceRegistry(y)),
    'desiredCount': obj.desiredCount,
    'clientToken': obj.clientToken,
    'launchType': obj.launchType,
    'capacityProviderStrategy': obj.capacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
    'platformVersion': obj.platformVersion,
    'role': obj.role,
    'deploymentConfiguration': toJson_EcsDeploymentConfiguration(obj.deploymentConfiguration),
    'placementConstraints': obj.placementConstraints?.map(y => toJson_EcsPlacementConstraint(y)),
    'placementStrategy': obj.placementStrategy?.map(y => toJson_EcsPlacementStrategy(y)),
    'networkConfiguration': toJson_EcsNetworkConfiguration(obj.networkConfiguration),
    'healthCheckGracePeriodSeconds': obj.healthCheckGracePeriodSeconds,
    'schedulingStrategy': obj.schedulingStrategy,
    'deploymentController': toJson_EcsDeploymentController(obj.deploymentController),
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
    'enableECSManagedTags': obj.enableEcsManagedTags,
    'propagateTags': obj.propagateTags,
    'enableExecuteCommand': obj.enableExecuteCommand,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCreateServiceResponse
 */
export interface EcsCreateServiceResponse {
  /**
   * @schema EcsCreateServiceResponse#service
   */
  readonly service?: EcsService;

}

/**
 * Converts an object of type 'EcsCreateServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCreateServiceResponse(obj: EcsCreateServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': toJson_EcsService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCreateTaskSetRequest
 */
export interface EcsCreateTaskSetRequest {
  /**
   * @schema EcsCreateTaskSetRequest#service
   */
  readonly service: string;

  /**
   * @schema EcsCreateTaskSetRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema EcsCreateTaskSetRequest#externalId
   */
  readonly externalId?: string;

  /**
   * @schema EcsCreateTaskSetRequest#taskDefinition
   */
  readonly taskDefinition: string;

  /**
   * @schema EcsCreateTaskSetRequest#networkConfiguration
   */
  readonly networkConfiguration?: EcsNetworkConfiguration;

  /**
   * @schema EcsCreateTaskSetRequest#loadBalancers
   */
  readonly loadBalancers?: EcsLoadBalancer[];

  /**
   * @schema EcsCreateTaskSetRequest#serviceRegistries
   */
  readonly serviceRegistries?: EcsServiceRegistry[];

  /**
   * @schema EcsCreateTaskSetRequest#launchType
   */
  readonly launchType?: string;

  /**
   * @schema EcsCreateTaskSetRequest#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

  /**
   * @schema EcsCreateTaskSetRequest#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EcsCreateTaskSetRequest#scale
   */
  readonly scale?: EcsScale;

  /**
   * @schema EcsCreateTaskSetRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema EcsCreateTaskSetRequest#tags
   */
  readonly tags?: EcsTag[];

}

/**
 * Converts an object of type 'EcsCreateTaskSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCreateTaskSetRequest(obj: EcsCreateTaskSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': obj.service,
    'cluster': obj.cluster,
    'externalId': obj.externalId,
    'taskDefinition': obj.taskDefinition,
    'networkConfiguration': toJson_EcsNetworkConfiguration(obj.networkConfiguration),
    'loadBalancers': obj.loadBalancers?.map(y => toJson_EcsLoadBalancer(y)),
    'serviceRegistries': obj.serviceRegistries?.map(y => toJson_EcsServiceRegistry(y)),
    'launchType': obj.launchType,
    'capacityProviderStrategy': obj.capacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
    'platformVersion': obj.platformVersion,
    'scale': toJson_EcsScale(obj.scale),
    'clientToken': obj.clientToken,
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCreateTaskSetResponse
 */
export interface EcsCreateTaskSetResponse {
  /**
   * @schema EcsCreateTaskSetResponse#taskSet
   */
  readonly taskSet?: EcsTaskSet;

}

/**
 * Converts an object of type 'EcsCreateTaskSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCreateTaskSetResponse(obj: EcsCreateTaskSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskSet': toJson_EcsTaskSet(obj.taskSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteAccountSettingRequest
 */
export interface EcsDeleteAccountSettingRequest {
  /**
   * @schema EcsDeleteAccountSettingRequest#name
   */
  readonly name: string;

  /**
   * @schema EcsDeleteAccountSettingRequest#principalArn
   */
  readonly principalArn?: string;

}

/**
 * Converts an object of type 'EcsDeleteAccountSettingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteAccountSettingRequest(obj: EcsDeleteAccountSettingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'principalArn': obj.principalArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteAccountSettingResponse
 */
export interface EcsDeleteAccountSettingResponse {
  /**
   * @schema EcsDeleteAccountSettingResponse#setting
   */
  readonly setting?: EcsSetting;

}

/**
 * Converts an object of type 'EcsDeleteAccountSettingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteAccountSettingResponse(obj: EcsDeleteAccountSettingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'setting': toJson_EcsSetting(obj.setting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteAttributesRequest
 */
export interface EcsDeleteAttributesRequest {
  /**
   * @schema EcsDeleteAttributesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsDeleteAttributesRequest#attributes
   */
  readonly attributes: EcsAttribute[];

}

/**
 * Converts an object of type 'EcsDeleteAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteAttributesRequest(obj: EcsDeleteAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'attributes': obj.attributes?.map(y => toJson_EcsAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteAttributesResponse
 */
export interface EcsDeleteAttributesResponse {
  /**
   * @schema EcsDeleteAttributesResponse#attributes
   */
  readonly attributes?: EcsAttribute[];

}

/**
 * Converts an object of type 'EcsDeleteAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteAttributesResponse(obj: EcsDeleteAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': obj.attributes?.map(y => toJson_EcsAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteCapacityProviderRequest
 */
export interface EcsDeleteCapacityProviderRequest {
  /**
   * @schema EcsDeleteCapacityProviderRequest#capacityProvider
   */
  readonly capacityProvider: string;

}

/**
 * Converts an object of type 'EcsDeleteCapacityProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteCapacityProviderRequest(obj: EcsDeleteCapacityProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProvider': obj.capacityProvider,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteCapacityProviderResponse
 */
export interface EcsDeleteCapacityProviderResponse {
  /**
   * @schema EcsDeleteCapacityProviderResponse#capacityProvider
   */
  readonly capacityProvider?: EcsCapacityProvider;

}

/**
 * Converts an object of type 'EcsDeleteCapacityProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteCapacityProviderResponse(obj: EcsDeleteCapacityProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProvider': toJson_EcsCapacityProvider(obj.capacityProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteClusterRequest
 */
export interface EcsDeleteClusterRequest {
  /**
   * @schema EcsDeleteClusterRequest#cluster
   */
  readonly cluster: string;

}

/**
 * Converts an object of type 'EcsDeleteClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteClusterRequest(obj: EcsDeleteClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteClusterResponse
 */
export interface EcsDeleteClusterResponse {
  /**
   * @schema EcsDeleteClusterResponse#cluster
   */
  readonly cluster?: EcsCluster;

}

/**
 * Converts an object of type 'EcsDeleteClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteClusterResponse(obj: EcsDeleteClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': toJson_EcsCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteServiceRequest
 */
export interface EcsDeleteServiceRequest {
  /**
   * @schema EcsDeleteServiceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsDeleteServiceRequest#service
   */
  readonly service: string;

  /**
   * @schema EcsDeleteServiceRequest#force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'EcsDeleteServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteServiceRequest(obj: EcsDeleteServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'service': obj.service,
    'force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteServiceResponse
 */
export interface EcsDeleteServiceResponse {
  /**
   * @schema EcsDeleteServiceResponse#service
   */
  readonly service?: EcsService;

}

/**
 * Converts an object of type 'EcsDeleteServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteServiceResponse(obj: EcsDeleteServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': toJson_EcsService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteTaskSetRequest
 */
export interface EcsDeleteTaskSetRequest {
  /**
   * @schema EcsDeleteTaskSetRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema EcsDeleteTaskSetRequest#service
   */
  readonly service: string;

  /**
   * @schema EcsDeleteTaskSetRequest#taskSet
   */
  readonly taskSet: string;

  /**
   * @schema EcsDeleteTaskSetRequest#force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'EcsDeleteTaskSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteTaskSetRequest(obj: EcsDeleteTaskSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'service': obj.service,
    'taskSet': obj.taskSet,
    'force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeleteTaskSetResponse
 */
export interface EcsDeleteTaskSetResponse {
  /**
   * @schema EcsDeleteTaskSetResponse#taskSet
   */
  readonly taskSet?: EcsTaskSet;

}

/**
 * Converts an object of type 'EcsDeleteTaskSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeleteTaskSetResponse(obj: EcsDeleteTaskSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskSet': toJson_EcsTaskSet(obj.taskSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeregisterContainerInstanceRequest
 */
export interface EcsDeregisterContainerInstanceRequest {
  /**
   * @schema EcsDeregisterContainerInstanceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsDeregisterContainerInstanceRequest#containerInstance
   */
  readonly containerInstance: string;

  /**
   * @schema EcsDeregisterContainerInstanceRequest#force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'EcsDeregisterContainerInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeregisterContainerInstanceRequest(obj: EcsDeregisterContainerInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'containerInstance': obj.containerInstance,
    'force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeregisterContainerInstanceResponse
 */
export interface EcsDeregisterContainerInstanceResponse {
  /**
   * @schema EcsDeregisterContainerInstanceResponse#containerInstance
   */
  readonly containerInstance?: EcsContainerInstance;

}

/**
 * Converts an object of type 'EcsDeregisterContainerInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeregisterContainerInstanceResponse(obj: EcsDeregisterContainerInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerInstance': toJson_EcsContainerInstance(obj.containerInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeregisterTaskDefinitionRequest
 */
export interface EcsDeregisterTaskDefinitionRequest {
  /**
   * @schema EcsDeregisterTaskDefinitionRequest#taskDefinition
   */
  readonly taskDefinition: string;

}

/**
 * Converts an object of type 'EcsDeregisterTaskDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeregisterTaskDefinitionRequest(obj: EcsDeregisterTaskDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskDefinition': obj.taskDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeregisterTaskDefinitionResponse
 */
export interface EcsDeregisterTaskDefinitionResponse {
  /**
   * @schema EcsDeregisterTaskDefinitionResponse#taskDefinition
   */
  readonly taskDefinition?: EcsTaskDefinition;

}

/**
 * Converts an object of type 'EcsDeregisterTaskDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeregisterTaskDefinitionResponse(obj: EcsDeregisterTaskDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskDefinition': toJson_EcsTaskDefinition(obj.taskDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeCapacityProvidersRequest
 */
export interface EcsDescribeCapacityProvidersRequest {
  /**
   * @schema EcsDescribeCapacityProvidersRequest#capacityProviders
   */
  readonly capacityProviders?: string[];

  /**
   * @schema EcsDescribeCapacityProvidersRequest#include
   */
  readonly include?: string[];

  /**
   * @schema EcsDescribeCapacityProvidersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EcsDescribeCapacityProvidersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsDescribeCapacityProvidersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeCapacityProvidersRequest(obj: EcsDescribeCapacityProvidersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProviders': obj.capacityProviders?.map(y => y),
    'include': obj.include?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeCapacityProvidersResponse
 */
export interface EcsDescribeCapacityProvidersResponse {
  /**
   * @schema EcsDescribeCapacityProvidersResponse#capacityProviders
   */
  readonly capacityProviders?: EcsCapacityProvider[];

  /**
   * @schema EcsDescribeCapacityProvidersResponse#failures
   */
  readonly failures?: EcsFailure[];

  /**
   * @schema EcsDescribeCapacityProvidersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsDescribeCapacityProvidersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeCapacityProvidersResponse(obj: EcsDescribeCapacityProvidersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProviders': obj.capacityProviders?.map(y => toJson_EcsCapacityProvider(y)),
    'failures': obj.failures?.map(y => toJson_EcsFailure(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeClustersRequest
 */
export interface EcsDescribeClustersRequest {
  /**
   * @schema EcsDescribeClustersRequest#clusters
   */
  readonly clusters?: string[];

  /**
   * @schema EcsDescribeClustersRequest#include
   */
  readonly include?: string[];

}

/**
 * Converts an object of type 'EcsDescribeClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeClustersRequest(obj: EcsDescribeClustersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusters': obj.clusters?.map(y => y),
    'include': obj.include?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeClustersResponse
 */
export interface EcsDescribeClustersResponse {
  /**
   * @schema EcsDescribeClustersResponse#clusters
   */
  readonly clusters?: EcsCluster[];

  /**
   * @schema EcsDescribeClustersResponse#failures
   */
  readonly failures?: EcsFailure[];

}

/**
 * Converts an object of type 'EcsDescribeClustersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeClustersResponse(obj: EcsDescribeClustersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusters': obj.clusters?.map(y => toJson_EcsCluster(y)),
    'failures': obj.failures?.map(y => toJson_EcsFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeContainerInstancesRequest
 */
export interface EcsDescribeContainerInstancesRequest {
  /**
   * @schema EcsDescribeContainerInstancesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsDescribeContainerInstancesRequest#containerInstances
   */
  readonly containerInstances: string[];

  /**
   * @schema EcsDescribeContainerInstancesRequest#include
   */
  readonly include?: string[];

}

/**
 * Converts an object of type 'EcsDescribeContainerInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeContainerInstancesRequest(obj: EcsDescribeContainerInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'containerInstances': obj.containerInstances?.map(y => y),
    'include': obj.include?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeContainerInstancesResponse
 */
export interface EcsDescribeContainerInstancesResponse {
  /**
   * @schema EcsDescribeContainerInstancesResponse#containerInstances
   */
  readonly containerInstances?: EcsContainerInstance[];

  /**
   * @schema EcsDescribeContainerInstancesResponse#failures
   */
  readonly failures?: EcsFailure[];

}

/**
 * Converts an object of type 'EcsDescribeContainerInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeContainerInstancesResponse(obj: EcsDescribeContainerInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerInstances': obj.containerInstances?.map(y => toJson_EcsContainerInstance(y)),
    'failures': obj.failures?.map(y => toJson_EcsFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeServicesRequest
 */
export interface EcsDescribeServicesRequest {
  /**
   * @schema EcsDescribeServicesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsDescribeServicesRequest#services
   */
  readonly services: string[];

  /**
   * @schema EcsDescribeServicesRequest#include
   */
  readonly include?: string[];

}

/**
 * Converts an object of type 'EcsDescribeServicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeServicesRequest(obj: EcsDescribeServicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'services': obj.services?.map(y => y),
    'include': obj.include?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeServicesResponse
 */
export interface EcsDescribeServicesResponse {
  /**
   * @schema EcsDescribeServicesResponse#services
   */
  readonly services?: EcsService[];

  /**
   * @schema EcsDescribeServicesResponse#failures
   */
  readonly failures?: EcsFailure[];

}

/**
 * Converts an object of type 'EcsDescribeServicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeServicesResponse(obj: EcsDescribeServicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'services': obj.services?.map(y => toJson_EcsService(y)),
    'failures': obj.failures?.map(y => toJson_EcsFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeTaskDefinitionRequest
 */
export interface EcsDescribeTaskDefinitionRequest {
  /**
   * @schema EcsDescribeTaskDefinitionRequest#taskDefinition
   */
  readonly taskDefinition: string;

  /**
   * @schema EcsDescribeTaskDefinitionRequest#include
   */
  readonly include?: string[];

}

/**
 * Converts an object of type 'EcsDescribeTaskDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeTaskDefinitionRequest(obj: EcsDescribeTaskDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskDefinition': obj.taskDefinition,
    'include': obj.include?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeTaskDefinitionResponse
 */
export interface EcsDescribeTaskDefinitionResponse {
  /**
   * @schema EcsDescribeTaskDefinitionResponse#taskDefinition
   */
  readonly taskDefinition?: EcsTaskDefinition;

  /**
   * @schema EcsDescribeTaskDefinitionResponse#tags
   */
  readonly tags?: EcsTag[];

}

/**
 * Converts an object of type 'EcsDescribeTaskDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeTaskDefinitionResponse(obj: EcsDescribeTaskDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskDefinition': toJson_EcsTaskDefinition(obj.taskDefinition),
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeTaskSetsRequest
 */
export interface EcsDescribeTaskSetsRequest {
  /**
   * @schema EcsDescribeTaskSetsRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema EcsDescribeTaskSetsRequest#service
   */
  readonly service: string;

  /**
   * @schema EcsDescribeTaskSetsRequest#taskSets
   */
  readonly taskSets?: string[];

  /**
   * @schema EcsDescribeTaskSetsRequest#include
   */
  readonly include?: string[];

}

/**
 * Converts an object of type 'EcsDescribeTaskSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeTaskSetsRequest(obj: EcsDescribeTaskSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'service': obj.service,
    'taskSets': obj.taskSets?.map(y => y),
    'include': obj.include?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeTaskSetsResponse
 */
export interface EcsDescribeTaskSetsResponse {
  /**
   * @schema EcsDescribeTaskSetsResponse#taskSets
   */
  readonly taskSets?: EcsTaskSet[];

  /**
   * @schema EcsDescribeTaskSetsResponse#failures
   */
  readonly failures?: EcsFailure[];

}

/**
 * Converts an object of type 'EcsDescribeTaskSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeTaskSetsResponse(obj: EcsDescribeTaskSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskSets': obj.taskSets?.map(y => toJson_EcsTaskSet(y)),
    'failures': obj.failures?.map(y => toJson_EcsFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeTasksRequest
 */
export interface EcsDescribeTasksRequest {
  /**
   * @schema EcsDescribeTasksRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsDescribeTasksRequest#tasks
   */
  readonly tasks: string[];

  /**
   * @schema EcsDescribeTasksRequest#include
   */
  readonly include?: string[];

}

/**
 * Converts an object of type 'EcsDescribeTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeTasksRequest(obj: EcsDescribeTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'tasks': obj.tasks?.map(y => y),
    'include': obj.include?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDescribeTasksResponse
 */
export interface EcsDescribeTasksResponse {
  /**
   * @schema EcsDescribeTasksResponse#tasks
   */
  readonly tasks?: EcsTask[];

  /**
   * @schema EcsDescribeTasksResponse#failures
   */
  readonly failures?: EcsFailure[];

}

/**
 * Converts an object of type 'EcsDescribeTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDescribeTasksResponse(obj: EcsDescribeTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tasks': obj.tasks?.map(y => toJson_EcsTask(y)),
    'failures': obj.failures?.map(y => toJson_EcsFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDiscoverPollEndpointRequest
 */
export interface EcsDiscoverPollEndpointRequest {
  /**
   * @schema EcsDiscoverPollEndpointRequest#containerInstance
   */
  readonly containerInstance?: string;

  /**
   * @schema EcsDiscoverPollEndpointRequest#cluster
   */
  readonly cluster?: string;

}

/**
 * Converts an object of type 'EcsDiscoverPollEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDiscoverPollEndpointRequest(obj: EcsDiscoverPollEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerInstance': obj.containerInstance,
    'cluster': obj.cluster,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDiscoverPollEndpointResponse
 */
export interface EcsDiscoverPollEndpointResponse {
  /**
   * @schema EcsDiscoverPollEndpointResponse#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema EcsDiscoverPollEndpointResponse#telemetryEndpoint
   */
  readonly telemetryEndpoint?: string;

}

/**
 * Converts an object of type 'EcsDiscoverPollEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDiscoverPollEndpointResponse(obj: EcsDiscoverPollEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpoint': obj.endpoint,
    'telemetryEndpoint': obj.telemetryEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsExecuteCommandRequest
 */
export interface EcsExecuteCommandRequest {
  /**
   * @schema EcsExecuteCommandRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsExecuteCommandRequest#container
   */
  readonly container?: string;

  /**
   * @schema EcsExecuteCommandRequest#command
   */
  readonly command: string;

  /**
   * @schema EcsExecuteCommandRequest#interactive
   */
  readonly interactive: boolean;

  /**
   * @schema EcsExecuteCommandRequest#task
   */
  readonly task: string;

}

/**
 * Converts an object of type 'EcsExecuteCommandRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsExecuteCommandRequest(obj: EcsExecuteCommandRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'container': obj.container,
    'command': obj.command,
    'interactive': obj.interactive,
    'task': obj.task,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsExecuteCommandResponse
 */
export interface EcsExecuteCommandResponse {
  /**
   * @schema EcsExecuteCommandResponse#clusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema EcsExecuteCommandResponse#containerArn
   */
  readonly containerArn?: string;

  /**
   * @schema EcsExecuteCommandResponse#containerName
   */
  readonly containerName?: string;

  /**
   * @schema EcsExecuteCommandResponse#interactive
   */
  readonly interactive?: boolean;

  /**
   * @schema EcsExecuteCommandResponse#session
   */
  readonly session?: EcsSession;

  /**
   * @schema EcsExecuteCommandResponse#taskArn
   */
  readonly taskArn?: string;

}

/**
 * Converts an object of type 'EcsExecuteCommandResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsExecuteCommandResponse(obj: EcsExecuteCommandResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterArn': obj.clusterArn,
    'containerArn': obj.containerArn,
    'containerName': obj.containerName,
    'interactive': obj.interactive,
    'session': toJson_EcsSession(obj.session),
    'taskArn': obj.taskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListAccountSettingsRequest
 */
export interface EcsListAccountSettingsRequest {
  /**
   * @schema EcsListAccountSettingsRequest#name
   */
  readonly name?: string;

  /**
   * @schema EcsListAccountSettingsRequest#value
   */
  readonly value?: string;

  /**
   * @schema EcsListAccountSettingsRequest#principalArn
   */
  readonly principalArn?: string;

  /**
   * @schema EcsListAccountSettingsRequest#effectiveSettings
   */
  readonly effectiveSettings?: boolean;

  /**
   * @schema EcsListAccountSettingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcsListAccountSettingsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'EcsListAccountSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListAccountSettingsRequest(obj: EcsListAccountSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
    'principalArn': obj.principalArn,
    'effectiveSettings': obj.effectiveSettings,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListAccountSettingsResponse
 */
export interface EcsListAccountSettingsResponse {
  /**
   * @schema EcsListAccountSettingsResponse#settings
   */
  readonly settings?: EcsSetting[];

  /**
   * @schema EcsListAccountSettingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsListAccountSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListAccountSettingsResponse(obj: EcsListAccountSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'settings': obj.settings?.map(y => toJson_EcsSetting(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListAttributesRequest
 */
export interface EcsListAttributesRequest {
  /**
   * @schema EcsListAttributesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsListAttributesRequest#targetType
   */
  readonly targetType: string;

  /**
   * @schema EcsListAttributesRequest#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema EcsListAttributesRequest#attributeValue
   */
  readonly attributeValue?: string;

  /**
   * @schema EcsListAttributesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcsListAttributesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'EcsListAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListAttributesRequest(obj: EcsListAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'targetType': obj.targetType,
    'attributeName': obj.attributeName,
    'attributeValue': obj.attributeValue,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListAttributesResponse
 */
export interface EcsListAttributesResponse {
  /**
   * @schema EcsListAttributesResponse#attributes
   */
  readonly attributes?: EcsAttribute[];

  /**
   * @schema EcsListAttributesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsListAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListAttributesResponse(obj: EcsListAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': obj.attributes?.map(y => toJson_EcsAttribute(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListClustersRequest
 */
export interface EcsListClustersRequest {
  /**
   * @schema EcsListClustersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcsListClustersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'EcsListClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListClustersRequest(obj: EcsListClustersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListClustersResponse
 */
export interface EcsListClustersResponse {
  /**
   * @schema EcsListClustersResponse#clusterArns
   */
  readonly clusterArns?: string[];

  /**
   * @schema EcsListClustersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsListClustersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListClustersResponse(obj: EcsListClustersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterArns': obj.clusterArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListContainerInstancesRequest
 */
export interface EcsListContainerInstancesRequest {
  /**
   * @schema EcsListContainerInstancesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsListContainerInstancesRequest#filter
   */
  readonly filter?: string;

  /**
   * @schema EcsListContainerInstancesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcsListContainerInstancesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EcsListContainerInstancesRequest#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'EcsListContainerInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListContainerInstancesRequest(obj: EcsListContainerInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'filter': obj.filter,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListContainerInstancesResponse
 */
export interface EcsListContainerInstancesResponse {
  /**
   * @schema EcsListContainerInstancesResponse#containerInstanceArns
   */
  readonly containerInstanceArns?: string[];

  /**
   * @schema EcsListContainerInstancesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsListContainerInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListContainerInstancesResponse(obj: EcsListContainerInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerInstanceArns': obj.containerInstanceArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListServicesRequest
 */
export interface EcsListServicesRequest {
  /**
   * @schema EcsListServicesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsListServicesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcsListServicesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EcsListServicesRequest#launchType
   */
  readonly launchType?: string;

  /**
   * @schema EcsListServicesRequest#schedulingStrategy
   */
  readonly schedulingStrategy?: string;

}

/**
 * Converts an object of type 'EcsListServicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListServicesRequest(obj: EcsListServicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'launchType': obj.launchType,
    'schedulingStrategy': obj.schedulingStrategy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListServicesResponse
 */
export interface EcsListServicesResponse {
  /**
   * @schema EcsListServicesResponse#serviceArns
   */
  readonly serviceArns?: string[];

  /**
   * @schema EcsListServicesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsListServicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListServicesResponse(obj: EcsListServicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceArns': obj.serviceArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListTagsForResourceRequest
 */
export interface EcsListTagsForResourceRequest {
  /**
   * @schema EcsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'EcsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListTagsForResourceRequest(obj: EcsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListTagsForResourceResponse
 */
export interface EcsListTagsForResourceResponse {
  /**
   * @schema EcsListTagsForResourceResponse#tags
   */
  readonly tags?: EcsTag[];

}

/**
 * Converts an object of type 'EcsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListTagsForResourceResponse(obj: EcsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListTaskDefinitionFamiliesRequest
 */
export interface EcsListTaskDefinitionFamiliesRequest {
  /**
   * @schema EcsListTaskDefinitionFamiliesRequest#familyPrefix
   */
  readonly familyPrefix?: string;

  /**
   * @schema EcsListTaskDefinitionFamiliesRequest#status
   */
  readonly status?: string;

  /**
   * @schema EcsListTaskDefinitionFamiliesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcsListTaskDefinitionFamiliesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'EcsListTaskDefinitionFamiliesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListTaskDefinitionFamiliesRequest(obj: EcsListTaskDefinitionFamiliesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'familyPrefix': obj.familyPrefix,
    'status': obj.status,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListTaskDefinitionFamiliesResponse
 */
export interface EcsListTaskDefinitionFamiliesResponse {
  /**
   * @schema EcsListTaskDefinitionFamiliesResponse#families
   */
  readonly families?: string[];

  /**
   * @schema EcsListTaskDefinitionFamiliesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsListTaskDefinitionFamiliesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListTaskDefinitionFamiliesResponse(obj: EcsListTaskDefinitionFamiliesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'families': obj.families?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListTaskDefinitionsRequest
 */
export interface EcsListTaskDefinitionsRequest {
  /**
   * @schema EcsListTaskDefinitionsRequest#familyPrefix
   */
  readonly familyPrefix?: string;

  /**
   * @schema EcsListTaskDefinitionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema EcsListTaskDefinitionsRequest#sort
   */
  readonly sort?: string;

  /**
   * @schema EcsListTaskDefinitionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcsListTaskDefinitionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'EcsListTaskDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListTaskDefinitionsRequest(obj: EcsListTaskDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'familyPrefix': obj.familyPrefix,
    'status': obj.status,
    'sort': obj.sort,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListTaskDefinitionsResponse
 */
export interface EcsListTaskDefinitionsResponse {
  /**
   * @schema EcsListTaskDefinitionsResponse#taskDefinitionArns
   */
  readonly taskDefinitionArns?: string[];

  /**
   * @schema EcsListTaskDefinitionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsListTaskDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListTaskDefinitionsResponse(obj: EcsListTaskDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskDefinitionArns': obj.taskDefinitionArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListTasksRequest
 */
export interface EcsListTasksRequest {
  /**
   * @schema EcsListTasksRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsListTasksRequest#containerInstance
   */
  readonly containerInstance?: string;

  /**
   * @schema EcsListTasksRequest#family
   */
  readonly family?: string;

  /**
   * @schema EcsListTasksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EcsListTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EcsListTasksRequest#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema EcsListTasksRequest#serviceName
   */
  readonly serviceName?: string;

  /**
   * @schema EcsListTasksRequest#desiredStatus
   */
  readonly desiredStatus?: string;

  /**
   * @schema EcsListTasksRequest#launchType
   */
  readonly launchType?: string;

}

/**
 * Converts an object of type 'EcsListTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListTasksRequest(obj: EcsListTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'containerInstance': obj.containerInstance,
    'family': obj.family,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'startedBy': obj.startedBy,
    'serviceName': obj.serviceName,
    'desiredStatus': obj.desiredStatus,
    'launchType': obj.launchType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsListTasksResponse
 */
export interface EcsListTasksResponse {
  /**
   * @schema EcsListTasksResponse#taskArns
   */
  readonly taskArns?: string[];

  /**
   * @schema EcsListTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EcsListTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsListTasksResponse(obj: EcsListTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskArns': obj.taskArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPutAccountSettingRequest
 */
export interface EcsPutAccountSettingRequest {
  /**
   * @schema EcsPutAccountSettingRequest#name
   */
  readonly name: string;

  /**
   * @schema EcsPutAccountSettingRequest#value
   */
  readonly value: string;

  /**
   * @schema EcsPutAccountSettingRequest#principalArn
   */
  readonly principalArn?: string;

}

/**
 * Converts an object of type 'EcsPutAccountSettingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPutAccountSettingRequest(obj: EcsPutAccountSettingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
    'principalArn': obj.principalArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPutAccountSettingResponse
 */
export interface EcsPutAccountSettingResponse {
  /**
   * @schema EcsPutAccountSettingResponse#setting
   */
  readonly setting?: EcsSetting;

}

/**
 * Converts an object of type 'EcsPutAccountSettingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPutAccountSettingResponse(obj: EcsPutAccountSettingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'setting': toJson_EcsSetting(obj.setting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPutAccountSettingDefaultRequest
 */
export interface EcsPutAccountSettingDefaultRequest {
  /**
   * @schema EcsPutAccountSettingDefaultRequest#name
   */
  readonly name: string;

  /**
   * @schema EcsPutAccountSettingDefaultRequest#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'EcsPutAccountSettingDefaultRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPutAccountSettingDefaultRequest(obj: EcsPutAccountSettingDefaultRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPutAccountSettingDefaultResponse
 */
export interface EcsPutAccountSettingDefaultResponse {
  /**
   * @schema EcsPutAccountSettingDefaultResponse#setting
   */
  readonly setting?: EcsSetting;

}

/**
 * Converts an object of type 'EcsPutAccountSettingDefaultResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPutAccountSettingDefaultResponse(obj: EcsPutAccountSettingDefaultResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'setting': toJson_EcsSetting(obj.setting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPutAttributesRequest
 */
export interface EcsPutAttributesRequest {
  /**
   * @schema EcsPutAttributesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsPutAttributesRequest#attributes
   */
  readonly attributes: EcsAttribute[];

}

/**
 * Converts an object of type 'EcsPutAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPutAttributesRequest(obj: EcsPutAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'attributes': obj.attributes?.map(y => toJson_EcsAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPutAttributesResponse
 */
export interface EcsPutAttributesResponse {
  /**
   * @schema EcsPutAttributesResponse#attributes
   */
  readonly attributes?: EcsAttribute[];

}

/**
 * Converts an object of type 'EcsPutAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPutAttributesResponse(obj: EcsPutAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': obj.attributes?.map(y => toJson_EcsAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPutClusterCapacityProvidersRequest
 */
export interface EcsPutClusterCapacityProvidersRequest {
  /**
   * @schema EcsPutClusterCapacityProvidersRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema EcsPutClusterCapacityProvidersRequest#capacityProviders
   */
  readonly capacityProviders: string[];

  /**
   * @schema EcsPutClusterCapacityProvidersRequest#defaultCapacityProviderStrategy
   */
  readonly defaultCapacityProviderStrategy: EcsCapacityProviderStrategyItem[];

}

/**
 * Converts an object of type 'EcsPutClusterCapacityProvidersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPutClusterCapacityProvidersRequest(obj: EcsPutClusterCapacityProvidersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'capacityProviders': obj.capacityProviders?.map(y => y),
    'defaultCapacityProviderStrategy': obj.defaultCapacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPutClusterCapacityProvidersResponse
 */
export interface EcsPutClusterCapacityProvidersResponse {
  /**
   * @schema EcsPutClusterCapacityProvidersResponse#cluster
   */
  readonly cluster?: EcsCluster;

}

/**
 * Converts an object of type 'EcsPutClusterCapacityProvidersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPutClusterCapacityProvidersResponse(obj: EcsPutClusterCapacityProvidersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': toJson_EcsCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsRegisterContainerInstanceRequest
 */
export interface EcsRegisterContainerInstanceRequest {
  /**
   * @schema EcsRegisterContainerInstanceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsRegisterContainerInstanceRequest#instanceIdentityDocument
   */
  readonly instanceIdentityDocument?: string;

  /**
   * @schema EcsRegisterContainerInstanceRequest#instanceIdentityDocumentSignature
   */
  readonly instanceIdentityDocumentSignature?: string;

  /**
   * @schema EcsRegisterContainerInstanceRequest#totalResources
   */
  readonly totalResources?: EcsResource[];

  /**
   * @schema EcsRegisterContainerInstanceRequest#versionInfo
   */
  readonly versionInfo?: EcsVersionInfo;

  /**
   * @schema EcsRegisterContainerInstanceRequest#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema EcsRegisterContainerInstanceRequest#attributes
   */
  readonly attributes?: EcsAttribute[];

  /**
   * @schema EcsRegisterContainerInstanceRequest#platformDevices
   */
  readonly platformDevices?: EcsPlatformDevice[];

  /**
   * @schema EcsRegisterContainerInstanceRequest#tags
   */
  readonly tags?: EcsTag[];

}

/**
 * Converts an object of type 'EcsRegisterContainerInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsRegisterContainerInstanceRequest(obj: EcsRegisterContainerInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'instanceIdentityDocument': obj.instanceIdentityDocument,
    'instanceIdentityDocumentSignature': obj.instanceIdentityDocumentSignature,
    'totalResources': obj.totalResources?.map(y => toJson_EcsResource(y)),
    'versionInfo': toJson_EcsVersionInfo(obj.versionInfo),
    'containerInstanceArn': obj.containerInstanceArn,
    'attributes': obj.attributes?.map(y => toJson_EcsAttribute(y)),
    'platformDevices': obj.platformDevices?.map(y => toJson_EcsPlatformDevice(y)),
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsRegisterContainerInstanceResponse
 */
export interface EcsRegisterContainerInstanceResponse {
  /**
   * @schema EcsRegisterContainerInstanceResponse#containerInstance
   */
  readonly containerInstance?: EcsContainerInstance;

}

/**
 * Converts an object of type 'EcsRegisterContainerInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsRegisterContainerInstanceResponse(obj: EcsRegisterContainerInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerInstance': toJson_EcsContainerInstance(obj.containerInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsRegisterTaskDefinitionRequest
 */
export interface EcsRegisterTaskDefinitionRequest {
  /**
   * @schema EcsRegisterTaskDefinitionRequest#family
   */
  readonly family: string;

  /**
   * @schema EcsRegisterTaskDefinitionRequest#taskRoleArn
   */
  readonly taskRoleArn?: string;

  /**
   * @schema EcsRegisterTaskDefinitionRequest#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema EcsRegisterTaskDefinitionRequest#networkMode
   */
  readonly networkMode?: string;

  /**
   * @schema EcsRegisterTaskDefinitionRequest#containerDefinitions
   */
  readonly containerDefinitions: EcsContainerDefinition[];

  /**
   * @schema EcsRegisterTaskDefinitionRequest#volumes
   */
  readonly volumes?: EcsVolume[];

  /**
   * @schema EcsRegisterTaskDefinitionRequest#placementConstraints
   */
  readonly placementConstraints?: EcsTaskDefinitionPlacementConstraint[];

  /**
   * @schema EcsRegisterTaskDefinitionRequest#requiresCompatibilities
   */
  readonly requiresCompatibilities?: string[];

  /**
   * @schema EcsRegisterTaskDefinitionRequest#cpu
   */
  readonly cpu?: string;

  /**
   * @schema EcsRegisterTaskDefinitionRequest#memory
   */
  readonly memory?: string;

  /**
   * @schema EcsRegisterTaskDefinitionRequest#tags
   */
  readonly tags?: EcsTag[];

  /**
   * @schema EcsRegisterTaskDefinitionRequest#pidMode
   */
  readonly pidMode?: string;

  /**
   * @schema EcsRegisterTaskDefinitionRequest#ipcMode
   */
  readonly ipcMode?: string;

  /**
   * @schema EcsRegisterTaskDefinitionRequest#proxyConfiguration
   */
  readonly proxyConfiguration?: EcsProxyConfiguration;

  /**
   * @schema EcsRegisterTaskDefinitionRequest#inferenceAccelerators
   */
  readonly inferenceAccelerators?: EcsInferenceAccelerator[];

  /**
   * @schema EcsRegisterTaskDefinitionRequest#ephemeralStorage
   */
  readonly ephemeralStorage?: EcsEphemeralStorage;

}

/**
 * Converts an object of type 'EcsRegisterTaskDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsRegisterTaskDefinitionRequest(obj: EcsRegisterTaskDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'family': obj.family,
    'taskRoleArn': obj.taskRoleArn,
    'executionRoleArn': obj.executionRoleArn,
    'networkMode': obj.networkMode,
    'containerDefinitions': obj.containerDefinitions?.map(y => toJson_EcsContainerDefinition(y)),
    'volumes': obj.volumes?.map(y => toJson_EcsVolume(y)),
    'placementConstraints': obj.placementConstraints?.map(y => toJson_EcsTaskDefinitionPlacementConstraint(y)),
    'requiresCompatibilities': obj.requiresCompatibilities?.map(y => y),
    'cpu': obj.cpu,
    'memory': obj.memory,
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
    'pidMode': obj.pidMode,
    'ipcMode': obj.ipcMode,
    'proxyConfiguration': toJson_EcsProxyConfiguration(obj.proxyConfiguration),
    'inferenceAccelerators': obj.inferenceAccelerators?.map(y => toJson_EcsInferenceAccelerator(y)),
    'ephemeralStorage': toJson_EcsEphemeralStorage(obj.ephemeralStorage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsRegisterTaskDefinitionResponse
 */
export interface EcsRegisterTaskDefinitionResponse {
  /**
   * @schema EcsRegisterTaskDefinitionResponse#taskDefinition
   */
  readonly taskDefinition?: EcsTaskDefinition;

  /**
   * @schema EcsRegisterTaskDefinitionResponse#tags
   */
  readonly tags?: EcsTag[];

}

/**
 * Converts an object of type 'EcsRegisterTaskDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsRegisterTaskDefinitionResponse(obj: EcsRegisterTaskDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskDefinition': toJson_EcsTaskDefinition(obj.taskDefinition),
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsRunTaskRequest
 */
export interface EcsRunTaskRequest {
  /**
   * @schema EcsRunTaskRequest#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

  /**
   * @schema EcsRunTaskRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsRunTaskRequest#count
   */
  readonly count?: number;

  /**
   * @schema EcsRunTaskRequest#enableECSManagedTags
   */
  readonly enableEcsManagedTags?: boolean;

  /**
   * @schema EcsRunTaskRequest#enableExecuteCommand
   */
  readonly enableExecuteCommand?: boolean;

  /**
   * @schema EcsRunTaskRequest#group
   */
  readonly group?: string;

  /**
   * @schema EcsRunTaskRequest#launchType
   */
  readonly launchType?: string;

  /**
   * @schema EcsRunTaskRequest#networkConfiguration
   */
  readonly networkConfiguration?: EcsNetworkConfiguration;

  /**
   * @schema EcsRunTaskRequest#overrides
   */
  readonly overrides?: EcsTaskOverride;

  /**
   * @schema EcsRunTaskRequest#placementConstraints
   */
  readonly placementConstraints?: EcsPlacementConstraint[];

  /**
   * @schema EcsRunTaskRequest#placementStrategy
   */
  readonly placementStrategy?: EcsPlacementStrategy[];

  /**
   * @schema EcsRunTaskRequest#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EcsRunTaskRequest#propagateTags
   */
  readonly propagateTags?: string;

  /**
   * @schema EcsRunTaskRequest#referenceId
   */
  readonly referenceId?: string;

  /**
   * @schema EcsRunTaskRequest#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema EcsRunTaskRequest#tags
   */
  readonly tags?: EcsTag[];

  /**
   * @schema EcsRunTaskRequest#taskDefinition
   */
  readonly taskDefinition: string;

}

/**
 * Converts an object of type 'EcsRunTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsRunTaskRequest(obj: EcsRunTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProviderStrategy': obj.capacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
    'cluster': obj.cluster,
    'count': obj.count,
    'enableECSManagedTags': obj.enableEcsManagedTags,
    'enableExecuteCommand': obj.enableExecuteCommand,
    'group': obj.group,
    'launchType': obj.launchType,
    'networkConfiguration': toJson_EcsNetworkConfiguration(obj.networkConfiguration),
    'overrides': toJson_EcsTaskOverride(obj.overrides),
    'placementConstraints': obj.placementConstraints?.map(y => toJson_EcsPlacementConstraint(y)),
    'placementStrategy': obj.placementStrategy?.map(y => toJson_EcsPlacementStrategy(y)),
    'platformVersion': obj.platformVersion,
    'propagateTags': obj.propagateTags,
    'referenceId': obj.referenceId,
    'startedBy': obj.startedBy,
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
    'taskDefinition': obj.taskDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsRunTaskResponse
 */
export interface EcsRunTaskResponse {
  /**
   * @schema EcsRunTaskResponse#tasks
   */
  readonly tasks?: EcsTask[];

  /**
   * @schema EcsRunTaskResponse#failures
   */
  readonly failures?: EcsFailure[];

}

/**
 * Converts an object of type 'EcsRunTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsRunTaskResponse(obj: EcsRunTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tasks': obj.tasks?.map(y => toJson_EcsTask(y)),
    'failures': obj.failures?.map(y => toJson_EcsFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsStartTaskRequest
 */
export interface EcsStartTaskRequest {
  /**
   * @schema EcsStartTaskRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsStartTaskRequest#containerInstances
   */
  readonly containerInstances: string[];

  /**
   * @schema EcsStartTaskRequest#enableECSManagedTags
   */
  readonly enableEcsManagedTags?: boolean;

  /**
   * @schema EcsStartTaskRequest#enableExecuteCommand
   */
  readonly enableExecuteCommand?: boolean;

  /**
   * @schema EcsStartTaskRequest#group
   */
  readonly group?: string;

  /**
   * @schema EcsStartTaskRequest#networkConfiguration
   */
  readonly networkConfiguration?: EcsNetworkConfiguration;

  /**
   * @schema EcsStartTaskRequest#overrides
   */
  readonly overrides?: EcsTaskOverride;

  /**
   * @schema EcsStartTaskRequest#propagateTags
   */
  readonly propagateTags?: string;

  /**
   * @schema EcsStartTaskRequest#referenceId
   */
  readonly referenceId?: string;

  /**
   * @schema EcsStartTaskRequest#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema EcsStartTaskRequest#tags
   */
  readonly tags?: EcsTag[];

  /**
   * @schema EcsStartTaskRequest#taskDefinition
   */
  readonly taskDefinition: string;

}

/**
 * Converts an object of type 'EcsStartTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsStartTaskRequest(obj: EcsStartTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'containerInstances': obj.containerInstances?.map(y => y),
    'enableECSManagedTags': obj.enableEcsManagedTags,
    'enableExecuteCommand': obj.enableExecuteCommand,
    'group': obj.group,
    'networkConfiguration': toJson_EcsNetworkConfiguration(obj.networkConfiguration),
    'overrides': toJson_EcsTaskOverride(obj.overrides),
    'propagateTags': obj.propagateTags,
    'referenceId': obj.referenceId,
    'startedBy': obj.startedBy,
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
    'taskDefinition': obj.taskDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsStartTaskResponse
 */
export interface EcsStartTaskResponse {
  /**
   * @schema EcsStartTaskResponse#tasks
   */
  readonly tasks?: EcsTask[];

  /**
   * @schema EcsStartTaskResponse#failures
   */
  readonly failures?: EcsFailure[];

}

/**
 * Converts an object of type 'EcsStartTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsStartTaskResponse(obj: EcsStartTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tasks': obj.tasks?.map(y => toJson_EcsTask(y)),
    'failures': obj.failures?.map(y => toJson_EcsFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsStopTaskRequest
 */
export interface EcsStopTaskRequest {
  /**
   * @schema EcsStopTaskRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsStopTaskRequest#task
   */
  readonly task: string;

  /**
   * @schema EcsStopTaskRequest#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'EcsStopTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsStopTaskRequest(obj: EcsStopTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'task': obj.task,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsStopTaskResponse
 */
export interface EcsStopTaskResponse {
  /**
   * @schema EcsStopTaskResponse#task
   */
  readonly task?: EcsTask;

}

/**
 * Converts an object of type 'EcsStopTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsStopTaskResponse(obj: EcsStopTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'task': toJson_EcsTask(obj.task),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSubmitAttachmentStateChangesRequest
 */
export interface EcsSubmitAttachmentStateChangesRequest {
  /**
   * @schema EcsSubmitAttachmentStateChangesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsSubmitAttachmentStateChangesRequest#attachments
   */
  readonly attachments: EcsAttachmentStateChange[];

}

/**
 * Converts an object of type 'EcsSubmitAttachmentStateChangesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSubmitAttachmentStateChangesRequest(obj: EcsSubmitAttachmentStateChangesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'attachments': obj.attachments?.map(y => toJson_EcsAttachmentStateChange(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSubmitAttachmentStateChangesResponse
 */
export interface EcsSubmitAttachmentStateChangesResponse {
  /**
   * @schema EcsSubmitAttachmentStateChangesResponse#acknowledgment
   */
  readonly acknowledgment?: string;

}

/**
 * Converts an object of type 'EcsSubmitAttachmentStateChangesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSubmitAttachmentStateChangesResponse(obj: EcsSubmitAttachmentStateChangesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acknowledgment': obj.acknowledgment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSubmitContainerStateChangeRequest
 */
export interface EcsSubmitContainerStateChangeRequest {
  /**
   * @schema EcsSubmitContainerStateChangeRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsSubmitContainerStateChangeRequest#task
   */
  readonly task?: string;

  /**
   * @schema EcsSubmitContainerStateChangeRequest#containerName
   */
  readonly containerName?: string;

  /**
   * @schema EcsSubmitContainerStateChangeRequest#runtimeId
   */
  readonly runtimeId?: string;

  /**
   * @schema EcsSubmitContainerStateChangeRequest#status
   */
  readonly status?: string;

  /**
   * @schema EcsSubmitContainerStateChangeRequest#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema EcsSubmitContainerStateChangeRequest#reason
   */
  readonly reason?: string;

  /**
   * @schema EcsSubmitContainerStateChangeRequest#networkBindings
   */
  readonly networkBindings?: EcsNetworkBinding[];

}

/**
 * Converts an object of type 'EcsSubmitContainerStateChangeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSubmitContainerStateChangeRequest(obj: EcsSubmitContainerStateChangeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'task': obj.task,
    'containerName': obj.containerName,
    'runtimeId': obj.runtimeId,
    'status': obj.status,
    'exitCode': obj.exitCode,
    'reason': obj.reason,
    'networkBindings': obj.networkBindings?.map(y => toJson_EcsNetworkBinding(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSubmitContainerStateChangeResponse
 */
export interface EcsSubmitContainerStateChangeResponse {
  /**
   * @schema EcsSubmitContainerStateChangeResponse#acknowledgment
   */
  readonly acknowledgment?: string;

}

/**
 * Converts an object of type 'EcsSubmitContainerStateChangeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSubmitContainerStateChangeResponse(obj: EcsSubmitContainerStateChangeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acknowledgment': obj.acknowledgment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSubmitTaskStateChangeRequest
 */
export interface EcsSubmitTaskStateChangeRequest {
  /**
   * @schema EcsSubmitTaskStateChangeRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsSubmitTaskStateChangeRequest#task
   */
  readonly task?: string;

  /**
   * @schema EcsSubmitTaskStateChangeRequest#status
   */
  readonly status?: string;

  /**
   * @schema EcsSubmitTaskStateChangeRequest#reason
   */
  readonly reason?: string;

  /**
   * @schema EcsSubmitTaskStateChangeRequest#containers
   */
  readonly containers?: EcsContainerStateChange[];

  /**
   * @schema EcsSubmitTaskStateChangeRequest#attachments
   */
  readonly attachments?: EcsAttachmentStateChange[];

  /**
   * @schema EcsSubmitTaskStateChangeRequest#managedAgents
   */
  readonly managedAgents?: EcsManagedAgentStateChange[];

  /**
   * @schema EcsSubmitTaskStateChangeRequest#pullStartedAt
   */
  readonly pullStartedAt?: string;

  /**
   * @schema EcsSubmitTaskStateChangeRequest#pullStoppedAt
   */
  readonly pullStoppedAt?: string;

  /**
   * @schema EcsSubmitTaskStateChangeRequest#executionStoppedAt
   */
  readonly executionStoppedAt?: string;

}

/**
 * Converts an object of type 'EcsSubmitTaskStateChangeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSubmitTaskStateChangeRequest(obj: EcsSubmitTaskStateChangeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'task': obj.task,
    'status': obj.status,
    'reason': obj.reason,
    'containers': obj.containers?.map(y => toJson_EcsContainerStateChange(y)),
    'attachments': obj.attachments?.map(y => toJson_EcsAttachmentStateChange(y)),
    'managedAgents': obj.managedAgents?.map(y => toJson_EcsManagedAgentStateChange(y)),
    'pullStartedAt': obj.pullStartedAt,
    'pullStoppedAt': obj.pullStoppedAt,
    'executionStoppedAt': obj.executionStoppedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSubmitTaskStateChangeResponse
 */
export interface EcsSubmitTaskStateChangeResponse {
  /**
   * @schema EcsSubmitTaskStateChangeResponse#acknowledgment
   */
  readonly acknowledgment?: string;

}

/**
 * Converts an object of type 'EcsSubmitTaskStateChangeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSubmitTaskStateChangeResponse(obj: EcsSubmitTaskStateChangeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acknowledgment': obj.acknowledgment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsTagResourceRequest
 */
export interface EcsTagResourceRequest {
  /**
   * @schema EcsTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EcsTagResourceRequest#tags
   */
  readonly tags: EcsTag[];

}

/**
 * Converts an object of type 'EcsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsTagResourceRequest(obj: EcsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsTagResourceResponse
 */
export interface EcsTagResourceResponse {
}

/**
 * Converts an object of type 'EcsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsTagResourceResponse(obj: EcsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUntagResourceRequest
 */
export interface EcsUntagResourceRequest {
  /**
   * @schema EcsUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EcsUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'EcsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUntagResourceRequest(obj: EcsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUntagResourceResponse
 */
export interface EcsUntagResourceResponse {
}

/**
 * Converts an object of type 'EcsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUntagResourceResponse(obj: EcsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateCapacityProviderRequest
 */
export interface EcsUpdateCapacityProviderRequest {
  /**
   * @schema EcsUpdateCapacityProviderRequest#name
   */
  readonly name: string;

  /**
   * @schema EcsUpdateCapacityProviderRequest#autoScalingGroupProvider
   */
  readonly autoScalingGroupProvider: EcsAutoScalingGroupProviderUpdate;

}

/**
 * Converts an object of type 'EcsUpdateCapacityProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateCapacityProviderRequest(obj: EcsUpdateCapacityProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'autoScalingGroupProvider': toJson_EcsAutoScalingGroupProviderUpdate(obj.autoScalingGroupProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateCapacityProviderResponse
 */
export interface EcsUpdateCapacityProviderResponse {
  /**
   * @schema EcsUpdateCapacityProviderResponse#capacityProvider
   */
  readonly capacityProvider?: EcsCapacityProvider;

}

/**
 * Converts an object of type 'EcsUpdateCapacityProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateCapacityProviderResponse(obj: EcsUpdateCapacityProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProvider': toJson_EcsCapacityProvider(obj.capacityProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateClusterRequest
 */
export interface EcsUpdateClusterRequest {
  /**
   * @schema EcsUpdateClusterRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema EcsUpdateClusterRequest#settings
   */
  readonly settings?: EcsClusterSetting[];

  /**
   * @schema EcsUpdateClusterRequest#configuration
   */
  readonly configuration?: EcsClusterConfiguration;

}

/**
 * Converts an object of type 'EcsUpdateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateClusterRequest(obj: EcsUpdateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'settings': obj.settings?.map(y => toJson_EcsClusterSetting(y)),
    'configuration': toJson_EcsClusterConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateClusterResponse
 */
export interface EcsUpdateClusterResponse {
  /**
   * @schema EcsUpdateClusterResponse#cluster
   */
  readonly cluster?: EcsCluster;

}

/**
 * Converts an object of type 'EcsUpdateClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateClusterResponse(obj: EcsUpdateClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': toJson_EcsCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateClusterSettingsRequest
 */
export interface EcsUpdateClusterSettingsRequest {
  /**
   * @schema EcsUpdateClusterSettingsRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema EcsUpdateClusterSettingsRequest#settings
   */
  readonly settings: EcsClusterSetting[];

}

/**
 * Converts an object of type 'EcsUpdateClusterSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateClusterSettingsRequest(obj: EcsUpdateClusterSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'settings': obj.settings?.map(y => toJson_EcsClusterSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateClusterSettingsResponse
 */
export interface EcsUpdateClusterSettingsResponse {
  /**
   * @schema EcsUpdateClusterSettingsResponse#cluster
   */
  readonly cluster?: EcsCluster;

}

/**
 * Converts an object of type 'EcsUpdateClusterSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateClusterSettingsResponse(obj: EcsUpdateClusterSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': toJson_EcsCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateContainerAgentRequest
 */
export interface EcsUpdateContainerAgentRequest {
  /**
   * @schema EcsUpdateContainerAgentRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsUpdateContainerAgentRequest#containerInstance
   */
  readonly containerInstance: string;

}

/**
 * Converts an object of type 'EcsUpdateContainerAgentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateContainerAgentRequest(obj: EcsUpdateContainerAgentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'containerInstance': obj.containerInstance,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateContainerAgentResponse
 */
export interface EcsUpdateContainerAgentResponse {
  /**
   * @schema EcsUpdateContainerAgentResponse#containerInstance
   */
  readonly containerInstance?: EcsContainerInstance;

}

/**
 * Converts an object of type 'EcsUpdateContainerAgentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateContainerAgentResponse(obj: EcsUpdateContainerAgentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerInstance': toJson_EcsContainerInstance(obj.containerInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateContainerInstancesStateRequest
 */
export interface EcsUpdateContainerInstancesStateRequest {
  /**
   * @schema EcsUpdateContainerInstancesStateRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsUpdateContainerInstancesStateRequest#containerInstances
   */
  readonly containerInstances: string[];

  /**
   * @schema EcsUpdateContainerInstancesStateRequest#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'EcsUpdateContainerInstancesStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateContainerInstancesStateRequest(obj: EcsUpdateContainerInstancesStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'containerInstances': obj.containerInstances?.map(y => y),
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateContainerInstancesStateResponse
 */
export interface EcsUpdateContainerInstancesStateResponse {
  /**
   * @schema EcsUpdateContainerInstancesStateResponse#containerInstances
   */
  readonly containerInstances?: EcsContainerInstance[];

  /**
   * @schema EcsUpdateContainerInstancesStateResponse#failures
   */
  readonly failures?: EcsFailure[];

}

/**
 * Converts an object of type 'EcsUpdateContainerInstancesStateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateContainerInstancesStateResponse(obj: EcsUpdateContainerInstancesStateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerInstances': obj.containerInstances?.map(y => toJson_EcsContainerInstance(y)),
    'failures': obj.failures?.map(y => toJson_EcsFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateServiceRequest
 */
export interface EcsUpdateServiceRequest {
  /**
   * @schema EcsUpdateServiceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema EcsUpdateServiceRequest#service
   */
  readonly service: string;

  /**
   * @schema EcsUpdateServiceRequest#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema EcsUpdateServiceRequest#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema EcsUpdateServiceRequest#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

  /**
   * @schema EcsUpdateServiceRequest#deploymentConfiguration
   */
  readonly deploymentConfiguration?: EcsDeploymentConfiguration;

  /**
   * @schema EcsUpdateServiceRequest#networkConfiguration
   */
  readonly networkConfiguration?: EcsNetworkConfiguration;

  /**
   * @schema EcsUpdateServiceRequest#placementConstraints
   */
  readonly placementConstraints?: EcsPlacementConstraint[];

  /**
   * @schema EcsUpdateServiceRequest#placementStrategy
   */
  readonly placementStrategy?: EcsPlacementStrategy[];

  /**
   * @schema EcsUpdateServiceRequest#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EcsUpdateServiceRequest#forceNewDeployment
   */
  readonly forceNewDeployment?: boolean;

  /**
   * @schema EcsUpdateServiceRequest#healthCheckGracePeriodSeconds
   */
  readonly healthCheckGracePeriodSeconds?: number;

  /**
   * @schema EcsUpdateServiceRequest#enableExecuteCommand
   */
  readonly enableExecuteCommand?: boolean;

}

/**
 * Converts an object of type 'EcsUpdateServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateServiceRequest(obj: EcsUpdateServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'service': obj.service,
    'desiredCount': obj.desiredCount,
    'taskDefinition': obj.taskDefinition,
    'capacityProviderStrategy': obj.capacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
    'deploymentConfiguration': toJson_EcsDeploymentConfiguration(obj.deploymentConfiguration),
    'networkConfiguration': toJson_EcsNetworkConfiguration(obj.networkConfiguration),
    'placementConstraints': obj.placementConstraints?.map(y => toJson_EcsPlacementConstraint(y)),
    'placementStrategy': obj.placementStrategy?.map(y => toJson_EcsPlacementStrategy(y)),
    'platformVersion': obj.platformVersion,
    'forceNewDeployment': obj.forceNewDeployment,
    'healthCheckGracePeriodSeconds': obj.healthCheckGracePeriodSeconds,
    'enableExecuteCommand': obj.enableExecuteCommand,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateServiceResponse
 */
export interface EcsUpdateServiceResponse {
  /**
   * @schema EcsUpdateServiceResponse#service
   */
  readonly service?: EcsService;

}

/**
 * Converts an object of type 'EcsUpdateServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateServiceResponse(obj: EcsUpdateServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': toJson_EcsService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateServicePrimaryTaskSetRequest
 */
export interface EcsUpdateServicePrimaryTaskSetRequest {
  /**
   * @schema EcsUpdateServicePrimaryTaskSetRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema EcsUpdateServicePrimaryTaskSetRequest#service
   */
  readonly service: string;

  /**
   * @schema EcsUpdateServicePrimaryTaskSetRequest#primaryTaskSet
   */
  readonly primaryTaskSet: string;

}

/**
 * Converts an object of type 'EcsUpdateServicePrimaryTaskSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateServicePrimaryTaskSetRequest(obj: EcsUpdateServicePrimaryTaskSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'service': obj.service,
    'primaryTaskSet': obj.primaryTaskSet,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateServicePrimaryTaskSetResponse
 */
export interface EcsUpdateServicePrimaryTaskSetResponse {
  /**
   * @schema EcsUpdateServicePrimaryTaskSetResponse#taskSet
   */
  readonly taskSet?: EcsTaskSet;

}

/**
 * Converts an object of type 'EcsUpdateServicePrimaryTaskSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateServicePrimaryTaskSetResponse(obj: EcsUpdateServicePrimaryTaskSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskSet': toJson_EcsTaskSet(obj.taskSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateTaskSetRequest
 */
export interface EcsUpdateTaskSetRequest {
  /**
   * @schema EcsUpdateTaskSetRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema EcsUpdateTaskSetRequest#service
   */
  readonly service: string;

  /**
   * @schema EcsUpdateTaskSetRequest#taskSet
   */
  readonly taskSet: string;

  /**
   * @schema EcsUpdateTaskSetRequest#scale
   */
  readonly scale: EcsScale;

}

/**
 * Converts an object of type 'EcsUpdateTaskSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateTaskSetRequest(obj: EcsUpdateTaskSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster,
    'service': obj.service,
    'taskSet': obj.taskSet,
    'scale': toJson_EcsScale(obj.scale),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUpdateTaskSetResponse
 */
export interface EcsUpdateTaskSetResponse {
  /**
   * @schema EcsUpdateTaskSetResponse#taskSet
   */
  readonly taskSet?: EcsTaskSet;

}

/**
 * Converts an object of type 'EcsUpdateTaskSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUpdateTaskSetResponse(obj: EcsUpdateTaskSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskSet': toJson_EcsTaskSet(obj.taskSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsAutoScalingGroupProvider
 */
export interface EcsAutoScalingGroupProvider {
  /**
   * @schema EcsAutoScalingGroupProvider#autoScalingGroupArn
   */
  readonly autoScalingGroupArn: string;

  /**
   * @schema EcsAutoScalingGroupProvider#managedScaling
   */
  readonly managedScaling?: EcsManagedScaling;

  /**
   * @schema EcsAutoScalingGroupProvider#managedTerminationProtection
   */
  readonly managedTerminationProtection?: string;

}

/**
 * Converts an object of type 'EcsAutoScalingGroupProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsAutoScalingGroupProvider(obj: EcsAutoScalingGroupProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'autoScalingGroupArn': obj.autoScalingGroupArn,
    'managedScaling': toJson_EcsManagedScaling(obj.managedScaling),
    'managedTerminationProtection': obj.managedTerminationProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsTag
 */
export interface EcsTag {
  /**
   * @schema EcsTag#key
   */
  readonly key?: string;

  /**
   * @schema EcsTag#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EcsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsTag(obj: EcsTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCapacityProvider
 */
export interface EcsCapacityProvider {
  /**
   * @schema EcsCapacityProvider#capacityProviderArn
   */
  readonly capacityProviderArn?: string;

  /**
   * @schema EcsCapacityProvider#name
   */
  readonly name?: string;

  /**
   * @schema EcsCapacityProvider#status
   */
  readonly status?: string;

  /**
   * @schema EcsCapacityProvider#autoScalingGroupProvider
   */
  readonly autoScalingGroupProvider?: EcsAutoScalingGroupProvider;

  /**
   * @schema EcsCapacityProvider#updateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema EcsCapacityProvider#updateStatusReason
   */
  readonly updateStatusReason?: string;

  /**
   * @schema EcsCapacityProvider#tags
   */
  readonly tags?: EcsTag[];

}

/**
 * Converts an object of type 'EcsCapacityProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCapacityProvider(obj: EcsCapacityProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProviderArn': obj.capacityProviderArn,
    'name': obj.name,
    'status': obj.status,
    'autoScalingGroupProvider': toJson_EcsAutoScalingGroupProvider(obj.autoScalingGroupProvider),
    'updateStatus': obj.updateStatus,
    'updateStatusReason': obj.updateStatusReason,
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsClusterSetting
 */
export interface EcsClusterSetting {
  /**
   * @schema EcsClusterSetting#name
   */
  readonly name?: string;

  /**
   * @schema EcsClusterSetting#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EcsClusterSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsClusterSetting(obj: EcsClusterSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsClusterConfiguration
 */
export interface EcsClusterConfiguration {
  /**
   * @schema EcsClusterConfiguration#executeCommandConfiguration
   */
  readonly executeCommandConfiguration?: EcsExecuteCommandConfiguration;

}

/**
 * Converts an object of type 'EcsClusterConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsClusterConfiguration(obj: EcsClusterConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'executeCommandConfiguration': toJson_EcsExecuteCommandConfiguration(obj.executeCommandConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCapacityProviderStrategyItem
 */
export interface EcsCapacityProviderStrategyItem {
  /**
   * @schema EcsCapacityProviderStrategyItem#capacityProvider
   */
  readonly capacityProvider: string;

  /**
   * @schema EcsCapacityProviderStrategyItem#weight
   */
  readonly weight?: number;

  /**
   * @schema EcsCapacityProviderStrategyItem#base
   */
  readonly base?: number;

}

/**
 * Converts an object of type 'EcsCapacityProviderStrategyItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCapacityProviderStrategyItem(obj: EcsCapacityProviderStrategyItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityProvider': obj.capacityProvider,
    'weight': obj.weight,
    'base': obj.base,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsCluster
 */
export interface EcsCluster {
  /**
   * @schema EcsCluster#clusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema EcsCluster#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema EcsCluster#configuration
   */
  readonly configuration?: EcsClusterConfiguration;

  /**
   * @schema EcsCluster#status
   */
  readonly status?: string;

  /**
   * @schema EcsCluster#registeredContainerInstancesCount
   */
  readonly registeredContainerInstancesCount?: number;

  /**
   * @schema EcsCluster#runningTasksCount
   */
  readonly runningTasksCount?: number;

  /**
   * @schema EcsCluster#pendingTasksCount
   */
  readonly pendingTasksCount?: number;

  /**
   * @schema EcsCluster#activeServicesCount
   */
  readonly activeServicesCount?: number;

  /**
   * @schema EcsCluster#statistics
   */
  readonly statistics?: EcsKeyValuePair[];

  /**
   * @schema EcsCluster#tags
   */
  readonly tags?: EcsTag[];

  /**
   * @schema EcsCluster#settings
   */
  readonly settings?: EcsClusterSetting[];

  /**
   * @schema EcsCluster#capacityProviders
   */
  readonly capacityProviders?: string[];

  /**
   * @schema EcsCluster#defaultCapacityProviderStrategy
   */
  readonly defaultCapacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

  /**
   * @schema EcsCluster#attachments
   */
  readonly attachments?: EcsAttachment[];

  /**
   * @schema EcsCluster#attachmentsStatus
   */
  readonly attachmentsStatus?: string;

}

/**
 * Converts an object of type 'EcsCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsCluster(obj: EcsCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterArn': obj.clusterArn,
    'clusterName': obj.clusterName,
    'configuration': toJson_EcsClusterConfiguration(obj.configuration),
    'status': obj.status,
    'registeredContainerInstancesCount': obj.registeredContainerInstancesCount,
    'runningTasksCount': obj.runningTasksCount,
    'pendingTasksCount': obj.pendingTasksCount,
    'activeServicesCount': obj.activeServicesCount,
    'statistics': obj.statistics?.map(y => toJson_EcsKeyValuePair(y)),
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
    'settings': obj.settings?.map(y => toJson_EcsClusterSetting(y)),
    'capacityProviders': obj.capacityProviders?.map(y => y),
    'defaultCapacityProviderStrategy': obj.defaultCapacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
    'attachments': obj.attachments?.map(y => toJson_EcsAttachment(y)),
    'attachmentsStatus': obj.attachmentsStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsLoadBalancer
 */
export interface EcsLoadBalancer {
  /**
   * @schema EcsLoadBalancer#targetGroupArn
   */
  readonly targetGroupArn?: string;

  /**
   * @schema EcsLoadBalancer#loadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema EcsLoadBalancer#containerName
   */
  readonly containerName?: string;

  /**
   * @schema EcsLoadBalancer#containerPort
   */
  readonly containerPort?: number;

}

/**
 * Converts an object of type 'EcsLoadBalancer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsLoadBalancer(obj: EcsLoadBalancer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetGroupArn': obj.targetGroupArn,
    'loadBalancerName': obj.loadBalancerName,
    'containerName': obj.containerName,
    'containerPort': obj.containerPort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsServiceRegistry
 */
export interface EcsServiceRegistry {
  /**
   * @schema EcsServiceRegistry#registryArn
   */
  readonly registryArn?: string;

  /**
   * @schema EcsServiceRegistry#port
   */
  readonly port?: number;

  /**
   * @schema EcsServiceRegistry#containerName
   */
  readonly containerName?: string;

  /**
   * @schema EcsServiceRegistry#containerPort
   */
  readonly containerPort?: number;

}

/**
 * Converts an object of type 'EcsServiceRegistry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsServiceRegistry(obj: EcsServiceRegistry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registryArn': obj.registryArn,
    'port': obj.port,
    'containerName': obj.containerName,
    'containerPort': obj.containerPort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeploymentConfiguration
 */
export interface EcsDeploymentConfiguration {
  /**
   * @schema EcsDeploymentConfiguration#deploymentCircuitBreaker
   */
  readonly deploymentCircuitBreaker?: EcsDeploymentCircuitBreaker;

  /**
   * @schema EcsDeploymentConfiguration#maximumPercent
   */
  readonly maximumPercent?: number;

  /**
   * @schema EcsDeploymentConfiguration#minimumHealthyPercent
   */
  readonly minimumHealthyPercent?: number;

}

/**
 * Converts an object of type 'EcsDeploymentConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeploymentConfiguration(obj: EcsDeploymentConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentCircuitBreaker': toJson_EcsDeploymentCircuitBreaker(obj.deploymentCircuitBreaker),
    'maximumPercent': obj.maximumPercent,
    'minimumHealthyPercent': obj.minimumHealthyPercent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPlacementConstraint
 */
export interface EcsPlacementConstraint {
  /**
   * @schema EcsPlacementConstraint#type
   */
  readonly type?: string;

  /**
   * @schema EcsPlacementConstraint#expression
   */
  readonly expression?: string;

}

/**
 * Converts an object of type 'EcsPlacementConstraint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPlacementConstraint(obj: EcsPlacementConstraint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'expression': obj.expression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPlacementStrategy
 */
export interface EcsPlacementStrategy {
  /**
   * @schema EcsPlacementStrategy#type
   */
  readonly type?: string;

  /**
   * @schema EcsPlacementStrategy#field
   */
  readonly field?: string;

}

/**
 * Converts an object of type 'EcsPlacementStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPlacementStrategy(obj: EcsPlacementStrategy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'field': obj.field,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsNetworkConfiguration
 */
export interface EcsNetworkConfiguration {
  /**
   * @schema EcsNetworkConfiguration#awsvpcConfiguration
   */
  readonly awsvpcConfiguration?: EcsAwsVpcConfiguration;

}

/**
 * Converts an object of type 'EcsNetworkConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsNetworkConfiguration(obj: EcsNetworkConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsvpcConfiguration': toJson_EcsAwsVpcConfiguration(obj.awsvpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeploymentController
 */
export interface EcsDeploymentController {
  /**
   * @schema EcsDeploymentController#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'EcsDeploymentController' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeploymentController(obj: EcsDeploymentController | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsService
 */
export interface EcsService {
  /**
   * @schema EcsService#serviceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema EcsService#serviceName
   */
  readonly serviceName?: string;

  /**
   * @schema EcsService#clusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema EcsService#loadBalancers
   */
  readonly loadBalancers?: EcsLoadBalancer[];

  /**
   * @schema EcsService#serviceRegistries
   */
  readonly serviceRegistries?: EcsServiceRegistry[];

  /**
   * @schema EcsService#status
   */
  readonly status?: string;

  /**
   * @schema EcsService#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema EcsService#runningCount
   */
  readonly runningCount?: number;

  /**
   * @schema EcsService#pendingCount
   */
  readonly pendingCount?: number;

  /**
   * @schema EcsService#launchType
   */
  readonly launchType?: string;

  /**
   * @schema EcsService#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

  /**
   * @schema EcsService#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EcsService#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema EcsService#deploymentConfiguration
   */
  readonly deploymentConfiguration?: EcsDeploymentConfiguration;

  /**
   * @schema EcsService#taskSets
   */
  readonly taskSets?: EcsTaskSet[];

  /**
   * @schema EcsService#deployments
   */
  readonly deployments?: EcsDeployment[];

  /**
   * @schema EcsService#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EcsService#events
   */
  readonly events?: EcsServiceEvent[];

  /**
   * @schema EcsService#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EcsService#placementConstraints
   */
  readonly placementConstraints?: EcsPlacementConstraint[];

  /**
   * @schema EcsService#placementStrategy
   */
  readonly placementStrategy?: EcsPlacementStrategy[];

  /**
   * @schema EcsService#networkConfiguration
   */
  readonly networkConfiguration?: EcsNetworkConfiguration;

  /**
   * @schema EcsService#healthCheckGracePeriodSeconds
   */
  readonly healthCheckGracePeriodSeconds?: number;

  /**
   * @schema EcsService#schedulingStrategy
   */
  readonly schedulingStrategy?: string;

  /**
   * @schema EcsService#deploymentController
   */
  readonly deploymentController?: EcsDeploymentController;

  /**
   * @schema EcsService#tags
   */
  readonly tags?: EcsTag[];

  /**
   * @schema EcsService#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema EcsService#enableECSManagedTags
   */
  readonly enableEcsManagedTags?: boolean;

  /**
   * @schema EcsService#propagateTags
   */
  readonly propagateTags?: string;

  /**
   * @schema EcsService#enableExecuteCommand
   */
  readonly enableExecuteCommand?: boolean;

}

/**
 * Converts an object of type 'EcsService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsService(obj: EcsService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceArn': obj.serviceArn,
    'serviceName': obj.serviceName,
    'clusterArn': obj.clusterArn,
    'loadBalancers': obj.loadBalancers?.map(y => toJson_EcsLoadBalancer(y)),
    'serviceRegistries': obj.serviceRegistries?.map(y => toJson_EcsServiceRegistry(y)),
    'status': obj.status,
    'desiredCount': obj.desiredCount,
    'runningCount': obj.runningCount,
    'pendingCount': obj.pendingCount,
    'launchType': obj.launchType,
    'capacityProviderStrategy': obj.capacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
    'platformVersion': obj.platformVersion,
    'taskDefinition': obj.taskDefinition,
    'deploymentConfiguration': toJson_EcsDeploymentConfiguration(obj.deploymentConfiguration),
    'taskSets': obj.taskSets?.map(y => toJson_EcsTaskSet(y)),
    'deployments': obj.deployments?.map(y => toJson_EcsDeployment(y)),
    'roleArn': obj.roleArn,
    'events': obj.events?.map(y => toJson_EcsServiceEvent(y)),
    'createdAt': obj.createdAt,
    'placementConstraints': obj.placementConstraints?.map(y => toJson_EcsPlacementConstraint(y)),
    'placementStrategy': obj.placementStrategy?.map(y => toJson_EcsPlacementStrategy(y)),
    'networkConfiguration': toJson_EcsNetworkConfiguration(obj.networkConfiguration),
    'healthCheckGracePeriodSeconds': obj.healthCheckGracePeriodSeconds,
    'schedulingStrategy': obj.schedulingStrategy,
    'deploymentController': toJson_EcsDeploymentController(obj.deploymentController),
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
    'createdBy': obj.createdBy,
    'enableECSManagedTags': obj.enableEcsManagedTags,
    'propagateTags': obj.propagateTags,
    'enableExecuteCommand': obj.enableExecuteCommand,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsScale
 */
export interface EcsScale {
  /**
   * @schema EcsScale#value
   */
  readonly value?: number;

  /**
   * @schema EcsScale#unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'EcsScale' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsScale(obj: EcsScale | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
    'unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsTaskSet
 */
export interface EcsTaskSet {
  /**
   * @schema EcsTaskSet#id
   */
  readonly id?: string;

  /**
   * @schema EcsTaskSet#taskSetArn
   */
  readonly taskSetArn?: string;

  /**
   * @schema EcsTaskSet#serviceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema EcsTaskSet#clusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema EcsTaskSet#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema EcsTaskSet#externalId
   */
  readonly externalId?: string;

  /**
   * @schema EcsTaskSet#status
   */
  readonly status?: string;

  /**
   * @schema EcsTaskSet#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema EcsTaskSet#computedDesiredCount
   */
  readonly computedDesiredCount?: number;

  /**
   * @schema EcsTaskSet#pendingCount
   */
  readonly pendingCount?: number;

  /**
   * @schema EcsTaskSet#runningCount
   */
  readonly runningCount?: number;

  /**
   * @schema EcsTaskSet#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EcsTaskSet#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema EcsTaskSet#launchType
   */
  readonly launchType?: string;

  /**
   * @schema EcsTaskSet#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

  /**
   * @schema EcsTaskSet#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EcsTaskSet#networkConfiguration
   */
  readonly networkConfiguration?: EcsNetworkConfiguration;

  /**
   * @schema EcsTaskSet#loadBalancers
   */
  readonly loadBalancers?: EcsLoadBalancer[];

  /**
   * @schema EcsTaskSet#serviceRegistries
   */
  readonly serviceRegistries?: EcsServiceRegistry[];

  /**
   * @schema EcsTaskSet#scale
   */
  readonly scale?: EcsScale;

  /**
   * @schema EcsTaskSet#stabilityStatus
   */
  readonly stabilityStatus?: string;

  /**
   * @schema EcsTaskSet#stabilityStatusAt
   */
  readonly stabilityStatusAt?: string;

  /**
   * @schema EcsTaskSet#tags
   */
  readonly tags?: EcsTag[];

}

/**
 * Converts an object of type 'EcsTaskSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsTaskSet(obj: EcsTaskSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'taskSetArn': obj.taskSetArn,
    'serviceArn': obj.serviceArn,
    'clusterArn': obj.clusterArn,
    'startedBy': obj.startedBy,
    'externalId': obj.externalId,
    'status': obj.status,
    'taskDefinition': obj.taskDefinition,
    'computedDesiredCount': obj.computedDesiredCount,
    'pendingCount': obj.pendingCount,
    'runningCount': obj.runningCount,
    'createdAt': obj.createdAt,
    'updatedAt': obj.updatedAt,
    'launchType': obj.launchType,
    'capacityProviderStrategy': obj.capacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
    'platformVersion': obj.platformVersion,
    'networkConfiguration': toJson_EcsNetworkConfiguration(obj.networkConfiguration),
    'loadBalancers': obj.loadBalancers?.map(y => toJson_EcsLoadBalancer(y)),
    'serviceRegistries': obj.serviceRegistries?.map(y => toJson_EcsServiceRegistry(y)),
    'scale': toJson_EcsScale(obj.scale),
    'stabilityStatus': obj.stabilityStatus,
    'stabilityStatusAt': obj.stabilityStatusAt,
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSetting
 */
export interface EcsSetting {
  /**
   * @schema EcsSetting#name
   */
  readonly name?: string;

  /**
   * @schema EcsSetting#value
   */
  readonly value?: string;

  /**
   * @schema EcsSetting#principalArn
   */
  readonly principalArn?: string;

}

/**
 * Converts an object of type 'EcsSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSetting(obj: EcsSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
    'principalArn': obj.principalArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsAttribute
 */
export interface EcsAttribute {
  /**
   * @schema EcsAttribute#name
   */
  readonly name: string;

  /**
   * @schema EcsAttribute#value
   */
  readonly value?: string;

  /**
   * @schema EcsAttribute#targetType
   */
  readonly targetType?: string;

  /**
   * @schema EcsAttribute#targetId
   */
  readonly targetId?: string;

}

/**
 * Converts an object of type 'EcsAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsAttribute(obj: EcsAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
    'targetType': obj.targetType,
    'targetId': obj.targetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsContainerInstance
 */
export interface EcsContainerInstance {
  /**
   * @schema EcsContainerInstance#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema EcsContainerInstance#ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema EcsContainerInstance#capacityProviderName
   */
  readonly capacityProviderName?: string;

  /**
   * @schema EcsContainerInstance#version
   */
  readonly version?: number;

  /**
   * @schema EcsContainerInstance#versionInfo
   */
  readonly versionInfo?: EcsVersionInfo;

  /**
   * @schema EcsContainerInstance#remainingResources
   */
  readonly remainingResources?: EcsResource[];

  /**
   * @schema EcsContainerInstance#registeredResources
   */
  readonly registeredResources?: EcsResource[];

  /**
   * @schema EcsContainerInstance#status
   */
  readonly status?: string;

  /**
   * @schema EcsContainerInstance#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema EcsContainerInstance#agentConnected
   */
  readonly agentConnected?: boolean;

  /**
   * @schema EcsContainerInstance#runningTasksCount
   */
  readonly runningTasksCount?: number;

  /**
   * @schema EcsContainerInstance#pendingTasksCount
   */
  readonly pendingTasksCount?: number;

  /**
   * @schema EcsContainerInstance#agentUpdateStatus
   */
  readonly agentUpdateStatus?: string;

  /**
   * @schema EcsContainerInstance#attributes
   */
  readonly attributes?: EcsAttribute[];

  /**
   * @schema EcsContainerInstance#registeredAt
   */
  readonly registeredAt?: string;

  /**
   * @schema EcsContainerInstance#attachments
   */
  readonly attachments?: EcsAttachment[];

  /**
   * @schema EcsContainerInstance#tags
   */
  readonly tags?: EcsTag[];

}

/**
 * Converts an object of type 'EcsContainerInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsContainerInstance(obj: EcsContainerInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerInstanceArn': obj.containerInstanceArn,
    'ec2InstanceId': obj.ec2InstanceId,
    'capacityProviderName': obj.capacityProviderName,
    'version': obj.version,
    'versionInfo': toJson_EcsVersionInfo(obj.versionInfo),
    'remainingResources': obj.remainingResources?.map(y => toJson_EcsResource(y)),
    'registeredResources': obj.registeredResources?.map(y => toJson_EcsResource(y)),
    'status': obj.status,
    'statusReason': obj.statusReason,
    'agentConnected': obj.agentConnected,
    'runningTasksCount': obj.runningTasksCount,
    'pendingTasksCount': obj.pendingTasksCount,
    'agentUpdateStatus': obj.agentUpdateStatus,
    'attributes': obj.attributes?.map(y => toJson_EcsAttribute(y)),
    'registeredAt': obj.registeredAt,
    'attachments': obj.attachments?.map(y => toJson_EcsAttachment(y)),
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsTaskDefinition
 */
export interface EcsTaskDefinition {
  /**
   * @schema EcsTaskDefinition#taskDefinitionArn
   */
  readonly taskDefinitionArn?: string;

  /**
   * @schema EcsTaskDefinition#containerDefinitions
   */
  readonly containerDefinitions?: EcsContainerDefinition[];

  /**
   * @schema EcsTaskDefinition#family
   */
  readonly family?: string;

  /**
   * @schema EcsTaskDefinition#taskRoleArn
   */
  readonly taskRoleArn?: string;

  /**
   * @schema EcsTaskDefinition#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema EcsTaskDefinition#networkMode
   */
  readonly networkMode?: string;

  /**
   * @schema EcsTaskDefinition#revision
   */
  readonly revision?: number;

  /**
   * @schema EcsTaskDefinition#volumes
   */
  readonly volumes?: EcsVolume[];

  /**
   * @schema EcsTaskDefinition#status
   */
  readonly status?: string;

  /**
   * @schema EcsTaskDefinition#requiresAttributes
   */
  readonly requiresAttributes?: EcsAttribute[];

  /**
   * @schema EcsTaskDefinition#placementConstraints
   */
  readonly placementConstraints?: EcsTaskDefinitionPlacementConstraint[];

  /**
   * @schema EcsTaskDefinition#compatibilities
   */
  readonly compatibilities?: string[];

  /**
   * @schema EcsTaskDefinition#requiresCompatibilities
   */
  readonly requiresCompatibilities?: string[];

  /**
   * @schema EcsTaskDefinition#cpu
   */
  readonly cpu?: string;

  /**
   * @schema EcsTaskDefinition#memory
   */
  readonly memory?: string;

  /**
   * @schema EcsTaskDefinition#inferenceAccelerators
   */
  readonly inferenceAccelerators?: EcsInferenceAccelerator[];

  /**
   * @schema EcsTaskDefinition#pidMode
   */
  readonly pidMode?: string;

  /**
   * @schema EcsTaskDefinition#ipcMode
   */
  readonly ipcMode?: string;

  /**
   * @schema EcsTaskDefinition#proxyConfiguration
   */
  readonly proxyConfiguration?: EcsProxyConfiguration;

  /**
   * @schema EcsTaskDefinition#registeredAt
   */
  readonly registeredAt?: string;

  /**
   * @schema EcsTaskDefinition#deregisteredAt
   */
  readonly deregisteredAt?: string;

  /**
   * @schema EcsTaskDefinition#registeredBy
   */
  readonly registeredBy?: string;

  /**
   * @schema EcsTaskDefinition#ephemeralStorage
   */
  readonly ephemeralStorage?: EcsEphemeralStorage;

}

/**
 * Converts an object of type 'EcsTaskDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsTaskDefinition(obj: EcsTaskDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskDefinitionArn': obj.taskDefinitionArn,
    'containerDefinitions': obj.containerDefinitions?.map(y => toJson_EcsContainerDefinition(y)),
    'family': obj.family,
    'taskRoleArn': obj.taskRoleArn,
    'executionRoleArn': obj.executionRoleArn,
    'networkMode': obj.networkMode,
    'revision': obj.revision,
    'volumes': obj.volumes?.map(y => toJson_EcsVolume(y)),
    'status': obj.status,
    'requiresAttributes': obj.requiresAttributes?.map(y => toJson_EcsAttribute(y)),
    'placementConstraints': obj.placementConstraints?.map(y => toJson_EcsTaskDefinitionPlacementConstraint(y)),
    'compatibilities': obj.compatibilities?.map(y => y),
    'requiresCompatibilities': obj.requiresCompatibilities?.map(y => y),
    'cpu': obj.cpu,
    'memory': obj.memory,
    'inferenceAccelerators': obj.inferenceAccelerators?.map(y => toJson_EcsInferenceAccelerator(y)),
    'pidMode': obj.pidMode,
    'ipcMode': obj.ipcMode,
    'proxyConfiguration': toJson_EcsProxyConfiguration(obj.proxyConfiguration),
    'registeredAt': obj.registeredAt,
    'deregisteredAt': obj.deregisteredAt,
    'registeredBy': obj.registeredBy,
    'ephemeralStorage': toJson_EcsEphemeralStorage(obj.ephemeralStorage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsFailure
 */
export interface EcsFailure {
  /**
   * @schema EcsFailure#arn
   */
  readonly arn?: string;

  /**
   * @schema EcsFailure#reason
   */
  readonly reason?: string;

  /**
   * @schema EcsFailure#detail
   */
  readonly detail?: string;

}

/**
 * Converts an object of type 'EcsFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsFailure(obj: EcsFailure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'reason': obj.reason,
    'detail': obj.detail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsTask
 */
export interface EcsTask {
  /**
   * @schema EcsTask#attachments
   */
  readonly attachments?: EcsAttachment[];

  /**
   * @schema EcsTask#attributes
   */
  readonly attributes?: EcsAttribute[];

  /**
   * @schema EcsTask#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema EcsTask#capacityProviderName
   */
  readonly capacityProviderName?: string;

  /**
   * @schema EcsTask#clusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema EcsTask#connectivity
   */
  readonly connectivity?: string;

  /**
   * @schema EcsTask#connectivityAt
   */
  readonly connectivityAt?: string;

  /**
   * @schema EcsTask#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema EcsTask#containers
   */
  readonly containers?: EcsContainer[];

  /**
   * @schema EcsTask#cpu
   */
  readonly cpu?: string;

  /**
   * @schema EcsTask#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EcsTask#desiredStatus
   */
  readonly desiredStatus?: string;

  /**
   * @schema EcsTask#enableExecuteCommand
   */
  readonly enableExecuteCommand?: boolean;

  /**
   * @schema EcsTask#executionStoppedAt
   */
  readonly executionStoppedAt?: string;

  /**
   * @schema EcsTask#group
   */
  readonly group?: string;

  /**
   * @schema EcsTask#healthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema EcsTask#inferenceAccelerators
   */
  readonly inferenceAccelerators?: EcsInferenceAccelerator[];

  /**
   * @schema EcsTask#lastStatus
   */
  readonly lastStatus?: string;

  /**
   * @schema EcsTask#launchType
   */
  readonly launchType?: string;

  /**
   * @schema EcsTask#memory
   */
  readonly memory?: string;

  /**
   * @schema EcsTask#overrides
   */
  readonly overrides?: EcsTaskOverride;

  /**
   * @schema EcsTask#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EcsTask#pullStartedAt
   */
  readonly pullStartedAt?: string;

  /**
   * @schema EcsTask#pullStoppedAt
   */
  readonly pullStoppedAt?: string;

  /**
   * @schema EcsTask#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema EcsTask#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema EcsTask#stopCode
   */
  readonly stopCode?: string;

  /**
   * @schema EcsTask#stoppedAt
   */
  readonly stoppedAt?: string;

  /**
   * @schema EcsTask#stoppedReason
   */
  readonly stoppedReason?: string;

  /**
   * @schema EcsTask#stoppingAt
   */
  readonly stoppingAt?: string;

  /**
   * @schema EcsTask#tags
   */
  readonly tags?: EcsTag[];

  /**
   * @schema EcsTask#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema EcsTask#taskDefinitionArn
   */
  readonly taskDefinitionArn?: string;

  /**
   * @schema EcsTask#version
   */
  readonly version?: number;

  /**
   * @schema EcsTask#ephemeralStorage
   */
  readonly ephemeralStorage?: EcsEphemeralStorage;

}

/**
 * Converts an object of type 'EcsTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsTask(obj: EcsTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachments': obj.attachments?.map(y => toJson_EcsAttachment(y)),
    'attributes': obj.attributes?.map(y => toJson_EcsAttribute(y)),
    'availabilityZone': obj.availabilityZone,
    'capacityProviderName': obj.capacityProviderName,
    'clusterArn': obj.clusterArn,
    'connectivity': obj.connectivity,
    'connectivityAt': obj.connectivityAt,
    'containerInstanceArn': obj.containerInstanceArn,
    'containers': obj.containers?.map(y => toJson_EcsContainer(y)),
    'cpu': obj.cpu,
    'createdAt': obj.createdAt,
    'desiredStatus': obj.desiredStatus,
    'enableExecuteCommand': obj.enableExecuteCommand,
    'executionStoppedAt': obj.executionStoppedAt,
    'group': obj.group,
    'healthStatus': obj.healthStatus,
    'inferenceAccelerators': obj.inferenceAccelerators?.map(y => toJson_EcsInferenceAccelerator(y)),
    'lastStatus': obj.lastStatus,
    'launchType': obj.launchType,
    'memory': obj.memory,
    'overrides': toJson_EcsTaskOverride(obj.overrides),
    'platformVersion': obj.platformVersion,
    'pullStartedAt': obj.pullStartedAt,
    'pullStoppedAt': obj.pullStoppedAt,
    'startedAt': obj.startedAt,
    'startedBy': obj.startedBy,
    'stopCode': obj.stopCode,
    'stoppedAt': obj.stoppedAt,
    'stoppedReason': obj.stoppedReason,
    'stoppingAt': obj.stoppingAt,
    'tags': obj.tags?.map(y => toJson_EcsTag(y)),
    'taskArn': obj.taskArn,
    'taskDefinitionArn': obj.taskDefinitionArn,
    'version': obj.version,
    'ephemeralStorage': toJson_EcsEphemeralStorage(obj.ephemeralStorage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSession
 */
export interface EcsSession {
  /**
   * @schema EcsSession#sessionId
   */
  readonly sessionId?: string;

  /**
   * @schema EcsSession#streamUrl
   */
  readonly streamUrl?: string;

  /**
   * @schema EcsSession#tokenValue
   */
  readonly tokenValue?: string;

}

/**
 * Converts an object of type 'EcsSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSession(obj: EcsSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sessionId': obj.sessionId,
    'streamUrl': obj.streamUrl,
    'tokenValue': obj.tokenValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsResource
 */
export interface EcsResource {
  /**
   * @schema EcsResource#name
   */
  readonly name?: string;

  /**
   * @schema EcsResource#type
   */
  readonly type?: string;

  /**
   * @schema EcsResource#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema EcsResource#longValue
   */
  readonly longValue?: number;

  /**
   * @schema EcsResource#integerValue
   */
  readonly integerValue?: number;

  /**
   * @schema EcsResource#stringSetValue
   */
  readonly stringSetValue?: string[];

}

/**
 * Converts an object of type 'EcsResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsResource(obj: EcsResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
    'doubleValue': obj.doubleValue,
    'longValue': obj.longValue,
    'integerValue': obj.integerValue,
    'stringSetValue': obj.stringSetValue?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsVersionInfo
 */
export interface EcsVersionInfo {
  /**
   * @schema EcsVersionInfo#agentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema EcsVersionInfo#agentHash
   */
  readonly agentHash?: string;

  /**
   * @schema EcsVersionInfo#dockerVersion
   */
  readonly dockerVersion?: string;

}

/**
 * Converts an object of type 'EcsVersionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsVersionInfo(obj: EcsVersionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentVersion': obj.agentVersion,
    'agentHash': obj.agentHash,
    'dockerVersion': obj.dockerVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPlatformDevice
 */
export interface EcsPlatformDevice {
  /**
   * @schema EcsPlatformDevice#id
   */
  readonly id: string;

  /**
   * @schema EcsPlatformDevice#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'EcsPlatformDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPlatformDevice(obj: EcsPlatformDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsContainerDefinition
 */
export interface EcsContainerDefinition {
  /**
   * @schema EcsContainerDefinition#name
   */
  readonly name?: string;

  /**
   * @schema EcsContainerDefinition#image
   */
  readonly image?: string;

  /**
   * @schema EcsContainerDefinition#repositoryCredentials
   */
  readonly repositoryCredentials?: EcsRepositoryCredentials;

  /**
   * @schema EcsContainerDefinition#cpu
   */
  readonly cpu?: number;

  /**
   * @schema EcsContainerDefinition#memory
   */
  readonly memory?: number;

  /**
   * @schema EcsContainerDefinition#memoryReservation
   */
  readonly memoryReservation?: number;

  /**
   * @schema EcsContainerDefinition#links
   */
  readonly links?: string[];

  /**
   * @schema EcsContainerDefinition#portMappings
   */
  readonly portMappings?: EcsPortMapping[];

  /**
   * @schema EcsContainerDefinition#essential
   */
  readonly essential?: boolean;

  /**
   * @schema EcsContainerDefinition#entryPoint
   */
  readonly entryPoint?: string[];

  /**
   * @schema EcsContainerDefinition#command
   */
  readonly command?: string[];

  /**
   * @schema EcsContainerDefinition#environment
   */
  readonly environment?: EcsKeyValuePair[];

  /**
   * @schema EcsContainerDefinition#environmentFiles
   */
  readonly environmentFiles?: EcsEnvironmentFile[];

  /**
   * @schema EcsContainerDefinition#mountPoints
   */
  readonly mountPoints?: EcsMountPoint[];

  /**
   * @schema EcsContainerDefinition#volumesFrom
   */
  readonly volumesFrom?: EcsVolumeFrom[];

  /**
   * @schema EcsContainerDefinition#linuxParameters
   */
  readonly linuxParameters?: EcsLinuxParameters;

  /**
   * @schema EcsContainerDefinition#secrets
   */
  readonly secrets?: EcsSecret[];

  /**
   * @schema EcsContainerDefinition#dependsOn
   */
  readonly dependsOn?: EcsContainerDependency[];

  /**
   * @schema EcsContainerDefinition#startTimeout
   */
  readonly startTimeout?: number;

  /**
   * @schema EcsContainerDefinition#stopTimeout
   */
  readonly stopTimeout?: number;

  /**
   * @schema EcsContainerDefinition#hostname
   */
  readonly hostname?: string;

  /**
   * @schema EcsContainerDefinition#user
   */
  readonly user?: string;

  /**
   * @schema EcsContainerDefinition#workingDirectory
   */
  readonly workingDirectory?: string;

  /**
   * @schema EcsContainerDefinition#disableNetworking
   */
  readonly disableNetworking?: boolean;

  /**
   * @schema EcsContainerDefinition#privileged
   */
  readonly privileged?: boolean;

  /**
   * @schema EcsContainerDefinition#readonlyRootFilesystem
   */
  readonly readonlyRootFilesystem?: boolean;

  /**
   * @schema EcsContainerDefinition#dnsServers
   */
  readonly dnsServers?: string[];

  /**
   * @schema EcsContainerDefinition#dnsSearchDomains
   */
  readonly dnsSearchDomains?: string[];

  /**
   * @schema EcsContainerDefinition#extraHosts
   */
  readonly extraHosts?: EcsHostEntry[];

  /**
   * @schema EcsContainerDefinition#dockerSecurityOptions
   */
  readonly dockerSecurityOptions?: string[];

  /**
   * @schema EcsContainerDefinition#interactive
   */
  readonly interactive?: boolean;

  /**
   * @schema EcsContainerDefinition#pseudoTerminal
   */
  readonly pseudoTerminal?: boolean;

  /**
   * @schema EcsContainerDefinition#dockerLabels
   */
  readonly dockerLabels?: { [key: string]: string };

  /**
   * @schema EcsContainerDefinition#ulimits
   */
  readonly ulimits?: EcsUlimit[];

  /**
   * @schema EcsContainerDefinition#logConfiguration
   */
  readonly logConfiguration?: EcsLogConfiguration;

  /**
   * @schema EcsContainerDefinition#healthCheck
   */
  readonly healthCheck?: EcsHealthCheck;

  /**
   * @schema EcsContainerDefinition#systemControls
   */
  readonly systemControls?: EcsSystemControl[];

  /**
   * @schema EcsContainerDefinition#resourceRequirements
   */
  readonly resourceRequirements?: EcsResourceRequirement[];

  /**
   * @schema EcsContainerDefinition#firelensConfiguration
   */
  readonly firelensConfiguration?: EcsFirelensConfiguration;

}

/**
 * Converts an object of type 'EcsContainerDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsContainerDefinition(obj: EcsContainerDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'image': obj.image,
    'repositoryCredentials': toJson_EcsRepositoryCredentials(obj.repositoryCredentials),
    'cpu': obj.cpu,
    'memory': obj.memory,
    'memoryReservation': obj.memoryReservation,
    'links': obj.links?.map(y => y),
    'portMappings': obj.portMappings?.map(y => toJson_EcsPortMapping(y)),
    'essential': obj.essential,
    'entryPoint': obj.entryPoint?.map(y => y),
    'command': obj.command?.map(y => y),
    'environment': obj.environment?.map(y => toJson_EcsKeyValuePair(y)),
    'environmentFiles': obj.environmentFiles?.map(y => toJson_EcsEnvironmentFile(y)),
    'mountPoints': obj.mountPoints?.map(y => toJson_EcsMountPoint(y)),
    'volumesFrom': obj.volumesFrom?.map(y => toJson_EcsVolumeFrom(y)),
    'linuxParameters': toJson_EcsLinuxParameters(obj.linuxParameters),
    'secrets': obj.secrets?.map(y => toJson_EcsSecret(y)),
    'dependsOn': obj.dependsOn?.map(y => toJson_EcsContainerDependency(y)),
    'startTimeout': obj.startTimeout,
    'stopTimeout': obj.stopTimeout,
    'hostname': obj.hostname,
    'user': obj.user,
    'workingDirectory': obj.workingDirectory,
    'disableNetworking': obj.disableNetworking,
    'privileged': obj.privileged,
    'readonlyRootFilesystem': obj.readonlyRootFilesystem,
    'dnsServers': obj.dnsServers?.map(y => y),
    'dnsSearchDomains': obj.dnsSearchDomains?.map(y => y),
    'extraHosts': obj.extraHosts?.map(y => toJson_EcsHostEntry(y)),
    'dockerSecurityOptions': obj.dockerSecurityOptions?.map(y => y),
    'interactive': obj.interactive,
    'pseudoTerminal': obj.pseudoTerminal,
    'dockerLabels': ((obj.dockerLabels) === undefined) ? undefined : (Object.entries(obj.dockerLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ulimits': obj.ulimits?.map(y => toJson_EcsUlimit(y)),
    'logConfiguration': toJson_EcsLogConfiguration(obj.logConfiguration),
    'healthCheck': toJson_EcsHealthCheck(obj.healthCheck),
    'systemControls': obj.systemControls?.map(y => toJson_EcsSystemControl(y)),
    'resourceRequirements': obj.resourceRequirements?.map(y => toJson_EcsResourceRequirement(y)),
    'firelensConfiguration': toJson_EcsFirelensConfiguration(obj.firelensConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsVolume
 */
export interface EcsVolume {
  /**
   * @schema EcsVolume#name
   */
  readonly name?: string;

  /**
   * @schema EcsVolume#host
   */
  readonly host?: EcsHostVolumeProperties;

  /**
   * @schema EcsVolume#dockerVolumeConfiguration
   */
  readonly dockerVolumeConfiguration?: EcsDockerVolumeConfiguration;

  /**
   * @schema EcsVolume#efsVolumeConfiguration
   */
  readonly efsVolumeConfiguration?: EcsefsVolumeConfiguration;

  /**
   * @schema EcsVolume#fsxWindowsFileServerVolumeConfiguration
   */
  readonly fsxWindowsFileServerVolumeConfiguration?: EcsfSxWindowsFileServerVolumeConfiguration;

}

/**
 * Converts an object of type 'EcsVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsVolume(obj: EcsVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'host': toJson_EcsHostVolumeProperties(obj.host),
    'dockerVolumeConfiguration': toJson_EcsDockerVolumeConfiguration(obj.dockerVolumeConfiguration),
    'efsVolumeConfiguration': toJson_EcsefsVolumeConfiguration(obj.efsVolumeConfiguration),
    'fsxWindowsFileServerVolumeConfiguration': toJson_EcsfSxWindowsFileServerVolumeConfiguration(obj.fsxWindowsFileServerVolumeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsTaskDefinitionPlacementConstraint
 */
export interface EcsTaskDefinitionPlacementConstraint {
  /**
   * @schema EcsTaskDefinitionPlacementConstraint#type
   */
  readonly type?: string;

  /**
   * @schema EcsTaskDefinitionPlacementConstraint#expression
   */
  readonly expression?: string;

}

/**
 * Converts an object of type 'EcsTaskDefinitionPlacementConstraint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsTaskDefinitionPlacementConstraint(obj: EcsTaskDefinitionPlacementConstraint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'expression': obj.expression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsProxyConfiguration
 */
export interface EcsProxyConfiguration {
  /**
   * @schema EcsProxyConfiguration#type
   */
  readonly type?: string;

  /**
   * @schema EcsProxyConfiguration#containerName
   */
  readonly containerName: string;

  /**
   * @schema EcsProxyConfiguration#properties
   */
  readonly properties?: EcsKeyValuePair[];

}

/**
 * Converts an object of type 'EcsProxyConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsProxyConfiguration(obj: EcsProxyConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'containerName': obj.containerName,
    'properties': obj.properties?.map(y => toJson_EcsKeyValuePair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsInferenceAccelerator
 */
export interface EcsInferenceAccelerator {
  /**
   * @schema EcsInferenceAccelerator#deviceName
   */
  readonly deviceName: string;

  /**
   * @schema EcsInferenceAccelerator#deviceType
   */
  readonly deviceType: string;

}

/**
 * Converts an object of type 'EcsInferenceAccelerator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsInferenceAccelerator(obj: EcsInferenceAccelerator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceName': obj.deviceName,
    'deviceType': obj.deviceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsEphemeralStorage
 */
export interface EcsEphemeralStorage {
  /**
   * @schema EcsEphemeralStorage#sizeInGiB
   */
  readonly sizeInGiB: number;

}

/**
 * Converts an object of type 'EcsEphemeralStorage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsEphemeralStorage(obj: EcsEphemeralStorage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sizeInGiB': obj.sizeInGiB,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsTaskOverride
 */
export interface EcsTaskOverride {
  /**
   * @schema EcsTaskOverride#containerOverrides
   */
  readonly containerOverrides?: EcsContainerOverride[];

  /**
   * @schema EcsTaskOverride#cpu
   */
  readonly cpu?: string;

  /**
   * @schema EcsTaskOverride#inferenceAcceleratorOverrides
   */
  readonly inferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[];

  /**
   * @schema EcsTaskOverride#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema EcsTaskOverride#memory
   */
  readonly memory?: string;

  /**
   * @schema EcsTaskOverride#taskRoleArn
   */
  readonly taskRoleArn?: string;

  /**
   * @schema EcsTaskOverride#ephemeralStorage
   */
  readonly ephemeralStorage?: EcsEphemeralStorage;

}

/**
 * Converts an object of type 'EcsTaskOverride' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsTaskOverride(obj: EcsTaskOverride | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerOverrides': obj.containerOverrides?.map(y => toJson_EcsContainerOverride(y)),
    'cpu': obj.cpu,
    'inferenceAcceleratorOverrides': obj.inferenceAcceleratorOverrides?.map(y => toJson_EcsInferenceAcceleratorOverride(y)),
    'executionRoleArn': obj.executionRoleArn,
    'memory': obj.memory,
    'taskRoleArn': obj.taskRoleArn,
    'ephemeralStorage': toJson_EcsEphemeralStorage(obj.ephemeralStorage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsAttachmentStateChange
 */
export interface EcsAttachmentStateChange {
  /**
   * @schema EcsAttachmentStateChange#attachmentArn
   */
  readonly attachmentArn: string;

  /**
   * @schema EcsAttachmentStateChange#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'EcsAttachmentStateChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsAttachmentStateChange(obj: EcsAttachmentStateChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachmentArn': obj.attachmentArn,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsNetworkBinding
 */
export interface EcsNetworkBinding {
  /**
   * @schema EcsNetworkBinding#bindIP
   */
  readonly bindIp?: string;

  /**
   * @schema EcsNetworkBinding#containerPort
   */
  readonly containerPort?: number;

  /**
   * @schema EcsNetworkBinding#hostPort
   */
  readonly hostPort?: number;

  /**
   * @schema EcsNetworkBinding#protocol
   */
  readonly protocol?: string;

}

/**
 * Converts an object of type 'EcsNetworkBinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsNetworkBinding(obj: EcsNetworkBinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bindIP': obj.bindIp,
    'containerPort': obj.containerPort,
    'hostPort': obj.hostPort,
    'protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsContainerStateChange
 */
export interface EcsContainerStateChange {
  /**
   * @schema EcsContainerStateChange#containerName
   */
  readonly containerName?: string;

  /**
   * @schema EcsContainerStateChange#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema EcsContainerStateChange#runtimeId
   */
  readonly runtimeId?: string;

  /**
   * @schema EcsContainerStateChange#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema EcsContainerStateChange#networkBindings
   */
  readonly networkBindings?: EcsNetworkBinding[];

  /**
   * @schema EcsContainerStateChange#reason
   */
  readonly reason?: string;

  /**
   * @schema EcsContainerStateChange#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'EcsContainerStateChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsContainerStateChange(obj: EcsContainerStateChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerName': obj.containerName,
    'imageDigest': obj.imageDigest,
    'runtimeId': obj.runtimeId,
    'exitCode': obj.exitCode,
    'networkBindings': obj.networkBindings?.map(y => toJson_EcsNetworkBinding(y)),
    'reason': obj.reason,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsManagedAgentStateChange
 */
export interface EcsManagedAgentStateChange {
  /**
   * @schema EcsManagedAgentStateChange#containerName
   */
  readonly containerName: string;

  /**
   * @schema EcsManagedAgentStateChange#managedAgentName
   */
  readonly managedAgentName: string;

  /**
   * @schema EcsManagedAgentStateChange#status
   */
  readonly status: string;

  /**
   * @schema EcsManagedAgentStateChange#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'EcsManagedAgentStateChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsManagedAgentStateChange(obj: EcsManagedAgentStateChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerName': obj.containerName,
    'managedAgentName': obj.managedAgentName,
    'status': obj.status,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsAutoScalingGroupProviderUpdate
 */
export interface EcsAutoScalingGroupProviderUpdate {
  /**
   * @schema EcsAutoScalingGroupProviderUpdate#managedScaling
   */
  readonly managedScaling?: EcsManagedScaling;

  /**
   * @schema EcsAutoScalingGroupProviderUpdate#managedTerminationProtection
   */
  readonly managedTerminationProtection?: string;

}

/**
 * Converts an object of type 'EcsAutoScalingGroupProviderUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsAutoScalingGroupProviderUpdate(obj: EcsAutoScalingGroupProviderUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'managedScaling': toJson_EcsManagedScaling(obj.managedScaling),
    'managedTerminationProtection': obj.managedTerminationProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsManagedScaling
 */
export interface EcsManagedScaling {
  /**
   * @schema EcsManagedScaling#status
   */
  readonly status?: string;

  /**
   * @schema EcsManagedScaling#targetCapacity
   */
  readonly targetCapacity?: number;

  /**
   * @schema EcsManagedScaling#minimumScalingStepSize
   */
  readonly minimumScalingStepSize?: number;

  /**
   * @schema EcsManagedScaling#maximumScalingStepSize
   */
  readonly maximumScalingStepSize?: number;

  /**
   * @schema EcsManagedScaling#instanceWarmupPeriod
   */
  readonly instanceWarmupPeriod?: number;

}

/**
 * Converts an object of type 'EcsManagedScaling' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsManagedScaling(obj: EcsManagedScaling | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'targetCapacity': obj.targetCapacity,
    'minimumScalingStepSize': obj.minimumScalingStepSize,
    'maximumScalingStepSize': obj.maximumScalingStepSize,
    'instanceWarmupPeriod': obj.instanceWarmupPeriod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsExecuteCommandConfiguration
 */
export interface EcsExecuteCommandConfiguration {
  /**
   * @schema EcsExecuteCommandConfiguration#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema EcsExecuteCommandConfiguration#logging
   */
  readonly logging?: string;

  /**
   * @schema EcsExecuteCommandConfiguration#logConfiguration
   */
  readonly logConfiguration?: EcsExecuteCommandLogConfiguration;

}

/**
 * Converts an object of type 'EcsExecuteCommandConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsExecuteCommandConfiguration(obj: EcsExecuteCommandConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsKeyId': obj.kmsKeyId,
    'logging': obj.logging,
    'logConfiguration': toJson_EcsExecuteCommandLogConfiguration(obj.logConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsKeyValuePair
 */
export interface EcsKeyValuePair {
  /**
   * @schema EcsKeyValuePair#name
   */
  readonly name?: string;

  /**
   * @schema EcsKeyValuePair#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EcsKeyValuePair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsKeyValuePair(obj: EcsKeyValuePair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsAttachment
 */
export interface EcsAttachment {
  /**
   * @schema EcsAttachment#id
   */
  readonly id?: string;

  /**
   * @schema EcsAttachment#type
   */
  readonly type?: string;

  /**
   * @schema EcsAttachment#status
   */
  readonly status?: string;

  /**
   * @schema EcsAttachment#details
   */
  readonly details?: EcsKeyValuePair[];

}

/**
 * Converts an object of type 'EcsAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsAttachment(obj: EcsAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'type': obj.type,
    'status': obj.status,
    'details': obj.details?.map(y => toJson_EcsKeyValuePair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeploymentCircuitBreaker
 */
export interface EcsDeploymentCircuitBreaker {
  /**
   * @schema EcsDeploymentCircuitBreaker#enable
   */
  readonly enable: boolean;

  /**
   * @schema EcsDeploymentCircuitBreaker#rollback
   */
  readonly rollback: boolean;

}

/**
 * Converts an object of type 'EcsDeploymentCircuitBreaker' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeploymentCircuitBreaker(obj: EcsDeploymentCircuitBreaker | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enable': obj.enable,
    'rollback': obj.rollback,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsAwsVpcConfiguration
 */
export interface EcsAwsVpcConfiguration {
  /**
   * @schema EcsAwsVpcConfiguration#subnets
   */
  readonly subnets: string[];

  /**
   * @schema EcsAwsVpcConfiguration#securityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema EcsAwsVpcConfiguration#assignPublicIp
   */
  readonly assignPublicIp?: string;

}

/**
 * Converts an object of type 'EcsAwsVpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsAwsVpcConfiguration(obj: EcsAwsVpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subnets': obj.subnets?.map(y => y),
    'securityGroups': obj.securityGroups?.map(y => y),
    'assignPublicIp': obj.assignPublicIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDeployment
 */
export interface EcsDeployment {
  /**
   * @schema EcsDeployment#id
   */
  readonly id?: string;

  /**
   * @schema EcsDeployment#status
   */
  readonly status?: string;

  /**
   * @schema EcsDeployment#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema EcsDeployment#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema EcsDeployment#pendingCount
   */
  readonly pendingCount?: number;

  /**
   * @schema EcsDeployment#runningCount
   */
  readonly runningCount?: number;

  /**
   * @schema EcsDeployment#failedTasks
   */
  readonly failedTasks?: number;

  /**
   * @schema EcsDeployment#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EcsDeployment#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema EcsDeployment#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

  /**
   * @schema EcsDeployment#launchType
   */
  readonly launchType?: string;

  /**
   * @schema EcsDeployment#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EcsDeployment#networkConfiguration
   */
  readonly networkConfiguration?: EcsNetworkConfiguration;

  /**
   * @schema EcsDeployment#rolloutState
   */
  readonly rolloutState?: string;

  /**
   * @schema EcsDeployment#rolloutStateReason
   */
  readonly rolloutStateReason?: string;

}

/**
 * Converts an object of type 'EcsDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDeployment(obj: EcsDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'status': obj.status,
    'taskDefinition': obj.taskDefinition,
    'desiredCount': obj.desiredCount,
    'pendingCount': obj.pendingCount,
    'runningCount': obj.runningCount,
    'failedTasks': obj.failedTasks,
    'createdAt': obj.createdAt,
    'updatedAt': obj.updatedAt,
    'capacityProviderStrategy': obj.capacityProviderStrategy?.map(y => toJson_EcsCapacityProviderStrategyItem(y)),
    'launchType': obj.launchType,
    'platformVersion': obj.platformVersion,
    'networkConfiguration': toJson_EcsNetworkConfiguration(obj.networkConfiguration),
    'rolloutState': obj.rolloutState,
    'rolloutStateReason': obj.rolloutStateReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsServiceEvent
 */
export interface EcsServiceEvent {
  /**
   * @schema EcsServiceEvent#id
   */
  readonly id?: string;

  /**
   * @schema EcsServiceEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EcsServiceEvent#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'EcsServiceEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsServiceEvent(obj: EcsServiceEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'createdAt': obj.createdAt,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsContainer
 */
export interface EcsContainer {
  /**
   * @schema EcsContainer#containerArn
   */
  readonly containerArn?: string;

  /**
   * @schema EcsContainer#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema EcsContainer#name
   */
  readonly name?: string;

  /**
   * @schema EcsContainer#image
   */
  readonly image?: string;

  /**
   * @schema EcsContainer#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema EcsContainer#runtimeId
   */
  readonly runtimeId?: string;

  /**
   * @schema EcsContainer#lastStatus
   */
  readonly lastStatus?: string;

  /**
   * @schema EcsContainer#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema EcsContainer#reason
   */
  readonly reason?: string;

  /**
   * @schema EcsContainer#networkBindings
   */
  readonly networkBindings?: EcsNetworkBinding[];

  /**
   * @schema EcsContainer#networkInterfaces
   */
  readonly networkInterfaces?: EcsNetworkInterface[];

  /**
   * @schema EcsContainer#healthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema EcsContainer#managedAgents
   */
  readonly managedAgents?: EcsManagedAgent[];

  /**
   * @schema EcsContainer#cpu
   */
  readonly cpu?: string;

  /**
   * @schema EcsContainer#memory
   */
  readonly memory?: string;

  /**
   * @schema EcsContainer#memoryReservation
   */
  readonly memoryReservation?: string;

  /**
   * @schema EcsContainer#gpuIds
   */
  readonly gpuIds?: string[];

}

/**
 * Converts an object of type 'EcsContainer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsContainer(obj: EcsContainer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerArn': obj.containerArn,
    'taskArn': obj.taskArn,
    'name': obj.name,
    'image': obj.image,
    'imageDigest': obj.imageDigest,
    'runtimeId': obj.runtimeId,
    'lastStatus': obj.lastStatus,
    'exitCode': obj.exitCode,
    'reason': obj.reason,
    'networkBindings': obj.networkBindings?.map(y => toJson_EcsNetworkBinding(y)),
    'networkInterfaces': obj.networkInterfaces?.map(y => toJson_EcsNetworkInterface(y)),
    'healthStatus': obj.healthStatus,
    'managedAgents': obj.managedAgents?.map(y => toJson_EcsManagedAgent(y)),
    'cpu': obj.cpu,
    'memory': obj.memory,
    'memoryReservation': obj.memoryReservation,
    'gpuIds': obj.gpuIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsRepositoryCredentials
 */
export interface EcsRepositoryCredentials {
  /**
   * @schema EcsRepositoryCredentials#credentialsParameter
   */
  readonly credentialsParameter: string;

}

/**
 * Converts an object of type 'EcsRepositoryCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsRepositoryCredentials(obj: EcsRepositoryCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'credentialsParameter': obj.credentialsParameter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsPortMapping
 */
export interface EcsPortMapping {
  /**
   * @schema EcsPortMapping#containerPort
   */
  readonly containerPort?: number;

  /**
   * @schema EcsPortMapping#hostPort
   */
  readonly hostPort?: number;

  /**
   * @schema EcsPortMapping#protocol
   */
  readonly protocol?: string;

}

/**
 * Converts an object of type 'EcsPortMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsPortMapping(obj: EcsPortMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerPort': obj.containerPort,
    'hostPort': obj.hostPort,
    'protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsEnvironmentFile
 */
export interface EcsEnvironmentFile {
  /**
   * @schema EcsEnvironmentFile#value
   */
  readonly value: string;

  /**
   * @schema EcsEnvironmentFile#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'EcsEnvironmentFile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsEnvironmentFile(obj: EcsEnvironmentFile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsMountPoint
 */
export interface EcsMountPoint {
  /**
   * @schema EcsMountPoint#sourceVolume
   */
  readonly sourceVolume?: string;

  /**
   * @schema EcsMountPoint#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema EcsMountPoint#readOnly
   */
  readonly readOnly?: boolean;

}

/**
 * Converts an object of type 'EcsMountPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsMountPoint(obj: EcsMountPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceVolume': obj.sourceVolume,
    'containerPath': obj.containerPath,
    'readOnly': obj.readOnly,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsVolumeFrom
 */
export interface EcsVolumeFrom {
  /**
   * @schema EcsVolumeFrom#sourceContainer
   */
  readonly sourceContainer?: string;

  /**
   * @schema EcsVolumeFrom#readOnly
   */
  readonly readOnly?: boolean;

}

/**
 * Converts an object of type 'EcsVolumeFrom' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsVolumeFrom(obj: EcsVolumeFrom | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceContainer': obj.sourceContainer,
    'readOnly': obj.readOnly,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsLinuxParameters
 */
export interface EcsLinuxParameters {
  /**
   * @schema EcsLinuxParameters#capabilities
   */
  readonly capabilities?: EcsKernelCapabilities;

  /**
   * @schema EcsLinuxParameters#devices
   */
  readonly devices?: EcsDevice[];

  /**
   * @schema EcsLinuxParameters#initProcessEnabled
   */
  readonly initProcessEnabled?: boolean;

  /**
   * @schema EcsLinuxParameters#sharedMemorySize
   */
  readonly sharedMemorySize?: number;

  /**
   * @schema EcsLinuxParameters#tmpfs
   */
  readonly tmpfs?: EcsTmpfs[];

  /**
   * @schema EcsLinuxParameters#maxSwap
   */
  readonly maxSwap?: number;

  /**
   * @schema EcsLinuxParameters#swappiness
   */
  readonly swappiness?: number;

}

/**
 * Converts an object of type 'EcsLinuxParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsLinuxParameters(obj: EcsLinuxParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capabilities': toJson_EcsKernelCapabilities(obj.capabilities),
    'devices': obj.devices?.map(y => toJson_EcsDevice(y)),
    'initProcessEnabled': obj.initProcessEnabled,
    'sharedMemorySize': obj.sharedMemorySize,
    'tmpfs': obj.tmpfs?.map(y => toJson_EcsTmpfs(y)),
    'maxSwap': obj.maxSwap,
    'swappiness': obj.swappiness,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSecret
 */
export interface EcsSecret {
  /**
   * @schema EcsSecret#name
   */
  readonly name: string;

  /**
   * @schema EcsSecret#valueFrom
   */
  readonly valueFrom: string;

}

/**
 * Converts an object of type 'EcsSecret' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSecret(obj: EcsSecret | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'valueFrom': obj.valueFrom,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsContainerDependency
 */
export interface EcsContainerDependency {
  /**
   * @schema EcsContainerDependency#containerName
   */
  readonly containerName: string;

  /**
   * @schema EcsContainerDependency#condition
   */
  readonly condition: string;

}

/**
 * Converts an object of type 'EcsContainerDependency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsContainerDependency(obj: EcsContainerDependency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerName': obj.containerName,
    'condition': obj.condition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsHostEntry
 */
export interface EcsHostEntry {
  /**
   * @schema EcsHostEntry#hostname
   */
  readonly hostname: string;

  /**
   * @schema EcsHostEntry#ipAddress
   */
  readonly ipAddress: string;

}

/**
 * Converts an object of type 'EcsHostEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsHostEntry(obj: EcsHostEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostname': obj.hostname,
    'ipAddress': obj.ipAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsUlimit
 */
export interface EcsUlimit {
  /**
   * @schema EcsUlimit#name
   */
  readonly name: string;

  /**
   * @schema EcsUlimit#softLimit
   */
  readonly softLimit: number;

  /**
   * @schema EcsUlimit#hardLimit
   */
  readonly hardLimit: number;

}

/**
 * Converts an object of type 'EcsUlimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsUlimit(obj: EcsUlimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'softLimit': obj.softLimit,
    'hardLimit': obj.hardLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsLogConfiguration
 */
export interface EcsLogConfiguration {
  /**
   * @schema EcsLogConfiguration#logDriver
   */
  readonly logDriver: string;

  /**
   * @schema EcsLogConfiguration#options
   */
  readonly options?: { [key: string]: string };

  /**
   * @schema EcsLogConfiguration#secretOptions
   */
  readonly secretOptions?: EcsSecret[];

}

/**
 * Converts an object of type 'EcsLogConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsLogConfiguration(obj: EcsLogConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logDriver': obj.logDriver,
    'options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'secretOptions': obj.secretOptions?.map(y => toJson_EcsSecret(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsHealthCheck
 */
export interface EcsHealthCheck {
  /**
   * @schema EcsHealthCheck#command
   */
  readonly command: string[];

  /**
   * @schema EcsHealthCheck#interval
   */
  readonly interval?: number;

  /**
   * @schema EcsHealthCheck#timeout
   */
  readonly timeout?: number;

  /**
   * @schema EcsHealthCheck#retries
   */
  readonly retries?: number;

  /**
   * @schema EcsHealthCheck#startPeriod
   */
  readonly startPeriod?: number;

}

/**
 * Converts an object of type 'EcsHealthCheck' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsHealthCheck(obj: EcsHealthCheck | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'command': obj.command?.map(y => y),
    'interval': obj.interval,
    'timeout': obj.timeout,
    'retries': obj.retries,
    'startPeriod': obj.startPeriod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsSystemControl
 */
export interface EcsSystemControl {
  /**
   * @schema EcsSystemControl#namespace
   */
  readonly namespace?: string;

  /**
   * @schema EcsSystemControl#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EcsSystemControl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsSystemControl(obj: EcsSystemControl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespace': obj.namespace,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsResourceRequirement
 */
export interface EcsResourceRequirement {
  /**
   * @schema EcsResourceRequirement#value
   */
  readonly value: string;

  /**
   * @schema EcsResourceRequirement#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'EcsResourceRequirement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsResourceRequirement(obj: EcsResourceRequirement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsFirelensConfiguration
 */
export interface EcsFirelensConfiguration {
  /**
   * @schema EcsFirelensConfiguration#type
   */
  readonly type: string;

  /**
   * @schema EcsFirelensConfiguration#options
   */
  readonly options?: { [key: string]: string };

}

/**
 * Converts an object of type 'EcsFirelensConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsFirelensConfiguration(obj: EcsFirelensConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsHostVolumeProperties
 */
export interface EcsHostVolumeProperties {
  /**
   * @schema EcsHostVolumeProperties#sourcePath
   */
  readonly sourcePath?: string;

}

/**
 * Converts an object of type 'EcsHostVolumeProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsHostVolumeProperties(obj: EcsHostVolumeProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourcePath': obj.sourcePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDockerVolumeConfiguration
 */
export interface EcsDockerVolumeConfiguration {
  /**
   * @schema EcsDockerVolumeConfiguration#scope
   */
  readonly scope?: string;

  /**
   * @schema EcsDockerVolumeConfiguration#autoprovision
   */
  readonly autoprovision?: boolean;

  /**
   * @schema EcsDockerVolumeConfiguration#driver
   */
  readonly driver?: string;

  /**
   * @schema EcsDockerVolumeConfiguration#driverOpts
   */
  readonly driverOpts?: { [key: string]: string };

  /**
   * @schema EcsDockerVolumeConfiguration#labels
   */
  readonly labels?: { [key: string]: string };

}

/**
 * Converts an object of type 'EcsDockerVolumeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDockerVolumeConfiguration(obj: EcsDockerVolumeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scope': obj.scope,
    'autoprovision': obj.autoprovision,
    'driver': obj.driver,
    'driverOpts': ((obj.driverOpts) === undefined) ? undefined : (Object.entries(obj.driverOpts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsefsVolumeConfiguration
 */
export interface EcsefsVolumeConfiguration {
  /**
   * @schema EcsefsVolumeConfiguration#fileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema EcsefsVolumeConfiguration#rootDirectory
   */
  readonly rootDirectory?: string;

  /**
   * @schema EcsefsVolumeConfiguration#transitEncryption
   */
  readonly transitEncryption?: string;

  /**
   * @schema EcsefsVolumeConfiguration#transitEncryptionPort
   */
  readonly transitEncryptionPort?: number;

  /**
   * @schema EcsefsVolumeConfiguration#authorizationConfig
   */
  readonly authorizationConfig?: EcsefsAuthorizationConfig;

}

/**
 * Converts an object of type 'EcsefsVolumeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsefsVolumeConfiguration(obj: EcsefsVolumeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileSystemId': obj.fileSystemId,
    'rootDirectory': obj.rootDirectory,
    'transitEncryption': obj.transitEncryption,
    'transitEncryptionPort': obj.transitEncryptionPort,
    'authorizationConfig': toJson_EcsefsAuthorizationConfig(obj.authorizationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsfSxWindowsFileServerVolumeConfiguration
 */
export interface EcsfSxWindowsFileServerVolumeConfiguration {
  /**
   * @schema EcsfSxWindowsFileServerVolumeConfiguration#fileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema EcsfSxWindowsFileServerVolumeConfiguration#rootDirectory
   */
  readonly rootDirectory: string;

  /**
   * @schema EcsfSxWindowsFileServerVolumeConfiguration#authorizationConfig
   */
  readonly authorizationConfig: EcsfSxWindowsFileServerAuthorizationConfig;

}

/**
 * Converts an object of type 'EcsfSxWindowsFileServerVolumeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsfSxWindowsFileServerVolumeConfiguration(obj: EcsfSxWindowsFileServerVolumeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileSystemId': obj.fileSystemId,
    'rootDirectory': obj.rootDirectory,
    'authorizationConfig': toJson_EcsfSxWindowsFileServerAuthorizationConfig(obj.authorizationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsContainerOverride
 */
export interface EcsContainerOverride {
  /**
   * @schema EcsContainerOverride#name
   */
  readonly name?: string;

  /**
   * @schema EcsContainerOverride#command
   */
  readonly command?: string[];

  /**
   * @schema EcsContainerOverride#environment
   */
  readonly environment?: EcsKeyValuePair[];

  /**
   * @schema EcsContainerOverride#environmentFiles
   */
  readonly environmentFiles?: EcsEnvironmentFile[];

  /**
   * @schema EcsContainerOverride#cpu
   */
  readonly cpu?: number;

  /**
   * @schema EcsContainerOverride#memory
   */
  readonly memory?: number;

  /**
   * @schema EcsContainerOverride#memoryReservation
   */
  readonly memoryReservation?: number;

  /**
   * @schema EcsContainerOverride#resourceRequirements
   */
  readonly resourceRequirements?: EcsResourceRequirement[];

}

/**
 * Converts an object of type 'EcsContainerOverride' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsContainerOverride(obj: EcsContainerOverride | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'command': obj.command?.map(y => y),
    'environment': obj.environment?.map(y => toJson_EcsKeyValuePair(y)),
    'environmentFiles': obj.environmentFiles?.map(y => toJson_EcsEnvironmentFile(y)),
    'cpu': obj.cpu,
    'memory': obj.memory,
    'memoryReservation': obj.memoryReservation,
    'resourceRequirements': obj.resourceRequirements?.map(y => toJson_EcsResourceRequirement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsInferenceAcceleratorOverride
 */
export interface EcsInferenceAcceleratorOverride {
  /**
   * @schema EcsInferenceAcceleratorOverride#deviceName
   */
  readonly deviceName?: string;

  /**
   * @schema EcsInferenceAcceleratorOverride#deviceType
   */
  readonly deviceType?: string;

}

/**
 * Converts an object of type 'EcsInferenceAcceleratorOverride' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsInferenceAcceleratorOverride(obj: EcsInferenceAcceleratorOverride | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceName': obj.deviceName,
    'deviceType': obj.deviceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsExecuteCommandLogConfiguration
 */
export interface EcsExecuteCommandLogConfiguration {
  /**
   * @schema EcsExecuteCommandLogConfiguration#cloudWatchLogGroupName
   */
  readonly cloudWatchLogGroupName?: string;

  /**
   * @schema EcsExecuteCommandLogConfiguration#cloudWatchEncryptionEnabled
   */
  readonly cloudWatchEncryptionEnabled?: boolean;

  /**
   * @schema EcsExecuteCommandLogConfiguration#s3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema EcsExecuteCommandLogConfiguration#s3EncryptionEnabled
   */
  readonly s3EncryptionEnabled?: boolean;

  /**
   * @schema EcsExecuteCommandLogConfiguration#s3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * Converts an object of type 'EcsExecuteCommandLogConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsExecuteCommandLogConfiguration(obj: EcsExecuteCommandLogConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cloudWatchLogGroupName': obj.cloudWatchLogGroupName,
    'cloudWatchEncryptionEnabled': obj.cloudWatchEncryptionEnabled,
    's3BucketName': obj.s3BucketName,
    's3EncryptionEnabled': obj.s3EncryptionEnabled,
    's3KeyPrefix': obj.s3KeyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsNetworkInterface
 */
export interface EcsNetworkInterface {
  /**
   * @schema EcsNetworkInterface#attachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema EcsNetworkInterface#privateIpv4Address
   */
  readonly privateIpv4Address?: string;

  /**
   * @schema EcsNetworkInterface#ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * Converts an object of type 'EcsNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsNetworkInterface(obj: EcsNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachmentId': obj.attachmentId,
    'privateIpv4Address': obj.privateIpv4Address,
    'ipv6Address': obj.ipv6Address,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsManagedAgent
 */
export interface EcsManagedAgent {
  /**
   * @schema EcsManagedAgent#lastStartedAt
   */
  readonly lastStartedAt?: string;

  /**
   * @schema EcsManagedAgent#name
   */
  readonly name?: string;

  /**
   * @schema EcsManagedAgent#reason
   */
  readonly reason?: string;

  /**
   * @schema EcsManagedAgent#lastStatus
   */
  readonly lastStatus?: string;

}

/**
 * Converts an object of type 'EcsManagedAgent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsManagedAgent(obj: EcsManagedAgent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lastStartedAt': obj.lastStartedAt,
    'name': obj.name,
    'reason': obj.reason,
    'lastStatus': obj.lastStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsKernelCapabilities
 */
export interface EcsKernelCapabilities {
  /**
   * @schema EcsKernelCapabilities#add
   */
  readonly add?: string[];

  /**
   * @schema EcsKernelCapabilities#drop
   */
  readonly drop?: string[];

}

/**
 * Converts an object of type 'EcsKernelCapabilities' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsKernelCapabilities(obj: EcsKernelCapabilities | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'add': obj.add?.map(y => y),
    'drop': obj.drop?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsDevice
 */
export interface EcsDevice {
  /**
   * @schema EcsDevice#hostPath
   */
  readonly hostPath: string;

  /**
   * @schema EcsDevice#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema EcsDevice#permissions
   */
  readonly permissions?: string[];

}

/**
 * Converts an object of type 'EcsDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsDevice(obj: EcsDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostPath': obj.hostPath,
    'containerPath': obj.containerPath,
    'permissions': obj.permissions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsTmpfs
 */
export interface EcsTmpfs {
  /**
   * @schema EcsTmpfs#containerPath
   */
  readonly containerPath: string;

  /**
   * @schema EcsTmpfs#size
   */
  readonly size: number;

  /**
   * @schema EcsTmpfs#mountOptions
   */
  readonly mountOptions?: string[];

}

/**
 * Converts an object of type 'EcsTmpfs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsTmpfs(obj: EcsTmpfs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerPath': obj.containerPath,
    'size': obj.size,
    'mountOptions': obj.mountOptions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsefsAuthorizationConfig
 */
export interface EcsefsAuthorizationConfig {
  /**
   * @schema EcsefsAuthorizationConfig#accessPointId
   */
  readonly accessPointId?: string;

  /**
   * @schema EcsefsAuthorizationConfig#iam
   */
  readonly iam?: string;

}

/**
 * Converts an object of type 'EcsefsAuthorizationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsefsAuthorizationConfig(obj: EcsefsAuthorizationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPointId': obj.accessPointId,
    'iam': obj.iam,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EcsfSxWindowsFileServerAuthorizationConfig
 */
export interface EcsfSxWindowsFileServerAuthorizationConfig {
  /**
   * @schema EcsfSxWindowsFileServerAuthorizationConfig#credentialsParameter
   */
  readonly credentialsParameter: string;

  /**
   * @schema EcsfSxWindowsFileServerAuthorizationConfig#domain
   */
  readonly domain: string;

}

/**
 * Converts an object of type 'EcsfSxWindowsFileServerAuthorizationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EcsfSxWindowsFileServerAuthorizationConfig(obj: EcsfSxWindowsFileServerAuthorizationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'credentialsParameter': obj.credentialsParameter,
    'domain': obj.domain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
