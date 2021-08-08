/**
 * @schema AppSyncCreateApiCacheRequest
 */
export interface AppSyncCreateApiCacheRequest {
  /**
   * @schema AppSyncCreateApiCacheRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncCreateApiCacheRequest#ttl
   */
  readonly ttl: number;

  /**
   * @schema AppSyncCreateApiCacheRequest#transitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema AppSyncCreateApiCacheRequest#atRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema AppSyncCreateApiCacheRequest#apiCachingBehavior
   */
  readonly apiCachingBehavior: string;

  /**
   * @schema AppSyncCreateApiCacheRequest#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'AppSyncCreateApiCacheRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateApiCacheRequest(obj: AppSyncCreateApiCacheRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'ttl': obj.ttl,
    'transitEncryptionEnabled': obj.transitEncryptionEnabled,
    'atRestEncryptionEnabled': obj.atRestEncryptionEnabled,
    'apiCachingBehavior': obj.apiCachingBehavior,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateApiCacheResponse
 */
export interface AppSyncCreateApiCacheResponse {
  /**
   * @schema AppSyncCreateApiCacheResponse#apiCache
   */
  readonly apiCache?: AppSyncApiCache;

}

/**
 * Converts an object of type 'AppSyncCreateApiCacheResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateApiCacheResponse(obj: AppSyncCreateApiCacheResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiCache': toJson_AppSyncApiCache(obj.apiCache),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateApiKeyRequest
 */
export interface AppSyncCreateApiKeyRequest {
  /**
   * @schema AppSyncCreateApiKeyRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncCreateApiKeyRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncCreateApiKeyRequest#expires
   */
  readonly expires?: number;

}

/**
 * Converts an object of type 'AppSyncCreateApiKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateApiKeyRequest(obj: AppSyncCreateApiKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'description': obj.description,
    'expires': obj.expires,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateApiKeyResponse
 */
export interface AppSyncCreateApiKeyResponse {
  /**
   * @schema AppSyncCreateApiKeyResponse#apiKey
   */
  readonly apiKey?: AppSyncApiKey;

}

/**
 * Converts an object of type 'AppSyncCreateApiKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateApiKeyResponse(obj: AppSyncCreateApiKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiKey': toJson_AppSyncApiKey(obj.apiKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateDataSourceRequest
 */
export interface AppSyncCreateDataSourceRequest {
  /**
   * @schema AppSyncCreateDataSourceRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncCreateDataSourceRequest#name
   */
  readonly name: string;

  /**
   * @schema AppSyncCreateDataSourceRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncCreateDataSourceRequest#type
   */
  readonly type: string;

  /**
   * @schema AppSyncCreateDataSourceRequest#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema AppSyncCreateDataSourceRequest#dynamodbConfig
   */
  readonly dynamodbConfig?: AppSyncDynamodbDataSourceConfig;

  /**
   * @schema AppSyncCreateDataSourceRequest#lambdaConfig
   */
  readonly lambdaConfig?: AppSyncLambdaDataSourceConfig;

  /**
   * @schema AppSyncCreateDataSourceRequest#elasticsearchConfig
   */
  readonly elasticsearchConfig?: AppSyncElasticsearchDataSourceConfig;

  /**
   * @schema AppSyncCreateDataSourceRequest#httpConfig
   */
  readonly httpConfig?: AppSyncHttpDataSourceConfig;

  /**
   * @schema AppSyncCreateDataSourceRequest#relationalDatabaseConfig
   */
  readonly relationalDatabaseConfig?: AppSyncRelationalDatabaseDataSourceConfig;

}

/**
 * Converts an object of type 'AppSyncCreateDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateDataSourceRequest(obj: AppSyncCreateDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'serviceRoleArn': obj.serviceRoleArn,
    'dynamodbConfig': toJson_AppSyncDynamodbDataSourceConfig(obj.dynamodbConfig),
    'lambdaConfig': toJson_AppSyncLambdaDataSourceConfig(obj.lambdaConfig),
    'elasticsearchConfig': toJson_AppSyncElasticsearchDataSourceConfig(obj.elasticsearchConfig),
    'httpConfig': toJson_AppSyncHttpDataSourceConfig(obj.httpConfig),
    'relationalDatabaseConfig': toJson_AppSyncRelationalDatabaseDataSourceConfig(obj.relationalDatabaseConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateDataSourceResponse
 */
export interface AppSyncCreateDataSourceResponse {
  /**
   * @schema AppSyncCreateDataSourceResponse#dataSource
   */
  readonly dataSource?: AppSyncDataSource;

}

/**
 * Converts an object of type 'AppSyncCreateDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateDataSourceResponse(obj: AppSyncCreateDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSource': toJson_AppSyncDataSource(obj.dataSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateFunctionRequest
 */
export interface AppSyncCreateFunctionRequest {
  /**
   * @schema AppSyncCreateFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncCreateFunctionRequest#name
   */
  readonly name: string;

  /**
   * @schema AppSyncCreateFunctionRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncCreateFunctionRequest#dataSourceName
   */
  readonly dataSourceName: string;

  /**
   * @schema AppSyncCreateFunctionRequest#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema AppSyncCreateFunctionRequest#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema AppSyncCreateFunctionRequest#functionVersion
   */
  readonly functionVersion: string;

  /**
   * @schema AppSyncCreateFunctionRequest#syncConfig
   */
  readonly syncConfig?: AppSyncSyncConfig;

}

/**
 * Converts an object of type 'AppSyncCreateFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateFunctionRequest(obj: AppSyncCreateFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'name': obj.name,
    'description': obj.description,
    'dataSourceName': obj.dataSourceName,
    'requestMappingTemplate': obj.requestMappingTemplate,
    'responseMappingTemplate': obj.responseMappingTemplate,
    'functionVersion': obj.functionVersion,
    'syncConfig': toJson_AppSyncSyncConfig(obj.syncConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateFunctionResponse
 */
export interface AppSyncCreateFunctionResponse {
  /**
   * @schema AppSyncCreateFunctionResponse#functionConfiguration
   */
  readonly functionConfiguration?: AppSyncFunctionConfiguration;

}

/**
 * Converts an object of type 'AppSyncCreateFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateFunctionResponse(obj: AppSyncCreateFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functionConfiguration': toJson_AppSyncFunctionConfiguration(obj.functionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateGraphqlApiRequest
 */
export interface AppSyncCreateGraphqlApiRequest {
  /**
   * @schema AppSyncCreateGraphqlApiRequest#name
   */
  readonly name: string;

  /**
   * @schema AppSyncCreateGraphqlApiRequest#logConfig
   */
  readonly logConfig?: AppSyncLogConfig;

  /**
   * @schema AppSyncCreateGraphqlApiRequest#authenticationType
   */
  readonly authenticationType: string;

  /**
   * @schema AppSyncCreateGraphqlApiRequest#userPoolConfig
   */
  readonly userPoolConfig?: AppSyncUserPoolConfig;

  /**
   * @schema AppSyncCreateGraphqlApiRequest#openIDConnectConfig
   */
  readonly openIdConnectConfig?: AppSyncOpenIdConnectConfig;

  /**
   * @schema AppSyncCreateGraphqlApiRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppSyncCreateGraphqlApiRequest#additionalAuthenticationProviders
   */
  readonly additionalAuthenticationProviders?: AppSyncAdditionalAuthenticationProvider[];

  /**
   * @schema AppSyncCreateGraphqlApiRequest#xrayEnabled
   */
  readonly xrayEnabled?: boolean;

  /**
   * @schema AppSyncCreateGraphqlApiRequest#lambdaAuthorizerConfig
   */
  readonly lambdaAuthorizerConfig?: AppSyncLambdaAuthorizerConfig;

}

/**
 * Converts an object of type 'AppSyncCreateGraphqlApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateGraphqlApiRequest(obj: AppSyncCreateGraphqlApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'logConfig': toJson_AppSyncLogConfig(obj.logConfig),
    'authenticationType': obj.authenticationType,
    'userPoolConfig': toJson_AppSyncUserPoolConfig(obj.userPoolConfig),
    'openIDConnectConfig': toJson_AppSyncOpenIdConnectConfig(obj.openIdConnectConfig),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'additionalAuthenticationProviders': obj.additionalAuthenticationProviders?.map(y => toJson_AppSyncAdditionalAuthenticationProvider(y)),
    'xrayEnabled': obj.xrayEnabled,
    'lambdaAuthorizerConfig': toJson_AppSyncLambdaAuthorizerConfig(obj.lambdaAuthorizerConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateGraphqlApiResponse
 */
export interface AppSyncCreateGraphqlApiResponse {
  /**
   * @schema AppSyncCreateGraphqlApiResponse#graphqlApi
   */
  readonly graphqlApi?: AppSyncGraphqlApi;

}

/**
 * Converts an object of type 'AppSyncCreateGraphqlApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateGraphqlApiResponse(obj: AppSyncCreateGraphqlApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'graphqlApi': toJson_AppSyncGraphqlApi(obj.graphqlApi),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateResolverRequest
 */
export interface AppSyncCreateResolverRequest {
  /**
   * @schema AppSyncCreateResolverRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncCreateResolverRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema AppSyncCreateResolverRequest#fieldName
   */
  readonly fieldName: string;

  /**
   * @schema AppSyncCreateResolverRequest#dataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema AppSyncCreateResolverRequest#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema AppSyncCreateResolverRequest#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema AppSyncCreateResolverRequest#kind
   */
  readonly kind?: string;

  /**
   * @schema AppSyncCreateResolverRequest#pipelineConfig
   */
  readonly pipelineConfig?: AppSyncPipelineConfig;

  /**
   * @schema AppSyncCreateResolverRequest#syncConfig
   */
  readonly syncConfig?: AppSyncSyncConfig;

  /**
   * @schema AppSyncCreateResolverRequest#cachingConfig
   */
  readonly cachingConfig?: AppSyncCachingConfig;

}

/**
 * Converts an object of type 'AppSyncCreateResolverRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateResolverRequest(obj: AppSyncCreateResolverRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'typeName': obj.typeName,
    'fieldName': obj.fieldName,
    'dataSourceName': obj.dataSourceName,
    'requestMappingTemplate': obj.requestMappingTemplate,
    'responseMappingTemplate': obj.responseMappingTemplate,
    'kind': obj.kind,
    'pipelineConfig': toJson_AppSyncPipelineConfig(obj.pipelineConfig),
    'syncConfig': toJson_AppSyncSyncConfig(obj.syncConfig),
    'cachingConfig': toJson_AppSyncCachingConfig(obj.cachingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateResolverResponse
 */
export interface AppSyncCreateResolverResponse {
  /**
   * @schema AppSyncCreateResolverResponse#resolver
   */
  readonly resolver?: AppSyncResolver;

}

/**
 * Converts an object of type 'AppSyncCreateResolverResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateResolverResponse(obj: AppSyncCreateResolverResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resolver': toJson_AppSyncResolver(obj.resolver),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateTypeRequest
 */
export interface AppSyncCreateTypeRequest {
  /**
   * @schema AppSyncCreateTypeRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncCreateTypeRequest#definition
   */
  readonly definition: string;

  /**
   * @schema AppSyncCreateTypeRequest#format
   */
  readonly format: string;

}

/**
 * Converts an object of type 'AppSyncCreateTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateTypeRequest(obj: AppSyncCreateTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'definition': obj.definition,
    'format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCreateTypeResponse
 */
export interface AppSyncCreateTypeResponse {
  /**
   * @schema AppSyncCreateTypeResponse#type
   */
  readonly type?: AppSyncType;

}

/**
 * Converts an object of type 'AppSyncCreateTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCreateTypeResponse(obj: AppSyncCreateTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': toJson_AppSyncType(obj.type),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteApiCacheRequest
 */
export interface AppSyncDeleteApiCacheRequest {
  /**
   * @schema AppSyncDeleteApiCacheRequest#apiId
   */
  readonly apiId: string;

}

/**
 * Converts an object of type 'AppSyncDeleteApiCacheRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteApiCacheRequest(obj: AppSyncDeleteApiCacheRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteApiCacheResponse
 */
export interface AppSyncDeleteApiCacheResponse {
}

/**
 * Converts an object of type 'AppSyncDeleteApiCacheResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteApiCacheResponse(obj: AppSyncDeleteApiCacheResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteApiKeyRequest
 */
export interface AppSyncDeleteApiKeyRequest {
  /**
   * @schema AppSyncDeleteApiKeyRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncDeleteApiKeyRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'AppSyncDeleteApiKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteApiKeyRequest(obj: AppSyncDeleteApiKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteApiKeyResponse
 */
export interface AppSyncDeleteApiKeyResponse {
}

/**
 * Converts an object of type 'AppSyncDeleteApiKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteApiKeyResponse(obj: AppSyncDeleteApiKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteDataSourceRequest
 */
export interface AppSyncDeleteDataSourceRequest {
  /**
   * @schema AppSyncDeleteDataSourceRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncDeleteDataSourceRequest#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'AppSyncDeleteDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteDataSourceRequest(obj: AppSyncDeleteDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteDataSourceResponse
 */
export interface AppSyncDeleteDataSourceResponse {
}

/**
 * Converts an object of type 'AppSyncDeleteDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteDataSourceResponse(obj: AppSyncDeleteDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteFunctionRequest
 */
export interface AppSyncDeleteFunctionRequest {
  /**
   * @schema AppSyncDeleteFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncDeleteFunctionRequest#functionId
   */
  readonly functionId: string;

}

/**
 * Converts an object of type 'AppSyncDeleteFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteFunctionRequest(obj: AppSyncDeleteFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'functionId': obj.functionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteFunctionResponse
 */
export interface AppSyncDeleteFunctionResponse {
}

/**
 * Converts an object of type 'AppSyncDeleteFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteFunctionResponse(obj: AppSyncDeleteFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteGraphqlApiRequest
 */
export interface AppSyncDeleteGraphqlApiRequest {
  /**
   * @schema AppSyncDeleteGraphqlApiRequest#apiId
   */
  readonly apiId: string;

}

/**
 * Converts an object of type 'AppSyncDeleteGraphqlApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteGraphqlApiRequest(obj: AppSyncDeleteGraphqlApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteGraphqlApiResponse
 */
export interface AppSyncDeleteGraphqlApiResponse {
}

/**
 * Converts an object of type 'AppSyncDeleteGraphqlApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteGraphqlApiResponse(obj: AppSyncDeleteGraphqlApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteResolverRequest
 */
export interface AppSyncDeleteResolverRequest {
  /**
   * @schema AppSyncDeleteResolverRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncDeleteResolverRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema AppSyncDeleteResolverRequest#fieldName
   */
  readonly fieldName: string;

}

/**
 * Converts an object of type 'AppSyncDeleteResolverRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteResolverRequest(obj: AppSyncDeleteResolverRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'typeName': obj.typeName,
    'fieldName': obj.fieldName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteResolverResponse
 */
export interface AppSyncDeleteResolverResponse {
}

/**
 * Converts an object of type 'AppSyncDeleteResolverResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteResolverResponse(obj: AppSyncDeleteResolverResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteTypeRequest
 */
export interface AppSyncDeleteTypeRequest {
  /**
   * @schema AppSyncDeleteTypeRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncDeleteTypeRequest#typeName
   */
  readonly typeName: string;

}

/**
 * Converts an object of type 'AppSyncDeleteTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteTypeRequest(obj: AppSyncDeleteTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'typeName': obj.typeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeleteTypeResponse
 */
export interface AppSyncDeleteTypeResponse {
}

/**
 * Converts an object of type 'AppSyncDeleteTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeleteTypeResponse(obj: AppSyncDeleteTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncFlushApiCacheRequest
 */
export interface AppSyncFlushApiCacheRequest {
  /**
   * @schema AppSyncFlushApiCacheRequest#apiId
   */
  readonly apiId: string;

}

/**
 * Converts an object of type 'AppSyncFlushApiCacheRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncFlushApiCacheRequest(obj: AppSyncFlushApiCacheRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncFlushApiCacheResponse
 */
export interface AppSyncFlushApiCacheResponse {
}

/**
 * Converts an object of type 'AppSyncFlushApiCacheResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncFlushApiCacheResponse(obj: AppSyncFlushApiCacheResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetApiCacheRequest
 */
export interface AppSyncGetApiCacheRequest {
  /**
   * @schema AppSyncGetApiCacheRequest#apiId
   */
  readonly apiId: string;

}

/**
 * Converts an object of type 'AppSyncGetApiCacheRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetApiCacheRequest(obj: AppSyncGetApiCacheRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetApiCacheResponse
 */
export interface AppSyncGetApiCacheResponse {
  /**
   * @schema AppSyncGetApiCacheResponse#apiCache
   */
  readonly apiCache?: AppSyncApiCache;

}

/**
 * Converts an object of type 'AppSyncGetApiCacheResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetApiCacheResponse(obj: AppSyncGetApiCacheResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiCache': toJson_AppSyncApiCache(obj.apiCache),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetDataSourceRequest
 */
export interface AppSyncGetDataSourceRequest {
  /**
   * @schema AppSyncGetDataSourceRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncGetDataSourceRequest#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'AppSyncGetDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetDataSourceRequest(obj: AppSyncGetDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetDataSourceResponse
 */
export interface AppSyncGetDataSourceResponse {
  /**
   * @schema AppSyncGetDataSourceResponse#dataSource
   */
  readonly dataSource?: AppSyncDataSource;

}

/**
 * Converts an object of type 'AppSyncGetDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetDataSourceResponse(obj: AppSyncGetDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSource': toJson_AppSyncDataSource(obj.dataSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetFunctionRequest
 */
export interface AppSyncGetFunctionRequest {
  /**
   * @schema AppSyncGetFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncGetFunctionRequest#functionId
   */
  readonly functionId: string;

}

/**
 * Converts an object of type 'AppSyncGetFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetFunctionRequest(obj: AppSyncGetFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'functionId': obj.functionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetFunctionResponse
 */
export interface AppSyncGetFunctionResponse {
  /**
   * @schema AppSyncGetFunctionResponse#functionConfiguration
   */
  readonly functionConfiguration?: AppSyncFunctionConfiguration;

}

/**
 * Converts an object of type 'AppSyncGetFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetFunctionResponse(obj: AppSyncGetFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functionConfiguration': toJson_AppSyncFunctionConfiguration(obj.functionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetGraphqlApiRequest
 */
export interface AppSyncGetGraphqlApiRequest {
  /**
   * @schema AppSyncGetGraphqlApiRequest#apiId
   */
  readonly apiId: string;

}

/**
 * Converts an object of type 'AppSyncGetGraphqlApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetGraphqlApiRequest(obj: AppSyncGetGraphqlApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetGraphqlApiResponse
 */
export interface AppSyncGetGraphqlApiResponse {
  /**
   * @schema AppSyncGetGraphqlApiResponse#graphqlApi
   */
  readonly graphqlApi?: AppSyncGraphqlApi;

}

/**
 * Converts an object of type 'AppSyncGetGraphqlApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetGraphqlApiResponse(obj: AppSyncGetGraphqlApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'graphqlApi': toJson_AppSyncGraphqlApi(obj.graphqlApi),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetIntrospectionSchemaRequest
 */
export interface AppSyncGetIntrospectionSchemaRequest {
  /**
   * @schema AppSyncGetIntrospectionSchemaRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncGetIntrospectionSchemaRequest#format
   */
  readonly format: string;

  /**
   * @schema AppSyncGetIntrospectionSchemaRequest#includeDirectives
   */
  readonly includeDirectives?: boolean;

}

/**
 * Converts an object of type 'AppSyncGetIntrospectionSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetIntrospectionSchemaRequest(obj: AppSyncGetIntrospectionSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'format': obj.format,
    'includeDirectives': obj.includeDirectives,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetIntrospectionSchemaResponse
 */
export interface AppSyncGetIntrospectionSchemaResponse {
  /**
   * @schema AppSyncGetIntrospectionSchemaResponse#schema
   */
  readonly schema?: any;

}

/**
 * Converts an object of type 'AppSyncGetIntrospectionSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetIntrospectionSchemaResponse(obj: AppSyncGetIntrospectionSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetResolverRequest
 */
export interface AppSyncGetResolverRequest {
  /**
   * @schema AppSyncGetResolverRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncGetResolverRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema AppSyncGetResolverRequest#fieldName
   */
  readonly fieldName: string;

}

/**
 * Converts an object of type 'AppSyncGetResolverRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetResolverRequest(obj: AppSyncGetResolverRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'typeName': obj.typeName,
    'fieldName': obj.fieldName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetResolverResponse
 */
export interface AppSyncGetResolverResponse {
  /**
   * @schema AppSyncGetResolverResponse#resolver
   */
  readonly resolver?: AppSyncResolver;

}

/**
 * Converts an object of type 'AppSyncGetResolverResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetResolverResponse(obj: AppSyncGetResolverResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resolver': toJson_AppSyncResolver(obj.resolver),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetSchemaCreationStatusRequest
 */
export interface AppSyncGetSchemaCreationStatusRequest {
  /**
   * @schema AppSyncGetSchemaCreationStatusRequest#apiId
   */
  readonly apiId: string;

}

/**
 * Converts an object of type 'AppSyncGetSchemaCreationStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetSchemaCreationStatusRequest(obj: AppSyncGetSchemaCreationStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetSchemaCreationStatusResponse
 */
export interface AppSyncGetSchemaCreationStatusResponse {
  /**
   * @schema AppSyncGetSchemaCreationStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema AppSyncGetSchemaCreationStatusResponse#details
   */
  readonly details?: string;

}

/**
 * Converts an object of type 'AppSyncGetSchemaCreationStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetSchemaCreationStatusResponse(obj: AppSyncGetSchemaCreationStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetTypeRequest
 */
export interface AppSyncGetTypeRequest {
  /**
   * @schema AppSyncGetTypeRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncGetTypeRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema AppSyncGetTypeRequest#format
   */
  readonly format: string;

}

/**
 * Converts an object of type 'AppSyncGetTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetTypeRequest(obj: AppSyncGetTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'typeName': obj.typeName,
    'format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGetTypeResponse
 */
export interface AppSyncGetTypeResponse {
  /**
   * @schema AppSyncGetTypeResponse#type
   */
  readonly type?: AppSyncType;

}

/**
 * Converts an object of type 'AppSyncGetTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGetTypeResponse(obj: AppSyncGetTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': toJson_AppSyncType(obj.type),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListApiKeysRequest
 */
export interface AppSyncListApiKeysRequest {
  /**
   * @schema AppSyncListApiKeysRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncListApiKeysRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppSyncListApiKeysRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppSyncListApiKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListApiKeysRequest(obj: AppSyncListApiKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListApiKeysResponse
 */
export interface AppSyncListApiKeysResponse {
  /**
   * @schema AppSyncListApiKeysResponse#apiKeys
   */
  readonly apiKeys?: AppSyncApiKey[];

  /**
   * @schema AppSyncListApiKeysResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppSyncListApiKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListApiKeysResponse(obj: AppSyncListApiKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiKeys': obj.apiKeys?.map(y => toJson_AppSyncApiKey(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListDataSourcesRequest
 */
export interface AppSyncListDataSourcesRequest {
  /**
   * @schema AppSyncListDataSourcesRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncListDataSourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppSyncListDataSourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppSyncListDataSourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListDataSourcesRequest(obj: AppSyncListDataSourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListDataSourcesResponse
 */
export interface AppSyncListDataSourcesResponse {
  /**
   * @schema AppSyncListDataSourcesResponse#dataSources
   */
  readonly dataSources?: AppSyncDataSource[];

  /**
   * @schema AppSyncListDataSourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppSyncListDataSourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListDataSourcesResponse(obj: AppSyncListDataSourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSources': obj.dataSources?.map(y => toJson_AppSyncDataSource(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListFunctionsRequest
 */
export interface AppSyncListFunctionsRequest {
  /**
   * @schema AppSyncListFunctionsRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncListFunctionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppSyncListFunctionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppSyncListFunctionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListFunctionsRequest(obj: AppSyncListFunctionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListFunctionsResponse
 */
export interface AppSyncListFunctionsResponse {
  /**
   * @schema AppSyncListFunctionsResponse#functions
   */
  readonly functions?: AppSyncFunctionConfiguration[];

  /**
   * @schema AppSyncListFunctionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppSyncListFunctionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListFunctionsResponse(obj: AppSyncListFunctionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functions': obj.functions?.map(y => toJson_AppSyncFunctionConfiguration(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListGraphqlApisRequest
 */
export interface AppSyncListGraphqlApisRequest {
  /**
   * @schema AppSyncListGraphqlApisRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppSyncListGraphqlApisRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppSyncListGraphqlApisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListGraphqlApisRequest(obj: AppSyncListGraphqlApisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListGraphqlApisResponse
 */
export interface AppSyncListGraphqlApisResponse {
  /**
   * @schema AppSyncListGraphqlApisResponse#graphqlApis
   */
  readonly graphqlApis?: AppSyncGraphqlApi[];

  /**
   * @schema AppSyncListGraphqlApisResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppSyncListGraphqlApisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListGraphqlApisResponse(obj: AppSyncListGraphqlApisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'graphqlApis': obj.graphqlApis?.map(y => toJson_AppSyncGraphqlApi(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListResolversRequest
 */
export interface AppSyncListResolversRequest {
  /**
   * @schema AppSyncListResolversRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncListResolversRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema AppSyncListResolversRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppSyncListResolversRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppSyncListResolversRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListResolversRequest(obj: AppSyncListResolversRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'typeName': obj.typeName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListResolversResponse
 */
export interface AppSyncListResolversResponse {
  /**
   * @schema AppSyncListResolversResponse#resolvers
   */
  readonly resolvers?: AppSyncResolver[];

  /**
   * @schema AppSyncListResolversResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppSyncListResolversResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListResolversResponse(obj: AppSyncListResolversResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resolvers': obj.resolvers?.map(y => toJson_AppSyncResolver(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListResolversByFunctionRequest
 */
export interface AppSyncListResolversByFunctionRequest {
  /**
   * @schema AppSyncListResolversByFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncListResolversByFunctionRequest#functionId
   */
  readonly functionId: string;

  /**
   * @schema AppSyncListResolversByFunctionRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppSyncListResolversByFunctionRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppSyncListResolversByFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListResolversByFunctionRequest(obj: AppSyncListResolversByFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'functionId': obj.functionId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListResolversByFunctionResponse
 */
export interface AppSyncListResolversByFunctionResponse {
  /**
   * @schema AppSyncListResolversByFunctionResponse#resolvers
   */
  readonly resolvers?: AppSyncResolver[];

  /**
   * @schema AppSyncListResolversByFunctionResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppSyncListResolversByFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListResolversByFunctionResponse(obj: AppSyncListResolversByFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resolvers': obj.resolvers?.map(y => toJson_AppSyncResolver(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListTagsForResourceRequest
 */
export interface AppSyncListTagsForResourceRequest {
  /**
   * @schema AppSyncListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'AppSyncListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListTagsForResourceRequest(obj: AppSyncListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListTagsForResourceResponse
 */
export interface AppSyncListTagsForResourceResponse {
  /**
   * @schema AppSyncListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppSyncListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListTagsForResourceResponse(obj: AppSyncListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListTypesRequest
 */
export interface AppSyncListTypesRequest {
  /**
   * @schema AppSyncListTypesRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncListTypesRequest#format
   */
  readonly format: string;

  /**
   * @schema AppSyncListTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppSyncListTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppSyncListTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListTypesRequest(obj: AppSyncListTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'format': obj.format,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncListTypesResponse
 */
export interface AppSyncListTypesResponse {
  /**
   * @schema AppSyncListTypesResponse#types
   */
  readonly types?: AppSyncType[];

  /**
   * @schema AppSyncListTypesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppSyncListTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncListTypesResponse(obj: AppSyncListTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'types': obj.types?.map(y => toJson_AppSyncType(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncStartSchemaCreationRequest
 */
export interface AppSyncStartSchemaCreationRequest {
  /**
   * @schema AppSyncStartSchemaCreationRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncStartSchemaCreationRequest#definition
   */
  readonly definition: any;

}

/**
 * Converts an object of type 'AppSyncStartSchemaCreationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncStartSchemaCreationRequest(obj: AppSyncStartSchemaCreationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'definition': obj.definition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncStartSchemaCreationResponse
 */
export interface AppSyncStartSchemaCreationResponse {
  /**
   * @schema AppSyncStartSchemaCreationResponse#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AppSyncStartSchemaCreationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncStartSchemaCreationResponse(obj: AppSyncStartSchemaCreationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncTagResourceRequest
 */
export interface AppSyncTagResourceRequest {
  /**
   * @schema AppSyncTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppSyncTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'AppSyncTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncTagResourceRequest(obj: AppSyncTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AppSyncTagResourceResponse
 */
export interface AppSyncTagResourceResponse {
}

/**
 * Converts an object of type 'AppSyncTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncTagResourceResponse(obj: AppSyncTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUntagResourceRequest
 */
export interface AppSyncUntagResourceRequest {
  /**
   * @schema AppSyncUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppSyncUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'AppSyncUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUntagResourceRequest(obj: AppSyncUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AppSyncUntagResourceResponse
 */
export interface AppSyncUntagResourceResponse {
}

/**
 * Converts an object of type 'AppSyncUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUntagResourceResponse(obj: AppSyncUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateApiCacheRequest
 */
export interface AppSyncUpdateApiCacheRequest {
  /**
   * @schema AppSyncUpdateApiCacheRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncUpdateApiCacheRequest#ttl
   */
  readonly ttl: number;

  /**
   * @schema AppSyncUpdateApiCacheRequest#apiCachingBehavior
   */
  readonly apiCachingBehavior: string;

  /**
   * @schema AppSyncUpdateApiCacheRequest#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'AppSyncUpdateApiCacheRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateApiCacheRequest(obj: AppSyncUpdateApiCacheRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'ttl': obj.ttl,
    'apiCachingBehavior': obj.apiCachingBehavior,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateApiCacheResponse
 */
export interface AppSyncUpdateApiCacheResponse {
  /**
   * @schema AppSyncUpdateApiCacheResponse#apiCache
   */
  readonly apiCache?: AppSyncApiCache;

}

/**
 * Converts an object of type 'AppSyncUpdateApiCacheResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateApiCacheResponse(obj: AppSyncUpdateApiCacheResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiCache': toJson_AppSyncApiCache(obj.apiCache),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateApiKeyRequest
 */
export interface AppSyncUpdateApiKeyRequest {
  /**
   * @schema AppSyncUpdateApiKeyRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncUpdateApiKeyRequest#id
   */
  readonly id: string;

  /**
   * @schema AppSyncUpdateApiKeyRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncUpdateApiKeyRequest#expires
   */
  readonly expires?: number;

}

/**
 * Converts an object of type 'AppSyncUpdateApiKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateApiKeyRequest(obj: AppSyncUpdateApiKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'id': obj.id,
    'description': obj.description,
    'expires': obj.expires,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateApiKeyResponse
 */
export interface AppSyncUpdateApiKeyResponse {
  /**
   * @schema AppSyncUpdateApiKeyResponse#apiKey
   */
  readonly apiKey?: AppSyncApiKey;

}

/**
 * Converts an object of type 'AppSyncUpdateApiKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateApiKeyResponse(obj: AppSyncUpdateApiKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiKey': toJson_AppSyncApiKey(obj.apiKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateDataSourceRequest
 */
export interface AppSyncUpdateDataSourceRequest {
  /**
   * @schema AppSyncUpdateDataSourceRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncUpdateDataSourceRequest#name
   */
  readonly name: string;

  /**
   * @schema AppSyncUpdateDataSourceRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncUpdateDataSourceRequest#type
   */
  readonly type: string;

  /**
   * @schema AppSyncUpdateDataSourceRequest#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema AppSyncUpdateDataSourceRequest#dynamodbConfig
   */
  readonly dynamodbConfig?: AppSyncDynamodbDataSourceConfig;

  /**
   * @schema AppSyncUpdateDataSourceRequest#lambdaConfig
   */
  readonly lambdaConfig?: AppSyncLambdaDataSourceConfig;

  /**
   * @schema AppSyncUpdateDataSourceRequest#elasticsearchConfig
   */
  readonly elasticsearchConfig?: AppSyncElasticsearchDataSourceConfig;

  /**
   * @schema AppSyncUpdateDataSourceRequest#httpConfig
   */
  readonly httpConfig?: AppSyncHttpDataSourceConfig;

  /**
   * @schema AppSyncUpdateDataSourceRequest#relationalDatabaseConfig
   */
  readonly relationalDatabaseConfig?: AppSyncRelationalDatabaseDataSourceConfig;

}

/**
 * Converts an object of type 'AppSyncUpdateDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateDataSourceRequest(obj: AppSyncUpdateDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'serviceRoleArn': obj.serviceRoleArn,
    'dynamodbConfig': toJson_AppSyncDynamodbDataSourceConfig(obj.dynamodbConfig),
    'lambdaConfig': toJson_AppSyncLambdaDataSourceConfig(obj.lambdaConfig),
    'elasticsearchConfig': toJson_AppSyncElasticsearchDataSourceConfig(obj.elasticsearchConfig),
    'httpConfig': toJson_AppSyncHttpDataSourceConfig(obj.httpConfig),
    'relationalDatabaseConfig': toJson_AppSyncRelationalDatabaseDataSourceConfig(obj.relationalDatabaseConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateDataSourceResponse
 */
export interface AppSyncUpdateDataSourceResponse {
  /**
   * @schema AppSyncUpdateDataSourceResponse#dataSource
   */
  readonly dataSource?: AppSyncDataSource;

}

/**
 * Converts an object of type 'AppSyncUpdateDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateDataSourceResponse(obj: AppSyncUpdateDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSource': toJson_AppSyncDataSource(obj.dataSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateFunctionRequest
 */
export interface AppSyncUpdateFunctionRequest {
  /**
   * @schema AppSyncUpdateFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncUpdateFunctionRequest#name
   */
  readonly name: string;

  /**
   * @schema AppSyncUpdateFunctionRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncUpdateFunctionRequest#functionId
   */
  readonly functionId: string;

  /**
   * @schema AppSyncUpdateFunctionRequest#dataSourceName
   */
  readonly dataSourceName: string;

  /**
   * @schema AppSyncUpdateFunctionRequest#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema AppSyncUpdateFunctionRequest#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema AppSyncUpdateFunctionRequest#functionVersion
   */
  readonly functionVersion: string;

  /**
   * @schema AppSyncUpdateFunctionRequest#syncConfig
   */
  readonly syncConfig?: AppSyncSyncConfig;

}

/**
 * Converts an object of type 'AppSyncUpdateFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateFunctionRequest(obj: AppSyncUpdateFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'name': obj.name,
    'description': obj.description,
    'functionId': obj.functionId,
    'dataSourceName': obj.dataSourceName,
    'requestMappingTemplate': obj.requestMappingTemplate,
    'responseMappingTemplate': obj.responseMappingTemplate,
    'functionVersion': obj.functionVersion,
    'syncConfig': toJson_AppSyncSyncConfig(obj.syncConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateFunctionResponse
 */
export interface AppSyncUpdateFunctionResponse {
  /**
   * @schema AppSyncUpdateFunctionResponse#functionConfiguration
   */
  readonly functionConfiguration?: AppSyncFunctionConfiguration;

}

/**
 * Converts an object of type 'AppSyncUpdateFunctionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateFunctionResponse(obj: AppSyncUpdateFunctionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functionConfiguration': toJson_AppSyncFunctionConfiguration(obj.functionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateGraphqlApiRequest
 */
export interface AppSyncUpdateGraphqlApiRequest {
  /**
   * @schema AppSyncUpdateGraphqlApiRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#name
   */
  readonly name: string;

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#logConfig
   */
  readonly logConfig?: AppSyncLogConfig;

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#authenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#userPoolConfig
   */
  readonly userPoolConfig?: AppSyncUserPoolConfig;

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#openIDConnectConfig
   */
  readonly openIdConnectConfig?: AppSyncOpenIdConnectConfig;

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#additionalAuthenticationProviders
   */
  readonly additionalAuthenticationProviders?: AppSyncAdditionalAuthenticationProvider[];

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#xrayEnabled
   */
  readonly xrayEnabled?: boolean;

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#lambdaAuthorizerConfig
   */
  readonly lambdaAuthorizerConfig?: AppSyncLambdaAuthorizerConfig;

}

/**
 * Converts an object of type 'AppSyncUpdateGraphqlApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateGraphqlApiRequest(obj: AppSyncUpdateGraphqlApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'name': obj.name,
    'logConfig': toJson_AppSyncLogConfig(obj.logConfig),
    'authenticationType': obj.authenticationType,
    'userPoolConfig': toJson_AppSyncUserPoolConfig(obj.userPoolConfig),
    'openIDConnectConfig': toJson_AppSyncOpenIdConnectConfig(obj.openIdConnectConfig),
    'additionalAuthenticationProviders': obj.additionalAuthenticationProviders?.map(y => toJson_AppSyncAdditionalAuthenticationProvider(y)),
    'xrayEnabled': obj.xrayEnabled,
    'lambdaAuthorizerConfig': toJson_AppSyncLambdaAuthorizerConfig(obj.lambdaAuthorizerConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateGraphqlApiResponse
 */
export interface AppSyncUpdateGraphqlApiResponse {
  /**
   * @schema AppSyncUpdateGraphqlApiResponse#graphqlApi
   */
  readonly graphqlApi?: AppSyncGraphqlApi;

}

/**
 * Converts an object of type 'AppSyncUpdateGraphqlApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateGraphqlApiResponse(obj: AppSyncUpdateGraphqlApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'graphqlApi': toJson_AppSyncGraphqlApi(obj.graphqlApi),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateResolverRequest
 */
export interface AppSyncUpdateResolverRequest {
  /**
   * @schema AppSyncUpdateResolverRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncUpdateResolverRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema AppSyncUpdateResolverRequest#fieldName
   */
  readonly fieldName: string;

  /**
   * @schema AppSyncUpdateResolverRequest#dataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema AppSyncUpdateResolverRequest#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema AppSyncUpdateResolverRequest#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema AppSyncUpdateResolverRequest#kind
   */
  readonly kind?: string;

  /**
   * @schema AppSyncUpdateResolverRequest#pipelineConfig
   */
  readonly pipelineConfig?: AppSyncPipelineConfig;

  /**
   * @schema AppSyncUpdateResolverRequest#syncConfig
   */
  readonly syncConfig?: AppSyncSyncConfig;

  /**
   * @schema AppSyncUpdateResolverRequest#cachingConfig
   */
  readonly cachingConfig?: AppSyncCachingConfig;

}

/**
 * Converts an object of type 'AppSyncUpdateResolverRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateResolverRequest(obj: AppSyncUpdateResolverRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'typeName': obj.typeName,
    'fieldName': obj.fieldName,
    'dataSourceName': obj.dataSourceName,
    'requestMappingTemplate': obj.requestMappingTemplate,
    'responseMappingTemplate': obj.responseMappingTemplate,
    'kind': obj.kind,
    'pipelineConfig': toJson_AppSyncPipelineConfig(obj.pipelineConfig),
    'syncConfig': toJson_AppSyncSyncConfig(obj.syncConfig),
    'cachingConfig': toJson_AppSyncCachingConfig(obj.cachingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateResolverResponse
 */
export interface AppSyncUpdateResolverResponse {
  /**
   * @schema AppSyncUpdateResolverResponse#resolver
   */
  readonly resolver?: AppSyncResolver;

}

/**
 * Converts an object of type 'AppSyncUpdateResolverResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateResolverResponse(obj: AppSyncUpdateResolverResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resolver': toJson_AppSyncResolver(obj.resolver),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateTypeRequest
 */
export interface AppSyncUpdateTypeRequest {
  /**
   * @schema AppSyncUpdateTypeRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema AppSyncUpdateTypeRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema AppSyncUpdateTypeRequest#definition
   */
  readonly definition?: string;

  /**
   * @schema AppSyncUpdateTypeRequest#format
   */
  readonly format: string;

}

/**
 * Converts an object of type 'AppSyncUpdateTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateTypeRequest(obj: AppSyncUpdateTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiId': obj.apiId,
    'typeName': obj.typeName,
    'definition': obj.definition,
    'format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUpdateTypeResponse
 */
export interface AppSyncUpdateTypeResponse {
  /**
   * @schema AppSyncUpdateTypeResponse#type
   */
  readonly type?: AppSyncType;

}

/**
 * Converts an object of type 'AppSyncUpdateTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUpdateTypeResponse(obj: AppSyncUpdateTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': toJson_AppSyncType(obj.type),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncApiCache
 */
export interface AppSyncApiCache {
  /**
   * @schema AppSyncApiCache#ttl
   */
  readonly ttl?: number;

  /**
   * @schema AppSyncApiCache#apiCachingBehavior
   */
  readonly apiCachingBehavior?: string;

  /**
   * @schema AppSyncApiCache#transitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema AppSyncApiCache#atRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema AppSyncApiCache#type
   */
  readonly type?: string;

  /**
   * @schema AppSyncApiCache#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AppSyncApiCache' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncApiCache(obj: AppSyncApiCache | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ttl': obj.ttl,
    'apiCachingBehavior': obj.apiCachingBehavior,
    'transitEncryptionEnabled': obj.transitEncryptionEnabled,
    'atRestEncryptionEnabled': obj.atRestEncryptionEnabled,
    'type': obj.type,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncApiKey
 */
export interface AppSyncApiKey {
  /**
   * @schema AppSyncApiKey#id
   */
  readonly id?: string;

  /**
   * @schema AppSyncApiKey#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncApiKey#expires
   */
  readonly expires?: number;

  /**
   * @schema AppSyncApiKey#deletes
   */
  readonly deletes?: number;

}

/**
 * Converts an object of type 'AppSyncApiKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncApiKey(obj: AppSyncApiKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
    'expires': obj.expires,
    'deletes': obj.deletes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDynamodbDataSourceConfig
 */
export interface AppSyncDynamodbDataSourceConfig {
  /**
   * @schema AppSyncDynamodbDataSourceConfig#tableName
   */
  readonly tableName: string;

  /**
   * @schema AppSyncDynamodbDataSourceConfig#awsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema AppSyncDynamodbDataSourceConfig#useCallerCredentials
   */
  readonly useCallerCredentials?: boolean;

  /**
   * @schema AppSyncDynamodbDataSourceConfig#deltaSyncConfig
   */
  readonly deltaSyncConfig?: AppSyncDeltaSyncConfig;

  /**
   * @schema AppSyncDynamodbDataSourceConfig#versioned
   */
  readonly versioned?: boolean;

}

/**
 * Converts an object of type 'AppSyncDynamodbDataSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDynamodbDataSourceConfig(obj: AppSyncDynamodbDataSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tableName': obj.tableName,
    'awsRegion': obj.awsRegion,
    'useCallerCredentials': obj.useCallerCredentials,
    'deltaSyncConfig': toJson_AppSyncDeltaSyncConfig(obj.deltaSyncConfig),
    'versioned': obj.versioned,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncLambdaDataSourceConfig
 */
export interface AppSyncLambdaDataSourceConfig {
  /**
   * @schema AppSyncLambdaDataSourceConfig#lambdaFunctionArn
   */
  readonly lambdaFunctionArn: string;

}

/**
 * Converts an object of type 'AppSyncLambdaDataSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncLambdaDataSourceConfig(obj: AppSyncLambdaDataSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lambdaFunctionArn': obj.lambdaFunctionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncElasticsearchDataSourceConfig
 */
export interface AppSyncElasticsearchDataSourceConfig {
  /**
   * @schema AppSyncElasticsearchDataSourceConfig#endpoint
   */
  readonly endpoint: string;

  /**
   * @schema AppSyncElasticsearchDataSourceConfig#awsRegion
   */
  readonly awsRegion: string;

}

/**
 * Converts an object of type 'AppSyncElasticsearchDataSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncElasticsearchDataSourceConfig(obj: AppSyncElasticsearchDataSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpoint': obj.endpoint,
    'awsRegion': obj.awsRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncHttpDataSourceConfig
 */
export interface AppSyncHttpDataSourceConfig {
  /**
   * @schema AppSyncHttpDataSourceConfig#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema AppSyncHttpDataSourceConfig#authorizationConfig
   */
  readonly authorizationConfig?: AppSyncAuthorizationConfig;

}

/**
 * Converts an object of type 'AppSyncHttpDataSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncHttpDataSourceConfig(obj: AppSyncHttpDataSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpoint': obj.endpoint,
    'authorizationConfig': toJson_AppSyncAuthorizationConfig(obj.authorizationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncRelationalDatabaseDataSourceConfig
 */
export interface AppSyncRelationalDatabaseDataSourceConfig {
  /**
   * @schema AppSyncRelationalDatabaseDataSourceConfig#relationalDatabaseSourceType
   */
  readonly relationalDatabaseSourceType?: string;

  /**
   * @schema AppSyncRelationalDatabaseDataSourceConfig#rdsHttpEndpointConfig
   */
  readonly rdsHttpEndpointConfig?: AppSyncRdsHttpEndpointConfig;

}

/**
 * Converts an object of type 'AppSyncRelationalDatabaseDataSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncRelationalDatabaseDataSourceConfig(obj: AppSyncRelationalDatabaseDataSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'relationalDatabaseSourceType': obj.relationalDatabaseSourceType,
    'rdsHttpEndpointConfig': toJson_AppSyncRdsHttpEndpointConfig(obj.rdsHttpEndpointConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDataSource
 */
export interface AppSyncDataSource {
  /**
   * @schema AppSyncDataSource#dataSourceArn
   */
  readonly dataSourceArn?: string;

  /**
   * @schema AppSyncDataSource#name
   */
  readonly name?: string;

  /**
   * @schema AppSyncDataSource#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncDataSource#type
   */
  readonly type?: string;

  /**
   * @schema AppSyncDataSource#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema AppSyncDataSource#dynamodbConfig
   */
  readonly dynamodbConfig?: AppSyncDynamodbDataSourceConfig;

  /**
   * @schema AppSyncDataSource#lambdaConfig
   */
  readonly lambdaConfig?: AppSyncLambdaDataSourceConfig;

  /**
   * @schema AppSyncDataSource#elasticsearchConfig
   */
  readonly elasticsearchConfig?: AppSyncElasticsearchDataSourceConfig;

  /**
   * @schema AppSyncDataSource#httpConfig
   */
  readonly httpConfig?: AppSyncHttpDataSourceConfig;

  /**
   * @schema AppSyncDataSource#relationalDatabaseConfig
   */
  readonly relationalDatabaseConfig?: AppSyncRelationalDatabaseDataSourceConfig;

}

/**
 * Converts an object of type 'AppSyncDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDataSource(obj: AppSyncDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSourceArn': obj.dataSourceArn,
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'serviceRoleArn': obj.serviceRoleArn,
    'dynamodbConfig': toJson_AppSyncDynamodbDataSourceConfig(obj.dynamodbConfig),
    'lambdaConfig': toJson_AppSyncLambdaDataSourceConfig(obj.lambdaConfig),
    'elasticsearchConfig': toJson_AppSyncElasticsearchDataSourceConfig(obj.elasticsearchConfig),
    'httpConfig': toJson_AppSyncHttpDataSourceConfig(obj.httpConfig),
    'relationalDatabaseConfig': toJson_AppSyncRelationalDatabaseDataSourceConfig(obj.relationalDatabaseConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncSyncConfig
 */
export interface AppSyncSyncConfig {
  /**
   * @schema AppSyncSyncConfig#conflictHandler
   */
  readonly conflictHandler?: string;

  /**
   * @schema AppSyncSyncConfig#conflictDetection
   */
  readonly conflictDetection?: string;

  /**
   * @schema AppSyncSyncConfig#lambdaConflictHandlerConfig
   */
  readonly lambdaConflictHandlerConfig?: AppSyncLambdaConflictHandlerConfig;

}

/**
 * Converts an object of type 'AppSyncSyncConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncSyncConfig(obj: AppSyncSyncConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'conflictHandler': obj.conflictHandler,
    'conflictDetection': obj.conflictDetection,
    'lambdaConflictHandlerConfig': toJson_AppSyncLambdaConflictHandlerConfig(obj.lambdaConflictHandlerConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncFunctionConfiguration
 */
export interface AppSyncFunctionConfiguration {
  /**
   * @schema AppSyncFunctionConfiguration#functionId
   */
  readonly functionId?: string;

  /**
   * @schema AppSyncFunctionConfiguration#functionArn
   */
  readonly functionArn?: string;

  /**
   * @schema AppSyncFunctionConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema AppSyncFunctionConfiguration#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncFunctionConfiguration#dataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema AppSyncFunctionConfiguration#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema AppSyncFunctionConfiguration#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema AppSyncFunctionConfiguration#functionVersion
   */
  readonly functionVersion?: string;

  /**
   * @schema AppSyncFunctionConfiguration#syncConfig
   */
  readonly syncConfig?: AppSyncSyncConfig;

}

/**
 * Converts an object of type 'AppSyncFunctionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncFunctionConfiguration(obj: AppSyncFunctionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functionId': obj.functionId,
    'functionArn': obj.functionArn,
    'name': obj.name,
    'description': obj.description,
    'dataSourceName': obj.dataSourceName,
    'requestMappingTemplate': obj.requestMappingTemplate,
    'responseMappingTemplate': obj.responseMappingTemplate,
    'functionVersion': obj.functionVersion,
    'syncConfig': toJson_AppSyncSyncConfig(obj.syncConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncLogConfig
 */
export interface AppSyncLogConfig {
  /**
   * @schema AppSyncLogConfig#fieldLogLevel
   */
  readonly fieldLogLevel: string;

  /**
   * @schema AppSyncLogConfig#cloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn: string;

  /**
   * @schema AppSyncLogConfig#excludeVerboseContent
   */
  readonly excludeVerboseContent?: boolean;

}

/**
 * Converts an object of type 'AppSyncLogConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncLogConfig(obj: AppSyncLogConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fieldLogLevel': obj.fieldLogLevel,
    'cloudWatchLogsRoleArn': obj.cloudWatchLogsRoleArn,
    'excludeVerboseContent': obj.excludeVerboseContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncUserPoolConfig
 */
export interface AppSyncUserPoolConfig {
  /**
   * @schema AppSyncUserPoolConfig#userPoolId
   */
  readonly userPoolId: string;

  /**
   * @schema AppSyncUserPoolConfig#awsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema AppSyncUserPoolConfig#defaultAction
   */
  readonly defaultAction: string;

  /**
   * @schema AppSyncUserPoolConfig#appIdClientRegex
   */
  readonly appIdClientRegex?: string;

}

/**
 * Converts an object of type 'AppSyncUserPoolConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncUserPoolConfig(obj: AppSyncUserPoolConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userPoolId': obj.userPoolId,
    'awsRegion': obj.awsRegion,
    'defaultAction': obj.defaultAction,
    'appIdClientRegex': obj.appIdClientRegex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncOpenIdConnectConfig
 */
export interface AppSyncOpenIdConnectConfig {
  /**
   * @schema AppSyncOpenIdConnectConfig#issuer
   */
  readonly issuer: string;

  /**
   * @schema AppSyncOpenIdConnectConfig#clientId
   */
  readonly clientId?: string;

  /**
   * @schema AppSyncOpenIdConnectConfig#iatTTL
   */
  readonly iatTtl?: number;

  /**
   * @schema AppSyncOpenIdConnectConfig#authTTL
   */
  readonly authTtl?: number;

}

/**
 * Converts an object of type 'AppSyncOpenIdConnectConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncOpenIdConnectConfig(obj: AppSyncOpenIdConnectConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'issuer': obj.issuer,
    'clientId': obj.clientId,
    'iatTTL': obj.iatTtl,
    'authTTL': obj.authTtl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncAdditionalAuthenticationProvider
 */
export interface AppSyncAdditionalAuthenticationProvider {
  /**
   * @schema AppSyncAdditionalAuthenticationProvider#authenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AppSyncAdditionalAuthenticationProvider#openIDConnectConfig
   */
  readonly openIdConnectConfig?: AppSyncOpenIdConnectConfig;

  /**
   * @schema AppSyncAdditionalAuthenticationProvider#userPoolConfig
   */
  readonly userPoolConfig?: AppSyncCognitoUserPoolConfig;

  /**
   * @schema AppSyncAdditionalAuthenticationProvider#lambdaAuthorizerConfig
   */
  readonly lambdaAuthorizerConfig?: AppSyncLambdaAuthorizerConfig;

}

/**
 * Converts an object of type 'AppSyncAdditionalAuthenticationProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncAdditionalAuthenticationProvider(obj: AppSyncAdditionalAuthenticationProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authenticationType': obj.authenticationType,
    'openIDConnectConfig': toJson_AppSyncOpenIdConnectConfig(obj.openIdConnectConfig),
    'userPoolConfig': toJson_AppSyncCognitoUserPoolConfig(obj.userPoolConfig),
    'lambdaAuthorizerConfig': toJson_AppSyncLambdaAuthorizerConfig(obj.lambdaAuthorizerConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncLambdaAuthorizerConfig
 */
export interface AppSyncLambdaAuthorizerConfig {
  /**
   * @schema AppSyncLambdaAuthorizerConfig#authorizerResultTtlInSeconds
   */
  readonly authorizerResultTtlInSeconds?: number;

  /**
   * @schema AppSyncLambdaAuthorizerConfig#authorizerUri
   */
  readonly authorizerUri: string;

  /**
   * @schema AppSyncLambdaAuthorizerConfig#identityValidationExpression
   */
  readonly identityValidationExpression?: string;

}

/**
 * Converts an object of type 'AppSyncLambdaAuthorizerConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncLambdaAuthorizerConfig(obj: AppSyncLambdaAuthorizerConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerResultTtlInSeconds': obj.authorizerResultTtlInSeconds,
    'authorizerUri': obj.authorizerUri,
    'identityValidationExpression': obj.identityValidationExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncGraphqlApi
 */
export interface AppSyncGraphqlApi {
  /**
   * @schema AppSyncGraphqlApi#name
   */
  readonly name?: string;

  /**
   * @schema AppSyncGraphqlApi#apiId
   */
  readonly apiId?: string;

  /**
   * @schema AppSyncGraphqlApi#authenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AppSyncGraphqlApi#logConfig
   */
  readonly logConfig?: AppSyncLogConfig;

  /**
   * @schema AppSyncGraphqlApi#userPoolConfig
   */
  readonly userPoolConfig?: AppSyncUserPoolConfig;

  /**
   * @schema AppSyncGraphqlApi#openIDConnectConfig
   */
  readonly openIdConnectConfig?: AppSyncOpenIdConnectConfig;

  /**
   * @schema AppSyncGraphqlApi#arn
   */
  readonly arn?: string;

  /**
   * @schema AppSyncGraphqlApi#uris
   */
  readonly uris?: { [key: string]: string };

  /**
   * @schema AppSyncGraphqlApi#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppSyncGraphqlApi#additionalAuthenticationProviders
   */
  readonly additionalAuthenticationProviders?: AppSyncAdditionalAuthenticationProvider[];

  /**
   * @schema AppSyncGraphqlApi#xrayEnabled
   */
  readonly xrayEnabled?: boolean;

  /**
   * @schema AppSyncGraphqlApi#wafWebAclArn
   */
  readonly wafWebAclArn?: string;

  /**
   * @schema AppSyncGraphqlApi#lambdaAuthorizerConfig
   */
  readonly lambdaAuthorizerConfig?: AppSyncLambdaAuthorizerConfig;

}

/**
 * Converts an object of type 'AppSyncGraphqlApi' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncGraphqlApi(obj: AppSyncGraphqlApi | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'apiId': obj.apiId,
    'authenticationType': obj.authenticationType,
    'logConfig': toJson_AppSyncLogConfig(obj.logConfig),
    'userPoolConfig': toJson_AppSyncUserPoolConfig(obj.userPoolConfig),
    'openIDConnectConfig': toJson_AppSyncOpenIdConnectConfig(obj.openIdConnectConfig),
    'arn': obj.arn,
    'uris': ((obj.uris) === undefined) ? undefined : (Object.entries(obj.uris).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'additionalAuthenticationProviders': obj.additionalAuthenticationProviders?.map(y => toJson_AppSyncAdditionalAuthenticationProvider(y)),
    'xrayEnabled': obj.xrayEnabled,
    'wafWebAclArn': obj.wafWebAclArn,
    'lambdaAuthorizerConfig': toJson_AppSyncLambdaAuthorizerConfig(obj.lambdaAuthorizerConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncPipelineConfig
 */
export interface AppSyncPipelineConfig {
  /**
   * @schema AppSyncPipelineConfig#functions
   */
  readonly functions?: string[];

}

/**
 * Converts an object of type 'AppSyncPipelineConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncPipelineConfig(obj: AppSyncPipelineConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functions': obj.functions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCachingConfig
 */
export interface AppSyncCachingConfig {
  /**
   * @schema AppSyncCachingConfig#ttl
   */
  readonly ttl?: number;

  /**
   * @schema AppSyncCachingConfig#cachingKeys
   */
  readonly cachingKeys?: string[];

}

/**
 * Converts an object of type 'AppSyncCachingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCachingConfig(obj: AppSyncCachingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ttl': obj.ttl,
    'cachingKeys': obj.cachingKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncResolver
 */
export interface AppSyncResolver {
  /**
   * @schema AppSyncResolver#typeName
   */
  readonly typeName?: string;

  /**
   * @schema AppSyncResolver#fieldName
   */
  readonly fieldName?: string;

  /**
   * @schema AppSyncResolver#dataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema AppSyncResolver#resolverArn
   */
  readonly resolverArn?: string;

  /**
   * @schema AppSyncResolver#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema AppSyncResolver#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema AppSyncResolver#kind
   */
  readonly kind?: string;

  /**
   * @schema AppSyncResolver#pipelineConfig
   */
  readonly pipelineConfig?: AppSyncPipelineConfig;

  /**
   * @schema AppSyncResolver#syncConfig
   */
  readonly syncConfig?: AppSyncSyncConfig;

  /**
   * @schema AppSyncResolver#cachingConfig
   */
  readonly cachingConfig?: AppSyncCachingConfig;

}

/**
 * Converts an object of type 'AppSyncResolver' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncResolver(obj: AppSyncResolver | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'typeName': obj.typeName,
    'fieldName': obj.fieldName,
    'dataSourceName': obj.dataSourceName,
    'resolverArn': obj.resolverArn,
    'requestMappingTemplate': obj.requestMappingTemplate,
    'responseMappingTemplate': obj.responseMappingTemplate,
    'kind': obj.kind,
    'pipelineConfig': toJson_AppSyncPipelineConfig(obj.pipelineConfig),
    'syncConfig': toJson_AppSyncSyncConfig(obj.syncConfig),
    'cachingConfig': toJson_AppSyncCachingConfig(obj.cachingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncType
 */
export interface AppSyncType {
  /**
   * @schema AppSyncType#name
   */
  readonly name?: string;

  /**
   * @schema AppSyncType#description
   */
  readonly description?: string;

  /**
   * @schema AppSyncType#arn
   */
  readonly arn?: string;

  /**
   * @schema AppSyncType#definition
   */
  readonly definition?: string;

  /**
   * @schema AppSyncType#format
   */
  readonly format?: string;

}

/**
 * Converts an object of type 'AppSyncType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncType(obj: AppSyncType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'arn': obj.arn,
    'definition': obj.definition,
    'format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncDeltaSyncConfig
 */
export interface AppSyncDeltaSyncConfig {
  /**
   * @schema AppSyncDeltaSyncConfig#baseTableTTL
   */
  readonly baseTableTtl?: number;

  /**
   * @schema AppSyncDeltaSyncConfig#deltaSyncTableName
   */
  readonly deltaSyncTableName?: string;

  /**
   * @schema AppSyncDeltaSyncConfig#deltaSyncTableTTL
   */
  readonly deltaSyncTableTtl?: number;

}

/**
 * Converts an object of type 'AppSyncDeltaSyncConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncDeltaSyncConfig(obj: AppSyncDeltaSyncConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'baseTableTTL': obj.baseTableTtl,
    'deltaSyncTableName': obj.deltaSyncTableName,
    'deltaSyncTableTTL': obj.deltaSyncTableTtl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncAuthorizationConfig
 */
export interface AppSyncAuthorizationConfig {
  /**
   * @schema AppSyncAuthorizationConfig#authorizationType
   */
  readonly authorizationType: string;

  /**
   * @schema AppSyncAuthorizationConfig#awsIamConfig
   */
  readonly awsIamConfig?: AppSyncAwsIamConfig;

}

/**
 * Converts an object of type 'AppSyncAuthorizationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncAuthorizationConfig(obj: AppSyncAuthorizationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizationType': obj.authorizationType,
    'awsIamConfig': toJson_AppSyncAwsIamConfig(obj.awsIamConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncRdsHttpEndpointConfig
 */
export interface AppSyncRdsHttpEndpointConfig {
  /**
   * @schema AppSyncRdsHttpEndpointConfig#awsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema AppSyncRdsHttpEndpointConfig#dbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema AppSyncRdsHttpEndpointConfig#databaseName
   */
  readonly databaseName?: string;

  /**
   * @schema AppSyncRdsHttpEndpointConfig#schema
   */
  readonly schema?: string;

  /**
   * @schema AppSyncRdsHttpEndpointConfig#awsSecretStoreArn
   */
  readonly awsSecretStoreArn?: string;

}

/**
 * Converts an object of type 'AppSyncRdsHttpEndpointConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncRdsHttpEndpointConfig(obj: AppSyncRdsHttpEndpointConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsRegion': obj.awsRegion,
    'dbClusterIdentifier': obj.dbClusterIdentifier,
    'databaseName': obj.databaseName,
    'schema': obj.schema,
    'awsSecretStoreArn': obj.awsSecretStoreArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncLambdaConflictHandlerConfig
 */
export interface AppSyncLambdaConflictHandlerConfig {
  /**
   * @schema AppSyncLambdaConflictHandlerConfig#lambdaConflictHandlerArn
   */
  readonly lambdaConflictHandlerArn?: string;

}

/**
 * Converts an object of type 'AppSyncLambdaConflictHandlerConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncLambdaConflictHandlerConfig(obj: AppSyncLambdaConflictHandlerConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lambdaConflictHandlerArn': obj.lambdaConflictHandlerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncCognitoUserPoolConfig
 */
export interface AppSyncCognitoUserPoolConfig {
  /**
   * @schema AppSyncCognitoUserPoolConfig#userPoolId
   */
  readonly userPoolId: string;

  /**
   * @schema AppSyncCognitoUserPoolConfig#awsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema AppSyncCognitoUserPoolConfig#appIdClientRegex
   */
  readonly appIdClientRegex?: string;

}

/**
 * Converts an object of type 'AppSyncCognitoUserPoolConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncCognitoUserPoolConfig(obj: AppSyncCognitoUserPoolConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userPoolId': obj.userPoolId,
    'awsRegion': obj.awsRegion,
    'appIdClientRegex': obj.appIdClientRegex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppSyncAwsIamConfig
 */
export interface AppSyncAwsIamConfig {
  /**
   * @schema AppSyncAwsIamConfig#signingRegion
   */
  readonly signingRegion?: string;

  /**
   * @schema AppSyncAwsIamConfig#signingServiceName
   */
  readonly signingServiceName?: string;

}

/**
 * Converts an object of type 'AppSyncAwsIamConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppSyncAwsIamConfig(obj: AppSyncAwsIamConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'signingRegion': obj.signingRegion,
    'signingServiceName': obj.signingServiceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
