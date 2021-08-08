# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ApiGatewayClient <a name="aws-cdk-sdk.apigateway.ApiGatewayClient"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.ApiGatewayClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createApiKey` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createApiKey"></a>

```typescript
public createApiKey(input: ApiGatewayCreateApiKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest)

---

##### `createAuthorizer` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createAuthorizer"></a>

```typescript
public createAuthorizer(input: ApiGatewayCreateAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest)

---

##### `createBasePathMapping` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createBasePathMapping"></a>

```typescript
public createBasePathMapping(input: ApiGatewayCreateBasePathMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateBasePathMappingRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateBasePathMappingRequest)

---

##### `createDeployment` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createDeployment"></a>

```typescript
public createDeployment(input: ApiGatewayCreateDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest)

---

##### `createDocumentationPart` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createDocumentationPart"></a>

```typescript
public createDocumentationPart(input: ApiGatewayCreateDocumentationPartRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest)

---

##### `createDocumentationVersion` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createDocumentationVersion"></a>

```typescript
public createDocumentationVersion(input: ApiGatewayCreateDocumentationVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationVersionRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationVersionRequest)

---

##### `createDomainName` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createDomainName"></a>

```typescript
public createDomainName(input: ApiGatewayCreateDomainNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest)

---

##### `createModel` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createModel"></a>

```typescript
public createModel(input: ApiGatewayCreateModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest)

---

##### `createRequestValidator` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createRequestValidator"></a>

```typescript
public createRequestValidator(input: ApiGatewayCreateRequestValidatorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateRequestValidatorRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateRequestValidatorRequest)

---

##### `createResource` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createResource"></a>

```typescript
public createResource(input: ApiGatewayCreateResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateResourceRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateResourceRequest)

---

##### `createRestApi` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createRestApi"></a>

```typescript
public createRestApi(input: ApiGatewayCreateRestApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest)

---

##### `createStage` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createStage"></a>

```typescript
public createStage(input: ApiGatewayCreateStageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest)

---

##### `createUsagePlan` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createUsagePlan"></a>

```typescript
public createUsagePlan(input: ApiGatewayCreateUsagePlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest)

---

##### `createUsagePlanKey` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createUsagePlanKey"></a>

```typescript
public createUsagePlanKey(input: ApiGatewayCreateUsagePlanKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanKeyRequest)

---

##### `createVpcLink` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.createVpcLink"></a>

```typescript
public createVpcLink(input: ApiGatewayCreateVpcLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateVpcLinkRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateVpcLinkRequest)

---

##### `deleteApiKey` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteApiKey"></a>

```typescript
public deleteApiKey(input: ApiGatewayDeleteApiKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteApiKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteApiKeyRequest)

---

##### `deleteAuthorizer` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteAuthorizer"></a>

```typescript
public deleteAuthorizer(input: ApiGatewayDeleteAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteAuthorizerRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteAuthorizerRequest)

---

##### `deleteBasePathMapping` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteBasePathMapping"></a>

```typescript
public deleteBasePathMapping(input: ApiGatewayDeleteBasePathMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteBasePathMappingRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteBasePathMappingRequest)

---

##### `deleteClientCertificate` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteClientCertificate"></a>

```typescript
public deleteClientCertificate(input: ApiGatewayDeleteClientCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteClientCertificateRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteClientCertificateRequest)

---

##### `deleteDeployment` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteDeployment"></a>

```typescript
public deleteDeployment(input: ApiGatewayDeleteDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteDeploymentRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteDeploymentRequest)

---

##### `deleteDocumentationPart` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteDocumentationPart"></a>

```typescript
public deleteDocumentationPart(input: ApiGatewayDeleteDocumentationPartRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationPartRequest)

---

##### `deleteDocumentationVersion` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteDocumentationVersion"></a>

```typescript
public deleteDocumentationVersion(input: ApiGatewayDeleteDocumentationVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationVersionRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationVersionRequest)

---

##### `deleteDomainName` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteDomainName"></a>

```typescript
public deleteDomainName(input: ApiGatewayDeleteDomainNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteDomainNameRequest)

---

##### `deleteGatewayResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteGatewayResponse"></a>

```typescript
public deleteGatewayResponse(input: ApiGatewayDeleteGatewayResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteGatewayResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteGatewayResponseRequest)

---

##### `deleteIntegration` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteIntegration"></a>

```typescript
public deleteIntegration(input: ApiGatewayDeleteIntegrationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationRequest)

---

##### `deleteIntegrationResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteIntegrationResponse"></a>

```typescript
public deleteIntegrationResponse(input: ApiGatewayDeleteIntegrationResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationResponseRequest)

---

##### `deleteMethod` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteMethod"></a>

```typescript
public deleteMethod(input: ApiGatewayDeleteMethodRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodRequest)

---

##### `deleteMethodResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteMethodResponse"></a>

```typescript
public deleteMethodResponse(input: ApiGatewayDeleteMethodResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodResponseRequest)

---

##### `deleteModel` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteModel"></a>

```typescript
public deleteModel(input: ApiGatewayDeleteModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteModelRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteModelRequest)

---

##### `deleteRequestValidator` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteRequestValidator"></a>

```typescript
public deleteRequestValidator(input: ApiGatewayDeleteRequestValidatorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteRequestValidatorRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteRequestValidatorRequest)

---

##### `deleteResource` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteResource"></a>

```typescript
public deleteResource(input: ApiGatewayDeleteResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteResourceRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteResourceRequest)

---

##### `deleteRestApi` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteRestApi"></a>

```typescript
public deleteRestApi(input: ApiGatewayDeleteRestApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteRestApiRequest)

---

##### `deleteStage` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteStage"></a>

```typescript
public deleteStage(input: ApiGatewayDeleteStageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteStageRequest)

---

##### `deleteUsagePlan` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteUsagePlan"></a>

```typescript
public deleteUsagePlan(input: ApiGatewayDeleteUsagePlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteUsagePlanRequest)

---

##### `deleteUsagePlanKey` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteUsagePlanKey"></a>

```typescript
public deleteUsagePlanKey(input: ApiGatewayDeleteUsagePlanKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteUsagePlanKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteUsagePlanKeyRequest)

---

##### `deleteVpcLink` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.deleteVpcLink"></a>

```typescript
public deleteVpcLink(input: ApiGatewayDeleteVpcLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeleteVpcLinkRequest`](#aws-cdk-sdk.apigateway.ApiGatewayDeleteVpcLinkRequest)

---

##### `fetchAccount` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchAccount"></a>

```typescript
public fetchAccount()
```

##### `fetchApiKey` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchApiKey"></a>

```typescript
public fetchApiKey(input: ApiGatewayGetApiKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetApiKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetApiKeyRequest)

---

##### `fetchApiKeys` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchApiKeys"></a>

```typescript
public fetchApiKeys(input: ApiGatewayGetApiKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest)

---

##### `fetchAuthorizer` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchAuthorizer"></a>

```typescript
public fetchAuthorizer(input: ApiGatewayGetAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizerRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizerRequest)

---

##### `fetchAuthorizers` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchAuthorizers"></a>

```typescript
public fetchAuthorizers(input: ApiGatewayGetAuthorizersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizersRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizersRequest)

---

##### `fetchBasePathMapping` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchBasePathMapping"></a>

```typescript
public fetchBasePathMapping(input: ApiGatewayGetBasePathMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingRequest)

---

##### `fetchBasePathMappings` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchBasePathMappings"></a>

```typescript
public fetchBasePathMappings(input: ApiGatewayGetBasePathMappingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingsRequest)

---

##### `fetchClientCertificate` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchClientCertificate"></a>

```typescript
public fetchClientCertificate(input: ApiGatewayGetClientCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificateRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificateRequest)

---

##### `fetchClientCertificates` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchClientCertificates"></a>

```typescript
public fetchClientCertificates(input: ApiGatewayGetClientCertificatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificatesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificatesRequest)

---

##### `fetchDeployment` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchDeployment"></a>

```typescript
public fetchDeployment(input: ApiGatewayGetDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentRequest)

---

##### `fetchDeployments` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchDeployments"></a>

```typescript
public fetchDeployments(input: ApiGatewayGetDeploymentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentsRequest)

---

##### `fetchDocumentationPart` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchDocumentationPart"></a>

```typescript
public fetchDocumentationPart(input: ApiGatewayGetDocumentationPartRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartRequest)

---

##### `fetchDocumentationParts` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchDocumentationParts"></a>

```typescript
public fetchDocumentationParts(input: ApiGatewayGetDocumentationPartsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest)

---

##### `fetchDocumentationVersion` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchDocumentationVersion"></a>

```typescript
public fetchDocumentationVersion(input: ApiGatewayGetDocumentationVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionRequest)

---

##### `fetchDocumentationVersions` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchDocumentationVersions"></a>

```typescript
public fetchDocumentationVersions(input: ApiGatewayGetDocumentationVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionsRequest)

---

##### `fetchDomainName` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchDomainName"></a>

```typescript
public fetchDomainName(input: ApiGatewayGetDomainNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest)

---

##### `fetchDomainNames` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchDomainNames"></a>

```typescript
public fetchDomainNames(input: ApiGatewayGetDomainNamesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDomainNamesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDomainNamesRequest)

---

##### `fetchExport` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchExport"></a>

```typescript
public fetchExport(input: ApiGatewayGetExportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest)

---

##### `fetchGatewayResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchGatewayResponse"></a>

```typescript
public fetchGatewayResponse(input: ApiGatewayGetGatewayResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponseRequest)

---

##### `fetchGatewayResponses` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchGatewayResponses"></a>

```typescript
public fetchGatewayResponses(input: ApiGatewayGetGatewayResponsesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponsesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponsesRequest)

---

##### `fetchIntegration` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchIntegration"></a>

```typescript
public fetchIntegration(input: ApiGatewayGetIntegrationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest)

---

##### `fetchIntegrationResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchIntegrationResponse"></a>

```typescript
public fetchIntegrationResponse(input: ApiGatewayGetIntegrationResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationResponseRequest)

---

##### `fetchMethod` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchMethod"></a>

```typescript
public fetchMethod(input: ApiGatewayGetMethodRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest)

---

##### `fetchMethodResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchMethodResponse"></a>

```typescript
public fetchMethodResponse(input: ApiGatewayGetMethodResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetMethodResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetMethodResponseRequest)

---

##### `fetchModel` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchModel"></a>

```typescript
public fetchModel(input: ApiGatewayGetModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetModelRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetModelRequest)

---

##### `fetchModels` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchModels"></a>

```typescript
public fetchModels(input: ApiGatewayGetModelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetModelsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetModelsRequest)

---

##### `fetchModelTemplate` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchModelTemplate"></a>

```typescript
public fetchModelTemplate(input: ApiGatewayGetModelTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetModelTemplateRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetModelTemplateRequest)

---

##### `fetchRequestValidator` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchRequestValidator"></a>

```typescript
public fetchRequestValidator(input: ApiGatewayGetRequestValidatorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorRequest)

---

##### `fetchRequestValidators` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchRequestValidators"></a>

```typescript
public fetchRequestValidators(input: ApiGatewayGetRequestValidatorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorsRequest)

---

##### `fetchResource` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchResource"></a>

```typescript
public fetchResource(input: ApiGatewayGetResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetResourceRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetResourceRequest)

---

##### `fetchResources` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchResources"></a>

```typescript
public fetchResources(input: ApiGatewayGetResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetResourcesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetResourcesRequest)

---

##### `fetchRestApi` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchRestApi"></a>

```typescript
public fetchRestApi(input: ApiGatewayGetRestApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetRestApiRequest)

---

##### `fetchRestApis` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchRestApis"></a>

```typescript
public fetchRestApis(input: ApiGatewayGetRestApisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetRestApisRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetRestApisRequest)

---

##### `fetchSdk` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchSdk"></a>

```typescript
public fetchSdk(input: ApiGatewayGetSdkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetSdkRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetSdkRequest)

---

##### `fetchSdkType` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchSdkType"></a>

```typescript
public fetchSdkType(input: ApiGatewayGetSdkTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypeRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypeRequest)

---

##### `fetchSdkTypes` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchSdkTypes"></a>

```typescript
public fetchSdkTypes(input: ApiGatewayGetSdkTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypesRequest)

---

##### `fetchStage` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchStage"></a>

```typescript
public fetchStage(input: ApiGatewayGetStageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest)

---

##### `fetchStages` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchStages"></a>

```typescript
public fetchStages(input: ApiGatewayGetStagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetStagesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetStagesRequest)

---

##### `fetchTags` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchTags"></a>

```typescript
public fetchTags(input: ApiGatewayGetTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetTagsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetTagsRequest)

---

##### `fetchUsage` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchUsage"></a>

```typescript
public fetchUsage(input: ApiGatewayGetUsageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest)

---

##### `fetchUsagePlan` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchUsagePlan"></a>

```typescript
public fetchUsagePlan(input: ApiGatewayGetUsagePlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest)

---

##### `fetchUsagePlanKey` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchUsagePlanKey"></a>

```typescript
public fetchUsagePlanKey(input: ApiGatewayGetUsagePlanKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeyRequest)

---

##### `fetchUsagePlanKeys` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchUsagePlanKeys"></a>

```typescript
public fetchUsagePlanKeys(input: ApiGatewayGetUsagePlanKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeysRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeysRequest)

---

##### `fetchUsagePlans` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchUsagePlans"></a>

```typescript
public fetchUsagePlans(input: ApiGatewayGetUsagePlansRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlansRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlansRequest)

---

##### `fetchVpcLink` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchVpcLink"></a>

```typescript
public fetchVpcLink(input: ApiGatewayGetVpcLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinkRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinkRequest)

---

##### `fetchVpcLinks` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.fetchVpcLinks"></a>

```typescript
public fetchVpcLinks(input: ApiGatewayGetVpcLinksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinksRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinksRequest)

---

##### `flushStageAuthorizersCache` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.flushStageAuthorizersCache"></a>

```typescript
public flushStageAuthorizersCache(input: ApiGatewayFlushStageAuthorizersCacheRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayFlushStageAuthorizersCacheRequest`](#aws-cdk-sdk.apigateway.ApiGatewayFlushStageAuthorizersCacheRequest)

---

##### `flushStageCache` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.flushStageCache"></a>

```typescript
public flushStageCache(input: ApiGatewayFlushStageCacheRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayFlushStageCacheRequest`](#aws-cdk-sdk.apigateway.ApiGatewayFlushStageCacheRequest)

---

##### `generateClientCertificate` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.generateClientCertificate"></a>

```typescript
public generateClientCertificate(input: ApiGatewayGenerateClientCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGenerateClientCertificateRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGenerateClientCertificateRequest)

---

##### `importApiKeys` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.importApiKeys"></a>

```typescript
public importApiKeys(input: ApiGatewayImportApiKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayImportApiKeysRequest`](#aws-cdk-sdk.apigateway.ApiGatewayImportApiKeysRequest)

---

##### `importDocumentationParts` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.importDocumentationParts"></a>

```typescript
public importDocumentationParts(input: ApiGatewayImportDocumentationPartsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayImportDocumentationPartsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayImportDocumentationPartsRequest)

---

##### `importRestApi` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.importRestApi"></a>

```typescript
public importRestApi(input: ApiGatewayImportRestApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest)

---

##### `putGatewayResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.putGatewayResponse"></a>

```typescript
public putGatewayResponse(input: ApiGatewayPutGatewayResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest)

---

##### `putIntegration` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.putIntegration"></a>

```typescript
public putIntegration(input: ApiGatewayPutIntegrationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest)

---

##### `putIntegrationResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.putIntegrationResponse"></a>

```typescript
public putIntegrationResponse(input: ApiGatewayPutIntegrationResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest)

---

##### `putMethod` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.putMethod"></a>

```typescript
public putMethod(input: ApiGatewayPutMethodRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest)

---

##### `putMethodResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.putMethodResponse"></a>

```typescript
public putMethodResponse(input: ApiGatewayPutMethodResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest)

---

##### `putRestApi` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.putRestApi"></a>

```typescript
public putRestApi(input: ApiGatewayPutRestApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.tagResource"></a>

```typescript
public tagResource(input: ApiGatewayTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayTagResourceRequest`](#aws-cdk-sdk.apigateway.ApiGatewayTagResourceRequest)

---

##### `testInvokeAuthorizer` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.testInvokeAuthorizer"></a>

```typescript
public testInvokeAuthorizer(input: ApiGatewayTestInvokeAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest`](#aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest)

---

##### `testInvokeMethod` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.testInvokeMethod"></a>

```typescript
public testInvokeMethod(input: ApiGatewayTestInvokeMethodRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.untagResource"></a>

```typescript
public untagResource(input: ApiGatewayUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUntagResourceRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUntagResourceRequest)

---

##### `updateAccount` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateAccount"></a>

```typescript
public updateAccount(input: ApiGatewayUpdateAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateAccountRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateAccountRequest)

---

##### `updateApiKey` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateApiKey"></a>

```typescript
public updateApiKey(input: ApiGatewayUpdateApiKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateApiKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateApiKeyRequest)

---

##### `updateAuthorizer` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateAuthorizer"></a>

```typescript
public updateAuthorizer(input: ApiGatewayUpdateAuthorizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateAuthorizerRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateAuthorizerRequest)

---

##### `updateBasePathMapping` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateBasePathMapping"></a>

```typescript
public updateBasePathMapping(input: ApiGatewayUpdateBasePathMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateBasePathMappingRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateBasePathMappingRequest)

---

##### `updateClientCertificate` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateClientCertificate"></a>

```typescript
public updateClientCertificate(input: ApiGatewayUpdateClientCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateClientCertificateRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateClientCertificateRequest)

---

##### `updateDeployment` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateDeployment"></a>

```typescript
public updateDeployment(input: ApiGatewayUpdateDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDeploymentRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDeploymentRequest)

---

##### `updateDocumentationPart` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateDocumentationPart"></a>

```typescript
public updateDocumentationPart(input: ApiGatewayUpdateDocumentationPartRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest)

---

##### `updateDocumentationVersion` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateDocumentationVersion"></a>

```typescript
public updateDocumentationVersion(input: ApiGatewayUpdateDocumentationVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationVersionRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationVersionRequest)

---

##### `updateDomainName` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateDomainName"></a>

```typescript
public updateDomainName(input: ApiGatewayUpdateDomainNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest)

---

##### `updateGatewayResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateGatewayResponse"></a>

```typescript
public updateGatewayResponse(input: ApiGatewayUpdateGatewayResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateGatewayResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateGatewayResponseRequest)

---

##### `updateIntegration` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateIntegration"></a>

```typescript
public updateIntegration(input: ApiGatewayUpdateIntegrationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest)

---

##### `updateIntegrationResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateIntegrationResponse"></a>

```typescript
public updateIntegrationResponse(input: ApiGatewayUpdateIntegrationResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest)

---

##### `updateMethod` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateMethod"></a>

```typescript
public updateMethod(input: ApiGatewayUpdateMethodRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest)

---

##### `updateMethodResponse` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateMethodResponse"></a>

```typescript
public updateMethodResponse(input: ApiGatewayUpdateMethodResponseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest)

---

##### `updateModel` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateModel"></a>

```typescript
public updateModel(input: ApiGatewayUpdateModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateModelRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateModelRequest)

---

##### `updateRequestValidator` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateRequestValidator"></a>

```typescript
public updateRequestValidator(input: ApiGatewayUpdateRequestValidatorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateRequestValidatorRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateRequestValidatorRequest)

---

##### `updateResource` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateResource"></a>

```typescript
public updateResource(input: ApiGatewayUpdateResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateResourceRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateResourceRequest)

---

##### `updateRestApi` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateRestApi"></a>

```typescript
public updateRestApi(input: ApiGatewayUpdateRestApiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateRestApiRequest)

---

##### `updateStage` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateStage"></a>

```typescript
public updateStage(input: ApiGatewayUpdateStageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest)

---

##### `updateUsage` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateUsage"></a>

```typescript
public updateUsage(input: ApiGatewayUpdateUsageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateUsageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateUsageRequest)

---

##### `updateUsagePlan` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateUsagePlan"></a>

```typescript
public updateUsagePlan(input: ApiGatewayUpdateUsagePlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest)

---

##### `updateVpcLink` <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.updateVpcLink"></a>

```typescript
public updateVpcLink(input: ApiGatewayUpdateVpcLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateVpcLinkRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateVpcLinkRequest)

---




## Structs <a name="Structs"></a>

### ApiGatewayAccessLogSettings <a name="aws-cdk-sdk.apigateway.ApiGatewayAccessLogSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayAccessLogSettings: apigateway.ApiGatewayAccessLogSettings = { ... }
```

##### `destinationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAccessLogSettings.property.destinationArn"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAccessLogSettings.property.format"></a>

- *Type:* `string`

---

### ApiGatewayAccount <a name="aws-cdk-sdk.apigateway.ApiGatewayAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayAccount: apigateway.ApiGatewayAccount = { ... }
```

##### `apiKeyVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAccount.property.apiKeyVersion"></a>

- *Type:* `string`

---

##### `cloudwatchRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAccount.property.cloudwatchRoleArn"></a>

- *Type:* `string`

---

##### `features`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAccount.property.features"></a>

- *Type:* `string`[]

---

##### `throttleSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAccount.property.throttleSettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings`](#aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings)

---

### ApiGatewayApiKey <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayApiKey: apigateway.ApiGatewayApiKey = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.createdDate"></a>

- *Type:* `string`

---

##### `customerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.customerId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.enabled"></a>

- *Type:* `boolean`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.name"></a>

- *Type:* `string`

---

##### `stageKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.stageKeys"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKey.property.value"></a>

- *Type:* `string`

---

### ApiGatewayApiKeyIds <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKeyIds"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayApiKeyIds: apigateway.ApiGatewayApiKeyIds = { ... }
```

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKeyIds.property.ids"></a>

- *Type:* `string`[]

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKeyIds.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayApiKeys <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKeys"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayApiKeys: apigateway.ApiGatewayApiKeys = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKeys.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayApiKey`](#aws-cdk-sdk.apigateway.ApiGatewayApiKey)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKeys.property.position"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiKeys.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayApiStage <a name="aws-cdk-sdk.apigateway.ApiGatewayApiStage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayApiStage: apigateway.ApiGatewayApiStage = { ... }
```

##### `apiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiStage.property.apiId"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiStage.property.stage"></a>

- *Type:* `string`

---

##### `throttle`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayApiStage.property.throttle"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings`](#aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings)}

---

### ApiGatewayAuthorizer <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayAuthorizer: apigateway.ApiGatewayAuthorizer = { ... }
```

##### `authorizerCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.authorizerCredentials"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.authorizerUri"></a>

- *Type:* `string`

---

##### `authType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.authType"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.id"></a>

- *Type:* `string`

---

##### `identitySource`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.identitySource"></a>

- *Type:* `string`

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.name"></a>

- *Type:* `string`

---

##### `providerARNs`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.providerARNs"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizer.property.type"></a>

- *Type:* `string`

---

### ApiGatewayAuthorizers <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizers"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayAuthorizers: apigateway.ApiGatewayAuthorizers = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizers.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayAuthorizer`](#aws-cdk-sdk.apigateway.ApiGatewayAuthorizer)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayAuthorizers.property.position"></a>

- *Type:* `string`

---

### ApiGatewayBasePathMapping <a name="aws-cdk-sdk.apigateway.ApiGatewayBasePathMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayBasePathMapping: apigateway.ApiGatewayBasePathMapping = { ... }
```

##### `basePath`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayBasePathMapping.property.basePath"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayBasePathMapping.property.restApiId"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayBasePathMapping.property.stage"></a>

- *Type:* `string`

---

### ApiGatewayBasePathMappings <a name="aws-cdk-sdk.apigateway.ApiGatewayBasePathMappings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayBasePathMappings: apigateway.ApiGatewayBasePathMappings = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayBasePathMappings.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayBasePathMapping`](#aws-cdk-sdk.apigateway.ApiGatewayBasePathMapping)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayBasePathMappings.property.position"></a>

- *Type:* `string`

---

### ApiGatewayCanarySettings <a name="aws-cdk-sdk.apigateway.ApiGatewayCanarySettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCanarySettings: apigateway.ApiGatewayCanarySettings = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCanarySettings.property.deploymentId"></a>

- *Type:* `string`

---

##### `percentTraffic`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCanarySettings.property.percentTraffic"></a>

- *Type:* `number`

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCanarySettings.property.stageVariableOverrides"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `useStageCache`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCanarySettings.property.useStageCache"></a>

- *Type:* `boolean`

---

### ApiGatewayClientCertificate <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayClientCertificate: apigateway.ApiGatewayClientCertificate = { ... }
```

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificate.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificate.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificate.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificate.property.expirationDate"></a>

- *Type:* `string`

---

##### `pemEncodedCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificate.property.pemEncodedCertificate"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificate.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayClientCertificates <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificates"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayClientCertificates: apigateway.ApiGatewayClientCertificates = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificates.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayClientCertificate`](#aws-cdk-sdk.apigateway.ApiGatewayClientCertificate)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayClientCertificates.property.position"></a>

- *Type:* `string`

---

### ApiGatewayCreateApiKeyRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateApiKeyRequest: apigateway.ApiGatewayCreateApiKeyRequest = { ... }
```

##### `customerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest.property.customerId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest.property.enabled"></a>

- *Type:* `boolean`

---

##### `generateDistinctId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest.property.generateDistinctId"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest.property.name"></a>

- *Type:* `string`

---

##### `stageKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest.property.stageKeys"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayStageKey`](#aws-cdk-sdk.apigateway.ApiGatewayStageKey)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest.property.value"></a>

- *Type:* `string`

---

### ApiGatewayCreateAuthorizerRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateAuthorizerRequest: apigateway.ApiGatewayCreateAuthorizerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.name"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.type"></a>

- *Type:* `string`

---

##### `authorizerCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.authorizerCredentials"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.authorizerUri"></a>

- *Type:* `string`

---

##### `authType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.authType"></a>

- *Type:* `string`

---

##### `identitySource`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.identitySource"></a>

- *Type:* `string`

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `providerARNs`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest.property.providerARNs"></a>

- *Type:* `string`[]

---

### ApiGatewayCreateBasePathMappingRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateBasePathMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateBasePathMappingRequest: apigateway.ApiGatewayCreateBasePathMappingRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateBasePathMappingRequest.property.domainName"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateBasePathMappingRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `basePath`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateBasePathMappingRequest.property.basePath"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateBasePathMappingRequest.property.stage"></a>

- *Type:* `string`

---

### ApiGatewayCreateDeploymentRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateDeploymentRequest: apigateway.ApiGatewayCreateDeploymentRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest.property.cacheClusterEnabled"></a>

- *Type:* `boolean`

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest.property.cacheClusterSize"></a>

- *Type:* `string`

---

##### `canarySettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest.property.canarySettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeploymentCanarySettings`](#aws-cdk-sdk.apigateway.ApiGatewayDeploymentCanarySettings)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest.property.description"></a>

- *Type:* `string`

---

##### `stageDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest.property.stageDescription"></a>

- *Type:* `string`

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest.property.stageName"></a>

- *Type:* `string`

---

##### `tracingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest.property.tracingEnabled"></a>

- *Type:* `boolean`

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayCreateDocumentationPartRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateDocumentationPartRequest: apigateway.ApiGatewayCreateDocumentationPartRequest = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest.property.location"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation`](#aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation)

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest.property.properties"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayCreateDocumentationVersionRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateDocumentationVersionRequest: apigateway.ApiGatewayCreateDocumentationVersionRequest = { ... }
```

##### `documentationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationVersionRequest.property.documentationVersion"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationVersionRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationVersionRequest.property.description"></a>

- *Type:* `string`

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationVersionRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayCreateDomainNameRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateDomainNameRequest: apigateway.ApiGatewayCreateDomainNameRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.domainName"></a>

- *Type:* `string`

---

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.certificateBody"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.certificateChain"></a>

- *Type:* `string`

---

##### `certificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.certificateName"></a>

- *Type:* `string`

---

##### `certificatePrivateKey`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.certificatePrivateKey"></a>

- *Type:* `string`

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration`](#aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration)

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthenticationInput`](#aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthenticationInput)

---

##### `regionalCertificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.regionalCertificateArn"></a>

- *Type:* `string`

---

##### `regionalCertificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.regionalCertificateName"></a>

- *Type:* `string`

---

##### `securityPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.securityPolicy"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayCreateModelRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateModelRequest: apigateway.ApiGatewayCreateModelRequest = { ... }
```

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest.property.contentType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest.property.name"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest.property.description"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest.property.schema"></a>

- *Type:* `string`

---

### ApiGatewayCreateRequestValidatorRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRequestValidatorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateRequestValidatorRequest: apigateway.ApiGatewayCreateRequestValidatorRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRequestValidatorRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRequestValidatorRequest.property.name"></a>

- *Type:* `string`

---

##### `validateRequestBody`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRequestValidatorRequest.property.validateRequestBody"></a>

- *Type:* `boolean`

---

##### `validateRequestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRequestValidatorRequest.property.validateRequestParameters"></a>

- *Type:* `boolean`

---

### ApiGatewayCreateResourceRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateResourceRequest: apigateway.ApiGatewayCreateResourceRequest = { ... }
```

##### `parentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateResourceRequest.property.parentId"></a>

- *Type:* `string`

---

##### `pathPart`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateResourceRequest.property.pathPart"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateResourceRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayCreateRestApiRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateRestApiRequest: apigateway.ApiGatewayCreateRestApiRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.name"></a>

- *Type:* `string`

---

##### `apiKeySource`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.apiKeySource"></a>

- *Type:* `string`

---

##### `binaryMediaTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.binaryMediaTypes"></a>

- *Type:* `string`[]

---

##### `cloneFrom`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.cloneFrom"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration`](#aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration)

---

##### `minimumCompressionSize`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.minimumCompressionSize"></a>

- *Type:* `number`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.policy"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest.property.version"></a>

- *Type:* `string`

---

### ApiGatewayCreateStageRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateStageRequest: apigateway.ApiGatewayCreateStageRequest = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.stageName"></a>

- *Type:* `string`

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.cacheClusterEnabled"></a>

- *Type:* `boolean`

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.cacheClusterSize"></a>

- *Type:* `string`

---

##### `canarySettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.canarySettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCanarySettings`](#aws-cdk-sdk.apigateway.ApiGatewayCanarySettings)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.description"></a>

- *Type:* `string`

---

##### `documentationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.documentationVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tracingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.tracingEnabled"></a>

- *Type:* `boolean`

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayCreateUsagePlanKeyRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateUsagePlanKeyRequest: apigateway.ApiGatewayCreateUsagePlanKeyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanKeyRequest.property.keyId"></a>

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanKeyRequest.property.keyType"></a>

- *Type:* `string`

---

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanKeyRequest.property.usagePlanId"></a>

- *Type:* `string`

---

### ApiGatewayCreateUsagePlanRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateUsagePlanRequest: apigateway.ApiGatewayCreateUsagePlanRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest.property.name"></a>

- *Type:* `string`

---

##### `apiStages`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest.property.apiStages"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayApiStage`](#aws-cdk-sdk.apigateway.ApiGatewayApiStage)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest.property.description"></a>

- *Type:* `string`

---

##### `quota`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest.property.quota"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayQuotaSettings`](#aws-cdk-sdk.apigateway.ApiGatewayQuotaSettings)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `throttle`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest.property.throttle"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings`](#aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings)

---

### ApiGatewayCreateVpcLinkRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateVpcLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayCreateVpcLinkRequest: apigateway.ApiGatewayCreateVpcLinkRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateVpcLinkRequest.property.name"></a>

- *Type:* `string`

---

##### `targetArns`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateVpcLinkRequest.property.targetArns"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateVpcLinkRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayCreateVpcLinkRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayDeleteApiKeyRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteApiKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteApiKeyRequest: apigateway.ApiGatewayDeleteApiKeyRequest = { ... }
```

##### `apiKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteApiKeyRequest.property.apiKey"></a>

- *Type:* `string`

---

### ApiGatewayDeleteAuthorizerRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteAuthorizerRequest: apigateway.ApiGatewayDeleteAuthorizerRequest = { ... }
```

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteAuthorizerRequest.property.authorizerId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteAuthorizerRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteBasePathMappingRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteBasePathMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteBasePathMappingRequest: apigateway.ApiGatewayDeleteBasePathMappingRequest = { ... }
```

##### `basePath`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteBasePathMappingRequest.property.basePath"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteBasePathMappingRequest.property.domainName"></a>

- *Type:* `string`

---

### ApiGatewayDeleteClientCertificateRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteClientCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteClientCertificateRequest: apigateway.ApiGatewayDeleteClientCertificateRequest = { ... }
```

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteClientCertificateRequest.property.clientCertificateId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteDeploymentRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteDeploymentRequest: apigateway.ApiGatewayDeleteDeploymentRequest = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDeploymentRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDeploymentRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteDocumentationPartRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationPartRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteDocumentationPartRequest: apigateway.ApiGatewayDeleteDocumentationPartRequest = { ... }
```

##### `documentationPartId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationPartRequest.property.documentationPartId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationPartRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteDocumentationVersionRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteDocumentationVersionRequest: apigateway.ApiGatewayDeleteDocumentationVersionRequest = { ... }
```

##### `documentationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationVersionRequest.property.documentationVersion"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDocumentationVersionRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteDomainNameRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDomainNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteDomainNameRequest: apigateway.ApiGatewayDeleteDomainNameRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteDomainNameRequest.property.domainName"></a>

- *Type:* `string`

---

### ApiGatewayDeleteGatewayResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteGatewayResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteGatewayResponseRequest: apigateway.ApiGatewayDeleteGatewayResponseRequest = { ... }
```

##### `responseType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteGatewayResponseRequest.property.responseType"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteGatewayResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteIntegrationRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteIntegrationRequest: apigateway.ApiGatewayDeleteIntegrationRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteIntegrationResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteIntegrationResponseRequest: apigateway.ApiGatewayDeleteIntegrationResponseRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationResponseRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationResponseRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteIntegrationResponseRequest.property.statusCode"></a>

- *Type:* `string`

---

### ApiGatewayDeleteMethodRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteMethodRequest: apigateway.ApiGatewayDeleteMethodRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteMethodResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteMethodResponseRequest: apigateway.ApiGatewayDeleteMethodResponseRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodResponseRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodResponseRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteMethodResponseRequest.property.statusCode"></a>

- *Type:* `string`

---

### ApiGatewayDeleteModelRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteModelRequest: apigateway.ApiGatewayDeleteModelRequest = { ... }
```

##### `modelName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteModelRequest.property.modelName"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteModelRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteRequestValidatorRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteRequestValidatorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteRequestValidatorRequest: apigateway.ApiGatewayDeleteRequestValidatorRequest = { ... }
```

##### `requestValidatorId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteRequestValidatorRequest.property.requestValidatorId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteRequestValidatorRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteResourceRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteResourceRequest: apigateway.ApiGatewayDeleteResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteResourceRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteRestApiRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteRestApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteRestApiRequest: apigateway.ApiGatewayDeleteRestApiRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteRestApiRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteStageRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteStageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteStageRequest: apigateway.ApiGatewayDeleteStageRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteStageRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteStageRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayDeleteUsagePlanKeyRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteUsagePlanKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteUsagePlanKeyRequest: apigateway.ApiGatewayDeleteUsagePlanKeyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteUsagePlanKeyRequest.property.keyId"></a>

- *Type:* `string`

---

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteUsagePlanKeyRequest.property.usagePlanId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteUsagePlanRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteUsagePlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteUsagePlanRequest: apigateway.ApiGatewayDeleteUsagePlanRequest = { ... }
```

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteUsagePlanRequest.property.usagePlanId"></a>

- *Type:* `string`

---

### ApiGatewayDeleteVpcLinkRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteVpcLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeleteVpcLinkRequest: apigateway.ApiGatewayDeleteVpcLinkRequest = { ... }
```

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeleteVpcLinkRequest.property.vpcLinkId"></a>

- *Type:* `string`

---

### ApiGatewayDeployment <a name="aws-cdk-sdk.apigateway.ApiGatewayDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeployment: apigateway.ApiGatewayDeployment = { ... }
```

##### `apiSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeployment.property.apiSummary"></a>

- *Type:* {[ key: string ]: {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot`](#aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot)}}

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeployment.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeployment.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeployment.property.id"></a>

- *Type:* `string`

---

### ApiGatewayDeploymentCanarySettings <a name="aws-cdk-sdk.apigateway.ApiGatewayDeploymentCanarySettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeploymentCanarySettings: apigateway.ApiGatewayDeploymentCanarySettings = { ... }
```

##### `percentTraffic`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeploymentCanarySettings.property.percentTraffic"></a>

- *Type:* `number`

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeploymentCanarySettings.property.stageVariableOverrides"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `useStageCache`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeploymentCanarySettings.property.useStageCache"></a>

- *Type:* `boolean`

---

### ApiGatewayDeployments <a name="aws-cdk-sdk.apigateway.ApiGatewayDeployments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDeployments: apigateway.ApiGatewayDeployments = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeployments.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeployment`](#aws-cdk-sdk.apigateway.ApiGatewayDeployment)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDeployments.property.position"></a>

- *Type:* `string`

---

### ApiGatewayDocumentationPart <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPart"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDocumentationPart: apigateway.ApiGatewayDocumentationPart = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPart.property.id"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPart.property.location"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation`](#aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation)

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPart.property.properties"></a>

- *Type:* `string`

---

### ApiGatewayDocumentationPartIds <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartIds"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDocumentationPartIds: apigateway.ApiGatewayDocumentationPartIds = { ... }
```

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartIds.property.ids"></a>

- *Type:* `string`[]

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartIds.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayDocumentationPartLocation <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDocumentationPartLocation: apigateway.ApiGatewayDocumentationPartLocation = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation.property.type"></a>

- *Type:* `string`

---

##### `method`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation.property.method"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation.property.name"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation.property.path"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationPartLocation.property.statusCode"></a>

- *Type:* `string`

---

### ApiGatewayDocumentationParts <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationParts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDocumentationParts: apigateway.ApiGatewayDocumentationParts = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationParts.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDocumentationPart`](#aws-cdk-sdk.apigateway.ApiGatewayDocumentationPart)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationParts.property.position"></a>

- *Type:* `string`

---

### ApiGatewayDocumentationVersion <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDocumentationVersion: apigateway.ApiGatewayDocumentationVersion = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersion.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersion.property.description"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersion.property.version"></a>

- *Type:* `string`

---

### ApiGatewayDocumentationVersions <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDocumentationVersions: apigateway.ApiGatewayDocumentationVersions = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersions.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersion`](#aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersion)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersions.property.position"></a>

- *Type:* `string`

---

### ApiGatewayDomainName <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDomainName: apigateway.ApiGatewayDomainName = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.certificateName"></a>

- *Type:* `string`

---

##### `certificateUploadDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.certificateUploadDate"></a>

- *Type:* `string`

---

##### `distributionDomainName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.distributionDomainName"></a>

- *Type:* `string`

---

##### `distributionHostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.distributionHostedZoneId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.domainNameStatus"></a>

- *Type:* `string`

---

##### `domainNameStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.domainNameStatusMessage"></a>

- *Type:* `string`

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration`](#aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration)

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthentication`](#aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthentication)

---

##### `regionalCertificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.regionalCertificateArn"></a>

- *Type:* `string`

---

##### `regionalCertificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.regionalCertificateName"></a>

- *Type:* `string`

---

##### `regionalDomainName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.regionalDomainName"></a>

- *Type:* `string`

---

##### `regionalHostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.regionalHostedZoneId"></a>

- *Type:* `string`

---

##### `securityPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.securityPolicy"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainName.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayDomainNames <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainNames"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayDomainNames: apigateway.ApiGatewayDomainNames = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainNames.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDomainName`](#aws-cdk-sdk.apigateway.ApiGatewayDomainName)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayDomainNames.property.position"></a>

- *Type:* `string`

---

### ApiGatewayEndpointConfiguration <a name="aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayEndpointConfiguration: apigateway.ApiGatewayEndpointConfiguration = { ... }
```

##### `types`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

##### `vpcEndpointIds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration.property.vpcEndpointIds"></a>

- *Type:* `string`[]

---

### ApiGatewayExportResponse <a name="aws-cdk-sdk.apigateway.ApiGatewayExportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayExportResponse: apigateway.ApiGatewayExportResponse = { ... }
```

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayExportResponse.property.body"></a>

- *Type:* `any`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayExportResponse.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayExportResponse.property.contentType"></a>

- *Type:* `string`

---

### ApiGatewayFlushStageAuthorizersCacheRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayFlushStageAuthorizersCacheRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayFlushStageAuthorizersCacheRequest: apigateway.ApiGatewayFlushStageAuthorizersCacheRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayFlushStageAuthorizersCacheRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayFlushStageAuthorizersCacheRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayFlushStageCacheRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayFlushStageCacheRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayFlushStageCacheRequest: apigateway.ApiGatewayFlushStageCacheRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayFlushStageCacheRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayFlushStageCacheRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayGatewayResponse <a name="aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGatewayResponse: apigateway.ApiGatewayGatewayResponse = { ... }
```

##### `defaultResponse`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse.property.defaultResponse"></a>

- *Type:* `boolean`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse.property.responseType"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse.property.statusCode"></a>

- *Type:* `string`

---

### ApiGatewayGatewayResponses <a name="aws-cdk-sdk.apigateway.ApiGatewayGatewayResponses"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGatewayResponses: apigateway.ApiGatewayGatewayResponses = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGatewayResponses.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse`](#aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGatewayResponses.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGenerateClientCertificateRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGenerateClientCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGenerateClientCertificateRequest: apigateway.ApiGatewayGenerateClientCertificateRequest = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGenerateClientCertificateRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGenerateClientCertificateRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayGetAccountRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetAccountRequest: apigateway.ApiGatewayGetAccountRequest = { ... }
```

### ApiGatewayGetApiKeyRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetApiKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetApiKeyRequest: apigateway.ApiGatewayGetApiKeyRequest = { ... }
```

##### `apiKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetApiKeyRequest.property.apiKey"></a>

- *Type:* `string`

---

##### `includeValue`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetApiKeyRequest.property.includeValue"></a>

- *Type:* `boolean`

---

### ApiGatewayGetApiKeysRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetApiKeysRequest: apigateway.ApiGatewayGetApiKeysRequest = { ... }
```

##### `customerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest.property.customerId"></a>

- *Type:* `string`

---

##### `includeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest.property.includeValues"></a>

- *Type:* `boolean`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest.property.limit"></a>

- *Type:* `number`

---

##### `nameQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest.property.nameQuery"></a>

- *Type:* `string`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetAuthorizerRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetAuthorizerRequest: apigateway.ApiGatewayGetAuthorizerRequest = { ... }
```

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizerRequest.property.authorizerId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizerRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayGetAuthorizersRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetAuthorizersRequest: apigateway.ApiGatewayGetAuthorizersRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizersRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizersRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizersRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetBasePathMappingRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetBasePathMappingRequest: apigateway.ApiGatewayGetBasePathMappingRequest = { ... }
```

##### `basePath`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingRequest.property.basePath"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingRequest.property.domainName"></a>

- *Type:* `string`

---

### ApiGatewayGetBasePathMappingsRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetBasePathMappingsRequest: apigateway.ApiGatewayGetBasePathMappingsRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingsRequest.property.domainName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingsRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingsRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetClientCertificateRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetClientCertificateRequest: apigateway.ApiGatewayGetClientCertificateRequest = { ... }
```

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificateRequest.property.clientCertificateId"></a>

- *Type:* `string`

---

### ApiGatewayGetClientCertificatesRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetClientCertificatesRequest: apigateway.ApiGatewayGetClientCertificatesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificatesRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificatesRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetDeploymentRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetDeploymentRequest: apigateway.ApiGatewayGetDeploymentRequest = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `embed`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentRequest.property.embed"></a>

- *Type:* `string`[]

---

### ApiGatewayGetDeploymentsRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetDeploymentsRequest: apigateway.ApiGatewayGetDeploymentsRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentsRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentsRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentsRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetDocumentationPartRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetDocumentationPartRequest: apigateway.ApiGatewayGetDocumentationPartRequest = { ... }
```

##### `documentationPartId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartRequest.property.documentationPartId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayGetDocumentationPartsRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetDocumentationPartsRequest: apigateway.ApiGatewayGetDocumentationPartsRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest.property.limit"></a>

- *Type:* `number`

---

##### `locationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest.property.locationStatus"></a>

- *Type:* `string`

---

##### `nameQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest.property.nameQuery"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest.property.path"></a>

- *Type:* `string`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest.property.position"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest.property.type"></a>

- *Type:* `string`

---

### ApiGatewayGetDocumentationVersionRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetDocumentationVersionRequest: apigateway.ApiGatewayGetDocumentationVersionRequest = { ... }
```

##### `documentationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionRequest.property.documentationVersion"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayGetDocumentationVersionsRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetDocumentationVersionsRequest: apigateway.ApiGatewayGetDocumentationVersionsRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionsRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionsRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionsRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetDomainNameRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetDomainNameRequest: apigateway.ApiGatewayGetDomainNameRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest.property.domainName"></a>

- *Type:* `string`

---

### ApiGatewayGetDomainNamesRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDomainNamesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetDomainNamesRequest: apigateway.ApiGatewayGetDomainNamesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDomainNamesRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetDomainNamesRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetExportRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetExportRequest: apigateway.ApiGatewayGetExportRequest = { ... }
```

##### `exportType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest.property.exportType"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest.property.stageName"></a>

- *Type:* `string`

---

##### `accepts`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest.property.accepts"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayGetGatewayResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetGatewayResponseRequest: apigateway.ApiGatewayGetGatewayResponseRequest = { ... }
```

##### `responseType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponseRequest.property.responseType"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayGetGatewayResponsesRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponsesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetGatewayResponsesRequest: apigateway.ApiGatewayGetGatewayResponsesRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponsesRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponsesRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponsesRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetIntegrationRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetIntegrationRequest: apigateway.ApiGatewayGetIntegrationRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayGetIntegrationResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetIntegrationResponseRequest: apigateway.ApiGatewayGetIntegrationResponseRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationResponseRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationResponseRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationResponseRequest.property.statusCode"></a>

- *Type:* `string`

---

### ApiGatewayGetMethodRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetMethodRequest: apigateway.ApiGatewayGetMethodRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayGetMethodResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetMethodResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetMethodResponseRequest: apigateway.ApiGatewayGetMethodResponseRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetMethodResponseRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetMethodResponseRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetMethodResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetMethodResponseRequest.property.statusCode"></a>

- *Type:* `string`

---

### ApiGatewayGetModelRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetModelRequest: apigateway.ApiGatewayGetModelRequest = { ... }
```

##### `modelName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelRequest.property.modelName"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `flatten`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelRequest.property.flatten"></a>

- *Type:* `boolean`

---

### ApiGatewayGetModelsRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetModelsRequest: apigateway.ApiGatewayGetModelsRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelsRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelsRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelsRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetModelTemplateRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetModelTemplateRequest: apigateway.ApiGatewayGetModelTemplateRequest = { ... }
```

##### `modelName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelTemplateRequest.property.modelName"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetModelTemplateRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayGetRequestValidatorRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetRequestValidatorRequest: apigateway.ApiGatewayGetRequestValidatorRequest = { ... }
```

##### `requestValidatorId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorRequest.property.requestValidatorId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayGetRequestValidatorsRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetRequestValidatorsRequest: apigateway.ApiGatewayGetRequestValidatorsRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorsRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorsRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorsRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetResourceRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetResourceRequest: apigateway.ApiGatewayGetResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetResourceRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `embed`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetResourceRequest.property.embed"></a>

- *Type:* `string`[]

---

### ApiGatewayGetResourcesRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetResourcesRequest: apigateway.ApiGatewayGetResourcesRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetResourcesRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `embed`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetResourcesRequest.property.embed"></a>

- *Type:* `string`[]

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetResourcesRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetResourcesRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetRestApiRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRestApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetRestApiRequest: apigateway.ApiGatewayGetRestApiRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRestApiRequest.property.restApiId"></a>

- *Type:* `string`

---

### ApiGatewayGetRestApisRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRestApisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetRestApisRequest: apigateway.ApiGatewayGetRestApisRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRestApisRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetRestApisRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetSdkRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetSdkRequest: apigateway.ApiGatewayGetSdkRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `sdkType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkRequest.property.sdkType"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkRequest.property.stageName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayGetSdkTypeRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetSdkTypeRequest: apigateway.ApiGatewayGetSdkTypeRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypeRequest.property.id"></a>

- *Type:* `string`

---

### ApiGatewayGetSdkTypesRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetSdkTypesRequest: apigateway.ApiGatewayGetSdkTypesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypesRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypesRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetStageRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetStageRequest: apigateway.ApiGatewayGetStageRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayGetStagesRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetStagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetStagesRequest: apigateway.ApiGatewayGetStagesRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetStagesRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetStagesRequest.property.deploymentId"></a>

- *Type:* `string`

---

### ApiGatewayGetTagsRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetTagsRequest: apigateway.ApiGatewayGetTagsRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetTagsRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetTagsRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetTagsRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetUsagePlanKeyRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetUsagePlanKeyRequest: apigateway.ApiGatewayGetUsagePlanKeyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeyRequest.property.keyId"></a>

- *Type:* `string`

---

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeyRequest.property.usagePlanId"></a>

- *Type:* `string`

---

### ApiGatewayGetUsagePlanKeysRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetUsagePlanKeysRequest: apigateway.ApiGatewayGetUsagePlanKeysRequest = { ... }
```

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeysRequest.property.usagePlanId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeysRequest.property.limit"></a>

- *Type:* `number`

---

##### `nameQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeysRequest.property.nameQuery"></a>

- *Type:* `string`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeysRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetUsagePlanRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetUsagePlanRequest: apigateway.ApiGatewayGetUsagePlanRequest = { ... }
```

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest.property.usagePlanId"></a>

- *Type:* `string`

---

### ApiGatewayGetUsagePlansRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlansRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetUsagePlansRequest: apigateway.ApiGatewayGetUsagePlansRequest = { ... }
```

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlansRequest.property.keyId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlansRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlansRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetUsageRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetUsageRequest: apigateway.ApiGatewayGetUsageRequest = { ... }
```

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest.property.endDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest.property.startDate"></a>

- *Type:* `string`

---

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest.property.usagePlanId"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest.property.keyId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayGetVpcLinkRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetVpcLinkRequest: apigateway.ApiGatewayGetVpcLinkRequest = { ... }
```

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinkRequest.property.vpcLinkId"></a>

- *Type:* `string`

---

### ApiGatewayGetVpcLinksRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayGetVpcLinksRequest: apigateway.ApiGatewayGetVpcLinksRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinksRequest.property.limit"></a>

- *Type:* `number`

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinksRequest.property.position"></a>

- *Type:* `string`

---

### ApiGatewayImportApiKeysRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayImportApiKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayImportApiKeysRequest: apigateway.ApiGatewayImportApiKeysRequest = { ... }
```

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportApiKeysRequest.property.body"></a>

- *Type:* `any`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportApiKeysRequest.property.format"></a>

- *Type:* `string`

---

##### `failOnWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportApiKeysRequest.property.failOnWarnings"></a>

- *Type:* `boolean`

---

### ApiGatewayImportDocumentationPartsRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayImportDocumentationPartsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayImportDocumentationPartsRequest: apigateway.ApiGatewayImportDocumentationPartsRequest = { ... }
```

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportDocumentationPartsRequest.property.body"></a>

- *Type:* `any`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportDocumentationPartsRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `failOnWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportDocumentationPartsRequest.property.failOnWarnings"></a>

- *Type:* `boolean`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportDocumentationPartsRequest.property.mode"></a>

- *Type:* `string`

---

### ApiGatewayImportRestApiRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayImportRestApiRequest: apigateway.ApiGatewayImportRestApiRequest = { ... }
```

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest.property.body"></a>

- *Type:* `any`

---

##### `failOnWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest.property.failOnWarnings"></a>

- *Type:* `boolean`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayIntegration <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayIntegration: apigateway.ApiGatewayIntegration = { ... }
```

##### `cacheKeyParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.cacheKeyParameters"></a>

- *Type:* `string`[]

---

##### `cacheNamespace`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.cacheNamespace"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandling`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.contentHandling"></a>

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.credentials"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.httpMethod"></a>

- *Type:* `string`

---

##### `integrationResponses`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.integrationResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse`](#aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse)}

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayTlsConfig`](#aws-cdk-sdk.apigateway.ApiGatewayTlsConfig)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.type"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegration.property.uri"></a>

- *Type:* `string`

---

### ApiGatewayIntegrationResponse <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayIntegrationResponse: apigateway.ApiGatewayIntegrationResponse = { ... }
```

##### `contentHandling`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse.property.contentHandling"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `selectionPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse.property.selectionPattern"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse.property.statusCode"></a>

- *Type:* `string`

---

### ApiGatewayMethod <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayMethod: apigateway.ApiGatewayMethod = { ... }
```

##### `apiKeyRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.authorizerId"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.httpMethod"></a>

- *Type:* `string`

---

##### `methodIntegration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.methodIntegration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayIntegration`](#aws-cdk-sdk.apigateway.ApiGatewayIntegration)

---

##### `methodResponses`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.methodResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodResponse`](#aws-cdk-sdk.apigateway.ApiGatewayMethodResponse)}

---

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.requestParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

##### `requestValidatorId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethod.property.requestValidatorId"></a>

- *Type:* `string`

---

### ApiGatewayMethodResponse <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayMethodResponse: apigateway.ApiGatewayMethodResponse = { ... }
```

##### `responseModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodResponse.property.statusCode"></a>

- *Type:* `string`

---

### ApiGatewayMethodSetting <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayMethodSetting: apigateway.ApiGatewayMethodSetting = { ... }
```

##### `cacheDataEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.cacheDataEncrypted"></a>

- *Type:* `boolean`

---

##### `cacheTtlInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.cacheTtlInSeconds"></a>

- *Type:* `number`

---

##### `cachingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.cachingEnabled"></a>

- *Type:* `boolean`

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.dataTraceEnabled"></a>

- *Type:* `boolean`

---

##### `loggingLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.loggingLevel"></a>

- *Type:* `string`

---

##### `metricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.metricsEnabled"></a>

- *Type:* `boolean`

---

##### `requireAuthorizationForCacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.requireAuthorizationForCacheControl"></a>

- *Type:* `boolean`

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.throttlingBurstLimit"></a>

- *Type:* `number`

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.throttlingRateLimit"></a>

- *Type:* `number`

---

##### `unauthorizedCacheControlHeaderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSetting.property.unauthorizedCacheControlHeaderStrategy"></a>

- *Type:* `string`

---

### ApiGatewayMethodSnapshot <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayMethodSnapshot: apigateway.ApiGatewayMethodSnapshot = { ... }
```

##### `apiKeyRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot.property.authorizationType"></a>

- *Type:* `string`

---

### ApiGatewayModel <a name="aws-cdk-sdk.apigateway.ApiGatewayModel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayModel: apigateway.ApiGatewayModel = { ... }
```

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayModel.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayModel.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayModel.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayModel.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayModel.property.schema"></a>

- *Type:* `string`

---

### ApiGatewayModels <a name="aws-cdk-sdk.apigateway.ApiGatewayModels"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayModels: apigateway.ApiGatewayModels = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayModels.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayModel`](#aws-cdk-sdk.apigateway.ApiGatewayModel)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayModels.property.position"></a>

- *Type:* `string`

---

### ApiGatewayMutualTlsAuthentication <a name="aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthentication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayMutualTlsAuthentication: apigateway.ApiGatewayMutualTlsAuthentication = { ... }
```

##### `truststoreUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthentication.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthentication.property.truststoreVersion"></a>

- *Type:* `string`

---

##### `truststoreWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthentication.property.truststoreWarnings"></a>

- *Type:* `string`[]

---

### ApiGatewayMutualTlsAuthenticationInput <a name="aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthenticationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayMutualTlsAuthenticationInput: apigateway.ApiGatewayMutualTlsAuthenticationInput = { ... }
```

##### `truststoreUri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthenticationInput.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayMutualTlsAuthenticationInput.property.truststoreVersion"></a>

- *Type:* `string`

---

### ApiGatewayPatchOperation <a name="aws-cdk-sdk.apigateway.ApiGatewayPatchOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayPatchOperation: apigateway.ApiGatewayPatchOperation = { ... }
```

##### `from`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPatchOperation.property.from"></a>

- *Type:* `string`

---

##### `op`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPatchOperation.property.op"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPatchOperation.property.path"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPatchOperation.property.value"></a>

- *Type:* `string`

---

### ApiGatewayPutGatewayResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayPutGatewayResponseRequest: apigateway.ApiGatewayPutGatewayResponseRequest = { ... }
```

##### `responseType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest.property.responseType"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest.property.statusCode"></a>

- *Type:* `string`

---

### ApiGatewayPutIntegrationRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayPutIntegrationRequest: apigateway.ApiGatewayPutIntegrationRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.type"></a>

- *Type:* `string`

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.cacheKeyParameters"></a>

- *Type:* `string`[]

---

##### `cacheNamespace`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.cacheNamespace"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandling`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.contentHandling"></a>

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.credentials"></a>

- *Type:* `string`

---

##### `integrationHttpMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.integrationHttpMethod"></a>

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayTlsConfig`](#aws-cdk-sdk.apigateway.ApiGatewayTlsConfig)

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest.property.uri"></a>

- *Type:* `string`

---

### ApiGatewayPutIntegrationResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayPutIntegrationResponseRequest: apigateway.ApiGatewayPutIntegrationResponseRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest.property.statusCode"></a>

- *Type:* `string`

---

##### `contentHandling`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest.property.contentHandling"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `selectionPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest.property.selectionPattern"></a>

- *Type:* `string`

---

### ApiGatewayPutMethodRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayPutMethodRequest: apigateway.ApiGatewayPutMethodRequest = { ... }
```

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.authorizationType"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizerId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.authorizerId"></a>

- *Type:* `string`

---

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.requestParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

##### `requestValidatorId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest.property.requestValidatorId"></a>

- *Type:* `string`

---

### ApiGatewayPutMethodResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayPutMethodResponseRequest: apigateway.ApiGatewayPutMethodResponseRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest.property.statusCode"></a>

- *Type:* `string`

---

##### `responseModels`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest.property.responseParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

### ApiGatewayPutRestApiRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayPutRestApiRequest: apigateway.ApiGatewayPutRestApiRequest = { ... }
```

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest.property.body"></a>

- *Type:* `any`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `failOnWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest.property.failOnWarnings"></a>

- *Type:* `boolean`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest.property.mode"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayQuotaSettings <a name="aws-cdk-sdk.apigateway.ApiGatewayQuotaSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayQuotaSettings: apigateway.ApiGatewayQuotaSettings = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayQuotaSettings.property.limit"></a>

- *Type:* `number`

---

##### `offset`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayQuotaSettings.property.offset"></a>

- *Type:* `number`

---

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayQuotaSettings.property.period"></a>

- *Type:* `string`

---

### ApiGatewayRequestValidator <a name="aws-cdk-sdk.apigateway.ApiGatewayRequestValidator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayRequestValidator: apigateway.ApiGatewayRequestValidator = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRequestValidator.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRequestValidator.property.name"></a>

- *Type:* `string`

---

##### `validateRequestBody`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRequestValidator.property.validateRequestBody"></a>

- *Type:* `boolean`

---

##### `validateRequestParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRequestValidator.property.validateRequestParameters"></a>

- *Type:* `boolean`

---

### ApiGatewayRequestValidators <a name="aws-cdk-sdk.apigateway.ApiGatewayRequestValidators"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayRequestValidators: apigateway.ApiGatewayRequestValidators = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRequestValidators.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayRequestValidator`](#aws-cdk-sdk.apigateway.ApiGatewayRequestValidator)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRequestValidators.property.position"></a>

- *Type:* `string`

---

### ApiGatewayResource <a name="aws-cdk-sdk.apigateway.ApiGatewayResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayResource: apigateway.ApiGatewayResource = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayResource.property.id"></a>

- *Type:* `string`

---

##### `parentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayResource.property.parentId"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayResource.property.path"></a>

- *Type:* `string`

---

##### `pathPart`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayResource.property.pathPart"></a>

- *Type:* `string`

---

##### `resourceMethods`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayResource.property.resourceMethods"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethod`](#aws-cdk-sdk.apigateway.ApiGatewayMethod)}

---

### ApiGatewayResources <a name="aws-cdk-sdk.apigateway.ApiGatewayResources"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayResources: apigateway.ApiGatewayResources = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayResources.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayResource`](#aws-cdk-sdk.apigateway.ApiGatewayResource)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayResources.property.position"></a>

- *Type:* `string`

---

### ApiGatewayRestApi <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayRestApi: apigateway.ApiGatewayRestApi = { ... }
```

##### `apiKeySource`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.apiKeySource"></a>

- *Type:* `string`

---

##### `binaryMediaTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.binaryMediaTypes"></a>

- *Type:* `string`[]

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration`](#aws-cdk-sdk.apigateway.ApiGatewayEndpointConfiguration)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.id"></a>

- *Type:* `string`

---

##### `minimumCompressionSize`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.minimumCompressionSize"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.policy"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApi.property.warnings"></a>

- *Type:* `string`[]

---

### ApiGatewayRestApis <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApis"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayRestApis: apigateway.ApiGatewayRestApis = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApis.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayRestApi`](#aws-cdk-sdk.apigateway.ApiGatewayRestApi)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayRestApis.property.position"></a>

- *Type:* `string`

---

### ApiGatewaySdkConfigurationProperty <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewaySdkConfigurationProperty: apigateway.ApiGatewaySdkConfigurationProperty = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty.property.defaultValue"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty.property.description"></a>

- *Type:* `string`

---

##### `friendlyName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty.property.friendlyName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty.property.name"></a>

- *Type:* `string`

---

##### `required`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty.property.required"></a>

- *Type:* `boolean`

---

### ApiGatewaySdkResponse <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewaySdkResponse: apigateway.ApiGatewaySdkResponse = { ... }
```

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkResponse.property.body"></a>

- *Type:* `any`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkResponse.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkResponse.property.contentType"></a>

- *Type:* `string`

---

### ApiGatewaySdkType <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewaySdkType: apigateway.ApiGatewaySdkType = { ... }
```

##### `configurationProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkType.property.configurationProperties"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty`](#aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkType.property.description"></a>

- *Type:* `string`

---

##### `friendlyName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkType.property.friendlyName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkType.property.id"></a>

- *Type:* `string`

---

### ApiGatewaySdkTypes <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkTypes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewaySdkTypes: apigateway.ApiGatewaySdkTypes = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkTypes.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewaySdkType`](#aws-cdk-sdk.apigateway.ApiGatewaySdkType)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewaySdkTypes.property.position"></a>

- *Type:* `string`

---

### ApiGatewayStage <a name="aws-cdk-sdk.apigateway.ApiGatewayStage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayStage: apigateway.ApiGatewayStage = { ... }
```

##### `accessLogSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayAccessLogSettings`](#aws-cdk-sdk.apigateway.ApiGatewayAccessLogSettings)

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.cacheClusterEnabled"></a>

- *Type:* `boolean`

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.cacheClusterSize"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `canarySettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.canarySettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCanarySettings`](#aws-cdk-sdk.apigateway.ApiGatewayCanarySettings)

---

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.description"></a>

- *Type:* `string`

---

##### `documentationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.documentationVersion"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `methodSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.methodSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodSetting`](#aws-cdk-sdk.apigateway.ApiGatewayMethodSetting)}

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.stageName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tracingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.tracingEnabled"></a>

- *Type:* `boolean`

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `webAclArn`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStage.property.webAclArn"></a>

- *Type:* `string`

---

### ApiGatewayStageKey <a name="aws-cdk-sdk.apigateway.ApiGatewayStageKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayStageKey: apigateway.ApiGatewayStageKey = { ... }
```

##### `restApiId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStageKey.property.restApiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStageKey.property.stageName"></a>

- *Type:* `string`

---

### ApiGatewayStages <a name="aws-cdk-sdk.apigateway.ApiGatewayStages"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayStages: apigateway.ApiGatewayStages = { ... }
```

##### `item`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayStages.property.item"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayStage`](#aws-cdk-sdk.apigateway.ApiGatewayStage)[]

---

### ApiGatewayTagResourceRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayTagResourceRequest: apigateway.ApiGatewayTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayTags <a name="aws-cdk-sdk.apigateway.ApiGatewayTags"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayTags: apigateway.ApiGatewayTags = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayTemplate <a name="aws-cdk-sdk.apigateway.ApiGatewayTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayTemplate: apigateway.ApiGatewayTemplate = { ... }
```

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTemplate.property.value"></a>

- *Type:* `string`

---

### ApiGatewayTestInvokeAuthorizerRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayTestInvokeAuthorizerRequest: apigateway.ApiGatewayTestInvokeAuthorizerRequest = { ... }
```

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest.property.authorizerId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `additionalContext`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest.property.additionalContext"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest.property.body"></a>

- *Type:* `string`

---

##### `headers`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest.property.headers"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `multiValueHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest.property.multiValueHeaders"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `pathWithQueryString`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest.property.pathWithQueryString"></a>

- *Type:* `string`

---

##### `stageVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayTestInvokeAuthorizerResponse <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayTestInvokeAuthorizerResponse: apigateway.ApiGatewayTestInvokeAuthorizerResponse = { ... }
```

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerResponse.property.authorization"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `claims`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerResponse.property.claims"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `clientStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerResponse.property.clientStatus"></a>

- *Type:* `number`

---

##### `latency`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerResponse.property.latency"></a>

- *Type:* `number`

---

##### `log`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerResponse.property.log"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerResponse.property.policy"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerResponse.property.principalId"></a>

- *Type:* `string`

---

### ApiGatewayTestInvokeMethodRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayTestInvokeMethodRequest: apigateway.ApiGatewayTestInvokeMethodRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest.property.body"></a>

- *Type:* `string`

---

##### `clientCertificateId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `headers`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest.property.headers"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `multiValueHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest.property.multiValueHeaders"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `pathWithQueryString`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest.property.pathWithQueryString"></a>

- *Type:* `string`

---

##### `stageVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest.property.stageVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

### ApiGatewayTestInvokeMethodResponse <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayTestInvokeMethodResponse: apigateway.ApiGatewayTestInvokeMethodResponse = { ... }
```

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodResponse.property.body"></a>

- *Type:* `string`

---

##### `headers`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodResponse.property.headers"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `latency`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodResponse.property.latency"></a>

- *Type:* `number`

---

##### `log`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodResponse.property.log"></a>

- *Type:* `string`

---

##### `multiValueHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodResponse.property.multiValueHeaders"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodResponse.property.status"></a>

- *Type:* `number`

---

### ApiGatewayThrottleSettings <a name="aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayThrottleSettings: apigateway.ApiGatewayThrottleSettings = { ... }
```

##### `burstLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings.property.burstLimit"></a>

- *Type:* `number`

---

##### `rateLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings.property.rateLimit"></a>

- *Type:* `number`

---

### ApiGatewayTlsConfig <a name="aws-cdk-sdk.apigateway.ApiGatewayTlsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayTlsConfig: apigateway.ApiGatewayTlsConfig = { ... }
```

##### `insecureSkipVerification`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayTlsConfig.property.insecureSkipVerification"></a>

- *Type:* `boolean`

---

### ApiGatewayUntagResourceRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUntagResourceRequest: apigateway.ApiGatewayUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ApiGatewayUpdateAccountRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateAccountRequest: apigateway.ApiGatewayUpdateAccountRequest = { ... }
```

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateAccountRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateApiKeyRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateApiKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateApiKeyRequest: apigateway.ApiGatewayUpdateApiKeyRequest = { ... }
```

##### `apiKey`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateApiKeyRequest.property.apiKey"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateApiKeyRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateAuthorizerRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateAuthorizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateAuthorizerRequest: apigateway.ApiGatewayUpdateAuthorizerRequest = { ... }
```

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateAuthorizerRequest.property.authorizerId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateAuthorizerRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateAuthorizerRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateBasePathMappingRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateBasePathMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateBasePathMappingRequest: apigateway.ApiGatewayUpdateBasePathMappingRequest = { ... }
```

##### `basePath`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateBasePathMappingRequest.property.basePath"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateBasePathMappingRequest.property.domainName"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateBasePathMappingRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateClientCertificateRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateClientCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateClientCertificateRequest: apigateway.ApiGatewayUpdateClientCertificateRequest = { ... }
```

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateClientCertificateRequest.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateClientCertificateRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateDeploymentRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateDeploymentRequest: apigateway.ApiGatewayUpdateDeploymentRequest = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDeploymentRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDeploymentRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDeploymentRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateDocumentationPartRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateDocumentationPartRequest: apigateway.ApiGatewayUpdateDocumentationPartRequest = { ... }
```

##### `documentationPartId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest.property.documentationPartId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateDocumentationVersionRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateDocumentationVersionRequest: apigateway.ApiGatewayUpdateDocumentationVersionRequest = { ... }
```

##### `documentationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationVersionRequest.property.documentationVersion"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationVersionRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationVersionRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateDomainNameRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateDomainNameRequest: apigateway.ApiGatewayUpdateDomainNameRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest.property.domainName"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateGatewayResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateGatewayResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateGatewayResponseRequest: apigateway.ApiGatewayUpdateGatewayResponseRequest = { ... }
```

##### `responseType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateGatewayResponseRequest.property.responseType"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateGatewayResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateGatewayResponseRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateIntegrationRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateIntegrationRequest: apigateway.ApiGatewayUpdateIntegrationRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateIntegrationResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateIntegrationResponseRequest: apigateway.ApiGatewayUpdateIntegrationResponseRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest.property.statusCode"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateMethodRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateMethodRequest: apigateway.ApiGatewayUpdateMethodRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateMethodResponseRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateMethodResponseRequest: apigateway.ApiGatewayUpdateMethodResponseRequest = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest.property.httpMethod"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest.property.statusCode"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateModelRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateModelRequest: apigateway.ApiGatewayUpdateModelRequest = { ... }
```

##### `modelName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateModelRequest.property.modelName"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateModelRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateModelRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateRequestValidatorRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateRequestValidatorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateRequestValidatorRequest: apigateway.ApiGatewayUpdateRequestValidatorRequest = { ... }
```

##### `requestValidatorId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateRequestValidatorRequest.property.requestValidatorId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateRequestValidatorRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateRequestValidatorRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateResourceRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateResourceRequest: apigateway.ApiGatewayUpdateResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateResourceRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateResourceRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateRestApiRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateRestApiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateRestApiRequest: apigateway.ApiGatewayUpdateRestApiRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateRestApiRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateRestApiRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateStageRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateStageRequest: apigateway.ApiGatewayUpdateStageRequest = { ... }
```

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest.property.restApiId"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest.property.stageName"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateUsagePlanRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateUsagePlanRequest: apigateway.ApiGatewayUpdateUsagePlanRequest = { ... }
```

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest.property.usagePlanId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateUsageRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateUsageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateUsageRequest: apigateway.ApiGatewayUpdateUsageRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateUsageRequest.property.keyId"></a>

- *Type:* `string`

---

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateUsageRequest.property.usagePlanId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateUsageRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUpdateVpcLinkRequest <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateVpcLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUpdateVpcLinkRequest: apigateway.ApiGatewayUpdateVpcLinkRequest = { ... }
```

##### `vpcLinkId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateVpcLinkRequest.property.vpcLinkId"></a>

- *Type:* `string`

---

##### `patchOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUpdateVpcLinkRequest.property.patchOperations"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPatchOperation`](#aws-cdk-sdk.apigateway.ApiGatewayPatchOperation)[]

---

### ApiGatewayUsage <a name="aws-cdk-sdk.apigateway.ApiGatewayUsage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUsage: apigateway.ApiGatewayUsage = { ... }
```

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsage.property.endDate"></a>

- *Type:* `string`

---

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsage.property.items"></a>

- *Type:* {[ key: string ]: `number`[][]}

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsage.property.position"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsage.property.startDate"></a>

- *Type:* `string`

---

##### `usagePlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsage.property.usagePlanId"></a>

- *Type:* `string`

---

### ApiGatewayUsagePlan <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlan"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUsagePlan: apigateway.ApiGatewayUsagePlan = { ... }
```

##### `apiStages`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlan.property.apiStages"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayApiStage`](#aws-cdk-sdk.apigateway.ApiGatewayApiStage)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlan.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlan.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlan.property.name"></a>

- *Type:* `string`

---

##### `productCode`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlan.property.productCode"></a>

- *Type:* `string`

---

##### `quota`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlan.property.quota"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayQuotaSettings`](#aws-cdk-sdk.apigateway.ApiGatewayQuotaSettings)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlan.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `throttle`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlan.property.throttle"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings`](#aws-cdk-sdk.apigateway.ApiGatewayThrottleSettings)

---

### ApiGatewayUsagePlanKey <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUsagePlanKey: apigateway.ApiGatewayUsagePlanKey = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKey.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKey.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKey.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKey.property.value"></a>

- *Type:* `string`

---

### ApiGatewayUsagePlanKeys <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKeys"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUsagePlanKeys: apigateway.ApiGatewayUsagePlanKeys = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKeys.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKey`](#aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKey)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKeys.property.position"></a>

- *Type:* `string`

---

### ApiGatewayUsagePlans <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlans"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayUsagePlans: apigateway.ApiGatewayUsagePlans = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlans.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUsagePlan`](#aws-cdk-sdk.apigateway.ApiGatewayUsagePlan)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayUsagePlans.property.position"></a>

- *Type:* `string`

---

### ApiGatewayVpcLink <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLink"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayVpcLink: apigateway.ApiGatewayVpcLink = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLink.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLink.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLink.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLink.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLink.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLink.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targetArns`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLink.property.targetArns"></a>

- *Type:* `string`[]

---

### ApiGatewayVpcLinks <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLinks"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

const apiGatewayVpcLinks: apigateway.ApiGatewayVpcLinks = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLinks.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayVpcLink`](#aws-cdk-sdk.apigateway.ApiGatewayVpcLink)[]

---

##### `position`<sup>Optional</sup> <a name="aws-cdk-sdk.apigateway.ApiGatewayVpcLinks.property.position"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### APIGatewayResponsesCreateApiKey <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateApiKey(__scope: Construct, __resources: string[], __input: ApiGatewayCreateApiKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateApiKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.createdDate"></a>

- *Type:* `string`

---

##### `customerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.customerId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.enabled"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.name"></a>

- *Type:* `string`

---

##### `stageKeys`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.stageKeys"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateApiKey.property.value"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateAuthorizer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateAuthorizer(__scope: Construct, __resources: string[], __input: ApiGatewayCreateAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.authorizerCredentials"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.authorizerUri"></a>

- *Type:* `string`

---

##### `authType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.authType"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.id"></a>

- *Type:* `string`

---

##### `identitySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.identitySource"></a>

- *Type:* `string`

---

##### `identityValidationExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.name"></a>

- *Type:* `string`

---

##### `providerArNs`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.providerArNs"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateAuthorizer.property.type"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateBasePathMapping <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateBasePathMapping"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateBasePathMapping.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateBasePathMapping(__scope: Construct, __resources: string[], __input: ApiGatewayCreateBasePathMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateBasePathMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateBasePathMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateBasePathMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateBasePathMappingRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateBasePathMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `basePath`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateBasePathMapping.property.basePath"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateBasePathMapping.property.restApiId"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateBasePathMapping.property.stage"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateDeployment <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDeployment.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateDeployment(__scope: Construct, __resources: string[], __input: ApiGatewayCreateDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `apiSummary`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDeployment.property.apiSummary"></a>

- *Type:* {[ key: string ]: {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot`](#aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot)}}

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDeployment.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDeployment.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDeployment.property.id"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateDocumentationPart <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPart"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPart.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateDocumentationPart(__scope: Construct, __resources: string[], __input: ApiGatewayCreateDocumentationPartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPart.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPart.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPart.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPart.property.id"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPart.property.location"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation`](#aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation)

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPart.property.properties"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateDocumentationPartLocation <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateDocumentationPartLocation(__scope: Construct, __resources: string[], __input: ApiGatewayCreateDocumentationPartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationPartRequest)

---



#### Properties <a name="Properties"></a>

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation.property.method"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation.property.name"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation.property.path"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation.property.statusCode"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationPartLocation.property.type"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateDocumentationVersion <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationVersion.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateDocumentationVersion(__scope: Construct, __resources: string[], __input: ApiGatewayCreateDocumentationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationVersionRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDocumentationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationVersion.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationVersion.property.description"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDocumentationVersion.property.version"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateDomainName <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateDomainName(__scope: Construct, __resources: string[], __input: ApiGatewayCreateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.certificateName"></a>

- *Type:* `string`

---

##### `certificateUploadDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.certificateUploadDate"></a>

- *Type:* `string`

---

##### `distributionDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.distributionDomainName"></a>

- *Type:* `string`

---

##### `distributionHostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.distributionHostedZoneId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.domainNameStatus"></a>

- *Type:* `string`

---

##### `domainNameStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.domainNameStatusMessage"></a>

- *Type:* `string`

---

##### `endpointConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration)

---

##### `mutualTlsAuthentication`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication`](#aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication)

---

##### `regionalCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.regionalCertificateArn"></a>

- *Type:* `string`

---

##### `regionalCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.regionalCertificateName"></a>

- *Type:* `string`

---

##### `regionalDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.regionalDomainName"></a>

- *Type:* `string`

---

##### `regionalHostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.regionalHostedZoneId"></a>

- *Type:* `string`

---

##### `securityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.securityPolicy"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainName.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### APIGatewayResponsesCreateDomainNameEndpointConfiguration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayCreateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameEndpointConfiguration.property.vpcEndpointIds"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesCreateDomainNameMutualTlsAuthentication <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication(__scope: Construct, __resources: string[], __input: ApiGatewayCreateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `truststoreUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

- *Type:* `string`

---

##### `truststoreWarnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateDomainNameMutualTlsAuthentication.property.truststoreWarnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesCreateModel <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateModel(__scope: Construct, __resources: string[], __input: ApiGatewayCreateModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateModelRequest)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateModel.property.schema"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateRequestValidator <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRequestValidator"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRequestValidator.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateRequestValidator(__scope: Construct, __resources: string[], __input: ApiGatewayCreateRequestValidatorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRequestValidator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRequestValidator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRequestValidator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateRequestValidatorRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateRequestValidatorRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRequestValidator.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRequestValidator.property.name"></a>

- *Type:* `string`

---

##### `validateRequestBody`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRequestValidator.property.validateRequestBody"></a>

- *Type:* `boolean`

---

##### `validateRequestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRequestValidator.property.validateRequestParameters"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesCreateResource <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateResource(__scope: Construct, __resources: string[], __input: ApiGatewayCreateResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateResourceRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource.property.id"></a>

- *Type:* `string`

---

##### `parentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource.property.parentId"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource.property.path"></a>

- *Type:* `string`

---

##### `pathPart`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource.property.pathPart"></a>

- *Type:* `string`

---

##### `resourceMethods`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateResource.property.resourceMethods"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethod`](#aws-cdk-sdk.apigateway.ApiGatewayMethod)}

---


### APIGatewayResponsesCreateRestApi <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateRestApi(__scope: Construct, __resources: string[], __input: ApiGatewayCreateRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.apiKeySource"></a>

- *Type:* `string`

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.binaryMediaTypes"></a>

- *Type:* `string`[]

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `endpointConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.id"></a>

- *Type:* `string`

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.minimumCompressionSize"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.policy"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApi.property.warnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesCreateRestApiEndpointConfiguration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayCreateRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesCreateStage <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateStage(__scope: Construct, __resources: string[], __input: ApiGatewayCreateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `accessLogSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageAccessLogSettings`](#aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageAccessLogSettings)

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.cacheClusterEnabled"></a>

- *Type:* `boolean`

---

##### `cacheClusterSize`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.cacheClusterSize"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `canarySettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.canarySettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings`](#aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings)

---

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.description"></a>

- *Type:* `string`

---

##### `documentationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.documentationVersion"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `methodSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.methodSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodSetting`](#aws-cdk-sdk.apigateway.ApiGatewayMethodSetting)}

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.stageName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tracingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.tracingEnabled"></a>

- *Type:* `boolean`

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStage.property.webAclArn"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateStageAccessLogSettings <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageAccessLogSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageAccessLogSettings.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateStageAccessLogSettings(__scope: Construct, __resources: string[], __input: ApiGatewayCreateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageAccessLogSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageAccessLogSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageAccessLogSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageAccessLogSettings.property.destinationArn"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageAccessLogSettings.property.format"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateStageCanarySettings <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateStageCanarySettings(__scope: Construct, __resources: string[], __input: ApiGatewayCreateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings.property.deploymentId"></a>

- *Type:* `string`

---

##### `percentTraffic`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings.property.percentTraffic"></a>

- *Type:* `number`

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings.property.stageVariableOverrides"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `useStageCache`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateStageCanarySettings.property.useStageCache"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesCreateUsagePlan <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateUsagePlan(__scope: Construct, __resources: string[], __input: ApiGatewayCreateUsagePlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest)

---



#### Properties <a name="Properties"></a>

##### `apiStages`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.property.apiStages"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayApiStage`](#aws-cdk-sdk.apigateway.ApiGatewayApiStage)[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.property.name"></a>

- *Type:* `string`

---

##### `productCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.property.productCode"></a>

- *Type:* `string`

---

##### `quota`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.property.quota"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota`](#aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `throttle`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlan.property.throttle"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanThrottle`](#aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanThrottle)

---


### APIGatewayResponsesCreateUsagePlanKey <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanKey"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanKey.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateUsagePlanKey(__scope: Construct, __resources: string[], __input: ApiGatewayCreateUsagePlanKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanKey.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanKey.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanKey.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanKey.property.value"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateUsagePlanQuota <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateUsagePlanQuota(__scope: Construct, __resources: string[], __input: ApiGatewayCreateUsagePlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest)

---



#### Properties <a name="Properties"></a>

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota.property.limit"></a>

- *Type:* `number`

---

##### `offset`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota.property.offset"></a>

- *Type:* `number`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanQuota.property.period"></a>

- *Type:* `string`

---


### APIGatewayResponsesCreateUsagePlanThrottle <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanThrottle"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanThrottle.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateUsagePlanThrottle(__scope: Construct, __resources: string[], __input: ApiGatewayCreateUsagePlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanThrottle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanThrottle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanThrottle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateUsagePlanRequest)

---



#### Properties <a name="Properties"></a>

##### `burstLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanThrottle.property.burstLimit"></a>

- *Type:* `number`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateUsagePlanThrottle.property.rateLimit"></a>

- *Type:* `number`

---


### APIGatewayResponsesCreateVpcLink <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesCreateVpcLink(__scope: Construct, __resources: string[], __input: ApiGatewayCreateVpcLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayCreateVpcLinkRequest`](#aws-cdk-sdk.apigateway.ApiGatewayCreateVpcLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targetArns`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesCreateVpcLink.property.targetArns"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesFetchAccount <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccount"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccount.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `apiKeyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccount.property.apiKeyVersion"></a>

- *Type:* `string`

---

##### `cloudwatchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccount.property.cloudwatchRoleArn"></a>

- *Type:* `string`

---

##### `features`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccount.property.features"></a>

- *Type:* `string`[]

---

##### `throttleSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccount.property.throttleSettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccountThrottleSettings`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccountThrottleSettings)

---


### APIGatewayResponsesFetchAccountThrottleSettings <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccountThrottleSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccountThrottleSettings.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchAccountThrottleSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccountThrottleSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccountThrottleSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `burstLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccountThrottleSettings.property.burstLimit"></a>

- *Type:* `number`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAccountThrottleSettings.property.rateLimit"></a>

- *Type:* `number`

---


### APIGatewayResponsesFetchApiKey <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchApiKey(__scope: Construct, __resources: string[], __input: ApiGatewayGetApiKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetApiKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetApiKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.createdDate"></a>

- *Type:* `string`

---

##### `customerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.customerId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.enabled"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.name"></a>

- *Type:* `string`

---

##### `stageKeys`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.stageKeys"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKey.property.value"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchApiKeys <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKeys"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKeys.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchApiKeys(__scope: Construct, __resources: string[], __input: ApiGatewayGetApiKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetApiKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKeys.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayApiKey`](#aws-cdk-sdk.apigateway.ApiGatewayApiKey)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKeys.property.position"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchApiKeys.property.warnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesFetchAuthorizer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchAuthorizer(__scope: Construct, __resources: string[], __input: ApiGatewayGetAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizerRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.authorizerCredentials"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.authorizerUri"></a>

- *Type:* `string`

---

##### `authType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.authType"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.id"></a>

- *Type:* `string`

---

##### `identitySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.identitySource"></a>

- *Type:* `string`

---

##### `identityValidationExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.name"></a>

- *Type:* `string`

---

##### `providerArNs`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.providerArNs"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizer.property.type"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchAuthorizers <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizers"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizers.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchAuthorizers(__scope: Construct, __resources: string[], __input: ApiGatewayGetAuthorizersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizersRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetAuthorizersRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizers.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayAuthorizer`](#aws-cdk-sdk.apigateway.ApiGatewayAuthorizer)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchAuthorizers.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchBasePathMapping <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMapping"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMapping.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchBasePathMapping(__scope: Construct, __resources: string[], __input: ApiGatewayGetBasePathMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `basePath`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMapping.property.basePath"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMapping.property.restApiId"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMapping.property.stage"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchBasePathMappings <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMappings"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMappings.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchBasePathMappings(__scope: Construct, __resources: string[], __input: ApiGatewayGetBasePathMappingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMappings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMappings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMappings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetBasePathMappingsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMappings.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayBasePathMapping`](#aws-cdk-sdk.apigateway.ApiGatewayBasePathMapping)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchBasePathMappings.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchClientCertificate <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchClientCertificate(__scope: Construct, __resources: string[], __input: ApiGatewayGetClientCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificateRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.property.expirationDate"></a>

- *Type:* `string`

---

##### `pemEncodedCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.property.pemEncodedCertificate"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificate.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### APIGatewayResponsesFetchClientCertificates <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificates.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchClientCertificates(__scope: Construct, __resources: string[], __input: ApiGatewayGetClientCertificatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificatesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetClientCertificatesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificates.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayClientCertificate`](#aws-cdk-sdk.apigateway.ApiGatewayClientCertificate)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchClientCertificates.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchDeployment <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployment.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDeployment(__scope: Construct, __resources: string[], __input: ApiGatewayGetDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `apiSummary`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployment.property.apiSummary"></a>

- *Type:* {[ key: string ]: {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot`](#aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot)}}

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployment.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployment.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployment.property.id"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchDeployments <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployments.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDeployments(__scope: Construct, __resources: string[], __input: ApiGatewayGetDeploymentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDeploymentsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployments.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDeployment`](#aws-cdk-sdk.apigateway.ApiGatewayDeployment)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDeployments.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchDocumentationPart <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPart"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPart.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDocumentationPart(__scope: Construct, __resources: string[], __input: ApiGatewayGetDocumentationPartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPart.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPart.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPart.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPart.property.id"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPart.property.location"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation)

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPart.property.properties"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchDocumentationPartLocation <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDocumentationPartLocation(__scope: Construct, __resources: string[], __input: ApiGatewayGetDocumentationPartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartRequest)

---



#### Properties <a name="Properties"></a>

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation.property.method"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation.property.name"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation.property.path"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation.property.statusCode"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationPartLocation.property.type"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchDocumentationParts <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationParts"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationParts.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDocumentationParts(__scope: Construct, __resources: string[], __input: ApiGatewayGetDocumentationPartsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationParts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationParts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationParts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationPartsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationParts.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDocumentationPart`](#aws-cdk-sdk.apigateway.ApiGatewayDocumentationPart)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationParts.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchDocumentationVersion <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersion.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDocumentationVersion(__scope: Construct, __resources: string[], __input: ApiGatewayGetDocumentationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersion.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersion.property.description"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersion.property.version"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchDocumentationVersions <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersions"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersions.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDocumentationVersions(__scope: Construct, __resources: string[], __input: ApiGatewayGetDocumentationVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDocumentationVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersions.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersion`](#aws-cdk-sdk.apigateway.ApiGatewayDocumentationVersion)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDocumentationVersions.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchDomainName <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDomainName(__scope: Construct, __resources: string[], __input: ApiGatewayGetDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.certificateName"></a>

- *Type:* `string`

---

##### `certificateUploadDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.certificateUploadDate"></a>

- *Type:* `string`

---

##### `distributionDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.distributionDomainName"></a>

- *Type:* `string`

---

##### `distributionHostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.distributionHostedZoneId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.domainNameStatus"></a>

- *Type:* `string`

---

##### `domainNameStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.domainNameStatusMessage"></a>

- *Type:* `string`

---

##### `endpointConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration)

---

##### `mutualTlsAuthentication`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication)

---

##### `regionalCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.regionalCertificateArn"></a>

- *Type:* `string`

---

##### `regionalCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.regionalCertificateName"></a>

- *Type:* `string`

---

##### `regionalDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.regionalDomainName"></a>

- *Type:* `string`

---

##### `regionalHostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.regionalHostedZoneId"></a>

- *Type:* `string`

---

##### `securityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.securityPolicy"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainName.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### APIGatewayResponsesFetchDomainNameEndpointConfiguration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayGetDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameEndpointConfiguration.property.vpcEndpointIds"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesFetchDomainNameMutualTlsAuthentication <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication(__scope: Construct, __resources: string[], __input: ApiGatewayGetDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `truststoreUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

- *Type:* `string`

---

##### `truststoreWarnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNameMutualTlsAuthentication.property.truststoreWarnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesFetchDomainNames <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNames"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNames.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchDomainNames(__scope: Construct, __resources: string[], __input: ApiGatewayGetDomainNamesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNames.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNames.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNames.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetDomainNamesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetDomainNamesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNames.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayDomainName`](#aws-cdk-sdk.apigateway.ApiGatewayDomainName)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchDomainNames.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchExport <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchExport"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchExport.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchExport(__scope: Construct, __resources: string[], __input: ApiGatewayGetExportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchExport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchExport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchExport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetExportRequest)

---



#### Properties <a name="Properties"></a>

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchExport.property.body"></a>

- *Type:* `any`

---

##### `contentDisposition`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchExport.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchExport.property.contentType"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchGatewayResponse <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchGatewayResponse(__scope: Construct, __resources: string[], __input: ApiGatewayGetGatewayResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultResponse`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse.property.defaultResponse"></a>

- *Type:* `boolean`

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse.property.responseType"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponse.property.statusCode"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchGatewayResponses <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponses"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponses.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchGatewayResponses(__scope: Construct, __resources: string[], __input: ApiGatewayGetGatewayResponsesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponses.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponses.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponses.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponsesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetGatewayResponsesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponses.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse`](#aws-cdk-sdk.apigateway.ApiGatewayGatewayResponse)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchGatewayResponses.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchIntegration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchIntegration(__scope: Construct, __resources: string[], __input: ApiGatewayGetIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `cacheKeyParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.cacheKeyParameters"></a>

- *Type:* `string`[]

---

##### `cacheNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.cacheNamespace"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandling`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.contentHandling"></a>

- *Type:* `string`

---

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.credentials"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.httpMethod"></a>

- *Type:* `string`

---

##### `integrationResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.integrationResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse`](#aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse)}

---

##### `passthroughBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationTlsConfig`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationTlsConfig)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.type"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegration.property.uri"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchIntegrationResponse <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchIntegrationResponse(__scope: Construct, __resources: string[], __input: ApiGatewayGetIntegrationResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `contentHandling`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse.property.contentHandling"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `selectionPattern`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse.property.selectionPattern"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationResponse.property.statusCode"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchIntegrationTlsConfig <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationTlsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationTlsConfig.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchIntegrationTlsConfig(__scope: Construct, __resources: string[], __input: ApiGatewayGetIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationTlsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationTlsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationTlsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `insecureSkipVerification`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchIntegrationTlsConfig.property.insecureSkipVerification"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesFetchMethod <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchMethod(__scope: Construct, __resources: string[], __input: ApiGatewayGetMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeyRequired`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.authorizerId"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.httpMethod"></a>

- *Type:* `string`

---

##### `methodIntegration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.methodIntegration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration)

---

##### `methodResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.methodResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodResponse`](#aws-cdk-sdk.apigateway.ApiGatewayMethodResponse)}

---

##### `operationName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.requestParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

##### `requestValidatorId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethod.property.requestValidatorId"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchMethodMethodIntegration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchMethodMethodIntegration(__scope: Construct, __resources: string[], __input: ApiGatewayGetMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `cacheKeyParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.cacheKeyParameters"></a>

- *Type:* `string`[]

---

##### `cacheNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.cacheNamespace"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandling`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.contentHandling"></a>

- *Type:* `string`

---

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.credentials"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.httpMethod"></a>

- *Type:* `string`

---

##### `integrationResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.integrationResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse`](#aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse)}

---

##### `passthroughBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.type"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegration.property.uri"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig(__scope: Construct, __resources: string[], __input: ApiGatewayGetMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `insecureSkipVerification`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig.property.insecureSkipVerification"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesFetchMethodResponse <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodResponse.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchMethodResponse(__scope: Construct, __resources: string[], __input: ApiGatewayGetMethodResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetMethodResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetMethodResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `responseModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchMethodResponse.property.statusCode"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchModel <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchModel(__scope: Construct, __resources: string[], __input: ApiGatewayGetModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetModelRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetModelRequest)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModel.property.schema"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchModels <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModels"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModels.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchModels(__scope: Construct, __resources: string[], __input: ApiGatewayGetModelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetModelsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetModelsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModels.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayModel`](#aws-cdk-sdk.apigateway.ApiGatewayModel)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModels.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchModelTemplate <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModelTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModelTemplate.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchModelTemplate(__scope: Construct, __resources: string[], __input: ApiGatewayGetModelTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModelTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModelTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModelTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetModelTemplateRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetModelTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchModelTemplate.property.value"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchRequestValidator <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidator"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidator.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchRequestValidator(__scope: Construct, __resources: string[], __input: ApiGatewayGetRequestValidatorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidator.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidator.property.name"></a>

- *Type:* `string`

---

##### `validateRequestBody`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidator.property.validateRequestBody"></a>

- *Type:* `boolean`

---

##### `validateRequestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidator.property.validateRequestParameters"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesFetchRequestValidators <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidators"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidators.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchRequestValidators(__scope: Construct, __resources: string[], __input: ApiGatewayGetRequestValidatorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidators.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidators.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidators.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetRequestValidatorsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidators.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayRequestValidator`](#aws-cdk-sdk.apigateway.ApiGatewayRequestValidator)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRequestValidators.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchResource <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchResource(__scope: Construct, __resources: string[], __input: ApiGatewayGetResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetResourceRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource.property.id"></a>

- *Type:* `string`

---

##### `parentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource.property.parentId"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource.property.path"></a>

- *Type:* `string`

---

##### `pathPart`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource.property.pathPart"></a>

- *Type:* `string`

---

##### `resourceMethods`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResource.property.resourceMethods"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethod`](#aws-cdk-sdk.apigateway.ApiGatewayMethod)}

---


### APIGatewayResponsesFetchResources <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResources"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResources.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchResources(__scope: Construct, __resources: string[], __input: ApiGatewayGetResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetResourcesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResources.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayResource`](#aws-cdk-sdk.apigateway.ApiGatewayResource)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchResources.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchRestApi <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchRestApi(__scope: Construct, __resources: string[], __input: ApiGatewayGetRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.apiKeySource"></a>

- *Type:* `string`

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.binaryMediaTypes"></a>

- *Type:* `string`[]

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `endpointConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.id"></a>

- *Type:* `string`

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.minimumCompressionSize"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.policy"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApi.property.warnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesFetchRestApiEndpointConfiguration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayGetRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesFetchRestApis <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApis"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApis.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchRestApis(__scope: Construct, __resources: string[], __input: ApiGatewayGetRestApisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetRestApisRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetRestApisRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApis.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayRestApi`](#aws-cdk-sdk.apigateway.ApiGatewayRestApi)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchRestApis.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchSdk <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdk"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdk.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchSdk(__scope: Construct, __resources: string[], __input: ApiGatewayGetSdkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdk.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdk.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdk.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetSdkRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetSdkRequest)

---



#### Properties <a name="Properties"></a>

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdk.property.body"></a>

- *Type:* `any`

---

##### `contentDisposition`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdk.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdk.property.contentType"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchSdkType <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkType"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkType.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchSdkType(__scope: Construct, __resources: string[], __input: ApiGatewayGetSdkTypeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypeRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypeRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationProperties`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkType.property.configurationProperties"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty`](#aws-cdk-sdk.apigateway.ApiGatewaySdkConfigurationProperty)[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkType.property.description"></a>

- *Type:* `string`

---

##### `friendlyName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkType.property.friendlyName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkType.property.id"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchSdkTypes <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkTypes"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkTypes.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchSdkTypes(__scope: Construct, __resources: string[], __input: ApiGatewayGetSdkTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetSdkTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkTypes.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewaySdkType`](#aws-cdk-sdk.apigateway.ApiGatewaySdkType)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchSdkTypes.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchStage <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchStage(__scope: Construct, __resources: string[], __input: ApiGatewayGetStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest)

---



#### Properties <a name="Properties"></a>

##### `accessLogSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageAccessLogSettings`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageAccessLogSettings)

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.cacheClusterEnabled"></a>

- *Type:* `boolean`

---

##### `cacheClusterSize`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.cacheClusterSize"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `canarySettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.canarySettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings)

---

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.description"></a>

- *Type:* `string`

---

##### `documentationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.documentationVersion"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `methodSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.methodSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodSetting`](#aws-cdk-sdk.apigateway.ApiGatewayMethodSetting)}

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.stageName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tracingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.tracingEnabled"></a>

- *Type:* `boolean`

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStage.property.webAclArn"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchStageAccessLogSettings <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageAccessLogSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageAccessLogSettings.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchStageAccessLogSettings(__scope: Construct, __resources: string[], __input: ApiGatewayGetStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageAccessLogSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageAccessLogSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageAccessLogSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageAccessLogSettings.property.destinationArn"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageAccessLogSettings.property.format"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchStageCanarySettings <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchStageCanarySettings(__scope: Construct, __resources: string[], __input: ApiGatewayGetStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetStageRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings.property.deploymentId"></a>

- *Type:* `string`

---

##### `percentTraffic`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings.property.percentTraffic"></a>

- *Type:* `number`

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings.property.stageVariableOverrides"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `useStageCache`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStageCanarySettings.property.useStageCache"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesFetchStages <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStages"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStages.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchStages(__scope: Construct, __resources: string[], __input: ApiGatewayGetStagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetStagesRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetStagesRequest)

---



#### Properties <a name="Properties"></a>

##### `item`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchStages.property.item"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayStage`](#aws-cdk-sdk.apigateway.ApiGatewayStage)[]

---


### APIGatewayResponsesFetchTags <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchTags"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchTags.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchTags(__scope: Construct, __resources: string[], __input: ApiGatewayGetTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetTagsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### APIGatewayResponsesFetchUsage <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchUsage(__scope: Construct, __resources: string[], __input: ApiGatewayGetUsageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsageRequest)

---



#### Properties <a name="Properties"></a>

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage.property.endDate"></a>

- *Type:* `string`

---

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage.property.items"></a>

- *Type:* {[ key: string ]: `number`[][]}

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage.property.position"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage.property.startDate"></a>

- *Type:* `string`

---

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsage.property.usagePlanId"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchUsagePlan <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchUsagePlan(__scope: Construct, __resources: string[], __input: ApiGatewayGetUsagePlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest)

---



#### Properties <a name="Properties"></a>

##### `apiStages`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.property.apiStages"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayApiStage`](#aws-cdk-sdk.apigateway.ApiGatewayApiStage)[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.property.name"></a>

- *Type:* `string`

---

##### `productCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.property.productCode"></a>

- *Type:* `string`

---

##### `quota`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.property.quota"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `throttle`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlan.property.throttle"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanThrottle`](#aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanThrottle)

---


### APIGatewayResponsesFetchUsagePlanKey <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKey"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKey.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchUsagePlanKey(__scope: Construct, __resources: string[], __input: ApiGatewayGetUsagePlanKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKey.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKey.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKey.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKey.property.value"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchUsagePlanKeys <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKeys"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKeys.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchUsagePlanKeys(__scope: Construct, __resources: string[], __input: ApiGatewayGetUsagePlanKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeysRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKeys.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKey`](#aws-cdk-sdk.apigateway.ApiGatewayUsagePlanKey)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanKeys.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchUsagePlanQuota <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchUsagePlanQuota(__scope: Construct, __resources: string[], __input: ApiGatewayGetUsagePlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest)

---



#### Properties <a name="Properties"></a>

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota.property.limit"></a>

- *Type:* `number`

---

##### `offset`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota.property.offset"></a>

- *Type:* `number`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanQuota.property.period"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchUsagePlans <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlans"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlans.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchUsagePlans(__scope: Construct, __resources: string[], __input: ApiGatewayGetUsagePlansRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlans.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlans.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlans.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlansRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlansRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlans.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUsagePlan`](#aws-cdk-sdk.apigateway.ApiGatewayUsagePlan)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlans.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesFetchUsagePlanThrottle <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanThrottle"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanThrottle.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchUsagePlanThrottle(__scope: Construct, __resources: string[], __input: ApiGatewayGetUsagePlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanThrottle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanThrottle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanThrottle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetUsagePlanRequest)

---



#### Properties <a name="Properties"></a>

##### `burstLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanThrottle.property.burstLimit"></a>

- *Type:* `number`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchUsagePlanThrottle.property.rateLimit"></a>

- *Type:* `number`

---


### APIGatewayResponsesFetchVpcLink <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchVpcLink(__scope: Construct, __resources: string[], __input: ApiGatewayGetVpcLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinkRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targetArns`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLink.property.targetArns"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesFetchVpcLinks <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLinks"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLinks.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesFetchVpcLinks(__scope: Construct, __resources: string[], __input: ApiGatewayGetVpcLinksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLinks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLinks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLinks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinksRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGetVpcLinksRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLinks.property.items"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayVpcLink`](#aws-cdk-sdk.apigateway.ApiGatewayVpcLink)[]

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesFetchVpcLinks.property.position"></a>

- *Type:* `string`

---


### APIGatewayResponsesGenerateClientCertificate <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesGenerateClientCertificate(__scope: Construct, __resources: string[], __input: ApiGatewayGenerateClientCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayGenerateClientCertificateRequest`](#aws-cdk-sdk.apigateway.ApiGatewayGenerateClientCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.property.expirationDate"></a>

- *Type:* `string`

---

##### `pemEncodedCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.property.pemEncodedCertificate"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesGenerateClientCertificate.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### APIGatewayResponsesImportApiKeys <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportApiKeys"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportApiKeys.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesImportApiKeys(__scope: Construct, __resources: string[], __input: ApiGatewayImportApiKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportApiKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportApiKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportApiKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayImportApiKeysRequest`](#aws-cdk-sdk.apigateway.ApiGatewayImportApiKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportApiKeys.property.ids"></a>

- *Type:* `string`[]

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportApiKeys.property.warnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesImportDocumentationParts <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportDocumentationParts"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportDocumentationParts.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesImportDocumentationParts(__scope: Construct, __resources: string[], __input: ApiGatewayImportDocumentationPartsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportDocumentationParts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportDocumentationParts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportDocumentationParts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayImportDocumentationPartsRequest`](#aws-cdk-sdk.apigateway.ApiGatewayImportDocumentationPartsRequest)

---



#### Properties <a name="Properties"></a>

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportDocumentationParts.property.ids"></a>

- *Type:* `string`[]

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportDocumentationParts.property.warnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesImportRestApi <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesImportRestApi(__scope: Construct, __resources: string[], __input: ApiGatewayImportRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.apiKeySource"></a>

- *Type:* `string`

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.binaryMediaTypes"></a>

- *Type:* `string`[]

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `endpointConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.id"></a>

- *Type:* `string`

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.minimumCompressionSize"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.policy"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApi.property.warnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesImportRestApiEndpointConfiguration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayImportRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayImportRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesImportRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesPutGatewayResponse <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutGatewayResponse(__scope: Construct, __resources: string[], __input: ApiGatewayPutGatewayResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutGatewayResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultResponse`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse.property.defaultResponse"></a>

- *Type:* `boolean`

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse.property.responseType"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutGatewayResponse.property.statusCode"></a>

- *Type:* `string`

---


### APIGatewayResponsesPutIntegration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutIntegration(__scope: Construct, __resources: string[], __input: ApiGatewayPutIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `cacheKeyParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.cacheKeyParameters"></a>

- *Type:* `string`[]

---

##### `cacheNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.cacheNamespace"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandling`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.contentHandling"></a>

- *Type:* `string`

---

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.credentials"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.httpMethod"></a>

- *Type:* `string`

---

##### `integrationResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.integrationResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse`](#aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse)}

---

##### `passthroughBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationTlsConfig`](#aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationTlsConfig)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.type"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegration.property.uri"></a>

- *Type:* `string`

---


### APIGatewayResponsesPutIntegrationResponse <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutIntegrationResponse(__scope: Construct, __resources: string[], __input: ApiGatewayPutIntegrationResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `contentHandling`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse.property.contentHandling"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `selectionPattern`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse.property.selectionPattern"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationResponse.property.statusCode"></a>

- *Type:* `string`

---


### APIGatewayResponsesPutIntegrationTlsConfig <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationTlsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationTlsConfig.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutIntegrationTlsConfig(__scope: Construct, __resources: string[], __input: ApiGatewayPutIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationTlsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationTlsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationTlsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `insecureSkipVerification`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutIntegrationTlsConfig.property.insecureSkipVerification"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesPutMethod <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutMethod(__scope: Construct, __resources: string[], __input: ApiGatewayPutMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeyRequired`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.authorizerId"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.httpMethod"></a>

- *Type:* `string`

---

##### `methodIntegration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.methodIntegration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration)

---

##### `methodResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.methodResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodResponse`](#aws-cdk-sdk.apigateway.ApiGatewayMethodResponse)}

---

##### `operationName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.requestParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

##### `requestValidatorId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethod.property.requestValidatorId"></a>

- *Type:* `string`

---


### APIGatewayResponsesPutMethodMethodIntegration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutMethodMethodIntegration(__scope: Construct, __resources: string[], __input: ApiGatewayPutMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `cacheKeyParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.cacheKeyParameters"></a>

- *Type:* `string`[]

---

##### `cacheNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.cacheNamespace"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandling`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.contentHandling"></a>

- *Type:* `string`

---

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.credentials"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.httpMethod"></a>

- *Type:* `string`

---

##### `integrationResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.integrationResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse`](#aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse)}

---

##### `passthroughBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegrationTlsConfig`](#aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegrationTlsConfig)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.type"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegration.property.uri"></a>

- *Type:* `string`

---


### APIGatewayResponsesPutMethodMethodIntegrationTlsConfig <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegrationTlsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegrationTlsConfig.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutMethodMethodIntegrationTlsConfig(__scope: Construct, __resources: string[], __input: ApiGatewayPutMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegrationTlsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegrationTlsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegrationTlsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `insecureSkipVerification`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodMethodIntegrationTlsConfig.property.insecureSkipVerification"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesPutMethodResponse <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodResponse.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutMethodResponse(__scope: Construct, __resources: string[], __input: ApiGatewayPutMethodResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutMethodResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `responseModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutMethodResponse.property.statusCode"></a>

- *Type:* `string`

---


### APIGatewayResponsesPutRestApi <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutRestApi(__scope: Construct, __resources: string[], __input: ApiGatewayPutRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.apiKeySource"></a>

- *Type:* `string`

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.binaryMediaTypes"></a>

- *Type:* `string`[]

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `endpointConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.id"></a>

- *Type:* `string`

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.minimumCompressionSize"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.policy"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApi.property.warnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesPutRestApiEndpointConfiguration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayPutRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayPutRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesPutRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesTestInvokeAuthorizer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesTestInvokeAuthorizer(__scope: Construct, __resources: string[], __input: ApiGatewayTestInvokeAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest`](#aws-cdk-sdk.apigateway.ApiGatewayTestInvokeAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorization`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.property.authorization"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `claims`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.property.claims"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `clientStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.property.clientStatus"></a>

- *Type:* `number`

---

##### `latency`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.property.latency"></a>

- *Type:* `number`

---

##### `log`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.property.log"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.property.policy"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeAuthorizer.property.principalId"></a>

- *Type:* `string`

---


### APIGatewayResponsesTestInvokeMethod <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesTestInvokeMethod(__scope: Construct, __resources: string[], __input: ApiGatewayTestInvokeMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayTestInvokeMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.property.body"></a>

- *Type:* `string`

---

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.property.headers"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `latency`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.property.latency"></a>

- *Type:* `number`

---

##### `log`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.property.log"></a>

- *Type:* `string`

---

##### `multiValueHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.property.multiValueHeaders"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesTestInvokeMethod.property.status"></a>

- *Type:* `number`

---


### APIGatewayResponsesUpdateAccount <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccount"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccount.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateAccount(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateAccountRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccount.property.apiKeyVersion"></a>

- *Type:* `string`

---

##### `cloudwatchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccount.property.cloudwatchRoleArn"></a>

- *Type:* `string`

---

##### `features`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccount.property.features"></a>

- *Type:* `string`[]

---

##### `throttleSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccount.property.throttleSettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccountThrottleSettings`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccountThrottleSettings)

---


### APIGatewayResponsesUpdateAccountThrottleSettings <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccountThrottleSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccountThrottleSettings.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateAccountThrottleSettings(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccountThrottleSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccountThrottleSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccountThrottleSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateAccountRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `burstLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccountThrottleSettings.property.burstLimit"></a>

- *Type:* `number`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAccountThrottleSettings.property.rateLimit"></a>

- *Type:* `number`

---


### APIGatewayResponsesUpdateApiKey <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateApiKey(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateApiKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateApiKeyRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateApiKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.createdDate"></a>

- *Type:* `string`

---

##### `customerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.customerId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.enabled"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.name"></a>

- *Type:* `string`

---

##### `stageKeys`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.stageKeys"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateApiKey.property.value"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateAuthorizer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateAuthorizer(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateAuthorizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateAuthorizerRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateAuthorizerRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizerCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.authorizerCredentials"></a>

- *Type:* `string`

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.authorizerResultTtlInSeconds"></a>

- *Type:* `number`

---

##### `authorizerUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.authorizerUri"></a>

- *Type:* `string`

---

##### `authType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.authType"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.id"></a>

- *Type:* `string`

---

##### `identitySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.identitySource"></a>

- *Type:* `string`

---

##### `identityValidationExpression`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.identityValidationExpression"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.name"></a>

- *Type:* `string`

---

##### `providerArNs`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.providerArNs"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateAuthorizer.property.type"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateBasePathMapping <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateBasePathMapping"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateBasePathMapping.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateBasePathMapping(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateBasePathMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateBasePathMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateBasePathMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateBasePathMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateBasePathMappingRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateBasePathMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `basePath`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateBasePathMapping.property.basePath"></a>

- *Type:* `string`

---

##### `restApiId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateBasePathMapping.property.restApiId"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateBasePathMapping.property.stage"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateClientCertificate <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateClientCertificate(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateClientCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateClientCertificateRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateClientCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.property.expirationDate"></a>

- *Type:* `string`

---

##### `pemEncodedCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.property.pemEncodedCertificate"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateClientCertificate.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### APIGatewayResponsesUpdateDeployment <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDeployment.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateDeployment(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDeploymentRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `apiSummary`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDeployment.property.apiSummary"></a>

- *Type:* {[ key: string ]: {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot`](#aws-cdk-sdk.apigateway.ApiGatewayMethodSnapshot)}}

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDeployment.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDeployment.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDeployment.property.id"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateDocumentationPart <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPart"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPart.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateDocumentationPart(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateDocumentationPartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPart.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPart.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPart.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPart.property.id"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPart.property.location"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation)

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPart.property.properties"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateDocumentationPartLocation <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateDocumentationPartLocation(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateDocumentationPartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationPartRequest)

---



#### Properties <a name="Properties"></a>

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation.property.method"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation.property.name"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation.property.path"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation.property.statusCode"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationPartLocation.property.type"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateDocumentationVersion <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationVersion.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateDocumentationVersion(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateDocumentationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationVersionRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDocumentationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationVersion.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationVersion.property.description"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDocumentationVersion.property.version"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateDomainName <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateDomainName(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.certificateName"></a>

- *Type:* `string`

---

##### `certificateUploadDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.certificateUploadDate"></a>

- *Type:* `string`

---

##### `distributionDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.distributionDomainName"></a>

- *Type:* `string`

---

##### `distributionHostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.distributionHostedZoneId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.domainName"></a>

- *Type:* `string`

---

##### `domainNameStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.domainNameStatus"></a>

- *Type:* `string`

---

##### `domainNameStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.domainNameStatusMessage"></a>

- *Type:* `string`

---

##### `endpointConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration)

---

##### `mutualTlsAuthentication`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.mutualTlsAuthentication"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication)

---

##### `regionalCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.regionalCertificateArn"></a>

- *Type:* `string`

---

##### `regionalCertificateName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.regionalCertificateName"></a>

- *Type:* `string`

---

##### `regionalDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.regionalDomainName"></a>

- *Type:* `string`

---

##### `regionalHostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.regionalHostedZoneId"></a>

- *Type:* `string`

---

##### `securityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.securityPolicy"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainName.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### APIGatewayResponsesUpdateDomainNameEndpointConfiguration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameEndpointConfiguration.property.vpcEndpointIds"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateDomainNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateDomainNameRequest)

---



#### Properties <a name="Properties"></a>

##### `truststoreUri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

- *Type:* `string`

---

##### `truststoreVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

- *Type:* `string`

---

##### `truststoreWarnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication.property.truststoreWarnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesUpdateGatewayResponse <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateGatewayResponse(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateGatewayResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateGatewayResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateGatewayResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultResponse`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse.property.defaultResponse"></a>

- *Type:* `boolean`

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse.property.responseType"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateGatewayResponse.property.statusCode"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateIntegration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateIntegration(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `cacheKeyParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.cacheKeyParameters"></a>

- *Type:* `string`[]

---

##### `cacheNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.cacheNamespace"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandling`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.contentHandling"></a>

- *Type:* `string`

---

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.credentials"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.httpMethod"></a>

- *Type:* `string`

---

##### `integrationResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.integrationResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse`](#aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse)}

---

##### `passthroughBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationTlsConfig`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationTlsConfig)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.type"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegration.property.uri"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateIntegrationResponse <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateIntegrationResponse(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateIntegrationResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `contentHandling`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse.property.contentHandling"></a>

- *Type:* `string`

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse.property.responseTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `selectionPattern`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse.property.selectionPattern"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationResponse.property.statusCode"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateIntegrationTlsConfig <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationTlsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationTlsConfig.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateIntegrationTlsConfig(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateIntegrationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationTlsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationTlsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationTlsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateIntegrationRequest)

---



#### Properties <a name="Properties"></a>

##### `insecureSkipVerification`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateIntegrationTlsConfig.property.insecureSkipVerification"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesUpdateMethod <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateMethod(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeyRequired`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.apiKeyRequired"></a>

- *Type:* `boolean`

---

##### `authorizationScopes`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.authorizationScopes"></a>

- *Type:* `string`[]

---

##### `authorizationType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.authorizationType"></a>

- *Type:* `string`

---

##### `authorizerId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.authorizerId"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.httpMethod"></a>

- *Type:* `string`

---

##### `methodIntegration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.methodIntegration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration)

---

##### `methodResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.methodResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodResponse`](#aws-cdk-sdk.apigateway.ApiGatewayMethodResponse)}

---

##### `operationName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.operationName"></a>

- *Type:* `string`

---

##### `requestModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.requestModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.requestParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

##### `requestValidatorId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethod.property.requestValidatorId"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateMethodMethodIntegration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateMethodMethodIntegration(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `cacheKeyParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.cacheKeyParameters"></a>

- *Type:* `string`[]

---

##### `cacheNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.cacheNamespace"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.connectionType"></a>

- *Type:* `string`

---

##### `contentHandling`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.contentHandling"></a>

- *Type:* `string`

---

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.credentials"></a>

- *Type:* `string`

---

##### `httpMethod`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.httpMethod"></a>

- *Type:* `string`

---

##### `integrationResponses`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.integrationResponses"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse`](#aws-cdk-sdk.apigateway.ApiGatewayIntegrationResponse)}

---

##### `passthroughBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.passthroughBehavior"></a>

- *Type:* `string`

---

##### `requestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.requestParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.requestTemplates"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.timeoutInMillis"></a>

- *Type:* `number`

---

##### `tlsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.tlsConfig"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.type"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegration.property.uri"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `insecureSkipVerification`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig.property.insecureSkipVerification"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesUpdateMethodResponse <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodResponse"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodResponse.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateMethodResponse(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateMethodResponseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodResponse.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodResponse.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodResponse.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateMethodResponseRequest)

---



#### Properties <a name="Properties"></a>

##### `responseModels`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodResponse.property.responseModels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `responseParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodResponse.property.responseParameters"></a>

- *Type:* {[ key: string ]: `boolean`}

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateMethodResponse.property.statusCode"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateModel <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateModel(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateModelRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateModelRequest)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateModel.property.schema"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateRequestValidator <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRequestValidator"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRequestValidator.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateRequestValidator(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateRequestValidatorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRequestValidator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRequestValidator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRequestValidator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateRequestValidatorRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateRequestValidatorRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRequestValidator.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRequestValidator.property.name"></a>

- *Type:* `string`

---

##### `validateRequestBody`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRequestValidator.property.validateRequestBody"></a>

- *Type:* `boolean`

---

##### `validateRequestParameters`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRequestValidator.property.validateRequestParameters"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesUpdateResource <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateResource(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateResourceRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource.property.id"></a>

- *Type:* `string`

---

##### `parentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource.property.parentId"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource.property.path"></a>

- *Type:* `string`

---

##### `pathPart`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource.property.pathPart"></a>

- *Type:* `string`

---

##### `resourceMethods`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateResource.property.resourceMethods"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethod`](#aws-cdk-sdk.apigateway.ApiGatewayMethod)}

---


### APIGatewayResponsesUpdateRestApi <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateRestApi(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `apiKeySource`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.apiKeySource"></a>

- *Type:* `string`

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.binaryMediaTypes"></a>

- *Type:* `string`[]

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.description"></a>

- *Type:* `string`

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.disableExecuteApiEndpoint"></a>

- *Type:* `boolean`

---

##### `endpointConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.id"></a>

- *Type:* `string`

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.minimumCompressionSize"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.policy"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.version"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApi.property.warnings"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesUpdateRestApiEndpointConfiguration <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateRestApiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateRestApiRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateRestApiRequest)

---



#### Properties <a name="Properties"></a>

##### `types`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration.property.types"></a>

- *Type:* `string`[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

- *Type:* `string`[]

---


### APIGatewayResponsesUpdateStage <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateStage(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `accessLogSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.accessLogSettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageAccessLogSettings`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageAccessLogSettings)

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.cacheClusterEnabled"></a>

- *Type:* `boolean`

---

##### `cacheClusterSize`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.cacheClusterSize"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `canarySettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.canarySettings"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings)

---

##### `clientCertificateId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.clientCertificateId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.createdDate"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.deploymentId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.description"></a>

- *Type:* `string`

---

##### `documentationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.documentationVersion"></a>

- *Type:* `string`

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.lastUpdatedDate"></a>

- *Type:* `string`

---

##### `methodSettings`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.methodSettings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.apigateway.ApiGatewayMethodSetting`](#aws-cdk-sdk.apigateway.ApiGatewayMethodSetting)}

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.stageName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tracingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.tracingEnabled"></a>

- *Type:* `boolean`

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStage.property.webAclArn"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateStageAccessLogSettings <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageAccessLogSettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageAccessLogSettings.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateStageAccessLogSettings(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageAccessLogSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageAccessLogSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageAccessLogSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageAccessLogSettings.property.destinationArn"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageAccessLogSettings.property.format"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateStageCanarySettings <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateStageCanarySettings(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateStageRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings.property.deploymentId"></a>

- *Type:* `string`

---

##### `percentTraffic`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings.property.percentTraffic"></a>

- *Type:* `number`

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings.property.stageVariableOverrides"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `useStageCache`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateStageCanarySettings.property.useStageCache"></a>

- *Type:* `boolean`

---


### APIGatewayResponsesUpdateUsage <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateUsage(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateUsageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateUsageRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateUsageRequest)

---



#### Properties <a name="Properties"></a>

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage.property.endDate"></a>

- *Type:* `string`

---

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage.property.items"></a>

- *Type:* {[ key: string ]: `number`[][]}

---

##### `position`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage.property.position"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage.property.startDate"></a>

- *Type:* `string`

---

##### `usagePlanId`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsage.property.usagePlanId"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateUsagePlan <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateUsagePlan(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateUsagePlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest)

---



#### Properties <a name="Properties"></a>

##### `apiStages`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.property.apiStages"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayApiStage`](#aws-cdk-sdk.apigateway.ApiGatewayApiStage)[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.property.name"></a>

- *Type:* `string`

---

##### `productCode`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.property.productCode"></a>

- *Type:* `string`

---

##### `quota`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.property.quota"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `throttle`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlan.property.throttle"></a>

- *Type:* [`aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanThrottle`](#aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanThrottle)

---


### APIGatewayResponsesUpdateUsagePlanQuota <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateUsagePlanQuota(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateUsagePlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest)

---



#### Properties <a name="Properties"></a>

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota.property.limit"></a>

- *Type:* `number`

---

##### `offset`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota.property.offset"></a>

- *Type:* `number`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanQuota.property.period"></a>

- *Type:* `string`

---


### APIGatewayResponsesUpdateUsagePlanThrottle <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanThrottle"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanThrottle.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateUsagePlanThrottle(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateUsagePlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanThrottle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanThrottle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanThrottle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateUsagePlanRequest)

---



#### Properties <a name="Properties"></a>

##### `burstLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanThrottle.property.burstLimit"></a>

- *Type:* `number`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateUsagePlanThrottle.property.rateLimit"></a>

- *Type:* `number`

---


### APIGatewayResponsesUpdateVpcLink <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink"></a>

#### Initializer <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.Initializer"></a>

```typescript
import { apigateway } from 'aws-cdk-sdk'

new apigateway.APIGatewayResponsesUpdateVpcLink(__scope: Construct, __resources: string[], __input: ApiGatewayUpdateVpcLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigateway.ApiGatewayUpdateVpcLinkRequest`](#aws-cdk-sdk.apigateway.ApiGatewayUpdateVpcLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targetArns`<sup>Required</sup> <a name="aws-cdk-sdk.apigateway.APIGatewayResponsesUpdateVpcLink.property.targetArns"></a>

- *Type:* `string`[]

---



