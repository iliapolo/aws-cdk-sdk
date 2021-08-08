# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AppSyncClient <a name="aws-cdk-sdk.appsync.AppSyncClient"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncClient.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createApiCache` <a name="aws-cdk-sdk.appsync.AppSyncClient.createApiCache"></a>

```typescript
public createApiCache(input: AppSyncCreateApiCacheRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest)

---

##### `createApiKey` <a name="aws-cdk-sdk.appsync.AppSyncClient.createApiKey"></a>

```typescript
public createApiKey(input: AppSyncCreateApiKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest`](#aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest)

---

##### `createDataSource` <a name="aws-cdk-sdk.appsync.AppSyncClient.createDataSource"></a>

```typescript
public createDataSource(input: AppSyncCreateDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---

##### `createFunction` <a name="aws-cdk-sdk.appsync.AppSyncClient.createFunction"></a>

```typescript
public createFunction(input: AppSyncCreateFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest)

---

##### `createGraphqlApi` <a name="aws-cdk-sdk.appsync.AppSyncClient.createGraphqlApi"></a>

```typescript
public createGraphqlApi(input: AppSyncCreateGraphqlApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest)

---

##### `createResolver` <a name="aws-cdk-sdk.appsync.AppSyncClient.createResolver"></a>

```typescript
public createResolver(input: AppSyncCreateResolverRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncCreateResolverRequest)

---

##### `createType` <a name="aws-cdk-sdk.appsync.AppSyncClient.createType"></a>

```typescript
public createType(input: AppSyncCreateTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateTypeRequest`](#aws-cdk-sdk.appsync.AppSyncCreateTypeRequest)

---

##### `deleteApiCache` <a name="aws-cdk-sdk.appsync.AppSyncClient.deleteApiCache"></a>

```typescript
public deleteApiCache(input: AppSyncDeleteApiCacheRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDeleteApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncDeleteApiCacheRequest)

---

##### `deleteApiKey` <a name="aws-cdk-sdk.appsync.AppSyncClient.deleteApiKey"></a>

```typescript
public deleteApiKey(input: AppSyncDeleteApiKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDeleteApiKeyRequest`](#aws-cdk-sdk.appsync.AppSyncDeleteApiKeyRequest)

---

##### `deleteDataSource` <a name="aws-cdk-sdk.appsync.AppSyncClient.deleteDataSource"></a>

```typescript
public deleteDataSource(input: AppSyncDeleteDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDeleteDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncDeleteDataSourceRequest)

---

##### `deleteFunction` <a name="aws-cdk-sdk.appsync.AppSyncClient.deleteFunction"></a>

```typescript
public deleteFunction(input: AppSyncDeleteFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDeleteFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncDeleteFunctionRequest)

---

##### `deleteGraphqlApi` <a name="aws-cdk-sdk.appsync.AppSyncClient.deleteGraphqlApi"></a>

```typescript
public deleteGraphqlApi(input: AppSyncDeleteGraphqlApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDeleteGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncDeleteGraphqlApiRequest)

---

##### `deleteResolver` <a name="aws-cdk-sdk.appsync.AppSyncClient.deleteResolver"></a>

```typescript
public deleteResolver(input: AppSyncDeleteResolverRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDeleteResolverRequest`](#aws-cdk-sdk.appsync.AppSyncDeleteResolverRequest)

---

##### `deleteType` <a name="aws-cdk-sdk.appsync.AppSyncClient.deleteType"></a>

```typescript
public deleteType(input: AppSyncDeleteTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDeleteTypeRequest`](#aws-cdk-sdk.appsync.AppSyncDeleteTypeRequest)

---

##### `fetchApiCache` <a name="aws-cdk-sdk.appsync.AppSyncClient.fetchApiCache"></a>

```typescript
public fetchApiCache(input: AppSyncGetApiCacheRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncGetApiCacheRequest)

---

##### `fetchDataSource` <a name="aws-cdk-sdk.appsync.AppSyncClient.fetchDataSource"></a>

```typescript
public fetchDataSource(input: AppSyncGetDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---

##### `fetchFunction` <a name="aws-cdk-sdk.appsync.AppSyncClient.fetchFunction"></a>

```typescript
public fetchFunction(input: AppSyncGetFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncGetFunctionRequest)

---

##### `fetchGraphqlApi` <a name="aws-cdk-sdk.appsync.AppSyncClient.fetchGraphqlApi"></a>

```typescript
public fetchGraphqlApi(input: AppSyncGetGraphqlApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest)

---

##### `fetchIntrospectionSchema` <a name="aws-cdk-sdk.appsync.AppSyncClient.fetchIntrospectionSchema"></a>

```typescript
public fetchIntrospectionSchema(input: AppSyncGetIntrospectionSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaRequest`](#aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaRequest)

---

##### `fetchResolver` <a name="aws-cdk-sdk.appsync.AppSyncClient.fetchResolver"></a>

```typescript
public fetchResolver(input: AppSyncGetResolverRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetResolverRequest`](#aws-cdk-sdk.appsync.AppSyncGetResolverRequest)

---

##### `fetchSchemaCreationStatus` <a name="aws-cdk-sdk.appsync.AppSyncClient.fetchSchemaCreationStatus"></a>

```typescript
public fetchSchemaCreationStatus(input: AppSyncGetSchemaCreationStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetSchemaCreationStatusRequest`](#aws-cdk-sdk.appsync.AppSyncGetSchemaCreationStatusRequest)

---

##### `fetchType` <a name="aws-cdk-sdk.appsync.AppSyncClient.fetchType"></a>

```typescript
public fetchType(input: AppSyncGetTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetTypeRequest`](#aws-cdk-sdk.appsync.AppSyncGetTypeRequest)

---

##### `flushApiCache` <a name="aws-cdk-sdk.appsync.AppSyncClient.flushApiCache"></a>

```typescript
public flushApiCache(input: AppSyncFlushApiCacheRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncFlushApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncFlushApiCacheRequest)

---

##### `listApiKeys` <a name="aws-cdk-sdk.appsync.AppSyncClient.listApiKeys"></a>

```typescript
public listApiKeys(input: AppSyncListApiKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListApiKeysRequest`](#aws-cdk-sdk.appsync.AppSyncListApiKeysRequest)

---

##### `listDataSources` <a name="aws-cdk-sdk.appsync.AppSyncClient.listDataSources"></a>

```typescript
public listDataSources(input: AppSyncListDataSourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListDataSourcesRequest`](#aws-cdk-sdk.appsync.AppSyncListDataSourcesRequest)

---

##### `listFunctions` <a name="aws-cdk-sdk.appsync.AppSyncClient.listFunctions"></a>

```typescript
public listFunctions(input: AppSyncListFunctionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListFunctionsRequest`](#aws-cdk-sdk.appsync.AppSyncListFunctionsRequest)

---

##### `listGraphqlApis` <a name="aws-cdk-sdk.appsync.AppSyncClient.listGraphqlApis"></a>

```typescript
public listGraphqlApis(input: AppSyncListGraphqlApisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListGraphqlApisRequest`](#aws-cdk-sdk.appsync.AppSyncListGraphqlApisRequest)

---

##### `listResolvers` <a name="aws-cdk-sdk.appsync.AppSyncClient.listResolvers"></a>

```typescript
public listResolvers(input: AppSyncListResolversRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListResolversRequest`](#aws-cdk-sdk.appsync.AppSyncListResolversRequest)

---

##### `listResolversByFunction` <a name="aws-cdk-sdk.appsync.AppSyncClient.listResolversByFunction"></a>

```typescript
public listResolversByFunction(input: AppSyncListResolversByFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListResolversByFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncListResolversByFunctionRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.appsync.AppSyncClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: AppSyncListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListTagsForResourceRequest`](#aws-cdk-sdk.appsync.AppSyncListTagsForResourceRequest)

---

##### `listTypes` <a name="aws-cdk-sdk.appsync.AppSyncClient.listTypes"></a>

```typescript
public listTypes(input: AppSyncListTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListTypesRequest`](#aws-cdk-sdk.appsync.AppSyncListTypesRequest)

---

##### `startSchemaCreation` <a name="aws-cdk-sdk.appsync.AppSyncClient.startSchemaCreation"></a>

```typescript
public startSchemaCreation(input: AppSyncStartSchemaCreationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncStartSchemaCreationRequest`](#aws-cdk-sdk.appsync.AppSyncStartSchemaCreationRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.appsync.AppSyncClient.tagResource"></a>

```typescript
public tagResource(input: AppSyncTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncTagResourceRequest`](#aws-cdk-sdk.appsync.AppSyncTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.appsync.AppSyncClient.untagResource"></a>

```typescript
public untagResource(input: AppSyncUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUntagResourceRequest`](#aws-cdk-sdk.appsync.AppSyncUntagResourceRequest)

---

##### `updateApiCache` <a name="aws-cdk-sdk.appsync.AppSyncClient.updateApiCache"></a>

```typescript
public updateApiCache(input: AppSyncUpdateApiCacheRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest)

---

##### `updateApiKey` <a name="aws-cdk-sdk.appsync.AppSyncClient.updateApiKey"></a>

```typescript
public updateApiKey(input: AppSyncUpdateApiKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest)

---

##### `updateDataSource` <a name="aws-cdk-sdk.appsync.AppSyncClient.updateDataSource"></a>

```typescript
public updateDataSource(input: AppSyncUpdateDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---

##### `updateFunction` <a name="aws-cdk-sdk.appsync.AppSyncClient.updateFunction"></a>

```typescript
public updateFunction(input: AppSyncUpdateFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest)

---

##### `updateGraphqlApi` <a name="aws-cdk-sdk.appsync.AppSyncClient.updateGraphqlApi"></a>

```typescript
public updateGraphqlApi(input: AppSyncUpdateGraphqlApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest)

---

##### `updateResolver` <a name="aws-cdk-sdk.appsync.AppSyncClient.updateResolver"></a>

```typescript
public updateResolver(input: AppSyncUpdateResolverRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest)

---

##### `updateType` <a name="aws-cdk-sdk.appsync.AppSyncClient.updateType"></a>

```typescript
public updateType(input: AppSyncUpdateTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest)

---




## Structs <a name="Structs"></a>

### AppSyncAdditionalAuthenticationProvider <a name="aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncAdditionalAuthenticationProvider: appsync.AppSyncAdditionalAuthenticationProvider = { ... }
```

##### `authenticationType`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider.property.authenticationType"></a>

- *Type:* `string`

---

##### `openIDConnectConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider.property.openIDConnectConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig`](#aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig)

---

##### `userPoolConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider.property.userPoolConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCognitoUserPoolConfig`](#aws-cdk-sdk.appsync.AppSyncCognitoUserPoolConfig)

---

### AppSyncApiCache <a name="aws-cdk-sdk.appsync.AppSyncApiCache"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncApiCache: appsync.AppSyncApiCache = { ... }
```

##### `apiCachingBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiCache.property.apiCachingBehavior"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiCache.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiCache.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiCache.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `ttl`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiCache.property.ttl"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiCache.property.type"></a>

- *Type:* `string`

---

### AppSyncApiKey <a name="aws-cdk-sdk.appsync.AppSyncApiKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncApiKey: appsync.AppSyncApiKey = { ... }
```

##### `deletes`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiKey.property.deletes"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiKey.property.description"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiKey.property.expires"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncApiKey.property.id"></a>

- *Type:* `string`

---

### AppSyncAuthorizationConfig <a name="aws-cdk-sdk.appsync.AppSyncAuthorizationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncAuthorizationConfig: appsync.AppSyncAuthorizationConfig = { ... }
```

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncAuthorizationConfig.property.authorizationType"></a>

- *Type:* `string`

---

##### `awsIamConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncAuthorizationConfig.property.awsIamConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncAwsIamConfig`](#aws-cdk-sdk.appsync.AppSyncAwsIamConfig)

---

### AppSyncAwsIamConfig <a name="aws-cdk-sdk.appsync.AppSyncAwsIamConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncAwsIamConfig: appsync.AppSyncAwsIamConfig = { ... }
```

##### `signingRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncAwsIamConfig.property.signingRegion"></a>

- *Type:* `string`

---

##### `signingServiceName`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncAwsIamConfig.property.signingServiceName"></a>

- *Type:* `string`

---

### AppSyncCachingConfig <a name="aws-cdk-sdk.appsync.AppSyncCachingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCachingConfig: appsync.AppSyncCachingConfig = { ... }
```

##### `cachingKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCachingConfig.property.cachingKeys"></a>

- *Type:* `string`[]

---

##### `ttl`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCachingConfig.property.ttl"></a>

- *Type:* `number`

---

### AppSyncCognitoUserPoolConfig <a name="aws-cdk-sdk.appsync.AppSyncCognitoUserPoolConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCognitoUserPoolConfig: appsync.AppSyncCognitoUserPoolConfig = { ... }
```

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCognitoUserPoolConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCognitoUserPoolConfig.property.userPoolId"></a>

- *Type:* `string`

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCognitoUserPoolConfig.property.appIdClientRegex"></a>

- *Type:* `string`

---

### AppSyncCreateApiCacheRequest <a name="aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateApiCacheRequest: appsync.AppSyncCreateApiCacheRequest = { ... }
```

##### `apiCachingBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest.property.apiCachingBehavior"></a>

- *Type:* `string`

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest.property.apiId"></a>

- *Type:* `string`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest.property.ttl"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest.property.type"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

### AppSyncCreateApiCacheResponse <a name="aws-cdk-sdk.appsync.AppSyncCreateApiCacheResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateApiCacheResponse: appsync.AppSyncCreateApiCacheResponse = { ... }
```

##### `apiCache`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiCacheResponse.property.apiCache"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncApiCache`](#aws-cdk-sdk.appsync.AppSyncApiCache)

---

### AppSyncCreateApiKeyRequest <a name="aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateApiKeyRequest: appsync.AppSyncCreateApiKeyRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest.property.apiId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest.property.description"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest.property.expires"></a>

- *Type:* `number`

---

### AppSyncCreateApiKeyResponse <a name="aws-cdk-sdk.appsync.AppSyncCreateApiKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateApiKeyResponse: appsync.AppSyncCreateApiKeyResponse = { ... }
```

##### `apiKey`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateApiKeyResponse.property.apiKey"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncApiKey`](#aws-cdk-sdk.appsync.AppSyncApiKey)

---

### AppSyncCreateDataSourceRequest <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateDataSourceRequest: appsync.AppSyncCreateDataSourceRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.apiId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.description"></a>

- *Type:* `string`

---

##### `dynamodbConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.dynamodbConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig)

---

##### `elasticsearchConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.elasticsearchConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncElasticsearchDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncElasticsearchDataSourceConfig)

---

##### `httpConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.httpConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncHttpDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncHttpDataSourceConfig)

---

##### `lambdaConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.lambdaConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncLambdaDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncLambdaDataSourceConfig)

---

##### `relationalDatabaseConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.relationalDatabaseConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncRelationalDatabaseDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncRelationalDatabaseDataSourceConfig)

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest.property.serviceRoleArn"></a>

- *Type:* `string`

---

### AppSyncCreateDataSourceResponse <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateDataSourceResponse: appsync.AppSyncCreateDataSourceResponse = { ... }
```

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateDataSourceResponse.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDataSource`](#aws-cdk-sdk.appsync.AppSyncDataSource)

---

### AppSyncCreateFunctionRequest <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateFunctionRequest: appsync.AppSyncCreateFunctionRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest.property.apiId"></a>

- *Type:* `string`

---

##### `dataSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest.property.dataSourceName"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest.property.description"></a>

- *Type:* `string`

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest.property.responseMappingTemplate"></a>

- *Type:* `string`

---

### AppSyncCreateFunctionResponse <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateFunctionResponse: appsync.AppSyncCreateFunctionResponse = { ... }
```

##### `functionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateFunctionResponse.property.functionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncFunctionConfiguration`](#aws-cdk-sdk.appsync.AppSyncFunctionConfiguration)

---

### AppSyncCreateGraphqlApiRequest <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateGraphqlApiRequest: appsync.AppSyncCreateGraphqlApiRequest = { ... }
```

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest.property.authenticationType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest.property.name"></a>

- *Type:* `string`

---

##### `additionalAuthenticationProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest.property.additionalAuthenticationProviders"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider`](#aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider)[]

---

##### `logConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncLogConfig`](#aws-cdk-sdk.appsync.AppSyncLogConfig)

---

##### `openIDConnectConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest.property.openIDConnectConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig`](#aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userPoolConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest.property.userPoolConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUserPoolConfig`](#aws-cdk-sdk.appsync.AppSyncUserPoolConfig)

---

##### `xrayEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest.property.xrayEnabled"></a>

- *Type:* `boolean`

---

### AppSyncCreateGraphqlApiResponse <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateGraphqlApiResponse: appsync.AppSyncCreateGraphqlApiResponse = { ... }
```

##### `graphqlApi`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiResponse.property.graphqlApi"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGraphqlApi`](#aws-cdk-sdk.appsync.AppSyncGraphqlApi)

---

### AppSyncCreateResolverRequest <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateResolverRequest: appsync.AppSyncCreateResolverRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.apiId"></a>

- *Type:* `string`

---

##### `fieldName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.fieldName"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.typeName"></a>

- *Type:* `string`

---

##### `cachingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.cachingConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCachingConfig`](#aws-cdk-sdk.appsync.AppSyncCachingConfig)

---

##### `dataSourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.dataSourceName"></a>

- *Type:* `string`

---

##### `kind`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.kind"></a>

- *Type:* `string`

---

##### `pipelineConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.pipelineConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncPipelineConfig`](#aws-cdk-sdk.appsync.AppSyncPipelineConfig)

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.responseMappingTemplate"></a>

- *Type:* `string`

---

##### `syncConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverRequest.property.syncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncSyncConfig`](#aws-cdk-sdk.appsync.AppSyncSyncConfig)

---

### AppSyncCreateResolverResponse <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateResolverResponse: appsync.AppSyncCreateResolverResponse = { ... }
```

##### `resolver`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateResolverResponse.property.resolver"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResolver`](#aws-cdk-sdk.appsync.AppSyncResolver)

---

### AppSyncCreateTypeRequest <a name="aws-cdk-sdk.appsync.AppSyncCreateTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateTypeRequest: appsync.AppSyncCreateTypeRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateTypeRequest.property.apiId"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateTypeRequest.property.definition"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateTypeRequest.property.format"></a>

- *Type:* `string`

---

### AppSyncCreateTypeResponse <a name="aws-cdk-sdk.appsync.AppSyncCreateTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncCreateTypeResponse: appsync.AppSyncCreateTypeResponse = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncCreateTypeResponse.property.type"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncType`](#aws-cdk-sdk.appsync.AppSyncType)

---

### AppSyncDataSource <a name="aws-cdk-sdk.appsync.AppSyncDataSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDataSource: appsync.AppSyncDataSource = { ... }
```

##### `dataSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.description"></a>

- *Type:* `string`

---

##### `dynamodbConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.dynamodbConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig)

---

##### `elasticsearchConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.elasticsearchConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncElasticsearchDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncElasticsearchDataSourceConfig)

---

##### `httpConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.httpConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncHttpDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncHttpDataSourceConfig)

---

##### `lambdaConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.lambdaConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncLambdaDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncLambdaDataSourceConfig)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.name"></a>

- *Type:* `string`

---

##### `relationalDatabaseConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.relationalDatabaseConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncRelationalDatabaseDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncRelationalDatabaseDataSourceConfig)

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDataSource.property.type"></a>

- *Type:* `string`

---

### AppSyncDeleteApiCacheRequest <a name="aws-cdk-sdk.appsync.AppSyncDeleteApiCacheRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteApiCacheRequest: appsync.AppSyncDeleteApiCacheRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteApiCacheRequest.property.apiId"></a>

- *Type:* `string`

---

### AppSyncDeleteApiCacheResponse <a name="aws-cdk-sdk.appsync.AppSyncDeleteApiCacheResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteApiCacheResponse: appsync.AppSyncDeleteApiCacheResponse = { ... }
```

### AppSyncDeleteApiKeyRequest <a name="aws-cdk-sdk.appsync.AppSyncDeleteApiKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteApiKeyRequest: appsync.AppSyncDeleteApiKeyRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteApiKeyRequest.property.apiId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteApiKeyRequest.property.id"></a>

- *Type:* `string`

---

### AppSyncDeleteApiKeyResponse <a name="aws-cdk-sdk.appsync.AppSyncDeleteApiKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteApiKeyResponse: appsync.AppSyncDeleteApiKeyResponse = { ... }
```

### AppSyncDeleteDataSourceRequest <a name="aws-cdk-sdk.appsync.AppSyncDeleteDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteDataSourceRequest: appsync.AppSyncDeleteDataSourceRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteDataSourceRequest.property.apiId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteDataSourceRequest.property.name"></a>

- *Type:* `string`

---

### AppSyncDeleteDataSourceResponse <a name="aws-cdk-sdk.appsync.AppSyncDeleteDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteDataSourceResponse: appsync.AppSyncDeleteDataSourceResponse = { ... }
```

### AppSyncDeleteFunctionRequest <a name="aws-cdk-sdk.appsync.AppSyncDeleteFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteFunctionRequest: appsync.AppSyncDeleteFunctionRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteFunctionRequest.property.apiId"></a>

- *Type:* `string`

---

##### `functionId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteFunctionRequest.property.functionId"></a>

- *Type:* `string`

---

### AppSyncDeleteFunctionResponse <a name="aws-cdk-sdk.appsync.AppSyncDeleteFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteFunctionResponse: appsync.AppSyncDeleteFunctionResponse = { ... }
```

### AppSyncDeleteGraphqlApiRequest <a name="aws-cdk-sdk.appsync.AppSyncDeleteGraphqlApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteGraphqlApiRequest: appsync.AppSyncDeleteGraphqlApiRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteGraphqlApiRequest.property.apiId"></a>

- *Type:* `string`

---

### AppSyncDeleteGraphqlApiResponse <a name="aws-cdk-sdk.appsync.AppSyncDeleteGraphqlApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteGraphqlApiResponse: appsync.AppSyncDeleteGraphqlApiResponse = { ... }
```

### AppSyncDeleteResolverRequest <a name="aws-cdk-sdk.appsync.AppSyncDeleteResolverRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteResolverRequest: appsync.AppSyncDeleteResolverRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteResolverRequest.property.apiId"></a>

- *Type:* `string`

---

##### `fieldName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteResolverRequest.property.fieldName"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteResolverRequest.property.typeName"></a>

- *Type:* `string`

---

### AppSyncDeleteResolverResponse <a name="aws-cdk-sdk.appsync.AppSyncDeleteResolverResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteResolverResponse: appsync.AppSyncDeleteResolverResponse = { ... }
```

### AppSyncDeleteTypeRequest <a name="aws-cdk-sdk.appsync.AppSyncDeleteTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteTypeRequest: appsync.AppSyncDeleteTypeRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteTypeRequest.property.apiId"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeleteTypeRequest.property.typeName"></a>

- *Type:* `string`

---

### AppSyncDeleteTypeResponse <a name="aws-cdk-sdk.appsync.AppSyncDeleteTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeleteTypeResponse: appsync.AppSyncDeleteTypeResponse = { ... }
```

### AppSyncDeltaSyncConfig <a name="aws-cdk-sdk.appsync.AppSyncDeltaSyncConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDeltaSyncConfig: appsync.AppSyncDeltaSyncConfig = { ... }
```

##### `baseTableTTL`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeltaSyncConfig.property.baseTableTTL"></a>

- *Type:* `number`

---

##### `deltaSyncTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeltaSyncConfig.property.deltaSyncTableName"></a>

- *Type:* `string`

---

##### `deltaSyncTableTTL`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDeltaSyncConfig.property.deltaSyncTableTTL"></a>

- *Type:* `number`

---

### AppSyncDynamodbDataSourceConfig <a name="aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncDynamodbDataSourceConfig: appsync.AppSyncDynamodbDataSourceConfig = { ... }
```

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig.property.tableName"></a>

- *Type:* `string`

---

##### `deltaSyncConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig.property.deltaSyncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDeltaSyncConfig`](#aws-cdk-sdk.appsync.AppSyncDeltaSyncConfig)

---

##### `useCallerCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig.property.useCallerCredentials"></a>

- *Type:* `boolean`

---

##### `versioned`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig.property.versioned"></a>

- *Type:* `boolean`

---

### AppSyncElasticsearchDataSourceConfig <a name="aws-cdk-sdk.appsync.AppSyncElasticsearchDataSourceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncElasticsearchDataSourceConfig: appsync.AppSyncElasticsearchDataSourceConfig = { ... }
```

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncElasticsearchDataSourceConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncElasticsearchDataSourceConfig.property.endpoint"></a>

- *Type:* `string`

---

### AppSyncFlushApiCacheRequest <a name="aws-cdk-sdk.appsync.AppSyncFlushApiCacheRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncFlushApiCacheRequest: appsync.AppSyncFlushApiCacheRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncFlushApiCacheRequest.property.apiId"></a>

- *Type:* `string`

---

### AppSyncFlushApiCacheResponse <a name="aws-cdk-sdk.appsync.AppSyncFlushApiCacheResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncFlushApiCacheResponse: appsync.AppSyncFlushApiCacheResponse = { ... }
```

### AppSyncFunctionConfiguration <a name="aws-cdk-sdk.appsync.AppSyncFunctionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncFunctionConfiguration: appsync.AppSyncFunctionConfiguration = { ... }
```

##### `dataSourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncFunctionConfiguration.property.dataSourceName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncFunctionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncFunctionConfiguration.property.functionArn"></a>

- *Type:* `string`

---

##### `functionId`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncFunctionConfiguration.property.functionId"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncFunctionConfiguration.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncFunctionConfiguration.property.name"></a>

- *Type:* `string`

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncFunctionConfiguration.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncFunctionConfiguration.property.responseMappingTemplate"></a>

- *Type:* `string`

---

### AppSyncGetApiCacheRequest <a name="aws-cdk-sdk.appsync.AppSyncGetApiCacheRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetApiCacheRequest: appsync.AppSyncGetApiCacheRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetApiCacheRequest.property.apiId"></a>

- *Type:* `string`

---

### AppSyncGetApiCacheResponse <a name="aws-cdk-sdk.appsync.AppSyncGetApiCacheResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetApiCacheResponse: appsync.AppSyncGetApiCacheResponse = { ... }
```

##### `apiCache`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetApiCacheResponse.property.apiCache"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncApiCache`](#aws-cdk-sdk.appsync.AppSyncApiCache)

---

### AppSyncGetDataSourceRequest <a name="aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetDataSourceRequest: appsync.AppSyncGetDataSourceRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest.property.apiId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest.property.name"></a>

- *Type:* `string`

---

### AppSyncGetDataSourceResponse <a name="aws-cdk-sdk.appsync.AppSyncGetDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetDataSourceResponse: appsync.AppSyncGetDataSourceResponse = { ... }
```

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetDataSourceResponse.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDataSource`](#aws-cdk-sdk.appsync.AppSyncDataSource)

---

### AppSyncGetFunctionRequest <a name="aws-cdk-sdk.appsync.AppSyncGetFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetFunctionRequest: appsync.AppSyncGetFunctionRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetFunctionRequest.property.apiId"></a>

- *Type:* `string`

---

##### `functionId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetFunctionRequest.property.functionId"></a>

- *Type:* `string`

---

### AppSyncGetFunctionResponse <a name="aws-cdk-sdk.appsync.AppSyncGetFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetFunctionResponse: appsync.AppSyncGetFunctionResponse = { ... }
```

##### `functionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetFunctionResponse.property.functionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncFunctionConfiguration`](#aws-cdk-sdk.appsync.AppSyncFunctionConfiguration)

---

### AppSyncGetGraphqlApiRequest <a name="aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetGraphqlApiRequest: appsync.AppSyncGetGraphqlApiRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest.property.apiId"></a>

- *Type:* `string`

---

### AppSyncGetGraphqlApiResponse <a name="aws-cdk-sdk.appsync.AppSyncGetGraphqlApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetGraphqlApiResponse: appsync.AppSyncGetGraphqlApiResponse = { ... }
```

##### `graphqlApi`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetGraphqlApiResponse.property.graphqlApi"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGraphqlApi`](#aws-cdk-sdk.appsync.AppSyncGraphqlApi)

---

### AppSyncGetIntrospectionSchemaRequest <a name="aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetIntrospectionSchemaRequest: appsync.AppSyncGetIntrospectionSchemaRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaRequest.property.apiId"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaRequest.property.format"></a>

- *Type:* `string`

---

##### `includeDirectives`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaRequest.property.includeDirectives"></a>

- *Type:* `boolean`

---

### AppSyncGetIntrospectionSchemaResponse <a name="aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetIntrospectionSchemaResponse: appsync.AppSyncGetIntrospectionSchemaResponse = { ... }
```

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaResponse.property.schema"></a>

- *Type:* `any`

---

### AppSyncGetResolverRequest <a name="aws-cdk-sdk.appsync.AppSyncGetResolverRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetResolverRequest: appsync.AppSyncGetResolverRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetResolverRequest.property.apiId"></a>

- *Type:* `string`

---

##### `fieldName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetResolverRequest.property.fieldName"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetResolverRequest.property.typeName"></a>

- *Type:* `string`

---

### AppSyncGetResolverResponse <a name="aws-cdk-sdk.appsync.AppSyncGetResolverResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetResolverResponse: appsync.AppSyncGetResolverResponse = { ... }
```

##### `resolver`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetResolverResponse.property.resolver"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResolver`](#aws-cdk-sdk.appsync.AppSyncResolver)

---

### AppSyncGetSchemaCreationStatusRequest <a name="aws-cdk-sdk.appsync.AppSyncGetSchemaCreationStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetSchemaCreationStatusRequest: appsync.AppSyncGetSchemaCreationStatusRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetSchemaCreationStatusRequest.property.apiId"></a>

- *Type:* `string`

---

### AppSyncGetSchemaCreationStatusResponse <a name="aws-cdk-sdk.appsync.AppSyncGetSchemaCreationStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetSchemaCreationStatusResponse: appsync.AppSyncGetSchemaCreationStatusResponse = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetSchemaCreationStatusResponse.property.details"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetSchemaCreationStatusResponse.property.status"></a>

- *Type:* `string`

---

### AppSyncGetTypeRequest <a name="aws-cdk-sdk.appsync.AppSyncGetTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetTypeRequest: appsync.AppSyncGetTypeRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetTypeRequest.property.apiId"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetTypeRequest.property.format"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetTypeRequest.property.typeName"></a>

- *Type:* `string`

---

### AppSyncGetTypeResponse <a name="aws-cdk-sdk.appsync.AppSyncGetTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGetTypeResponse: appsync.AppSyncGetTypeResponse = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGetTypeResponse.property.type"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncType`](#aws-cdk-sdk.appsync.AppSyncType)

---

### AppSyncGraphqlApi <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncGraphqlApi: appsync.AppSyncGraphqlApi = { ... }
```

##### `additionalAuthenticationProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.additionalAuthenticationProviders"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider`](#aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider)[]

---

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.apiId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.arn"></a>

- *Type:* `string`

---

##### `authenticationType`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.authenticationType"></a>

- *Type:* `string`

---

##### `logConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncLogConfig`](#aws-cdk-sdk.appsync.AppSyncLogConfig)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.name"></a>

- *Type:* `string`

---

##### `openIDConnectConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.openIDConnectConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig`](#aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `uris`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.uris"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userPoolConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.userPoolConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUserPoolConfig`](#aws-cdk-sdk.appsync.AppSyncUserPoolConfig)

---

##### `wafWebAclArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.wafWebAclArn"></a>

- *Type:* `string`

---

##### `xrayEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncGraphqlApi.property.xrayEnabled"></a>

- *Type:* `boolean`

---

### AppSyncHttpDataSourceConfig <a name="aws-cdk-sdk.appsync.AppSyncHttpDataSourceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncHttpDataSourceConfig: appsync.AppSyncHttpDataSourceConfig = { ... }
```

##### `authorizationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncHttpDataSourceConfig.property.authorizationConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncAuthorizationConfig`](#aws-cdk-sdk.appsync.AppSyncAuthorizationConfig)

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncHttpDataSourceConfig.property.endpoint"></a>

- *Type:* `string`

---

### AppSyncLambdaConflictHandlerConfig <a name="aws-cdk-sdk.appsync.AppSyncLambdaConflictHandlerConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncLambdaConflictHandlerConfig: appsync.AppSyncLambdaConflictHandlerConfig = { ... }
```

##### `lambdaConflictHandlerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

- *Type:* `string`

---

### AppSyncLambdaDataSourceConfig <a name="aws-cdk-sdk.appsync.AppSyncLambdaDataSourceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncLambdaDataSourceConfig: appsync.AppSyncLambdaDataSourceConfig = { ... }
```

##### `lambdaFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncLambdaDataSourceConfig.property.lambdaFunctionArn"></a>

- *Type:* `string`

---

### AppSyncListApiKeysRequest <a name="aws-cdk-sdk.appsync.AppSyncListApiKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListApiKeysRequest: appsync.AppSyncListApiKeysRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListApiKeysRequest.property.apiId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListApiKeysRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListApiKeysRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListApiKeysResponse <a name="aws-cdk-sdk.appsync.AppSyncListApiKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListApiKeysResponse: appsync.AppSyncListApiKeysResponse = { ... }
```

##### `apiKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListApiKeysResponse.property.apiKeys"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncApiKey`](#aws-cdk-sdk.appsync.AppSyncApiKey)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListApiKeysResponse.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListDataSourcesRequest <a name="aws-cdk-sdk.appsync.AppSyncListDataSourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListDataSourcesRequest: appsync.AppSyncListDataSourcesRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListDataSourcesRequest.property.apiId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListDataSourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListDataSourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListDataSourcesResponse <a name="aws-cdk-sdk.appsync.AppSyncListDataSourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListDataSourcesResponse: appsync.AppSyncListDataSourcesResponse = { ... }
```

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListDataSourcesResponse.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDataSource`](#aws-cdk-sdk.appsync.AppSyncDataSource)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListDataSourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListFunctionsRequest <a name="aws-cdk-sdk.appsync.AppSyncListFunctionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListFunctionsRequest: appsync.AppSyncListFunctionsRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListFunctionsRequest.property.apiId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListFunctionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListFunctionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListFunctionsResponse <a name="aws-cdk-sdk.appsync.AppSyncListFunctionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListFunctionsResponse: appsync.AppSyncListFunctionsResponse = { ... }
```

##### `functions`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListFunctionsResponse.property.functions"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncFunctionConfiguration`](#aws-cdk-sdk.appsync.AppSyncFunctionConfiguration)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListFunctionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListGraphqlApisRequest <a name="aws-cdk-sdk.appsync.AppSyncListGraphqlApisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListGraphqlApisRequest: appsync.AppSyncListGraphqlApisRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListGraphqlApisRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListGraphqlApisRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListGraphqlApisResponse <a name="aws-cdk-sdk.appsync.AppSyncListGraphqlApisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListGraphqlApisResponse: appsync.AppSyncListGraphqlApisResponse = { ... }
```

##### `graphqlApis`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListGraphqlApisResponse.property.graphqlApis"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGraphqlApi`](#aws-cdk-sdk.appsync.AppSyncGraphqlApi)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListGraphqlApisResponse.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListResolversByFunctionRequest <a name="aws-cdk-sdk.appsync.AppSyncListResolversByFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListResolversByFunctionRequest: appsync.AppSyncListResolversByFunctionRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversByFunctionRequest.property.apiId"></a>

- *Type:* `string`

---

##### `functionId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversByFunctionRequest.property.functionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversByFunctionRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversByFunctionRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListResolversByFunctionResponse <a name="aws-cdk-sdk.appsync.AppSyncListResolversByFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListResolversByFunctionResponse: appsync.AppSyncListResolversByFunctionResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversByFunctionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resolvers`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversByFunctionResponse.property.resolvers"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResolver`](#aws-cdk-sdk.appsync.AppSyncResolver)[]

---

### AppSyncListResolversRequest <a name="aws-cdk-sdk.appsync.AppSyncListResolversRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListResolversRequest: appsync.AppSyncListResolversRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversRequest.property.apiId"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversRequest.property.typeName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListResolversResponse <a name="aws-cdk-sdk.appsync.AppSyncListResolversResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListResolversResponse: appsync.AppSyncListResolversResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resolvers`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListResolversResponse.property.resolvers"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResolver`](#aws-cdk-sdk.appsync.AppSyncResolver)[]

---

### AppSyncListTagsForResourceRequest <a name="aws-cdk-sdk.appsync.AppSyncListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListTagsForResourceRequest: appsync.AppSyncListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AppSyncListTagsForResourceResponse <a name="aws-cdk-sdk.appsync.AppSyncListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListTagsForResourceResponse: appsync.AppSyncListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppSyncListTypesRequest <a name="aws-cdk-sdk.appsync.AppSyncListTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListTypesRequest: appsync.AppSyncListTypesRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListTypesRequest.property.apiId"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncListTypesRequest.property.format"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListTypesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListTypesRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppSyncListTypesResponse <a name="aws-cdk-sdk.appsync.AppSyncListTypesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncListTypesResponse: appsync.AppSyncListTypesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListTypesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `types`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncListTypesResponse.property.types"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncType`](#aws-cdk-sdk.appsync.AppSyncType)[]

---

### AppSyncLogConfig <a name="aws-cdk-sdk.appsync.AppSyncLogConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncLogConfig: appsync.AppSyncLogConfig = { ... }
```

##### `cloudWatchLogsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncLogConfig.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `fieldLogLevel`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncLogConfig.property.fieldLogLevel"></a>

- *Type:* `string`

---

##### `excludeVerboseContent`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncLogConfig.property.excludeVerboseContent"></a>

- *Type:* `boolean`

---

### AppSyncOpenIdConnectConfig <a name="aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncOpenIdConnectConfig: appsync.AppSyncOpenIdConnectConfig = { ... }
```

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig.property.issuer"></a>

- *Type:* `string`

---

##### `authTTL`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig.property.authTTL"></a>

- *Type:* `number`

---

##### `clientId`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig.property.clientId"></a>

- *Type:* `string`

---

##### `iatTTL`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig.property.iatTTL"></a>

- *Type:* `number`

---

### AppSyncPipelineConfig <a name="aws-cdk-sdk.appsync.AppSyncPipelineConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncPipelineConfig: appsync.AppSyncPipelineConfig = { ... }
```

##### `functions`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncPipelineConfig.property.functions"></a>

- *Type:* `string`[]

---

### AppSyncRdsHttpEndpointConfig <a name="aws-cdk-sdk.appsync.AppSyncRdsHttpEndpointConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncRdsHttpEndpointConfig: appsync.AppSyncRdsHttpEndpointConfig = { ... }
```

##### `awsRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncRdsHttpEndpointConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `awsSecretStoreArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncRdsHttpEndpointConfig.property.awsSecretStoreArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncRdsHttpEndpointConfig.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncRdsHttpEndpointConfig.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncRdsHttpEndpointConfig.property.schema"></a>

- *Type:* `string`

---

### AppSyncRelationalDatabaseDataSourceConfig <a name="aws-cdk-sdk.appsync.AppSyncRelationalDatabaseDataSourceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncRelationalDatabaseDataSourceConfig: appsync.AppSyncRelationalDatabaseDataSourceConfig = { ... }
```

##### `rdsHttpEndpointConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncRelationalDatabaseDataSourceConfig.property.rdsHttpEndpointConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncRdsHttpEndpointConfig`](#aws-cdk-sdk.appsync.AppSyncRdsHttpEndpointConfig)

---

##### `relationalDatabaseSourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncRelationalDatabaseDataSourceConfig.property.relationalDatabaseSourceType"></a>

- *Type:* `string`

---

### AppSyncResolver <a name="aws-cdk-sdk.appsync.AppSyncResolver"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncResolver: appsync.AppSyncResolver = { ... }
```

##### `cachingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.cachingConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCachingConfig`](#aws-cdk-sdk.appsync.AppSyncCachingConfig)

---

##### `dataSourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.dataSourceName"></a>

- *Type:* `string`

---

##### `fieldName`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.fieldName"></a>

- *Type:* `string`

---

##### `kind`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.kind"></a>

- *Type:* `string`

---

##### `pipelineConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.pipelineConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncPipelineConfig`](#aws-cdk-sdk.appsync.AppSyncPipelineConfig)

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `resolverArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.resolverArn"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.responseMappingTemplate"></a>

- *Type:* `string`

---

##### `syncConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.syncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncSyncConfig`](#aws-cdk-sdk.appsync.AppSyncSyncConfig)

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncResolver.property.typeName"></a>

- *Type:* `string`

---

### AppSyncStartSchemaCreationRequest <a name="aws-cdk-sdk.appsync.AppSyncStartSchemaCreationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncStartSchemaCreationRequest: appsync.AppSyncStartSchemaCreationRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncStartSchemaCreationRequest.property.apiId"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncStartSchemaCreationRequest.property.definition"></a>

- *Type:* `any`

---

### AppSyncStartSchemaCreationResponse <a name="aws-cdk-sdk.appsync.AppSyncStartSchemaCreationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncStartSchemaCreationResponse: appsync.AppSyncStartSchemaCreationResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncStartSchemaCreationResponse.property.status"></a>

- *Type:* `string`

---

### AppSyncSyncConfig <a name="aws-cdk-sdk.appsync.AppSyncSyncConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncSyncConfig: appsync.AppSyncSyncConfig = { ... }
```

##### `conflictDetection`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncSyncConfig.property.conflictDetection"></a>

- *Type:* `string`

---

##### `conflictHandler`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncSyncConfig.property.conflictHandler"></a>

- *Type:* `string`

---

##### `lambdaConflictHandlerConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncSyncConfig.property.lambdaConflictHandlerConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncLambdaConflictHandlerConfig`](#aws-cdk-sdk.appsync.AppSyncLambdaConflictHandlerConfig)

---

### AppSyncTagResourceRequest <a name="aws-cdk-sdk.appsync.AppSyncTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncTagResourceRequest: appsync.AppSyncTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppSyncTagResourceResponse <a name="aws-cdk-sdk.appsync.AppSyncTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncTagResourceResponse: appsync.AppSyncTagResourceResponse = { ... }
```

### AppSyncType <a name="aws-cdk-sdk.appsync.AppSyncType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncType: appsync.AppSyncType = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncType.property.arn"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncType.property.definition"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncType.property.description"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncType.property.format"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncType.property.name"></a>

- *Type:* `string`

---

### AppSyncUntagResourceRequest <a name="aws-cdk-sdk.appsync.AppSyncUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUntagResourceRequest: appsync.AppSyncUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### AppSyncUntagResourceResponse <a name="aws-cdk-sdk.appsync.AppSyncUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUntagResourceResponse: appsync.AppSyncUntagResourceResponse = { ... }
```

### AppSyncUpdateApiCacheRequest <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateApiCacheRequest: appsync.AppSyncUpdateApiCacheRequest = { ... }
```

##### `apiCachingBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest.property.apiCachingBehavior"></a>

- *Type:* `string`

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest.property.apiId"></a>

- *Type:* `string`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest.property.ttl"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest.property.type"></a>

- *Type:* `string`

---

### AppSyncUpdateApiCacheResponse <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiCacheResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateApiCacheResponse: appsync.AppSyncUpdateApiCacheResponse = { ... }
```

##### `apiCache`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiCacheResponse.property.apiCache"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncApiCache`](#aws-cdk-sdk.appsync.AppSyncApiCache)

---

### AppSyncUpdateApiKeyRequest <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateApiKeyRequest: appsync.AppSyncUpdateApiKeyRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest.property.apiId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest.property.id"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest.property.description"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest.property.expires"></a>

- *Type:* `number`

---

### AppSyncUpdateApiKeyResponse <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateApiKeyResponse: appsync.AppSyncUpdateApiKeyResponse = { ... }
```

##### `apiKey`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateApiKeyResponse.property.apiKey"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncApiKey`](#aws-cdk-sdk.appsync.AppSyncApiKey)

---

### AppSyncUpdateDataSourceRequest <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateDataSourceRequest: appsync.AppSyncUpdateDataSourceRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.apiId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.description"></a>

- *Type:* `string`

---

##### `dynamodbConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.dynamodbConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncDynamodbDataSourceConfig)

---

##### `elasticsearchConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.elasticsearchConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncElasticsearchDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncElasticsearchDataSourceConfig)

---

##### `httpConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.httpConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncHttpDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncHttpDataSourceConfig)

---

##### `lambdaConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.lambdaConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncLambdaDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncLambdaDataSourceConfig)

---

##### `relationalDatabaseConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.relationalDatabaseConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncRelationalDatabaseDataSourceConfig`](#aws-cdk-sdk.appsync.AppSyncRelationalDatabaseDataSourceConfig)

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest.property.serviceRoleArn"></a>

- *Type:* `string`

---

### AppSyncUpdateDataSourceResponse <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateDataSourceResponse: appsync.AppSyncUpdateDataSourceResponse = { ... }
```

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateDataSourceResponse.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDataSource`](#aws-cdk-sdk.appsync.AppSyncDataSource)

---

### AppSyncUpdateFunctionRequest <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateFunctionRequest: appsync.AppSyncUpdateFunctionRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest.property.apiId"></a>

- *Type:* `string`

---

##### `dataSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest.property.dataSourceName"></a>

- *Type:* `string`

---

##### `functionId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest.property.functionId"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest.property.description"></a>

- *Type:* `string`

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest.property.responseMappingTemplate"></a>

- *Type:* `string`

---

### AppSyncUpdateFunctionResponse <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateFunctionResponse: appsync.AppSyncUpdateFunctionResponse = { ... }
```

##### `functionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateFunctionResponse.property.functionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncFunctionConfiguration`](#aws-cdk-sdk.appsync.AppSyncFunctionConfiguration)

---

### AppSyncUpdateGraphqlApiRequest <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateGraphqlApiRequest: appsync.AppSyncUpdateGraphqlApiRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest.property.apiId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest.property.name"></a>

- *Type:* `string`

---

##### `additionalAuthenticationProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest.property.additionalAuthenticationProviders"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider`](#aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider)[]

---

##### `authenticationType`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest.property.authenticationType"></a>

- *Type:* `string`

---

##### `logConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncLogConfig`](#aws-cdk-sdk.appsync.AppSyncLogConfig)

---

##### `openIDConnectConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest.property.openIDConnectConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig`](#aws-cdk-sdk.appsync.AppSyncOpenIdConnectConfig)

---

##### `userPoolConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest.property.userPoolConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUserPoolConfig`](#aws-cdk-sdk.appsync.AppSyncUserPoolConfig)

---

##### `xrayEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest.property.xrayEnabled"></a>

- *Type:* `boolean`

---

### AppSyncUpdateGraphqlApiResponse <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateGraphqlApiResponse: appsync.AppSyncUpdateGraphqlApiResponse = { ... }
```

##### `graphqlApi`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiResponse.property.graphqlApi"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGraphqlApi`](#aws-cdk-sdk.appsync.AppSyncGraphqlApi)

---

### AppSyncUpdateResolverRequest <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateResolverRequest: appsync.AppSyncUpdateResolverRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.apiId"></a>

- *Type:* `string`

---

##### `fieldName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.fieldName"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.typeName"></a>

- *Type:* `string`

---

##### `cachingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.cachingConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCachingConfig`](#aws-cdk-sdk.appsync.AppSyncCachingConfig)

---

##### `dataSourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.dataSourceName"></a>

- *Type:* `string`

---

##### `kind`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.kind"></a>

- *Type:* `string`

---

##### `pipelineConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.pipelineConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncPipelineConfig`](#aws-cdk-sdk.appsync.AppSyncPipelineConfig)

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.responseMappingTemplate"></a>

- *Type:* `string`

---

##### `syncConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest.property.syncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncSyncConfig`](#aws-cdk-sdk.appsync.AppSyncSyncConfig)

---

### AppSyncUpdateResolverResponse <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateResolverResponse: appsync.AppSyncUpdateResolverResponse = { ... }
```

##### `resolver`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateResolverResponse.property.resolver"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResolver`](#aws-cdk-sdk.appsync.AppSyncResolver)

---

### AppSyncUpdateTypeRequest <a name="aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateTypeRequest: appsync.AppSyncUpdateTypeRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest.property.apiId"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest.property.format"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest.property.typeName"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest.property.definition"></a>

- *Type:* `string`

---

### AppSyncUpdateTypeResponse <a name="aws-cdk-sdk.appsync.AppSyncUpdateTypeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUpdateTypeResponse: appsync.AppSyncUpdateTypeResponse = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUpdateTypeResponse.property.type"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncType`](#aws-cdk-sdk.appsync.AppSyncType)

---

### AppSyncUserPoolConfig <a name="aws-cdk-sdk.appsync.AppSyncUserPoolConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

const appSyncUserPoolConfig: appsync.AppSyncUserPoolConfig = { ... }
```

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUserPoolConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUserPoolConfig.property.defaultAction"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncUserPoolConfig.property.userPoolId"></a>

- *Type:* `string`

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="aws-cdk-sdk.appsync.AppSyncUserPoolConfig.property.appIdClientRegex"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### AppSyncResponsesCreateApiCache <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCache"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCache.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateApiCache(__scope: Construct, __resources: string[], __input: AppSyncCreateApiCacheRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest)

---



#### Properties <a name="Properties"></a>

##### `apiCache`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCache.property.apiCache"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache)

---


### AppSyncResponsesCreateApiCacheApiCache <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateApiCacheApiCache(__scope: Construct, __resources: string[], __input: AppSyncCreateApiCacheRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncCreateApiCacheRequest)

---



#### Properties <a name="Properties"></a>

##### `apiCachingBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.property.apiCachingBehavior"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.property.ttl"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiCacheApiCache.property.type"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateApiKey <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKey"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKey.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateApiKey(__scope: Construct, __resources: string[], __input: AppSyncCreateApiKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest`](#aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKey`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKey.property.apiKey"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey)

---


### AppSyncResponsesCreateApiKeyApiKey <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateApiKeyApiKey(__scope: Construct, __resources: string[], __input: AppSyncCreateApiKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest`](#aws-cdk-sdk.appsync.AppSyncCreateApiKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `deletes`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey.property.deletes"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey.property.description"></a>

- *Type:* `string`

---

##### `expires`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey.property.expires"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateApiKeyApiKey.property.id"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateDataSource <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSource.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSource(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSource`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSource.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource)

---


### AppSyncResponsesCreateDataSourceDataSource <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSource(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.description"></a>

- *Type:* `string`

---

##### `dynamodbConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.dynamodbConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig)

---

##### `elasticsearchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.elasticsearchConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig)

---

##### `httpConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.httpConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig)

---

##### `lambdaConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.lambdaConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceLambdaConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceLambdaConfig)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.name"></a>

- *Type:* `string`

---

##### `relationalDatabaseConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.relationalDatabaseConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig)

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSource.property.type"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `deltaSyncConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig.property.deltaSyncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig.property.tableName"></a>

- *Type:* `string`

---

##### `useCallerCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig.property.useCallerCredentials"></a>

- *Type:* `boolean`

---

##### `versioned`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfig.property.versioned"></a>

- *Type:* `boolean`

---


### AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `baseTableTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl"></a>

- *Type:* `number`

---

##### `deltaSyncTableName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

- *Type:* `string`

---

##### `deltaSyncTableTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

- *Type:* `number`

---


### AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceElasticsearchConfig.property.endpoint"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateDataSourceDataSourceHttpConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig.property.authorizationConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig)

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfig.property.endpoint"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

- *Type:* `string`

---

##### `awsIamConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig)

---


### AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `signingRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

- *Type:* `string`

---

##### `signingServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateDataSourceDataSourceLambdaConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceLambdaConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceLambdaConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSourceLambdaConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceLambdaConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceLambdaConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceLambdaConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceLambdaConfig.property.lambdaFunctionArn"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `rdsHttpEndpointConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig)

---

##### `relationalDatabaseSourceType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `awsSecretStoreArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateFunction <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunction"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunction.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateFunction(__scope: Construct, __resources: string[], __input: AppSyncCreateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `functionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunction.property.functionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration)

---


### AppSyncResponsesCreateFunctionFunctionConfiguration <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateFunctionFunctionConfiguration(__scope: Construct, __resources: string[], __input: AppSyncCreateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncCreateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.property.dataSourceName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.property.functionArn"></a>

- *Type:* `string`

---

##### `functionId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.property.functionId"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.property.name"></a>

- *Type:* `string`

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateFunctionFunctionConfiguration.property.responseMappingTemplate"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateGraphqlApi <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApi"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApi.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateGraphqlApi(__scope: Construct, __resources: string[], __input: AppSyncCreateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `graphqlApi`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApi.property.graphqlApi"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi)

---


### AppSyncResponsesCreateGraphqlApiGraphqlApi <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi(__scope: Construct, __resources: string[], __input: AppSyncCreateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalAuthenticationProviders`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.additionalAuthenticationProviders"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider`](#aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider)[]

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.apiId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.arn"></a>

- *Type:* `string`

---

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.authenticationType"></a>

- *Type:* `string`

---

##### `logConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.name"></a>

- *Type:* `string`

---

##### `openIdConnectConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.openIdConnectConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `uris`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.uris"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userPoolConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.userPoolConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig)

---

##### `wafWebAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.wafWebAclArn"></a>

- *Type:* `string`

---

##### `xrayEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApi.property.xrayEnabled"></a>

- *Type:* `boolean`

---


### AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `excludeVerboseContent`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig.property.excludeVerboseContent"></a>

- *Type:* `boolean`

---

##### `fieldLogLevel`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiLogConfig.property.fieldLogLevel"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `authTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig.property.authTtl"></a>

- *Type:* `number`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig.property.clientId"></a>

- *Type:* `string`

---

##### `iatTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig.property.iatTtl"></a>

- *Type:* `number`

---

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiOpenIdConnectConfig.property.issuer"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncCreateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `appIdClientRegex`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig.property.appIdClientRegex"></a>

- *Type:* `string`

---

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig.property.defaultAction"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateGraphqlApiGraphqlApiUserPoolConfig.property.userPoolId"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateResolver <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolver"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolver.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateResolver(__scope: Construct, __resources: string[], __input: AppSyncCreateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolver.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolver.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolver.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncCreateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `resolver`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolver.property.resolver"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver)

---


### AppSyncResponsesCreateResolverResolver <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateResolverResolver(__scope: Construct, __resources: string[], __input: AppSyncCreateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncCreateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `cachingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.cachingConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverCachingConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverCachingConfig)

---

##### `dataSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.dataSourceName"></a>

- *Type:* `string`

---

##### `fieldName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.fieldName"></a>

- *Type:* `string`

---

##### `kind`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.kind"></a>

- *Type:* `string`

---

##### `pipelineConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.pipelineConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverPipelineConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverPipelineConfig)

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `resolverArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.resolverArn"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.responseMappingTemplate"></a>

- *Type:* `string`

---

##### `syncConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.syncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig)

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolver.property.typeName"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateResolverResolverCachingConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverCachingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverCachingConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateResolverResolverCachingConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverCachingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverCachingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverCachingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncCreateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `cachingKeys`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverCachingConfig.property.cachingKeys"></a>

- *Type:* `string`[]

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverCachingConfig.property.ttl"></a>

- *Type:* `number`

---


### AppSyncResponsesCreateResolverResolverPipelineConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverPipelineConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverPipelineConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateResolverResolverPipelineConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverPipelineConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverPipelineConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverPipelineConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncCreateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `functions`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverPipelineConfig.property.functions"></a>

- *Type:* `string`[]

---


### AppSyncResponsesCreateResolverResolverSyncConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateResolverResolverSyncConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncCreateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `conflictDetection`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig.property.conflictDetection"></a>

- *Type:* `string`

---

##### `conflictHandler`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig.property.conflictHandler"></a>

- *Type:* `string`

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfig.property.lambdaConflictHandlerConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig)

---


### AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig(__scope: Construct, __resources: string[], __input: AppSyncCreateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncCreateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateResolverResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

- *Type:* `string`

---


### AppSyncResponsesCreateType <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateType"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateType.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateType(__scope: Construct, __resources: string[], __input: AppSyncCreateTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateTypeRequest`](#aws-cdk-sdk.appsync.AppSyncCreateTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateType.property.type"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType`](#aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType)

---


### AppSyncResponsesCreateTypeType <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesCreateTypeType(__scope: Construct, __resources: string[], __input: AppSyncCreateTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncCreateTypeRequest`](#aws-cdk-sdk.appsync.AppSyncCreateTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType.property.arn"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType.property.definition"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType.property.description"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType.property.format"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesCreateTypeType.property.name"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchApiCache <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCache"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCache.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchApiCache(__scope: Construct, __resources: string[], __input: AppSyncGetApiCacheRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncGetApiCacheRequest)

---



#### Properties <a name="Properties"></a>

##### `apiCache`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCache.property.apiCache"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache)

---


### AppSyncResponsesFetchApiCacheApiCache <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchApiCacheApiCache(__scope: Construct, __resources: string[], __input: AppSyncGetApiCacheRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncGetApiCacheRequest)

---



#### Properties <a name="Properties"></a>

##### `apiCachingBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.property.apiCachingBehavior"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.property.ttl"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchApiCacheApiCache.property.type"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchDataSource <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSource.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSource(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSource`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSource.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource)

---


### AppSyncResponsesFetchDataSourceDataSource <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSource(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.description"></a>

- *Type:* `string`

---

##### `dynamodbConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.dynamodbConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig)

---

##### `elasticsearchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.elasticsearchConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig)

---

##### `httpConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.httpConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig)

---

##### `lambdaConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.lambdaConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceLambdaConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceLambdaConfig)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.name"></a>

- *Type:* `string`

---

##### `relationalDatabaseConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.relationalDatabaseConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig)

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSource.property.type"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `deltaSyncConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig.property.deltaSyncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig.property.tableName"></a>

- *Type:* `string`

---

##### `useCallerCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig.property.useCallerCredentials"></a>

- *Type:* `boolean`

---

##### `versioned`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfig.property.versioned"></a>

- *Type:* `boolean`

---


### AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `baseTableTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl"></a>

- *Type:* `number`

---

##### `deltaSyncTableName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

- *Type:* `string`

---

##### `deltaSyncTableTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

- *Type:* `number`

---


### AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceElasticsearchConfig.property.endpoint"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchDataSourceDataSourceHttpConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig.property.authorizationConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig)

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfig.property.endpoint"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

- *Type:* `string`

---

##### `awsIamConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig)

---


### AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `signingRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

- *Type:* `string`

---

##### `signingServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchDataSourceDataSourceLambdaConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceLambdaConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceLambdaConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSourceLambdaConfig(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceLambdaConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceLambdaConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceLambdaConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceLambdaConfig.property.lambdaFunctionArn"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `rdsHttpEndpointConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig)

---

##### `relationalDatabaseSourceType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(__scope: Construct, __resources: string[], __input: AppSyncGetDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncGetDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `awsSecretStoreArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchFunction <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunction"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunction.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchFunction(__scope: Construct, __resources: string[], __input: AppSyncGetFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncGetFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `functionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunction.property.functionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration)

---


### AppSyncResponsesFetchFunctionFunctionConfiguration <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchFunctionFunctionConfiguration(__scope: Construct, __resources: string[], __input: AppSyncGetFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncGetFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.property.dataSourceName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.property.functionArn"></a>

- *Type:* `string`

---

##### `functionId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.property.functionId"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.property.name"></a>

- *Type:* `string`

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchFunctionFunctionConfiguration.property.responseMappingTemplate"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchGraphqlApi <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApi"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApi.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchGraphqlApi(__scope: Construct, __resources: string[], __input: AppSyncGetGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `graphqlApi`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApi.property.graphqlApi"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi)

---


### AppSyncResponsesFetchGraphqlApiGraphqlApi <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi(__scope: Construct, __resources: string[], __input: AppSyncGetGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalAuthenticationProviders`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.additionalAuthenticationProviders"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider`](#aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider)[]

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.apiId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.arn"></a>

- *Type:* `string`

---

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.authenticationType"></a>

- *Type:* `string`

---

##### `logConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.name"></a>

- *Type:* `string`

---

##### `openIdConnectConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.openIdConnectConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `uris`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.uris"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userPoolConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.userPoolConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig)

---

##### `wafWebAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.wafWebAclArn"></a>

- *Type:* `string`

---

##### `xrayEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApi.property.xrayEnabled"></a>

- *Type:* `boolean`

---


### AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig(__scope: Construct, __resources: string[], __input: AppSyncGetGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `excludeVerboseContent`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig.property.excludeVerboseContent"></a>

- *Type:* `boolean`

---

##### `fieldLogLevel`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiLogConfig.property.fieldLogLevel"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig(__scope: Construct, __resources: string[], __input: AppSyncGetGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `authTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig.property.authTtl"></a>

- *Type:* `number`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig.property.clientId"></a>

- *Type:* `string`

---

##### `iatTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig.property.iatTtl"></a>

- *Type:* `number`

---

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiOpenIdConnectConfig.property.issuer"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig(__scope: Construct, __resources: string[], __input: AppSyncGetGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncGetGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `appIdClientRegex`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig.property.appIdClientRegex"></a>

- *Type:* `string`

---

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig.property.defaultAction"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchGraphqlApiGraphqlApiUserPoolConfig.property.userPoolId"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchIntrospectionSchema <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchIntrospectionSchema"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchIntrospectionSchema.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchIntrospectionSchema(__scope: Construct, __resources: string[], __input: AppSyncGetIntrospectionSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchIntrospectionSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchIntrospectionSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchIntrospectionSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaRequest`](#aws-cdk-sdk.appsync.AppSyncGetIntrospectionSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchIntrospectionSchema.property.schema"></a>

- *Type:* `any`

---


### AppSyncResponsesFetchResolver <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolver"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolver.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchResolver(__scope: Construct, __resources: string[], __input: AppSyncGetResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolver.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolver.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolver.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetResolverRequest`](#aws-cdk-sdk.appsync.AppSyncGetResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `resolver`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolver.property.resolver"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver)

---


### AppSyncResponsesFetchResolverResolver <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchResolverResolver(__scope: Construct, __resources: string[], __input: AppSyncGetResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetResolverRequest`](#aws-cdk-sdk.appsync.AppSyncGetResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `cachingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.cachingConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverCachingConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverCachingConfig)

---

##### `dataSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.dataSourceName"></a>

- *Type:* `string`

---

##### `fieldName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.fieldName"></a>

- *Type:* `string`

---

##### `kind`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.kind"></a>

- *Type:* `string`

---

##### `pipelineConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.pipelineConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverPipelineConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverPipelineConfig)

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `resolverArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.resolverArn"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.responseMappingTemplate"></a>

- *Type:* `string`

---

##### `syncConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.syncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig)

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolver.property.typeName"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchResolverResolverCachingConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverCachingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverCachingConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchResolverResolverCachingConfig(__scope: Construct, __resources: string[], __input: AppSyncGetResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverCachingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverCachingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverCachingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetResolverRequest`](#aws-cdk-sdk.appsync.AppSyncGetResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `cachingKeys`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverCachingConfig.property.cachingKeys"></a>

- *Type:* `string`[]

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverCachingConfig.property.ttl"></a>

- *Type:* `number`

---


### AppSyncResponsesFetchResolverResolverPipelineConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverPipelineConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverPipelineConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchResolverResolverPipelineConfig(__scope: Construct, __resources: string[], __input: AppSyncGetResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverPipelineConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverPipelineConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverPipelineConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetResolverRequest`](#aws-cdk-sdk.appsync.AppSyncGetResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `functions`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverPipelineConfig.property.functions"></a>

- *Type:* `string`[]

---


### AppSyncResponsesFetchResolverResolverSyncConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchResolverResolverSyncConfig(__scope: Construct, __resources: string[], __input: AppSyncGetResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetResolverRequest`](#aws-cdk-sdk.appsync.AppSyncGetResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `conflictDetection`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig.property.conflictDetection"></a>

- *Type:* `string`

---

##### `conflictHandler`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig.property.conflictHandler"></a>

- *Type:* `string`

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfig.property.lambdaConflictHandlerConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig)

---


### AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig(__scope: Construct, __resources: string[], __input: AppSyncGetResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetResolverRequest`](#aws-cdk-sdk.appsync.AppSyncGetResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchResolverResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchSchemaCreationStatus <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchSchemaCreationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchSchemaCreationStatus.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchSchemaCreationStatus(__scope: Construct, __resources: string[], __input: AppSyncGetSchemaCreationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchSchemaCreationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchSchemaCreationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchSchemaCreationStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetSchemaCreationStatusRequest`](#aws-cdk-sdk.appsync.AppSyncGetSchemaCreationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchSchemaCreationStatus.property.details"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchSchemaCreationStatus.property.status"></a>

- *Type:* `string`

---


### AppSyncResponsesFetchType <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchType"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchType.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchType(__scope: Construct, __resources: string[], __input: AppSyncGetTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetTypeRequest`](#aws-cdk-sdk.appsync.AppSyncGetTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchType.property.type"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType`](#aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType)

---


### AppSyncResponsesFetchTypeType <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesFetchTypeType(__scope: Construct, __resources: string[], __input: AppSyncGetTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGetTypeRequest`](#aws-cdk-sdk.appsync.AppSyncGetTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType.property.arn"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType.property.definition"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType.property.description"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType.property.format"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesFetchTypeType.property.name"></a>

- *Type:* `string`

---


### AppSyncResponsesListApiKeys <a name="aws-cdk-sdk.appsync.AppSyncResponsesListApiKeys"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesListApiKeys.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesListApiKeys(__scope: Construct, __resources: string[], __input: AppSyncListApiKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListApiKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListApiKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListApiKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListApiKeysRequest`](#aws-cdk-sdk.appsync.AppSyncListApiKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeys`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListApiKeys.property.apiKeys"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncApiKey`](#aws-cdk-sdk.appsync.AppSyncApiKey)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListApiKeys.property.nextToken"></a>

- *Type:* `string`

---


### AppSyncResponsesListDataSources <a name="aws-cdk-sdk.appsync.AppSyncResponsesListDataSources"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesListDataSources.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesListDataSources(__scope: Construct, __resources: string[], __input: AppSyncListDataSourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListDataSources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListDataSources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListDataSources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListDataSourcesRequest`](#aws-cdk-sdk.appsync.AppSyncListDataSourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListDataSources.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncDataSource`](#aws-cdk-sdk.appsync.AppSyncDataSource)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListDataSources.property.nextToken"></a>

- *Type:* `string`

---


### AppSyncResponsesListFunctions <a name="aws-cdk-sdk.appsync.AppSyncResponsesListFunctions"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesListFunctions.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesListFunctions(__scope: Construct, __resources: string[], __input: AppSyncListFunctionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListFunctions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListFunctions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListFunctions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListFunctionsRequest`](#aws-cdk-sdk.appsync.AppSyncListFunctionsRequest)

---



#### Properties <a name="Properties"></a>

##### `functions`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListFunctions.property.functions"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncFunctionConfiguration`](#aws-cdk-sdk.appsync.AppSyncFunctionConfiguration)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListFunctions.property.nextToken"></a>

- *Type:* `string`

---


### AppSyncResponsesListGraphqlApis <a name="aws-cdk-sdk.appsync.AppSyncResponsesListGraphqlApis"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesListGraphqlApis.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesListGraphqlApis(__scope: Construct, __resources: string[], __input: AppSyncListGraphqlApisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListGraphqlApis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListGraphqlApis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListGraphqlApis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListGraphqlApisRequest`](#aws-cdk-sdk.appsync.AppSyncListGraphqlApisRequest)

---



#### Properties <a name="Properties"></a>

##### `graphqlApis`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListGraphqlApis.property.graphqlApis"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncGraphqlApi`](#aws-cdk-sdk.appsync.AppSyncGraphqlApi)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListGraphqlApis.property.nextToken"></a>

- *Type:* `string`

---


### AppSyncResponsesListResolvers <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolvers"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolvers.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesListResolvers(__scope: Construct, __resources: string[], __input: AppSyncListResolversRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolvers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolvers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolvers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListResolversRequest`](#aws-cdk-sdk.appsync.AppSyncListResolversRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolvers.property.nextToken"></a>

- *Type:* `string`

---

##### `resolvers`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolvers.property.resolvers"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResolver`](#aws-cdk-sdk.appsync.AppSyncResolver)[]

---


### AppSyncResponsesListResolversByFunction <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolversByFunction"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolversByFunction.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesListResolversByFunction(__scope: Construct, __resources: string[], __input: AppSyncListResolversByFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolversByFunction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolversByFunction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolversByFunction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListResolversByFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncListResolversByFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolversByFunction.property.nextToken"></a>

- *Type:* `string`

---

##### `resolvers`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListResolversByFunction.property.resolvers"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResolver`](#aws-cdk-sdk.appsync.AppSyncResolver)[]

---


### AppSyncResponsesListTagsForResource <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTagsForResource.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: AppSyncListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListTagsForResourceRequest`](#aws-cdk-sdk.appsync.AppSyncListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### AppSyncResponsesListTypes <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTypes"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTypes.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesListTypes(__scope: Construct, __resources: string[], __input: AppSyncListTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncListTypesRequest`](#aws-cdk-sdk.appsync.AppSyncListTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTypes.property.nextToken"></a>

- *Type:* `string`

---

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesListTypes.property.types"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncType`](#aws-cdk-sdk.appsync.AppSyncType)[]

---


### AppSyncResponsesStartSchemaCreation <a name="aws-cdk-sdk.appsync.AppSyncResponsesStartSchemaCreation"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesStartSchemaCreation.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesStartSchemaCreation(__scope: Construct, __resources: string[], __input: AppSyncStartSchemaCreationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesStartSchemaCreation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesStartSchemaCreation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesStartSchemaCreation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncStartSchemaCreationRequest`](#aws-cdk-sdk.appsync.AppSyncStartSchemaCreationRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesStartSchemaCreation.property.status"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateApiCache <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCache"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCache.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateApiCache(__scope: Construct, __resources: string[], __input: AppSyncUpdateApiCacheRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest)

---



#### Properties <a name="Properties"></a>

##### `apiCache`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCache.property.apiCache"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache)

---


### AppSyncResponsesUpdateApiCacheApiCache <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateApiCacheApiCache(__scope: Construct, __resources: string[], __input: AppSyncUpdateApiCacheRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateApiCacheRequest)

---



#### Properties <a name="Properties"></a>

##### `apiCachingBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.property.apiCachingBehavior"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.property.ttl"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiCacheApiCache.property.type"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateApiKey <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKey"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKey.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateApiKey(__scope: Construct, __resources: string[], __input: AppSyncUpdateApiKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKey`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKey.property.apiKey"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey)

---


### AppSyncResponsesUpdateApiKeyApiKey <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateApiKeyApiKey(__scope: Construct, __resources: string[], __input: AppSyncUpdateApiKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateApiKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `deletes`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey.property.deletes"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey.property.description"></a>

- *Type:* `string`

---

##### `expires`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey.property.expires"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateApiKeyApiKey.property.id"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateDataSource <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSource.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSource(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSource`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSource.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource)

---


### AppSyncResponsesUpdateDataSourceDataSource <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSource(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.description"></a>

- *Type:* `string`

---

##### `dynamodbConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.dynamodbConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig)

---

##### `elasticsearchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.elasticsearchConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig)

---

##### `httpConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.httpConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig)

---

##### `lambdaConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.lambdaConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.name"></a>

- *Type:* `string`

---

##### `relationalDatabaseConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.relationalDatabaseConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig)

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSource.property.type"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `deltaSyncConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig.property.deltaSyncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig.property.tableName"></a>

- *Type:* `string`

---

##### `useCallerCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig.property.useCallerCredentials"></a>

- *Type:* `boolean`

---

##### `versioned`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfig.property.versioned"></a>

- *Type:* `boolean`

---


### AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `baseTableTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl"></a>

- *Type:* `number`

---

##### `deltaSyncTableName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

- *Type:* `string`

---

##### `deltaSyncTableTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

- *Type:* `number`

---


### AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceElasticsearchConfig.property.endpoint"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateDataSourceDataSourceHttpConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig.property.authorizationConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig)

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfig.property.endpoint"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

- *Type:* `string`

---

##### `awsIamConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig)

---


### AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `signingRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

- *Type:* `string`

---

##### `signingServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceLambdaConfig.property.lambdaFunctionArn"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `rdsHttpEndpointConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig)

---

##### `relationalDatabaseSourceType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `awsSecretStoreArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateDataSourceDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateFunction <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunction"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunction.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateFunction(__scope: Construct, __resources: string[], __input: AppSyncUpdateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `functionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunction.property.functionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration)

---


### AppSyncResponsesUpdateFunctionFunctionConfiguration <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration(__scope: Construct, __resources: string[], __input: AppSyncUpdateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.property.dataSourceName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.property.functionArn"></a>

- *Type:* `string`

---

##### `functionId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.property.functionId"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.property.name"></a>

- *Type:* `string`

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateFunctionFunctionConfiguration.property.responseMappingTemplate"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateGraphqlApi <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApi"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApi.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateGraphqlApi(__scope: Construct, __resources: string[], __input: AppSyncUpdateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `graphqlApi`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApi.property.graphqlApi"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi)

---


### AppSyncResponsesUpdateGraphqlApiGraphqlApi <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi(__scope: Construct, __resources: string[], __input: AppSyncUpdateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalAuthenticationProviders`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.additionalAuthenticationProviders"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider`](#aws-cdk-sdk.appsync.AppSyncAdditionalAuthenticationProvider)[]

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.apiId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.arn"></a>

- *Type:* `string`

---

##### `authenticationType`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.authenticationType"></a>

- *Type:* `string`

---

##### `logConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.name"></a>

- *Type:* `string`

---

##### `openIdConnectConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.openIdConnectConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `uris`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.uris"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userPoolConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.userPoolConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig)

---

##### `wafWebAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.wafWebAclArn"></a>

- *Type:* `string`

---

##### `xrayEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApi.property.xrayEnabled"></a>

- *Type:* `boolean`

---


### AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `excludeVerboseContent`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig.property.excludeVerboseContent"></a>

- *Type:* `boolean`

---

##### `fieldLogLevel`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiLogConfig.property.fieldLogLevel"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `authTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig.property.authTtl"></a>

- *Type:* `number`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig.property.clientId"></a>

- *Type:* `string`

---

##### `iatTtl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig.property.iatTtl"></a>

- *Type:* `number`

---

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiOpenIdConnectConfig.property.issuer"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateGraphqlApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateGraphqlApiRequest)

---



#### Properties <a name="Properties"></a>

##### `appIdClientRegex`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig.property.appIdClientRegex"></a>

- *Type:* `string`

---

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig.property.awsRegion"></a>

- *Type:* `string`

---

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig.property.defaultAction"></a>

- *Type:* `string`

---

##### `userPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateGraphqlApiGraphqlApiUserPoolConfig.property.userPoolId"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateResolver <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolver"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolver.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateResolver(__scope: Construct, __resources: string[], __input: AppSyncUpdateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolver.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolver.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolver.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `resolver`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolver.property.resolver"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver)

---


### AppSyncResponsesUpdateResolverResolver <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateResolverResolver(__scope: Construct, __resources: string[], __input: AppSyncUpdateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `cachingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.cachingConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverCachingConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverCachingConfig)

---

##### `dataSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.dataSourceName"></a>

- *Type:* `string`

---

##### `fieldName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.fieldName"></a>

- *Type:* `string`

---

##### `kind`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.kind"></a>

- *Type:* `string`

---

##### `pipelineConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.pipelineConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverPipelineConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverPipelineConfig)

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.requestMappingTemplate"></a>

- *Type:* `string`

---

##### `resolverArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.resolverArn"></a>

- *Type:* `string`

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.responseMappingTemplate"></a>

- *Type:* `string`

---

##### `syncConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.syncConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig)

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolver.property.typeName"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateResolverResolverCachingConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverCachingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverCachingConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateResolverResolverCachingConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverCachingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverCachingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverCachingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `cachingKeys`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverCachingConfig.property.cachingKeys"></a>

- *Type:* `string`[]

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverCachingConfig.property.ttl"></a>

- *Type:* `number`

---


### AppSyncResponsesUpdateResolverResolverPipelineConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverPipelineConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverPipelineConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateResolverResolverPipelineConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverPipelineConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverPipelineConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverPipelineConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `functions`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverPipelineConfig.property.functions"></a>

- *Type:* `string`[]

---


### AppSyncResponsesUpdateResolverResolverSyncConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateResolverResolverSyncConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `conflictDetection`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig.property.conflictDetection"></a>

- *Type:* `string`

---

##### `conflictHandler`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig.property.conflictHandler"></a>

- *Type:* `string`

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfig.property.lambdaConflictHandlerConfig"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig)

---


### AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig(__scope: Construct, __resources: string[], __input: AppSyncUpdateResolverRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateResolverRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateResolverResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

- *Type:* `string`

---


### AppSyncResponsesUpdateType <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateType"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateType.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateType(__scope: Construct, __resources: string[], __input: AppSyncUpdateTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateType.property.type"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType`](#aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType)

---


### AppSyncResponsesUpdateTypeType <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType"></a>

#### Initializer <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType.Initializer"></a>

```typescript
import { appsync } from 'aws-cdk-sdk'

new appsync.AppSyncResponsesUpdateTypeType(__scope: Construct, __resources: string[], __input: AppSyncUpdateTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest`](#aws-cdk-sdk.appsync.AppSyncUpdateTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType.property.arn"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType.property.definition"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType.property.description"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType.property.format"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appsync.AppSyncResponsesUpdateTypeType.property.name"></a>

- *Type:* `string`

---



