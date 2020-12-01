/**
 * @schema CreateApiKeyRequest
 */
export interface CreateApiKeyRequest {
  /**
   * @schema CreateApiKeyRequest#name
   */
  readonly name?: string;

  /**
   * @schema CreateApiKeyRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateApiKeyRequest#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CreateApiKeyRequest#generateDistinctId
   */
  readonly generateDistinctId?: boolean;

  /**
   * @schema CreateApiKeyRequest#value
   */
  readonly value?: string;

  /**
   * @schema CreateApiKeyRequest#stageKeys
   */
  readonly stageKeys?: StageKey[];

  /**
   * @schema CreateApiKeyRequest#customerId
   */
  readonly customerId?: string;

  /**
   * @schema CreateApiKeyRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ApiKey
 */
export interface ApiKey {
  /**
   * @schema ApiKey#id
   */
  readonly id?: string;

  /**
   * @schema ApiKey#value
   */
  readonly value?: string;

  /**
   * @schema ApiKey#name
   */
  readonly name?: string;

  /**
   * @schema ApiKey#customerId
   */
  readonly customerId?: string;

  /**
   * @schema ApiKey#description
   */
  readonly description?: string;

  /**
   * @schema ApiKey#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApiKey#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema ApiKey#lastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema ApiKey#stageKeys
   */
  readonly stageKeys?: string[];

  /**
   * @schema ApiKey#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateAuthorizerRequest
 */
export interface CreateAuthorizerRequest {
  /**
   * @schema CreateAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema CreateAuthorizerRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateAuthorizerRequest#type
   */
  readonly type: string;

  /**
   * @schema CreateAuthorizerRequest#providerARNs
   */
  readonly providerARNs?: string[];

  /**
   * @schema CreateAuthorizerRequest#authType
   */
  readonly authType?: string;

  /**
   * @schema CreateAuthorizerRequest#authorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema CreateAuthorizerRequest#authorizerCredentials
   */
  readonly authorizerCredentials?: string;

  /**
   * @schema CreateAuthorizerRequest#identitySource
   */
  readonly identitySource?: string;

  /**
   * @schema CreateAuthorizerRequest#identityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema CreateAuthorizerRequest#authorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

}

/**
 * @schema Authorizer
 */
export interface Authorizer {
  /**
   * @schema Authorizer#id
   */
  readonly id?: string;

  /**
   * @schema Authorizer#name
   */
  readonly name?: string;

  /**
   * @schema Authorizer#type
   */
  readonly type?: string;

  /**
   * @schema Authorizer#providerARNs
   */
  readonly providerARNs?: string[];

  /**
   * @schema Authorizer#authType
   */
  readonly authType?: string;

  /**
   * @schema Authorizer#authorizerUri
   */
  readonly authorizerUri?: string;

  /**
   * @schema Authorizer#authorizerCredentials
   */
  readonly authorizerCredentials?: string;

  /**
   * @schema Authorizer#identitySource
   */
  readonly identitySource?: string;

  /**
   * @schema Authorizer#identityValidationExpression
   */
  readonly identityValidationExpression?: string;

  /**
   * @schema Authorizer#authorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

}

/**
 * @schema CreateBasePathMappingRequest
 */
export interface CreateBasePathMappingRequest {
  /**
   * @schema CreateBasePathMappingRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema CreateBasePathMappingRequest#basePath
   */
  readonly basePath?: string;

  /**
   * @schema CreateBasePathMappingRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema CreateBasePathMappingRequest#stage
   */
  readonly stage?: string;

}

/**
 * @schema BasePathMapping
 */
export interface BasePathMapping {
  /**
   * @schema BasePathMapping#basePath
   */
  readonly basePath?: string;

  /**
   * @schema BasePathMapping#restApiId
   */
  readonly restApiId?: string;

  /**
   * @schema BasePathMapping#stage
   */
  readonly stage?: string;

}

/**
 * @schema CreateDeploymentRequest
 */
export interface CreateDeploymentRequest {
  /**
   * @schema CreateDeploymentRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema CreateDeploymentRequest#stageName
   */
  readonly stageName?: string;

  /**
   * @schema CreateDeploymentRequest#stageDescription
   */
  readonly stageDescription?: string;

  /**
   * @schema CreateDeploymentRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateDeploymentRequest#cacheClusterEnabled
   */
  readonly cacheClusterEnabled?: boolean;

  /**
   * @schema CreateDeploymentRequest#cacheClusterSize
   */
  readonly cacheClusterSize?: string;

  /**
   * @schema CreateDeploymentRequest#variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema CreateDeploymentRequest#canarySettings
   */
  readonly canarySettings?: DeploymentCanarySettings;

  /**
   * @schema CreateDeploymentRequest#tracingEnabled
   */
  readonly tracingEnabled?: boolean;

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
   * @schema Deployment#description
   */
  readonly description?: string;

  /**
   * @schema Deployment#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema Deployment#apiSummary
   */
  readonly apiSummary?: { [key: string]: { [key: string]: MethodSnapshot } };

}

/**
 * @schema CreateDocumentationPartRequest
 */
export interface CreateDocumentationPartRequest {
  /**
   * @schema CreateDocumentationPartRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema CreateDocumentationPartRequest#location
   */
  readonly location: DocumentationPartLocation;

  /**
   * @schema CreateDocumentationPartRequest#properties
   */
  readonly properties: string;

}

/**
 * @schema DocumentationPart
 */
export interface DocumentationPart {
  /**
   * @schema DocumentationPart#id
   */
  readonly id?: string;

  /**
   * @schema DocumentationPart#location
   */
  readonly location?: DocumentationPartLocation;

  /**
   * @schema DocumentationPart#properties
   */
  readonly properties?: string;

}

/**
 * @schema CreateDocumentationVersionRequest
 */
export interface CreateDocumentationVersionRequest {
  /**
   * @schema CreateDocumentationVersionRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema CreateDocumentationVersionRequest#documentationVersion
   */
  readonly documentationVersion: string;

  /**
   * @schema CreateDocumentationVersionRequest#stageName
   */
  readonly stageName?: string;

  /**
   * @schema CreateDocumentationVersionRequest#description
   */
  readonly description?: string;

}

/**
 * @schema DocumentationVersion
 */
export interface DocumentationVersion {
  /**
   * @schema DocumentationVersion#version
   */
  readonly version?: string;

  /**
   * @schema DocumentationVersion#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema DocumentationVersion#description
   */
  readonly description?: string;

}

/**
 * @schema CreateDomainNameRequest
 */
export interface CreateDomainNameRequest {
  /**
   * @schema CreateDomainNameRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema CreateDomainNameRequest#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema CreateDomainNameRequest#certificateBody
   */
  readonly certificateBody?: string;

  /**
   * @schema CreateDomainNameRequest#certificatePrivateKey
   */
  readonly certificatePrivateKey?: string;

  /**
   * @schema CreateDomainNameRequest#certificateChain
   */
  readonly certificateChain?: string;

  /**
   * @schema CreateDomainNameRequest#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CreateDomainNameRequest#regionalCertificateName
   */
  readonly regionalCertificateName?: string;

  /**
   * @schema CreateDomainNameRequest#regionalCertificateArn
   */
  readonly regionalCertificateArn?: string;

  /**
   * @schema CreateDomainNameRequest#endpointConfiguration
   */
  readonly endpointConfiguration?: EndpointConfiguration;

  /**
   * @schema CreateDomainNameRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateDomainNameRequest#securityPolicy
   */
  readonly securityPolicy?: string;

  /**
   * @schema CreateDomainNameRequest#mutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: MutualTlsAuthenticationInput;

}

/**
 * @schema DomainName
 */
export interface DomainName {
  /**
   * @schema DomainName#domainName
   */
  readonly domainName?: string;

  /**
   * @schema DomainName#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema DomainName#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema DomainName#certificateUploadDate
   */
  readonly certificateUploadDate?: string;

  /**
   * @schema DomainName#regionalDomainName
   */
  readonly regionalDomainName?: string;

  /**
   * @schema DomainName#regionalHostedZoneId
   */
  readonly regionalHostedZoneId?: string;

  /**
   * @schema DomainName#regionalCertificateName
   */
  readonly regionalCertificateName?: string;

  /**
   * @schema DomainName#regionalCertificateArn
   */
  readonly regionalCertificateArn?: string;

  /**
   * @schema DomainName#distributionDomainName
   */
  readonly distributionDomainName?: string;

  /**
   * @schema DomainName#distributionHostedZoneId
   */
  readonly distributionHostedZoneId?: string;

  /**
   * @schema DomainName#endpointConfiguration
   */
  readonly endpointConfiguration?: EndpointConfiguration;

  /**
   * @schema DomainName#domainNameStatus
   */
  readonly domainNameStatus?: string;

  /**
   * @schema DomainName#domainNameStatusMessage
   */
  readonly domainNameStatusMessage?: string;

  /**
   * @schema DomainName#securityPolicy
   */
  readonly securityPolicy?: string;

  /**
   * @schema DomainName#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DomainName#mutualTlsAuthentication
   */
  readonly mutualTlsAuthentication?: MutualTlsAuthentication;

}

/**
 * @schema CreateModelRequest
 */
export interface CreateModelRequest {
  /**
   * @schema CreateModelRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema CreateModelRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateModelRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateModelRequest#schema
   */
  readonly schema?: string;

  /**
   * @schema CreateModelRequest#contentType
   */
  readonly contentType: string;

}

/**
 * @schema Model
 */
export interface Model {
  /**
   * @schema Model#id
   */
  readonly id?: string;

  /**
   * @schema Model#name
   */
  readonly name?: string;

  /**
   * @schema Model#description
   */
  readonly description?: string;

  /**
   * @schema Model#schema
   */
  readonly schema?: string;

  /**
   * @schema Model#contentType
   */
  readonly contentType?: string;

}

/**
 * @schema CreateRequestValidatorRequest
 */
export interface CreateRequestValidatorRequest {
  /**
   * @schema CreateRequestValidatorRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema CreateRequestValidatorRequest#name
   */
  readonly name?: string;

  /**
   * @schema CreateRequestValidatorRequest#validateRequestBody
   */
  readonly validateRequestBody?: boolean;

  /**
   * @schema CreateRequestValidatorRequest#validateRequestParameters
   */
  readonly validateRequestParameters?: boolean;

}

/**
 * @schema RequestValidator
 */
export interface RequestValidator {
  /**
   * @schema RequestValidator#id
   */
  readonly id?: string;

  /**
   * @schema RequestValidator#name
   */
  readonly name?: string;

  /**
   * @schema RequestValidator#validateRequestBody
   */
  readonly validateRequestBody?: boolean;

  /**
   * @schema RequestValidator#validateRequestParameters
   */
  readonly validateRequestParameters?: boolean;

}

/**
 * @schema CreateResourceRequest
 */
export interface CreateResourceRequest {
  /**
   * @schema CreateResourceRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema CreateResourceRequest#parentId
   */
  readonly parentId: string;

  /**
   * @schema CreateResourceRequest#pathPart
   */
  readonly pathPart: string;

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#id
   */
  readonly id?: string;

  /**
   * @schema Resource#parentId
   */
  readonly parentId?: string;

  /**
   * @schema Resource#pathPart
   */
  readonly pathPart?: string;

  /**
   * @schema Resource#path
   */
  readonly path?: string;

  /**
   * @schema Resource#resourceMethods
   */
  readonly resourceMethods?: { [key: string]: Method };

}

/**
 * @schema CreateRestApiRequest
 */
export interface CreateRestApiRequest {
  /**
   * @schema CreateRestApiRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateRestApiRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateRestApiRequest#version
   */
  readonly version?: string;

  /**
   * @schema CreateRestApiRequest#cloneFrom
   */
  readonly cloneFrom?: string;

  /**
   * @schema CreateRestApiRequest#binaryMediaTypes
   */
  readonly binaryMediaTypes?: string[];

  /**
   * @schema CreateRestApiRequest#minimumCompressionSize
   */
  readonly minimumCompressionSize?: number;

  /**
   * @schema CreateRestApiRequest#apiKeySource
   */
  readonly apiKeySource?: string;

  /**
   * @schema CreateRestApiRequest#endpointConfiguration
   */
  readonly endpointConfiguration?: EndpointConfiguration;

  /**
   * @schema CreateRestApiRequest#policy
   */
  readonly policy?: string;

  /**
   * @schema CreateRestApiRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateRestApiRequest#disableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

}

/**
 * @schema RestApi
 */
export interface RestApi {
  /**
   * @schema RestApi#id
   */
  readonly id?: string;

  /**
   * @schema RestApi#name
   */
  readonly name?: string;

  /**
   * @schema RestApi#description
   */
  readonly description?: string;

  /**
   * @schema RestApi#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema RestApi#version
   */
  readonly version?: string;

  /**
   * @schema RestApi#warnings
   */
  readonly warnings?: string[];

  /**
   * @schema RestApi#binaryMediaTypes
   */
  readonly binaryMediaTypes?: string[];

  /**
   * @schema RestApi#minimumCompressionSize
   */
  readonly minimumCompressionSize?: number;

  /**
   * @schema RestApi#apiKeySource
   */
  readonly apiKeySource?: string;

  /**
   * @schema RestApi#endpointConfiguration
   */
  readonly endpointConfiguration?: EndpointConfiguration;

  /**
   * @schema RestApi#policy
   */
  readonly policy?: string;

  /**
   * @schema RestApi#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema RestApi#disableExecuteApiEndpoint
   */
  readonly disableExecuteApiEndpoint?: boolean;

}

/**
 * @schema CreateStageRequest
 */
export interface CreateStageRequest {
  /**
   * @schema CreateStageRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema CreateStageRequest#stageName
   */
  readonly stageName: string;

  /**
   * @schema CreateStageRequest#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema CreateStageRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateStageRequest#cacheClusterEnabled
   */
  readonly cacheClusterEnabled?: boolean;

  /**
   * @schema CreateStageRequest#cacheClusterSize
   */
  readonly cacheClusterSize?: string;

  /**
   * @schema CreateStageRequest#variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema CreateStageRequest#documentationVersion
   */
  readonly documentationVersion?: string;

  /**
   * @schema CreateStageRequest#canarySettings
   */
  readonly canarySettings?: CanarySettings;

  /**
   * @schema CreateStageRequest#tracingEnabled
   */
  readonly tracingEnabled?: boolean;

  /**
   * @schema CreateStageRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Stage
 */
export interface Stage {
  /**
   * @schema Stage#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema Stage#clientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema Stage#stageName
   */
  readonly stageName?: string;

  /**
   * @schema Stage#description
   */
  readonly description?: string;

  /**
   * @schema Stage#cacheClusterEnabled
   */
  readonly cacheClusterEnabled?: boolean;

  /**
   * @schema Stage#cacheClusterSize
   */
  readonly cacheClusterSize?: string;

  /**
   * @schema Stage#cacheClusterStatus
   */
  readonly cacheClusterStatus?: string;

  /**
   * @schema Stage#methodSettings
   */
  readonly methodSettings?: { [key: string]: MethodSetting };

  /**
   * @schema Stage#variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema Stage#documentationVersion
   */
  readonly documentationVersion?: string;

  /**
   * @schema Stage#accessLogSettings
   */
  readonly accessLogSettings?: AccessLogSettings;

  /**
   * @schema Stage#canarySettings
   */
  readonly canarySettings?: CanarySettings;

  /**
   * @schema Stage#tracingEnabled
   */
  readonly tracingEnabled?: boolean;

  /**
   * @schema Stage#webAclArn
   */
  readonly webAclArn?: string;

  /**
   * @schema Stage#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Stage#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema Stage#lastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

}

/**
 * @schema CreateUsagePlanRequest
 */
export interface CreateUsagePlanRequest {
  /**
   * @schema CreateUsagePlanRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateUsagePlanRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateUsagePlanRequest#apiStages
   */
  readonly apiStages?: ApiStage[];

  /**
   * @schema CreateUsagePlanRequest#throttle
   */
  readonly throttle?: ThrottleSettings;

  /**
   * @schema CreateUsagePlanRequest#quota
   */
  readonly quota?: QuotaSettings;

  /**
   * @schema CreateUsagePlanRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema UsagePlan
 */
export interface UsagePlan {
  /**
   * @schema UsagePlan#id
   */
  readonly id?: string;

  /**
   * @schema UsagePlan#name
   */
  readonly name?: string;

  /**
   * @schema UsagePlan#description
   */
  readonly description?: string;

  /**
   * @schema UsagePlan#apiStages
   */
  readonly apiStages?: ApiStage[];

  /**
   * @schema UsagePlan#throttle
   */
  readonly throttle?: ThrottleSettings;

  /**
   * @schema UsagePlan#quota
   */
  readonly quota?: QuotaSettings;

  /**
   * @schema UsagePlan#productCode
   */
  readonly productCode?: string;

  /**
   * @schema UsagePlan#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateUsagePlanKeyRequest
 */
export interface CreateUsagePlanKeyRequest {
  /**
   * @schema CreateUsagePlanKeyRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema CreateUsagePlanKeyRequest#keyId
   */
  readonly keyId: string;

  /**
   * @schema CreateUsagePlanKeyRequest#keyType
   */
  readonly keyType: string;

}

/**
 * @schema UsagePlanKey
 */
export interface UsagePlanKey {
  /**
   * @schema UsagePlanKey#id
   */
  readonly id?: string;

  /**
   * @schema UsagePlanKey#type
   */
  readonly type?: string;

  /**
   * @schema UsagePlanKey#value
   */
  readonly value?: string;

  /**
   * @schema UsagePlanKey#name
   */
  readonly name?: string;

}

/**
 * @schema CreateVpcLinkRequest
 */
export interface CreateVpcLinkRequest {
  /**
   * @schema CreateVpcLinkRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateVpcLinkRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateVpcLinkRequest#targetArns
   */
  readonly targetArns: string[];

  /**
   * @schema CreateVpcLinkRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema VpcLink
 */
export interface VpcLink {
  /**
   * @schema VpcLink#id
   */
  readonly id?: string;

  /**
   * @schema VpcLink#name
   */
  readonly name?: string;

  /**
   * @schema VpcLink#description
   */
  readonly description?: string;

  /**
   * @schema VpcLink#targetArns
   */
  readonly targetArns?: string[];

  /**
   * @schema VpcLink#status
   */
  readonly status?: string;

  /**
   * @schema VpcLink#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema VpcLink#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DeleteApiKeyRequest
 */
export interface DeleteApiKeyRequest {
  /**
   * @schema DeleteApiKeyRequest#apiKey
   */
  readonly apiKey: string;

}

/**
 * @schema DeleteAuthorizerRequest
 */
export interface DeleteAuthorizerRequest {
  /**
   * @schema DeleteAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteAuthorizerRequest#authorizerId
   */
  readonly authorizerId: string;

}

/**
 * @schema DeleteBasePathMappingRequest
 */
export interface DeleteBasePathMappingRequest {
  /**
   * @schema DeleteBasePathMappingRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema DeleteBasePathMappingRequest#basePath
   */
  readonly basePath: string;

}

/**
 * @schema DeleteClientCertificateRequest
 */
export interface DeleteClientCertificateRequest {
  /**
   * @schema DeleteClientCertificateRequest#clientCertificateId
   */
  readonly clientCertificateId: string;

}

/**
 * @schema DeleteDeploymentRequest
 */
export interface DeleteDeploymentRequest {
  /**
   * @schema DeleteDeploymentRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteDeploymentRequest#deploymentId
   */
  readonly deploymentId: string;

}

/**
 * @schema DeleteDocumentationPartRequest
 */
export interface DeleteDocumentationPartRequest {
  /**
   * @schema DeleteDocumentationPartRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteDocumentationPartRequest#documentationPartId
   */
  readonly documentationPartId: string;

}

/**
 * @schema DeleteDocumentationVersionRequest
 */
export interface DeleteDocumentationVersionRequest {
  /**
   * @schema DeleteDocumentationVersionRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteDocumentationVersionRequest#documentationVersion
   */
  readonly documentationVersion: string;

}

/**
 * @schema DeleteDomainNameRequest
 */
export interface DeleteDomainNameRequest {
  /**
   * @schema DeleteDomainNameRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema DeleteGatewayResponseRequest
 */
export interface DeleteGatewayResponseRequest {
  /**
   * @schema DeleteGatewayResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteGatewayResponseRequest#responseType
   */
  readonly responseType: string;

}

/**
 * @schema DeleteIntegrationRequest
 */
export interface DeleteIntegrationRequest {
  /**
   * @schema DeleteIntegrationRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteIntegrationRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteIntegrationRequest#httpMethod
   */
  readonly httpMethod: string;

}

/**
 * @schema DeleteIntegrationResponseRequest
 */
export interface DeleteIntegrationResponseRequest {
  /**
   * @schema DeleteIntegrationResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteIntegrationResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteIntegrationResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema DeleteIntegrationResponseRequest#statusCode
   */
  readonly statusCode: string;

}

/**
 * @schema DeleteMethodRequest
 */
export interface DeleteMethodRequest {
  /**
   * @schema DeleteMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteMethodRequest#httpMethod
   */
  readonly httpMethod: string;

}

/**
 * @schema DeleteMethodResponseRequest
 */
export interface DeleteMethodResponseRequest {
  /**
   * @schema DeleteMethodResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteMethodResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteMethodResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema DeleteMethodResponseRequest#statusCode
   */
  readonly statusCode: string;

}

/**
 * @schema DeleteModelRequest
 */
export interface DeleteModelRequest {
  /**
   * @schema DeleteModelRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteModelRequest#modelName
   */
  readonly modelName: string;

}

/**
 * @schema DeleteRequestValidatorRequest
 */
export interface DeleteRequestValidatorRequest {
  /**
   * @schema DeleteRequestValidatorRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteRequestValidatorRequest#requestValidatorId
   */
  readonly requestValidatorId: string;

}

/**
 * @schema DeleteResourceRequest
 */
export interface DeleteResourceRequest {
  /**
   * @schema DeleteResourceRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteResourceRequest#resourceId
   */
  readonly resourceId: string;

}

/**
 * @schema DeleteRestApiRequest
 */
export interface DeleteRestApiRequest {
  /**
   * @schema DeleteRestApiRequest#restApiId
   */
  readonly restApiId: string;

}

/**
 * @schema DeleteStageRequest
 */
export interface DeleteStageRequest {
  /**
   * @schema DeleteStageRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema DeleteStageRequest#stageName
   */
  readonly stageName: string;

}

/**
 * @schema DeleteUsagePlanRequest
 */
export interface DeleteUsagePlanRequest {
  /**
   * @schema DeleteUsagePlanRequest#usagePlanId
   */
  readonly usagePlanId: string;

}

/**
 * @schema DeleteUsagePlanKeyRequest
 */
export interface DeleteUsagePlanKeyRequest {
  /**
   * @schema DeleteUsagePlanKeyRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema DeleteUsagePlanKeyRequest#keyId
   */
  readonly keyId: string;

}

/**
 * @schema DeleteVpcLinkRequest
 */
export interface DeleteVpcLinkRequest {
  /**
   * @schema DeleteVpcLinkRequest#vpcLinkId
   */
  readonly vpcLinkId: string;

}

/**
 * @schema FlushStageAuthorizersCacheRequest
 */
export interface FlushStageAuthorizersCacheRequest {
  /**
   * @schema FlushStageAuthorizersCacheRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema FlushStageAuthorizersCacheRequest#stageName
   */
  readonly stageName: string;

}

/**
 * @schema FlushStageCacheRequest
 */
export interface FlushStageCacheRequest {
  /**
   * @schema FlushStageCacheRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema FlushStageCacheRequest#stageName
   */
  readonly stageName: string;

}

/**
 * @schema GenerateClientCertificateRequest
 */
export interface GenerateClientCertificateRequest {
  /**
   * @schema GenerateClientCertificateRequest#description
   */
  readonly description?: string;

  /**
   * @schema GenerateClientCertificateRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ClientCertificate
 */
export interface ClientCertificate {
  /**
   * @schema ClientCertificate#clientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema ClientCertificate#description
   */
  readonly description?: string;

  /**
   * @schema ClientCertificate#pemEncodedCertificate
   */
  readonly pemEncodedCertificate?: string;

  /**
   * @schema ClientCertificate#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema ClientCertificate#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema ClientCertificate#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetAccountRequest
 */
export interface GetAccountRequest {
}

/**
 * @schema Account
 */
export interface Account {
  /**
   * @schema Account#cloudwatchRoleArn
   */
  readonly cloudwatchRoleArn?: string;

  /**
   * @schema Account#throttleSettings
   */
  readonly throttleSettings?: ThrottleSettings;

  /**
   * @schema Account#features
   */
  readonly features?: string[];

  /**
   * @schema Account#apiKeyVersion
   */
  readonly apiKeyVersion?: string;

}

/**
 * @schema GetApiKeyRequest
 */
export interface GetApiKeyRequest {
  /**
   * @schema GetApiKeyRequest#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema GetApiKeyRequest#includeValue
   */
  readonly includeValue?: boolean;

}

/**
 * @schema GetApiKeysRequest
 */
export interface GetApiKeysRequest {
  /**
   * @schema GetApiKeysRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetApiKeysRequest#limit
   */
  readonly limit?: number;

  /**
   * @schema GetApiKeysRequest#nameQuery
   */
  readonly nameQuery?: string;

  /**
   * @schema GetApiKeysRequest#customerId
   */
  readonly customerId?: string;

  /**
   * @schema GetApiKeysRequest#includeValues
   */
  readonly includeValues?: boolean;

}

/**
 * @schema ApiKeys
 */
export interface ApiKeys {
  /**
   * @schema ApiKeys#warnings
   */
  readonly warnings?: string[];

  /**
   * @schema ApiKeys#position
   */
  readonly position?: string;

  /**
   * @schema ApiKeys#items
   */
  readonly items?: ApiKey[];

}

/**
 * @schema GetAuthorizerRequest
 */
export interface GetAuthorizerRequest {
  /**
   * @schema GetAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetAuthorizerRequest#authorizerId
   */
  readonly authorizerId: string;

}

/**
 * @schema GetAuthorizersRequest
 */
export interface GetAuthorizersRequest {
  /**
   * @schema GetAuthorizersRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetAuthorizersRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetAuthorizersRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema Authorizers
 */
export interface Authorizers {
  /**
   * @schema Authorizers#position
   */
  readonly position?: string;

  /**
   * @schema Authorizers#items
   */
  readonly items?: Authorizer[];

}

/**
 * @schema GetBasePathMappingRequest
 */
export interface GetBasePathMappingRequest {
  /**
   * @schema GetBasePathMappingRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema GetBasePathMappingRequest#basePath
   */
  readonly basePath: string;

}

/**
 * @schema GetBasePathMappingsRequest
 */
export interface GetBasePathMappingsRequest {
  /**
   * @schema GetBasePathMappingsRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema GetBasePathMappingsRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetBasePathMappingsRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema BasePathMappings
 */
export interface BasePathMappings {
  /**
   * @schema BasePathMappings#position
   */
  readonly position?: string;

  /**
   * @schema BasePathMappings#items
   */
  readonly items?: BasePathMapping[];

}

/**
 * @schema GetClientCertificateRequest
 */
export interface GetClientCertificateRequest {
  /**
   * @schema GetClientCertificateRequest#clientCertificateId
   */
  readonly clientCertificateId: string;

}

/**
 * @schema GetClientCertificatesRequest
 */
export interface GetClientCertificatesRequest {
  /**
   * @schema GetClientCertificatesRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetClientCertificatesRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema ClientCertificates
 */
export interface ClientCertificates {
  /**
   * @schema ClientCertificates#position
   */
  readonly position?: string;

  /**
   * @schema ClientCertificates#items
   */
  readonly items?: ClientCertificate[];

}

/**
 * @schema GetDeploymentRequest
 */
export interface GetDeploymentRequest {
  /**
   * @schema GetDeploymentRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetDeploymentRequest#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema GetDeploymentRequest#embed
   */
  readonly embed?: string[];

}

/**
 * @schema GetDeploymentsRequest
 */
export interface GetDeploymentsRequest {
  /**
   * @schema GetDeploymentsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetDeploymentsRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetDeploymentsRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema Deployments
 */
export interface Deployments {
  /**
   * @schema Deployments#position
   */
  readonly position?: string;

  /**
   * @schema Deployments#items
   */
  readonly items?: Deployment[];

}

/**
 * @schema GetDocumentationPartRequest
 */
export interface GetDocumentationPartRequest {
  /**
   * @schema GetDocumentationPartRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetDocumentationPartRequest#documentationPartId
   */
  readonly documentationPartId: string;

}

/**
 * @schema GetDocumentationPartsRequest
 */
export interface GetDocumentationPartsRequest {
  /**
   * @schema GetDocumentationPartsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetDocumentationPartsRequest#type
   */
  readonly type?: string;

  /**
   * @schema GetDocumentationPartsRequest#nameQuery
   */
  readonly nameQuery?: string;

  /**
   * @schema GetDocumentationPartsRequest#path
   */
  readonly path?: string;

  /**
   * @schema GetDocumentationPartsRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetDocumentationPartsRequest#limit
   */
  readonly limit?: number;

  /**
   * @schema GetDocumentationPartsRequest#locationStatus
   */
  readonly locationStatus?: string;

}

/**
 * @schema DocumentationParts
 */
export interface DocumentationParts {
  /**
   * @schema DocumentationParts#position
   */
  readonly position?: string;

  /**
   * @schema DocumentationParts#items
   */
  readonly items?: DocumentationPart[];

}

/**
 * @schema GetDocumentationVersionRequest
 */
export interface GetDocumentationVersionRequest {
  /**
   * @schema GetDocumentationVersionRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetDocumentationVersionRequest#documentationVersion
   */
  readonly documentationVersion: string;

}

/**
 * @schema GetDocumentationVersionsRequest
 */
export interface GetDocumentationVersionsRequest {
  /**
   * @schema GetDocumentationVersionsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetDocumentationVersionsRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetDocumentationVersionsRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema DocumentationVersions
 */
export interface DocumentationVersions {
  /**
   * @schema DocumentationVersions#position
   */
  readonly position?: string;

  /**
   * @schema DocumentationVersions#items
   */
  readonly items?: DocumentationVersion[];

}

/**
 * @schema GetDomainNameRequest
 */
export interface GetDomainNameRequest {
  /**
   * @schema GetDomainNameRequest#domainName
   */
  readonly domainName: string;

}

/**
 * @schema GetDomainNamesRequest
 */
export interface GetDomainNamesRequest {
  /**
   * @schema GetDomainNamesRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetDomainNamesRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema DomainNames
 */
export interface DomainNames {
  /**
   * @schema DomainNames#position
   */
  readonly position?: string;

  /**
   * @schema DomainNames#items
   */
  readonly items?: DomainName[];

}

/**
 * @schema GetExportRequest
 */
export interface GetExportRequest {
  /**
   * @schema GetExportRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetExportRequest#stageName
   */
  readonly stageName: string;

  /**
   * @schema GetExportRequest#exportType
   */
  readonly exportType: string;

  /**
   * @schema GetExportRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema GetExportRequest#accepts
   */
  readonly accepts?: string;

}

/**
 * @schema ExportResponse
 */
export interface ExportResponse {
  /**
   * @schema ExportResponse#contentType
   */
  readonly contentType?: string;

  /**
   * @schema ExportResponse#contentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema ExportResponse#body
   */
  readonly body?: any;

}

/**
 * @schema GetGatewayResponseRequest
 */
export interface GetGatewayResponseRequest {
  /**
   * @schema GetGatewayResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetGatewayResponseRequest#responseType
   */
  readonly responseType: string;

}

/**
 * @schema GatewayResponse
 */
export interface GatewayResponse {
  /**
   * @schema GatewayResponse#responseType
   */
  readonly responseType?: string;

  /**
   * @schema GatewayResponse#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema GatewayResponse#responseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema GatewayResponse#responseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema GatewayResponse#defaultResponse
   */
  readonly defaultResponse?: boolean;

}

/**
 * @schema GetGatewayResponsesRequest
 */
export interface GetGatewayResponsesRequest {
  /**
   * @schema GetGatewayResponsesRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetGatewayResponsesRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetGatewayResponsesRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema GatewayResponses
 */
export interface GatewayResponses {
  /**
   * @schema GatewayResponses#position
   */
  readonly position?: string;

  /**
   * @schema GatewayResponses#items
   */
  readonly items?: GatewayResponse[];

}

/**
 * @schema GetIntegrationRequest
 */
export interface GetIntegrationRequest {
  /**
   * @schema GetIntegrationRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetIntegrationRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema GetIntegrationRequest#httpMethod
   */
  readonly httpMethod: string;

}

/**
 * @schema Integration
 */
export interface Integration {
  /**
   * @schema Integration#type
   */
  readonly type?: string;

  /**
   * @schema Integration#httpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema Integration#uri
   */
  readonly uri?: string;

  /**
   * @schema Integration#connectionType
   */
  readonly connectionType?: string;

  /**
   * @schema Integration#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema Integration#credentials
   */
  readonly credentials?: string;

  /**
   * @schema Integration#requestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema Integration#requestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema Integration#passthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema Integration#contentHandling
   */
  readonly contentHandling?: string;

  /**
   * @schema Integration#timeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema Integration#cacheNamespace
   */
  readonly cacheNamespace?: string;

  /**
   * @schema Integration#cacheKeyParameters
   */
  readonly cacheKeyParameters?: string[];

  /**
   * @schema Integration#integrationResponses
   */
  readonly integrationResponses?: { [key: string]: IntegrationResponse };

  /**
   * @schema Integration#tlsConfig
   */
  readonly tlsConfig?: TlsConfig;

}

/**
 * @schema GetIntegrationResponseRequest
 */
export interface GetIntegrationResponseRequest {
  /**
   * @schema GetIntegrationResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetIntegrationResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema GetIntegrationResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema GetIntegrationResponseRequest#statusCode
   */
  readonly statusCode: string;

}

/**
 * @schema IntegrationResponse
 */
export interface IntegrationResponse {
  /**
   * @schema IntegrationResponse#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema IntegrationResponse#selectionPattern
   */
  readonly selectionPattern?: string;

  /**
   * @schema IntegrationResponse#responseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema IntegrationResponse#responseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema IntegrationResponse#contentHandling
   */
  readonly contentHandling?: string;

}

/**
 * @schema GetMethodRequest
 */
export interface GetMethodRequest {
  /**
   * @schema GetMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema GetMethodRequest#httpMethod
   */
  readonly httpMethod: string;

}

/**
 * @schema Method
 */
export interface Method {
  /**
   * @schema Method#httpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema Method#authorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema Method#authorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema Method#apiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema Method#requestValidatorId
   */
  readonly requestValidatorId?: string;

  /**
   * @schema Method#operationName
   */
  readonly operationName?: string;

  /**
   * @schema Method#requestParameters
   */
  readonly requestParameters?: { [key: string]: boolean };

  /**
   * @schema Method#requestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema Method#methodResponses
   */
  readonly methodResponses?: { [key: string]: MethodResponse };

  /**
   * @schema Method#methodIntegration
   */
  readonly methodIntegration?: Integration;

  /**
   * @schema Method#authorizationScopes
   */
  readonly authorizationScopes?: string[];

}

/**
 * @schema GetMethodResponseRequest
 */
export interface GetMethodResponseRequest {
  /**
   * @schema GetMethodResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetMethodResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema GetMethodResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema GetMethodResponseRequest#statusCode
   */
  readonly statusCode: string;

}

/**
 * @schema MethodResponse
 */
export interface MethodResponse {
  /**
   * @schema MethodResponse#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema MethodResponse#responseParameters
   */
  readonly responseParameters?: { [key: string]: boolean };

  /**
   * @schema MethodResponse#responseModels
   */
  readonly responseModels?: { [key: string]: string };

}

/**
 * @schema GetModelRequest
 */
export interface GetModelRequest {
  /**
   * @schema GetModelRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetModelRequest#modelName
   */
  readonly modelName: string;

  /**
   * @schema GetModelRequest#flatten
   */
  readonly flatten?: boolean;

}

/**
 * @schema GetModelTemplateRequest
 */
export interface GetModelTemplateRequest {
  /**
   * @schema GetModelTemplateRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetModelTemplateRequest#modelName
   */
  readonly modelName: string;

}

/**
 * @schema Template
 */
export interface Template {
  /**
   * @schema Template#value
   */
  readonly value?: string;

}

/**
 * @schema GetModelsRequest
 */
export interface GetModelsRequest {
  /**
   * @schema GetModelsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetModelsRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetModelsRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema Models
 */
export interface Models {
  /**
   * @schema Models#position
   */
  readonly position?: string;

  /**
   * @schema Models#items
   */
  readonly items?: Model[];

}

/**
 * @schema GetRequestValidatorRequest
 */
export interface GetRequestValidatorRequest {
  /**
   * @schema GetRequestValidatorRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetRequestValidatorRequest#requestValidatorId
   */
  readonly requestValidatorId: string;

}

/**
 * @schema GetRequestValidatorsRequest
 */
export interface GetRequestValidatorsRequest {
  /**
   * @schema GetRequestValidatorsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetRequestValidatorsRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetRequestValidatorsRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema RequestValidators
 */
export interface RequestValidators {
  /**
   * @schema RequestValidators#position
   */
  readonly position?: string;

  /**
   * @schema RequestValidators#items
   */
  readonly items?: RequestValidator[];

}

/**
 * @schema GetResourceRequest
 */
export interface GetResourceRequest {
  /**
   * @schema GetResourceRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetResourceRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema GetResourceRequest#embed
   */
  readonly embed?: string[];

}

/**
 * @schema GetResourcesRequest
 */
export interface GetResourcesRequest {
  /**
   * @schema GetResourcesRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetResourcesRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetResourcesRequest#limit
   */
  readonly limit?: number;

  /**
   * @schema GetResourcesRequest#embed
   */
  readonly embed?: string[];

}

/**
 * @schema Resources
 */
export interface Resources {
  /**
   * @schema Resources#position
   */
  readonly position?: string;

  /**
   * @schema Resources#items
   */
  readonly items?: Resource[];

}

/**
 * @schema GetRestApiRequest
 */
export interface GetRestApiRequest {
  /**
   * @schema GetRestApiRequest#restApiId
   */
  readonly restApiId: string;

}

/**
 * @schema GetRestApisRequest
 */
export interface GetRestApisRequest {
  /**
   * @schema GetRestApisRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetRestApisRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema RestApis
 */
export interface RestApis {
  /**
   * @schema RestApis#position
   */
  readonly position?: string;

  /**
   * @schema RestApis#items
   */
  readonly items?: RestApi[];

}

/**
 * @schema GetSdkRequest
 */
export interface GetSdkRequest {
  /**
   * @schema GetSdkRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetSdkRequest#stageName
   */
  readonly stageName: string;

  /**
   * @schema GetSdkRequest#sdkType
   */
  readonly sdkType: string;

  /**
   * @schema GetSdkRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema SdkResponse
 */
export interface SdkResponse {
  /**
   * @schema SdkResponse#contentType
   */
  readonly contentType?: string;

  /**
   * @schema SdkResponse#contentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema SdkResponse#body
   */
  readonly body?: any;

}

/**
 * @schema GetSdkTypeRequest
 */
export interface GetSdkTypeRequest {
  /**
   * @schema GetSdkTypeRequest#id
   */
  readonly id: string;

}

/**
 * @schema SdkType
 */
export interface SdkType {
  /**
   * @schema SdkType#id
   */
  readonly id?: string;

  /**
   * @schema SdkType#friendlyName
   */
  readonly friendlyName?: string;

  /**
   * @schema SdkType#description
   */
  readonly description?: string;

  /**
   * @schema SdkType#configurationProperties
   */
  readonly configurationProperties?: SdkConfigurationProperty[];

}

/**
 * @schema GetSdkTypesRequest
 */
export interface GetSdkTypesRequest {
  /**
   * @schema GetSdkTypesRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetSdkTypesRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema SdkTypes
 */
export interface SdkTypes {
  /**
   * @schema SdkTypes#position
   */
  readonly position?: string;

  /**
   * @schema SdkTypes#items
   */
  readonly items?: SdkType[];

}

/**
 * @schema GetStageRequest
 */
export interface GetStageRequest {
  /**
   * @schema GetStageRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetStageRequest#stageName
   */
  readonly stageName: string;

}

/**
 * @schema GetStagesRequest
 */
export interface GetStagesRequest {
  /**
   * @schema GetStagesRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema GetStagesRequest#deploymentId
   */
  readonly deploymentId?: string;

}

/**
 * @schema Stages
 */
export interface Stages {
  /**
   * @schema Stages#item
   */
  readonly item?: Stage[];

}

/**
 * @schema GetTagsRequest
 */
export interface GetTagsRequest {
  /**
   * @schema GetTagsRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GetTagsRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetTagsRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema Tags
 */
export interface Tags {
  /**
   * @schema Tags#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetUsageRequest
 */
export interface GetUsageRequest {
  /**
   * @schema GetUsageRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema GetUsageRequest#keyId
   */
  readonly keyId?: string;

  /**
   * @schema GetUsageRequest#startDate
   */
  readonly startDate: string;

  /**
   * @schema GetUsageRequest#endDate
   */
  readonly endDate: string;

  /**
   * @schema GetUsageRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetUsageRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema Usage
 */
export interface Usage {
  /**
   * @schema Usage#usagePlanId
   */
  readonly usagePlanId?: string;

  /**
   * @schema Usage#startDate
   */
  readonly startDate?: string;

  /**
   * @schema Usage#endDate
   */
  readonly endDate?: string;

  /**
   * @schema Usage#position
   */
  readonly position?: string;

  /**
   * @schema Usage#items
   */
  readonly items?: { [key: string]: number[][] };

}

/**
 * @schema GetUsagePlanRequest
 */
export interface GetUsagePlanRequest {
  /**
   * @schema GetUsagePlanRequest#usagePlanId
   */
  readonly usagePlanId: string;

}

/**
 * @schema GetUsagePlanKeyRequest
 */
export interface GetUsagePlanKeyRequest {
  /**
   * @schema GetUsagePlanKeyRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema GetUsagePlanKeyRequest#keyId
   */
  readonly keyId: string;

}

/**
 * @schema GetUsagePlanKeysRequest
 */
export interface GetUsagePlanKeysRequest {
  /**
   * @schema GetUsagePlanKeysRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema GetUsagePlanKeysRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetUsagePlanKeysRequest#limit
   */
  readonly limit?: number;

  /**
   * @schema GetUsagePlanKeysRequest#nameQuery
   */
  readonly nameQuery?: string;

}

/**
 * @schema UsagePlanKeys
 */
export interface UsagePlanKeys {
  /**
   * @schema UsagePlanKeys#position
   */
  readonly position?: string;

  /**
   * @schema UsagePlanKeys#items
   */
  readonly items?: UsagePlanKey[];

}

/**
 * @schema GetUsagePlansRequest
 */
export interface GetUsagePlansRequest {
  /**
   * @schema GetUsagePlansRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetUsagePlansRequest#keyId
   */
  readonly keyId?: string;

  /**
   * @schema GetUsagePlansRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema UsagePlans
 */
export interface UsagePlans {
  /**
   * @schema UsagePlans#position
   */
  readonly position?: string;

  /**
   * @schema UsagePlans#items
   */
  readonly items?: UsagePlan[];

}

/**
 * @schema GetVpcLinkRequest
 */
export interface GetVpcLinkRequest {
  /**
   * @schema GetVpcLinkRequest#vpcLinkId
   */
  readonly vpcLinkId: string;

}

/**
 * @schema GetVpcLinksRequest
 */
export interface GetVpcLinksRequest {
  /**
   * @schema GetVpcLinksRequest#position
   */
  readonly position?: string;

  /**
   * @schema GetVpcLinksRequest#limit
   */
  readonly limit?: number;

}

/**
 * @schema VpcLinks
 */
export interface VpcLinks {
  /**
   * @schema VpcLinks#position
   */
  readonly position?: string;

  /**
   * @schema VpcLinks#items
   */
  readonly items?: VpcLink[];

}

/**
 * @schema ImportApiKeysRequest
 */
export interface ImportApiKeysRequest {
  /**
   * @schema ImportApiKeysRequest#body
   */
  readonly body: any;

  /**
   * @schema ImportApiKeysRequest#format
   */
  readonly format: string;

  /**
   * @schema ImportApiKeysRequest#failOnWarnings
   */
  readonly failOnWarnings?: boolean;

}

/**
 * @schema ApiKeyIds
 */
export interface ApiKeyIds {
  /**
   * @schema ApiKeyIds#ids
   */
  readonly ids?: string[];

  /**
   * @schema ApiKeyIds#warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema ImportDocumentationPartsRequest
 */
export interface ImportDocumentationPartsRequest {
  /**
   * @schema ImportDocumentationPartsRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema ImportDocumentationPartsRequest#mode
   */
  readonly mode?: string;

  /**
   * @schema ImportDocumentationPartsRequest#failOnWarnings
   */
  readonly failOnWarnings?: boolean;

  /**
   * @schema ImportDocumentationPartsRequest#body
   */
  readonly body: any;

}

/**
 * @schema DocumentationPartIds
 */
export interface DocumentationPartIds {
  /**
   * @schema DocumentationPartIds#ids
   */
  readonly ids?: string[];

  /**
   * @schema DocumentationPartIds#warnings
   */
  readonly warnings?: string[];

}

/**
 * @schema ImportRestApiRequest
 */
export interface ImportRestApiRequest {
  /**
   * @schema ImportRestApiRequest#failOnWarnings
   */
  readonly failOnWarnings?: boolean;

  /**
   * @schema ImportRestApiRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema ImportRestApiRequest#body
   */
  readonly body: any;

}

/**
 * @schema PutGatewayResponseRequest
 */
export interface PutGatewayResponseRequest {
  /**
   * @schema PutGatewayResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema PutGatewayResponseRequest#responseType
   */
  readonly responseType: string;

  /**
   * @schema PutGatewayResponseRequest#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema PutGatewayResponseRequest#responseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema PutGatewayResponseRequest#responseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

}

/**
 * @schema PutIntegrationRequest
 */
export interface PutIntegrationRequest {
  /**
   * @schema PutIntegrationRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema PutIntegrationRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema PutIntegrationRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema PutIntegrationRequest#type
   */
  readonly type: string;

  /**
   * @schema PutIntegrationRequest#integrationHttpMethod
   */
  readonly integrationHttpMethod?: string;

  /**
   * @schema PutIntegrationRequest#uri
   */
  readonly uri?: string;

  /**
   * @schema PutIntegrationRequest#connectionType
   */
  readonly connectionType?: string;

  /**
   * @schema PutIntegrationRequest#connectionId
   */
  readonly connectionId?: string;

  /**
   * @schema PutIntegrationRequest#credentials
   */
  readonly credentials?: string;

  /**
   * @schema PutIntegrationRequest#requestParameters
   */
  readonly requestParameters?: { [key: string]: string };

  /**
   * @schema PutIntegrationRequest#requestTemplates
   */
  readonly requestTemplates?: { [key: string]: string };

  /**
   * @schema PutIntegrationRequest#passthroughBehavior
   */
  readonly passthroughBehavior?: string;

  /**
   * @schema PutIntegrationRequest#cacheNamespace
   */
  readonly cacheNamespace?: string;

  /**
   * @schema PutIntegrationRequest#cacheKeyParameters
   */
  readonly cacheKeyParameters?: string[];

  /**
   * @schema PutIntegrationRequest#contentHandling
   */
  readonly contentHandling?: string;

  /**
   * @schema PutIntegrationRequest#timeoutInMillis
   */
  readonly timeoutInMillis?: number;

  /**
   * @schema PutIntegrationRequest#tlsConfig
   */
  readonly tlsConfig?: TlsConfig;

}

/**
 * @schema PutIntegrationResponseRequest
 */
export interface PutIntegrationResponseRequest {
  /**
   * @schema PutIntegrationResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema PutIntegrationResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema PutIntegrationResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema PutIntegrationResponseRequest#statusCode
   */
  readonly statusCode: string;

  /**
   * @schema PutIntegrationResponseRequest#selectionPattern
   */
  readonly selectionPattern?: string;

  /**
   * @schema PutIntegrationResponseRequest#responseParameters
   */
  readonly responseParameters?: { [key: string]: string };

  /**
   * @schema PutIntegrationResponseRequest#responseTemplates
   */
  readonly responseTemplates?: { [key: string]: string };

  /**
   * @schema PutIntegrationResponseRequest#contentHandling
   */
  readonly contentHandling?: string;

}

/**
 * @schema PutMethodRequest
 */
export interface PutMethodRequest {
  /**
   * @schema PutMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema PutMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema PutMethodRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema PutMethodRequest#authorizationType
   */
  readonly authorizationType: string;

  /**
   * @schema PutMethodRequest#authorizerId
   */
  readonly authorizerId?: string;

  /**
   * @schema PutMethodRequest#apiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

  /**
   * @schema PutMethodRequest#operationName
   */
  readonly operationName?: string;

  /**
   * @schema PutMethodRequest#requestParameters
   */
  readonly requestParameters?: { [key: string]: boolean };

  /**
   * @schema PutMethodRequest#requestModels
   */
  readonly requestModels?: { [key: string]: string };

  /**
   * @schema PutMethodRequest#requestValidatorId
   */
  readonly requestValidatorId?: string;

  /**
   * @schema PutMethodRequest#authorizationScopes
   */
  readonly authorizationScopes?: string[];

}

/**
 * @schema PutMethodResponseRequest
 */
export interface PutMethodResponseRequest {
  /**
   * @schema PutMethodResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema PutMethodResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema PutMethodResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema PutMethodResponseRequest#statusCode
   */
  readonly statusCode: string;

  /**
   * @schema PutMethodResponseRequest#responseParameters
   */
  readonly responseParameters?: { [key: string]: boolean };

  /**
   * @schema PutMethodResponseRequest#responseModels
   */
  readonly responseModels?: { [key: string]: string };

}

/**
 * @schema PutRestApiRequest
 */
export interface PutRestApiRequest {
  /**
   * @schema PutRestApiRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema PutRestApiRequest#mode
   */
  readonly mode?: string;

  /**
   * @schema PutRestApiRequest#failOnWarnings
   */
  readonly failOnWarnings?: boolean;

  /**
   * @schema PutRestApiRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema PutRestApiRequest#body
   */
  readonly body: any;

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
  readonly tags: { [key: string]: string };

}

/**
 * @schema TestInvokeAuthorizerRequest
 */
export interface TestInvokeAuthorizerRequest {
  /**
   * @schema TestInvokeAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema TestInvokeAuthorizerRequest#authorizerId
   */
  readonly authorizerId: string;

  /**
   * @schema TestInvokeAuthorizerRequest#headers
   */
  readonly headers?: { [key: string]: string };

  /**
   * @schema TestInvokeAuthorizerRequest#multiValueHeaders
   */
  readonly multiValueHeaders?: { [key: string]: string[] };

  /**
   * @schema TestInvokeAuthorizerRequest#pathWithQueryString
   */
  readonly pathWithQueryString?: string;

  /**
   * @schema TestInvokeAuthorizerRequest#body
   */
  readonly body?: string;

  /**
   * @schema TestInvokeAuthorizerRequest#stageVariables
   */
  readonly stageVariables?: { [key: string]: string };

  /**
   * @schema TestInvokeAuthorizerRequest#additionalContext
   */
  readonly additionalContext?: { [key: string]: string };

}

/**
 * @schema TestInvokeAuthorizerResponse
 */
export interface TestInvokeAuthorizerResponse {
  /**
   * @schema TestInvokeAuthorizerResponse#clientStatus
   */
  readonly clientStatus?: number;

  /**
   * @schema TestInvokeAuthorizerResponse#log
   */
  readonly log?: string;

  /**
   * @schema TestInvokeAuthorizerResponse#latency
   */
  readonly latency?: number;

  /**
   * @schema TestInvokeAuthorizerResponse#principalId
   */
  readonly principalId?: string;

  /**
   * @schema TestInvokeAuthorizerResponse#policy
   */
  readonly policy?: string;

  /**
   * @schema TestInvokeAuthorizerResponse#authorization
   */
  readonly authorization?: { [key: string]: string[] };

  /**
   * @schema TestInvokeAuthorizerResponse#claims
   */
  readonly claims?: { [key: string]: string };

}

/**
 * @schema TestInvokeMethodRequest
 */
export interface TestInvokeMethodRequest {
  /**
   * @schema TestInvokeMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema TestInvokeMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema TestInvokeMethodRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema TestInvokeMethodRequest#pathWithQueryString
   */
  readonly pathWithQueryString?: string;

  /**
   * @schema TestInvokeMethodRequest#body
   */
  readonly body?: string;

  /**
   * @schema TestInvokeMethodRequest#headers
   */
  readonly headers?: { [key: string]: string };

  /**
   * @schema TestInvokeMethodRequest#multiValueHeaders
   */
  readonly multiValueHeaders?: { [key: string]: string[] };

  /**
   * @schema TestInvokeMethodRequest#clientCertificateId
   */
  readonly clientCertificateId?: string;

  /**
   * @schema TestInvokeMethodRequest#stageVariables
   */
  readonly stageVariables?: { [key: string]: string };

}

/**
 * @schema TestInvokeMethodResponse
 */
export interface TestInvokeMethodResponse {
  /**
   * @schema TestInvokeMethodResponse#status
   */
  readonly status?: number;

  /**
   * @schema TestInvokeMethodResponse#body
   */
  readonly body?: string;

  /**
   * @schema TestInvokeMethodResponse#headers
   */
  readonly headers?: { [key: string]: string };

  /**
   * @schema TestInvokeMethodResponse#multiValueHeaders
   */
  readonly multiValueHeaders?: { [key: string]: string[] };

  /**
   * @schema TestInvokeMethodResponse#log
   */
  readonly log?: string;

  /**
   * @schema TestInvokeMethodResponse#latency
   */
  readonly latency?: number;

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
 * @schema UpdateAccountRequest
 */
export interface UpdateAccountRequest {
  /**
   * @schema UpdateAccountRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateApiKeyRequest
 */
export interface UpdateApiKeyRequest {
  /**
   * @schema UpdateApiKeyRequest#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema UpdateApiKeyRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateAuthorizerRequest
 */
export interface UpdateAuthorizerRequest {
  /**
   * @schema UpdateAuthorizerRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateAuthorizerRequest#authorizerId
   */
  readonly authorizerId: string;

  /**
   * @schema UpdateAuthorizerRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateBasePathMappingRequest
 */
export interface UpdateBasePathMappingRequest {
  /**
   * @schema UpdateBasePathMappingRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateBasePathMappingRequest#basePath
   */
  readonly basePath: string;

  /**
   * @schema UpdateBasePathMappingRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateClientCertificateRequest
 */
export interface UpdateClientCertificateRequest {
  /**
   * @schema UpdateClientCertificateRequest#clientCertificateId
   */
  readonly clientCertificateId: string;

  /**
   * @schema UpdateClientCertificateRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateDeploymentRequest
 */
export interface UpdateDeploymentRequest {
  /**
   * @schema UpdateDeploymentRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateDeploymentRequest#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema UpdateDeploymentRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateDocumentationPartRequest
 */
export interface UpdateDocumentationPartRequest {
  /**
   * @schema UpdateDocumentationPartRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateDocumentationPartRequest#documentationPartId
   */
  readonly documentationPartId: string;

  /**
   * @schema UpdateDocumentationPartRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateDocumentationVersionRequest
 */
export interface UpdateDocumentationVersionRequest {
  /**
   * @schema UpdateDocumentationVersionRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateDocumentationVersionRequest#documentationVersion
   */
  readonly documentationVersion: string;

  /**
   * @schema UpdateDocumentationVersionRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateDomainNameRequest
 */
export interface UpdateDomainNameRequest {
  /**
   * @schema UpdateDomainNameRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateDomainNameRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateGatewayResponseRequest
 */
export interface UpdateGatewayResponseRequest {
  /**
   * @schema UpdateGatewayResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateGatewayResponseRequest#responseType
   */
  readonly responseType: string;

  /**
   * @schema UpdateGatewayResponseRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateIntegrationRequest
 */
export interface UpdateIntegrationRequest {
  /**
   * @schema UpdateIntegrationRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateIntegrationRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema UpdateIntegrationRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema UpdateIntegrationRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateIntegrationResponseRequest
 */
export interface UpdateIntegrationResponseRequest {
  /**
   * @schema UpdateIntegrationResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateIntegrationResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema UpdateIntegrationResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema UpdateIntegrationResponseRequest#statusCode
   */
  readonly statusCode: string;

  /**
   * @schema UpdateIntegrationResponseRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateMethodRequest
 */
export interface UpdateMethodRequest {
  /**
   * @schema UpdateMethodRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateMethodRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema UpdateMethodRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema UpdateMethodRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateMethodResponseRequest
 */
export interface UpdateMethodResponseRequest {
  /**
   * @schema UpdateMethodResponseRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateMethodResponseRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema UpdateMethodResponseRequest#httpMethod
   */
  readonly httpMethod: string;

  /**
   * @schema UpdateMethodResponseRequest#statusCode
   */
  readonly statusCode: string;

  /**
   * @schema UpdateMethodResponseRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateModelRequest
 */
export interface UpdateModelRequest {
  /**
   * @schema UpdateModelRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateModelRequest#modelName
   */
  readonly modelName: string;

  /**
   * @schema UpdateModelRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateRequestValidatorRequest
 */
export interface UpdateRequestValidatorRequest {
  /**
   * @schema UpdateRequestValidatorRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateRequestValidatorRequest#requestValidatorId
   */
  readonly requestValidatorId: string;

  /**
   * @schema UpdateRequestValidatorRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateResourceRequest
 */
export interface UpdateResourceRequest {
  /**
   * @schema UpdateResourceRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateResourceRequest#resourceId
   */
  readonly resourceId: string;

  /**
   * @schema UpdateResourceRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateRestApiRequest
 */
export interface UpdateRestApiRequest {
  /**
   * @schema UpdateRestApiRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateRestApiRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateStageRequest
 */
export interface UpdateStageRequest {
  /**
   * @schema UpdateStageRequest#restApiId
   */
  readonly restApiId: string;

  /**
   * @schema UpdateStageRequest#stageName
   */
  readonly stageName: string;

  /**
   * @schema UpdateStageRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateUsageRequest
 */
export interface UpdateUsageRequest {
  /**
   * @schema UpdateUsageRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema UpdateUsageRequest#keyId
   */
  readonly keyId: string;

  /**
   * @schema UpdateUsageRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateUsagePlanRequest
 */
export interface UpdateUsagePlanRequest {
  /**
   * @schema UpdateUsagePlanRequest#usagePlanId
   */
  readonly usagePlanId: string;

  /**
   * @schema UpdateUsagePlanRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema UpdateVpcLinkRequest
 */
export interface UpdateVpcLinkRequest {
  /**
   * @schema UpdateVpcLinkRequest#vpcLinkId
   */
  readonly vpcLinkId: string;

  /**
   * @schema UpdateVpcLinkRequest#patchOperations
   */
  readonly patchOperations?: PatchOperation[];

}

/**
 * @schema StageKey
 */
export interface StageKey {
  /**
   * @schema StageKey#restApiId
   */
  readonly restApiId?: string;

  /**
   * @schema StageKey#stageName
   */
  readonly stageName?: string;

}

/**
 * @schema DeploymentCanarySettings
 */
export interface DeploymentCanarySettings {
  /**
   * @schema DeploymentCanarySettings#percentTraffic
   */
  readonly percentTraffic?: number;

  /**
   * @schema DeploymentCanarySettings#stageVariableOverrides
   */
  readonly stageVariableOverrides?: { [key: string]: string };

  /**
   * @schema DeploymentCanarySettings#useStageCache
   */
  readonly useStageCache?: boolean;

}

/**
 * @schema MethodSnapshot
 */
export interface MethodSnapshot {
  /**
   * @schema MethodSnapshot#authorizationType
   */
  readonly authorizationType?: string;

  /**
   * @schema MethodSnapshot#apiKeyRequired
   */
  readonly apiKeyRequired?: boolean;

}

/**
 * @schema DocumentationPartLocation
 */
export interface DocumentationPartLocation {
  /**
   * @schema DocumentationPartLocation#type
   */
  readonly type: string;

  /**
   * @schema DocumentationPartLocation#path
   */
  readonly path?: string;

  /**
   * @schema DocumentationPartLocation#method
   */
  readonly method?: string;

  /**
   * @schema DocumentationPartLocation#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema DocumentationPartLocation#name
   */
  readonly name?: string;

}

/**
 * @schema EndpointConfiguration
 */
export interface EndpointConfiguration {
  /**
   * @schema EndpointConfiguration#types
   */
  readonly types?: string[];

  /**
   * @schema EndpointConfiguration#vpcEndpointIds
   */
  readonly vpcEndpointIds?: string[];

}

/**
 * @schema MutualTlsAuthenticationInput
 */
export interface MutualTlsAuthenticationInput {
  /**
   * @schema MutualTlsAuthenticationInput#truststoreUri
   */
  readonly truststoreUri?: string;

  /**
   * @schema MutualTlsAuthenticationInput#truststoreVersion
   */
  readonly truststoreVersion?: string;

}

/**
 * @schema MutualTlsAuthentication
 */
export interface MutualTlsAuthentication {
  /**
   * @schema MutualTlsAuthentication#truststoreUri
   */
  readonly truststoreUri?: string;

  /**
   * @schema MutualTlsAuthentication#truststoreVersion
   */
  readonly truststoreVersion?: string;

  /**
   * @schema MutualTlsAuthentication#truststoreWarnings
   */
  readonly truststoreWarnings?: string[];

}

/**
 * @schema CanarySettings
 */
export interface CanarySettings {
  /**
   * @schema CanarySettings#percentTraffic
   */
  readonly percentTraffic?: number;

  /**
   * @schema CanarySettings#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema CanarySettings#stageVariableOverrides
   */
  readonly stageVariableOverrides?: { [key: string]: string };

  /**
   * @schema CanarySettings#useStageCache
   */
  readonly useStageCache?: boolean;

}

/**
 * @schema MethodSetting
 */
export interface MethodSetting {
  /**
   * @schema MethodSetting#metricsEnabled
   */
  readonly metricsEnabled?: boolean;

  /**
   * @schema MethodSetting#loggingLevel
   */
  readonly loggingLevel?: string;

  /**
   * @schema MethodSetting#dataTraceEnabled
   */
  readonly dataTraceEnabled?: boolean;

  /**
   * @schema MethodSetting#throttlingBurstLimit
   */
  readonly throttlingBurstLimit?: number;

  /**
   * @schema MethodSetting#throttlingRateLimit
   */
  readonly throttlingRateLimit?: number;

  /**
   * @schema MethodSetting#cachingEnabled
   */
  readonly cachingEnabled?: boolean;

  /**
   * @schema MethodSetting#cacheTtlInSeconds
   */
  readonly cacheTtlInSeconds?: number;

  /**
   * @schema MethodSetting#cacheDataEncrypted
   */
  readonly cacheDataEncrypted?: boolean;

  /**
   * @schema MethodSetting#requireAuthorizationForCacheControl
   */
  readonly requireAuthorizationForCacheControl?: boolean;

  /**
   * @schema MethodSetting#unauthorizedCacheControlHeaderStrategy
   */
  readonly unauthorizedCacheControlHeaderStrategy?: string;

}

/**
 * @schema AccessLogSettings
 */
export interface AccessLogSettings {
  /**
   * @schema AccessLogSettings#format
   */
  readonly format?: string;

  /**
   * @schema AccessLogSettings#destinationArn
   */
  readonly destinationArn?: string;

}

/**
 * @schema ApiStage
 */
export interface ApiStage {
  /**
   * @schema ApiStage#apiId
   */
  readonly apiId?: string;

  /**
   * @schema ApiStage#stage
   */
  readonly stage?: string;

  /**
   * @schema ApiStage#throttle
   */
  readonly throttle?: { [key: string]: ThrottleSettings };

}

/**
 * @schema ThrottleSettings
 */
export interface ThrottleSettings {
  /**
   * @schema ThrottleSettings#burstLimit
   */
  readonly burstLimit?: number;

  /**
   * @schema ThrottleSettings#rateLimit
   */
  readonly rateLimit?: number;

}

/**
 * @schema QuotaSettings
 */
export interface QuotaSettings {
  /**
   * @schema QuotaSettings#limit
   */
  readonly limit?: number;

  /**
   * @schema QuotaSettings#offset
   */
  readonly offset?: number;

  /**
   * @schema QuotaSettings#period
   */
  readonly period?: string;

}

/**
 * @schema TlsConfig
 */
export interface TlsConfig {
  /**
   * @schema TlsConfig#insecureSkipVerification
   */
  readonly insecureSkipVerification?: boolean;

}

/**
 * @schema SdkConfigurationProperty
 */
export interface SdkConfigurationProperty {
  /**
   * @schema SdkConfigurationProperty#name
   */
  readonly name?: string;

  /**
   * @schema SdkConfigurationProperty#friendlyName
   */
  readonly friendlyName?: string;

  /**
   * @schema SdkConfigurationProperty#description
   */
  readonly description?: string;

  /**
   * @schema SdkConfigurationProperty#required
   */
  readonly required?: boolean;

  /**
   * @schema SdkConfigurationProperty#defaultValue
   */
  readonly defaultValue?: string;

}

/**
 * @schema PatchOperation
 */
export interface PatchOperation {
  /**
   * @schema PatchOperation#op
   */
  readonly op?: string;

  /**
   * @schema PatchOperation#path
   */
  readonly path?: string;

  /**
   * @schema PatchOperation#value
   */
  readonly value?: string;

  /**
   * @schema PatchOperation#from
   */
  readonly from?: string;

}
