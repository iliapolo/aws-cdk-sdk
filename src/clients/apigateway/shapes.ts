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
  readonly providerARNs?: string[];

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
  readonly providerARNs?: string[];

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
 * @schema ApiGatewayDeleteApiKeyRequest
 */
export interface ApiGatewayDeleteApiKeyRequest {
  /**
   * @schema ApiGatewayDeleteApiKeyRequest#apiKey
   */
  readonly apiKey: string;

}

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
 * @schema ApiGatewayDeleteClientCertificateRequest
 */
export interface ApiGatewayDeleteClientCertificateRequest {
  /**
   * @schema ApiGatewayDeleteClientCertificateRequest#clientCertificateId
   */
  readonly clientCertificateId: string;

}

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
 * @schema ApiGatewayDeleteDomainNameRequest
 */
export interface ApiGatewayDeleteDomainNameRequest {
  /**
   * @schema ApiGatewayDeleteDomainNameRequest#domainName
   */
  readonly domainName: string;

}

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
 * @schema ApiGatewayDeleteRestApiRequest
 */
export interface ApiGatewayDeleteRestApiRequest {
  /**
   * @schema ApiGatewayDeleteRestApiRequest#restApiId
   */
  readonly restApiId: string;

}

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
 * @schema ApiGatewayDeleteUsagePlanRequest
 */
export interface ApiGatewayDeleteUsagePlanRequest {
  /**
   * @schema ApiGatewayDeleteUsagePlanRequest#usagePlanId
   */
  readonly usagePlanId: string;

}

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
 * @schema ApiGatewayDeleteVpcLinkRequest
 */
export interface ApiGatewayDeleteVpcLinkRequest {
  /**
   * @schema ApiGatewayDeleteVpcLinkRequest#vpcLinkId
   */
  readonly vpcLinkId: string;

}

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
 * @schema ApiGatewayGetAccountRequest
 */
export interface ApiGatewayGetAccountRequest {
}

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
 * @schema ApiGatewayGetClientCertificateRequest
 */
export interface ApiGatewayGetClientCertificateRequest {
  /**
   * @schema ApiGatewayGetClientCertificateRequest#clientCertificateId
   */
  readonly clientCertificateId: string;

}

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
 * @schema ApiGatewayGetDomainNameRequest
 */
export interface ApiGatewayGetDomainNameRequest {
  /**
   * @schema ApiGatewayGetDomainNameRequest#domainName
   */
  readonly domainName: string;

}

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
 * @schema ApiGatewayTemplate
 */
export interface ApiGatewayTemplate {
  /**
   * @schema ApiGatewayTemplate#value
   */
  readonly value?: string;

}

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
 * @schema ApiGatewayGetRestApiRequest
 */
export interface ApiGatewayGetRestApiRequest {
  /**
   * @schema ApiGatewayGetRestApiRequest#restApiId
   */
  readonly restApiId: string;

}

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
 * @schema ApiGatewayGetSdkTypeRequest
 */
export interface ApiGatewayGetSdkTypeRequest {
  /**
   * @schema ApiGatewayGetSdkTypeRequest#id
   */
  readonly id: string;

}

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
 * @schema ApiGatewayStages
 */
export interface ApiGatewayStages {
  /**
   * @schema ApiGatewayStages#item
   */
  readonly item?: ApiGatewayStage[];

}

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
 * @schema ApiGatewayTags
 */
export interface ApiGatewayTags {
  /**
   * @schema ApiGatewayTags#tags
   */
  readonly tags?: { [key: string]: string };

}

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
 * @schema ApiGatewayGetUsagePlanRequest
 */
export interface ApiGatewayGetUsagePlanRequest {
  /**
   * @schema ApiGatewayGetUsagePlanRequest#usagePlanId
   */
  readonly usagePlanId: string;

}

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
 * @schema ApiGatewayGetVpcLinkRequest
 */
export interface ApiGatewayGetVpcLinkRequest {
  /**
   * @schema ApiGatewayGetVpcLinkRequest#vpcLinkId
   */
  readonly vpcLinkId: string;

}

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
 * @schema ApiGatewayUpdateAccountRequest
 */
export interface ApiGatewayUpdateAccountRequest {
  /**
   * @schema ApiGatewayUpdateAccountRequest#patchOperations
   */
  readonly patchOperations?: ApiGatewayPatchOperation[];

}

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
 * @schema ApiGatewayTlsConfig
 */
export interface ApiGatewayTlsConfig {
  /**
   * @schema ApiGatewayTlsConfig#insecureSkipVerification
   */
  readonly insecureSkipVerification?: boolean;

}

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
