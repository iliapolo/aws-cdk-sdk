import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AppSyncClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApiCache(input: shapes.AppSyncCreateApiCacheRequest): AppSyncCreateApiCache {
    return new AppSyncCreateApiCache(this, 'CreateApiCache', this.__resources, input);
  }

  public createApiKey(input: shapes.AppSyncCreateApiKeyRequest): AppSyncCreateApiKey {
    return new AppSyncCreateApiKey(this, 'CreateApiKey', this.__resources, input);
  }

  public createDataSource(input: shapes.AppSyncCreateDataSourceRequest): AppSyncCreateDataSource {
    return new AppSyncCreateDataSource(this, 'CreateDataSource', this.__resources, input);
  }

  public createFunction(input: shapes.AppSyncCreateFunctionRequest): AppSyncCreateFunction {
    return new AppSyncCreateFunction(this, 'CreateFunction', this.__resources, input);
  }

  public createGraphqlApi(input: shapes.AppSyncCreateGraphqlApiRequest): AppSyncCreateGraphqlApi {
    return new AppSyncCreateGraphqlApi(this, 'CreateGraphqlApi', this.__resources, input);
  }

  public createResolver(input: shapes.AppSyncCreateResolverRequest): AppSyncCreateResolver {
    return new AppSyncCreateResolver(this, 'CreateResolver', this.__resources, input);
  }

  public createType(input: shapes.AppSyncCreateTypeRequest): AppSyncCreateType {
    return new AppSyncCreateType(this, 'CreateType', this.__resources, input);
  }

  public deleteApiCache(input: shapes.AppSyncDeleteApiCacheRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.DeleteApiCache'),
        parameters: {
          apiId: input.apiId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApiCache', props);
  }

  public deleteApiKey(input: shapes.AppSyncDeleteApiKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApiKey',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.DeleteApiKey'),
        parameters: {
          apiId: input.apiId,
          id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApiKey', props);
  }

  public deleteDataSource(input: shapes.AppSyncDeleteDataSourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.DeleteDataSource'),
        parameters: {
          apiId: input.apiId,
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDataSource', props);
  }

  public deleteFunction(input: shapes.AppSyncDeleteFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.DeleteFunction'),
        parameters: {
          apiId: input.apiId,
          functionId: input.functionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFunction', props);
  }

  public deleteGraphqlApi(input: shapes.AppSyncDeleteGraphqlApiRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.DeleteGraphqlApi'),
        parameters: {
          apiId: input.apiId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGraphqlApi', props);
  }

  public deleteResolver(input: shapes.AppSyncDeleteResolverRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.DeleteResolver'),
        parameters: {
          apiId: input.apiId,
          typeName: input.typeName,
          fieldName: input.fieldName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResolver', props);
  }

  public deleteType(input: shapes.AppSyncDeleteTypeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.DeleteType'),
        parameters: {
          apiId: input.apiId,
          typeName: input.typeName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteType', props);
  }

  public flushApiCache(input: shapes.AppSyncFlushApiCacheRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'flushApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.FlushApiCache'),
        parameters: {
          apiId: input.apiId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'FlushApiCache', props);
  }

  public fetchApiCache(input: shapes.AppSyncGetApiCacheRequest): AppSyncFetchApiCache {
    return new AppSyncFetchApiCache(this, 'FetchApiCache', this.__resources, input);
  }

  public fetchDataSource(input: shapes.AppSyncGetDataSourceRequest): AppSyncFetchDataSource {
    return new AppSyncFetchDataSource(this, 'FetchDataSource', this.__resources, input);
  }

  public fetchFunction(input: shapes.AppSyncGetFunctionRequest): AppSyncFetchFunction {
    return new AppSyncFetchFunction(this, 'FetchFunction', this.__resources, input);
  }

  public fetchGraphqlApi(input: shapes.AppSyncGetGraphqlApiRequest): AppSyncFetchGraphqlApi {
    return new AppSyncFetchGraphqlApi(this, 'FetchGraphqlApi', this.__resources, input);
  }

  public fetchIntrospectionSchema(input: shapes.AppSyncGetIntrospectionSchemaRequest): AppSyncFetchIntrospectionSchema {
    return new AppSyncFetchIntrospectionSchema(this, 'FetchIntrospectionSchema', this.__resources, input);
  }

  public fetchResolver(input: shapes.AppSyncGetResolverRequest): AppSyncFetchResolver {
    return new AppSyncFetchResolver(this, 'FetchResolver', this.__resources, input);
  }

  public fetchSchemaCreationStatus(input: shapes.AppSyncGetSchemaCreationStatusRequest): AppSyncFetchSchemaCreationStatus {
    return new AppSyncFetchSchemaCreationStatus(this, 'FetchSchemaCreationStatus', this.__resources, input);
  }

  public fetchType(input: shapes.AppSyncGetTypeRequest): AppSyncFetchType {
    return new AppSyncFetchType(this, 'FetchType', this.__resources, input);
  }

  public listApiKeys(input: shapes.AppSyncListApiKeysRequest): AppSyncListApiKeys {
    return new AppSyncListApiKeys(this, 'ListApiKeys', this.__resources, input);
  }

  public listDataSources(input: shapes.AppSyncListDataSourcesRequest): AppSyncListDataSources {
    return new AppSyncListDataSources(this, 'ListDataSources', this.__resources, input);
  }

  public listFunctions(input: shapes.AppSyncListFunctionsRequest): AppSyncListFunctions {
    return new AppSyncListFunctions(this, 'ListFunctions', this.__resources, input);
  }

  public listGraphqlApis(input: shapes.AppSyncListGraphqlApisRequest): AppSyncListGraphqlApis {
    return new AppSyncListGraphqlApis(this, 'ListGraphqlApis', this.__resources, input);
  }

  public listResolvers(input: shapes.AppSyncListResolversRequest): AppSyncListResolvers {
    return new AppSyncListResolvers(this, 'ListResolvers', this.__resources, input);
  }

  public listResolversByFunction(input: shapes.AppSyncListResolversByFunctionRequest): AppSyncListResolversByFunction {
    return new AppSyncListResolversByFunction(this, 'ListResolversByFunction', this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppSyncListTagsForResourceRequest): AppSyncListTagsForResource {
    return new AppSyncListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTypes(input: shapes.AppSyncListTypesRequest): AppSyncListTypes {
    return new AppSyncListTypes(this, 'ListTypes', this.__resources, input);
  }

  public startSchemaCreation(input: shapes.AppSyncStartSchemaCreationRequest): AppSyncStartSchemaCreation {
    return new AppSyncStartSchemaCreation(this, 'StartSchemaCreation', this.__resources, input);
  }

  public tagResource(input: shapes.AppSyncTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AppSyncUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApiCache(input: shapes.AppSyncUpdateApiCacheRequest): AppSyncUpdateApiCache {
    return new AppSyncUpdateApiCache(this, 'UpdateApiCache', this.__resources, input);
  }

  public updateApiKey(input: shapes.AppSyncUpdateApiKeyRequest): AppSyncUpdateApiKey {
    return new AppSyncUpdateApiKey(this, 'UpdateApiKey', this.__resources, input);
  }

  public updateDataSource(input: shapes.AppSyncUpdateDataSourceRequest): AppSyncUpdateDataSource {
    return new AppSyncUpdateDataSource(this, 'UpdateDataSource', this.__resources, input);
  }

  public updateFunction(input: shapes.AppSyncUpdateFunctionRequest): AppSyncUpdateFunction {
    return new AppSyncUpdateFunction(this, 'UpdateFunction', this.__resources, input);
  }

  public updateGraphqlApi(input: shapes.AppSyncUpdateGraphqlApiRequest): AppSyncUpdateGraphqlApi {
    return new AppSyncUpdateGraphqlApi(this, 'UpdateGraphqlApi', this.__resources, input);
  }

  public updateResolver(input: shapes.AppSyncUpdateResolverRequest): AppSyncUpdateResolver {
    return new AppSyncUpdateResolver(this, 'UpdateResolver', this.__resources, input);
  }

  public updateType(input: shapes.AppSyncUpdateTypeRequest): AppSyncUpdateType {
    return new AppSyncUpdateType(this, 'UpdateType', this.__resources, input);
  }

}

export class AppSyncCreateApiCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateApiCacheRequest) {
    super(scope, id);
  }

  public get apiCache(): AppSyncCreateApiCacheApiCache {
    return new AppSyncCreateApiCacheApiCache(this, 'ApiCache', this.__resources, this.input);
  }

}

export class AppSyncCreateApiCacheApiCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateApiCacheRequest) {
    super(scope, id);
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiCache.apiCache.ttl'),
        outputPath: 'apiCache.ttl',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          transitEncryptionEnabled: this.input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiCache.apiCache.ttl', props);
    return resource.getResponseField('apiCache.ttl') as unknown as number;
  }

  public get apiCachingBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiCache.apiCache.apiCachingBehavior'),
        outputPath: 'apiCache.apiCachingBehavior',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          transitEncryptionEnabled: this.input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiCache.apiCache.apiCachingBehavior', props);
    return resource.getResponseField('apiCache.apiCachingBehavior') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiCache.apiCache.transitEncryptionEnabled'),
        outputPath: 'apiCache.transitEncryptionEnabled',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          transitEncryptionEnabled: this.input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiCache.apiCache.transitEncryptionEnabled', props);
    return resource.getResponseField('apiCache.transitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiCache.apiCache.atRestEncryptionEnabled'),
        outputPath: 'apiCache.atRestEncryptionEnabled',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          transitEncryptionEnabled: this.input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiCache.apiCache.atRestEncryptionEnabled', props);
    return resource.getResponseField('apiCache.atRestEncryptionEnabled') as unknown as boolean;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiCache.apiCache.type'),
        outputPath: 'apiCache.type',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          transitEncryptionEnabled: this.input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiCache.apiCache.type', props);
    return resource.getResponseField('apiCache.type') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiCache.apiCache.status'),
        outputPath: 'apiCache.status',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          transitEncryptionEnabled: this.input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiCache.apiCache.status', props);
    return resource.getResponseField('apiCache.status') as unknown as string;
  }

}

export class AppSyncCreateApiKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateApiKeyRequest) {
    super(scope, id);
  }

  public get apiKey(): AppSyncCreateApiKeyApiKey {
    return new AppSyncCreateApiKeyApiKey(this, 'ApiKey', this.__resources, this.input);
  }

}

export class AppSyncCreateApiKeyApiKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateApiKeyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiKey.apiKey.id'),
        outputPath: 'apiKey.id',
        parameters: {
          apiId: this.input.apiId,
          description: this.input.description,
          expires: this.input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.apiKey.id', props);
    return resource.getResponseField('apiKey.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiKey.apiKey.description'),
        outputPath: 'apiKey.description',
        parameters: {
          apiId: this.input.apiId,
          description: this.input.description,
          expires: this.input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.apiKey.description', props);
    return resource.getResponseField('apiKey.description') as unknown as string;
  }

  public get expires(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiKey.apiKey.expires'),
        outputPath: 'apiKey.expires',
        parameters: {
          apiId: this.input.apiId,
          description: this.input.description,
          expires: this.input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.apiKey.expires', props);
    return resource.getResponseField('apiKey.expires') as unknown as number;
  }

  public get deletes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateApiKey.apiKey.deletes'),
        outputPath: 'apiKey.deletes',
        parameters: {
          apiId: this.input.apiId,
          description: this.input.description,
          expires: this.input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.apiKey.deletes', props);
    return resource.getResponseField('apiKey.deletes') as unknown as number;
  }

}

export class AppSyncCreateDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get dataSource(): AppSyncCreateDataSourceDataSource {
    return new AppSyncCreateDataSourceDataSource(this, 'DataSource', this.__resources, this.input);
  }

}

export class AppSyncCreateDataSourceDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get dataSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.dataSourceArn'),
        outputPath: 'dataSource.dataSourceArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.dataSourceArn', props);
    return resource.getResponseField('dataSource.dataSourceArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.name'),
        outputPath: 'dataSource.name',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.name', props);
    return resource.getResponseField('dataSource.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.description'),
        outputPath: 'dataSource.description',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.description', props);
    return resource.getResponseField('dataSource.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.type'),
        outputPath: 'dataSource.type',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.type', props);
    return resource.getResponseField('dataSource.type') as unknown as string;
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.serviceRoleArn'),
        outputPath: 'dataSource.serviceRoleArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.serviceRoleArn', props);
    return resource.getResponseField('dataSource.serviceRoleArn') as unknown as string;
  }

  public get dynamodbConfig(): AppSyncCreateDataSourceDataSourceDynamodbConfig {
    return new AppSyncCreateDataSourceDataSourceDynamodbConfig(this, 'DynamodbConfig', this.__resources, this.input);
  }

  public get lambdaConfig(): AppSyncCreateDataSourceDataSourceLambdaConfig {
    return new AppSyncCreateDataSourceDataSourceLambdaConfig(this, 'LambdaConfig', this.__resources, this.input);
  }

  public get elasticsearchConfig(): AppSyncCreateDataSourceDataSourceElasticsearchConfig {
    return new AppSyncCreateDataSourceDataSourceElasticsearchConfig(this, 'ElasticsearchConfig', this.__resources, this.input);
  }

  public get httpConfig(): AppSyncCreateDataSourceDataSourceHttpConfig {
    return new AppSyncCreateDataSourceDataSourceHttpConfig(this, 'HttpConfig', this.__resources, this.input);
  }

  public get relationalDatabaseConfig(): AppSyncCreateDataSourceDataSourceRelationalDatabaseConfig {
    return new AppSyncCreateDataSourceDataSourceRelationalDatabaseConfig(this, 'RelationalDatabaseConfig', this.__resources, this.input);
  }

}

export class AppSyncCreateDataSourceDataSourceDynamodbConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.dynamodbConfig.tableName'),
        outputPath: 'dataSource.dynamodbConfig.tableName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.dynamodbConfig.tableName', props);
    return resource.getResponseField('dataSource.dynamodbConfig.tableName') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.dynamodbConfig.awsRegion'),
        outputPath: 'dataSource.dynamodbConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.dynamodbConfig.awsRegion', props);
    return resource.getResponseField('dataSource.dynamodbConfig.awsRegion') as unknown as string;
  }

  public get useCallerCredentials(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.dynamodbConfig.useCallerCredentials'),
        outputPath: 'dataSource.dynamodbConfig.useCallerCredentials',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.dynamodbConfig.useCallerCredentials', props);
    return resource.getResponseField('dataSource.dynamodbConfig.useCallerCredentials') as unknown as boolean;
  }

  public get deltaSyncConfig(): AppSyncCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig {
    return new AppSyncCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig(this, 'DeltaSyncConfig', this.__resources, this.input);
  }

  public get versioned(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.dynamodbConfig.versioned'),
        outputPath: 'dataSource.dynamodbConfig.versioned',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.dynamodbConfig.versioned', props);
    return resource.getResponseField('dataSource.dynamodbConfig.versioned') as unknown as boolean;
  }

}

export class AppSyncCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get baseTableTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL'),
        outputPath: 'dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL') as unknown as number;
  }

  public get deltaSyncTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName'),
        outputPath: 'dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName') as unknown as string;
  }

  public get deltaSyncTableTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL'),
        outputPath: 'dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL') as unknown as number;
  }

}

export class AppSyncCreateDataSourceDataSourceLambdaConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get lambdaFunctionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.lambdaConfig.lambdaFunctionArn'),
        outputPath: 'dataSource.lambdaConfig.lambdaFunctionArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.lambdaConfig.lambdaFunctionArn', props);
    return resource.getResponseField('dataSource.lambdaConfig.lambdaFunctionArn') as unknown as string;
  }

}

export class AppSyncCreateDataSourceDataSourceElasticsearchConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.elasticsearchConfig.endpoint'),
        outputPath: 'dataSource.elasticsearchConfig.endpoint',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.elasticsearchConfig.endpoint', props);
    return resource.getResponseField('dataSource.elasticsearchConfig.endpoint') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.elasticsearchConfig.awsRegion'),
        outputPath: 'dataSource.elasticsearchConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.elasticsearchConfig.awsRegion', props);
    return resource.getResponseField('dataSource.elasticsearchConfig.awsRegion') as unknown as string;
  }

}

export class AppSyncCreateDataSourceDataSourceHttpConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.httpConfig.endpoint'),
        outputPath: 'dataSource.httpConfig.endpoint',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.httpConfig.endpoint', props);
    return resource.getResponseField('dataSource.httpConfig.endpoint') as unknown as string;
  }

  public get authorizationConfig(): AppSyncCreateDataSourceDataSourceHttpConfigAuthorizationConfig {
    return new AppSyncCreateDataSourceDataSourceHttpConfigAuthorizationConfig(this, 'AuthorizationConfig', this.__resources, this.input);
  }

}

export class AppSyncCreateDataSourceDataSourceHttpConfigAuthorizationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get authorizationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.httpConfig.authorizationConfig.authorizationType'),
        outputPath: 'dataSource.httpConfig.authorizationConfig.authorizationType',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.httpConfig.authorizationConfig.authorizationType', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.authorizationType') as unknown as string;
  }

  public get awsIamConfig(): AppSyncCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig {
    return new AppSyncCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig(this, 'AwsIamConfig', this.__resources, this.input);
  }

}

export class AppSyncCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get signingRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion'),
        outputPath: 'dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion') as unknown as string;
  }

  public get signingServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName'),
        outputPath: 'dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName') as unknown as string;
  }

}

export class AppSyncCreateDataSourceDataSourceRelationalDatabaseConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get relationalDatabaseSourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.relationalDatabaseConfig.relationalDatabaseSourceType'),
        outputPath: 'dataSource.relationalDatabaseConfig.relationalDatabaseSourceType',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.relationalDatabaseConfig.relationalDatabaseSourceType', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.relationalDatabaseSourceType') as unknown as string;
  }

  public get rdsHttpEndpointConfig(): AppSyncCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {
    return new AppSyncCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(this, 'RdsHttpEndpointConfig', this.__resources, this.input);
  }

}

export class AppSyncCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateDataSourceRequest) {
    super(scope, id);
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion') as unknown as string;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema') as unknown as string;
  }

  public get awsSecretStoreArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn') as unknown as string;
  }

}

export class AppSyncCreateFunction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateFunctionRequest) {
    super(scope, id);
  }

  public get functionConfiguration(): AppSyncCreateFunctionFunctionConfiguration {
    return new AppSyncCreateFunctionFunctionConfiguration(this, 'FunctionConfiguration', this.__resources, this.input);
  }

}

export class AppSyncCreateFunctionFunctionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateFunctionRequest) {
    super(scope, id);
  }

  public get functionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.functionId'),
        outputPath: 'functionConfiguration.functionId',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.functionConfiguration.functionId', props);
    return resource.getResponseField('functionConfiguration.functionId') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.functionArn'),
        outputPath: 'functionConfiguration.functionArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.functionConfiguration.functionArn', props);
    return resource.getResponseField('functionConfiguration.functionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.name'),
        outputPath: 'functionConfiguration.name',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.functionConfiguration.name', props);
    return resource.getResponseField('functionConfiguration.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.description'),
        outputPath: 'functionConfiguration.description',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.functionConfiguration.description', props);
    return resource.getResponseField('functionConfiguration.description') as unknown as string;
  }

  public get dataSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.dataSourceName'),
        outputPath: 'functionConfiguration.dataSourceName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.functionConfiguration.dataSourceName', props);
    return resource.getResponseField('functionConfiguration.dataSourceName') as unknown as string;
  }

  public get requestMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.requestMappingTemplate'),
        outputPath: 'functionConfiguration.requestMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.functionConfiguration.requestMappingTemplate', props);
    return resource.getResponseField('functionConfiguration.requestMappingTemplate') as unknown as string;
  }

  public get responseMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.responseMappingTemplate'),
        outputPath: 'functionConfiguration.responseMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.functionConfiguration.responseMappingTemplate', props);
    return resource.getResponseField('functionConfiguration.responseMappingTemplate') as unknown as string;
  }

  public get functionVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.functionVersion'),
        outputPath: 'functionConfiguration.functionVersion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFunction.functionConfiguration.functionVersion', props);
    return resource.getResponseField('functionConfiguration.functionVersion') as unknown as string;
  }

}

export class AppSyncCreateGraphqlApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateGraphqlApiRequest) {
    super(scope, id);
  }

  public get graphqlApi(): AppSyncCreateGraphqlApiGraphqlApi {
    return new AppSyncCreateGraphqlApiGraphqlApi(this, 'GraphqlApi', this.__resources, this.input);
  }

}

export class AppSyncCreateGraphqlApiGraphqlApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateGraphqlApiRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.name'),
        outputPath: 'graphqlApi.name',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.name', props);
    return resource.getResponseField('graphqlApi.name') as unknown as string;
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.apiId'),
        outputPath: 'graphqlApi.apiId',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.apiId', props);
    return resource.getResponseField('graphqlApi.apiId') as unknown as string;
  }

  public get authenticationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.authenticationType'),
        outputPath: 'graphqlApi.authenticationType',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.authenticationType', props);
    return resource.getResponseField('graphqlApi.authenticationType') as unknown as string;
  }

  public get logConfig(): AppSyncCreateGraphqlApiGraphqlApiLogConfig {
    return new AppSyncCreateGraphqlApiGraphqlApiLogConfig(this, 'LogConfig', this.__resources, this.input);
  }

  public get userPoolConfig(): AppSyncCreateGraphqlApiGraphqlApiUserPoolConfig {
    return new AppSyncCreateGraphqlApiGraphqlApiUserPoolConfig(this, 'UserPoolConfig', this.__resources, this.input);
  }

  public get openIdConnectConfig(): AppSyncCreateGraphqlApiGraphqlApiOpenIdConnectConfig {
    return new AppSyncCreateGraphqlApiGraphqlApiOpenIdConnectConfig(this, 'OpenIdConnectConfig', this.__resources, this.input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.arn'),
        outputPath: 'graphqlApi.arn',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.arn', props);
    return resource.getResponseField('graphqlApi.arn') as unknown as string;
  }

  public get uris(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.uris'),
        outputPath: 'graphqlApi.uris',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.uris', props);
    return resource.getResponseField('graphqlApi.uris') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.tags'),
        outputPath: 'graphqlApi.tags',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.tags', props);
    return resource.getResponseField('graphqlApi.tags') as unknown as Record<string, string>;
  }

  public get additionalAuthenticationProviders(): shapes.AppSyncAdditionalAuthenticationProvider[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.additionalAuthenticationProviders'),
        outputPath: 'graphqlApi.additionalAuthenticationProviders',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.additionalAuthenticationProviders', props);
    return resource.getResponseField('graphqlApi.additionalAuthenticationProviders') as unknown as shapes.AppSyncAdditionalAuthenticationProvider[];
  }

  public get xrayEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.xrayEnabled'),
        outputPath: 'graphqlApi.xrayEnabled',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.xrayEnabled', props);
    return resource.getResponseField('graphqlApi.xrayEnabled') as unknown as boolean;
  }

  public get wafWebAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.wafWebAclArn'),
        outputPath: 'graphqlApi.wafWebAclArn',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.wafWebAclArn', props);
    return resource.getResponseField('graphqlApi.wafWebAclArn') as unknown as string;
  }

}

export class AppSyncCreateGraphqlApiGraphqlApiLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateGraphqlApiRequest) {
    super(scope, id);
  }

  public get fieldLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.logConfig.fieldLogLevel'),
        outputPath: 'graphqlApi.logConfig.fieldLogLevel',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.logConfig.fieldLogLevel', props);
    return resource.getResponseField('graphqlApi.logConfig.fieldLogLevel') as unknown as string;
  }

  public get cloudWatchLogsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.logConfig.cloudWatchLogsRoleArn'),
        outputPath: 'graphqlApi.logConfig.cloudWatchLogsRoleArn',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.logConfig.cloudWatchLogsRoleArn', props);
    return resource.getResponseField('graphqlApi.logConfig.cloudWatchLogsRoleArn') as unknown as string;
  }

  public get excludeVerboseContent(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.logConfig.excludeVerboseContent'),
        outputPath: 'graphqlApi.logConfig.excludeVerboseContent',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.logConfig.excludeVerboseContent', props);
    return resource.getResponseField('graphqlApi.logConfig.excludeVerboseContent') as unknown as boolean;
  }

}

export class AppSyncCreateGraphqlApiGraphqlApiUserPoolConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateGraphqlApiRequest) {
    super(scope, id);
  }

  public get userPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.userPoolConfig.userPoolId'),
        outputPath: 'graphqlApi.userPoolConfig.userPoolId',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.userPoolConfig.userPoolId', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.userPoolId') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.userPoolConfig.awsRegion'),
        outputPath: 'graphqlApi.userPoolConfig.awsRegion',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.userPoolConfig.awsRegion', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.awsRegion') as unknown as string;
  }

  public get defaultAction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.userPoolConfig.defaultAction'),
        outputPath: 'graphqlApi.userPoolConfig.defaultAction',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.userPoolConfig.defaultAction', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.defaultAction') as unknown as string;
  }

  public get appIdClientRegex(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.userPoolConfig.appIdClientRegex'),
        outputPath: 'graphqlApi.userPoolConfig.appIdClientRegex',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.userPoolConfig.appIdClientRegex', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.appIdClientRegex') as unknown as string;
  }

}

export class AppSyncCreateGraphqlApiGraphqlApiOpenIdConnectConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateGraphqlApiRequest) {
    super(scope, id);
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.openIDConnectConfig.issuer'),
        outputPath: 'graphqlApi.openIDConnectConfig.issuer',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.openIDConnectConfig.issuer', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.issuer') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.openIDConnectConfig.clientId'),
        outputPath: 'graphqlApi.openIDConnectConfig.clientId',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.openIDConnectConfig.clientId', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.clientId') as unknown as string;
  }

  public get iatTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.openIDConnectConfig.iatTTL'),
        outputPath: 'graphqlApi.openIDConnectConfig.iatTTL',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.openIDConnectConfig.iatTTL', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.iatTTL') as unknown as number;
  }

  public get authTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.openIDConnectConfig.authTTL'),
        outputPath: 'graphqlApi.openIDConnectConfig.authTTL',
        parameters: {
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          tags: this.input.tags,
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGraphqlApi.graphqlApi.openIDConnectConfig.authTTL', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.authTTL') as unknown as number;
  }

}

export class AppSyncCreateResolver extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateResolverRequest) {
    super(scope, id);
  }

  public get resolver(): AppSyncCreateResolverResolver {
    return new AppSyncCreateResolverResolver(this, 'Resolver', this.__resources, this.input);
  }

}

export class AppSyncCreateResolverResolver extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateResolverRequest) {
    super(scope, id);
  }

  public get typeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.typeName'),
        outputPath: 'resolver.typeName',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.typeName', props);
    return resource.getResponseField('resolver.typeName') as unknown as string;
  }

  public get fieldName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.fieldName'),
        outputPath: 'resolver.fieldName',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.fieldName', props);
    return resource.getResponseField('resolver.fieldName') as unknown as string;
  }

  public get dataSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.dataSourceName'),
        outputPath: 'resolver.dataSourceName',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.dataSourceName', props);
    return resource.getResponseField('resolver.dataSourceName') as unknown as string;
  }

  public get resolverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.resolverArn'),
        outputPath: 'resolver.resolverArn',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.resolverArn', props);
    return resource.getResponseField('resolver.resolverArn') as unknown as string;
  }

  public get requestMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.requestMappingTemplate'),
        outputPath: 'resolver.requestMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.requestMappingTemplate', props);
    return resource.getResponseField('resolver.requestMappingTemplate') as unknown as string;
  }

  public get responseMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.responseMappingTemplate'),
        outputPath: 'resolver.responseMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.responseMappingTemplate', props);
    return resource.getResponseField('resolver.responseMappingTemplate') as unknown as string;
  }

  public get kind(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.kind'),
        outputPath: 'resolver.kind',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.kind', props);
    return resource.getResponseField('resolver.kind') as unknown as string;
  }

  public get pipelineConfig(): AppSyncCreateResolverResolverPipelineConfig {
    return new AppSyncCreateResolverResolverPipelineConfig(this, 'PipelineConfig', this.__resources, this.input);
  }

  public get syncConfig(): AppSyncCreateResolverResolverSyncConfig {
    return new AppSyncCreateResolverResolverSyncConfig(this, 'SyncConfig', this.__resources, this.input);
  }

  public get cachingConfig(): AppSyncCreateResolverResolverCachingConfig {
    return new AppSyncCreateResolverResolverCachingConfig(this, 'CachingConfig', this.__resources, this.input);
  }

}

export class AppSyncCreateResolverResolverPipelineConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateResolverRequest) {
    super(scope, id);
  }

  public get functions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.pipelineConfig.functions'),
        outputPath: 'resolver.pipelineConfig.functions',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.pipelineConfig.functions', props);
    return resource.getResponseField('resolver.pipelineConfig.functions') as unknown as string[];
  }

}

export class AppSyncCreateResolverResolverSyncConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateResolverRequest) {
    super(scope, id);
  }

  public get conflictHandler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.syncConfig.conflictHandler'),
        outputPath: 'resolver.syncConfig.conflictHandler',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.syncConfig.conflictHandler', props);
    return resource.getResponseField('resolver.syncConfig.conflictHandler') as unknown as string;
  }

  public get conflictDetection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.syncConfig.conflictDetection'),
        outputPath: 'resolver.syncConfig.conflictDetection',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.syncConfig.conflictDetection', props);
    return resource.getResponseField('resolver.syncConfig.conflictDetection') as unknown as string;
  }

  public get lambdaConflictHandlerConfig(): AppSyncCreateResolverResolverSyncConfigLambdaConflictHandlerConfig {
    return new AppSyncCreateResolverResolverSyncConfigLambdaConflictHandlerConfig(this, 'LambdaConflictHandlerConfig', this.__resources, this.input);
  }

}

export class AppSyncCreateResolverResolverSyncConfigLambdaConflictHandlerConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateResolverRequest) {
    super(scope, id);
  }

  public get lambdaConflictHandlerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn'),
        outputPath: 'resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn', props);
    return resource.getResponseField('resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn') as unknown as string;
  }

}

export class AppSyncCreateResolverResolverCachingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateResolverRequest) {
    super(scope, id);
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.cachingConfig.ttl'),
        outputPath: 'resolver.cachingConfig.ttl',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.cachingConfig.ttl', props);
    return resource.getResponseField('resolver.cachingConfig.ttl') as unknown as number;
  }

  public get cachingKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateResolver.resolver.cachingConfig.cachingKeys'),
        outputPath: 'resolver.cachingConfig.cachingKeys',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolver.resolver.cachingConfig.cachingKeys', props);
    return resource.getResponseField('resolver.cachingConfig.cachingKeys') as unknown as string[];
  }

}

export class AppSyncCreateType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateTypeRequest) {
    super(scope, id);
  }

  public get type(): AppSyncCreateTypeType {
    return new AppSyncCreateTypeType(this, 'Type', this.__resources, this.input);
  }

}

export class AppSyncCreateTypeType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncCreateTypeRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateType.type.name'),
        outputPath: 'type.name',
        parameters: {
          apiId: this.input.apiId,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateType.type.name', props);
    return resource.getResponseField('type.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateType.type.description'),
        outputPath: 'type.description',
        parameters: {
          apiId: this.input.apiId,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateType.type.description', props);
    return resource.getResponseField('type.description') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateType.type.arn'),
        outputPath: 'type.arn',
        parameters: {
          apiId: this.input.apiId,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateType.type.arn', props);
    return resource.getResponseField('type.arn') as unknown as string;
  }

  public get definition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateType.type.definition'),
        outputPath: 'type.definition',
        parameters: {
          apiId: this.input.apiId,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateType.type.definition', props);
    return resource.getResponseField('type.definition') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateType.type.format'),
        outputPath: 'type.format',
        parameters: {
          apiId: this.input.apiId,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateType.type.format', props);
    return resource.getResponseField('type.format') as unknown as string;
  }

}

export class AppSyncFetchApiCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetApiCacheRequest) {
    super(scope, id);
  }

  public get apiCache(): AppSyncFetchApiCacheApiCache {
    return new AppSyncFetchApiCacheApiCache(this, 'ApiCache', this.__resources, this.input);
  }

}

export class AppSyncFetchApiCacheApiCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetApiCacheRequest) {
    super(scope, id);
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetApiCache.apiCache.ttl'),
        outputPath: 'apiCache.ttl',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiCache.apiCache.ttl', props);
    return resource.getResponseField('apiCache.ttl') as unknown as number;
  }

  public get apiCachingBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetApiCache.apiCache.apiCachingBehavior'),
        outputPath: 'apiCache.apiCachingBehavior',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiCache.apiCache.apiCachingBehavior', props);
    return resource.getResponseField('apiCache.apiCachingBehavior') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetApiCache.apiCache.transitEncryptionEnabled'),
        outputPath: 'apiCache.transitEncryptionEnabled',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiCache.apiCache.transitEncryptionEnabled', props);
    return resource.getResponseField('apiCache.transitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetApiCache.apiCache.atRestEncryptionEnabled'),
        outputPath: 'apiCache.atRestEncryptionEnabled',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiCache.apiCache.atRestEncryptionEnabled', props);
    return resource.getResponseField('apiCache.atRestEncryptionEnabled') as unknown as boolean;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetApiCache.apiCache.type'),
        outputPath: 'apiCache.type',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiCache.apiCache.type', props);
    return resource.getResponseField('apiCache.type') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetApiCache.apiCache.status'),
        outputPath: 'apiCache.status',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiCache.apiCache.status', props);
    return resource.getResponseField('apiCache.status') as unknown as string;
  }

}

export class AppSyncFetchDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get dataSource(): AppSyncFetchDataSourceDataSource {
    return new AppSyncFetchDataSourceDataSource(this, 'DataSource', this.__resources, this.input);
  }

}

export class AppSyncFetchDataSourceDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get dataSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.dataSourceArn'),
        outputPath: 'dataSource.dataSourceArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.dataSourceArn', props);
    return resource.getResponseField('dataSource.dataSourceArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.name'),
        outputPath: 'dataSource.name',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.name', props);
    return resource.getResponseField('dataSource.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.description'),
        outputPath: 'dataSource.description',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.description', props);
    return resource.getResponseField('dataSource.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.type'),
        outputPath: 'dataSource.type',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.type', props);
    return resource.getResponseField('dataSource.type') as unknown as string;
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.serviceRoleArn'),
        outputPath: 'dataSource.serviceRoleArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.serviceRoleArn', props);
    return resource.getResponseField('dataSource.serviceRoleArn') as unknown as string;
  }

  public get dynamodbConfig(): AppSyncFetchDataSourceDataSourceDynamodbConfig {
    return new AppSyncFetchDataSourceDataSourceDynamodbConfig(this, 'DynamodbConfig', this.__resources, this.input);
  }

  public get lambdaConfig(): AppSyncFetchDataSourceDataSourceLambdaConfig {
    return new AppSyncFetchDataSourceDataSourceLambdaConfig(this, 'LambdaConfig', this.__resources, this.input);
  }

  public get elasticsearchConfig(): AppSyncFetchDataSourceDataSourceElasticsearchConfig {
    return new AppSyncFetchDataSourceDataSourceElasticsearchConfig(this, 'ElasticsearchConfig', this.__resources, this.input);
  }

  public get httpConfig(): AppSyncFetchDataSourceDataSourceHttpConfig {
    return new AppSyncFetchDataSourceDataSourceHttpConfig(this, 'HttpConfig', this.__resources, this.input);
  }

  public get relationalDatabaseConfig(): AppSyncFetchDataSourceDataSourceRelationalDatabaseConfig {
    return new AppSyncFetchDataSourceDataSourceRelationalDatabaseConfig(this, 'RelationalDatabaseConfig', this.__resources, this.input);
  }

}

export class AppSyncFetchDataSourceDataSourceDynamodbConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.dynamodbConfig.tableName'),
        outputPath: 'dataSource.dynamodbConfig.tableName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.dynamodbConfig.tableName', props);
    return resource.getResponseField('dataSource.dynamodbConfig.tableName') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.dynamodbConfig.awsRegion'),
        outputPath: 'dataSource.dynamodbConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.dynamodbConfig.awsRegion', props);
    return resource.getResponseField('dataSource.dynamodbConfig.awsRegion') as unknown as string;
  }

  public get useCallerCredentials(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.dynamodbConfig.useCallerCredentials'),
        outputPath: 'dataSource.dynamodbConfig.useCallerCredentials',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.dynamodbConfig.useCallerCredentials', props);
    return resource.getResponseField('dataSource.dynamodbConfig.useCallerCredentials') as unknown as boolean;
  }

  public get deltaSyncConfig(): AppSyncFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig {
    return new AppSyncFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig(this, 'DeltaSyncConfig', this.__resources, this.input);
  }

  public get versioned(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.dynamodbConfig.versioned'),
        outputPath: 'dataSource.dynamodbConfig.versioned',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.dynamodbConfig.versioned', props);
    return resource.getResponseField('dataSource.dynamodbConfig.versioned') as unknown as boolean;
  }

}

export class AppSyncFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get baseTableTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL'),
        outputPath: 'dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL') as unknown as number;
  }

  public get deltaSyncTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName'),
        outputPath: 'dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName') as unknown as string;
  }

  public get deltaSyncTableTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL'),
        outputPath: 'dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL') as unknown as number;
  }

}

export class AppSyncFetchDataSourceDataSourceLambdaConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get lambdaFunctionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.lambdaConfig.lambdaFunctionArn'),
        outputPath: 'dataSource.lambdaConfig.lambdaFunctionArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.lambdaConfig.lambdaFunctionArn', props);
    return resource.getResponseField('dataSource.lambdaConfig.lambdaFunctionArn') as unknown as string;
  }

}

export class AppSyncFetchDataSourceDataSourceElasticsearchConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.elasticsearchConfig.endpoint'),
        outputPath: 'dataSource.elasticsearchConfig.endpoint',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.elasticsearchConfig.endpoint', props);
    return resource.getResponseField('dataSource.elasticsearchConfig.endpoint') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.elasticsearchConfig.awsRegion'),
        outputPath: 'dataSource.elasticsearchConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.elasticsearchConfig.awsRegion', props);
    return resource.getResponseField('dataSource.elasticsearchConfig.awsRegion') as unknown as string;
  }

}

export class AppSyncFetchDataSourceDataSourceHttpConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.httpConfig.endpoint'),
        outputPath: 'dataSource.httpConfig.endpoint',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.httpConfig.endpoint', props);
    return resource.getResponseField('dataSource.httpConfig.endpoint') as unknown as string;
  }

  public get authorizationConfig(): AppSyncFetchDataSourceDataSourceHttpConfigAuthorizationConfig {
    return new AppSyncFetchDataSourceDataSourceHttpConfigAuthorizationConfig(this, 'AuthorizationConfig', this.__resources, this.input);
  }

}

export class AppSyncFetchDataSourceDataSourceHttpConfigAuthorizationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get authorizationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.httpConfig.authorizationConfig.authorizationType'),
        outputPath: 'dataSource.httpConfig.authorizationConfig.authorizationType',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.httpConfig.authorizationConfig.authorizationType', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.authorizationType') as unknown as string;
  }

  public get awsIamConfig(): AppSyncFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig {
    return new AppSyncFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig(this, 'AwsIamConfig', this.__resources, this.input);
  }

}

export class AppSyncFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get signingRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion'),
        outputPath: 'dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion') as unknown as string;
  }

  public get signingServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName'),
        outputPath: 'dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName') as unknown as string;
  }

}

export class AppSyncFetchDataSourceDataSourceRelationalDatabaseConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get relationalDatabaseSourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.relationalDatabaseConfig.relationalDatabaseSourceType'),
        outputPath: 'dataSource.relationalDatabaseConfig.relationalDatabaseSourceType',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.relationalDatabaseConfig.relationalDatabaseSourceType', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.relationalDatabaseSourceType') as unknown as string;
  }

  public get rdsHttpEndpointConfig(): AppSyncFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {
    return new AppSyncFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(this, 'RdsHttpEndpointConfig', this.__resources, this.input);
  }

}

export class AppSyncFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetDataSourceRequest) {
    super(scope, id);
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion') as unknown as string;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema') as unknown as string;
  }

  public get awsSecretStoreArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn') as unknown as string;
  }

}

export class AppSyncFetchFunction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetFunctionRequest) {
    super(scope, id);
  }

  public get functionConfiguration(): AppSyncFetchFunctionFunctionConfiguration {
    return new AppSyncFetchFunctionFunctionConfiguration(this, 'FunctionConfiguration', this.__resources, this.input);
  }

}

export class AppSyncFetchFunctionFunctionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetFunctionRequest) {
    super(scope, id);
  }

  public get functionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.functionId'),
        outputPath: 'functionConfiguration.functionId',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.functionConfiguration.functionId', props);
    return resource.getResponseField('functionConfiguration.functionId') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.functionArn'),
        outputPath: 'functionConfiguration.functionArn',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.functionConfiguration.functionArn', props);
    return resource.getResponseField('functionConfiguration.functionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.name'),
        outputPath: 'functionConfiguration.name',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.functionConfiguration.name', props);
    return resource.getResponseField('functionConfiguration.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.description'),
        outputPath: 'functionConfiguration.description',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.functionConfiguration.description', props);
    return resource.getResponseField('functionConfiguration.description') as unknown as string;
  }

  public get dataSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.dataSourceName'),
        outputPath: 'functionConfiguration.dataSourceName',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.functionConfiguration.dataSourceName', props);
    return resource.getResponseField('functionConfiguration.dataSourceName') as unknown as string;
  }

  public get requestMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.requestMappingTemplate'),
        outputPath: 'functionConfiguration.requestMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.functionConfiguration.requestMappingTemplate', props);
    return resource.getResponseField('functionConfiguration.requestMappingTemplate') as unknown as string;
  }

  public get responseMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.responseMappingTemplate'),
        outputPath: 'functionConfiguration.responseMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.functionConfiguration.responseMappingTemplate', props);
    return resource.getResponseField('functionConfiguration.responseMappingTemplate') as unknown as string;
  }

  public get functionVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.functionVersion'),
        outputPath: 'functionConfiguration.functionVersion',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFunction.functionConfiguration.functionVersion', props);
    return resource.getResponseField('functionConfiguration.functionVersion') as unknown as string;
  }

}

export class AppSyncFetchGraphqlApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetGraphqlApiRequest) {
    super(scope, id);
  }

  public get graphqlApi(): AppSyncFetchGraphqlApiGraphqlApi {
    return new AppSyncFetchGraphqlApiGraphqlApi(this, 'GraphqlApi', this.__resources, this.input);
  }

}

export class AppSyncFetchGraphqlApiGraphqlApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetGraphqlApiRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.name'),
        outputPath: 'graphqlApi.name',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.name', props);
    return resource.getResponseField('graphqlApi.name') as unknown as string;
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.apiId'),
        outputPath: 'graphqlApi.apiId',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.apiId', props);
    return resource.getResponseField('graphqlApi.apiId') as unknown as string;
  }

  public get authenticationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.authenticationType'),
        outputPath: 'graphqlApi.authenticationType',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.authenticationType', props);
    return resource.getResponseField('graphqlApi.authenticationType') as unknown as string;
  }

  public get logConfig(): AppSyncFetchGraphqlApiGraphqlApiLogConfig {
    return new AppSyncFetchGraphqlApiGraphqlApiLogConfig(this, 'LogConfig', this.__resources, this.input);
  }

  public get userPoolConfig(): AppSyncFetchGraphqlApiGraphqlApiUserPoolConfig {
    return new AppSyncFetchGraphqlApiGraphqlApiUserPoolConfig(this, 'UserPoolConfig', this.__resources, this.input);
  }

  public get openIdConnectConfig(): AppSyncFetchGraphqlApiGraphqlApiOpenIdConnectConfig {
    return new AppSyncFetchGraphqlApiGraphqlApiOpenIdConnectConfig(this, 'OpenIdConnectConfig', this.__resources, this.input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.arn'),
        outputPath: 'graphqlApi.arn',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.arn', props);
    return resource.getResponseField('graphqlApi.arn') as unknown as string;
  }

  public get uris(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.uris'),
        outputPath: 'graphqlApi.uris',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.uris', props);
    return resource.getResponseField('graphqlApi.uris') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.tags'),
        outputPath: 'graphqlApi.tags',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.tags', props);
    return resource.getResponseField('graphqlApi.tags') as unknown as Record<string, string>;
  }

  public get additionalAuthenticationProviders(): shapes.AppSyncAdditionalAuthenticationProvider[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.additionalAuthenticationProviders'),
        outputPath: 'graphqlApi.additionalAuthenticationProviders',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.additionalAuthenticationProviders', props);
    return resource.getResponseField('graphqlApi.additionalAuthenticationProviders') as unknown as shapes.AppSyncAdditionalAuthenticationProvider[];
  }

  public get xrayEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.xrayEnabled'),
        outputPath: 'graphqlApi.xrayEnabled',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.xrayEnabled', props);
    return resource.getResponseField('graphqlApi.xrayEnabled') as unknown as boolean;
  }

  public get wafWebAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.wafWebAclArn'),
        outputPath: 'graphqlApi.wafWebAclArn',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.wafWebAclArn', props);
    return resource.getResponseField('graphqlApi.wafWebAclArn') as unknown as string;
  }

}

export class AppSyncFetchGraphqlApiGraphqlApiLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetGraphqlApiRequest) {
    super(scope, id);
  }

  public get fieldLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.logConfig.fieldLogLevel'),
        outputPath: 'graphqlApi.logConfig.fieldLogLevel',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.logConfig.fieldLogLevel', props);
    return resource.getResponseField('graphqlApi.logConfig.fieldLogLevel') as unknown as string;
  }

  public get cloudWatchLogsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.logConfig.cloudWatchLogsRoleArn'),
        outputPath: 'graphqlApi.logConfig.cloudWatchLogsRoleArn',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.logConfig.cloudWatchLogsRoleArn', props);
    return resource.getResponseField('graphqlApi.logConfig.cloudWatchLogsRoleArn') as unknown as string;
  }

  public get excludeVerboseContent(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.logConfig.excludeVerboseContent'),
        outputPath: 'graphqlApi.logConfig.excludeVerboseContent',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.logConfig.excludeVerboseContent', props);
    return resource.getResponseField('graphqlApi.logConfig.excludeVerboseContent') as unknown as boolean;
  }

}

export class AppSyncFetchGraphqlApiGraphqlApiUserPoolConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetGraphqlApiRequest) {
    super(scope, id);
  }

  public get userPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.userPoolConfig.userPoolId'),
        outputPath: 'graphqlApi.userPoolConfig.userPoolId',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.userPoolConfig.userPoolId', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.userPoolId') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.userPoolConfig.awsRegion'),
        outputPath: 'graphqlApi.userPoolConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.userPoolConfig.awsRegion', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.awsRegion') as unknown as string;
  }

  public get defaultAction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.userPoolConfig.defaultAction'),
        outputPath: 'graphqlApi.userPoolConfig.defaultAction',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.userPoolConfig.defaultAction', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.defaultAction') as unknown as string;
  }

  public get appIdClientRegex(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.userPoolConfig.appIdClientRegex'),
        outputPath: 'graphqlApi.userPoolConfig.appIdClientRegex',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.userPoolConfig.appIdClientRegex', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.appIdClientRegex') as unknown as string;
  }

}

export class AppSyncFetchGraphqlApiGraphqlApiOpenIdConnectConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetGraphqlApiRequest) {
    super(scope, id);
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.openIDConnectConfig.issuer'),
        outputPath: 'graphqlApi.openIDConnectConfig.issuer',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.openIDConnectConfig.issuer', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.issuer') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.openIDConnectConfig.clientId'),
        outputPath: 'graphqlApi.openIDConnectConfig.clientId',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.openIDConnectConfig.clientId', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.clientId') as unknown as string;
  }

  public get iatTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.openIDConnectConfig.iatTTL'),
        outputPath: 'graphqlApi.openIDConnectConfig.iatTTL',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.openIDConnectConfig.iatTTL', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.iatTTL') as unknown as number;
  }

  public get authTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.openIDConnectConfig.authTTL'),
        outputPath: 'graphqlApi.openIDConnectConfig.authTTL',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGraphqlApi.graphqlApi.openIDConnectConfig.authTTL', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.authTTL') as unknown as number;
  }

}

export class AppSyncFetchIntrospectionSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetIntrospectionSchemaRequest) {
    super(scope, id);
  }

  public get schema(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntrospectionSchema',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetIntrospectionSchema.schema'),
        outputPath: 'schema',
        parameters: {
          apiId: this.input.apiId,
          format: this.input.format,
          includeDirectives: this.input.includeDirectives,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntrospectionSchema.schema', props);
    return resource.getResponseField('schema') as unknown as any;
  }

}

export class AppSyncFetchResolver extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetResolverRequest) {
    super(scope, id);
  }

  public get resolver(): AppSyncFetchResolverResolver {
    return new AppSyncFetchResolverResolver(this, 'Resolver', this.__resources, this.input);
  }

}

export class AppSyncFetchResolverResolver extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetResolverRequest) {
    super(scope, id);
  }

  public get typeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.typeName'),
        outputPath: 'resolver.typeName',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.typeName', props);
    return resource.getResponseField('resolver.typeName') as unknown as string;
  }

  public get fieldName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.fieldName'),
        outputPath: 'resolver.fieldName',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.fieldName', props);
    return resource.getResponseField('resolver.fieldName') as unknown as string;
  }

  public get dataSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.dataSourceName'),
        outputPath: 'resolver.dataSourceName',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.dataSourceName', props);
    return resource.getResponseField('resolver.dataSourceName') as unknown as string;
  }

  public get resolverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.resolverArn'),
        outputPath: 'resolver.resolverArn',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.resolverArn', props);
    return resource.getResponseField('resolver.resolverArn') as unknown as string;
  }

  public get requestMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.requestMappingTemplate'),
        outputPath: 'resolver.requestMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.requestMappingTemplate', props);
    return resource.getResponseField('resolver.requestMappingTemplate') as unknown as string;
  }

  public get responseMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.responseMappingTemplate'),
        outputPath: 'resolver.responseMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.responseMappingTemplate', props);
    return resource.getResponseField('resolver.responseMappingTemplate') as unknown as string;
  }

  public get kind(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.kind'),
        outputPath: 'resolver.kind',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.kind', props);
    return resource.getResponseField('resolver.kind') as unknown as string;
  }

  public get pipelineConfig(): AppSyncFetchResolverResolverPipelineConfig {
    return new AppSyncFetchResolverResolverPipelineConfig(this, 'PipelineConfig', this.__resources, this.input);
  }

  public get syncConfig(): AppSyncFetchResolverResolverSyncConfig {
    return new AppSyncFetchResolverResolverSyncConfig(this, 'SyncConfig', this.__resources, this.input);
  }

  public get cachingConfig(): AppSyncFetchResolverResolverCachingConfig {
    return new AppSyncFetchResolverResolverCachingConfig(this, 'CachingConfig', this.__resources, this.input);
  }

}

export class AppSyncFetchResolverResolverPipelineConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetResolverRequest) {
    super(scope, id);
  }

  public get functions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.pipelineConfig.functions'),
        outputPath: 'resolver.pipelineConfig.functions',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.pipelineConfig.functions', props);
    return resource.getResponseField('resolver.pipelineConfig.functions') as unknown as string[];
  }

}

export class AppSyncFetchResolverResolverSyncConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetResolverRequest) {
    super(scope, id);
  }

  public get conflictHandler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.syncConfig.conflictHandler'),
        outputPath: 'resolver.syncConfig.conflictHandler',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.syncConfig.conflictHandler', props);
    return resource.getResponseField('resolver.syncConfig.conflictHandler') as unknown as string;
  }

  public get conflictDetection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.syncConfig.conflictDetection'),
        outputPath: 'resolver.syncConfig.conflictDetection',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.syncConfig.conflictDetection', props);
    return resource.getResponseField('resolver.syncConfig.conflictDetection') as unknown as string;
  }

  public get lambdaConflictHandlerConfig(): AppSyncFetchResolverResolverSyncConfigLambdaConflictHandlerConfig {
    return new AppSyncFetchResolverResolverSyncConfigLambdaConflictHandlerConfig(this, 'LambdaConflictHandlerConfig', this.__resources, this.input);
  }

}

export class AppSyncFetchResolverResolverSyncConfigLambdaConflictHandlerConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetResolverRequest) {
    super(scope, id);
  }

  public get lambdaConflictHandlerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn'),
        outputPath: 'resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn', props);
    return resource.getResponseField('resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn') as unknown as string;
  }

}

export class AppSyncFetchResolverResolverCachingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetResolverRequest) {
    super(scope, id);
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.cachingConfig.ttl'),
        outputPath: 'resolver.cachingConfig.ttl',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.cachingConfig.ttl', props);
    return resource.getResponseField('resolver.cachingConfig.ttl') as unknown as number;
  }

  public get cachingKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetResolver.resolver.cachingConfig.cachingKeys'),
        outputPath: 'resolver.cachingConfig.cachingKeys',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolver.resolver.cachingConfig.cachingKeys', props);
    return resource.getResponseField('resolver.cachingConfig.cachingKeys') as unknown as string[];
  }

}

export class AppSyncFetchSchemaCreationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetSchemaCreationStatusRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaCreationStatus',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetSchemaCreationStatus.status'),
        outputPath: 'status',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaCreationStatus.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get details(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaCreationStatus',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetSchemaCreationStatus.details'),
        outputPath: 'details',
        parameters: {
          apiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaCreationStatus.details', props);
    return resource.getResponseField('details') as unknown as string;
  }

}

export class AppSyncFetchType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetTypeRequest) {
    super(scope, id);
  }

  public get type(): AppSyncFetchTypeType {
    return new AppSyncFetchTypeType(this, 'Type', this.__resources, this.input);
  }

}

export class AppSyncFetchTypeType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncGetTypeRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetType.type.name'),
        outputPath: 'type.name',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetType.type.name', props);
    return resource.getResponseField('type.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetType.type.description'),
        outputPath: 'type.description',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetType.type.description', props);
    return resource.getResponseField('type.description') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetType.type.arn'),
        outputPath: 'type.arn',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetType.type.arn', props);
    return resource.getResponseField('type.arn') as unknown as string;
  }

  public get definition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetType.type.definition'),
        outputPath: 'type.definition',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetType.type.definition', props);
    return resource.getResponseField('type.definition') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetType.type.format'),
        outputPath: 'type.format',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetType.type.format', props);
    return resource.getResponseField('type.format') as unknown as string;
  }

}

export class AppSyncListApiKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncListApiKeysRequest) {
    super(scope, id);
  }

  public get apiKeys(): shapes.AppSyncApiKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApiKeys',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListApiKeys.apiKeys'),
        outputPath: 'apiKeys',
        parameters: {
          apiId: this.input.apiId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApiKeys.apiKeys', props);
    return resource.getResponseField('apiKeys') as unknown as shapes.AppSyncApiKey[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApiKeys',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListApiKeys.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          apiId: this.input.apiId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApiKeys.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncListDataSources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncListDataSourcesRequest) {
    super(scope, id);
  }

  public get dataSources(): shapes.AppSyncDataSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSources',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListDataSources.dataSources'),
        outputPath: 'dataSources',
        parameters: {
          apiId: this.input.apiId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSources.dataSources', props);
    return resource.getResponseField('dataSources') as unknown as shapes.AppSyncDataSource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSources',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListDataSources.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          apiId: this.input.apiId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncListFunctions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncListFunctionsRequest) {
    super(scope, id);
  }

  public get functions(): shapes.AppSyncFunctionConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctions',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListFunctions.functions'),
        outputPath: 'functions',
        parameters: {
          apiId: this.input.apiId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctions.functions', props);
    return resource.getResponseField('functions') as unknown as shapes.AppSyncFunctionConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFunctions',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListFunctions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          apiId: this.input.apiId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFunctions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncListGraphqlApis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncListGraphqlApisRequest) {
    super(scope, id);
  }

  public get graphqlApis(): shapes.AppSyncGraphqlApi[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGraphqlApis',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListGraphqlApis.graphqlApis'),
        outputPath: 'graphqlApis',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGraphqlApis.graphqlApis', props);
    return resource.getResponseField('graphqlApis') as unknown as shapes.AppSyncGraphqlApi[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGraphqlApis',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListGraphqlApis.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGraphqlApis.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncListResolvers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncListResolversRequest) {
    super(scope, id);
  }

  public get resolvers(): shapes.AppSyncResolver[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolvers',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListResolvers.resolvers'),
        outputPath: 'resolvers',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolvers.resolvers', props);
    return resource.getResponseField('resolvers') as unknown as shapes.AppSyncResolver[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolvers',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListResolvers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolvers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncListResolversByFunction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncListResolversByFunctionRequest) {
    super(scope, id);
  }

  public get resolvers(): shapes.AppSyncResolver[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolversByFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListResolversByFunction.resolvers'),
        outputPath: 'resolvers',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolversByFunction.resolvers', props);
    return resource.getResponseField('resolvers') as unknown as shapes.AppSyncResolver[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolversByFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListResolversByFunction.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          apiId: this.input.apiId,
          functionId: this.input.functionId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolversByFunction.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class AppSyncListTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncListTypesRequest) {
    super(scope, id);
  }

  public get types(): shapes.AppSyncType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypes',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListTypes.types'),
        outputPath: 'types',
        parameters: {
          apiId: this.input.apiId,
          format: this.input.format,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypes.types', props);
    return resource.getResponseField('types') as unknown as shapes.AppSyncType[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypes',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.ListTypes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          apiId: this.input.apiId,
          format: this.input.format,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncStartSchemaCreation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncStartSchemaCreationRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSchemaCreation',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.StartSchemaCreation.status'),
        outputPath: 'status',
        parameters: {
          apiId: this.input.apiId,
          definition: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSchemaCreation.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class AppSyncUpdateApiCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateApiCacheRequest) {
    super(scope, id);
  }

  public get apiCache(): AppSyncUpdateApiCacheApiCache {
    return new AppSyncUpdateApiCacheApiCache(this, 'ApiCache', this.__resources, this.input);
  }

}

export class AppSyncUpdateApiCacheApiCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateApiCacheRequest) {
    super(scope, id);
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiCache.apiCache.ttl'),
        outputPath: 'apiCache.ttl',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiCache.apiCache.ttl', props);
    return resource.getResponseField('apiCache.ttl') as unknown as number;
  }

  public get apiCachingBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiCache.apiCache.apiCachingBehavior'),
        outputPath: 'apiCache.apiCachingBehavior',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiCache.apiCache.apiCachingBehavior', props);
    return resource.getResponseField('apiCache.apiCachingBehavior') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiCache.apiCache.transitEncryptionEnabled'),
        outputPath: 'apiCache.transitEncryptionEnabled',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiCache.apiCache.transitEncryptionEnabled', props);
    return resource.getResponseField('apiCache.transitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiCache.apiCache.atRestEncryptionEnabled'),
        outputPath: 'apiCache.atRestEncryptionEnabled',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiCache.apiCache.atRestEncryptionEnabled', props);
    return resource.getResponseField('apiCache.atRestEncryptionEnabled') as unknown as boolean;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiCache.apiCache.type'),
        outputPath: 'apiCache.type',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiCache.apiCache.type', props);
    return resource.getResponseField('apiCache.type') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiCache',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiCache.apiCache.status'),
        outputPath: 'apiCache.status',
        parameters: {
          apiId: this.input.apiId,
          ttl: this.input.ttl,
          apiCachingBehavior: this.input.apiCachingBehavior,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiCache.apiCache.status', props);
    return resource.getResponseField('apiCache.status') as unknown as string;
  }

}

export class AppSyncUpdateApiKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateApiKeyRequest) {
    super(scope, id);
  }

  public get apiKey(): AppSyncUpdateApiKeyApiKey {
    return new AppSyncUpdateApiKeyApiKey(this, 'ApiKey', this.__resources, this.input);
  }

}

export class AppSyncUpdateApiKeyApiKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateApiKeyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiKey.apiKey.id'),
        outputPath: 'apiKey.id',
        parameters: {
          apiId: this.input.apiId,
          id: this.input.id,
          description: this.input.description,
          expires: this.input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.apiKey.id', props);
    return resource.getResponseField('apiKey.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiKey.apiKey.description'),
        outputPath: 'apiKey.description',
        parameters: {
          apiId: this.input.apiId,
          id: this.input.id,
          description: this.input.description,
          expires: this.input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.apiKey.description', props);
    return resource.getResponseField('apiKey.description') as unknown as string;
  }

  public get expires(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiKey.apiKey.expires'),
        outputPath: 'apiKey.expires',
        parameters: {
          apiId: this.input.apiId,
          id: this.input.id,
          description: this.input.description,
          expires: this.input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.apiKey.expires', props);
    return resource.getResponseField('apiKey.expires') as unknown as number;
  }

  public get deletes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateApiKey.apiKey.deletes'),
        outputPath: 'apiKey.deletes',
        parameters: {
          apiId: this.input.apiId,
          id: this.input.id,
          description: this.input.description,
          expires: this.input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.apiKey.deletes', props);
    return resource.getResponseField('apiKey.deletes') as unknown as number;
  }

}

export class AppSyncUpdateDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get dataSource(): AppSyncUpdateDataSourceDataSource {
    return new AppSyncUpdateDataSourceDataSource(this, 'DataSource', this.__resources, this.input);
  }

}

export class AppSyncUpdateDataSourceDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get dataSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.dataSourceArn'),
        outputPath: 'dataSource.dataSourceArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.dataSourceArn', props);
    return resource.getResponseField('dataSource.dataSourceArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.name'),
        outputPath: 'dataSource.name',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.name', props);
    return resource.getResponseField('dataSource.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.description'),
        outputPath: 'dataSource.description',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.description', props);
    return resource.getResponseField('dataSource.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.type'),
        outputPath: 'dataSource.type',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.type', props);
    return resource.getResponseField('dataSource.type') as unknown as string;
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.serviceRoleArn'),
        outputPath: 'dataSource.serviceRoleArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.serviceRoleArn', props);
    return resource.getResponseField('dataSource.serviceRoleArn') as unknown as string;
  }

  public get dynamodbConfig(): AppSyncUpdateDataSourceDataSourceDynamodbConfig {
    return new AppSyncUpdateDataSourceDataSourceDynamodbConfig(this, 'DynamodbConfig', this.__resources, this.input);
  }

  public get lambdaConfig(): AppSyncUpdateDataSourceDataSourceLambdaConfig {
    return new AppSyncUpdateDataSourceDataSourceLambdaConfig(this, 'LambdaConfig', this.__resources, this.input);
  }

  public get elasticsearchConfig(): AppSyncUpdateDataSourceDataSourceElasticsearchConfig {
    return new AppSyncUpdateDataSourceDataSourceElasticsearchConfig(this, 'ElasticsearchConfig', this.__resources, this.input);
  }

  public get httpConfig(): AppSyncUpdateDataSourceDataSourceHttpConfig {
    return new AppSyncUpdateDataSourceDataSourceHttpConfig(this, 'HttpConfig', this.__resources, this.input);
  }

  public get relationalDatabaseConfig(): AppSyncUpdateDataSourceDataSourceRelationalDatabaseConfig {
    return new AppSyncUpdateDataSourceDataSourceRelationalDatabaseConfig(this, 'RelationalDatabaseConfig', this.__resources, this.input);
  }

}

export class AppSyncUpdateDataSourceDataSourceDynamodbConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.dynamodbConfig.tableName'),
        outputPath: 'dataSource.dynamodbConfig.tableName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.dynamodbConfig.tableName', props);
    return resource.getResponseField('dataSource.dynamodbConfig.tableName') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.dynamodbConfig.awsRegion'),
        outputPath: 'dataSource.dynamodbConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.dynamodbConfig.awsRegion', props);
    return resource.getResponseField('dataSource.dynamodbConfig.awsRegion') as unknown as string;
  }

  public get useCallerCredentials(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.dynamodbConfig.useCallerCredentials'),
        outputPath: 'dataSource.dynamodbConfig.useCallerCredentials',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.dynamodbConfig.useCallerCredentials', props);
    return resource.getResponseField('dataSource.dynamodbConfig.useCallerCredentials') as unknown as boolean;
  }

  public get deltaSyncConfig(): AppSyncUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig {
    return new AppSyncUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig(this, 'DeltaSyncConfig', this.__resources, this.input);
  }

  public get versioned(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.dynamodbConfig.versioned'),
        outputPath: 'dataSource.dynamodbConfig.versioned',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.dynamodbConfig.versioned', props);
    return resource.getResponseField('dataSource.dynamodbConfig.versioned') as unknown as boolean;
  }

}

export class AppSyncUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get baseTableTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL'),
        outputPath: 'dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL') as unknown as number;
  }

  public get deltaSyncTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName'),
        outputPath: 'dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName') as unknown as string;
  }

  public get deltaSyncTableTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL'),
        outputPath: 'dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL') as unknown as number;
  }

}

export class AppSyncUpdateDataSourceDataSourceLambdaConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get lambdaFunctionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.lambdaConfig.lambdaFunctionArn'),
        outputPath: 'dataSource.lambdaConfig.lambdaFunctionArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.lambdaConfig.lambdaFunctionArn', props);
    return resource.getResponseField('dataSource.lambdaConfig.lambdaFunctionArn') as unknown as string;
  }

}

export class AppSyncUpdateDataSourceDataSourceElasticsearchConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.elasticsearchConfig.endpoint'),
        outputPath: 'dataSource.elasticsearchConfig.endpoint',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.elasticsearchConfig.endpoint', props);
    return resource.getResponseField('dataSource.elasticsearchConfig.endpoint') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.elasticsearchConfig.awsRegion'),
        outputPath: 'dataSource.elasticsearchConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.elasticsearchConfig.awsRegion', props);
    return resource.getResponseField('dataSource.elasticsearchConfig.awsRegion') as unknown as string;
  }

}

export class AppSyncUpdateDataSourceDataSourceHttpConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.httpConfig.endpoint'),
        outputPath: 'dataSource.httpConfig.endpoint',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.httpConfig.endpoint', props);
    return resource.getResponseField('dataSource.httpConfig.endpoint') as unknown as string;
  }

  public get authorizationConfig(): AppSyncUpdateDataSourceDataSourceHttpConfigAuthorizationConfig {
    return new AppSyncUpdateDataSourceDataSourceHttpConfigAuthorizationConfig(this, 'AuthorizationConfig', this.__resources, this.input);
  }

}

export class AppSyncUpdateDataSourceDataSourceHttpConfigAuthorizationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get authorizationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.httpConfig.authorizationConfig.authorizationType'),
        outputPath: 'dataSource.httpConfig.authorizationConfig.authorizationType',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.httpConfig.authorizationConfig.authorizationType', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.authorizationType') as unknown as string;
  }

  public get awsIamConfig(): AppSyncUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig {
    return new AppSyncUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig(this, 'AwsIamConfig', this.__resources, this.input);
  }

}

export class AppSyncUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get signingRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion'),
        outputPath: 'dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion') as unknown as string;
  }

  public get signingServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName'),
        outputPath: 'dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName') as unknown as string;
  }

}

export class AppSyncUpdateDataSourceDataSourceRelationalDatabaseConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get relationalDatabaseSourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.relationalDatabaseConfig.relationalDatabaseSourceType'),
        outputPath: 'dataSource.relationalDatabaseConfig.relationalDatabaseSourceType',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.relationalDatabaseConfig.relationalDatabaseSourceType', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.relationalDatabaseSourceType') as unknown as string;
  }

  public get rdsHttpEndpointConfig(): AppSyncUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {
    return new AppSyncUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(this, 'RdsHttpEndpointConfig', this.__resources, this.input);
  }

}

export class AppSyncUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateDataSourceRequest) {
    super(scope, id);
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion') as unknown as string;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema') as unknown as string;
  }

  public get awsSecretStoreArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn'),
        outputPath: 'dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          serviceRoleArn: this.input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.input.dynamodbConfig?.tableName,
            awsRegion: this.input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.input.elasticsearchConfig?.endpoint,
            awsRegion: this.input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn') as unknown as string;
  }

}

export class AppSyncUpdateFunction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateFunctionRequest) {
    super(scope, id);
  }

  public get functionConfiguration(): AppSyncUpdateFunctionFunctionConfiguration {
    return new AppSyncUpdateFunctionFunctionConfiguration(this, 'FunctionConfiguration', this.__resources, this.input);
  }

}

export class AppSyncUpdateFunctionFunctionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateFunctionRequest) {
    super(scope, id);
  }

  public get functionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.functionId'),
        outputPath: 'functionConfiguration.functionId',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          functionId: this.input.functionId,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunction.functionConfiguration.functionId', props);
    return resource.getResponseField('functionConfiguration.functionId') as unknown as string;
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.functionArn'),
        outputPath: 'functionConfiguration.functionArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          functionId: this.input.functionId,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunction.functionConfiguration.functionArn', props);
    return resource.getResponseField('functionConfiguration.functionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.name'),
        outputPath: 'functionConfiguration.name',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          functionId: this.input.functionId,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunction.functionConfiguration.name', props);
    return resource.getResponseField('functionConfiguration.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.description'),
        outputPath: 'functionConfiguration.description',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          functionId: this.input.functionId,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunction.functionConfiguration.description', props);
    return resource.getResponseField('functionConfiguration.description') as unknown as string;
  }

  public get dataSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.dataSourceName'),
        outputPath: 'functionConfiguration.dataSourceName',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          functionId: this.input.functionId,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunction.functionConfiguration.dataSourceName', props);
    return resource.getResponseField('functionConfiguration.dataSourceName') as unknown as string;
  }

  public get requestMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.requestMappingTemplate'),
        outputPath: 'functionConfiguration.requestMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          functionId: this.input.functionId,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunction.functionConfiguration.requestMappingTemplate', props);
    return resource.getResponseField('functionConfiguration.requestMappingTemplate') as unknown as string;
  }

  public get responseMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.responseMappingTemplate'),
        outputPath: 'functionConfiguration.responseMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          functionId: this.input.functionId,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunction.functionConfiguration.responseMappingTemplate', props);
    return resource.getResponseField('functionConfiguration.responseMappingTemplate') as unknown as string;
  }

  public get functionVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.functionVersion'),
        outputPath: 'functionConfiguration.functionVersion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          description: this.input.description,
          functionId: this.input.functionId,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          functionVersion: this.input.functionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFunction.functionConfiguration.functionVersion', props);
    return resource.getResponseField('functionConfiguration.functionVersion') as unknown as string;
  }

}

export class AppSyncUpdateGraphqlApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateGraphqlApiRequest) {
    super(scope, id);
  }

  public get graphqlApi(): AppSyncUpdateGraphqlApiGraphqlApi {
    return new AppSyncUpdateGraphqlApiGraphqlApi(this, 'GraphqlApi', this.__resources, this.input);
  }

}

export class AppSyncUpdateGraphqlApiGraphqlApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateGraphqlApiRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.name'),
        outputPath: 'graphqlApi.name',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.name', props);
    return resource.getResponseField('graphqlApi.name') as unknown as string;
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.apiId'),
        outputPath: 'graphqlApi.apiId',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.apiId', props);
    return resource.getResponseField('graphqlApi.apiId') as unknown as string;
  }

  public get authenticationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.authenticationType'),
        outputPath: 'graphqlApi.authenticationType',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.authenticationType', props);
    return resource.getResponseField('graphqlApi.authenticationType') as unknown as string;
  }

  public get logConfig(): AppSyncUpdateGraphqlApiGraphqlApiLogConfig {
    return new AppSyncUpdateGraphqlApiGraphqlApiLogConfig(this, 'LogConfig', this.__resources, this.input);
  }

  public get userPoolConfig(): AppSyncUpdateGraphqlApiGraphqlApiUserPoolConfig {
    return new AppSyncUpdateGraphqlApiGraphqlApiUserPoolConfig(this, 'UserPoolConfig', this.__resources, this.input);
  }

  public get openIdConnectConfig(): AppSyncUpdateGraphqlApiGraphqlApiOpenIdConnectConfig {
    return new AppSyncUpdateGraphqlApiGraphqlApiOpenIdConnectConfig(this, 'OpenIdConnectConfig', this.__resources, this.input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.arn'),
        outputPath: 'graphqlApi.arn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.arn', props);
    return resource.getResponseField('graphqlApi.arn') as unknown as string;
  }

  public get uris(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.uris'),
        outputPath: 'graphqlApi.uris',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.uris', props);
    return resource.getResponseField('graphqlApi.uris') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.tags'),
        outputPath: 'graphqlApi.tags',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.tags', props);
    return resource.getResponseField('graphqlApi.tags') as unknown as Record<string, string>;
  }

  public get additionalAuthenticationProviders(): shapes.AppSyncAdditionalAuthenticationProvider[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.additionalAuthenticationProviders'),
        outputPath: 'graphqlApi.additionalAuthenticationProviders',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.additionalAuthenticationProviders', props);
    return resource.getResponseField('graphqlApi.additionalAuthenticationProviders') as unknown as shapes.AppSyncAdditionalAuthenticationProvider[];
  }

  public get xrayEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.xrayEnabled'),
        outputPath: 'graphqlApi.xrayEnabled',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.xrayEnabled', props);
    return resource.getResponseField('graphqlApi.xrayEnabled') as unknown as boolean;
  }

  public get wafWebAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.wafWebAclArn'),
        outputPath: 'graphqlApi.wafWebAclArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.wafWebAclArn', props);
    return resource.getResponseField('graphqlApi.wafWebAclArn') as unknown as string;
  }

}

export class AppSyncUpdateGraphqlApiGraphqlApiLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateGraphqlApiRequest) {
    super(scope, id);
  }

  public get fieldLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.logConfig.fieldLogLevel'),
        outputPath: 'graphqlApi.logConfig.fieldLogLevel',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.logConfig.fieldLogLevel', props);
    return resource.getResponseField('graphqlApi.logConfig.fieldLogLevel') as unknown as string;
  }

  public get cloudWatchLogsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.logConfig.cloudWatchLogsRoleArn'),
        outputPath: 'graphqlApi.logConfig.cloudWatchLogsRoleArn',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.logConfig.cloudWatchLogsRoleArn', props);
    return resource.getResponseField('graphqlApi.logConfig.cloudWatchLogsRoleArn') as unknown as string;
  }

  public get excludeVerboseContent(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.logConfig.excludeVerboseContent'),
        outputPath: 'graphqlApi.logConfig.excludeVerboseContent',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.logConfig.excludeVerboseContent', props);
    return resource.getResponseField('graphqlApi.logConfig.excludeVerboseContent') as unknown as boolean;
  }

}

export class AppSyncUpdateGraphqlApiGraphqlApiUserPoolConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateGraphqlApiRequest) {
    super(scope, id);
  }

  public get userPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.userPoolConfig.userPoolId'),
        outputPath: 'graphqlApi.userPoolConfig.userPoolId',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.userPoolConfig.userPoolId', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.userPoolId') as unknown as string;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.userPoolConfig.awsRegion'),
        outputPath: 'graphqlApi.userPoolConfig.awsRegion',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.userPoolConfig.awsRegion', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.awsRegion') as unknown as string;
  }

  public get defaultAction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.userPoolConfig.defaultAction'),
        outputPath: 'graphqlApi.userPoolConfig.defaultAction',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.userPoolConfig.defaultAction', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.defaultAction') as unknown as string;
  }

  public get appIdClientRegex(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.userPoolConfig.appIdClientRegex'),
        outputPath: 'graphqlApi.userPoolConfig.appIdClientRegex',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.userPoolConfig.appIdClientRegex', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.appIdClientRegex') as unknown as string;
  }

}

export class AppSyncUpdateGraphqlApiGraphqlApiOpenIdConnectConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateGraphqlApiRequest) {
    super(scope, id);
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.openIDConnectConfig.issuer'),
        outputPath: 'graphqlApi.openIDConnectConfig.issuer',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.openIDConnectConfig.issuer', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.issuer') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.openIDConnectConfig.clientId'),
        outputPath: 'graphqlApi.openIDConnectConfig.clientId',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.openIDConnectConfig.clientId', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.clientId') as unknown as string;
  }

  public get iatTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.openIDConnectConfig.iatTTL'),
        outputPath: 'graphqlApi.openIDConnectConfig.iatTTL',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.openIDConnectConfig.iatTTL', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.iatTTL') as unknown as number;
  }

  public get authTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.openIDConnectConfig.authTTL'),
        outputPath: 'graphqlApi.openIDConnectConfig.authTTL',
        parameters: {
          apiId: this.input.apiId,
          name: this.input.name,
          logConfig: {
            fieldLogLevel: this.input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.input.authenticationType,
          userPoolConfig: {
            userPoolId: this.input.userPoolConfig?.userPoolId,
            awsRegion: this.input.userPoolConfig?.awsRegion,
            defaultAction: this.input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.input.openIDConnectConfig?.issuer,
            clientId: this.input.openIDConnectConfig?.clientId,
            iatTTL: this.input.openIDConnectConfig?.iatTTL,
            authTTL: this.input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.input.additionalAuthenticationProviders,
          xrayEnabled: this.input.xrayEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGraphqlApi.graphqlApi.openIDConnectConfig.authTTL', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.authTTL') as unknown as number;
  }

}

export class AppSyncUpdateResolver extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateResolverRequest) {
    super(scope, id);
  }

  public get resolver(): AppSyncUpdateResolverResolver {
    return new AppSyncUpdateResolverResolver(this, 'Resolver', this.__resources, this.input);
  }

}

export class AppSyncUpdateResolverResolver extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateResolverRequest) {
    super(scope, id);
  }

  public get typeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.typeName'),
        outputPath: 'resolver.typeName',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.typeName', props);
    return resource.getResponseField('resolver.typeName') as unknown as string;
  }

  public get fieldName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.fieldName'),
        outputPath: 'resolver.fieldName',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.fieldName', props);
    return resource.getResponseField('resolver.fieldName') as unknown as string;
  }

  public get dataSourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.dataSourceName'),
        outputPath: 'resolver.dataSourceName',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.dataSourceName', props);
    return resource.getResponseField('resolver.dataSourceName') as unknown as string;
  }

  public get resolverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.resolverArn'),
        outputPath: 'resolver.resolverArn',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.resolverArn', props);
    return resource.getResponseField('resolver.resolverArn') as unknown as string;
  }

  public get requestMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.requestMappingTemplate'),
        outputPath: 'resolver.requestMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.requestMappingTemplate', props);
    return resource.getResponseField('resolver.requestMappingTemplate') as unknown as string;
  }

  public get responseMappingTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.responseMappingTemplate'),
        outputPath: 'resolver.responseMappingTemplate',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.responseMappingTemplate', props);
    return resource.getResponseField('resolver.responseMappingTemplate') as unknown as string;
  }

  public get kind(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.kind'),
        outputPath: 'resolver.kind',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.kind', props);
    return resource.getResponseField('resolver.kind') as unknown as string;
  }

  public get pipelineConfig(): AppSyncUpdateResolverResolverPipelineConfig {
    return new AppSyncUpdateResolverResolverPipelineConfig(this, 'PipelineConfig', this.__resources, this.input);
  }

  public get syncConfig(): AppSyncUpdateResolverResolverSyncConfig {
    return new AppSyncUpdateResolverResolverSyncConfig(this, 'SyncConfig', this.__resources, this.input);
  }

  public get cachingConfig(): AppSyncUpdateResolverResolverCachingConfig {
    return new AppSyncUpdateResolverResolverCachingConfig(this, 'CachingConfig', this.__resources, this.input);
  }

}

export class AppSyncUpdateResolverResolverPipelineConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateResolverRequest) {
    super(scope, id);
  }

  public get functions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.pipelineConfig.functions'),
        outputPath: 'resolver.pipelineConfig.functions',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.pipelineConfig.functions', props);
    return resource.getResponseField('resolver.pipelineConfig.functions') as unknown as string[];
  }

}

export class AppSyncUpdateResolverResolverSyncConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateResolverRequest) {
    super(scope, id);
  }

  public get conflictHandler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.syncConfig.conflictHandler'),
        outputPath: 'resolver.syncConfig.conflictHandler',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.syncConfig.conflictHandler', props);
    return resource.getResponseField('resolver.syncConfig.conflictHandler') as unknown as string;
  }

  public get conflictDetection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.syncConfig.conflictDetection'),
        outputPath: 'resolver.syncConfig.conflictDetection',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.syncConfig.conflictDetection', props);
    return resource.getResponseField('resolver.syncConfig.conflictDetection') as unknown as string;
  }

  public get lambdaConflictHandlerConfig(): AppSyncUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig {
    return new AppSyncUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig(this, 'LambdaConflictHandlerConfig', this.__resources, this.input);
  }

}

export class AppSyncUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateResolverRequest) {
    super(scope, id);
  }

  public get lambdaConflictHandlerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn'),
        outputPath: 'resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn', props);
    return resource.getResponseField('resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn') as unknown as string;
  }

}

export class AppSyncUpdateResolverResolverCachingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateResolverRequest) {
    super(scope, id);
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.cachingConfig.ttl'),
        outputPath: 'resolver.cachingConfig.ttl',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.cachingConfig.ttl', props);
    return resource.getResponseField('resolver.cachingConfig.ttl') as unknown as number;
  }

  public get cachingKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolver',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateResolver.resolver.cachingConfig.cachingKeys'),
        outputPath: 'resolver.cachingConfig.cachingKeys',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          fieldName: this.input.fieldName,
          dataSourceName: this.input.dataSourceName,
          requestMappingTemplate: this.input.requestMappingTemplate,
          responseMappingTemplate: this.input.responseMappingTemplate,
          kind: this.input.kind,
          pipelineConfig: {
            functions: this.input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.input.syncConfig?.conflictHandler,
            conflictDetection: this.input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.input.cachingConfig?.ttl,
            cachingKeys: this.input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolver.resolver.cachingConfig.cachingKeys', props);
    return resource.getResponseField('resolver.cachingConfig.cachingKeys') as unknown as string[];
  }

}

export class AppSyncUpdateType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateTypeRequest) {
    super(scope, id);
  }

  public get type(): AppSyncUpdateTypeType {
    return new AppSyncUpdateTypeType(this, 'Type', this.__resources, this.input);
  }

}

export class AppSyncUpdateTypeType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppSyncUpdateTypeRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateType.type.name'),
        outputPath: 'type.name',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateType.type.name', props);
    return resource.getResponseField('type.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateType.type.description'),
        outputPath: 'type.description',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateType.type.description', props);
    return resource.getResponseField('type.description') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateType.type.arn'),
        outputPath: 'type.arn',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateType.type.arn', props);
    return resource.getResponseField('type.arn') as unknown as string;
  }

  public get definition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateType.type.definition'),
        outputPath: 'type.definition',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateType.type.definition', props);
    return resource.getResponseField('type.definition') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateType',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateType.type.format'),
        outputPath: 'type.format',
        parameters: {
          apiId: this.input.apiId,
          typeName: this.input.typeName,
          definition: this.input.definition,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateType.type.format', props);
    return resource.getResponseField('type.format') as unknown as string;
  }

}

