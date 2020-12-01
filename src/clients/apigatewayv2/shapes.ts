/**
 * @schema CreateApiRequest
 */
export interface CreateApiRequest {
  /**
   * @schema CreateApiRequest#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema CreateApiRequest#CorsConfiguration
   */
  readonly corsConfiguration?: Cors;

  /**
   * @schema CreateApiRequest#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema CreateApiRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateApiRequest#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema CreateApiRequest#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema CreateApiRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateApiRequest#ProtocolType
   */
  readonly protocolType: string;

  /**
   * @schema CreateApiRequest#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema CreateApiRequest#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema CreateApiRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateApiRequest#Target
   */
  readonly target?: string;

  /**
   * @schema CreateApiRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema CreateApiResponse
 */
export interface CreateApiResponse {
  /**
   * @schema CreateApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema CreateApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema CreateApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema CreateApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema CreateApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: Cors;

  /**
   * @schema CreateApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema CreateApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema CreateApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema CreateApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema CreateApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema CreateApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema CreateApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema CreateApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema CreateApiMappingRequest
 */
export interface CreateApiMappingRequest {
  /**
   * @schema CreateApiMappingRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema CreateApiMappingRequest#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema CreateApiMappingRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CreateApiMappingRequest#Stage
   */
  readonly stage: string;

}

/**
 * @schema CreateApiMappingResponse
 */
export interface CreateApiMappingResponse {
  /**
   * @schema CreateApiMappingResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema CreateApiMappingResponse#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema CreateApiMappingResponse#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema CreateApiMappingResponse#Stage
   */
  readonly stage?: string;

}

/**
 * @schema CreateAuthorizerRequest
 */
export interface CreateAuthorizerRequest {
  /**
   * @schema CreateAuthorizerRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema CreateAuthorizerRequest#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema CreateAuthorizerRequest#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema CreateAuthorizerRequest#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema CreateAuthorizerRequest#AuthorizerType
   */
  readonly authorizerType: string;

  /**
   * @schema CreateAuthorizerRequest#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema CreateAuthorizerRequest#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema CreateAuthorizerRequest#IdentitySource
   */
  readonly identitySource: string[];

  /**
   * @schema CreateAuthorizerRequest#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema CreateAuthorizerRequest#JwtConfiguration
   */
  readonly jwtConfiguration?: JwtConfiguration;

  /**
   * @schema CreateAuthorizerRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CreateAuthorizerResponse
 */
export interface CreateAuthorizerResponse {
  /**
   * @schema CreateAuthorizerResponse#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema CreateAuthorizerResponse#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema CreateAuthorizerResponse#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema CreateAuthorizerResponse#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema CreateAuthorizerResponse#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema CreateAuthorizerResponse#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema CreateAuthorizerResponse#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema CreateAuthorizerResponse#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema CreateAuthorizerResponse#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema CreateAuthorizerResponse#JwtConfiguration
   */
  readonly jwtConfiguration?: JwtConfiguration;

  /**
   * @schema CreateAuthorizerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateDeploymentRequest
 */
export interface CreateDeploymentRequest {
  /**
   * @schema CreateDeploymentRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema CreateDeploymentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateDeploymentRequest#StageName
   */
  readonly stageName?: string;

}

/**
 * @schema CreateDeploymentResponse
 */
export interface CreateDeploymentResponse {
  /**
   * @schema CreateDeploymentResponse#AutoDeployed
   */
  readonly autoDeployed?: boolean;

  /**
   * @schema CreateDeploymentResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema CreateDeploymentResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CreateDeploymentResponse#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema CreateDeploymentResponse#DeploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema CreateDeploymentResponse#Description
   */
  readonly description?: string;

}

/**
 * @schema CreateDomainNameRequest
 */
export interface CreateDomainNameRequest {
  /**
   * @schema CreateDomainNameRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CreateDomainNameRequest#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: DomainNameConfiguration[];

  /**
   * @schema CreateDomainNameRequest#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: MutualTlsAuthenticationInput;

  /**
   * @schema CreateDomainNameRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateDomainNameResponse
 */
export interface CreateDomainNameResponse {
  /**
   * @schema CreateDomainNameResponse#ApiMappingSelectionExpression
   */
  readonly apiMappingSelectionExpression?: string;

  /**
   * @schema CreateDomainNameResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CreateDomainNameResponse#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: DomainNameConfiguration[];

  /**
   * @schema CreateDomainNameResponse#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * @schema CreateDomainNameResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateIntegrationRequest
 */
export interface CreateIntegrationRequest {
  /**
   * @schema CreateIntegrationRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema CreateIntegrationRequest#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema CreateIntegrationRequest#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema CreateIntegrationRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema CreateIntegrationRequest#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema CreateIntegrationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateIntegrationRequest#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema CreateIntegrationRequest#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema CreateIntegrationRequest#IntegrationType
   */
  readonly integrationType: string;

  /**
   * @schema CreateIntegrationRequest#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema CreateIntegrationRequest#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema CreateIntegrationRequest#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema CreateIntegrationRequest#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema CreateIntegrationRequest#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema CreateIntegrationRequest#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema CreateIntegrationRequest#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema CreateIntegrationRequest#TlsConfig
   */
  readonly tlsConfig?: TlsConfigInput;

}

/**
 * @schema CreateIntegrationResult
 */
export interface CreateIntegrationResult {
  /**
   * @schema CreateIntegrationResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema CreateIntegrationResult#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema CreateIntegrationResult#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema CreateIntegrationResult#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema CreateIntegrationResult#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema CreateIntegrationResult#Description
   */
  readonly description?: string;

  /**
   * @schema CreateIntegrationResult#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema CreateIntegrationResult#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema CreateIntegrationResult#IntegrationResponseSelectionExpression
   */
  readonly integrationResponseSelectionExpression?: string;

  /**
   * @schema CreateIntegrationResult#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema CreateIntegrationResult#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema CreateIntegrationResult#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema CreateIntegrationResult#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema CreateIntegrationResult#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema CreateIntegrationResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema CreateIntegrationResult#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema CreateIntegrationResult#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema CreateIntegrationResult#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema CreateIntegrationResult#TlsConfig
   */
  readonly tlsConfig?: TlsConfig;

}

/**
 * @schema CreateIntegrationResponseRequest
 */
export interface CreateIntegrationResponseRequest {
  /**
   * @schema CreateIntegrationResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema CreateIntegrationResponseRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema CreateIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema CreateIntegrationResponseRequest#IntegrationResponseKey
   */
  readonly integrationResponseKey: string;

  /**
   * @schema CreateIntegrationResponseRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema CreateIntegrationResponseRequest#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema CreateIntegrationResponseRequest#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * @schema CreateIntegrationResponseResponse
 */
export interface CreateIntegrationResponseResponse {
  /**
   * @schema CreateIntegrationResponseResponse#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema CreateIntegrationResponseResponse#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

  /**
   * @schema CreateIntegrationResponseResponse#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema CreateIntegrationResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema CreateIntegrationResponseResponse#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema CreateIntegrationResponseResponse#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * @schema CreateModelRequest
 */
export interface CreateModelRequest {
  /**
   * @schema CreateModelRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema CreateModelRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema CreateModelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateModelRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateModelRequest#Schema
   */
  readonly schema: string;

}

/**
 * @schema CreateModelResponse
 */
export interface CreateModelResponse {
  /**
   * @schema CreateModelResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema CreateModelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateModelResponse#ModelId
   */
  readonly modelId?: string;

  /**
   * @schema CreateModelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateModelResponse#Schema
   */
  readonly schema?: string;

}

/**
 * @schema CreateRouteRequest
 */
export interface CreateRouteRequest {
  /**
   * @schema CreateRouteRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema CreateRouteRequest#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema CreateRouteRequest#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema CreateRouteRequest#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema CreateRouteRequest#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema CreateRouteRequest#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema CreateRouteRequest#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema CreateRouteRequest#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema CreateRouteRequest#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema CreateRouteRequest#RouteKey
   */
  readonly routeKey: string;

  /**
   * @schema CreateRouteRequest#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema CreateRouteRequest#Target
   */
  readonly target?: string;

}

/**
 * @schema CreateRouteResult
 */
export interface CreateRouteResult {
  /**
   * @schema CreateRouteResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema CreateRouteResult#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema CreateRouteResult#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema CreateRouteResult#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema CreateRouteResult#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema CreateRouteResult#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema CreateRouteResult#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema CreateRouteResult#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema CreateRouteResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema CreateRouteResult#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema CreateRouteResult#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema CreateRouteResult#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema CreateRouteResult#Target
   */
  readonly target?: string;

}

/**
 * @schema CreateRouteResponseRequest
 */
export interface CreateRouteResponseRequest {
  /**
   * @schema CreateRouteResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema CreateRouteResponseRequest#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema CreateRouteResponseRequest#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema CreateRouteResponseRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema CreateRouteResponseRequest#RouteId
   */
  readonly routeId: string;

  /**
   * @schema CreateRouteResponseRequest#RouteResponseKey
   */
  readonly routeResponseKey: string;

}

/**
 * @schema CreateRouteResponseResponse
 */
export interface CreateRouteResponseResponse {
  /**
   * @schema CreateRouteResponseResponse#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema CreateRouteResponseResponse#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema CreateRouteResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema CreateRouteResponseResponse#RouteResponseId
   */
  readonly routeResponseId?: string;

  /**
   * @schema CreateRouteResponseResponse#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * @schema CreateStageRequest
 */
export interface CreateStageRequest {
  /**
   * @schema CreateStageRequest#AccessLogSettings
   */
  readonly accessLogSettings?: AccessLogSettings;

  /**
   * @schema CreateStageRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema CreateStageRequest#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema CreateStageRequest#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema CreateStageRequest#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: RouteSettings;

  /**
   * @schema CreateStageRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CreateStageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateStageRequest#RouteSettings
   */
  readonly routeSettings?: { [key: string]: RouteSettings };

  /**
   * @schema CreateStageRequest#StageName
   */
  readonly stageName: string;

  /**
   * @schema CreateStageRequest#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema CreateStageRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateStageResponse
 */
export interface CreateStageResponse {
  /**
   * @schema CreateStageResponse#AccessLogSettings
   */
  readonly accessLogSettings?: AccessLogSettings;

  /**
   * @schema CreateStageResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema CreateStageResponse#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema CreateStageResponse#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema CreateStageResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema CreateStageResponse#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: RouteSettings;

  /**
   * @schema CreateStageResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CreateStageResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateStageResponse#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema CreateStageResponse#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema CreateStageResponse#RouteSettings
   */
  readonly routeSettings?: { [key: string]: RouteSettings };

  /**
   * @schema CreateStageResponse#StageName
   */
  readonly stageName?: string;

  /**
   * @schema CreateStageResponse#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema CreateStageResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateVpcLinkRequest
 */
export interface CreateVpcLinkRequest {
  /**
   * @schema CreateVpcLinkRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateVpcLinkRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateVpcLinkRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateVpcLinkRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateVpcLinkResponse
 */
export interface CreateVpcLinkResponse {
  /**
   * @schema CreateVpcLinkResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema CreateVpcLinkResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateVpcLinkResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateVpcLinkResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema CreateVpcLinkResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateVpcLinkResponse#VpcLinkId
   */
  readonly vpcLinkId?: string;

  /**
   * @schema CreateVpcLinkResponse#VpcLinkStatus
   */
  readonly vpcLinkStatus?: string;

  /**
   * @schema CreateVpcLinkResponse#VpcLinkStatusMessage
   */
  readonly vpcLinkStatusMessage?: string;

  /**
   * @schema CreateVpcLinkResponse#VpcLinkVersion
   */
  readonly vpcLinkVersion?: string;

}

/**
 * @schema DeleteAccessLogSettingsRequest
 */
export interface DeleteAccessLogSettingsRequest {
  /**
   * @schema DeleteAccessLogSettingsRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteAccessLogSettingsRequest#StageName
   */
  readonly stageName: string;

}

/**
 * @schema DeleteApiRequest
 */
export interface DeleteApiRequest {
  /**
   * @schema DeleteApiRequest#ApiId
   */
  readonly apiId: string;

}

/**
 * @schema DeleteApiMappingRequest
 */
export interface DeleteApiMappingRequest {
  /**
   * @schema DeleteApiMappingRequest#ApiMappingId
   */
  readonly apiMappingId: string;

  /**
   * @schema DeleteApiMappingRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DeleteAuthorizerRequest
 */
export interface DeleteAuthorizerRequest {
  /**
   * @schema DeleteAuthorizerRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteAuthorizerRequest#AuthorizerId
   */
  readonly authorizerId: string;

}

/**
 * @schema DeleteCorsConfigurationRequest
 */
export interface DeleteCorsConfigurationRequest {
  /**
   * @schema DeleteCorsConfigurationRequest#ApiId
   */
  readonly apiId: string;

}

/**
 * @schema DeleteDeploymentRequest
 */
export interface DeleteDeploymentRequest {
  /**
   * @schema DeleteDeploymentRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteDeploymentRequest#DeploymentId
   */
  readonly deploymentId: string;

}

/**
 * @schema DeleteDomainNameRequest
 */
export interface DeleteDomainNameRequest {
  /**
   * @schema DeleteDomainNameRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DeleteIntegrationRequest
 */
export interface DeleteIntegrationRequest {
  /**
   * @schema DeleteIntegrationRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteIntegrationRequest#IntegrationId
   */
  readonly integrationId: string;

}

/**
 * @schema DeleteIntegrationResponseRequest
 */
export interface DeleteIntegrationResponseRequest {
  /**
   * @schema DeleteIntegrationResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema DeleteIntegrationResponseRequest#IntegrationResponseId
   */
  readonly integrationResponseId: string;

}

/**
 * @schema DeleteModelRequest
 */
export interface DeleteModelRequest {
  /**
   * @schema DeleteModelRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteModelRequest#ModelId
   */
  readonly modelId: string;

}

/**
 * @schema DeleteRouteRequest
 */
export interface DeleteRouteRequest {
  /**
   * @schema DeleteRouteRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteRouteRequest#RouteId
   */
  readonly routeId: string;

}

/**
 * @schema DeleteRouteRequestParameterRequest
 */
export interface DeleteRouteRequestParameterRequest {
  /**
   * @schema DeleteRouteRequestParameterRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteRouteRequestParameterRequest#RequestParameterKey
   */
  readonly requestParameterKey: string;

  /**
   * @schema DeleteRouteRequestParameterRequest#RouteId
   */
  readonly routeId: string;

}

/**
 * @schema DeleteRouteResponseRequest
 */
export interface DeleteRouteResponseRequest {
  /**
   * @schema DeleteRouteResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteRouteResponseRequest#RouteId
   */
  readonly routeId: string;

  /**
   * @schema DeleteRouteResponseRequest#RouteResponseId
   */
  readonly routeResponseId: string;

}

/**
 * @schema DeleteRouteSettingsRequest
 */
export interface DeleteRouteSettingsRequest {
  /**
   * @schema DeleteRouteSettingsRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteRouteSettingsRequest#RouteKey
   */
  readonly routeKey: string;

  /**
   * @schema DeleteRouteSettingsRequest#StageName
   */
  readonly stageName: string;

}

/**
 * @schema DeleteStageRequest
 */
export interface DeleteStageRequest {
  /**
   * @schema DeleteStageRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteStageRequest#StageName
   */
  readonly stageName: string;

}

/**
 * @schema DeleteVpcLinkRequest
 */
export interface DeleteVpcLinkRequest {
  /**
   * @schema DeleteVpcLinkRequest#VpcLinkId
   */
  readonly vpcLinkId: string;

}

/**
 * @schema DeleteVpcLinkResponse
 */
export interface DeleteVpcLinkResponse {
}

/**
 * @schema ExportApiRequest
 */
export interface ExportApiRequest {
  /**
   * @schema ExportApiRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ExportApiRequest#ExportVersion
   */
  readonly exportVersion?: string;

  /**
   * @schema ExportApiRequest#IncludeExtensions
   */
  readonly includeExtensions?: boolean;

  /**
   * @schema ExportApiRequest#OutputType
   */
  readonly outputType: string;

  /**
   * @schema ExportApiRequest#Specification
   */
  readonly specification: string;

  /**
   * @schema ExportApiRequest#StageName
   */
  readonly stageName?: string;

}

/**
 * @schema ExportApiResponse
 */
export interface ExportApiResponse {
  /**
   * @schema ExportApiResponse#body
   */
  readonly body?: any;

}

/**
 * @schema ResetAuthorizersCacheRequest
 */
export interface ResetAuthorizersCacheRequest {
  /**
   * @schema ResetAuthorizersCacheRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ResetAuthorizersCacheRequest#StageName
   */
  readonly stageName: string;

}

/**
 * @schema GetApiRequest
 */
export interface GetApiRequest {
  /**
   * @schema GetApiRequest#ApiId
   */
  readonly apiId: string;

}

/**
 * @schema GetApiResponse
 */
export interface GetApiResponse {
  /**
   * @schema GetApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema GetApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema GetApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema GetApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema GetApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: Cors;

  /**
   * @schema GetApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema GetApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema GetApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema GetApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema GetApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema GetApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema GetApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GetApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema GetApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema GetApiMappingRequest
 */
export interface GetApiMappingRequest {
  /**
   * @schema GetApiMappingRequest#ApiMappingId
   */
  readonly apiMappingId: string;

  /**
   * @schema GetApiMappingRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema GetApiMappingResponse
 */
export interface GetApiMappingResponse {
  /**
   * @schema GetApiMappingResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema GetApiMappingResponse#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema GetApiMappingResponse#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema GetApiMappingResponse#Stage
   */
  readonly stage?: string;

}

/**
 * @schema GetApiMappingsRequest
 */
export interface GetApiMappingsRequest {
  /**
   * @schema GetApiMappingsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema GetApiMappingsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetApiMappingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetApiMappingsResponse
 */
export interface GetApiMappingsResponse {
  /**
   * @schema GetApiMappingsResponse#Items
   */
  readonly items?: ApiMapping[];

  /**
   * @schema GetApiMappingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetApisRequest
 */
export interface GetApisRequest {
  /**
   * @schema GetApisRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetApisRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetApisResponse
 */
export interface GetApisResponse {
  /**
   * @schema GetApisResponse#Items
   */
  readonly items?: Api[];

  /**
   * @schema GetApisResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetAuthorizerRequest
 */
export interface GetAuthorizerRequest {
  /**
   * @schema GetAuthorizerRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetAuthorizerRequest#AuthorizerId
   */
  readonly authorizerId: string;

}

/**
 * @schema GetAuthorizerResponse
 */
export interface GetAuthorizerResponse {
  /**
   * @schema GetAuthorizerResponse#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema GetAuthorizerResponse#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema GetAuthorizerResponse#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema GetAuthorizerResponse#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema GetAuthorizerResponse#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema GetAuthorizerResponse#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema GetAuthorizerResponse#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema GetAuthorizerResponse#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema GetAuthorizerResponse#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema GetAuthorizerResponse#JwtConfiguration
   */
  readonly jwtConfiguration?: JwtConfiguration;

  /**
   * @schema GetAuthorizerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GetAuthorizersRequest
 */
export interface GetAuthorizersRequest {
  /**
   * @schema GetAuthorizersRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetAuthorizersRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetAuthorizersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetAuthorizersResponse
 */
export interface GetAuthorizersResponse {
  /**
   * @schema GetAuthorizersResponse#Items
   */
  readonly items?: Authorizer[];

  /**
   * @schema GetAuthorizersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDeploymentRequest
 */
export interface GetDeploymentRequest {
  /**
   * @schema GetDeploymentRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetDeploymentRequest#DeploymentId
   */
  readonly deploymentId: string;

}

/**
 * @schema GetDeploymentResponse
 */
export interface GetDeploymentResponse {
  /**
   * @schema GetDeploymentResponse#AutoDeployed
   */
  readonly autoDeployed?: boolean;

  /**
   * @schema GetDeploymentResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema GetDeploymentResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GetDeploymentResponse#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema GetDeploymentResponse#DeploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema GetDeploymentResponse#Description
   */
  readonly description?: string;

}

/**
 * @schema GetDeploymentsRequest
 */
export interface GetDeploymentsRequest {
  /**
   * @schema GetDeploymentsRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetDeploymentsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDeploymentsResponse
 */
export interface GetDeploymentsResponse {
  /**
   * @schema GetDeploymentsResponse#Items
   */
  readonly items?: Deployment[];

  /**
   * @schema GetDeploymentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDomainNameRequest
 */
export interface GetDomainNameRequest {
  /**
   * @schema GetDomainNameRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema GetDomainNameResponse
 */
export interface GetDomainNameResponse {
  /**
   * @schema GetDomainNameResponse#ApiMappingSelectionExpression
   */
  readonly apiMappingSelectionExpression?: string;

  /**
   * @schema GetDomainNameResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema GetDomainNameResponse#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: DomainNameConfiguration[];

  /**
   * @schema GetDomainNameResponse#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * @schema GetDomainNameResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetDomainNamesRequest
 */
export interface GetDomainNamesRequest {
  /**
   * @schema GetDomainNamesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetDomainNamesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDomainNamesResponse
 */
export interface GetDomainNamesResponse {
  /**
   * @schema GetDomainNamesResponse#Items
   */
  readonly items?: DomainName[];

  /**
   * @schema GetDomainNamesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetIntegrationRequest
 */
export interface GetIntegrationRequest {
  /**
   * @schema GetIntegrationRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetIntegrationRequest#IntegrationId
   */
  readonly integrationId: string;

}

/**
 * @schema GetIntegrationResult
 */
export interface GetIntegrationResult {
  /**
   * @schema GetIntegrationResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema GetIntegrationResult#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema GetIntegrationResult#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema GetIntegrationResult#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema GetIntegrationResult#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema GetIntegrationResult#Description
   */
  readonly description?: string;

  /**
   * @schema GetIntegrationResult#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema GetIntegrationResult#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema GetIntegrationResult#IntegrationResponseSelectionExpression
   */
  readonly integrationResponseSelectionExpression?: string;

  /**
   * @schema GetIntegrationResult#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema GetIntegrationResult#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema GetIntegrationResult#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema GetIntegrationResult#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema GetIntegrationResult#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema GetIntegrationResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema GetIntegrationResult#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema GetIntegrationResult#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema GetIntegrationResult#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema GetIntegrationResult#TlsConfig
   */
  readonly tlsConfig?: TlsConfig;

}

/**
 * @schema GetIntegrationResponseRequest
 */
export interface GetIntegrationResponseRequest {
  /**
   * @schema GetIntegrationResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema GetIntegrationResponseRequest#IntegrationResponseId
   */
  readonly integrationResponseId: string;

}

/**
 * @schema GetIntegrationResponseResponse
 */
export interface GetIntegrationResponseResponse {
  /**
   * @schema GetIntegrationResponseResponse#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema GetIntegrationResponseResponse#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

  /**
   * @schema GetIntegrationResponseResponse#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema GetIntegrationResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema GetIntegrationResponseResponse#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema GetIntegrationResponseResponse#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * @schema GetIntegrationResponsesRequest
 */
export interface GetIntegrationResponsesRequest {
  /**
   * @schema GetIntegrationResponsesRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetIntegrationResponsesRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema GetIntegrationResponsesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetIntegrationResponsesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetIntegrationResponsesResponse
 */
export interface GetIntegrationResponsesResponse {
  /**
   * @schema GetIntegrationResponsesResponse#Items
   */
  readonly items?: IntegrationResponse[];

  /**
   * @schema GetIntegrationResponsesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetIntegrationsRequest
 */
export interface GetIntegrationsRequest {
  /**
   * @schema GetIntegrationsRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetIntegrationsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetIntegrationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetIntegrationsResponse
 */
export interface GetIntegrationsResponse {
  /**
   * @schema GetIntegrationsResponse#Items
   */
  readonly items?: Integration[];

  /**
   * @schema GetIntegrationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetModelRequest
 */
export interface GetModelRequest {
  /**
   * @schema GetModelRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetModelRequest#ModelId
   */
  readonly modelId: string;

}

/**
 * @schema GetModelResponse
 */
export interface GetModelResponse {
  /**
   * @schema GetModelResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema GetModelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetModelResponse#ModelId
   */
  readonly modelId?: string;

  /**
   * @schema GetModelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetModelResponse#Schema
   */
  readonly schema?: string;

}

/**
 * @schema GetModelTemplateRequest
 */
export interface GetModelTemplateRequest {
  /**
   * @schema GetModelTemplateRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetModelTemplateRequest#ModelId
   */
  readonly modelId: string;

}

/**
 * @schema GetModelTemplateResponse
 */
export interface GetModelTemplateResponse {
  /**
   * @schema GetModelTemplateResponse#Value
   */
  readonly value?: string;

}

/**
 * @schema GetModelsRequest
 */
export interface GetModelsRequest {
  /**
   * @schema GetModelsRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetModelsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetModelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetModelsResponse
 */
export interface GetModelsResponse {
  /**
   * @schema GetModelsResponse#Items
   */
  readonly items?: Model[];

  /**
   * @schema GetModelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetRouteRequest
 */
export interface GetRouteRequest {
  /**
   * @schema GetRouteRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetRouteRequest#RouteId
   */
  readonly routeId: string;

}

/**
 * @schema GetRouteResult
 */
export interface GetRouteResult {
  /**
   * @schema GetRouteResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema GetRouteResult#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema GetRouteResult#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema GetRouteResult#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema GetRouteResult#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema GetRouteResult#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema GetRouteResult#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema GetRouteResult#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema GetRouteResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema GetRouteResult#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema GetRouteResult#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema GetRouteResult#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema GetRouteResult#Target
   */
  readonly target?: string;

}

/**
 * @schema GetRouteResponseRequest
 */
export interface GetRouteResponseRequest {
  /**
   * @schema GetRouteResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetRouteResponseRequest#RouteId
   */
  readonly routeId: string;

  /**
   * @schema GetRouteResponseRequest#RouteResponseId
   */
  readonly routeResponseId: string;

}

/**
 * @schema GetRouteResponseResponse
 */
export interface GetRouteResponseResponse {
  /**
   * @schema GetRouteResponseResponse#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema GetRouteResponseResponse#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema GetRouteResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema GetRouteResponseResponse#RouteResponseId
   */
  readonly routeResponseId?: string;

  /**
   * @schema GetRouteResponseResponse#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * @schema GetRouteResponsesRequest
 */
export interface GetRouteResponsesRequest {
  /**
   * @schema GetRouteResponsesRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetRouteResponsesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetRouteResponsesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetRouteResponsesRequest#RouteId
   */
  readonly routeId: string;

}

/**
 * @schema GetRouteResponsesResponse
 */
export interface GetRouteResponsesResponse {
  /**
   * @schema GetRouteResponsesResponse#Items
   */
  readonly items?: RouteResponse[];

  /**
   * @schema GetRouteResponsesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetRoutesRequest
 */
export interface GetRoutesRequest {
  /**
   * @schema GetRoutesRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetRoutesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetRoutesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetRoutesResponse
 */
export interface GetRoutesResponse {
  /**
   * @schema GetRoutesResponse#Items
   */
  readonly items?: Route[];

  /**
   * @schema GetRoutesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetStageRequest
 */
export interface GetStageRequest {
  /**
   * @schema GetStageRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetStageRequest#StageName
   */
  readonly stageName: string;

}

/**
 * @schema GetStageResponse
 */
export interface GetStageResponse {
  /**
   * @schema GetStageResponse#AccessLogSettings
   */
  readonly accessLogSettings?: AccessLogSettings;

  /**
   * @schema GetStageResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema GetStageResponse#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema GetStageResponse#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema GetStageResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema GetStageResponse#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: RouteSettings;

  /**
   * @schema GetStageResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GetStageResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetStageResponse#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema GetStageResponse#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema GetStageResponse#RouteSettings
   */
  readonly routeSettings?: { [key: string]: RouteSettings };

  /**
   * @schema GetStageResponse#StageName
   */
  readonly stageName?: string;

  /**
   * @schema GetStageResponse#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema GetStageResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetStagesRequest
 */
export interface GetStagesRequest {
  /**
   * @schema GetStagesRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema GetStagesRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetStagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetStagesResponse
 */
export interface GetStagesResponse {
  /**
   * @schema GetStagesResponse#Items
   */
  readonly items?: Stage[];

  /**
   * @schema GetStagesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTagsRequest
 */
export interface GetTagsRequest {
  /**
   * @schema GetTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GetTagsResponse
 */
export interface GetTagsResponse {
  /**
   * @schema GetTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetVpcLinkRequest
 */
export interface GetVpcLinkRequest {
  /**
   * @schema GetVpcLinkRequest#VpcLinkId
   */
  readonly vpcLinkId: string;

}

/**
 * @schema GetVpcLinkResponse
 */
export interface GetVpcLinkResponse {
  /**
   * @schema GetVpcLinkResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema GetVpcLinkResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetVpcLinkResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema GetVpcLinkResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema GetVpcLinkResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GetVpcLinkResponse#VpcLinkId
   */
  readonly vpcLinkId?: string;

  /**
   * @schema GetVpcLinkResponse#VpcLinkStatus
   */
  readonly vpcLinkStatus?: string;

  /**
   * @schema GetVpcLinkResponse#VpcLinkStatusMessage
   */
  readonly vpcLinkStatusMessage?: string;

  /**
   * @schema GetVpcLinkResponse#VpcLinkVersion
   */
  readonly vpcLinkVersion?: string;

}

/**
 * @schema GetVpcLinksRequest
 */
export interface GetVpcLinksRequest {
  /**
   * @schema GetVpcLinksRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GetVpcLinksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetVpcLinksResponse
 */
export interface GetVpcLinksResponse {
  /**
   * @schema GetVpcLinksResponse#Items
   */
  readonly items?: VpcLink[];

  /**
   * @schema GetVpcLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ImportApiRequest
 */
export interface ImportApiRequest {
  /**
   * @schema ImportApiRequest#Basepath
   */
  readonly basepath?: string;

  /**
   * @schema ImportApiRequest#Body
   */
  readonly body: string;

  /**
   * @schema ImportApiRequest#FailOnWarnings
   */
  readonly failOnWarnings?: boolean;

}

/**
 * @schema ImportApiResponse
 */
export interface ImportApiResponse {
  /**
   * @schema ImportApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema ImportApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ImportApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ImportApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ImportApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: Cors;

  /**
   * @schema ImportApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ImportApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ImportApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ImportApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ImportApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema ImportApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ImportApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema ImportApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ImportApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ImportApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema ImportApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema ReimportApiRequest
 */
export interface ReimportApiRequest {
  /**
   * @schema ReimportApiRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ReimportApiRequest#Basepath
   */
  readonly basepath?: string;

  /**
   * @schema ReimportApiRequest#Body
   */
  readonly body: string;

  /**
   * @schema ReimportApiRequest#FailOnWarnings
   */
  readonly failOnWarnings?: boolean;

}

/**
 * @schema ReimportApiResponse
 */
export interface ReimportApiResponse {
  /**
   * @schema ReimportApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema ReimportApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema ReimportApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema ReimportApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema ReimportApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: Cors;

  /**
   * @schema ReimportApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema ReimportApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema ReimportApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema ReimportApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema ReimportApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema ReimportApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema ReimportApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema ReimportApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema ReimportApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ReimportApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema ReimportApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

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
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateApiRequest
 */
export interface UpdateApiRequest {
  /**
   * @schema UpdateApiRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateApiRequest#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema UpdateApiRequest#CorsConfiguration
   */
  readonly corsConfiguration?: Cors;

  /**
   * @schema UpdateApiRequest#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema UpdateApiRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateApiRequest#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema UpdateApiRequest#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema UpdateApiRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateApiRequest#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema UpdateApiRequest#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema UpdateApiRequest#Target
   */
  readonly target?: string;

  /**
   * @schema UpdateApiRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema UpdateApiResponse
 */
export interface UpdateApiResponse {
  /**
   * @schema UpdateApiResponse#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema UpdateApiResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema UpdateApiResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema UpdateApiResponse#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema UpdateApiResponse#CorsConfiguration
   */
  readonly corsConfiguration?: Cors;

  /**
   * @schema UpdateApiResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema UpdateApiResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateApiResponse#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema UpdateApiResponse#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema UpdateApiResponse#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema UpdateApiResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateApiResponse#ProtocolType
   */
  readonly protocolType?: string;

  /**
   * @schema UpdateApiResponse#RouteSelectionExpression
   */
  readonly routeSelectionExpression?: string;

  /**
   * @schema UpdateApiResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema UpdateApiResponse#Version
   */
  readonly version?: string;

  /**
   * @schema UpdateApiResponse#Warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema UpdateApiMappingRequest
 */
export interface UpdateApiMappingRequest {
  /**
   * @schema UpdateApiMappingRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateApiMappingRequest#ApiMappingId
   */
  readonly apiMappingId: string;

  /**
   * @schema UpdateApiMappingRequest#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema UpdateApiMappingRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateApiMappingRequest#Stage
   */
  readonly stage?: string;

}

/**
 * @schema UpdateApiMappingResponse
 */
export interface UpdateApiMappingResponse {
  /**
   * @schema UpdateApiMappingResponse#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema UpdateApiMappingResponse#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema UpdateApiMappingResponse#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema UpdateApiMappingResponse#Stage
   */
  readonly stage?: string;

}

/**
 * @schema UpdateAuthorizerRequest
 */
export interface UpdateAuthorizerRequest {
  /**
   * @schema UpdateAuthorizerRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateAuthorizerRequest#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema UpdateAuthorizerRequest#AuthorizerId
   */
  readonly authorizerId: string;

  /**
   * @schema UpdateAuthorizerRequest#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema UpdateAuthorizerRequest#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema UpdateAuthorizerRequest#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema UpdateAuthorizerRequest#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema UpdateAuthorizerRequest#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema UpdateAuthorizerRequest#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema UpdateAuthorizerRequest#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema UpdateAuthorizerRequest#JwtConfiguration
   */
  readonly jwtConfiguration?: JwtConfiguration;

  /**
   * @schema UpdateAuthorizerRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateAuthorizerResponse
 */
export interface UpdateAuthorizerResponse {
  /**
   * @schema UpdateAuthorizerResponse#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema UpdateAuthorizerResponse#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema UpdateAuthorizerResponse#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema UpdateAuthorizerResponse#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema UpdateAuthorizerResponse#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema UpdateAuthorizerResponse#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema UpdateAuthorizerResponse#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema UpdateAuthorizerResponse#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema UpdateAuthorizerResponse#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema UpdateAuthorizerResponse#JwtConfiguration
   */
  readonly jwtConfiguration?: JwtConfiguration;

  /**
   * @schema UpdateAuthorizerResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateDeploymentRequest
 */
export interface UpdateDeploymentRequest {
  /**
   * @schema UpdateDeploymentRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateDeploymentRequest#DeploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema UpdateDeploymentRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateDeploymentResponse
 */
export interface UpdateDeploymentResponse {
  /**
   * @schema UpdateDeploymentResponse#AutoDeployed
   */
  readonly autoDeployed?: boolean;

  /**
   * @schema UpdateDeploymentResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema UpdateDeploymentResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema UpdateDeploymentResponse#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema UpdateDeploymentResponse#DeploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema UpdateDeploymentResponse#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateDomainNameRequest
 */
export interface UpdateDomainNameRequest {
  /**
   * @schema UpdateDomainNameRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateDomainNameRequest#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: DomainNameConfiguration[];

  /**
   * @schema UpdateDomainNameRequest#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: MutualTlsAuthenticationInput;

}

/**
 * @schema UpdateDomainNameResponse
 */
export interface UpdateDomainNameResponse {
  /**
   * @schema UpdateDomainNameResponse#ApiMappingSelectionExpression
   */
  readonly apiMappingSelectionExpression?: string;

  /**
   * @schema UpdateDomainNameResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema UpdateDomainNameResponse#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: DomainNameConfiguration[];

  /**
   * @schema UpdateDomainNameResponse#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * @schema UpdateDomainNameResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema UpdateIntegrationRequest
 */
export interface UpdateIntegrationRequest {
  /**
   * @schema UpdateIntegrationRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateIntegrationRequest#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema UpdateIntegrationRequest#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema UpdateIntegrationRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema UpdateIntegrationRequest#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema UpdateIntegrationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateIntegrationRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema UpdateIntegrationRequest#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema UpdateIntegrationRequest#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema UpdateIntegrationRequest#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema UpdateIntegrationRequest#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema UpdateIntegrationRequest#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema UpdateIntegrationRequest#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema UpdateIntegrationRequest#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema UpdateIntegrationRequest#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema UpdateIntegrationRequest#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema UpdateIntegrationRequest#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema UpdateIntegrationRequest#TlsConfig
   */
  readonly tlsConfig?: TlsConfigInput;

}

/**
 * @schema UpdateIntegrationResult
 */
export interface UpdateIntegrationResult {
  /**
   * @schema UpdateIntegrationResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema UpdateIntegrationResult#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema UpdateIntegrationResult#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema UpdateIntegrationResult#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema UpdateIntegrationResult#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema UpdateIntegrationResult#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateIntegrationResult#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema UpdateIntegrationResult#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema UpdateIntegrationResult#IntegrationResponseSelectionExpression
   */
  readonly integrationResponseSelectionExpression?: string;

  /**
   * @schema UpdateIntegrationResult#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema UpdateIntegrationResult#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema UpdateIntegrationResult#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema UpdateIntegrationResult#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema UpdateIntegrationResult#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema UpdateIntegrationResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema UpdateIntegrationResult#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema UpdateIntegrationResult#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema UpdateIntegrationResult#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema UpdateIntegrationResult#TlsConfig
   */
  readonly tlsConfig?: TlsConfig;

}

/**
 * @schema UpdateIntegrationResponseRequest
 */
export interface UpdateIntegrationResponseRequest {
  /**
   * @schema UpdateIntegrationResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateIntegrationResponseRequest#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema UpdateIntegrationResponseRequest#IntegrationId
   */
  readonly integrationId: string;

  /**
   * @schema UpdateIntegrationResponseRequest#IntegrationResponseId
   */
  readonly integrationResponseId: string;

  /**
   * @schema UpdateIntegrationResponseRequest#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema UpdateIntegrationResponseRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema UpdateIntegrationResponseRequest#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema UpdateIntegrationResponseRequest#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * @schema UpdateIntegrationResponseResponse
 */
export interface UpdateIntegrationResponseResponse {
  /**
   * @schema UpdateIntegrationResponseResponse#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema UpdateIntegrationResponseResponse#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

  /**
   * @schema UpdateIntegrationResponseResponse#IntegrationResponseKey
   */
  readonly integrationResponseKey?: string;

  /**
   * @schema UpdateIntegrationResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema UpdateIntegrationResponseResponse#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema UpdateIntegrationResponseResponse#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * @schema UpdateModelRequest
 */
export interface UpdateModelRequest {
  /**
   * @schema UpdateModelRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateModelRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema UpdateModelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateModelRequest#ModelId
   */
  readonly modelId: string;

  /**
   * @schema UpdateModelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateModelRequest#Schema
   */
  readonly schema?: string;

}

/**
 * @schema UpdateModelResponse
 */
export interface UpdateModelResponse {
  /**
   * @schema UpdateModelResponse#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema UpdateModelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateModelResponse#ModelId
   */
  readonly modelId?: string;

  /**
   * @schema UpdateModelResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateModelResponse#Schema
   */
  readonly schema?: string;

}

/**
 * @schema UpdateRouteRequest
 */
export interface UpdateRouteRequest {
  /**
   * @schema UpdateRouteRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateRouteRequest#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema UpdateRouteRequest#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema UpdateRouteRequest#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema UpdateRouteRequest#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema UpdateRouteRequest#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema UpdateRouteRequest#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema UpdateRouteRequest#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema UpdateRouteRequest#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema UpdateRouteRequest#RouteId
   */
  readonly routeId: string;

  /**
   * @schema UpdateRouteRequest#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema UpdateRouteRequest#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema UpdateRouteRequest#Target
   */
  readonly target?: string;

}

/**
 * @schema UpdateRouteResult
 */
export interface UpdateRouteResult {
  /**
   * @schema UpdateRouteResult#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema UpdateRouteResult#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema UpdateRouteResult#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema UpdateRouteResult#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema UpdateRouteResult#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema UpdateRouteResult#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema UpdateRouteResult#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema UpdateRouteResult#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema UpdateRouteResult#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema UpdateRouteResult#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema UpdateRouteResult#RouteKey
   */
  readonly routeKey?: string;

  /**
   * @schema UpdateRouteResult#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema UpdateRouteResult#Target
   */
  readonly target?: string;

}

/**
 * @schema UpdateRouteResponseRequest
 */
export interface UpdateRouteResponseRequest {
  /**
   * @schema UpdateRouteResponseRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateRouteResponseRequest#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema UpdateRouteResponseRequest#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema UpdateRouteResponseRequest#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema UpdateRouteResponseRequest#RouteId
   */
  readonly routeId: string;

  /**
   * @schema UpdateRouteResponseRequest#RouteResponseId
   */
  readonly routeResponseId: string;

  /**
   * @schema UpdateRouteResponseRequest#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * @schema UpdateRouteResponseResponse
 */
export interface UpdateRouteResponseResponse {
  /**
   * @schema UpdateRouteResponseResponse#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema UpdateRouteResponseResponse#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema UpdateRouteResponseResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema UpdateRouteResponseResponse#RouteResponseId
   */
  readonly routeResponseId?: string;

  /**
   * @schema UpdateRouteResponseResponse#RouteResponseKey
   */
  readonly routeResponseKey?: string;

}

/**
 * @schema UpdateStageRequest
 */
export interface UpdateStageRequest {
  /**
   * @schema UpdateStageRequest#AccessLogSettings
   */
  readonly accessLogSettings?: AccessLogSettings;

  /**
   * @schema UpdateStageRequest#ApiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateStageRequest#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema UpdateStageRequest#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema UpdateStageRequest#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: RouteSettings;

  /**
   * @schema UpdateStageRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema UpdateStageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateStageRequest#RouteSettings
   */
  readonly routeSettings?: { [key: string]: RouteSettings };

  /**
   * @schema UpdateStageRequest#StageName
   */
  readonly stageName: string;

  /**
   * @schema UpdateStageRequest#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

}

/**
 * @schema UpdateStageResponse
 */
export interface UpdateStageResponse {
  /**
   * @schema UpdateStageResponse#AccessLogSettings
   */
  readonly accessLogSettings?: AccessLogSettings;

  /**
   * @schema UpdateStageResponse#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema UpdateStageResponse#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema UpdateStageResponse#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema UpdateStageResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema UpdateStageResponse#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: RouteSettings;

  /**
   * @schema UpdateStageResponse#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema UpdateStageResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateStageResponse#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema UpdateStageResponse#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema UpdateStageResponse#RouteSettings
   */
  readonly routeSettings?: { [key: string]: RouteSettings };

  /**
   * @schema UpdateStageResponse#StageName
   */
  readonly stageName?: string;

  /**
   * @schema UpdateStageResponse#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema UpdateStageResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema UpdateVpcLinkRequest
 */
export interface UpdateVpcLinkRequest {
  /**
   * @schema UpdateVpcLinkRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateVpcLinkRequest#VpcLinkId
   */
  readonly vpcLinkId: string;

}

/**
 * @schema UpdateVpcLinkResponse
 */
export interface UpdateVpcLinkResponse {
  /**
   * @schema UpdateVpcLinkResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema UpdateVpcLinkResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateVpcLinkResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema UpdateVpcLinkResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema UpdateVpcLinkResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema UpdateVpcLinkResponse#VpcLinkId
   */
  readonly vpcLinkId?: string;

  /**
   * @schema UpdateVpcLinkResponse#VpcLinkStatus
   */
  readonly vpcLinkStatus?: string;

  /**
   * @schema UpdateVpcLinkResponse#VpcLinkStatusMessage
   */
  readonly vpcLinkStatusMessage?: string;

  /**
   * @schema UpdateVpcLinkResponse#VpcLinkVersion
   */
  readonly vpcLinkVersion?: string;

}

/**
 * @schema Cors
 */
export interface Cors {
  /**
   * @schema Cors#AllowCredentials
   */
  readonly allowCredentials?: boolean;

  /**
   * @schema Cors#AllowHeaders
   */
  readonly allowHeaders?: string[];

  /**
   * @schema Cors#AllowMethods
   */
  readonly allowMethods?: string[];

  /**
   * @schema Cors#AllowOrigins
   */
  readonly allowOrigins?: string[];

  /**
   * @schema Cors#ExposeHeaders
   */
  readonly exposeHeaders?: string[];

  /**
   * @schema Cors#MaxAge
   */
  readonly maxAge?: number;

}

/**
 * @schema JwtConfiguration
 */
export interface JwtConfiguration {
  /**
   * @schema JwtConfiguration#Audience
   */
  readonly audience?: string[];

  /**
   * @schema JwtConfiguration#Issuer
   */
  readonly issuer?: string;

}

/**
 * @schema DomainNameConfiguration
 */
export interface DomainNameConfiguration {
  /**
   * @schema DomainNameConfiguration#ApiGatewayDomainName
   */
  readonly apiGatewayDomainName?: string;

  /**
   * @schema DomainNameConfiguration#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema DomainNameConfiguration#CertificateName
   */
  readonly certificateName?: string;

  /**
   * @schema DomainNameConfiguration#CertificateUploadDate
   */
  readonly certificateUploadDate?: string;

  /**
   * @schema DomainNameConfiguration#DomainNameStatus
   */
  readonly domainNameStatus?: string;

  /**
   * @schema DomainNameConfiguration#DomainNameStatusMessage
   */
  readonly domainNameStatusMessage?: string;

  /**
   * @schema DomainNameConfiguration#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DomainNameConfiguration#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema DomainNameConfiguration#SecurityPolicy
   */
  readonly securityPolicy?: string;

}

/**
 * @schema MutualTlsAuthenticationInput
 */
export interface MutualTlsAuthenticationInput {
  /**
   * @schema MutualTlsAuthenticationInput#TruststoreUri
   */
  readonly truststoreUri?: string;

  /**
   * @schema MutualTlsAuthenticationInput#TruststoreVersion
   */
  readonly truststoreVersion?: string;

}

/**
 * @schema MutualTlsAuthentication
 */
export interface MutualTlsAuthentication {
  /**
   * @schema MutualTlsAuthentication#TruststoreUri
   */
  readonly truststoreUri?: string;

  /**
   * @schema MutualTlsAuthentication#TruststoreVersion
   */
  readonly truststoreVersion?: string;

  /**
   * @schema MutualTlsAuthentication#TruststoreWarnings
   */
  readonly truststoreWarnings?: string[];

}

/**
 * @schema TlsConfigInput
 */
export interface TlsConfigInput {
  /**
   * @schema TlsConfigInput#ServerNameToVerify
   */
  readonly serverNameToVerify?: string;

}

/**
 * @schema TlsConfig
 */
export interface TlsConfig {
  /**
   * @schema TlsConfig#ServerNameToVerify
   */
  readonly serverNameToVerify?: string;

}

/**
 * @schema ParameterConstraints
 */
export interface ParameterConstraints {
  /**
   * @schema ParameterConstraints#Required
   */
  readonly required?: boolean;

}

/**
 * @schema AccessLogSettings
 */
export interface AccessLogSettings {
  /**
   * @schema AccessLogSettings#DestinationArn
   */
  readonly destinationArn?: string;

  /**
   * @schema AccessLogSettings#Format
   */
  readonly format?: string;

}

/**
 * @schema RouteSettings
 */
export interface RouteSettings {
  /**
   * @schema RouteSettings#DataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema RouteSettings#DetailedMetricsEnabled
   */
  readonly detailedMetricsEnabled?: boolean;

  /**
   * @schema RouteSettings#LoggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema RouteSettings#ThrottlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema RouteSettings#ThrottlingRateLimit
   */
  readonly throttlingRateLimit?: number;

}

/**
 * @schema ApiMapping
 */
export interface ApiMapping {
  /**
   * @schema ApiMapping#ApiId
   */
  readonly apiId: string;

  /**
   * @schema ApiMapping#ApiMappingId
   */
  readonly apiMappingId?: string;

  /**
   * @schema ApiMapping#ApiMappingKey
   */
  readonly apiMappingKey?: string;

  /**
   * @schema ApiMapping#Stage
   */
  readonly stage: string;

}

/**
 * @schema Api
 */
export interface Api {
  /**
   * @schema Api#ApiEndpoint
   */
  readonly apiEndpoint?: string;

  /**
   * @schema Api#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema Api#ApiId
   */
  readonly apiId?: string;

  /**
   * @schema Api#ApiKeySelectionExpression
   */
  readonly apiKeySelectionExpression?: string;

  /**
   * @schema Api#CorsConfiguration
   */
  readonly corsConfiguration?: Cors;

  /**
   * @schema Api#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema Api#Description
   */
  readonly description?: string;

  /**
   * @schema Api#DisableSchemaValidation
   */
  readonly disableSchemaValidation?: boolean;

  /**
   * @schema Api#DisableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

  /**
   * @schema Api#ImportInfo
   */
  readonly importInfo?: string[];

  /**
   * @schema Api#Name
   */
  readonly name: string;

  /**
   * @schema Api#ProtocolType
   */
  readonly protocolType: string;

  /**
   * @schema Api#RouteSelectionExpression
   */
  readonly routeSelectionExpression: string;

  /**
   * @schema Api#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Api#Version
   */
  readonly version?: string;

  /**
   * @schema Api#Warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema Authorizer
 */
export interface Authorizer {
  /**
   * @schema Authorizer#AuthorizerCredentialsArn
   */
  readonly authorizerCredentialsArn?: string;

  /**
   * @schema Authorizer#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema Authorizer#AuthorizerPayloadFormatVersion
   */
  readonly authorizerPayloadFormatVersion?: string;

  /**
   * @schema Authorizer#AuthorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema Authorizer#AuthorizerType
   */
  readonly authorizerType?: string;

  /**
   * @schema Authorizer#AuthorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema Authorizer#EnableSimpleResponses
   */
  readonly enableSimpleResponses?: boolean;

  /**
   * @schema Authorizer#IdentitySource
   */
  readonly identitySource?: string[];

  /**
   * @schema Authorizer#IdentityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema Authorizer#JwtConfiguration
   */
  readonly jwtConfiguration?: JwtConfiguration;

  /**
   * @schema Authorizer#Name
   */
  readonly name: string;

}

/**
 * @schema Deployment
 */
export interface Deployment {
  /**
   * @schema Deployment#AutoDeployed
   */
  readonly autoDeployed?: boolean;

  /**
   * @schema Deployment#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema Deployment#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema Deployment#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema Deployment#DeploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema Deployment#Description
   */
  readonly description?: string;

}

/**
 * @schema DomainName
 */
export interface DomainName {
  /**
   * @schema DomainName#ApiMappingSelectionExpression
   */
  readonly apiMappingSelectionExpression?: string;

  /**
   * @schema DomainName#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DomainName#DomainNameConfigurations
   */
  readonly domainNameConfigurations?: DomainNameConfiguration[];

  /**
   * @schema DomainName#MutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * @schema DomainName#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IntegrationResponse
 */
export interface IntegrationResponse {
  /**
   * @schema IntegrationResponse#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema IntegrationResponse#IntegrationResponseId
   */
  readonly integrationResponseId?: string;

  /**
   * @schema IntegrationResponse#IntegrationResponseKey
   */
  readonly integrationResponseKey: string;

  /**
   * @schema IntegrationResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema IntegrationResponse#ResponseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema IntegrationResponse#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

}

/**
 * @schema Integration
 */
export interface Integration {
  /**
   * @schema Integration#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema Integration#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema Integration#ConnectionType
   */
  readonly connectionType?: string;

  /**
   * @schema Integration#ContentHandlingStrategy
   */
  readonly contentHandlingStrategy?: string;

  /**
   * @schema Integration#CredentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema Integration#Description
   */
  readonly description?: string;

  /**
   * @schema Integration#IntegrationId
   */
  readonly integrationId?: string;

  /**
   * @schema Integration#IntegrationMethod
   */
  readonly integrationMethod?: string;

  /**
   * @schema Integration#IntegrationResponseSelectionExpression
   */
  readonly integrationResponseSelectionExpression?: string;

  /**
   * @schema Integration#IntegrationSubtype
   */
  readonly integrationSubtype?: string;

  /**
   * @schema Integration#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema Integration#IntegrationUri
   */
  readonly integrationUri?: string;

  /**
   * @schema Integration#PassthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema Integration#PayloadFormatVersion
   */
  readonly payloadFormatVersion?: string;

  /**
   * @schema Integration#RequestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema Integration#RequestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema Integration#TemplateSelectionExpression
   */
  readonly templateSelectionExpression?: string;

  /**
   * @schema Integration#TimeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema Integration#TlsConfig
   */
  readonly tlsConfig?: TlsConfig;

}

/**
 * @schema Model
 */
export interface Model {
  /**
   * @schema Model#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema Model#Description
   */
  readonly description?: string;

  /**
   * @schema Model#ModelId
   */
  readonly modelId?: string;

  /**
   * @schema Model#Name
   */
  readonly name: string;

  /**
   * @schema Model#Schema
   */
  readonly schema?: string;

}

/**
 * @schema RouteResponse
 */
export interface RouteResponse {
  /**
   * @schema RouteResponse#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema RouteResponse#ResponseModels
   */
  readonly responseModels?: { [key: string]: string };

  /**
   * @schema RouteResponse#ResponseParameters
   */
  readonly responseParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema RouteResponse#RouteResponseId
   */
  readonly routeResponseId?: string;

  /**
   * @schema RouteResponse#RouteResponseKey
   */
  readonly routeResponseKey: string;

}

/**
 * @schema Route
 */
export interface Route {
  /**
   * @schema Route#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema Route#ApiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema Route#AuthorizationScopes
   */
  readonly authorizationScopes?: string[];

  /**
   * @schema Route#AuthorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema Route#AuthorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema Route#ModelSelectionExpression
   */
  readonly modelSelectionExpression?: string;

  /**
   * @schema Route#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema Route#RequestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema Route#RequestParameters
   */
  readonly requestParameters?: { [key: string]: ParameterConstraints };

  /**
   * @schema Route#RouteId
   */
  readonly routeId?: string;

  /**
   * @schema Route#RouteKey
   */
  readonly routeKey: string;

  /**
   * @schema Route#RouteResponseSelectionExpression
   */
  readonly routeResponseSelectionExpression?: string;

  /**
   * @schema Route#Target
   */
  readonly target?: string;

}

/**
 * @schema Stage
 */
export interface Stage {
  /**
   * @schema Stage#AccessLogSettings
   */
  readonly accessLogSettings?: AccessLogSettings;

  /**
   * @schema Stage#ApiGatewayManaged
   */
  readonly apiGatewayManaged?: boolean;

  /**
   * @schema Stage#AutoDeploy
   */
  readonly autoDeploy?: boolean;

  /**
   * @schema Stage#ClientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema Stage#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema Stage#DefaultRouteSettings
   */
  readonly defaultRouteSettings?: RouteSettings;

  /**
   * @schema Stage#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema Stage#Description
   */
  readonly description?: string;

  /**
   * @schema Stage#LastDeploymentStatusMessage
   */
  readonly lastDeploymentStatusMessage?: string;

  /**
   * @schema Stage#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema Stage#RouteSettings
   */
  readonly routeSettings?: { [key: string]: RouteSettings };

  /**
   * @schema Stage#StageName
   */
  readonly stageName: string;

  /**
   * @schema Stage#StageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema Stage#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema VpcLink
 */
export interface VpcLink {
  /**
   * @schema VpcLink#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema VpcLink#Name
   */
  readonly name: string;

  /**
   * @schema VpcLink#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema VpcLink#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema VpcLink#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema VpcLink#VpcLinkId
   */
  readonly vpcLinkId: string;

  /**
   * @schema VpcLink#VpcLinkStatus
   */
  readonly vpcLinkStatus?: string;

  /**
   * @schema VpcLink#VpcLinkStatusMessage
   */
  readonly vpcLinkStatusMessage?: string;

  /**
   * @schema VpcLink#VpcLinkVersion
   */
  readonly vpcLinkVersion?: string;

}
