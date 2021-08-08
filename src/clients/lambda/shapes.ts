/**
 * @schema LambdaAddLayerVersionPermissionRequest
 */
export interface LambdaAddLayerVersionPermissionRequest {
  /**
   * @schema LambdaAddLayerVersionPermissionRequest#LayerName
   */
  readonly layerName?: string;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#StatementId
   */
  readonly statementId?: string;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#Action
   */
  readonly action?: string;

  /**
   * @schema LambdaAddLayerVersionPermissionRequest#Principal
   */
  readonly principal?: string;

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
 * Converts an object of type 'LambdaAddLayerVersionPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaAddLayerVersionPermissionRequest(obj: LambdaAddLayerVersionPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerName': obj.layerName,
    'VersionNumber': obj.versionNumber,
    'StatementId': obj.statementId,
    'Action': obj.action,
    'Principal': obj.principal,
    'OrganizationId': obj.organizationId,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaAddLayerVersionPermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaAddLayerVersionPermissionResponse(obj: LambdaAddLayerVersionPermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statement': obj.statement,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaAddPermissionRequest
 */
export interface LambdaAddPermissionRequest {
  /**
   * @schema LambdaAddPermissionRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaAddPermissionRequest#StatementId
   */
  readonly statementId?: string;

  /**
   * @schema LambdaAddPermissionRequest#Action
   */
  readonly action?: string;

  /**
   * @schema LambdaAddPermissionRequest#Principal
   */
  readonly principal?: string;

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
 * Converts an object of type 'LambdaAddPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaAddPermissionRequest(obj: LambdaAddPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'StatementId': obj.statementId,
    'Action': obj.action,
    'Principal': obj.principal,
    'SourceArn': obj.sourceArn,
    'SourceAccount': obj.sourceAccount,
    'EventSourceToken': obj.eventSourceToken,
    'Qualifier': obj.qualifier,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaAddPermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaAddPermissionResponse(obj: LambdaAddPermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Statement': obj.statement,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaCreateAliasRequest
 */
export interface LambdaCreateAliasRequest {
  /**
   * @schema LambdaCreateAliasRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaCreateAliasRequest#Name
   */
  readonly name?: string;

  /**
   * @schema LambdaCreateAliasRequest#FunctionVersion
   */
  readonly functionVersion?: string;

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
 * Converts an object of type 'LambdaCreateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaCreateAliasRequest(obj: LambdaCreateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Name': obj.name,
    'FunctionVersion': obj.functionVersion,
    'Description': obj.description,
    'RoutingConfig': toJson_LambdaAliasRoutingConfiguration(obj.routingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaAliasConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaAliasConfiguration(obj: LambdaAliasConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasArn': obj.aliasArn,
    'Name': obj.name,
    'FunctionVersion': obj.functionVersion,
    'Description': obj.description,
    'RoutingConfig': toJson_LambdaAliasRoutingConfiguration(obj.routingConfig),
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly allowedPublishers?: LambdaAllowedPublishers;

  /**
   * @schema LambdaCreateCodeSigningConfigRequest#CodeSigningPolicies
   */
  readonly codeSigningPolicies?: LambdaCodeSigningPolicies;

}

/**
 * Converts an object of type 'LambdaCreateCodeSigningConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaCreateCodeSigningConfigRequest(obj: LambdaCreateCodeSigningConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'AllowedPublishers': toJson_LambdaAllowedPublishers(obj.allowedPublishers),
    'CodeSigningPolicies': toJson_LambdaCodeSigningPolicies(obj.codeSigningPolicies),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaCreateCodeSigningConfigResponse
 */
export interface LambdaCreateCodeSigningConfigResponse {
  /**
   * @schema LambdaCreateCodeSigningConfigResponse#CodeSigningConfig
   */
  readonly codeSigningConfig?: LambdaCodeSigningConfig;

}

/**
 * Converts an object of type 'LambdaCreateCodeSigningConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaCreateCodeSigningConfigResponse(obj: LambdaCreateCodeSigningConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfig': toJson_LambdaCodeSigningConfig(obj.codeSigningConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaCreateEventSourceMappingRequest
 */
export interface LambdaCreateEventSourceMappingRequest {
  /**
   * @schema LambdaCreateEventSourceMappingRequest#EventSourceArn
   */
  readonly eventSourceArn?: string;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#FunctionName
   */
  readonly functionName?: string;

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
   * @schema LambdaCreateEventSourceMappingRequest#TumblingWindowInSeconds
   */
  readonly tumblingWindowInSeconds?: number;

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

  /**
   * @schema LambdaCreateEventSourceMappingRequest#SelfManagedEventSource
   */
  readonly selfManagedEventSource?: LambdaSelfManagedEventSource;

  /**
   * @schema LambdaCreateEventSourceMappingRequest#FunctionResponseTypes
   */
  readonly functionResponseTypes?: string[];

}

/**
 * Converts an object of type 'LambdaCreateEventSourceMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaCreateEventSourceMappingRequest(obj: LambdaCreateEventSourceMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSourceArn': obj.eventSourceArn,
    'FunctionName': obj.functionName,
    'Enabled': obj.enabled,
    'BatchSize': obj.batchSize,
    'MaximumBatchingWindowInSeconds': obj.maximumBatchingWindowInSeconds,
    'ParallelizationFactor': obj.parallelizationFactor,
    'StartingPosition': obj.startingPosition,
    'StartingPositionTimestamp': obj.startingPositionTimestamp,
    'DestinationConfig': toJson_LambdaDestinationConfig(obj.destinationConfig),
    'MaximumRecordAgeInSeconds': obj.maximumRecordAgeInSeconds,
    'BisectBatchOnFunctionError': obj.bisectBatchOnFunctionError,
    'MaximumRetryAttempts': obj.maximumRetryAttempts,
    'TumblingWindowInSeconds': obj.tumblingWindowInSeconds,
    'Topics': obj.topics?.map(y => y),
    'Queues': obj.queues?.map(y => y),
    'SourceAccessConfigurations': obj.sourceAccessConfigurations?.map(y => toJson_LambdaSourceAccessConfiguration(y)),
    'SelfManagedEventSource': toJson_LambdaSelfManagedEventSource(obj.selfManagedEventSource),
    'FunctionResponseTypes': obj.functionResponseTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema LambdaEventSourceMappingConfiguration#SelfManagedEventSource
   */
  readonly selfManagedEventSource?: LambdaSelfManagedEventSource;

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

  /**
   * @schema LambdaEventSourceMappingConfiguration#TumblingWindowInSeconds
   */
  readonly tumblingWindowInSeconds?: number;

  /**
   * @schema LambdaEventSourceMappingConfiguration#FunctionResponseTypes
   */
  readonly functionResponseTypes?: string[];

}

/**
 * Converts an object of type 'LambdaEventSourceMappingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaEventSourceMappingConfiguration(obj: LambdaEventSourceMappingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UUID': obj.uuid,
    'StartingPosition': obj.startingPosition,
    'StartingPositionTimestamp': obj.startingPositionTimestamp,
    'BatchSize': obj.batchSize,
    'MaximumBatchingWindowInSeconds': obj.maximumBatchingWindowInSeconds,
    'ParallelizationFactor': obj.parallelizationFactor,
    'EventSourceArn': obj.eventSourceArn,
    'FunctionArn': obj.functionArn,
    'LastModified': obj.lastModified,
    'LastProcessingResult': obj.lastProcessingResult,
    'State': obj.state,
    'StateTransitionReason': obj.stateTransitionReason,
    'DestinationConfig': toJson_LambdaDestinationConfig(obj.destinationConfig),
    'Topics': obj.topics?.map(y => y),
    'Queues': obj.queues?.map(y => y),
    'SourceAccessConfigurations': obj.sourceAccessConfigurations?.map(y => toJson_LambdaSourceAccessConfiguration(y)),
    'SelfManagedEventSource': toJson_LambdaSelfManagedEventSource(obj.selfManagedEventSource),
    'MaximumRecordAgeInSeconds': obj.maximumRecordAgeInSeconds,
    'BisectBatchOnFunctionError': obj.bisectBatchOnFunctionError,
    'MaximumRetryAttempts': obj.maximumRetryAttempts,
    'TumblingWindowInSeconds': obj.tumblingWindowInSeconds,
    'FunctionResponseTypes': obj.functionResponseTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaCreateFunctionRequest
 */
export interface LambdaCreateFunctionRequest {
  /**
   * @schema LambdaCreateFunctionRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaCreateFunctionRequest#Runtime
   */
  readonly runtime?: string;

  /**
   * @schema LambdaCreateFunctionRequest#Role
   */
  readonly role?: string;

  /**
   * @schema LambdaCreateFunctionRequest#Handler
   */
  readonly handler?: string;

  /**
   * @schema LambdaCreateFunctionRequest#Code
   */
  readonly code?: LambdaFunctionCode;

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
   * @schema LambdaCreateFunctionRequest#PackageType
   */
  readonly packageType?: string;

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
   * @schema LambdaCreateFunctionRequest#ImageConfig
   */
  readonly imageConfig?: LambdaImageConfig;

  /**
   * @schema LambdaCreateFunctionRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

}

/**
 * Converts an object of type 'LambdaCreateFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaCreateFunctionRequest(obj: LambdaCreateFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Runtime': obj.runtime,
    'Role': obj.role,
    'Handler': obj.handler,
    'Code': toJson_LambdaFunctionCode(obj.code),
    'Description': obj.description,
    'Timeout': obj.timeout,
    'MemorySize': obj.memorySize,
    'Publish': obj.publish,
    'VpcConfig': toJson_LambdaVpcConfig(obj.vpcConfig),
    'PackageType': obj.packageType,
    'DeadLetterConfig': toJson_LambdaDeadLetterConfig(obj.deadLetterConfig),
    'Environment': toJson_LambdaEnvironment(obj.environment),
    'KMSKeyArn': obj.kmsKeyArn,
    'TracingConfig': toJson_LambdaTracingConfig(obj.tracingConfig),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Layers': obj.layers?.map(y => y),
    'FileSystemConfigs': obj.fileSystemConfigs?.map(y => toJson_LambdaFileSystemConfig(y)),
    'ImageConfig': toJson_LambdaImageConfig(obj.imageConfig),
    'CodeSigningConfigArn': obj.codeSigningConfigArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema LambdaFunctionConfiguration#PackageType
   */
  readonly packageType?: string;

  /**
   * @schema LambdaFunctionConfiguration#ImageConfigResponse
   */
  readonly imageConfigResponse?: LambdaImageConfigResponse;

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
 * Converts an object of type 'LambdaFunctionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaFunctionConfiguration(obj: LambdaFunctionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'FunctionArn': obj.functionArn,
    'Runtime': obj.runtime,
    'Role': obj.role,
    'Handler': obj.handler,
    'CodeSize': obj.codeSize,
    'Description': obj.description,
    'Timeout': obj.timeout,
    'MemorySize': obj.memorySize,
    'LastModified': obj.lastModified,
    'CodeSha256': obj.codeSha256,
    'Version': obj.version,
    'VpcConfig': toJson_LambdaVpcConfigResponse(obj.vpcConfig),
    'DeadLetterConfig': toJson_LambdaDeadLetterConfig(obj.deadLetterConfig),
    'Environment': toJson_LambdaEnvironmentResponse(obj.environment),
    'KMSKeyArn': obj.kmsKeyArn,
    'TracingConfig': toJson_LambdaTracingConfigResponse(obj.tracingConfig),
    'MasterArn': obj.masterArn,
    'RevisionId': obj.revisionId,
    'Layers': obj.layers?.map(y => toJson_LambdaLayer(y)),
    'State': obj.state,
    'StateReason': obj.stateReason,
    'StateReasonCode': obj.stateReasonCode,
    'LastUpdateStatus': obj.lastUpdateStatus,
    'LastUpdateStatusReason': obj.lastUpdateStatusReason,
    'LastUpdateStatusReasonCode': obj.lastUpdateStatusReasonCode,
    'FileSystemConfigs': obj.fileSystemConfigs?.map(y => toJson_LambdaFileSystemConfig(y)),
    'PackageType': obj.packageType,
    'ImageConfigResponse': toJson_LambdaImageConfigResponse(obj.imageConfigResponse),
    'SigningProfileVersionArn': obj.signingProfileVersionArn,
    'SigningJobArn': obj.signingJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteAliasRequest
 */
export interface LambdaDeleteAliasRequest {
  /**
   * @schema LambdaDeleteAliasRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaDeleteAliasRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'LambdaDeleteAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteAliasRequest(obj: LambdaDeleteAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteCodeSigningConfigRequest
 */
export interface LambdaDeleteCodeSigningConfigRequest {
  /**
   * @schema LambdaDeleteCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

}

/**
 * Converts an object of type 'LambdaDeleteCodeSigningConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteCodeSigningConfigRequest(obj: LambdaDeleteCodeSigningConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfigArn': obj.codeSigningConfigArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteCodeSigningConfigResponse
 */
export interface LambdaDeleteCodeSigningConfigResponse {
}

/**
 * Converts an object of type 'LambdaDeleteCodeSigningConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteCodeSigningConfigResponse(obj: LambdaDeleteCodeSigningConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteEventSourceMappingRequest
 */
export interface LambdaDeleteEventSourceMappingRequest {
  /**
   * @schema LambdaDeleteEventSourceMappingRequest#UUID
   */
  readonly uuid?: string;

}

/**
 * Converts an object of type 'LambdaDeleteEventSourceMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteEventSourceMappingRequest(obj: LambdaDeleteEventSourceMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UUID': obj.uuid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteFunctionRequest
 */
export interface LambdaDeleteFunctionRequest {
  /**
   * @schema LambdaDeleteFunctionRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaDeleteFunctionRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * Converts an object of type 'LambdaDeleteFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteFunctionRequest(obj: LambdaDeleteFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteFunctionCodeSigningConfigRequest
 */
export interface LambdaDeleteFunctionCodeSigningConfigRequest {
  /**
   * @schema LambdaDeleteFunctionCodeSigningConfigRequest#FunctionName
   */
  readonly functionName?: string;

}

/**
 * Converts an object of type 'LambdaDeleteFunctionCodeSigningConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteFunctionCodeSigningConfigRequest(obj: LambdaDeleteFunctionCodeSigningConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteFunctionConcurrencyRequest
 */
export interface LambdaDeleteFunctionConcurrencyRequest {
  /**
   * @schema LambdaDeleteFunctionConcurrencyRequest#FunctionName
   */
  readonly functionName?: string;

}

/**
 * Converts an object of type 'LambdaDeleteFunctionConcurrencyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteFunctionConcurrencyRequest(obj: LambdaDeleteFunctionConcurrencyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteFunctionEventInvokeConfigRequest
 */
export interface LambdaDeleteFunctionEventInvokeConfigRequest {
  /**
   * @schema LambdaDeleteFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaDeleteFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * Converts an object of type 'LambdaDeleteFunctionEventInvokeConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteFunctionEventInvokeConfigRequest(obj: LambdaDeleteFunctionEventInvokeConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteLayerVersionRequest
 */
export interface LambdaDeleteLayerVersionRequest {
  /**
   * @schema LambdaDeleteLayerVersionRequest#LayerName
   */
  readonly layerName?: string;

  /**
   * @schema LambdaDeleteLayerVersionRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'LambdaDeleteLayerVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteLayerVersionRequest(obj: LambdaDeleteLayerVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerName': obj.layerName,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaDeleteProvisionedConcurrencyConfigRequest
 */
export interface LambdaDeleteProvisionedConcurrencyConfigRequest {
  /**
   * @schema LambdaDeleteProvisionedConcurrencyConfigRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaDeleteProvisionedConcurrencyConfigRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * Converts an object of type 'LambdaDeleteProvisionedConcurrencyConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeleteProvisionedConcurrencyConfigRequest(obj: LambdaDeleteProvisionedConcurrencyConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetAccountSettingsRequest
 */
export interface LambdaGetAccountSettingsRequest {
}

/**
 * Converts an object of type 'LambdaGetAccountSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetAccountSettingsRequest(obj: LambdaGetAccountSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaGetAccountSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetAccountSettingsResponse(obj: LambdaGetAccountSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountLimit': toJson_LambdaAccountLimit(obj.accountLimit),
    'AccountUsage': toJson_LambdaAccountUsage(obj.accountUsage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetAliasRequest
 */
export interface LambdaGetAliasRequest {
  /**
   * @schema LambdaGetAliasRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaGetAliasRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'LambdaGetAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetAliasRequest(obj: LambdaGetAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetCodeSigningConfigRequest
 */
export interface LambdaGetCodeSigningConfigRequest {
  /**
   * @schema LambdaGetCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

}

/**
 * Converts an object of type 'LambdaGetCodeSigningConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetCodeSigningConfigRequest(obj: LambdaGetCodeSigningConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfigArn': obj.codeSigningConfigArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetCodeSigningConfigResponse
 */
export interface LambdaGetCodeSigningConfigResponse {
  /**
   * @schema LambdaGetCodeSigningConfigResponse#CodeSigningConfig
   */
  readonly codeSigningConfig?: LambdaCodeSigningConfig;

}

/**
 * Converts an object of type 'LambdaGetCodeSigningConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetCodeSigningConfigResponse(obj: LambdaGetCodeSigningConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfig': toJson_LambdaCodeSigningConfig(obj.codeSigningConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetEventSourceMappingRequest
 */
export interface LambdaGetEventSourceMappingRequest {
  /**
   * @schema LambdaGetEventSourceMappingRequest#UUID
   */
  readonly uuid?: string;

}

/**
 * Converts an object of type 'LambdaGetEventSourceMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetEventSourceMappingRequest(obj: LambdaGetEventSourceMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UUID': obj.uuid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetFunctionRequest
 */
export interface LambdaGetFunctionRequest {
  /**
   * @schema LambdaGetFunctionRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaGetFunctionRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * Converts an object of type 'LambdaGetFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetFunctionRequest(obj: LambdaGetFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaGetFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetFunctionResponse(obj: LambdaGetFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configuration': toJson_LambdaFunctionConfiguration(obj.configuration),
    'Code': toJson_LambdaFunctionCodeLocation(obj.code),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Concurrency': toJson_LambdaConcurrency(obj.concurrency),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetFunctionCodeSigningConfigRequest
 */
export interface LambdaGetFunctionCodeSigningConfigRequest {
  /**
   * @schema LambdaGetFunctionCodeSigningConfigRequest#FunctionName
   */
  readonly functionName?: string;

}

/**
 * Converts an object of type 'LambdaGetFunctionCodeSigningConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetFunctionCodeSigningConfigRequest(obj: LambdaGetFunctionCodeSigningConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetFunctionCodeSigningConfigResponse
 */
export interface LambdaGetFunctionCodeSigningConfigResponse {
  /**
   * @schema LambdaGetFunctionCodeSigningConfigResponse#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

  /**
   * @schema LambdaGetFunctionCodeSigningConfigResponse#FunctionName
   */
  readonly functionName?: string;

}

/**
 * Converts an object of type 'LambdaGetFunctionCodeSigningConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetFunctionCodeSigningConfigResponse(obj: LambdaGetFunctionCodeSigningConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfigArn': obj.codeSigningConfigArn,
    'FunctionName': obj.functionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetFunctionConcurrencyRequest
 */
export interface LambdaGetFunctionConcurrencyRequest {
  /**
   * @schema LambdaGetFunctionConcurrencyRequest#FunctionName
   */
  readonly functionName?: string;

}

/**
 * Converts an object of type 'LambdaGetFunctionConcurrencyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetFunctionConcurrencyRequest(obj: LambdaGetFunctionConcurrencyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaGetFunctionConcurrencyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetFunctionConcurrencyResponse(obj: LambdaGetFunctionConcurrencyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedConcurrentExecutions': obj.reservedConcurrentExecutions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetFunctionConfigurationRequest
 */
export interface LambdaGetFunctionConfigurationRequest {
  /**
   * @schema LambdaGetFunctionConfigurationRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaGetFunctionConfigurationRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * Converts an object of type 'LambdaGetFunctionConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetFunctionConfigurationRequest(obj: LambdaGetFunctionConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetFunctionEventInvokeConfigRequest
 */
export interface LambdaGetFunctionEventInvokeConfigRequest {
  /**
   * @schema LambdaGetFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaGetFunctionEventInvokeConfigRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * Converts an object of type 'LambdaGetFunctionEventInvokeConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetFunctionEventInvokeConfigRequest(obj: LambdaGetFunctionEventInvokeConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaFunctionEventInvokeConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaFunctionEventInvokeConfig(obj: LambdaFunctionEventInvokeConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastModified': obj.lastModified,
    'FunctionArn': obj.functionArn,
    'MaximumRetryAttempts': obj.maximumRetryAttempts,
    'MaximumEventAgeInSeconds': obj.maximumEventAgeInSeconds,
    'DestinationConfig': toJson_LambdaDestinationConfig(obj.destinationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetLayerVersionRequest
 */
export interface LambdaGetLayerVersionRequest {
  /**
   * @schema LambdaGetLayerVersionRequest#LayerName
   */
  readonly layerName?: string;

  /**
   * @schema LambdaGetLayerVersionRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'LambdaGetLayerVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetLayerVersionRequest(obj: LambdaGetLayerVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerName': obj.layerName,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaGetLayerVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetLayerVersionResponse(obj: LambdaGetLayerVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': toJson_LambdaLayerVersionContentOutput(obj.content),
    'LayerArn': obj.layerArn,
    'LayerVersionArn': obj.layerVersionArn,
    'Description': obj.description,
    'CreatedDate': obj.createdDate,
    'Version': obj.version,
    'CompatibleRuntimes': obj.compatibleRuntimes?.map(y => y),
    'LicenseInfo': obj.licenseInfo,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetLayerVersionByArnRequest
 */
export interface LambdaGetLayerVersionByArnRequest {
  /**
   * @schema LambdaGetLayerVersionByArnRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'LambdaGetLayerVersionByArnRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetLayerVersionByArnRequest(obj: LambdaGetLayerVersionByArnRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetLayerVersionPolicyRequest
 */
export interface LambdaGetLayerVersionPolicyRequest {
  /**
   * @schema LambdaGetLayerVersionPolicyRequest#LayerName
   */
  readonly layerName?: string;

  /**
   * @schema LambdaGetLayerVersionPolicyRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'LambdaGetLayerVersionPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetLayerVersionPolicyRequest(obj: LambdaGetLayerVersionPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerName': obj.layerName,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaGetLayerVersionPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetLayerVersionPolicyResponse(obj: LambdaGetLayerVersionPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetPolicyRequest
 */
export interface LambdaGetPolicyRequest {
  /**
   * @schema LambdaGetPolicyRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaGetPolicyRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * Converts an object of type 'LambdaGetPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetPolicyRequest(obj: LambdaGetPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaGetPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetPolicyResponse(obj: LambdaGetPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaGetProvisionedConcurrencyConfigRequest
 */
export interface LambdaGetProvisionedConcurrencyConfigRequest {
  /**
   * @schema LambdaGetProvisionedConcurrencyConfigRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaGetProvisionedConcurrencyConfigRequest#Qualifier
   */
  readonly qualifier?: string;

}

/**
 * Converts an object of type 'LambdaGetProvisionedConcurrencyConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetProvisionedConcurrencyConfigRequest(obj: LambdaGetProvisionedConcurrencyConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaGetProvisionedConcurrencyConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaGetProvisionedConcurrencyConfigResponse(obj: LambdaGetProvisionedConcurrencyConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestedProvisionedConcurrentExecutions': obj.requestedProvisionedConcurrentExecutions,
    'AvailableProvisionedConcurrentExecutions': obj.availableProvisionedConcurrentExecutions,
    'AllocatedProvisionedConcurrentExecutions': obj.allocatedProvisionedConcurrentExecutions,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaInvocationRequest
 */
export interface LambdaInvocationRequest {
  /**
   * @schema LambdaInvocationRequest#FunctionName
   */
  readonly functionName?: string;

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
 * Converts an object of type 'LambdaInvocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaInvocationRequest(obj: LambdaInvocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'InvocationType': obj.invocationType,
    'LogType': obj.logType,
    'ClientContext': obj.clientContext,
    'Payload': obj.payload,
    'Qualifier': obj.qualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaInvocationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaInvocationResponse(obj: LambdaInvocationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusCode': obj.statusCode,
    'FunctionError': obj.functionError,
    'LogResult': obj.logResult,
    'Payload': obj.payload,
    'ExecutedVersion': obj.executedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaInvokeAsyncRequest
 */
export interface LambdaInvokeAsyncRequest {
  /**
   * @schema LambdaInvokeAsyncRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaInvokeAsyncRequest#InvokeArgs
   */
  readonly invokeArgs?: any;

}

/**
 * Converts an object of type 'LambdaInvokeAsyncRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaInvokeAsyncRequest(obj: LambdaInvokeAsyncRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'InvokeArgs': obj.invokeArgs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaInvokeAsyncResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaInvokeAsyncResponse(obj: LambdaInvokeAsyncResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaListAliasesRequest
 */
export interface LambdaListAliasesRequest {
  /**
   * @schema LambdaListAliasesRequest#FunctionName
   */
  readonly functionName?: string;

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
 * Converts an object of type 'LambdaListAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListAliasesRequest(obj: LambdaListAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'FunctionVersion': obj.functionVersion,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListAliasesResponse(obj: LambdaListAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Aliases': obj.aliases?.map(y => toJson_LambdaAliasConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListCodeSigningConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListCodeSigningConfigsRequest(obj: LambdaListCodeSigningConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListCodeSigningConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListCodeSigningConfigsResponse(obj: LambdaListCodeSigningConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'CodeSigningConfigs': obj.codeSigningConfigs?.map(y => toJson_LambdaCodeSigningConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListEventSourceMappingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListEventSourceMappingsRequest(obj: LambdaListEventSourceMappingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSourceArn': obj.eventSourceArn,
    'FunctionName': obj.functionName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListEventSourceMappingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListEventSourceMappingsResponse(obj: LambdaListEventSourceMappingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'EventSourceMappings': obj.eventSourceMappings?.map(y => toJson_LambdaEventSourceMappingConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaListFunctionEventInvokeConfigsRequest
 */
export interface LambdaListFunctionEventInvokeConfigsRequest {
  /**
   * @schema LambdaListFunctionEventInvokeConfigsRequest#FunctionName
   */
  readonly functionName?: string;

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
 * Converts an object of type 'LambdaListFunctionEventInvokeConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListFunctionEventInvokeConfigsRequest(obj: LambdaListFunctionEventInvokeConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListFunctionEventInvokeConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListFunctionEventInvokeConfigsResponse(obj: LambdaListFunctionEventInvokeConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionEventInvokeConfigs': obj.functionEventInvokeConfigs?.map(y => toJson_LambdaFunctionEventInvokeConfig(y)),
    'NextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListFunctionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListFunctionsRequest(obj: LambdaListFunctionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MasterRegion': obj.masterRegion,
    'FunctionVersion': obj.functionVersion,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListFunctionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListFunctionsResponse(obj: LambdaListFunctionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Functions': obj.functions?.map(y => toJson_LambdaFunctionConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaListFunctionsByCodeSigningConfigRequest
 */
export interface LambdaListFunctionsByCodeSigningConfigRequest {
  /**
   * @schema LambdaListFunctionsByCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

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
 * Converts an object of type 'LambdaListFunctionsByCodeSigningConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListFunctionsByCodeSigningConfigRequest(obj: LambdaListFunctionsByCodeSigningConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfigArn': obj.codeSigningConfigArn,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListFunctionsByCodeSigningConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListFunctionsByCodeSigningConfigResponse(obj: LambdaListFunctionsByCodeSigningConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'FunctionArns': obj.functionArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly layerName?: string;

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
 * Converts an object of type 'LambdaListLayerVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListLayerVersionsRequest(obj: LambdaListLayerVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CompatibleRuntime': obj.compatibleRuntime,
    'LayerName': obj.layerName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListLayerVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListLayerVersionsResponse(obj: LambdaListLayerVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'LayerVersions': obj.layerVersions?.map(y => toJson_LambdaLayerVersionsListItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListLayersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListLayersRequest(obj: LambdaListLayersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CompatibleRuntime': obj.compatibleRuntime,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListLayersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListLayersResponse(obj: LambdaListLayersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Layers': obj.layers?.map(y => toJson_LambdaLayersListItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaListProvisionedConcurrencyConfigsRequest
 */
export interface LambdaListProvisionedConcurrencyConfigsRequest {
  /**
   * @schema LambdaListProvisionedConcurrencyConfigsRequest#FunctionName
   */
  readonly functionName?: string;

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
 * Converts an object of type 'LambdaListProvisionedConcurrencyConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListProvisionedConcurrencyConfigsRequest(obj: LambdaListProvisionedConcurrencyConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListProvisionedConcurrencyConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListProvisionedConcurrencyConfigsResponse(obj: LambdaListProvisionedConcurrencyConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedConcurrencyConfigs': obj.provisionedConcurrencyConfigs?.map(y => toJson_LambdaProvisionedConcurrencyConfigListItem(y)),
    'NextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaListTagsRequest
 */
export interface LambdaListTagsRequest {
  /**
   * @schema LambdaListTagsRequest#Resource
   */
  readonly resource?: string;

}

/**
 * Converts an object of type 'LambdaListTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListTagsRequest(obj: LambdaListTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListTagsResponse(obj: LambdaListTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaListVersionsByFunctionRequest
 */
export interface LambdaListVersionsByFunctionRequest {
  /**
   * @schema LambdaListVersionsByFunctionRequest#FunctionName
   */
  readonly functionName?: string;

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
 * Converts an object of type 'LambdaListVersionsByFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListVersionsByFunctionRequest(obj: LambdaListVersionsByFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaListVersionsByFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaListVersionsByFunctionResponse(obj: LambdaListVersionsByFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextMarker': obj.nextMarker,
    'Versions': obj.versions?.map(y => toJson_LambdaFunctionConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaPublishLayerVersionRequest
 */
export interface LambdaPublishLayerVersionRequest {
  /**
   * @schema LambdaPublishLayerVersionRequest#LayerName
   */
  readonly layerName?: string;

  /**
   * @schema LambdaPublishLayerVersionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaPublishLayerVersionRequest#Content
   */
  readonly content?: LambdaLayerVersionContentInput;

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
 * Converts an object of type 'LambdaPublishLayerVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaPublishLayerVersionRequest(obj: LambdaPublishLayerVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerName': obj.layerName,
    'Description': obj.description,
    'Content': toJson_LambdaLayerVersionContentInput(obj.content),
    'CompatibleRuntimes': obj.compatibleRuntimes?.map(y => y),
    'LicenseInfo': obj.licenseInfo,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaPublishLayerVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaPublishLayerVersionResponse(obj: LambdaPublishLayerVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': toJson_LambdaLayerVersionContentOutput(obj.content),
    'LayerArn': obj.layerArn,
    'LayerVersionArn': obj.layerVersionArn,
    'Description': obj.description,
    'CreatedDate': obj.createdDate,
    'Version': obj.version,
    'CompatibleRuntimes': obj.compatibleRuntimes?.map(y => y),
    'LicenseInfo': obj.licenseInfo,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaPublishVersionRequest
 */
export interface LambdaPublishVersionRequest {
  /**
   * @schema LambdaPublishVersionRequest#FunctionName
   */
  readonly functionName?: string;

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
 * Converts an object of type 'LambdaPublishVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaPublishVersionRequest(obj: LambdaPublishVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'CodeSha256': obj.codeSha256,
    'Description': obj.description,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaPutFunctionCodeSigningConfigRequest
 */
export interface LambdaPutFunctionCodeSigningConfigRequest {
  /**
   * @schema LambdaPutFunctionCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

  /**
   * @schema LambdaPutFunctionCodeSigningConfigRequest#FunctionName
   */
  readonly functionName?: string;

}

/**
 * Converts an object of type 'LambdaPutFunctionCodeSigningConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaPutFunctionCodeSigningConfigRequest(obj: LambdaPutFunctionCodeSigningConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfigArn': obj.codeSigningConfigArn,
    'FunctionName': obj.functionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaPutFunctionCodeSigningConfigResponse
 */
export interface LambdaPutFunctionCodeSigningConfigResponse {
  /**
   * @schema LambdaPutFunctionCodeSigningConfigResponse#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

  /**
   * @schema LambdaPutFunctionCodeSigningConfigResponse#FunctionName
   */
  readonly functionName?: string;

}

/**
 * Converts an object of type 'LambdaPutFunctionCodeSigningConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaPutFunctionCodeSigningConfigResponse(obj: LambdaPutFunctionCodeSigningConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfigArn': obj.codeSigningConfigArn,
    'FunctionName': obj.functionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaPutFunctionConcurrencyRequest
 */
export interface LambdaPutFunctionConcurrencyRequest {
  /**
   * @schema LambdaPutFunctionConcurrencyRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaPutFunctionConcurrencyRequest#ReservedConcurrentExecutions
   */
  readonly reservedConcurrentExecutions?: number;

}

/**
 * Converts an object of type 'LambdaPutFunctionConcurrencyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaPutFunctionConcurrencyRequest(obj: LambdaPutFunctionConcurrencyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'ReservedConcurrentExecutions': obj.reservedConcurrentExecutions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaConcurrency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaConcurrency(obj: LambdaConcurrency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedConcurrentExecutions': obj.reservedConcurrentExecutions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaPutFunctionEventInvokeConfigRequest
 */
export interface LambdaPutFunctionEventInvokeConfigRequest {
  /**
   * @schema LambdaPutFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName?: string;

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
 * Converts an object of type 'LambdaPutFunctionEventInvokeConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaPutFunctionEventInvokeConfigRequest(obj: LambdaPutFunctionEventInvokeConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
    'MaximumRetryAttempts': obj.maximumRetryAttempts,
    'MaximumEventAgeInSeconds': obj.maximumEventAgeInSeconds,
    'DestinationConfig': toJson_LambdaDestinationConfig(obj.destinationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaPutProvisionedConcurrencyConfigRequest
 */
export interface LambdaPutProvisionedConcurrencyConfigRequest {
  /**
   * @schema LambdaPutProvisionedConcurrencyConfigRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaPutProvisionedConcurrencyConfigRequest#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema LambdaPutProvisionedConcurrencyConfigRequest#ProvisionedConcurrentExecutions
   */
  readonly provisionedConcurrentExecutions?: number;

}

/**
 * Converts an object of type 'LambdaPutProvisionedConcurrencyConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaPutProvisionedConcurrencyConfigRequest(obj: LambdaPutProvisionedConcurrencyConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
    'ProvisionedConcurrentExecutions': obj.provisionedConcurrentExecutions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaPutProvisionedConcurrencyConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaPutProvisionedConcurrencyConfigResponse(obj: LambdaPutProvisionedConcurrencyConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestedProvisionedConcurrentExecutions': obj.requestedProvisionedConcurrentExecutions,
    'AvailableProvisionedConcurrentExecutions': obj.availableProvisionedConcurrentExecutions,
    'AllocatedProvisionedConcurrentExecutions': obj.allocatedProvisionedConcurrentExecutions,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaRemoveLayerVersionPermissionRequest
 */
export interface LambdaRemoveLayerVersionPermissionRequest {
  /**
   * @schema LambdaRemoveLayerVersionPermissionRequest#LayerName
   */
  readonly layerName?: string;

  /**
   * @schema LambdaRemoveLayerVersionPermissionRequest#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema LambdaRemoveLayerVersionPermissionRequest#StatementId
   */
  readonly statementId?: string;

  /**
   * @schema LambdaRemoveLayerVersionPermissionRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'LambdaRemoveLayerVersionPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaRemoveLayerVersionPermissionRequest(obj: LambdaRemoveLayerVersionPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerName': obj.layerName,
    'VersionNumber': obj.versionNumber,
    'StatementId': obj.statementId,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaRemovePermissionRequest
 */
export interface LambdaRemovePermissionRequest {
  /**
   * @schema LambdaRemovePermissionRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaRemovePermissionRequest#StatementId
   */
  readonly statementId?: string;

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
 * Converts an object of type 'LambdaRemovePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaRemovePermissionRequest(obj: LambdaRemovePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'StatementId': obj.statementId,
    'Qualifier': obj.qualifier,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaTagResourceRequest
 */
export interface LambdaTagResourceRequest {
  /**
   * @schema LambdaTagResourceRequest#Resource
   */
  readonly resource?: string;

  /**
   * @schema LambdaTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LambdaTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaTagResourceRequest(obj: LambdaTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaUntagResourceRequest
 */
export interface LambdaUntagResourceRequest {
  /**
   * @schema LambdaUntagResourceRequest#Resource
   */
  readonly resource?: string;

  /**
   * @schema LambdaUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'LambdaUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaUntagResourceRequest(obj: LambdaUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaUpdateAliasRequest
 */
export interface LambdaUpdateAliasRequest {
  /**
   * @schema LambdaUpdateAliasRequest#FunctionName
   */
  readonly functionName?: string;

  /**
   * @schema LambdaUpdateAliasRequest#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'LambdaUpdateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaUpdateAliasRequest(obj: LambdaUpdateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Name': obj.name,
    'FunctionVersion': obj.functionVersion,
    'Description': obj.description,
    'RoutingConfig': toJson_LambdaAliasRoutingConfiguration(obj.routingConfig),
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaUpdateCodeSigningConfigRequest
 */
export interface LambdaUpdateCodeSigningConfigRequest {
  /**
   * @schema LambdaUpdateCodeSigningConfigRequest#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

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
 * Converts an object of type 'LambdaUpdateCodeSigningConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaUpdateCodeSigningConfigRequest(obj: LambdaUpdateCodeSigningConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfigArn': obj.codeSigningConfigArn,
    'Description': obj.description,
    'AllowedPublishers': toJson_LambdaAllowedPublishers(obj.allowedPublishers),
    'CodeSigningPolicies': toJson_LambdaCodeSigningPolicies(obj.codeSigningPolicies),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaUpdateCodeSigningConfigResponse
 */
export interface LambdaUpdateCodeSigningConfigResponse {
  /**
   * @schema LambdaUpdateCodeSigningConfigResponse#CodeSigningConfig
   */
  readonly codeSigningConfig?: LambdaCodeSigningConfig;

}

/**
 * Converts an object of type 'LambdaUpdateCodeSigningConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaUpdateCodeSigningConfigResponse(obj: LambdaUpdateCodeSigningConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfig': toJson_LambdaCodeSigningConfig(obj.codeSigningConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaUpdateEventSourceMappingRequest
 */
export interface LambdaUpdateEventSourceMappingRequest {
  /**
   * @schema LambdaUpdateEventSourceMappingRequest#UUID
   */
  readonly uuid?: string;

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

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#TumblingWindowInSeconds
   */
  readonly tumblingWindowInSeconds?: number;

  /**
   * @schema LambdaUpdateEventSourceMappingRequest#FunctionResponseTypes
   */
  readonly functionResponseTypes?: string[];

}

/**
 * Converts an object of type 'LambdaUpdateEventSourceMappingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaUpdateEventSourceMappingRequest(obj: LambdaUpdateEventSourceMappingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UUID': obj.uuid,
    'FunctionName': obj.functionName,
    'Enabled': obj.enabled,
    'BatchSize': obj.batchSize,
    'MaximumBatchingWindowInSeconds': obj.maximumBatchingWindowInSeconds,
    'DestinationConfig': toJson_LambdaDestinationConfig(obj.destinationConfig),
    'MaximumRecordAgeInSeconds': obj.maximumRecordAgeInSeconds,
    'BisectBatchOnFunctionError': obj.bisectBatchOnFunctionError,
    'MaximumRetryAttempts': obj.maximumRetryAttempts,
    'ParallelizationFactor': obj.parallelizationFactor,
    'SourceAccessConfigurations': obj.sourceAccessConfigurations?.map(y => toJson_LambdaSourceAccessConfiguration(y)),
    'TumblingWindowInSeconds': obj.tumblingWindowInSeconds,
    'FunctionResponseTypes': obj.functionResponseTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaUpdateFunctionCodeRequest
 */
export interface LambdaUpdateFunctionCodeRequest {
  /**
   * @schema LambdaUpdateFunctionCodeRequest#FunctionName
   */
  readonly functionName?: string;

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
   * @schema LambdaUpdateFunctionCodeRequest#ImageUri
   */
  readonly imageUri?: string;

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
 * Converts an object of type 'LambdaUpdateFunctionCodeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaUpdateFunctionCodeRequest(obj: LambdaUpdateFunctionCodeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'ZipFile': obj.zipFile,
    'S3Bucket': obj.s3Bucket,
    'S3Key': obj.s3Key,
    'S3ObjectVersion': obj.s3ObjectVersion,
    'ImageUri': obj.imageUri,
    'Publish': obj.publish,
    'DryRun': obj.dryRun,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaUpdateFunctionConfigurationRequest
 */
export interface LambdaUpdateFunctionConfigurationRequest {
  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#FunctionName
   */
  readonly functionName?: string;

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

  /**
   * @schema LambdaUpdateFunctionConfigurationRequest#ImageConfig
   */
  readonly imageConfig?: LambdaImageConfig;

}

/**
 * Converts an object of type 'LambdaUpdateFunctionConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaUpdateFunctionConfigurationRequest(obj: LambdaUpdateFunctionConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Role': obj.role,
    'Handler': obj.handler,
    'Description': obj.description,
    'Timeout': obj.timeout,
    'MemorySize': obj.memorySize,
    'VpcConfig': toJson_LambdaVpcConfig(obj.vpcConfig),
    'Environment': toJson_LambdaEnvironment(obj.environment),
    'Runtime': obj.runtime,
    'DeadLetterConfig': toJson_LambdaDeadLetterConfig(obj.deadLetterConfig),
    'KMSKeyArn': obj.kmsKeyArn,
    'TracingConfig': toJson_LambdaTracingConfig(obj.tracingConfig),
    'RevisionId': obj.revisionId,
    'Layers': obj.layers?.map(y => y),
    'FileSystemConfigs': obj.fileSystemConfigs?.map(y => toJson_LambdaFileSystemConfig(y)),
    'ImageConfig': toJson_LambdaImageConfig(obj.imageConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaUpdateFunctionEventInvokeConfigRequest
 */
export interface LambdaUpdateFunctionEventInvokeConfigRequest {
  /**
   * @schema LambdaUpdateFunctionEventInvokeConfigRequest#FunctionName
   */
  readonly functionName?: string;

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
 * Converts an object of type 'LambdaUpdateFunctionEventInvokeConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaUpdateFunctionEventInvokeConfigRequest(obj: LambdaUpdateFunctionEventInvokeConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionName': obj.functionName,
    'Qualifier': obj.qualifier,
    'MaximumRetryAttempts': obj.maximumRetryAttempts,
    'MaximumEventAgeInSeconds': obj.maximumEventAgeInSeconds,
    'DestinationConfig': toJson_LambdaDestinationConfig(obj.destinationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaAliasRoutingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaAliasRoutingConfiguration(obj: LambdaAliasRoutingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdditionalVersionWeights': ((obj.additionalVersionWeights) === undefined) ? undefined : (Object.entries(obj.additionalVersionWeights).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaAllowedPublishers
 */
export interface LambdaAllowedPublishers {
  /**
   * @schema LambdaAllowedPublishers#SigningProfileVersionArns
   */
  readonly signingProfileVersionArns?: string[];

}

/**
 * Converts an object of type 'LambdaAllowedPublishers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaAllowedPublishers(obj: LambdaAllowedPublishers | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SigningProfileVersionArns': obj.signingProfileVersionArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaCodeSigningPolicies' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaCodeSigningPolicies(obj: LambdaCodeSigningPolicies | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UntrustedArtifactOnDeployment': obj.untrustedArtifactOnDeployment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaCodeSigningConfig
 */
export interface LambdaCodeSigningConfig {
  /**
   * @schema LambdaCodeSigningConfig#CodeSigningConfigId
   */
  readonly codeSigningConfigId?: string;

  /**
   * @schema LambdaCodeSigningConfig#CodeSigningConfigArn
   */
  readonly codeSigningConfigArn?: string;

  /**
   * @schema LambdaCodeSigningConfig#Description
   */
  readonly description?: string;

  /**
   * @schema LambdaCodeSigningConfig#AllowedPublishers
   */
  readonly allowedPublishers?: LambdaAllowedPublishers;

  /**
   * @schema LambdaCodeSigningConfig#CodeSigningPolicies
   */
  readonly codeSigningPolicies?: LambdaCodeSigningPolicies;

  /**
   * @schema LambdaCodeSigningConfig#LastModified
   */
  readonly lastModified?: string;

}

/**
 * Converts an object of type 'LambdaCodeSigningConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaCodeSigningConfig(obj: LambdaCodeSigningConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeSigningConfigId': obj.codeSigningConfigId,
    'CodeSigningConfigArn': obj.codeSigningConfigArn,
    'Description': obj.description,
    'AllowedPublishers': toJson_LambdaAllowedPublishers(obj.allowedPublishers),
    'CodeSigningPolicies': toJson_LambdaCodeSigningPolicies(obj.codeSigningPolicies),
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaDestinationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDestinationConfig(obj: LambdaDestinationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OnSuccess': toJson_LambdaOnSuccess(obj.onSuccess),
    'OnFailure': toJson_LambdaOnFailure(obj.onFailure),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaSourceAccessConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaSourceAccessConfiguration(obj: LambdaSourceAccessConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'URI': obj.uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaSelfManagedEventSource
 */
export interface LambdaSelfManagedEventSource {
  /**
   * @schema LambdaSelfManagedEventSource#Endpoints
   */
  readonly endpoints?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'LambdaSelfManagedEventSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaSelfManagedEventSource(obj: LambdaSelfManagedEventSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoints': ((obj.endpoints) === undefined) ? undefined : (Object.entries(obj.endpoints).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema LambdaFunctionCode#ImageUri
   */
  readonly imageUri?: string;

}

/**
 * Converts an object of type 'LambdaFunctionCode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaFunctionCode(obj: LambdaFunctionCode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ZipFile': obj.zipFile,
    'S3Bucket': obj.s3Bucket,
    'S3Key': obj.s3Key,
    'S3ObjectVersion': obj.s3ObjectVersion,
    'ImageUri': obj.imageUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaVpcConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaVpcConfig(obj: LambdaVpcConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaDeadLetterConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaDeadLetterConfig(obj: LambdaDeadLetterConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetArn': obj.targetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaEnvironment(obj: LambdaEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaTracingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaTracingConfig(obj: LambdaTracingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaFileSystemConfig
 */
export interface LambdaFileSystemConfig {
  /**
   * @schema LambdaFileSystemConfig#Arn
   */
  readonly arn?: string;

  /**
   * @schema LambdaFileSystemConfig#LocalMountPath
   */
  readonly localMountPath?: string;

}

/**
 * Converts an object of type 'LambdaFileSystemConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaFileSystemConfig(obj: LambdaFileSystemConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'LocalMountPath': obj.localMountPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaImageConfig
 */
export interface LambdaImageConfig {
  /**
   * @schema LambdaImageConfig#EntryPoint
   */
  readonly entryPoint?: string[];

  /**
   * @schema LambdaImageConfig#Command
   */
  readonly command?: string[];

  /**
   * @schema LambdaImageConfig#WorkingDirectory
   */
  readonly workingDirectory?: string;

}

/**
 * Converts an object of type 'LambdaImageConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaImageConfig(obj: LambdaImageConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntryPoint': obj.entryPoint?.map(y => y),
    'Command': obj.command?.map(y => y),
    'WorkingDirectory': obj.workingDirectory,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaVpcConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaVpcConfigResponse(obj: LambdaVpcConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'VpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaEnvironmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaEnvironmentResponse(obj: LambdaEnvironmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Error': toJson_LambdaEnvironmentError(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaTracingConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaTracingConfigResponse(obj: LambdaTracingConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaLayer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaLayer(obj: LambdaLayer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CodeSize': obj.codeSize,
    'SigningProfileVersionArn': obj.signingProfileVersionArn,
    'SigningJobArn': obj.signingJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaImageConfigResponse
 */
export interface LambdaImageConfigResponse {
  /**
   * @schema LambdaImageConfigResponse#ImageConfig
   */
  readonly imageConfig?: LambdaImageConfig;

  /**
   * @schema LambdaImageConfigResponse#Error
   */
  readonly error?: LambdaImageConfigError;

}

/**
 * Converts an object of type 'LambdaImageConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaImageConfigResponse(obj: LambdaImageConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageConfig': toJson_LambdaImageConfig(obj.imageConfig),
    'Error': toJson_LambdaImageConfigError(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaAccountLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaAccountLimit(obj: LambdaAccountLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TotalCodeSize': obj.totalCodeSize,
    'CodeSizeUnzipped': obj.codeSizeUnzipped,
    'CodeSizeZipped': obj.codeSizeZipped,
    'ConcurrentExecutions': obj.concurrentExecutions,
    'UnreservedConcurrentExecutions': obj.unreservedConcurrentExecutions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaAccountUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaAccountUsage(obj: LambdaAccountUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TotalCodeSize': obj.totalCodeSize,
    'FunctionCount': obj.functionCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema LambdaFunctionCodeLocation#ImageUri
   */
  readonly imageUri?: string;

  /**
   * @schema LambdaFunctionCodeLocation#ResolvedImageUri
   */
  readonly resolvedImageUri?: string;

}

/**
 * Converts an object of type 'LambdaFunctionCodeLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaFunctionCodeLocation(obj: LambdaFunctionCodeLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryType': obj.repositoryType,
    'Location': obj.location,
    'ImageUri': obj.imageUri,
    'ResolvedImageUri': obj.resolvedImageUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaLayerVersionContentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaLayerVersionContentOutput(obj: LambdaLayerVersionContentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Location': obj.location,
    'CodeSha256': obj.codeSha256,
    'CodeSize': obj.codeSize,
    'SigningProfileVersionArn': obj.signingProfileVersionArn,
    'SigningJobArn': obj.signingJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaLayerVersionsListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaLayerVersionsListItem(obj: LambdaLayerVersionsListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerVersionArn': obj.layerVersionArn,
    'Version': obj.version,
    'Description': obj.description,
    'CreatedDate': obj.createdDate,
    'CompatibleRuntimes': obj.compatibleRuntimes?.map(y => y),
    'LicenseInfo': obj.licenseInfo,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaLayersListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaLayersListItem(obj: LambdaLayersListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerName': obj.layerName,
    'LayerArn': obj.layerArn,
    'LatestMatchingVersion': toJson_LambdaLayerVersionsListItem(obj.latestMatchingVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaProvisionedConcurrencyConfigListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaProvisionedConcurrencyConfigListItem(obj: LambdaProvisionedConcurrencyConfigListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionArn': obj.functionArn,
    'RequestedProvisionedConcurrentExecutions': obj.requestedProvisionedConcurrentExecutions,
    'AvailableProvisionedConcurrentExecutions': obj.availableProvisionedConcurrentExecutions,
    'AllocatedProvisionedConcurrentExecutions': obj.allocatedProvisionedConcurrentExecutions,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaLayerVersionContentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaLayerVersionContentInput(obj: LambdaLayerVersionContentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
    'S3Key': obj.s3Key,
    'S3ObjectVersion': obj.s3ObjectVersion,
    'ZipFile': obj.zipFile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaOnSuccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaOnSuccess(obj: LambdaOnSuccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destination': obj.destination,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'LambdaOnFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaOnFailure(obj: LambdaOnFailure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destination': obj.destination,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'LambdaEnvironmentError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaEnvironmentError(obj: LambdaEnvironmentError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LambdaImageConfigError
 */
export interface LambdaImageConfigError {
  /**
   * @schema LambdaImageConfigError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema LambdaImageConfigError#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'LambdaImageConfigError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LambdaImageConfigError(obj: LambdaImageConfigError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
