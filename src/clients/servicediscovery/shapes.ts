/**
 * @schema CreateHttpNamespaceRequest
 */
export interface CreateHttpNamespaceRequest {
  /**
   * @schema CreateHttpNamespaceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateHttpNamespaceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema CreateHttpNamespaceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateHttpNamespaceRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateHttpNamespaceResponse
 */
export interface CreateHttpNamespaceResponse {
  /**
   * @schema CreateHttpNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema CreatePrivateDnsNamespaceRequest
 */
export interface CreatePrivateDnsNamespaceRequest {
  /**
   * @schema CreatePrivateDnsNamespaceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreatePrivateDnsNamespaceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema CreatePrivateDnsNamespaceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreatePrivateDnsNamespaceRequest#Vpc
   */
  readonly vpc: string;

  /**
   * @schema CreatePrivateDnsNamespaceRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePrivateDnsNamespaceResponse
 */
export interface CreatePrivateDnsNamespaceResponse {
  /**
   * @schema CreatePrivateDnsNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema CreatePublicDnsNamespaceRequest
 */
export interface CreatePublicDnsNamespaceRequest {
  /**
   * @schema CreatePublicDnsNamespaceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreatePublicDnsNamespaceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema CreatePublicDnsNamespaceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreatePublicDnsNamespaceRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePublicDnsNamespaceResponse
 */
export interface CreatePublicDnsNamespaceResponse {
  /**
   * @schema CreatePublicDnsNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema CreateServiceRequest
 */
export interface CreateServiceRequest {
  /**
   * @schema CreateServiceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateServiceRequest#NamespaceId
   */
  readonly namespaceId?: string;

  /**
   * @schema CreateServiceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema CreateServiceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateServiceRequest#DnsConfig
   */
  readonly dnsConfig?: DnsConfig;

  /**
   * @schema CreateServiceRequest#HealthCheckConfig
   */
  readonly healthCheckConfig?: HealthCheckConfig;

  /**
   * @schema CreateServiceRequest#HealthCheckCustomConfig
   */
  readonly healthCheckCustomConfig?: HealthCheckCustomConfig;

  /**
   * @schema CreateServiceRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateServiceResponse
 */
export interface CreateServiceResponse {
  /**
   * @schema CreateServiceResponse#Service
   */
  readonly service?: Service;

}

/**
 * @schema DeleteNamespaceRequest
 */
export interface DeleteNamespaceRequest {
  /**
   * @schema DeleteNamespaceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteNamespaceResponse
 */
export interface DeleteNamespaceResponse {
  /**
   * @schema DeleteNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema DeleteServiceRequest
 */
export interface DeleteServiceRequest {
  /**
   * @schema DeleteServiceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteServiceResponse
 */
export interface DeleteServiceResponse {
}

/**
 * @schema DeregisterInstanceRequest
 */
export interface DeregisterInstanceRequest {
  /**
   * @schema DeregisterInstanceRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema DeregisterInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema DeregisterInstanceResponse
 */
export interface DeregisterInstanceResponse {
  /**
   * @schema DeregisterInstanceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema DiscoverInstancesRequest
 */
export interface DiscoverInstancesRequest {
  /**
   * @schema DiscoverInstancesRequest#NamespaceName
   */
  readonly namespaceName: string;

  /**
   * @schema DiscoverInstancesRequest#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema DiscoverInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoverInstancesRequest#QueryParameters
   */
  readonly queryParameters?: { [key: string]: string };

  /**
   * @schema DiscoverInstancesRequest#OptionalParameters
   */
  readonly optionalParameters?: { [key: string]: string };

  /**
   * @schema DiscoverInstancesRequest#HealthStatus
   */
  readonly healthStatus?: string;

}

/**
 * @schema DiscoverInstancesResponse
 */
export interface DiscoverInstancesResponse {
  /**
   * @schema DiscoverInstancesResponse#Instances
   */
  readonly instances?: HttpInstanceSummary[];

}

/**
 * @schema GetInstanceRequest
 */
export interface GetInstanceRequest {
  /**
   * @schema GetInstanceRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema GetInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema GetInstanceResponse
 */
export interface GetInstanceResponse {
  /**
   * @schema GetInstanceResponse#Instance
   */
  readonly instance?: Instance;

}

/**
 * @schema GetInstancesHealthStatusRequest
 */
export interface GetInstancesHealthStatusRequest {
  /**
   * @schema GetInstancesHealthStatusRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema GetInstancesHealthStatusRequest#Instances
   */
  readonly instances?: string[];

  /**
   * @schema GetInstancesHealthStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetInstancesHealthStatusRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInstancesHealthStatusResponse
 */
export interface GetInstancesHealthStatusResponse {
  /**
   * @schema GetInstancesHealthStatusResponse#Status
   */
  readonly status?: { [key: string]: string };

  /**
   * @schema GetInstancesHealthStatusResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetNamespaceRequest
 */
export interface GetNamespaceRequest {
  /**
   * @schema GetNamespaceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetNamespaceResponse
 */
export interface GetNamespaceResponse {
  /**
   * @schema GetNamespaceResponse#Namespace
   */
  readonly namespace?: Namespace;

}

/**
 * @schema GetOperationRequest
 */
export interface GetOperationRequest {
  /**
   * @schema GetOperationRequest#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema GetOperationResponse
 */
export interface GetOperationResponse {
  /**
   * @schema GetOperationResponse#Operation
   */
  readonly operation?: Operation;

}

/**
 * @schema GetServiceRequest
 */
export interface GetServiceRequest {
  /**
   * @schema GetServiceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetServiceResponse
 */
export interface GetServiceResponse {
  /**
   * @schema GetServiceResponse#Service
   */
  readonly service?: Service;

}

/**
 * @schema ListInstancesRequest
 */
export interface ListInstancesRequest {
  /**
   * @schema ListInstancesRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema ListInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListInstancesResponse
 */
export interface ListInstancesResponse {
  /**
   * @schema ListInstancesResponse#Instances
   */
  readonly instances?: InstanceSummary[];

  /**
   * @schema ListInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNamespacesRequest
 */
export interface ListNamespacesRequest {
  /**
   * @schema ListNamespacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNamespacesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListNamespacesRequest#Filters
   */
  readonly filters?: NamespaceFilter[];

}

/**
 * @schema ListNamespacesResponse
 */
export interface ListNamespacesResponse {
  /**
   * @schema ListNamespacesResponse#Namespaces
   */
  readonly namespaces?: NamespaceSummary[];

  /**
   * @schema ListNamespacesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOperationsRequest
 */
export interface ListOperationsRequest {
  /**
   * @schema ListOperationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListOperationsRequest#Filters
   */
  readonly filters?: OperationFilter[];

}

/**
 * @schema ListOperationsResponse
 */
export interface ListOperationsResponse {
  /**
   * @schema ListOperationsResponse#Operations
   */
  readonly operations?: OperationSummary[];

  /**
   * @schema ListOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListServicesRequest
 */
export interface ListServicesRequest {
  /**
   * @schema ListServicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListServicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListServicesRequest#Filters
   */
  readonly filters?: ServiceFilter[];

}

/**
 * @schema ListServicesResponse
 */
export interface ListServicesResponse {
  /**
   * @schema ListServicesResponse#Services
   */
  readonly services?: ServiceSummary[];

  /**
   * @schema ListServicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema RegisterInstanceRequest
 */
export interface RegisterInstanceRequest {
  /**
   * @schema RegisterInstanceRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema RegisterInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema RegisterInstanceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema RegisterInstanceRequest#Attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * @schema RegisterInstanceResponse
 */
export interface RegisterInstanceResponse {
  /**
   * @schema RegisterInstanceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
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
   * @schema UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateInstanceCustomHealthStatusRequest
 */
export interface UpdateInstanceCustomHealthStatusRequest {
  /**
   * @schema UpdateInstanceCustomHealthStatusRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema UpdateInstanceCustomHealthStatusRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateInstanceCustomHealthStatusRequest#Status
   */
  readonly status: string;

}

/**
 * @schema UpdateServiceRequest
 */
export interface UpdateServiceRequest {
  /**
   * @schema UpdateServiceRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateServiceRequest#Service
   */
  readonly service: ServiceChange;

}

/**
 * @schema UpdateServiceResponse
 */
export interface UpdateServiceResponse {
  /**
   * @schema UpdateServiceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema DnsConfig
 */
export interface DnsConfig {
  /**
   * @schema DnsConfig#NamespaceId
   */
  readonly namespaceId?: string;

  /**
   * @schema DnsConfig#RoutingPolicy
   */
  readonly routingPolicy?: string;

  /**
   * @schema DnsConfig#DnsRecords
   */
  readonly dnsRecords: DnsRecord[];

}

/**
 * @schema HealthCheckConfig
 */
export interface HealthCheckConfig {
  /**
   * @schema HealthCheckConfig#Type
   */
  readonly type: string;

  /**
   * @schema HealthCheckConfig#ResourcePath
   */
  readonly resourcePath?: string;

  /**
   * @schema HealthCheckConfig#FailureThreshold
   */
  readonly failureThreshold?: number;

}

/**
 * @schema HealthCheckCustomConfig
 */
export interface HealthCheckCustomConfig {
  /**
   * @schema HealthCheckCustomConfig#FailureThreshold
   */
  readonly failureThreshold?: number;

}

/**
 * @schema Service
 */
export interface Service {
  /**
   * @schema Service#Id
   */
  readonly id?: string;

  /**
   * @schema Service#Arn
   */
  readonly arn?: string;

  /**
   * @schema Service#Name
   */
  readonly name?: string;

  /**
   * @schema Service#NamespaceId
   */
  readonly namespaceId?: string;

  /**
   * @schema Service#Description
   */
  readonly description?: string;

  /**
   * @schema Service#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Service#DnsConfig
   */
  readonly dnsConfig?: DnsConfig;

  /**
   * @schema Service#HealthCheckConfig
   */
  readonly healthCheckConfig?: HealthCheckConfig;

  /**
   * @schema Service#HealthCheckCustomConfig
   */
  readonly healthCheckCustomConfig?: HealthCheckCustomConfig;

  /**
   * @schema Service#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Service#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * @schema HttpInstanceSummary
 */
export interface HttpInstanceSummary {
  /**
   * @schema HttpInstanceSummary#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema HttpInstanceSummary#NamespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema HttpInstanceSummary#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema HttpInstanceSummary#HealthStatus
   */
  readonly healthStatus?: string;

  /**
   * @schema HttpInstanceSummary#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema Instance
 */
export interface Instance {
  /**
   * @schema Instance#Id
   */
  readonly id: string;

  /**
   * @schema Instance#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema Instance#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema Namespace
 */
export interface Namespace {
  /**
   * @schema Namespace#Id
   */
  readonly id?: string;

  /**
   * @schema Namespace#Arn
   */
  readonly arn?: string;

  /**
   * @schema Namespace#Name
   */
  readonly name?: string;

  /**
   * @schema Namespace#Type
   */
  readonly type?: string;

  /**
   * @schema Namespace#Description
   */
  readonly description?: string;

  /**
   * @schema Namespace#ServiceCount
   */
  readonly serviceCount?: number;

  /**
   * @schema Namespace#Properties
   */
  readonly properties?: NamespaceProperties;

  /**
   * @schema Namespace#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Namespace#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * @schema Operation
 */
export interface Operation {
  /**
   * @schema Operation#Id
   */
  readonly id?: string;

  /**
   * @schema Operation#Type
   */
  readonly type?: string;

  /**
   * @schema Operation#Status
   */
  readonly status?: string;

  /**
   * @schema Operation#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema Operation#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema Operation#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Operation#UpdateDate
   */
  readonly updateDate?: string;

  /**
   * @schema Operation#Targets
   */
  readonly targets?: { [key: string]: string };

}

/**
 * @schema InstanceSummary
 */
export interface InstanceSummary {
  /**
   * @schema InstanceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema InstanceSummary#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema NamespaceFilter
 */
export interface NamespaceFilter {
  /**
   * @schema NamespaceFilter#Name
   */
  readonly name: string;

  /**
   * @schema NamespaceFilter#Values
   */
  readonly values: string[];

  /**
   * @schema NamespaceFilter#Condition
   */
  readonly condition?: string;

}

/**
 * @schema NamespaceSummary
 */
export interface NamespaceSummary {
  /**
   * @schema NamespaceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema NamespaceSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema NamespaceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema NamespaceSummary#Type
   */
  readonly type?: string;

  /**
   * @schema NamespaceSummary#Description
   */
  readonly description?: string;

  /**
   * @schema NamespaceSummary#ServiceCount
   */
  readonly serviceCount?: number;

  /**
   * @schema NamespaceSummary#Properties
   */
  readonly properties?: NamespaceProperties;

  /**
   * @schema NamespaceSummary#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema OperationFilter
 */
export interface OperationFilter {
  /**
   * @schema OperationFilter#Name
   */
  readonly name: string;

  /**
   * @schema OperationFilter#Values
   */
  readonly values: string[];

  /**
   * @schema OperationFilter#Condition
   */
  readonly condition?: string;

}

/**
 * @schema OperationSummary
 */
export interface OperationSummary {
  /**
   * @schema OperationSummary#Id
   */
  readonly id?: string;

  /**
   * @schema OperationSummary#Status
   */
  readonly status?: string;

}

/**
 * @schema ServiceFilter
 */
export interface ServiceFilter {
  /**
   * @schema ServiceFilter#Name
   */
  readonly name: string;

  /**
   * @schema ServiceFilter#Values
   */
  readonly values: string[];

  /**
   * @schema ServiceFilter#Condition
   */
  readonly condition?: string;

}

/**
 * @schema ServiceSummary
 */
export interface ServiceSummary {
  /**
   * @schema ServiceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceSummary#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema ServiceSummary#DnsConfig
   */
  readonly dnsConfig?: DnsConfig;

  /**
   * @schema ServiceSummary#HealthCheckConfig
   */
  readonly healthCheckConfig?: HealthCheckConfig;

  /**
   * @schema ServiceSummary#HealthCheckCustomConfig
   */
  readonly healthCheckCustomConfig?: HealthCheckCustomConfig;

  /**
   * @schema ServiceSummary#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema ServiceChange
 */
export interface ServiceChange {
  /**
   * @schema ServiceChange#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceChange#DnsConfig
   */
  readonly dnsConfig?: DnsConfigChange;

  /**
   * @schema ServiceChange#HealthCheckConfig
   */
  readonly healthCheckConfig?: HealthCheckConfig;

}

/**
 * @schema DnsRecord
 */
export interface DnsRecord {
  /**
   * @schema DnsRecord#Type
   */
  readonly type: string;

  /**
   * @schema DnsRecord#TTL
   */
  readonly ttl: number;

}

/**
 * @schema NamespaceProperties
 */
export interface NamespaceProperties {
  /**
   * @schema NamespaceProperties#DnsProperties
   */
  readonly dnsProperties?: DnsProperties;

  /**
   * @schema NamespaceProperties#HttpProperties
   */
  readonly httpProperties?: HttpProperties;

}

/**
 * @schema DnsConfigChange
 */
export interface DnsConfigChange {
  /**
   * @schema DnsConfigChange#DnsRecords
   */
  readonly dnsRecords: DnsRecord[];

}

/**
 * @schema DnsProperties
 */
export interface DnsProperties {
  /**
   * @schema DnsProperties#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema HttpProperties
 */
export interface HttpProperties {
  /**
   * @schema HttpProperties#HttpName
   */
  readonly httpName?: string;

}
