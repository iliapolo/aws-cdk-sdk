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
 * @schema AppSyncCreateApiCacheResponse
 */
export interface AppSyncCreateApiCacheResponse {
  /**
   * @schema AppSyncCreateApiCacheResponse#apiCache
   */
  readonly apiCache?: AppSyncApiCache;

}

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
 * @schema AppSyncCreateApiKeyResponse
 */
export interface AppSyncCreateApiKeyResponse {
  /**
   * @schema AppSyncCreateApiKeyResponse#apiKey
   */
  readonly apiKey?: AppSyncApiKey;

}

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
 * @schema AppSyncCreateDataSourceResponse
 */
export interface AppSyncCreateDataSourceResponse {
  /**
   * @schema AppSyncCreateDataSourceResponse#dataSource
   */
  readonly dataSource?: AppSyncDataSource;

}

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

}

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
  readonly openIDConnectConfig?: AppSyncOpenIdConnectConfig;

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

}

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
 * @schema AppSyncCreateResolverResponse
 */
export interface AppSyncCreateResolverResponse {
  /**
   * @schema AppSyncCreateResolverResponse#resolver
   */
  readonly resolver?: AppSyncResolver;

}

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
 * @schema AppSyncCreateTypeResponse
 */
export interface AppSyncCreateTypeResponse {
  /**
   * @schema AppSyncCreateTypeResponse#type
   */
  readonly type?: AppSyncType;

}

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
 * @schema AppSyncDeleteApiCacheResponse
 */
export interface AppSyncDeleteApiCacheResponse {
}

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
 * @schema AppSyncDeleteApiKeyResponse
 */
export interface AppSyncDeleteApiKeyResponse {
}

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
 * @schema AppSyncDeleteDataSourceResponse
 */
export interface AppSyncDeleteDataSourceResponse {
}

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
 * @schema AppSyncDeleteFunctionResponse
 */
export interface AppSyncDeleteFunctionResponse {
}

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
 * @schema AppSyncDeleteGraphqlApiResponse
 */
export interface AppSyncDeleteGraphqlApiResponse {
}

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
 * @schema AppSyncDeleteResolverResponse
 */
export interface AppSyncDeleteResolverResponse {
}

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
 * @schema AppSyncDeleteTypeResponse
 */
export interface AppSyncDeleteTypeResponse {
}

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
 * @schema AppSyncFlushApiCacheResponse
 */
export interface AppSyncFlushApiCacheResponse {
}

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
 * @schema AppSyncGetApiCacheResponse
 */
export interface AppSyncGetApiCacheResponse {
  /**
   * @schema AppSyncGetApiCacheResponse#apiCache
   */
  readonly apiCache?: AppSyncApiCache;

}

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
 * @schema AppSyncGetDataSourceResponse
 */
export interface AppSyncGetDataSourceResponse {
  /**
   * @schema AppSyncGetDataSourceResponse#dataSource
   */
  readonly dataSource?: AppSyncDataSource;

}

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
 * @schema AppSyncGetFunctionResponse
 */
export interface AppSyncGetFunctionResponse {
  /**
   * @schema AppSyncGetFunctionResponse#functionConfiguration
   */
  readonly functionConfiguration?: AppSyncFunctionConfiguration;

}

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
 * @schema AppSyncGetGraphqlApiResponse
 */
export interface AppSyncGetGraphqlApiResponse {
  /**
   * @schema AppSyncGetGraphqlApiResponse#graphqlApi
   */
  readonly graphqlApi?: AppSyncGraphqlApi;

}

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
 * @schema AppSyncGetIntrospectionSchemaResponse
 */
export interface AppSyncGetIntrospectionSchemaResponse {
  /**
   * @schema AppSyncGetIntrospectionSchemaResponse#schema
   */
  readonly schema?: any;

}

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
 * @schema AppSyncGetResolverResponse
 */
export interface AppSyncGetResolverResponse {
  /**
   * @schema AppSyncGetResolverResponse#resolver
   */
  readonly resolver?: AppSyncResolver;

}

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
 * @schema AppSyncGetTypeResponse
 */
export interface AppSyncGetTypeResponse {
  /**
   * @schema AppSyncGetTypeResponse#type
   */
  readonly type?: AppSyncType;

}

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
 * @schema AppSyncListTagsForResourceRequest
 */
export interface AppSyncListTagsForResourceRequest {
  /**
   * @schema AppSyncListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema AppSyncStartSchemaCreationResponse
 */
export interface AppSyncStartSchemaCreationResponse {
  /**
   * @schema AppSyncStartSchemaCreationResponse#status
   */
  readonly status?: string;

}

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
 * @schema AppSyncTagResourceResponse
 */
export interface AppSyncTagResourceResponse {
}

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
 * @schema AppSyncUntagResourceResponse
 */
export interface AppSyncUntagResourceResponse {
}

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
 * @schema AppSyncUpdateApiCacheResponse
 */
export interface AppSyncUpdateApiCacheResponse {
  /**
   * @schema AppSyncUpdateApiCacheResponse#apiCache
   */
  readonly apiCache?: AppSyncApiCache;

}

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
 * @schema AppSyncUpdateApiKeyResponse
 */
export interface AppSyncUpdateApiKeyResponse {
  /**
   * @schema AppSyncUpdateApiKeyResponse#apiKey
   */
  readonly apiKey?: AppSyncApiKey;

}

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
 * @schema AppSyncUpdateDataSourceResponse
 */
export interface AppSyncUpdateDataSourceResponse {
  /**
   * @schema AppSyncUpdateDataSourceResponse#dataSource
   */
  readonly dataSource?: AppSyncDataSource;

}

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

}

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
  readonly openIDConnectConfig?: AppSyncOpenIdConnectConfig;

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#additionalAuthenticationProviders
   */
  readonly additionalAuthenticationProviders?: AppSyncAdditionalAuthenticationProvider[];

  /**
   * @schema AppSyncUpdateGraphqlApiRequest#xrayEnabled
   */
  readonly xrayEnabled?: boolean;

}

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
 * @schema AppSyncUpdateResolverResponse
 */
export interface AppSyncUpdateResolverResponse {
  /**
   * @schema AppSyncUpdateResolverResponse#resolver
   */
  readonly resolver?: AppSyncResolver;

}

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
 * @schema AppSyncUpdateTypeResponse
 */
export interface AppSyncUpdateTypeResponse {
  /**
   * @schema AppSyncUpdateTypeResponse#type
   */
  readonly type?: AppSyncType;

}

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
 * @schema AppSyncLambdaDataSourceConfig
 */
export interface AppSyncLambdaDataSourceConfig {
  /**
   * @schema AppSyncLambdaDataSourceConfig#lambdaFunctionArn
   */
  readonly lambdaFunctionArn: string;

}

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

}

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
  readonly iatTTL?: number;

  /**
   * @schema AppSyncOpenIdConnectConfig#authTTL
   */
  readonly authTTL?: number;

}

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
  readonly openIDConnectConfig?: AppSyncOpenIdConnectConfig;

  /**
   * @schema AppSyncAdditionalAuthenticationProvider#userPoolConfig
   */
  readonly userPoolConfig?: AppSyncCognitoUserPoolConfig;

}

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
  readonly openIDConnectConfig?: AppSyncOpenIdConnectConfig;

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

}

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
 * @schema AppSyncDeltaSyncConfig
 */
export interface AppSyncDeltaSyncConfig {
  /**
   * @schema AppSyncDeltaSyncConfig#baseTableTTL
   */
  readonly baseTableTTL?: number;

  /**
   * @schema AppSyncDeltaSyncConfig#deltaSyncTableName
   */
  readonly deltaSyncTableName?: string;

  /**
   * @schema AppSyncDeltaSyncConfig#deltaSyncTableTTL
   */
  readonly deltaSyncTableTTL?: number;

}

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
 * @schema AppSyncLambdaConflictHandlerConfig
 */
export interface AppSyncLambdaConflictHandlerConfig {
  /**
   * @schema AppSyncLambdaConflictHandlerConfig#lambdaConflictHandlerArn
   */
  readonly lambdaConflictHandlerArn?: string;

}

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
