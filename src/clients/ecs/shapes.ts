/**
 * @schema CreateCapacityProviderRequest
 */
export interface CreateCapacityProviderRequest {
  /**
   * @schema CreateCapacityProviderRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateCapacityProviderRequest#autoScalingGroupProvider
   */
  readonly autoScalingGroupProvider: AutoScalingGroupProvider;

  /**
   * @schema CreateCapacityProviderRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateCapacityProviderResponse
 */
export interface CreateCapacityProviderResponse {
  /**
   * @schema CreateCapacityProviderResponse#capacityProvider
   */
  readonly capacityProvider?: CapacityProvider;

}

/**
 * @schema CreateClusterRequest
 */
export interface CreateClusterRequest {
  /**
   * @schema CreateClusterRequest#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema CreateClusterRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateClusterRequest#settings
   */
  readonly settings?: ClusterSetting[];

  /**
   * @schema CreateClusterRequest#capacityProviders
   */
  readonly capacityProviders?: string[];

  /**
   * @schema CreateClusterRequest#defaultCapacityProviderStrategy
   */
  readonly defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];

}

/**
 * @schema CreateClusterResponse
 */
export interface CreateClusterResponse {
  /**
   * @schema CreateClusterResponse#cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema CreateServiceRequest
 */
export interface CreateServiceRequest {
  /**
   * @schema CreateServiceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema CreateServiceRequest#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema CreateServiceRequest#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema CreateServiceRequest#loadBalancers
   */
  readonly loadBalancers?: LoadBalancer[];

  /**
   * @schema CreateServiceRequest#serviceRegistries
   */
  readonly serviceRegistries?: ServiceRegistry[];

  /**
   * @schema CreateServiceRequest#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema CreateServiceRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateServiceRequest#launchType
   */
  readonly launchType?: string;

  /**
   * @schema CreateServiceRequest#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @schema CreateServiceRequest#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema CreateServiceRequest#role
   */
  readonly role?: string;

  /**
   * @schema CreateServiceRequest#deploymentConfiguration
   */
  readonly deploymentConfiguration?: DeploymentConfiguration;

  /**
   * @schema CreateServiceRequest#placementConstraints
   */
  readonly placementConstraints?: PlacementConstraint[];

  /**
   * @schema CreateServiceRequest#placementStrategy
   */
  readonly placementStrategy?: PlacementStrategy[];

  /**
   * @schema CreateServiceRequest#networkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema CreateServiceRequest#healthCheckGracePeriodSeconds
   */
  readonly healthCheckGracePeriodSeconds?: number;

  /**
   * @schema CreateServiceRequest#schedulingStrategy
   */
  readonly schedulingStrategy?: string;

  /**
   * @schema CreateServiceRequest#deploymentController
   */
  readonly deploymentController?: DeploymentController;

  /**
   * @schema CreateServiceRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateServiceRequest#enableECSManagedTags
   */
  readonly enableECSManagedTags?: boolean;

  /**
   * @schema CreateServiceRequest#propagateTags
   */
  readonly propagateTags?: string;

}

/**
 * @schema CreateServiceResponse
 */
export interface CreateServiceResponse {
  /**
   * @schema CreateServiceResponse#service
   */
  readonly service?: Service;

}

/**
 * @schema CreateTaskSetRequest
 */
export interface CreateTaskSetRequest {
  /**
   * @schema CreateTaskSetRequest#service
   */
  readonly service: string;

  /**
   * @schema CreateTaskSetRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema CreateTaskSetRequest#externalId
   */
  readonly externalId?: string;

  /**
   * @schema CreateTaskSetRequest#taskDefinition
   */
  readonly taskDefinition: string;

  /**
   * @schema CreateTaskSetRequest#networkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema CreateTaskSetRequest#loadBalancers
   */
  readonly loadBalancers?: LoadBalancer[];

  /**
   * @schema CreateTaskSetRequest#serviceRegistries
   */
  readonly serviceRegistries?: ServiceRegistry[];

  /**
   * @schema CreateTaskSetRequest#launchType
   */
  readonly launchType?: string;

  /**
   * @schema CreateTaskSetRequest#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @schema CreateTaskSetRequest#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema CreateTaskSetRequest#scale
   */
  readonly scale?: Scale;

  /**
   * @schema CreateTaskSetRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateTaskSetRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTaskSetResponse
 */
export interface CreateTaskSetResponse {
  /**
   * @schema CreateTaskSetResponse#taskSet
   */
  readonly taskSet?: TaskSet;

}

/**
 * @schema DeleteAccountSettingRequest
 */
export interface DeleteAccountSettingRequest {
  /**
   * @schema DeleteAccountSettingRequest#name
   */
  readonly name: string;

  /**
   * @schema DeleteAccountSettingRequest#principalArn
   */
  readonly principalArn?: string;

}

/**
 * @schema DeleteAccountSettingResponse
 */
export interface DeleteAccountSettingResponse {
  /**
   * @schema DeleteAccountSettingResponse#setting
   */
  readonly setting?: Setting;

}

/**
 * @schema DeleteAttributesRequest
 */
export interface DeleteAttributesRequest {
  /**
   * @schema DeleteAttributesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema DeleteAttributesRequest#attributes
   */
  readonly attributes: Attribute[];

}

/**
 * @schema DeleteAttributesResponse
 */
export interface DeleteAttributesResponse {
  /**
   * @schema DeleteAttributesResponse#attributes
   */
  readonly attributes?: Attribute[];

}

/**
 * @schema DeleteCapacityProviderRequest
 */
export interface DeleteCapacityProviderRequest {
  /**
   * @schema DeleteCapacityProviderRequest#capacityProvider
   */
  readonly capacityProvider: string;

}

/**
 * @schema DeleteCapacityProviderResponse
 */
export interface DeleteCapacityProviderResponse {
  /**
   * @schema DeleteCapacityProviderResponse#capacityProvider
   */
  readonly capacityProvider?: CapacityProvider;

}

/**
 * @schema DeleteClusterRequest
 */
export interface DeleteClusterRequest {
  /**
   * @schema DeleteClusterRequest#cluster
   */
  readonly cluster: string;

}

/**
 * @schema DeleteClusterResponse
 */
export interface DeleteClusterResponse {
  /**
   * @schema DeleteClusterResponse#cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema DeleteServiceRequest
 */
export interface DeleteServiceRequest {
  /**
   * @schema DeleteServiceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema DeleteServiceRequest#service
   */
  readonly service: string;

  /**
   * @schema DeleteServiceRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema DeleteServiceResponse
 */
export interface DeleteServiceResponse {
  /**
   * @schema DeleteServiceResponse#service
   */
  readonly service?: Service;

}

/**
 * @schema DeleteTaskSetRequest
 */
export interface DeleteTaskSetRequest {
  /**
   * @schema DeleteTaskSetRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema DeleteTaskSetRequest#service
   */
  readonly service: string;

  /**
   * @schema DeleteTaskSetRequest#taskSet
   */
  readonly taskSet: string;

  /**
   * @schema DeleteTaskSetRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema DeleteTaskSetResponse
 */
export interface DeleteTaskSetResponse {
  /**
   * @schema DeleteTaskSetResponse#taskSet
   */
  readonly taskSet?: TaskSet;

}

/**
 * @schema DeregisterContainerInstanceRequest
 */
export interface DeregisterContainerInstanceRequest {
  /**
   * @schema DeregisterContainerInstanceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema DeregisterContainerInstanceRequest#containerInstance
   */
  readonly containerInstance: string;

  /**
   * @schema DeregisterContainerInstanceRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema DeregisterContainerInstanceResponse
 */
export interface DeregisterContainerInstanceResponse {
  /**
   * @schema DeregisterContainerInstanceResponse#containerInstance
   */
  readonly containerInstance?: ContainerInstance;

}

/**
 * @schema DeregisterTaskDefinitionRequest
 */
export interface DeregisterTaskDefinitionRequest {
  /**
   * @schema DeregisterTaskDefinitionRequest#taskDefinition
   */
  readonly taskDefinition: string;

}

/**
 * @schema DeregisterTaskDefinitionResponse
 */
export interface DeregisterTaskDefinitionResponse {
  /**
   * @schema DeregisterTaskDefinitionResponse#taskDefinition
   */
  readonly taskDefinition?: TaskDefinition;

}

/**
 * @schema DescribeCapacityProvidersRequest
 */
export interface DescribeCapacityProvidersRequest {
  /**
   * @schema DescribeCapacityProvidersRequest#capacityProviders
   */
  readonly capacityProviders?: string[];

  /**
   * @schema DescribeCapacityProvidersRequest#include
   */
  readonly include?: string[];

  /**
   * @schema DescribeCapacityProvidersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeCapacityProvidersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeCapacityProvidersResponse
 */
export interface DescribeCapacityProvidersResponse {
  /**
   * @schema DescribeCapacityProvidersResponse#capacityProviders
   */
  readonly capacityProviders?: CapacityProvider[];

  /**
   * @schema DescribeCapacityProvidersResponse#failures
   */
  readonly failures?: Failure[];

  /**
   * @schema DescribeCapacityProvidersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClustersRequest
 */
export interface DescribeClustersRequest {
  /**
   * @schema DescribeClustersRequest#clusters
   */
  readonly clusters?: string[];

  /**
   * @schema DescribeClustersRequest#include
   */
  readonly include?: string[];

}

/**
 * @schema DescribeClustersResponse
 */
export interface DescribeClustersResponse {
  /**
   * @schema DescribeClustersResponse#clusters
   */
  readonly clusters?: Cluster[];

  /**
   * @schema DescribeClustersResponse#failures
   */
  readonly failures?: Failure[];

}

/**
 * @schema DescribeContainerInstancesRequest
 */
export interface DescribeContainerInstancesRequest {
  /**
   * @schema DescribeContainerInstancesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema DescribeContainerInstancesRequest#containerInstances
   */
  readonly containerInstances: string[];

  /**
   * @schema DescribeContainerInstancesRequest#include
   */
  readonly include?: string[];

}

/**
 * @schema DescribeContainerInstancesResponse
 */
export interface DescribeContainerInstancesResponse {
  /**
   * @schema DescribeContainerInstancesResponse#containerInstances
   */
  readonly containerInstances?: ContainerInstance[];

  /**
   * @schema DescribeContainerInstancesResponse#failures
   */
  readonly failures?: Failure[];

}

/**
 * @schema DescribeServicesRequest
 */
export interface DescribeServicesRequest {
  /**
   * @schema DescribeServicesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema DescribeServicesRequest#services
   */
  readonly services: string[];

  /**
   * @schema DescribeServicesRequest#include
   */
  readonly include?: string[];

}

/**
 * @schema DescribeServicesResponse
 */
export interface DescribeServicesResponse {
  /**
   * @schema DescribeServicesResponse#services
   */
  readonly services?: Service[];

  /**
   * @schema DescribeServicesResponse#failures
   */
  readonly failures?: Failure[];

}

/**
 * @schema DescribeTaskDefinitionRequest
 */
export interface DescribeTaskDefinitionRequest {
  /**
   * @schema DescribeTaskDefinitionRequest#taskDefinition
   */
  readonly taskDefinition: string;

  /**
   * @schema DescribeTaskDefinitionRequest#include
   */
  readonly include?: string[];

}

/**
 * @schema DescribeTaskDefinitionResponse
 */
export interface DescribeTaskDefinitionResponse {
  /**
   * @schema DescribeTaskDefinitionResponse#taskDefinition
   */
  readonly taskDefinition?: TaskDefinition;

  /**
   * @schema DescribeTaskDefinitionResponse#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DescribeTaskSetsRequest
 */
export interface DescribeTaskSetsRequest {
  /**
   * @schema DescribeTaskSetsRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema DescribeTaskSetsRequest#service
   */
  readonly service: string;

  /**
   * @schema DescribeTaskSetsRequest#taskSets
   */
  readonly taskSets?: string[];

  /**
   * @schema DescribeTaskSetsRequest#include
   */
  readonly include?: string[];

}

/**
 * @schema DescribeTaskSetsResponse
 */
export interface DescribeTaskSetsResponse {
  /**
   * @schema DescribeTaskSetsResponse#taskSets
   */
  readonly taskSets?: TaskSet[];

  /**
   * @schema DescribeTaskSetsResponse#failures
   */
  readonly failures?: Failure[];

}

/**
 * @schema DescribeTasksRequest
 */
export interface DescribeTasksRequest {
  /**
   * @schema DescribeTasksRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema DescribeTasksRequest#tasks
   */
  readonly tasks: string[];

  /**
   * @schema DescribeTasksRequest#include
   */
  readonly include?: string[];

}

/**
 * @schema DescribeTasksResponse
 */
export interface DescribeTasksResponse {
  /**
   * @schema DescribeTasksResponse#tasks
   */
  readonly tasks?: Task[];

  /**
   * @schema DescribeTasksResponse#failures
   */
  readonly failures?: Failure[];

}

/**
 * @schema DiscoverPollEndpointRequest
 */
export interface DiscoverPollEndpointRequest {
  /**
   * @schema DiscoverPollEndpointRequest#containerInstance
   */
  readonly containerInstance?: string;

  /**
   * @schema DiscoverPollEndpointRequest#cluster
   */
  readonly cluster?: string;

}

/**
 * @schema DiscoverPollEndpointResponse
 */
export interface DiscoverPollEndpointResponse {
  /**
   * @schema DiscoverPollEndpointResponse#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DiscoverPollEndpointResponse#telemetryEndpoint
   */
  readonly telemetryEndpoint?: string;

}

/**
 * @schema ListAccountSettingsRequest
 */
export interface ListAccountSettingsRequest {
  /**
   * @schema ListAccountSettingsRequest#name
   */
  readonly name?: string;

  /**
   * @schema ListAccountSettingsRequest#value
   */
  readonly value?: string;

  /**
   * @schema ListAccountSettingsRequest#principalArn
   */
  readonly principalArn?: string;

  /**
   * @schema ListAccountSettingsRequest#effectiveSettings
   */
  readonly effectiveSettings?: boolean;

  /**
   * @schema ListAccountSettingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccountSettingsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAccountSettingsResponse
 */
export interface ListAccountSettingsResponse {
  /**
   * @schema ListAccountSettingsResponse#settings
   */
  readonly settings?: Setting[];

  /**
   * @schema ListAccountSettingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAttributesRequest
 */
export interface ListAttributesRequest {
  /**
   * @schema ListAttributesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema ListAttributesRequest#targetType
   */
  readonly targetType: string;

  /**
   * @schema ListAttributesRequest#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema ListAttributesRequest#attributeValue
   */
  readonly attributeValue?: string;

  /**
   * @schema ListAttributesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAttributesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAttributesResponse
 */
export interface ListAttributesResponse {
  /**
   * @schema ListAttributesResponse#attributes
   */
  readonly attributes?: Attribute[];

  /**
   * @schema ListAttributesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListClustersRequest
 */
export interface ListClustersRequest {
  /**
   * @schema ListClustersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListClustersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListClustersResponse
 */
export interface ListClustersResponse {
  /**
   * @schema ListClustersResponse#clusterArns
   */
  readonly clusterArns?: string[];

  /**
   * @schema ListClustersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListContainerInstancesRequest
 */
export interface ListContainerInstancesRequest {
  /**
   * @schema ListContainerInstancesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema ListContainerInstancesRequest#filter
   */
  readonly filter?: string;

  /**
   * @schema ListContainerInstancesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListContainerInstancesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListContainerInstancesRequest#status
   */
  readonly status?: string;

}

/**
 * @schema ListContainerInstancesResponse
 */
export interface ListContainerInstancesResponse {
  /**
   * @schema ListContainerInstancesResponse#containerInstanceArns
   */
  readonly containerInstanceArns?: string[];

  /**
   * @schema ListContainerInstancesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListServicesRequest
 */
export interface ListServicesRequest {
  /**
   * @schema ListServicesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema ListServicesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListServicesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListServicesRequest#launchType
   */
  readonly launchType?: string;

  /**
   * @schema ListServicesRequest#schedulingStrategy
   */
  readonly schedulingStrategy?: string;

}

/**
 * @schema ListServicesResponse
 */
export interface ListServicesResponse {
  /**
   * @schema ListServicesResponse#serviceArns
   */
  readonly serviceArns?: string[];

  /**
   * @schema ListServicesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListTaskDefinitionFamiliesRequest
 */
export interface ListTaskDefinitionFamiliesRequest {
  /**
   * @schema ListTaskDefinitionFamiliesRequest#familyPrefix
   */
  readonly familyPrefix?: string;

  /**
   * @schema ListTaskDefinitionFamiliesRequest#status
   */
  readonly status?: string;

  /**
   * @schema ListTaskDefinitionFamiliesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTaskDefinitionFamiliesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTaskDefinitionFamiliesResponse
 */
export interface ListTaskDefinitionFamiliesResponse {
  /**
   * @schema ListTaskDefinitionFamiliesResponse#families
   */
  readonly families?: string[];

  /**
   * @schema ListTaskDefinitionFamiliesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTaskDefinitionsRequest
 */
export interface ListTaskDefinitionsRequest {
  /**
   * @schema ListTaskDefinitionsRequest#familyPrefix
   */
  readonly familyPrefix?: string;

  /**
   * @schema ListTaskDefinitionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema ListTaskDefinitionsRequest#sort
   */
  readonly sort?: string;

  /**
   * @schema ListTaskDefinitionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTaskDefinitionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTaskDefinitionsResponse
 */
export interface ListTaskDefinitionsResponse {
  /**
   * @schema ListTaskDefinitionsResponse#taskDefinitionArns
   */
  readonly taskDefinitionArns?: string[];

  /**
   * @schema ListTaskDefinitionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTasksRequest
 */
export interface ListTasksRequest {
  /**
   * @schema ListTasksRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema ListTasksRequest#containerInstance
   */
  readonly containerInstance?: string;

  /**
   * @schema ListTasksRequest#family
   */
  readonly family?: string;

  /**
   * @schema ListTasksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTasksRequest#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema ListTasksRequest#serviceName
   */
  readonly serviceName?: string;

  /**
   * @schema ListTasksRequest#desiredStatus
   */
  readonly desiredStatus?: string;

  /**
   * @schema ListTasksRequest#launchType
   */
  readonly launchType?: string;

}

/**
 * @schema ListTasksResponse
 */
export interface ListTasksResponse {
  /**
   * @schema ListTasksResponse#taskArns
   */
  readonly taskArns?: string[];

  /**
   * @schema ListTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutAccountSettingRequest
 */
export interface PutAccountSettingRequest {
  /**
   * @schema PutAccountSettingRequest#name
   */
  readonly name: string;

  /**
   * @schema PutAccountSettingRequest#value
   */
  readonly value: string;

  /**
   * @schema PutAccountSettingRequest#principalArn
   */
  readonly principalArn?: string;

}

/**
 * @schema PutAccountSettingResponse
 */
export interface PutAccountSettingResponse {
  /**
   * @schema PutAccountSettingResponse#setting
   */
  readonly setting?: Setting;

}

/**
 * @schema PutAccountSettingDefaultRequest
 */
export interface PutAccountSettingDefaultRequest {
  /**
   * @schema PutAccountSettingDefaultRequest#name
   */
  readonly name: string;

  /**
   * @schema PutAccountSettingDefaultRequest#value
   */
  readonly value: string;

}

/**
 * @schema PutAccountSettingDefaultResponse
 */
export interface PutAccountSettingDefaultResponse {
  /**
   * @schema PutAccountSettingDefaultResponse#setting
   */
  readonly setting?: Setting;

}

/**
 * @schema PutAttributesRequest
 */
export interface PutAttributesRequest {
  /**
   * @schema PutAttributesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema PutAttributesRequest#attributes
   */
  readonly attributes: Attribute[];

}

/**
 * @schema PutAttributesResponse
 */
export interface PutAttributesResponse {
  /**
   * @schema PutAttributesResponse#attributes
   */
  readonly attributes?: Attribute[];

}

/**
 * @schema PutClusterCapacityProvidersRequest
 */
export interface PutClusterCapacityProvidersRequest {
  /**
   * @schema PutClusterCapacityProvidersRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema PutClusterCapacityProvidersRequest#capacityProviders
   */
  readonly capacityProviders: string[];

  /**
   * @schema PutClusterCapacityProvidersRequest#defaultCapacityProviderStrategy
   */
  readonly defaultCapacityProviderStrategy: CapacityProviderStrategyItem[];

}

/**
 * @schema PutClusterCapacityProvidersResponse
 */
export interface PutClusterCapacityProvidersResponse {
  /**
   * @schema PutClusterCapacityProvidersResponse#cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema RegisterContainerInstanceRequest
 */
export interface RegisterContainerInstanceRequest {
  /**
   * @schema RegisterContainerInstanceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema RegisterContainerInstanceRequest#instanceIdentityDocument
   */
  readonly instanceIdentityDocument?: string;

  /**
   * @schema RegisterContainerInstanceRequest#instanceIdentityDocumentSignature
   */
  readonly instanceIdentityDocumentSignature?: string;

  /**
   * @schema RegisterContainerInstanceRequest#totalResources
   */
  readonly totalResources?: Resource[];

  /**
   * @schema RegisterContainerInstanceRequest#versionInfo
   */
  readonly versionInfo?: VersionInfo;

  /**
   * @schema RegisterContainerInstanceRequest#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema RegisterContainerInstanceRequest#attributes
   */
  readonly attributes?: Attribute[];

  /**
   * @schema RegisterContainerInstanceRequest#platformDevices
   */
  readonly platformDevices?: PlatformDevice[];

  /**
   * @schema RegisterContainerInstanceRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema RegisterContainerInstanceResponse
 */
export interface RegisterContainerInstanceResponse {
  /**
   * @schema RegisterContainerInstanceResponse#containerInstance
   */
  readonly containerInstance?: ContainerInstance;

}

/**
 * @schema RegisterTaskDefinitionRequest
 */
export interface RegisterTaskDefinitionRequest {
  /**
   * @schema RegisterTaskDefinitionRequest#family
   */
  readonly family: string;

  /**
   * @schema RegisterTaskDefinitionRequest#taskRoleArn
   */
  readonly taskRoleArn?: string;

  /**
   * @schema RegisterTaskDefinitionRequest#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema RegisterTaskDefinitionRequest#networkMode
   */
  readonly networkMode?: string;

  /**
   * @schema RegisterTaskDefinitionRequest#containerDefinitions
   */
  readonly containerDefinitions: ContainerDefinition[];

  /**
   * @schema RegisterTaskDefinitionRequest#volumes
   */
  readonly volumes?: Volume[];

  /**
   * @schema RegisterTaskDefinitionRequest#placementConstraints
   */
  readonly placementConstraints?: TaskDefinitionPlacementConstraint[];

  /**
   * @schema RegisterTaskDefinitionRequest#requiresCompatibilities
   */
  readonly requiresCompatibilities?: string[];

  /**
   * @schema RegisterTaskDefinitionRequest#cpu
   */
  readonly cpu?: string;

  /**
   * @schema RegisterTaskDefinitionRequest#memory
   */
  readonly memory?: string;

  /**
   * @schema RegisterTaskDefinitionRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RegisterTaskDefinitionRequest#pidMode
   */
  readonly pidMode?: string;

  /**
   * @schema RegisterTaskDefinitionRequest#ipcMode
   */
  readonly ipcMode?: string;

  /**
   * @schema RegisterTaskDefinitionRequest#proxyConfiguration
   */
  readonly proxyConfiguration?: ProxyConfiguration;

  /**
   * @schema RegisterTaskDefinitionRequest#inferenceAccelerators
   */
  readonly inferenceAccelerators?: InferenceAccelerator[];

}

/**
 * @schema RegisterTaskDefinitionResponse
 */
export interface RegisterTaskDefinitionResponse {
  /**
   * @schema RegisterTaskDefinitionResponse#taskDefinition
   */
  readonly taskDefinition?: TaskDefinition;

  /**
   * @schema RegisterTaskDefinitionResponse#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema RunTaskRequest
 */
export interface RunTaskRequest {
  /**
   * @schema RunTaskRequest#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @schema RunTaskRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema RunTaskRequest#count
   */
  readonly count?: number;

  /**
   * @schema RunTaskRequest#enableECSManagedTags
   */
  readonly enableECSManagedTags?: boolean;

  /**
   * @schema RunTaskRequest#group
   */
  readonly group?: string;

  /**
   * @schema RunTaskRequest#launchType
   */
  readonly launchType?: string;

  /**
   * @schema RunTaskRequest#networkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema RunTaskRequest#overrides
   */
  readonly overrides?: TaskOverride;

  /**
   * @schema RunTaskRequest#placementConstraints
   */
  readonly placementConstraints?: PlacementConstraint[];

  /**
   * @schema RunTaskRequest#placementStrategy
   */
  readonly placementStrategy?: PlacementStrategy[];

  /**
   * @schema RunTaskRequest#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema RunTaskRequest#propagateTags
   */
  readonly propagateTags?: string;

  /**
   * @schema RunTaskRequest#referenceId
   */
  readonly referenceId?: string;

  /**
   * @schema RunTaskRequest#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema RunTaskRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RunTaskRequest#taskDefinition
   */
  readonly taskDefinition: string;

}

/**
 * @schema RunTaskResponse
 */
export interface RunTaskResponse {
  /**
   * @schema RunTaskResponse#tasks
   */
  readonly tasks?: Task[];

  /**
   * @schema RunTaskResponse#failures
   */
  readonly failures?: Failure[];

}

/**
 * @schema StartTaskRequest
 */
export interface StartTaskRequest {
  /**
   * @schema StartTaskRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema StartTaskRequest#containerInstances
   */
  readonly containerInstances: string[];

  /**
   * @schema StartTaskRequest#enableECSManagedTags
   */
  readonly enableECSManagedTags?: boolean;

  /**
   * @schema StartTaskRequest#group
   */
  readonly group?: string;

  /**
   * @schema StartTaskRequest#networkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema StartTaskRequest#overrides
   */
  readonly overrides?: TaskOverride;

  /**
   * @schema StartTaskRequest#propagateTags
   */
  readonly propagateTags?: string;

  /**
   * @schema StartTaskRequest#referenceId
   */
  readonly referenceId?: string;

  /**
   * @schema StartTaskRequest#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema StartTaskRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema StartTaskRequest#taskDefinition
   */
  readonly taskDefinition: string;

}

/**
 * @schema StartTaskResponse
 */
export interface StartTaskResponse {
  /**
   * @schema StartTaskResponse#tasks
   */
  readonly tasks?: Task[];

  /**
   * @schema StartTaskResponse#failures
   */
  readonly failures?: Failure[];

}

/**
 * @schema StopTaskRequest
 */
export interface StopTaskRequest {
  /**
   * @schema StopTaskRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema StopTaskRequest#task
   */
  readonly task: string;

  /**
   * @schema StopTaskRequest#reason
   */
  readonly reason?: string;

}

/**
 * @schema StopTaskResponse
 */
export interface StopTaskResponse {
  /**
   * @schema StopTaskResponse#task
   */
  readonly task?: Task;

}

/**
 * @schema SubmitAttachmentStateChangesRequest
 */
export interface SubmitAttachmentStateChangesRequest {
  /**
   * @schema SubmitAttachmentStateChangesRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema SubmitAttachmentStateChangesRequest#attachments
   */
  readonly attachments: AttachmentStateChange[];

}

/**
 * @schema SubmitAttachmentStateChangesResponse
 */
export interface SubmitAttachmentStateChangesResponse {
  /**
   * @schema SubmitAttachmentStateChangesResponse#acknowledgment
   */
  readonly acknowledgment?: string;

}

/**
 * @schema SubmitContainerStateChangeRequest
 */
export interface SubmitContainerStateChangeRequest {
  /**
   * @schema SubmitContainerStateChangeRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema SubmitContainerStateChangeRequest#task
   */
  readonly task?: string;

  /**
   * @schema SubmitContainerStateChangeRequest#containerName
   */
  readonly containerName?: string;

  /**
   * @schema SubmitContainerStateChangeRequest#runtimeId
   */
  readonly runtimeId?: string;

  /**
   * @schema SubmitContainerStateChangeRequest#status
   */
  readonly status?: string;

  /**
   * @schema SubmitContainerStateChangeRequest#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema SubmitContainerStateChangeRequest#reason
   */
  readonly reason?: string;

  /**
   * @schema SubmitContainerStateChangeRequest#networkBindings
   */
  readonly networkBindings?: NetworkBinding[];

}

/**
 * @schema SubmitContainerStateChangeResponse
 */
export interface SubmitContainerStateChangeResponse {
  /**
   * @schema SubmitContainerStateChangeResponse#acknowledgment
   */
  readonly acknowledgment?: string;

}

/**
 * @schema SubmitTaskStateChangeRequest
 */
export interface SubmitTaskStateChangeRequest {
  /**
   * @schema SubmitTaskStateChangeRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema SubmitTaskStateChangeRequest#task
   */
  readonly task?: string;

  /**
   * @schema SubmitTaskStateChangeRequest#status
   */
  readonly status?: string;

  /**
   * @schema SubmitTaskStateChangeRequest#reason
   */
  readonly reason?: string;

  /**
   * @schema SubmitTaskStateChangeRequest#containers
   */
  readonly containers?: ContainerStateChange[];

  /**
   * @schema SubmitTaskStateChangeRequest#attachments
   */
  readonly attachments?: AttachmentStateChange[];

  /**
   * @schema SubmitTaskStateChangeRequest#pullStartedAt
   */
  readonly pullStartedAt?: string;

  /**
   * @schema SubmitTaskStateChangeRequest#pullStoppedAt
   */
  readonly pullStoppedAt?: string;

  /**
   * @schema SubmitTaskStateChangeRequest#executionStoppedAt
   */
  readonly executionStoppedAt?: string;

}

/**
 * @schema SubmitTaskStateChangeResponse
 */
export interface SubmitTaskStateChangeResponse {
  /**
   * @schema SubmitTaskStateChangeResponse#acknowledgment
   */
  readonly acknowledgment?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateCapacityProviderRequest
 */
export interface UpdateCapacityProviderRequest {
  /**
   * @schema UpdateCapacityProviderRequest#name
   */
  readonly name: string;

  /**
   * @schema UpdateCapacityProviderRequest#autoScalingGroupProvider
   */
  readonly autoScalingGroupProvider: AutoScalingGroupProviderUpdate;

}

/**
 * @schema UpdateCapacityProviderResponse
 */
export interface UpdateCapacityProviderResponse {
  /**
   * @schema UpdateCapacityProviderResponse#capacityProvider
   */
  readonly capacityProvider?: CapacityProvider;

}

/**
 * @schema UpdateClusterSettingsRequest
 */
export interface UpdateClusterSettingsRequest {
  /**
   * @schema UpdateClusterSettingsRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema UpdateClusterSettingsRequest#settings
   */
  readonly settings: ClusterSetting[];

}

/**
 * @schema UpdateClusterSettingsResponse
 */
export interface UpdateClusterSettingsResponse {
  /**
   * @schema UpdateClusterSettingsResponse#cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema UpdateContainerAgentRequest
 */
export interface UpdateContainerAgentRequest {
  /**
   * @schema UpdateContainerAgentRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema UpdateContainerAgentRequest#containerInstance
   */
  readonly containerInstance: string;

}

/**
 * @schema UpdateContainerAgentResponse
 */
export interface UpdateContainerAgentResponse {
  /**
   * @schema UpdateContainerAgentResponse#containerInstance
   */
  readonly containerInstance?: ContainerInstance;

}

/**
 * @schema UpdateContainerInstancesStateRequest
 */
export interface UpdateContainerInstancesStateRequest {
  /**
   * @schema UpdateContainerInstancesStateRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema UpdateContainerInstancesStateRequest#containerInstances
   */
  readonly containerInstances: string[];

  /**
   * @schema UpdateContainerInstancesStateRequest#status
   */
  readonly status: string;

}

/**
 * @schema UpdateContainerInstancesStateResponse
 */
export interface UpdateContainerInstancesStateResponse {
  /**
   * @schema UpdateContainerInstancesStateResponse#containerInstances
   */
  readonly containerInstances?: ContainerInstance[];

  /**
   * @schema UpdateContainerInstancesStateResponse#failures
   */
  readonly failures?: Failure[];

}

/**
 * @schema UpdateServiceRequest
 */
export interface UpdateServiceRequest {
  /**
   * @schema UpdateServiceRequest#cluster
   */
  readonly cluster?: string;

  /**
   * @schema UpdateServiceRequest#service
   */
  readonly service: string;

  /**
   * @schema UpdateServiceRequest#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema UpdateServiceRequest#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema UpdateServiceRequest#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @schema UpdateServiceRequest#deploymentConfiguration
   */
  readonly deploymentConfiguration?: DeploymentConfiguration;

  /**
   * @schema UpdateServiceRequest#networkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema UpdateServiceRequest#placementConstraints
   */
  readonly placementConstraints?: PlacementConstraint[];

  /**
   * @schema UpdateServiceRequest#placementStrategy
   */
  readonly placementStrategy?: PlacementStrategy[];

  /**
   * @schema UpdateServiceRequest#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema UpdateServiceRequest#forceNewDeployment
   */
  readonly forceNewDeployment?: boolean;

  /**
   * @schema UpdateServiceRequest#healthCheckGracePeriodSeconds
   */
  readonly healthCheckGracePeriodSeconds?: number;

}

/**
 * @schema UpdateServiceResponse
 */
export interface UpdateServiceResponse {
  /**
   * @schema UpdateServiceResponse#service
   */
  readonly service?: Service;

}

/**
 * @schema UpdateServicePrimaryTaskSetRequest
 */
export interface UpdateServicePrimaryTaskSetRequest {
  /**
   * @schema UpdateServicePrimaryTaskSetRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema UpdateServicePrimaryTaskSetRequest#service
   */
  readonly service: string;

  /**
   * @schema UpdateServicePrimaryTaskSetRequest#primaryTaskSet
   */
  readonly primaryTaskSet: string;

}

/**
 * @schema UpdateServicePrimaryTaskSetResponse
 */
export interface UpdateServicePrimaryTaskSetResponse {
  /**
   * @schema UpdateServicePrimaryTaskSetResponse#taskSet
   */
  readonly taskSet?: TaskSet;

}

/**
 * @schema UpdateTaskSetRequest
 */
export interface UpdateTaskSetRequest {
  /**
   * @schema UpdateTaskSetRequest#cluster
   */
  readonly cluster: string;

  /**
   * @schema UpdateTaskSetRequest#service
   */
  readonly service: string;

  /**
   * @schema UpdateTaskSetRequest#taskSet
   */
  readonly taskSet: string;

  /**
   * @schema UpdateTaskSetRequest#scale
   */
  readonly scale: Scale;

}

/**
 * @schema UpdateTaskSetResponse
 */
export interface UpdateTaskSetResponse {
  /**
   * @schema UpdateTaskSetResponse#taskSet
   */
  readonly taskSet?: TaskSet;

}

/**
 * @schema AutoScalingGroupProvider
 */
export interface AutoScalingGroupProvider {
  /**
   * @schema AutoScalingGroupProvider#autoScalingGroupArn
   */
  readonly autoScalingGroupArn: string;

  /**
   * @schema AutoScalingGroupProvider#managedScaling
   */
  readonly managedScaling?: ManagedScaling;

  /**
   * @schema AutoScalingGroupProvider#managedTerminationProtection
   */
  readonly managedTerminationProtection?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key?: string;

  /**
   * @schema Tag#value
   */
  readonly value?: string;

}

/**
 * @schema CapacityProvider
 */
export interface CapacityProvider {
  /**
   * @schema CapacityProvider#capacityProviderArn
   */
  readonly capacityProviderArn?: string;

  /**
   * @schema CapacityProvider#name
   */
  readonly name?: string;

  /**
   * @schema CapacityProvider#status
   */
  readonly status?: string;

  /**
   * @schema CapacityProvider#autoScalingGroupProvider
   */
  readonly autoScalingGroupProvider?: AutoScalingGroupProvider;

  /**
   * @schema CapacityProvider#updateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema CapacityProvider#updateStatusReason
   */
  readonly updateStatusReason?: string;

  /**
   * @schema CapacityProvider#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ClusterSetting
 */
export interface ClusterSetting {
  /**
   * @schema ClusterSetting#name
   */
  readonly name?: string;

  /**
   * @schema ClusterSetting#value
   */
  readonly value?: string;

}

/**
 * @schema CapacityProviderStrategyItem
 */
export interface CapacityProviderStrategyItem {
  /**
   * @schema CapacityProviderStrategyItem#capacityProvider
   */
  readonly capacityProvider: string;

  /**
   * @schema CapacityProviderStrategyItem#weight
   */
  readonly weight?: number;

  /**
   * @schema CapacityProviderStrategyItem#base
   */
  readonly base?: number;

}

/**
 * @schema Cluster
 */
export interface Cluster {
  /**
   * @schema Cluster#clusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema Cluster#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema Cluster#status
   */
  readonly status?: string;

  /**
   * @schema Cluster#registeredContainerInstancesCount
   */
  readonly registeredContainerInstancesCount?: number;

  /**
   * @schema Cluster#runningTasksCount
   */
  readonly runningTasksCount?: number;

  /**
   * @schema Cluster#pendingTasksCount
   */
  readonly pendingTasksCount?: number;

  /**
   * @schema Cluster#activeServicesCount
   */
  readonly activeServicesCount?: number;

  /**
   * @schema Cluster#statistics
   */
  readonly statistics?: KeyValuePair[];

  /**
   * @schema Cluster#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Cluster#settings
   */
  readonly settings?: ClusterSetting[];

  /**
   * @schema Cluster#capacityProviders
   */
  readonly capacityProviders?: string[];

  /**
   * @schema Cluster#defaultCapacityProviderStrategy
   */
  readonly defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @schema Cluster#attachments
   */
  readonly attachments?: Attachment[];

  /**
   * @schema Cluster#attachmentsStatus
   */
  readonly attachmentsStatus?: string;

}

/**
 * @schema LoadBalancer
 */
export interface LoadBalancer {
  /**
   * @schema LoadBalancer#targetGroupArn
   */
  readonly targetGroupArn?: string;

  /**
   * @schema LoadBalancer#loadBalancerName
   */
  readonly loadBalancerName?: string;

  /**
   * @schema LoadBalancer#containerName
   */
  readonly containerName?: string;

  /**
   * @schema LoadBalancer#containerPort
   */
  readonly containerPort?: number;

}

/**
 * @schema ServiceRegistry
 */
export interface ServiceRegistry {
  /**
   * @schema ServiceRegistry#registryArn
   */
  readonly registryArn?: string;

  /**
   * @schema ServiceRegistry#port
   */
  readonly port?: number;

  /**
   * @schema ServiceRegistry#containerName
   */
  readonly containerName?: string;

  /**
   * @schema ServiceRegistry#containerPort
   */
  readonly containerPort?: number;

}

/**
 * @schema DeploymentConfiguration
 */
export interface DeploymentConfiguration {
  /**
   * @schema DeploymentConfiguration#deploymentCircuitBreaker
   */
  readonly deploymentCircuitBreaker?: DeploymentCircuitBreaker;

  /**
   * @schema DeploymentConfiguration#maximumPercent
   */
  readonly maximumPercent?: number;

  /**
   * @schema DeploymentConfiguration#minimumHealthyPercent
   */
  readonly minimumHealthyPercent?: number;

}

/**
 * @schema PlacementConstraint
 */
export interface PlacementConstraint {
  /**
   * @schema PlacementConstraint#type
   */
  readonly type?: string;

  /**
   * @schema PlacementConstraint#expression
   */
  readonly expression?: string;

}

/**
 * @schema PlacementStrategy
 */
export interface PlacementStrategy {
  /**
   * @schema PlacementStrategy#type
   */
  readonly type?: string;

  /**
   * @schema PlacementStrategy#field
   */
  readonly field?: string;

}

/**
 * @schema NetworkConfiguration
 */
export interface NetworkConfiguration {
  /**
   * @schema NetworkConfiguration#awsvpcConfiguration
   */
  readonly awsvpcConfiguration?: AwsVpcConfiguration;

}

/**
 * @schema DeploymentController
 */
export interface DeploymentController {
  /**
   * @schema DeploymentController#type
   */
  readonly type: string;

}

/**
 * @schema Service
 */
export interface Service {
  /**
   * @schema Service#serviceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema Service#serviceName
   */
  readonly serviceName?: string;

  /**
   * @schema Service#clusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema Service#loadBalancers
   */
  readonly loadBalancers?: LoadBalancer[];

  /**
   * @schema Service#serviceRegistries
   */
  readonly serviceRegistries?: ServiceRegistry[];

  /**
   * @schema Service#status
   */
  readonly status?: string;

  /**
   * @schema Service#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema Service#runningCount
   */
  readonly runningCount?: number;

  /**
   * @schema Service#pendingCount
   */
  readonly pendingCount?: number;

  /**
   * @schema Service#launchType
   */
  readonly launchType?: string;

  /**
   * @schema Service#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @schema Service#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema Service#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema Service#deploymentConfiguration
   */
  readonly deploymentConfiguration?: DeploymentConfiguration;

  /**
   * @schema Service#taskSets
   */
  readonly taskSets?: TaskSet[];

  /**
   * @schema Service#deployments
   */
  readonly deployments?: Deployment[];

  /**
   * @schema Service#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Service#events
   */
  readonly events?: ServiceEvent[];

  /**
   * @schema Service#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Service#placementConstraints
   */
  readonly placementConstraints?: PlacementConstraint[];

  /**
   * @schema Service#placementStrategy
   */
  readonly placementStrategy?: PlacementStrategy[];

  /**
   * @schema Service#networkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema Service#healthCheckGracePeriodSeconds
   */
  readonly healthCheckGracePeriodSeconds?: number;

  /**
   * @schema Service#schedulingStrategy
   */
  readonly schedulingStrategy?: string;

  /**
   * @schema Service#deploymentController
   */
  readonly deploymentController?: DeploymentController;

  /**
   * @schema Service#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Service#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema Service#enableECSManagedTags
   */
  readonly enableECSManagedTags?: boolean;

  /**
   * @schema Service#propagateTags
   */
  readonly propagateTags?: string;

}

/**
 * @schema Scale
 */
export interface Scale {
  /**
   * @schema Scale#value
   */
  readonly value?: number;

  /**
   * @schema Scale#unit
   */
  readonly unit?: string;

}

/**
 * @schema TaskSet
 */
export interface TaskSet {
  /**
   * @schema TaskSet#id
   */
  readonly id?: string;

  /**
   * @schema TaskSet#taskSetArn
   */
  readonly taskSetArn?: string;

  /**
   * @schema TaskSet#serviceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema TaskSet#clusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema TaskSet#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema TaskSet#externalId
   */
  readonly externalId?: string;

  /**
   * @schema TaskSet#status
   */
  readonly status?: string;

  /**
   * @schema TaskSet#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema TaskSet#computedDesiredCount
   */
  readonly computedDesiredCount?: number;

  /**
   * @schema TaskSet#pendingCount
   */
  readonly pendingCount?: number;

  /**
   * @schema TaskSet#runningCount
   */
  readonly runningCount?: number;

  /**
   * @schema TaskSet#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema TaskSet#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema TaskSet#launchType
   */
  readonly launchType?: string;

  /**
   * @schema TaskSet#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @schema TaskSet#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema TaskSet#networkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema TaskSet#loadBalancers
   */
  readonly loadBalancers?: LoadBalancer[];

  /**
   * @schema TaskSet#serviceRegistries
   */
  readonly serviceRegistries?: ServiceRegistry[];

  /**
   * @schema TaskSet#scale
   */
  readonly scale?: Scale;

  /**
   * @schema TaskSet#stabilityStatus
   */
  readonly stabilityStatus?: string;

  /**
   * @schema TaskSet#stabilityStatusAt
   */
  readonly stabilityStatusAt?: string;

  /**
   * @schema TaskSet#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Setting
 */
export interface Setting {
  /**
   * @schema Setting#name
   */
  readonly name?: string;

  /**
   * @schema Setting#value
   */
  readonly value?: string;

  /**
   * @schema Setting#principalArn
   */
  readonly principalArn?: string;

}

/**
 * @schema Attribute
 */
export interface Attribute {
  /**
   * @schema Attribute#name
   */
  readonly name: string;

  /**
   * @schema Attribute#value
   */
  readonly value?: string;

  /**
   * @schema Attribute#targetType
   */
  readonly targetType?: string;

  /**
   * @schema Attribute#targetId
   */
  readonly targetId?: string;

}

/**
 * @schema ContainerInstance
 */
export interface ContainerInstance {
  /**
   * @schema ContainerInstance#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema ContainerInstance#ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema ContainerInstance#capacityProviderName
   */
  readonly capacityProviderName?: string;

  /**
   * @schema ContainerInstance#version
   */
  readonly version?: number;

  /**
   * @schema ContainerInstance#versionInfo
   */
  readonly versionInfo?: VersionInfo;

  /**
   * @schema ContainerInstance#remainingResources
   */
  readonly remainingResources?: Resource[];

  /**
   * @schema ContainerInstance#registeredResources
   */
  readonly registeredResources?: Resource[];

  /**
   * @schema ContainerInstance#status
   */
  readonly status?: string;

  /**
   * @schema ContainerInstance#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema ContainerInstance#agentConnected
   */
  readonly agentConnected?: boolean;

  /**
   * @schema ContainerInstance#runningTasksCount
   */
  readonly runningTasksCount?: number;

  /**
   * @schema ContainerInstance#pendingTasksCount
   */
  readonly pendingTasksCount?: number;

  /**
   * @schema ContainerInstance#agentUpdateStatus
   */
  readonly agentUpdateStatus?: string;

  /**
   * @schema ContainerInstance#attributes
   */
  readonly attributes?: Attribute[];

  /**
   * @schema ContainerInstance#registeredAt
   */
  readonly registeredAt?: string;

  /**
   * @schema ContainerInstance#attachments
   */
  readonly attachments?: Attachment[];

  /**
   * @schema ContainerInstance#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TaskDefinition
 */
export interface TaskDefinition {
  /**
   * @schema TaskDefinition#taskDefinitionArn
   */
  readonly taskDefinitionArn?: string;

  /**
   * @schema TaskDefinition#containerDefinitions
   */
  readonly containerDefinitions?: ContainerDefinition[];

  /**
   * @schema TaskDefinition#family
   */
  readonly family?: string;

  /**
   * @schema TaskDefinition#taskRoleArn
   */
  readonly taskRoleArn?: string;

  /**
   * @schema TaskDefinition#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema TaskDefinition#networkMode
   */
  readonly networkMode?: string;

  /**
   * @schema TaskDefinition#revision
   */
  readonly revision?: number;

  /**
   * @schema TaskDefinition#volumes
   */
  readonly volumes?: Volume[];

  /**
   * @schema TaskDefinition#status
   */
  readonly status?: string;

  /**
   * @schema TaskDefinition#requiresAttributes
   */
  readonly requiresAttributes?: Attribute[];

  /**
   * @schema TaskDefinition#placementConstraints
   */
  readonly placementConstraints?: TaskDefinitionPlacementConstraint[];

  /**
   * @schema TaskDefinition#compatibilities
   */
  readonly compatibilities?: string[];

  /**
   * @schema TaskDefinition#requiresCompatibilities
   */
  readonly requiresCompatibilities?: string[];

  /**
   * @schema TaskDefinition#cpu
   */
  readonly cpu?: string;

  /**
   * @schema TaskDefinition#memory
   */
  readonly memory?: string;

  /**
   * @schema TaskDefinition#inferenceAccelerators
   */
  readonly inferenceAccelerators?: InferenceAccelerator[];

  /**
   * @schema TaskDefinition#pidMode
   */
  readonly pidMode?: string;

  /**
   * @schema TaskDefinition#ipcMode
   */
  readonly ipcMode?: string;

  /**
   * @schema TaskDefinition#proxyConfiguration
   */
  readonly proxyConfiguration?: ProxyConfiguration;

}

/**
 * @schema Failure
 */
export interface Failure {
  /**
   * @schema Failure#arn
   */
  readonly arn?: string;

  /**
   * @schema Failure#reason
   */
  readonly reason?: string;

  /**
   * @schema Failure#detail
   */
  readonly detail?: string;

}

/**
 * @schema Task
 */
export interface Task {
  /**
   * @schema Task#attachments
   */
  readonly attachments?: Attachment[];

  /**
   * @schema Task#attributes
   */
  readonly attributes?: Attribute[];

  /**
   * @schema Task#availabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Task#capacityProviderName
   */
  readonly capacityProviderName?: string;

  /**
   * @schema Task#clusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema Task#connectivity
   */
  readonly connectivity?: string;

  /**
   * @schema Task#connectivityAt
   */
  readonly connectivityAt?: string;

  /**
   * @schema Task#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema Task#containers
   */
  readonly containers?: Container[];

  /**
   * @schema Task#cpu
   */
  readonly cpu?: string;

  /**
   * @schema Task#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Task#desiredStatus
   */
  readonly desiredStatus?: string;

  /**
   * @schema Task#executionStoppedAt
   */
  readonly executionStoppedAt?: string;

  /**
   * @schema Task#group
   */
  readonly group?: string;

  /**
   * @schema Task#healthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema Task#inferenceAccelerators
   */
  readonly inferenceAccelerators?: InferenceAccelerator[];

  /**
   * @schema Task#lastStatus
   */
  readonly lastStatus?: string;

  /**
   * @schema Task#launchType
   */
  readonly launchType?: string;

  /**
   * @schema Task#memory
   */
  readonly memory?: string;

  /**
   * @schema Task#overrides
   */
  readonly overrides?: TaskOverride;

  /**
   * @schema Task#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema Task#pullStartedAt
   */
  readonly pullStartedAt?: string;

  /**
   * @schema Task#pullStoppedAt
   */
  readonly pullStoppedAt?: string;

  /**
   * @schema Task#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema Task#startedBy
   */
  readonly startedBy?: string;

  /**
   * @schema Task#stopCode
   */
  readonly stopCode?: string;

  /**
   * @schema Task#stoppedAt
   */
  readonly stoppedAt?: string;

  /**
   * @schema Task#stoppedReason
   */
  readonly stoppedReason?: string;

  /**
   * @schema Task#stoppingAt
   */
  readonly stoppingAt?: string;

  /**
   * @schema Task#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Task#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema Task#taskDefinitionArn
   */
  readonly taskDefinitionArn?: string;

  /**
   * @schema Task#version
   */
  readonly version?: number;

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#name
   */
  readonly name?: string;

  /**
   * @schema Resource#type
   */
  readonly type?: string;

  /**
   * @schema Resource#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema Resource#longValue
   */
  readonly longValue?: number;

  /**
   * @schema Resource#integerValue
   */
  readonly integerValue?: number;

  /**
   * @schema Resource#stringSetValue
   */
  readonly stringSetValue?: string[];

}

/**
 * @schema VersionInfo
 */
export interface VersionInfo {
  /**
   * @schema VersionInfo#agentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema VersionInfo#agentHash
   */
  readonly agentHash?: string;

  /**
   * @schema VersionInfo#dockerVersion
   */
  readonly dockerVersion?: string;

}

/**
 * @schema PlatformDevice
 */
export interface PlatformDevice {
  /**
   * @schema PlatformDevice#id
   */
  readonly id: string;

  /**
   * @schema PlatformDevice#type
   */
  readonly type: string;

}

/**
 * @schema ContainerDefinition
 */
export interface ContainerDefinition {
  /**
   * @schema ContainerDefinition#name
   */
  readonly name?: string;

  /**
   * @schema ContainerDefinition#image
   */
  readonly image?: string;

  /**
   * @schema ContainerDefinition#repositoryCredentials
   */
  readonly repositoryCredentials?: RepositoryCredentials;

  /**
   * @schema ContainerDefinition#cpu
   */
  readonly cpu?: number;

  /**
   * @schema ContainerDefinition#memory
   */
  readonly memory?: number;

  /**
   * @schema ContainerDefinition#memoryReservation
   */
  readonly memoryReservation?: number;

  /**
   * @schema ContainerDefinition#links
   */
  readonly links?: string[];

  /**
   * @schema ContainerDefinition#portMappings
   */
  readonly portMappings?: PortMapping[];

  /**
   * @schema ContainerDefinition#essential
   */
  readonly essential?: boolean;

  /**
   * @schema ContainerDefinition#entryPoint
   */
  readonly entryPoint?: string[];

  /**
   * @schema ContainerDefinition#command
   */
  readonly command?: string[];

  /**
   * @schema ContainerDefinition#environment
   */
  readonly environment?: KeyValuePair[];

  /**
   * @schema ContainerDefinition#environmentFiles
   */
  readonly environmentFiles?: EnvironmentFile[];

  /**
   * @schema ContainerDefinition#mountPoints
   */
  readonly mountPoints?: MountPoint[];

  /**
   * @schema ContainerDefinition#volumesFrom
   */
  readonly volumesFrom?: VolumeFrom[];

  /**
   * @schema ContainerDefinition#linuxParameters
   */
  readonly linuxParameters?: LinuxParameters;

  /**
   * @schema ContainerDefinition#secrets
   */
  readonly secrets?: Secret[];

  /**
   * @schema ContainerDefinition#dependsOn
   */
  readonly dependsOn?: ContainerDependency[];

  /**
   * @schema ContainerDefinition#startTimeout
   */
  readonly startTimeout?: number;

  /**
   * @schema ContainerDefinition#stopTimeout
   */
  readonly stopTimeout?: number;

  /**
   * @schema ContainerDefinition#hostname
   */
  readonly hostname?: string;

  /**
   * @schema ContainerDefinition#user
   */
  readonly user?: string;

  /**
   * @schema ContainerDefinition#workingDirectory
   */
  readonly workingDirectory?: string;

  /**
   * @schema ContainerDefinition#disableNetworking
   */
  readonly disableNetworking?: boolean;

  /**
   * @schema ContainerDefinition#privileged
   */
  readonly privileged?: boolean;

  /**
   * @schema ContainerDefinition#readonlyRootFilesystem
   */
  readonly readonlyRootFilesystem?: boolean;

  /**
   * @schema ContainerDefinition#dnsServers
   */
  readonly dnsServers?: string[];

  /**
   * @schema ContainerDefinition#dnsSearchDomains
   */
  readonly dnsSearchDomains?: string[];

  /**
   * @schema ContainerDefinition#extraHosts
   */
  readonly extraHosts?: HostEntry[];

  /**
   * @schema ContainerDefinition#dockerSecurityOptions
   */
  readonly dockerSecurityOptions?: string[];

  /**
   * @schema ContainerDefinition#interactive
   */
  readonly interactive?: boolean;

  /**
   * @schema ContainerDefinition#pseudoTerminal
   */
  readonly pseudoTerminal?: boolean;

  /**
   * @schema ContainerDefinition#dockerLabels
   */
  readonly dockerLabels?: { [key: string]: string };

  /**
   * @schema ContainerDefinition#ulimits
   */
  readonly ulimits?: Ulimit[];

  /**
   * @schema ContainerDefinition#logConfiguration
   */
  readonly logConfiguration?: LogConfiguration;

  /**
   * @schema ContainerDefinition#healthCheck
   */
  readonly healthCheck?: HealthCheck;

  /**
   * @schema ContainerDefinition#systemControls
   */
  readonly systemControls?: SystemControl[];

  /**
   * @schema ContainerDefinition#resourceRequirements
   */
  readonly resourceRequirements?: ResourceRequirement[];

  /**
   * @schema ContainerDefinition#firelensConfiguration
   */
  readonly firelensConfiguration?: FirelensConfiguration;

}

/**
 * @schema Volume
 */
export interface Volume {
  /**
   * @schema Volume#name
   */
  readonly name?: string;

  /**
   * @schema Volume#host
   */
  readonly host?: HostVolumeProperties;

  /**
   * @schema Volume#dockerVolumeConfiguration
   */
  readonly dockerVolumeConfiguration?: DockerVolumeConfiguration;

  /**
   * @schema Volume#efsVolumeConfiguration
   */
  readonly efsVolumeConfiguration?: EfsVolumeConfiguration;

  /**
   * @schema Volume#fsxWindowsFileServerVolumeConfiguration
   */
  readonly fsxWindowsFileServerVolumeConfiguration?: FSxWindowsFileServerVolumeConfiguration;

}

/**
 * @schema TaskDefinitionPlacementConstraint
 */
export interface TaskDefinitionPlacementConstraint {
  /**
   * @schema TaskDefinitionPlacementConstraint#type
   */
  readonly type?: string;

  /**
   * @schema TaskDefinitionPlacementConstraint#expression
   */
  readonly expression?: string;

}

/**
 * @schema ProxyConfiguration
 */
export interface ProxyConfiguration {
  /**
   * @schema ProxyConfiguration#type
   */
  readonly type?: string;

  /**
   * @schema ProxyConfiguration#containerName
   */
  readonly containerName: string;

  /**
   * @schema ProxyConfiguration#properties
   */
  readonly properties?: KeyValuePair[];

}

/**
 * @schema InferenceAccelerator
 */
export interface InferenceAccelerator {
  /**
   * @schema InferenceAccelerator#deviceName
   */
  readonly deviceName: string;

  /**
   * @schema InferenceAccelerator#deviceType
   */
  readonly deviceType: string;

}

/**
 * @schema TaskOverride
 */
export interface TaskOverride {
  /**
   * @schema TaskOverride#containerOverrides
   */
  readonly containerOverrides?: ContainerOverride[];

  /**
   * @schema TaskOverride#cpu
   */
  readonly cpu?: string;

  /**
   * @schema TaskOverride#inferenceAcceleratorOverrides
   */
  readonly inferenceAcceleratorOverrides?: InferenceAcceleratorOverride[];

  /**
   * @schema TaskOverride#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema TaskOverride#memory
   */
  readonly memory?: string;

  /**
   * @schema TaskOverride#taskRoleArn
   */
  readonly taskRoleArn?: string;

}

/**
 * @schema AttachmentStateChange
 */
export interface AttachmentStateChange {
  /**
   * @schema AttachmentStateChange#attachmentArn
   */
  readonly attachmentArn: string;

  /**
   * @schema AttachmentStateChange#status
   */
  readonly status: string;

}

/**
 * @schema NetworkBinding
 */
export interface NetworkBinding {
  /**
   * @schema NetworkBinding#bindIP
   */
  readonly bindIP?: string;

  /**
   * @schema NetworkBinding#containerPort
   */
  readonly containerPort?: number;

  /**
   * @schema NetworkBinding#hostPort
   */
  readonly hostPort?: number;

  /**
   * @schema NetworkBinding#protocol
   */
  readonly protocol?: string;

}

/**
 * @schema ContainerStateChange
 */
export interface ContainerStateChange {
  /**
   * @schema ContainerStateChange#containerName
   */
  readonly containerName?: string;

  /**
   * @schema ContainerStateChange#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema ContainerStateChange#runtimeId
   */
  readonly runtimeId?: string;

  /**
   * @schema ContainerStateChange#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema ContainerStateChange#networkBindings
   */
  readonly networkBindings?: NetworkBinding[];

  /**
   * @schema ContainerStateChange#reason
   */
  readonly reason?: string;

  /**
   * @schema ContainerStateChange#status
   */
  readonly status?: string;

}

/**
 * @schema AutoScalingGroupProviderUpdate
 */
export interface AutoScalingGroupProviderUpdate {
  /**
   * @schema AutoScalingGroupProviderUpdate#managedScaling
   */
  readonly managedScaling?: ManagedScaling;

  /**
   * @schema AutoScalingGroupProviderUpdate#managedTerminationProtection
   */
  readonly managedTerminationProtection?: string;

}

/**
 * @schema ManagedScaling
 */
export interface ManagedScaling {
  /**
   * @schema ManagedScaling#status
   */
  readonly status?: string;

  /**
   * @schema ManagedScaling#targetCapacity
   */
  readonly targetCapacity?: number;

  /**
   * @schema ManagedScaling#minimumScalingStepSize
   */
  readonly minimumScalingStepSize?: number;

  /**
   * @schema ManagedScaling#maximumScalingStepSize
   */
  readonly maximumScalingStepSize?: number;

  /**
   * @schema ManagedScaling#instanceWarmupPeriod
   */
  readonly instanceWarmupPeriod?: number;

}

/**
 * @schema KeyValuePair
 */
export interface KeyValuePair {
  /**
   * @schema KeyValuePair#name
   */
  readonly name?: string;

  /**
   * @schema KeyValuePair#value
   */
  readonly value?: string;

}

/**
 * @schema Attachment
 */
export interface Attachment {
  /**
   * @schema Attachment#id
   */
  readonly id?: string;

  /**
   * @schema Attachment#type
   */
  readonly type?: string;

  /**
   * @schema Attachment#status
   */
  readonly status?: string;

  /**
   * @schema Attachment#details
   */
  readonly details?: KeyValuePair[];

}

/**
 * @schema DeploymentCircuitBreaker
 */
export interface DeploymentCircuitBreaker {
  /**
   * @schema DeploymentCircuitBreaker#enable
   */
  readonly enable: boolean;

  /**
   * @schema DeploymentCircuitBreaker#rollback
   */
  readonly rollback: boolean;

}

/**
 * @schema AwsVpcConfiguration
 */
export interface AwsVpcConfiguration {
  /**
   * @schema AwsVpcConfiguration#subnets
   */
  readonly subnets: string[];

  /**
   * @schema AwsVpcConfiguration#securityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema AwsVpcConfiguration#assignPublicIp
   */
  readonly assignPublicIp?: string;

}

/**
 * @schema Deployment
 */
export interface Deployment {
  /**
   * @schema Deployment#id
   */
  readonly id?: string;

  /**
   * @schema Deployment#status
   */
  readonly status?: string;

  /**
   * @schema Deployment#taskDefinition
   */
  readonly taskDefinition?: string;

  /**
   * @schema Deployment#desiredCount
   */
  readonly desiredCount?: number;

  /**
   * @schema Deployment#pendingCount
   */
  readonly pendingCount?: number;

  /**
   * @schema Deployment#runningCount
   */
  readonly runningCount?: number;

  /**
   * @schema Deployment#failedTasks
   */
  readonly failedTasks?: number;

  /**
   * @schema Deployment#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Deployment#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema Deployment#capacityProviderStrategy
   */
  readonly capacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @schema Deployment#launchType
   */
  readonly launchType?: string;

  /**
   * @schema Deployment#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema Deployment#networkConfiguration
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * @schema Deployment#rolloutState
   */
  readonly rolloutState?: string;

  /**
   * @schema Deployment#rolloutStateReason
   */
  readonly rolloutStateReason?: string;

}

/**
 * @schema ServiceEvent
 */
export interface ServiceEvent {
  /**
   * @schema ServiceEvent#id
   */
  readonly id?: string;

  /**
   * @schema ServiceEvent#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema ServiceEvent#message
   */
  readonly message?: string;

}

/**
 * @schema Container
 */
export interface Container {
  /**
   * @schema Container#containerArn
   */
  readonly containerArn?: string;

  /**
   * @schema Container#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema Container#name
   */
  readonly name?: string;

  /**
   * @schema Container#image
   */
  readonly image?: string;

  /**
   * @schema Container#imageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema Container#runtimeId
   */
  readonly runtimeId?: string;

  /**
   * @schema Container#lastStatus
   */
  readonly lastStatus?: string;

  /**
   * @schema Container#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema Container#reason
   */
  readonly reason?: string;

  /**
   * @schema Container#networkBindings
   */
  readonly networkBindings?: NetworkBinding[];

  /**
   * @schema Container#networkInterfaces
   */
  readonly networkInterfaces?: NetworkInterface[];

  /**
   * @schema Container#healthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema Container#cpu
   */
  readonly cpu?: string;

  /**
   * @schema Container#memory
   */
  readonly memory?: string;

  /**
   * @schema Container#memoryReservation
   */
  readonly memoryReservation?: string;

  /**
   * @schema Container#gpuIds
   */
  readonly gpuIds?: string[];

}

/**
 * @schema RepositoryCredentials
 */
export interface RepositoryCredentials {
  /**
   * @schema RepositoryCredentials#credentialsParameter
   */
  readonly credentialsParameter: string;

}

/**
 * @schema PortMapping
 */
export interface PortMapping {
  /**
   * @schema PortMapping#containerPort
   */
  readonly containerPort?: number;

  /**
   * @schema PortMapping#hostPort
   */
  readonly hostPort?: number;

  /**
   * @schema PortMapping#protocol
   */
  readonly protocol?: string;

}

/**
 * @schema EnvironmentFile
 */
export interface EnvironmentFile {
  /**
   * @schema EnvironmentFile#value
   */
  readonly value: string;

  /**
   * @schema EnvironmentFile#type
   */
  readonly type: string;

}

/**
 * @schema MountPoint
 */
export interface MountPoint {
  /**
   * @schema MountPoint#sourceVolume
   */
  readonly sourceVolume?: string;

  /**
   * @schema MountPoint#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema MountPoint#readOnly
   */
  readonly readOnly?: boolean;

}

/**
 * @schema VolumeFrom
 */
export interface VolumeFrom {
  /**
   * @schema VolumeFrom#sourceContainer
   */
  readonly sourceContainer?: string;

  /**
   * @schema VolumeFrom#readOnly
   */
  readonly readOnly?: boolean;

}

/**
 * @schema LinuxParameters
 */
export interface LinuxParameters {
  /**
   * @schema LinuxParameters#capabilities
   */
  readonly capabilities?: KernelCapabilities;

  /**
   * @schema LinuxParameters#devices
   */
  readonly devices?: Device[];

  /**
   * @schema LinuxParameters#initProcessEnabled
   */
  readonly initProcessEnabled?: boolean;

  /**
   * @schema LinuxParameters#sharedMemorySize
   */
  readonly sharedMemorySize?: number;

  /**
   * @schema LinuxParameters#tmpfs
   */
  readonly tmpfs?: Tmpfs[];

  /**
   * @schema LinuxParameters#maxSwap
   */
  readonly maxSwap?: number;

  /**
   * @schema LinuxParameters#swappiness
   */
  readonly swappiness?: number;

}

/**
 * @schema Secret
 */
export interface Secret {
  /**
   * @schema Secret#name
   */
  readonly name: string;

  /**
   * @schema Secret#valueFrom
   */
  readonly valueFrom: string;

}

/**
 * @schema ContainerDependency
 */
export interface ContainerDependency {
  /**
   * @schema ContainerDependency#containerName
   */
  readonly containerName: string;

  /**
   * @schema ContainerDependency#condition
   */
  readonly condition: string;

}

/**
 * @schema HostEntry
 */
export interface HostEntry {
  /**
   * @schema HostEntry#hostname
   */
  readonly hostname: string;

  /**
   * @schema HostEntry#ipAddress
   */
  readonly ipAddress: string;

}

/**
 * @schema Ulimit
 */
export interface Ulimit {
  /**
   * @schema Ulimit#name
   */
  readonly name: string;

  /**
   * @schema Ulimit#softLimit
   */
  readonly softLimit: number;

  /**
   * @schema Ulimit#hardLimit
   */
  readonly hardLimit: number;

}

/**
 * @schema LogConfiguration
 */
export interface LogConfiguration {
  /**
   * @schema LogConfiguration#logDriver
   */
  readonly logDriver: string;

  /**
   * @schema LogConfiguration#options
   */
  readonly options?: { [key: string]: string };

  /**
   * @schema LogConfiguration#secretOptions
   */
  readonly secretOptions?: Secret[];

}

/**
 * @schema HealthCheck
 */
export interface HealthCheck {
  /**
   * @schema HealthCheck#command
   */
  readonly command: string[];

  /**
   * @schema HealthCheck#interval
   */
  readonly interval?: number;

  /**
   * @schema HealthCheck#timeout
   */
  readonly timeout?: number;

  /**
   * @schema HealthCheck#retries
   */
  readonly retries?: number;

  /**
   * @schema HealthCheck#startPeriod
   */
  readonly startPeriod?: number;

}

/**
 * @schema SystemControl
 */
export interface SystemControl {
  /**
   * @schema SystemControl#namespace
   */
  readonly namespace?: string;

  /**
   * @schema SystemControl#value
   */
  readonly value?: string;

}

/**
 * @schema ResourceRequirement
 */
export interface ResourceRequirement {
  /**
   * @schema ResourceRequirement#value
   */
  readonly value: string;

  /**
   * @schema ResourceRequirement#type
   */
  readonly type: string;

}

/**
 * @schema FirelensConfiguration
 */
export interface FirelensConfiguration {
  /**
   * @schema FirelensConfiguration#type
   */
  readonly type: string;

  /**
   * @schema FirelensConfiguration#options
   */
  readonly options?: { [key: string]: string };

}

/**
 * @schema HostVolumeProperties
 */
export interface HostVolumeProperties {
  /**
   * @schema HostVolumeProperties#sourcePath
   */
  readonly sourcePath?: string;

}

/**
 * @schema DockerVolumeConfiguration
 */
export interface DockerVolumeConfiguration {
  /**
   * @schema DockerVolumeConfiguration#scope
   */
  readonly scope?: string;

  /**
   * @schema DockerVolumeConfiguration#autoprovision
   */
  readonly autoprovision?: boolean;

  /**
   * @schema DockerVolumeConfiguration#driver
   */
  readonly driver?: string;

  /**
   * @schema DockerVolumeConfiguration#driverOpts
   */
  readonly driverOpts?: { [key: string]: string };

  /**
   * @schema DockerVolumeConfiguration#labels
   */
  readonly labels?: { [key: string]: string };

}

/**
 * @schema EfsVolumeConfiguration
 */
export interface EfsVolumeConfiguration {
  /**
   * @schema EfsVolumeConfiguration#fileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema EfsVolumeConfiguration#rootDirectory
   */
  readonly rootDirectory?: string;

  /**
   * @schema EfsVolumeConfiguration#transitEncryption
   */
  readonly transitEncryption?: string;

  /**
   * @schema EfsVolumeConfiguration#transitEncryptionPort
   */
  readonly transitEncryptionPort?: number;

  /**
   * @schema EfsVolumeConfiguration#authorizationConfig
   */
  readonly authorizationConfig?: EfsAuthorizationConfig;

}

/**
 * @schema FSxWindowsFileServerVolumeConfiguration
 */
export interface FSxWindowsFileServerVolumeConfiguration {
  /**
   * @schema FSxWindowsFileServerVolumeConfiguration#fileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema FSxWindowsFileServerVolumeConfiguration#rootDirectory
   */
  readonly rootDirectory: string;

  /**
   * @schema FSxWindowsFileServerVolumeConfiguration#authorizationConfig
   */
  readonly authorizationConfig: FSxWindowsFileServerAuthorizationConfig;

}

/**
 * @schema ContainerOverride
 */
export interface ContainerOverride {
  /**
   * @schema ContainerOverride#name
   */
  readonly name?: string;

  /**
   * @schema ContainerOverride#command
   */
  readonly command?: string[];

  /**
   * @schema ContainerOverride#environment
   */
  readonly environment?: KeyValuePair[];

  /**
   * @schema ContainerOverride#environmentFiles
   */
  readonly environmentFiles?: EnvironmentFile[];

  /**
   * @schema ContainerOverride#cpu
   */
  readonly cpu?: number;

  /**
   * @schema ContainerOverride#memory
   */
  readonly memory?: number;

  /**
   * @schema ContainerOverride#memoryReservation
   */
  readonly memoryReservation?: number;

  /**
   * @schema ContainerOverride#resourceRequirements
   */
  readonly resourceRequirements?: ResourceRequirement[];

}

/**
 * @schema InferenceAcceleratorOverride
 */
export interface InferenceAcceleratorOverride {
  /**
   * @schema InferenceAcceleratorOverride#deviceName
   */
  readonly deviceName?: string;

  /**
   * @schema InferenceAcceleratorOverride#deviceType
   */
  readonly deviceType?: string;

}

/**
 * @schema NetworkInterface
 */
export interface NetworkInterface {
  /**
   * @schema NetworkInterface#attachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema NetworkInterface#privateIpv4Address
   */
  readonly privateIpv4Address?: string;

  /**
   * @schema NetworkInterface#ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema KernelCapabilities
 */
export interface KernelCapabilities {
  /**
   * @schema KernelCapabilities#add
   */
  readonly add?: string[];

  /**
   * @schema KernelCapabilities#drop
   */
  readonly drop?: string[];

}

/**
 * @schema Device
 */
export interface Device {
  /**
   * @schema Device#hostPath
   */
  readonly hostPath: string;

  /**
   * @schema Device#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema Device#permissions
   */
  readonly permissions?: string[];

}

/**
 * @schema Tmpfs
 */
export interface Tmpfs {
  /**
   * @schema Tmpfs#containerPath
   */
  readonly containerPath: string;

  /**
   * @schema Tmpfs#size
   */
  readonly size: number;

  /**
   * @schema Tmpfs#mountOptions
   */
  readonly mountOptions?: string[];

}

/**
 * @schema EfsAuthorizationConfig
 */
export interface EfsAuthorizationConfig {
  /**
   * @schema EfsAuthorizationConfig#accessPointId
   */
  readonly accessPointId?: string;

  /**
   * @schema EfsAuthorizationConfig#iam
   */
  readonly iam?: string;

}

/**
 * @schema FSxWindowsFileServerAuthorizationConfig
 */
export interface FSxWindowsFileServerAuthorizationConfig {
  /**
   * @schema FSxWindowsFileServerAuthorizationConfig#credentialsParameter
   */
  readonly credentialsParameter: string;

  /**
   * @schema FSxWindowsFileServerAuthorizationConfig#domain
   */
  readonly domain: string;

}
