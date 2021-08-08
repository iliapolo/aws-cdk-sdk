import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AppSyncClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApiCache(input: shapes.AppSyncCreateApiCacheRequest): AppSyncResponsesCreateApiCache {
    return new AppSyncResponsesCreateApiCache(this, this.__resources, input);
  }

  public createApiKey(input: shapes.AppSyncCreateApiKeyRequest): AppSyncResponsesCreateApiKey {
    return new AppSyncResponsesCreateApiKey(this, this.__resources, input);
  }

  public createDataSource(input: shapes.AppSyncCreateDataSourceRequest): AppSyncResponsesCreateDataSource {
    return new AppSyncResponsesCreateDataSource(this, this.__resources, input);
  }

  public createFunction(input: shapes.AppSyncCreateFunctionRequest): AppSyncResponsesCreateFunction {
    return new AppSyncResponsesCreateFunction(this, this.__resources, input);
  }

  public createGraphqlApi(input: shapes.AppSyncCreateGraphqlApiRequest): AppSyncResponsesCreateGraphqlApi {
    return new AppSyncResponsesCreateGraphqlApi(this, this.__resources, input);
  }

  public createResolver(input: shapes.AppSyncCreateResolverRequest): AppSyncResponsesCreateResolver {
    return new AppSyncResponsesCreateResolver(this, this.__resources, input);
  }

  public createType(input: shapes.AppSyncCreateTypeRequest): AppSyncResponsesCreateType {
    return new AppSyncResponsesCreateType(this, this.__resources, input);
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

  public fetchApiCache(input: shapes.AppSyncGetApiCacheRequest): AppSyncResponsesFetchApiCache {
    return new AppSyncResponsesFetchApiCache(this, this.__resources, input);
  }

  public fetchDataSource(input: shapes.AppSyncGetDataSourceRequest): AppSyncResponsesFetchDataSource {
    return new AppSyncResponsesFetchDataSource(this, this.__resources, input);
  }

  public fetchFunction(input: shapes.AppSyncGetFunctionRequest): AppSyncResponsesFetchFunction {
    return new AppSyncResponsesFetchFunction(this, this.__resources, input);
  }

  public fetchGraphqlApi(input: shapes.AppSyncGetGraphqlApiRequest): AppSyncResponsesFetchGraphqlApi {
    return new AppSyncResponsesFetchGraphqlApi(this, this.__resources, input);
  }

  public fetchIntrospectionSchema(input: shapes.AppSyncGetIntrospectionSchemaRequest): AppSyncResponsesFetchIntrospectionSchema {
    return new AppSyncResponsesFetchIntrospectionSchema(this, this.__resources, input);
  }

  public fetchResolver(input: shapes.AppSyncGetResolverRequest): AppSyncResponsesFetchResolver {
    return new AppSyncResponsesFetchResolver(this, this.__resources, input);
  }

  public fetchSchemaCreationStatus(input: shapes.AppSyncGetSchemaCreationStatusRequest): AppSyncResponsesFetchSchemaCreationStatus {
    return new AppSyncResponsesFetchSchemaCreationStatus(this, this.__resources, input);
  }

  public fetchType(input: shapes.AppSyncGetTypeRequest): AppSyncResponsesFetchType {
    return new AppSyncResponsesFetchType(this, this.__resources, input);
  }

  public listApiKeys(input: shapes.AppSyncListApiKeysRequest): AppSyncResponsesListApiKeys {
    return new AppSyncResponsesListApiKeys(this, this.__resources, input);
  }

  public listDataSources(input: shapes.AppSyncListDataSourcesRequest): AppSyncResponsesListDataSources {
    return new AppSyncResponsesListDataSources(this, this.__resources, input);
  }

  public listFunctions(input: shapes.AppSyncListFunctionsRequest): AppSyncResponsesListFunctions {
    return new AppSyncResponsesListFunctions(this, this.__resources, input);
  }

  public listGraphqlApis(input: shapes.AppSyncListGraphqlApisRequest): AppSyncResponsesListGraphqlApis {
    return new AppSyncResponsesListGraphqlApis(this, this.__resources, input);
  }

  public listResolvers(input: shapes.AppSyncListResolversRequest): AppSyncResponsesListResolvers {
    return new AppSyncResponsesListResolvers(this, this.__resources, input);
  }

  public listResolversByFunction(input: shapes.AppSyncListResolversByFunctionRequest): AppSyncResponsesListResolversByFunction {
    return new AppSyncResponsesListResolversByFunction(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppSyncListTagsForResourceRequest): AppSyncResponsesListTagsForResource {
    return new AppSyncResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTypes(input: shapes.AppSyncListTypesRequest): AppSyncResponsesListTypes {
    return new AppSyncResponsesListTypes(this, this.__resources, input);
  }

  public startSchemaCreation(input: shapes.AppSyncStartSchemaCreationRequest): AppSyncResponsesStartSchemaCreation {
    return new AppSyncResponsesStartSchemaCreation(this, this.__resources, input);
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

  public updateApiCache(input: shapes.AppSyncUpdateApiCacheRequest): AppSyncResponsesUpdateApiCache {
    return new AppSyncResponsesUpdateApiCache(this, this.__resources, input);
  }

  public updateApiKey(input: shapes.AppSyncUpdateApiKeyRequest): AppSyncResponsesUpdateApiKey {
    return new AppSyncResponsesUpdateApiKey(this, this.__resources, input);
  }

  public updateDataSource(input: shapes.AppSyncUpdateDataSourceRequest): AppSyncResponsesUpdateDataSource {
    return new AppSyncResponsesUpdateDataSource(this, this.__resources, input);
  }

  public updateFunction(input: shapes.AppSyncUpdateFunctionRequest): AppSyncResponsesUpdateFunction {
    return new AppSyncResponsesUpdateFunction(this, this.__resources, input);
  }

  public updateGraphqlApi(input: shapes.AppSyncUpdateGraphqlApiRequest): AppSyncResponsesUpdateGraphqlApi {
    return new AppSyncResponsesUpdateGraphqlApi(this, this.__resources, input);
  }

  public updateResolver(input: shapes.AppSyncUpdateResolverRequest): AppSyncResponsesUpdateResolver {
    return new AppSyncResponsesUpdateResolver(this, this.__resources, input);
  }

  public updateType(input: shapes.AppSyncUpdateTypeRequest): AppSyncResponsesUpdateType {
    return new AppSyncResponsesUpdateType(this, this.__resources, input);
  }

}

export class AppSyncResponsesCreateApiCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateApiCacheRequest) {
  }

  public get apiCache(): AppSyncResponsesCreateApiCacheApiCache {
    return new AppSyncResponsesCreateApiCacheApiCache(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateApiCacheApiCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateApiCacheRequest) {
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          transitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiCache.apiCache.ttl', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          transitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiCache.apiCache.apiCachingBehavior', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          transitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiCache.apiCache.transitEncryptionEnabled', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          transitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiCache.apiCache.atRestEncryptionEnabled', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          transitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiCache.apiCache.type', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          transitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          atRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiCache.apiCache.status', props);
    return resource.getResponseField('apiCache.status') as unknown as string;
  }

}

export class AppSyncResponsesCreateApiKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateApiKeyRequest) {
  }

  public get apiKey(): AppSyncResponsesCreateApiKeyApiKey {
    return new AppSyncResponsesCreateApiKeyApiKey(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateApiKeyApiKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateApiKeyRequest) {
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
          apiId: this.__input.apiId,
          description: this.__input.description,
          expires: this.__input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.apiKey.id', props);
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
          apiId: this.__input.apiId,
          description: this.__input.description,
          expires: this.__input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.apiKey.description', props);
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
          apiId: this.__input.apiId,
          description: this.__input.description,
          expires: this.__input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.apiKey.expires', props);
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
          apiId: this.__input.apiId,
          description: this.__input.description,
          expires: this.__input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.apiKey.deletes', props);
    return resource.getResponseField('apiKey.deletes') as unknown as number;
  }

}

export class AppSyncResponsesCreateDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
  }

  public get dataSource(): AppSyncResponsesCreateDataSourceDataSource {
    return new AppSyncResponsesCreateDataSourceDataSource(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateDataSourceDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.dataSourceArn', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.name', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.description', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.type', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.serviceRoleArn', props);
    return resource.getResponseField('dataSource.serviceRoleArn') as unknown as string;
  }

  public get dynamodbConfig(): AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig {
    return new AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig(this.__scope, this.__resources, this.__input);
  }

  public get lambdaConfig(): AppSyncResponsesCreateDataSourceDataSourceLambdaConfig {
    return new AppSyncResponsesCreateDataSourceDataSourceLambdaConfig(this.__scope, this.__resources, this.__input);
  }

  public get elasticsearchConfig(): AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig {
    return new AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig(this.__scope, this.__resources, this.__input);
  }

  public get httpConfig(): AppSyncResponsesCreateDataSourceDataSourceHttpConfig {
    return new AppSyncResponsesCreateDataSourceDataSourceHttpConfig(this.__scope, this.__resources, this.__input);
  }

  public get relationalDatabaseConfig(): AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig {
    return new AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.dynamodbConfig.tableName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.dynamodbConfig.awsRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.dynamodbConfig.useCallerCredentials', props);
    return resource.getResponseField('dataSource.dynamodbConfig.useCallerCredentials') as unknown as boolean;
  }

  public get deltaSyncConfig(): AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig {
    return new AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig(this.__scope, this.__resources, this.__input);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.dynamodbConfig.versioned', props);
    return resource.getResponseField('dataSource.dynamodbConfig.versioned') as unknown as boolean;
  }

}

export class AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL') as unknown as number;
  }

}

export class AppSyncResponsesCreateDataSourceDataSourceLambdaConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.lambdaConfig.lambdaFunctionArn', props);
    return resource.getResponseField('dataSource.lambdaConfig.lambdaFunctionArn') as unknown as string;
  }

}

export class AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.elasticsearchConfig.endpoint', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.elasticsearchConfig.awsRegion', props);
    return resource.getResponseField('dataSource.elasticsearchConfig.awsRegion') as unknown as string;
  }

}

export class AppSyncResponsesCreateDataSourceDataSourceHttpConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.httpConfig.endpoint', props);
    return resource.getResponseField('dataSource.httpConfig.endpoint') as unknown as string;
  }

  public get authorizationConfig(): AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig {
    return new AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.httpConfig.authorizationConfig.authorizationType', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.authorizationType') as unknown as string;
  }

  public get awsIamConfig(): AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig {
    return new AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName') as unknown as string;
  }

}

export class AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.relationalDatabaseConfig.relationalDatabaseSourceType', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.relationalDatabaseSourceType') as unknown as string;
  }

  public get rdsHttpEndpointConfig(): AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {
    return new AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn') as unknown as string;
  }

}

export class AppSyncResponsesCreateFunction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateFunctionRequest) {
  }

  public get functionConfiguration(): AppSyncResponsesCreateFunctionFunctionConfiguration {
    return new AppSyncResponsesCreateFunctionFunctionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateFunctionFunctionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateFunctionRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.functionId', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.functionArn', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.name', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.description', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.dataSourceName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.requestMappingTemplate', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.responseMappingTemplate', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.functionVersion', props);
    return resource.getResponseField('functionConfiguration.functionVersion') as unknown as string;
  }

  public get syncConfig(): AppSyncResponsesCreateFunctionFunctionConfigurationSyncConfig {
    return new AppSyncResponsesCreateFunctionFunctionConfigurationSyncConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateFunctionFunctionConfigurationSyncConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateFunctionRequest) {
  }

  public get conflictHandler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.syncConfig.conflictHandler'),
        outputPath: 'functionConfiguration.syncConfig.conflictHandler',
        parameters: {
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.syncConfig.conflictHandler', props);
    return resource.getResponseField('functionConfiguration.syncConfig.conflictHandler') as unknown as string;
  }

  public get conflictDetection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.syncConfig.conflictDetection'),
        outputPath: 'functionConfiguration.syncConfig.conflictDetection',
        parameters: {
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.syncConfig.conflictDetection', props);
    return resource.getResponseField('functionConfiguration.syncConfig.conflictDetection') as unknown as string;
  }

  public get lambdaConflictHandlerConfig(): AppSyncResponsesCreateFunctionFunctionConfigurationSyncConfigLambdaConflictHandlerConfig {
    return new AppSyncResponsesCreateFunctionFunctionConfigurationSyncConfigLambdaConflictHandlerConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateFunctionFunctionConfigurationSyncConfigLambdaConflictHandlerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateFunctionRequest) {
  }

  public get lambdaConflictHandlerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateFunction.functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn'),
        outputPath: 'functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn',
        parameters: {
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFunction.functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn', props);
    return resource.getResponseField('functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn') as unknown as string;
  }

}

export class AppSyncResponsesCreateGraphqlApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateGraphqlApiRequest) {
  }

  public get graphqlApi(): AppSyncResponsesCreateGraphqlApiGraphqlApi {
    return new AppSyncResponsesCreateGraphqlApiGraphqlApi(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateGraphqlApiGraphqlApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateGraphqlApiRequest) {
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.name', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.apiId', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.authenticationType', props);
    return resource.getResponseField('graphqlApi.authenticationType') as unknown as string;
  }

  public get logConfig(): AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig {
    return new AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig(this.__scope, this.__resources, this.__input);
  }

  public get userPoolConfig(): AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig {
    return new AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig(this.__scope, this.__resources, this.__input);
  }

  public get openIdConnectConfig(): AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig {
    return new AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.arn', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.uris', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.tags', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.additionalAuthenticationProviders', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.xrayEnabled', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.wafWebAclArn', props);
    return resource.getResponseField('graphqlApi.wafWebAclArn') as unknown as string;
  }

  public get lambdaAuthorizerConfig(): AppSyncResponsesCreateGraphqlApiGraphqlApiLambdaAuthorizerConfig {
    return new AppSyncResponsesCreateGraphqlApiGraphqlApiLambdaAuthorizerConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateGraphqlApiRequest) {
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.logConfig.fieldLogLevel', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.logConfig.cloudWatchLogsRoleArn', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.logConfig.excludeVerboseContent', props);
    return resource.getResponseField('graphqlApi.logConfig.excludeVerboseContent') as unknown as boolean;
  }

}

export class AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateGraphqlApiRequest) {
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.userPoolConfig.userPoolId', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.userPoolConfig.awsRegion', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.userPoolConfig.defaultAction', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.userPoolConfig.appIdClientRegex', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.appIdClientRegex') as unknown as string;
  }

}

export class AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateGraphqlApiRequest) {
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.openIDConnectConfig.issuer', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.openIDConnectConfig.clientId', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.openIDConnectConfig.iatTTL', props);
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
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.openIDConnectConfig.authTTL', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.authTTL') as unknown as number;
  }

}

export class AppSyncResponsesCreateGraphqlApiGraphqlApiLambdaAuthorizerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateGraphqlApiRequest) {
  }

  public get authorizerResultTtlInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds'),
        outputPath: 'graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds',
        parameters: {
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds', props);
    return resource.getResponseField('graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds') as unknown as number;
  }

  public get authorizerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerUri'),
        outputPath: 'graphqlApi.lambdaAuthorizerConfig.authorizerUri',
        parameters: {
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerUri', props);
    return resource.getResponseField('graphqlApi.lambdaAuthorizerConfig.authorizerUri') as unknown as string;
  }

  public get identityValidationExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.CreateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.identityValidationExpression'),
        outputPath: 'graphqlApi.lambdaAuthorizerConfig.identityValidationExpression',
        parameters: {
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          tags: this.__input.tags,
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.identityValidationExpression', props);
    return resource.getResponseField('graphqlApi.lambdaAuthorizerConfig.identityValidationExpression') as unknown as string;
  }

}

export class AppSyncResponsesCreateResolver {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateResolverRequest) {
  }

  public get resolver(): AppSyncResponsesCreateResolverResolver {
    return new AppSyncResponsesCreateResolverResolver(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateResolverResolver {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.typeName', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.fieldName', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.dataSourceName', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.resolverArn', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.requestMappingTemplate', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.responseMappingTemplate', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.kind', props);
    return resource.getResponseField('resolver.kind') as unknown as string;
  }

  public get pipelineConfig(): AppSyncResponsesCreateResolverResolverPipelineConfig {
    return new AppSyncResponsesCreateResolverResolverPipelineConfig(this.__scope, this.__resources, this.__input);
  }

  public get syncConfig(): AppSyncResponsesCreateResolverResolverSyncConfig {
    return new AppSyncResponsesCreateResolverResolverSyncConfig(this.__scope, this.__resources, this.__input);
  }

  public get cachingConfig(): AppSyncResponsesCreateResolverResolverCachingConfig {
    return new AppSyncResponsesCreateResolverResolverCachingConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateResolverResolverPipelineConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.pipelineConfig.functions', props);
    return resource.getResponseField('resolver.pipelineConfig.functions') as unknown as string[];
  }

}

export class AppSyncResponsesCreateResolverResolverSyncConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.syncConfig.conflictHandler', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.syncConfig.conflictDetection', props);
    return resource.getResponseField('resolver.syncConfig.conflictDetection') as unknown as string;
  }

  public get lambdaConflictHandlerConfig(): AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig {
    return new AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn', props);
    return resource.getResponseField('resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn') as unknown as string;
  }

}

export class AppSyncResponsesCreateResolverResolverCachingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.cachingConfig.ttl', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolver.resolver.cachingConfig.cachingKeys', props);
    return resource.getResponseField('resolver.cachingConfig.cachingKeys') as unknown as string[];
  }

}

export class AppSyncResponsesCreateType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateTypeRequest) {
  }

  public get type(): AppSyncResponsesCreateTypeType {
    return new AppSyncResponsesCreateTypeType(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesCreateTypeType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncCreateTypeRequest) {
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
          apiId: this.__input.apiId,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateType.type.name', props);
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
          apiId: this.__input.apiId,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateType.type.description', props);
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
          apiId: this.__input.apiId,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateType.type.arn', props);
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
          apiId: this.__input.apiId,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateType.type.definition', props);
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
          apiId: this.__input.apiId,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateType.type.format', props);
    return resource.getResponseField('type.format') as unknown as string;
  }

}

export class AppSyncResponsesFetchApiCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetApiCacheRequest) {
  }

  public get apiCache(): AppSyncResponsesFetchApiCacheApiCache {
    return new AppSyncResponsesFetchApiCacheApiCache(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchApiCacheApiCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetApiCacheRequest) {
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiCache.apiCache.ttl', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiCache.apiCache.apiCachingBehavior', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiCache.apiCache.transitEncryptionEnabled', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiCache.apiCache.atRestEncryptionEnabled', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiCache.apiCache.type', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiCache.apiCache.status', props);
    return resource.getResponseField('apiCache.status') as unknown as string;
  }

}

export class AppSyncResponsesFetchDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
  }

  public get dataSource(): AppSyncResponsesFetchDataSourceDataSource {
    return new AppSyncResponsesFetchDataSourceDataSource(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchDataSourceDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.dataSourceArn', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.name', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.description', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.type', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.serviceRoleArn', props);
    return resource.getResponseField('dataSource.serviceRoleArn') as unknown as string;
  }

  public get dynamodbConfig(): AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig {
    return new AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig(this.__scope, this.__resources, this.__input);
  }

  public get lambdaConfig(): AppSyncResponsesFetchDataSourceDataSourceLambdaConfig {
    return new AppSyncResponsesFetchDataSourceDataSourceLambdaConfig(this.__scope, this.__resources, this.__input);
  }

  public get elasticsearchConfig(): AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig {
    return new AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig(this.__scope, this.__resources, this.__input);
  }

  public get httpConfig(): AppSyncResponsesFetchDataSourceDataSourceHttpConfig {
    return new AppSyncResponsesFetchDataSourceDataSourceHttpConfig(this.__scope, this.__resources, this.__input);
  }

  public get relationalDatabaseConfig(): AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig {
    return new AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.dynamodbConfig.tableName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.dynamodbConfig.awsRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.dynamodbConfig.useCallerCredentials', props);
    return resource.getResponseField('dataSource.dynamodbConfig.useCallerCredentials') as unknown as boolean;
  }

  public get deltaSyncConfig(): AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig {
    return new AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig(this.__scope, this.__resources, this.__input);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.dynamodbConfig.versioned', props);
    return resource.getResponseField('dataSource.dynamodbConfig.versioned') as unknown as boolean;
  }

}

export class AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL') as unknown as number;
  }

}

export class AppSyncResponsesFetchDataSourceDataSourceLambdaConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.lambdaConfig.lambdaFunctionArn', props);
    return resource.getResponseField('dataSource.lambdaConfig.lambdaFunctionArn') as unknown as string;
  }

}

export class AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.elasticsearchConfig.endpoint', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.elasticsearchConfig.awsRegion', props);
    return resource.getResponseField('dataSource.elasticsearchConfig.awsRegion') as unknown as string;
  }

}

export class AppSyncResponsesFetchDataSourceDataSourceHttpConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.httpConfig.endpoint', props);
    return resource.getResponseField('dataSource.httpConfig.endpoint') as unknown as string;
  }

  public get authorizationConfig(): AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig {
    return new AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.httpConfig.authorizationConfig.authorizationType', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.authorizationType') as unknown as string;
  }

  public get awsIamConfig(): AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig {
    return new AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName') as unknown as string;
  }

}

export class AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.relationalDatabaseConfig.relationalDatabaseSourceType', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.relationalDatabaseSourceType') as unknown as string;
  }

  public get rdsHttpEndpointConfig(): AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {
    return new AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn') as unknown as string;
  }

}

export class AppSyncResponsesFetchFunction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetFunctionRequest) {
  }

  public get functionConfiguration(): AppSyncResponsesFetchFunctionFunctionConfiguration {
    return new AppSyncResponsesFetchFunctionFunctionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchFunctionFunctionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetFunctionRequest) {
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.functionId', props);
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.functionArn', props);
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.name', props);
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.description', props);
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.dataSourceName', props);
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.requestMappingTemplate', props);
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.responseMappingTemplate', props);
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.functionVersion', props);
    return resource.getResponseField('functionConfiguration.functionVersion') as unknown as string;
  }

  public get syncConfig(): AppSyncResponsesFetchFunctionFunctionConfigurationSyncConfig {
    return new AppSyncResponsesFetchFunctionFunctionConfigurationSyncConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchFunctionFunctionConfigurationSyncConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetFunctionRequest) {
  }

  public get conflictHandler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.syncConfig.conflictHandler'),
        outputPath: 'functionConfiguration.syncConfig.conflictHandler',
        parameters: {
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.syncConfig.conflictHandler', props);
    return resource.getResponseField('functionConfiguration.syncConfig.conflictHandler') as unknown as string;
  }

  public get conflictDetection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.syncConfig.conflictDetection'),
        outputPath: 'functionConfiguration.syncConfig.conflictDetection',
        parameters: {
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.syncConfig.conflictDetection', props);
    return resource.getResponseField('functionConfiguration.syncConfig.conflictDetection') as unknown as string;
  }

  public get lambdaConflictHandlerConfig(): AppSyncResponsesFetchFunctionFunctionConfigurationSyncConfigLambdaConflictHandlerConfig {
    return new AppSyncResponsesFetchFunctionFunctionConfigurationSyncConfigLambdaConflictHandlerConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchFunctionFunctionConfigurationSyncConfigLambdaConflictHandlerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetFunctionRequest) {
  }

  public get lambdaConflictHandlerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetFunction.functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn'),
        outputPath: 'functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn',
        parameters: {
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFunction.functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn', props);
    return resource.getResponseField('functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn') as unknown as string;
  }

}

export class AppSyncResponsesFetchGraphqlApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetGraphqlApiRequest) {
  }

  public get graphqlApi(): AppSyncResponsesFetchGraphqlApiGraphqlApi {
    return new AppSyncResponsesFetchGraphqlApiGraphqlApi(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchGraphqlApiGraphqlApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetGraphqlApiRequest) {
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.name', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.apiId', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.authenticationType', props);
    return resource.getResponseField('graphqlApi.authenticationType') as unknown as string;
  }

  public get logConfig(): AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig {
    return new AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig(this.__scope, this.__resources, this.__input);
  }

  public get userPoolConfig(): AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig {
    return new AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig(this.__scope, this.__resources, this.__input);
  }

  public get openIdConnectConfig(): AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig {
    return new AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig(this.__scope, this.__resources, this.__input);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.arn', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.uris', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.tags', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.additionalAuthenticationProviders', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.xrayEnabled', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.wafWebAclArn', props);
    return resource.getResponseField('graphqlApi.wafWebAclArn') as unknown as string;
  }

  public get lambdaAuthorizerConfig(): AppSyncResponsesFetchGraphqlApiGraphqlApiLambdaAuthorizerConfig {
    return new AppSyncResponsesFetchGraphqlApiGraphqlApiLambdaAuthorizerConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetGraphqlApiRequest) {
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.logConfig.fieldLogLevel', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.logConfig.cloudWatchLogsRoleArn', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.logConfig.excludeVerboseContent', props);
    return resource.getResponseField('graphqlApi.logConfig.excludeVerboseContent') as unknown as boolean;
  }

}

export class AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetGraphqlApiRequest) {
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.userPoolConfig.userPoolId', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.userPoolConfig.awsRegion', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.userPoolConfig.defaultAction', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.userPoolConfig.appIdClientRegex', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.appIdClientRegex') as unknown as string;
  }

}

export class AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetGraphqlApiRequest) {
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.openIDConnectConfig.issuer', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.openIDConnectConfig.clientId', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.openIDConnectConfig.iatTTL', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.openIDConnectConfig.authTTL', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.authTTL') as unknown as number;
  }

}

export class AppSyncResponsesFetchGraphqlApiGraphqlApiLambdaAuthorizerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetGraphqlApiRequest) {
  }

  public get authorizerResultTtlInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds'),
        outputPath: 'graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds',
        parameters: {
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds', props);
    return resource.getResponseField('graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds') as unknown as number;
  }

  public get authorizerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerUri'),
        outputPath: 'graphqlApi.lambdaAuthorizerConfig.authorizerUri',
        parameters: {
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerUri', props);
    return resource.getResponseField('graphqlApi.lambdaAuthorizerConfig.authorizerUri') as unknown as string;
  }

  public get identityValidationExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.GetGraphqlApi.graphqlApi.lambdaAuthorizerConfig.identityValidationExpression'),
        outputPath: 'graphqlApi.lambdaAuthorizerConfig.identityValidationExpression',
        parameters: {
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGraphqlApi.graphqlApi.lambdaAuthorizerConfig.identityValidationExpression', props);
    return resource.getResponseField('graphqlApi.lambdaAuthorizerConfig.identityValidationExpression') as unknown as string;
  }

}

export class AppSyncResponsesFetchIntrospectionSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetIntrospectionSchemaRequest) {
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
          apiId: this.__input.apiId,
          format: this.__input.format,
          includeDirectives: this.__input.includeDirectives,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntrospectionSchema.schema', props);
    return resource.getResponseField('schema') as unknown as any;
  }

}

export class AppSyncResponsesFetchResolver {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetResolverRequest) {
  }

  public get resolver(): AppSyncResponsesFetchResolverResolver {
    return new AppSyncResponsesFetchResolverResolver(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchResolverResolver {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.typeName', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.fieldName', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.dataSourceName', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.resolverArn', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.requestMappingTemplate', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.responseMappingTemplate', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.kind', props);
    return resource.getResponseField('resolver.kind') as unknown as string;
  }

  public get pipelineConfig(): AppSyncResponsesFetchResolverResolverPipelineConfig {
    return new AppSyncResponsesFetchResolverResolverPipelineConfig(this.__scope, this.__resources, this.__input);
  }

  public get syncConfig(): AppSyncResponsesFetchResolverResolverSyncConfig {
    return new AppSyncResponsesFetchResolverResolverSyncConfig(this.__scope, this.__resources, this.__input);
  }

  public get cachingConfig(): AppSyncResponsesFetchResolverResolverCachingConfig {
    return new AppSyncResponsesFetchResolverResolverCachingConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchResolverResolverPipelineConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.pipelineConfig.functions', props);
    return resource.getResponseField('resolver.pipelineConfig.functions') as unknown as string[];
  }

}

export class AppSyncResponsesFetchResolverResolverSyncConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.syncConfig.conflictHandler', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.syncConfig.conflictDetection', props);
    return resource.getResponseField('resolver.syncConfig.conflictDetection') as unknown as string;
  }

  public get lambdaConflictHandlerConfig(): AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig {
    return new AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn', props);
    return resource.getResponseField('resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn') as unknown as string;
  }

}

export class AppSyncResponsesFetchResolverResolverCachingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.cachingConfig.ttl', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolver.resolver.cachingConfig.cachingKeys', props);
    return resource.getResponseField('resolver.cachingConfig.cachingKeys') as unknown as string[];
  }

}

export class AppSyncResponsesFetchSchemaCreationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetSchemaCreationStatusRequest) {
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaCreationStatus.status', props);
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
          apiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaCreationStatus.details', props);
    return resource.getResponseField('details') as unknown as string;
  }

}

export class AppSyncResponsesFetchType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetTypeRequest) {
  }

  public get type(): AppSyncResponsesFetchTypeType {
    return new AppSyncResponsesFetchTypeType(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesFetchTypeType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncGetTypeRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetType.type.name', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetType.type.description', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetType.type.arn', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetType.type.definition', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetType.type.format', props);
    return resource.getResponseField('type.format') as unknown as string;
  }

}

export class AppSyncResponsesListApiKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncListApiKeysRequest) {
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
          apiId: this.__input.apiId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApiKeys.apiKeys', props);
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
          apiId: this.__input.apiId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApiKeys.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncResponsesListDataSources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncListDataSourcesRequest) {
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
          apiId: this.__input.apiId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSources.dataSources', props);
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
          apiId: this.__input.apiId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncResponsesListFunctions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncListFunctionsRequest) {
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
          apiId: this.__input.apiId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctions.functions', props);
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
          apiId: this.__input.apiId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFunctions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncResponsesListGraphqlApis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncListGraphqlApisRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGraphqlApis.graphqlApis', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGraphqlApis.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncResponsesListResolvers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncListResolversRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolvers.resolvers', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolvers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncResponsesListResolversByFunction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncListResolversByFunctionRequest) {
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolversByFunction.resolvers', props);
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
          apiId: this.__input.apiId,
          functionId: this.__input.functionId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolversByFunction.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class AppSyncResponsesListTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncListTypesRequest) {
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
          apiId: this.__input.apiId,
          format: this.__input.format,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypes.types', props);
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
          apiId: this.__input.apiId,
          format: this.__input.format,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppSyncResponsesStartSchemaCreation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncStartSchemaCreationRequest) {
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
          apiId: this.__input.apiId,
          definition: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSchemaCreation.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class AppSyncResponsesUpdateApiCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateApiCacheRequest) {
  }

  public get apiCache(): AppSyncResponsesUpdateApiCacheApiCache {
    return new AppSyncResponsesUpdateApiCacheApiCache(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateApiCacheApiCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateApiCacheRequest) {
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiCache.apiCache.ttl', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiCache.apiCache.apiCachingBehavior', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiCache.apiCache.transitEncryptionEnabled', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiCache.apiCache.atRestEncryptionEnabled', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiCache.apiCache.type', props);
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
          apiId: this.__input.apiId,
          ttl: this.__input.ttl,
          apiCachingBehavior: this.__input.apiCachingBehavior,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiCache.apiCache.status', props);
    return resource.getResponseField('apiCache.status') as unknown as string;
  }

}

export class AppSyncResponsesUpdateApiKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateApiKeyRequest) {
  }

  public get apiKey(): AppSyncResponsesUpdateApiKeyApiKey {
    return new AppSyncResponsesUpdateApiKeyApiKey(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateApiKeyApiKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateApiKeyRequest) {
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
          apiId: this.__input.apiId,
          id: this.__input.id,
          description: this.__input.description,
          expires: this.__input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.apiKey.id', props);
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
          apiId: this.__input.apiId,
          id: this.__input.id,
          description: this.__input.description,
          expires: this.__input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.apiKey.description', props);
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
          apiId: this.__input.apiId,
          id: this.__input.id,
          description: this.__input.description,
          expires: this.__input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.apiKey.expires', props);
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
          apiId: this.__input.apiId,
          id: this.__input.id,
          description: this.__input.description,
          expires: this.__input.expires,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.apiKey.deletes', props);
    return resource.getResponseField('apiKey.deletes') as unknown as number;
  }

}

export class AppSyncResponsesUpdateDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
  }

  public get dataSource(): AppSyncResponsesUpdateDataSourceDataSource {
    return new AppSyncResponsesUpdateDataSourceDataSource(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateDataSourceDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.dataSourceArn', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.name', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.description', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.type', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.serviceRoleArn', props);
    return resource.getResponseField('dataSource.serviceRoleArn') as unknown as string;
  }

  public get dynamodbConfig(): AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig {
    return new AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig(this.__scope, this.__resources, this.__input);
  }

  public get lambdaConfig(): AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig {
    return new AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig(this.__scope, this.__resources, this.__input);
  }

  public get elasticsearchConfig(): AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig {
    return new AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig(this.__scope, this.__resources, this.__input);
  }

  public get httpConfig(): AppSyncResponsesUpdateDataSourceDataSourceHttpConfig {
    return new AppSyncResponsesUpdateDataSourceDataSourceHttpConfig(this.__scope, this.__resources, this.__input);
  }

  public get relationalDatabaseConfig(): AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig {
    return new AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.dynamodbConfig.tableName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.dynamodbConfig.awsRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.dynamodbConfig.useCallerCredentials', props);
    return resource.getResponseField('dataSource.dynamodbConfig.useCallerCredentials') as unknown as boolean;
  }

  public get deltaSyncConfig(): AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig {
    return new AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig(this.__scope, this.__resources, this.__input);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.dynamodbConfig.versioned', props);
    return resource.getResponseField('dataSource.dynamodbConfig.versioned') as unknown as boolean;
  }

}

export class AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.baseTableTTL', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL', props);
    return resource.getResponseField('dataSource.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL') as unknown as number;
  }

}

export class AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.lambdaConfig.lambdaFunctionArn', props);
    return resource.getResponseField('dataSource.lambdaConfig.lambdaFunctionArn') as unknown as string;
  }

}

export class AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.elasticsearchConfig.endpoint', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.elasticsearchConfig.awsRegion', props);
    return resource.getResponseField('dataSource.elasticsearchConfig.awsRegion') as unknown as string;
  }

}

export class AppSyncResponsesUpdateDataSourceDataSourceHttpConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.httpConfig.endpoint', props);
    return resource.getResponseField('dataSource.httpConfig.endpoint') as unknown as string;
  }

  public get authorizationConfig(): AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig {
    return new AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.httpConfig.authorizationConfig.authorizationType', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.authorizationType') as unknown as string;
  }

  public get awsIamConfig(): AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig {
    return new AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName', props);
    return resource.getResponseField('dataSource.httpConfig.authorizationConfig.awsIamConfig.signingServiceName') as unknown as string;
  }

}

export class AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.relationalDatabaseConfig.relationalDatabaseSourceType', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.relationalDatabaseSourceType') as unknown as string;
  }

  public get rdsHttpEndpointConfig(): AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {
    return new AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateDataSourceRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.schema', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          serviceRoleArn: this.__input.serviceRoleArn,
          dynamodbConfig: {
            tableName: this.__input.dynamodbConfig?.tableName,
            awsRegion: this.__input.dynamodbConfig?.awsRegion,
            useCallerCredentials: this.__input.dynamodbConfig?.useCallerCredentials,
            deltaSyncConfig: {
              baseTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.baseTableTTL,
              deltaSyncTableName: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableName,
              deltaSyncTableTTL: this.__input.dynamodbConfig?.deltaSyncConfig?.deltaSyncTableTTL,
            },
            versioned: this.__input.dynamodbConfig?.versioned,
          },
          lambdaConfig: {
            lambdaFunctionArn: this.__input.lambdaConfig?.lambdaFunctionArn,
          },
          elasticsearchConfig: {
            endpoint: this.__input.elasticsearchConfig?.endpoint,
            awsRegion: this.__input.elasticsearchConfig?.awsRegion,
          },
          httpConfig: {
            endpoint: this.__input.httpConfig?.endpoint,
            authorizationConfig: {
              authorizationType: this.__input.httpConfig?.authorizationConfig?.authorizationType,
              awsIamConfig: {
                signingRegion: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingRegion,
                signingServiceName: this.__input.httpConfig?.authorizationConfig?.awsIamConfig?.signingServiceName,
              },
            },
          },
          relationalDatabaseConfig: {
            relationalDatabaseSourceType: this.__input.relationalDatabaseConfig?.relationalDatabaseSourceType,
            rdsHttpEndpointConfig: {
              awsRegion: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsRegion,
              dbClusterIdentifier: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.dbClusterIdentifier,
              databaseName: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.databaseName,
              schema: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.schema,
              awsSecretStoreArn: this.__input.relationalDatabaseConfig?.rdsHttpEndpointConfig?.awsSecretStoreArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn', props);
    return resource.getResponseField('dataSource.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn') as unknown as string;
  }

}

export class AppSyncResponsesUpdateFunction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateFunctionRequest) {
  }

  public get functionConfiguration(): AppSyncResponsesUpdateFunctionFunctionConfiguration {
    return new AppSyncResponsesUpdateFunctionFunctionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateFunctionFunctionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateFunctionRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.functionId', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.functionArn', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.name', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.description', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.dataSourceName', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.requestMappingTemplate', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.responseMappingTemplate', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.functionVersion', props);
    return resource.getResponseField('functionConfiguration.functionVersion') as unknown as string;
  }

  public get syncConfig(): AppSyncResponsesUpdateFunctionFunctionConfigurationSyncConfig {
    return new AppSyncResponsesUpdateFunctionFunctionConfigurationSyncConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateFunctionFunctionConfigurationSyncConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateFunctionRequest) {
  }

  public get conflictHandler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.syncConfig.conflictHandler'),
        outputPath: 'functionConfiguration.syncConfig.conflictHandler',
        parameters: {
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.syncConfig.conflictHandler', props);
    return resource.getResponseField('functionConfiguration.syncConfig.conflictHandler') as unknown as string;
  }

  public get conflictDetection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.syncConfig.conflictDetection'),
        outputPath: 'functionConfiguration.syncConfig.conflictDetection',
        parameters: {
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.syncConfig.conflictDetection', props);
    return resource.getResponseField('functionConfiguration.syncConfig.conflictDetection') as unknown as string;
  }

  public get lambdaConflictHandlerConfig(): AppSyncResponsesUpdateFunctionFunctionConfigurationSyncConfigLambdaConflictHandlerConfig {
    return new AppSyncResponsesUpdateFunctionFunctionConfigurationSyncConfigLambdaConflictHandlerConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateFunctionFunctionConfigurationSyncConfigLambdaConflictHandlerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateFunctionRequest) {
  }

  public get lambdaConflictHandlerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFunction',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateFunction.functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn'),
        outputPath: 'functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn',
        parameters: {
          apiId: this.__input.apiId,
          name: this.__input.name,
          description: this.__input.description,
          functionId: this.__input.functionId,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          functionVersion: this.__input.functionVersion,
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFunction.functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn', props);
    return resource.getResponseField('functionConfiguration.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn') as unknown as string;
  }

}

export class AppSyncResponsesUpdateGraphqlApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateGraphqlApiRequest) {
  }

  public get graphqlApi(): AppSyncResponsesUpdateGraphqlApiGraphqlApi {
    return new AppSyncResponsesUpdateGraphqlApiGraphqlApi(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateGraphqlApiGraphqlApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateGraphqlApiRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.name', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.apiId', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.authenticationType', props);
    return resource.getResponseField('graphqlApi.authenticationType') as unknown as string;
  }

  public get logConfig(): AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig {
    return new AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig(this.__scope, this.__resources, this.__input);
  }

  public get userPoolConfig(): AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig {
    return new AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig(this.__scope, this.__resources, this.__input);
  }

  public get openIdConnectConfig(): AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig {
    return new AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig(this.__scope, this.__resources, this.__input);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.arn', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.uris', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.tags', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.additionalAuthenticationProviders', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.xrayEnabled', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.wafWebAclArn', props);
    return resource.getResponseField('graphqlApi.wafWebAclArn') as unknown as string;
  }

  public get lambdaAuthorizerConfig(): AppSyncResponsesUpdateGraphqlApiGraphqlApiLambdaAuthorizerConfig {
    return new AppSyncResponsesUpdateGraphqlApiGraphqlApiLambdaAuthorizerConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateGraphqlApiRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.logConfig.fieldLogLevel', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.logConfig.cloudWatchLogsRoleArn', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.logConfig.excludeVerboseContent', props);
    return resource.getResponseField('graphqlApi.logConfig.excludeVerboseContent') as unknown as boolean;
  }

}

export class AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateGraphqlApiRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.userPoolConfig.userPoolId', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.userPoolConfig.awsRegion', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.userPoolConfig.defaultAction', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.userPoolConfig.appIdClientRegex', props);
    return resource.getResponseField('graphqlApi.userPoolConfig.appIdClientRegex') as unknown as string;
  }

}

export class AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateGraphqlApiRequest) {
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.openIDConnectConfig.issuer', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.openIDConnectConfig.clientId', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.openIDConnectConfig.iatTTL', props);
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
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.openIDConnectConfig.authTTL', props);
    return resource.getResponseField('graphqlApi.openIDConnectConfig.authTTL') as unknown as number;
  }

}

export class AppSyncResponsesUpdateGraphqlApiGraphqlApiLambdaAuthorizerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateGraphqlApiRequest) {
  }

  public get authorizerResultTtlInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds'),
        outputPath: 'graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds',
        parameters: {
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds', props);
    return resource.getResponseField('graphqlApi.lambdaAuthorizerConfig.authorizerResultTtlInSeconds') as unknown as number;
  }

  public get authorizerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerUri'),
        outputPath: 'graphqlApi.lambdaAuthorizerConfig.authorizerUri',
        parameters: {
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.authorizerUri', props);
    return resource.getResponseField('graphqlApi.lambdaAuthorizerConfig.authorizerUri') as unknown as string;
  }

  public get identityValidationExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGraphqlApi',
        service: 'AppSync',
        physicalResourceId: cr.PhysicalResourceId.of('AppSync.UpdateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.identityValidationExpression'),
        outputPath: 'graphqlApi.lambdaAuthorizerConfig.identityValidationExpression',
        parameters: {
          apiId: this.__input.apiId,
          name: this.__input.name,
          logConfig: {
            fieldLogLevel: this.__input.logConfig?.fieldLogLevel,
            cloudWatchLogsRoleArn: this.__input.logConfig?.cloudWatchLogsRoleArn,
            excludeVerboseContent: this.__input.logConfig?.excludeVerboseContent,
          },
          authenticationType: this.__input.authenticationType,
          userPoolConfig: {
            userPoolId: this.__input.userPoolConfig?.userPoolId,
            awsRegion: this.__input.userPoolConfig?.awsRegion,
            defaultAction: this.__input.userPoolConfig?.defaultAction,
            appIdClientRegex: this.__input.userPoolConfig?.appIdClientRegex,
          },
          openIDConnectConfig: {
            issuer: this.__input.openIDConnectConfig?.issuer,
            clientId: this.__input.openIDConnectConfig?.clientId,
            iatTTL: this.__input.openIDConnectConfig?.iatTTL,
            authTTL: this.__input.openIDConnectConfig?.authTTL,
          },
          additionalAuthenticationProviders: this.__input.additionalAuthenticationProviders,
          xrayEnabled: this.__input.xrayEnabled,
          lambdaAuthorizerConfig: {
            authorizerResultTtlInSeconds: this.__input.lambdaAuthorizerConfig?.authorizerResultTtlInSeconds,
            authorizerUri: this.__input.lambdaAuthorizerConfig?.authorizerUri,
            identityValidationExpression: this.__input.lambdaAuthorizerConfig?.identityValidationExpression,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGraphqlApi.graphqlApi.lambdaAuthorizerConfig.identityValidationExpression', props);
    return resource.getResponseField('graphqlApi.lambdaAuthorizerConfig.identityValidationExpression') as unknown as string;
  }

}

export class AppSyncResponsesUpdateResolver {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateResolverRequest) {
  }

  public get resolver(): AppSyncResponsesUpdateResolverResolver {
    return new AppSyncResponsesUpdateResolverResolver(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateResolverResolver {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.typeName', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.fieldName', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.dataSourceName', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.resolverArn', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.requestMappingTemplate', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.responseMappingTemplate', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.kind', props);
    return resource.getResponseField('resolver.kind') as unknown as string;
  }

  public get pipelineConfig(): AppSyncResponsesUpdateResolverResolverPipelineConfig {
    return new AppSyncResponsesUpdateResolverResolverPipelineConfig(this.__scope, this.__resources, this.__input);
  }

  public get syncConfig(): AppSyncResponsesUpdateResolverResolverSyncConfig {
    return new AppSyncResponsesUpdateResolverResolverSyncConfig(this.__scope, this.__resources, this.__input);
  }

  public get cachingConfig(): AppSyncResponsesUpdateResolverResolverCachingConfig {
    return new AppSyncResponsesUpdateResolverResolverCachingConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateResolverResolverPipelineConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.pipelineConfig.functions', props);
    return resource.getResponseField('resolver.pipelineConfig.functions') as unknown as string[];
  }

}

export class AppSyncResponsesUpdateResolverResolverSyncConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.syncConfig.conflictHandler', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.syncConfig.conflictDetection', props);
    return resource.getResponseField('resolver.syncConfig.conflictDetection') as unknown as string;
  }

  public get lambdaConflictHandlerConfig(): AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig {
    return new AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn', props);
    return resource.getResponseField('resolver.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn') as unknown as string;
  }

}

export class AppSyncResponsesUpdateResolverResolverCachingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateResolverRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.cachingConfig.ttl', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          fieldName: this.__input.fieldName,
          dataSourceName: this.__input.dataSourceName,
          requestMappingTemplate: this.__input.requestMappingTemplate,
          responseMappingTemplate: this.__input.responseMappingTemplate,
          kind: this.__input.kind,
          pipelineConfig: {
            functions: this.__input.pipelineConfig?.functions,
          },
          syncConfig: {
            conflictHandler: this.__input.syncConfig?.conflictHandler,
            conflictDetection: this.__input.syncConfig?.conflictDetection,
            lambdaConflictHandlerConfig: {
              lambdaConflictHandlerArn: this.__input.syncConfig?.lambdaConflictHandlerConfig?.lambdaConflictHandlerArn,
            },
          },
          cachingConfig: {
            ttl: this.__input.cachingConfig?.ttl,
            cachingKeys: this.__input.cachingConfig?.cachingKeys,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolver.resolver.cachingConfig.cachingKeys', props);
    return resource.getResponseField('resolver.cachingConfig.cachingKeys') as unknown as string[];
  }

}

export class AppSyncResponsesUpdateType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateTypeRequest) {
  }

  public get type(): AppSyncResponsesUpdateTypeType {
    return new AppSyncResponsesUpdateTypeType(this.__scope, this.__resources, this.__input);
  }

}

export class AppSyncResponsesUpdateTypeType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppSyncUpdateTypeRequest) {
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateType.type.name', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateType.type.description', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateType.type.arn', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateType.type.definition', props);
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
          apiId: this.__input.apiId,
          typeName: this.__input.typeName,
          definition: this.__input.definition,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateType.type.format', props);
    return resource.getResponseField('type.format') as unknown as string;
  }

}

