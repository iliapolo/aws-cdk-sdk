/**
 * @schema AddLayerVersionPermissionRequest
 */
export interface AddLayerVersionPermissionRequest {
  /**
   * @schema AddLayerVersionPermissionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema AddLayerVersionPermissionRequest#VersionNumber
   */
  readonly versionNumber: number;

  /**
   * @schema AddLayerVersionPermissionRequest#StatementId
   */
  readonly statementId: string;

  /**
   * @schema AddLayerVersionPermissionRequest#Action
   */
  readonly action: string;

  /**
   * @schema AddLayerVersionPermissionRequest#Principal
   */
  readonly principal: string;

  /**
   * @schema AddLayerVersionPermissionRequest#OrganizationId
   */
  readonly organizationId?: string;

  /**
   * @schema AddLayerVersionPermissionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema AddLayerVersionPermissionResponse
 */
export interface AddLayerVersionPermissionResponse {
  /**
   * @schema AddLayerVersionPermissionResponse#Statement
   */
  readonly statement?: string;

  /**
   * @schema AddLayerVersionPermissionResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema AddPermissionRequest
 */
export interface AddPermissionRequest {
  /**
   * @schema AddPermissionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema AddPermissionRequest#StatementId
   */
  readonly statementId: string;

  /**
   * @schema AddPermissionRequest#Action
   */
  readonly action: string;

  /**
   * @schema AddPermissionRequest#Principal
   */
  readonly principal: string;

  /**
   * @schema AddPermissionRequest#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema AddPermissionRequest#SourceAccount
   */
  readonly sourceAccount?: string;

  /**
   * @schema AddPermissionRequest#EventSourceToken
   */
  readonly eventSourceToken?: string;

  /**
   * @schema AddPermissionRequest#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema AddPermissionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema AddPermissionResponse
 */
export interface AddPermissionResponse {
  /**
   * @schema AddPermissionResponse#Statement
   */
  readonly statement?: string;

}

/**
 * @schema CreateAliasRequest
 */
export interface CreateAliasRequest {
  /**
   * @schema CreateAliasRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema CreateAliasRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateAliasRequest#FunctionVersion
   */
  readonly functionVersion: string;

  /**
   * @schema CreateAliasRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateAliasRequest#RoutingConfig
   */
  readonly routingConfig?: AliasRoutingConfiguration;

}

/**
 * @schema AliasConfiguration
 */
export interface AliasConfiguration {
  /**
   * @schema AliasConfiguration#AliasArn
   */
  readonly aliasArn?: string;

  /**
   * @schema AliasConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema AliasConfiguration#FunctionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema AliasConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema AliasConfiguration#RoutingConfig
   */
  readonly routingConfig?: AliasRoutingConfiguration;

  /**
   * @schema AliasConfiguration#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema CreateCodeSigningConfigRequest
 */
export interface CreateCodeSigningConfigRequest {
  /**
   * @schema CreateCodeSigningConfigRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateCodeSigningConfigRequest#AllowedPublishers
   */
  readonly allowedPublishers: AllowedPublishers;

  /**
   * @schema CreateCodeSigningConfigRequest#CodeSigningPolicies
   */
  readonly codeSigningPolicies?: CodeSigningPolicies;

}

/**
 * @schema CreateCodeSigningConfigResponse
 */
export interface CreateCodeSigningConfigResponse {
  /**
   * @schema CreateCodeSigningConfigResponse#CodeSigningConfig
   */
  readonly codeSigningConfig: CodeSigningConfig;

}

/**
 * @schema CreateEventSourceMappingRequest
 */
export interface CreateEventSourceMappingRequest {
  /**
   * @schema CreateEventSourceMappingRequest#EventSourceArn
   */
  readonly eventSourceArn: string;

  /**
   * @schema CreateEventSourceMappingRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema CreateEventSourceMappingRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CreateEventSourceMappingRequest#BatchSize
   */
  readonly batchSize?: number;

  /**
   * @schema CreateEventSourceMappingRequest#MaximumBatchingWindowInSeconds
   */
  readonly maximumBatchingWindowInSeconds?: number;

  /**
   * @schema CreateEventSourceMappingRequest#ParallelizationFactor
   */
  readonly parallelizationFactor?: number;

  /**
   * @schema CreateEventSourceMappingRequest#StartingPosition
   */
  readonly startingPosition?: string;

  /**
   * @schema CreateEventSourceMappingRequest#StartingPositionTimestamp
   */
  readonly startingPositionTimestamp?: string;

  /**
   * @schema CreateEventSourceMappingRequest#DestinationConfig
   */
  readonly destinationConfig?: DestinationConfig;

  /**
   * @schema CreateEventSourceMappingRequest#MaximumRecordAgeInSeconds
   */
  readonly maximumRecordAgeInSeconds?: number;

  /**
   * @schema CreateEventSourceMappingRequest#BisectBatchOnFunctionError
   */
  readonly bisectBatchOnFunctionError?: boolean;

  /**
   * @schema CreateEventSourceMappingRequest#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema CreateEventSourceMappingRequest#Topics
   */
  readonly topics?: string[];

  /**
   * @schema CreateEventSourceMappingRequest#Queues
   */
  readonly queues?: string[];

  /**
   * @schema CreateEventSourceMappingRequest#SourceAccessConfigurations
   */
  readonly sourceAccessConfigurations?: SourceAccessConfiguration[];

}

/**
 * @schema EventSourceMappingConfiguration
 */
export interface EventSourceMappingConfiguration {
  /**
   * @schema EventSourceMappingConfiguration#UUID
   */
  readonly uuid?: string;

  /**
   * @schema EventSourceMappingConfiguration#StartingPosition
   */
  readonly startingPosition?: string;

  /**
   * @schema EventSourceMappingConfiguration#StartingPositionTimestamp
   */
  readonly startingPositionTimestamp?: string;

  /**
   * @schema EventSourceMappingConfiguration#BatchSize
   */
  readonly batchSize?: number;

  /**
   * @schema EventSourceMappingConfiguration#MaximumBatchingWindowInSeconds
   */
  readonly maximumBatchingWindowInSeconds?: number;

  /**
   * @schema EventSourceMappingConfiguration#ParallelizationFactor
   */
  readonly parallelizationFactor?: number;

  /**
   * @schema EventSourceMappingConfiguration#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema EventSourceMappingConfiguration#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema EventSourceMappingConfiguration#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema EventSourceMappingConfiguration#LastProcessingResult
   */
  readonly lastProcessingResult?: string;

  /**
   * @schema EventSourceMappingConfiguration#State
   */
  readonly state?: string;

  /**
   * @schema EventSourceMappingConfiguration#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema EventSourceMappingConfiguration#DestinationConfig
   */
  readonly destinationConfig?: DestinationConfig;

  /**
   * @schema EventSourceMappingConfiguration#Topics
   */
  readonly topics?: string[];

  /**
   * @schema EventSourceMappingConfiguration#Queues
   */
  readonly queues?: string[];

  /**
   * @schema EventSourceMappingConfiguration#SourceAccessConfigurations
   */
  readonly sourceAccessConfigurations?: SourceAccessConfiguration[];

  /**
   * @schema EventSourceMappingConfiguration#MaximumRecordAgeInSeconds
   */
  readonly maximumRecordAgeInSeconds?: number;

  /**
   * @schema EventSourceMappingConfiguration#BisectBatchOnFunctionError
   */
  readonly bisectBatchOnFunctionError?: boolean;

  /**
   * @schema EventSourceMappingConfiguration#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

}

/**
 * @schema CreateFunctionRequest
 */
export interface CreateFunctionRequest {
  /**
   * @schema CreateFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema CreateFunctionRequest#Runtime
   */
  readonly runtime: string;

  /**
   * @schema CreateFunctionRequest#Role
   */
  readonly role: string;

  /**
   * @schema CreateFunctionRequest#Handler
   */
  readonly handler: string;

  /**
   * @schema CreateFunctionRequest#Code
   */
  readonly code: FunctionCode;

  /**
   * @schema CreateFunctionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateFunctionRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema CreateFunctionRequest#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema CreateFunctionRequest#Publish
   */
  readonly publish?: boolean;

  /**
   * @schema CreateFunctionRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema CreateFunctionRequest#DeadLetterConfig
   */
  readonly deadLetterConfig?: DeadLetterConfig;

  /**
   * @schema CreateFunctionRequest#Environment
   */
  readonly environment?: Environment;

  /**
   * @schema CreateFunctionRequest#KMSKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema CreateFunctionRequest#TracingConfig
   */
  readonly tracingConfig?: TracingConfig;

  /**
   * @schema CreateFunctionRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateFunctionRequest#Layers
   */
  readonly layers?: string[];

  /**
   * @schema CreateFunctionRequest#FileSystemConfigs
   */
  readonly fileSystemConfigs?: FileSystemConfig[];

  /**
   * @schema CreateFunctionRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

}

/**
 * @schema FunctionConfiguration
 */
export interface FunctionConfiguration {
  /**
   * @schema FunctionConfiguration#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema FunctionConfiguration#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema FunctionConfiguration#Runtime
   */
  readonly runtime?: string;

  /**
   * @schema FunctionConfiguration#Role
   */
  readonly role?: string;

  /**
   * @schema FunctionConfiguration#Handler
   */
  readonly handler?: string;

  /**
   * @schema FunctionConfiguration#CodeSize
   */
  readonly codeSize?: number;

  /**
   * @schema FunctionConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema FunctionConfiguration#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema FunctionConfiguration#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema FunctionConfiguration#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema FunctionConfiguration#CodeSha256
   */
  readonly codeSha256?: string;

  /**
   * @schema FunctionConfiguration#Version
   */
  readonly version?: string;

  /**
   * @schema FunctionConfiguration#VpcConfig
   */
  readonly vpcConfig?: VpcConfigResponse;

  /**
   * @schema FunctionConfiguration#DeadLetterConfig
   */
  readonly deadLetterConfig?: DeadLetterConfig;

  /**
   * @schema FunctionConfiguration#Environment
   */
  readonly environment?: EnvironmentResponse;

  /**
   * @schema FunctionConfiguration#KMSKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema FunctionConfiguration#TracingConfig
   */
  readonly tracingConfig?: TracingConfigResponse;

  /**
   * @schema FunctionConfiguration#MasterArn
   */
  readonly masterArn?: string;

  /**
   * @schema FunctionConfiguration#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema FunctionConfiguration#Layers
   */
  readonly layers?: Layer[];

  /**
   * @schema FunctionConfiguration#State
   */
  readonly state?: string;

  /**
   * @schema FunctionConfiguration#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema FunctionConfiguration#StateReasonCode
   */
  readonly stateReasonCode?: string;

  /**
   * @schema FunctionConfiguration#LastUpdateStatus
   */
  readonly lastUpdateStatus?: string;

  /**
   * @schema FunctionConfiguration#LastUpdateStatusReason
   */
  readonly lastUpdateStatusReason?: string;

  /**
   * @schema FunctionConfiguration#LastUpdateStatusReasonCode
   */
  readonly lastUpdateStatusReasonCode?: string;

  /**
   * @schema FunctionConfiguration#FileSystemConfigs
   */
  readonly fileSystemConfigs?: FileSystemConfig[];

  /**
   * @schema FunctionConfiguration#SigningProfileVersionArn
   */
  readonly signingProfileVersionArn?: string;

  /**
   * @schema FunctionConfiguration#SigningJobArn
   */
  readonly signingJobArn?: string;

}

/**
 * @schema DeleteAliasRequest
 */
export interface DeleteAliasRequest {
  /**
   * @schema DeleteAliasRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema DeleteAliasRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteCodeSigningConfigRequest
 */
export interface DeleteCodeSigningConfigRequest {
  /**
   * @schema DeleteCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

}

/**
 * @schema DeleteCodeSigningConfigResponse
 */
export interface DeleteCodeSigningConfigResponse {
}

/**
 * @schema DeleteEventSourceMappingRequest
 */
export interface DeleteEventSourceMappingRequest {
  /**
   * @schema DeleteEventSourceMappingRequest#UUID
   */
  readonly uuid: string;

}

/**
 * @schema DeleteFunctionRequest
 */
export interface DeleteFunctionRequest {
  /**
   * @schema DeleteFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema DeleteFunctionRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema DeleteFunctionCodeSigningConfigRequest
 */
export interface DeleteFunctionCodeSigningConfigRequest {
  /**
   * @schema DeleteFunctionCodeSigningConfigRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema DeleteFunctionConcurrencyRequest
 */
export interface DeleteFunctionConcurrencyRequest {
  /**
   * @schema DeleteFunctionConcurrencyRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema DeleteFunctionEventInvokeConfigRequest
 */
export interface DeleteFunctionEventInvokeConfigRequest {
  /**
   * @schema DeleteFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema DeleteFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema DeleteLayerVersionRequest
 */
export interface DeleteLayerVersionRequest {
  /**
   * @schema DeleteLayerVersionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema DeleteLayerVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema DeleteProvisionedConcurrencyConfigRequest
 */
export interface DeleteProvisionedConcurrencyConfigRequest {
  /**
   * @schema DeleteProvisionedConcurrencyConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema DeleteProvisionedConcurrencyConfigRequest#Qualifier
   */
  readonly qualifier: string;

}

/**
 * @schema GetAccountSettingsRequest
 */
export interface GetAccountSettingsRequest {
}

/**
 * @schema GetAccountSettingsResponse
 */
export interface GetAccountSettingsResponse {
  /**
   * @schema GetAccountSettingsResponse#AccountLimit
   */
  readonly accountLimit?: AccountLimit;

  /**
   * @schema GetAccountSettingsResponse#AccountUsage
   */
  readonly accountUsage?: AccountUsage;

}

/**
 * @schema GetAliasRequest
 */
export interface GetAliasRequest {
  /**
   * @schema GetAliasRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema GetAliasRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetCodeSigningConfigRequest
 */
export interface GetCodeSigningConfigRequest {
  /**
   * @schema GetCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

}

/**
 * @schema GetCodeSigningConfigResponse
 */
export interface GetCodeSigningConfigResponse {
  /**
   * @schema GetCodeSigningConfigResponse#CodeSigningConfig
   */
  readonly codeSigningConfig: CodeSigningConfig;

}

/**
 * @schema GetEventSourceMappingRequest
 */
export interface GetEventSourceMappingRequest {
  /**
   * @schema GetEventSourceMappingRequest#UUID
   */
  readonly uuid: string;

}

/**
 * @schema GetFunctionRequest
 */
export interface GetFunctionRequest {
  /**
   * @schema GetFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema GetFunctionRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema GetFunctionResponse
 */
export interface GetFunctionResponse {
  /**
   * @schema GetFunctionResponse#Configuration
   */
  readonly configuration?: FunctionConfiguration;

  /**
   * @schema GetFunctionResponse#Code
   */
  readonly code?: FunctionCodeLocation;

  /**
   * @schema GetFunctionResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GetFunctionResponse#Concurrency
   */
  readonly concurrency?: Concurrency;

}

/**
 * @schema GetFunctionCodeSigningConfigRequest
 */
export interface GetFunctionCodeSigningConfigRequest {
  /**
   * @schema GetFunctionCodeSigningConfigRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema GetFunctionCodeSigningConfigResponse
 */
export interface GetFunctionCodeSigningConfigResponse {
  /**
   * @schema GetFunctionCodeSigningConfigResponse#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema GetFunctionCodeSigningConfigResponse#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema GetFunctionConcurrencyRequest
 */
export interface GetFunctionConcurrencyRequest {
  /**
   * @schema GetFunctionConcurrencyRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema GetFunctionConcurrencyResponse
 */
export interface GetFunctionConcurrencyResponse {
  /**
   * @schema GetFunctionConcurrencyResponse#ReservedConcurrentExecutions
   */
  readonly reservedConcurrentExecutions?: number;

}

/**
 * @schema GetFunctionConfigurationRequest
 */
export interface GetFunctionConfigurationRequest {
  /**
   * @schema GetFunctionConfigurationRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema GetFunctionConfigurationRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema GetFunctionEventInvokeConfigRequest
 */
export interface GetFunctionEventInvokeConfigRequest {
  /**
   * @schema GetFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema GetFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema FunctionEventInvokeConfig
 */
export interface FunctionEventInvokeConfig {
  /**
   * @schema FunctionEventInvokeConfig#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema FunctionEventInvokeConfig#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema FunctionEventInvokeConfig#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema FunctionEventInvokeConfig#MaximumEventAgeInSeconds
   */
  readonly maximumEventAgeInSeconds?: number;

  /**
   * @schema FunctionEventInvokeConfig#DestinationConfig
   */
  readonly destinationConfig?: DestinationConfig;

}

/**
 * @schema GetLayerVersionRequest
 */
export interface GetLayerVersionRequest {
  /**
   * @schema GetLayerVersionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema GetLayerVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema GetLayerVersionResponse
 */
export interface GetLayerVersionResponse {
  /**
   * @schema GetLayerVersionResponse#Content
   */
  readonly content?: LayerVersionContentOutput;

  /**
   * @schema GetLayerVersionResponse#LayerArn
   */
  readonly layerArn?: string;

  /**
   * @schema GetLayerVersionResponse#LayerVersionArn
   */
  readonly layerVersionArn?: string;

  /**
   * @schema GetLayerVersionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetLayerVersionResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema GetLayerVersionResponse#Version
   */
  readonly version?: number;

  /**
   * @schema GetLayerVersionResponse#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema GetLayerVersionResponse#LicenseInfo
   */
  readonly licenseInfo?: string;

}

/**
 * @schema GetLayerVersionByArnRequest
 */
export interface GetLayerVersionByArnRequest {
  /**
   * @schema GetLayerVersionByArnRequest#Arn
   */
  readonly arn: string;

}

/**
 * @schema GetLayerVersionPolicyRequest
 */
export interface GetLayerVersionPolicyRequest {
  /**
   * @schema GetLayerVersionPolicyRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema GetLayerVersionPolicyRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema GetLayerVersionPolicyResponse
 */
export interface GetLayerVersionPolicyResponse {
  /**
   * @schema GetLayerVersionPolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema GetLayerVersionPolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema GetPolicyRequest
 */
export interface GetPolicyRequest {
  /**
   * @schema GetPolicyRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema GetPolicyRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema GetPolicyResponse
 */
export interface GetPolicyResponse {
  /**
   * @schema GetPolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema GetPolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema GetProvisionedConcurrencyConfigRequest
 */
export interface GetProvisionedConcurrencyConfigRequest {
  /**
   * @schema GetProvisionedConcurrencyConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema GetProvisionedConcurrencyConfigRequest#Qualifier
   */
  readonly qualifier: string;

}

/**
 * @schema GetProvisionedConcurrencyConfigResponse
 */
export interface GetProvisionedConcurrencyConfigResponse {
  /**
   * @schema GetProvisionedConcurrencyConfigResponse#RequestedProvisionedConcurrentExecutions
   */
  readonly requestedProvisionedConcurrentExecutions?: number;

  /**
   * @schema GetProvisionedConcurrencyConfigResponse#AvailableProvisionedConcurrentExecutions
   */
  readonly availableProvisionedConcurrentExecutions?: number;

  /**
   * @schema GetProvisionedConcurrencyConfigResponse#AllocatedProvisionedConcurrentExecutions
   */
  readonly allocatedProvisionedConcurrentExecutions?: number;

  /**
   * @schema GetProvisionedConcurrencyConfigResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GetProvisionedConcurrencyConfigResponse#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema GetProvisionedConcurrencyConfigResponse#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema InvocationRequest
 */
export interface InvocationRequest {
  /**
   * @schema InvocationRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema InvocationRequest#InvocationType
   */
  readonly invocationType?: string;

  /**
   * @schema InvocationRequest#LogType
   */
  readonly logType?: string;

  /**
   * @schema InvocationRequest#ClientContext
   */
  readonly clientContext?: string;

  /**
   * @schema InvocationRequest#Payload
   */
  readonly payload?: any;

  /**
   * @schema InvocationRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * @schema InvocationResponse
 */
export interface InvocationResponse {
  /**
   * @schema InvocationResponse#StatusCode
   */
  readonly statusCode?: number;

  /**
   * @schema InvocationResponse#FunctionError
   */
  readonly functionError?: string;

  /**
   * @schema InvocationResponse#LogResult
   */
  readonly logResult?: string;

  /**
   * @schema InvocationResponse#Payload
   */
  readonly payload?: any;

  /**
   * @schema InvocationResponse#ExecutedVersion
   */
  readonly executedVersion?: string;

}

/**
 * @schema InvokeAsyncRequest
 */
export interface InvokeAsyncRequest {
  /**
   * @schema InvokeAsyncRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema InvokeAsyncRequest#InvokeArgs
   */
  readonly invokeArgs: any;

}

/**
 * @schema InvokeAsyncResponse
 */
export interface InvokeAsyncResponse {
  /**
   * @schema InvokeAsyncResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListAliasesRequest
 */
export interface ListAliasesRequest {
  /**
   * @schema ListAliasesRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema ListAliasesRequest#FunctionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema ListAliasesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListAliasesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListAliasesResponse
 */
export interface ListAliasesResponse {
  /**
   * @schema ListAliasesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListAliasesResponse#Aliases
   */
  readonly aliases?: AliasConfiguration[];

}

/**
 * @schema ListCodeSigningConfigsRequest
 */
export interface ListCodeSigningConfigsRequest {
  /**
   * @schema ListCodeSigningConfigsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListCodeSigningConfigsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListCodeSigningConfigsResponse
 */
export interface ListCodeSigningConfigsResponse {
  /**
   * @schema ListCodeSigningConfigsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListCodeSigningConfigsResponse#CodeSigningConfigs
   */
  readonly codeSigningConfigs?: CodeSigningConfig[];

}

/**
 * @schema ListEventSourceMappingsRequest
 */
export interface ListEventSourceMappingsRequest {
  /**
   * @schema ListEventSourceMappingsRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema ListEventSourceMappingsRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema ListEventSourceMappingsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListEventSourceMappingsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListEventSourceMappingsResponse
 */
export interface ListEventSourceMappingsResponse {
  /**
   * @schema ListEventSourceMappingsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListEventSourceMappingsResponse#EventSourceMappings
   */
  readonly eventSourceMappings?: EventSourceMappingConfiguration[];

}

/**
 * @schema ListFunctionEventInvokeConfigsRequest
 */
export interface ListFunctionEventInvokeConfigsRequest {
  /**
   * @schema ListFunctionEventInvokeConfigsRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema ListFunctionEventInvokeConfigsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListFunctionEventInvokeConfigsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListFunctionEventInvokeConfigsResponse
 */
export interface ListFunctionEventInvokeConfigsResponse {
  /**
   * @schema ListFunctionEventInvokeConfigsResponse#FunctionEventInvokeConfigs
   */
  readonly functionEventInvokeConfigs?: FunctionEventInvokeConfig[];

  /**
   * @schema ListFunctionEventInvokeConfigsResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListFunctionsRequest
 */
export interface ListFunctionsRequest {
  /**
   * @schema ListFunctionsRequest#MasterRegion
   */
  readonly masterRegion?: string;

  /**
   * @schema ListFunctionsRequest#FunctionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema ListFunctionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListFunctionsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListFunctionsResponse
 */
export interface ListFunctionsResponse {
  /**
   * @schema ListFunctionsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListFunctionsResponse#Functions
   */
  readonly functions?: FunctionConfiguration[];

}

/**
 * @schema ListFunctionsByCodeSigningConfigRequest
 */
export interface ListFunctionsByCodeSigningConfigRequest {
  /**
   * @schema ListFunctionsByCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema ListFunctionsByCodeSigningConfigRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListFunctionsByCodeSigningConfigRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListFunctionsByCodeSigningConfigResponse
 */
export interface ListFunctionsByCodeSigningConfigResponse {
  /**
   * @schema ListFunctionsByCodeSigningConfigResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListFunctionsByCodeSigningConfigResponse#FunctionArns
   */
  readonly functionArns?: string[];

}

/**
 * @schema ListLayerVersionsRequest
 */
export interface ListLayerVersionsRequest {
  /**
   * @schema ListLayerVersionsRequest#CompatibleRuntime
   */
  readonly compatibleRuntime?: string;

  /**
   * @schema ListLayerVersionsRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema ListLayerVersionsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListLayerVersionsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListLayerVersionsResponse
 */
export interface ListLayerVersionsResponse {
  /**
   * @schema ListLayerVersionsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListLayerVersionsResponse#LayerVersions
   */
  readonly layerVersions?: LayerVersionsListItem[];

}

/**
 * @schema ListLayersRequest
 */
export interface ListLayersRequest {
  /**
   * @schema ListLayersRequest#CompatibleRuntime
   */
  readonly compatibleRuntime?: string;

  /**
   * @schema ListLayersRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListLayersRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListLayersResponse
 */
export interface ListLayersResponse {
  /**
   * @schema ListLayersResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListLayersResponse#Layers
   */
  readonly layers?: LayersListItem[];

}

/**
 * @schema ListProvisionedConcurrencyConfigsRequest
 */
export interface ListProvisionedConcurrencyConfigsRequest {
  /**
   * @schema ListProvisionedConcurrencyConfigsRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema ListProvisionedConcurrencyConfigsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListProvisionedConcurrencyConfigsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListProvisionedConcurrencyConfigsResponse
 */
export interface ListProvisionedConcurrencyConfigsResponse {
  /**
   * @schema ListProvisionedConcurrencyConfigsResponse#ProvisionedConcurrencyConfigs
   */
  readonly provisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];

  /**
   * @schema ListProvisionedConcurrencyConfigsResponse#NextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListTagsRequest
 */
export interface ListTagsRequest {
  /**
   * @schema ListTagsRequest#Resource
   */
  readonly resource: string;

}

/**
 * @schema ListTagsResponse
 */
export interface ListTagsResponse {
  /**
   * @schema ListTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListVersionsByFunctionRequest
 */
export interface ListVersionsByFunctionRequest {
  /**
   * @schema ListVersionsByFunctionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema ListVersionsByFunctionRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListVersionsByFunctionRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListVersionsByFunctionResponse
 */
export interface ListVersionsByFunctionResponse {
  /**
   * @schema ListVersionsByFunctionResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListVersionsByFunctionResponse#Versions
   */
  readonly versions?: FunctionConfiguration[];

}

/**
 * @schema PublishLayerVersionRequest
 */
export interface PublishLayerVersionRequest {
  /**
   * @schema PublishLayerVersionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema PublishLayerVersionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema PublishLayerVersionRequest#Content
   */
  readonly content: LayerVersionContentInput;

  /**
   * @schema PublishLayerVersionRequest#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema PublishLayerVersionRequest#LicenseInfo
   */
  readonly licenseInfo?: string;

}

/**
 * @schema PublishLayerVersionResponse
 */
export interface PublishLayerVersionResponse {
  /**
   * @schema PublishLayerVersionResponse#Content
   */
  readonly content?: LayerVersionContentOutput;

  /**
   * @schema PublishLayerVersionResponse#LayerArn
   */
  readonly layerArn?: string;

  /**
   * @schema PublishLayerVersionResponse#LayerVersionArn
   */
  readonly layerVersionArn?: string;

  /**
   * @schema PublishLayerVersionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema PublishLayerVersionResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema PublishLayerVersionResponse#Version
   */
  readonly version?: number;

  /**
   * @schema PublishLayerVersionResponse#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema PublishLayerVersionResponse#LicenseInfo
   */
  readonly licenseInfo?: string;

}

/**
 * @schema PublishVersionRequest
 */
export interface PublishVersionRequest {
  /**
   * @schema PublishVersionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema PublishVersionRequest#CodeSha256
   */
  readonly codeSha256?: string;

  /**
   * @schema PublishVersionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema PublishVersionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema PutFunctionCodeSigningConfigRequest
 */
export interface PutFunctionCodeSigningConfigRequest {
  /**
   * @schema PutFunctionCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema PutFunctionCodeSigningConfigRequest#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema PutFunctionCodeSigningConfigResponse
 */
export interface PutFunctionCodeSigningConfigResponse {
  /**
   * @schema PutFunctionCodeSigningConfigResponse#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema PutFunctionCodeSigningConfigResponse#FunctionName
   */
  readonly functionName: string;

}

/**
 * @schema PutFunctionConcurrencyRequest
 */
export interface PutFunctionConcurrencyRequest {
  /**
   * @schema PutFunctionConcurrencyRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema PutFunctionConcurrencyRequest#ReservedConcurrentExecutions
   */
  readonly reservedConcurrentExecutions: number;

}

/**
 * @schema Concurrency
 */
export interface Concurrency {
  /**
   * @schema Concurrency#ReservedConcurrentExecutions
   */
  readonly reservedConcurrentExecutions?: number;

}

/**
 * @schema PutFunctionEventInvokeConfigRequest
 */
export interface PutFunctionEventInvokeConfigRequest {
  /**
   * @schema PutFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema PutFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema PutFunctionEventInvokeConfigRequest#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema PutFunctionEventInvokeConfigRequest#MaximumEventAgeInSeconds
   */
  readonly maximumEventAgeInSeconds?: number;

  /**
   * @schema PutFunctionEventInvokeConfigRequest#DestinationConfig
   */
  readonly destinationConfig?: DestinationConfig;

}

/**
 * @schema PutProvisionedConcurrencyConfigRequest
 */
export interface PutProvisionedConcurrencyConfigRequest {
  /**
   * @schema PutProvisionedConcurrencyConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema PutProvisionedConcurrencyConfigRequest#Qualifier
   */
  readonly qualifier: string;

  /**
   * @schema PutProvisionedConcurrencyConfigRequest#ProvisionedConcurrentExecutions
   */
  readonly provisionedConcurrentExecutions: number;

}

/**
 * @schema PutProvisionedConcurrencyConfigResponse
 */
export interface PutProvisionedConcurrencyConfigResponse {
  /**
   * @schema PutProvisionedConcurrencyConfigResponse#RequestedProvisionedConcurrentExecutions
   */
  readonly requestedProvisionedConcurrentExecutions?: number;

  /**
   * @schema PutProvisionedConcurrencyConfigResponse#AvailableProvisionedConcurrentExecutions
   */
  readonly availableProvisionedConcurrentExecutions?: number;

  /**
   * @schema PutProvisionedConcurrencyConfigResponse#AllocatedProvisionedConcurrentExecutions
   */
  readonly allocatedProvisionedConcurrentExecutions?: number;

  /**
   * @schema PutProvisionedConcurrencyConfigResponse#Status
   */
  readonly status?: string;

  /**
   * @schema PutProvisionedConcurrencyConfigResponse#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema PutProvisionedConcurrencyConfigResponse#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema RemoveLayerVersionPermissionRequest
 */
export interface RemoveLayerVersionPermissionRequest {
  /**
   * @schema RemoveLayerVersionPermissionRequest#LayerName
   */
  readonly layerName: string;

  /**
   * @schema RemoveLayerVersionPermissionRequest#VersionNumber
   */
  readonly versionNumber: number;

  /**
   * @schema RemoveLayerVersionPermissionRequest#StatementId
   */
  readonly statementId: string;

  /**
   * @schema RemoveLayerVersionPermissionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema RemovePermissionRequest
 */
export interface RemovePermissionRequest {
  /**
   * @schema RemovePermissionRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema RemovePermissionRequest#StatementId
   */
  readonly statementId: string;

  /**
   * @schema RemovePermissionRequest#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema RemovePermissionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateAliasRequest
 */
export interface UpdateAliasRequest {
  /**
   * @schema UpdateAliasRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema UpdateAliasRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateAliasRequest#FunctionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema UpdateAliasRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateAliasRequest#RoutingConfig
   */
  readonly routingConfig?: AliasRoutingConfiguration;

  /**
   * @schema UpdateAliasRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema UpdateCodeSigningConfigRequest
 */
export interface UpdateCodeSigningConfigRequest {
  /**
   * @schema UpdateCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema UpdateCodeSigningConfigRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateCodeSigningConfigRequest#AllowedPublishers
   */
  readonly allowedPublishers?: AllowedPublishers;

  /**
   * @schema UpdateCodeSigningConfigRequest#CodeSigningPolicies
   */
  readonly codeSigningPolicies?: CodeSigningPolicies;

}

/**
 * @schema UpdateCodeSigningConfigResponse
 */
export interface UpdateCodeSigningConfigResponse {
  /**
   * @schema UpdateCodeSigningConfigResponse#CodeSigningConfig
   */
  readonly codeSigningConfig: CodeSigningConfig;

}

/**
 * @schema UpdateEventSourceMappingRequest
 */
export interface UpdateEventSourceMappingRequest {
  /**
   * @schema UpdateEventSourceMappingRequest#UUID
   */
  readonly uuid: string;

  /**
   * @schema UpdateEventSourceMappingRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema UpdateEventSourceMappingRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema UpdateEventSourceMappingRequest#BatchSize
   */
  readonly batchSize?: number;

  /**
   * @schema UpdateEventSourceMappingRequest#MaximumBatchingWindowInSeconds
   */
  readonly maximumBatchingWindowInSeconds?: number;

  /**
   * @schema UpdateEventSourceMappingRequest#DestinationConfig
   */
  readonly destinationConfig?: DestinationConfig;

  /**
   * @schema UpdateEventSourceMappingRequest#MaximumRecordAgeInSeconds
   */
  readonly maximumRecordAgeInSeconds?: number;

  /**
   * @schema UpdateEventSourceMappingRequest#BisectBatchOnFunctionError
   */
  readonly bisectBatchOnFunctionError?: boolean;

  /**
   * @schema UpdateEventSourceMappingRequest#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema UpdateEventSourceMappingRequest#ParallelizationFactor
   */
  readonly parallelizationFactor?: number;

  /**
   * @schema UpdateEventSourceMappingRequest#SourceAccessConfigurations
   */
  readonly sourceAccessConfigurations?: SourceAccessConfiguration[];

}

/**
 * @schema UpdateFunctionCodeRequest
 */
export interface UpdateFunctionCodeRequest {
  /**
   * @schema UpdateFunctionCodeRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema UpdateFunctionCodeRequest#ZipFile
   */
  readonly zipFile?: any;

  /**
   * @schema UpdateFunctionCodeRequest#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema UpdateFunctionCodeRequest#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema UpdateFunctionCodeRequest#S3ObjectVersion
   */
  readonly s3ObjectVersion?: string;

  /**
   * @schema UpdateFunctionCodeRequest#Publish
   */
  readonly publish?: boolean;

  /**
   * @schema UpdateFunctionCodeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema UpdateFunctionCodeRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema UpdateFunctionConfigurationRequest
 */
export interface UpdateFunctionConfigurationRequest {
  /**
   * @schema UpdateFunctionConfigurationRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema UpdateFunctionConfigurationRequest#Role
   */
  readonly role?: string;

  /**
   * @schema UpdateFunctionConfigurationRequest#Handler
   */
  readonly handler?: string;

  /**
   * @schema UpdateFunctionConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateFunctionConfigurationRequest#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema UpdateFunctionConfigurationRequest#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema UpdateFunctionConfigurationRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema UpdateFunctionConfigurationRequest#Environment
   */
  readonly environment?: Environment;

  /**
   * @schema UpdateFunctionConfigurationRequest#Runtime
   */
  readonly runtime?: string;

  /**
   * @schema UpdateFunctionConfigurationRequest#DeadLetterConfig
   */
  readonly deadLetterConfig?: DeadLetterConfig;

  /**
   * @schema UpdateFunctionConfigurationRequest#KMSKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema UpdateFunctionConfigurationRequest#TracingConfig
   */
  readonly tracingConfig?: TracingConfig;

  /**
   * @schema UpdateFunctionConfigurationRequest#RevisionId
   */
  readonly revisionId?: string;

  /**
   * @schema UpdateFunctionConfigurationRequest#Layers
   */
  readonly layers?: string[];

  /**
   * @schema UpdateFunctionConfigurationRequest#FileSystemConfigs
   */
  readonly fileSystemConfigs?: FileSystemConfig[];

}

/**
 * @schema UpdateFunctionEventInvokeConfigRequest
 */
export interface UpdateFunctionEventInvokeConfigRequest {
  /**
   * @schema UpdateFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName: string;

  /**
   * @schema UpdateFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema UpdateFunctionEventInvokeConfigRequest#MaximumRetryAttempts
   */
  readonly maximumRetryAttempts?: number;

  /**
   * @schema UpdateFunctionEventInvokeConfigRequest#MaximumEventAgeInSeconds
   */
  readonly maximumEventAgeInSeconds?: number;

  /**
   * @schema UpdateFunctionEventInvokeConfigRequest#DestinationConfig
   */
  readonly destinationConfig?: DestinationConfig;

}

/**
 * @schema AliasRoutingConfiguration
 */
export interface AliasRoutingConfiguration {
  /**
   * @schema AliasRoutingConfiguration#AdditionalVersionWeights
   */
  readonly additionalVersionWeights?: { [key: string]: number };

}

/**
 * @schema AllowedPublishers
 */
export interface AllowedPublishers {
  /**
   * @schema AllowedPublishers#SigningProfileVersionArns
   */
  readonly signingProfileVersionArns: string[];

}

/**
 * @schema CodeSigningPolicies
 */
export interface CodeSigningPolicies {
  /**
   * @schema CodeSigningPolicies#UntrustedArtifactOnDeployment
   */
  readonly untrustedArtifactOnDeployment?: string;

}

/**
 * @schema CodeSigningConfig
 */
export interface CodeSigningConfig {
  /**
   * @schema CodeSigningConfig#CodeSigningConfigId
   */
  readonly codeSigningConfigId: string;

  /**
   * @schema CodeSigningConfig#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn: string;

  /**
   * @schema CodeSigningConfig#Description
   */
  readonly description?: string;

  /**
   * @schema CodeSigningConfig#AllowedPublishers
   */
  readonly allowedPublishers: AllowedPublishers;

  /**
   * @schema CodeSigningConfig#CodeSigningPolicies
   */
  readonly codeSigningPolicies: CodeSigningPolicies;

  /**
   * @schema CodeSigningConfig#LastModified
   */
  readonly lastModified: string;

}

/**
 * @schema DestinationConfig
 */
export interface DestinationConfig {
  /**
   * @schema DestinationConfig#OnSuccess
   */
  readonly onSuccess?: OnSuccess;

  /**
   * @schema DestinationConfig#OnFailure
   */
  readonly onFailure?: OnFailure;

}

/**
 * @schema SourceAccessConfiguration
 */
export interface SourceAccessConfiguration {
  /**
   * @schema SourceAccessConfiguration#Type
   */
  readonly type?: string;

  /**
   * @schema SourceAccessConfiguration#URI
   */
  readonly uri?: string;

}

/**
 * @schema FunctionCode
 */
export interface FunctionCode {
  /**
   * @schema FunctionCode#ZipFile
   */
  readonly zipFile?: any;

  /**
   * @schema FunctionCode#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema FunctionCode#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema FunctionCode#S3ObjectVersion
   */
  readonly s3ObjectVersion?: string;

}

/**
 * @schema VpcConfig
 */
export interface VpcConfig {
  /**
   * @schema VpcConfig#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema DeadLetterConfig
 */
export interface DeadLetterConfig {
  /**
   * @schema DeadLetterConfig#TargetArn
   */
  readonly targetArn?: string;

}

/**
 * @schema Environment
 */
export interface Environment {
  /**
   * @schema Environment#Variables
   */
  readonly variables?: { [key: string]: string };

}

/**
 * @schema TracingConfig
 */
export interface TracingConfig {
  /**
   * @schema TracingConfig#Mode
   */
  readonly mode?: string;

}

/**
 * @schema FileSystemConfig
 */
export interface FileSystemConfig {
  /**
   * @schema FileSystemConfig#Arn
   */
  readonly arn: string;

  /**
   * @schema FileSystemConfig#LocalMountPath
   */
  readonly localMountPath: string;

}

/**
 * @schema VpcConfigResponse
 */
export interface VpcConfigResponse {
  /**
   * @schema VpcConfigResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcConfigResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema VpcConfigResponse#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema EnvironmentResponse
 */
export interface EnvironmentResponse {
  /**
   * @schema EnvironmentResponse#Variables
   */
  readonly variables?: { [key: string]: string };

  /**
   * @schema EnvironmentResponse#Error
   */
  readonly error?: EnvironmentError;

}

/**
 * @schema TracingConfigResponse
 */
export interface TracingConfigResponse {
  /**
   * @schema TracingConfigResponse#Mode
   */
  readonly mode?: string;

}

/**
 * @schema Layer
 */
export interface Layer {
  /**
   * @schema Layer#Arn
   */
  readonly arn?: string;

  /**
   * @schema Layer#CodeSize
   */
  readonly codeSize?: number;

  /**
   * @schema Layer#SigningProfileVersionArn
   */
  readonly signingProfileVersionArn?: string;

  /**
   * @schema Layer#SigningJobArn
   */
  readonly signingJobArn?: string;

}

/**
 * @schema AccountLimit
 */
export interface AccountLimit {
  /**
   * @schema AccountLimit#TotalCodeSize
   */
  readonly totalCodeSize?: number;

  /**
   * @schema AccountLimit#CodeSizeUnzipped
   */
  readonly codeSizeUnzipped?: number;

  /**
   * @schema AccountLimit#CodeSizeZipped
   */
  readonly codeSizeZipped?: number;

  /**
   * @schema AccountLimit#ConcurrentExecutions
   */
  readonly concurrentExecutions?: number;

  /**
   * @schema AccountLimit#UnreservedConcurrentExecutions
   */
  readonly unreservedConcurrentExecutions?: number;

}

/**
 * @schema AccountUsage
 */
export interface AccountUsage {
  /**
   * @schema AccountUsage#TotalCodeSize
   */
  readonly totalCodeSize?: number;

  /**
   * @schema AccountUsage#FunctionCount
   */
  readonly functionCount?: number;

}

/**
 * @schema FunctionCodeLocation
 */
export interface FunctionCodeLocation {
  /**
   * @schema FunctionCodeLocation#RepositoryType
   */
  readonly repositoryType?: string;

  /**
   * @schema FunctionCodeLocation#Location
   */
  readonly location?: string;

}

/**
 * @schema LayerVersionContentOutput
 */
export interface LayerVersionContentOutput {
  /**
   * @schema LayerVersionContentOutput#Location
   */
  readonly location?: string;

  /**
   * @schema LayerVersionContentOutput#CodeSha256
   */
  readonly codeSha256?: string;

  /**
   * @schema LayerVersionContentOutput#CodeSize
   */
  readonly codeSize?: number;

  /**
   * @schema LayerVersionContentOutput#SigningProfileVersionArn
   */
  readonly signingProfileVersionArn?: string;

  /**
   * @schema LayerVersionContentOutput#SigningJobArn
   */
  readonly signingJobArn?: string;

}

/**
 * @schema LayerVersionsListItem
 */
export interface LayerVersionsListItem {
  /**
   * @schema LayerVersionsListItem#LayerVersionArn
   */
  readonly layerVersionArn?: string;

  /**
   * @schema LayerVersionsListItem#Version
   */
  readonly version?: number;

  /**
   * @schema LayerVersionsListItem#Description
   */
  readonly description?: string;

  /**
   * @schema LayerVersionsListItem#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema LayerVersionsListItem#CompatibleRuntimes
   */
  readonly compatibleRuntimes?: string[];

  /**
   * @schema LayerVersionsListItem#LicenseInfo
   */
  readonly licenseInfo?: string;

}

/**
 * @schema LayersListItem
 */
export interface LayersListItem {
  /**
   * @schema LayersListItem#LayerName
   */
  readonly layerName?: string;

  /**
   * @schema LayersListItem#LayerArn
   */
  readonly layerArn?: string;

  /**
   * @schema LayersListItem#LatestMatchingVersion
   */
  readonly latestMatchingVersion?: LayerVersionsListItem;

}

/**
 * @schema ProvisionedConcurrencyConfigListItem
 */
export interface ProvisionedConcurrencyConfigListItem {
  /**
   * @schema ProvisionedConcurrencyConfigListItem#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema ProvisionedConcurrencyConfigListItem#RequestedProvisionedConcurrentExecutions
   */
  readonly requestedProvisionedConcurrentExecutions?: number;

  /**
   * @schema ProvisionedConcurrencyConfigListItem#AvailableProvisionedConcurrentExecutions
   */
  readonly availableProvisionedConcurrentExecutions?: number;

  /**
   * @schema ProvisionedConcurrencyConfigListItem#AllocatedProvisionedConcurrentExecutions
   */
  readonly allocatedProvisionedConcurrentExecutions?: number;

  /**
   * @schema ProvisionedConcurrencyConfigListItem#Status
   */
  readonly status?: string;

  /**
   * @schema ProvisionedConcurrencyConfigListItem#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema ProvisionedConcurrencyConfigListItem#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema LayerVersionContentInput
 */
export interface LayerVersionContentInput {
  /**
   * @schema LayerVersionContentInput#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema LayerVersionContentInput#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema LayerVersionContentInput#S3ObjectVersion
   */
  readonly s3ObjectVersion?: string;

  /**
   * @schema LayerVersionContentInput#ZipFile
   */
  readonly zipFile?: any;

}

/**
 * @schema OnSuccess
 */
export interface OnSuccess {
  /**
   * @schema OnSuccess#Destination
   */
  readonly destination?: string;

}

/**
 * @schema OnFailure
 */
export interface OnFailure {
  /**
   * @schema OnFailure#Destination
   */
  readonly destination?: string;

}

/**
 * @schema EnvironmentError
 */
export interface EnvironmentError {
  /**
   * @schema EnvironmentError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EnvironmentError#Message
   */
  readonly message?: string;

}
