/**
 * @schema ServiceDiscoveryCreateHttpNamespaceRequest
 */
export interface ServiceDiscoveryCreateHttpNamespaceRequest {
  /**
   * @schema ServiceDiscoveryCreateHttpNamespaceRequest#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'ServiceDiscoveryCreateHttpNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryCreateHttpNamespaceRequest(obj: ServiceDiscoveryCreateHttpNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreatorRequestId': obj.creatorRequestId,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_ServiceDiscoveryTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryCreateHttpNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryCreateHttpNamespaceResponse(obj: ServiceDiscoveryCreateHttpNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest
 */
export interface ServiceDiscoveryCreatePrivateDnsNamespaceRequest {
  /**
   * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest#Name
   */
  readonly name?: string;

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
  readonly vpc?: string;

  /**
   * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest#Tags
   */
  readonly tags?: ServiceDiscoveryTag[];

  /**
   * @schema ServiceDiscoveryCreatePrivateDnsNamespaceRequest#Properties
   */
  readonly properties?: ServiceDiscoveryPrivateDnsNamespaceProperties;

}

/**
 * Converts an object of type 'ServiceDiscoveryCreatePrivateDnsNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryCreatePrivateDnsNamespaceRequest(obj: ServiceDiscoveryCreatePrivateDnsNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreatorRequestId': obj.creatorRequestId,
    'Description': obj.description,
    'Vpc': obj.vpc,
    'Tags': obj.tags?.map(y => toJson_ServiceDiscoveryTag(y)),
    'Properties': toJson_ServiceDiscoveryPrivateDnsNamespaceProperties(obj.properties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryCreatePrivateDnsNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryCreatePrivateDnsNamespaceResponse(obj: ServiceDiscoveryCreatePrivateDnsNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryCreatePublicDnsNamespaceRequest
 */
export interface ServiceDiscoveryCreatePublicDnsNamespaceRequest {
  /**
   * @schema ServiceDiscoveryCreatePublicDnsNamespaceRequest#Name
   */
  readonly name?: string;

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

  /**
   * @schema ServiceDiscoveryCreatePublicDnsNamespaceRequest#Properties
   */
  readonly properties?: ServiceDiscoveryPublicDnsNamespaceProperties;

}

/**
 * Converts an object of type 'ServiceDiscoveryCreatePublicDnsNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryCreatePublicDnsNamespaceRequest(obj: ServiceDiscoveryCreatePublicDnsNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreatorRequestId': obj.creatorRequestId,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_ServiceDiscoveryTag(y)),
    'Properties': toJson_ServiceDiscoveryPublicDnsNamespaceProperties(obj.properties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryCreatePublicDnsNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryCreatePublicDnsNamespaceResponse(obj: ServiceDiscoveryCreatePublicDnsNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryCreateServiceRequest
 */
export interface ServiceDiscoveryCreateServiceRequest {
  /**
   * @schema ServiceDiscoveryCreateServiceRequest#Name
   */
  readonly name?: string;

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

  /**
   * @schema ServiceDiscoveryCreateServiceRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryCreateServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryCreateServiceRequest(obj: ServiceDiscoveryCreateServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'NamespaceId': obj.namespaceId,
    'CreatorRequestId': obj.creatorRequestId,
    'Description': obj.description,
    'DnsConfig': toJson_ServiceDiscoveryDnsConfig(obj.dnsConfig),
    'HealthCheckConfig': toJson_ServiceDiscoveryHealthCheckConfig(obj.healthCheckConfig),
    'HealthCheckCustomConfig': toJson_ServiceDiscoveryHealthCheckCustomConfig(obj.healthCheckCustomConfig),
    'Tags': obj.tags?.map(y => toJson_ServiceDiscoveryTag(y)),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryCreateServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryCreateServiceResponse(obj: ServiceDiscoveryCreateServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Service': toJson_ServiceDiscoveryService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryDeleteNamespaceRequest
 */
export interface ServiceDiscoveryDeleteNamespaceRequest {
  /**
   * @schema ServiceDiscoveryDeleteNamespaceRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryDeleteNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDeleteNamespaceRequest(obj: ServiceDiscoveryDeleteNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryDeleteNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDeleteNamespaceResponse(obj: ServiceDiscoveryDeleteNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryDeleteServiceRequest
 */
export interface ServiceDiscoveryDeleteServiceRequest {
  /**
   * @schema ServiceDiscoveryDeleteServiceRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryDeleteServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDeleteServiceRequest(obj: ServiceDiscoveryDeleteServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryDeleteServiceResponse
 */
export interface ServiceDiscoveryDeleteServiceResponse {
}

/**
 * Converts an object of type 'ServiceDiscoveryDeleteServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDeleteServiceResponse(obj: ServiceDiscoveryDeleteServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryDeregisterInstanceRequest
 */
export interface ServiceDiscoveryDeregisterInstanceRequest {
  /**
   * @schema ServiceDiscoveryDeregisterInstanceRequest#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema ServiceDiscoveryDeregisterInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryDeregisterInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDeregisterInstanceRequest(obj: ServiceDiscoveryDeregisterInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceId': obj.serviceId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryDeregisterInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDeregisterInstanceResponse(obj: ServiceDiscoveryDeregisterInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryDiscoverInstancesRequest
 */
export interface ServiceDiscoveryDiscoverInstancesRequest {
  /**
   * @schema ServiceDiscoveryDiscoverInstancesRequest#NamespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema ServiceDiscoveryDiscoverInstancesRequest#ServiceName
   */
  readonly serviceName?: string;

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
 * Converts an object of type 'ServiceDiscoveryDiscoverInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDiscoverInstancesRequest(obj: ServiceDiscoveryDiscoverInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamespaceName': obj.namespaceName,
    'ServiceName': obj.serviceName,
    'MaxResults': obj.maxResults,
    'QueryParameters': ((obj.queryParameters) === undefined) ? undefined : (Object.entries(obj.queryParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'OptionalParameters': ((obj.optionalParameters) === undefined) ? undefined : (Object.entries(obj.optionalParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'HealthStatus': obj.healthStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryDiscoverInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDiscoverInstancesResponse(obj: ServiceDiscoveryDiscoverInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Instances': obj.instances?.map(y => toJson_ServiceDiscoveryHttpInstanceSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryGetInstanceRequest
 */
export interface ServiceDiscoveryGetInstanceRequest {
  /**
   * @schema ServiceDiscoveryGetInstanceRequest#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema ServiceDiscoveryGetInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryGetInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetInstanceRequest(obj: ServiceDiscoveryGetInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceId': obj.serviceId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryGetInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetInstanceResponse(obj: ServiceDiscoveryGetInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Instance': toJson_ServiceDiscoveryInstance(obj.instance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryGetInstancesHealthStatusRequest
 */
export interface ServiceDiscoveryGetInstancesHealthStatusRequest {
  /**
   * @schema ServiceDiscoveryGetInstancesHealthStatusRequest#ServiceId
   */
  readonly serviceId?: string;

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
 * Converts an object of type 'ServiceDiscoveryGetInstancesHealthStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetInstancesHealthStatusRequest(obj: ServiceDiscoveryGetInstancesHealthStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceId': obj.serviceId,
    'Instances': obj.instances?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryGetInstancesHealthStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetInstancesHealthStatusResponse(obj: ServiceDiscoveryGetInstancesHealthStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': ((obj.status) === undefined) ? undefined : (Object.entries(obj.status).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryGetNamespaceRequest
 */
export interface ServiceDiscoveryGetNamespaceRequest {
  /**
   * @schema ServiceDiscoveryGetNamespaceRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryGetNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetNamespaceRequest(obj: ServiceDiscoveryGetNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryGetNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetNamespaceResponse(obj: ServiceDiscoveryGetNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Namespace': toJson_ServiceDiscoveryNamespace(obj.namespace),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryGetOperationRequest
 */
export interface ServiceDiscoveryGetOperationRequest {
  /**
   * @schema ServiceDiscoveryGetOperationRequest#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryGetOperationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetOperationRequest(obj: ServiceDiscoveryGetOperationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryGetOperationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetOperationResponse(obj: ServiceDiscoveryGetOperationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Operation': toJson_ServiceDiscoveryOperation(obj.operation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryGetServiceRequest
 */
export interface ServiceDiscoveryGetServiceRequest {
  /**
   * @schema ServiceDiscoveryGetServiceRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryGetServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetServiceRequest(obj: ServiceDiscoveryGetServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryGetServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryGetServiceResponse(obj: ServiceDiscoveryGetServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Service': toJson_ServiceDiscoveryService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryListInstancesRequest
 */
export interface ServiceDiscoveryListInstancesRequest {
  /**
   * @schema ServiceDiscoveryListInstancesRequest#ServiceId
   */
  readonly serviceId?: string;

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
 * Converts an object of type 'ServiceDiscoveryListInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListInstancesRequest(obj: ServiceDiscoveryListInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceId': obj.serviceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryListInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListInstancesResponse(obj: ServiceDiscoveryListInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Instances': obj.instances?.map(y => toJson_ServiceDiscoveryInstanceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryListNamespacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListNamespacesRequest(obj: ServiceDiscoveryListNamespacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_ServiceDiscoveryNamespaceFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryListNamespacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListNamespacesResponse(obj: ServiceDiscoveryListNamespacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Namespaces': obj.namespaces?.map(y => toJson_ServiceDiscoveryNamespaceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryListOperationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListOperationsRequest(obj: ServiceDiscoveryListOperationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_ServiceDiscoveryOperationFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryListOperationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListOperationsResponse(obj: ServiceDiscoveryListOperationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Operations': obj.operations?.map(y => toJson_ServiceDiscoveryOperationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryListServicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListServicesRequest(obj: ServiceDiscoveryListServicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_ServiceDiscoveryServiceFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryListServicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListServicesResponse(obj: ServiceDiscoveryListServicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Services': obj.services?.map(y => toJson_ServiceDiscoveryServiceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryListTagsForResourceRequest
 */
export interface ServiceDiscoveryListTagsForResourceRequest {
  /**
   * @schema ServiceDiscoveryListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListTagsForResourceRequest(obj: ServiceDiscoveryListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryListTagsForResourceResponse(obj: ServiceDiscoveryListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_ServiceDiscoveryTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryRegisterInstanceRequest
 */
export interface ServiceDiscoveryRegisterInstanceRequest {
  /**
   * @schema ServiceDiscoveryRegisterInstanceRequest#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema ServiceDiscoveryRegisterInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ServiceDiscoveryRegisterInstanceRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema ServiceDiscoveryRegisterInstanceRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'ServiceDiscoveryRegisterInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryRegisterInstanceRequest(obj: ServiceDiscoveryRegisterInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceId': obj.serviceId,
    'InstanceId': obj.instanceId,
    'CreatorRequestId': obj.creatorRequestId,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryRegisterInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryRegisterInstanceResponse(obj: ServiceDiscoveryRegisterInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryTagResourceRequest
 */
export interface ServiceDiscoveryTagResourceRequest {
  /**
   * @schema ServiceDiscoveryTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ServiceDiscoveryTagResourceRequest#Tags
   */
  readonly tags?: ServiceDiscoveryTag[];

}

/**
 * Converts an object of type 'ServiceDiscoveryTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryTagResourceRequest(obj: ServiceDiscoveryTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_ServiceDiscoveryTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryTagResourceResponse
 */
export interface ServiceDiscoveryTagResourceResponse {
}

/**
 * Converts an object of type 'ServiceDiscoveryTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryTagResourceResponse(obj: ServiceDiscoveryTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUntagResourceRequest
 */
export interface ServiceDiscoveryUntagResourceRequest {
  /**
   * @schema ServiceDiscoveryUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ServiceDiscoveryUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ServiceDiscoveryUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUntagResourceRequest(obj: ServiceDiscoveryUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUntagResourceResponse
 */
export interface ServiceDiscoveryUntagResourceResponse {
}

/**
 * Converts an object of type 'ServiceDiscoveryUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUntagResourceResponse(obj: ServiceDiscoveryUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUpdateHttpNamespaceRequest
 */
export interface ServiceDiscoveryUpdateHttpNamespaceRequest {
  /**
   * @schema ServiceDiscoveryUpdateHttpNamespaceRequest#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryUpdateHttpNamespaceRequest#UpdaterRequestId
   */
  readonly updaterRequestId?: string;

  /**
   * @schema ServiceDiscoveryUpdateHttpNamespaceRequest#Namespace
   */
  readonly namespace?: ServiceDiscoveryHttpNamespaceChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryUpdateHttpNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUpdateHttpNamespaceRequest(obj: ServiceDiscoveryUpdateHttpNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'UpdaterRequestId': obj.updaterRequestId,
    'Namespace': toJson_ServiceDiscoveryHttpNamespaceChange(obj.namespace),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUpdateHttpNamespaceResponse
 */
export interface ServiceDiscoveryUpdateHttpNamespaceResponse {
  /**
   * @schema ServiceDiscoveryUpdateHttpNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryUpdateHttpNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUpdateHttpNamespaceResponse(obj: ServiceDiscoveryUpdateHttpNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest
 */
export interface ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest {
  /**
   * @schema ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest(obj: ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceId': obj.serviceId,
    'InstanceId': obj.instanceId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUpdatePrivateDnsNamespaceRequest
 */
export interface ServiceDiscoveryUpdatePrivateDnsNamespaceRequest {
  /**
   * @schema ServiceDiscoveryUpdatePrivateDnsNamespaceRequest#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryUpdatePrivateDnsNamespaceRequest#UpdaterRequestId
   */
  readonly updaterRequestId?: string;

  /**
   * @schema ServiceDiscoveryUpdatePrivateDnsNamespaceRequest#Namespace
   */
  readonly namespace?: ServiceDiscoveryPrivateDnsNamespaceChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryUpdatePrivateDnsNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUpdatePrivateDnsNamespaceRequest(obj: ServiceDiscoveryUpdatePrivateDnsNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'UpdaterRequestId': obj.updaterRequestId,
    'Namespace': toJson_ServiceDiscoveryPrivateDnsNamespaceChange(obj.namespace),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUpdatePrivateDnsNamespaceResponse
 */
export interface ServiceDiscoveryUpdatePrivateDnsNamespaceResponse {
  /**
   * @schema ServiceDiscoveryUpdatePrivateDnsNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryUpdatePrivateDnsNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUpdatePrivateDnsNamespaceResponse(obj: ServiceDiscoveryUpdatePrivateDnsNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUpdatePublicDnsNamespaceRequest
 */
export interface ServiceDiscoveryUpdatePublicDnsNamespaceRequest {
  /**
   * @schema ServiceDiscoveryUpdatePublicDnsNamespaceRequest#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryUpdatePublicDnsNamespaceRequest#UpdaterRequestId
   */
  readonly updaterRequestId?: string;

  /**
   * @schema ServiceDiscoveryUpdatePublicDnsNamespaceRequest#Namespace
   */
  readonly namespace?: ServiceDiscoveryPublicDnsNamespaceChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryUpdatePublicDnsNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUpdatePublicDnsNamespaceRequest(obj: ServiceDiscoveryUpdatePublicDnsNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'UpdaterRequestId': obj.updaterRequestId,
    'Namespace': toJson_ServiceDiscoveryPublicDnsNamespaceChange(obj.namespace),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUpdatePublicDnsNamespaceResponse
 */
export interface ServiceDiscoveryUpdatePublicDnsNamespaceResponse {
  /**
   * @schema ServiceDiscoveryUpdatePublicDnsNamespaceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryUpdatePublicDnsNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUpdatePublicDnsNamespaceResponse(obj: ServiceDiscoveryUpdatePublicDnsNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryUpdateServiceRequest
 */
export interface ServiceDiscoveryUpdateServiceRequest {
  /**
   * @schema ServiceDiscoveryUpdateServiceRequest#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceDiscoveryUpdateServiceRequest#Service
   */
  readonly service?: ServiceDiscoveryServiceChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryUpdateServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUpdateServiceRequest(obj: ServiceDiscoveryUpdateServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Service': toJson_ServiceDiscoveryServiceChange(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryUpdateServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryUpdateServiceResponse(obj: ServiceDiscoveryUpdateServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryTag
 */
export interface ServiceDiscoveryTag {
  /**
   * @schema ServiceDiscoveryTag#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceDiscoveryTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryTag(obj: ServiceDiscoveryTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPrivateDnsNamespaceProperties
 */
export interface ServiceDiscoveryPrivateDnsNamespaceProperties {
  /**
   * @schema ServiceDiscoveryPrivateDnsNamespaceProperties#DnsProperties
   */
  readonly dnsProperties?: ServiceDiscoveryPrivateDnsPropertiesMutable;

}

/**
 * Converts an object of type 'ServiceDiscoveryPrivateDnsNamespaceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPrivateDnsNamespaceProperties(obj: ServiceDiscoveryPrivateDnsNamespaceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DnsProperties': toJson_ServiceDiscoveryPrivateDnsPropertiesMutable(obj.dnsProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPublicDnsNamespaceProperties
 */
export interface ServiceDiscoveryPublicDnsNamespaceProperties {
  /**
   * @schema ServiceDiscoveryPublicDnsNamespaceProperties#DnsProperties
   */
  readonly dnsProperties?: ServiceDiscoveryPublicDnsPropertiesMutable;

}

/**
 * Converts an object of type 'ServiceDiscoveryPublicDnsNamespaceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPublicDnsNamespaceProperties(obj: ServiceDiscoveryPublicDnsNamespaceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DnsProperties': toJson_ServiceDiscoveryPublicDnsPropertiesMutable(obj.dnsProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly dnsRecords?: ServiceDiscoveryDnsRecord[];

}

/**
 * Converts an object of type 'ServiceDiscoveryDnsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDnsConfig(obj: ServiceDiscoveryDnsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamespaceId': obj.namespaceId,
    'RoutingPolicy': obj.routingPolicy,
    'DnsRecords': obj.dnsRecords?.map(y => toJson_ServiceDiscoveryDnsRecord(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryHealthCheckConfig
 */
export interface ServiceDiscoveryHealthCheckConfig {
  /**
   * @schema ServiceDiscoveryHealthCheckConfig#Type
   */
  readonly type?: string;

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
 * Converts an object of type 'ServiceDiscoveryHealthCheckConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryHealthCheckConfig(obj: ServiceDiscoveryHealthCheckConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'ResourcePath': obj.resourcePath,
    'FailureThreshold': obj.failureThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryHealthCheckCustomConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryHealthCheckCustomConfig(obj: ServiceDiscoveryHealthCheckCustomConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailureThreshold': obj.failureThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema ServiceDiscoveryService#Type
   */
  readonly type?: string;

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
 * Converts an object of type 'ServiceDiscoveryService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryService(obj: ServiceDiscoveryService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'NamespaceId': obj.namespaceId,
    'Description': obj.description,
    'InstanceCount': obj.instanceCount,
    'DnsConfig': toJson_ServiceDiscoveryDnsConfig(obj.dnsConfig),
    'Type': obj.type,
    'HealthCheckConfig': toJson_ServiceDiscoveryHealthCheckConfig(obj.healthCheckConfig),
    'HealthCheckCustomConfig': toJson_ServiceDiscoveryHealthCheckCustomConfig(obj.healthCheckCustomConfig),
    'CreateDate': obj.createDate,
    'CreatorRequestId': obj.creatorRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryHttpInstanceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryHttpInstanceSummary(obj: ServiceDiscoveryHttpInstanceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NamespaceName': obj.namespaceName,
    'ServiceName': obj.serviceName,
    'HealthStatus': obj.healthStatus,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryInstance
 */
export interface ServiceDiscoveryInstance {
  /**
   * @schema ServiceDiscoveryInstance#Id
   */
  readonly id?: string;

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
 * Converts an object of type 'ServiceDiscoveryInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryInstance(obj: ServiceDiscoveryInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'CreatorRequestId': obj.creatorRequestId,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryNamespace' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryNamespace(obj: ServiceDiscoveryNamespace | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'Type': obj.type,
    'Description': obj.description,
    'ServiceCount': obj.serviceCount,
    'Properties': toJson_ServiceDiscoveryNamespaceProperties(obj.properties),
    'CreateDate': obj.createDate,
    'CreatorRequestId': obj.creatorRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryOperation(obj: ServiceDiscoveryOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Type': obj.type,
    'Status': obj.status,
    'ErrorMessage': obj.errorMessage,
    'ErrorCode': obj.errorCode,
    'CreateDate': obj.createDate,
    'UpdateDate': obj.updateDate,
    'Targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryInstanceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryInstanceSummary(obj: ServiceDiscoveryInstanceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryNamespaceFilter
 */
export interface ServiceDiscoveryNamespaceFilter {
  /**
   * @schema ServiceDiscoveryNamespaceFilter#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceDiscoveryNamespaceFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema ServiceDiscoveryNamespaceFilter#Condition
   */
  readonly condition?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryNamespaceFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryNamespaceFilter(obj: ServiceDiscoveryNamespaceFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
    'Condition': obj.condition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryNamespaceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryNamespaceSummary(obj: ServiceDiscoveryNamespaceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'Type': obj.type,
    'Description': obj.description,
    'ServiceCount': obj.serviceCount,
    'Properties': toJson_ServiceDiscoveryNamespaceProperties(obj.properties),
    'CreateDate': obj.createDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryOperationFilter
 */
export interface ServiceDiscoveryOperationFilter {
  /**
   * @schema ServiceDiscoveryOperationFilter#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceDiscoveryOperationFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema ServiceDiscoveryOperationFilter#Condition
   */
  readonly condition?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryOperationFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryOperationFilter(obj: ServiceDiscoveryOperationFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
    'Condition': obj.condition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryOperationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryOperationSummary(obj: ServiceDiscoveryOperationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryServiceFilter
 */
export interface ServiceDiscoveryServiceFilter {
  /**
   * @schema ServiceDiscoveryServiceFilter#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceDiscoveryServiceFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema ServiceDiscoveryServiceFilter#Condition
   */
  readonly condition?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryServiceFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryServiceFilter(obj: ServiceDiscoveryServiceFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
    'Condition': obj.condition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema ServiceDiscoveryServiceSummary#Type
   */
  readonly type?: string;

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
 * Converts an object of type 'ServiceDiscoveryServiceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryServiceSummary(obj: ServiceDiscoveryServiceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'Type': obj.type,
    'Description': obj.description,
    'InstanceCount': obj.instanceCount,
    'DnsConfig': toJson_ServiceDiscoveryDnsConfig(obj.dnsConfig),
    'HealthCheckConfig': toJson_ServiceDiscoveryHealthCheckConfig(obj.healthCheckConfig),
    'HealthCheckCustomConfig': toJson_ServiceDiscoveryHealthCheckCustomConfig(obj.healthCheckCustomConfig),
    'CreateDate': obj.createDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryHttpNamespaceChange
 */
export interface ServiceDiscoveryHttpNamespaceChange {
  /**
   * @schema ServiceDiscoveryHttpNamespaceChange#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryHttpNamespaceChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryHttpNamespaceChange(obj: ServiceDiscoveryHttpNamespaceChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPrivateDnsNamespaceChange
 */
export interface ServiceDiscoveryPrivateDnsNamespaceChange {
  /**
   * @schema ServiceDiscoveryPrivateDnsNamespaceChange#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryPrivateDnsNamespaceChange#Properties
   */
  readonly properties?: ServiceDiscoveryPrivateDnsNamespacePropertiesChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryPrivateDnsNamespaceChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPrivateDnsNamespaceChange(obj: ServiceDiscoveryPrivateDnsNamespaceChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Properties': toJson_ServiceDiscoveryPrivateDnsNamespacePropertiesChange(obj.properties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPublicDnsNamespaceChange
 */
export interface ServiceDiscoveryPublicDnsNamespaceChange {
  /**
   * @schema ServiceDiscoveryPublicDnsNamespaceChange#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceDiscoveryPublicDnsNamespaceChange#Properties
   */
  readonly properties?: ServiceDiscoveryPublicDnsNamespacePropertiesChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryPublicDnsNamespaceChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPublicDnsNamespaceChange(obj: ServiceDiscoveryPublicDnsNamespaceChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Properties': toJson_ServiceDiscoveryPublicDnsNamespacePropertiesChange(obj.properties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryServiceChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryServiceChange(obj: ServiceDiscoveryServiceChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'DnsConfig': toJson_ServiceDiscoveryDnsConfigChange(obj.dnsConfig),
    'HealthCheckConfig': toJson_ServiceDiscoveryHealthCheckConfig(obj.healthCheckConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPrivateDnsPropertiesMutable
 */
export interface ServiceDiscoveryPrivateDnsPropertiesMutable {
  /**
   * @schema ServiceDiscoveryPrivateDnsPropertiesMutable#SOA
   */
  readonly soa?: ServiceDiscoverySoa;

}

/**
 * Converts an object of type 'ServiceDiscoveryPrivateDnsPropertiesMutable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPrivateDnsPropertiesMutable(obj: ServiceDiscoveryPrivateDnsPropertiesMutable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SOA': toJson_ServiceDiscoverySoa(obj.soa),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPublicDnsPropertiesMutable
 */
export interface ServiceDiscoveryPublicDnsPropertiesMutable {
  /**
   * @schema ServiceDiscoveryPublicDnsPropertiesMutable#SOA
   */
  readonly soa?: ServiceDiscoverySoa;

}

/**
 * Converts an object of type 'ServiceDiscoveryPublicDnsPropertiesMutable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPublicDnsPropertiesMutable(obj: ServiceDiscoveryPublicDnsPropertiesMutable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SOA': toJson_ServiceDiscoverySoa(obj.soa),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryDnsRecord
 */
export interface ServiceDiscoveryDnsRecord {
  /**
   * @schema ServiceDiscoveryDnsRecord#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceDiscoveryDnsRecord#TTL
   */
  readonly ttl?: number;

}

/**
 * Converts an object of type 'ServiceDiscoveryDnsRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDnsRecord(obj: ServiceDiscoveryDnsRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'TTL': obj.ttl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceDiscoveryNamespaceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryNamespaceProperties(obj: ServiceDiscoveryNamespaceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DnsProperties': toJson_ServiceDiscoveryDnsProperties(obj.dnsProperties),
    'HttpProperties': toJson_ServiceDiscoveryHttpProperties(obj.httpProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPrivateDnsNamespacePropertiesChange
 */
export interface ServiceDiscoveryPrivateDnsNamespacePropertiesChange {
  /**
   * @schema ServiceDiscoveryPrivateDnsNamespacePropertiesChange#DnsProperties
   */
  readonly dnsProperties?: ServiceDiscoveryPrivateDnsPropertiesMutableChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryPrivateDnsNamespacePropertiesChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPrivateDnsNamespacePropertiesChange(obj: ServiceDiscoveryPrivateDnsNamespacePropertiesChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DnsProperties': toJson_ServiceDiscoveryPrivateDnsPropertiesMutableChange(obj.dnsProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPublicDnsNamespacePropertiesChange
 */
export interface ServiceDiscoveryPublicDnsNamespacePropertiesChange {
  /**
   * @schema ServiceDiscoveryPublicDnsNamespacePropertiesChange#DnsProperties
   */
  readonly dnsProperties?: ServiceDiscoveryPublicDnsPropertiesMutableChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryPublicDnsNamespacePropertiesChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPublicDnsNamespacePropertiesChange(obj: ServiceDiscoveryPublicDnsNamespacePropertiesChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DnsProperties': toJson_ServiceDiscoveryPublicDnsPropertiesMutableChange(obj.dnsProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryDnsConfigChange
 */
export interface ServiceDiscoveryDnsConfigChange {
  /**
   * @schema ServiceDiscoveryDnsConfigChange#DnsRecords
   */
  readonly dnsRecords?: ServiceDiscoveryDnsRecord[];

}

/**
 * Converts an object of type 'ServiceDiscoveryDnsConfigChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDnsConfigChange(obj: ServiceDiscoveryDnsConfigChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DnsRecords': obj.dnsRecords?.map(y => toJson_ServiceDiscoveryDnsRecord(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoverySoa
 */
export interface ServiceDiscoverySoa {
  /**
   * @schema ServiceDiscoverySoa#TTL
   */
  readonly ttl?: number;

}

/**
 * Converts an object of type 'ServiceDiscoverySoa' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoverySoa(obj: ServiceDiscoverySoa | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TTL': obj.ttl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryDnsProperties
 */
export interface ServiceDiscoveryDnsProperties {
  /**
   * @schema ServiceDiscoveryDnsProperties#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema ServiceDiscoveryDnsProperties#SOA
   */
  readonly soa?: ServiceDiscoverySoa;

}

/**
 * Converts an object of type 'ServiceDiscoveryDnsProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryDnsProperties(obj: ServiceDiscoveryDnsProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'SOA': toJson_ServiceDiscoverySoa(obj.soa),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryHttpProperties
 */
export interface ServiceDiscoveryHttpProperties {
  /**
   * @schema ServiceDiscoveryHttpProperties#HttpName
   */
  readonly httpName?: string;

}

/**
 * Converts an object of type 'ServiceDiscoveryHttpProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryHttpProperties(obj: ServiceDiscoveryHttpProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HttpName': obj.httpName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPrivateDnsPropertiesMutableChange
 */
export interface ServiceDiscoveryPrivateDnsPropertiesMutableChange {
  /**
   * @schema ServiceDiscoveryPrivateDnsPropertiesMutableChange#SOA
   */
  readonly soa?: ServiceDiscoverySoaChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryPrivateDnsPropertiesMutableChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPrivateDnsPropertiesMutableChange(obj: ServiceDiscoveryPrivateDnsPropertiesMutableChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SOA': toJson_ServiceDiscoverySoaChange(obj.soa),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoveryPublicDnsPropertiesMutableChange
 */
export interface ServiceDiscoveryPublicDnsPropertiesMutableChange {
  /**
   * @schema ServiceDiscoveryPublicDnsPropertiesMutableChange#SOA
   */
  readonly soa?: ServiceDiscoverySoaChange;

}

/**
 * Converts an object of type 'ServiceDiscoveryPublicDnsPropertiesMutableChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoveryPublicDnsPropertiesMutableChange(obj: ServiceDiscoveryPublicDnsPropertiesMutableChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SOA': toJson_ServiceDiscoverySoaChange(obj.soa),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDiscoverySoaChange
 */
export interface ServiceDiscoverySoaChange {
  /**
   * @schema ServiceDiscoverySoaChange#TTL
   */
  readonly ttl?: number;

}

/**
 * Converts an object of type 'ServiceDiscoverySoaChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDiscoverySoaChange(obj: ServiceDiscoverySoaChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TTL': obj.ttl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
