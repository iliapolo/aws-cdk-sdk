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
 * @schema EcsCreateCapacityProviderResponse
 */
export interface EcsCreateCapacityProviderResponse {
  /**
   * @schema EcsCreateCapacityProviderResponse#capacityProvider
   */
  readonly capacityProvider?: EcsCapacityProvider;

}

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
   * @schema EcsCreateClusterRequest#capacityProviders
   */
  readonly capacityProviders?: string[];

  /**
   * @schema EcsCreateClusterRequest#defaultCapacityProviderStrategy
   */
  readonly defaultCapacityProviderStrategy?: EcsCapacityProviderStrategyItem[];

}

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
  readonly enableECSManagedTags?: boolean;

  /**
   * @schema EcsCreateServiceRequest#propagateTags
   */
  readonly propagateTags?: string;

}

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
 * @schema EcsCreateTaskSetResponse
 */
export interface EcsCreateTaskSetResponse {
  /**
   * @schema EcsCreateTaskSetResponse#taskSet
   */
  readonly taskSet?: EcsTaskSet;

}

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
 * @schema EcsDeleteAccountSettingResponse
 */
export interface EcsDeleteAccountSettingResponse {
  /**
   * @schema EcsDeleteAccountSettingResponse#setting
   */
  readonly setting?: EcsSetting;

}

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
 * @schema EcsDeleteAttributesResponse
 */
export interface EcsDeleteAttributesResponse {
  /**
   * @schema EcsDeleteAttributesResponse#attributes
   */
  readonly attributes?: EcsAttribute[];

}

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
 * @schema EcsDeleteCapacityProviderResponse
 */
export interface EcsDeleteCapacityProviderResponse {
  /**
   * @schema EcsDeleteCapacityProviderResponse#capacityProvider
   */
  readonly capacityProvider?: EcsCapacityProvider;

}

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
 * @schema EcsDeleteClusterResponse
 */
export interface EcsDeleteClusterResponse {
  /**
   * @schema EcsDeleteClusterResponse#cluster
   */
  readonly cluster?: EcsCluster;

}

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
 * @schema EcsDeleteServiceResponse
 */
export interface EcsDeleteServiceResponse {
  /**
   * @schema EcsDeleteServiceResponse#service
   */
  readonly service?: EcsService;

}

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
 * @schema EcsDeleteTaskSetResponse
 */
export interface EcsDeleteTaskSetResponse {
  /**
   * @schema EcsDeleteTaskSetResponse#taskSet
   */
  readonly taskSet?: EcsTaskSet;

}

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
 * @schema EcsDeregisterContainerInstanceResponse
 */
export interface EcsDeregisterContainerInstanceResponse {
  /**
   * @schema EcsDeregisterContainerInstanceResponse#containerInstance
   */
  readonly containerInstance?: EcsContainerInstance;

}

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
 * @schema EcsDeregisterTaskDefinitionResponse
 */
export interface EcsDeregisterTaskDefinitionResponse {
  /**
   * @schema EcsDeregisterTaskDefinitionResponse#taskDefinition
   */
  readonly taskDefinition?: EcsTaskDefinition;

}

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
 * @schema EcsListTagsForResourceRequest
 */
export interface EcsListTagsForResourceRequest {
  /**
   * @schema EcsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema EcsPutAccountSettingResponse
 */
export interface EcsPutAccountSettingResponse {
  /**
   * @schema EcsPutAccountSettingResponse#setting
   */
  readonly setting?: EcsSetting;

}

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
 * @schema EcsPutAccountSettingDefaultResponse
 */
export interface EcsPutAccountSettingDefaultResponse {
  /**
   * @schema EcsPutAccountSettingDefaultResponse#setting
   */
  readonly setting?: EcsSetting;

}

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
 * @schema EcsPutAttributesResponse
 */
export interface EcsPutAttributesResponse {
  /**
   * @schema EcsPutAttributesResponse#attributes
   */
  readonly attributes?: EcsAttribute[];

}

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
 * @schema EcsPutClusterCapacityProvidersResponse
 */
export interface EcsPutClusterCapacityProvidersResponse {
  /**
   * @schema EcsPutClusterCapacityProvidersResponse#cluster
   */
  readonly cluster?: EcsCluster;

}

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
 * @schema EcsRegisterContainerInstanceResponse
 */
export interface EcsRegisterContainerInstanceResponse {
  /**
   * @schema EcsRegisterContainerInstanceResponse#containerInstance
   */
  readonly containerInstance?: EcsContainerInstance;

}

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

}

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
  readonly enableECSManagedTags?: boolean;

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
  readonly enableECSManagedTags?: boolean;

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
 * @schema EcsStopTaskResponse
 */
export interface EcsStopTaskResponse {
  /**
   * @schema EcsStopTaskResponse#task
   */
  readonly task?: EcsTask;

}

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
 * @schema EcsSubmitAttachmentStateChangesResponse
 */
export interface EcsSubmitAttachmentStateChangesResponse {
  /**
   * @schema EcsSubmitAttachmentStateChangesResponse#acknowledgment
   */
  readonly acknowledgment?: string;

}

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
 * @schema EcsSubmitContainerStateChangeResponse
 */
export interface EcsSubmitContainerStateChangeResponse {
  /**
   * @schema EcsSubmitContainerStateChangeResponse#acknowledgment
   */
  readonly acknowledgment?: string;

}

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
 * @schema EcsSubmitTaskStateChangeResponse
 */
export interface EcsSubmitTaskStateChangeResponse {
  /**
   * @schema EcsSubmitTaskStateChangeResponse#acknowledgment
   */
  readonly acknowledgment?: string;

}

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
 * @schema EcsTagResourceResponse
 */
export interface EcsTagResourceResponse {
}

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
 * @schema EcsUntagResourceResponse
 */
export interface EcsUntagResourceResponse {
}

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
 * @schema EcsUpdateCapacityProviderResponse
 */
export interface EcsUpdateCapacityProviderResponse {
  /**
   * @schema EcsUpdateCapacityProviderResponse#capacityProvider
   */
  readonly capacityProvider?: EcsCapacityProvider;

}

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
 * @schema EcsUpdateClusterSettingsResponse
 */
export interface EcsUpdateClusterSettingsResponse {
  /**
   * @schema EcsUpdateClusterSettingsResponse#cluster
   */
  readonly cluster?: EcsCluster;

}

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
 * @schema EcsUpdateContainerAgentResponse
 */
export interface EcsUpdateContainerAgentResponse {
  /**
   * @schema EcsUpdateContainerAgentResponse#containerInstance
   */
  readonly containerInstance?: EcsContainerInstance;

}

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

}

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
 * @schema EcsUpdateServicePrimaryTaskSetResponse
 */
export interface EcsUpdateServicePrimaryTaskSetResponse {
  /**
   * @schema EcsUpdateServicePrimaryTaskSetResponse#taskSet
   */
  readonly taskSet?: EcsTaskSet;

}

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
 * @schema EcsUpdateTaskSetResponse
 */
export interface EcsUpdateTaskSetResponse {
  /**
   * @schema EcsUpdateTaskSetResponse#taskSet
   */
  readonly taskSet?: EcsTaskSet;

}

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
 * @schema EcsNetworkConfiguration
 */
export interface EcsNetworkConfiguration {
  /**
   * @schema EcsNetworkConfiguration#awsvpcConfiguration
   */
  readonly awsvpcConfiguration?: EcsAwsVpcConfiguration;

}

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
  readonly enableECSManagedTags?: boolean;

  /**
   * @schema EcsService#propagateTags
   */
  readonly propagateTags?: string;

}

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

}

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

}

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

}

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
 * @schema EcsNetworkBinding
 */
export interface EcsNetworkBinding {
  /**
   * @schema EcsNetworkBinding#bindIP
   */
  readonly bindIP?: string;

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
 * @schema EcsRepositoryCredentials
 */
export interface EcsRepositoryCredentials {
  /**
   * @schema EcsRepositoryCredentials#credentialsParameter
   */
  readonly credentialsParameter: string;

}

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
 * @schema EcsHostVolumeProperties
 */
export interface EcsHostVolumeProperties {
  /**
   * @schema EcsHostVolumeProperties#sourcePath
   */
  readonly sourcePath?: string;

}

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
