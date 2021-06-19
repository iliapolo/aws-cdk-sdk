/**
 * @schema ServiceDiscoveryCreateHttpNamespaceRequest
 */
export interface ServiceDiscoveryCreateHttpNamespaceRequest {
  /**
   * @schema ServiceDiscoveryCreateHttpNamespaceRequest#Name
   */
  readonly name: string;

  /**
   * @schema ServiceDiscoveryCreateHttpNamespaceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ServiceDiscoveryCreateHttpNamespaceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryCreateHttpNamespaceRequest#Tags
   */
  readonly tags?: ServiceDiscoveryTag[];

}

/**
 * @schema ServiceDiscoveryCreateHttpNamespaceResponse
 */
export interface ServiceDiscoveryCreateHttpNamespaceResponse {
  /**
   * @schema ServiceDiscoveryCreateHttpNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest
 */
export interface ServiceDiscoveryCreatePrivateDnsNamespaceRequest {
  /**
   * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest#Name
   */
  readonly name: string;

  /**
   * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest#Vpc
   */
  readonly vpc: string;

  /**
   * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest#Tags
   */
  readonly tags?: ServiceDiscoveryTag[];

}

/**
 * @schema ServiceDiscoveryCreatePrivateDnsNamespaceResponse
 */
export interface ServiceDiscoveryCreatePrivateDnsNamespaceResponse {
  /**
   * @schema ServiceDiscoveryCreatePrivateDnsNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema ServiceDiscoveryCreatePublicDnsNamespaceRequest
 */
export interface ServiceDiscoveryCreatePublicDnsNamespaceRequest {
  /**
   * @schema ServiceDiscoveryCreatePublicDnsNamespaceRequest#Name
   */
  readonly name: string;

  /**
   * @schema ServiceDiscoveryCreatePublicDnsNamespaceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ServiceDiscoveryCreatePublicDnsNamespaceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryCreatePublicDnsNamespaceRequest#Tags
   */
  readonly tags?: ServiceDiscoveryTag[];

}

/**
 * @schema ServiceDiscoveryCreatePublicDnsNamespaceResponse
 */
export interface ServiceDiscoveryCreatePublicDnsNamespaceResponse {
  /**
   * @schema ServiceDiscoveryCreatePublicDnsNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema ServiceDiscoveryCreateServiceRequest
 */
export interface ServiceDiscoveryCreateServiceRequest {
  /**
   * @schema ServiceDiscoveryCreateServiceRequest#Name
   */
  readonly name: string;

  /**
   * @schema ServiceDiscoveryCreateServiceRequest#NamespaceId
   */
  readonly namespaceId?: string;

  /**
   * @schema ServiceDiscoveryCreateServiceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ServiceDiscoveryCreateServiceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryCreateServiceRequest#DnsConfig
   */
  readonly dnsConfig?: ServiceDiscoveryDnsConfig;

  /**
   * @schema ServiceDiscoveryCreateServiceRequest#HealthCheckConfig
   */
  readonly healthCheckConfig?: ServiceDiscoveryHealthCheckConfig;

  /**
   * @schema ServiceDiscoveryCreateServiceRequest#HealthCheckCustomConfig
   */
  readonly healthCheckCustomConfig?: ServiceDiscoveryHealthCheckCustomConfig;

  /**
   * @schema ServiceDiscoveryCreateServiceRequest#Tags
   */
  readonly tags?: ServiceDiscoveryTag[];

}

/**
 * @schema ServiceDiscoveryCreateServiceResponse
 */
export interface ServiceDiscoveryCreateServiceResponse {
  /**
   * @schema ServiceDiscoveryCreateServiceResponse#Service
   */
  readonly service?: ServiceDiscoveryService;

}

/**
 * @schema ServiceDiscoveryDeleteNamespaceRequest
 */
export interface ServiceDiscoveryDeleteNamespaceRequest {
  /**
   * @schema ServiceDiscoveryDeleteNamespaceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceDiscoveryDeleteNamespaceResponse
 */
export interface ServiceDiscoveryDeleteNamespaceResponse {
  /**
   * @schema ServiceDiscoveryDeleteNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema ServiceDiscoveryDeleteServiceRequest
 */
export interface ServiceDiscoveryDeleteServiceRequest {
  /**
   * @schema ServiceDiscoveryDeleteServiceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceDiscoveryDeleteServiceResponse
 */
export interface ServiceDiscoveryDeleteServiceResponse {
}

/**
 * @schema ServiceDiscoveryDeregisterInstanceRequest
 */
export interface ServiceDiscoveryDeregisterInstanceRequest {
  /**
   * @schema ServiceDiscoveryDeregisterInstanceRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema ServiceDiscoveryDeregisterInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ServiceDiscoveryDeregisterInstanceResponse
 */
export interface ServiceDiscoveryDeregisterInstanceResponse {
  /**
   * @schema ServiceDiscoveryDeregisterInstanceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema ServiceDiscoveryDiscoverInstancesRequest
 */
export interface ServiceDiscoveryDiscoverInstancesRequest {
  /**
   * @schema ServiceDiscoveryDiscoverInstancesRequest#NamespaceName
   */
  readonly namespaceName: string;

  /**
   * @schema ServiceDiscoveryDiscoverInstancesRequest#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema ServiceDiscoveryDiscoverInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ServiceDiscoveryDiscoverInstancesRequest#QueryParameters
   */
  readonly queryParameters?: { [key: string]: string };

  /**
   * @schema ServiceDiscoveryDiscoverInstancesRequest#OptionalParameters
   */
  readonly optionalParameters?: { [key: string]: string };

  /**
   * @schema ServiceDiscoveryDiscoverInstancesRequest#HealthStatus
   */
  readonly healthStatus?: string;

}

/**
 * @schema ServiceDiscoveryDiscoverInstancesResponse
 */
export interface ServiceDiscoveryDiscoverInstancesResponse {
  /**
   * @schema ServiceDiscoveryDiscoverInstancesResponse#Instances
   */
  readonly instances?: ServiceDiscoveryHttpInstanceSummary[];

}

/**
 * @schema ServiceDiscoveryGetInstanceRequest
 */
export interface ServiceDiscoveryGetInstanceRequest {
  /**
   * @schema ServiceDiscoveryGetInstanceRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema ServiceDiscoveryGetInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ServiceDiscoveryGetInstanceResponse
 */
export interface ServiceDiscoveryGetInstanceResponse {
  /**
   * @schema ServiceDiscoveryGetInstanceResponse#Instance
   */
  readonly instance?: ServiceDiscoveryInstance;

}

/**
 * @schema ServiceDiscoveryGetInstancesHealthStatusRequest
 */
export interface ServiceDiscoveryGetInstancesHealthStatusRequest {
  /**
   * @schema ServiceDiscoveryGetInstancesHealthStatusRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema ServiceDiscoveryGetInstancesHealthStatusRequest#Instances
   */
  readonly instances?: string[];

  /**
   * @schema ServiceDiscoveryGetInstancesHealthStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ServiceDiscoveryGetInstancesHealthStatusRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceDiscoveryGetInstancesHealthStatusResponse
 */
export interface ServiceDiscoveryGetInstancesHealthStatusResponse {
  /**
   * @schema ServiceDiscoveryGetInstancesHealthStatusResponse#Status
   */
  readonly status?: { [key: string]: string };

  /**
   * @schema ServiceDiscoveryGetInstancesHealthStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceDiscoveryGetNamespaceRequest
 */
export interface ServiceDiscoveryGetNamespaceRequest {
  /**
   * @schema ServiceDiscoveryGetNamespaceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceDiscoveryGetNamespaceResponse
 */
export interface ServiceDiscoveryGetNamespaceResponse {
  /**
   * @schema ServiceDiscoveryGetNamespaceResponse#Namespace
   */
  readonly namespace?: ServiceDiscoveryNamespace;

}

/**
 * @schema ServiceDiscoveryGetOperationRequest
 */
export interface ServiceDiscoveryGetOperationRequest {
  /**
   * @schema ServiceDiscoveryGetOperationRequest#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema ServiceDiscoveryGetOperationResponse
 */
export interface ServiceDiscoveryGetOperationResponse {
  /**
   * @schema ServiceDiscoveryGetOperationResponse#Operation
   */
  readonly operation?: ServiceDiscoveryOperation;

}

/**
 * @schema ServiceDiscoveryGetServiceRequest
 */
export interface ServiceDiscoveryGetServiceRequest {
  /**
   * @schema ServiceDiscoveryGetServiceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceDiscoveryGetServiceResponse
 */
export interface ServiceDiscoveryGetServiceResponse {
  /**
   * @schema ServiceDiscoveryGetServiceResponse#Service
   */
  readonly service?: ServiceDiscoveryService;

}

/**
 * @schema ServiceDiscoveryListInstancesRequest
 */
export interface ServiceDiscoveryListInstancesRequest {
  /**
   * @schema ServiceDiscoveryListInstancesRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema ServiceDiscoveryListInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceDiscoveryListInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ServiceDiscoveryListInstancesResponse
 */
export interface ServiceDiscoveryListInstancesResponse {
  /**
   * @schema ServiceDiscoveryListInstancesResponse#Instances
   */
  readonly instances?: ServiceDiscoveryInstanceSummary[];

  /**
   * @schema ServiceDiscoveryListInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceDiscoveryListNamespacesRequest
 */
export interface ServiceDiscoveryListNamespacesRequest {
  /**
   * @schema ServiceDiscoveryListNamespacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceDiscoveryListNamespacesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ServiceDiscoveryListNamespacesRequest#Filters
   */
  readonly filters?: ServiceDiscoveryNamespaceFilter[];

}

/**
 * @schema ServiceDiscoveryListNamespacesResponse
 */
export interface ServiceDiscoveryListNamespacesResponse {
  /**
   * @schema ServiceDiscoveryListNamespacesResponse#Namespaces
   */
  readonly namespaces?: ServiceDiscoveryNamespaceSummary[];

  /**
   * @schema ServiceDiscoveryListNamespacesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceDiscoveryListOperationsRequest
 */
export interface ServiceDiscoveryListOperationsRequest {
  /**
   * @schema ServiceDiscoveryListOperationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceDiscoveryListOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ServiceDiscoveryListOperationsRequest#Filters
   */
  readonly filters?: ServiceDiscoveryOperationFilter[];

}

/**
 * @schema ServiceDiscoveryListOperationsResponse
 */
export interface ServiceDiscoveryListOperationsResponse {
  /**
   * @schema ServiceDiscoveryListOperationsResponse#Operations
   */
  readonly operations?: ServiceDiscoveryOperationSummary[];

  /**
   * @schema ServiceDiscoveryListOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceDiscoveryListServicesRequest
 */
export interface ServiceDiscoveryListServicesRequest {
  /**
   * @schema ServiceDiscoveryListServicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceDiscoveryListServicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ServiceDiscoveryListServicesRequest#Filters
   */
  readonly filters?: ServiceDiscoveryServiceFilter[];

}

/**
 * @schema ServiceDiscoveryListServicesResponse
 */
export interface ServiceDiscoveryListServicesResponse {
  /**
   * @schema ServiceDiscoveryListServicesResponse#Services
   */
  readonly services?: ServiceDiscoveryServiceSummary[];

  /**
   * @schema ServiceDiscoveryListServicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ServiceDiscoveryListTagsForResourceRequest
 */
export interface ServiceDiscoveryListTagsForResourceRequest {
  /**
   * @schema ServiceDiscoveryListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ServiceDiscoveryListTagsForResourceResponse
 */
export interface ServiceDiscoveryListTagsForResourceResponse {
  /**
   * @schema ServiceDiscoveryListTagsForResourceResponse#Tags
   */
  readonly tags?: ServiceDiscoveryTag[];

}

/**
 * @schema ServiceDiscoveryRegisterInstanceRequest
 */
export interface ServiceDiscoveryRegisterInstanceRequest {
  /**
   * @schema ServiceDiscoveryRegisterInstanceRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema ServiceDiscoveryRegisterInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ServiceDiscoveryRegisterInstanceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ServiceDiscoveryRegisterInstanceRequest#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema ServiceDiscoveryRegisterInstanceResponse
 */
export interface ServiceDiscoveryRegisterInstanceResponse {
  /**
   * @schema ServiceDiscoveryRegisterInstanceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema ServiceDiscoveryTagResourceRequest
 */
export interface ServiceDiscoveryTagResourceRequest {
  /**
   * @schema ServiceDiscoveryTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ServiceDiscoveryTagResourceRequest#Tags
   */
  readonly tags: ServiceDiscoveryTag[];

}

/**
 * @schema ServiceDiscoveryTagResourceResponse
 */
export interface ServiceDiscoveryTagResourceResponse {
}

/**
 * @schema ServiceDiscoveryUntagResourceRequest
 */
export interface ServiceDiscoveryUntagResourceRequest {
  /**
   * @schema ServiceDiscoveryUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ServiceDiscoveryUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ServiceDiscoveryUntagResourceResponse
 */
export interface ServiceDiscoveryUntagResourceResponse {
}

/**
 * @schema ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest
 */
export interface ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest {
  /**
   * @schema ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest#Status
   */
  readonly status: string;

}

/**
 * @schema ServiceDiscoveryUpdateServiceRequest
 */
export interface ServiceDiscoveryUpdateServiceRequest {
  /**
   * @schema ServiceDiscoveryUpdateServiceRequest#Id
   */
  readonly id: string;

  /**
   * @schema ServiceDiscoveryUpdateServiceRequest#Service
   */
  readonly service: ServiceDiscoveryServiceChange;

}

/**
 * @schema ServiceDiscoveryUpdateServiceResponse
 */
export interface ServiceDiscoveryUpdateServiceResponse {
  /**
   * @schema ServiceDiscoveryUpdateServiceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema ServiceDiscoveryTag
 */
export interface ServiceDiscoveryTag {
  /**
   * @schema ServiceDiscoveryTag#Key
   */
  readonly key: string;

  /**
   * @schema ServiceDiscoveryTag#Value
   */
  readonly value: string;

}

/**
 * @schema ServiceDiscoveryDnsConfig
 */
export interface ServiceDiscoveryDnsConfig {
  /**
   * @schema ServiceDiscoveryDnsConfig#NamespaceId
   */
  readonly namespaceId?: string;

  /**
   * @schema ServiceDiscoveryDnsConfig#RoutingPolicy
   */
  readonly routingPolicy?: string;

  /**
   * @schema ServiceDiscoveryDnsConfig#DnsRecords
   */
  readonly dnsRecords: ServiceDiscoveryDnsRecord[];

}

/**
 * @schema ServiceDiscoveryHealthCheckConfig
 */
export interface ServiceDiscoveryHealthCheckConfig {
  /**
   * @schema ServiceDiscoveryHealthCheckConfig#Type
   */
  readonly type: string;

  /**
   * @schema ServiceDiscoveryHealthCheckConfig#ResourcePath
   */
  readonly resourcePath?: string;

  /**
   * @schema ServiceDiscoveryHealthCheckConfig#FailureThreshold
   */
  readonly failureThreshold?: number;

}

/**
 * @schema ServiceDiscoveryHealthCheckCustomConfig
 */
export interface ServiceDiscoveryHealthCheckCustomConfig {
  /**
   * @schema ServiceDiscoveryHealthCheckCustomConfig#FailureThreshold
   */
  readonly failureThreshold?: number;

}

/**
 * @schema ServiceDiscoveryService
 */
export interface ServiceDiscoveryService {
  /**
   * @schema ServiceDiscoveryService#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryService#Arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceDiscoveryService#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceDiscoveryService#NamespaceId
   */
  readonly namespaceId?: string;

  /**
   * @schema ServiceDiscoveryService#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryService#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema ServiceDiscoveryService#DnsConfig
   */
  readonly dnsConfig?: ServiceDiscoveryDnsConfig;

  /**
   * @schema ServiceDiscoveryService#HealthCheckConfig
   */
  readonly healthCheckConfig?: ServiceDiscoveryHealthCheckConfig;

  /**
   * @schema ServiceDiscoveryService#HealthCheckCustomConfig
   */
  readonly healthCheckCustomConfig?: ServiceDiscoveryHealthCheckCustomConfig;

  /**
   * @schema ServiceDiscoveryService#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema ServiceDiscoveryService#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * @schema ServiceDiscoveryHttpInstanceSummary
 */
export interface ServiceDiscoveryHttpInstanceSummary {
  /**
   * @schema ServiceDiscoveryHttpInstanceSummary#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ServiceDiscoveryHttpInstanceSummary#NamespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema ServiceDiscoveryHttpInstanceSummary#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema ServiceDiscoveryHttpInstanceSummary#HealthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema ServiceDiscoveryHttpInstanceSummary#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema ServiceDiscoveryInstance
 */
export interface ServiceDiscoveryInstance {
  /**
   * @schema ServiceDiscoveryInstance#Id
   */
  readonly id: string;

  /**
   * @schema ServiceDiscoveryInstance#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ServiceDiscoveryInstance#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema ServiceDiscoveryNamespace
 */
export interface ServiceDiscoveryNamespace {
  /**
   * @schema ServiceDiscoveryNamespace#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryNamespace#Arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceDiscoveryNamespace#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceDiscoveryNamespace#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceDiscoveryNamespace#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryNamespace#ServiceCount
   */
  readonly serviceCount?: number;

  /**
   * @schema ServiceDiscoveryNamespace#Properties
   */
  readonly properties?: ServiceDiscoveryNamespaceProperties;

  /**
   * @schema ServiceDiscoveryNamespace#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema ServiceDiscoveryNamespace#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * @schema ServiceDiscoveryOperation
 */
export interface ServiceDiscoveryOperation {
  /**
   * @schema ServiceDiscoveryOperation#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryOperation#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceDiscoveryOperation#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceDiscoveryOperation#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema ServiceDiscoveryOperation#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ServiceDiscoveryOperation#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema ServiceDiscoveryOperation#UpdateDate
   */
  readonly updateDate?: string;

  /**
   * @schema ServiceDiscoveryOperation#Targets
   */
  readonly targets?: { [key: string]: string };

}

/**
 * @schema ServiceDiscoveryInstanceSummary
 */
export interface ServiceDiscoveryInstanceSummary {
  /**
   * @schema ServiceDiscoveryInstanceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryInstanceSummary#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema ServiceDiscoveryNamespaceFilter
 */
export interface ServiceDiscoveryNamespaceFilter {
  /**
   * @schema ServiceDiscoveryNamespaceFilter#Name
   */
  readonly name: string;

  /**
   * @schema ServiceDiscoveryNamespaceFilter#Values
   */
  readonly values: string[];

  /**
   * @schema ServiceDiscoveryNamespaceFilter#Condition
   */
  readonly condition?: string;

}

/**
 * @schema ServiceDiscoveryNamespaceSummary
 */
export interface ServiceDiscoveryNamespaceSummary {
  /**
   * @schema ServiceDiscoveryNamespaceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryNamespaceSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceDiscoveryNamespaceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceDiscoveryNamespaceSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceDiscoveryNamespaceSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryNamespaceSummary#ServiceCount
   */
  readonly serviceCount?: number;

  /**
   * @schema ServiceDiscoveryNamespaceSummary#Properties
   */
  readonly properties?: ServiceDiscoveryNamespaceProperties;

  /**
   * @schema ServiceDiscoveryNamespaceSummary#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema ServiceDiscoveryOperationFilter
 */
export interface ServiceDiscoveryOperationFilter {
  /**
   * @schema ServiceDiscoveryOperationFilter#Name
   */
  readonly name: string;

  /**
   * @schema ServiceDiscoveryOperationFilter#Values
   */
  readonly values: string[];

  /**
   * @schema ServiceDiscoveryOperationFilter#Condition
   */
  readonly condition?: string;

}

/**
 * @schema ServiceDiscoveryOperationSummary
 */
export interface ServiceDiscoveryOperationSummary {
  /**
   * @schema ServiceDiscoveryOperationSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryOperationSummary#Status
   */
  readonly status?: string;

}

/**
 * @schema ServiceDiscoveryServiceFilter
 */
export interface ServiceDiscoveryServiceFilter {
  /**
   * @schema ServiceDiscoveryServiceFilter#Name
   */
  readonly name: string;

  /**
   * @schema ServiceDiscoveryServiceFilter#Values
   */
  readonly values: string[];

  /**
   * @schema ServiceDiscoveryServiceFilter#Condition
   */
  readonly condition?: string;

}

/**
 * @schema ServiceDiscoveryServiceSummary
 */
export interface ServiceDiscoveryServiceSummary {
  /**
   * @schema ServiceDiscoveryServiceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryServiceSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceDiscoveryServiceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceDiscoveryServiceSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryServiceSummary#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema ServiceDiscoveryServiceSummary#DnsConfig
   */
  readonly dnsConfig?: ServiceDiscoveryDnsConfig;

  /**
   * @schema ServiceDiscoveryServiceSummary#HealthCheckConfig
   */
  readonly healthCheckConfig?: ServiceDiscoveryHealthCheckConfig;

  /**
   * @schema ServiceDiscoveryServiceSummary#HealthCheckCustomConfig
   */
  readonly healthCheckCustomConfig?: ServiceDiscoveryHealthCheckCustomConfig;

  /**
   * @schema ServiceDiscoveryServiceSummary#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema ServiceDiscoveryServiceChange
 */
export interface ServiceDiscoveryServiceChange {
  /**
   * @schema ServiceDiscoveryServiceChange#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryServiceChange#DnsConfig
   */
  readonly dnsConfig?: ServiceDiscoveryDnsConfigChange;

  /**
   * @schema ServiceDiscoveryServiceChange#HealthCheckConfig
   */
  readonly healthCheckConfig?: ServiceDiscoveryHealthCheckConfig;

}

/**
 * @schema ServiceDiscoveryDnsRecord
 */
export interface ServiceDiscoveryDnsRecord {
  /**
   * @schema ServiceDiscoveryDnsRecord#Type
   */
  readonly type: string;

  /**
   * @schema ServiceDiscoveryDnsRecord#TTL
   */
  readonly ttl: number;

}

/**
 * @schema ServiceDiscoveryNamespaceProperties
 */
export interface ServiceDiscoveryNamespaceProperties {
  /**
   * @schema ServiceDiscoveryNamespaceProperties#DnsProperties
   */
  readonly dnsProperties?: ServiceDiscoveryDnsProperties;

  /**
   * @schema ServiceDiscoveryNamespaceProperties#HttpProperties
   */
  readonly httpProperties?: ServiceDiscoveryHttpProperties;

}

/**
 * @schema ServiceDiscoveryDnsConfigChange
 */
export interface ServiceDiscoveryDnsConfigChange {
  /**
   * @schema ServiceDiscoveryDnsConfigChange#DnsRecords
   */
  readonly dnsRecords: ServiceDiscoveryDnsRecord[];

}

/**
 * @schema ServiceDiscoveryDnsProperties
 */
export interface ServiceDiscoveryDnsProperties {
  /**
   * @schema ServiceDiscoveryDnsProperties#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema ServiceDiscoveryHttpProperties
 */
export interface ServiceDiscoveryHttpProperties {
  /**
   * @schema ServiceDiscoveryHttpProperties#HttpName
   */
  readonly httpName?: string;

}
