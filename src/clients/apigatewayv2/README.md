# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ApiGatewayV2Client <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2Client(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createApi` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createApi"></a>

```typescript
public createApi(input: ApiGatewayV2CreateApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest)

---

##### `createApiMapping` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createApiMapping"></a>

```typescript
public createApiMapping(input: ApiGatewayV2CreateApiMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingRequest)

---

##### `createAuthorizer` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createAuthorizer"></a>

```typescript
public createAuthorizer(input: ApiGatewayV2CreateAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest)

---

##### `createDeployment` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createDeployment"></a>

```typescript
public createDeployment(input: ApiGatewayV2CreateDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentRequest)

---

##### `createDomainName` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createDomainName"></a>

```typescript
public createDomainName(input: ApiGatewayV2CreateDomainNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest)

---

##### `createIntegration` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createIntegration"></a>

```typescript
public createIntegration(input: ApiGatewayV2CreateIntegrationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest)

---

##### `createIntegrationResponse` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createIntegrationResponse"></a>

```typescript
public createIntegrationResponse(input: ApiGatewayV2CreateIntegrationResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest)

---

##### `createModel` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createModel"></a>

```typescript
public createModel(input: ApiGatewayV2CreateModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest)

---

##### `createRoute` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createRoute"></a>

```typescript
public createRoute(input: ApiGatewayV2CreateRouteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest)

---

##### `createRouteResponse` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createRouteResponse"></a>

```typescript
public createRouteResponse(input: ApiGatewayV2CreateRouteResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest)

---

##### `createStage` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createStage"></a>

```typescript
public createStage(input: ApiGatewayV2CreateStageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest)

---

##### `createVpcLink` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.createVpcLink"></a>

```typescript
public createVpcLink(input: ApiGatewayV2CreateVpcLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkRequest)

---

##### `deleteAccessLogSettings` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteAccessLogSettings"></a>

```typescript
public deleteAccessLogSettings(input: ApiGatewayV2DeleteAccessLogSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAccessLogSettingsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAccessLogSettingsRequest)

---

##### `deleteApi` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteApi"></a>

```typescript
public deleteApi(input: ApiGatewayV2DeleteApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteApiRequest)

---

##### `deleteApiMapping` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteApiMapping"></a>

```typescript
public deleteApiMapping(input: ApiGatewayV2DeleteApiMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteApiMappingRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteApiMappingRequest)

---

##### `deleteAuthorizer` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteAuthorizer"></a>

```typescript
public deleteAuthorizer(input: ApiGatewayV2DeleteAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAuthorizerRequest)

---

##### `deleteCorsConfiguration` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteCorsConfiguration"></a>

```typescript
public deleteCorsConfiguration(input: ApiGatewayV2DeleteCorsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteCorsConfigurationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteCorsConfigurationRequest)

---

##### `deleteDeployment` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteDeployment"></a>

```typescript
public deleteDeployment(input: ApiGatewayV2DeleteDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteDeploymentRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteDeploymentRequest)

---

##### `deleteDomainName` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteDomainName"></a>

```typescript
public deleteDomainName(input: ApiGatewayV2DeleteDomainNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteDomainNameRequest)

---

##### `deleteIntegration` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteIntegration"></a>

```typescript
public deleteIntegration(input: ApiGatewayV2DeleteIntegrationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationRequest)

---

##### `deleteIntegrationResponse` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteIntegrationResponse"></a>

```typescript
public deleteIntegrationResponse(input: ApiGatewayV2DeleteIntegrationResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationResponseRequest)

---

##### `deleteModel` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteModel"></a>

```typescript
public deleteModel(input: ApiGatewayV2DeleteModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteModelRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteModelRequest)

---

##### `deleteRoute` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteRoute"></a>

```typescript
public deleteRoute(input: ApiGatewayV2DeleteRouteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequest)

---

##### `deleteRouteRequestParameter` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteRouteRequestParameter"></a>

```typescript
public deleteRouteRequestParameter(input: ApiGatewayV2DeleteRouteRequestParameterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequestParameterRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequestParameterRequest)

---

##### `deleteRouteResponse` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteRouteResponse"></a>

```typescript
public deleteRouteResponse(input: ApiGatewayV2DeleteRouteResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteResponseRequest)

---

##### `deleteRouteSettings` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteRouteSettings"></a>

```typescript
public deleteRouteSettings(input: ApiGatewayV2DeleteRouteSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteSettingsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteSettingsRequest)

---

##### `deleteStage` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteStage"></a>

```typescript
public deleteStage(input: ApiGatewayV2DeleteStageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteStageRequest)

---

##### `deleteVpcLink` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.deleteVpcLink"></a>

```typescript
public deleteVpcLink(input: ApiGatewayV2DeleteVpcLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteVpcLinkRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteVpcLinkRequest)

---

##### `exportApi` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.exportApi"></a>

```typescript
public exportApi(input: ApiGatewayV2ExportApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest)

---

##### `fetchApi` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchApi"></a>

```typescript
public fetchApi(input: ApiGatewayV2GetApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiRequest)

---

##### `fetchApiMapping` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchApiMapping"></a>

```typescript
public fetchApiMapping(input: ApiGatewayV2GetApiMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingRequest)

---

##### `fetchApiMappings` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchApiMappings"></a>

```typescript
public fetchApiMappings(input: ApiGatewayV2GetApiMappingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsRequest)

---

##### `fetchApis` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchApis"></a>

```typescript
public fetchApis(input: ApiGatewayV2GetApisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisRequest)

---

##### `fetchAuthorizer` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchAuthorizer"></a>

```typescript
public fetchAuthorizer(input: ApiGatewayV2GetAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerRequest)

---

##### `fetchAuthorizers` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchAuthorizers"></a>

```typescript
public fetchAuthorizers(input: ApiGatewayV2GetAuthorizersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersRequest)

---

##### `fetchDeployment` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchDeployment"></a>

```typescript
public fetchDeployment(input: ApiGatewayV2GetDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentRequest)

---

##### `fetchDeployments` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchDeployments"></a>

```typescript
public fetchDeployments(input: ApiGatewayV2GetDeploymentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsRequest)

---

##### `fetchDomainName` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchDomainName"></a>

```typescript
public fetchDomainName(input: ApiGatewayV2GetDomainNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameRequest)

---

##### `fetchDomainNames` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchDomainNames"></a>

```typescript
public fetchDomainNames(input: ApiGatewayV2GetDomainNamesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesRequest)

---

##### `fetchIntegration` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchIntegration"></a>

```typescript
public fetchIntegration(input: ApiGatewayV2GetIntegrationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationRequest)

---

##### `fetchIntegrationResponse` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchIntegrationResponse"></a>

```typescript
public fetchIntegrationResponse(input: ApiGatewayV2GetIntegrationResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseRequest)

---

##### `fetchIntegrationResponses` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchIntegrationResponses"></a>

```typescript
public fetchIntegrationResponses(input: ApiGatewayV2GetIntegrationResponsesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest)

---

##### `fetchIntegrations` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchIntegrations"></a>

```typescript
public fetchIntegrations(input: ApiGatewayV2GetIntegrationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsRequest)

---

##### `fetchModel` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchModel"></a>

```typescript
public fetchModel(input: ApiGatewayV2GetModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelRequest)

---

##### `fetchModels` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchModels"></a>

```typescript
public fetchModels(input: ApiGatewayV2GetModelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsRequest)

---

##### `fetchModelTemplate` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchModelTemplate"></a>

```typescript
public fetchModelTemplate(input: ApiGatewayV2GetModelTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelTemplateRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelTemplateRequest)

---

##### `fetchRoute` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchRoute"></a>

```typescript
public fetchRoute(input: ApiGatewayV2GetRouteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteRequest)

---

##### `fetchRouteResponse` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchRouteResponse"></a>

```typescript
public fetchRouteResponse(input: ApiGatewayV2GetRouteResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseRequest)

---

##### `fetchRouteResponses` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchRouteResponses"></a>

```typescript
public fetchRouteResponses(input: ApiGatewayV2GetRouteResponsesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesRequest)

---

##### `fetchRoutes` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchRoutes"></a>

```typescript
public fetchRoutes(input: ApiGatewayV2GetRoutesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesRequest)

---

##### `fetchStage` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchStage"></a>

```typescript
public fetchStage(input: ApiGatewayV2GetStageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest)

---

##### `fetchStages` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchStages"></a>

```typescript
public fetchStages(input: ApiGatewayV2GetStagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesRequest)

---

##### `fetchTags` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchTags"></a>

```typescript
public fetchTags(input: ApiGatewayV2GetTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetTagsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetTagsRequest)

---

##### `fetchVpcLink` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchVpcLink"></a>

```typescript
public fetchVpcLink(input: ApiGatewayV2GetVpcLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkRequest)

---

##### `fetchVpcLinks` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.fetchVpcLinks"></a>

```typescript
public fetchVpcLinks(input: ApiGatewayV2GetVpcLinksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksRequest)

---

##### `importApi` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.importApi"></a>

```typescript
public importApi(input: ApiGatewayV2ImportApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest)

---

##### `reimportApi` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.reimportApi"></a>

```typescript
public reimportApi(input: ApiGatewayV2ReimportApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest)

---

##### `resetAuthorizersCache` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.resetAuthorizersCache"></a>

```typescript
public resetAuthorizersCache(input: ApiGatewayV2ResetAuthorizersCacheRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResetAuthorizersCacheRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResetAuthorizersCacheRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.tagResource"></a>

```typescript
public tagResource(input: ApiGatewayV2TagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2TagResourceRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2TagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.untagResource"></a>

```typescript
public untagResource(input: ApiGatewayV2UntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UntagResourceRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UntagResourceRequest)

---

##### `updateApi` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateApi"></a>

```typescript
public updateApi(input: ApiGatewayV2UpdateApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest)

---

##### `updateApiMapping` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateApiMapping"></a>

```typescript
public updateApiMapping(input: ApiGatewayV2UpdateApiMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest)

---

##### `updateAuthorizer` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateAuthorizer"></a>

```typescript
public updateAuthorizer(input: ApiGatewayV2UpdateAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest)

---

##### `updateDeployment` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateDeployment"></a>

```typescript
public updateDeployment(input: ApiGatewayV2UpdateDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentRequest)

---

##### `updateDomainName` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateDomainName"></a>

```typescript
public updateDomainName(input: ApiGatewayV2UpdateDomainNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest)

---

##### `updateIntegration` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateIntegration"></a>

```typescript
public updateIntegration(input: ApiGatewayV2UpdateIntegrationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest)

---

##### `updateIntegrationResponse` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateIntegrationResponse"></a>

```typescript
public updateIntegrationResponse(input: ApiGatewayV2UpdateIntegrationResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest)

---

##### `updateModel` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateModel"></a>

```typescript
public updateModel(input: ApiGatewayV2UpdateModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest)

---

##### `updateRoute` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateRoute"></a>

```typescript
public updateRoute(input: ApiGatewayV2UpdateRouteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest)

---

##### `updateRouteResponse` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateRouteResponse"></a>

```typescript
public updateRouteResponse(input: ApiGatewayV2UpdateRouteResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest)

---

##### `updateStage` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateStage"></a>

```typescript
public updateStage(input: ApiGatewayV2UpdateStageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest)

---

##### `updateVpcLink` <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.updateVpcLink"></a>

```typescript
public updateVpcLink(input: ApiGatewayV2UpdateVpcLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkRequest)

---




## Structs <a name="Structs"></a>

### ApiGatewayV2AccessLogSettings <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2AccessLogSettings: apigatewayv2.ApiGatewayV2AccessLogSettings = { ... }
```

##### `destinationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings.property.destinationArn"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings.property.format"></a>

- *Type:* `string`

---

### ApiGatewayV2Api <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2Api: apigatewayv2.ApiGatewayV2Api = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `apiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors)

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.importInfo"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayV2ApiMapping <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ApiMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2ApiMapping: apigatewayv2.ApiGatewayV2ApiMapping = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ApiMapping.property.apiId"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ApiMapping.property.stage"></a>

- *Type:* `string`

---

##### `apiMappingId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ApiMapping.property.apiMappingId"></a>

- *Type:* `string`

---

##### `apiMappingKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ApiMapping.property.apiMappingKey"></a>

- *Type:* `string`

---

### ApiGatewayV2Authorizer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2Authorizer: apigatewayv2.ApiGatewayV2Authorizer = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.name"></a>

- *Type:* `string`

---

##### `authorizerCredentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.authorizerCredentialsArn"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.authorizerId"></a>

- *Type:* `string`

---

##### `authorizerPayloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.authorizerPayloadFormatVersion"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.authorizerType"></a>

- *Type:* `string`

---

##### `authorizerUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.authorizerUri"></a>

- *Type:* `string`

---

##### `enableSimpleResponses`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.enableSimpleResponses"></a>

- *Type:* `boolean`

---

##### `identitySource`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.identitySource"></a>

- *Type:* `string`[]

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `jwtConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer.property.jwtConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration)

---

### ApiGatewayV2Cors <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2Cors: apigatewayv2.ApiGatewayV2Cors = { ... }
```

##### `allowCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors.property.allowCredentials"></a>

- *Type:* `boolean`

---

##### `allowHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors.property.allowHeaders"></a>

- *Type:* `string`[]

---

##### `allowMethods`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors.property.allowMethods"></a>

- *Type:* `string`[]

---

##### `allowOrigins`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors.property.allowOrigins"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAge`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors.property.maxAge"></a>

- *Type:* `number`

---

### ApiGatewayV2CreateApiMappingRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateApiMappingRequest: apigatewayv2.ApiGatewayV2CreateApiMappingRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingRequest.property.apiId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingRequest.property.domainName"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingRequest.property.stage"></a>

- *Type:* `string`

---

##### `apiMappingKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingRequest.property.apiMappingKey"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateApiMappingResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateApiMappingResponse: apigatewayv2.ApiGatewayV2CreateApiMappingResponse = { ... }
```

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingResponse.property.apiId"></a>

- *Type:* `string`

---

##### `apiMappingId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingResponse.property.apiMappingId"></a>

- *Type:* `string`

---

##### `apiMappingKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingResponse.property.apiMappingKey"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingResponse.property.stage"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateApiRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateApiRequest: apigatewayv2.ApiGatewayV2CreateApiRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.protocolType"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors)

---

##### `credentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `routeKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.routeKey"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.target"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest.property.version"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateApiResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateApiResponse: apigatewayv2.ApiGatewayV2CreateApiResponse = { ... }
```

##### `apiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors)

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiResponse.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayV2CreateAuthorizerRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateAuthorizerRequest: apigatewayv2.ApiGatewayV2CreateAuthorizerRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.apiId"></a>

- *Type:* `string`

---

##### `authorizerType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.authorizerType"></a>

- *Type:* `string`

---

##### `identitySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.identitySource"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.name"></a>

- *Type:* `string`

---

##### `authorizerCredentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.authorizerCredentialsArn"></a>

- *Type:* `string`

---

##### `authorizerPayloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.authorizerPayloadFormatVersion"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.authorizerUri"></a>

- *Type:* `string`

---

##### `enableSimpleResponses`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.enableSimpleResponses"></a>

- *Type:* `boolean`

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `jwtConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest.property.jwtConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration)

---

### ApiGatewayV2CreateAuthorizerResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateAuthorizerResponse: apigatewayv2.ApiGatewayV2CreateAuthorizerResponse = { ... }
```

##### `authorizerCredentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.authorizerCredentialsArn"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.authorizerId"></a>

- *Type:* `string`

---

##### `authorizerPayloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.authorizerPayloadFormatVersion"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.authorizerType"></a>

- *Type:* `string`

---

##### `authorizerUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.authorizerUri"></a>

- *Type:* `string`

---

##### `enableSimpleResponses`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.enableSimpleResponses"></a>

- *Type:* `boolean`

---

##### `identitySource`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.identitySource"></a>

- *Type:* `string`[]

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `jwtConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.jwtConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerResponse.property.name"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateDeploymentRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateDeploymentRequest: apigatewayv2.ApiGatewayV2CreateDeploymentRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentRequest.property.apiId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentRequest.property.description"></a>

- *Type:* `string`

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateDeploymentResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateDeploymentResponse: apigatewayv2.ApiGatewayV2CreateDeploymentResponse = { ... }
```

##### `autoDeployed`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentResponse.property.autoDeployed"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentResponse.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentResponse.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentResponse.property.deploymentStatusMessage"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentResponse.property.description"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateDomainNameRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateDomainNameRequest: apigatewayv2.ApiGatewayV2CreateDomainNameRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest.property.domainNameConfigurations"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration)[]

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthenticationInput`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthenticationInput)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2CreateDomainNameResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateDomainNameResponse: apigatewayv2.ApiGatewayV2CreateDomainNameResponse = { ... }
```

##### `apiMappingSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameResponse.property.apiMappingSelectionExpression"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameResponse.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameResponse.property.domainNameConfigurations"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration)[]

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameResponse.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2CreateIntegrationRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateIntegrationRequest: apigatewayv2.ApiGatewayV2CreateIntegrationRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.apiId"></a>

- *Type:* `string`

---

##### `integrationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.integrationType"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.description"></a>

- *Type:* `string`

---

##### `integrationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.integrationMethod"></a>

- *Type:* `string`

---

##### `integrationSubtype`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.integrationSubtype"></a>

- *Type:* `string`

---

##### `integrationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.integrationUri"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.payloadFormatVersion"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.templateSelectionExpression"></a>

- *Type:* `string`

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfigInput`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfigInput)

---

### ApiGatewayV2CreateIntegrationResponseRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateIntegrationResponseRequest: apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest.property.apiId"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest.property.integrationResponseKey"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest.property.templateSelectionExpression"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateIntegrationResponseResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateIntegrationResponseResponse: apigatewayv2.ApiGatewayV2CreateIntegrationResponseResponse = { ... }
```

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseResponse.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseResponse.property.integrationResponseId"></a>

- *Type:* `string`

---

##### `integrationResponseKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseResponse.property.integrationResponseKey"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseResponse.property.templateSelectionExpression"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateIntegrationResult <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateIntegrationResult: apigatewayv2.ApiGatewayV2CreateIntegrationResult = { ... }
```

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.description"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.integrationMethod"></a>

- *Type:* `string`

---

##### `integrationResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.integrationResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `integrationSubtype`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.integrationSubtype"></a>

- *Type:* `string`

---

##### `integrationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.integrationType"></a>

- *Type:* `string`

---

##### `integrationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.integrationUri"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.payloadFormatVersion"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.templateSelectionExpression"></a>

- *Type:* `string`

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResult.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig)

---

### ApiGatewayV2CreateModelRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateModelRequest: apigatewayv2.ApiGatewayV2CreateModelRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest.property.apiId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest.property.schema"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest.property.description"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateModelResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateModelResponse: apigatewayv2.ApiGatewayV2CreateModelResponse = { ... }
```

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelResponse.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelResponse.property.description"></a>

- *Type:* `string`

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelResponse.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelResponse.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelResponse.property.schema"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateRouteRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateRouteRequest: apigatewayv2.ApiGatewayV2CreateRouteRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.routeKey"></a>

- *Type:* `string`

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.authorizerId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.requestParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.routeResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest.property.target"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateRouteResponseRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateRouteResponseRequest: apigatewayv2.ApiGatewayV2CreateRouteResponseRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest.property.routeId"></a>

- *Type:* `string`

---

##### `routeResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest.property.routeResponseKey"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest.property.responseParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

### ApiGatewayV2CreateRouteResponseResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateRouteResponseResponse: apigatewayv2.ApiGatewayV2CreateRouteResponseResponse = { ... }
```

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseResponse.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeResponseId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseResponse.property.routeResponseId"></a>

- *Type:* `string`

---

##### `routeResponseKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseResponse.property.routeResponseKey"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateRouteResult <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateRouteResult: apigatewayv2.ApiGatewayV2CreateRouteResult = { ... }
```

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.authorizerId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.requestParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.routeId"></a>

- *Type:* `string`

---

##### `routeKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.routeKey"></a>

- *Type:* `string`

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.routeResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResult.property.target"></a>

- *Type:* `string`

---

### ApiGatewayV2CreateStageRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateStageRequest: apigatewayv2.ApiGatewayV2CreateStageRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.apiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.stageName"></a>

- *Type:* `string`

---

##### `accessLogSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings)

---

##### `autoDeploy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.description"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.routeSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)}

---

##### `stageVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2CreateStageResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateStageResponse: apigatewayv2.ApiGatewayV2CreateStageResponse = { ... }
```

##### `accessLogSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings)

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `autoDeploy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.description"></a>

- *Type:* `string`

---

##### `lastDeploymentStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.lastDeploymentStatusMessage"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.routeSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)}

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.stageName"></a>

- *Type:* `string`

---

##### `stageVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2CreateVpcLinkRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateVpcLinkRequest: apigatewayv2.ApiGatewayV2CreateVpcLinkRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkRequest.property.name"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2CreateVpcLinkResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2CreateVpcLinkResponse: apigatewayv2.ApiGatewayV2CreateVpcLinkResponse = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcLinkId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse.property.vpcLinkId"></a>

- *Type:* `string`

---

##### `vpcLinkStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse.property.vpcLinkStatus"></a>

- *Type:* `string`

---

##### `vpcLinkStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse.property.vpcLinkStatusMessage"></a>

- *Type:* `string`

---

##### `vpcLinkVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkResponse.property.vpcLinkVersion"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteAccessLogSettingsRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAccessLogSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteAccessLogSettingsRequest: apigatewayv2.ApiGatewayV2DeleteAccessLogSettingsRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAccessLogSettingsRequest.property.apiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAccessLogSettingsRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteApiMappingRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteApiMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteApiMappingRequest: apigatewayv2.ApiGatewayV2DeleteApiMappingRequest = { ... }
```

##### `apiMappingId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteApiMappingRequest.property.apiMappingId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteApiMappingRequest.property.domainName"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteApiRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteApiRequest: apigatewayv2.ApiGatewayV2DeleteApiRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteApiRequest.property.apiId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteAuthorizerRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteAuthorizerRequest: apigatewayv2.ApiGatewayV2DeleteAuthorizerRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAuthorizerRequest.property.apiId"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteAuthorizerRequest.property.authorizerId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteCorsConfigurationRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteCorsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteCorsConfigurationRequest: apigatewayv2.ApiGatewayV2DeleteCorsConfigurationRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteCorsConfigurationRequest.property.apiId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteDeploymentRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteDeploymentRequest: apigatewayv2.ApiGatewayV2DeleteDeploymentRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteDeploymentRequest.property.apiId"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteDeploymentRequest.property.deploymentId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteDomainNameRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteDomainNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteDomainNameRequest: apigatewayv2.ApiGatewayV2DeleteDomainNameRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteDomainNameRequest.property.domainName"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteIntegrationRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteIntegrationRequest: apigatewayv2.ApiGatewayV2DeleteIntegrationRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationRequest.property.apiId"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationRequest.property.integrationId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteIntegrationResponseRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteIntegrationResponseRequest: apigatewayv2.ApiGatewayV2DeleteIntegrationResponseRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationResponseRequest.property.apiId"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationResponseRequest.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteIntegrationResponseRequest.property.integrationResponseId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteModelRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteModelRequest: apigatewayv2.ApiGatewayV2DeleteModelRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteModelRequest.property.apiId"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteModelRequest.property.modelId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteRouteRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteRouteRequest: apigatewayv2.ApiGatewayV2DeleteRouteRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequest.property.routeId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteRouteRequestParameterRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequestParameterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteRouteRequestParameterRequest: apigatewayv2.ApiGatewayV2DeleteRouteRequestParameterRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequestParameterRequest.property.apiId"></a>

- *Type:* `string`

---

##### `requestParameterKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequestParameterRequest.property.requestParameterKey"></a>

- *Type:* `string`

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteRequestParameterRequest.property.routeId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteRouteResponseRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteRouteResponseRequest: apigatewayv2.ApiGatewayV2DeleteRouteResponseRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteResponseRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteResponseRequest.property.routeId"></a>

- *Type:* `string`

---

##### `routeResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteResponseRequest.property.routeResponseId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteRouteSettingsRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteRouteSettingsRequest: apigatewayv2.ApiGatewayV2DeleteRouteSettingsRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteSettingsRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteSettingsRequest.property.routeKey"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteRouteSettingsRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteStageRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteStageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteStageRequest: apigatewayv2.ApiGatewayV2DeleteStageRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteStageRequest.property.apiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteStageRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteVpcLinkRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteVpcLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteVpcLinkRequest: apigatewayv2.ApiGatewayV2DeleteVpcLinkRequest = { ... }
```

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteVpcLinkRequest.property.vpcLinkId"></a>

- *Type:* `string`

---

### ApiGatewayV2DeleteVpcLinkResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DeleteVpcLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DeleteVpcLinkResponse: apigatewayv2.ApiGatewayV2DeleteVpcLinkResponse = { ... }
```

### ApiGatewayV2Deployment <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2Deployment: apigatewayv2.ApiGatewayV2Deployment = { ... }
```

##### `autoDeployed`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment.property.autoDeployed"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment.property.deploymentStatusMessage"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment.property.description"></a>

- *Type:* `string`

---

### ApiGatewayV2DomainName <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DomainName: apigatewayv2.ApiGatewayV2DomainName = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName.property.domainName"></a>

- *Type:* `string`

---

##### `apiMappingSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName.property.apiMappingSelectionExpression"></a>

- *Type:* `string`

---

##### `domainNameConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName.property.domainNameConfigurations"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration)[]

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2DomainNameConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2DomainNameConfiguration: apigatewayv2.ApiGatewayV2DomainNameConfiguration = { ... }
```

##### `apiGatewayDomainName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration.property.apiGatewayDomainName"></a>

- *Type:* `string`

---

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration.property.certificateName"></a>

- *Type:* `string`

---

##### `certificateUploadDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration.property.certificateUploadDate"></a>

- *Type:* `string`

---

##### `domainNameStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration.property.domainNameStatus"></a>

- *Type:* `string`

---

##### `domainNameStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration.property.domainNameStatusMessage"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration.property.endpointType"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `securityPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration.property.securityPolicy"></a>

- *Type:* `string`

---

### ApiGatewayV2ExportApiRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2ExportApiRequest: apigatewayv2.ApiGatewayV2ExportApiRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest.property.apiId"></a>

- *Type:* `string`

---

##### `outputType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest.property.outputType"></a>

- *Type:* `string`

---

##### `specification`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest.property.specification"></a>

- *Type:* `string`

---

##### `exportVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest.property.exportVersion"></a>

- *Type:* `string`

---

##### `includeExtensions`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest.property.includeExtensions"></a>

- *Type:* `boolean`

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayV2ExportApiResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2ExportApiResponse: apigatewayv2.ApiGatewayV2ExportApiResponse = { ... }
```

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiResponse.property.body"></a>

- *Type:* `any`

---

### ApiGatewayV2GetApiMappingRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetApiMappingRequest: apigatewayv2.ApiGatewayV2GetApiMappingRequest = { ... }
```

##### `apiMappingId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingRequest.property.apiMappingId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingRequest.property.domainName"></a>

- *Type:* `string`

---

### ApiGatewayV2GetApiMappingResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetApiMappingResponse: apigatewayv2.ApiGatewayV2GetApiMappingResponse = { ... }
```

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingResponse.property.apiId"></a>

- *Type:* `string`

---

##### `apiMappingId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingResponse.property.apiMappingId"></a>

- *Type:* `string`

---

##### `apiMappingKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingResponse.property.apiMappingKey"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingResponse.property.stage"></a>

- *Type:* `string`

---

### ApiGatewayV2GetApiMappingsRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetApiMappingsRequest: apigatewayv2.ApiGatewayV2GetApiMappingsRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsRequest.property.domainName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetApiMappingsResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetApiMappingsResponse: apigatewayv2.ApiGatewayV2GetApiMappingsResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ApiMapping`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ApiMapping)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetApiRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetApiRequest: apigatewayv2.ApiGatewayV2GetApiRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiRequest.property.apiId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetApiResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetApiResponse: apigatewayv2.ApiGatewayV2GetApiResponse = { ... }
```

##### `apiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors)

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiResponse.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayV2GetApisRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetApisRequest: apigatewayv2.ApiGatewayV2GetApisRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetApisResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetApisResponse: apigatewayv2.ApiGatewayV2GetApisResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetAuthorizerRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetAuthorizerRequest: apigatewayv2.ApiGatewayV2GetAuthorizerRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerRequest.property.apiId"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerRequest.property.authorizerId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetAuthorizerResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetAuthorizerResponse: apigatewayv2.ApiGatewayV2GetAuthorizerResponse = { ... }
```

##### `authorizerCredentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.authorizerCredentialsArn"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.authorizerId"></a>

- *Type:* `string`

---

##### `authorizerPayloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.authorizerPayloadFormatVersion"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.authorizerType"></a>

- *Type:* `string`

---

##### `authorizerUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.authorizerUri"></a>

- *Type:* `string`

---

##### `enableSimpleResponses`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.enableSimpleResponses"></a>

- *Type:* `boolean`

---

##### `identitySource`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.identitySource"></a>

- *Type:* `string`[]

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `jwtConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.jwtConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerResponse.property.name"></a>

- *Type:* `string`

---

### ApiGatewayV2GetAuthorizersRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetAuthorizersRequest: apigatewayv2.ApiGatewayV2GetAuthorizersRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersRequest.property.apiId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetAuthorizersResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetAuthorizersResponse: apigatewayv2.ApiGatewayV2GetAuthorizersResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetDeploymentRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetDeploymentRequest: apigatewayv2.ApiGatewayV2GetDeploymentRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentRequest.property.apiId"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentRequest.property.deploymentId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetDeploymentResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetDeploymentResponse: apigatewayv2.ApiGatewayV2GetDeploymentResponse = { ... }
```

##### `autoDeployed`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentResponse.property.autoDeployed"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentResponse.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentResponse.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentResponse.property.deploymentStatusMessage"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentResponse.property.description"></a>

- *Type:* `string`

---

### ApiGatewayV2GetDeploymentsRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetDeploymentsRequest: apigatewayv2.ApiGatewayV2GetDeploymentsRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsRequest.property.apiId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetDeploymentsResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetDeploymentsResponse: apigatewayv2.ApiGatewayV2GetDeploymentsResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetDomainNameRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetDomainNameRequest: apigatewayv2.ApiGatewayV2GetDomainNameRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameRequest.property.domainName"></a>

- *Type:* `string`

---

### ApiGatewayV2GetDomainNameResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetDomainNameResponse: apigatewayv2.ApiGatewayV2GetDomainNameResponse = { ... }
```

##### `apiMappingSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameResponse.property.apiMappingSelectionExpression"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameResponse.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameResponse.property.domainNameConfigurations"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration)[]

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameResponse.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2GetDomainNamesRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetDomainNamesRequest: apigatewayv2.ApiGatewayV2GetDomainNamesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetDomainNamesResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetDomainNamesResponse: apigatewayv2.ApiGatewayV2GetDomainNamesResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetIntegrationRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetIntegrationRequest: apigatewayv2.ApiGatewayV2GetIntegrationRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationRequest.property.apiId"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationRequest.property.integrationId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetIntegrationResponseRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetIntegrationResponseRequest: apigatewayv2.ApiGatewayV2GetIntegrationResponseRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseRequest.property.apiId"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseRequest.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseRequest.property.integrationResponseId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetIntegrationResponseResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetIntegrationResponseResponse: apigatewayv2.ApiGatewayV2GetIntegrationResponseResponse = { ... }
```

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseResponse.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseResponse.property.integrationResponseId"></a>

- *Type:* `string`

---

##### `integrationResponseKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseResponse.property.integrationResponseKey"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseResponse.property.templateSelectionExpression"></a>

- *Type:* `string`

---

### ApiGatewayV2GetIntegrationResponsesRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetIntegrationResponsesRequest: apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest.property.apiId"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest.property.integrationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetIntegrationResponsesResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetIntegrationResponsesResponse: apigatewayv2.ApiGatewayV2GetIntegrationResponsesResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetIntegrationResult <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetIntegrationResult: apigatewayv2.ApiGatewayV2GetIntegrationResult = { ... }
```

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.description"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.integrationMethod"></a>

- *Type:* `string`

---

##### `integrationResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.integrationResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `integrationSubtype`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.integrationSubtype"></a>

- *Type:* `string`

---

##### `integrationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.integrationType"></a>

- *Type:* `string`

---

##### `integrationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.integrationUri"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.payloadFormatVersion"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.templateSelectionExpression"></a>

- *Type:* `string`

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResult.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig)

---

### ApiGatewayV2GetIntegrationsRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetIntegrationsRequest: apigatewayv2.ApiGatewayV2GetIntegrationsRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsRequest.property.apiId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetIntegrationsResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetIntegrationsResponse: apigatewayv2.ApiGatewayV2GetIntegrationsResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetModelRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetModelRequest: apigatewayv2.ApiGatewayV2GetModelRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelRequest.property.apiId"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelRequest.property.modelId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetModelResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetModelResponse: apigatewayv2.ApiGatewayV2GetModelResponse = { ... }
```

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelResponse.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelResponse.property.description"></a>

- *Type:* `string`

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelResponse.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelResponse.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelResponse.property.schema"></a>

- *Type:* `string`

---

### ApiGatewayV2GetModelsRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetModelsRequest: apigatewayv2.ApiGatewayV2GetModelsRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsRequest.property.apiId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetModelsResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetModelsResponse: apigatewayv2.ApiGatewayV2GetModelsResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetModelTemplateRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetModelTemplateRequest: apigatewayv2.ApiGatewayV2GetModelTemplateRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelTemplateRequest.property.apiId"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelTemplateRequest.property.modelId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetModelTemplateResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetModelTemplateResponse: apigatewayv2.ApiGatewayV2GetModelTemplateResponse = { ... }
```

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelTemplateResponse.property.value"></a>

- *Type:* `string`

---

### ApiGatewayV2GetRouteRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetRouteRequest: apigatewayv2.ApiGatewayV2GetRouteRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteRequest.property.routeId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetRouteResponseRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetRouteResponseRequest: apigatewayv2.ApiGatewayV2GetRouteResponseRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseRequest.property.routeId"></a>

- *Type:* `string`

---

##### `routeResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseRequest.property.routeResponseId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetRouteResponseResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetRouteResponseResponse: apigatewayv2.ApiGatewayV2GetRouteResponseResponse = { ... }
```

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseResponse.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeResponseId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseResponse.property.routeResponseId"></a>

- *Type:* `string`

---

##### `routeResponseKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseResponse.property.routeResponseKey"></a>

- *Type:* `string`

---

### ApiGatewayV2GetRouteResponsesRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetRouteResponsesRequest: apigatewayv2.ApiGatewayV2GetRouteResponsesRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesRequest.property.routeId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetRouteResponsesResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetRouteResponsesResponse: apigatewayv2.ApiGatewayV2GetRouteResponsesResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetRouteResult <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetRouteResult: apigatewayv2.ApiGatewayV2GetRouteResult = { ... }
```

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.authorizerId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.requestParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.routeId"></a>

- *Type:* `string`

---

##### `routeKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.routeKey"></a>

- *Type:* `string`

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.routeResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResult.property.target"></a>

- *Type:* `string`

---

### ApiGatewayV2GetRoutesRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetRoutesRequest: apigatewayv2.ApiGatewayV2GetRoutesRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesRequest.property.apiId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetRoutesResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetRoutesResponse: apigatewayv2.ApiGatewayV2GetRoutesResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetStageRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetStageRequest: apigatewayv2.ApiGatewayV2GetStageRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest.property.apiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayV2GetStageResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetStageResponse: apigatewayv2.ApiGatewayV2GetStageResponse = { ... }
```

##### `accessLogSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings)

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `autoDeploy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.description"></a>

- *Type:* `string`

---

##### `lastDeploymentStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.lastDeploymentStatusMessage"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.routeSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)}

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.stageName"></a>

- *Type:* `string`

---

##### `stageVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2GetStagesRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetStagesRequest: apigatewayv2.ApiGatewayV2GetStagesRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesRequest.property.apiId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetStagesResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetStagesResponse: apigatewayv2.ApiGatewayV2GetStagesResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetTagsRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetTagsRequest: apigatewayv2.ApiGatewayV2GetTagsRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetTagsRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ApiGatewayV2GetTagsResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetTagsResponse: apigatewayv2.ApiGatewayV2GetTagsResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetTagsResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2GetVpcLinkRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetVpcLinkRequest: apigatewayv2.ApiGatewayV2GetVpcLinkRequest = { ... }
```

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkRequest.property.vpcLinkId"></a>

- *Type:* `string`

---

### ApiGatewayV2GetVpcLinkResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetVpcLinkResponse: apigatewayv2.ApiGatewayV2GetVpcLinkResponse = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcLinkId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse.property.vpcLinkId"></a>

- *Type:* `string`

---

##### `vpcLinkStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse.property.vpcLinkStatus"></a>

- *Type:* `string`

---

##### `vpcLinkStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse.property.vpcLinkStatusMessage"></a>

- *Type:* `string`

---

##### `vpcLinkVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkResponse.property.vpcLinkVersion"></a>

- *Type:* `string`

---

### ApiGatewayV2GetVpcLinksRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetVpcLinksRequest: apigatewayv2.ApiGatewayV2GetVpcLinksRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2GetVpcLinksResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2GetVpcLinksResponse: apigatewayv2.ApiGatewayV2GetVpcLinksResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApiGatewayV2ImportApiRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2ImportApiRequest: apigatewayv2.ApiGatewayV2ImportApiRequest = { ... }
```

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest.property.body"></a>

- *Type:* `string`

---

##### `basepath`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest.property.basepath"></a>

- *Type:* `string`

---

##### `failOnWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest.property.failOnWarnings"></a>

- *Type:* `boolean`

---

### ApiGatewayV2ImportApiResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2ImportApiResponse: apigatewayv2.ApiGatewayV2ImportApiResponse = { ... }
```

##### `apiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors)

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiResponse.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayV2Integration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2Integration: apigatewayv2.ApiGatewayV2Integration = { ... }
```

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.description"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.integrationMethod"></a>

- *Type:* `string`

---

##### `integrationResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.integrationResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `integrationSubtype`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.integrationSubtype"></a>

- *Type:* `string`

---

##### `integrationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.integrationType"></a>

- *Type:* `string`

---

##### `integrationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.integrationUri"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.payloadFormatVersion"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.templateSelectionExpression"></a>

- *Type:* `string`

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig)

---

### ApiGatewayV2IntegrationResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2IntegrationResponse: apigatewayv2.ApiGatewayV2IntegrationResponse = { ... }
```

##### `integrationResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse.property.integrationResponseKey"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse.property.integrationResponseId"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse.property.templateSelectionExpression"></a>

- *Type:* `string`

---

### ApiGatewayV2JwtConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2JwtConfiguration: apigatewayv2.ApiGatewayV2JwtConfiguration = { ... }
```

##### `audience`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration.property.audience"></a>

- *Type:* `string`[]

---

##### `issuer`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration.property.issuer"></a>

- *Type:* `string`

---

### ApiGatewayV2Model <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2Model: apigatewayv2.ApiGatewayV2Model = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model.property.name"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model.property.description"></a>

- *Type:* `string`

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model.property.modelId"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model.property.schema"></a>

- *Type:* `string`

---

### ApiGatewayV2MutualTlsAuthentication <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2MutualTlsAuthentication: apigatewayv2.ApiGatewayV2MutualTlsAuthentication = { ... }
```

##### `truststoreUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication.property.truststoreVersion"></a>

- *Type:* `string`

---

##### `truststoreWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication.property.truststoreWarnings"></a>

- *Type:* `string`[]

---

### ApiGatewayV2MutualTlsAuthenticationInput <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthenticationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2MutualTlsAuthenticationInput: apigatewayv2.ApiGatewayV2MutualTlsAuthenticationInput = { ... }
```

##### `truststoreUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthenticationInput.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthenticationInput.property.truststoreVersion"></a>

- *Type:* `string`

---

### ApiGatewayV2ParameterConstraints <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2ParameterConstraints: apigatewayv2.ApiGatewayV2ParameterConstraints = { ... }
```

##### `required`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints.property.required"></a>

- *Type:* `boolean`

---

### ApiGatewayV2ReimportApiRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2ReimportApiRequest: apigatewayv2.ApiGatewayV2ReimportApiRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest.property.apiId"></a>

- *Type:* `string`

---

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest.property.body"></a>

- *Type:* `string`

---

##### `basepath`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest.property.basepath"></a>

- *Type:* `string`

---

##### `failOnWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest.property.failOnWarnings"></a>

- *Type:* `boolean`

---

### ApiGatewayV2ReimportApiResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2ReimportApiResponse: apigatewayv2.ApiGatewayV2ReimportApiResponse = { ... }
```

##### `apiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors)

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiResponse.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayV2ResetAuthorizersCacheRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResetAuthorizersCacheRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2ResetAuthorizersCacheRequest: apigatewayv2.ApiGatewayV2ResetAuthorizersCacheRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResetAuthorizersCacheRequest.property.apiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResetAuthorizersCacheRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayV2Route <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2Route: apigatewayv2.ApiGatewayV2Route = { ... }
```

##### `routeKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.routeKey"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.authorizerId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.requestParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.routeId"></a>

- *Type:* `string`

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.routeResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route.property.target"></a>

- *Type:* `string`

---

### ApiGatewayV2RouteResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2RouteResponse: apigatewayv2.ApiGatewayV2RouteResponse = { ... }
```

##### `routeResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse.property.routeResponseKey"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeResponseId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse.property.routeResponseId"></a>

- *Type:* `string`

---

### ApiGatewayV2RouteSettings <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2RouteSettings: apigatewayv2.ApiGatewayV2RouteSettings = { ... }
```

##### `dataTraceEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings.property.dataTraceEnabled"></a>

- *Type:* `boolean`

---

##### `detailedMetricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings.property.detailedMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `loggingLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings.property.loggingLevel"></a>

- *Type:* `string`

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings.property.throttlingBurstLimit"></a>

- *Type:* `number`

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings.property.throttlingRateLimit"></a>

- *Type:* `number`

---

### ApiGatewayV2Stage <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2Stage: apigatewayv2.ApiGatewayV2Stage = { ... }
```

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.stageName"></a>

- *Type:* `string`

---

##### `accessLogSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings)

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `autoDeploy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.description"></a>

- *Type:* `string`

---

##### `lastDeploymentStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.lastDeploymentStatusMessage"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.routeSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)}

---

##### `stageVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2TagResourceRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2TagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2TagResourceRequest: apigatewayv2.ApiGatewayV2TagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2TagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2TagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2TagResourceResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2TagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2TagResourceResponse: apigatewayv2.ApiGatewayV2TagResourceResponse = { ... }
```

### ApiGatewayV2TlsConfig <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2TlsConfig: apigatewayv2.ApiGatewayV2TlsConfig = { ... }
```

##### `serverNameToVerify`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig.property.serverNameToVerify"></a>

- *Type:* `string`

---

### ApiGatewayV2TlsConfigInput <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfigInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2TlsConfigInput: apigatewayv2.ApiGatewayV2TlsConfigInput = { ... }
```

##### `serverNameToVerify`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfigInput.property.serverNameToVerify"></a>

- *Type:* `string`

---

### ApiGatewayV2UntagResourceRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UntagResourceRequest: apigatewayv2.ApiGatewayV2UntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ApiGatewayV2UpdateApiMappingRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateApiMappingRequest: apigatewayv2.ApiGatewayV2UpdateApiMappingRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest.property.apiId"></a>

- *Type:* `string`

---

##### `apiMappingId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest.property.apiMappingId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest.property.domainName"></a>

- *Type:* `string`

---

##### `apiMappingKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest.property.apiMappingKey"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest.property.stage"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateApiMappingResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateApiMappingResponse: apigatewayv2.ApiGatewayV2UpdateApiMappingResponse = { ... }
```

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingResponse.property.apiId"></a>

- *Type:* `string`

---

##### `apiMappingId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingResponse.property.apiMappingId"></a>

- *Type:* `string`

---

##### `apiMappingKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingResponse.property.apiMappingKey"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingResponse.property.stage"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateApiRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateApiRequest: apigatewayv2.ApiGatewayV2UpdateApiRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors)

---

##### `credentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.name"></a>

- *Type:* `string`

---

##### `routeKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.routeKey"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.target"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest.property.version"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateApiResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateApiResponse: apigatewayv2.ApiGatewayV2UpdateApiResponse = { ... }
```

##### `apiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Cors)

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiResponse.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayV2UpdateAuthorizerRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateAuthorizerRequest: apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.apiId"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.authorizerId"></a>

- *Type:* `string`

---

##### `authorizerCredentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.authorizerCredentialsArn"></a>

- *Type:* `string`

---

##### `authorizerPayloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.authorizerPayloadFormatVersion"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.authorizerType"></a>

- *Type:* `string`

---

##### `authorizerUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.authorizerUri"></a>

- *Type:* `string`

---

##### `enableSimpleResponses`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.enableSimpleResponses"></a>

- *Type:* `boolean`

---

##### `identitySource`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.identitySource"></a>

- *Type:* `string`[]

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `jwtConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.jwtConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest.property.name"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateAuthorizerResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateAuthorizerResponse: apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse = { ... }
```

##### `authorizerCredentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.authorizerCredentialsArn"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.authorizerId"></a>

- *Type:* `string`

---

##### `authorizerPayloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.authorizerPayloadFormatVersion"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.authorizerType"></a>

- *Type:* `string`

---

##### `authorizerUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.authorizerUri"></a>

- *Type:* `string`

---

##### `enableSimpleResponses`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.enableSimpleResponses"></a>

- *Type:* `boolean`

---

##### `identitySource`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.identitySource"></a>

- *Type:* `string`[]

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `jwtConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.jwtConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2JwtConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerResponse.property.name"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateDeploymentRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateDeploymentRequest: apigatewayv2.ApiGatewayV2UpdateDeploymentRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentRequest.property.apiId"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentRequest.property.description"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateDeploymentResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateDeploymentResponse: apigatewayv2.ApiGatewayV2UpdateDeploymentResponse = { ... }
```

##### `autoDeployed`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentResponse.property.autoDeployed"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentResponse.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentResponse.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentResponse.property.deploymentStatusMessage"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentResponse.property.description"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateDomainNameRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateDomainNameRequest: apigatewayv2.ApiGatewayV2UpdateDomainNameRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest.property.domainNameConfigurations"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration)[]

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthenticationInput`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthenticationInput)

---

### ApiGatewayV2UpdateDomainNameResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateDomainNameResponse: apigatewayv2.ApiGatewayV2UpdateDomainNameResponse = { ... }
```

##### `apiMappingSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameResponse.property.apiMappingSelectionExpression"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameResponse.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameResponse.property.domainNameConfigurations"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration)[]

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameResponse.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2MutualTlsAuthentication)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2UpdateIntegrationRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateIntegrationRequest: apigatewayv2.ApiGatewayV2UpdateIntegrationRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.apiId"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.integrationId"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.description"></a>

- *Type:* `string`

---

##### `integrationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.integrationMethod"></a>

- *Type:* `string`

---

##### `integrationSubtype`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.integrationSubtype"></a>

- *Type:* `string`

---

##### `integrationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.integrationType"></a>

- *Type:* `string`

---

##### `integrationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.integrationUri"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.payloadFormatVersion"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.templateSelectionExpression"></a>

- *Type:* `string`

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfigInput`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfigInput)

---

### ApiGatewayV2UpdateIntegrationResponseRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateIntegrationResponseRequest: apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest.property.apiId"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest.property.integrationResponseId"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `integrationResponseKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest.property.integrationResponseKey"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest.property.templateSelectionExpression"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateIntegrationResponseResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateIntegrationResponseResponse: apigatewayv2.ApiGatewayV2UpdateIntegrationResponseResponse = { ... }
```

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseResponse.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseResponse.property.integrationResponseId"></a>

- *Type:* `string`

---

##### `integrationResponseKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseResponse.property.integrationResponseKey"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseResponse.property.templateSelectionExpression"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateIntegrationResult <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateIntegrationResult: apigatewayv2.ApiGatewayV2UpdateIntegrationResult = { ... }
```

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.description"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.integrationMethod"></a>

- *Type:* `string`

---

##### `integrationResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.integrationResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `integrationSubtype`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.integrationSubtype"></a>

- *Type:* `string`

---

##### `integrationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.integrationType"></a>

- *Type:* `string`

---

##### `integrationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.integrationUri"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.payloadFormatVersion"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.templateSelectionExpression"></a>

- *Type:* `string`

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResult.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2TlsConfig)

---

### ApiGatewayV2UpdateModelRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateModelRequest: apigatewayv2.ApiGatewayV2UpdateModelRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest.property.apiId"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest.property.modelId"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest.property.schema"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateModelResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateModelResponse: apigatewayv2.ApiGatewayV2UpdateModelResponse = { ... }
```

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelResponse.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelResponse.property.description"></a>

- *Type:* `string`

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelResponse.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelResponse.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelResponse.property.schema"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateRouteRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateRouteRequest: apigatewayv2.ApiGatewayV2UpdateRouteRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.routeId"></a>

- *Type:* `string`

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.authorizerId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.requestParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.routeKey"></a>

- *Type:* `string`

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.routeResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest.property.target"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateRouteResponseRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateRouteResponseRequest: apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest.property.apiId"></a>

- *Type:* `string`

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest.property.routeId"></a>

- *Type:* `string`

---

##### `routeResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest.property.routeResponseId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest.property.responseParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeResponseKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest.property.routeResponseKey"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateRouteResponseResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateRouteResponseResponse: apigatewayv2.ApiGatewayV2UpdateRouteResponseResponse = { ... }
```

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseResponse.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeResponseId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseResponse.property.routeResponseId"></a>

- *Type:* `string`

---

##### `routeResponseKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseResponse.property.routeResponseKey"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateRouteResult <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateRouteResult: apigatewayv2.ApiGatewayV2UpdateRouteResult = { ... }
```

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.authorizerId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.requestParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.routeId"></a>

- *Type:* `string`

---

##### `routeKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.routeKey"></a>

- *Type:* `string`

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.routeResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResult.property.target"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateStageRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateStageRequest: apigatewayv2.ApiGatewayV2UpdateStageRequest = { ... }
```

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.apiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.stageName"></a>

- *Type:* `string`

---

##### `accessLogSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings)

---

##### `autoDeploy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.description"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.routeSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)}

---

##### `stageVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2UpdateStageResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateStageResponse: apigatewayv2.ApiGatewayV2UpdateStageResponse = { ... }
```

##### `accessLogSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2AccessLogSettings)

---

##### `apiGatewayManaged`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `autoDeploy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.description"></a>

- *Type:* `string`

---

##### `lastDeploymentStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.lastDeploymentStatusMessage"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.routeSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)}

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.stageName"></a>

- *Type:* `string`

---

##### `stageVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayV2UpdateVpcLinkRequest <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateVpcLinkRequest: apigatewayv2.ApiGatewayV2UpdateVpcLinkRequest = { ... }
```

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkRequest.property.vpcLinkId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkRequest.property.name"></a>

- *Type:* `string`

---

### ApiGatewayV2UpdateVpcLinkResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2UpdateVpcLinkResponse: apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcLinkId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse.property.vpcLinkId"></a>

- *Type:* `string`

---

##### `vpcLinkStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse.property.vpcLinkStatus"></a>

- *Type:* `string`

---

##### `vpcLinkStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse.property.vpcLinkStatusMessage"></a>

- *Type:* `string`

---

##### `vpcLinkVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkResponse.property.vpcLinkVersion"></a>

- *Type:* `string`

---

### ApiGatewayV2VpcLink <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

const apiGatewayV2VpcLink: apigatewayv2.ApiGatewayV2VpcLink = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink.property.vpcLinkId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink.property.createdDate"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcLinkStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink.property.vpcLinkStatus"></a>

- *Type:* `string`

---

##### `vpcLinkStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink.property.vpcLinkStatusMessage"></a>

- *Type:* `string`

---

##### `vpcLinkVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink.property.vpcLinkVersion"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ApiGatewayV2ResponsesCreateApi <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateApi(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration)

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApi.property.warnings"></a>

- *Type:* `string`[]

---


### ApiGatewayV2ResponsesCreateApiCorsConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiRequest)

---



#### Properties <a name="Properties"></a>

##### `allowCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.property.allowCredentials"></a>

- *Type:* `boolean`

---

##### `allowHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.property.allowHeaders"></a>

- *Type:* `string`[]

---

##### `allowMethods`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.property.allowMethods"></a>

- *Type:* `string`[]

---

##### `allowOrigins`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.property.allowOrigins"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAge`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiCorsConfiguration.property.maxAge"></a>

- *Type:* `number`

---


### ApiGatewayV2ResponsesCreateApiMapping <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateApiMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateApiMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping.property.apiId"></a>

- *Type:* `string`

---

##### `apiMappingId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping.property.apiMappingId"></a>

- *Type:* `string`

---

##### `apiMappingKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping.property.apiMappingKey"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateApiMapping.property.stage"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateAuthorizer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerCredentialsArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.authorizerCredentialsArn"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.authorizerId"></a>

- *Type:* `string`

---

##### `authorizerPayloadFormatVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.authorizerPayloadFormatVersion"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.authorizerType"></a>

- *Type:* `string`

---

##### `authorizerUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.authorizerUri"></a>

- *Type:* `string`

---

##### `enableSimpleResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.enableSimpleResponses"></a>

- *Type:* `boolean`

---

##### `identitySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.identitySource"></a>

- *Type:* `string`[]

---

##### `identityValidationExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `jwtConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.jwtConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizer.property.name"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `audience`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration.property.audience"></a>

- *Type:* `string`[]

---

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration.property.issuer"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateDeployment <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateDeployment(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `autoDeployed`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.property.autoDeployed"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.property.deploymentStatusMessage"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDeployment.property.description"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateDomainName <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateDomainName(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `apiMappingSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName.property.apiMappingSelectionExpression"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName.property.domainNameConfigurations"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration)[]

---

##### `mutualTlsAuthentication`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainName.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `truststoreUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

- *Type:* `string`

---

##### `truststoreWarnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication.property.truststoreWarnings"></a>

- *Type:* `string`[]

---


### ApiGatewayV2ResponsesCreateIntegration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateIntegration(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.description"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.integrationMethod"></a>

- *Type:* `string`

---

##### `integrationResponseSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.integrationResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `integrationSubtype`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.integrationSubtype"></a>

- *Type:* `string`

---

##### `integrationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.integrationType"></a>

- *Type:* `string`

---

##### `integrationUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.integrationUri"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `payloadFormatVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.payloadFormatVersion"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.templateSelectionExpression"></a>

- *Type:* `string`

---

##### `timeoutInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationTlsConfig`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationTlsConfig)

---


### ApiGatewayV2ResponsesCreateIntegrationResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateIntegrationResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `contentHandlingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.property.integrationResponseId"></a>

- *Type:* `string`

---

##### `integrationResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.property.integrationResponseKey"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationResponse.property.templateSelectionExpression"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateIntegrationTlsConfig <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationTlsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationTlsConfig.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationTlsConfig(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationTlsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationTlsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationTlsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `serverNameToVerify`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateIntegrationTlsConfig.property.serverNameToVerify"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateModel <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateModel(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateModelRequest)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel.property.description"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateModel.property.schema"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateRoute <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateRoute(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateRouteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteRequest)

---



#### Properties <a name="Properties"></a>

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiKeyRequired`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.authorizerId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `operationName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.requestParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.routeId"></a>

- *Type:* `string`

---

##### `routeKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.routeKey"></a>

- *Type:* `string`

---

##### `routeResponseSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.routeResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRoute.property.target"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateRouteResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateRouteResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateRouteResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `modelSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse.property.routeResponseId"></a>

- *Type:* `string`

---

##### `routeResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateRouteResponse.property.routeResponseKey"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateStage <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateStage(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `accessLogSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings)

---

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `autoDeploy`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings)

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.description"></a>

- *Type:* `string`

---

##### `lastDeploymentStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.lastDeploymentStatusMessage"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.routeSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)}

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.stageName"></a>

- *Type:* `string`

---

##### `stageVariables`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ApiGatewayV2ResponsesCreateStageAccessLogSettings <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings.property.destinationArn"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageAccessLogSettings.property.format"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesCreateStageDefaultRouteSettings <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `dataTraceEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings.property.dataTraceEnabled"></a>

- *Type:* `boolean`

---

##### `detailedMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `loggingLevel`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings.property.loggingLevel"></a>

- *Type:* `string`

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings.property.throttlingBurstLimit"></a>

- *Type:* `number`

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateStageDefaultRouteSettings.property.throttlingRateLimit"></a>

- *Type:* `number`

---


### ApiGatewayV2ResponsesCreateVpcLink <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink(__scope: Construct, __resources: string[], __input: ApiGatewayV2CreateVpcLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2CreateVpcLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.property.createdDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.property.vpcLinkId"></a>

- *Type:* `string`

---

##### `vpcLinkStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.property.vpcLinkStatus"></a>

- *Type:* `string`

---

##### `vpcLinkStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.property.vpcLinkStatusMessage"></a>

- *Type:* `string`

---

##### `vpcLinkVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesCreateVpcLink.property.vpcLinkVersion"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesExportApi <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesExportApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesExportApi.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesExportApi(__scope: Construct, __resources: string[], __input: ApiGatewayV2ExportApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesExportApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesExportApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesExportApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ExportApiRequest)

---



#### Properties <a name="Properties"></a>

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesExportApi.property.body"></a>

- *Type:* `any`

---


### ApiGatewayV2ResponsesFetchApi <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchApi(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration)

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApi.property.warnings"></a>

- *Type:* `string`[]

---


### ApiGatewayV2ResponsesFetchApiCorsConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiRequest)

---



#### Properties <a name="Properties"></a>

##### `allowCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.property.allowCredentials"></a>

- *Type:* `boolean`

---

##### `allowHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.property.allowHeaders"></a>

- *Type:* `string`[]

---

##### `allowMethods`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.property.allowMethods"></a>

- *Type:* `string`[]

---

##### `allowOrigins`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.property.allowOrigins"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAge`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiCorsConfiguration.property.maxAge"></a>

- *Type:* `number`

---


### ApiGatewayV2ResponsesFetchApiMapping <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetApiMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping.property.apiId"></a>

- *Type:* `string`

---

##### `apiMappingId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping.property.apiMappingId"></a>

- *Type:* `string`

---

##### `apiMappingKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping.property.apiMappingKey"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMapping.property.stage"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchApiMappings <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMappings"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMappings.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchApiMappings(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetApiMappingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMappings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMappings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMappings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApiMappingsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMappings.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ApiMapping`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ApiMapping)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApiMappings.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchApis <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApis"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApis.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchApis(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetApisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetApisRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApis.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Api)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchApis.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchAuthorizer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerCredentialsArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.authorizerCredentialsArn"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.authorizerId"></a>

- *Type:* `string`

---

##### `authorizerPayloadFormatVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.authorizerPayloadFormatVersion"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.authorizerType"></a>

- *Type:* `string`

---

##### `authorizerUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.authorizerUri"></a>

- *Type:* `string`

---

##### `enableSimpleResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.enableSimpleResponses"></a>

- *Type:* `boolean`

---

##### `identitySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.identitySource"></a>

- *Type:* `string`[]

---

##### `identityValidationExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `jwtConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.jwtConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizer.property.name"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `audience`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration.property.audience"></a>

- *Type:* `string`[]

---

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration.property.issuer"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchAuthorizers <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizers"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizers.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizers(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetAuthorizersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetAuthorizersRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizers.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Authorizer)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchAuthorizers.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchDeployment <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchDeployment(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `autoDeployed`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.property.autoDeployed"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.property.deploymentStatusMessage"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployment.property.description"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchDeployments <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployments.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchDeployments(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetDeploymentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDeploymentsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployments.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Deployment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDeployments.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchDomainName <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchDomainName(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `apiMappingSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName.property.apiMappingSelectionExpression"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName.property.domainNameConfigurations"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration)[]

---

##### `mutualTlsAuthentication`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainName.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `truststoreUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

- *Type:* `string`

---

##### `truststoreWarnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication.property.truststoreWarnings"></a>

- *Type:* `string`[]

---


### ApiGatewayV2ResponsesFetchDomainNames <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNames"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNames.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchDomainNames(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetDomainNamesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNames.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNames.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNames.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetDomainNamesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNames.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainName)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchDomainNames.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchIntegration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchIntegration(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.description"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.integrationMethod"></a>

- *Type:* `string`

---

##### `integrationResponseSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.integrationResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `integrationSubtype`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.integrationSubtype"></a>

- *Type:* `string`

---

##### `integrationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.integrationType"></a>

- *Type:* `string`

---

##### `integrationUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.integrationUri"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `payloadFormatVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.payloadFormatVersion"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.templateSelectionExpression"></a>

- *Type:* `string`

---

##### `timeoutInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationTlsConfig`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationTlsConfig)

---


### ApiGatewayV2ResponsesFetchIntegrationResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetIntegrationResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `contentHandlingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.property.integrationResponseId"></a>

- *Type:* `string`

---

##### `integrationResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.property.integrationResponseKey"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponse.property.templateSelectionExpression"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchIntegrationResponses <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponses"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponses.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponses(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetIntegrationResponsesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponses.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponses.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponses.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationResponsesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponses.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2IntegrationResponse)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationResponses.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchIntegrations <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrations"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrations.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchIntegrations(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetIntegrationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrations.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Integration)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrations.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchIntegrationTlsConfig <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationTlsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationTlsConfig.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationTlsConfig(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationTlsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationTlsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationTlsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `serverNameToVerify`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchIntegrationTlsConfig.property.serverNameToVerify"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchModel <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchModel(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel.property.description"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModel.property.schema"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchModels <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModels"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModels.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchModels(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetModelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModels.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Model)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModels.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchModelTemplate <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModelTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModelTemplate.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchModelTemplate(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetModelTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModelTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModelTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModelTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelTemplateRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetModelTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchModelTemplate.property.value"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchRoute <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchRoute(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetRouteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteRequest)

---



#### Properties <a name="Properties"></a>

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiKeyRequired`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.authorizerId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `operationName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.requestParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.routeId"></a>

- *Type:* `string`

---

##### `routeKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.routeKey"></a>

- *Type:* `string`

---

##### `routeResponseSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.routeResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoute.property.target"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchRouteResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetRouteResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `modelSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse.property.routeResponseId"></a>

- *Type:* `string`

---

##### `routeResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponse.property.routeResponseKey"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchRouteResponses <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponses"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponses.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponses(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetRouteResponsesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponses.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponses.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponses.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRouteResponsesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponses.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteResponse)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRouteResponses.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchRoutes <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoutes"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoutes.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchRoutes(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetRoutesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetRoutesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoutes.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Route)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchRoutes.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchStage <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchStage(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest)

---



#### Properties <a name="Properties"></a>

##### `accessLogSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings)

---

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `autoDeploy`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings)

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.description"></a>

- *Type:* `string`

---

##### `lastDeploymentStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.lastDeploymentStatusMessage"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.routeSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)}

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.stageName"></a>

- *Type:* `string`

---

##### `stageVariables`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ApiGatewayV2ResponsesFetchStageAccessLogSettings <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings.property.destinationArn"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageAccessLogSettings.property.format"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchStageDefaultRouteSettings <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStageRequest)

---



#### Properties <a name="Properties"></a>

##### `dataTraceEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings.property.dataTraceEnabled"></a>

- *Type:* `boolean`

---

##### `detailedMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `loggingLevel`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings.property.loggingLevel"></a>

- *Type:* `string`

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings.property.throttlingBurstLimit"></a>

- *Type:* `number`

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStageDefaultRouteSettings.property.throttlingRateLimit"></a>

- *Type:* `number`

---


### ApiGatewayV2ResponsesFetchStages <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStages"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStages.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchStages(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetStagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetStagesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStages.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2Stage)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchStages.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchTags <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchTags"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchTags.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchTags(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetTagsRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ApiGatewayV2ResponsesFetchVpcLink <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetVpcLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.property.createdDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.property.vpcLinkId"></a>

- *Type:* `string`

---

##### `vpcLinkStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.property.vpcLinkStatus"></a>

- *Type:* `string`

---

##### `vpcLinkStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.property.vpcLinkStatusMessage"></a>

- *Type:* `string`

---

##### `vpcLinkVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLink.property.vpcLinkVersion"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesFetchVpcLinks <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLinks"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLinks.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesFetchVpcLinks(__scope: Construct, __resources: string[], __input: ApiGatewayV2GetVpcLinksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLinks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLinks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLinks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2GetVpcLinksRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLinks.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2VpcLink)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesFetchVpcLinks.property.nextToken"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesImportApi <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesImportApi(__scope: Construct, __resources: string[], __input: ApiGatewayV2ImportApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration)

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApi.property.warnings"></a>

- *Type:* `string`[]

---


### ApiGatewayV2ResponsesImportApiCorsConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayV2ImportApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ImportApiRequest)

---



#### Properties <a name="Properties"></a>

##### `allowCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.property.allowCredentials"></a>

- *Type:* `boolean`

---

##### `allowHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.property.allowHeaders"></a>

- *Type:* `string`[]

---

##### `allowMethods`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.property.allowMethods"></a>

- *Type:* `string`[]

---

##### `allowOrigins`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.property.allowOrigins"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAge`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesImportApiCorsConfiguration.property.maxAge"></a>

- *Type:* `number`

---


### ApiGatewayV2ResponsesReimportApi <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesReimportApi(__scope: Construct, __resources: string[], __input: ApiGatewayV2ReimportApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration)

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApi.property.warnings"></a>

- *Type:* `string`[]

---


### ApiGatewayV2ResponsesReimportApiCorsConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayV2ReimportApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ReimportApiRequest)

---



#### Properties <a name="Properties"></a>

##### `allowCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.property.allowCredentials"></a>

- *Type:* `boolean`

---

##### `allowHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.property.allowHeaders"></a>

- *Type:* `string`[]

---

##### `allowMethods`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.property.allowMethods"></a>

- *Type:* `string`[]

---

##### `allowOrigins`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.property.allowOrigins"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAge`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesReimportApiCorsConfiguration.property.maxAge"></a>

- *Type:* `number`

---


### ApiGatewayV2ResponsesUpdateApi <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateApi(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.apiEndpoint"></a>

- *Type:* `string`

---

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.apiId"></a>

- *Type:* `string`

---

##### `apiKeySelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.apiKeySelectionExpression"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration)

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `disableSchemaValidation`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.disableSchemaValidation"></a>

- *Type:* `boolean`

---

##### `importInfo`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.importInfo"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.name"></a>

- *Type:* `string`

---

##### `protocolType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.protocolType"></a>

- *Type:* `string`

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.routeSelectionExpression"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApi.property.warnings"></a>

- *Type:* `string`[]

---


### ApiGatewayV2ResponsesUpdateApiCorsConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiRequest)

---



#### Properties <a name="Properties"></a>

##### `allowCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.property.allowCredentials"></a>

- *Type:* `boolean`

---

##### `allowHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.property.allowHeaders"></a>

- *Type:* `string`[]

---

##### `allowMethods`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.property.allowMethods"></a>

- *Type:* `string`[]

---

##### `allowOrigins`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.property.allowOrigins"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAge`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiCorsConfiguration.property.maxAge"></a>

- *Type:* `number`

---


### ApiGatewayV2ResponsesUpdateApiMapping <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateApiMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateApiMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `apiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping.property.apiId"></a>

- *Type:* `string`

---

##### `apiMappingId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping.property.apiMappingId"></a>

- *Type:* `string`

---

##### `apiMappingKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping.property.apiMappingKey"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateApiMapping.property.stage"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateAuthorizer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerCredentialsArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.authorizerCredentialsArn"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.authorizerId"></a>

- *Type:* `string`

---

##### `authorizerPayloadFormatVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.authorizerPayloadFormatVersion"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.authorizerType"></a>

- *Type:* `string`

---

##### `authorizerUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.authorizerUri"></a>

- *Type:* `string`

---

##### `enableSimpleResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.enableSimpleResponses"></a>

- *Type:* `boolean`

---

##### `identitySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.identitySource"></a>

- *Type:* `string`[]

---

##### `identityValidationExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `jwtConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.jwtConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizer.property.name"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `audience`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration.property.audience"></a>

- *Type:* `string`[]

---

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration.property.issuer"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateDeployment <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `autoDeployed`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.property.autoDeployed"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.property.deploymentStatusMessage"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDeployment.property.description"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateDomainName <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `apiMappingSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName.property.apiMappingSelectionExpression"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName.property.domainNameConfigurations"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2DomainNameConfiguration)[]

---

##### `mutualTlsAuthentication`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainName.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `truststoreUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

- *Type:* `string`

---

##### `truststoreWarnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication.property.truststoreWarnings"></a>

- *Type:* `string`[]

---


### ApiGatewayV2ResponsesUpdateIntegration <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandlingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `credentialsArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.credentialsArn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.description"></a>

- *Type:* `string`

---

##### `integrationId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.integrationId"></a>

- *Type:* `string`

---

##### `integrationMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.integrationMethod"></a>

- *Type:* `string`

---

##### `integrationResponseSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.integrationResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `integrationSubtype`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.integrationSubtype"></a>

- *Type:* `string`

---

##### `integrationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.integrationType"></a>

- *Type:* `string`

---

##### `integrationUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.integrationUri"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `payloadFormatVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.payloadFormatVersion"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.templateSelectionExpression"></a>

- *Type:* `string`

---

##### `timeoutInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationTlsConfig`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationTlsConfig)

---


### ApiGatewayV2ResponsesUpdateIntegrationResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateIntegrationResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `contentHandlingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.property.contentHandlingStrategy"></a>

- *Type:* `string`

---

##### `integrationResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.property.integrationResponseId"></a>

- *Type:* `string`

---

##### `integrationResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.property.integrationResponseKey"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationResponse.property.templateSelectionExpression"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateIntegrationTlsConfig <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationTlsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationTlsConfig.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationTlsConfig(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationTlsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationTlsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationTlsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `serverNameToVerify`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateIntegrationTlsConfig.property.serverNameToVerify"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateModel <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateModel(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateModelRequest)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel.property.description"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel.property.modelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateModel.property.schema"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateRoute <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateRoute(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateRouteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteRequest)

---



#### Properties <a name="Properties"></a>

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `apiKeyRequired`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.authorizerId"></a>

- *Type:* `string`

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `operationName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.requestParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.routeId"></a>

- *Type:* `string`

---

##### `routeKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.routeKey"></a>

- *Type:* `string`

---

##### `routeResponseSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.routeResponseSelectionExpression"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRoute.property.target"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateRouteResponse <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateRouteResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateRouteResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `modelSelectionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse.property.modelSelectionExpression"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ParameterConstraints)}

---

##### `routeResponseId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse.property.routeResponseId"></a>

- *Type:* `string`

---

##### `routeResponseKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateRouteResponse.property.routeResponseKey"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateStage <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateStage(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `accessLogSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings)

---

##### `apiGatewayManaged`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.apiGatewayManaged"></a>

- *Type:* `boolean`

---

##### `autoDeploy`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.autoDeploy"></a>

- *Type:* `boolean`

---

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultRouteSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.defaultRouteSettings"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings)

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.description"></a>

- *Type:* `string`

---

##### `lastDeploymentStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.lastDeploymentStatusMessage"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `routeSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.routeSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2RouteSettings)}

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.stageName"></a>

- *Type:* `string`

---

##### `stageVariables`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ApiGatewayV2ResponsesUpdateStageAccessLogSettings <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings.property.destinationArn"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageAccessLogSettings.property.format"></a>

- *Type:* `string`

---


### ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `dataTraceEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings.property.dataTraceEnabled"></a>

- *Type:* `boolean`

---

##### `detailedMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `loggingLevel`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings.property.loggingLevel"></a>

- *Type:* `string`

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings.property.throttlingBurstLimit"></a>

- *Type:* `number`

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings.property.throttlingRateLimit"></a>

- *Type:* `number`

---


### ApiGatewayV2ResponsesUpdateVpcLink <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.Initializer"></a>

```typescript
import { apigatewayv2 } from 'aws-cdk-sdk'

new apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink(__scope: Construct, __resources: string[], __input: ApiGatewayV2UpdateVpcLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkRequest`](#aws-cdk-sdk.apigatewayv2.ApiGatewayV2UpdateVpcLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.property.createdDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.property.vpcLinkId"></a>

- *Type:* `string`

---

##### `vpcLinkStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.property.vpcLinkStatus"></a>

- *Type:* `string`

---

##### `vpcLinkStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.property.vpcLinkStatusMessage"></a>

- *Type:* `string`

---

##### `vpcLinkVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewayv2.ApiGatewayV2ResponsesUpdateVpcLink.property.vpcLinkVersion"></a>

- *Type:* `string`

---



