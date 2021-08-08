/**
 * @schema ApiGatewayV2CreateApiRequest
 */
export interface ApiGatewayV2CreateApiRequest {
  /**
   * @schema ApiGatewayV2CreateApiRequest#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateApiRequest#CorsConfiguration
   */
  readonly corsConfiguration?: ApiGatewayV2Cors;

  /**
   * @schema ApiGatewayV2CreateApiRequest#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema ApiGatewayV2CreateApiRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2CreateApiRequest#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ApiGatewayV2CreateApiRequest#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ApiGatewayV2CreateApiRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2CreateApiRequest#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema ApiGatewayV2CreateApiRequest#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema ApiGatewayV2CreateApiRequest#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateApiRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateApiRequest#Target
   */
  readonly target?: string;

  /**
   * @schema ApiGatewayV2CreateApiRequest#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateApiRequest(obj: ApiGatewayV2CreateApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiKeySelectionExpression': obj.apiKeySelectionExpression,
    'CorsConfiguration': toJson_ApiGatewayV2Cors(obj.corsConfiguration),
    'CredentialsArn': obj.credentialsArn,
    'Description': obj.description,
    'DisableSchemaValidation': obj.disableSchemaValidation,
    'DisableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
    'Name': obj.name,
    'ProtocolType': obj.protocolType,
    'RouteKey': obj.routeKey,
    'RouteSelectionExpression': obj.routeSelectionExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Target': obj.target,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateApiResponse
 */
export interface ApiGatewayV2CreateApiResponse {
  /**
   * @schema ApiGatewayV2CreateApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema ApiGatewayV2CreateApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2CreateApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: ApiGatewayV2Cors;

  /**
   * @schema ApiGatewayV2CreateApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2CreateApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2CreateApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ApiGatewayV2CreateApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ApiGatewayV2CreateApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema ApiGatewayV2CreateApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2CreateApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema ApiGatewayV2CreateApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema ApiGatewayV2CreateApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayV2CreateApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateApiResponse(obj: ApiGatewayV2CreateApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiEndpoint': obj.apiEndpoint,
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiId': obj.apiId,
    'ApiKeySelectionExpression': obj.apiKeySelectionExpression,
    'CorsConfiguration': toJson_ApiGatewayV2Cors(obj.corsConfiguration),
    'CreatedDate': obj.createdDate,
    'Description': obj.description,
    'DisableSchemaValidation': obj.disableSchemaValidation,
    'DisableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
    'ImportInfo': obj.importInfo?.map(y => y),
    'Name': obj.name,
    'ProtocolType': obj.protocolType,
    'RouteSelectionExpression': obj.routeSelectionExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Version': obj.version,
    'Warnings': obj.warnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateApiMappingRequest
 */
export interface ApiGatewayV2CreateApiMappingRequest {
  /**
   * @schema ApiGatewayV2CreateApiMappingRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateApiMappingRequest#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema ApiGatewayV2CreateApiMappingRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayV2CreateApiMappingRequest#Stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateApiMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateApiMappingRequest(obj: ApiGatewayV2CreateApiMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ApiMappingKey': obj.apiMappingKey,
    'DomainName': obj.domainName,
    'Stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateApiMappingResponse
 */
export interface ApiGatewayV2CreateApiMappingResponse {
  /**
   * @schema ApiGatewayV2CreateApiMappingResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateApiMappingResponse#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema ApiGatewayV2CreateApiMappingResponse#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema ApiGatewayV2CreateApiMappingResponse#Stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateApiMappingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateApiMappingResponse(obj: ApiGatewayV2CreateApiMappingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ApiMappingId': obj.apiMappingId,
    'ApiMappingKey': obj.apiMappingKey,
    'Stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateAuthorizerRequest
 */
export interface ApiGatewayV2CreateAuthorizerRequest {
  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#JwtConfiguration
   */
  readonly jwtConfiguration?: ApiGatewayV2JwtConfiguration;

  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateAuthorizerRequest(obj: ApiGatewayV2CreateAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'AuthorizerCredentialsArn': obj.authorizerCredentialsArn,
    'AuthorizerPayloadFormatVersion': obj.authorizerPayloadFormatVersion,
    'AuthorizerResultTtlInSeconds': obj.authorizerResultTtlInSeconds,
    'AuthorizerType': obj.authorizerType,
    'AuthorizerUri': obj.authorizerUri,
    'EnableSimpleResponses': obj.enableSimpleResponses,
    'IdentitySource': obj.identitySource?.map(y => y),
    'IdentityValidationExpression': obj.identityValidationExpression,
    'JwtConfiguration': toJson_ApiGatewayV2JwtConfiguration(obj.jwtConfiguration),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateAuthorizerResponse
 */
export interface ApiGatewayV2CreateAuthorizerResponse {
  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#JwtConfiguration
   */
  readonly jwtConfiguration?: ApiGatewayV2JwtConfiguration;

  /**
   * @schema ApiGatewayV2CreateAuthorizerResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateAuthorizerResponse(obj: ApiGatewayV2CreateAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthorizerCredentialsArn': obj.authorizerCredentialsArn,
    'AuthorizerId': obj.authorizerId,
    'AuthorizerPayloadFormatVersion': obj.authorizerPayloadFormatVersion,
    'AuthorizerResultTtlInSeconds': obj.authorizerResultTtlInSeconds,
    'AuthorizerType': obj.authorizerType,
    'AuthorizerUri': obj.authorizerUri,
    'EnableSimpleResponses': obj.enableSimpleResponses,
    'IdentitySource': obj.identitySource?.map(y => y),
    'IdentityValidationExpression': obj.identityValidationExpression,
    'JwtConfiguration': toJson_ApiGatewayV2JwtConfiguration(obj.jwtConfiguration),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateDeploymentRequest
 */
export interface ApiGatewayV2CreateDeploymentRequest {
  /**
   * @schema ApiGatewayV2CreateDeploymentRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateDeploymentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2CreateDeploymentRequest#StageName
   */
  readonly stageName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateDeploymentRequest(obj: ApiGatewayV2CreateDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'Description': obj.description,
    'StageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateDeploymentResponse
 */
export interface ApiGatewayV2CreateDeploymentResponse {
  /**
   * @schema ApiGatewayV2CreateDeploymentResponse#AutoDeployed
   */
  readonly autoDeployed?: boolean;

  /**
   * @schema ApiGatewayV2CreateDeploymentResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2CreateDeploymentResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2CreateDeploymentResponse#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema ApiGatewayV2CreateDeploymentResponse#DeploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema ApiGatewayV2CreateDeploymentResponse#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateDeploymentResponse(obj: ApiGatewayV2CreateDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoDeployed': obj.autoDeployed,
    'CreatedDate': obj.createdDate,
    'DeploymentId': obj.deploymentId,
    'DeploymentStatus': obj.deploymentStatus,
    'DeploymentStatusMessage': obj.deploymentStatusMessage,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateDomainNameRequest
 */
export interface ApiGatewayV2CreateDomainNameRequest {
  /**
   * @schema ApiGatewayV2CreateDomainNameRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayV2CreateDomainNameRequest#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: ApiGatewayV2DomainNameConfiguration[];

  /**
   * @schema ApiGatewayV2CreateDomainNameRequest#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: ApiGatewayV2MutualTlsAuthenticationInput;

  /**
   * @schema ApiGatewayV2CreateDomainNameRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2CreateDomainNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateDomainNameRequest(obj: ApiGatewayV2CreateDomainNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DomainNameConfigurations': obj.domainNameConfigurations?.map(y => toJson_ApiGatewayV2DomainNameConfiguration(y)),
    'MutualTlsAuthentication': toJson_ApiGatewayV2MutualTlsAuthenticationInput(obj.mutualTlsAuthentication),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateDomainNameResponse
 */
export interface ApiGatewayV2CreateDomainNameResponse {
  /**
   * @schema ApiGatewayV2CreateDomainNameResponse#ApiMappingSelectionExpression
   */
  readonly apiMappingSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateDomainNameResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayV2CreateDomainNameResponse#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: ApiGatewayV2DomainNameConfiguration[];

  /**
   * @schema ApiGatewayV2CreateDomainNameResponse#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: ApiGatewayV2MutualTlsAuthentication;

  /**
   * @schema ApiGatewayV2CreateDomainNameResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2CreateDomainNameResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateDomainNameResponse(obj: ApiGatewayV2CreateDomainNameResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiMappingSelectionExpression': obj.apiMappingSelectionExpression,
    'DomainName': obj.domainName,
    'DomainNameConfigurations': obj.domainNameConfigurations?.map(y => toJson_ApiGatewayV2DomainNameConfiguration(y)),
    'MutualTlsAuthentication': toJson_ApiGatewayV2MutualTlsAuthentication(obj.mutualTlsAuthentication),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateIntegrationRequest
 */
export interface ApiGatewayV2CreateIntegrationRequest {
  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#TlsConfig
   */
  readonly tlsConfig?: ApiGatewayV2TlsConfigInput;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateIntegrationRequest(obj: ApiGatewayV2CreateIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ConnectionId': obj.connectionId,
    'ConnectionType': obj.connectionType,
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'CredentialsArn': obj.credentialsArn,
    'Description': obj.description,
    'IntegrationMethod': obj.integrationMethod,
    'IntegrationSubtype': obj.integrationSubtype,
    'IntegrationType': obj.integrationType,
    'IntegrationUri': obj.integrationUri,
    'PassthroughBehavior': obj.passthroughBehavior,
    'PayloadFormatVersion': obj.payloadFormatVersion,
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestTemplates': ((obj.requestTemplates) === undefined) ? undefined : (Object.entries(obj.requestTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
    'TimeoutInMillis': obj.timeoutInMillis,
    'TlsConfig': toJson_ApiGatewayV2TlsConfigInput(obj.tlsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateIntegrationResult
 */
export interface ApiGatewayV2CreateIntegrationResult {
  /**
   * @schema ApiGatewayV2CreateIntegrationResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#IntegrationResponseSelectionExpression
   */
  readonly integrationResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema ApiGatewayV2CreateIntegrationResult#TlsConfig
   */
  readonly tlsConfig?: ApiGatewayV2TlsConfig;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateIntegrationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateIntegrationResult(obj: ApiGatewayV2CreateIntegrationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ConnectionId': obj.connectionId,
    'ConnectionType': obj.connectionType,
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'CredentialsArn': obj.credentialsArn,
    'Description': obj.description,
    'IntegrationId': obj.integrationId,
    'IntegrationMethod': obj.integrationMethod,
    'IntegrationResponseSelectionExpression': obj.integrationResponseSelectionExpression,
    'IntegrationSubtype': obj.integrationSubtype,
    'IntegrationType': obj.integrationType,
    'IntegrationUri': obj.integrationUri,
    'PassthroughBehavior': obj.passthroughBehavior,
    'PayloadFormatVersion': obj.payloadFormatVersion,
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestTemplates': ((obj.requestTemplates) === undefined) ? undefined : (Object.entries(obj.requestTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
    'TimeoutInMillis': obj.timeoutInMillis,
    'TlsConfig': toJson_ApiGatewayV2TlsConfig(obj.tlsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateIntegrationResponseRequest
 */
export interface ApiGatewayV2CreateIntegrationResponseRequest {
  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateIntegrationResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateIntegrationResponseRequest(obj: ApiGatewayV2CreateIntegrationResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'IntegrationId': obj.integrationId,
    'IntegrationResponseKey': obj.integrationResponseKey,
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateIntegrationResponseResponse
 */
export interface ApiGatewayV2CreateIntegrationResponseResponse {
  /**
   * @schema ApiGatewayV2CreateIntegrationResponseResponse#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseResponse#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseResponse#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseResponse#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseResponse#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateIntegrationResponseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateIntegrationResponseResponse(obj: ApiGatewayV2CreateIntegrationResponseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'IntegrationResponseId': obj.integrationResponseId,
    'IntegrationResponseKey': obj.integrationResponseKey,
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateModelRequest
 */
export interface ApiGatewayV2CreateModelRequest {
  /**
   * @schema ApiGatewayV2CreateModelRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateModelRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ApiGatewayV2CreateModelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2CreateModelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2CreateModelRequest#Schema
   */
  readonly schema?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateModelRequest(obj: ApiGatewayV2CreateModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ContentType': obj.contentType,
    'Description': obj.description,
    'Name': obj.name,
    'Schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateModelResponse
 */
export interface ApiGatewayV2CreateModelResponse {
  /**
   * @schema ApiGatewayV2CreateModelResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ApiGatewayV2CreateModelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2CreateModelResponse#ModelId
   */
  readonly modelId?: string;

  /**
   * @schema ApiGatewayV2CreateModelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2CreateModelResponse#Schema
   */
  readonly schema?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateModelResponse(obj: ApiGatewayV2CreateModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Description': obj.description,
    'ModelId': obj.modelId,
    'Name': obj.name,
    'Schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateRouteRequest
 */
export interface ApiGatewayV2CreateRouteRequest {
  /**
   * @schema ApiGatewayV2CreateRouteRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateRouteRequest#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema ApiGatewayV2CreateRouteRequest#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema ApiGatewayV2CreateRouteRequest#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema ApiGatewayV2CreateRouteRequest#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2CreateRouteRequest#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateRouteRequest#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema ApiGatewayV2CreateRouteRequest#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateRouteRequest#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2CreateRouteRequest#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema ApiGatewayV2CreateRouteRequest#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateRouteRequest#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateRouteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateRouteRequest(obj: ApiGatewayV2CreateRouteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ApiKeyRequired': obj.apiKeyRequired,
    'AuthorizationScopes': obj.authorizationScopes?.map(y => y),
    'AuthorizationType': obj.authorizationType,
    'AuthorizerId': obj.authorizerId,
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'OperationName': obj.operationName,
    'RequestModels': ((obj.requestModels) === undefined) ? undefined : (Object.entries(obj.requestModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteKey': obj.routeKey,
    'RouteResponseSelectionExpression': obj.routeResponseSelectionExpression,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateRouteResult
 */
export interface ApiGatewayV2CreateRouteResult {
  /**
   * @schema ApiGatewayV2CreateRouteResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2CreateRouteResult#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema ApiGatewayV2CreateRouteResult#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema ApiGatewayV2CreateRouteResult#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResult#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResult#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResult#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResult#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateRouteResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2CreateRouteResult#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResult#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResult#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResult#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateRouteResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateRouteResult(obj: ApiGatewayV2CreateRouteResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiKeyRequired': obj.apiKeyRequired,
    'AuthorizationScopes': obj.authorizationScopes?.map(y => y),
    'AuthorizationType': obj.authorizationType,
    'AuthorizerId': obj.authorizerId,
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'OperationName': obj.operationName,
    'RequestModels': ((obj.requestModels) === undefined) ? undefined : (Object.entries(obj.requestModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteId': obj.routeId,
    'RouteKey': obj.routeKey,
    'RouteResponseSelectionExpression': obj.routeResponseSelectionExpression,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateRouteResponseRequest
 */
export interface ApiGatewayV2CreateRouteResponseRequest {
  /**
   * @schema ApiGatewayV2CreateRouteResponseRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResponseRequest#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResponseRequest#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateRouteResponseRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2CreateRouteResponseRequest#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResponseRequest#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateRouteResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateRouteResponseRequest(obj: ApiGatewayV2CreateRouteResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'ResponseModels': ((obj.responseModels) === undefined) ? undefined : (Object.entries(obj.responseModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteId': obj.routeId,
    'RouteResponseKey': obj.routeResponseKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateRouteResponseResponse
 */
export interface ApiGatewayV2CreateRouteResponseResponse {
  /**
   * @schema ApiGatewayV2CreateRouteResponseResponse#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResponseResponse#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateRouteResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2CreateRouteResponseResponse#RouteResponseId
   */
  readonly routeResponseId?: string;

  /**
   * @schema ApiGatewayV2CreateRouteResponseResponse#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateRouteResponseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateRouteResponseResponse(obj: ApiGatewayV2CreateRouteResponseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'ResponseModels': ((obj.responseModels) === undefined) ? undefined : (Object.entries(obj.responseModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteResponseId': obj.routeResponseId,
    'RouteResponseKey': obj.routeResponseKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateStageRequest
 */
export interface ApiGatewayV2CreateStageRequest {
  /**
   * @schema ApiGatewayV2CreateStageRequest#AccessLogSettings
   */
  readonly accessLogSettings?: ApiGatewayV2AccessLogSettings;

  /**
   * @schema ApiGatewayV2CreateStageRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2CreateStageRequest#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema ApiGatewayV2CreateStageRequest#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ApiGatewayV2CreateStageRequest#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: ApiGatewayV2RouteSettings;

  /**
   * @schema ApiGatewayV2CreateStageRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2CreateStageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2CreateStageRequest#RouteSettings
   */
  readonly routeSettings?: { [key: string]: ApiGatewayV2RouteSettings };

  /**
   * @schema ApiGatewayV2CreateStageRequest#StageName
   */
  readonly stageName?: string;

  /**
   * @schema ApiGatewayV2CreateStageRequest#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateStageRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2CreateStageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateStageRequest(obj: ApiGatewayV2CreateStageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessLogSettings': toJson_ApiGatewayV2AccessLogSettings(obj.accessLogSettings),
    'ApiId': obj.apiId,
    'AutoDeploy': obj.autoDeploy,
    'ClientCertificateId': obj.clientCertificateId,
    'DefaultRouteSettings': toJson_ApiGatewayV2RouteSettings(obj.defaultRouteSettings),
    'DeploymentId': obj.deploymentId,
    'Description': obj.description,
    'RouteSettings': ((obj.routeSettings) === undefined) ? undefined : (Object.entries(obj.routeSettings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2RouteSettings(i[1]) }), {})),
    'StageName': obj.stageName,
    'StageVariables': ((obj.stageVariables) === undefined) ? undefined : (Object.entries(obj.stageVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateStageResponse
 */
export interface ApiGatewayV2CreateStageResponse {
  /**
   * @schema ApiGatewayV2CreateStageResponse#AccessLogSettings
   */
  readonly accessLogSettings?: ApiGatewayV2AccessLogSettings;

  /**
   * @schema ApiGatewayV2CreateStageResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2CreateStageResponse#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema ApiGatewayV2CreateStageResponse#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ApiGatewayV2CreateStageResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2CreateStageResponse#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: ApiGatewayV2RouteSettings;

  /**
   * @schema ApiGatewayV2CreateStageResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2CreateStageResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2CreateStageResponse#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema ApiGatewayV2CreateStageResponse#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema ApiGatewayV2CreateStageResponse#RouteSettings
   */
  readonly routeSettings?: { [key: string]: ApiGatewayV2RouteSettings };

  /**
   * @schema ApiGatewayV2CreateStageResponse#StageName
   */
  readonly stageName?: string;

  /**
   * @schema ApiGatewayV2CreateStageResponse#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateStageResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2CreateStageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateStageResponse(obj: ApiGatewayV2CreateStageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessLogSettings': toJson_ApiGatewayV2AccessLogSettings(obj.accessLogSettings),
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'AutoDeploy': obj.autoDeploy,
    'ClientCertificateId': obj.clientCertificateId,
    'CreatedDate': obj.createdDate,
    'DefaultRouteSettings': toJson_ApiGatewayV2RouteSettings(obj.defaultRouteSettings),
    'DeploymentId': obj.deploymentId,
    'Description': obj.description,
    'LastDeploymentStatusMessage': obj.lastDeploymentStatusMessage,
    'LastUpdatedDate': obj.lastUpdatedDate,
    'RouteSettings': ((obj.routeSettings) === undefined) ? undefined : (Object.entries(obj.routeSettings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2RouteSettings(i[1]) }), {})),
    'StageName': obj.stageName,
    'StageVariables': ((obj.stageVariables) === undefined) ? undefined : (Object.entries(obj.stageVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateVpcLinkRequest
 */
export interface ApiGatewayV2CreateVpcLinkRequest {
  /**
   * @schema ApiGatewayV2CreateVpcLinkRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2CreateVpcLinkRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ApiGatewayV2CreateVpcLinkRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema ApiGatewayV2CreateVpcLinkRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2CreateVpcLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateVpcLinkRequest(obj: ApiGatewayV2CreateVpcLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2CreateVpcLinkResponse
 */
export interface ApiGatewayV2CreateVpcLinkResponse {
  /**
   * @schema ApiGatewayV2CreateVpcLinkResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2CreateVpcLinkResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2CreateVpcLinkResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ApiGatewayV2CreateVpcLinkResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema ApiGatewayV2CreateVpcLinkResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2CreateVpcLinkResponse#VpcLinkId
   */
  readonly vpcLinkId?: string;

  /**
   * @schema ApiGatewayV2CreateVpcLinkResponse#VpcLinkStatus
   */
  readonly vpcLinkStatus?: string;

  /**
   * @schema ApiGatewayV2CreateVpcLinkResponse#VpcLinkStatusMessage
   */
  readonly vpcLinkStatusMessage?: string;

  /**
   * @schema ApiGatewayV2CreateVpcLinkResponse#VpcLinkVersion
   */
  readonly vpcLinkVersion?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2CreateVpcLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2CreateVpcLinkResponse(obj: ApiGatewayV2CreateVpcLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedDate': obj.createdDate,
    'Name': obj.name,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VpcLinkId': obj.vpcLinkId,
    'VpcLinkStatus': obj.vpcLinkStatus,
    'VpcLinkStatusMessage': obj.vpcLinkStatusMessage,
    'VpcLinkVersion': obj.vpcLinkVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteAccessLogSettingsRequest
 */
export interface ApiGatewayV2DeleteAccessLogSettingsRequest {
  /**
   * @schema ApiGatewayV2DeleteAccessLogSettingsRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteAccessLogSettingsRequest#StageName
   */
  readonly stageName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteAccessLogSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteAccessLogSettingsRequest(obj: ApiGatewayV2DeleteAccessLogSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'StageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteApiRequest
 */
export interface ApiGatewayV2DeleteApiRequest {
  /**
   * @schema ApiGatewayV2DeleteApiRequest#ApiId
   */
  readonly apiId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteApiRequest(obj: ApiGatewayV2DeleteApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteApiMappingRequest
 */
export interface ApiGatewayV2DeleteApiMappingRequest {
  /**
   * @schema ApiGatewayV2DeleteApiMappingRequest#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema ApiGatewayV2DeleteApiMappingRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteApiMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteApiMappingRequest(obj: ApiGatewayV2DeleteApiMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiMappingId': obj.apiMappingId,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteAuthorizerRequest
 */
export interface ApiGatewayV2DeleteAuthorizerRequest {
  /**
   * @schema ApiGatewayV2DeleteAuthorizerRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteAuthorizerRequest#AuthorizerId
   */
  readonly authorizerId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteAuthorizerRequest(obj: ApiGatewayV2DeleteAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'AuthorizerId': obj.authorizerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteCorsConfigurationRequest
 */
export interface ApiGatewayV2DeleteCorsConfigurationRequest {
  /**
   * @schema ApiGatewayV2DeleteCorsConfigurationRequest#ApiId
   */
  readonly apiId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteCorsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteCorsConfigurationRequest(obj: ApiGatewayV2DeleteCorsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteDeploymentRequest
 */
export interface ApiGatewayV2DeleteDeploymentRequest {
  /**
   * @schema ApiGatewayV2DeleteDeploymentRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteDeploymentRequest#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteDeploymentRequest(obj: ApiGatewayV2DeleteDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'DeploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteDomainNameRequest
 */
export interface ApiGatewayV2DeleteDomainNameRequest {
  /**
   * @schema ApiGatewayV2DeleteDomainNameRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteDomainNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteDomainNameRequest(obj: ApiGatewayV2DeleteDomainNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteIntegrationRequest
 */
export interface ApiGatewayV2DeleteIntegrationRequest {
  /**
   * @schema ApiGatewayV2DeleteIntegrationRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteIntegrationRequest#IntegrationId
   */
  readonly integrationId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteIntegrationRequest(obj: ApiGatewayV2DeleteIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'IntegrationId': obj.integrationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteIntegrationResponseRequest
 */
export interface ApiGatewayV2DeleteIntegrationResponseRequest {
  /**
   * @schema ApiGatewayV2DeleteIntegrationResponseRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2DeleteIntegrationResponseRequest#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteIntegrationResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteIntegrationResponseRequest(obj: ApiGatewayV2DeleteIntegrationResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'IntegrationId': obj.integrationId,
    'IntegrationResponseId': obj.integrationResponseId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteModelRequest
 */
export interface ApiGatewayV2DeleteModelRequest {
  /**
   * @schema ApiGatewayV2DeleteModelRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteModelRequest#ModelId
   */
  readonly modelId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteModelRequest(obj: ApiGatewayV2DeleteModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ModelId': obj.modelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteRouteRequest
 */
export interface ApiGatewayV2DeleteRouteRequest {
  /**
   * @schema ApiGatewayV2DeleteRouteRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteRouteRequest#RouteId
   */
  readonly routeId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteRouteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteRouteRequest(obj: ApiGatewayV2DeleteRouteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'RouteId': obj.routeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteRouteRequestParameterRequest
 */
export interface ApiGatewayV2DeleteRouteRequestParameterRequest {
  /**
   * @schema ApiGatewayV2DeleteRouteRequestParameterRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteRouteRequestParameterRequest#RequestParameterKey
   */
  readonly requestParameterKey?: string;

  /**
   * @schema ApiGatewayV2DeleteRouteRequestParameterRequest#RouteId
   */
  readonly routeId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteRouteRequestParameterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteRouteRequestParameterRequest(obj: ApiGatewayV2DeleteRouteRequestParameterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'RequestParameterKey': obj.requestParameterKey,
    'RouteId': obj.routeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteRouteResponseRequest
 */
export interface ApiGatewayV2DeleteRouteResponseRequest {
  /**
   * @schema ApiGatewayV2DeleteRouteResponseRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteRouteResponseRequest#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema ApiGatewayV2DeleteRouteResponseRequest#RouteResponseId
   */
  readonly routeResponseId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteRouteResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteRouteResponseRequest(obj: ApiGatewayV2DeleteRouteResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'RouteId': obj.routeId,
    'RouteResponseId': obj.routeResponseId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteRouteSettingsRequest
 */
export interface ApiGatewayV2DeleteRouteSettingsRequest {
  /**
   * @schema ApiGatewayV2DeleteRouteSettingsRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteRouteSettingsRequest#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema ApiGatewayV2DeleteRouteSettingsRequest#StageName
   */
  readonly stageName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteRouteSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteRouteSettingsRequest(obj: ApiGatewayV2DeleteRouteSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'RouteKey': obj.routeKey,
    'StageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteStageRequest
 */
export interface ApiGatewayV2DeleteStageRequest {
  /**
   * @schema ApiGatewayV2DeleteStageRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2DeleteStageRequest#StageName
   */
  readonly stageName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteStageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteStageRequest(obj: ApiGatewayV2DeleteStageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'StageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteVpcLinkRequest
 */
export interface ApiGatewayV2DeleteVpcLinkRequest {
  /**
   * @schema ApiGatewayV2DeleteVpcLinkRequest#VpcLinkId
   */
  readonly vpcLinkId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DeleteVpcLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteVpcLinkRequest(obj: ApiGatewayV2DeleteVpcLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcLinkId': obj.vpcLinkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DeleteVpcLinkResponse
 */
export interface ApiGatewayV2DeleteVpcLinkResponse {
}

/**
 * Converts an object of type 'ApiGatewayV2DeleteVpcLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DeleteVpcLinkResponse(obj: ApiGatewayV2DeleteVpcLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2ExportApiRequest
 */
export interface ApiGatewayV2ExportApiRequest {
  /**
   * @schema ApiGatewayV2ExportApiRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2ExportApiRequest#ExportVersion
   */
  readonly exportVersion?: string;

  /**
   * @schema ApiGatewayV2ExportApiRequest#IncludeExtensions
   */
  readonly includeExtensions?: boolean;

  /**
   * @schema ApiGatewayV2ExportApiRequest#OutputType
   */
  readonly outputType?: string;

  /**
   * @schema ApiGatewayV2ExportApiRequest#Specification
   */
  readonly specification?: string;

  /**
   * @schema ApiGatewayV2ExportApiRequest#StageName
   */
  readonly stageName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2ExportApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2ExportApiRequest(obj: ApiGatewayV2ExportApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ExportVersion': obj.exportVersion,
    'IncludeExtensions': obj.includeExtensions,
    'OutputType': obj.outputType,
    'Specification': obj.specification,
    'StageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2ExportApiResponse
 */
export interface ApiGatewayV2ExportApiResponse {
  /**
   * @schema ApiGatewayV2ExportApiResponse#body
   */
  readonly body?: any;

}

/**
 * Converts an object of type 'ApiGatewayV2ExportApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2ExportApiResponse(obj: ApiGatewayV2ExportApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'body': obj.body,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2ResetAuthorizersCacheRequest
 */
export interface ApiGatewayV2ResetAuthorizersCacheRequest {
  /**
   * @schema ApiGatewayV2ResetAuthorizersCacheRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2ResetAuthorizersCacheRequest#StageName
   */
  readonly stageName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2ResetAuthorizersCacheRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2ResetAuthorizersCacheRequest(obj: ApiGatewayV2ResetAuthorizersCacheRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'StageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetApiRequest
 */
export interface ApiGatewayV2GetApiRequest {
  /**
   * @schema ApiGatewayV2GetApiRequest#ApiId
   */
  readonly apiId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetApiRequest(obj: ApiGatewayV2GetApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetApiResponse
 */
export interface ApiGatewayV2GetApiResponse {
  /**
   * @schema ApiGatewayV2GetApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema ApiGatewayV2GetApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2GetApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ApiGatewayV2GetApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: ApiGatewayV2Cors;

  /**
   * @schema ApiGatewayV2GetApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2GetApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2GetApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ApiGatewayV2GetApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ApiGatewayV2GetApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema ApiGatewayV2GetApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2GetApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema ApiGatewayV2GetApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2GetApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2GetApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema ApiGatewayV2GetApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayV2GetApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetApiResponse(obj: ApiGatewayV2GetApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiEndpoint': obj.apiEndpoint,
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiId': obj.apiId,
    'ApiKeySelectionExpression': obj.apiKeySelectionExpression,
    'CorsConfiguration': toJson_ApiGatewayV2Cors(obj.corsConfiguration),
    'CreatedDate': obj.createdDate,
    'Description': obj.description,
    'DisableSchemaValidation': obj.disableSchemaValidation,
    'DisableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
    'ImportInfo': obj.importInfo?.map(y => y),
    'Name': obj.name,
    'ProtocolType': obj.protocolType,
    'RouteSelectionExpression': obj.routeSelectionExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Version': obj.version,
    'Warnings': obj.warnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetApiMappingRequest
 */
export interface ApiGatewayV2GetApiMappingRequest {
  /**
   * @schema ApiGatewayV2GetApiMappingRequest#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema ApiGatewayV2GetApiMappingRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetApiMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetApiMappingRequest(obj: ApiGatewayV2GetApiMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiMappingId': obj.apiMappingId,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetApiMappingResponse
 */
export interface ApiGatewayV2GetApiMappingResponse {
  /**
   * @schema ApiGatewayV2GetApiMappingResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetApiMappingResponse#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema ApiGatewayV2GetApiMappingResponse#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema ApiGatewayV2GetApiMappingResponse#Stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetApiMappingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetApiMappingResponse(obj: ApiGatewayV2GetApiMappingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ApiMappingId': obj.apiMappingId,
    'ApiMappingKey': obj.apiMappingKey,
    'Stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetApiMappingsRequest
 */
export interface ApiGatewayV2GetApiMappingsRequest {
  /**
   * @schema ApiGatewayV2GetApiMappingsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayV2GetApiMappingsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetApiMappingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetApiMappingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetApiMappingsRequest(obj: ApiGatewayV2GetApiMappingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetApiMappingsResponse
 */
export interface ApiGatewayV2GetApiMappingsResponse {
  /**
   * @schema ApiGatewayV2GetApiMappingsResponse#Items
   */
  readonly items?: ApiGatewayV2ApiMapping[];

  /**
   * @schema ApiGatewayV2GetApiMappingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetApiMappingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetApiMappingsResponse(obj: ApiGatewayV2GetApiMappingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2ApiMapping(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetApisRequest
 */
export interface ApiGatewayV2GetApisRequest {
  /**
   * @schema ApiGatewayV2GetApisRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetApisRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetApisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetApisRequest(obj: ApiGatewayV2GetApisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetApisResponse
 */
export interface ApiGatewayV2GetApisResponse {
  /**
   * @schema ApiGatewayV2GetApisResponse#Items
   */
  readonly items?: ApiGatewayV2Api[];

  /**
   * @schema ApiGatewayV2GetApisResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetApisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetApisResponse(obj: ApiGatewayV2GetApisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2Api(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetAuthorizerRequest
 */
export interface ApiGatewayV2GetAuthorizerRequest {
  /**
   * @schema ApiGatewayV2GetAuthorizerRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetAuthorizerRequest#AuthorizerId
   */
  readonly authorizerId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetAuthorizerRequest(obj: ApiGatewayV2GetAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'AuthorizerId': obj.authorizerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetAuthorizerResponse
 */
export interface ApiGatewayV2GetAuthorizerResponse {
  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#JwtConfiguration
   */
  readonly jwtConfiguration?: ApiGatewayV2JwtConfiguration;

  /**
   * @schema ApiGatewayV2GetAuthorizerResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetAuthorizerResponse(obj: ApiGatewayV2GetAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthorizerCredentialsArn': obj.authorizerCredentialsArn,
    'AuthorizerId': obj.authorizerId,
    'AuthorizerPayloadFormatVersion': obj.authorizerPayloadFormatVersion,
    'AuthorizerResultTtlInSeconds': obj.authorizerResultTtlInSeconds,
    'AuthorizerType': obj.authorizerType,
    'AuthorizerUri': obj.authorizerUri,
    'EnableSimpleResponses': obj.enableSimpleResponses,
    'IdentitySource': obj.identitySource?.map(y => y),
    'IdentityValidationExpression': obj.identityValidationExpression,
    'JwtConfiguration': toJson_ApiGatewayV2JwtConfiguration(obj.jwtConfiguration),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetAuthorizersRequest
 */
export interface ApiGatewayV2GetAuthorizersRequest {
  /**
   * @schema ApiGatewayV2GetAuthorizersRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetAuthorizersRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetAuthorizersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetAuthorizersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetAuthorizersRequest(obj: ApiGatewayV2GetAuthorizersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetAuthorizersResponse
 */
export interface ApiGatewayV2GetAuthorizersResponse {
  /**
   * @schema ApiGatewayV2GetAuthorizersResponse#Items
   */
  readonly items?: ApiGatewayV2Authorizer[];

  /**
   * @schema ApiGatewayV2GetAuthorizersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetAuthorizersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetAuthorizersResponse(obj: ApiGatewayV2GetAuthorizersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2Authorizer(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetDeploymentRequest
 */
export interface ApiGatewayV2GetDeploymentRequest {
  /**
   * @schema ApiGatewayV2GetDeploymentRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetDeploymentRequest#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetDeploymentRequest(obj: ApiGatewayV2GetDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'DeploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetDeploymentResponse
 */
export interface ApiGatewayV2GetDeploymentResponse {
  /**
   * @schema ApiGatewayV2GetDeploymentResponse#AutoDeployed
   */
  readonly autoDeployed?: boolean;

  /**
   * @schema ApiGatewayV2GetDeploymentResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2GetDeploymentResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2GetDeploymentResponse#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema ApiGatewayV2GetDeploymentResponse#DeploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema ApiGatewayV2GetDeploymentResponse#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetDeploymentResponse(obj: ApiGatewayV2GetDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoDeployed': obj.autoDeployed,
    'CreatedDate': obj.createdDate,
    'DeploymentId': obj.deploymentId,
    'DeploymentStatus': obj.deploymentStatus,
    'DeploymentStatusMessage': obj.deploymentStatusMessage,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetDeploymentsRequest
 */
export interface ApiGatewayV2GetDeploymentsRequest {
  /**
   * @schema ApiGatewayV2GetDeploymentsRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetDeploymentsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetDeploymentsRequest(obj: ApiGatewayV2GetDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetDeploymentsResponse
 */
export interface ApiGatewayV2GetDeploymentsResponse {
  /**
   * @schema ApiGatewayV2GetDeploymentsResponse#Items
   */
  readonly items?: ApiGatewayV2Deployment[];

  /**
   * @schema ApiGatewayV2GetDeploymentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetDeploymentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetDeploymentsResponse(obj: ApiGatewayV2GetDeploymentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2Deployment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetDomainNameRequest
 */
export interface ApiGatewayV2GetDomainNameRequest {
  /**
   * @schema ApiGatewayV2GetDomainNameRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetDomainNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetDomainNameRequest(obj: ApiGatewayV2GetDomainNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetDomainNameResponse
 */
export interface ApiGatewayV2GetDomainNameResponse {
  /**
   * @schema ApiGatewayV2GetDomainNameResponse#ApiMappingSelectionExpression
   */
  readonly apiMappingSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2GetDomainNameResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayV2GetDomainNameResponse#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: ApiGatewayV2DomainNameConfiguration[];

  /**
   * @schema ApiGatewayV2GetDomainNameResponse#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: ApiGatewayV2MutualTlsAuthentication;

  /**
   * @schema ApiGatewayV2GetDomainNameResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2GetDomainNameResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetDomainNameResponse(obj: ApiGatewayV2GetDomainNameResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiMappingSelectionExpression': obj.apiMappingSelectionExpression,
    'DomainName': obj.domainName,
    'DomainNameConfigurations': obj.domainNameConfigurations?.map(y => toJson_ApiGatewayV2DomainNameConfiguration(y)),
    'MutualTlsAuthentication': toJson_ApiGatewayV2MutualTlsAuthentication(obj.mutualTlsAuthentication),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetDomainNamesRequest
 */
export interface ApiGatewayV2GetDomainNamesRequest {
  /**
   * @schema ApiGatewayV2GetDomainNamesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetDomainNamesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetDomainNamesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetDomainNamesRequest(obj: ApiGatewayV2GetDomainNamesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetDomainNamesResponse
 */
export interface ApiGatewayV2GetDomainNamesResponse {
  /**
   * @schema ApiGatewayV2GetDomainNamesResponse#Items
   */
  readonly items?: ApiGatewayV2DomainName[];

  /**
   * @schema ApiGatewayV2GetDomainNamesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetDomainNamesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetDomainNamesResponse(obj: ApiGatewayV2GetDomainNamesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2DomainName(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetIntegrationRequest
 */
export interface ApiGatewayV2GetIntegrationRequest {
  /**
   * @schema ApiGatewayV2GetIntegrationRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationRequest#IntegrationId
   */
  readonly integrationId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetIntegrationRequest(obj: ApiGatewayV2GetIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'IntegrationId': obj.integrationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetIntegrationResult
 */
export interface ApiGatewayV2GetIntegrationResult {
  /**
   * @schema ApiGatewayV2GetIntegrationResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#IntegrationResponseSelectionExpression
   */
  readonly integrationResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2GetIntegrationResult#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2GetIntegrationResult#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * @schema ApiGatewayV2GetIntegrationResult#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema ApiGatewayV2GetIntegrationResult#TlsConfig
   */
  readonly tlsConfig?: ApiGatewayV2TlsConfig;

}

/**
 * Converts an object of type 'ApiGatewayV2GetIntegrationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetIntegrationResult(obj: ApiGatewayV2GetIntegrationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ConnectionId': obj.connectionId,
    'ConnectionType': obj.connectionType,
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'CredentialsArn': obj.credentialsArn,
    'Description': obj.description,
    'IntegrationId': obj.integrationId,
    'IntegrationMethod': obj.integrationMethod,
    'IntegrationResponseSelectionExpression': obj.integrationResponseSelectionExpression,
    'IntegrationSubtype': obj.integrationSubtype,
    'IntegrationType': obj.integrationType,
    'IntegrationUri': obj.integrationUri,
    'PassthroughBehavior': obj.passthroughBehavior,
    'PayloadFormatVersion': obj.payloadFormatVersion,
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestTemplates': ((obj.requestTemplates) === undefined) ? undefined : (Object.entries(obj.requestTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
    'TimeoutInMillis': obj.timeoutInMillis,
    'TlsConfig': toJson_ApiGatewayV2TlsConfig(obj.tlsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetIntegrationResponseRequest
 */
export interface ApiGatewayV2GetIntegrationResponseRequest {
  /**
   * @schema ApiGatewayV2GetIntegrationResponseRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponseRequest#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetIntegrationResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetIntegrationResponseRequest(obj: ApiGatewayV2GetIntegrationResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'IntegrationId': obj.integrationId,
    'IntegrationResponseId': obj.integrationResponseId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetIntegrationResponseResponse
 */
export interface ApiGatewayV2GetIntegrationResponseResponse {
  /**
   * @schema ApiGatewayV2GetIntegrationResponseResponse#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponseResponse#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponseResponse#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2GetIntegrationResponseResponse#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2GetIntegrationResponseResponse#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetIntegrationResponseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetIntegrationResponseResponse(obj: ApiGatewayV2GetIntegrationResponseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'IntegrationResponseId': obj.integrationResponseId,
    'IntegrationResponseKey': obj.integrationResponseKey,
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetIntegrationResponsesRequest
 */
export interface ApiGatewayV2GetIntegrationResponsesRequest {
  /**
   * @schema ApiGatewayV2GetIntegrationResponsesRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponsesRequest#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponsesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponsesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetIntegrationResponsesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetIntegrationResponsesRequest(obj: ApiGatewayV2GetIntegrationResponsesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'IntegrationId': obj.integrationId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetIntegrationResponsesResponse
 */
export interface ApiGatewayV2GetIntegrationResponsesResponse {
  /**
   * @schema ApiGatewayV2GetIntegrationResponsesResponse#Items
   */
  readonly items?: ApiGatewayV2IntegrationResponse[];

  /**
   * @schema ApiGatewayV2GetIntegrationResponsesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetIntegrationResponsesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetIntegrationResponsesResponse(obj: ApiGatewayV2GetIntegrationResponsesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2IntegrationResponse(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetIntegrationsRequest
 */
export interface ApiGatewayV2GetIntegrationsRequest {
  /**
   * @schema ApiGatewayV2GetIntegrationsRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetIntegrationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetIntegrationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetIntegrationsRequest(obj: ApiGatewayV2GetIntegrationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetIntegrationsResponse
 */
export interface ApiGatewayV2GetIntegrationsResponse {
  /**
   * @schema ApiGatewayV2GetIntegrationsResponse#Items
   */
  readonly items?: ApiGatewayV2Integration[];

  /**
   * @schema ApiGatewayV2GetIntegrationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetIntegrationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetIntegrationsResponse(obj: ApiGatewayV2GetIntegrationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2Integration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetModelRequest
 */
export interface ApiGatewayV2GetModelRequest {
  /**
   * @schema ApiGatewayV2GetModelRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetModelRequest#ModelId
   */
  readonly modelId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetModelRequest(obj: ApiGatewayV2GetModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ModelId': obj.modelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetModelResponse
 */
export interface ApiGatewayV2GetModelResponse {
  /**
   * @schema ApiGatewayV2GetModelResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ApiGatewayV2GetModelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2GetModelResponse#ModelId
   */
  readonly modelId?: string;

  /**
   * @schema ApiGatewayV2GetModelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2GetModelResponse#Schema
   */
  readonly schema?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetModelResponse(obj: ApiGatewayV2GetModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Description': obj.description,
    'ModelId': obj.modelId,
    'Name': obj.name,
    'Schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetModelTemplateRequest
 */
export interface ApiGatewayV2GetModelTemplateRequest {
  /**
   * @schema ApiGatewayV2GetModelTemplateRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetModelTemplateRequest#ModelId
   */
  readonly modelId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetModelTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetModelTemplateRequest(obj: ApiGatewayV2GetModelTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ModelId': obj.modelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetModelTemplateResponse
 */
export interface ApiGatewayV2GetModelTemplateResponse {
  /**
   * @schema ApiGatewayV2GetModelTemplateResponse#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetModelTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetModelTemplateResponse(obj: ApiGatewayV2GetModelTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetModelsRequest
 */
export interface ApiGatewayV2GetModelsRequest {
  /**
   * @schema ApiGatewayV2GetModelsRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetModelsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetModelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetModelsRequest(obj: ApiGatewayV2GetModelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetModelsResponse
 */
export interface ApiGatewayV2GetModelsResponse {
  /**
   * @schema ApiGatewayV2GetModelsResponse#Items
   */
  readonly items?: ApiGatewayV2Model[];

  /**
   * @schema ApiGatewayV2GetModelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetModelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetModelsResponse(obj: ApiGatewayV2GetModelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2Model(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetRouteRequest
 */
export interface ApiGatewayV2GetRouteRequest {
  /**
   * @schema ApiGatewayV2GetRouteRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetRouteRequest#RouteId
   */
  readonly routeId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetRouteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetRouteRequest(obj: ApiGatewayV2GetRouteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'RouteId': obj.routeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetRouteResult
 */
export interface ApiGatewayV2GetRouteResult {
  /**
   * @schema ApiGatewayV2GetRouteResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2GetRouteResult#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema ApiGatewayV2GetRouteResult#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema ApiGatewayV2GetRouteResult#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema ApiGatewayV2GetRouteResult#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2GetRouteResult#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2GetRouteResult#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema ApiGatewayV2GetRouteResult#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2GetRouteResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2GetRouteResult#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema ApiGatewayV2GetRouteResult#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema ApiGatewayV2GetRouteResult#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2GetRouteResult#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetRouteResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetRouteResult(obj: ApiGatewayV2GetRouteResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiKeyRequired': obj.apiKeyRequired,
    'AuthorizationScopes': obj.authorizationScopes?.map(y => y),
    'AuthorizationType': obj.authorizationType,
    'AuthorizerId': obj.authorizerId,
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'OperationName': obj.operationName,
    'RequestModels': ((obj.requestModels) === undefined) ? undefined : (Object.entries(obj.requestModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteId': obj.routeId,
    'RouteKey': obj.routeKey,
    'RouteResponseSelectionExpression': obj.routeResponseSelectionExpression,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetRouteResponseRequest
 */
export interface ApiGatewayV2GetRouteResponseRequest {
  /**
   * @schema ApiGatewayV2GetRouteResponseRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetRouteResponseRequest#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema ApiGatewayV2GetRouteResponseRequest#RouteResponseId
   */
  readonly routeResponseId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetRouteResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetRouteResponseRequest(obj: ApiGatewayV2GetRouteResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'RouteId': obj.routeId,
    'RouteResponseId': obj.routeResponseId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetRouteResponseResponse
 */
export interface ApiGatewayV2GetRouteResponseResponse {
  /**
   * @schema ApiGatewayV2GetRouteResponseResponse#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2GetRouteResponseResponse#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2GetRouteResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2GetRouteResponseResponse#RouteResponseId
   */
  readonly routeResponseId?: string;

  /**
   * @schema ApiGatewayV2GetRouteResponseResponse#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetRouteResponseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetRouteResponseResponse(obj: ApiGatewayV2GetRouteResponseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'ResponseModels': ((obj.responseModels) === undefined) ? undefined : (Object.entries(obj.responseModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteResponseId': obj.routeResponseId,
    'RouteResponseKey': obj.routeResponseKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetRouteResponsesRequest
 */
export interface ApiGatewayV2GetRouteResponsesRequest {
  /**
   * @schema ApiGatewayV2GetRouteResponsesRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetRouteResponsesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetRouteResponsesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ApiGatewayV2GetRouteResponsesRequest#RouteId
   */
  readonly routeId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetRouteResponsesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetRouteResponsesRequest(obj: ApiGatewayV2GetRouteResponsesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'RouteId': obj.routeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetRouteResponsesResponse
 */
export interface ApiGatewayV2GetRouteResponsesResponse {
  /**
   * @schema ApiGatewayV2GetRouteResponsesResponse#Items
   */
  readonly items?: ApiGatewayV2RouteResponse[];

  /**
   * @schema ApiGatewayV2GetRouteResponsesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetRouteResponsesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetRouteResponsesResponse(obj: ApiGatewayV2GetRouteResponsesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2RouteResponse(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetRoutesRequest
 */
export interface ApiGatewayV2GetRoutesRequest {
  /**
   * @schema ApiGatewayV2GetRoutesRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetRoutesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetRoutesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetRoutesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetRoutesRequest(obj: ApiGatewayV2GetRoutesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetRoutesResponse
 */
export interface ApiGatewayV2GetRoutesResponse {
  /**
   * @schema ApiGatewayV2GetRoutesResponse#Items
   */
  readonly items?: ApiGatewayV2Route[];

  /**
   * @schema ApiGatewayV2GetRoutesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetRoutesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetRoutesResponse(obj: ApiGatewayV2GetRoutesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2Route(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetStageRequest
 */
export interface ApiGatewayV2GetStageRequest {
  /**
   * @schema ApiGatewayV2GetStageRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetStageRequest#StageName
   */
  readonly stageName?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetStageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetStageRequest(obj: ApiGatewayV2GetStageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'StageName': obj.stageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetStageResponse
 */
export interface ApiGatewayV2GetStageResponse {
  /**
   * @schema ApiGatewayV2GetStageResponse#AccessLogSettings
   */
  readonly accessLogSettings?: ApiGatewayV2AccessLogSettings;

  /**
   * @schema ApiGatewayV2GetStageResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2GetStageResponse#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema ApiGatewayV2GetStageResponse#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ApiGatewayV2GetStageResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2GetStageResponse#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: ApiGatewayV2RouteSettings;

  /**
   * @schema ApiGatewayV2GetStageResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2GetStageResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2GetStageResponse#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema ApiGatewayV2GetStageResponse#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema ApiGatewayV2GetStageResponse#RouteSettings
   */
  readonly routeSettings?: { [key: string]: ApiGatewayV2RouteSettings };

  /**
   * @schema ApiGatewayV2GetStageResponse#StageName
   */
  readonly stageName?: string;

  /**
   * @schema ApiGatewayV2GetStageResponse#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2GetStageResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2GetStageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetStageResponse(obj: ApiGatewayV2GetStageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessLogSettings': toJson_ApiGatewayV2AccessLogSettings(obj.accessLogSettings),
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'AutoDeploy': obj.autoDeploy,
    'ClientCertificateId': obj.clientCertificateId,
    'CreatedDate': obj.createdDate,
    'DefaultRouteSettings': toJson_ApiGatewayV2RouteSettings(obj.defaultRouteSettings),
    'DeploymentId': obj.deploymentId,
    'Description': obj.description,
    'LastDeploymentStatusMessage': obj.lastDeploymentStatusMessage,
    'LastUpdatedDate': obj.lastUpdatedDate,
    'RouteSettings': ((obj.routeSettings) === undefined) ? undefined : (Object.entries(obj.routeSettings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2RouteSettings(i[1]) }), {})),
    'StageName': obj.stageName,
    'StageVariables': ((obj.stageVariables) === undefined) ? undefined : (Object.entries(obj.stageVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetStagesRequest
 */
export interface ApiGatewayV2GetStagesRequest {
  /**
   * @schema ApiGatewayV2GetStagesRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2GetStagesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetStagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetStagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetStagesRequest(obj: ApiGatewayV2GetStagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetStagesResponse
 */
export interface ApiGatewayV2GetStagesResponse {
  /**
   * @schema ApiGatewayV2GetStagesResponse#Items
   */
  readonly items?: ApiGatewayV2Stage[];

  /**
   * @schema ApiGatewayV2GetStagesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetStagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetStagesResponse(obj: ApiGatewayV2GetStagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2Stage(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetTagsRequest
 */
export interface ApiGatewayV2GetTagsRequest {
  /**
   * @schema ApiGatewayV2GetTagsRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetTagsRequest(obj: ApiGatewayV2GetTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetTagsResponse
 */
export interface ApiGatewayV2GetTagsResponse {
  /**
   * @schema ApiGatewayV2GetTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2GetTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetTagsResponse(obj: ApiGatewayV2GetTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetVpcLinkRequest
 */
export interface ApiGatewayV2GetVpcLinkRequest {
  /**
   * @schema ApiGatewayV2GetVpcLinkRequest#VpcLinkId
   */
  readonly vpcLinkId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetVpcLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetVpcLinkRequest(obj: ApiGatewayV2GetVpcLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcLinkId': obj.vpcLinkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetVpcLinkResponse
 */
export interface ApiGatewayV2GetVpcLinkResponse {
  /**
   * @schema ApiGatewayV2GetVpcLinkResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2GetVpcLinkResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2GetVpcLinkResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ApiGatewayV2GetVpcLinkResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema ApiGatewayV2GetVpcLinkResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2GetVpcLinkResponse#VpcLinkId
   */
  readonly vpcLinkId?: string;

  /**
   * @schema ApiGatewayV2GetVpcLinkResponse#VpcLinkStatus
   */
  readonly vpcLinkStatus?: string;

  /**
   * @schema ApiGatewayV2GetVpcLinkResponse#VpcLinkStatusMessage
   */
  readonly vpcLinkStatusMessage?: string;

  /**
   * @schema ApiGatewayV2GetVpcLinkResponse#VpcLinkVersion
   */
  readonly vpcLinkVersion?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetVpcLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetVpcLinkResponse(obj: ApiGatewayV2GetVpcLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedDate': obj.createdDate,
    'Name': obj.name,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VpcLinkId': obj.vpcLinkId,
    'VpcLinkStatus': obj.vpcLinkStatus,
    'VpcLinkStatusMessage': obj.vpcLinkStatusMessage,
    'VpcLinkVersion': obj.vpcLinkVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetVpcLinksRequest
 */
export interface ApiGatewayV2GetVpcLinksRequest {
  /**
   * @schema ApiGatewayV2GetVpcLinksRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema ApiGatewayV2GetVpcLinksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetVpcLinksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetVpcLinksRequest(obj: ApiGatewayV2GetVpcLinksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2GetVpcLinksResponse
 */
export interface ApiGatewayV2GetVpcLinksResponse {
  /**
   * @schema ApiGatewayV2GetVpcLinksResponse#Items
   */
  readonly items?: ApiGatewayV2VpcLink[];

  /**
   * @schema ApiGatewayV2GetVpcLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2GetVpcLinksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2GetVpcLinksResponse(obj: ApiGatewayV2GetVpcLinksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_ApiGatewayV2VpcLink(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2ImportApiRequest
 */
export interface ApiGatewayV2ImportApiRequest {
  /**
   * @schema ApiGatewayV2ImportApiRequest#Basepath
   */
  readonly basepath?: string;

  /**
   * @schema ApiGatewayV2ImportApiRequest#Body
   */
  readonly body?: string;

  /**
   * @schema ApiGatewayV2ImportApiRequest#FailOnWarnings
   */
  readonly failOnWarnings?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayV2ImportApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2ImportApiRequest(obj: ApiGatewayV2ImportApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Basepath': obj.basepath,
    'Body': obj.body,
    'FailOnWarnings': obj.failOnWarnings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2ImportApiResponse
 */
export interface ApiGatewayV2ImportApiResponse {
  /**
   * @schema ApiGatewayV2ImportApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema ApiGatewayV2ImportApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2ImportApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2ImportApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ApiGatewayV2ImportApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: ApiGatewayV2Cors;

  /**
   * @schema ApiGatewayV2ImportApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2ImportApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2ImportApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ApiGatewayV2ImportApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ApiGatewayV2ImportApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema ApiGatewayV2ImportApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2ImportApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema ApiGatewayV2ImportApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2ImportApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2ImportApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema ApiGatewayV2ImportApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayV2ImportApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2ImportApiResponse(obj: ApiGatewayV2ImportApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiEndpoint': obj.apiEndpoint,
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiId': obj.apiId,
    'ApiKeySelectionExpression': obj.apiKeySelectionExpression,
    'CorsConfiguration': toJson_ApiGatewayV2Cors(obj.corsConfiguration),
    'CreatedDate': obj.createdDate,
    'Description': obj.description,
    'DisableSchemaValidation': obj.disableSchemaValidation,
    'DisableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
    'ImportInfo': obj.importInfo?.map(y => y),
    'Name': obj.name,
    'ProtocolType': obj.protocolType,
    'RouteSelectionExpression': obj.routeSelectionExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Version': obj.version,
    'Warnings': obj.warnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2ReimportApiRequest
 */
export interface ApiGatewayV2ReimportApiRequest {
  /**
   * @schema ApiGatewayV2ReimportApiRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2ReimportApiRequest#Basepath
   */
  readonly basepath?: string;

  /**
   * @schema ApiGatewayV2ReimportApiRequest#Body
   */
  readonly body?: string;

  /**
   * @schema ApiGatewayV2ReimportApiRequest#FailOnWarnings
   */
  readonly failOnWarnings?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayV2ReimportApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2ReimportApiRequest(obj: ApiGatewayV2ReimportApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'Basepath': obj.basepath,
    'Body': obj.body,
    'FailOnWarnings': obj.failOnWarnings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2ReimportApiResponse
 */
export interface ApiGatewayV2ReimportApiResponse {
  /**
   * @schema ApiGatewayV2ReimportApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: ApiGatewayV2Cors;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema ApiGatewayV2ReimportApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2ReimportApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema ApiGatewayV2ReimportApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayV2ReimportApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2ReimportApiResponse(obj: ApiGatewayV2ReimportApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiEndpoint': obj.apiEndpoint,
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiId': obj.apiId,
    'ApiKeySelectionExpression': obj.apiKeySelectionExpression,
    'CorsConfiguration': toJson_ApiGatewayV2Cors(obj.corsConfiguration),
    'CreatedDate': obj.createdDate,
    'Description': obj.description,
    'DisableSchemaValidation': obj.disableSchemaValidation,
    'DisableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
    'ImportInfo': obj.importInfo?.map(y => y),
    'Name': obj.name,
    'ProtocolType': obj.protocolType,
    'RouteSelectionExpression': obj.routeSelectionExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Version': obj.version,
    'Warnings': obj.warnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2TagResourceRequest
 */
export interface ApiGatewayV2TagResourceRequest {
  /**
   * @schema ApiGatewayV2TagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ApiGatewayV2TagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2TagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2TagResourceRequest(obj: ApiGatewayV2TagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2TagResourceResponse
 */
export interface ApiGatewayV2TagResourceResponse {
}

/**
 * Converts an object of type 'ApiGatewayV2TagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2TagResourceResponse(obj: ApiGatewayV2TagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UntagResourceRequest
 */
export interface ApiGatewayV2UntagResourceRequest {
  /**
   * @schema ApiGatewayV2UntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ApiGatewayV2UntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ApiGatewayV2UntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UntagResourceRequest(obj: ApiGatewayV2UntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ApiGatewayV2UpdateApiRequest
 */
export interface ApiGatewayV2UpdateApiRequest {
  /**
   * @schema ApiGatewayV2UpdateApiRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#CorsConfiguration
   */
  readonly corsConfiguration?: ApiGatewayV2Cors;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#Target
   */
  readonly target?: string;

  /**
   * @schema ApiGatewayV2UpdateApiRequest#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateApiRequest(obj: ApiGatewayV2UpdateApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ApiKeySelectionExpression': obj.apiKeySelectionExpression,
    'CorsConfiguration': toJson_ApiGatewayV2Cors(obj.corsConfiguration),
    'CredentialsArn': obj.credentialsArn,
    'Description': obj.description,
    'DisableSchemaValidation': obj.disableSchemaValidation,
    'DisableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
    'Name': obj.name,
    'RouteKey': obj.routeKey,
    'RouteSelectionExpression': obj.routeSelectionExpression,
    'Target': obj.target,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateApiResponse
 */
export interface ApiGatewayV2UpdateApiResponse {
  /**
   * @schema ApiGatewayV2UpdateApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: ApiGatewayV2Cors;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema ApiGatewayV2UpdateApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema ApiGatewayV2UpdateApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateApiResponse(obj: ApiGatewayV2UpdateApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiEndpoint': obj.apiEndpoint,
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiId': obj.apiId,
    'ApiKeySelectionExpression': obj.apiKeySelectionExpression,
    'CorsConfiguration': toJson_ApiGatewayV2Cors(obj.corsConfiguration),
    'CreatedDate': obj.createdDate,
    'Description': obj.description,
    'DisableSchemaValidation': obj.disableSchemaValidation,
    'DisableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
    'ImportInfo': obj.importInfo?.map(y => y),
    'Name': obj.name,
    'ProtocolType': obj.protocolType,
    'RouteSelectionExpression': obj.routeSelectionExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Version': obj.version,
    'Warnings': obj.warnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateApiMappingRequest
 */
export interface ApiGatewayV2UpdateApiMappingRequest {
  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#Stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateApiMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateApiMappingRequest(obj: ApiGatewayV2UpdateApiMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ApiMappingId': obj.apiMappingId,
    'ApiMappingKey': obj.apiMappingKey,
    'DomainName': obj.domainName,
    'Stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateApiMappingResponse
 */
export interface ApiGatewayV2UpdateApiMappingResponse {
  /**
   * @schema ApiGatewayV2UpdateApiMappingResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingResponse#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingResponse#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingResponse#Stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateApiMappingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateApiMappingResponse(obj: ApiGatewayV2UpdateApiMappingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ApiMappingId': obj.apiMappingId,
    'ApiMappingKey': obj.apiMappingKey,
    'Stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateAuthorizerRequest
 */
export interface ApiGatewayV2UpdateAuthorizerRequest {
  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#JwtConfiguration
   */
  readonly jwtConfiguration?: ApiGatewayV2JwtConfiguration;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateAuthorizerRequest(obj: ApiGatewayV2UpdateAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'AuthorizerCredentialsArn': obj.authorizerCredentialsArn,
    'AuthorizerId': obj.authorizerId,
    'AuthorizerPayloadFormatVersion': obj.authorizerPayloadFormatVersion,
    'AuthorizerResultTtlInSeconds': obj.authorizerResultTtlInSeconds,
    'AuthorizerType': obj.authorizerType,
    'AuthorizerUri': obj.authorizerUri,
    'EnableSimpleResponses': obj.enableSimpleResponses,
    'IdentitySource': obj.identitySource?.map(y => y),
    'IdentityValidationExpression': obj.identityValidationExpression,
    'JwtConfiguration': toJson_ApiGatewayV2JwtConfiguration(obj.jwtConfiguration),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateAuthorizerResponse
 */
export interface ApiGatewayV2UpdateAuthorizerResponse {
  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#JwtConfiguration
   */
  readonly jwtConfiguration?: ApiGatewayV2JwtConfiguration;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateAuthorizerResponse(obj: ApiGatewayV2UpdateAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthorizerCredentialsArn': obj.authorizerCredentialsArn,
    'AuthorizerId': obj.authorizerId,
    'AuthorizerPayloadFormatVersion': obj.authorizerPayloadFormatVersion,
    'AuthorizerResultTtlInSeconds': obj.authorizerResultTtlInSeconds,
    'AuthorizerType': obj.authorizerType,
    'AuthorizerUri': obj.authorizerUri,
    'EnableSimpleResponses': obj.enableSimpleResponses,
    'IdentitySource': obj.identitySource?.map(y => y),
    'IdentityValidationExpression': obj.identityValidationExpression,
    'JwtConfiguration': toJson_ApiGatewayV2JwtConfiguration(obj.jwtConfiguration),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateDeploymentRequest
 */
export interface ApiGatewayV2UpdateDeploymentRequest {
  /**
   * @schema ApiGatewayV2UpdateDeploymentRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateDeploymentRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2UpdateDeploymentRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateDeploymentRequest(obj: ApiGatewayV2UpdateDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'DeploymentId': obj.deploymentId,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateDeploymentResponse
 */
export interface ApiGatewayV2UpdateDeploymentResponse {
  /**
   * @schema ApiGatewayV2UpdateDeploymentResponse#AutoDeployed
   */
  readonly autoDeployed?: boolean;

  /**
   * @schema ApiGatewayV2UpdateDeploymentResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2UpdateDeploymentResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2UpdateDeploymentResponse#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema ApiGatewayV2UpdateDeploymentResponse#DeploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema ApiGatewayV2UpdateDeploymentResponse#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateDeploymentResponse(obj: ApiGatewayV2UpdateDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoDeployed': obj.autoDeployed,
    'CreatedDate': obj.createdDate,
    'DeploymentId': obj.deploymentId,
    'DeploymentStatus': obj.deploymentStatus,
    'DeploymentStatusMessage': obj.deploymentStatusMessage,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateDomainNameRequest
 */
export interface ApiGatewayV2UpdateDomainNameRequest {
  /**
   * @schema ApiGatewayV2UpdateDomainNameRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayV2UpdateDomainNameRequest#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: ApiGatewayV2DomainNameConfiguration[];

  /**
   * @schema ApiGatewayV2UpdateDomainNameRequest#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: ApiGatewayV2MutualTlsAuthenticationInput;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateDomainNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateDomainNameRequest(obj: ApiGatewayV2UpdateDomainNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DomainNameConfigurations': obj.domainNameConfigurations?.map(y => toJson_ApiGatewayV2DomainNameConfiguration(y)),
    'MutualTlsAuthentication': toJson_ApiGatewayV2MutualTlsAuthenticationInput(obj.mutualTlsAuthentication),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateDomainNameResponse
 */
export interface ApiGatewayV2UpdateDomainNameResponse {
  /**
   * @schema ApiGatewayV2UpdateDomainNameResponse#ApiMappingSelectionExpression
   */
  readonly apiMappingSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateDomainNameResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayV2UpdateDomainNameResponse#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: ApiGatewayV2DomainNameConfiguration[];

  /**
   * @schema ApiGatewayV2UpdateDomainNameResponse#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: ApiGatewayV2MutualTlsAuthentication;

  /**
   * @schema ApiGatewayV2UpdateDomainNameResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateDomainNameResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateDomainNameResponse(obj: ApiGatewayV2UpdateDomainNameResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiMappingSelectionExpression': obj.apiMappingSelectionExpression,
    'DomainName': obj.domainName,
    'DomainNameConfigurations': obj.domainNameConfigurations?.map(y => toJson_ApiGatewayV2DomainNameConfiguration(y)),
    'MutualTlsAuthentication': toJson_ApiGatewayV2MutualTlsAuthentication(obj.mutualTlsAuthentication),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateIntegrationRequest
 */
export interface ApiGatewayV2UpdateIntegrationRequest {
  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#TlsConfig
   */
  readonly tlsConfig?: ApiGatewayV2TlsConfigInput;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateIntegrationRequest(obj: ApiGatewayV2UpdateIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ConnectionId': obj.connectionId,
    'ConnectionType': obj.connectionType,
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'CredentialsArn': obj.credentialsArn,
    'Description': obj.description,
    'IntegrationId': obj.integrationId,
    'IntegrationMethod': obj.integrationMethod,
    'IntegrationSubtype': obj.integrationSubtype,
    'IntegrationType': obj.integrationType,
    'IntegrationUri': obj.integrationUri,
    'PassthroughBehavior': obj.passthroughBehavior,
    'PayloadFormatVersion': obj.payloadFormatVersion,
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestTemplates': ((obj.requestTemplates) === undefined) ? undefined : (Object.entries(obj.requestTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
    'TimeoutInMillis': obj.timeoutInMillis,
    'TlsConfig': toJson_ApiGatewayV2TlsConfigInput(obj.tlsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateIntegrationResult
 */
export interface ApiGatewayV2UpdateIntegrationResult {
  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#IntegrationResponseSelectionExpression
   */
  readonly integrationResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResult#TlsConfig
   */
  readonly tlsConfig?: ApiGatewayV2TlsConfig;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateIntegrationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateIntegrationResult(obj: ApiGatewayV2UpdateIntegrationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ConnectionId': obj.connectionId,
    'ConnectionType': obj.connectionType,
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'CredentialsArn': obj.credentialsArn,
    'Description': obj.description,
    'IntegrationId': obj.integrationId,
    'IntegrationMethod': obj.integrationMethod,
    'IntegrationResponseSelectionExpression': obj.integrationResponseSelectionExpression,
    'IntegrationSubtype': obj.integrationSubtype,
    'IntegrationType': obj.integrationType,
    'IntegrationUri': obj.integrationUri,
    'PassthroughBehavior': obj.passthroughBehavior,
    'PayloadFormatVersion': obj.payloadFormatVersion,
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestTemplates': ((obj.requestTemplates) === undefined) ? undefined : (Object.entries(obj.requestTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
    'TimeoutInMillis': obj.timeoutInMillis,
    'TlsConfig': toJson_ApiGatewayV2TlsConfig(obj.tlsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateIntegrationResponseRequest
 */
export interface ApiGatewayV2UpdateIntegrationResponseRequest {
  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateIntegrationResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateIntegrationResponseRequest(obj: ApiGatewayV2UpdateIntegrationResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'IntegrationId': obj.integrationId,
    'IntegrationResponseId': obj.integrationResponseId,
    'IntegrationResponseKey': obj.integrationResponseKey,
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateIntegrationResponseResponse
 */
export interface ApiGatewayV2UpdateIntegrationResponseResponse {
  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseResponse#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseResponse#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseResponse#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseResponse#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseResponse#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateIntegrationResponseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateIntegrationResponseResponse(obj: ApiGatewayV2UpdateIntegrationResponseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'IntegrationResponseId': obj.integrationResponseId,
    'IntegrationResponseKey': obj.integrationResponseKey,
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateModelRequest
 */
export interface ApiGatewayV2UpdateModelRequest {
  /**
   * @schema ApiGatewayV2UpdateModelRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateModelRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ApiGatewayV2UpdateModelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2UpdateModelRequest#ModelId
   */
  readonly modelId?: string;

  /**
   * @schema ApiGatewayV2UpdateModelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2UpdateModelRequest#Schema
   */
  readonly schema?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateModelRequest(obj: ApiGatewayV2UpdateModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ContentType': obj.contentType,
    'Description': obj.description,
    'ModelId': obj.modelId,
    'Name': obj.name,
    'Schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateModelResponse
 */
export interface ApiGatewayV2UpdateModelResponse {
  /**
   * @schema ApiGatewayV2UpdateModelResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ApiGatewayV2UpdateModelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2UpdateModelResponse#ModelId
   */
  readonly modelId?: string;

  /**
   * @schema ApiGatewayV2UpdateModelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2UpdateModelResponse#Schema
   */
  readonly schema?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateModelResponse(obj: ApiGatewayV2UpdateModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Description': obj.description,
    'ModelId': obj.modelId,
    'Name': obj.name,
    'Schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateRouteRequest
 */
export interface ApiGatewayV2UpdateRouteRequest {
  /**
   * @schema ApiGatewayV2UpdateRouteRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteRequest#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateRouteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateRouteRequest(obj: ApiGatewayV2UpdateRouteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ApiKeyRequired': obj.apiKeyRequired,
    'AuthorizationScopes': obj.authorizationScopes?.map(y => y),
    'AuthorizationType': obj.authorizationType,
    'AuthorizerId': obj.authorizerId,
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'OperationName': obj.operationName,
    'RequestModels': ((obj.requestModels) === undefined) ? undefined : (Object.entries(obj.requestModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteId': obj.routeId,
    'RouteKey': obj.routeKey,
    'RouteResponseSelectionExpression': obj.routeResponseSelectionExpression,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateRouteResult
 */
export interface ApiGatewayV2UpdateRouteResult {
  /**
   * @schema ApiGatewayV2UpdateRouteResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2UpdateRouteResult#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema ApiGatewayV2UpdateRouteResult#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema ApiGatewayV2UpdateRouteResult#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResult#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResult#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResult#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResult#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateRouteResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2UpdateRouteResult#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResult#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResult#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResult#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateRouteResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateRouteResult(obj: ApiGatewayV2UpdateRouteResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiKeyRequired': obj.apiKeyRequired,
    'AuthorizationScopes': obj.authorizationScopes?.map(y => y),
    'AuthorizationType': obj.authorizationType,
    'AuthorizerId': obj.authorizerId,
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'OperationName': obj.operationName,
    'RequestModels': ((obj.requestModels) === undefined) ? undefined : (Object.entries(obj.requestModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteId': obj.routeId,
    'RouteKey': obj.routeKey,
    'RouteResponseSelectionExpression': obj.routeResponseSelectionExpression,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateRouteResponseRequest
 */
export interface ApiGatewayV2UpdateRouteResponseRequest {
  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#RouteResponseId
   */
  readonly routeResponseId?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateRouteResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateRouteResponseRequest(obj: ApiGatewayV2UpdateRouteResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'ResponseModels': ((obj.responseModels) === undefined) ? undefined : (Object.entries(obj.responseModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteId': obj.routeId,
    'RouteResponseId': obj.routeResponseId,
    'RouteResponseKey': obj.routeResponseKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateRouteResponseResponse
 */
export interface ApiGatewayV2UpdateRouteResponseResponse {
  /**
   * @schema ApiGatewayV2UpdateRouteResponseResponse#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResponseResponse#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateRouteResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2UpdateRouteResponseResponse#RouteResponseId
   */
  readonly routeResponseId?: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResponseResponse#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateRouteResponseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateRouteResponseResponse(obj: ApiGatewayV2UpdateRouteResponseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'ResponseModels': ((obj.responseModels) === undefined) ? undefined : (Object.entries(obj.responseModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteResponseId': obj.routeResponseId,
    'RouteResponseKey': obj.routeResponseKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateStageRequest
 */
export interface ApiGatewayV2UpdateStageRequest {
  /**
   * @schema ApiGatewayV2UpdateStageRequest#AccessLogSettings
   */
  readonly accessLogSettings?: ApiGatewayV2AccessLogSettings;

  /**
   * @schema ApiGatewayV2UpdateStageRequest#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2UpdateStageRequest#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema ApiGatewayV2UpdateStageRequest#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ApiGatewayV2UpdateStageRequest#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: ApiGatewayV2RouteSettings;

  /**
   * @schema ApiGatewayV2UpdateStageRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2UpdateStageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2UpdateStageRequest#RouteSettings
   */
  readonly routeSettings?: { [key: string]: ApiGatewayV2RouteSettings };

  /**
   * @schema ApiGatewayV2UpdateStageRequest#StageName
   */
  readonly stageName?: string;

  /**
   * @schema ApiGatewayV2UpdateStageRequest#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateStageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateStageRequest(obj: ApiGatewayV2UpdateStageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessLogSettings': toJson_ApiGatewayV2AccessLogSettings(obj.accessLogSettings),
    'ApiId': obj.apiId,
    'AutoDeploy': obj.autoDeploy,
    'ClientCertificateId': obj.clientCertificateId,
    'DefaultRouteSettings': toJson_ApiGatewayV2RouteSettings(obj.defaultRouteSettings),
    'DeploymentId': obj.deploymentId,
    'Description': obj.description,
    'RouteSettings': ((obj.routeSettings) === undefined) ? undefined : (Object.entries(obj.routeSettings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2RouteSettings(i[1]) }), {})),
    'StageName': obj.stageName,
    'StageVariables': ((obj.stageVariables) === undefined) ? undefined : (Object.entries(obj.stageVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateStageResponse
 */
export interface ApiGatewayV2UpdateStageResponse {
  /**
   * @schema ApiGatewayV2UpdateStageResponse#AccessLogSettings
   */
  readonly accessLogSettings?: ApiGatewayV2AccessLogSettings;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: ApiGatewayV2RouteSettings;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#RouteSettings
   */
  readonly routeSettings?: { [key: string]: ApiGatewayV2RouteSettings };

  /**
   * @schema ApiGatewayV2UpdateStageResponse#StageName
   */
  readonly stageName?: string;

  /**
   * @schema ApiGatewayV2UpdateStageResponse#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateStageResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateStageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateStageResponse(obj: ApiGatewayV2UpdateStageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessLogSettings': toJson_ApiGatewayV2AccessLogSettings(obj.accessLogSettings),
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'AutoDeploy': obj.autoDeploy,
    'ClientCertificateId': obj.clientCertificateId,
    'CreatedDate': obj.createdDate,
    'DefaultRouteSettings': toJson_ApiGatewayV2RouteSettings(obj.defaultRouteSettings),
    'DeploymentId': obj.deploymentId,
    'Description': obj.description,
    'LastDeploymentStatusMessage': obj.lastDeploymentStatusMessage,
    'LastUpdatedDate': obj.lastUpdatedDate,
    'RouteSettings': ((obj.routeSettings) === undefined) ? undefined : (Object.entries(obj.routeSettings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2RouteSettings(i[1]) }), {})),
    'StageName': obj.stageName,
    'StageVariables': ((obj.stageVariables) === undefined) ? undefined : (Object.entries(obj.stageVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateVpcLinkRequest
 */
export interface ApiGatewayV2UpdateVpcLinkRequest {
  /**
   * @schema ApiGatewayV2UpdateVpcLinkRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2UpdateVpcLinkRequest#VpcLinkId
   */
  readonly vpcLinkId?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateVpcLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateVpcLinkRequest(obj: ApiGatewayV2UpdateVpcLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'VpcLinkId': obj.vpcLinkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2UpdateVpcLinkResponse
 */
export interface ApiGatewayV2UpdateVpcLinkResponse {
  /**
   * @schema ApiGatewayV2UpdateVpcLinkResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2UpdateVpcLinkResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2UpdateVpcLinkResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ApiGatewayV2UpdateVpcLinkResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema ApiGatewayV2UpdateVpcLinkResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2UpdateVpcLinkResponse#VpcLinkId
   */
  readonly vpcLinkId?: string;

  /**
   * @schema ApiGatewayV2UpdateVpcLinkResponse#VpcLinkStatus
   */
  readonly vpcLinkStatus?: string;

  /**
   * @schema ApiGatewayV2UpdateVpcLinkResponse#VpcLinkStatusMessage
   */
  readonly vpcLinkStatusMessage?: string;

  /**
   * @schema ApiGatewayV2UpdateVpcLinkResponse#VpcLinkVersion
   */
  readonly vpcLinkVersion?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2UpdateVpcLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2UpdateVpcLinkResponse(obj: ApiGatewayV2UpdateVpcLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedDate': obj.createdDate,
    'Name': obj.name,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VpcLinkId': obj.vpcLinkId,
    'VpcLinkStatus': obj.vpcLinkStatus,
    'VpcLinkStatusMessage': obj.vpcLinkStatusMessage,
    'VpcLinkVersion': obj.vpcLinkVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2Cors
 */
export interface ApiGatewayV2Cors {
  /**
   * @schema ApiGatewayV2Cors#AllowCredentials
   */
  readonly allowCredentials?: boolean;

  /**
   * @schema ApiGatewayV2Cors#AllowHeaders
   */
  readonly allowHeaders?: string[];

  /**
   * @schema ApiGatewayV2Cors#AllowMethods
   */
  readonly allowMethods?: string[];

  /**
   * @schema ApiGatewayV2Cors#AllowOrigins
   */
  readonly allowOrigins?: string[];

  /**
   * @schema ApiGatewayV2Cors#ExposeHeaders
   */
  readonly exposeHeaders?: string[];

  /**
   * @schema ApiGatewayV2Cors#MaxAge
   */
  readonly maxAge?: number;

}

/**
 * Converts an object of type 'ApiGatewayV2Cors' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2Cors(obj: ApiGatewayV2Cors | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowCredentials': obj.allowCredentials,
    'AllowHeaders': obj.allowHeaders?.map(y => y),
    'AllowMethods': obj.allowMethods?.map(y => y),
    'AllowOrigins': obj.allowOrigins?.map(y => y),
    'ExposeHeaders': obj.exposeHeaders?.map(y => y),
    'MaxAge': obj.maxAge,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2JwtConfiguration
 */
export interface ApiGatewayV2JwtConfiguration {
  /**
   * @schema ApiGatewayV2JwtConfiguration#Audience
   */
  readonly audience?: string[];

  /**
   * @schema ApiGatewayV2JwtConfiguration#Issuer
   */
  readonly issuer?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2JwtConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2JwtConfiguration(obj: ApiGatewayV2JwtConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Audience': obj.audience?.map(y => y),
    'Issuer': obj.issuer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DomainNameConfiguration
 */
export interface ApiGatewayV2DomainNameConfiguration {
  /**
   * @schema ApiGatewayV2DomainNameConfiguration#ApiGatewayDomainName
   */
  readonly apiGatewayDomainName?: string;

  /**
   * @schema ApiGatewayV2DomainNameConfiguration#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema ApiGatewayV2DomainNameConfiguration#CertificateName
   */
  readonly certificateName?: string;

  /**
   * @schema ApiGatewayV2DomainNameConfiguration#CertificateUploadDate
   */
  readonly certificateUploadDate?: string;

  /**
   * @schema ApiGatewayV2DomainNameConfiguration#DomainNameStatus
   */
  readonly domainNameStatus?: string;

  /**
   * @schema ApiGatewayV2DomainNameConfiguration#DomainNameStatusMessage
   */
  readonly domainNameStatusMessage?: string;

  /**
   * @schema ApiGatewayV2DomainNameConfiguration#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema ApiGatewayV2DomainNameConfiguration#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema ApiGatewayV2DomainNameConfiguration#SecurityPolicy
   */
  readonly securityPolicy?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2DomainNameConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DomainNameConfiguration(obj: ApiGatewayV2DomainNameConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiGatewayDomainName': obj.apiGatewayDomainName,
    'CertificateArn': obj.certificateArn,
    'CertificateName': obj.certificateName,
    'CertificateUploadDate': obj.certificateUploadDate,
    'DomainNameStatus': obj.domainNameStatus,
    'DomainNameStatusMessage': obj.domainNameStatusMessage,
    'EndpointType': obj.endpointType,
    'HostedZoneId': obj.hostedZoneId,
    'SecurityPolicy': obj.securityPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2MutualTlsAuthenticationInput
 */
export interface ApiGatewayV2MutualTlsAuthenticationInput {
  /**
   * @schema ApiGatewayV2MutualTlsAuthenticationInput#TruststoreUri
   */
  readonly truststoreUri?: string;

  /**
   * @schema ApiGatewayV2MutualTlsAuthenticationInput#TruststoreVersion
   */
  readonly truststoreVersion?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2MutualTlsAuthenticationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2MutualTlsAuthenticationInput(obj: ApiGatewayV2MutualTlsAuthenticationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TruststoreUri': obj.truststoreUri,
    'TruststoreVersion': obj.truststoreVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2MutualTlsAuthentication
 */
export interface ApiGatewayV2MutualTlsAuthentication {
  /**
   * @schema ApiGatewayV2MutualTlsAuthentication#TruststoreUri
   */
  readonly truststoreUri?: string;

  /**
   * @schema ApiGatewayV2MutualTlsAuthentication#TruststoreVersion
   */
  readonly truststoreVersion?: string;

  /**
   * @schema ApiGatewayV2MutualTlsAuthentication#TruststoreWarnings
   */
  readonly truststoreWarnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayV2MutualTlsAuthentication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2MutualTlsAuthentication(obj: ApiGatewayV2MutualTlsAuthentication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TruststoreUri': obj.truststoreUri,
    'TruststoreVersion': obj.truststoreVersion,
    'TruststoreWarnings': obj.truststoreWarnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2TlsConfigInput
 */
export interface ApiGatewayV2TlsConfigInput {
  /**
   * @schema ApiGatewayV2TlsConfigInput#ServerNameToVerify
   */
  readonly serverNameToVerify?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2TlsConfigInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2TlsConfigInput(obj: ApiGatewayV2TlsConfigInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerNameToVerify': obj.serverNameToVerify,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2TlsConfig
 */
export interface ApiGatewayV2TlsConfig {
  /**
   * @schema ApiGatewayV2TlsConfig#ServerNameToVerify
   */
  readonly serverNameToVerify?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2TlsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2TlsConfig(obj: ApiGatewayV2TlsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerNameToVerify': obj.serverNameToVerify,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2ParameterConstraints
 */
export interface ApiGatewayV2ParameterConstraints {
  /**
   * @schema ApiGatewayV2ParameterConstraints#Required
   */
  readonly required?: boolean;

}

/**
 * Converts an object of type 'ApiGatewayV2ParameterConstraints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2ParameterConstraints(obj: ApiGatewayV2ParameterConstraints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Required': obj.required,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2AccessLogSettings
 */
export interface ApiGatewayV2AccessLogSettings {
  /**
   * @schema ApiGatewayV2AccessLogSettings#DestinationArn
   */
  readonly destinationArn?: string;

  /**
   * @schema ApiGatewayV2AccessLogSettings#Format
   */
  readonly format?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2AccessLogSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2AccessLogSettings(obj: ApiGatewayV2AccessLogSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationArn': obj.destinationArn,
    'Format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2RouteSettings
 */
export interface ApiGatewayV2RouteSettings {
  /**
   * @schema ApiGatewayV2RouteSettings#DataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema ApiGatewayV2RouteSettings#DetailedMetricsEnabled
   */
  readonly detailedMetricsEnabled?: boolean;

  /**
   * @schema ApiGatewayV2RouteSettings#LoggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema ApiGatewayV2RouteSettings#ThrottlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema ApiGatewayV2RouteSettings#ThrottlingRateLimit
   */
  readonly throttlingRateLimit?: number;

}

/**
 * Converts an object of type 'ApiGatewayV2RouteSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2RouteSettings(obj: ApiGatewayV2RouteSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataTraceEnabled': obj.dataTraceEnabled,
    'DetailedMetricsEnabled': obj.detailedMetricsEnabled,
    'LoggingLevel': obj.loggingLevel,
    'ThrottlingBurstLimit': obj.throttlingBurstLimit,
    'ThrottlingRateLimit': obj.throttlingRateLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2ApiMapping
 */
export interface ApiGatewayV2ApiMapping {
  /**
   * @schema ApiGatewayV2ApiMapping#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2ApiMapping#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema ApiGatewayV2ApiMapping#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema ApiGatewayV2ApiMapping#Stage
   */
  readonly stage?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2ApiMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2ApiMapping(obj: ApiGatewayV2ApiMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiId': obj.apiId,
    'ApiMappingId': obj.apiMappingId,
    'ApiMappingKey': obj.apiMappingKey,
    'Stage': obj.stage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2Api
 */
export interface ApiGatewayV2Api {
  /**
   * @schema ApiGatewayV2Api#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema ApiGatewayV2Api#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2Api#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiGatewayV2Api#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ApiGatewayV2Api#CorsConfiguration
   */
  readonly corsConfiguration?: ApiGatewayV2Cors;

  /**
   * @schema ApiGatewayV2Api#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2Api#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2Api#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ApiGatewayV2Api#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ApiGatewayV2Api#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema ApiGatewayV2Api#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2Api#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema ApiGatewayV2Api#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2Api#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2Api#Version
   */
  readonly version?: string;

  /**
   * @schema ApiGatewayV2Api#Warnings
   */
  readonly warnings?: string[];

}

/**
 * Converts an object of type 'ApiGatewayV2Api' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2Api(obj: ApiGatewayV2Api | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiEndpoint': obj.apiEndpoint,
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiId': obj.apiId,
    'ApiKeySelectionExpression': obj.apiKeySelectionExpression,
    'CorsConfiguration': toJson_ApiGatewayV2Cors(obj.corsConfiguration),
    'CreatedDate': obj.createdDate,
    'Description': obj.description,
    'DisableSchemaValidation': obj.disableSchemaValidation,
    'DisableExecuteApiEndpoint': obj.disableExecuteApiEndpoint,
    'ImportInfo': obj.importInfo?.map(y => y),
    'Name': obj.name,
    'ProtocolType': obj.protocolType,
    'RouteSelectionExpression': obj.routeSelectionExpression,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Version': obj.version,
    'Warnings': obj.warnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2Authorizer
 */
export interface ApiGatewayV2Authorizer {
  /**
   * @schema ApiGatewayV2Authorizer#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema ApiGatewayV2Authorizer#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2Authorizer#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2Authorizer#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema ApiGatewayV2Authorizer#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema ApiGatewayV2Authorizer#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema ApiGatewayV2Authorizer#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema ApiGatewayV2Authorizer#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema ApiGatewayV2Authorizer#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema ApiGatewayV2Authorizer#JwtConfiguration
   */
  readonly jwtConfiguration?: ApiGatewayV2JwtConfiguration;

  /**
   * @schema ApiGatewayV2Authorizer#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2Authorizer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2Authorizer(obj: ApiGatewayV2Authorizer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthorizerCredentialsArn': obj.authorizerCredentialsArn,
    'AuthorizerId': obj.authorizerId,
    'AuthorizerPayloadFormatVersion': obj.authorizerPayloadFormatVersion,
    'AuthorizerResultTtlInSeconds': obj.authorizerResultTtlInSeconds,
    'AuthorizerType': obj.authorizerType,
    'AuthorizerUri': obj.authorizerUri,
    'EnableSimpleResponses': obj.enableSimpleResponses,
    'IdentitySource': obj.identitySource?.map(y => y),
    'IdentityValidationExpression': obj.identityValidationExpression,
    'JwtConfiguration': toJson_ApiGatewayV2JwtConfiguration(obj.jwtConfiguration),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2Deployment
 */
export interface ApiGatewayV2Deployment {
  /**
   * @schema ApiGatewayV2Deployment#AutoDeployed
   */
  readonly autoDeployed?: boolean;

  /**
   * @schema ApiGatewayV2Deployment#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2Deployment#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2Deployment#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema ApiGatewayV2Deployment#DeploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema ApiGatewayV2Deployment#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2Deployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2Deployment(obj: ApiGatewayV2Deployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoDeployed': obj.autoDeployed,
    'CreatedDate': obj.createdDate,
    'DeploymentId': obj.deploymentId,
    'DeploymentStatus': obj.deploymentStatus,
    'DeploymentStatusMessage': obj.deploymentStatusMessage,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2DomainName
 */
export interface ApiGatewayV2DomainName {
  /**
   * @schema ApiGatewayV2DomainName#ApiMappingSelectionExpression
   */
  readonly apiMappingSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2DomainName#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema ApiGatewayV2DomainName#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: ApiGatewayV2DomainNameConfiguration[];

  /**
   * @schema ApiGatewayV2DomainName#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: ApiGatewayV2MutualTlsAuthentication;

  /**
   * @schema ApiGatewayV2DomainName#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2DomainName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2DomainName(obj: ApiGatewayV2DomainName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiMappingSelectionExpression': obj.apiMappingSelectionExpression,
    'DomainName': obj.domainName,
    'DomainNameConfigurations': obj.domainNameConfigurations?.map(y => toJson_ApiGatewayV2DomainNameConfiguration(y)),
    'MutualTlsAuthentication': toJson_ApiGatewayV2MutualTlsAuthentication(obj.mutualTlsAuthentication),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2IntegrationResponse
 */
export interface ApiGatewayV2IntegrationResponse {
  /**
   * @schema ApiGatewayV2IntegrationResponse#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2IntegrationResponse#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

  /**
   * @schema ApiGatewayV2IntegrationResponse#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema ApiGatewayV2IntegrationResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2IntegrationResponse#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2IntegrationResponse#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2IntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2IntegrationResponse(obj: ApiGatewayV2IntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'IntegrationResponseId': obj.integrationResponseId,
    'IntegrationResponseKey': obj.integrationResponseKey,
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseTemplates': ((obj.responseTemplates) === undefined) ? undefined : (Object.entries(obj.responseTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2Integration
 */
export interface ApiGatewayV2Integration {
  /**
   * @schema ApiGatewayV2Integration#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2Integration#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema ApiGatewayV2Integration#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema ApiGatewayV2Integration#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2Integration#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema ApiGatewayV2Integration#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2Integration#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema ApiGatewayV2Integration#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema ApiGatewayV2Integration#IntegrationResponseSelectionExpression
   */
  readonly integrationResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2Integration#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema ApiGatewayV2Integration#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema ApiGatewayV2Integration#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema ApiGatewayV2Integration#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema ApiGatewayV2Integration#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema ApiGatewayV2Integration#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2Integration#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2Integration#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: { [key: string]: string } };

  /**
   * @schema ApiGatewayV2Integration#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2Integration#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema ApiGatewayV2Integration#TlsConfig
   */
  readonly tlsConfig?: ApiGatewayV2TlsConfig;

}

/**
 * Converts an object of type 'ApiGatewayV2Integration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2Integration(obj: ApiGatewayV2Integration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ConnectionId': obj.connectionId,
    'ConnectionType': obj.connectionType,
    'ContentHandlingStrategy': obj.contentHandlingStrategy,
    'CredentialsArn': obj.credentialsArn,
    'Description': obj.description,
    'IntegrationId': obj.integrationId,
    'IntegrationMethod': obj.integrationMethod,
    'IntegrationResponseSelectionExpression': obj.integrationResponseSelectionExpression,
    'IntegrationSubtype': obj.integrationSubtype,
    'IntegrationType': obj.integrationType,
    'IntegrationUri': obj.integrationUri,
    'PassthroughBehavior': obj.passthroughBehavior,
    'PayloadFormatVersion': obj.payloadFormatVersion,
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestTemplates': ((obj.requestTemplates) === undefined) ? undefined : (Object.entries(obj.requestTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: ((i[1]) === undefined) ? undefined : (Object.entries(i[1]).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})) }), {})),
    'TemplateSelectionExpression': obj.templateSelectionExpression,
    'TimeoutInMillis': obj.timeoutInMillis,
    'TlsConfig': toJson_ApiGatewayV2TlsConfig(obj.tlsConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2Model
 */
export interface ApiGatewayV2Model {
  /**
   * @schema ApiGatewayV2Model#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ApiGatewayV2Model#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2Model#ModelId
   */
  readonly modelId?: string;

  /**
   * @schema ApiGatewayV2Model#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2Model#Schema
   */
  readonly schema?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2Model' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2Model(obj: ApiGatewayV2Model | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Description': obj.description,
    'ModelId': obj.modelId,
    'Name': obj.name,
    'Schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2RouteResponse
 */
export interface ApiGatewayV2RouteResponse {
  /**
   * @schema ApiGatewayV2RouteResponse#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2RouteResponse#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2RouteResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2RouteResponse#RouteResponseId
   */
  readonly routeResponseId?: string;

  /**
   * @schema ApiGatewayV2RouteResponse#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2RouteResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2RouteResponse(obj: ApiGatewayV2RouteResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'ResponseModels': ((obj.responseModels) === undefined) ? undefined : (Object.entries(obj.responseModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ResponseParameters': ((obj.responseParameters) === undefined) ? undefined : (Object.entries(obj.responseParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteResponseId': obj.routeResponseId,
    'RouteResponseKey': obj.routeResponseKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2Route
 */
export interface ApiGatewayV2Route {
  /**
   * @schema ApiGatewayV2Route#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2Route#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema ApiGatewayV2Route#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema ApiGatewayV2Route#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema ApiGatewayV2Route#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema ApiGatewayV2Route#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2Route#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema ApiGatewayV2Route#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2Route#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ApiGatewayV2ParameterConstraints };

  /**
   * @schema ApiGatewayV2Route#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema ApiGatewayV2Route#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema ApiGatewayV2Route#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema ApiGatewayV2Route#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2Route' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2Route(obj: ApiGatewayV2Route | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'ApiKeyRequired': obj.apiKeyRequired,
    'AuthorizationScopes': obj.authorizationScopes?.map(y => y),
    'AuthorizationType': obj.authorizationType,
    'AuthorizerId': obj.authorizerId,
    'ModelSelectionExpression': obj.modelSelectionExpression,
    'OperationName': obj.operationName,
    'RequestModels': ((obj.requestModels) === undefined) ? undefined : (Object.entries(obj.requestModels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RequestParameters': ((obj.requestParameters) === undefined) ? undefined : (Object.entries(obj.requestParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2ParameterConstraints(i[1]) }), {})),
    'RouteId': obj.routeId,
    'RouteKey': obj.routeKey,
    'RouteResponseSelectionExpression': obj.routeResponseSelectionExpression,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2Stage
 */
export interface ApiGatewayV2Stage {
  /**
   * @schema ApiGatewayV2Stage#AccessLogSettings
   */
  readonly accessLogSettings?: ApiGatewayV2AccessLogSettings;

  /**
   * @schema ApiGatewayV2Stage#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ApiGatewayV2Stage#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema ApiGatewayV2Stage#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ApiGatewayV2Stage#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2Stage#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: ApiGatewayV2RouteSettings;

  /**
   * @schema ApiGatewayV2Stage#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema ApiGatewayV2Stage#Description
   */
  readonly description?: string;

  /**
   * @schema ApiGatewayV2Stage#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema ApiGatewayV2Stage#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema ApiGatewayV2Stage#RouteSettings
   */
  readonly routeSettings?: { [key: string]: ApiGatewayV2RouteSettings };

  /**
   * @schema ApiGatewayV2Stage#StageName
   */
  readonly stageName?: string;

  /**
   * @schema ApiGatewayV2Stage#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2Stage#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ApiGatewayV2Stage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2Stage(obj: ApiGatewayV2Stage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessLogSettings': toJson_ApiGatewayV2AccessLogSettings(obj.accessLogSettings),
    'ApiGatewayManaged': obj.apiGatewayManaged,
    'AutoDeploy': obj.autoDeploy,
    'ClientCertificateId': obj.clientCertificateId,
    'CreatedDate': obj.createdDate,
    'DefaultRouteSettings': toJson_ApiGatewayV2RouteSettings(obj.defaultRouteSettings),
    'DeploymentId': obj.deploymentId,
    'Description': obj.description,
    'LastDeploymentStatusMessage': obj.lastDeploymentStatusMessage,
    'LastUpdatedDate': obj.lastUpdatedDate,
    'RouteSettings': ((obj.routeSettings) === undefined) ? undefined : (Object.entries(obj.routeSettings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ApiGatewayV2RouteSettings(i[1]) }), {})),
    'StageName': obj.stageName,
    'StageVariables': ((obj.stageVariables) === undefined) ? undefined : (Object.entries(obj.stageVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiGatewayV2VpcLink
 */
export interface ApiGatewayV2VpcLink {
  /**
   * @schema ApiGatewayV2VpcLink#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiGatewayV2VpcLink#Name
   */
  readonly name?: string;

  /**
   * @schema ApiGatewayV2VpcLink#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ApiGatewayV2VpcLink#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema ApiGatewayV2VpcLink#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2VpcLink#VpcLinkId
   */
  readonly vpcLinkId?: string;

  /**
   * @schema ApiGatewayV2VpcLink#VpcLinkStatus
   */
  readonly vpcLinkStatus?: string;

  /**
   * @schema ApiGatewayV2VpcLink#VpcLinkStatusMessage
   */
  readonly vpcLinkStatusMessage?: string;

  /**
   * @schema ApiGatewayV2VpcLink#VpcLinkVersion
   */
  readonly vpcLinkVersion?: string;

}

/**
 * Converts an object of type 'ApiGatewayV2VpcLink' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiGatewayV2VpcLink(obj: ApiGatewayV2VpcLink | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedDate': obj.createdDate,
    'Name': obj.name,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VpcLinkId': obj.vpcLinkId,
    'VpcLinkStatus': obj.vpcLinkStatus,
    'VpcLinkStatusMessage': obj.vpcLinkStatusMessage,
    'VpcLinkVersion': obj.vpcLinkVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
