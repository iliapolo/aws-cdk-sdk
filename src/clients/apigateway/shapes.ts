/**
 * @schema ApiGatewayCreateApiKeyRequest
 */
export interface ApiGatewayCreateApiKeyRequest {
  /**
   * @schema ApiGatewayCreateApiKeyRequest#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayCreateApiKeyRequest#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayCreateApiKeyRequest#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApiGatewayCreateApiKeyRequest#generateDistinctId
   */
  readonly generateDistinctId?: boolean;

  /**
   * @schema ApiGatewayCreateApiKeyRequest#value
   */
  readonly value?: string;

  /**
   * @schema ApiGatewayCreateApiKeyRequest#stageKeys
   */
  readonly stageKeys?: ApiGatewayStageKey[];

  /**
   * @schema ApiGatewayCreateApiKeyRequest#customerId
   */
  readonly customerId?: string;

  /**
   * @schema ApiGatewayCreateApiKeyRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayCreateApiKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateApiKeyRequest(obj: ApiGatewayCreateApiKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'enabled': obj.enabled,
    'generateDistinctId': obj.generateDistinctId,
    'value': obj.value,
    'stageKeys': obj.stageKeys?.map(y => toJson_ApiGatewayStageKey(y)),
    'customerId': obj.customerId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayApiKey
 */
export interface ApiGatewayApiKey {
  /**
   * @schema ApiGatewayApiKey#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayApiKey#value
   */
  readonly value?: string;

  /**
   * @schema ApiGatewayApiKey#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayApiKey#customerId
   */
  readonly customerId?: string;

  /**
   * @schema ApiGatewayApiKey#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayApiKey#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApiGatewayApiKey#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayApiKey#lastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema ApiGatewayApiKey#stageKeys
   */
  readonly stageKeys?: string[];

  /**
   * @schema ApiGatewayApiKey#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayApiKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayApiKey(obj: ApiGatewayApiKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'value': obj.value,
    'name': obj.name,
    'customerId': obj.customerId,
    'description': obj.description,
    'enabled': obj.enabled,
    'createdDate': obj.createdDate,
    'lastUpdatedDate': obj.lastUpdatedDate,
    'stageKeys': obj.stageKeys?.map(y => y),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateAuthorizerRequest
 */
export interface ApiGatewayCreateAuthorizerRequest {
  /**
   * @schema ApiGatewayCreateAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayCreateAuthorizerRequest#name
   */
  readonly name: string;

  /**
   * @schema ApiGatewayCreateAuthorizerRequest#type
   */
  readonly type: string;

  /**
   * @schema ApiGatewayCreateAuthorizerRequest#providerARNs
   */
  readonly providerArNs?: string[];

  /**
   * @schema ApiGatewayCreateAuthorizerRequest#authType
   */
  readonly authType?: string;

  /**
   * @schema ApiGatewayCreateAuthorizerRequest#authorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema ApiGatewayCreateAuthorizerRequest#authorizerCredentials
   */
  readonly authorizerCredentials?: string;

  /**
   * @schema ApiGatewayCreateAuthorizerRequest#identitySource
   */
  readonly identitySource?: string;

  /**
   * @schema ApiGatewayCreateAuthorizerRequest#identityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema ApiGatewayCreateAuthorizerRequest#authorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

}

/**
 * Converts an object of type 'ApiGatewayCreateAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateAuthorizerRequest(obj: ApiGatewayCreateAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'name': obj.name,
    'type': obj.type,
    'providerARNs': obj.providerArNs?.map(y => y),
    'authType': obj.authType,
    'authorizerUri': obj.authorizerUri,
    'authorizerCredentials': obj.authorizerCredentials,
    'identitySource': obj.identitySource,
    'identityValidationExpression': obj.identityValidationExpression,
    'authorizerResultTtlInSeconds': obj.authorizerResultTtlInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayAuthorizer
 */
export interface ApiGatewayAuthorizer {
  /**
   * @schema ApiGatewayAuthorizer#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayAuthorizer#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayAuthorizer#type
   */
  readonly type?: string;

  /**
   * @schema ApiGatewayAuthorizer#providerARNs
   */
  readonly providerArNs?: string[];

  /**
   * @schema ApiGatewayAuthorizer#authType
   */
  readonly authType?: string;

  /**
   * @schema ApiGatewayAuthorizer#authorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema ApiGatewayAuthorizer#authorizerCredentials
   */
  readonly authorizerCredentials?: string;

  /**
   * @schema ApiGatewayAuthorizer#identitySource
   */
  readonly identitySource?: string;

  /**
   * @schema ApiGatewayAuthorizer#identityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema ApiGatewayAuthorizer#authorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

}

/**
 * Converts an object of type 'ApiGatewayAuthorizer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayAuthorizer(obj: ApiGatewayAuthorizer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'type': obj.type,
    'providerARNs': obj.providerArNs?.map(y => y),
    'authType': obj.authType,
    'authorizerUri': obj.authorizerUri,
    'authorizerCredentials': obj.authorizerCredentials,
    'identitySource': obj.identitySource,
    'identityValidationExpression': obj.identityValidationExpression,
    'authorizerResultTtlInSeconds': obj.authorizerResultTtlInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateBasePathMappingRequest
 */
export interface ApiGatewayCreateBasePathMappingRequest {
  /**
   * @schema ApiGatewayCreateBasePathMappingRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema ApiGatewayCreateBasePathMappingRequest#basePath
   */
  readonly basePath?: string;

  /**
   * @schema ApiGatewayCreateBasePathMappingRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayCreateBasePathMappingRequest#stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'ApiGatewayCreateBasePathMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateBasePathMappingRequest(obj: ApiGatewayCreateBasePathMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'basePath': obj.basePath,
    'restApiId': obj.restApiId,
    'stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayBasePathMapping
 */
export interface ApiGatewayBasePathMapping {
  /**
   * @schema ApiGatewayBasePathMapping#basePath
   */
  readonly basePath?: string;

  /**
   * @schema ApiGatewayBasePathMapping#restApiId
   */
  readonly restApiId?: string;

  /**
   * @schema ApiGatewayBasePathMapping#stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'ApiGatewayBasePathMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayBasePathMapping(obj: ApiGatewayBasePathMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'basePath': obj.basePath,
    'restApiId': obj.restApiId,
    'stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateDeploymentRequest
 */
export interface ApiGatewayCreateDeploymentRequest {
  /**
   * @schema ApiGatewayCreateDeploymentRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayCreateDeploymentRequest#stageName
   */
  readonly stageName?: string;

  /**
   * @schema ApiGatewayCreateDeploymentRequest#stageDescription
   */
  readonly stageDescription?: string;

  /**
   * @schema ApiGatewayCreateDeploymentRequest#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayCreateDeploymentRequest#cacheClusterEnabled
   */
  readonly cacheClusterEnabled?: boolean;

  /**
   * @schema ApiGatewayCreateDeploymentRequest#cacheClusterSize
   */
  readonly cacheClusterSize?: string;

  /**
   * @schema ApiGatewayCreateDeploymentRequest#variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema ApiGatewayCreateDeploymentRequest#canarySettings
   */
  readonly canarySettings?: ApiGatewayDeploymentCanarySettings;

  /**
   * @schema ApiGatewayCreateDeploymentRequest#tracingEnabled
   */
  readonly tracingEnabled?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayCreateDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateDeploymentRequest(obj: ApiGatewayCreateDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
    'stageDescription': obj.stageDescription,
    'description': obj.description,
    'cacheClusterEnabled': obj.cacheClusterEnabled,
    'cacheClusterSize': obj.cacheClusterSize,
    'variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'canarySettings': toJson_ApiGatewayDeploymentCanarySettings(obj.canarySettings),
    'tracingEnabled': obj.tracingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeployment
 */
export interface ApiGatewayDeployment {
  /**
   * @schema ApiGatewayDeployment#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayDeployment#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayDeployment#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayDeployment#apiSummary
   */
  readonly apiSummary?: { [key: string]: { [key: string]: ApiGatewayMethodSnapshot } };

}

/**
 * Converts an object of type 'ApiGatewayDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeployment(obj: ApiGatewayDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
    'createdDate': obj.createdDate,
    'apiSummary': ((obj.apiSummary) === undefined) ? undefined : (Object.entries(obj.apiSummary).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayMethodSnapshot(i[1]) }), {})) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateDocumentationPartRequest
 */
export interface ApiGatewayCreateDocumentationPartRequest {
  /**
   * @schema ApiGatewayCreateDocumentationPartRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayCreateDocumentationPartRequest#location
   */
  readonly location: ApiGatewayDocumentationPartLocation;

  /**
   * @schema ApiGatewayCreateDocumentationPartRequest#properties
   */
  readonly properties: string;

}

/**
 * Converts an object of type 'ApiGatewayCreateDocumentationPartRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateDocumentationPartRequest(obj: ApiGatewayCreateDocumentationPartRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'location': toJson_ApiGatewayDocumentationPartLocation(obj.location),
    'properties': obj.properties,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDocumentationPart
 */
export interface ApiGatewayDocumentationPart {
  /**
   * @schema ApiGatewayDocumentationPart#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayDocumentationPart#location
   */
  readonly location?: ApiGatewayDocumentationPartLocation;

  /**
   * @schema ApiGatewayDocumentationPart#properties
   */
  readonly properties?: string;

}

/**
 * Converts an object of type 'ApiGatewayDocumentationPart' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDocumentationPart(obj: ApiGatewayDocumentationPart | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'location': toJson_ApiGatewayDocumentationPartLocation(obj.location),
    'properties': obj.properties,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateDocumentationVersionRequest
 */
export interface ApiGatewayCreateDocumentationVersionRequest {
  /**
   * @schema ApiGatewayCreateDocumentationVersionRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayCreateDocumentationVersionRequest#documentationVersion
   */
  readonly documentationVersion: string;

  /**
   * @schema ApiGatewayCreateDocumentationVersionRequest#stageName
   */
  readonly stageName?: string;

  /**
   * @schema ApiGatewayCreateDocumentationVersionRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ApiGatewayCreateDocumentationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateDocumentationVersionRequest(obj: ApiGatewayCreateDocumentationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'documentationVersion': obj.documentationVersion,
    'stageName': obj.stageName,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDocumentationVersion
 */
export interface ApiGatewayDocumentationVersion {
  /**
   * @schema ApiGatewayDocumentationVersion#version
   */
  readonly version?: string;

  /**
   * @schema ApiGatewayDocumentationVersion#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayDocumentationVersion#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ApiGatewayDocumentationVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDocumentationVersion(obj: ApiGatewayDocumentationVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'version': obj.version,
    'createdDate': obj.createdDate,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateDomainNameRequest
 */
export interface ApiGatewayCreateDomainNameRequest {
  /**
   * @schema ApiGatewayCreateDomainNameRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#certificateBody
   */
  readonly certificateBody?: string;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#certificatePrivateKey
   */
  readonly certificatePrivateKey?: string;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#certificateChain
   */
  readonly certificateChain?: string;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#regionalCertificateName
   */
  readonly regionalCertificateName?: string;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#regionalCertificateArn
   */
  readonly regionalCertificateArn?: string;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#endpointConfiguration
   */
  readonly endpointConfiguration?: ApiGatewayEndpointConfiguration;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayCreateDomainNameRequest#securityPolicy
   */
  readonly securityPolicy?: string;

  /**
   * @schema ApiGatewayCreateDomainNameRequest#mutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: ApiGatewayMutualTlsAuthenticationInput;

}

/**
 * Converts an object of type 'ApiGatewayCreateDomainNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateDomainNameRequest(obj: ApiGatewayCreateDomainNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'certificateName': obj.certificateName,
    'certificateBody': obj.certificateBody,
    'certificatePrivateKey': obj.certificatePrivateKey,
    'certificateChain': obj.certificateChain,
    'certificateArn': obj.certificateArn,
    'regionalCertificateName': obj.regionalCertificateName,
    'regionalCertificateArn': obj.regionalCertificateArn,
    'endpointConfiguration': toJson_ApiGatewayEndpointConfiguration(obj.endpointConfiguration),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'securityPolicy': obj.securityPolicy,
    'mutualTlsAuthentication': toJson_ApiGatewayMutualTlsAuthenticationInput(obj.mutualTlsAuthentication),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDomainName
 */
export interface ApiGatewayDomainName {
  /**
   * @schema ApiGatewayDomainName#domainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayDomainName#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema ApiGatewayDomainName#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema ApiGatewayDomainName#certificateUploadDate
   */
  readonly certificateUploadDate?: string;

  /**
   * @schema ApiGatewayDomainName#regionalDomainName
   */
  readonly regionalDomainName?: string;

  /**
   * @schema ApiGatewayDomainName#regionalHostedZoneId
   */
  readonly regionalHostedZoneId?: string;

  /**
   * @schema ApiGatewayDomainName#regionalCertificateName
   */
  readonly regionalCertificateName?: string;

  /**
   * @schema ApiGatewayDomainName#regionalCertificateArn
   */
  readonly regionalCertificateArn?: string;

  /**
   * @schema ApiGatewayDomainName#distributionDomainName
   */
  readonly distributionDomainName?: string;

  /**
   * @schema ApiGatewayDomainName#distributionHostedZoneId
   */
  readonly distributionHostedZoneId?: string;

  /**
   * @schema ApiGatewayDomainName#endpointConfiguration
   */
  readonly endpointConfiguration?: ApiGatewayEndpointConfiguration;

  /**
   * @schema ApiGatewayDomainName#domainNameStatus
   */
  readonly domainNameStatus?: string;

  /**
   * @schema ApiGatewayDomainName#domainNameStatusMessage
   */
  readonly domainNameStatusMessage?: string;

  /**
   * @schema ApiGatewayDomainName#securityPolicy
   */
  readonly securityPolicy?: string;

  /**
   * @schema ApiGatewayDomainName#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayDomainName#mutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: ApiGatewayMutualTlsAuthentication;

}

/**
 * Converts an object of type 'ApiGatewayDomainName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDomainName(obj: ApiGatewayDomainName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'certificateName': obj.certificateName,
    'certificateArn': obj.certificateArn,
    'certificateUploadDate': obj.certificateUploadDate,
    'regionalDomainName': obj.regionalDomainName,
    'regionalHostedZoneId': obj.regionalHostedZoneId,
    'regionalCertificateName': obj.regionalCertificateName,
    'regionalCertificateArn': obj.regionalCertificateArn,
    'distributionDomainName': obj.distributionDomainName,
    'distributionHostedZoneId': obj.distributionHostedZoneId,
    'endpointConfiguration': toJson_ApiGatewayEndpointConfiguration(obj.endpointConfiguration),
    'domainNameStatus': obj.domainNameStatus,
    'domainNameStatusMessage': obj.domainNameStatusMessage,
    'securityPolicy': obj.securityPolicy,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'mutualTlsAuthentication': toJson_ApiGatewayMutualTlsAuthentication(obj.mutualTlsAuthentication),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateModelRequest
 */
export interface ApiGatewayCreateModelRequest {
  /**
   * @schema ApiGatewayCreateModelRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayCreateModelRequest#name
   */
  readonly name: string;

  /**
   * @schema ApiGatewayCreateModelRequest#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayCreateModelRequest#schema
   */
  readonly schema?: string;

  /**
   * @schema ApiGatewayCreateModelRequest#contentType
   */
  readonly contentType: string;

}

/**
 * Converts an object of type 'ApiGatewayCreateModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateModelRequest(obj: ApiGatewayCreateModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'name': obj.name,
    'description': obj.description,
    'schema': obj.schema,
    'contentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayModel
 */
export interface ApiGatewayModel {
  /**
   * @schema ApiGatewayModel#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayModel#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayModel#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayModel#schema
   */
  readonly schema?: string;

  /**
   * @schema ApiGatewayModel#contentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'ApiGatewayModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayModel(obj: ApiGatewayModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'schema': obj.schema,
    'contentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateRequestValidatorRequest
 */
export interface ApiGatewayCreateRequestValidatorRequest {
  /**
   * @schema ApiGatewayCreateRequestValidatorRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayCreateRequestValidatorRequest#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayCreateRequestValidatorRequest#validateRequestBody
   */
  readonly validateRequestBody?: boolean;

  /**
   * @schema ApiGatewayCreateRequestValidatorRequest#validateRequestParameters
   */
  readonly validateRequestParameters?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayCreateRequestValidatorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateRequestValidatorRequest(obj: ApiGatewayCreateRequestValidatorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'name': obj.name,
    'validateRequestBody': obj.validateRequestBody,
    'validateRequestParameters': obj.validateRequestParameters,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayRequestValidator
 */
export interface ApiGatewayRequestValidator {
  /**
   * @schema ApiGatewayRequestValidator#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayRequestValidator#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayRequestValidator#validateRequestBody
   */
  readonly validateRequestBody?: boolean;

  /**
   * @schema ApiGatewayRequestValidator#validateRequestParameters
   */
  readonly validateRequestParameters?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayRequestValidator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayRequestValidator(obj: ApiGatewayRequestValidator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'validateRequestBody': obj.validateRequestBody,
    'validateRequestParameters': obj.validateRequestParameters,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateResourceRequest
 */
export interface ApiGatewayCreateResourceRequest {
  /**
   * @schema ApiGatewayCreateResourceRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayCreateResourceRequest#parentId
   */
  readonly parentId: string;

  /**
   * @schema ApiGatewayCreateResourceRequest#pathPart
   */
  readonly pathPart: string;

}

/**
 * Converts an object of type 'ApiGatewayCreateResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateResourceRequest(obj: ApiGatewayCreateResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'parentId': obj.parentId,
    'pathPart': obj.pathPart,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayResource
 */
export interface ApiGatewayResource {
  /**
   * @schema ApiGatewayResource#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayResource#parentId
   */
  readonly parentId?: string;

  /**
   * @schema ApiGatewayResource#pathPart
   */
  readonly pathPart?: string;

  /**
   * @schema ApiGatewayResource#path
   */
  readonly path?: string;

  /**
   * @schema ApiGatewayResource#resourceMethods
   */
  readonly resourceMethods?: { [key: string]: ApiGatewayMethod };

}

/**
 * Converts an object of type 'ApiGatewayResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayResource(obj: ApiGatewayResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'parentId': obj.parentId,
    'pathPart': obj.pathPart,
    'path': obj.path,
    'resourceMethods': ((obj.resourceMethods) === undefined) ? undefined : (Object.entries(obj.resourceMethods).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayMethod(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateRestApiRequest
 */
export interface ApiGatewayCreateRestApiRequest {
  /**
   * @schema ApiGatewayCreateRestApiRequest#name
   */
  readonly name: string;

  /**
   * @schema ApiGatewayCreateRestApiRequest#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayCreateRestApiRequest#version
   */
  readonly version?: string;

  /**
   * @schema ApiGatewayCreateRestApiRequest#cloneFrom
   */
  readonly cloneFrom?: string;

  /**
   * @schema ApiGatewayCreateRestApiRequest#binaryMediaTypes
   */
  readonly binaryMediaTypes?: string[];

  /**
   * @schema ApiGatewayCreateRestApiRequest#minimumCompressionSize
   */
  readonly minimumCompressionSize?: number;

  /**
   * @schema ApiGatewayCreateRestApiRequest#apiKeySource
   */
  readonly apiKeySource?: string;

  /**
   * @schema ApiGatewayCreateRestApiRequest#endpointConfiguration
   */
  readonly endpointConfiguration?: ApiGatewayEndpointConfiguration;

  /**
   * @schema ApiGatewayCreateRestApiRequest#policy
   */
  readonly policy?: string;

  /**
   * @schema ApiGatewayCreateRestApiRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayCreateRestApiRequest#disableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayCreateRestApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateRestApiRequest(obj: ApiGatewayCreateRestApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'version': obj.version,
    'cloneFrom': obj.cloneFrom,
    'binaryMediaTypes': obj.binaryMediaTypes?.map(y => y),
    'minimumCompressionSize': obj.minimumCompressionSize,
    'apiKeySource': obj.apiKeySource,
    'endpointConfiguration': toJson_ApiGatewayEndpointConfiguration(obj.endpointConfiguration),
    'policy': obj.policy,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'disableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayRestApi
 */
export interface ApiGatewayRestApi {
  /**
   * @schema ApiGatewayRestApi#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayRestApi#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayRestApi#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayRestApi#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayRestApi#version
   */
  readonly version?: string;

  /**
   * @schema ApiGatewayRestApi#warnings
   */
  readonly warnings?: string[];

  /**
   * @schema ApiGatewayRestApi#binaryMediaTypes
   */
  readonly binaryMediaTypes?: string[];

  /**
   * @schema ApiGatewayRestApi#minimumCompressionSize
   */
  readonly minimumCompressionSize?: number;

  /**
   * @schema ApiGatewayRestApi#apiKeySource
   */
  readonly apiKeySource?: string;

  /**
   * @schema ApiGatewayRestApi#endpointConfiguration
   */
  readonly endpointConfiguration?: ApiGatewayEndpointConfiguration;

  /**
   * @schema ApiGatewayRestApi#policy
   */
  readonly policy?: string;

  /**
   * @schema ApiGatewayRestApi#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayRestApi#disableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayRestApi' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayRestApi(obj: ApiGatewayRestApi | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'createdDate': obj.createdDate,
    'version': obj.version,
    'warnings': obj.warnings?.map(y => y),
    'binaryMediaTypes': obj.binaryMediaTypes?.map(y => y),
    'minimumCompressionSize': obj.minimumCompressionSize,
    'apiKeySource': obj.apiKeySource,
    'endpointConfiguration': toJson_ApiGatewayEndpointConfiguration(obj.endpointConfiguration),
    'policy': obj.policy,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'disableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateStageRequest
 */
export interface ApiGatewayCreateStageRequest {
  /**
   * @schema ApiGatewayCreateStageRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayCreateStageRequest#stageName
   */
  readonly stageName: string;

  /**
   * @schema ApiGatewayCreateStageRequest#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema ApiGatewayCreateStageRequest#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayCreateStageRequest#cacheClusterEnabled
   */
  readonly cacheClusterEnabled?: boolean;

  /**
   * @schema ApiGatewayCreateStageRequest#cacheClusterSize
   */
  readonly cacheClusterSize?: string;

  /**
   * @schema ApiGatewayCreateStageRequest#variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema ApiGatewayCreateStageRequest#documentationVersion
   */
  readonly documentationVersion?: string;

  /**
   * @schema ApiGatewayCreateStageRequest#canarySettings
   */
  readonly canarySettings?: ApiGatewayCanarySettings;

  /**
   * @schema ApiGatewayCreateStageRequest#tracingEnabled
   */
  readonly tracingEnabled?: boolean;

  /**
   * @schema ApiGatewayCreateStageRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayCreateStageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateStageRequest(obj: ApiGatewayCreateStageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
    'deploymentId': obj.deploymentId,
    'description': obj.description,
    'cacheClusterEnabled': obj.cacheClusterEnabled,
    'cacheClusterSize': obj.cacheClusterSize,
    'variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'documentationVersion': obj.documentationVersion,
    'canarySettings': toJson_ApiGatewayCanarySettings(obj.canarySettings),
    'tracingEnabled': obj.tracingEnabled,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayStage
 */
export interface ApiGatewayStage {
  /**
   * @schema ApiGatewayStage#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayStage#clientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ApiGatewayStage#stageName
   */
  readonly stageName?: string;

  /**
   * @schema ApiGatewayStage#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayStage#cacheClusterEnabled
   */
  readonly cacheClusterEnabled?: boolean;

  /**
   * @schema ApiGatewayStage#cacheClusterSize
   */
  readonly cacheClusterSize?: string;

  /**
   * @schema ApiGatewayStage#cacheClusterStatus
   */
  readonly cacheClusterStatus?: string;

  /**
   * @schema ApiGatewayStage#methodSettings
   */
  readonly methodSettings?: { [key: string]: ApiGatewayMethodSetting };

  /**
   * @schema ApiGatewayStage#variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema ApiGatewayStage#documentationVersion
   */
  readonly documentationVersion?: string;

  /**
   * @schema ApiGatewayStage#accessLogSettings
   */
  readonly accessLogSettings?: ApiGatewayAccessLogSettings;

  /**
   * @schema ApiGatewayStage#canarySettings
   */
  readonly canarySettings?: ApiGatewayCanarySettings;

  /**
   * @schema ApiGatewayStage#tracingEnabled
   */
  readonly tracingEnabled?: boolean;

  /**
   * @schema ApiGatewayStage#webAclArn
   */
  readonly webAclArn?: string;

  /**
   * @schema ApiGatewayStage#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayStage#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayStage#lastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

}

/**
 * Converts an object of type 'ApiGatewayStage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayStage(obj: ApiGatewayStage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'clientCertificateId': obj.clientCertificateId,
    'stageName': obj.stageName,
    'description': obj.description,
    'cacheClusterEnabled': obj.cacheClusterEnabled,
    'cacheClusterSize': obj.cacheClusterSize,
    'cacheClusterStatus': obj.cacheClusterStatus,
    'methodSettings': ((obj.methodSettings) === undefined) ? undefined : (Object.entries(obj.methodSettings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayMethodSetting(i[1]) }), {})),
    'variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'documentationVersion': obj.documentationVersion,
    'accessLogSettings': toJson_ApiGatewayAccessLogSettings(obj.accessLogSettings),
    'canarySettings': toJson_ApiGatewayCanarySettings(obj.canarySettings),
    'tracingEnabled': obj.tracingEnabled,
    'webAclArn': obj.webAclArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'createdDate': obj.createdDate,
    'lastUpdatedDate': obj.lastUpdatedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateUsagePlanRequest
 */
export interface ApiGatewayCreateUsagePlanRequest {
  /**
   * @schema ApiGatewayCreateUsagePlanRequest#name
   */
  readonly name: string;

  /**
   * @schema ApiGatewayCreateUsagePlanRequest#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayCreateUsagePlanRequest#apiStages
   */
  readonly apiStages?: ApiGatewayApiStage[];

  /**
   * @schema ApiGatewayCreateUsagePlanRequest#throttle
   */
  readonly throttle?: ApiGatewayThrottleSettings;

  /**
   * @schema ApiGatewayCreateUsagePlanRequest#quota
   */
  readonly quota?: ApiGatewayQuotaSettings;

  /**
   * @schema ApiGatewayCreateUsagePlanRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayCreateUsagePlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateUsagePlanRequest(obj: ApiGatewayCreateUsagePlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'apiStages': obj.apiStages?.map(y => toJson_ApiGatewayApiStage(y)),
    'throttle': toJson_ApiGatewayThrottleSettings(obj.throttle),
    'quota': toJson_ApiGatewayQuotaSettings(obj.quota),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUsagePlan
 */
export interface ApiGatewayUsagePlan {
  /**
   * @schema ApiGatewayUsagePlan#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayUsagePlan#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayUsagePlan#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayUsagePlan#apiStages
   */
  readonly apiStages?: ApiGatewayApiStage[];

  /**
   * @schema ApiGatewayUsagePlan#throttle
   */
  readonly throttle?: ApiGatewayThrottleSettings;

  /**
   * @schema ApiGatewayUsagePlan#quota
   */
  readonly quota?: ApiGatewayQuotaSettings;

  /**
   * @schema ApiGatewayUsagePlan#productCode
   */
  readonly productCode?: string;

  /**
   * @schema ApiGatewayUsagePlan#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayUsagePlan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUsagePlan(obj: ApiGatewayUsagePlan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'apiStages': obj.apiStages?.map(y => toJson_ApiGatewayApiStage(y)),
    'throttle': toJson_ApiGatewayThrottleSettings(obj.throttle),
    'quota': toJson_ApiGatewayQuotaSettings(obj.quota),
    'productCode': obj.productCode,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateUsagePlanKeyRequest
 */
export interface ApiGatewayCreateUsagePlanKeyRequest {
  /**
   * @schema ApiGatewayCreateUsagePlanKeyRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema ApiGatewayCreateUsagePlanKeyRequest#keyId
   */
  readonly keyId: string;

  /**
   * @schema ApiGatewayCreateUsagePlanKeyRequest#keyType
   */
  readonly keyType: string;

}

/**
 * Converts an object of type 'ApiGatewayCreateUsagePlanKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateUsagePlanKeyRequest(obj: ApiGatewayCreateUsagePlanKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
    'keyId': obj.keyId,
    'keyType': obj.keyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUsagePlanKey
 */
export interface ApiGatewayUsagePlanKey {
  /**
   * @schema ApiGatewayUsagePlanKey#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayUsagePlanKey#type
   */
  readonly type?: string;

  /**
   * @schema ApiGatewayUsagePlanKey#value
   */
  readonly value?: string;

  /**
   * @schema ApiGatewayUsagePlanKey#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ApiGatewayUsagePlanKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUsagePlanKey(obj: ApiGatewayUsagePlanKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'type': obj.type,
    'value': obj.value,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCreateVpcLinkRequest
 */
export interface ApiGatewayCreateVpcLinkRequest {
  /**
   * @schema ApiGatewayCreateVpcLinkRequest#name
   */
  readonly name: string;

  /**
   * @schema ApiGatewayCreateVpcLinkRequest#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayCreateVpcLinkRequest#targetArns
   */
  readonly targetArns: string[];

  /**
   * @schema ApiGatewayCreateVpcLinkRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayCreateVpcLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCreateVpcLinkRequest(obj: ApiGatewayCreateVpcLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'targetArns': obj.targetArns?.map(y => y),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayVpcLink
 */
export interface ApiGatewayVpcLink {
  /**
   * @schema ApiGatewayVpcLink#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewayVpcLink#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayVpcLink#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayVpcLink#targetArns
   */
  readonly targetArns?: string[];

  /**
   * @schema ApiGatewayVpcLink#status
   */
  readonly status?: string;

  /**
   * @schema ApiGatewayVpcLink#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ApiGatewayVpcLink#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayVpcLink' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayVpcLink(obj: ApiGatewayVpcLink | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'targetArns': obj.targetArns?.map(y => y),
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteApiKeyRequest
 */
export interface ApiGatewayDeleteApiKeyRequest {
  /**
   * @schema ApiGatewayDeleteApiKeyRequest#apiKey
   */
  readonly apiKey: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteApiKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteApiKeyRequest(obj: ApiGatewayDeleteApiKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiKey': obj.apiKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteAuthorizerRequest
 */
export interface ApiGatewayDeleteAuthorizerRequest {
  /**
   * @schema ApiGatewayDeleteAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteAuthorizerRequest#authorizerId
   */
  readonly authorizerId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteAuthorizerRequest(obj: ApiGatewayDeleteAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'authorizerId': obj.authorizerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteBasePathMappingRequest
 */
export interface ApiGatewayDeleteBasePathMappingRequest {
  /**
   * @schema ApiGatewayDeleteBasePathMappingRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema ApiGatewayDeleteBasePathMappingRequest#basePath
   */
  readonly basePath: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteBasePathMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteBasePathMappingRequest(obj: ApiGatewayDeleteBasePathMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'basePath': obj.basePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteClientCertificateRequest
 */
export interface ApiGatewayDeleteClientCertificateRequest {
  /**
   * @schema ApiGatewayDeleteClientCertificateRequest#clientCertificateId
   */
  readonly clientCertificateId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteClientCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteClientCertificateRequest(obj: ApiGatewayDeleteClientCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientCertificateId': obj.clientCertificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteDeploymentRequest
 */
export interface ApiGatewayDeleteDeploymentRequest {
  /**
   * @schema ApiGatewayDeleteDeploymentRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteDeploymentRequest#deploymentId
   */
  readonly deploymentId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteDeploymentRequest(obj: ApiGatewayDeleteDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'deploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteDocumentationPartRequest
 */
export interface ApiGatewayDeleteDocumentationPartRequest {
  /**
   * @schema ApiGatewayDeleteDocumentationPartRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteDocumentationPartRequest#documentationPartId
   */
  readonly documentationPartId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteDocumentationPartRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteDocumentationPartRequest(obj: ApiGatewayDeleteDocumentationPartRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'documentationPartId': obj.documentationPartId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteDocumentationVersionRequest
 */
export interface ApiGatewayDeleteDocumentationVersionRequest {
  /**
   * @schema ApiGatewayDeleteDocumentationVersionRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteDocumentationVersionRequest#documentationVersion
   */
  readonly documentationVersion: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteDocumentationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteDocumentationVersionRequest(obj: ApiGatewayDeleteDocumentationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'documentationVersion': obj.documentationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteDomainNameRequest
 */
export interface ApiGatewayDeleteDomainNameRequest {
  /**
   * @schema ApiGatewayDeleteDomainNameRequest#domainName
   */
  readonly domainName: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteDomainNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteDomainNameRequest(obj: ApiGatewayDeleteDomainNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteGatewayResponseRequest
 */
export interface ApiGatewayDeleteGatewayResponseRequest {
  /**
   * @schema ApiGatewayDeleteGatewayResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteGatewayResponseRequest#responseType
   */
  readonly responseType: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteGatewayResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteGatewayResponseRequest(obj: ApiGatewayDeleteGatewayResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'responseType': obj.responseType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteIntegrationRequest
 */
export interface ApiGatewayDeleteIntegrationRequest {
  /**
   * @schema ApiGatewayDeleteIntegrationRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteIntegrationRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayDeleteIntegrationRequest#httpMethod
   */
  readonly httpMethod: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteIntegrationRequest(obj: ApiGatewayDeleteIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteIntegrationResponseRequest
 */
export interface ApiGatewayDeleteIntegrationResponseRequest {
  /**
   * @schema ApiGatewayDeleteIntegrationResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteIntegrationResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayDeleteIntegrationResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayDeleteIntegrationResponseRequest#statusCode
   */
  readonly statusCode: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteIntegrationResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteIntegrationResponseRequest(obj: ApiGatewayDeleteIntegrationResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'statusCode': obj.statusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteMethodRequest
 */
export interface ApiGatewayDeleteMethodRequest {
  /**
   * @schema ApiGatewayDeleteMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayDeleteMethodRequest#httpMethod
   */
  readonly httpMethod: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteMethodRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteMethodRequest(obj: ApiGatewayDeleteMethodRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteMethodResponseRequest
 */
export interface ApiGatewayDeleteMethodResponseRequest {
  /**
   * @schema ApiGatewayDeleteMethodResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteMethodResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayDeleteMethodResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayDeleteMethodResponseRequest#statusCode
   */
  readonly statusCode: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteMethodResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteMethodResponseRequest(obj: ApiGatewayDeleteMethodResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'statusCode': obj.statusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteModelRequest
 */
export interface ApiGatewayDeleteModelRequest {
  /**
   * @schema ApiGatewayDeleteModelRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteModelRequest#modelName
   */
  readonly modelName: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteModelRequest(obj: ApiGatewayDeleteModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'modelName': obj.modelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteRequestValidatorRequest
 */
export interface ApiGatewayDeleteRequestValidatorRequest {
  /**
   * @schema ApiGatewayDeleteRequestValidatorRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteRequestValidatorRequest#requestValidatorId
   */
  readonly requestValidatorId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteRequestValidatorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteRequestValidatorRequest(obj: ApiGatewayDeleteRequestValidatorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'requestValidatorId': obj.requestValidatorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteResourceRequest
 */
export interface ApiGatewayDeleteResourceRequest {
  /**
   * @schema ApiGatewayDeleteResourceRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteResourceRequest#resourceId
   */
  readonly resourceId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteResourceRequest(obj: ApiGatewayDeleteResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteRestApiRequest
 */
export interface ApiGatewayDeleteRestApiRequest {
  /**
   * @schema ApiGatewayDeleteRestApiRequest#restApiId
   */
  readonly restApiId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteRestApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteRestApiRequest(obj: ApiGatewayDeleteRestApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteStageRequest
 */
export interface ApiGatewayDeleteStageRequest {
  /**
   * @schema ApiGatewayDeleteStageRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayDeleteStageRequest#stageName
   */
  readonly stageName: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteStageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteStageRequest(obj: ApiGatewayDeleteStageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteUsagePlanRequest
 */
export interface ApiGatewayDeleteUsagePlanRequest {
  /**
   * @schema ApiGatewayDeleteUsagePlanRequest#usagePlanId
   */
  readonly usagePlanId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteUsagePlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteUsagePlanRequest(obj: ApiGatewayDeleteUsagePlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteUsagePlanKeyRequest
 */
export interface ApiGatewayDeleteUsagePlanKeyRequest {
  /**
   * @schema ApiGatewayDeleteUsagePlanKeyRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema ApiGatewayDeleteUsagePlanKeyRequest#keyId
   */
  readonly keyId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteUsagePlanKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteUsagePlanKeyRequest(obj: ApiGatewayDeleteUsagePlanKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
    'keyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeleteVpcLinkRequest
 */
export interface ApiGatewayDeleteVpcLinkRequest {
  /**
   * @schema ApiGatewayDeleteVpcLinkRequest#vpcLinkId
   */
  readonly vpcLinkId: string;

}

/**
 * Converts an object of type 'ApiGatewayDeleteVpcLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeleteVpcLinkRequest(obj: ApiGatewayDeleteVpcLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpcLinkId': obj.vpcLinkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayFlushStageAuthorizersCacheRequest
 */
export interface ApiGatewayFlushStageAuthorizersCacheRequest {
  /**
   * @schema ApiGatewayFlushStageAuthorizersCacheRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayFlushStageAuthorizersCacheRequest#stageName
   */
  readonly stageName: string;

}

/**
 * Converts an object of type 'ApiGatewayFlushStageAuthorizersCacheRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayFlushStageAuthorizersCacheRequest(obj: ApiGatewayFlushStageAuthorizersCacheRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayFlushStageCacheRequest
 */
export interface ApiGatewayFlushStageCacheRequest {
  /**
   * @schema ApiGatewayFlushStageCacheRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayFlushStageCacheRequest#stageName
   */
  readonly stageName: string;

}

/**
 * Converts an object of type 'ApiGatewayFlushStageCacheRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayFlushStageCacheRequest(obj: ApiGatewayFlushStageCacheRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGenerateClientCertificateRequest
 */
export interface ApiGatewayGenerateClientCertificateRequest {
  /**
   * @schema ApiGatewayGenerateClientCertificateRequest#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayGenerateClientCertificateRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayGenerateClientCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGenerateClientCertificateRequest(obj: ApiGatewayGenerateClientCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayClientCertificate
 */
export interface ApiGatewayClientCertificate {
  /**
   * @schema ApiGatewayClientCertificate#clientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ApiGatewayClientCertificate#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayClientCertificate#pemEncodedCertificate
   */
  readonly pemEncodedCertificate?: string;

  /**
   * @schema ApiGatewayClientCertificate#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayClientCertificate#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema ApiGatewayClientCertificate#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayClientCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayClientCertificate(obj: ApiGatewayClientCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientCertificateId': obj.clientCertificateId,
    'description': obj.description,
    'pemEncodedCertificate': obj.pemEncodedCertificate,
    'createdDate': obj.createdDate,
    'expirationDate': obj.expirationDate,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetAccountRequest
 */
export interface ApiGatewayGetAccountRequest {
}

/**
 * Converts an object of type 'ApiGatewayGetAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetAccountRequest(obj: ApiGatewayGetAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayAccount
 */
export interface ApiGatewayAccount {
  /**
   * @schema ApiGatewayAccount#cloudwatchRoleArn
   */
  readonly cloudwatchRoleArn?: string;

  /**
   * @schema ApiGatewayAccount#throttleSettings
   */
  readonly throttleSettings?: ApiGatewayThrottleSettings;

  /**
   * @schema ApiGatewayAccount#features
   */
  readonly features?: string[];

  /**
   * @schema ApiGatewayAccount#apiKeyVersion
   */
  readonly apiKeyVersion?: string;

}

/**
 * Converts an object of type 'ApiGatewayAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayAccount(obj: ApiGatewayAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cloudwatchRoleArn': obj.cloudwatchRoleArn,
    'throttleSettings': toJson_ApiGatewayThrottleSettings(obj.throttleSettings),
    'features': obj.features?.map(y => y),
    'apiKeyVersion': obj.apiKeyVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetApiKeyRequest
 */
export interface ApiGatewayGetApiKeyRequest {
  /**
   * @schema ApiGatewayGetApiKeyRequest#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema ApiGatewayGetApiKeyRequest#includeValue
   */
  readonly includeValue?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayGetApiKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetApiKeyRequest(obj: ApiGatewayGetApiKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiKey': obj.apiKey,
    'includeValue': obj.includeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetApiKeysRequest
 */
export interface ApiGatewayGetApiKeysRequest {
  /**
   * @schema ApiGatewayGetApiKeysRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetApiKeysRequest#limit
   */
  readonly limit?: number;

  /**
   * @schema ApiGatewayGetApiKeysRequest#nameQuery
   */
  readonly nameQuery?: string;

  /**
   * @schema ApiGatewayGetApiKeysRequest#customerId
   */
  readonly customerId?: string;

  /**
   * @schema ApiGatewayGetApiKeysRequest#includeValues
   */
  readonly includeValues?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayGetApiKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetApiKeysRequest(obj: ApiGatewayGetApiKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'limit': obj.limit,
    'nameQuery': obj.nameQuery,
    'customerId': obj.customerId,
    'includeValues': obj.includeValues,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayApiKeys
 */
export interface ApiGatewayApiKeys {
  /**
   * @schema ApiGatewayApiKeys#warnings
   */
  readonly warnings?: string[];

  /**
   * @schema ApiGatewayApiKeys#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayApiKeys#items
   */
  readonly items?: ApiGatewayApiKey[];

}

/**
 * Converts an object of type 'ApiGatewayApiKeys' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayApiKeys(obj: ApiGatewayApiKeys | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'warnings': obj.warnings?.map(y => y),
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayApiKey(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetAuthorizerRequest
 */
export interface ApiGatewayGetAuthorizerRequest {
  /**
   * @schema ApiGatewayGetAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetAuthorizerRequest#authorizerId
   */
  readonly authorizerId: string;

}

/**
 * Converts an object of type 'ApiGatewayGetAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetAuthorizerRequest(obj: ApiGatewayGetAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'authorizerId': obj.authorizerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetAuthorizersRequest
 */
export interface ApiGatewayGetAuthorizersRequest {
  /**
   * @schema ApiGatewayGetAuthorizersRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetAuthorizersRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetAuthorizersRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetAuthorizersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetAuthorizersRequest(obj: ApiGatewayGetAuthorizersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayAuthorizers
 */
export interface ApiGatewayAuthorizers {
  /**
   * @schema ApiGatewayAuthorizers#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayAuthorizers#items
   */
  readonly items?: ApiGatewayAuthorizer[];

}

/**
 * Converts an object of type 'ApiGatewayAuthorizers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayAuthorizers(obj: ApiGatewayAuthorizers | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayAuthorizer(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetBasePathMappingRequest
 */
export interface ApiGatewayGetBasePathMappingRequest {
  /**
   * @schema ApiGatewayGetBasePathMappingRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema ApiGatewayGetBasePathMappingRequest#basePath
   */
  readonly basePath: string;

}

/**
 * Converts an object of type 'ApiGatewayGetBasePathMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetBasePathMappingRequest(obj: ApiGatewayGetBasePathMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'basePath': obj.basePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetBasePathMappingsRequest
 */
export interface ApiGatewayGetBasePathMappingsRequest {
  /**
   * @schema ApiGatewayGetBasePathMappingsRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema ApiGatewayGetBasePathMappingsRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetBasePathMappingsRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetBasePathMappingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetBasePathMappingsRequest(obj: ApiGatewayGetBasePathMappingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayBasePathMappings
 */
export interface ApiGatewayBasePathMappings {
  /**
   * @schema ApiGatewayBasePathMappings#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayBasePathMappings#items
   */
  readonly items?: ApiGatewayBasePathMapping[];

}

/**
 * Converts an object of type 'ApiGatewayBasePathMappings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayBasePathMappings(obj: ApiGatewayBasePathMappings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayBasePathMapping(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetClientCertificateRequest
 */
export interface ApiGatewayGetClientCertificateRequest {
  /**
   * @schema ApiGatewayGetClientCertificateRequest#clientCertificateId
   */
  readonly clientCertificateId: string;

}

/**
 * Converts an object of type 'ApiGatewayGetClientCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetClientCertificateRequest(obj: ApiGatewayGetClientCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientCertificateId': obj.clientCertificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetClientCertificatesRequest
 */
export interface ApiGatewayGetClientCertificatesRequest {
  /**
   * @schema ApiGatewayGetClientCertificatesRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetClientCertificatesRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetClientCertificatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetClientCertificatesRequest(obj: ApiGatewayGetClientCertificatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayClientCertificates
 */
export interface ApiGatewayClientCertificates {
  /**
   * @schema ApiGatewayClientCertificates#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayClientCertificates#items
   */
  readonly items?: ApiGatewayClientCertificate[];

}

/**
 * Converts an object of type 'ApiGatewayClientCertificates' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayClientCertificates(obj: ApiGatewayClientCertificates | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayClientCertificate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetDeploymentRequest
 */
export interface ApiGatewayGetDeploymentRequest {
  /**
   * @schema ApiGatewayGetDeploymentRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetDeploymentRequest#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema ApiGatewayGetDeploymentRequest#embed
   */
  readonly embed?: string[];

}

/**
 * Converts an object of type 'ApiGatewayGetDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetDeploymentRequest(obj: ApiGatewayGetDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'deploymentId': obj.deploymentId,
    'embed': obj.embed?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetDeploymentsRequest
 */
export interface ApiGatewayGetDeploymentsRequest {
  /**
   * @schema ApiGatewayGetDeploymentsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetDeploymentsRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetDeploymentsRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetDeploymentsRequest(obj: ApiGatewayGetDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeployments
 */
export interface ApiGatewayDeployments {
  /**
   * @schema ApiGatewayDeployments#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayDeployments#items
   */
  readonly items?: ApiGatewayDeployment[];

}

/**
 * Converts an object of type 'ApiGatewayDeployments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeployments(obj: ApiGatewayDeployments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayDeployment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetDocumentationPartRequest
 */
export interface ApiGatewayGetDocumentationPartRequest {
  /**
   * @schema ApiGatewayGetDocumentationPartRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetDocumentationPartRequest#documentationPartId
   */
  readonly documentationPartId: string;

}

/**
 * Converts an object of type 'ApiGatewayGetDocumentationPartRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetDocumentationPartRequest(obj: ApiGatewayGetDocumentationPartRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'documentationPartId': obj.documentationPartId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetDocumentationPartsRequest
 */
export interface ApiGatewayGetDocumentationPartsRequest {
  /**
   * @schema ApiGatewayGetDocumentationPartsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetDocumentationPartsRequest#type
   */
  readonly type?: string;

  /**
   * @schema ApiGatewayGetDocumentationPartsRequest#nameQuery
   */
  readonly nameQuery?: string;

  /**
   * @schema ApiGatewayGetDocumentationPartsRequest#path
   */
  readonly path?: string;

  /**
   * @schema ApiGatewayGetDocumentationPartsRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetDocumentationPartsRequest#limit
   */
  readonly limit?: number;

  /**
   * @schema ApiGatewayGetDocumentationPartsRequest#locationStatus
   */
  readonly locationStatus?: string;

}

/**
 * Converts an object of type 'ApiGatewayGetDocumentationPartsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetDocumentationPartsRequest(obj: ApiGatewayGetDocumentationPartsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'type': obj.type,
    'nameQuery': obj.nameQuery,
    'path': obj.path,
    'position': obj.position,
    'limit': obj.limit,
    'locationStatus': obj.locationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDocumentationParts
 */
export interface ApiGatewayDocumentationParts {
  /**
   * @schema ApiGatewayDocumentationParts#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayDocumentationParts#items
   */
  readonly items?: ApiGatewayDocumentationPart[];

}

/**
 * Converts an object of type 'ApiGatewayDocumentationParts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDocumentationParts(obj: ApiGatewayDocumentationParts | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayDocumentationPart(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetDocumentationVersionRequest
 */
export interface ApiGatewayGetDocumentationVersionRequest {
  /**
   * @schema ApiGatewayGetDocumentationVersionRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetDocumentationVersionRequest#documentationVersion
   */
  readonly documentationVersion: string;

}

/**
 * Converts an object of type 'ApiGatewayGetDocumentationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetDocumentationVersionRequest(obj: ApiGatewayGetDocumentationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'documentationVersion': obj.documentationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetDocumentationVersionsRequest
 */
export interface ApiGatewayGetDocumentationVersionsRequest {
  /**
   * @schema ApiGatewayGetDocumentationVersionsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetDocumentationVersionsRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetDocumentationVersionsRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetDocumentationVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetDocumentationVersionsRequest(obj: ApiGatewayGetDocumentationVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDocumentationVersions
 */
export interface ApiGatewayDocumentationVersions {
  /**
   * @schema ApiGatewayDocumentationVersions#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayDocumentationVersions#items
   */
  readonly items?: ApiGatewayDocumentationVersion[];

}

/**
 * Converts an object of type 'ApiGatewayDocumentationVersions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDocumentationVersions(obj: ApiGatewayDocumentationVersions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayDocumentationVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetDomainNameRequest
 */
export interface ApiGatewayGetDomainNameRequest {
  /**
   * @schema ApiGatewayGetDomainNameRequest#domainName
   */
  readonly domainName: string;

}

/**
 * Converts an object of type 'ApiGatewayGetDomainNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetDomainNameRequest(obj: ApiGatewayGetDomainNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetDomainNamesRequest
 */
export interface ApiGatewayGetDomainNamesRequest {
  /**
   * @schema ApiGatewayGetDomainNamesRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetDomainNamesRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetDomainNamesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetDomainNamesRequest(obj: ApiGatewayGetDomainNamesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDomainNames
 */
export interface ApiGatewayDomainNames {
  /**
   * @schema ApiGatewayDomainNames#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayDomainNames#items
   */
  readonly items?: ApiGatewayDomainName[];

}

/**
 * Converts an object of type 'ApiGatewayDomainNames' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDomainNames(obj: ApiGatewayDomainNames | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayDomainName(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetExportRequest
 */
export interface ApiGatewayGetExportRequest {
  /**
   * @schema ApiGatewayGetExportRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetExportRequest#stageName
   */
  readonly stageName: string;

  /**
   * @schema ApiGatewayGetExportRequest#exportType
   */
  readonly exportType: string;

  /**
   * @schema ApiGatewayGetExportRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayGetExportRequest#accepts
   */
  readonly accepts?: string;

}

/**
 * Converts an object of type 'ApiGatewayGetExportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetExportRequest(obj: ApiGatewayGetExportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
    'exportType': obj.exportType,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'accepts': obj.accepts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayExportResponse
 */
export interface ApiGatewayExportResponse {
  /**
   * @schema ApiGatewayExportResponse#contentType
   */
  readonly contentType?: string;

  /**
   * @schema ApiGatewayExportResponse#contentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema ApiGatewayExportResponse#body
   */
  readonly body?: any;

}

/**
 * Converts an object of type 'ApiGatewayExportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayExportResponse(obj: ApiGatewayExportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contentType': obj.contentType,
    'contentDisposition': obj.contentDisposition,
    'body': obj.body,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetGatewayResponseRequest
 */
export interface ApiGatewayGetGatewayResponseRequest {
  /**
   * @schema ApiGatewayGetGatewayResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetGatewayResponseRequest#responseType
   */
  readonly responseType: string;

}

/**
 * Converts an object of type 'ApiGatewayGetGatewayResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetGatewayResponseRequest(obj: ApiGatewayGetGatewayResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'responseType': obj.responseType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGatewayResponse
 */
export interface ApiGatewayGatewayResponse {
  /**
   * @schema ApiGatewayGatewayResponse#responseType
   */
  readonly responseType?: string;

  /**
   * @schema ApiGatewayGatewayResponse#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema ApiGatewayGatewayResponse#responseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayGatewayResponse#responseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayGatewayResponse#defaultResponse
   */
  readonly defaultResponse?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGatewayResponse(obj: ApiGatewayGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'responseType': obj.responseType,
    'statusCode': obj.statusCode,
    'responseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'responseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'defaultResponse': obj.defaultResponse,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetGatewayResponsesRequest
 */
export interface ApiGatewayGetGatewayResponsesRequest {
  /**
   * @schema ApiGatewayGetGatewayResponsesRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetGatewayResponsesRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetGatewayResponsesRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetGatewayResponsesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetGatewayResponsesRequest(obj: ApiGatewayGetGatewayResponsesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGatewayResponses
 */
export interface ApiGatewayGatewayResponses {
  /**
   * @schema ApiGatewayGatewayResponses#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGatewayResponses#items
   */
  readonly items?: ApiGatewayGatewayResponse[];

}

/**
 * Converts an object of type 'ApiGatewayGatewayResponses' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGatewayResponses(obj: ApiGatewayGatewayResponses | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayGatewayResponse(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetIntegrationRequest
 */
export interface ApiGatewayGetIntegrationRequest {
  /**
   * @schema ApiGatewayGetIntegrationRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetIntegrationRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayGetIntegrationRequest#httpMethod
   */
  readonly httpMethod: string;

}

/**
 * Converts an object of type 'ApiGatewayGetIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetIntegrationRequest(obj: ApiGatewayGetIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayIntegration
 */
export interface ApiGatewayIntegration {
  /**
   * @schema ApiGatewayIntegration#type
   */
  readonly type?: string;

  /**
   * @schema ApiGatewayIntegration#httpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema ApiGatewayIntegration#uri
   */
  readonly uri?: string;

  /**
   * @schema ApiGatewayIntegration#connectionType
   */
  readonly connectionType?: string;

  /**
   * @schema ApiGatewayIntegration#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema ApiGatewayIntegration#credentials
   */
  readonly credentials?: string;

  /**
   * @schema ApiGatewayIntegration#requestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayIntegration#requestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayIntegration#passthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema ApiGatewayIntegration#contentHandling
   */
  readonly contentHandling?: string;

  /**
   * @schema ApiGatewayIntegration#timeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema ApiGatewayIntegration#cacheNamespace
   */
  readonly cacheNamespace?: string;

  /**
   * @schema ApiGatewayIntegration#cacheKeyParameters
   */
  readonly cacheKeyParameters?: string[];

  /**
   * @schema ApiGatewayIntegration#integrationResponses
   */
  readonly integrationResponses?: { [key: string]: ApiGatewayIntegrationResponse };

  /**
   * @schema ApiGatewayIntegration#tlsConfig
   */
  readonly tlsConfig?: ApiGatewayTlsConfig;

}

/**
 * Converts an object of type 'ApiGatewayIntegration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayIntegration(obj: ApiGatewayIntegration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'httpMethod': obj.httpMethod,
    'uri': obj.uri,
    'connectionType': obj.connectionType,
    'connectionId': obj.connectionId,
    'credentials': obj.credentials,
    'requestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'requestTemplates': ((obj.requestTemplates) === undefined) ? undefined : (Object.entries(obj.requestTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'passthroughBehavior': obj.passthroughBehavior,
    'contentHandling': obj.contentHandling,
    'timeoutInMillis': obj.timeoutInMillis,
    'cacheNamespace': obj.cacheNamespace,
    'cacheKeyParameters': obj.cacheKeyParameters?.map(y => y),
    'integrationResponses': ((obj.integrationResponses) === undefined) ? undefined : (Object.entries(obj.integrationResponses).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayIntegrationResponse(i[1]) }), {})),
    'tlsConfig': toJson_ApiGatewayTlsConfig(obj.tlsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetIntegrationResponseRequest
 */
export interface ApiGatewayGetIntegrationResponseRequest {
  /**
   * @schema ApiGatewayGetIntegrationResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetIntegrationResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayGetIntegrationResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayGetIntegrationResponseRequest#statusCode
   */
  readonly statusCode: string;

}

/**
 * Converts an object of type 'ApiGatewayGetIntegrationResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetIntegrationResponseRequest(obj: ApiGatewayGetIntegrationResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'statusCode': obj.statusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayIntegrationResponse
 */
export interface ApiGatewayIntegrationResponse {
  /**
   * @schema ApiGatewayIntegrationResponse#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema ApiGatewayIntegrationResponse#selectionPattern
   */
  readonly selectionPattern?: string;

  /**
   * @schema ApiGatewayIntegrationResponse#responseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayIntegrationResponse#responseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayIntegrationResponse#contentHandling
   */
  readonly contentHandling?: string;

}

/**
 * Converts an object of type 'ApiGatewayIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayIntegrationResponse(obj: ApiGatewayIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'statusCode': obj.statusCode,
    'selectionPattern': obj.selectionPattern,
    'responseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'responseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'contentHandling': obj.contentHandling,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetMethodRequest
 */
export interface ApiGatewayGetMethodRequest {
  /**
   * @schema ApiGatewayGetMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayGetMethodRequest#httpMethod
   */
  readonly httpMethod: string;

}

/**
 * Converts an object of type 'ApiGatewayGetMethodRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetMethodRequest(obj: ApiGatewayGetMethodRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayMethod
 */
export interface ApiGatewayMethod {
  /**
   * @schema ApiGatewayMethod#httpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema ApiGatewayMethod#authorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema ApiGatewayMethod#authorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayMethod#apiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema ApiGatewayMethod#requestValidatorId
   */
  readonly requestValidatorId?: string;

  /**
   * @schema ApiGatewayMethod#operationName
   */
  readonly operationName?: string;

  /**
   * @schema ApiGatewayMethod#requestParameters
   */
  readonly requestParameters?: { [key: string]: boolean };

  /**
   * @schema ApiGatewayMethod#requestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayMethod#methodResponses
   */
  readonly methodResponses?: { [key: string]: ApiGatewayMethodResponse };

  /**
   * @schema ApiGatewayMethod#methodIntegration
   */
  readonly methodIntegration?: ApiGatewayIntegration;

  /**
   * @schema ApiGatewayMethod#authorizationScopes
   */
  readonly authorizationScopes?: string[];

}

/**
 * Converts an object of type 'ApiGatewayMethod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayMethod(obj: ApiGatewayMethod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'httpMethod': obj.httpMethod,
    'authorizationType': obj.authorizationType,
    'authorizerId': obj.authorizerId,
    'apiKeyRequired': obj.apiKeyRequired,
    'requestValidatorId': obj.requestValidatorId,
    'operationName': obj.operationName,
    'requestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'requestModels': ((obj.requestModels) === undefined) ? undefined : (Object.entries(obj.requestModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'methodResponses': ((obj.methodResponses) === undefined) ? undefined : (Object.entries(obj.methodResponses).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayMethodResponse(i[1]) }), {})),
    'methodIntegration': toJson_ApiGatewayIntegration(obj.methodIntegration),
    'authorizationScopes': obj.authorizationScopes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetMethodResponseRequest
 */
export interface ApiGatewayGetMethodResponseRequest {
  /**
   * @schema ApiGatewayGetMethodResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetMethodResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayGetMethodResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayGetMethodResponseRequest#statusCode
   */
  readonly statusCode: string;

}

/**
 * Converts an object of type 'ApiGatewayGetMethodResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetMethodResponseRequest(obj: ApiGatewayGetMethodResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'statusCode': obj.statusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayMethodResponse
 */
export interface ApiGatewayMethodResponse {
  /**
   * @schema ApiGatewayMethodResponse#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema ApiGatewayMethodResponse#responseParameters
   */
  readonly responseParameters?: { [key: string]: boolean };

  /**
   * @schema ApiGatewayMethodResponse#responseModels
   */
  readonly responseModels?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayMethodResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayMethodResponse(obj: ApiGatewayMethodResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'statusCode': obj.statusCode,
    'responseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'responseModels': ((obj.responseModels) === undefined) ? undefined : (Object.entries(obj.responseModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetModelRequest
 */
export interface ApiGatewayGetModelRequest {
  /**
   * @schema ApiGatewayGetModelRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetModelRequest#modelName
   */
  readonly modelName: string;

  /**
   * @schema ApiGatewayGetModelRequest#flatten
   */
  readonly flatten?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayGetModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetModelRequest(obj: ApiGatewayGetModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'modelName': obj.modelName,
    'flatten': obj.flatten,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetModelTemplateRequest
 */
export interface ApiGatewayGetModelTemplateRequest {
  /**
   * @schema ApiGatewayGetModelTemplateRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetModelTemplateRequest#modelName
   */
  readonly modelName: string;

}

/**
 * Converts an object of type 'ApiGatewayGetModelTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetModelTemplateRequest(obj: ApiGatewayGetModelTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'modelName': obj.modelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayTemplate
 */
export interface ApiGatewayTemplate {
  /**
   * @schema ApiGatewayTemplate#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ApiGatewayTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayTemplate(obj: ApiGatewayTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetModelsRequest
 */
export interface ApiGatewayGetModelsRequest {
  /**
   * @schema ApiGatewayGetModelsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetModelsRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetModelsRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetModelsRequest(obj: ApiGatewayGetModelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayModels
 */
export interface ApiGatewayModels {
  /**
   * @schema ApiGatewayModels#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayModels#items
   */
  readonly items?: ApiGatewayModel[];

}

/**
 * Converts an object of type 'ApiGatewayModels' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayModels(obj: ApiGatewayModels | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayModel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetRequestValidatorRequest
 */
export interface ApiGatewayGetRequestValidatorRequest {
  /**
   * @schema ApiGatewayGetRequestValidatorRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetRequestValidatorRequest#requestValidatorId
   */
  readonly requestValidatorId: string;

}

/**
 * Converts an object of type 'ApiGatewayGetRequestValidatorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetRequestValidatorRequest(obj: ApiGatewayGetRequestValidatorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'requestValidatorId': obj.requestValidatorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetRequestValidatorsRequest
 */
export interface ApiGatewayGetRequestValidatorsRequest {
  /**
   * @schema ApiGatewayGetRequestValidatorsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetRequestValidatorsRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetRequestValidatorsRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetRequestValidatorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetRequestValidatorsRequest(obj: ApiGatewayGetRequestValidatorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayRequestValidators
 */
export interface ApiGatewayRequestValidators {
  /**
   * @schema ApiGatewayRequestValidators#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayRequestValidators#items
   */
  readonly items?: ApiGatewayRequestValidator[];

}

/**
 * Converts an object of type 'ApiGatewayRequestValidators' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayRequestValidators(obj: ApiGatewayRequestValidators | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayRequestValidator(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetResourceRequest
 */
export interface ApiGatewayGetResourceRequest {
  /**
   * @schema ApiGatewayGetResourceRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetResourceRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayGetResourceRequest#embed
   */
  readonly embed?: string[];

}

/**
 * Converts an object of type 'ApiGatewayGetResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetResourceRequest(obj: ApiGatewayGetResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'embed': obj.embed?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetResourcesRequest
 */
export interface ApiGatewayGetResourcesRequest {
  /**
   * @schema ApiGatewayGetResourcesRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetResourcesRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetResourcesRequest#limit
   */
  readonly limit?: number;

  /**
   * @schema ApiGatewayGetResourcesRequest#embed
   */
  readonly embed?: string[];

}

/**
 * Converts an object of type 'ApiGatewayGetResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetResourcesRequest(obj: ApiGatewayGetResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'position': obj.position,
    'limit': obj.limit,
    'embed': obj.embed?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayResources
 */
export interface ApiGatewayResources {
  /**
   * @schema ApiGatewayResources#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayResources#items
   */
  readonly items?: ApiGatewayResource[];

}

/**
 * Converts an object of type 'ApiGatewayResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayResources(obj: ApiGatewayResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetRestApiRequest
 */
export interface ApiGatewayGetRestApiRequest {
  /**
   * @schema ApiGatewayGetRestApiRequest#restApiId
   */
  readonly restApiId: string;

}

/**
 * Converts an object of type 'ApiGatewayGetRestApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetRestApiRequest(obj: ApiGatewayGetRestApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetRestApisRequest
 */
export interface ApiGatewayGetRestApisRequest {
  /**
   * @schema ApiGatewayGetRestApisRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetRestApisRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetRestApisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetRestApisRequest(obj: ApiGatewayGetRestApisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayRestApis
 */
export interface ApiGatewayRestApis {
  /**
   * @schema ApiGatewayRestApis#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayRestApis#items
   */
  readonly items?: ApiGatewayRestApi[];

}

/**
 * Converts an object of type 'ApiGatewayRestApis' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayRestApis(obj: ApiGatewayRestApis | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayRestApi(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetSdkRequest
 */
export interface ApiGatewayGetSdkRequest {
  /**
   * @schema ApiGatewayGetSdkRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetSdkRequest#stageName
   */
  readonly stageName: string;

  /**
   * @schema ApiGatewayGetSdkRequest#sdkType
   */
  readonly sdkType: string;

  /**
   * @schema ApiGatewayGetSdkRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayGetSdkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetSdkRequest(obj: ApiGatewayGetSdkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
    'sdkType': obj.sdkType,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewaySdkResponse
 */
export interface ApiGatewaySdkResponse {
  /**
   * @schema ApiGatewaySdkResponse#contentType
   */
  readonly contentType?: string;

  /**
   * @schema ApiGatewaySdkResponse#contentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema ApiGatewaySdkResponse#body
   */
  readonly body?: any;

}

/**
 * Converts an object of type 'ApiGatewaySdkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewaySdkResponse(obj: ApiGatewaySdkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contentType': obj.contentType,
    'contentDisposition': obj.contentDisposition,
    'body': obj.body,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetSdkTypeRequest
 */
export interface ApiGatewayGetSdkTypeRequest {
  /**
   * @schema ApiGatewayGetSdkTypeRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'ApiGatewayGetSdkTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetSdkTypeRequest(obj: ApiGatewayGetSdkTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewaySdkType
 */
export interface ApiGatewaySdkType {
  /**
   * @schema ApiGatewaySdkType#id
   */
  readonly id?: string;

  /**
   * @schema ApiGatewaySdkType#friendlyName
   */
  readonly friendlyName?: string;

  /**
   * @schema ApiGatewaySdkType#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewaySdkType#configurationProperties
   */
  readonly configurationProperties?: ApiGatewaySdkConfigurationProperty[];

}

/**
 * Converts an object of type 'ApiGatewaySdkType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewaySdkType(obj: ApiGatewaySdkType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'friendlyName': obj.friendlyName,
    'description': obj.description,
    'configurationProperties': obj.configurationProperties?.map(y => toJson_ApiGatewaySdkConfigurationProperty(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetSdkTypesRequest
 */
export interface ApiGatewayGetSdkTypesRequest {
  /**
   * @schema ApiGatewayGetSdkTypesRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetSdkTypesRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetSdkTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetSdkTypesRequest(obj: ApiGatewayGetSdkTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewaySdkTypes
 */
export interface ApiGatewaySdkTypes {
  /**
   * @schema ApiGatewaySdkTypes#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewaySdkTypes#items
   */
  readonly items?: ApiGatewaySdkType[];

}

/**
 * Converts an object of type 'ApiGatewaySdkTypes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewaySdkTypes(obj: ApiGatewaySdkTypes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewaySdkType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetStageRequest
 */
export interface ApiGatewayGetStageRequest {
  /**
   * @schema ApiGatewayGetStageRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetStageRequest#stageName
   */
  readonly stageName: string;

}

/**
 * Converts an object of type 'ApiGatewayGetStageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetStageRequest(obj: ApiGatewayGetStageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetStagesRequest
 */
export interface ApiGatewayGetStagesRequest {
  /**
   * @schema ApiGatewayGetStagesRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayGetStagesRequest#deploymentId
   */
  readonly deploymentId?: string;

}

/**
 * Converts an object of type 'ApiGatewayGetStagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetStagesRequest(obj: ApiGatewayGetStagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'deploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayStages
 */
export interface ApiGatewayStages {
  /**
   * @schema ApiGatewayStages#item
   */
  readonly item?: ApiGatewayStage[];

}

/**
 * Converts an object of type 'ApiGatewayStages' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayStages(obj: ApiGatewayStages | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'item': obj.item?.map(y => toJson_ApiGatewayStage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetTagsRequest
 */
export interface ApiGatewayGetTagsRequest {
  /**
   * @schema ApiGatewayGetTagsRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ApiGatewayGetTagsRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetTagsRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetTagsRequest(obj: ApiGatewayGetTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayTags
 */
export interface ApiGatewayTags {
  /**
   * @schema ApiGatewayTags#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayTags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayTags(obj: ApiGatewayTags | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetUsageRequest
 */
export interface ApiGatewayGetUsageRequest {
  /**
   * @schema ApiGatewayGetUsageRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema ApiGatewayGetUsageRequest#keyId
   */
  readonly keyId?: string;

  /**
   * @schema ApiGatewayGetUsageRequest#startDate
   */
  readonly startDate: string;

  /**
   * @schema ApiGatewayGetUsageRequest#endDate
   */
  readonly endDate: string;

  /**
   * @schema ApiGatewayGetUsageRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetUsageRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetUsageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetUsageRequest(obj: ApiGatewayGetUsageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
    'keyId': obj.keyId,
    'startDate': obj.startDate,
    'endDate': obj.endDate,
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUsage
 */
export interface ApiGatewayUsage {
  /**
   * @schema ApiGatewayUsage#usagePlanId
   */
  readonly usagePlanId?: string;

  /**
   * @schema ApiGatewayUsage#startDate
   */
  readonly startDate?: string;

  /**
   * @schema ApiGatewayUsage#endDate
   */
  readonly endDate?: string;

  /**
   * @schema ApiGatewayUsage#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayUsage#items
   */
  readonly items?: { [key: string]: number[][] };

}

/**
 * Converts an object of type 'ApiGatewayUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUsage(obj: ApiGatewayUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
    'startDate': obj.startDate,
    'endDate': obj.endDate,
    'position': obj.position,
    'items': ((obj.items) === undefined) ? undefined : (Object.entries(obj.items).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y?.map(y => y)) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetUsagePlanRequest
 */
export interface ApiGatewayGetUsagePlanRequest {
  /**
   * @schema ApiGatewayGetUsagePlanRequest#usagePlanId
   */
  readonly usagePlanId: string;

}

/**
 * Converts an object of type 'ApiGatewayGetUsagePlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetUsagePlanRequest(obj: ApiGatewayGetUsagePlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetUsagePlanKeyRequest
 */
export interface ApiGatewayGetUsagePlanKeyRequest {
  /**
   * @schema ApiGatewayGetUsagePlanKeyRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema ApiGatewayGetUsagePlanKeyRequest#keyId
   */
  readonly keyId: string;

}

/**
 * Converts an object of type 'ApiGatewayGetUsagePlanKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetUsagePlanKeyRequest(obj: ApiGatewayGetUsagePlanKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
    'keyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetUsagePlanKeysRequest
 */
export interface ApiGatewayGetUsagePlanKeysRequest {
  /**
   * @schema ApiGatewayGetUsagePlanKeysRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema ApiGatewayGetUsagePlanKeysRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetUsagePlanKeysRequest#limit
   */
  readonly limit?: number;

  /**
   * @schema ApiGatewayGetUsagePlanKeysRequest#nameQuery
   */
  readonly nameQuery?: string;

}

/**
 * Converts an object of type 'ApiGatewayGetUsagePlanKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetUsagePlanKeysRequest(obj: ApiGatewayGetUsagePlanKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
    'position': obj.position,
    'limit': obj.limit,
    'nameQuery': obj.nameQuery,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUsagePlanKeys
 */
export interface ApiGatewayUsagePlanKeys {
  /**
   * @schema ApiGatewayUsagePlanKeys#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayUsagePlanKeys#items
   */
  readonly items?: ApiGatewayUsagePlanKey[];

}

/**
 * Converts an object of type 'ApiGatewayUsagePlanKeys' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUsagePlanKeys(obj: ApiGatewayUsagePlanKeys | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayUsagePlanKey(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetUsagePlansRequest
 */
export interface ApiGatewayGetUsagePlansRequest {
  /**
   * @schema ApiGatewayGetUsagePlansRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetUsagePlansRequest#keyId
   */
  readonly keyId?: string;

  /**
   * @schema ApiGatewayGetUsagePlansRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetUsagePlansRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetUsagePlansRequest(obj: ApiGatewayGetUsagePlansRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'keyId': obj.keyId,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUsagePlans
 */
export interface ApiGatewayUsagePlans {
  /**
   * @schema ApiGatewayUsagePlans#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayUsagePlans#items
   */
  readonly items?: ApiGatewayUsagePlan[];

}

/**
 * Converts an object of type 'ApiGatewayUsagePlans' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUsagePlans(obj: ApiGatewayUsagePlans | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayUsagePlan(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetVpcLinkRequest
 */
export interface ApiGatewayGetVpcLinkRequest {
  /**
   * @schema ApiGatewayGetVpcLinkRequest#vpcLinkId
   */
  readonly vpcLinkId: string;

}

/**
 * Converts an object of type 'ApiGatewayGetVpcLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetVpcLinkRequest(obj: ApiGatewayGetVpcLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpcLinkId': obj.vpcLinkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayGetVpcLinksRequest
 */
export interface ApiGatewayGetVpcLinksRequest {
  /**
   * @schema ApiGatewayGetVpcLinksRequest#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayGetVpcLinksRequest#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'ApiGatewayGetVpcLinksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayGetVpcLinksRequest(obj: ApiGatewayGetVpcLinksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayVpcLinks
 */
export interface ApiGatewayVpcLinks {
  /**
   * @schema ApiGatewayVpcLinks#position
   */
  readonly position?: string;

  /**
   * @schema ApiGatewayVpcLinks#items
   */
  readonly items?: ApiGatewayVpcLink[];

}

/**
 * Converts an object of type 'ApiGatewayVpcLinks' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayVpcLinks(obj: ApiGatewayVpcLinks | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'position': obj.position,
    'items': obj.items?.map(y => toJson_ApiGatewayVpcLink(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayImportApiKeysRequest
 */
export interface ApiGatewayImportApiKeysRequest {
  /**
   * @schema ApiGatewayImportApiKeysRequest#body
   */
  readonly body: any;

  /**
   * @schema ApiGatewayImportApiKeysRequest#format
   */
  readonly format: string;

  /**
   * @schema ApiGatewayImportApiKeysRequest#failOnWarnings
   */
  readonly failOnWarnings?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayImportApiKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayImportApiKeysRequest(obj: ApiGatewayImportApiKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'body': obj.body,
    'format': obj.format,
    'failOnWarnings': obj.failOnWarnings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayApiKeyIds
 */
export interface ApiGatewayApiKeyIds {
  /**
   * @schema ApiGatewayApiKeyIds#ids
   */
  readonly ids?: string[];

  /**
   * @schema ApiGatewayApiKeyIds#warnings
   */
  readonly warnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayApiKeyIds' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayApiKeyIds(obj: ApiGatewayApiKeyIds | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
    'warnings': obj.warnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayImportDocumentationPartsRequest
 */
export interface ApiGatewayImportDocumentationPartsRequest {
  /**
   * @schema ApiGatewayImportDocumentationPartsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayImportDocumentationPartsRequest#mode
   */
  readonly mode?: string;

  /**
   * @schema ApiGatewayImportDocumentationPartsRequest#failOnWarnings
   */
  readonly failOnWarnings?: boolean;

  /**
   * @schema ApiGatewayImportDocumentationPartsRequest#body
   */
  readonly body: any;

}

/**
 * Converts an object of type 'ApiGatewayImportDocumentationPartsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayImportDocumentationPartsRequest(obj: ApiGatewayImportDocumentationPartsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'mode': obj.mode,
    'failOnWarnings': obj.failOnWarnings,
    'body': obj.body,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDocumentationPartIds
 */
export interface ApiGatewayDocumentationPartIds {
  /**
   * @schema ApiGatewayDocumentationPartIds#ids
   */
  readonly ids?: string[];

  /**
   * @schema ApiGatewayDocumentationPartIds#warnings
   */
  readonly warnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayDocumentationPartIds' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDocumentationPartIds(obj: ApiGatewayDocumentationPartIds | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
    'warnings': obj.warnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayImportRestApiRequest
 */
export interface ApiGatewayImportRestApiRequest {
  /**
   * @schema ApiGatewayImportRestApiRequest#failOnWarnings
   */
  readonly failOnWarnings?: boolean;

  /**
   * @schema ApiGatewayImportRestApiRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayImportRestApiRequest#body
   */
  readonly body: any;

}

/**
 * Converts an object of type 'ApiGatewayImportRestApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayImportRestApiRequest(obj: ApiGatewayImportRestApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failOnWarnings': obj.failOnWarnings,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'body': obj.body,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayPutGatewayResponseRequest
 */
export interface ApiGatewayPutGatewayResponseRequest {
  /**
   * @schema ApiGatewayPutGatewayResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayPutGatewayResponseRequest#responseType
   */
  readonly responseType: string;

  /**
   * @schema ApiGatewayPutGatewayResponseRequest#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema ApiGatewayPutGatewayResponseRequest#responseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayPutGatewayResponseRequest#responseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayPutGatewayResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayPutGatewayResponseRequest(obj: ApiGatewayPutGatewayResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'responseType': obj.responseType,
    'statusCode': obj.statusCode,
    'responseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'responseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayPutIntegrationRequest
 */
export interface ApiGatewayPutIntegrationRequest {
  /**
   * @schema ApiGatewayPutIntegrationRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#type
   */
  readonly type: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#integrationHttpMethod
   */
  readonly integrationHttpMethod?: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#uri
   */
  readonly uri?: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#connectionType
   */
  readonly connectionType?: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#credentials
   */
  readonly credentials?: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#requestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayPutIntegrationRequest#requestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayPutIntegrationRequest#passthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#cacheNamespace
   */
  readonly cacheNamespace?: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#cacheKeyParameters
   */
  readonly cacheKeyParameters?: string[];

  /**
   * @schema ApiGatewayPutIntegrationRequest#contentHandling
   */
  readonly contentHandling?: string;

  /**
   * @schema ApiGatewayPutIntegrationRequest#timeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema ApiGatewayPutIntegrationRequest#tlsConfig
   */
  readonly tlsConfig?: ApiGatewayTlsConfig;

}

/**
 * Converts an object of type 'ApiGatewayPutIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayPutIntegrationRequest(obj: ApiGatewayPutIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'type': obj.type,
    'integrationHttpMethod': obj.integrationHttpMethod,
    'uri': obj.uri,
    'connectionType': obj.connectionType,
    'connectionId': obj.connectionId,
    'credentials': obj.credentials,
    'requestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'requestTemplates': ((obj.requestTemplates) === undefined) ? undefined : (Object.entries(obj.requestTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'passthroughBehavior': obj.passthroughBehavior,
    'cacheNamespace': obj.cacheNamespace,
    'cacheKeyParameters': obj.cacheKeyParameters?.map(y => y),
    'contentHandling': obj.contentHandling,
    'timeoutInMillis': obj.timeoutInMillis,
    'tlsConfig': toJson_ApiGatewayTlsConfig(obj.tlsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayPutIntegrationResponseRequest
 */
export interface ApiGatewayPutIntegrationResponseRequest {
  /**
   * @schema ApiGatewayPutIntegrationResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayPutIntegrationResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayPutIntegrationResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayPutIntegrationResponseRequest#statusCode
   */
  readonly statusCode: string;

  /**
   * @schema ApiGatewayPutIntegrationResponseRequest#selectionPattern
   */
  readonly selectionPattern?: string;

  /**
   * @schema ApiGatewayPutIntegrationResponseRequest#responseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayPutIntegrationResponseRequest#responseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayPutIntegrationResponseRequest#contentHandling
   */
  readonly contentHandling?: string;

}

/**
 * Converts an object of type 'ApiGatewayPutIntegrationResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayPutIntegrationResponseRequest(obj: ApiGatewayPutIntegrationResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'statusCode': obj.statusCode,
    'selectionPattern': obj.selectionPattern,
    'responseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'responseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'contentHandling': obj.contentHandling,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayPutMethodRequest
 */
export interface ApiGatewayPutMethodRequest {
  /**
   * @schema ApiGatewayPutMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayPutMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayPutMethodRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayPutMethodRequest#authorizationType
   */
  readonly authorizationType: string;

  /**
   * @schema ApiGatewayPutMethodRequest#authorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayPutMethodRequest#apiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema ApiGatewayPutMethodRequest#operationName
   */
  readonly operationName?: string;

  /**
   * @schema ApiGatewayPutMethodRequest#requestParameters
   */
  readonly requestParameters?: { [key: string]: boolean };

  /**
   * @schema ApiGatewayPutMethodRequest#requestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayPutMethodRequest#requestValidatorId
   */
  readonly requestValidatorId?: string;

  /**
   * @schema ApiGatewayPutMethodRequest#authorizationScopes
   */
  readonly authorizationScopes?: string[];

}

/**
 * Converts an object of type 'ApiGatewayPutMethodRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayPutMethodRequest(obj: ApiGatewayPutMethodRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'authorizationType': obj.authorizationType,
    'authorizerId': obj.authorizerId,
    'apiKeyRequired': obj.apiKeyRequired,
    'operationName': obj.operationName,
    'requestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'requestModels': ((obj.requestModels) === undefined) ? undefined : (Object.entries(obj.requestModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'requestValidatorId': obj.requestValidatorId,
    'authorizationScopes': obj.authorizationScopes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayPutMethodResponseRequest
 */
export interface ApiGatewayPutMethodResponseRequest {
  /**
   * @schema ApiGatewayPutMethodResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayPutMethodResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayPutMethodResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayPutMethodResponseRequest#statusCode
   */
  readonly statusCode: string;

  /**
   * @schema ApiGatewayPutMethodResponseRequest#responseParameters
   */
  readonly responseParameters?: { [key: string]: boolean };

  /**
   * @schema ApiGatewayPutMethodResponseRequest#responseModels
   */
  readonly responseModels?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayPutMethodResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayPutMethodResponseRequest(obj: ApiGatewayPutMethodResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'statusCode': obj.statusCode,
    'responseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'responseModels': ((obj.responseModels) === undefined) ? undefined : (Object.entries(obj.responseModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayPutRestApiRequest
 */
export interface ApiGatewayPutRestApiRequest {
  /**
   * @schema ApiGatewayPutRestApiRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayPutRestApiRequest#mode
   */
  readonly mode?: string;

  /**
   * @schema ApiGatewayPutRestApiRequest#failOnWarnings
   */
  readonly failOnWarnings?: boolean;

  /**
   * @schema ApiGatewayPutRestApiRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayPutRestApiRequest#body
   */
  readonly body: any;

}

/**
 * Converts an object of type 'ApiGatewayPutRestApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayPutRestApiRequest(obj: ApiGatewayPutRestApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'mode': obj.mode,
    'failOnWarnings': obj.failOnWarnings,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'body': obj.body,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayTagResourceRequest
 */
export interface ApiGatewayTagResourceRequest {
  /**
   * @schema ApiGatewayTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ApiGatewayTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayTagResourceRequest(obj: ApiGatewayTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayTestInvokeAuthorizerRequest
 */
export interface ApiGatewayTestInvokeAuthorizerRequest {
  /**
   * @schema ApiGatewayTestInvokeAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayTestInvokeAuthorizerRequest#authorizerId
   */
  readonly authorizerId: string;

  /**
   * @schema ApiGatewayTestInvokeAuthorizerRequest#headers
   */
  readonly headers?: { [key: string]: string };

  /**
   * @schema ApiGatewayTestInvokeAuthorizerRequest#multiValueHeaders
   */
  readonly multiValueHeaders?: { [key: string]: string[] };

  /**
   * @schema ApiGatewayTestInvokeAuthorizerRequest#pathWithQueryString
   */
  readonly pathWithQueryString?: string;

  /**
   * @schema ApiGatewayTestInvokeAuthorizerRequest#body
   */
  readonly body?: string;

  /**
   * @schema ApiGatewayTestInvokeAuthorizerRequest#stageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema ApiGatewayTestInvokeAuthorizerRequest#additionalContext
   */
  readonly additionalContext?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayTestInvokeAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayTestInvokeAuthorizerRequest(obj: ApiGatewayTestInvokeAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'authorizerId': obj.authorizerId,
    'headers': ((obj.headers) === undefined) ? undefined : (Object.entries(obj.headers).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'multiValueHeaders': ((obj.multiValueHeaders) === undefined) ? undefined : (Object.entries(obj.multiValueHeaders).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'pathWithQueryString': obj.pathWithQueryString,
    'body': obj.body,
    'stageVariables': ((obj.stageVariables) === undefined) ? undefined : (Object.entries(obj.stageVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'additionalContext': ((obj.additionalContext) === undefined) ? undefined : (Object.entries(obj.additionalContext).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayTestInvokeAuthorizerResponse
 */
export interface ApiGatewayTestInvokeAuthorizerResponse {
  /**
   * @schema ApiGatewayTestInvokeAuthorizerResponse#clientStatus
   */
  readonly clientStatus?: number;

  /**
   * @schema ApiGatewayTestInvokeAuthorizerResponse#log
   */
  readonly log?: string;

  /**
   * @schema ApiGatewayTestInvokeAuthorizerResponse#latency
   */
  readonly latency?: number;

  /**
   * @schema ApiGatewayTestInvokeAuthorizerResponse#principalId
   */
  readonly principalId?: string;

  /**
   * @schema ApiGatewayTestInvokeAuthorizerResponse#policy
   */
  readonly policy?: string;

  /**
   * @schema ApiGatewayTestInvokeAuthorizerResponse#authorization
   */
  readonly authorization?: { [key: string]: string[] };

  /**
   * @schema ApiGatewayTestInvokeAuthorizerResponse#claims
   */
  readonly claims?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayTestInvokeAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayTestInvokeAuthorizerResponse(obj: ApiGatewayTestInvokeAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientStatus': obj.clientStatus,
    'log': obj.log,
    'latency': obj.latency,
    'principalId': obj.principalId,
    'policy': obj.policy,
    'authorization': ((obj.authorization) === undefined) ? undefined : (Object.entries(obj.authorization).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'claims': ((obj.claims) === undefined) ? undefined : (Object.entries(obj.claims).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayTestInvokeMethodRequest
 */
export interface ApiGatewayTestInvokeMethodRequest {
  /**
   * @schema ApiGatewayTestInvokeMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayTestInvokeMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayTestInvokeMethodRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayTestInvokeMethodRequest#pathWithQueryString
   */
  readonly pathWithQueryString?: string;

  /**
   * @schema ApiGatewayTestInvokeMethodRequest#body
   */
  readonly body?: string;

  /**
   * @schema ApiGatewayTestInvokeMethodRequest#headers
   */
  readonly headers?: { [key: string]: string };

  /**
   * @schema ApiGatewayTestInvokeMethodRequest#multiValueHeaders
   */
  readonly multiValueHeaders?: { [key: string]: string[] };

  /**
   * @schema ApiGatewayTestInvokeMethodRequest#clientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ApiGatewayTestInvokeMethodRequest#stageVariables
   */
  readonly stageVariables?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayTestInvokeMethodRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayTestInvokeMethodRequest(obj: ApiGatewayTestInvokeMethodRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'pathWithQueryString': obj.pathWithQueryString,
    'body': obj.body,
    'headers': ((obj.headers) === undefined) ? undefined : (Object.entries(obj.headers).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'multiValueHeaders': ((obj.multiValueHeaders) === undefined) ? undefined : (Object.entries(obj.multiValueHeaders).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'clientCertificateId': obj.clientCertificateId,
    'stageVariables': ((obj.stageVariables) === undefined) ? undefined : (Object.entries(obj.stageVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayTestInvokeMethodResponse
 */
export interface ApiGatewayTestInvokeMethodResponse {
  /**
   * @schema ApiGatewayTestInvokeMethodResponse#status
   */
  readonly status?: number;

  /**
   * @schema ApiGatewayTestInvokeMethodResponse#body
   */
  readonly body?: string;

  /**
   * @schema ApiGatewayTestInvokeMethodResponse#headers
   */
  readonly headers?: { [key: string]: string };

  /**
   * @schema ApiGatewayTestInvokeMethodResponse#multiValueHeaders
   */
  readonly multiValueHeaders?: { [key: string]: string[] };

  /**
   * @schema ApiGatewayTestInvokeMethodResponse#log
   */
  readonly log?: string;

  /**
   * @schema ApiGatewayTestInvokeMethodResponse#latency
   */
  readonly latency?: number;

}

/**
 * Converts an object of type 'ApiGatewayTestInvokeMethodResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayTestInvokeMethodResponse(obj: ApiGatewayTestInvokeMethodResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'body': obj.body,
    'headers': ((obj.headers) === undefined) ? undefined : (Object.entries(obj.headers).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'multiValueHeaders': ((obj.multiValueHeaders) === undefined) ? undefined : (Object.entries(obj.multiValueHeaders).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'log': obj.log,
    'latency': obj.latency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUntagResourceRequest
 */
export interface ApiGatewayUntagResourceRequest {
  /**
   * @schema ApiGatewayUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ApiGatewayUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'ApiGatewayUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUntagResourceRequest(obj: ApiGatewayUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ApiGatewayUpdateAccountRequest
 */
export interface ApiGatewayUpdateAccountRequest {
  /**
   * @schema ApiGatewayUpdateAccountRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateAccountRequest(obj: ApiGatewayUpdateAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateApiKeyRequest
 */
export interface ApiGatewayUpdateApiKeyRequest {
  /**
   * @schema ApiGatewayUpdateApiKeyRequest#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema ApiGatewayUpdateApiKeyRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateApiKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateApiKeyRequest(obj: ApiGatewayUpdateApiKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiKey': obj.apiKey,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateAuthorizerRequest
 */
export interface ApiGatewayUpdateAuthorizerRequest {
  /**
   * @schema ApiGatewayUpdateAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateAuthorizerRequest#authorizerId
   */
  readonly authorizerId: string;

  /**
   * @schema ApiGatewayUpdateAuthorizerRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateAuthorizerRequest(obj: ApiGatewayUpdateAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'authorizerId': obj.authorizerId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateBasePathMappingRequest
 */
export interface ApiGatewayUpdateBasePathMappingRequest {
  /**
   * @schema ApiGatewayUpdateBasePathMappingRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema ApiGatewayUpdateBasePathMappingRequest#basePath
   */
  readonly basePath: string;

  /**
   * @schema ApiGatewayUpdateBasePathMappingRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateBasePathMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateBasePathMappingRequest(obj: ApiGatewayUpdateBasePathMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'basePath': obj.basePath,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateClientCertificateRequest
 */
export interface ApiGatewayUpdateClientCertificateRequest {
  /**
   * @schema ApiGatewayUpdateClientCertificateRequest#clientCertificateId
   */
  readonly clientCertificateId: string;

  /**
   * @schema ApiGatewayUpdateClientCertificateRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateClientCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateClientCertificateRequest(obj: ApiGatewayUpdateClientCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientCertificateId': obj.clientCertificateId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateDeploymentRequest
 */
export interface ApiGatewayUpdateDeploymentRequest {
  /**
   * @schema ApiGatewayUpdateDeploymentRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateDeploymentRequest#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema ApiGatewayUpdateDeploymentRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateDeploymentRequest(obj: ApiGatewayUpdateDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'deploymentId': obj.deploymentId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateDocumentationPartRequest
 */
export interface ApiGatewayUpdateDocumentationPartRequest {
  /**
   * @schema ApiGatewayUpdateDocumentationPartRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateDocumentationPartRequest#documentationPartId
   */
  readonly documentationPartId: string;

  /**
   * @schema ApiGatewayUpdateDocumentationPartRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateDocumentationPartRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateDocumentationPartRequest(obj: ApiGatewayUpdateDocumentationPartRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'documentationPartId': obj.documentationPartId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateDocumentationVersionRequest
 */
export interface ApiGatewayUpdateDocumentationVersionRequest {
  /**
   * @schema ApiGatewayUpdateDocumentationVersionRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateDocumentationVersionRequest#documentationVersion
   */
  readonly documentationVersion: string;

  /**
   * @schema ApiGatewayUpdateDocumentationVersionRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateDocumentationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateDocumentationVersionRequest(obj: ApiGatewayUpdateDocumentationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'documentationVersion': obj.documentationVersion,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateDomainNameRequest
 */
export interface ApiGatewayUpdateDomainNameRequest {
  /**
   * @schema ApiGatewayUpdateDomainNameRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema ApiGatewayUpdateDomainNameRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateDomainNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateDomainNameRequest(obj: ApiGatewayUpdateDomainNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateGatewayResponseRequest
 */
export interface ApiGatewayUpdateGatewayResponseRequest {
  /**
   * @schema ApiGatewayUpdateGatewayResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateGatewayResponseRequest#responseType
   */
  readonly responseType: string;

  /**
   * @schema ApiGatewayUpdateGatewayResponseRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateGatewayResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateGatewayResponseRequest(obj: ApiGatewayUpdateGatewayResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'responseType': obj.responseType,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateIntegrationRequest
 */
export interface ApiGatewayUpdateIntegrationRequest {
  /**
   * @schema ApiGatewayUpdateIntegrationRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateIntegrationRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayUpdateIntegrationRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayUpdateIntegrationRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateIntegrationRequest(obj: ApiGatewayUpdateIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateIntegrationResponseRequest
 */
export interface ApiGatewayUpdateIntegrationResponseRequest {
  /**
   * @schema ApiGatewayUpdateIntegrationResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateIntegrationResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayUpdateIntegrationResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayUpdateIntegrationResponseRequest#statusCode
   */
  readonly statusCode: string;

  /**
   * @schema ApiGatewayUpdateIntegrationResponseRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateIntegrationResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateIntegrationResponseRequest(obj: ApiGatewayUpdateIntegrationResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'statusCode': obj.statusCode,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateMethodRequest
 */
export interface ApiGatewayUpdateMethodRequest {
  /**
   * @schema ApiGatewayUpdateMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayUpdateMethodRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayUpdateMethodRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateMethodRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateMethodRequest(obj: ApiGatewayUpdateMethodRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateMethodResponseRequest
 */
export interface ApiGatewayUpdateMethodResponseRequest {
  /**
   * @schema ApiGatewayUpdateMethodResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateMethodResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayUpdateMethodResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema ApiGatewayUpdateMethodResponseRequest#statusCode
   */
  readonly statusCode: string;

  /**
   * @schema ApiGatewayUpdateMethodResponseRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateMethodResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateMethodResponseRequest(obj: ApiGatewayUpdateMethodResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'httpMethod': obj.httpMethod,
    'statusCode': obj.statusCode,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateModelRequest
 */
export interface ApiGatewayUpdateModelRequest {
  /**
   * @schema ApiGatewayUpdateModelRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateModelRequest#modelName
   */
  readonly modelName: string;

  /**
   * @schema ApiGatewayUpdateModelRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateModelRequest(obj: ApiGatewayUpdateModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'modelName': obj.modelName,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateRequestValidatorRequest
 */
export interface ApiGatewayUpdateRequestValidatorRequest {
  /**
   * @schema ApiGatewayUpdateRequestValidatorRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateRequestValidatorRequest#requestValidatorId
   */
  readonly requestValidatorId: string;

  /**
   * @schema ApiGatewayUpdateRequestValidatorRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateRequestValidatorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateRequestValidatorRequest(obj: ApiGatewayUpdateRequestValidatorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'requestValidatorId': obj.requestValidatorId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateResourceRequest
 */
export interface ApiGatewayUpdateResourceRequest {
  /**
   * @schema ApiGatewayUpdateResourceRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateResourceRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApiGatewayUpdateResourceRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateResourceRequest(obj: ApiGatewayUpdateResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'resourceId': obj.resourceId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateRestApiRequest
 */
export interface ApiGatewayUpdateRestApiRequest {
  /**
   * @schema ApiGatewayUpdateRestApiRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateRestApiRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateRestApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateRestApiRequest(obj: ApiGatewayUpdateRestApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateStageRequest
 */
export interface ApiGatewayUpdateStageRequest {
  /**
   * @schema ApiGatewayUpdateStageRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ApiGatewayUpdateStageRequest#stageName
   */
  readonly stageName: string;

  /**
   * @schema ApiGatewayUpdateStageRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateStageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateStageRequest(obj: ApiGatewayUpdateStageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateUsageRequest
 */
export interface ApiGatewayUpdateUsageRequest {
  /**
   * @schema ApiGatewayUpdateUsageRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema ApiGatewayUpdateUsageRequest#keyId
   */
  readonly keyId: string;

  /**
   * @schema ApiGatewayUpdateUsageRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateUsageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateUsageRequest(obj: ApiGatewayUpdateUsageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
    'keyId': obj.keyId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateUsagePlanRequest
 */
export interface ApiGatewayUpdateUsagePlanRequest {
  /**
   * @schema ApiGatewayUpdateUsagePlanRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema ApiGatewayUpdateUsagePlanRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateUsagePlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateUsagePlanRequest(obj: ApiGatewayUpdateUsagePlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'usagePlanId': obj.usagePlanId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayUpdateVpcLinkRequest
 */
export interface ApiGatewayUpdateVpcLinkRequest {
  /**
   * @schema ApiGatewayUpdateVpcLinkRequest#vpcLinkId
   */
  readonly vpcLinkId: string;

  /**
   * @schema ApiGatewayUpdateVpcLinkRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

/**
 * Converts an object of type 'ApiGatewayUpdateVpcLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayUpdateVpcLinkRequest(obj: ApiGatewayUpdateVpcLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpcLinkId': obj.vpcLinkId,
    'patchOperations': obj.patchOperations?.map(y => toJson_ApiGatewayPatchOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayStageKey
 */
export interface ApiGatewayStageKey {
  /**
   * @schema ApiGatewayStageKey#restApiId
   */
  readonly restApiId?: string;

  /**
   * @schema ApiGatewayStageKey#stageName
   */
  readonly stageName?: string;

}

/**
 * Converts an object of type 'ApiGatewayStageKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayStageKey(obj: ApiGatewayStageKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'restApiId': obj.restApiId,
    'stageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDeploymentCanarySettings
 */
export interface ApiGatewayDeploymentCanarySettings {
  /**
   * @schema ApiGatewayDeploymentCanarySettings#percentTraffic
   */
  readonly percentTraffic?: number;

  /**
   * @schema ApiGatewayDeploymentCanarySettings#stageVariableOverrides
   */
  readonly stageVariableOverrides?: { [key: string]: string };

  /**
   * @schema ApiGatewayDeploymentCanarySettings#useStageCache
   */
  readonly useStageCache?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayDeploymentCanarySettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDeploymentCanarySettings(obj: ApiGatewayDeploymentCanarySettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'percentTraffic': obj.percentTraffic,
    'stageVariableOverrides': ((obj.stageVariableOverrides) === undefined) ? undefined : (Object.entries(obj.stageVariableOverrides).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'useStageCache': obj.useStageCache,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayMethodSnapshot
 */
export interface ApiGatewayMethodSnapshot {
  /**
   * @schema ApiGatewayMethodSnapshot#authorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema ApiGatewayMethodSnapshot#apiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayMethodSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayMethodSnapshot(obj: ApiGatewayMethodSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizationType': obj.authorizationType,
    'apiKeyRequired': obj.apiKeyRequired,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayDocumentationPartLocation
 */
export interface ApiGatewayDocumentationPartLocation {
  /**
   * @schema ApiGatewayDocumentationPartLocation#type
   */
  readonly type: string;

  /**
   * @schema ApiGatewayDocumentationPartLocation#path
   */
  readonly path?: string;

  /**
   * @schema ApiGatewayDocumentationPartLocation#method
   */
  readonly method?: string;

  /**
   * @schema ApiGatewayDocumentationPartLocation#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema ApiGatewayDocumentationPartLocation#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ApiGatewayDocumentationPartLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayDocumentationPartLocation(obj: ApiGatewayDocumentationPartLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'path': obj.path,
    'method': obj.method,
    'statusCode': obj.statusCode,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayEndpointConfiguration
 */
export interface ApiGatewayEndpointConfiguration {
  /**
   * @schema ApiGatewayEndpointConfiguration#types
   */
  readonly types?: string[];

  /**
   * @schema ApiGatewayEndpointConfiguration#vpcEndpointIds
   */
  readonly vpcEndpointIds?: string[];

}

/**
 * Converts an object of type 'ApiGatewayEndpointConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayEndpointConfiguration(obj: ApiGatewayEndpointConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'types': obj.types?.map(y => y),
    'vpcEndpointIds': obj.vpcEndpointIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayMutualTlsAuthenticationInput
 */
export interface ApiGatewayMutualTlsAuthenticationInput {
  /**
   * @schema ApiGatewayMutualTlsAuthenticationInput#truststoreUri
   */
  readonly truststoreUri?: string;

  /**
   * @schema ApiGatewayMutualTlsAuthenticationInput#truststoreVersion
   */
  readonly truststoreVersion?: string;

}

/**
 * Converts an object of type 'ApiGatewayMutualTlsAuthenticationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayMutualTlsAuthenticationInput(obj: ApiGatewayMutualTlsAuthenticationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'truststoreUri': obj.truststoreUri,
    'truststoreVersion': obj.truststoreVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayMutualTlsAuthentication
 */
export interface ApiGatewayMutualTlsAuthentication {
  /**
   * @schema ApiGatewayMutualTlsAuthentication#truststoreUri
   */
  readonly truststoreUri?: string;

  /**
   * @schema ApiGatewayMutualTlsAuthentication#truststoreVersion
   */
  readonly truststoreVersion?: string;

  /**
   * @schema ApiGatewayMutualTlsAuthentication#truststoreWarnings
   */
  readonly truststoreWarnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayMutualTlsAuthentication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayMutualTlsAuthentication(obj: ApiGatewayMutualTlsAuthentication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'truststoreUri': obj.truststoreUri,
    'truststoreVersion': obj.truststoreVersion,
    'truststoreWarnings': obj.truststoreWarnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayCanarySettings
 */
export interface ApiGatewayCanarySettings {
  /**
   * @schema ApiGatewayCanarySettings#percentTraffic
   */
  readonly percentTraffic?: number;

  /**
   * @schema ApiGatewayCanarySettings#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayCanarySettings#stageVariableOverrides
   */
  readonly stageVariableOverrides?: { [key: string]: string };

  /**
   * @schema ApiGatewayCanarySettings#useStageCache
   */
  readonly useStageCache?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayCanarySettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayCanarySettings(obj: ApiGatewayCanarySettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'percentTraffic': obj.percentTraffic,
    'deploymentId': obj.deploymentId,
    'stageVariableOverrides': ((obj.stageVariableOverrides) === undefined) ? undefined : (Object.entries(obj.stageVariableOverrides).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'useStageCache': obj.useStageCache,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayMethodSetting
 */
export interface ApiGatewayMethodSetting {
  /**
   * @schema ApiGatewayMethodSetting#metricsEnabled
   */
  readonly metricsEnabled?: boolean;

  /**
   * @schema ApiGatewayMethodSetting#loggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema ApiGatewayMethodSetting#dataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema ApiGatewayMethodSetting#throttlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema ApiGatewayMethodSetting#throttlingRateLimit
   */
  readonly throttlingRateLimit?: number;

  /**
   * @schema ApiGatewayMethodSetting#cachingEnabled
   */
  readonly cachingEnabled?: boolean;

  /**
   * @schema ApiGatewayMethodSetting#cacheTtlInSeconds
   */
  readonly cacheTtlInSeconds?: number;

  /**
   * @schema ApiGatewayMethodSetting#cacheDataEncrypted
   */
  readonly cacheDataEncrypted?: boolean;

  /**
   * @schema ApiGatewayMethodSetting#requireAuthorizationForCacheControl
   */
  readonly requireAuthorizationForCacheControl?: boolean;

  /**
   * @schema ApiGatewayMethodSetting#unauthorizedCacheControlHeaderStrategy
   */
  readonly unauthorizedCacheControlHeaderStrategy?: string;

}

/**
 * Converts an object of type 'ApiGatewayMethodSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayMethodSetting(obj: ApiGatewayMethodSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricsEnabled': obj.metricsEnabled,
    'loggingLevel': obj.loggingLevel,
    'dataTraceEnabled': obj.dataTraceEnabled,
    'throttlingBurstLimit': obj.throttlingBurstLimit,
    'throttlingRateLimit': obj.throttlingRateLimit,
    'cachingEnabled': obj.cachingEnabled,
    'cacheTtlInSeconds': obj.cacheTtlInSeconds,
    'cacheDataEncrypted': obj.cacheDataEncrypted,
    'requireAuthorizationForCacheControl': obj.requireAuthorizationForCacheControl,
    'unauthorizedCacheControlHeaderStrategy': obj.unauthorizedCacheControlHeaderStrategy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayAccessLogSettings
 */
export interface ApiGatewayAccessLogSettings {
  /**
   * @schema ApiGatewayAccessLogSettings#format
   */
  readonly format?: string;

  /**
   * @schema ApiGatewayAccessLogSettings#destinationArn
   */
  readonly destinationArn?: string;

}

/**
 * Converts an object of type 'ApiGatewayAccessLogSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayAccessLogSettings(obj: ApiGatewayAccessLogSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'format': obj.format,
    'destinationArn': obj.destinationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayApiStage
 */
export interface ApiGatewayApiStage {
  /**
   * @schema ApiGatewayApiStage#apiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayApiStage#stage
   */
  readonly stage?: string;

  /**
   * @schema ApiGatewayApiStage#throttle
   */
  readonly throttle?: { [key: string]: ApiGatewayThrottleSettings };

}

/**
 * Converts an object of type 'ApiGatewayApiStage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayApiStage(obj: ApiGatewayApiStage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'stage': obj.stage,
    'throttle': ((obj.throttle) === undefined) ? undefined : (Object.entries(obj.throttle).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayThrottleSettings(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayThrottleSettings
 */
export interface ApiGatewayThrottleSettings {
  /**
   * @schema ApiGatewayThrottleSettings#burstLimit
   */
  readonly burstLimit?: number;

  /**
   * @schema ApiGatewayThrottleSettings#rateLimit
   */
  readonly rateLimit?: number;

}

/**
 * Converts an object of type 'ApiGatewayThrottleSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayThrottleSettings(obj: ApiGatewayThrottleSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'burstLimit': obj.burstLimit,
    'rateLimit': obj.rateLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayQuotaSettings
 */
export interface ApiGatewayQuotaSettings {
  /**
   * @schema ApiGatewayQuotaSettings#limit
   */
  readonly limit?: number;

  /**
   * @schema ApiGatewayQuotaSettings#offset
   */
  readonly offset?: number;

  /**
   * @schema ApiGatewayQuotaSettings#period
   */
  readonly period?: string;

}

/**
 * Converts an object of type 'ApiGatewayQuotaSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayQuotaSettings(obj: ApiGatewayQuotaSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'limit': obj.limit,
    'offset': obj.offset,
    'period': obj.period,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayTlsConfig
 */
export interface ApiGatewayTlsConfig {
  /**
   * @schema ApiGatewayTlsConfig#insecureSkipVerification
   */
  readonly insecureSkipVerification?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayTlsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayTlsConfig(obj: ApiGatewayTlsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'insecureSkipVerification': obj.insecureSkipVerification,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewaySdkConfigurationProperty
 */
export interface ApiGatewaySdkConfigurationProperty {
  /**
   * @schema ApiGatewaySdkConfigurationProperty#name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewaySdkConfigurationProperty#friendlyName
   */
  readonly friendlyName?: string;

  /**
   * @schema ApiGatewaySdkConfigurationProperty#description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewaySdkConfigurationProperty#required
   */
  readonly required?: boolean;

  /**
   * @schema ApiGatewaySdkConfigurationProperty#defaultValue
   */
  readonly defaultValue?: string;

}

/**
 * Converts an object of type 'ApiGatewaySdkConfigurationProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewaySdkConfigurationProperty(obj: ApiGatewaySdkConfigurationProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'friendlyName': obj.friendlyName,
    'description': obj.description,
    'required': obj.required,
    'defaultValue': obj.defaultValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayPatchOperation
 */
export interface ApiGatewayPatchOperation {
  /**
   * @schema ApiGatewayPatchOperation#op
   */
  readonly op?: string;

  /**
   * @schema ApiGatewayPatchOperation#path
   */
  readonly path?: string;

  /**
   * @schema ApiGatewayPatchOperation#value
   */
  readonly value?: string;

  /**
   * @schema ApiGatewayPatchOperation#from
   */
  readonly from?: string;

}

/**
 * Converts an object of type 'ApiGatewayPatchOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayPatchOperation(obj: ApiGatewayPatchOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'op': obj.op,
    'path': obj.path,
    'value': obj.value,
    'from': obj.from,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
