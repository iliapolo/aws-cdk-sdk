/**
 * @schema CreateApiCacheRequest
 */
export interface CreateApiCacheRequest {
  /**
   * @schema CreateApiCacheRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema CreateApiCacheRequest#ttl
   */
  readonly ttl: number;

  /**
   * @schema CreateApiCacheRequest#transitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema CreateApiCacheRequest#atRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema CreateApiCacheRequest#apiCachingBehavior
   */
  readonly apiCachingBehavior: string;

  /**
   * @schema CreateApiCacheRequest#type
   */
  readonly type: string;

}

/**
 * @schema CreateApiCacheResponse
 */
export interface CreateApiCacheResponse {
  /**
   * @schema CreateApiCacheResponse#apiCache
   */
  readonly apiCache?: ApiCache;

}

/**
 * @schema CreateApiKeyRequest
 */
export interface CreateApiKeyRequest {
  /**
   * @schema CreateApiKeyRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema CreateApiKeyRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateApiKeyRequest#expires
   */
  readonly expires?: number;

}

/**
 * @schema CreateApiKeyResponse
 */
export interface CreateApiKeyResponse {
  /**
   * @schema CreateApiKeyResponse#apiKey
   */
  readonly apiKey?: ApiKey;

}

/**
 * @schema CreateDataSourceRequest
 */
export interface CreateDataSourceRequest {
  /**
   * @schema CreateDataSourceRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema CreateDataSourceRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateDataSourceRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateDataSourceRequest#type
   */
  readonly type: string;

  /**
   * @schema CreateDataSourceRequest#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema CreateDataSourceRequest#dynamodbConfig
   */
  readonly dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * @schema CreateDataSourceRequest#lambdaConfig
   */
  readonly lambdaConfig?: LambdaDataSourceConfig;

  /**
   * @schema CreateDataSourceRequest#elasticsearchConfig
   */
  readonly elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * @schema CreateDataSourceRequest#httpConfig
   */
  readonly httpConfig?: HttpDataSourceConfig;

  /**
   * @schema CreateDataSourceRequest#relationalDatabaseConfig
   */
  readonly relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

}

/**
 * @schema CreateDataSourceResponse
 */
export interface CreateDataSourceResponse {
  /**
   * @schema CreateDataSourceResponse#dataSource
   */
  readonly dataSource?: DataSource;

}

/**
 * @schema CreateFunctionRequest
 */
export interface CreateFunctionRequest {
  /**
   * @schema CreateFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema CreateFunctionRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateFunctionRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateFunctionRequest#dataSourceName
   */
  readonly dataSourceName: string;

  /**
   * @schema CreateFunctionRequest#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema CreateFunctionRequest#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema CreateFunctionRequest#functionVersion
   */
  readonly functionVersion: string;

}

/**
 * @schema CreateFunctionResponse
 */
export interface CreateFunctionResponse {
  /**
   * @schema CreateFunctionResponse#functionConfiguration
   */
  readonly functionConfiguration?: FunctionConfiguration;

}

/**
 * @schema CreateGraphqlApiRequest
 */
export interface CreateGraphqlApiRequest {
  /**
   * @schema CreateGraphqlApiRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateGraphqlApiRequest#logConfig
   */
  readonly logConfig?: LogConfig;

  /**
   * @schema CreateGraphqlApiRequest#authenticationType
   */
  readonly authenticationType: string;

  /**
   * @schema CreateGraphqlApiRequest#userPoolConfig
   */
  readonly userPoolConfig?: UserPoolConfig;

  /**
   * @schema CreateGraphqlApiRequest#openIDConnectConfig
   */
  readonly openIDConnectConfig?: OpenIdConnectConfig;

  /**
   * @schema CreateGraphqlApiRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateGraphqlApiRequest#additionalAuthenticationProviders
   */
  readonly additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  /**
   * @schema CreateGraphqlApiRequest#xrayEnabled
   */
  readonly xrayEnabled?: boolean;

}

/**
 * @schema CreateGraphqlApiResponse
 */
export interface CreateGraphqlApiResponse {
  /**
   * @schema CreateGraphqlApiResponse#graphqlApi
   */
  readonly graphqlApi?: GraphqlApi;

}

/**
 * @schema CreateResolverRequest
 */
export interface CreateResolverRequest {
  /**
   * @schema CreateResolverRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema CreateResolverRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema CreateResolverRequest#fieldName
   */
  readonly fieldName: string;

  /**
   * @schema CreateResolverRequest#dataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema CreateResolverRequest#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema CreateResolverRequest#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema CreateResolverRequest#kind
   */
  readonly kind?: string;

  /**
   * @schema CreateResolverRequest#pipelineConfig
   */
  readonly pipelineConfig?: PipelineConfig;

  /**
   * @schema CreateResolverRequest#syncConfig
   */
  readonly syncConfig?: SyncConfig;

  /**
   * @schema CreateResolverRequest#cachingConfig
   */
  readonly cachingConfig?: CachingConfig;

}

/**
 * @schema CreateResolverResponse
 */
export interface CreateResolverResponse {
  /**
   * @schema CreateResolverResponse#resolver
   */
  readonly resolver?: Resolver;

}

/**
 * @schema CreateTypeRequest
 */
export interface CreateTypeRequest {
  /**
   * @schema CreateTypeRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema CreateTypeRequest#definition
   */
  readonly definition: string;

  /**
   * @schema CreateTypeRequest#format
   */
  readonly format: string;

}

/**
 * @schema CreateTypeResponse
 */
export interface CreateTypeResponse {
  /**
   * @schema CreateTypeResponse#type
   */
  readonly type?: Type;

}

/**
 * @schema DeleteApiCacheRequest
 */
export interface DeleteApiCacheRequest {
  /**
   * @schema DeleteApiCacheRequest#apiId
   */
  readonly apiId: string;

}

/**
 * @schema DeleteApiCacheResponse
 */
export interface DeleteApiCacheResponse {
}

/**
 * @schema DeleteApiKeyRequest
 */
export interface DeleteApiKeyRequest {
  /**
   * @schema DeleteApiKeyRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteApiKeyRequest#id
   */
  readonly id: string;

}

/**
 * @schema DeleteApiKeyResponse
 */
export interface DeleteApiKeyResponse {
}

/**
 * @schema DeleteDataSourceRequest
 */
export interface DeleteDataSourceRequest {
  /**
   * @schema DeleteDataSourceRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteDataSourceRequest#name
   */
  readonly name: string;

}

/**
 * @schema DeleteDataSourceResponse
 */
export interface DeleteDataSourceResponse {
}

/**
 * @schema DeleteFunctionRequest
 */
export interface DeleteFunctionRequest {
  /**
   * @schema DeleteFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteFunctionRequest#functionId
   */
  readonly functionId: string;

}

/**
 * @schema DeleteFunctionResponse
 */
export interface DeleteFunctionResponse {
}

/**
 * @schema DeleteGraphqlApiRequest
 */
export interface DeleteGraphqlApiRequest {
  /**
   * @schema DeleteGraphqlApiRequest#apiId
   */
  readonly apiId: string;

}

/**
 * @schema DeleteGraphqlApiResponse
 */
export interface DeleteGraphqlApiResponse {
}

/**
 * @schema DeleteResolverRequest
 */
export interface DeleteResolverRequest {
  /**
   * @schema DeleteResolverRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteResolverRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema DeleteResolverRequest#fieldName
   */
  readonly fieldName: string;

}

/**
 * @schema DeleteResolverResponse
 */
export interface DeleteResolverResponse {
}

/**
 * @schema DeleteTypeRequest
 */
export interface DeleteTypeRequest {
  /**
   * @schema DeleteTypeRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema DeleteTypeRequest#typeName
   */
  readonly typeName: string;

}

/**
 * @schema DeleteTypeResponse
 */
export interface DeleteTypeResponse {
}

/**
 * @schema FlushApiCacheRequest
 */
export interface FlushApiCacheRequest {
  /**
   * @schema FlushApiCacheRequest#apiId
   */
  readonly apiId: string;

}

/**
 * @schema FlushApiCacheResponse
 */
export interface FlushApiCacheResponse {
}

/**
 * @schema GetApiCacheRequest
 */
export interface GetApiCacheRequest {
  /**
   * @schema GetApiCacheRequest#apiId
   */
  readonly apiId: string;

}

/**
 * @schema GetApiCacheResponse
 */
export interface GetApiCacheResponse {
  /**
   * @schema GetApiCacheResponse#apiCache
   */
  readonly apiCache?: ApiCache;

}

/**
 * @schema GetDataSourceRequest
 */
export interface GetDataSourceRequest {
  /**
   * @schema GetDataSourceRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema GetDataSourceRequest#name
   */
  readonly name: string;

}

/**
 * @schema GetDataSourceResponse
 */
export interface GetDataSourceResponse {
  /**
   * @schema GetDataSourceResponse#dataSource
   */
  readonly dataSource?: DataSource;

}

/**
 * @schema GetFunctionRequest
 */
export interface GetFunctionRequest {
  /**
   * @schema GetFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema GetFunctionRequest#functionId
   */
  readonly functionId: string;

}

/**
 * @schema GetFunctionResponse
 */
export interface GetFunctionResponse {
  /**
   * @schema GetFunctionResponse#functionConfiguration
   */
  readonly functionConfiguration?: FunctionConfiguration;

}

/**
 * @schema GetGraphqlApiRequest
 */
export interface GetGraphqlApiRequest {
  /**
   * @schema GetGraphqlApiRequest#apiId
   */
  readonly apiId: string;

}

/**
 * @schema GetGraphqlApiResponse
 */
export interface GetGraphqlApiResponse {
  /**
   * @schema GetGraphqlApiResponse#graphqlApi
   */
  readonly graphqlApi?: GraphqlApi;

}

/**
 * @schema GetIntrospectionSchemaRequest
 */
export interface GetIntrospectionSchemaRequest {
  /**
   * @schema GetIntrospectionSchemaRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema GetIntrospectionSchemaRequest#format
   */
  readonly format: string;

  /**
   * @schema GetIntrospectionSchemaRequest#includeDirectives
   */
  readonly includeDirectives?: boolean;

}

/**
 * @schema GetIntrospectionSchemaResponse
 */
export interface GetIntrospectionSchemaResponse {
  /**
   * @schema GetIntrospectionSchemaResponse#schema
   */
  readonly schema?: any;

}

/**
 * @schema GetResolverRequest
 */
export interface GetResolverRequest {
  /**
   * @schema GetResolverRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema GetResolverRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema GetResolverRequest#fieldName
   */
  readonly fieldName: string;

}

/**
 * @schema GetResolverResponse
 */
export interface GetResolverResponse {
  /**
   * @schema GetResolverResponse#resolver
   */
  readonly resolver?: Resolver;

}

/**
 * @schema GetSchemaCreationStatusRequest
 */
export interface GetSchemaCreationStatusRequest {
  /**
   * @schema GetSchemaCreationStatusRequest#apiId
   */
  readonly apiId: string;

}

/**
 * @schema GetSchemaCreationStatusResponse
 */
export interface GetSchemaCreationStatusResponse {
  /**
   * @schema GetSchemaCreationStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema GetSchemaCreationStatusResponse#details
   */
  readonly details?: string;

}

/**
 * @schema GetTypeRequest
 */
export interface GetTypeRequest {
  /**
   * @schema GetTypeRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema GetTypeRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema GetTypeRequest#format
   */
  readonly format: string;

}

/**
 * @schema GetTypeResponse
 */
export interface GetTypeResponse {
  /**
   * @schema GetTypeResponse#type
   */
  readonly type?: Type;

}

/**
 * @schema ListApiKeysRequest
 */
export interface ListApiKeysRequest {
  /**
   * @schema ListApiKeysRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema ListApiKeysRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListApiKeysRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListApiKeysResponse
 */
export interface ListApiKeysResponse {
  /**
   * @schema ListApiKeysResponse#apiKeys
   */
  readonly apiKeys?: ApiKey[];

  /**
   * @schema ListApiKeysResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDataSourcesRequest
 */
export interface ListDataSourcesRequest {
  /**
   * @schema ListDataSourcesRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema ListDataSourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataSourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDataSourcesResponse
 */
export interface ListDataSourcesResponse {
  /**
   * @schema ListDataSourcesResponse#dataSources
   */
  readonly dataSources?: DataSource[];

  /**
   * @schema ListDataSourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFunctionsRequest
 */
export interface ListFunctionsRequest {
  /**
   * @schema ListFunctionsRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema ListFunctionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFunctionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFunctionsResponse
 */
export interface ListFunctionsResponse {
  /**
   * @schema ListFunctionsResponse#functions
   */
  readonly functions?: FunctionConfiguration[];

  /**
   * @schema ListFunctionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGraphqlApisRequest
 */
export interface ListGraphqlApisRequest {
  /**
   * @schema ListGraphqlApisRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGraphqlApisRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListGraphqlApisResponse
 */
export interface ListGraphqlApisResponse {
  /**
   * @schema ListGraphqlApisResponse#graphqlApis
   */
  readonly graphqlApis?: GraphqlApi[];

  /**
   * @schema ListGraphqlApisResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResolversRequest
 */
export interface ListResolversRequest {
  /**
   * @schema ListResolversRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema ListResolversRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema ListResolversRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolversRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResolversResponse
 */
export interface ListResolversResponse {
  /**
   * @schema ListResolversResponse#resolvers
   */
  readonly resolvers?: Resolver[];

  /**
   * @schema ListResolversResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResolversByFunctionRequest
 */
export interface ListResolversByFunctionRequest {
  /**
   * @schema ListResolversByFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema ListResolversByFunctionRequest#functionId
   */
  readonly functionId: string;

  /**
   * @schema ListResolversByFunctionRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResolversByFunctionRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResolversByFunctionResponse
 */
export interface ListResolversByFunctionResponse {
  /**
   * @schema ListResolversByFunctionResponse#resolvers
   */
  readonly resolvers?: Resolver[];

  /**
   * @schema ListResolversByFunctionResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListTypesRequest
 */
export interface ListTypesRequest {
  /**
   * @schema ListTypesRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema ListTypesRequest#format
   */
  readonly format: string;

  /**
   * @schema ListTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTypesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTypesResponse
 */
export interface ListTypesResponse {
  /**
   * @schema ListTypesResponse#types
   */
  readonly types?: Type[];

  /**
   * @schema ListTypesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartSchemaCreationRequest
 */
export interface StartSchemaCreationRequest {
  /**
   * @schema StartSchemaCreationRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema StartSchemaCreationRequest#definition
   */
  readonly definition: any;

}

/**
 * @schema StartSchemaCreationResponse
 */
export interface StartSchemaCreationResponse {
  /**
   * @schema StartSchemaCreationResponse#status
   */
  readonly status?: string;

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
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
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
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateApiCacheRequest
 */
export interface UpdateApiCacheRequest {
  /**
   * @schema UpdateApiCacheRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateApiCacheRequest#ttl
   */
  readonly ttl: number;

  /**
   * @schema UpdateApiCacheRequest#apiCachingBehavior
   */
  readonly apiCachingBehavior: string;

  /**
   * @schema UpdateApiCacheRequest#type
   */
  readonly type: string;

}

/**
 * @schema UpdateApiCacheResponse
 */
export interface UpdateApiCacheResponse {
  /**
   * @schema UpdateApiCacheResponse#apiCache
   */
  readonly apiCache?: ApiCache;

}

/**
 * @schema UpdateApiKeyRequest
 */
export interface UpdateApiKeyRequest {
  /**
   * @schema UpdateApiKeyRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateApiKeyRequest#id
   */
  readonly id: string;

  /**
   * @schema UpdateApiKeyRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateApiKeyRequest#expires
   */
  readonly expires?: number;

}

/**
 * @schema UpdateApiKeyResponse
 */
export interface UpdateApiKeyResponse {
  /**
   * @schema UpdateApiKeyResponse#apiKey
   */
  readonly apiKey?: ApiKey;

}

/**
 * @schema UpdateDataSourceRequest
 */
export interface UpdateDataSourceRequest {
  /**
   * @schema UpdateDataSourceRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateDataSourceRequest#name
   */
  readonly name: string;

  /**
   * @schema UpdateDataSourceRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateDataSourceRequest#type
   */
  readonly type: string;

  /**
   * @schema UpdateDataSourceRequest#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema UpdateDataSourceRequest#dynamodbConfig
   */
  readonly dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * @schema UpdateDataSourceRequest#lambdaConfig
   */
  readonly lambdaConfig?: LambdaDataSourceConfig;

  /**
   * @schema UpdateDataSourceRequest#elasticsearchConfig
   */
  readonly elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * @schema UpdateDataSourceRequest#httpConfig
   */
  readonly httpConfig?: HttpDataSourceConfig;

  /**
   * @schema UpdateDataSourceRequest#relationalDatabaseConfig
   */
  readonly relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

}

/**
 * @schema UpdateDataSourceResponse
 */
export interface UpdateDataSourceResponse {
  /**
   * @schema UpdateDataSourceResponse#dataSource
   */
  readonly dataSource?: DataSource;

}

/**
 * @schema UpdateFunctionRequest
 */
export interface UpdateFunctionRequest {
  /**
   * @schema UpdateFunctionRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateFunctionRequest#name
   */
  readonly name: string;

  /**
   * @schema UpdateFunctionRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateFunctionRequest#functionId
   */
  readonly functionId: string;

  /**
   * @schema UpdateFunctionRequest#dataSourceName
   */
  readonly dataSourceName: string;

  /**
   * @schema UpdateFunctionRequest#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema UpdateFunctionRequest#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema UpdateFunctionRequest#functionVersion
   */
  readonly functionVersion: string;

}

/**
 * @schema UpdateFunctionResponse
 */
export interface UpdateFunctionResponse {
  /**
   * @schema UpdateFunctionResponse#functionConfiguration
   */
  readonly functionConfiguration?: FunctionConfiguration;

}

/**
 * @schema UpdateGraphqlApiRequest
 */
export interface UpdateGraphqlApiRequest {
  /**
   * @schema UpdateGraphqlApiRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateGraphqlApiRequest#name
   */
  readonly name: string;

  /**
   * @schema UpdateGraphqlApiRequest#logConfig
   */
  readonly logConfig?: LogConfig;

  /**
   * @schema UpdateGraphqlApiRequest#authenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema UpdateGraphqlApiRequest#userPoolConfig
   */
  readonly userPoolConfig?: UserPoolConfig;

  /**
   * @schema UpdateGraphqlApiRequest#openIDConnectConfig
   */
  readonly openIDConnectConfig?: OpenIdConnectConfig;

  /**
   * @schema UpdateGraphqlApiRequest#additionalAuthenticationProviders
   */
  readonly additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  /**
   * @schema UpdateGraphqlApiRequest#xrayEnabled
   */
  readonly xrayEnabled?: boolean;

}

/**
 * @schema UpdateGraphqlApiResponse
 */
export interface UpdateGraphqlApiResponse {
  /**
   * @schema UpdateGraphqlApiResponse#graphqlApi
   */
  readonly graphqlApi?: GraphqlApi;

}

/**
 * @schema UpdateResolverRequest
 */
export interface UpdateResolverRequest {
  /**
   * @schema UpdateResolverRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateResolverRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema UpdateResolverRequest#fieldName
   */
  readonly fieldName: string;

  /**
   * @schema UpdateResolverRequest#dataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema UpdateResolverRequest#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema UpdateResolverRequest#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema UpdateResolverRequest#kind
   */
  readonly kind?: string;

  /**
   * @schema UpdateResolverRequest#pipelineConfig
   */
  readonly pipelineConfig?: PipelineConfig;

  /**
   * @schema UpdateResolverRequest#syncConfig
   */
  readonly syncConfig?: SyncConfig;

  /**
   * @schema UpdateResolverRequest#cachingConfig
   */
  readonly cachingConfig?: CachingConfig;

}

/**
 * @schema UpdateResolverResponse
 */
export interface UpdateResolverResponse {
  /**
   * @schema UpdateResolverResponse#resolver
   */
  readonly resolver?: Resolver;

}

/**
 * @schema UpdateTypeRequest
 */
export interface UpdateTypeRequest {
  /**
   * @schema UpdateTypeRequest#apiId
   */
  readonly apiId: string;

  /**
   * @schema UpdateTypeRequest#typeName
   */
  readonly typeName: string;

  /**
   * @schema UpdateTypeRequest#definition
   */
  readonly definition?: string;

  /**
   * @schema UpdateTypeRequest#format
   */
  readonly format: string;

}

/**
 * @schema UpdateTypeResponse
 */
export interface UpdateTypeResponse {
  /**
   * @schema UpdateTypeResponse#type
   */
  readonly type?: Type;

}

/**
 * @schema ApiCache
 */
export interface ApiCache {
  /**
   * @schema ApiCache#ttl
   */
  readonly ttl?: number;

  /**
   * @schema ApiCache#apiCachingBehavior
   */
  readonly apiCachingBehavior?: string;

  /**
   * @schema ApiCache#transitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema ApiCache#atRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema ApiCache#type
   */
  readonly type?: string;

  /**
   * @schema ApiCache#status
   */
  readonly status?: string;

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
   * @schema ApiKey#description
   */
  readonly description?: string;

  /**
   * @schema ApiKey#expires
   */
  readonly expires?: number;

  /**
   * @schema ApiKey#deletes
   */
  readonly deletes?: number;

}

/**
 * @schema DynamodbDataSourceConfig
 */
export interface DynamodbDataSourceConfig {
  /**
   * @schema DynamodbDataSourceConfig#tableName
   */
  readonly tableName: string;

  /**
   * @schema DynamodbDataSourceConfig#awsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema DynamodbDataSourceConfig#useCallerCredentials
   */
  readonly useCallerCredentials?: boolean;

  /**
   * @schema DynamodbDataSourceConfig#deltaSyncConfig
   */
  readonly deltaSyncConfig?: DeltaSyncConfig;

  /**
   * @schema DynamodbDataSourceConfig#versioned
   */
  readonly versioned?: boolean;

}

/**
 * @schema LambdaDataSourceConfig
 */
export interface LambdaDataSourceConfig {
  /**
   * @schema LambdaDataSourceConfig#lambdaFunctionArn
   */
  readonly lambdaFunctionArn: string;

}

/**
 * @schema ElasticsearchDataSourceConfig
 */
export interface ElasticsearchDataSourceConfig {
  /**
   * @schema ElasticsearchDataSourceConfig#endpoint
   */
  readonly endpoint: string;

  /**
   * @schema ElasticsearchDataSourceConfig#awsRegion
   */
  readonly awsRegion: string;

}

/**
 * @schema HttpDataSourceConfig
 */
export interface HttpDataSourceConfig {
  /**
   * @schema HttpDataSourceConfig#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema HttpDataSourceConfig#authorizationConfig
   */
  readonly authorizationConfig?: AuthorizationConfig;

}

/**
 * @schema RelationalDatabaseDataSourceConfig
 */
export interface RelationalDatabaseDataSourceConfig {
  /**
   * @schema RelationalDatabaseDataSourceConfig#relationalDatabaseSourceType
   */
  readonly relationalDatabaseSourceType?: string;

  /**
   * @schema RelationalDatabaseDataSourceConfig#rdsHttpEndpointConfig
   */
  readonly rdsHttpEndpointConfig?: RdsHttpEndpointConfig;

}

/**
 * @schema DataSource
 */
export interface DataSource {
  /**
   * @schema DataSource#dataSourceArn
   */
  readonly dataSourceArn?: string;

  /**
   * @schema DataSource#name
   */
  readonly name?: string;

  /**
   * @schema DataSource#description
   */
  readonly description?: string;

  /**
   * @schema DataSource#type
   */
  readonly type?: string;

  /**
   * @schema DataSource#serviceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema DataSource#dynamodbConfig
   */
  readonly dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * @schema DataSource#lambdaConfig
   */
  readonly lambdaConfig?: LambdaDataSourceConfig;

  /**
   * @schema DataSource#elasticsearchConfig
   */
  readonly elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * @schema DataSource#httpConfig
   */
  readonly httpConfig?: HttpDataSourceConfig;

  /**
   * @schema DataSource#relationalDatabaseConfig
   */
  readonly relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

}

/**
 * @schema FunctionConfiguration
 */
export interface FunctionConfiguration {
  /**
   * @schema FunctionConfiguration#functionId
   */
  readonly functionId?: string;

  /**
   * @schema FunctionConfiguration#functionArn
   */
  readonly functionArn?: string;

  /**
   * @schema FunctionConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema FunctionConfiguration#description
   */
  readonly description?: string;

  /**
   * @schema FunctionConfiguration#dataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema FunctionConfiguration#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema FunctionConfiguration#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema FunctionConfiguration#functionVersion
   */
  readonly functionVersion?: string;

}

/**
 * @schema LogConfig
 */
export interface LogConfig {
  /**
   * @schema LogConfig#fieldLogLevel
   */
  readonly fieldLogLevel: string;

  /**
   * @schema LogConfig#cloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn: string;

  /**
   * @schema LogConfig#excludeVerboseContent
   */
  readonly excludeVerboseContent?: boolean;

}

/**
 * @schema UserPoolConfig
 */
export interface UserPoolConfig {
  /**
   * @schema UserPoolConfig#userPoolId
   */
  readonly userPoolId: string;

  /**
   * @schema UserPoolConfig#awsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema UserPoolConfig#defaultAction
   */
  readonly defaultAction: string;

  /**
   * @schema UserPoolConfig#appIdClientRegex
   */
  readonly appIdClientRegex?: string;

}

/**
 * @schema OpenIdConnectConfig
 */
export interface OpenIdConnectConfig {
  /**
   * @schema OpenIdConnectConfig#issuer
   */
  readonly issuer: string;

  /**
   * @schema OpenIdConnectConfig#clientId
   */
  readonly clientId?: string;

  /**
   * @schema OpenIdConnectConfig#iatTTL
   */
  readonly iatTTL?: number;

  /**
   * @schema OpenIdConnectConfig#authTTL
   */
  readonly authTTL?: number;

}

/**
 * @schema AdditionalAuthenticationProvider
 */
export interface AdditionalAuthenticationProvider {
  /**
   * @schema AdditionalAuthenticationProvider#authenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AdditionalAuthenticationProvider#openIDConnectConfig
   */
  readonly openIDConnectConfig?: OpenIdConnectConfig;

  /**
   * @schema AdditionalAuthenticationProvider#userPoolConfig
   */
  readonly userPoolConfig?: CognitoUserPoolConfig;

}

/**
 * @schema GraphqlApi
 */
export interface GraphqlApi {
  /**
   * @schema GraphqlApi#name
   */
  readonly name?: string;

  /**
   * @schema GraphqlApi#apiId
   */
  readonly apiId?: string;

  /**
   * @schema GraphqlApi#authenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema GraphqlApi#logConfig
   */
  readonly logConfig?: LogConfig;

  /**
   * @schema GraphqlApi#userPoolConfig
   */
  readonly userPoolConfig?: UserPoolConfig;

  /**
   * @schema GraphqlApi#openIDConnectConfig
   */
  readonly openIDConnectConfig?: OpenIdConnectConfig;

  /**
   * @schema GraphqlApi#arn
   */
  readonly arn?: string;

  /**
   * @schema GraphqlApi#uris
   */
  readonly uris?: { [key: string]: string };

  /**
   * @schema GraphqlApi#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GraphqlApi#additionalAuthenticationProviders
   */
  readonly additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  /**
   * @schema GraphqlApi#xrayEnabled
   */
  readonly xrayEnabled?: boolean;

  /**
   * @schema GraphqlApi#wafWebAclArn
   */
  readonly wafWebAclArn?: string;

}

/**
 * @schema PipelineConfig
 */
export interface PipelineConfig {
  /**
   * @schema PipelineConfig#functions
   */
  readonly functions?: string[];

}

/**
 * @schema SyncConfig
 */
export interface SyncConfig {
  /**
   * @schema SyncConfig#conflictHandler
   */
  readonly conflictHandler?: string;

  /**
   * @schema SyncConfig#conflictDetection
   */
  readonly conflictDetection?: string;

  /**
   * @schema SyncConfig#lambdaConflictHandlerConfig
   */
  readonly lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;

}

/**
 * @schema CachingConfig
 */
export interface CachingConfig {
  /**
   * @schema CachingConfig#ttl
   */
  readonly ttl?: number;

  /**
   * @schema CachingConfig#cachingKeys
   */
  readonly cachingKeys?: string[];

}

/**
 * @schema Resolver
 */
export interface Resolver {
  /**
   * @schema Resolver#typeName
   */
  readonly typeName?: string;

  /**
   * @schema Resolver#fieldName
   */
  readonly fieldName?: string;

  /**
   * @schema Resolver#dataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema Resolver#resolverArn
   */
  readonly resolverArn?: string;

  /**
   * @schema Resolver#requestMappingTemplate
   */
  readonly requestMappingTemplate?: string;

  /**
   * @schema Resolver#responseMappingTemplate
   */
  readonly responseMappingTemplate?: string;

  /**
   * @schema Resolver#kind
   */
  readonly kind?: string;

  /**
   * @schema Resolver#pipelineConfig
   */
  readonly pipelineConfig?: PipelineConfig;

  /**
   * @schema Resolver#syncConfig
   */
  readonly syncConfig?: SyncConfig;

  /**
   * @schema Resolver#cachingConfig
   */
  readonly cachingConfig?: CachingConfig;

}

/**
 * @schema Type
 */
export interface Type {
  /**
   * @schema Type#name
   */
  readonly name?: string;

  /**
   * @schema Type#description
   */
  readonly description?: string;

  /**
   * @schema Type#arn
   */
  readonly arn?: string;

  /**
   * @schema Type#definition
   */
  readonly definition?: string;

  /**
   * @schema Type#format
   */
  readonly format?: string;

}

/**
 * @schema DeltaSyncConfig
 */
export interface DeltaSyncConfig {
  /**
   * @schema DeltaSyncConfig#baseTableTTL
   */
  readonly baseTableTTL?: number;

  /**
   * @schema DeltaSyncConfig#deltaSyncTableName
   */
  readonly deltaSyncTableName?: string;

  /**
   * @schema DeltaSyncConfig#deltaSyncTableTTL
   */
  readonly deltaSyncTableTTL?: number;

}

/**
 * @schema AuthorizationConfig
 */
export interface AuthorizationConfig {
  /**
   * @schema AuthorizationConfig#authorizationType
   */
  readonly authorizationType: string;

  /**
   * @schema AuthorizationConfig#awsIamConfig
   */
  readonly awsIamConfig?: AwsIamConfig;

}

/**
 * @schema RdsHttpEndpointConfig
 */
export interface RdsHttpEndpointConfig {
  /**
   * @schema RdsHttpEndpointConfig#awsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema RdsHttpEndpointConfig#dbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema RdsHttpEndpointConfig#databaseName
   */
  readonly databaseName?: string;

  /**
   * @schema RdsHttpEndpointConfig#schema
   */
  readonly schema?: string;

  /**
   * @schema RdsHttpEndpointConfig#awsSecretStoreArn
   */
  readonly awsSecretStoreArn?: string;

}

/**
 * @schema CognitoUserPoolConfig
 */
export interface CognitoUserPoolConfig {
  /**
   * @schema CognitoUserPoolConfig#userPoolId
   */
  readonly userPoolId: string;

  /**
   * @schema CognitoUserPoolConfig#awsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema CognitoUserPoolConfig#appIdClientRegex
   */
  readonly appIdClientRegex?: string;

}

/**
 * @schema LambdaConflictHandlerConfig
 */
export interface LambdaConflictHandlerConfig {
  /**
   * @schema LambdaConflictHandlerConfig#lambdaConflictHandlerArn
   */
  readonly lambdaConflictHandlerArn?: string;

}

/**
 * @schema AwsIamConfig
 */
export interface AwsIamConfig {
  /**
   * @schema AwsIamConfig#signingRegion
   */
  readonly signingRegion?: string;

  /**
   * @schema AwsIamConfig#signingServiceName
   */
  readonly signingServiceName?: string;

}
