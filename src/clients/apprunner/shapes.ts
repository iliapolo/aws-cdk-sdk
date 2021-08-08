/**
 * @schema AppRunnerAssociateCustomDomainRequest
 */
export interface AppRunnerAssociateCustomDomainRequest {
  /**
   * @schema AppRunnerAssociateCustomDomainRequest#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerAssociateCustomDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AppRunnerAssociateCustomDomainRequest#EnableWWWSubdomain
   */
  readonly enableWwwSubdomain?: boolean;

}

/**
 * Converts an object of type 'AppRunnerAssociateCustomDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerAssociateCustomDomainRequest(obj: AppRunnerAssociateCustomDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
    'DomainName': obj.domainName,
    'EnableWWWSubdomain': obj.enableWwwSubdomain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerAssociateCustomDomainResponse
 */
export interface AppRunnerAssociateCustomDomainResponse {
  /**
   * @schema AppRunnerAssociateCustomDomainResponse#DNSTarget
   */
  readonly dnsTarget?: string;

  /**
   * @schema AppRunnerAssociateCustomDomainResponse#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerAssociateCustomDomainResponse#CustomDomain
   */
  readonly customDomain?: AppRunnerCustomDomain;

}

/**
 * Converts an object of type 'AppRunnerAssociateCustomDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerAssociateCustomDomainResponse(obj: AppRunnerAssociateCustomDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DNSTarget': obj.dnsTarget,
    'ServiceArn': obj.serviceArn,
    'CustomDomain': toJson_AppRunnerCustomDomain(obj.customDomain),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCreateAutoScalingConfigurationRequest
 */
export interface AppRunnerCreateAutoScalingConfigurationRequest {
  /**
   * @schema AppRunnerCreateAutoScalingConfigurationRequest#AutoScalingConfigurationName
   */
  readonly autoScalingConfigurationName?: string;

  /**
   * @schema AppRunnerCreateAutoScalingConfigurationRequest#MaxConcurrency
   */
  readonly maxConcurrency?: number;

  /**
   * @schema AppRunnerCreateAutoScalingConfigurationRequest#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema AppRunnerCreateAutoScalingConfigurationRequest#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema AppRunnerCreateAutoScalingConfigurationRequest#Tags
   */
  readonly tags?: AppRunnerTag[];

}

/**
 * Converts an object of type 'AppRunnerCreateAutoScalingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCreateAutoScalingConfigurationRequest(obj: AppRunnerCreateAutoScalingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfigurationName': obj.autoScalingConfigurationName,
    'MaxConcurrency': obj.maxConcurrency,
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'Tags': obj.tags?.map(y => toJson_AppRunnerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCreateAutoScalingConfigurationResponse
 */
export interface AppRunnerCreateAutoScalingConfigurationResponse {
  /**
   * @schema AppRunnerCreateAutoScalingConfigurationResponse#AutoScalingConfiguration
   */
  readonly autoScalingConfiguration?: AppRunnerAutoScalingConfiguration;

}

/**
 * Converts an object of type 'AppRunnerCreateAutoScalingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCreateAutoScalingConfigurationResponse(obj: AppRunnerCreateAutoScalingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfiguration': toJson_AppRunnerAutoScalingConfiguration(obj.autoScalingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCreateConnectionRequest
 */
export interface AppRunnerCreateConnectionRequest {
  /**
   * @schema AppRunnerCreateConnectionRequest#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema AppRunnerCreateConnectionRequest#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema AppRunnerCreateConnectionRequest#Tags
   */
  readonly tags?: AppRunnerTag[];

}

/**
 * Converts an object of type 'AppRunnerCreateConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCreateConnectionRequest(obj: AppRunnerCreateConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionName': obj.connectionName,
    'ProviderType': obj.providerType,
    'Tags': obj.tags?.map(y => toJson_AppRunnerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCreateConnectionResponse
 */
export interface AppRunnerCreateConnectionResponse {
  /**
   * @schema AppRunnerCreateConnectionResponse#Connection
   */
  readonly connection?: AppRunnerConnection;

}

/**
 * Converts an object of type 'AppRunnerCreateConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCreateConnectionResponse(obj: AppRunnerCreateConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connection': toJson_AppRunnerConnection(obj.connection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCreateServiceRequest
 */
export interface AppRunnerCreateServiceRequest {
  /**
   * @schema AppRunnerCreateServiceRequest#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema AppRunnerCreateServiceRequest#SourceConfiguration
   */
  readonly sourceConfiguration?: AppRunnerSourceConfiguration;

  /**
   * @schema AppRunnerCreateServiceRequest#InstanceConfiguration
   */
  readonly instanceConfiguration?: AppRunnerInstanceConfiguration;

  /**
   * @schema AppRunnerCreateServiceRequest#Tags
   */
  readonly tags?: AppRunnerTag[];

  /**
   * @schema AppRunnerCreateServiceRequest#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: AppRunnerEncryptionConfiguration;

  /**
   * @schema AppRunnerCreateServiceRequest#HealthCheckConfiguration
   */
  readonly healthCheckConfiguration?: AppRunnerHealthCheckConfiguration;

  /**
   * @schema AppRunnerCreateServiceRequest#AutoScalingConfigurationArn
   */
  readonly autoScalingConfigurationArn?: string;

}

/**
 * Converts an object of type 'AppRunnerCreateServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCreateServiceRequest(obj: AppRunnerCreateServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceName': obj.serviceName,
    'SourceConfiguration': toJson_AppRunnerSourceConfiguration(obj.sourceConfiguration),
    'InstanceConfiguration': toJson_AppRunnerInstanceConfiguration(obj.instanceConfiguration),
    'Tags': obj.tags?.map(y => toJson_AppRunnerTag(y)),
    'EncryptionConfiguration': toJson_AppRunnerEncryptionConfiguration(obj.encryptionConfiguration),
    'HealthCheckConfiguration': toJson_AppRunnerHealthCheckConfiguration(obj.healthCheckConfiguration),
    'AutoScalingConfigurationArn': obj.autoScalingConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCreateServiceResponse
 */
export interface AppRunnerCreateServiceResponse {
  /**
   * @schema AppRunnerCreateServiceResponse#Service
   */
  readonly service?: AppRunnerService;

  /**
   * @schema AppRunnerCreateServiceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'AppRunnerCreateServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCreateServiceResponse(obj: AppRunnerCreateServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Service': toJson_AppRunnerService(obj.service),
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDeleteAutoScalingConfigurationRequest
 */
export interface AppRunnerDeleteAutoScalingConfigurationRequest {
  /**
   * @schema AppRunnerDeleteAutoScalingConfigurationRequest#AutoScalingConfigurationArn
   */
  readonly autoScalingConfigurationArn?: string;

}

/**
 * Converts an object of type 'AppRunnerDeleteAutoScalingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDeleteAutoScalingConfigurationRequest(obj: AppRunnerDeleteAutoScalingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfigurationArn': obj.autoScalingConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDeleteAutoScalingConfigurationResponse
 */
export interface AppRunnerDeleteAutoScalingConfigurationResponse {
  /**
   * @schema AppRunnerDeleteAutoScalingConfigurationResponse#AutoScalingConfiguration
   */
  readonly autoScalingConfiguration?: AppRunnerAutoScalingConfiguration;

}

/**
 * Converts an object of type 'AppRunnerDeleteAutoScalingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDeleteAutoScalingConfigurationResponse(obj: AppRunnerDeleteAutoScalingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfiguration': toJson_AppRunnerAutoScalingConfiguration(obj.autoScalingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDeleteConnectionRequest
 */
export interface AppRunnerDeleteConnectionRequest {
  /**
   * @schema AppRunnerDeleteConnectionRequest#ConnectionArn
   */
  readonly connectionArn?: string;

}

/**
 * Converts an object of type 'AppRunnerDeleteConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDeleteConnectionRequest(obj: AppRunnerDeleteConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDeleteConnectionResponse
 */
export interface AppRunnerDeleteConnectionResponse {
  /**
   * @schema AppRunnerDeleteConnectionResponse#Connection
   */
  readonly connection?: AppRunnerConnection;

}

/**
 * Converts an object of type 'AppRunnerDeleteConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDeleteConnectionResponse(obj: AppRunnerDeleteConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connection': toJson_AppRunnerConnection(obj.connection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDeleteServiceRequest
 */
export interface AppRunnerDeleteServiceRequest {
  /**
   * @schema AppRunnerDeleteServiceRequest#ServiceArn
   */
  readonly serviceArn?: string;

}

/**
 * Converts an object of type 'AppRunnerDeleteServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDeleteServiceRequest(obj: AppRunnerDeleteServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDeleteServiceResponse
 */
export interface AppRunnerDeleteServiceResponse {
  /**
   * @schema AppRunnerDeleteServiceResponse#Service
   */
  readonly service?: AppRunnerService;

  /**
   * @schema AppRunnerDeleteServiceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'AppRunnerDeleteServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDeleteServiceResponse(obj: AppRunnerDeleteServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Service': toJson_AppRunnerService(obj.service),
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDescribeAutoScalingConfigurationRequest
 */
export interface AppRunnerDescribeAutoScalingConfigurationRequest {
  /**
   * @schema AppRunnerDescribeAutoScalingConfigurationRequest#AutoScalingConfigurationArn
   */
  readonly autoScalingConfigurationArn?: string;

}

/**
 * Converts an object of type 'AppRunnerDescribeAutoScalingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDescribeAutoScalingConfigurationRequest(obj: AppRunnerDescribeAutoScalingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfigurationArn': obj.autoScalingConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDescribeAutoScalingConfigurationResponse
 */
export interface AppRunnerDescribeAutoScalingConfigurationResponse {
  /**
   * @schema AppRunnerDescribeAutoScalingConfigurationResponse#AutoScalingConfiguration
   */
  readonly autoScalingConfiguration?: AppRunnerAutoScalingConfiguration;

}

/**
 * Converts an object of type 'AppRunnerDescribeAutoScalingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDescribeAutoScalingConfigurationResponse(obj: AppRunnerDescribeAutoScalingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfiguration': toJson_AppRunnerAutoScalingConfiguration(obj.autoScalingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDescribeCustomDomainsRequest
 */
export interface AppRunnerDescribeCustomDomainsRequest {
  /**
   * @schema AppRunnerDescribeCustomDomainsRequest#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerDescribeCustomDomainsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppRunnerDescribeCustomDomainsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppRunnerDescribeCustomDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDescribeCustomDomainsRequest(obj: AppRunnerDescribeCustomDomainsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDescribeCustomDomainsResponse
 */
export interface AppRunnerDescribeCustomDomainsResponse {
  /**
   * @schema AppRunnerDescribeCustomDomainsResponse#DNSTarget
   */
  readonly dnsTarget?: string;

  /**
   * @schema AppRunnerDescribeCustomDomainsResponse#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerDescribeCustomDomainsResponse#CustomDomains
   */
  readonly customDomains?: AppRunnerCustomDomain[];

  /**
   * @schema AppRunnerDescribeCustomDomainsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppRunnerDescribeCustomDomainsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDescribeCustomDomainsResponse(obj: AppRunnerDescribeCustomDomainsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DNSTarget': obj.dnsTarget,
    'ServiceArn': obj.serviceArn,
    'CustomDomains': obj.customDomains?.map(y => toJson_AppRunnerCustomDomain(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDescribeServiceRequest
 */
export interface AppRunnerDescribeServiceRequest {
  /**
   * @schema AppRunnerDescribeServiceRequest#ServiceArn
   */
  readonly serviceArn?: string;

}

/**
 * Converts an object of type 'AppRunnerDescribeServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDescribeServiceRequest(obj: AppRunnerDescribeServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDescribeServiceResponse
 */
export interface AppRunnerDescribeServiceResponse {
  /**
   * @schema AppRunnerDescribeServiceResponse#Service
   */
  readonly service?: AppRunnerService;

}

/**
 * Converts an object of type 'AppRunnerDescribeServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDescribeServiceResponse(obj: AppRunnerDescribeServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Service': toJson_AppRunnerService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDisassociateCustomDomainRequest
 */
export interface AppRunnerDisassociateCustomDomainRequest {
  /**
   * @schema AppRunnerDisassociateCustomDomainRequest#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerDisassociateCustomDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'AppRunnerDisassociateCustomDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDisassociateCustomDomainRequest(obj: AppRunnerDisassociateCustomDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerDisassociateCustomDomainResponse
 */
export interface AppRunnerDisassociateCustomDomainResponse {
  /**
   * @schema AppRunnerDisassociateCustomDomainResponse#DNSTarget
   */
  readonly dnsTarget?: string;

  /**
   * @schema AppRunnerDisassociateCustomDomainResponse#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerDisassociateCustomDomainResponse#CustomDomain
   */
  readonly customDomain?: AppRunnerCustomDomain;

}

/**
 * Converts an object of type 'AppRunnerDisassociateCustomDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerDisassociateCustomDomainResponse(obj: AppRunnerDisassociateCustomDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DNSTarget': obj.dnsTarget,
    'ServiceArn': obj.serviceArn,
    'CustomDomain': toJson_AppRunnerCustomDomain(obj.customDomain),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListAutoScalingConfigurationsRequest
 */
export interface AppRunnerListAutoScalingConfigurationsRequest {
  /**
   * @schema AppRunnerListAutoScalingConfigurationsRequest#AutoScalingConfigurationName
   */
  readonly autoScalingConfigurationName?: string;

  /**
   * @schema AppRunnerListAutoScalingConfigurationsRequest#LatestOnly
   */
  readonly latestOnly?: boolean;

  /**
   * @schema AppRunnerListAutoScalingConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppRunnerListAutoScalingConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppRunnerListAutoScalingConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListAutoScalingConfigurationsRequest(obj: AppRunnerListAutoScalingConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfigurationName': obj.autoScalingConfigurationName,
    'LatestOnly': obj.latestOnly,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListAutoScalingConfigurationsResponse
 */
export interface AppRunnerListAutoScalingConfigurationsResponse {
  /**
   * @schema AppRunnerListAutoScalingConfigurationsResponse#AutoScalingConfigurationSummaryList
   */
  readonly autoScalingConfigurationSummaryList?: AppRunnerAutoScalingConfigurationSummary[];

  /**
   * @schema AppRunnerListAutoScalingConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppRunnerListAutoScalingConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListAutoScalingConfigurationsResponse(obj: AppRunnerListAutoScalingConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfigurationSummaryList': obj.autoScalingConfigurationSummaryList?.map(y => toJson_AppRunnerAutoScalingConfigurationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListConnectionsRequest
 */
export interface AppRunnerListConnectionsRequest {
  /**
   * @schema AppRunnerListConnectionsRequest#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema AppRunnerListConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppRunnerListConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppRunnerListConnectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListConnectionsRequest(obj: AppRunnerListConnectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionName': obj.connectionName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListConnectionsResponse
 */
export interface AppRunnerListConnectionsResponse {
  /**
   * @schema AppRunnerListConnectionsResponse#ConnectionSummaryList
   */
  readonly connectionSummaryList?: AppRunnerConnectionSummary[];

  /**
   * @schema AppRunnerListConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppRunnerListConnectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListConnectionsResponse(obj: AppRunnerListConnectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionSummaryList': obj.connectionSummaryList?.map(y => toJson_AppRunnerConnectionSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListOperationsRequest
 */
export interface AppRunnerListOperationsRequest {
  /**
   * @schema AppRunnerListOperationsRequest#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerListOperationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppRunnerListOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppRunnerListOperationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListOperationsRequest(obj: AppRunnerListOperationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListOperationsResponse
 */
export interface AppRunnerListOperationsResponse {
  /**
   * @schema AppRunnerListOperationsResponse#OperationSummaryList
   */
  readonly operationSummaryList?: AppRunnerOperationSummary[];

  /**
   * @schema AppRunnerListOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppRunnerListOperationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListOperationsResponse(obj: AppRunnerListOperationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationSummaryList': obj.operationSummaryList?.map(y => toJson_AppRunnerOperationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListServicesRequest
 */
export interface AppRunnerListServicesRequest {
  /**
   * @schema AppRunnerListServicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppRunnerListServicesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppRunnerListServicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListServicesRequest(obj: AppRunnerListServicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListServicesResponse
 */
export interface AppRunnerListServicesResponse {
  /**
   * @schema AppRunnerListServicesResponse#ServiceSummaryList
   */
  readonly serviceSummaryList?: AppRunnerServiceSummary[];

  /**
   * @schema AppRunnerListServicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppRunnerListServicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListServicesResponse(obj: AppRunnerListServicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceSummaryList': obj.serviceSummaryList?.map(y => toJson_AppRunnerServiceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListTagsForResourceRequest
 */
export interface AppRunnerListTagsForResourceRequest {
  /**
   * @schema AppRunnerListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'AppRunnerListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListTagsForResourceRequest(obj: AppRunnerListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerListTagsForResourceResponse
 */
export interface AppRunnerListTagsForResourceResponse {
  /**
   * @schema AppRunnerListTagsForResourceResponse#Tags
   */
  readonly tags?: AppRunnerTag[];

}

/**
 * Converts an object of type 'AppRunnerListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerListTagsForResourceResponse(obj: AppRunnerListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_AppRunnerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerPauseServiceRequest
 */
export interface AppRunnerPauseServiceRequest {
  /**
   * @schema AppRunnerPauseServiceRequest#ServiceArn
   */
  readonly serviceArn?: string;

}

/**
 * Converts an object of type 'AppRunnerPauseServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerPauseServiceRequest(obj: AppRunnerPauseServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerPauseServiceResponse
 */
export interface AppRunnerPauseServiceResponse {
  /**
   * @schema AppRunnerPauseServiceResponse#Service
   */
  readonly service?: AppRunnerService;

  /**
   * @schema AppRunnerPauseServiceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'AppRunnerPauseServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerPauseServiceResponse(obj: AppRunnerPauseServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Service': toJson_AppRunnerService(obj.service),
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerResumeServiceRequest
 */
export interface AppRunnerResumeServiceRequest {
  /**
   * @schema AppRunnerResumeServiceRequest#ServiceArn
   */
  readonly serviceArn?: string;

}

/**
 * Converts an object of type 'AppRunnerResumeServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerResumeServiceRequest(obj: AppRunnerResumeServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerResumeServiceResponse
 */
export interface AppRunnerResumeServiceResponse {
  /**
   * @schema AppRunnerResumeServiceResponse#Service
   */
  readonly service?: AppRunnerService;

  /**
   * @schema AppRunnerResumeServiceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'AppRunnerResumeServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerResumeServiceResponse(obj: AppRunnerResumeServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Service': toJson_AppRunnerService(obj.service),
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerStartDeploymentRequest
 */
export interface AppRunnerStartDeploymentRequest {
  /**
   * @schema AppRunnerStartDeploymentRequest#ServiceArn
   */
  readonly serviceArn?: string;

}

/**
 * Converts an object of type 'AppRunnerStartDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerStartDeploymentRequest(obj: AppRunnerStartDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerStartDeploymentResponse
 */
export interface AppRunnerStartDeploymentResponse {
  /**
   * @schema AppRunnerStartDeploymentResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'AppRunnerStartDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerStartDeploymentResponse(obj: AppRunnerStartDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerTagResourceRequest
 */
export interface AppRunnerTagResourceRequest {
  /**
   * @schema AppRunnerTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AppRunnerTagResourceRequest#Tags
   */
  readonly tags?: AppRunnerTag[];

}

/**
 * Converts an object of type 'AppRunnerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerTagResourceRequest(obj: AppRunnerTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_AppRunnerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerTagResourceResponse
 */
export interface AppRunnerTagResourceResponse {
}

/**
 * Converts an object of type 'AppRunnerTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerTagResourceResponse(obj: AppRunnerTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerUntagResourceRequest
 */
export interface AppRunnerUntagResourceRequest {
  /**
   * @schema AppRunnerUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AppRunnerUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'AppRunnerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerUntagResourceRequest(obj: AppRunnerUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerUntagResourceResponse
 */
export interface AppRunnerUntagResourceResponse {
}

/**
 * Converts an object of type 'AppRunnerUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerUntagResourceResponse(obj: AppRunnerUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerUpdateServiceRequest
 */
export interface AppRunnerUpdateServiceRequest {
  /**
   * @schema AppRunnerUpdateServiceRequest#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerUpdateServiceRequest#SourceConfiguration
   */
  readonly sourceConfiguration?: AppRunnerSourceConfiguration;

  /**
   * @schema AppRunnerUpdateServiceRequest#InstanceConfiguration
   */
  readonly instanceConfiguration?: AppRunnerInstanceConfiguration;

  /**
   * @schema AppRunnerUpdateServiceRequest#AutoScalingConfigurationArn
   */
  readonly autoScalingConfigurationArn?: string;

  /**
   * @schema AppRunnerUpdateServiceRequest#HealthCheckConfiguration
   */
  readonly healthCheckConfiguration?: AppRunnerHealthCheckConfiguration;

}

/**
 * Converts an object of type 'AppRunnerUpdateServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerUpdateServiceRequest(obj: AppRunnerUpdateServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceArn': obj.serviceArn,
    'SourceConfiguration': toJson_AppRunnerSourceConfiguration(obj.sourceConfiguration),
    'InstanceConfiguration': toJson_AppRunnerInstanceConfiguration(obj.instanceConfiguration),
    'AutoScalingConfigurationArn': obj.autoScalingConfigurationArn,
    'HealthCheckConfiguration': toJson_AppRunnerHealthCheckConfiguration(obj.healthCheckConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerUpdateServiceResponse
 */
export interface AppRunnerUpdateServiceResponse {
  /**
   * @schema AppRunnerUpdateServiceResponse#Service
   */
  readonly service?: AppRunnerService;

  /**
   * @schema AppRunnerUpdateServiceResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'AppRunnerUpdateServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerUpdateServiceResponse(obj: AppRunnerUpdateServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Service': toJson_AppRunnerService(obj.service),
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCustomDomain
 */
export interface AppRunnerCustomDomain {
  /**
   * @schema AppRunnerCustomDomain#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AppRunnerCustomDomain#EnableWWWSubdomain
   */
  readonly enableWwwSubdomain?: boolean;

  /**
   * @schema AppRunnerCustomDomain#CertificateValidationRecords
   */
  readonly certificateValidationRecords?: AppRunnerCertificateValidationRecord[];

  /**
   * @schema AppRunnerCustomDomain#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AppRunnerCustomDomain' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCustomDomain(obj: AppRunnerCustomDomain | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'EnableWWWSubdomain': obj.enableWwwSubdomain,
    'CertificateValidationRecords': obj.certificateValidationRecords?.map(y => toJson_AppRunnerCertificateValidationRecord(y)),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerTag
 */
export interface AppRunnerTag {
  /**
   * @schema AppRunnerTag#Key
   */
  readonly key?: string;

  /**
   * @schema AppRunnerTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AppRunnerTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerTag(obj: AppRunnerTag | undefined): Record<string, any> | undefined {
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
 * @schema AppRunnerAutoScalingConfiguration
 */
export interface AppRunnerAutoScalingConfiguration {
  /**
   * @schema AppRunnerAutoScalingConfiguration#AutoScalingConfigurationArn
   */
  readonly autoScalingConfigurationArn?: string;

  /**
   * @schema AppRunnerAutoScalingConfiguration#AutoScalingConfigurationName
   */
  readonly autoScalingConfigurationName?: string;

  /**
   * @schema AppRunnerAutoScalingConfiguration#AutoScalingConfigurationRevision
   */
  readonly autoScalingConfigurationRevision?: number;

  /**
   * @schema AppRunnerAutoScalingConfiguration#Latest
   */
  readonly latest?: boolean;

  /**
   * @schema AppRunnerAutoScalingConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema AppRunnerAutoScalingConfiguration#MaxConcurrency
   */
  readonly maxConcurrency?: number;

  /**
   * @schema AppRunnerAutoScalingConfiguration#MinSize
   */
  readonly minSize?: number;

  /**
   * @schema AppRunnerAutoScalingConfiguration#MaxSize
   */
  readonly maxSize?: number;

  /**
   * @schema AppRunnerAutoScalingConfiguration#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AppRunnerAutoScalingConfiguration#DeletedAt
   */
  readonly deletedAt?: string;

}

/**
 * Converts an object of type 'AppRunnerAutoScalingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerAutoScalingConfiguration(obj: AppRunnerAutoScalingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfigurationArn': obj.autoScalingConfigurationArn,
    'AutoScalingConfigurationName': obj.autoScalingConfigurationName,
    'AutoScalingConfigurationRevision': obj.autoScalingConfigurationRevision,
    'Latest': obj.latest,
    'Status': obj.status,
    'MaxConcurrency': obj.maxConcurrency,
    'MinSize': obj.minSize,
    'MaxSize': obj.maxSize,
    'CreatedAt': obj.createdAt,
    'DeletedAt': obj.deletedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerConnection
 */
export interface AppRunnerConnection {
  /**
   * @schema AppRunnerConnection#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema AppRunnerConnection#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema AppRunnerConnection#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema AppRunnerConnection#Status
   */
  readonly status?: string;

  /**
   * @schema AppRunnerConnection#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'AppRunnerConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerConnection(obj: AppRunnerConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionName': obj.connectionName,
    'ConnectionArn': obj.connectionArn,
    'ProviderType': obj.providerType,
    'Status': obj.status,
    'CreatedAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerSourceConfiguration
 */
export interface AppRunnerSourceConfiguration {
  /**
   * @schema AppRunnerSourceConfiguration#CodeRepository
   */
  readonly codeRepository?: AppRunnerCodeRepository;

  /**
   * @schema AppRunnerSourceConfiguration#ImageRepository
   */
  readonly imageRepository?: AppRunnerImageRepository;

  /**
   * @schema AppRunnerSourceConfiguration#AutoDeploymentsEnabled
   */
  readonly autoDeploymentsEnabled?: boolean;

  /**
   * @schema AppRunnerSourceConfiguration#AuthenticationConfiguration
   */
  readonly authenticationConfiguration?: AppRunnerAuthenticationConfiguration;

}

/**
 * Converts an object of type 'AppRunnerSourceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerSourceConfiguration(obj: AppRunnerSourceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeRepository': toJson_AppRunnerCodeRepository(obj.codeRepository),
    'ImageRepository': toJson_AppRunnerImageRepository(obj.imageRepository),
    'AutoDeploymentsEnabled': obj.autoDeploymentsEnabled,
    'AuthenticationConfiguration': toJson_AppRunnerAuthenticationConfiguration(obj.authenticationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerInstanceConfiguration
 */
export interface AppRunnerInstanceConfiguration {
  /**
   * @schema AppRunnerInstanceConfiguration#Cpu
   */
  readonly cpu?: string;

  /**
   * @schema AppRunnerInstanceConfiguration#Memory
   */
  readonly memory?: string;

  /**
   * @schema AppRunnerInstanceConfiguration#InstanceRoleArn
   */
  readonly instanceRoleArn?: string;

}

/**
 * Converts an object of type 'AppRunnerInstanceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerInstanceConfiguration(obj: AppRunnerInstanceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cpu': obj.cpu,
    'Memory': obj.memory,
    'InstanceRoleArn': obj.instanceRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerEncryptionConfiguration
 */
export interface AppRunnerEncryptionConfiguration {
  /**
   * @schema AppRunnerEncryptionConfiguration#KmsKey
   */
  readonly kmsKey?: string;

}

/**
 * Converts an object of type 'AppRunnerEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerEncryptionConfiguration(obj: AppRunnerEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsKey': obj.kmsKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerHealthCheckConfiguration
 */
export interface AppRunnerHealthCheckConfiguration {
  /**
   * @schema AppRunnerHealthCheckConfiguration#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema AppRunnerHealthCheckConfiguration#Path
   */
  readonly path?: string;

  /**
   * @schema AppRunnerHealthCheckConfiguration#Interval
   */
  readonly interval?: number;

  /**
   * @schema AppRunnerHealthCheckConfiguration#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema AppRunnerHealthCheckConfiguration#HealthyThreshold
   */
  readonly healthyThreshold?: number;

  /**
   * @schema AppRunnerHealthCheckConfiguration#UnhealthyThreshold
   */
  readonly unhealthyThreshold?: number;

}

/**
 * Converts an object of type 'AppRunnerHealthCheckConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerHealthCheckConfiguration(obj: AppRunnerHealthCheckConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Protocol': obj.protocol,
    'Path': obj.path,
    'Interval': obj.interval,
    'Timeout': obj.timeout,
    'HealthyThreshold': obj.healthyThreshold,
    'UnhealthyThreshold': obj.unhealthyThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerService
 */
export interface AppRunnerService {
  /**
   * @schema AppRunnerService#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema AppRunnerService#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema AppRunnerService#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerService#ServiceUrl
   */
  readonly serviceUrl?: string;

  /**
   * @schema AppRunnerService#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AppRunnerService#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema AppRunnerService#DeletedAt
   */
  readonly deletedAt?: string;

  /**
   * @schema AppRunnerService#Status
   */
  readonly status?: string;

  /**
   * @schema AppRunnerService#SourceConfiguration
   */
  readonly sourceConfiguration?: AppRunnerSourceConfiguration;

  /**
   * @schema AppRunnerService#InstanceConfiguration
   */
  readonly instanceConfiguration?: AppRunnerInstanceConfiguration;

  /**
   * @schema AppRunnerService#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: AppRunnerEncryptionConfiguration;

  /**
   * @schema AppRunnerService#HealthCheckConfiguration
   */
  readonly healthCheckConfiguration?: AppRunnerHealthCheckConfiguration;

  /**
   * @schema AppRunnerService#AutoScalingConfigurationSummary
   */
  readonly autoScalingConfigurationSummary?: AppRunnerAutoScalingConfigurationSummary;

}

/**
 * Converts an object of type 'AppRunnerService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerService(obj: AppRunnerService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceName': obj.serviceName,
    'ServiceId': obj.serviceId,
    'ServiceArn': obj.serviceArn,
    'ServiceUrl': obj.serviceUrl,
    'CreatedAt': obj.createdAt,
    'UpdatedAt': obj.updatedAt,
    'DeletedAt': obj.deletedAt,
    'Status': obj.status,
    'SourceConfiguration': toJson_AppRunnerSourceConfiguration(obj.sourceConfiguration),
    'InstanceConfiguration': toJson_AppRunnerInstanceConfiguration(obj.instanceConfiguration),
    'EncryptionConfiguration': toJson_AppRunnerEncryptionConfiguration(obj.encryptionConfiguration),
    'HealthCheckConfiguration': toJson_AppRunnerHealthCheckConfiguration(obj.healthCheckConfiguration),
    'AutoScalingConfigurationSummary': toJson_AppRunnerAutoScalingConfigurationSummary(obj.autoScalingConfigurationSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerAutoScalingConfigurationSummary
 */
export interface AppRunnerAutoScalingConfigurationSummary {
  /**
   * @schema AppRunnerAutoScalingConfigurationSummary#AutoScalingConfigurationArn
   */
  readonly autoScalingConfigurationArn?: string;

  /**
   * @schema AppRunnerAutoScalingConfigurationSummary#AutoScalingConfigurationName
   */
  readonly autoScalingConfigurationName?: string;

  /**
   * @schema AppRunnerAutoScalingConfigurationSummary#AutoScalingConfigurationRevision
   */
  readonly autoScalingConfigurationRevision?: number;

}

/**
 * Converts an object of type 'AppRunnerAutoScalingConfigurationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerAutoScalingConfigurationSummary(obj: AppRunnerAutoScalingConfigurationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoScalingConfigurationArn': obj.autoScalingConfigurationArn,
    'AutoScalingConfigurationName': obj.autoScalingConfigurationName,
    'AutoScalingConfigurationRevision': obj.autoScalingConfigurationRevision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerConnectionSummary
 */
export interface AppRunnerConnectionSummary {
  /**
   * @schema AppRunnerConnectionSummary#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema AppRunnerConnectionSummary#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema AppRunnerConnectionSummary#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema AppRunnerConnectionSummary#Status
   */
  readonly status?: string;

  /**
   * @schema AppRunnerConnectionSummary#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'AppRunnerConnectionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerConnectionSummary(obj: AppRunnerConnectionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionName': obj.connectionName,
    'ConnectionArn': obj.connectionArn,
    'ProviderType': obj.providerType,
    'Status': obj.status,
    'CreatedAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerOperationSummary
 */
export interface AppRunnerOperationSummary {
  /**
   * @schema AppRunnerOperationSummary#Id
   */
  readonly id?: string;

  /**
   * @schema AppRunnerOperationSummary#Type
   */
  readonly type?: string;

  /**
   * @schema AppRunnerOperationSummary#Status
   */
  readonly status?: string;

  /**
   * @schema AppRunnerOperationSummary#TargetArn
   */
  readonly targetArn?: string;

  /**
   * @schema AppRunnerOperationSummary#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema AppRunnerOperationSummary#EndedAt
   */
  readonly endedAt?: string;

  /**
   * @schema AppRunnerOperationSummary#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'AppRunnerOperationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerOperationSummary(obj: AppRunnerOperationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Type': obj.type,
    'Status': obj.status,
    'TargetArn': obj.targetArn,
    'StartedAt': obj.startedAt,
    'EndedAt': obj.endedAt,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerServiceSummary
 */
export interface AppRunnerServiceSummary {
  /**
   * @schema AppRunnerServiceSummary#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema AppRunnerServiceSummary#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema AppRunnerServiceSummary#ServiceArn
   */
  readonly serviceArn?: string;

  /**
   * @schema AppRunnerServiceSummary#ServiceUrl
   */
  readonly serviceUrl?: string;

  /**
   * @schema AppRunnerServiceSummary#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AppRunnerServiceSummary#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema AppRunnerServiceSummary#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AppRunnerServiceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerServiceSummary(obj: AppRunnerServiceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceName': obj.serviceName,
    'ServiceId': obj.serviceId,
    'ServiceArn': obj.serviceArn,
    'ServiceUrl': obj.serviceUrl,
    'CreatedAt': obj.createdAt,
    'UpdatedAt': obj.updatedAt,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCertificateValidationRecord
 */
export interface AppRunnerCertificateValidationRecord {
  /**
   * @schema AppRunnerCertificateValidationRecord#Name
   */
  readonly name?: string;

  /**
   * @schema AppRunnerCertificateValidationRecord#Type
   */
  readonly type?: string;

  /**
   * @schema AppRunnerCertificateValidationRecord#Value
   */
  readonly value?: string;

  /**
   * @schema AppRunnerCertificateValidationRecord#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AppRunnerCertificateValidationRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCertificateValidationRecord(obj: AppRunnerCertificateValidationRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Value': obj.value,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCodeRepository
 */
export interface AppRunnerCodeRepository {
  /**
   * @schema AppRunnerCodeRepository#RepositoryUrl
   */
  readonly repositoryUrl?: string;

  /**
   * @schema AppRunnerCodeRepository#SourceCodeVersion
   */
  readonly sourceCodeVersion?: AppRunnerSourceCodeVersion;

  /**
   * @schema AppRunnerCodeRepository#CodeConfiguration
   */
  readonly codeConfiguration?: AppRunnerCodeConfiguration;

}

/**
 * Converts an object of type 'AppRunnerCodeRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCodeRepository(obj: AppRunnerCodeRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryUrl': obj.repositoryUrl,
    'SourceCodeVersion': toJson_AppRunnerSourceCodeVersion(obj.sourceCodeVersion),
    'CodeConfiguration': toJson_AppRunnerCodeConfiguration(obj.codeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerImageRepository
 */
export interface AppRunnerImageRepository {
  /**
   * @schema AppRunnerImageRepository#ImageIdentifier
   */
  readonly imageIdentifier?: string;

  /**
   * @schema AppRunnerImageRepository#ImageConfiguration
   */
  readonly imageConfiguration?: AppRunnerImageConfiguration;

  /**
   * @schema AppRunnerImageRepository#ImageRepositoryType
   */
  readonly imageRepositoryType?: string;

}

/**
 * Converts an object of type 'AppRunnerImageRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerImageRepository(obj: AppRunnerImageRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageIdentifier': obj.imageIdentifier,
    'ImageConfiguration': toJson_AppRunnerImageConfiguration(obj.imageConfiguration),
    'ImageRepositoryType': obj.imageRepositoryType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerAuthenticationConfiguration
 */
export interface AppRunnerAuthenticationConfiguration {
  /**
   * @schema AppRunnerAuthenticationConfiguration#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema AppRunnerAuthenticationConfiguration#AccessRoleArn
   */
  readonly accessRoleArn?: string;

}

/**
 * Converts an object of type 'AppRunnerAuthenticationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerAuthenticationConfiguration(obj: AppRunnerAuthenticationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
    'AccessRoleArn': obj.accessRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerSourceCodeVersion
 */
export interface AppRunnerSourceCodeVersion {
  /**
   * @schema AppRunnerSourceCodeVersion#Type
   */
  readonly type?: string;

  /**
   * @schema AppRunnerSourceCodeVersion#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AppRunnerSourceCodeVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerSourceCodeVersion(obj: AppRunnerSourceCodeVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCodeConfiguration
 */
export interface AppRunnerCodeConfiguration {
  /**
   * @schema AppRunnerCodeConfiguration#ConfigurationSource
   */
  readonly configurationSource?: string;

  /**
   * @schema AppRunnerCodeConfiguration#CodeConfigurationValues
   */
  readonly codeConfigurationValues?: AppRunnerCodeConfigurationValues;

}

/**
 * Converts an object of type 'AppRunnerCodeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCodeConfiguration(obj: AppRunnerCodeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSource': obj.configurationSource,
    'CodeConfigurationValues': toJson_AppRunnerCodeConfigurationValues(obj.codeConfigurationValues),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerImageConfiguration
 */
export interface AppRunnerImageConfiguration {
  /**
   * @schema AppRunnerImageConfiguration#RuntimeEnvironmentVariables
   */
  readonly runtimeEnvironmentVariables?: { [key: string]: string };

  /**
   * @schema AppRunnerImageConfiguration#StartCommand
   */
  readonly startCommand?: string;

  /**
   * @schema AppRunnerImageConfiguration#Port
   */
  readonly port?: string;

}

/**
 * Converts an object of type 'AppRunnerImageConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerImageConfiguration(obj: AppRunnerImageConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuntimeEnvironmentVariables': ((obj.runtimeEnvironmentVariables) === undefined) ? undefined : (Object.entries(obj.runtimeEnvironmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'StartCommand': obj.startCommand,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppRunnerCodeConfigurationValues
 */
export interface AppRunnerCodeConfigurationValues {
  /**
   * @schema AppRunnerCodeConfigurationValues#Runtime
   */
  readonly runtime?: string;

  /**
   * @schema AppRunnerCodeConfigurationValues#BuildCommand
   */
  readonly buildCommand?: string;

  /**
   * @schema AppRunnerCodeConfigurationValues#StartCommand
   */
  readonly startCommand?: string;

  /**
   * @schema AppRunnerCodeConfigurationValues#Port
   */
  readonly port?: string;

  /**
   * @schema AppRunnerCodeConfigurationValues#RuntimeEnvironmentVariables
   */
  readonly runtimeEnvironmentVariables?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppRunnerCodeConfigurationValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppRunnerCodeConfigurationValues(obj: AppRunnerCodeConfigurationValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Runtime': obj.runtime,
    'BuildCommand': obj.buildCommand,
    'StartCommand': obj.startCommand,
    'Port': obj.port,
    'RuntimeEnvironmentVariables': ((obj.runtimeEnvironmentVariables) === undefined) ? undefined : (Object.entries(obj.runtimeEnvironmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
