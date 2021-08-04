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
  readonly name: string;

  /**
   * @schema ApiGatewayV2CreateApiRequest#ProtocolType
   */
  readonly protocolType: string;

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
 * @schema ApiGatewayV2CreateApiMappingRequest
 */
export interface ApiGatewayV2CreateApiMappingRequest {
  /**
   * @schema ApiGatewayV2CreateApiMappingRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2CreateApiMappingRequest#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema ApiGatewayV2CreateApiMappingRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema ApiGatewayV2CreateApiMappingRequest#Stage
   */
  readonly stage: string;

}

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
 * @schema ApiGatewayV2CreateAuthorizerRequest
 */
export interface ApiGatewayV2CreateAuthorizerRequest {
  /**
   * @schema ApiGatewayV2CreateAuthorizerRequest#ApiId
   */
  readonly apiId: string;

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
  readonly authorizerType: string;

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
  readonly identitySource: string[];

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
  readonly name: string;

}

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
 * @schema ApiGatewayV2CreateDeploymentRequest
 */
export interface ApiGatewayV2CreateDeploymentRequest {
  /**
   * @schema ApiGatewayV2CreateDeploymentRequest#ApiId
   */
  readonly apiId: string;

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
 * @schema ApiGatewayV2CreateDomainNameRequest
 */
export interface ApiGatewayV2CreateDomainNameRequest {
  /**
   * @schema ApiGatewayV2CreateDomainNameRequest#DomainName
   */
  readonly domainName: string;

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
 * @schema ApiGatewayV2CreateIntegrationRequest
 */
export interface ApiGatewayV2CreateIntegrationRequest {
  /**
   * @schema ApiGatewayV2CreateIntegrationRequest#ApiId
   */
  readonly apiId: string;

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
  readonly integrationType: string;

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
 * @schema ApiGatewayV2CreateIntegrationResponseRequest
 */
export interface ApiGatewayV2CreateIntegrationResponseRequest {
  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema ApiGatewayV2CreateIntegrationResponseRequest#IntegrationResponseKey
   */
  readonly integrationResponseKey: string;

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
 * @schema ApiGatewayV2CreateModelRequest
 */
export interface ApiGatewayV2CreateModelRequest {
  /**
   * @schema ApiGatewayV2CreateModelRequest#ApiId
   */
  readonly apiId: string;

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
  readonly name: string;

  /**
   * @schema ApiGatewayV2CreateModelRequest#Schema
   */
  readonly schema: string;

}

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
 * @schema ApiGatewayV2CreateRouteRequest
 */
export interface ApiGatewayV2CreateRouteRequest {
  /**
   * @schema ApiGatewayV2CreateRouteRequest#ApiId
   */
  readonly apiId: string;

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
  readonly routeKey: string;

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
 * @schema ApiGatewayV2CreateRouteResponseRequest
 */
export interface ApiGatewayV2CreateRouteResponseRequest {
  /**
   * @schema ApiGatewayV2CreateRouteResponseRequest#ApiId
   */
  readonly apiId: string;

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
  readonly routeId: string;

  /**
   * @schema ApiGatewayV2CreateRouteResponseRequest#RouteResponseKey
   */
  readonly routeResponseKey: string;

}

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
  readonly apiId: string;

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
  readonly stageName: string;

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
 * @schema ApiGatewayV2CreateVpcLinkRequest
 */
export interface ApiGatewayV2CreateVpcLinkRequest {
  /**
   * @schema ApiGatewayV2CreateVpcLinkRequest#Name
   */
  readonly name: string;

  /**
   * @schema ApiGatewayV2CreateVpcLinkRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ApiGatewayV2CreateVpcLinkRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema ApiGatewayV2CreateVpcLinkRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

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
 * @schema ApiGatewayV2DeleteAccessLogSettingsRequest
 */
export interface ApiGatewayV2DeleteAccessLogSettingsRequest {
  /**
   * @schema ApiGatewayV2DeleteAccessLogSettingsRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteAccessLogSettingsRequest#StageName
   */
  readonly stageName: string;

}

/**
 * @schema ApiGatewayV2DeleteApiRequest
 */
export interface ApiGatewayV2DeleteApiRequest {
  /**
   * @schema ApiGatewayV2DeleteApiRequest#ApiId
   */
  readonly apiId: string;

}

/**
 * @schema ApiGatewayV2DeleteApiMappingRequest
 */
export interface ApiGatewayV2DeleteApiMappingRequest {
  /**
   * @schema ApiGatewayV2DeleteApiMappingRequest#ApiMappingId
   */
  readonly apiMappingId: string;

  /**
   * @schema ApiGatewayV2DeleteApiMappingRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema ApiGatewayV2DeleteAuthorizerRequest
 */
export interface ApiGatewayV2DeleteAuthorizerRequest {
  /**
   * @schema ApiGatewayV2DeleteAuthorizerRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteAuthorizerRequest#AuthorizerId
   */
  readonly authorizerId: string;

}

/**
 * @schema ApiGatewayV2DeleteCorsConfigurationRequest
 */
export interface ApiGatewayV2DeleteCorsConfigurationRequest {
  /**
   * @schema ApiGatewayV2DeleteCorsConfigurationRequest#ApiId
   */
  readonly apiId: string;

}

/**
 * @schema ApiGatewayV2DeleteDeploymentRequest
 */
export interface ApiGatewayV2DeleteDeploymentRequest {
  /**
   * @schema ApiGatewayV2DeleteDeploymentRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteDeploymentRequest#DeploymentId
   */
  readonly deploymentId: string;

}

/**
 * @schema ApiGatewayV2DeleteDomainNameRequest
 */
export interface ApiGatewayV2DeleteDomainNameRequest {
  /**
   * @schema ApiGatewayV2DeleteDomainNameRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema ApiGatewayV2DeleteIntegrationRequest
 */
export interface ApiGatewayV2DeleteIntegrationRequest {
  /**
   * @schema ApiGatewayV2DeleteIntegrationRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteIntegrationRequest#IntegrationId
   */
  readonly integrationId: string;

}

/**
 * @schema ApiGatewayV2DeleteIntegrationResponseRequest
 */
export interface ApiGatewayV2DeleteIntegrationResponseRequest {
  /**
   * @schema ApiGatewayV2DeleteIntegrationResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema ApiGatewayV2DeleteIntegrationResponseRequest#IntegrationResponseId
   */
  readonly integrationResponseId: string;

}

/**
 * @schema ApiGatewayV2DeleteModelRequest
 */
export interface ApiGatewayV2DeleteModelRequest {
  /**
   * @schema ApiGatewayV2DeleteModelRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteModelRequest#ModelId
   */
  readonly modelId: string;

}

/**
 * @schema ApiGatewayV2DeleteRouteRequest
 */
export interface ApiGatewayV2DeleteRouteRequest {
  /**
   * @schema ApiGatewayV2DeleteRouteRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteRouteRequest#RouteId
   */
  readonly routeId: string;

}

/**
 * @schema ApiGatewayV2DeleteRouteRequestParameterRequest
 */
export interface ApiGatewayV2DeleteRouteRequestParameterRequest {
  /**
   * @schema ApiGatewayV2DeleteRouteRequestParameterRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteRouteRequestParameterRequest#RequestParameterKey
   */
  readonly requestParameterKey: string;

  /**
   * @schema ApiGatewayV2DeleteRouteRequestParameterRequest#RouteId
   */
  readonly routeId: string;

}

/**
 * @schema ApiGatewayV2DeleteRouteResponseRequest
 */
export interface ApiGatewayV2DeleteRouteResponseRequest {
  /**
   * @schema ApiGatewayV2DeleteRouteResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteRouteResponseRequest#RouteId
   */
  readonly routeId: string;

  /**
   * @schema ApiGatewayV2DeleteRouteResponseRequest#RouteResponseId
   */
  readonly routeResponseId: string;

}

/**
 * @schema ApiGatewayV2DeleteRouteSettingsRequest
 */
export interface ApiGatewayV2DeleteRouteSettingsRequest {
  /**
   * @schema ApiGatewayV2DeleteRouteSettingsRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteRouteSettingsRequest#RouteKey
   */
  readonly routeKey: string;

  /**
   * @schema ApiGatewayV2DeleteRouteSettingsRequest#StageName
   */
  readonly stageName: string;

}

/**
 * @schema ApiGatewayV2DeleteStageRequest
 */
export interface ApiGatewayV2DeleteStageRequest {
  /**
   * @schema ApiGatewayV2DeleteStageRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2DeleteStageRequest#StageName
   */
  readonly stageName: string;

}

/**
 * @schema ApiGatewayV2DeleteVpcLinkRequest
 */
export interface ApiGatewayV2DeleteVpcLinkRequest {
  /**
   * @schema ApiGatewayV2DeleteVpcLinkRequest#VpcLinkId
   */
  readonly vpcLinkId: string;

}

/**
 * @schema ApiGatewayV2DeleteVpcLinkResponse
 */
export interface ApiGatewayV2DeleteVpcLinkResponse {
}

/**
 * @schema ApiGatewayV2ExportApiRequest
 */
export interface ApiGatewayV2ExportApiRequest {
  /**
   * @schema ApiGatewayV2ExportApiRequest#ApiId
   */
  readonly apiId: string;

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
  readonly outputType: string;

  /**
   * @schema ApiGatewayV2ExportApiRequest#Specification
   */
  readonly specification: string;

  /**
   * @schema ApiGatewayV2ExportApiRequest#StageName
   */
  readonly stageName?: string;

}

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
 * @schema ApiGatewayV2ResetAuthorizersCacheRequest
 */
export interface ApiGatewayV2ResetAuthorizersCacheRequest {
  /**
   * @schema ApiGatewayV2ResetAuthorizersCacheRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2ResetAuthorizersCacheRequest#StageName
   */
  readonly stageName: string;

}

/**
 * @schema ApiGatewayV2GetApiRequest
 */
export interface ApiGatewayV2GetApiRequest {
  /**
   * @schema ApiGatewayV2GetApiRequest#ApiId
   */
  readonly apiId: string;

}

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
 * @schema ApiGatewayV2GetApiMappingRequest
 */
export interface ApiGatewayV2GetApiMappingRequest {
  /**
   * @schema ApiGatewayV2GetApiMappingRequest#ApiMappingId
   */
  readonly apiMappingId: string;

  /**
   * @schema ApiGatewayV2GetApiMappingRequest#DomainName
   */
  readonly domainName: string;

}

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
 * @schema ApiGatewayV2GetApiMappingsRequest
 */
export interface ApiGatewayV2GetApiMappingsRequest {
  /**
   * @schema ApiGatewayV2GetApiMappingsRequest#DomainName
   */
  readonly domainName: string;

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
 * @schema ApiGatewayV2GetAuthorizerRequest
 */
export interface ApiGatewayV2GetAuthorizerRequest {
  /**
   * @schema ApiGatewayV2GetAuthorizerRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetAuthorizerRequest#AuthorizerId
   */
  readonly authorizerId: string;

}

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
 * @schema ApiGatewayV2GetAuthorizersRequest
 */
export interface ApiGatewayV2GetAuthorizersRequest {
  /**
   * @schema ApiGatewayV2GetAuthorizersRequest#ApiId
   */
  readonly apiId: string;

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
 * @schema ApiGatewayV2GetDeploymentRequest
 */
export interface ApiGatewayV2GetDeploymentRequest {
  /**
   * @schema ApiGatewayV2GetDeploymentRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetDeploymentRequest#DeploymentId
   */
  readonly deploymentId: string;

}

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
 * @schema ApiGatewayV2GetDeploymentsRequest
 */
export interface ApiGatewayV2GetDeploymentsRequest {
  /**
   * @schema ApiGatewayV2GetDeploymentsRequest#ApiId
   */
  readonly apiId: string;

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
 * @schema ApiGatewayV2GetDomainNameRequest
 */
export interface ApiGatewayV2GetDomainNameRequest {
  /**
   * @schema ApiGatewayV2GetDomainNameRequest#DomainName
   */
  readonly domainName: string;

}

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
 * @schema ApiGatewayV2GetIntegrationRequest
 */
export interface ApiGatewayV2GetIntegrationRequest {
  /**
   * @schema ApiGatewayV2GetIntegrationRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetIntegrationRequest#IntegrationId
   */
  readonly integrationId: string;

}

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
 * @schema ApiGatewayV2GetIntegrationResponseRequest
 */
export interface ApiGatewayV2GetIntegrationResponseRequest {
  /**
   * @schema ApiGatewayV2GetIntegrationResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponseRequest#IntegrationResponseId
   */
  readonly integrationResponseId: string;

}

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
 * @schema ApiGatewayV2GetIntegrationResponsesRequest
 */
export interface ApiGatewayV2GetIntegrationResponsesRequest {
  /**
   * @schema ApiGatewayV2GetIntegrationResponsesRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetIntegrationResponsesRequest#IntegrationId
   */
  readonly integrationId: string;

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
 * @schema ApiGatewayV2GetIntegrationsRequest
 */
export interface ApiGatewayV2GetIntegrationsRequest {
  /**
   * @schema ApiGatewayV2GetIntegrationsRequest#ApiId
   */
  readonly apiId: string;

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
 * @schema ApiGatewayV2GetModelRequest
 */
export interface ApiGatewayV2GetModelRequest {
  /**
   * @schema ApiGatewayV2GetModelRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetModelRequest#ModelId
   */
  readonly modelId: string;

}

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
 * @schema ApiGatewayV2GetModelTemplateRequest
 */
export interface ApiGatewayV2GetModelTemplateRequest {
  /**
   * @schema ApiGatewayV2GetModelTemplateRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetModelTemplateRequest#ModelId
   */
  readonly modelId: string;

}

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
 * @schema ApiGatewayV2GetModelsRequest
 */
export interface ApiGatewayV2GetModelsRequest {
  /**
   * @schema ApiGatewayV2GetModelsRequest#ApiId
   */
  readonly apiId: string;

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
 * @schema ApiGatewayV2GetRouteRequest
 */
export interface ApiGatewayV2GetRouteRequest {
  /**
   * @schema ApiGatewayV2GetRouteRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetRouteRequest#RouteId
   */
  readonly routeId: string;

}

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
 * @schema ApiGatewayV2GetRouteResponseRequest
 */
export interface ApiGatewayV2GetRouteResponseRequest {
  /**
   * @schema ApiGatewayV2GetRouteResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetRouteResponseRequest#RouteId
   */
  readonly routeId: string;

  /**
   * @schema ApiGatewayV2GetRouteResponseRequest#RouteResponseId
   */
  readonly routeResponseId: string;

}

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
 * @schema ApiGatewayV2GetRouteResponsesRequest
 */
export interface ApiGatewayV2GetRouteResponsesRequest {
  /**
   * @schema ApiGatewayV2GetRouteResponsesRequest#ApiId
   */
  readonly apiId: string;

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
  readonly routeId: string;

}

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
 * @schema ApiGatewayV2GetRoutesRequest
 */
export interface ApiGatewayV2GetRoutesRequest {
  /**
   * @schema ApiGatewayV2GetRoutesRequest#ApiId
   */
  readonly apiId: string;

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
 * @schema ApiGatewayV2GetStageRequest
 */
export interface ApiGatewayV2GetStageRequest {
  /**
   * @schema ApiGatewayV2GetStageRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2GetStageRequest#StageName
   */
  readonly stageName: string;

}

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
 * @schema ApiGatewayV2GetStagesRequest
 */
export interface ApiGatewayV2GetStagesRequest {
  /**
   * @schema ApiGatewayV2GetStagesRequest#ApiId
   */
  readonly apiId: string;

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
 * @schema ApiGatewayV2GetTagsRequest
 */
export interface ApiGatewayV2GetTagsRequest {
  /**
   * @schema ApiGatewayV2GetTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema ApiGatewayV2GetVpcLinkRequest
 */
export interface ApiGatewayV2GetVpcLinkRequest {
  /**
   * @schema ApiGatewayV2GetVpcLinkRequest#VpcLinkId
   */
  readonly vpcLinkId: string;

}

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
  readonly body: string;

  /**
   * @schema ApiGatewayV2ImportApiRequest#FailOnWarnings
   */
  readonly failOnWarnings?: boolean;

}

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
 * @schema ApiGatewayV2ReimportApiRequest
 */
export interface ApiGatewayV2ReimportApiRequest {
  /**
   * @schema ApiGatewayV2ReimportApiRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2ReimportApiRequest#Basepath
   */
  readonly basepath?: string;

  /**
   * @schema ApiGatewayV2ReimportApiRequest#Body
   */
  readonly body: string;

  /**
   * @schema ApiGatewayV2ReimportApiRequest#FailOnWarnings
   */
  readonly failOnWarnings?: boolean;

}

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
 * @schema ApiGatewayV2TagResourceRequest
 */
export interface ApiGatewayV2TagResourceRequest {
  /**
   * @schema ApiGatewayV2TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ApiGatewayV2TagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ApiGatewayV2TagResourceResponse
 */
export interface ApiGatewayV2TagResourceResponse {
}

/**
 * @schema ApiGatewayV2UntagResourceRequest
 */
export interface ApiGatewayV2UntagResourceRequest {
  /**
   * @schema ApiGatewayV2UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ApiGatewayV2UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ApiGatewayV2UpdateApiRequest
 */
export interface ApiGatewayV2UpdateApiRequest {
  /**
   * @schema ApiGatewayV2UpdateApiRequest#ApiId
   */
  readonly apiId: string;

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
 * @schema ApiGatewayV2UpdateApiMappingRequest
 */
export interface ApiGatewayV2UpdateApiMappingRequest {
  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#ApiMappingId
   */
  readonly apiMappingId: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema ApiGatewayV2UpdateApiMappingRequest#Stage
   */
  readonly stage?: string;

}

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
 * @schema ApiGatewayV2UpdateAuthorizerRequest
 */
export interface ApiGatewayV2UpdateAuthorizerRequest {
  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema ApiGatewayV2UpdateAuthorizerRequest#AuthorizerId
   */
  readonly authorizerId: string;

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
 * @schema ApiGatewayV2UpdateDeploymentRequest
 */
export interface ApiGatewayV2UpdateDeploymentRequest {
  /**
   * @schema ApiGatewayV2UpdateDeploymentRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2UpdateDeploymentRequest#DeploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema ApiGatewayV2UpdateDeploymentRequest#Description
   */
  readonly description?: string;

}

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
 * @schema ApiGatewayV2UpdateDomainNameRequest
 */
export interface ApiGatewayV2UpdateDomainNameRequest {
  /**
   * @schema ApiGatewayV2UpdateDomainNameRequest#DomainName
   */
  readonly domainName: string;

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
 * @schema ApiGatewayV2UpdateIntegrationRequest
 */
export interface ApiGatewayV2UpdateIntegrationRequest {
  /**
   * @schema ApiGatewayV2UpdateIntegrationRequest#ApiId
   */
  readonly apiId: string;

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
  readonly integrationId: string;

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
 * @schema ApiGatewayV2UpdateIntegrationResponseRequest
 */
export interface ApiGatewayV2UpdateIntegrationResponseRequest {
  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema ApiGatewayV2UpdateIntegrationResponseRequest#IntegrationResponseId
   */
  readonly integrationResponseId: string;

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
 * @schema ApiGatewayV2UpdateModelRequest
 */
export interface ApiGatewayV2UpdateModelRequest {
  /**
   * @schema ApiGatewayV2UpdateModelRequest#ApiId
   */
  readonly apiId: string;

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
  readonly modelId: string;

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
 * @schema ApiGatewayV2UpdateRouteRequest
 */
export interface ApiGatewayV2UpdateRouteRequest {
  /**
   * @schema ApiGatewayV2UpdateRouteRequest#ApiId
   */
  readonly apiId: string;

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
  readonly routeId: string;

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
 * @schema ApiGatewayV2UpdateRouteResponseRequest
 */
export interface ApiGatewayV2UpdateRouteResponseRequest {
  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#ApiId
   */
  readonly apiId: string;

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
  readonly routeId: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#RouteResponseId
   */
  readonly routeResponseId: string;

  /**
   * @schema ApiGatewayV2UpdateRouteResponseRequest#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

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
  readonly apiId: string;

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
  readonly stageName: string;

  /**
   * @schema ApiGatewayV2UpdateStageRequest#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

}

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
  readonly vpcLinkId: string;

}

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
 * @schema ApiGatewayV2TlsConfigInput
 */
export interface ApiGatewayV2TlsConfigInput {
  /**
   * @schema ApiGatewayV2TlsConfigInput#ServerNameToVerify
   */
  readonly serverNameToVerify?: string;

}

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
 * @schema ApiGatewayV2ParameterConstraints
 */
export interface ApiGatewayV2ParameterConstraints {
  /**
   * @schema ApiGatewayV2ParameterConstraints#Required
   */
  readonly required?: boolean;

}

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
 * @schema ApiGatewayV2ApiMapping
 */
export interface ApiGatewayV2ApiMapping {
  /**
   * @schema ApiGatewayV2ApiMapping#ApiId
   */
  readonly apiId: string;

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
  readonly stage: string;

}

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
  readonly name: string;

  /**
   * @schema ApiGatewayV2Api#ProtocolType
   */
  readonly protocolType: string;

  /**
   * @schema ApiGatewayV2Api#RouteSelectionExpression
   */
  readonly routeSelectionExpression: string;

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
  readonly name: string;

}

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
  readonly domainName: string;

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
  readonly integrationResponseKey: string;

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
  readonly name: string;

  /**
   * @schema ApiGatewayV2Model#Schema
   */
  readonly schema?: string;

}

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
  readonly routeResponseKey: string;

}

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
  readonly routeKey: string;

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
  readonly stageName: string;

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
  readonly name: string;

  /**
   * @schema ApiGatewayV2VpcLink#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema ApiGatewayV2VpcLink#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema ApiGatewayV2VpcLink#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ApiGatewayV2VpcLink#VpcLinkId
   */
  readonly vpcLinkId: string;

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
