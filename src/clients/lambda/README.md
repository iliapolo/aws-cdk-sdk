# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### LambdaClient <a name="aws-cdk-sdk.lambda.LambdaClient"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaClient.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addLayerVersionPermission` <a name="aws-cdk-sdk.lambda.LambdaClient.addLayerVersionPermission"></a>

```typescript
public addLayerVersionPermission(input: LambdaAddLayerVersionPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest`](#aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest)

---

##### `addPermission` <a name="aws-cdk-sdk.lambda.LambdaClient.addPermission"></a>

```typescript
public addPermission(input: LambdaAddPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAddPermissionRequest`](#aws-cdk-sdk.lambda.LambdaAddPermissionRequest)

---

##### `createAlias` <a name="aws-cdk-sdk.lambda.LambdaClient.createAlias"></a>

```typescript
public createAlias(input: LambdaCreateAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateAliasRequest`](#aws-cdk-sdk.lambda.LambdaCreateAliasRequest)

---

##### `createCodeSigningConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.createCodeSigningConfig"></a>

```typescript
public createCodeSigningConfig(input: LambdaCreateCodeSigningConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest)

---

##### `createEventSourceMapping` <a name="aws-cdk-sdk.lambda.LambdaClient.createEventSourceMapping"></a>

```typescript
public createEventSourceMapping(input: LambdaCreateEventSourceMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest)

---

##### `createFunction` <a name="aws-cdk-sdk.lambda.LambdaClient.createFunction"></a>

```typescript
public createFunction(input: LambdaCreateFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateFunctionRequest`](#aws-cdk-sdk.lambda.LambdaCreateFunctionRequest)

---

##### `deleteAlias` <a name="aws-cdk-sdk.lambda.LambdaClient.deleteAlias"></a>

```typescript
public deleteAlias(input: LambdaDeleteAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteAliasRequest`](#aws-cdk-sdk.lambda.LambdaDeleteAliasRequest)

---

##### `deleteCodeSigningConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.deleteCodeSigningConfig"></a>

```typescript
public deleteCodeSigningConfig(input: LambdaDeleteCodeSigningConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaDeleteCodeSigningConfigRequest)

---

##### `deleteEventSourceMapping` <a name="aws-cdk-sdk.lambda.LambdaClient.deleteEventSourceMapping"></a>

```typescript
public deleteEventSourceMapping(input: LambdaDeleteEventSourceMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest)

---

##### `deleteFunction` <a name="aws-cdk-sdk.lambda.LambdaClient.deleteFunction"></a>

```typescript
public deleteFunction(input: LambdaDeleteFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteFunctionRequest`](#aws-cdk-sdk.lambda.LambdaDeleteFunctionRequest)

---

##### `deleteFunctionCodeSigningConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.deleteFunctionCodeSigningConfig"></a>

```typescript
public deleteFunctionCodeSigningConfig(input: LambdaDeleteFunctionCodeSigningConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteFunctionCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaDeleteFunctionCodeSigningConfigRequest)

---

##### `deleteFunctionConcurrency` <a name="aws-cdk-sdk.lambda.LambdaClient.deleteFunctionConcurrency"></a>

```typescript
public deleteFunctionConcurrency(input: LambdaDeleteFunctionConcurrencyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteFunctionConcurrencyRequest`](#aws-cdk-sdk.lambda.LambdaDeleteFunctionConcurrencyRequest)

---

##### `deleteFunctionEventInvokeConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.deleteFunctionEventInvokeConfig"></a>

```typescript
public deleteFunctionEventInvokeConfig(input: LambdaDeleteFunctionEventInvokeConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaDeleteFunctionEventInvokeConfigRequest)

---

##### `deleteLayerVersion` <a name="aws-cdk-sdk.lambda.LambdaClient.deleteLayerVersion"></a>

```typescript
public deleteLayerVersion(input: LambdaDeleteLayerVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteLayerVersionRequest`](#aws-cdk-sdk.lambda.LambdaDeleteLayerVersionRequest)

---

##### `deleteProvisionedConcurrencyConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.deleteProvisionedConcurrencyConfig"></a>

```typescript
public deleteProvisionedConcurrencyConfig(input: LambdaDeleteProvisionedConcurrencyConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteProvisionedConcurrencyConfigRequest`](#aws-cdk-sdk.lambda.LambdaDeleteProvisionedConcurrencyConfigRequest)

---

##### `fetchAccountSettings` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchAccountSettings"></a>

```typescript
public fetchAccountSettings()
```

##### `fetchAlias` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchAlias"></a>

```typescript
public fetchAlias(input: LambdaGetAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetAliasRequest`](#aws-cdk-sdk.lambda.LambdaGetAliasRequest)

---

##### `fetchCodeSigningConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchCodeSigningConfig"></a>

```typescript
public fetchCodeSigningConfig(input: LambdaGetCodeSigningConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest)

---

##### `fetchEventSourceMapping` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchEventSourceMapping"></a>

```typescript
public fetchEventSourceMapping(input: LambdaGetEventSourceMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest)

---

##### `fetchFunction` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchFunction"></a>

```typescript
public fetchFunction(input: LambdaGetFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionRequest)

---

##### `fetchFunctionCodeSigningConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchFunctionCodeSigningConfig"></a>

```typescript
public fetchFunctionCodeSigningConfig(input: LambdaGetFunctionCodeSigningConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionCodeSigningConfigRequest)

---

##### `fetchFunctionConcurrency` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchFunctionConcurrency"></a>

```typescript
public fetchFunctionConcurrency(input: LambdaGetFunctionConcurrencyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionConcurrencyRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionConcurrencyRequest)

---

##### `fetchFunctionConfiguration` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchFunctionConfiguration"></a>

```typescript
public fetchFunctionConfiguration(input: LambdaGetFunctionConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest)

---

##### `fetchFunctionEventInvokeConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchFunctionEventInvokeConfig"></a>

```typescript
public fetchFunctionEventInvokeConfig(input: LambdaGetFunctionEventInvokeConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest)

---

##### `fetchLayerVersion` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchLayerVersion"></a>

```typescript
public fetchLayerVersion(input: LambdaGetLayerVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetLayerVersionRequest`](#aws-cdk-sdk.lambda.LambdaGetLayerVersionRequest)

---

##### `fetchLayerVersionByArn` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchLayerVersionByArn"></a>

```typescript
public fetchLayerVersionByArn(input: LambdaGetLayerVersionByArnRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetLayerVersionByArnRequest`](#aws-cdk-sdk.lambda.LambdaGetLayerVersionByArnRequest)

---

##### `fetchLayerVersionPolicy` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchLayerVersionPolicy"></a>

```typescript
public fetchLayerVersionPolicy(input: LambdaGetLayerVersionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyRequest`](#aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyRequest)

---

##### `fetchPolicy` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchPolicy"></a>

```typescript
public fetchPolicy(input: LambdaGetPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetPolicyRequest`](#aws-cdk-sdk.lambda.LambdaGetPolicyRequest)

---

##### `fetchProvisionedConcurrencyConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.fetchProvisionedConcurrencyConfig"></a>

```typescript
public fetchProvisionedConcurrencyConfig(input: LambdaGetProvisionedConcurrencyConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigRequest)

---

##### `invoke` <a name="aws-cdk-sdk.lambda.LambdaClient.invoke"></a>

```typescript
public invoke(input: LambdaInvocationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaInvocationRequest`](#aws-cdk-sdk.lambda.LambdaInvocationRequest)

---

##### `invokeAsync` <a name="aws-cdk-sdk.lambda.LambdaClient.invokeAsync"></a>

```typescript
public invokeAsync(input: LambdaInvokeAsyncRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaInvokeAsyncRequest`](#aws-cdk-sdk.lambda.LambdaInvokeAsyncRequest)

---

##### `listAliases` <a name="aws-cdk-sdk.lambda.LambdaClient.listAliases"></a>

```typescript
public listAliases(input: LambdaListAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListAliasesRequest`](#aws-cdk-sdk.lambda.LambdaListAliasesRequest)

---

##### `listCodeSigningConfigs` <a name="aws-cdk-sdk.lambda.LambdaClient.listCodeSigningConfigs"></a>

```typescript
public listCodeSigningConfigs(input: LambdaListCodeSigningConfigsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsRequest`](#aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsRequest)

---

##### `listEventSourceMappings` <a name="aws-cdk-sdk.lambda.LambdaClient.listEventSourceMappings"></a>

```typescript
public listEventSourceMappings(input: LambdaListEventSourceMappingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListEventSourceMappingsRequest`](#aws-cdk-sdk.lambda.LambdaListEventSourceMappingsRequest)

---

##### `listFunctionEventInvokeConfigs` <a name="aws-cdk-sdk.lambda.LambdaClient.listFunctionEventInvokeConfigs"></a>

```typescript
public listFunctionEventInvokeConfigs(input: LambdaListFunctionEventInvokeConfigsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsRequest`](#aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsRequest)

---

##### `listFunctions` <a name="aws-cdk-sdk.lambda.LambdaClient.listFunctions"></a>

```typescript
public listFunctions(input: LambdaListFunctionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListFunctionsRequest`](#aws-cdk-sdk.lambda.LambdaListFunctionsRequest)

---

##### `listFunctionsByCodeSigningConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.listFunctionsByCodeSigningConfig"></a>

```typescript
public listFunctionsByCodeSigningConfig(input: LambdaListFunctionsByCodeSigningConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigRequest)

---

##### `listLayers` <a name="aws-cdk-sdk.lambda.LambdaClient.listLayers"></a>

```typescript
public listLayers(input: LambdaListLayersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListLayersRequest`](#aws-cdk-sdk.lambda.LambdaListLayersRequest)

---

##### `listLayerVersions` <a name="aws-cdk-sdk.lambda.LambdaClient.listLayerVersions"></a>

```typescript
public listLayerVersions(input: LambdaListLayerVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListLayerVersionsRequest`](#aws-cdk-sdk.lambda.LambdaListLayerVersionsRequest)

---

##### `listProvisionedConcurrencyConfigs` <a name="aws-cdk-sdk.lambda.LambdaClient.listProvisionedConcurrencyConfigs"></a>

```typescript
public listProvisionedConcurrencyConfigs(input: LambdaListProvisionedConcurrencyConfigsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsRequest`](#aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsRequest)

---

##### `listTags` <a name="aws-cdk-sdk.lambda.LambdaClient.listTags"></a>

```typescript
public listTags(input: LambdaListTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListTagsRequest`](#aws-cdk-sdk.lambda.LambdaListTagsRequest)

---

##### `listVersionsByFunction` <a name="aws-cdk-sdk.lambda.LambdaClient.listVersionsByFunction"></a>

```typescript
public listVersionsByFunction(input: LambdaListVersionsByFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListVersionsByFunctionRequest`](#aws-cdk-sdk.lambda.LambdaListVersionsByFunctionRequest)

---

##### `publishLayerVersion` <a name="aws-cdk-sdk.lambda.LambdaClient.publishLayerVersion"></a>

```typescript
public publishLayerVersion(input: LambdaPublishLayerVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest)

---

##### `publishVersion` <a name="aws-cdk-sdk.lambda.LambdaClient.publishVersion"></a>

```typescript
public publishVersion(input: LambdaPublishVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishVersionRequest)

---

##### `putFunctionCodeSigningConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.putFunctionCodeSigningConfig"></a>

```typescript
public putFunctionCodeSigningConfig(input: LambdaPutFunctionCodeSigningConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigRequest)

---

##### `putFunctionConcurrency` <a name="aws-cdk-sdk.lambda.LambdaClient.putFunctionConcurrency"></a>

```typescript
public putFunctionConcurrency(input: LambdaPutFunctionConcurrencyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutFunctionConcurrencyRequest`](#aws-cdk-sdk.lambda.LambdaPutFunctionConcurrencyRequest)

---

##### `putFunctionEventInvokeConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.putFunctionEventInvokeConfig"></a>

```typescript
public putFunctionEventInvokeConfig(input: LambdaPutFunctionEventInvokeConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest)

---

##### `putProvisionedConcurrencyConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.putProvisionedConcurrencyConfig"></a>

```typescript
public putProvisionedConcurrencyConfig(input: LambdaPutProvisionedConcurrencyConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigRequest`](#aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigRequest)

---

##### `removeLayerVersionPermission` <a name="aws-cdk-sdk.lambda.LambdaClient.removeLayerVersionPermission"></a>

```typescript
public removeLayerVersionPermission(input: LambdaRemoveLayerVersionPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaRemoveLayerVersionPermissionRequest`](#aws-cdk-sdk.lambda.LambdaRemoveLayerVersionPermissionRequest)

---

##### `removePermission` <a name="aws-cdk-sdk.lambda.LambdaClient.removePermission"></a>

```typescript
public removePermission(input: LambdaRemovePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaRemovePermissionRequest`](#aws-cdk-sdk.lambda.LambdaRemovePermissionRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.lambda.LambdaClient.tagResource"></a>

```typescript
public tagResource(input: LambdaTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaTagResourceRequest`](#aws-cdk-sdk.lambda.LambdaTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.lambda.LambdaClient.untagResource"></a>

```typescript
public untagResource(input: LambdaUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUntagResourceRequest`](#aws-cdk-sdk.lambda.LambdaUntagResourceRequest)

---

##### `updateAlias` <a name="aws-cdk-sdk.lambda.LambdaClient.updateAlias"></a>

```typescript
public updateAlias(input: LambdaUpdateAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateAliasRequest`](#aws-cdk-sdk.lambda.LambdaUpdateAliasRequest)

---

##### `updateCodeSigningConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.updateCodeSigningConfig"></a>

```typescript
public updateCodeSigningConfig(input: LambdaUpdateCodeSigningConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest)

---

##### `updateEventSourceMapping` <a name="aws-cdk-sdk.lambda.LambdaClient.updateEventSourceMapping"></a>

```typescript
public updateEventSourceMapping(input: LambdaUpdateEventSourceMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest)

---

##### `updateFunctionCode` <a name="aws-cdk-sdk.lambda.LambdaClient.updateFunctionCode"></a>

```typescript
public updateFunctionCode(input: LambdaUpdateFunctionCodeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest)

---

##### `updateFunctionConfiguration` <a name="aws-cdk-sdk.lambda.LambdaClient.updateFunctionConfiguration"></a>

```typescript
public updateFunctionConfiguration(input: LambdaUpdateFunctionConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest)

---

##### `updateFunctionEventInvokeConfig` <a name="aws-cdk-sdk.lambda.LambdaClient.updateFunctionEventInvokeConfig"></a>

```typescript
public updateFunctionEventInvokeConfig(input: LambdaUpdateFunctionEventInvokeConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest)

---




## Structs <a name="Structs"></a>

### LambdaAccountLimit <a name="aws-cdk-sdk.lambda.LambdaAccountLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaAccountLimit: lambda.LambdaAccountLimit = { ... }
```

##### `codeSizeUnzipped`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAccountLimit.property.codeSizeUnzipped"></a>

- *Type:* `number`

---

##### `codeSizeZipped`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAccountLimit.property.codeSizeZipped"></a>

- *Type:* `number`

---

##### `concurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAccountLimit.property.concurrentExecutions"></a>

- *Type:* `number`

---

##### `totalCodeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAccountLimit.property.totalCodeSize"></a>

- *Type:* `number`

---

##### `unreservedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAccountLimit.property.unreservedConcurrentExecutions"></a>

- *Type:* `number`

---

### LambdaAccountUsage <a name="aws-cdk-sdk.lambda.LambdaAccountUsage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaAccountUsage: lambda.LambdaAccountUsage = { ... }
```

##### `functionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAccountUsage.property.functionCount"></a>

- *Type:* `number`

---

##### `totalCodeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAccountUsage.property.totalCodeSize"></a>

- *Type:* `number`

---

### LambdaAddLayerVersionPermissionRequest <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaAddLayerVersionPermissionRequest: lambda.LambdaAddLayerVersionPermissionRequest = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest.property.action"></a>

- *Type:* `string`

---

##### `layerName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest.property.layerName"></a>

- *Type:* `string`

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest.property.principal"></a>

- *Type:* `string`

---

##### `statementId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest.property.statementId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest.property.versionNumber"></a>

- *Type:* `number`

---

##### `organizationId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest.property.organizationId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest.property.revisionId"></a>

- *Type:* `string`

---

### LambdaAddLayerVersionPermissionResponse <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaAddLayerVersionPermissionResponse: lambda.LambdaAddLayerVersionPermissionResponse = { ... }
```

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `statement`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionResponse.property.statement"></a>

- *Type:* `string`

---

### LambdaAddPermissionRequest <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaAddPermissionRequest: lambda.LambdaAddPermissionRequest = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest.property.action"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest.property.principal"></a>

- *Type:* `string`

---

##### `statementId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest.property.statementId"></a>

- *Type:* `string`

---

##### `eventSourceToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest.property.eventSourceToken"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest.property.qualifier"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `sourceAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest.property.sourceAccount"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionRequest.property.sourceArn"></a>

- *Type:* `string`

---

### LambdaAddPermissionResponse <a name="aws-cdk-sdk.lambda.LambdaAddPermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaAddPermissionResponse: lambda.LambdaAddPermissionResponse = { ... }
```

##### `statement`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAddPermissionResponse.property.statement"></a>

- *Type:* `string`

---

### LambdaAliasConfiguration <a name="aws-cdk-sdk.lambda.LambdaAliasConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaAliasConfiguration: lambda.LambdaAliasConfiguration = { ... }
```

##### `aliasArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAliasConfiguration.property.aliasArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAliasConfiguration.property.description"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAliasConfiguration.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAliasConfiguration.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAliasConfiguration.property.revisionId"></a>

- *Type:* `string`

---

##### `routingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAliasConfiguration.property.routingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAliasRoutingConfiguration`](#aws-cdk-sdk.lambda.LambdaAliasRoutingConfiguration)

---

### LambdaAliasRoutingConfiguration <a name="aws-cdk-sdk.lambda.LambdaAliasRoutingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaAliasRoutingConfiguration: lambda.LambdaAliasRoutingConfiguration = { ... }
```

##### `additionalVersionWeights`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaAliasRoutingConfiguration.property.additionalVersionWeights"></a>

- *Type:* {[ key: string ]: `number`}

---

### LambdaAllowedPublishers <a name="aws-cdk-sdk.lambda.LambdaAllowedPublishers"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaAllowedPublishers: lambda.LambdaAllowedPublishers = { ... }
```

##### `signingProfileVersionArns`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaAllowedPublishers.property.signingProfileVersionArns"></a>

- *Type:* `string`[]

---

### LambdaCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaCodeSigningConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaCodeSigningConfig: lambda.LambdaCodeSigningConfig = { ... }
```

##### `allowedPublishers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCodeSigningConfig.property.allowedPublishers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAllowedPublishers`](#aws-cdk-sdk.lambda.LambdaAllowedPublishers)

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCodeSigningConfig.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `codeSigningConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCodeSigningConfig.property.codeSigningConfigId"></a>

- *Type:* `string`

---

##### `codeSigningPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCodeSigningConfig.property.codeSigningPolicies"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCodeSigningPolicies`](#aws-cdk-sdk.lambda.LambdaCodeSigningPolicies)

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCodeSigningConfig.property.lastModified"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCodeSigningConfig.property.description"></a>

- *Type:* `string`

---

### LambdaCodeSigningPolicies <a name="aws-cdk-sdk.lambda.LambdaCodeSigningPolicies"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaCodeSigningPolicies: lambda.LambdaCodeSigningPolicies = { ... }
```

##### `untrustedArtifactOnDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCodeSigningPolicies.property.untrustedArtifactOnDeployment"></a>

- *Type:* `string`

---

### LambdaConcurrency <a name="aws-cdk-sdk.lambda.LambdaConcurrency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaConcurrency: lambda.LambdaConcurrency = { ... }
```

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaConcurrency.property.reservedConcurrentExecutions"></a>

- *Type:* `number`

---

### LambdaCreateAliasRequest <a name="aws-cdk-sdk.lambda.LambdaCreateAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaCreateAliasRequest: lambda.LambdaCreateAliasRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateAliasRequest.property.functionName"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateAliasRequest.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateAliasRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateAliasRequest.property.description"></a>

- *Type:* `string`

---

##### `routingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateAliasRequest.property.routingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAliasRoutingConfiguration`](#aws-cdk-sdk.lambda.LambdaAliasRoutingConfiguration)

---

### LambdaCreateCodeSigningConfigRequest <a name="aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaCreateCodeSigningConfigRequest: lambda.LambdaCreateCodeSigningConfigRequest = { ... }
```

##### `allowedPublishers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest.property.allowedPublishers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAllowedPublishers`](#aws-cdk-sdk.lambda.LambdaAllowedPublishers)

---

##### `codeSigningPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest.property.codeSigningPolicies"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCodeSigningPolicies`](#aws-cdk-sdk.lambda.LambdaCodeSigningPolicies)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest.property.description"></a>

- *Type:* `string`

---

### LambdaCreateCodeSigningConfigResponse <a name="aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaCreateCodeSigningConfigResponse: lambda.LambdaCreateCodeSigningConfigResponse = { ... }
```

##### `codeSigningConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigResponse.property.codeSigningConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCodeSigningConfig`](#aws-cdk-sdk.lambda.LambdaCodeSigningConfig)

---

### LambdaCreateEventSourceMappingRequest <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaCreateEventSourceMappingRequest: lambda.LambdaCreateEventSourceMappingRequest = { ... }
```

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.functionName"></a>

- *Type:* `string`

---

##### `batchSize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.batchSize"></a>

- *Type:* `number`

---

##### `bisectBatchOnFunctionError`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.bisectBatchOnFunctionError"></a>

- *Type:* `boolean`

---

##### `destinationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDestinationConfig`](#aws-cdk-sdk.lambda.LambdaDestinationConfig)

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.enabled"></a>

- *Type:* `boolean`

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.maximumBatchingWindowInSeconds"></a>

- *Type:* `number`

---

##### `maximumRecordAgeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.maximumRecordAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

##### `parallelizationFactor`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.parallelizationFactor"></a>

- *Type:* `number`

---

##### `queues`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.queues"></a>

- *Type:* `string`[]

---

##### `sourceAccessConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.sourceAccessConfigurations"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration`](#aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration)[]

---

##### `startingPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.startingPosition"></a>

- *Type:* `string`

---

##### `startingPositionTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.startingPositionTimestamp"></a>

- *Type:* `string`

---

##### `topics`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest.property.topics"></a>

- *Type:* `string`[]

---

### LambdaCreateFunctionRequest <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaCreateFunctionRequest: lambda.LambdaCreateFunctionRequest = { ... }
```

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.code"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFunctionCode`](#aws-cdk-sdk.lambda.LambdaFunctionCode)

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `handler`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.handler"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.role"></a>

- *Type:* `string`

---

##### `runtime`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.runtime"></a>

- *Type:* `string`

---

##### `codeSigningConfigArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeadLetterConfig`](#aws-cdk-sdk.lambda.LambdaDeadLetterConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.description"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.environment"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaEnvironment`](#aws-cdk-sdk.lambda.LambdaEnvironment)

---

##### `fileSystemConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.fileSystemConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFileSystemConfig`](#aws-cdk-sdk.lambda.LambdaFileSystemConfig)[]

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `layers`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.layers"></a>

- *Type:* `string`[]

---

##### `memorySize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.memorySize"></a>

- *Type:* `number`

---

##### `publish`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.publish"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.timeout"></a>

- *Type:* `number`

---

##### `tracingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.tracingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaTracingConfig`](#aws-cdk-sdk.lambda.LambdaTracingConfig)

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaCreateFunctionRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaVpcConfig`](#aws-cdk-sdk.lambda.LambdaVpcConfig)

---

### LambdaDeadLetterConfig <a name="aws-cdk-sdk.lambda.LambdaDeadLetterConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeadLetterConfig: lambda.LambdaDeadLetterConfig = { ... }
```

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaDeadLetterConfig.property.targetArn"></a>

- *Type:* `string`

---

### LambdaDeleteAliasRequest <a name="aws-cdk-sdk.lambda.LambdaDeleteAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteAliasRequest: lambda.LambdaDeleteAliasRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteAliasRequest.property.functionName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteAliasRequest.property.name"></a>

- *Type:* `string`

---

### LambdaDeleteCodeSigningConfigRequest <a name="aws-cdk-sdk.lambda.LambdaDeleteCodeSigningConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteCodeSigningConfigRequest: lambda.LambdaDeleteCodeSigningConfigRequest = { ... }
```

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteCodeSigningConfigRequest.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

### LambdaDeleteCodeSigningConfigResponse <a name="aws-cdk-sdk.lambda.LambdaDeleteCodeSigningConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteCodeSigningConfigResponse: lambda.LambdaDeleteCodeSigningConfigResponse = { ... }
```

### LambdaDeleteEventSourceMappingRequest <a name="aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteEventSourceMappingRequest: lambda.LambdaDeleteEventSourceMappingRequest = { ... }
```

##### `uuid`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest.property.uuid"></a>

- *Type:* `string`

---

### LambdaDeleteFunctionCodeSigningConfigRequest <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionCodeSigningConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteFunctionCodeSigningConfigRequest: lambda.LambdaDeleteFunctionCodeSigningConfigRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionCodeSigningConfigRequest.property.functionName"></a>

- *Type:* `string`

---

### LambdaDeleteFunctionConcurrencyRequest <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionConcurrencyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteFunctionConcurrencyRequest: lambda.LambdaDeleteFunctionConcurrencyRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionConcurrencyRequest.property.functionName"></a>

- *Type:* `string`

---

### LambdaDeleteFunctionEventInvokeConfigRequest <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionEventInvokeConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteFunctionEventInvokeConfigRequest: lambda.LambdaDeleteFunctionEventInvokeConfigRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionEventInvokeConfigRequest.property.functionName"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionEventInvokeConfigRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaDeleteFunctionRequest <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteFunctionRequest: lambda.LambdaDeleteFunctionRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteFunctionRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaDeleteLayerVersionRequest <a name="aws-cdk-sdk.lambda.LambdaDeleteLayerVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteLayerVersionRequest: lambda.LambdaDeleteLayerVersionRequest = { ... }
```

##### `layerName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteLayerVersionRequest.property.layerName"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteLayerVersionRequest.property.versionNumber"></a>

- *Type:* `number`

---

### LambdaDeleteProvisionedConcurrencyConfigRequest <a name="aws-cdk-sdk.lambda.LambdaDeleteProvisionedConcurrencyConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDeleteProvisionedConcurrencyConfigRequest: lambda.LambdaDeleteProvisionedConcurrencyConfigRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteProvisionedConcurrencyConfigRequest.property.functionName"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaDeleteProvisionedConcurrencyConfigRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaDestinationConfig <a name="aws-cdk-sdk.lambda.LambdaDestinationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaDestinationConfig: lambda.LambdaDestinationConfig = { ... }
```

##### `onFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaDestinationConfig.property.onFailure"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaOnFailure`](#aws-cdk-sdk.lambda.LambdaOnFailure)

---

##### `onSuccess`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaDestinationConfig.property.onSuccess"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaOnSuccess`](#aws-cdk-sdk.lambda.LambdaOnSuccess)

---

### LambdaEnvironment <a name="aws-cdk-sdk.lambda.LambdaEnvironment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaEnvironment: lambda.LambdaEnvironment = { ... }
```

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEnvironment.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

### LambdaEnvironmentError <a name="aws-cdk-sdk.lambda.LambdaEnvironmentError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaEnvironmentError: lambda.LambdaEnvironmentError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEnvironmentError.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEnvironmentError.property.message"></a>

- *Type:* `string`

---

### LambdaEnvironmentResponse <a name="aws-cdk-sdk.lambda.LambdaEnvironmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaEnvironmentResponse: lambda.LambdaEnvironmentResponse = { ... }
```

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEnvironmentResponse.property.error"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaEnvironmentError`](#aws-cdk-sdk.lambda.LambdaEnvironmentError)

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEnvironmentResponse.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

### LambdaEventSourceMappingConfiguration <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaEventSourceMappingConfiguration: lambda.LambdaEventSourceMappingConfiguration = { ... }
```

##### `batchSize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.batchSize"></a>

- *Type:* `number`

---

##### `bisectBatchOnFunctionError`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.bisectBatchOnFunctionError"></a>

- *Type:* `boolean`

---

##### `destinationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDestinationConfig`](#aws-cdk-sdk.lambda.LambdaDestinationConfig)

---

##### `eventSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.lastModified"></a>

- *Type:* `string`

---

##### `lastProcessingResult`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.lastProcessingResult"></a>

- *Type:* `string`

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.maximumBatchingWindowInSeconds"></a>

- *Type:* `number`

---

##### `maximumRecordAgeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.maximumRecordAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

##### `parallelizationFactor`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.parallelizationFactor"></a>

- *Type:* `number`

---

##### `queues`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.queues"></a>

- *Type:* `string`[]

---

##### `sourceAccessConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.sourceAccessConfigurations"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration`](#aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration)[]

---

##### `startingPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.startingPosition"></a>

- *Type:* `string`

---

##### `startingPositionTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.startingPositionTimestamp"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.state"></a>

- *Type:* `string`

---

##### `stateTransitionReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.stateTransitionReason"></a>

- *Type:* `string`

---

##### `topics`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.topics"></a>

- *Type:* `string`[]

---

##### `uuid`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration.property.uuid"></a>

- *Type:* `string`

---

### LambdaFileSystemConfig <a name="aws-cdk-sdk.lambda.LambdaFileSystemConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaFileSystemConfig: lambda.LambdaFileSystemConfig = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaFileSystemConfig.property.arn"></a>

- *Type:* `string`

---

##### `localMountPath`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaFileSystemConfig.property.localMountPath"></a>

- *Type:* `string`

---

### LambdaFunctionCode <a name="aws-cdk-sdk.lambda.LambdaFunctionCode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaFunctionCode: lambda.LambdaFunctionCode = { ... }
```

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionCode.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionCode.property.s3Key"></a>

- *Type:* `string`

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionCode.property.s3ObjectVersion"></a>

- *Type:* `string`

---

##### `zipFile`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionCode.property.zipFile"></a>

- *Type:* `any`

---

### LambdaFunctionCodeLocation <a name="aws-cdk-sdk.lambda.LambdaFunctionCodeLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaFunctionCodeLocation: lambda.LambdaFunctionCodeLocation = { ... }
```

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionCodeLocation.property.location"></a>

- *Type:* `string`

---

##### `repositoryType`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionCodeLocation.property.repositoryType"></a>

- *Type:* `string`

---

### LambdaFunctionConfiguration <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaFunctionConfiguration: lambda.LambdaFunctionConfiguration = { ... }
```

##### `codeSha256`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.codeSize"></a>

- *Type:* `number`

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeadLetterConfig`](#aws-cdk-sdk.lambda.LambdaDeadLetterConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.environment"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaEnvironmentResponse`](#aws-cdk-sdk.lambda.LambdaEnvironmentResponse)

---

##### `fileSystemConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.fileSystemConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFileSystemConfig`](#aws-cdk-sdk.lambda.LambdaFileSystemConfig)[]

---

##### `functionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.functionArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.functionName"></a>

- *Type:* `string`

---

##### `handler`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.handler"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.lastModified"></a>

- *Type:* `string`

---

##### `lastUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.lastUpdateStatus"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.lastUpdateStatusReason"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReasonCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.lastUpdateStatusReasonCode"></a>

- *Type:* `string`

---

##### `layers`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.layers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayer`](#aws-cdk-sdk.lambda.LambdaLayer)[]

---

##### `masterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.masterArn"></a>

- *Type:* `string`

---

##### `memorySize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.memorySize"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.revisionId"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.role"></a>

- *Type:* `string`

---

##### `runtime`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.runtime"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.signingProfileVersionArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.stateReasonCode"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.timeout"></a>

- *Type:* `number`

---

##### `tracingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.tracingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaTracingConfigResponse`](#aws-cdk-sdk.lambda.LambdaTracingConfigResponse)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.version"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionConfiguration.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaVpcConfigResponse`](#aws-cdk-sdk.lambda.LambdaVpcConfigResponse)

---

### LambdaFunctionEventInvokeConfig <a name="aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaFunctionEventInvokeConfig: lambda.LambdaFunctionEventInvokeConfig = { ... }
```

##### `destinationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDestinationConfig`](#aws-cdk-sdk.lambda.LambdaDestinationConfig)

---

##### `functionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig.property.lastModified"></a>

- *Type:* `string`

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

### LambdaGetAccountSettingsRequest <a name="aws-cdk-sdk.lambda.LambdaGetAccountSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetAccountSettingsRequest: lambda.LambdaGetAccountSettingsRequest = { ... }
```

### LambdaGetAccountSettingsResponse <a name="aws-cdk-sdk.lambda.LambdaGetAccountSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetAccountSettingsResponse: lambda.LambdaGetAccountSettingsResponse = { ... }
```

##### `accountLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetAccountSettingsResponse.property.accountLimit"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAccountLimit`](#aws-cdk-sdk.lambda.LambdaAccountLimit)

---

##### `accountUsage`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetAccountSettingsResponse.property.accountUsage"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAccountUsage`](#aws-cdk-sdk.lambda.LambdaAccountUsage)

---

### LambdaGetAliasRequest <a name="aws-cdk-sdk.lambda.LambdaGetAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetAliasRequest: lambda.LambdaGetAliasRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetAliasRequest.property.functionName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetAliasRequest.property.name"></a>

- *Type:* `string`

---

### LambdaGetCodeSigningConfigRequest <a name="aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetCodeSigningConfigRequest: lambda.LambdaGetCodeSigningConfigRequest = { ... }
```

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

### LambdaGetCodeSigningConfigResponse <a name="aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetCodeSigningConfigResponse: lambda.LambdaGetCodeSigningConfigResponse = { ... }
```

##### `codeSigningConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigResponse.property.codeSigningConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCodeSigningConfig`](#aws-cdk-sdk.lambda.LambdaCodeSigningConfig)

---

### LambdaGetEventSourceMappingRequest <a name="aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetEventSourceMappingRequest: lambda.LambdaGetEventSourceMappingRequest = { ... }
```

##### `uuid`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest.property.uuid"></a>

- *Type:* `string`

---

### LambdaGetFunctionCodeSigningConfigRequest <a name="aws-cdk-sdk.lambda.LambdaGetFunctionCodeSigningConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetFunctionCodeSigningConfigRequest: lambda.LambdaGetFunctionCodeSigningConfigRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionCodeSigningConfigRequest.property.functionName"></a>

- *Type:* `string`

---

### LambdaGetFunctionCodeSigningConfigResponse <a name="aws-cdk-sdk.lambda.LambdaGetFunctionCodeSigningConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetFunctionCodeSigningConfigResponse: lambda.LambdaGetFunctionCodeSigningConfigResponse = { ... }
```

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionCodeSigningConfigResponse.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionCodeSigningConfigResponse.property.functionName"></a>

- *Type:* `string`

---

### LambdaGetFunctionConcurrencyRequest <a name="aws-cdk-sdk.lambda.LambdaGetFunctionConcurrencyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetFunctionConcurrencyRequest: lambda.LambdaGetFunctionConcurrencyRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionConcurrencyRequest.property.functionName"></a>

- *Type:* `string`

---

### LambdaGetFunctionConcurrencyResponse <a name="aws-cdk-sdk.lambda.LambdaGetFunctionConcurrencyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetFunctionConcurrencyResponse: lambda.LambdaGetFunctionConcurrencyResponse = { ... }
```

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionConcurrencyResponse.property.reservedConcurrentExecutions"></a>

- *Type:* `number`

---

### LambdaGetFunctionConfigurationRequest <a name="aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetFunctionConfigurationRequest: lambda.LambdaGetFunctionConfigurationRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest.property.functionName"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaGetFunctionEventInvokeConfigRequest <a name="aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetFunctionEventInvokeConfigRequest: lambda.LambdaGetFunctionEventInvokeConfigRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest.property.functionName"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaGetFunctionRequest <a name="aws-cdk-sdk.lambda.LambdaGetFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetFunctionRequest: lambda.LambdaGetFunctionRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaGetFunctionResponse <a name="aws-cdk-sdk.lambda.LambdaGetFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetFunctionResponse: lambda.LambdaGetFunctionResponse = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionResponse.property.code"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFunctionCodeLocation`](#aws-cdk-sdk.lambda.LambdaFunctionCodeLocation)

---

##### `concurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionResponse.property.concurrency"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaConcurrency`](#aws-cdk-sdk.lambda.LambdaConcurrency)

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionResponse.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFunctionConfiguration`](#aws-cdk-sdk.lambda.LambdaFunctionConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetFunctionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### LambdaGetLayerVersionByArnRequest <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionByArnRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetLayerVersionByArnRequest: lambda.LambdaGetLayerVersionByArnRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionByArnRequest.property.arn"></a>

- *Type:* `string`

---

### LambdaGetLayerVersionPolicyRequest <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetLayerVersionPolicyRequest: lambda.LambdaGetLayerVersionPolicyRequest = { ... }
```

##### `layerName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyRequest.property.layerName"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyRequest.property.versionNumber"></a>

- *Type:* `number`

---

### LambdaGetLayerVersionPolicyResponse <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetLayerVersionPolicyResponse: lambda.LambdaGetLayerVersionPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyResponse.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyResponse.property.revisionId"></a>

- *Type:* `string`

---

### LambdaGetLayerVersionRequest <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetLayerVersionRequest: lambda.LambdaGetLayerVersionRequest = { ... }
```

##### `layerName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionRequest.property.layerName"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionRequest.property.versionNumber"></a>

- *Type:* `number`

---

### LambdaGetLayerVersionResponse <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetLayerVersionResponse: lambda.LambdaGetLayerVersionResponse = { ... }
```

##### `compatibleRuntimes`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionResponse.property.compatibleRuntimes"></a>

- *Type:* `string`[]

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionResponse.property.content"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput`](#aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput)

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionResponse.property.description"></a>

- *Type:* `string`

---

##### `layerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionResponse.property.layerArn"></a>

- *Type:* `string`

---

##### `layerVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionResponse.property.layerVersionArn"></a>

- *Type:* `string`

---

##### `licenseInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionResponse.property.licenseInfo"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetLayerVersionResponse.property.version"></a>

- *Type:* `number`

---

### LambdaGetPolicyRequest <a name="aws-cdk-sdk.lambda.LambdaGetPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetPolicyRequest: lambda.LambdaGetPolicyRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetPolicyRequest.property.functionName"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetPolicyRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaGetPolicyResponse <a name="aws-cdk-sdk.lambda.LambdaGetPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetPolicyResponse: lambda.LambdaGetPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetPolicyResponse.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetPolicyResponse.property.revisionId"></a>

- *Type:* `string`

---

### LambdaGetProvisionedConcurrencyConfigRequest <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetProvisionedConcurrencyConfigRequest: lambda.LambdaGetProvisionedConcurrencyConfigRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigRequest.property.functionName"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaGetProvisionedConcurrencyConfigResponse <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaGetProvisionedConcurrencyConfigResponse: lambda.LambdaGetProvisionedConcurrencyConfigResponse = { ... }
```

##### `allocatedProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigResponse.property.allocatedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `availableProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigResponse.property.availableProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigResponse.property.lastModified"></a>

- *Type:* `string`

---

##### `requestedProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigResponse.property.requestedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigResponse.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigResponse.property.statusReason"></a>

- *Type:* `string`

---

### LambdaInvocationRequest <a name="aws-cdk-sdk.lambda.LambdaInvocationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaInvocationRequest: lambda.LambdaInvocationRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationRequest.property.functionName"></a>

- *Type:* `string`

---

##### `clientContext`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationRequest.property.clientContext"></a>

- *Type:* `string`

---

##### `invocationType`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationRequest.property.invocationType"></a>

- *Type:* `string`

---

##### `logType`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationRequest.property.logType"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationRequest.property.payload"></a>

- *Type:* `any`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaInvocationResponse <a name="aws-cdk-sdk.lambda.LambdaInvocationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaInvocationResponse: lambda.LambdaInvocationResponse = { ... }
```

##### `executedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationResponse.property.executedVersion"></a>

- *Type:* `string`

---

##### `functionError`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationResponse.property.functionError"></a>

- *Type:* `string`

---

##### `logResult`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationResponse.property.logResult"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationResponse.property.payload"></a>

- *Type:* `any`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvocationResponse.property.statusCode"></a>

- *Type:* `number`

---

### LambdaInvokeAsyncRequest <a name="aws-cdk-sdk.lambda.LambdaInvokeAsyncRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaInvokeAsyncRequest: lambda.LambdaInvokeAsyncRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaInvokeAsyncRequest.property.functionName"></a>

- *Type:* `string`

---

##### `invokeArgs`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaInvokeAsyncRequest.property.invokeArgs"></a>

- *Type:* `any`

---

### LambdaInvokeAsyncResponse <a name="aws-cdk-sdk.lambda.LambdaInvokeAsyncResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaInvokeAsyncResponse: lambda.LambdaInvokeAsyncResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaInvokeAsyncResponse.property.status"></a>

- *Type:* `number`

---

### LambdaLayer <a name="aws-cdk-sdk.lambda.LambdaLayer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaLayer: lambda.LambdaLayer = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayer.property.arn"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayer.property.codeSize"></a>

- *Type:* `number`

---

##### `signingJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayer.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayer.property.signingProfileVersionArn"></a>

- *Type:* `string`

---

### LambdaLayersListItem <a name="aws-cdk-sdk.lambda.LambdaLayersListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaLayersListItem: lambda.LambdaLayersListItem = { ... }
```

##### `latestMatchingVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayersListItem.property.latestMatchingVersion"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayerVersionsListItem`](#aws-cdk-sdk.lambda.LambdaLayerVersionsListItem)

---

##### `layerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayersListItem.property.layerArn"></a>

- *Type:* `string`

---

##### `layerName`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayersListItem.property.layerName"></a>

- *Type:* `string`

---

### LambdaLayerVersionContentInput <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaLayerVersionContentInput: lambda.LambdaLayerVersionContentInput = { ... }
```

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentInput.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentInput.property.s3Key"></a>

- *Type:* `string`

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentInput.property.s3ObjectVersion"></a>

- *Type:* `string`

---

##### `zipFile`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentInput.property.zipFile"></a>

- *Type:* `any`

---

### LambdaLayerVersionContentOutput <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaLayerVersionContentOutput: lambda.LambdaLayerVersionContentOutput = { ... }
```

##### `codeSha256`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput.property.codeSize"></a>

- *Type:* `number`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput.property.location"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput.property.signingProfileVersionArn"></a>

- *Type:* `string`

---

### LambdaLayerVersionsListItem <a name="aws-cdk-sdk.lambda.LambdaLayerVersionsListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaLayerVersionsListItem: lambda.LambdaLayerVersionsListItem = { ... }
```

##### `compatibleRuntimes`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionsListItem.property.compatibleRuntimes"></a>

- *Type:* `string`[]

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionsListItem.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionsListItem.property.description"></a>

- *Type:* `string`

---

##### `layerVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionsListItem.property.layerVersionArn"></a>

- *Type:* `string`

---

##### `licenseInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionsListItem.property.licenseInfo"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaLayerVersionsListItem.property.version"></a>

- *Type:* `number`

---

### LambdaListAliasesRequest <a name="aws-cdk-sdk.lambda.LambdaListAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListAliasesRequest: lambda.LambdaListAliasesRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaListAliasesRequest.property.functionName"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListAliasesRequest.property.functionVersion"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListAliasesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListAliasesRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListAliasesResponse <a name="aws-cdk-sdk.lambda.LambdaListAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListAliasesResponse: lambda.LambdaListAliasesResponse = { ... }
```

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListAliasesResponse.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAliasConfiguration`](#aws-cdk-sdk.lambda.LambdaAliasConfiguration)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListAliasesResponse.property.nextMarker"></a>

- *Type:* `string`

---

### LambdaListCodeSigningConfigsRequest <a name="aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListCodeSigningConfigsRequest: lambda.LambdaListCodeSigningConfigsRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListCodeSigningConfigsResponse <a name="aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListCodeSigningConfigsResponse: lambda.LambdaListCodeSigningConfigsResponse = { ... }
```

##### `codeSigningConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsResponse.property.codeSigningConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCodeSigningConfig`](#aws-cdk-sdk.lambda.LambdaCodeSigningConfig)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### LambdaListEventSourceMappingsRequest <a name="aws-cdk-sdk.lambda.LambdaListEventSourceMappingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListEventSourceMappingsRequest: lambda.LambdaListEventSourceMappingsRequest = { ... }
```

##### `eventSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListEventSourceMappingsRequest.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListEventSourceMappingsRequest.property.functionName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListEventSourceMappingsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListEventSourceMappingsRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListEventSourceMappingsResponse <a name="aws-cdk-sdk.lambda.LambdaListEventSourceMappingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListEventSourceMappingsResponse: lambda.LambdaListEventSourceMappingsResponse = { ... }
```

##### `eventSourceMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListEventSourceMappingsResponse.property.eventSourceMappings"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration`](#aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListEventSourceMappingsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### LambdaListFunctionEventInvokeConfigsRequest <a name="aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListFunctionEventInvokeConfigsRequest: lambda.LambdaListFunctionEventInvokeConfigsRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsRequest.property.functionName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListFunctionEventInvokeConfigsResponse <a name="aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListFunctionEventInvokeConfigsResponse: lambda.LambdaListFunctionEventInvokeConfigsResponse = { ... }
```

##### `functionEventInvokeConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsResponse.property.functionEventInvokeConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig`](#aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### LambdaListFunctionsByCodeSigningConfigRequest <a name="aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListFunctionsByCodeSigningConfigRequest: lambda.LambdaListFunctionsByCodeSigningConfigRequest = { ... }
```

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigRequest.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListFunctionsByCodeSigningConfigResponse <a name="aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListFunctionsByCodeSigningConfigResponse: lambda.LambdaListFunctionsByCodeSigningConfigResponse = { ... }
```

##### `functionArns`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigResponse.property.functionArns"></a>

- *Type:* `string`[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigResponse.property.nextMarker"></a>

- *Type:* `string`

---

### LambdaListFunctionsRequest <a name="aws-cdk-sdk.lambda.LambdaListFunctionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListFunctionsRequest: lambda.LambdaListFunctionsRequest = { ... }
```

##### `functionVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsRequest.property.functionVersion"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsRequest.property.marker"></a>

- *Type:* `string`

---

##### `masterRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsRequest.property.masterRegion"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListFunctionsResponse <a name="aws-cdk-sdk.lambda.LambdaListFunctionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListFunctionsResponse: lambda.LambdaListFunctionsResponse = { ... }
```

##### `functions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsResponse.property.functions"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFunctionConfiguration`](#aws-cdk-sdk.lambda.LambdaFunctionConfiguration)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListFunctionsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### LambdaListLayersRequest <a name="aws-cdk-sdk.lambda.LambdaListLayersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListLayersRequest: lambda.LambdaListLayersRequest = { ... }
```

##### `compatibleRuntime`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayersRequest.property.compatibleRuntime"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayersRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayersRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListLayersResponse <a name="aws-cdk-sdk.lambda.LambdaListLayersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListLayersResponse: lambda.LambdaListLayersResponse = { ... }
```

##### `layers`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayersResponse.property.layers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayersListItem`](#aws-cdk-sdk.lambda.LambdaLayersListItem)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayersResponse.property.nextMarker"></a>

- *Type:* `string`

---

### LambdaListLayerVersionsRequest <a name="aws-cdk-sdk.lambda.LambdaListLayerVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListLayerVersionsRequest: lambda.LambdaListLayerVersionsRequest = { ... }
```

##### `layerName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayerVersionsRequest.property.layerName"></a>

- *Type:* `string`

---

##### `compatibleRuntime`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayerVersionsRequest.property.compatibleRuntime"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayerVersionsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayerVersionsRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListLayerVersionsResponse <a name="aws-cdk-sdk.lambda.LambdaListLayerVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListLayerVersionsResponse: lambda.LambdaListLayerVersionsResponse = { ... }
```

##### `layerVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayerVersionsResponse.property.layerVersions"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayerVersionsListItem`](#aws-cdk-sdk.lambda.LambdaLayerVersionsListItem)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListLayerVersionsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### LambdaListProvisionedConcurrencyConfigsRequest <a name="aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListProvisionedConcurrencyConfigsRequest: lambda.LambdaListProvisionedConcurrencyConfigsRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsRequest.property.functionName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListProvisionedConcurrencyConfigsResponse <a name="aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListProvisionedConcurrencyConfigsResponse: lambda.LambdaListProvisionedConcurrencyConfigsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `provisionedConcurrencyConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsResponse.property.provisionedConcurrencyConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem`](#aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem)[]

---

### LambdaListTagsRequest <a name="aws-cdk-sdk.lambda.LambdaListTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListTagsRequest: lambda.LambdaListTagsRequest = { ... }
```

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaListTagsRequest.property.resource"></a>

- *Type:* `string`

---

### LambdaListTagsResponse <a name="aws-cdk-sdk.lambda.LambdaListTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListTagsResponse: lambda.LambdaListTagsResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListTagsResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### LambdaListVersionsByFunctionRequest <a name="aws-cdk-sdk.lambda.LambdaListVersionsByFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListVersionsByFunctionRequest: lambda.LambdaListVersionsByFunctionRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaListVersionsByFunctionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListVersionsByFunctionRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListVersionsByFunctionRequest.property.maxItems"></a>

- *Type:* `number`

---

### LambdaListVersionsByFunctionResponse <a name="aws-cdk-sdk.lambda.LambdaListVersionsByFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaListVersionsByFunctionResponse: lambda.LambdaListVersionsByFunctionResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListVersionsByFunctionResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaListVersionsByFunctionResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFunctionConfiguration`](#aws-cdk-sdk.lambda.LambdaFunctionConfiguration)[]

---

### LambdaOnFailure <a name="aws-cdk-sdk.lambda.LambdaOnFailure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaOnFailure: lambda.LambdaOnFailure = { ... }
```

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaOnFailure.property.destination"></a>

- *Type:* `string`

---

### LambdaOnSuccess <a name="aws-cdk-sdk.lambda.LambdaOnSuccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaOnSuccess: lambda.LambdaOnSuccess = { ... }
```

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaOnSuccess.property.destination"></a>

- *Type:* `string`

---

### LambdaProvisionedConcurrencyConfigListItem <a name="aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaProvisionedConcurrencyConfigListItem: lambda.LambdaProvisionedConcurrencyConfigListItem = { ... }
```

##### `allocatedProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem.property.allocatedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `availableProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem.property.availableProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `functionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem.property.lastModified"></a>

- *Type:* `string`

---

##### `requestedProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem.property.requestedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem.property.statusReason"></a>

- *Type:* `string`

---

### LambdaPublishLayerVersionRequest <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaPublishLayerVersionRequest: lambda.LambdaPublishLayerVersionRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest.property.content"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayerVersionContentInput`](#aws-cdk-sdk.lambda.LambdaLayerVersionContentInput)

---

##### `layerName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest.property.layerName"></a>

- *Type:* `string`

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest.property.compatibleRuntimes"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest.property.description"></a>

- *Type:* `string`

---

##### `licenseInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest.property.licenseInfo"></a>

- *Type:* `string`

---

### LambdaPublishLayerVersionResponse <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaPublishLayerVersionResponse: lambda.LambdaPublishLayerVersionResponse = { ... }
```

##### `compatibleRuntimes`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionResponse.property.compatibleRuntimes"></a>

- *Type:* `string`[]

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionResponse.property.content"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput`](#aws-cdk-sdk.lambda.LambdaLayerVersionContentOutput)

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionResponse.property.description"></a>

- *Type:* `string`

---

##### `layerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionResponse.property.layerArn"></a>

- *Type:* `string`

---

##### `layerVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionResponse.property.layerVersionArn"></a>

- *Type:* `string`

---

##### `licenseInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionResponse.property.licenseInfo"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishLayerVersionResponse.property.version"></a>

- *Type:* `number`

---

### LambdaPublishVersionRequest <a name="aws-cdk-sdk.lambda.LambdaPublishVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaPublishVersionRequest: lambda.LambdaPublishVersionRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishVersionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `codeSha256`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishVersionRequest.property.codeSha256"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishVersionRequest.property.description"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPublishVersionRequest.property.revisionId"></a>

- *Type:* `string`

---

### LambdaPutFunctionCodeSigningConfigRequest <a name="aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaPutFunctionCodeSigningConfigRequest: lambda.LambdaPutFunctionCodeSigningConfigRequest = { ... }
```

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigRequest.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigRequest.property.functionName"></a>

- *Type:* `string`

---

### LambdaPutFunctionCodeSigningConfigResponse <a name="aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaPutFunctionCodeSigningConfigResponse: lambda.LambdaPutFunctionCodeSigningConfigResponse = { ... }
```

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigResponse.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigResponse.property.functionName"></a>

- *Type:* `string`

---

### LambdaPutFunctionConcurrencyRequest <a name="aws-cdk-sdk.lambda.LambdaPutFunctionConcurrencyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaPutFunctionConcurrencyRequest: lambda.LambdaPutFunctionConcurrencyRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionConcurrencyRequest.property.functionName"></a>

- *Type:* `string`

---

##### `reservedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionConcurrencyRequest.property.reservedConcurrentExecutions"></a>

- *Type:* `number`

---

### LambdaPutFunctionEventInvokeConfigRequest <a name="aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaPutFunctionEventInvokeConfigRequest: lambda.LambdaPutFunctionEventInvokeConfigRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest.property.functionName"></a>

- *Type:* `string`

---

##### `destinationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDestinationConfig`](#aws-cdk-sdk.lambda.LambdaDestinationConfig)

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest.property.maximumEventAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaPutProvisionedConcurrencyConfigRequest <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaPutProvisionedConcurrencyConfigRequest: lambda.LambdaPutProvisionedConcurrencyConfigRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigRequest.property.functionName"></a>

- *Type:* `string`

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigRequest.property.provisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `qualifier`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaPutProvisionedConcurrencyConfigResponse <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaPutProvisionedConcurrencyConfigResponse: lambda.LambdaPutProvisionedConcurrencyConfigResponse = { ... }
```

##### `allocatedProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigResponse.property.allocatedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `availableProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigResponse.property.availableProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigResponse.property.lastModified"></a>

- *Type:* `string`

---

##### `requestedProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigResponse.property.requestedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigResponse.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigResponse.property.statusReason"></a>

- *Type:* `string`

---

### LambdaRemoveLayerVersionPermissionRequest <a name="aws-cdk-sdk.lambda.LambdaRemoveLayerVersionPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaRemoveLayerVersionPermissionRequest: lambda.LambdaRemoveLayerVersionPermissionRequest = { ... }
```

##### `layerName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaRemoveLayerVersionPermissionRequest.property.layerName"></a>

- *Type:* `string`

---

##### `statementId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaRemoveLayerVersionPermissionRequest.property.statementId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaRemoveLayerVersionPermissionRequest.property.versionNumber"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaRemoveLayerVersionPermissionRequest.property.revisionId"></a>

- *Type:* `string`

---

### LambdaRemovePermissionRequest <a name="aws-cdk-sdk.lambda.LambdaRemovePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaRemovePermissionRequest: lambda.LambdaRemovePermissionRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaRemovePermissionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `statementId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaRemovePermissionRequest.property.statementId"></a>

- *Type:* `string`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaRemovePermissionRequest.property.qualifier"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaRemovePermissionRequest.property.revisionId"></a>

- *Type:* `string`

---

### LambdaSourceAccessConfiguration <a name="aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaSourceAccessConfiguration: lambda.LambdaSourceAccessConfiguration = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration.property.type"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration.property.uri"></a>

- *Type:* `string`

---

### LambdaTagResourceRequest <a name="aws-cdk-sdk.lambda.LambdaTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaTagResourceRequest: lambda.LambdaTagResourceRequest = { ... }
```

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaTagResourceRequest.property.resource"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### LambdaTracingConfig <a name="aws-cdk-sdk.lambda.LambdaTracingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaTracingConfig: lambda.LambdaTracingConfig = { ... }
```

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaTracingConfig.property.mode"></a>

- *Type:* `string`

---

### LambdaTracingConfigResponse <a name="aws-cdk-sdk.lambda.LambdaTracingConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaTracingConfigResponse: lambda.LambdaTracingConfigResponse = { ... }
```

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaTracingConfigResponse.property.mode"></a>

- *Type:* `string`

---

### LambdaUntagResourceRequest <a name="aws-cdk-sdk.lambda.LambdaUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaUntagResourceRequest: lambda.LambdaUntagResourceRequest = { ... }
```

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUntagResourceRequest.property.resource"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### LambdaUpdateAliasRequest <a name="aws-cdk-sdk.lambda.LambdaUpdateAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaUpdateAliasRequest: lambda.LambdaUpdateAliasRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateAliasRequest.property.functionName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateAliasRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateAliasRequest.property.description"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateAliasRequest.property.functionVersion"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateAliasRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `routingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateAliasRequest.property.routingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAliasRoutingConfiguration`](#aws-cdk-sdk.lambda.LambdaAliasRoutingConfiguration)

---

### LambdaUpdateCodeSigningConfigRequest <a name="aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaUpdateCodeSigningConfigRequest: lambda.LambdaUpdateCodeSigningConfigRequest = { ... }
```

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `allowedPublishers`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest.property.allowedPublishers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAllowedPublishers`](#aws-cdk-sdk.lambda.LambdaAllowedPublishers)

---

##### `codeSigningPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest.property.codeSigningPolicies"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCodeSigningPolicies`](#aws-cdk-sdk.lambda.LambdaCodeSigningPolicies)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest.property.description"></a>

- *Type:* `string`

---

### LambdaUpdateCodeSigningConfigResponse <a name="aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaUpdateCodeSigningConfigResponse: lambda.LambdaUpdateCodeSigningConfigResponse = { ... }
```

##### `codeSigningConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigResponse.property.codeSigningConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCodeSigningConfig`](#aws-cdk-sdk.lambda.LambdaCodeSigningConfig)

---

### LambdaUpdateEventSourceMappingRequest <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaUpdateEventSourceMappingRequest: lambda.LambdaUpdateEventSourceMappingRequest = { ... }
```

##### `uuid`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.uuid"></a>

- *Type:* `string`

---

##### `batchSize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.batchSize"></a>

- *Type:* `number`

---

##### `bisectBatchOnFunctionError`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.bisectBatchOnFunctionError"></a>

- *Type:* `boolean`

---

##### `destinationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDestinationConfig`](#aws-cdk-sdk.lambda.LambdaDestinationConfig)

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.enabled"></a>

- *Type:* `boolean`

---

##### `functionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.functionName"></a>

- *Type:* `string`

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.maximumBatchingWindowInSeconds"></a>

- *Type:* `number`

---

##### `maximumRecordAgeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.maximumRecordAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

##### `parallelizationFactor`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.parallelizationFactor"></a>

- *Type:* `number`

---

##### `sourceAccessConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest.property.sourceAccessConfigurations"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration`](#aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration)[]

---

### LambdaUpdateFunctionCodeRequest <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaUpdateFunctionCodeRequest: lambda.LambdaUpdateFunctionCodeRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest.property.functionName"></a>

- *Type:* `string`

---

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest.property.dryRun"></a>

- *Type:* `boolean`

---

##### `publish`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest.property.publish"></a>

- *Type:* `boolean`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest.property.s3Key"></a>

- *Type:* `string`

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest.property.s3ObjectVersion"></a>

- *Type:* `string`

---

##### `zipFile`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest.property.zipFile"></a>

- *Type:* `any`

---

### LambdaUpdateFunctionConfigurationRequest <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaUpdateFunctionConfigurationRequest: lambda.LambdaUpdateFunctionConfigurationRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.functionName"></a>

- *Type:* `string`

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeadLetterConfig`](#aws-cdk-sdk.lambda.LambdaDeadLetterConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.description"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.environment"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaEnvironment`](#aws-cdk-sdk.lambda.LambdaEnvironment)

---

##### `fileSystemConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.fileSystemConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFileSystemConfig`](#aws-cdk-sdk.lambda.LambdaFileSystemConfig)[]

---

##### `handler`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.handler"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `layers`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.layers"></a>

- *Type:* `string`[]

---

##### `memorySize`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.memorySize"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.role"></a>

- *Type:* `string`

---

##### `runtime`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.runtime"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.timeout"></a>

- *Type:* `number`

---

##### `tracingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.tracingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaTracingConfig`](#aws-cdk-sdk.lambda.LambdaTracingConfig)

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaVpcConfig`](#aws-cdk-sdk.lambda.LambdaVpcConfig)

---

### LambdaUpdateFunctionEventInvokeConfigRequest <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaUpdateFunctionEventInvokeConfigRequest: lambda.LambdaUpdateFunctionEventInvokeConfigRequest = { ... }
```

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest.property.functionName"></a>

- *Type:* `string`

---

##### `destinationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDestinationConfig`](#aws-cdk-sdk.lambda.LambdaDestinationConfig)

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest.property.maximumEventAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest.property.qualifier"></a>

- *Type:* `string`

---

### LambdaVpcConfig <a name="aws-cdk-sdk.lambda.LambdaVpcConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaVpcConfig: lambda.LambdaVpcConfig = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

### LambdaVpcConfigResponse <a name="aws-cdk-sdk.lambda.LambdaVpcConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

const lambdaVpcConfigResponse: lambda.LambdaVpcConfigResponse = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaVpcConfigResponse.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaVpcConfigResponse.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.lambda.LambdaVpcConfigResponse.property.vpcId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### LambdaResponsesAddLayerVersionPermission <a name="aws-cdk-sdk.lambda.LambdaResponsesAddLayerVersionPermission"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesAddLayerVersionPermission.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesAddLayerVersionPermission(__scope: Construct, __resources: string[], __input: LambdaAddLayerVersionPermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesAddLayerVersionPermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesAddLayerVersionPermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesAddLayerVersionPermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest`](#aws-cdk-sdk.lambda.LambdaAddLayerVersionPermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesAddLayerVersionPermission.property.revisionId"></a>

- *Type:* `string`

---

##### `statement`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesAddLayerVersionPermission.property.statement"></a>

- *Type:* `string`

---


### LambdaResponsesAddPermission <a name="aws-cdk-sdk.lambda.LambdaResponsesAddPermission"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesAddPermission.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesAddPermission(__scope: Construct, __resources: string[], __input: LambdaAddPermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesAddPermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesAddPermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesAddPermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAddPermissionRequest`](#aws-cdk-sdk.lambda.LambdaAddPermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `statement`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesAddPermission.property.statement"></a>

- *Type:* `string`

---


### LambdaResponsesCreateAlias <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateAlias(__scope: Construct, __resources: string[], __input: LambdaCreateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateAliasRequest`](#aws-cdk-sdk.lambda.LambdaCreateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.property.aliasArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.property.description"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.property.revisionId"></a>

- *Type:* `string`

---

##### `routingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAlias.property.routingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateAliasRoutingConfig`](#aws-cdk-sdk.lambda.LambdaResponsesCreateAliasRoutingConfig)

---


### LambdaResponsesCreateAliasRoutingConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAliasRoutingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAliasRoutingConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateAliasRoutingConfig(__scope: Construct, __resources: string[], __input: LambdaCreateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAliasRoutingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAliasRoutingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAliasRoutingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateAliasRequest`](#aws-cdk-sdk.lambda.LambdaCreateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalVersionWeights`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateAliasRoutingConfig.property.additionalVersionWeights"></a>

- *Type:* {[ key: string ]: `number`}

---


### LambdaResponsesCreateCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateCodeSigningConfig(__scope: Construct, __resources: string[], __input: LambdaCreateCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSigningConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfig.property.codeSigningConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig`](#aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig)

---


### LambdaResponsesCreateCodeSigningConfigCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig(__scope: Construct, __resources: string[], __input: LambdaCreateCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedPublishers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.property.allowedPublishers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers`](#aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers)

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `codeSigningConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.property.codeSigningConfigId"></a>

- *Type:* `string`

---

##### `codeSigningPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.property.codeSigningPolicies"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies`](#aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.property.description"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfig.property.lastModified"></a>

- *Type:* `string`

---


### LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers(__scope: Construct, __resources: string[], __input: LambdaCreateCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `signingProfileVersionArns`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns"></a>

- *Type:* `string`[]

---


### LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies(__scope: Construct, __resources: string[], __input: LambdaCreateCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaCreateCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `untrustedArtifactOnDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.property.untrustedArtifactOnDeployment"></a>

- *Type:* `string`

---


### LambdaResponsesCreateEventSourceMapping <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateEventSourceMapping(__scope: Construct, __resources: string[], __input: LambdaCreateEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `batchSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.batchSize"></a>

- *Type:* `number`

---

##### `bisectBatchOnFunctionError`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.bisectBatchOnFunctionError"></a>

- *Type:* `boolean`

---

##### `destinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig`](#aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig)

---

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.lastModified"></a>

- *Type:* `string`

---

##### `lastProcessingResult`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.lastProcessingResult"></a>

- *Type:* `string`

---

##### `maximumBatchingWindowInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

- *Type:* `number`

---

##### `maximumRecordAgeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

##### `parallelizationFactor`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.parallelizationFactor"></a>

- *Type:* `number`

---

##### `queues`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.queues"></a>

- *Type:* `string`[]

---

##### `sourceAccessConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.sourceAccessConfigurations"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration`](#aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration)[]

---

##### `startingPosition`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.startingPosition"></a>

- *Type:* `string`

---

##### `startingPositionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.startingPositionTimestamp"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.state"></a>

- *Type:* `string`

---

##### `stateTransitionReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.stateTransitionReason"></a>

- *Type:* `string`

---

##### `topics`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.topics"></a>

- *Type:* `string`[]

---

##### `uuid`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMapping.property.uuid"></a>

- *Type:* `string`

---


### LambdaResponsesCreateEventSourceMappingDestinationConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig(__scope: Construct, __resources: string[], __input: LambdaCreateEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `onFailure`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig.property.onFailure"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure`](#aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure)

---

##### `onSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfig.property.onSuccess"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess`](#aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess)

---


### LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure(__scope: Construct, __resources: string[], __input: LambdaCreateEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnFailure.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess(__scope: Construct, __resources: string[], __input: LambdaCreateEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaCreateEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateEventSourceMappingDestinationConfigOnSuccess.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesCreateFunction <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateFunction(__scope: Construct, __resources: string[], __input: LambdaCreateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateFunctionRequest`](#aws-cdk-sdk.lambda.LambdaCreateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSha256`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.codeSize"></a>

- *Type:* `number`

---

##### `deadLetterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionDeadLetterConfig`](#aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionDeadLetterConfig)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.description"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.environment"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironment`](#aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironment)

---

##### `fileSystemConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.fileSystemConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFileSystemConfig`](#aws-cdk-sdk.lambda.LambdaFileSystemConfig)[]

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.functionArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.functionName"></a>

- *Type:* `string`

---

##### `handler`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.handler"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.lastModified"></a>

- *Type:* `string`

---

##### `lastUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.lastUpdateStatus"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.lastUpdateStatusReason"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.lastUpdateStatusReasonCode"></a>

- *Type:* `string`

---

##### `layers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.layers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayer`](#aws-cdk-sdk.lambda.LambdaLayer)[]

---

##### `masterArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.masterArn"></a>

- *Type:* `string`

---

##### `memorySize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.memorySize"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.revisionId"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.role"></a>

- *Type:* `string`

---

##### `runtime`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.runtime"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.signingProfileVersionArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.stateReasonCode"></a>

- *Type:* `string`

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.timeout"></a>

- *Type:* `number`

---

##### `tracingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.tracingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionTracingConfig`](#aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionTracingConfig)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.version"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunction.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig`](#aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig)

---


### LambdaResponsesCreateFunctionDeadLetterConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionDeadLetterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionDeadLetterConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateFunctionDeadLetterConfig(__scope: Construct, __resources: string[], __input: LambdaCreateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionDeadLetterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionDeadLetterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionDeadLetterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateFunctionRequest`](#aws-cdk-sdk.lambda.LambdaCreateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionDeadLetterConfig.property.targetArn"></a>

- *Type:* `string`

---


### LambdaResponsesCreateFunctionEnvironment <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironment.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateFunctionEnvironment(__scope: Construct, __resources: string[], __input: LambdaCreateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateFunctionRequest`](#aws-cdk-sdk.lambda.LambdaCreateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironment.property.error"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironmentError`](#aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironmentError)

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironment.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---


### LambdaResponsesCreateFunctionEnvironmentError <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironmentError"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironmentError.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateFunctionEnvironmentError(__scope: Construct, __resources: string[], __input: LambdaCreateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironmentError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironmentError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironmentError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateFunctionRequest`](#aws-cdk-sdk.lambda.LambdaCreateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironmentError.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionEnvironmentError.property.message"></a>

- *Type:* `string`

---


### LambdaResponsesCreateFunctionTracingConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionTracingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionTracingConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateFunctionTracingConfig(__scope: Construct, __resources: string[], __input: LambdaCreateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionTracingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionTracingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionTracingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateFunctionRequest`](#aws-cdk-sdk.lambda.LambdaCreateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionTracingConfig.property.mode"></a>

- *Type:* `string`

---


### LambdaResponsesCreateFunctionVpcConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesCreateFunctionVpcConfig(__scope: Construct, __resources: string[], __input: LambdaCreateFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCreateFunctionRequest`](#aws-cdk-sdk.lambda.LambdaCreateFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesCreateFunctionVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### LambdaResponsesDeleteEventSourceMapping <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesDeleteEventSourceMapping(__scope: Construct, __resources: string[], __input: LambdaDeleteEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `batchSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.batchSize"></a>

- *Type:* `number`

---

##### `bisectBatchOnFunctionError`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.bisectBatchOnFunctionError"></a>

- *Type:* `boolean`

---

##### `destinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig`](#aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig)

---

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.lastModified"></a>

- *Type:* `string`

---

##### `lastProcessingResult`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.lastProcessingResult"></a>

- *Type:* `string`

---

##### `maximumBatchingWindowInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

- *Type:* `number`

---

##### `maximumRecordAgeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

##### `parallelizationFactor`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.parallelizationFactor"></a>

- *Type:* `number`

---

##### `queues`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.queues"></a>

- *Type:* `string`[]

---

##### `sourceAccessConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.sourceAccessConfigurations"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration`](#aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration)[]

---

##### `startingPosition`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.startingPosition"></a>

- *Type:* `string`

---

##### `startingPositionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.startingPositionTimestamp"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.state"></a>

- *Type:* `string`

---

##### `stateTransitionReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.stateTransitionReason"></a>

- *Type:* `string`

---

##### `topics`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.topics"></a>

- *Type:* `string`[]

---

##### `uuid`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMapping.property.uuid"></a>

- *Type:* `string`

---


### LambdaResponsesDeleteEventSourceMappingDestinationConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig(__scope: Construct, __resources: string[], __input: LambdaDeleteEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `onFailure`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig.property.onFailure"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure`](#aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure)

---

##### `onSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfig.property.onSuccess"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess`](#aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess)

---


### LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure(__scope: Construct, __resources: string[], __input: LambdaDeleteEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnFailure.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess(__scope: Construct, __resources: string[], __input: LambdaDeleteEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaDeleteEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesDeleteEventSourceMappingDestinationConfigOnSuccess.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesFetchAccountSettings <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettings"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettings.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchAccountSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accountLimit`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettings.property.accountLimit"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit`](#aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit)

---

##### `accountUsage`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettings.property.accountUsage"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountUsage`](#aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountUsage)

---


### LambdaResponsesFetchAccountSettingsAccountLimit <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchAccountSettingsAccountLimit(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `codeSizeUnzipped`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit.property.codeSizeUnzipped"></a>

- *Type:* `number`

---

##### `codeSizeZipped`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit.property.codeSizeZipped"></a>

- *Type:* `number`

---

##### `concurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit.property.concurrentExecutions"></a>

- *Type:* `number`

---

##### `totalCodeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit.property.totalCodeSize"></a>

- *Type:* `number`

---

##### `unreservedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountLimit.property.unreservedConcurrentExecutions"></a>

- *Type:* `number`

---


### LambdaResponsesFetchAccountSettingsAccountUsage <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountUsage"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountUsage.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchAccountSettingsAccountUsage(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountUsage.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `functionCount`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountUsage.property.functionCount"></a>

- *Type:* `number`

---

##### `totalCodeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAccountSettingsAccountUsage.property.totalCodeSize"></a>

- *Type:* `number`

---


### LambdaResponsesFetchAlias <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchAlias(__scope: Construct, __resources: string[], __input: LambdaGetAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetAliasRequest`](#aws-cdk-sdk.lambda.LambdaGetAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.property.aliasArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.property.description"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.property.revisionId"></a>

- *Type:* `string`

---

##### `routingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAlias.property.routingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchAliasRoutingConfig`](#aws-cdk-sdk.lambda.LambdaResponsesFetchAliasRoutingConfig)

---


### LambdaResponsesFetchAliasRoutingConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAliasRoutingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAliasRoutingConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchAliasRoutingConfig(__scope: Construct, __resources: string[], __input: LambdaGetAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAliasRoutingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAliasRoutingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAliasRoutingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetAliasRequest`](#aws-cdk-sdk.lambda.LambdaGetAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalVersionWeights`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchAliasRoutingConfig.property.additionalVersionWeights"></a>

- *Type:* {[ key: string ]: `number`}

---


### LambdaResponsesFetchCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchCodeSigningConfig(__scope: Construct, __resources: string[], __input: LambdaGetCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSigningConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfig.property.codeSigningConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig`](#aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig)

---


### LambdaResponsesFetchCodeSigningConfigCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig(__scope: Construct, __resources: string[], __input: LambdaGetCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedPublishers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.property.allowedPublishers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers`](#aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers)

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `codeSigningConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.property.codeSigningConfigId"></a>

- *Type:* `string`

---

##### `codeSigningPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.property.codeSigningPolicies"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies`](#aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.property.description"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfig.property.lastModified"></a>

- *Type:* `string`

---


### LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers(__scope: Construct, __resources: string[], __input: LambdaGetCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `signingProfileVersionArns`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns"></a>

- *Type:* `string`[]

---


### LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies(__scope: Construct, __resources: string[], __input: LambdaGetCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `untrustedArtifactOnDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchCodeSigningConfigCodeSigningConfigCodeSigningPolicies.property.untrustedArtifactOnDeployment"></a>

- *Type:* `string`

---


### LambdaResponsesFetchEventSourceMapping <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchEventSourceMapping(__scope: Construct, __resources: string[], __input: LambdaGetEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `batchSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.batchSize"></a>

- *Type:* `number`

---

##### `bisectBatchOnFunctionError`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.bisectBatchOnFunctionError"></a>

- *Type:* `boolean`

---

##### `destinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig`](#aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig)

---

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.lastModified"></a>

- *Type:* `string`

---

##### `lastProcessingResult`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.lastProcessingResult"></a>

- *Type:* `string`

---

##### `maximumBatchingWindowInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

- *Type:* `number`

---

##### `maximumRecordAgeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

##### `parallelizationFactor`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.parallelizationFactor"></a>

- *Type:* `number`

---

##### `queues`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.queues"></a>

- *Type:* `string`[]

---

##### `sourceAccessConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.sourceAccessConfigurations"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration`](#aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration)[]

---

##### `startingPosition`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.startingPosition"></a>

- *Type:* `string`

---

##### `startingPositionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.startingPositionTimestamp"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.state"></a>

- *Type:* `string`

---

##### `stateTransitionReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.stateTransitionReason"></a>

- *Type:* `string`

---

##### `topics`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.topics"></a>

- *Type:* `string`[]

---

##### `uuid`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMapping.property.uuid"></a>

- *Type:* `string`

---


### LambdaResponsesFetchEventSourceMappingDestinationConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig(__scope: Construct, __resources: string[], __input: LambdaGetEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `onFailure`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig.property.onFailure"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure`](#aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure)

---

##### `onSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfig.property.onSuccess"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess`](#aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess)

---


### LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure(__scope: Construct, __resources: string[], __input: LambdaGetEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnFailure.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess(__scope: Construct, __resources: string[], __input: LambdaGetEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaGetEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchEventSourceMappingDestinationConfigOnSuccess.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesFetchFunction <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunction"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunction.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunction(__scope: Construct, __resources: string[], __input: LambdaGetFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunction.property.code"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCode`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCode)

---

##### `concurrency`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunction.property.concurrency"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConcurrency`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConcurrency)

---

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunction.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunction.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### LambdaResponsesFetchFunctionCode <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCode"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCode.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionCode(__scope: Construct, __resources: string[], __input: LambdaGetFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCode.property.location"></a>

- *Type:* `string`

---

##### `repositoryType`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCode.property.repositoryType"></a>

- *Type:* `string`

---


### LambdaResponsesFetchFunctionCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCodeSigningConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCodeSigningConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionCodeSigningConfig(__scope: Construct, __resources: string[], __input: LambdaGetFunctionCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCodeSigningConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCodeSigningConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCodeSigningConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCodeSigningConfig.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionCodeSigningConfig.property.functionName"></a>

- *Type:* `string`

---


### LambdaResponsesFetchFunctionConcurrency <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConcurrency"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConcurrency.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionConcurrency(__scope: Construct, __resources: string[], __input: LambdaGetFunctionConcurrencyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConcurrency.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConcurrency.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConcurrency.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionConcurrencyRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionConcurrencyRequest)

---



#### Properties <a name="Properties"></a>

##### `reservedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConcurrency.property.reservedConcurrentExecutions"></a>

- *Type:* `number`

---


### LambdaResponsesFetchFunctionConfiguration <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionConfiguration(__scope: Construct, __resources: string[], __input: LambdaGetFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSha256`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.codeSize"></a>

- *Type:* `number`

---

##### `deadLetterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationDeadLetterConfig`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationDeadLetterConfig)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.environment"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironment`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironment)

---

##### `fileSystemConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.fileSystemConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFileSystemConfig`](#aws-cdk-sdk.lambda.LambdaFileSystemConfig)[]

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.functionArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.functionName"></a>

- *Type:* `string`

---

##### `handler`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.handler"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.lastModified"></a>

- *Type:* `string`

---

##### `lastUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.lastUpdateStatus"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.lastUpdateStatusReason"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.lastUpdateStatusReasonCode"></a>

- *Type:* `string`

---

##### `layers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.layers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayer`](#aws-cdk-sdk.lambda.LambdaLayer)[]

---

##### `masterArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.masterArn"></a>

- *Type:* `string`

---

##### `memorySize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.memorySize"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.revisionId"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.role"></a>

- *Type:* `string`

---

##### `runtime`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.runtime"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.signingProfileVersionArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.stateReasonCode"></a>

- *Type:* `string`

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.timeout"></a>

- *Type:* `number`

---

##### `tracingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.tracingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationTracingConfig`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationTracingConfig)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.version"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfiguration.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig)

---


### LambdaResponsesFetchFunctionConfigurationDeadLetterConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationDeadLetterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationDeadLetterConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionConfigurationDeadLetterConfig(__scope: Construct, __resources: string[], __input: LambdaGetFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationDeadLetterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationDeadLetterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationDeadLetterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationDeadLetterConfig.property.targetArn"></a>

- *Type:* `string`

---


### LambdaResponsesFetchFunctionConfigurationEnvironment <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironment.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionConfigurationEnvironment(__scope: Construct, __resources: string[], __input: LambdaGetFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironment.property.error"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError)

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironment.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---


### LambdaResponsesFetchFunctionConfigurationEnvironmentError <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError(__scope: Construct, __resources: string[], __input: LambdaGetFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationEnvironmentError.property.message"></a>

- *Type:* `string`

---


### LambdaResponsesFetchFunctionConfigurationTracingConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationTracingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationTracingConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionConfigurationTracingConfig(__scope: Construct, __resources: string[], __input: LambdaGetFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationTracingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationTracingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationTracingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationTracingConfig.property.mode"></a>

- *Type:* `string`

---


### LambdaResponsesFetchFunctionConfigurationVpcConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig(__scope: Construct, __resources: string[], __input: LambdaGetFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionConfigurationVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### LambdaResponsesFetchFunctionEventInvokeConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionEventInvokeConfig(__scope: Construct, __resources: string[], __input: LambdaGetFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig)

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig.property.lastModified"></a>

- *Type:* `string`

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfig.property.maximumRetryAttempts"></a>

- *Type:* `number`

---


### LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig(__scope: Construct, __resources: string[], __input: LambdaGetFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `onFailure`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig.property.onFailure"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure)

---

##### `onSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfig.property.onSuccess"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess`](#aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess)

---


### LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure(__scope: Construct, __resources: string[], __input: LambdaGetFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess(__scope: Construct, __resources: string[], __input: LambdaGetFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchFunctionEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesFetchLayerVersion <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchLayerVersion(__scope: Construct, __resources: string[], __input: LambdaGetLayerVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetLayerVersionRequest`](#aws-cdk-sdk.lambda.LambdaGetLayerVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibleRuntimes`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.property.compatibleRuntimes"></a>

- *Type:* `string`[]

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.property.content"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent`](#aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent)

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.property.description"></a>

- *Type:* `string`

---

##### `layerArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.property.layerArn"></a>

- *Type:* `string`

---

##### `layerVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.property.layerVersionArn"></a>

- *Type:* `string`

---

##### `licenseInfo`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.property.licenseInfo"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersion.property.version"></a>

- *Type:* `number`

---


### LambdaResponsesFetchLayerVersionByArn <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchLayerVersionByArn(__scope: Construct, __resources: string[], __input: LambdaGetLayerVersionByArnRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetLayerVersionByArnRequest`](#aws-cdk-sdk.lambda.LambdaGetLayerVersionByArnRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibleRuntimes`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.property.compatibleRuntimes"></a>

- *Type:* `string`[]

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.property.content"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent`](#aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent)

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.property.description"></a>

- *Type:* `string`

---

##### `layerArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.property.layerArn"></a>

- *Type:* `string`

---

##### `layerVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.property.layerVersionArn"></a>

- *Type:* `string`

---

##### `licenseInfo`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.property.licenseInfo"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArn.property.version"></a>

- *Type:* `number`

---


### LambdaResponsesFetchLayerVersionByArnContent <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchLayerVersionByArnContent(__scope: Construct, __resources: string[], __input: LambdaGetLayerVersionByArnRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetLayerVersionByArnRequest`](#aws-cdk-sdk.lambda.LambdaGetLayerVersionByArnRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSha256`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent.property.codeSize"></a>

- *Type:* `number`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent.property.location"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionByArnContent.property.signingProfileVersionArn"></a>

- *Type:* `string`

---


### LambdaResponsesFetchLayerVersionContent <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchLayerVersionContent(__scope: Construct, __resources: string[], __input: LambdaGetLayerVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetLayerVersionRequest`](#aws-cdk-sdk.lambda.LambdaGetLayerVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSha256`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent.property.codeSize"></a>

- *Type:* `number`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent.property.location"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionContent.property.signingProfileVersionArn"></a>

- *Type:* `string`

---


### LambdaResponsesFetchLayerVersionPolicy <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionPolicy.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchLayerVersionPolicy(__scope: Construct, __resources: string[], __input: LambdaGetLayerVersionPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyRequest`](#aws-cdk-sdk.lambda.LambdaGetLayerVersionPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionPolicy.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchLayerVersionPolicy.property.revisionId"></a>

- *Type:* `string`

---


### LambdaResponsesFetchPolicy <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchPolicy.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchPolicy(__scope: Construct, __resources: string[], __input: LambdaGetPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetPolicyRequest`](#aws-cdk-sdk.lambda.LambdaGetPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchPolicy.property.policy"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchPolicy.property.revisionId"></a>

- *Type:* `string`

---


### LambdaResponsesFetchProvisionedConcurrencyConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesFetchProvisionedConcurrencyConfig(__scope: Construct, __resources: string[], __input: LambdaGetProvisionedConcurrencyConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigRequest`](#aws-cdk-sdk.lambda.LambdaGetProvisionedConcurrencyConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `allocatedProvisionedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.property.allocatedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `availableProvisionedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.property.availableProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.property.lastModified"></a>

- *Type:* `string`

---

##### `requestedProvisionedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.property.requestedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesFetchProvisionedConcurrencyConfig.property.statusReason"></a>

- *Type:* `string`

---


### LambdaResponsesInvoke <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesInvoke(__scope: Construct, __resources: string[], __input: LambdaInvocationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaInvocationRequest`](#aws-cdk-sdk.lambda.LambdaInvocationRequest)

---



#### Properties <a name="Properties"></a>

##### `executedVersion`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke.property.executedVersion"></a>

- *Type:* `string`

---

##### `functionError`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke.property.functionError"></a>

- *Type:* `string`

---

##### `logResult`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke.property.logResult"></a>

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke.property.payload"></a>

- *Type:* `any`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvoke.property.statusCode"></a>

- *Type:* `number`

---


### LambdaResponsesInvokeAsync <a name="aws-cdk-sdk.lambda.LambdaResponsesInvokeAsync"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesInvokeAsync.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesInvokeAsync(__scope: Construct, __resources: string[], __input: LambdaInvokeAsyncRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvokeAsync.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvokeAsync.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvokeAsync.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaInvokeAsyncRequest`](#aws-cdk-sdk.lambda.LambdaInvokeAsyncRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesInvokeAsync.property.status"></a>

- *Type:* `number`

---


### LambdaResponsesListAliases <a name="aws-cdk-sdk.lambda.LambdaResponsesListAliases"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListAliases.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListAliases(__scope: Construct, __resources: string[], __input: LambdaListAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListAliasesRequest`](#aws-cdk-sdk.lambda.LambdaListAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListAliases.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaAliasConfiguration`](#aws-cdk-sdk.lambda.LambdaAliasConfiguration)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListAliases.property.nextMarker"></a>

- *Type:* `string`

---


### LambdaResponsesListCodeSigningConfigs <a name="aws-cdk-sdk.lambda.LambdaResponsesListCodeSigningConfigs"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListCodeSigningConfigs.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListCodeSigningConfigs(__scope: Construct, __resources: string[], __input: LambdaListCodeSigningConfigsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListCodeSigningConfigs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListCodeSigningConfigs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListCodeSigningConfigs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsRequest`](#aws-cdk-sdk.lambda.LambdaListCodeSigningConfigsRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSigningConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListCodeSigningConfigs.property.codeSigningConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaCodeSigningConfig`](#aws-cdk-sdk.lambda.LambdaCodeSigningConfig)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListCodeSigningConfigs.property.nextMarker"></a>

- *Type:* `string`

---


### LambdaResponsesListEventSourceMappings <a name="aws-cdk-sdk.lambda.LambdaResponsesListEventSourceMappings"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListEventSourceMappings.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListEventSourceMappings(__scope: Construct, __resources: string[], __input: LambdaListEventSourceMappingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListEventSourceMappings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListEventSourceMappings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListEventSourceMappings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListEventSourceMappingsRequest`](#aws-cdk-sdk.lambda.LambdaListEventSourceMappingsRequest)

---



#### Properties <a name="Properties"></a>

##### `eventSourceMappings`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListEventSourceMappings.property.eventSourceMappings"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration`](#aws-cdk-sdk.lambda.LambdaEventSourceMappingConfiguration)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListEventSourceMappings.property.nextMarker"></a>

- *Type:* `string`

---


### LambdaResponsesListFunctionEventInvokeConfigs <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionEventInvokeConfigs"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionEventInvokeConfigs.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListFunctionEventInvokeConfigs(__scope: Construct, __resources: string[], __input: LambdaListFunctionEventInvokeConfigsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionEventInvokeConfigs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionEventInvokeConfigs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionEventInvokeConfigs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsRequest`](#aws-cdk-sdk.lambda.LambdaListFunctionEventInvokeConfigsRequest)

---



#### Properties <a name="Properties"></a>

##### `functionEventInvokeConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionEventInvokeConfigs.property.functionEventInvokeConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig`](#aws-cdk-sdk.lambda.LambdaFunctionEventInvokeConfig)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionEventInvokeConfigs.property.nextMarker"></a>

- *Type:* `string`

---


### LambdaResponsesListFunctions <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctions"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctions.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListFunctions(__scope: Construct, __resources: string[], __input: LambdaListFunctionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListFunctionsRequest`](#aws-cdk-sdk.lambda.LambdaListFunctionsRequest)

---



#### Properties <a name="Properties"></a>

##### `functions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctions.property.functions"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFunctionConfiguration`](#aws-cdk-sdk.lambda.LambdaFunctionConfiguration)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctions.property.nextMarker"></a>

- *Type:* `string`

---


### LambdaResponsesListFunctionsByCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionsByCodeSigningConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionsByCodeSigningConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListFunctionsByCodeSigningConfig(__scope: Construct, __resources: string[], __input: LambdaListFunctionsByCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionsByCodeSigningConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionsByCodeSigningConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionsByCodeSigningConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaListFunctionsByCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `functionArns`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionsByCodeSigningConfig.property.functionArns"></a>

- *Type:* `string`[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListFunctionsByCodeSigningConfig.property.nextMarker"></a>

- *Type:* `string`

---


### LambdaResponsesListLayers <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayers"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayers.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListLayers(__scope: Construct, __resources: string[], __input: LambdaListLayersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListLayersRequest`](#aws-cdk-sdk.lambda.LambdaListLayersRequest)

---



#### Properties <a name="Properties"></a>

##### `layers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayers.property.layers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayersListItem`](#aws-cdk-sdk.lambda.LambdaLayersListItem)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayers.property.nextMarker"></a>

- *Type:* `string`

---


### LambdaResponsesListLayerVersions <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayerVersions"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayerVersions.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListLayerVersions(__scope: Construct, __resources: string[], __input: LambdaListLayerVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayerVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayerVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayerVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListLayerVersionsRequest`](#aws-cdk-sdk.lambda.LambdaListLayerVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `layerVersions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayerVersions.property.layerVersions"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayerVersionsListItem`](#aws-cdk-sdk.lambda.LambdaLayerVersionsListItem)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListLayerVersions.property.nextMarker"></a>

- *Type:* `string`

---


### LambdaResponsesListProvisionedConcurrencyConfigs <a name="aws-cdk-sdk.lambda.LambdaResponsesListProvisionedConcurrencyConfigs"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListProvisionedConcurrencyConfigs.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListProvisionedConcurrencyConfigs(__scope: Construct, __resources: string[], __input: LambdaListProvisionedConcurrencyConfigsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListProvisionedConcurrencyConfigs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListProvisionedConcurrencyConfigs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListProvisionedConcurrencyConfigs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsRequest`](#aws-cdk-sdk.lambda.LambdaListProvisionedConcurrencyConfigsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListProvisionedConcurrencyConfigs.property.nextMarker"></a>

- *Type:* `string`

---

##### `provisionedConcurrencyConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListProvisionedConcurrencyConfigs.property.provisionedConcurrencyConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem`](#aws-cdk-sdk.lambda.LambdaProvisionedConcurrencyConfigListItem)[]

---


### LambdaResponsesListTags <a name="aws-cdk-sdk.lambda.LambdaResponsesListTags"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListTags.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListTags(__scope: Construct, __resources: string[], __input: LambdaListTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListTagsRequest`](#aws-cdk-sdk.lambda.LambdaListTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### LambdaResponsesListVersionsByFunction <a name="aws-cdk-sdk.lambda.LambdaResponsesListVersionsByFunction"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesListVersionsByFunction.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesListVersionsByFunction(__scope: Construct, __resources: string[], __input: LambdaListVersionsByFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListVersionsByFunction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListVersionsByFunction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListVersionsByFunction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaListVersionsByFunctionRequest`](#aws-cdk-sdk.lambda.LambdaListVersionsByFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListVersionsByFunction.property.nextMarker"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesListVersionsByFunction.property.versions"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFunctionConfiguration`](#aws-cdk-sdk.lambda.LambdaFunctionConfiguration)[]

---


### LambdaResponsesPublishLayerVersion <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPublishLayerVersion(__scope: Construct, __resources: string[], __input: LambdaPublishLayerVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibleRuntimes`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.property.compatibleRuntimes"></a>

- *Type:* `string`[]

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.property.content"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent`](#aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent)

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.property.description"></a>

- *Type:* `string`

---

##### `layerArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.property.layerArn"></a>

- *Type:* `string`

---

##### `layerVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.property.layerVersionArn"></a>

- *Type:* `string`

---

##### `licenseInfo`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.property.licenseInfo"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersion.property.version"></a>

- *Type:* `number`

---


### LambdaResponsesPublishLayerVersionContent <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPublishLayerVersionContent(__scope: Construct, __resources: string[], __input: LambdaPublishLayerVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishLayerVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSha256`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent.property.codeSize"></a>

- *Type:* `number`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent.property.location"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishLayerVersionContent.property.signingProfileVersionArn"></a>

- *Type:* `string`

---


### LambdaResponsesPublishVersion <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPublishVersion(__scope: Construct, __resources: string[], __input: LambdaPublishVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSha256`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.codeSize"></a>

- *Type:* `number`

---

##### `deadLetterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesPublishVersionDeadLetterConfig`](#aws-cdk-sdk.lambda.LambdaResponsesPublishVersionDeadLetterConfig)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.description"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.environment"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironment`](#aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironment)

---

##### `fileSystemConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.fileSystemConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFileSystemConfig`](#aws-cdk-sdk.lambda.LambdaFileSystemConfig)[]

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.functionArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.functionName"></a>

- *Type:* `string`

---

##### `handler`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.handler"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.lastModified"></a>

- *Type:* `string`

---

##### `lastUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.lastUpdateStatus"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.lastUpdateStatusReason"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.lastUpdateStatusReasonCode"></a>

- *Type:* `string`

---

##### `layers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.layers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayer`](#aws-cdk-sdk.lambda.LambdaLayer)[]

---

##### `masterArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.masterArn"></a>

- *Type:* `string`

---

##### `memorySize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.memorySize"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.revisionId"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.role"></a>

- *Type:* `string`

---

##### `runtime`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.runtime"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.signingProfileVersionArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.stateReasonCode"></a>

- *Type:* `string`

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.timeout"></a>

- *Type:* `number`

---

##### `tracingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.tracingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesPublishVersionTracingConfig`](#aws-cdk-sdk.lambda.LambdaResponsesPublishVersionTracingConfig)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.version"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersion.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig`](#aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig)

---


### LambdaResponsesPublishVersionDeadLetterConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionDeadLetterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionDeadLetterConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPublishVersionDeadLetterConfig(__scope: Construct, __resources: string[], __input: LambdaPublishVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionDeadLetterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionDeadLetterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionDeadLetterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionDeadLetterConfig.property.targetArn"></a>

- *Type:* `string`

---


### LambdaResponsesPublishVersionEnvironment <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironment.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPublishVersionEnvironment(__scope: Construct, __resources: string[], __input: LambdaPublishVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironment.property.error"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironmentError`](#aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironmentError)

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironment.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---


### LambdaResponsesPublishVersionEnvironmentError <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironmentError"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironmentError.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPublishVersionEnvironmentError(__scope: Construct, __resources: string[], __input: LambdaPublishVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironmentError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironmentError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironmentError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironmentError.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionEnvironmentError.property.message"></a>

- *Type:* `string`

---


### LambdaResponsesPublishVersionTracingConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionTracingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionTracingConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPublishVersionTracingConfig(__scope: Construct, __resources: string[], __input: LambdaPublishVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionTracingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionTracingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionTracingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionTracingConfig.property.mode"></a>

- *Type:* `string`

---


### LambdaResponsesPublishVersionVpcConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPublishVersionVpcConfig(__scope: Construct, __resources: string[], __input: LambdaPublishVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPublishVersionRequest`](#aws-cdk-sdk.lambda.LambdaPublishVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPublishVersionVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### LambdaResponsesPutFunctionCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionCodeSigningConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionCodeSigningConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPutFunctionCodeSigningConfig(__scope: Construct, __resources: string[], __input: LambdaPutFunctionCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionCodeSigningConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionCodeSigningConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionCodeSigningConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaPutFunctionCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionCodeSigningConfig.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionCodeSigningConfig.property.functionName"></a>

- *Type:* `string`

---


### LambdaResponsesPutFunctionConcurrency <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionConcurrency"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionConcurrency.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPutFunctionConcurrency(__scope: Construct, __resources: string[], __input: LambdaPutFunctionConcurrencyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionConcurrency.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionConcurrency.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionConcurrency.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutFunctionConcurrencyRequest`](#aws-cdk-sdk.lambda.LambdaPutFunctionConcurrencyRequest)

---



#### Properties <a name="Properties"></a>

##### `reservedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionConcurrency.property.reservedConcurrentExecutions"></a>

- *Type:* `number`

---


### LambdaResponsesPutFunctionEventInvokeConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPutFunctionEventInvokeConfig(__scope: Construct, __resources: string[], __input: LambdaPutFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig`](#aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig)

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig.property.lastModified"></a>

- *Type:* `string`

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfig.property.maximumRetryAttempts"></a>

- *Type:* `number`

---


### LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig(__scope: Construct, __resources: string[], __input: LambdaPutFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `onFailure`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig.property.onFailure"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure`](#aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure)

---

##### `onSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfig.property.onSuccess"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess`](#aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess)

---


### LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure(__scope: Construct, __resources: string[], __input: LambdaPutFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess(__scope: Construct, __resources: string[], __input: LambdaPutFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaPutFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutFunctionEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesPutProvisionedConcurrencyConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesPutProvisionedConcurrencyConfig(__scope: Construct, __resources: string[], __input: LambdaPutProvisionedConcurrencyConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigRequest`](#aws-cdk-sdk.lambda.LambdaPutProvisionedConcurrencyConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `allocatedProvisionedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.property.allocatedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `availableProvisionedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.property.availableProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.property.lastModified"></a>

- *Type:* `string`

---

##### `requestedProvisionedConcurrentExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.property.requestedProvisionedConcurrentExecutions"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesPutProvisionedConcurrencyConfig.property.statusReason"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateAlias <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateAlias(__scope: Construct, __resources: string[], __input: LambdaUpdateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateAliasRequest`](#aws-cdk-sdk.lambda.LambdaUpdateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.property.aliasArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.property.description"></a>

- *Type:* `string`

---

##### `functionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.property.functionVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.property.revisionId"></a>

- *Type:* `string`

---

##### `routingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAlias.property.routingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateAliasRoutingConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateAliasRoutingConfig)

---


### LambdaResponsesUpdateAliasRoutingConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAliasRoutingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAliasRoutingConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateAliasRoutingConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAliasRoutingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAliasRoutingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAliasRoutingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateAliasRequest`](#aws-cdk-sdk.lambda.LambdaUpdateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalVersionWeights`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateAliasRoutingConfig.property.additionalVersionWeights"></a>

- *Type:* {[ key: string ]: `number`}

---


### LambdaResponsesUpdateCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateCodeSigningConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSigningConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfig.property.codeSigningConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig)

---


### LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedPublishers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.property.allowedPublishers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers)

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.property.codeSigningConfigArn"></a>

- *Type:* `string`

---

##### `codeSigningConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.property.codeSigningConfigId"></a>

- *Type:* `string`

---

##### `codeSigningPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.property.codeSigningPolicies"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.property.description"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfig.property.lastModified"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers(__scope: Construct, __resources: string[], __input: LambdaUpdateCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `signingProfileVersionArns`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns"></a>

- *Type:* `string`[]

---


### LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies(__scope: Construct, __resources: string[], __input: LambdaUpdateCodeSigningConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateCodeSigningConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `untrustedArtifactOnDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateCodeSigningConfigCodeSigningConfigCodeSigningPolicies.property.untrustedArtifactOnDeployment"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateEventSourceMapping <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateEventSourceMapping(__scope: Construct, __resources: string[], __input: LambdaUpdateEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `batchSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.batchSize"></a>

- *Type:* `number`

---

##### `bisectBatchOnFunctionError`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.bisectBatchOnFunctionError"></a>

- *Type:* `boolean`

---

##### `destinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig)

---

##### `eventSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.eventSourceArn"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.lastModified"></a>

- *Type:* `string`

---

##### `lastProcessingResult`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.lastProcessingResult"></a>

- *Type:* `string`

---

##### `maximumBatchingWindowInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

- *Type:* `number`

---

##### `maximumRecordAgeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.maximumRetryAttempts"></a>

- *Type:* `number`

---

##### `parallelizationFactor`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.parallelizationFactor"></a>

- *Type:* `number`

---

##### `queues`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.queues"></a>

- *Type:* `string`[]

---

##### `sourceAccessConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.sourceAccessConfigurations"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration`](#aws-cdk-sdk.lambda.LambdaSourceAccessConfiguration)[]

---

##### `startingPosition`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.startingPosition"></a>

- *Type:* `string`

---

##### `startingPositionTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.startingPositionTimestamp"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.state"></a>

- *Type:* `string`

---

##### `stateTransitionReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.stateTransitionReason"></a>

- *Type:* `string`

---

##### `topics`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.topics"></a>

- *Type:* `string`[]

---

##### `uuid`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMapping.property.uuid"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateEventSourceMappingDestinationConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `onFailure`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig.property.onFailure"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure)

---

##### `onSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfig.property.onSuccess"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess)

---


### LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure(__scope: Construct, __resources: string[], __input: LambdaUpdateEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnFailure.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess(__scope: Construct, __resources: string[], __input: LambdaUpdateEventSourceMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest`](#aws-cdk-sdk.lambda.LambdaUpdateEventSourceMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateEventSourceMappingDestinationConfigOnSuccess.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionCode <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionCode(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionCodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSha256`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.codeSize"></a>

- *Type:* `number`

---

##### `deadLetterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeDeadLetterConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeDeadLetterConfig)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.description"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.environment"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironment`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironment)

---

##### `fileSystemConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.fileSystemConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFileSystemConfig`](#aws-cdk-sdk.lambda.LambdaFileSystemConfig)[]

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.functionArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.functionName"></a>

- *Type:* `string`

---

##### `handler`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.handler"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.lastModified"></a>

- *Type:* `string`

---

##### `lastUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.lastUpdateStatus"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.lastUpdateStatusReason"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.lastUpdateStatusReasonCode"></a>

- *Type:* `string`

---

##### `layers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.layers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayer`](#aws-cdk-sdk.lambda.LambdaLayer)[]

---

##### `masterArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.masterArn"></a>

- *Type:* `string`

---

##### `memorySize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.memorySize"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.revisionId"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.role"></a>

- *Type:* `string`

---

##### `runtime`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.runtime"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.signingProfileVersionArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.stateReasonCode"></a>

- *Type:* `string`

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.timeout"></a>

- *Type:* `number`

---

##### `tracingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.tracingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeTracingConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeTracingConfig)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.version"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCode.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig)

---


### LambdaResponsesUpdateFunctionCodeDeadLetterConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeDeadLetterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeDeadLetterConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionCodeDeadLetterConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionCodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeDeadLetterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeDeadLetterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeDeadLetterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest)

---



#### Properties <a name="Properties"></a>

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeDeadLetterConfig.property.targetArn"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionCodeEnvironment <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironment.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionCodeEnvironment(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionCodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironment.property.error"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError)

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironment.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---


### LambdaResponsesUpdateFunctionCodeEnvironmentError <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionCodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeEnvironmentError.property.message"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionCodeTracingConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeTracingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeTracingConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionCodeTracingConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionCodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeTracingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeTracingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeTracingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeTracingConfig.property.mode"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionCodeVpcConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionCodeVpcConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionCodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionCodeRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionCodeVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionConfiguration <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionConfiguration(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `codeSha256`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.codeSha256"></a>

- *Type:* `string`

---

##### `codeSize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.codeSize"></a>

- *Type:* `number`

---

##### `deadLetterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.deadLetterConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.environment"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment)

---

##### `fileSystemConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.fileSystemConfigs"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaFileSystemConfig`](#aws-cdk-sdk.lambda.LambdaFileSystemConfig)[]

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.functionArn"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.functionName"></a>

- *Type:* `string`

---

##### `handler`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.handler"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.lastModified"></a>

- *Type:* `string`

---

##### `lastUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.lastUpdateStatus"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.lastUpdateStatusReason"></a>

- *Type:* `string`

---

##### `lastUpdateStatusReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.lastUpdateStatusReasonCode"></a>

- *Type:* `string`

---

##### `layers`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.layers"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaLayer`](#aws-cdk-sdk.lambda.LambdaLayer)[]

---

##### `masterArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.masterArn"></a>

- *Type:* `string`

---

##### `memorySize`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.memorySize"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.revisionId"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.role"></a>

- *Type:* `string`

---

##### `runtime`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.runtime"></a>

- *Type:* `string`

---

##### `signingJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.signingJobArn"></a>

- *Type:* `string`

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.signingProfileVersionArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.stateReasonCode"></a>

- *Type:* `string`

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.timeout"></a>

- *Type:* `number`

---

##### `tracingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.tracingConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationTracingConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationTracingConfig)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.version"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfiguration.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig)

---


### LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationDeadLetterConfig.property.targetArn"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionConfigurationEnvironment <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment.property.error"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError)

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironment.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---


### LambdaResponsesUpdateFunctionConfigurationEnvironmentError <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationEnvironmentError.property.message"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionConfigurationTracingConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationTracingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationTracingConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionConfigurationTracingConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationTracingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationTracingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationTracingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationTracingConfig.property.mode"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionConfigurationVpcConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionConfigurationVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionEventInvokeConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionEventInvokeConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig)

---

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig.property.functionArn"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig.property.lastModified"></a>

- *Type:* `string`

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

- *Type:* `number`

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfig.property.maximumRetryAttempts"></a>

- *Type:* `number`

---


### LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `onFailure`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig.property.onFailure"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure)

---

##### `onSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfig.property.onSuccess"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess`](#aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess)

---


### LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

- *Type:* `string`

---


### LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { lambda } from 'aws-cdk-sdk'

new lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess(__scope: Construct, __resources: string[], __input: LambdaUpdateFunctionEventInvokeConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest`](#aws-cdk-sdk.lambda.LambdaUpdateFunctionEventInvokeConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.lambda.LambdaResponsesUpdateFunctionEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

- *Type:* `string`

---



