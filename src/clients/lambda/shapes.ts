/**
 * @schema LambdaAddLayerVersionPermissionRequest
 */
export interface LambdaAddLayerVersionPermissionRequest {
  /**
   * @schema LambdaAddLayerVersionPermissionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#VersionNumber
   */
  readonly versionNumber: number;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#StatementId
   */
  readonly statementId: string;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#Action
   */
  readonly action: string;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#Principal
   */
  readonly principal: string;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaAddLayerVersionPermissionResponse
 */
export interface LambdaAddLayerVersionPermissionResponse {
  /**
   * @schema LambdaAddLayerVersionPermissionResponse#Statement
   */
  readonly statement?: string;

  /**
   * @schema LambdaAddLayerVersionPermissionResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaAddPermissionRequest
 */
export interface LambdaAddPermissionRequest {
  /**
   * @schema LambdaAddPermissionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaAddPermissionRequest#StatementId
   */
  readonly statementId: string;

  /**
   * @schema LambdaAddPermissionRequest#Action
   */
  readonly action: string;

  /**
   * @schema LambdaAddPermissionRequest#Principal
   */
  readonly principal: string;

  /**
   * @schema LambdaAddPermissionRequest#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema LambdaAddPermissionRequest#SourceAccount
   */
  readonly sourceAccount?: string;

  /**
   * @schema LambdaAddPermissionRequest#EventSourceToken
   */
  readonly eventSourceToken?: string;

  /**
   * @schema LambdaAddPermissionRequest#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema LambdaAddPermissionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaAddPermissionResponse
 */
export interface LambdaAddPermissionResponse {
  /**
   * @schema LambdaAddPermissionResponse#Statement
   */
  readonly statement?: string;

}

/**
 * @schema LambdaCreateAliasRequest
 */
export interface LambdaCreateAliasRequest {
  /**
   * @schema LambdaCreateAliasRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaCreateAliasRequest#Name
   */
  readonly name: string;

  /**
   * @schema LambdaCreateAliasRequest#FunctionVersion
   */
  readonly functionVersion: string;

  /**
   * @schema LambdaCreateAliasRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaCreateAliasRequest#RoutingConfig
   */
  readonly routingConfig?: LambdaAliasRoutingConfiguration;

}

/**
 * @schema LambdaAliasConfiguration
 */
export interface LambdaAliasConfiguration {
  /**
   * @schema LambdaAliasConfiguration#AliasArn
   */
  readonly aliasArn?: string;

  /**
   * @schema LambdaAliasConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema LambdaAliasConfiguration#FunctionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema LambdaAliasConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaAliasConfiguration#RoutingConfig
   */
  readonly routingConfig?: LambdaAliasRoutingConfiguration;

  /**
   * @schema LambdaAliasConfiguration#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaCreateCodeSigningConfigRequest
 */
export interface LambdaCreateCodeSigningConfigRequest {
  /**
   * @schema LambdaCreateCodeSigningConfigRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaCreateCodeSigningConfigRequest#AllowedPublishers
   */
  readonly allowedPublishers: LambdaAllowedPublishers;

  /**
   * @schema LambdaCreateCodeSigningConfigRequest#CodeSigningPolicies
   */
  readonly codeSigningPolicies?: LambdaCodeSigningPolicies;

}

/**
 * @schema LambdaCreateCodeSigningConfigResponse
 */
export interface LambdaCreateCodeSigningConfigResponse {
  /**
   * @schema LambdaCreateCodeSigningConfigResponse#CodeSigningConfig
   */
  readonly codeSigningConfig: LambdaCodeSigningConfig;

}

/**
 * @schema LambdaCreateEventSourceMappingRequest
 */
export interface LambdaCreateEventSourceMappingRequest {
  /**
   * @schema LambdaCreateEventSourceMappingRequest#EventSourceArn
   */
  readonly eventSourceArn: string;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#BatchSize
   */
  readonly batchSize?: number;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#MaximumBatchingWindowInSeconds
   */
  readonly maximumBatchingWindowInSeconds?: number;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#ParallelizationFactor
   */
  readonly parallelizationFactor?: number;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#StartingPosition
   */
  readonly startingPosition?: string;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#StartingPositionTimestamp
   */
  readonly startingPositionTimestamp?: string;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#DestinationConfig
   */
  readonly destinationConfig?: LambdaDestinationConfig;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#MaximumRecordAgeInSeconds
   */
  readonly maximumRecordAgeInSeconds?: number;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#BisectBatchOnFunctionError
   */
  readonly bisectBatchOnFunctionError?: boolean;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#Topics
   */
  readonly topics?: string[];

  /**
   * @schema LambdaCreateEventSourceMappingRequest#Queues
   */
  readonly queues?: string[];

  /**
   * @schema LambdaCreateEventSourceMappingRequest#SourceAccessConfigurations
   */
  readonly sourceAccessConfigurations?: LambdaSourceAccessConfiguration[];

}

/**
 * @schema LambdaEventSourceMappingConfiguration
 */
export interface LambdaEventSourceMappingConfiguration {
  /**
   * @schema LambdaEventSourceMappingConfiguration#UUID
   */
  readonly uuid?: string;

  /**
   * @schema LambdaEventSourceMappingConfiguration#StartingPosition
   */
  readonly startingPosition?: string;

  /**
   * @schema LambdaEventSourceMappingConfiguration#StartingPositionTimestamp
   */
  readonly startingPositionTimestamp?: string;

  /**
   * @schema LambdaEventSourceMappingConfiguration#BatchSize
   */
  readonly batchSize?: number;

  /**
   * @schema LambdaEventSourceMappingConfiguration#MaximumBatchingWindowInSeconds
   */
  readonly maximumBatchingWindowInSeconds?: number;

  /**
   * @schema LambdaEventSourceMappingConfiguration#ParallelizationFactor
   */
  readonly parallelizationFactor?: number;

  /**
   * @schema LambdaEventSourceMappingConfiguration#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema LambdaEventSourceMappingConfiguration#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema LambdaEventSourceMappingConfiguration#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema LambdaEventSourceMappingConfiguration#LastProcessingResult
   */
  readonly lastProcessingResult?: string;

  /**
   * @schema LambdaEventSourceMappingConfiguration#State
   */
  readonly state?: string;

  /**
   * @schema LambdaEventSourceMappingConfiguration#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema LambdaEventSourceMappingConfiguration#DestinationConfig
   */
  readonly destinationConfig?: LambdaDestinationConfig;

  /**
   * @schema LambdaEventSourceMappingConfiguration#Topics
   */
  readonly topics?: string[];

  /**
   * @schema LambdaEventSourceMappingConfiguration#Queues
   */
  readonly queues?: string[];

  /**
   * @schema LambdaEventSourceMappingConfiguration#SourceAccessConfigurations
   */
  readonly sourceAccessConfigurations?: LambdaSourceAccessConfiguration[];

  /**
   * @schema LambdaEventSourceMappingConfiguration#MaximumRecordAgeInSeconds
   */
  readonly maximumRecordAgeInSeconds?: number;

  /**
   * @schema LambdaEventSourceMappingConfiguration#BisectBatchOnFunctionError
   */
  readonly bisectBatchOnFunctionError?: boolean;

  /**
   * @schema LambdaEventSourceMappingConfiguration#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

}

/**
 * @schema LambdaCreateFunctionRequest
 */
export interface LambdaCreateFunctionRequest {
  /**
   * @schema LambdaCreateFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaCreateFunctionRequest#Runtime
   */
  readonly runtime: string;

  /**
   * @schema LambdaCreateFunctionRequest#Role
   */
  readonly role: string;

  /**
   * @schema LambdaCreateFunctionRequest#Handler
   */
  readonly handler: string;

  /**
   * @schema LambdaCreateFunctionRequest#Code
   */
  readonly code: LambdaFunctionCode;

  /**
   * @schema LambdaCreateFunctionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaCreateFunctionRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema LambdaCreateFunctionRequest#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema LambdaCreateFunctionRequest#Publish
   */
  readonly publish?: boolean;

  /**
   * @schema LambdaCreateFunctionRequest#VpcConfig
   */
  readonly vpcConfig?: LambdaVpcConfig;

  /**
   * @schema LambdaCreateFunctionRequest#DeadLetterConfig
   */
  readonly deadLetterConfig?: LambdaDeadLetterConfig;

  /**
   * @schema LambdaCreateFunctionRequest#Environment
   */
  readonly environment?: LambdaEnvironment;

  /**
   * @schema LambdaCreateFunctionRequest#KMSKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema LambdaCreateFunctionRequest#TracingConfig
   */
  readonly tracingConfig?: LambdaTracingConfig;

  /**
   * @schema LambdaCreateFunctionRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LambdaCreateFunctionRequest#Layers
   */
  readonly layers?: string[];

  /**
   * @schema LambdaCreateFunctionRequest#FileSystemConfigs
   */
  readonly fileSystemConfigs?: LambdaFileSystemConfig[];

  /**
   * @schema LambdaCreateFunctionRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

}

/**
 * @schema LambdaFunctionConfiguration
 */
export interface LambdaFunctionConfiguration {
  /**
   * @schema LambdaFunctionConfiguration#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaFunctionConfiguration#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema LambdaFunctionConfiguration#Runtime
   */
  readonly runtime?: string;

  /**
   * @schema LambdaFunctionConfiguration#Role
   */
  readonly role?: string;

  /**
   * @schema LambdaFunctionConfiguration#Handler
   */
  readonly handler?: string;

  /**
   * @schema LambdaFunctionConfiguration#CodeSize
   */
  readonly codeSize?: number;

  /**
   * @schema LambdaFunctionConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaFunctionConfiguration#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema LambdaFunctionConfiguration#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema LambdaFunctionConfiguration#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema LambdaFunctionConfiguration#CodeSha256
   */
  readonly codeSha256?: string;

  /**
   * @schema LambdaFunctionConfiguration#Version
   */
  readonly version?: string;

  /**
   * @schema LambdaFunctionConfiguration#VpcConfig
   */
  readonly vpcConfig?: LambdaVpcConfigResponse;

  /**
   * @schema LambdaFunctionConfiguration#DeadLetterConfig
   */
  readonly deadLetterConfig?: LambdaDeadLetterConfig;

  /**
   * @schema LambdaFunctionConfiguration#Environment
   */
  readonly environment?: LambdaEnvironmentResponse;

  /**
   * @schema LambdaFunctionConfiguration#KMSKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema LambdaFunctionConfiguration#TracingConfig
   */
  readonly tracingConfig?: LambdaTracingConfigResponse;

  /**
   * @schema LambdaFunctionConfiguration#MasterArn
   */
  readonly masterArn?: string;

  /**
   * @schema LambdaFunctionConfiguration#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema LambdaFunctionConfiguration#Layers
   */
  readonly layers?: LambdaLayer[];

  /**
   * @schema LambdaFunctionConfiguration#State
   */
  readonly state?: string;

  /**
   * @schema LambdaFunctionConfiguration#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema LambdaFunctionConfiguration#StateReasonCode
   */
  readonly stateReasonCode?: string;

  /**
   * @schema LambdaFunctionConfiguration#LastUpdateStatus
   */
  readonly lastUpdateStatus?: string;

  /**
   * @schema LambdaFunctionConfiguration#LastUpdateStatusReason
   */
  readonly lastUpdateStatusReason?: string;

  /**
   * @schema LambdaFunctionConfiguration#LastUpdateStatusReasonCode
   */
  readonly lastUpdateStatusReasonCode?: string;

  /**
   * @schema LambdaFunctionConfiguration#FileSystemConfigs
   */
  readonly fileSystemConfigs?: LambdaFileSystemConfig[];

  /**
   * @schema LambdaFunctionConfiguration#SigningProfileVersionArn
   */
  readonly signingProfileVersionArn?: string;

  /**
   * @schema LambdaFunctionConfiguration#SigningJobArn
   */
  readonly signingJobArn?: string;

}

/**
 * @schema LambdaDeleteAliasRequest
 */
export interface LambdaDeleteAliasRequest {
  /**
   * @schema LambdaDeleteAliasRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaDeleteAliasRequest#Name
   */
  readonly name: string;

}

/**
 * @schema LambdaDeleteCodeSigningConfigRequest
 */
export interface LambdaDeleteCodeSigningConfigRequest {
  /**
   * @schema LambdaDeleteCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

}

/**
 * @schema LambdaDeleteCodeSigningConfigResponse
 */
export interface LambdaDeleteCodeSigningConfigResponse {
}

/**
 * @schema LambdaDeleteEventSourceMappingRequest
 */
export interface LambdaDeleteEventSourceMappingRequest {
  /**
   * @schema LambdaDeleteEventSourceMappingRequest#UUID
   */
  readonly uuid: string;

}

/**
 * @schema LambdaDeleteFunctionRequest
 */
export interface LambdaDeleteFunctionRequest {
  /**
   * @schema LambdaDeleteFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaDeleteFunctionRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema LambdaDeleteFunctionCodeSigningConfigRequest
 */
export interface LambdaDeleteFunctionCodeSigningConfigRequest {
  /**
   * @schema LambdaDeleteFunctionCodeSigningConfigRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema LambdaDeleteFunctionConcurrencyRequest
 */
export interface LambdaDeleteFunctionConcurrencyRequest {
  /**
   * @schema LambdaDeleteFunctionConcurrencyRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema LambdaDeleteFunctionEventInvokeConfigRequest
 */
export interface LambdaDeleteFunctionEventInvokeConfigRequest {
  /**
   * @schema LambdaDeleteFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaDeleteFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema LambdaDeleteLayerVersionRequest
 */
export interface LambdaDeleteLayerVersionRequest {
  /**
   * @schema LambdaDeleteLayerVersionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema LambdaDeleteLayerVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema LambdaDeleteProvisionedConcurrencyConfigRequest
 */
export interface LambdaDeleteProvisionedConcurrencyConfigRequest {
  /**
   * @schema LambdaDeleteProvisionedConcurrencyConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaDeleteProvisionedConcurrencyConfigRequest#Qualifier
   */
  readonly qualifier: string;

}

/**
 * @schema LambdaGetAccountSettingsRequest
 */
export interface LambdaGetAccountSettingsRequest {
}

/**
 * @schema LambdaGetAccountSettingsResponse
 */
export interface LambdaGetAccountSettingsResponse {
  /**
   * @schema LambdaGetAccountSettingsResponse#AccountLimit
   */
  readonly accountLimit?: LambdaAccountLimit;

  /**
   * @schema LambdaGetAccountSettingsResponse#AccountUsage
   */
  readonly accountUsage?: LambdaAccountUsage;

}

/**
 * @schema LambdaGetAliasRequest
 */
export interface LambdaGetAliasRequest {
  /**
   * @schema LambdaGetAliasRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaGetAliasRequest#Name
   */
  readonly name: string;

}

/**
 * @schema LambdaGetCodeSigningConfigRequest
 */
export interface LambdaGetCodeSigningConfigRequest {
  /**
   * @schema LambdaGetCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

}

/**
 * @schema LambdaGetCodeSigningConfigResponse
 */
export interface LambdaGetCodeSigningConfigResponse {
  /**
   * @schema LambdaGetCodeSigningConfigResponse#CodeSigningConfig
   */
  readonly codeSigningConfig: LambdaCodeSigningConfig;

}

/**
 * @schema LambdaGetEventSourceMappingRequest
 */
export interface LambdaGetEventSourceMappingRequest {
  /**
   * @schema LambdaGetEventSourceMappingRequest#UUID
   */
  readonly uuid: string;

}

/**
 * @schema LambdaGetFunctionRequest
 */
export interface LambdaGetFunctionRequest {
  /**
   * @schema LambdaGetFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaGetFunctionRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema LambdaGetFunctionResponse
 */
export interface LambdaGetFunctionResponse {
  /**
   * @schema LambdaGetFunctionResponse#Configuration
   */
  readonly configuration?: LambdaFunctionConfiguration;

  /**
   * @schema LambdaGetFunctionResponse#Code
   */
  readonly code?: LambdaFunctionCodeLocation;

  /**
   * @schema LambdaGetFunctionResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LambdaGetFunctionResponse#Concurrency
   */
  readonly concurrency?: LambdaConcurrency;

}

/**
 * @schema LambdaGetFunctionCodeSigningConfigRequest
 */
export interface LambdaGetFunctionCodeSigningConfigRequest {
  /**
   * @schema LambdaGetFunctionCodeSigningConfigRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema LambdaGetFunctionCodeSigningConfigResponse
 */
export interface LambdaGetFunctionCodeSigningConfigResponse {
  /**
   * @schema LambdaGetFunctionCodeSigningConfigResponse#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema LambdaGetFunctionCodeSigningConfigResponse#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema LambdaGetFunctionConcurrencyRequest
 */
export interface LambdaGetFunctionConcurrencyRequest {
  /**
   * @schema LambdaGetFunctionConcurrencyRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema LambdaGetFunctionConcurrencyResponse
 */
export interface LambdaGetFunctionConcurrencyResponse {
  /**
   * @schema LambdaGetFunctionConcurrencyResponse#ReservedConcurrentExecutions
   */
  readonly reservedConcurrentExecutions?: number;

}

/**
 * @schema LambdaGetFunctionConfigurationRequest
 */
export interface LambdaGetFunctionConfigurationRequest {
  /**
   * @schema LambdaGetFunctionConfigurationRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaGetFunctionConfigurationRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema LambdaGetFunctionEventInvokeConfigRequest
 */
export interface LambdaGetFunctionEventInvokeConfigRequest {
  /**
   * @schema LambdaGetFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaGetFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema LambdaFunctionEventInvokeConfig
 */
export interface LambdaFunctionEventInvokeConfig {
  /**
   * @schema LambdaFunctionEventInvokeConfig#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema LambdaFunctionEventInvokeConfig#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema LambdaFunctionEventInvokeConfig#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema LambdaFunctionEventInvokeConfig#MaximumEventAgeInSeconds
   */
  readonly maximumEventAgeInSeconds?: number;

  /**
   * @schema LambdaFunctionEventInvokeConfig#DestinationConfig
   */
  readonly destinationConfig?: LambdaDestinationConfig;

}

/**
 * @schema LambdaGetLayerVersionRequest
 */
export interface LambdaGetLayerVersionRequest {
  /**
   * @schema LambdaGetLayerVersionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema LambdaGetLayerVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema LambdaGetLayerVersionResponse
 */
export interface LambdaGetLayerVersionResponse {
  /**
   * @schema LambdaGetLayerVersionResponse#Content
   */
  readonly content?: LambdaLayerVersionContentOutput;

  /**
   * @schema LambdaGetLayerVersionResponse#LayerArn
   */
  readonly layerArn?: string;

  /**
   * @schema LambdaGetLayerVersionResponse#LayerVersionArn
   */
  readonly layerVersionArn?: string;

  /**
   * @schema LambdaGetLayerVersionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaGetLayerVersionResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema LambdaGetLayerVersionResponse#Version
   */
  readonly version?: number;

  /**
   * @schema LambdaGetLayerVersionResponse#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema LambdaGetLayerVersionResponse#LicenseInfo
   */
  readonly licenseInfo?: string;

}

/**
 * @schema LambdaGetLayerVersionByArnRequest
 */
export interface LambdaGetLayerVersionByArnRequest {
  /**
   * @schema LambdaGetLayerVersionByArnRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema LambdaGetLayerVersionPolicyRequest
 */
export interface LambdaGetLayerVersionPolicyRequest {
  /**
   * @schema LambdaGetLayerVersionPolicyRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema LambdaGetLayerVersionPolicyRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema LambdaGetLayerVersionPolicyResponse
 */
export interface LambdaGetLayerVersionPolicyResponse {
  /**
   * @schema LambdaGetLayerVersionPolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema LambdaGetLayerVersionPolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaGetPolicyRequest
 */
export interface LambdaGetPolicyRequest {
  /**
   * @schema LambdaGetPolicyRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaGetPolicyRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema LambdaGetPolicyResponse
 */
export interface LambdaGetPolicyResponse {
  /**
   * @schema LambdaGetPolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema LambdaGetPolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaGetProvisionedConcurrencyConfigRequest
 */
export interface LambdaGetProvisionedConcurrencyConfigRequest {
  /**
   * @schema LambdaGetProvisionedConcurrencyConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaGetProvisionedConcurrencyConfigRequest#Qualifier
   */
  readonly qualifier: string;

}

/**
 * @schema LambdaGetProvisionedConcurrencyConfigResponse
 */
export interface LambdaGetProvisionedConcurrencyConfigResponse {
  /**
   * @schema LambdaGetProvisionedConcurrencyConfigResponse#RequestedProvisionedConcurrentExecutions
   */
  readonly requestedProvisionedConcurrentExecutions?: number;

  /**
   * @schema LambdaGetProvisionedConcurrencyConfigResponse#AvailableProvisionedConcurrentExecutions
   */
  readonly availableProvisionedConcurrentExecutions?: number;

  /**
   * @schema LambdaGetProvisionedConcurrencyConfigResponse#AllocatedProvisionedConcurrentExecutions
   */
  readonly allocatedProvisionedConcurrentExecutions?: number;

  /**
   * @schema LambdaGetProvisionedConcurrencyConfigResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LambdaGetProvisionedConcurrencyConfigResponse#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema LambdaGetProvisionedConcurrencyConfigResponse#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema LambdaInvocationRequest
 */
export interface LambdaInvocationRequest {
  /**
   * @schema LambdaInvocationRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaInvocationRequest#InvocationType
   */
  readonly invocationType?: string;

  /**
   * @schema LambdaInvocationRequest#LogType
   */
  readonly logType?: string;

  /**
   * @schema LambdaInvocationRequest#ClientContext
   */
  readonly clientContext?: string;

  /**
   * @schema LambdaInvocationRequest#Payload
   */
  readonly payload?: any;

  /**
   * @schema LambdaInvocationRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema LambdaInvocationResponse
 */
export interface LambdaInvocationResponse {
  /**
   * @schema LambdaInvocationResponse#StatusCode
   */
  readonly statusCode?: number;

  /**
   * @schema LambdaInvocationResponse#FunctionError
   */
  readonly functionError?: string;

  /**
   * @schema LambdaInvocationResponse#LogResult
   */
  readonly logResult?: string;

  /**
   * @schema LambdaInvocationResponse#Payload
   */
  readonly payload?: any;

  /**
   * @schema LambdaInvocationResponse#ExecutedVersion
   */
  readonly executedVersion?: string;

}

/**
 * @schema LambdaInvokeAsyncRequest
 */
export interface LambdaInvokeAsyncRequest {
  /**
   * @schema LambdaInvokeAsyncRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaInvokeAsyncRequest#InvokeArgs
   */
  readonly invokeArgs: any;

}

/**
 * @schema LambdaInvokeAsyncResponse
 */
export interface LambdaInvokeAsyncResponse {
  /**
   * @schema LambdaInvokeAsyncResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema LambdaListAliasesRequest
 */
export interface LambdaListAliasesRequest {
  /**
   * @schema LambdaListAliasesRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaListAliasesRequest#FunctionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema LambdaListAliasesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListAliasesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListAliasesResponse
 */
export interface LambdaListAliasesResponse {
  /**
   * @schema LambdaListAliasesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema LambdaListAliasesResponse#Aliases
   */
  readonly aliases?: LambdaAliasConfiguration[];

}

/**
 * @schema LambdaListCodeSigningConfigsRequest
 */
export interface LambdaListCodeSigningConfigsRequest {
  /**
   * @schema LambdaListCodeSigningConfigsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListCodeSigningConfigsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListCodeSigningConfigsResponse
 */
export interface LambdaListCodeSigningConfigsResponse {
  /**
   * @schema LambdaListCodeSigningConfigsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema LambdaListCodeSigningConfigsResponse#CodeSigningConfigs
   */
  readonly codeSigningConfigs?: LambdaCodeSigningConfig[];

}

/**
 * @schema LambdaListEventSourceMappingsRequest
 */
export interface LambdaListEventSourceMappingsRequest {
  /**
   * @schema LambdaListEventSourceMappingsRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema LambdaListEventSourceMappingsRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaListEventSourceMappingsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListEventSourceMappingsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListEventSourceMappingsResponse
 */
export interface LambdaListEventSourceMappingsResponse {
  /**
   * @schema LambdaListEventSourceMappingsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema LambdaListEventSourceMappingsResponse#EventSourceMappings
   */
  readonly eventSourceMappings?: LambdaEventSourceMappingConfiguration[];

}

/**
 * @schema LambdaListFunctionEventInvokeConfigsRequest
 */
export interface LambdaListFunctionEventInvokeConfigsRequest {
  /**
   * @schema LambdaListFunctionEventInvokeConfigsRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaListFunctionEventInvokeConfigsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListFunctionEventInvokeConfigsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListFunctionEventInvokeConfigsResponse
 */
export interface LambdaListFunctionEventInvokeConfigsResponse {
  /**
   * @schema LambdaListFunctionEventInvokeConfigsResponse#FunctionEventInvokeConfigs
   */
  readonly functionEventInvokeConfigs?: LambdaFunctionEventInvokeConfig[];

  /**
   * @schema LambdaListFunctionEventInvokeConfigsResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema LambdaListFunctionsRequest
 */
export interface LambdaListFunctionsRequest {
  /**
   * @schema LambdaListFunctionsRequest#MasterRegion
   */
  readonly masterRegion?: string;

  /**
   * @schema LambdaListFunctionsRequest#FunctionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema LambdaListFunctionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListFunctionsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListFunctionsResponse
 */
export interface LambdaListFunctionsResponse {
  /**
   * @schema LambdaListFunctionsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema LambdaListFunctionsResponse#Functions
   */
  readonly functions?: LambdaFunctionConfiguration[];

}

/**
 * @schema LambdaListFunctionsByCodeSigningConfigRequest
 */
export interface LambdaListFunctionsByCodeSigningConfigRequest {
  /**
   * @schema LambdaListFunctionsByCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema LambdaListFunctionsByCodeSigningConfigRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListFunctionsByCodeSigningConfigRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListFunctionsByCodeSigningConfigResponse
 */
export interface LambdaListFunctionsByCodeSigningConfigResponse {
  /**
   * @schema LambdaListFunctionsByCodeSigningConfigResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema LambdaListFunctionsByCodeSigningConfigResponse#FunctionArns
   */
  readonly functionArns?: string[];

}

/**
 * @schema LambdaListLayerVersionsRequest
 */
export interface LambdaListLayerVersionsRequest {
  /**
   * @schema LambdaListLayerVersionsRequest#CompatibleRuntime
   */
  readonly compatibleRuntime?: string;

  /**
   * @schema LambdaListLayerVersionsRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema LambdaListLayerVersionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListLayerVersionsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListLayerVersionsResponse
 */
export interface LambdaListLayerVersionsResponse {
  /**
   * @schema LambdaListLayerVersionsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema LambdaListLayerVersionsResponse#LayerVersions
   */
  readonly layerVersions?: LambdaLayerVersionsListItem[];

}

/**
 * @schema LambdaListLayersRequest
 */
export interface LambdaListLayersRequest {
  /**
   * @schema LambdaListLayersRequest#CompatibleRuntime
   */
  readonly compatibleRuntime?: string;

  /**
   * @schema LambdaListLayersRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListLayersRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListLayersResponse
 */
export interface LambdaListLayersResponse {
  /**
   * @schema LambdaListLayersResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema LambdaListLayersResponse#Layers
   */
  readonly layers?: LambdaLayersListItem[];

}

/**
 * @schema LambdaListProvisionedConcurrencyConfigsRequest
 */
export interface LambdaListProvisionedConcurrencyConfigsRequest {
  /**
   * @schema LambdaListProvisionedConcurrencyConfigsRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaListProvisionedConcurrencyConfigsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListProvisionedConcurrencyConfigsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListProvisionedConcurrencyConfigsResponse
 */
export interface LambdaListProvisionedConcurrencyConfigsResponse {
  /**
   * @schema LambdaListProvisionedConcurrencyConfigsResponse#ProvisionedConcurrencyConfigs
   */
  readonly provisionedConcurrencyConfigs?: LambdaProvisionedConcurrencyConfigListItem[];

  /**
   * @schema LambdaListProvisionedConcurrencyConfigsResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema LambdaListTagsRequest
 */
export interface LambdaListTagsRequest {
  /**
   * @schema LambdaListTagsRequest#Resource
   */
  readonly resource: string;

}

/**
 * @schema LambdaListTagsResponse
 */
export interface LambdaListTagsResponse {
  /**
   * @schema LambdaListTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema LambdaListVersionsByFunctionRequest
 */
export interface LambdaListVersionsByFunctionRequest {
  /**
   * @schema LambdaListVersionsByFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaListVersionsByFunctionRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema LambdaListVersionsByFunctionRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema LambdaListVersionsByFunctionResponse
 */
export interface LambdaListVersionsByFunctionResponse {
  /**
   * @schema LambdaListVersionsByFunctionResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema LambdaListVersionsByFunctionResponse#Versions
   */
  readonly versions?: LambdaFunctionConfiguration[];

}

/**
 * @schema LambdaPublishLayerVersionRequest
 */
export interface LambdaPublishLayerVersionRequest {
  /**
   * @schema LambdaPublishLayerVersionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema LambdaPublishLayerVersionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaPublishLayerVersionRequest#Content
   */
  readonly content: LambdaLayerVersionContentInput;

  /**
   * @schema LambdaPublishLayerVersionRequest#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema LambdaPublishLayerVersionRequest#LicenseInfo
   */
  readonly licenseInfo?: string;

}

/**
 * @schema LambdaPublishLayerVersionResponse
 */
export interface LambdaPublishLayerVersionResponse {
  /**
   * @schema LambdaPublishLayerVersionResponse#Content
   */
  readonly content?: LambdaLayerVersionContentOutput;

  /**
   * @schema LambdaPublishLayerVersionResponse#LayerArn
   */
  readonly layerArn?: string;

  /**
   * @schema LambdaPublishLayerVersionResponse#LayerVersionArn
   */
  readonly layerVersionArn?: string;

  /**
   * @schema LambdaPublishLayerVersionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaPublishLayerVersionResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema LambdaPublishLayerVersionResponse#Version
   */
  readonly version?: number;

  /**
   * @schema LambdaPublishLayerVersionResponse#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema LambdaPublishLayerVersionResponse#LicenseInfo
   */
  readonly licenseInfo?: string;

}

/**
 * @schema LambdaPublishVersionRequest
 */
export interface LambdaPublishVersionRequest {
  /**
   * @schema LambdaPublishVersionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaPublishVersionRequest#CodeSha256
   */
  readonly codeSha256?: string;

  /**
   * @schema LambdaPublishVersionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaPublishVersionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaPutFunctionCodeSigningConfigRequest
 */
export interface LambdaPutFunctionCodeSigningConfigRequest {
  /**
   * @schema LambdaPutFunctionCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema LambdaPutFunctionCodeSigningConfigRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema LambdaPutFunctionCodeSigningConfigResponse
 */
export interface LambdaPutFunctionCodeSigningConfigResponse {
  /**
   * @schema LambdaPutFunctionCodeSigningConfigResponse#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema LambdaPutFunctionCodeSigningConfigResponse#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema LambdaPutFunctionConcurrencyRequest
 */
export interface LambdaPutFunctionConcurrencyRequest {
  /**
   * @schema LambdaPutFunctionConcurrencyRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaPutFunctionConcurrencyRequest#ReservedConcurrentExecutions
   */
  readonly reservedConcurrentExecutions: number;

}

/**
 * @schema LambdaConcurrency
 */
export interface LambdaConcurrency {
  /**
   * @schema LambdaConcurrency#ReservedConcurrentExecutions
   */
  readonly reservedConcurrentExecutions?: number;

}

/**
 * @schema LambdaPutFunctionEventInvokeConfigRequest
 */
export interface LambdaPutFunctionEventInvokeConfigRequest {
  /**
   * @schema LambdaPutFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaPutFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema LambdaPutFunctionEventInvokeConfigRequest#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema LambdaPutFunctionEventInvokeConfigRequest#MaximumEventAgeInSeconds
   */
  readonly maximumEventAgeInSeconds?: number;

  /**
   * @schema LambdaPutFunctionEventInvokeConfigRequest#DestinationConfig
   */
  readonly destinationConfig?: LambdaDestinationConfig;

}

/**
 * @schema LambdaPutProvisionedConcurrencyConfigRequest
 */
export interface LambdaPutProvisionedConcurrencyConfigRequest {
  /**
   * @schema LambdaPutProvisionedConcurrencyConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaPutProvisionedConcurrencyConfigRequest#Qualifier
   */
  readonly qualifier: string;

  /**
   * @schema LambdaPutProvisionedConcurrencyConfigRequest#ProvisionedConcurrentExecutions
   */
  readonly provisionedConcurrentExecutions: number;

}

/**
 * @schema LambdaPutProvisionedConcurrencyConfigResponse
 */
export interface LambdaPutProvisionedConcurrencyConfigResponse {
  /**
   * @schema LambdaPutProvisionedConcurrencyConfigResponse#RequestedProvisionedConcurrentExecutions
   */
  readonly requestedProvisionedConcurrentExecutions?: number;

  /**
   * @schema LambdaPutProvisionedConcurrencyConfigResponse#AvailableProvisionedConcurrentExecutions
   */
  readonly availableProvisionedConcurrentExecutions?: number;

  /**
   * @schema LambdaPutProvisionedConcurrencyConfigResponse#AllocatedProvisionedConcurrentExecutions
   */
  readonly allocatedProvisionedConcurrentExecutions?: number;

  /**
   * @schema LambdaPutProvisionedConcurrencyConfigResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LambdaPutProvisionedConcurrencyConfigResponse#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema LambdaPutProvisionedConcurrencyConfigResponse#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema LambdaRemoveLayerVersionPermissionRequest
 */
export interface LambdaRemoveLayerVersionPermissionRequest {
  /**
   * @schema LambdaRemoveLayerVersionPermissionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema LambdaRemoveLayerVersionPermissionRequest#VersionNumber
   */
  readonly versionNumber: number;

  /**
   * @schema LambdaRemoveLayerVersionPermissionRequest#StatementId
   */
  readonly statementId: string;

  /**
   * @schema LambdaRemoveLayerVersionPermissionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaRemovePermissionRequest
 */
export interface LambdaRemovePermissionRequest {
  /**
   * @schema LambdaRemovePermissionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaRemovePermissionRequest#StatementId
   */
  readonly statementId: string;

  /**
   * @schema LambdaRemovePermissionRequest#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema LambdaRemovePermissionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaTagResourceRequest
 */
export interface LambdaTagResourceRequest {
  /**
   * @schema LambdaTagResourceRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema LambdaTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema LambdaUntagResourceRequest
 */
export interface LambdaUntagResourceRequest {
  /**
   * @schema LambdaUntagResourceRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema LambdaUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema LambdaUpdateAliasRequest
 */
export interface LambdaUpdateAliasRequest {
  /**
   * @schema LambdaUpdateAliasRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaUpdateAliasRequest#Name
   */
  readonly name: string;

  /**
   * @schema LambdaUpdateAliasRequest#FunctionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema LambdaUpdateAliasRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaUpdateAliasRequest#RoutingConfig
   */
  readonly routingConfig?: LambdaAliasRoutingConfiguration;

  /**
   * @schema LambdaUpdateAliasRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaUpdateCodeSigningConfigRequest
 */
export interface LambdaUpdateCodeSigningConfigRequest {
  /**
   * @schema LambdaUpdateCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema LambdaUpdateCodeSigningConfigRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaUpdateCodeSigningConfigRequest#AllowedPublishers
   */
  readonly allowedPublishers?: LambdaAllowedPublishers;

  /**
   * @schema LambdaUpdateCodeSigningConfigRequest#CodeSigningPolicies
   */
  readonly codeSigningPolicies?: LambdaCodeSigningPolicies;

}

/**
 * @schema LambdaUpdateCodeSigningConfigResponse
 */
export interface LambdaUpdateCodeSigningConfigResponse {
  /**
   * @schema LambdaUpdateCodeSigningConfigResponse#CodeSigningConfig
   */
  readonly codeSigningConfig: LambdaCodeSigningConfig;

}

/**
 * @schema LambdaUpdateEventSourceMappingRequest
 */
export interface LambdaUpdateEventSourceMappingRequest {
  /**
   * @schema LambdaUpdateEventSourceMappingRequest#UUID
   */
  readonly uuid: string;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#BatchSize
   */
  readonly batchSize?: number;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#MaximumBatchingWindowInSeconds
   */
  readonly maximumBatchingWindowInSeconds?: number;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#DestinationConfig
   */
  readonly destinationConfig?: LambdaDestinationConfig;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#MaximumRecordAgeInSeconds
   */
  readonly maximumRecordAgeInSeconds?: number;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#BisectBatchOnFunctionError
   */
  readonly bisectBatchOnFunctionError?: boolean;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#ParallelizationFactor
   */
  readonly parallelizationFactor?: number;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#SourceAccessConfigurations
   */
  readonly sourceAccessConfigurations?: LambdaSourceAccessConfiguration[];

}

/**
 * @schema LambdaUpdateFunctionCodeRequest
 */
export interface LambdaUpdateFunctionCodeRequest {
  /**
   * @schema LambdaUpdateFunctionCodeRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaUpdateFunctionCodeRequest#ZipFile
   */
  readonly zipFile?: any;

  /**
   * @schema LambdaUpdateFunctionCodeRequest#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema LambdaUpdateFunctionCodeRequest#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema LambdaUpdateFunctionCodeRequest#S3ObjectVersion
   */
  readonly s3ObjectVersion?: string;

  /**
   * @schema LambdaUpdateFunctionCodeRequest#Publish
   */
  readonly publish?: boolean;

  /**
   * @schema LambdaUpdateFunctionCodeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema LambdaUpdateFunctionCodeRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema LambdaUpdateFunctionConfigurationRequest
 */
export interface LambdaUpdateFunctionConfigurationRequest {
  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#Role
   */
  readonly role?: string;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#Handler
   */
  readonly handler?: string;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#VpcConfig
   */
  readonly vpcConfig?: LambdaVpcConfig;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#Environment
   */
  readonly environment?: LambdaEnvironment;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#Runtime
   */
  readonly runtime?: string;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#DeadLetterConfig
   */
  readonly deadLetterConfig?: LambdaDeadLetterConfig;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#KMSKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#TracingConfig
   */
  readonly tracingConfig?: LambdaTracingConfig;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#Layers
   */
  readonly layers?: string[];

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#FileSystemConfigs
   */
  readonly fileSystemConfigs?: LambdaFileSystemConfig[];

}

/**
 * @schema LambdaUpdateFunctionEventInvokeConfigRequest
 */
export interface LambdaUpdateFunctionEventInvokeConfigRequest {
  /**
   * @schema LambdaUpdateFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema LambdaUpdateFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema LambdaUpdateFunctionEventInvokeConfigRequest#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema LambdaUpdateFunctionEventInvokeConfigRequest#MaximumEventAgeInSeconds
   */
  readonly maximumEventAgeInSeconds?: number;

  /**
   * @schema LambdaUpdateFunctionEventInvokeConfigRequest#DestinationConfig
   */
  readonly destinationConfig?: LambdaDestinationConfig;

}

/**
 * @schema LambdaAliasRoutingConfiguration
 */
export interface LambdaAliasRoutingConfiguration {
  /**
   * @schema LambdaAliasRoutingConfiguration#AdditionalVersionWeights
   */
  readonly additionalVersionWeights?: { [key: string]: number };

}

/**
 * @schema LambdaAllowedPublishers
 */
export interface LambdaAllowedPublishers {
  /**
   * @schema LambdaAllowedPublishers#SigningProfileVersionArns
   */
  readonly signingProfileVersionArns: string[];

}

/**
 * @schema LambdaCodeSigningPolicies
 */
export interface LambdaCodeSigningPolicies {
  /**
   * @schema LambdaCodeSigningPolicies#UntrustedArtifactOnDeployment
   */
  readonly untrustedArtifactOnDeployment?: string;

}

/**
 * @schema LambdaCodeSigningConfig
 */
export interface LambdaCodeSigningConfig {
  /**
   * @schema LambdaCodeSigningConfig#CodeSigningConfigId
   */
  readonly codeSigningConfigId: string;

  /**
   * @schema LambdaCodeSigningConfig#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema LambdaCodeSigningConfig#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaCodeSigningConfig#AllowedPublishers
   */
  readonly allowedPublishers: LambdaAllowedPublishers;

  /**
   * @schema LambdaCodeSigningConfig#CodeSigningPolicies
   */
  readonly codeSigningPolicies: LambdaCodeSigningPolicies;

  /**
   * @schema LambdaCodeSigningConfig#LastModified
   */
  readonly lastModified: string;

}

/**
 * @schema LambdaDestinationConfig
 */
export interface LambdaDestinationConfig {
  /**
   * @schema LambdaDestinationConfig#OnSuccess
   */
  readonly onSuccess?: LambdaOnSuccess;

  /**
   * @schema LambdaDestinationConfig#OnFailure
   */
  readonly onFailure?: LambdaOnFailure;

}

/**
 * @schema LambdaSourceAccessConfiguration
 */
export interface LambdaSourceAccessConfiguration {
  /**
   * @schema LambdaSourceAccessConfiguration#Type
   */
  readonly type?: string;

  /**
   * @schema LambdaSourceAccessConfiguration#URI
   */
  readonly uri?: string;

}

/**
 * @schema LambdaFunctionCode
 */
export interface LambdaFunctionCode {
  /**
   * @schema LambdaFunctionCode#ZipFile
   */
  readonly zipFile?: any;

  /**
   * @schema LambdaFunctionCode#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema LambdaFunctionCode#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema LambdaFunctionCode#S3ObjectVersion
   */
  readonly s3ObjectVersion?: string;

}

/**
 * @schema LambdaVpcConfig
 */
export interface LambdaVpcConfig {
  /**
   * @schema LambdaVpcConfig#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema LambdaVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema LambdaDeadLetterConfig
 */
export interface LambdaDeadLetterConfig {
  /**
   * @schema LambdaDeadLetterConfig#TargetArn
   */
  readonly targetArn?: string;

}

/**
 * @schema LambdaEnvironment
 */
export interface LambdaEnvironment {
  /**
   * @schema LambdaEnvironment#Variables
   */
  readonly variables?: { [key: string]: string };

}

/**
 * @schema LambdaTracingConfig
 */
export interface LambdaTracingConfig {
  /**
   * @schema LambdaTracingConfig#Mode
   */
  readonly mode?: string;

}

/**
 * @schema LambdaFileSystemConfig
 */
export interface LambdaFileSystemConfig {
  /**
   * @schema LambdaFileSystemConfig#Arn
   */
  readonly arn: string;

  /**
   * @schema LambdaFileSystemConfig#LocalMountPath
   */
  readonly localMountPath: string;

}

/**
 * @schema LambdaVpcConfigResponse
 */
export interface LambdaVpcConfigResponse {
  /**
   * @schema LambdaVpcConfigResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema LambdaVpcConfigResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema LambdaVpcConfigResponse#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema LambdaEnvironmentResponse
 */
export interface LambdaEnvironmentResponse {
  /**
   * @schema LambdaEnvironmentResponse#Variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema LambdaEnvironmentResponse#Error
   */
  readonly error?: LambdaEnvironmentError;

}

/**
 * @schema LambdaTracingConfigResponse
 */
export interface LambdaTracingConfigResponse {
  /**
   * @schema LambdaTracingConfigResponse#Mode
   */
  readonly mode?: string;

}

/**
 * @schema LambdaLayer
 */
export interface LambdaLayer {
  /**
   * @schema LambdaLayer#Arn
   */
  readonly arn?: string;

  /**
   * @schema LambdaLayer#CodeSize
   */
  readonly codeSize?: number;

  /**
   * @schema LambdaLayer#SigningProfileVersionArn
   */
  readonly signingProfileVersionArn?: string;

  /**
   * @schema LambdaLayer#SigningJobArn
   */
  readonly signingJobArn?: string;

}

/**
 * @schema LambdaAccountLimit
 */
export interface LambdaAccountLimit {
  /**
   * @schema LambdaAccountLimit#TotalCodeSize
   */
  readonly totalCodeSize?: number;

  /**
   * @schema LambdaAccountLimit#CodeSizeUnzipped
   */
  readonly codeSizeUnzipped?: number;

  /**
   * @schema LambdaAccountLimit#CodeSizeZipped
   */
  readonly codeSizeZipped?: number;

  /**
   * @schema LambdaAccountLimit#ConcurrentExecutions
   */
  readonly concurrentExecutions?: number;

  /**
   * @schema LambdaAccountLimit#UnreservedConcurrentExecutions
   */
  readonly unreservedConcurrentExecutions?: number;

}

/**
 * @schema LambdaAccountUsage
 */
export interface LambdaAccountUsage {
  /**
   * @schema LambdaAccountUsage#TotalCodeSize
   */
  readonly totalCodeSize?: number;

  /**
   * @schema LambdaAccountUsage#FunctionCount
   */
  readonly functionCount?: number;

}

/**
 * @schema LambdaFunctionCodeLocation
 */
export interface LambdaFunctionCodeLocation {
  /**
   * @schema LambdaFunctionCodeLocation#RepositoryType
   */
  readonly repositoryType?: string;

  /**
   * @schema LambdaFunctionCodeLocation#Location
   */
  readonly location?: string;

}

/**
 * @schema LambdaLayerVersionContentOutput
 */
export interface LambdaLayerVersionContentOutput {
  /**
   * @schema LambdaLayerVersionContentOutput#Location
   */
  readonly location?: string;

  /**
   * @schema LambdaLayerVersionContentOutput#CodeSha256
   */
  readonly codeSha256?: string;

  /**
   * @schema LambdaLayerVersionContentOutput#CodeSize
   */
  readonly codeSize?: number;

  /**
   * @schema LambdaLayerVersionContentOutput#SigningProfileVersionArn
   */
  readonly signingProfileVersionArn?: string;

  /**
   * @schema LambdaLayerVersionContentOutput#SigningJobArn
   */
  readonly signingJobArn?: string;

}

/**
 * @schema LambdaLayerVersionsListItem
 */
export interface LambdaLayerVersionsListItem {
  /**
   * @schema LambdaLayerVersionsListItem#LayerVersionArn
   */
  readonly layerVersionArn?: string;

  /**
   * @schema LambdaLayerVersionsListItem#Version
   */
  readonly version?: number;

  /**
   * @schema LambdaLayerVersionsListItem#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaLayerVersionsListItem#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema LambdaLayerVersionsListItem#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema LambdaLayerVersionsListItem#LicenseInfo
   */
  readonly licenseInfo?: string;

}

/**
 * @schema LambdaLayersListItem
 */
export interface LambdaLayersListItem {
  /**
   * @schema LambdaLayersListItem#LayerName
   */
  readonly layerName?: string;

  /**
   * @schema LambdaLayersListItem#LayerArn
   */
  readonly layerArn?: string;

  /**
   * @schema LambdaLayersListItem#LatestMatchingVersion
   */
  readonly latestMatchingVersion?: LambdaLayerVersionsListItem;

}

/**
 * @schema LambdaProvisionedConcurrencyConfigListItem
 */
export interface LambdaProvisionedConcurrencyConfigListItem {
  /**
   * @schema LambdaProvisionedConcurrencyConfigListItem#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema LambdaProvisionedConcurrencyConfigListItem#RequestedProvisionedConcurrentExecutions
   */
  readonly requestedProvisionedConcurrentExecutions?: number;

  /**
   * @schema LambdaProvisionedConcurrencyConfigListItem#AvailableProvisionedConcurrentExecutions
   */
  readonly availableProvisionedConcurrentExecutions?: number;

  /**
   * @schema LambdaProvisionedConcurrencyConfigListItem#AllocatedProvisionedConcurrentExecutions
   */
  readonly allocatedProvisionedConcurrentExecutions?: number;

  /**
   * @schema LambdaProvisionedConcurrencyConfigListItem#Status
   */
  readonly status?: string;

  /**
   * @schema LambdaProvisionedConcurrencyConfigListItem#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema LambdaProvisionedConcurrencyConfigListItem#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema LambdaLayerVersionContentInput
 */
export interface LambdaLayerVersionContentInput {
  /**
   * @schema LambdaLayerVersionContentInput#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema LambdaLayerVersionContentInput#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema LambdaLayerVersionContentInput#S3ObjectVersion
   */
  readonly s3ObjectVersion?: string;

  /**
   * @schema LambdaLayerVersionContentInput#ZipFile
   */
  readonly zipFile?: any;

}

/**
 * @schema LambdaOnSuccess
 */
export interface LambdaOnSuccess {
  /**
   * @schema LambdaOnSuccess#Destination
   */
  readonly destination?: string;

}

/**
 * @schema LambdaOnFailure
 */
export interface LambdaOnFailure {
  /**
   * @schema LambdaOnFailure#Destination
   */
  readonly destination?: string;

}

/**
 * @schema LambdaEnvironmentError
 */
export interface LambdaEnvironmentError {
  /**
   * @schema LambdaEnvironmentError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema LambdaEnvironmentError#Message
   */
  readonly message?: string;

}
