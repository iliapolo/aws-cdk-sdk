import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ApiGatewayClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApiKey(input: shapes.ApiGatewayCreateApiKeyRequest): APIGatewayCreateApiKey {
    return new APIGatewayCreateApiKey(this, 'CreateApiKey', this.__resources, input);
  }

  public createAuthorizer(input: shapes.ApiGatewayCreateAuthorizerRequest): APIGatewayCreateAuthorizer {
    return new APIGatewayCreateAuthorizer(this, 'CreateAuthorizer', this.__resources, input);
  }

  public createBasePathMapping(input: shapes.ApiGatewayCreateBasePathMappingRequest): APIGatewayCreateBasePathMapping {
    return new APIGatewayCreateBasePathMapping(this, 'CreateBasePathMapping', this.__resources, input);
  }

  public createDeployment(input: shapes.ApiGatewayCreateDeploymentRequest): APIGatewayCreateDeployment {
    return new APIGatewayCreateDeployment(this, 'CreateDeployment', this.__resources, input);
  }

  public createDocumentationPart(input: shapes.ApiGatewayCreateDocumentationPartRequest): APIGatewayCreateDocumentationPart {
    return new APIGatewayCreateDocumentationPart(this, 'CreateDocumentationPart', this.__resources, input);
  }

  public createDocumentationVersion(input: shapes.ApiGatewayCreateDocumentationVersionRequest): APIGatewayCreateDocumentationVersion {
    return new APIGatewayCreateDocumentationVersion(this, 'CreateDocumentationVersion', this.__resources, input);
  }

  public createDomainName(input: shapes.ApiGatewayCreateDomainNameRequest): APIGatewayCreateDomainName {
    return new APIGatewayCreateDomainName(this, 'CreateDomainName', this.__resources, input);
  }

  public createModel(input: shapes.ApiGatewayCreateModelRequest): APIGatewayCreateModel {
    return new APIGatewayCreateModel(this, 'CreateModel', this.__resources, input);
  }

  public createRequestValidator(input: shapes.ApiGatewayCreateRequestValidatorRequest): APIGatewayCreateRequestValidator {
    return new APIGatewayCreateRequestValidator(this, 'CreateRequestValidator', this.__resources, input);
  }

  public createResource(input: shapes.ApiGatewayCreateResourceRequest): APIGatewayCreateResource {
    return new APIGatewayCreateResource(this, 'CreateResource', this.__resources, input);
  }

  public createRestApi(input: shapes.ApiGatewayCreateRestApiRequest): APIGatewayCreateRestApi {
    return new APIGatewayCreateRestApi(this, 'CreateRestApi', this.__resources, input);
  }

  public createStage(input: shapes.ApiGatewayCreateStageRequest): APIGatewayCreateStage {
    return new APIGatewayCreateStage(this, 'CreateStage', this.__resources, input);
  }

  public createUsagePlan(input: shapes.ApiGatewayCreateUsagePlanRequest): APIGatewayCreateUsagePlan {
    return new APIGatewayCreateUsagePlan(this, 'CreateUsagePlan', this.__resources, input);
  }

  public createUsagePlanKey(input: shapes.ApiGatewayCreateUsagePlanKeyRequest): APIGatewayCreateUsagePlanKey {
    return new APIGatewayCreateUsagePlanKey(this, 'CreateUsagePlanKey', this.__resources, input);
  }

  public createVpcLink(input: shapes.ApiGatewayCreateVpcLinkRequest): APIGatewayCreateVpcLink {
    return new APIGatewayCreateVpcLink(this, 'CreateVpcLink', this.__resources, input);
  }

  public deleteApiKey(input: shapes.ApiGatewayDeleteApiKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteApiKey'),
        parameters: {
          apiKey: input.apiKey,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApiKey', props);
  }

  public deleteAuthorizer(input: shapes.ApiGatewayDeleteAuthorizerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteAuthorizer'),
        parameters: {
          restApiId: input.restApiId,
          authorizerId: input.authorizerId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAuthorizer', props);
  }

  public deleteBasePathMapping(input: shapes.ApiGatewayDeleteBasePathMappingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteBasePathMapping'),
        parameters: {
          domainName: input.domainName,
          basePath: input.basePath,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBasePathMapping', props);
  }

  public deleteClientCertificate(input: shapes.ApiGatewayDeleteClientCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteClientCertificate'),
        parameters: {
          clientCertificateId: input.clientCertificateId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteClientCertificate', props);
  }

  public deleteDeployment(input: shapes.ApiGatewayDeleteDeploymentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteDeployment'),
        parameters: {
          restApiId: input.restApiId,
          deploymentId: input.deploymentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDeployment', props);
  }

  public deleteDocumentationPart(input: shapes.ApiGatewayDeleteDocumentationPartRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteDocumentationPart'),
        parameters: {
          restApiId: input.restApiId,
          documentationPartId: input.documentationPartId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDocumentationPart', props);
  }

  public deleteDocumentationVersion(input: shapes.ApiGatewayDeleteDocumentationVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteDocumentationVersion'),
        parameters: {
          restApiId: input.restApiId,
          documentationVersion: input.documentationVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDocumentationVersion', props);
  }

  public deleteDomainName(input: shapes.ApiGatewayDeleteDomainNameRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteDomainName'),
        parameters: {
          domainName: input.domainName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDomainName', props);
  }

  public deleteGatewayResponse(input: shapes.ApiGatewayDeleteGatewayResponseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteGatewayResponse'),
        parameters: {
          restApiId: input.restApiId,
          responseType: input.responseType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGatewayResponse', props);
  }

  public deleteIntegration(input: shapes.ApiGatewayDeleteIntegrationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteIntegration'),
        parameters: {
          restApiId: input.restApiId,
          resourceId: input.resourceId,
          httpMethod: input.httpMethod,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteIntegration', props);
  }

  public deleteIntegrationResponse(input: shapes.ApiGatewayDeleteIntegrationResponseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteIntegrationResponse'),
        parameters: {
          restApiId: input.restApiId,
          resourceId: input.resourceId,
          httpMethod: input.httpMethod,
          statusCode: input.statusCode,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteIntegrationResponse', props);
  }

  public deleteMethod(input: shapes.ApiGatewayDeleteMethodRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteMethod'),
        parameters: {
          restApiId: input.restApiId,
          resourceId: input.resourceId,
          httpMethod: input.httpMethod,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMethod', props);
  }

  public deleteMethodResponse(input: shapes.ApiGatewayDeleteMethodResponseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteMethodResponse'),
        parameters: {
          restApiId: input.restApiId,
          resourceId: input.resourceId,
          httpMethod: input.httpMethod,
          statusCode: input.statusCode,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMethodResponse', props);
  }

  public deleteModel(input: shapes.ApiGatewayDeleteModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteModel'),
        parameters: {
          restApiId: input.restApiId,
          modelName: input.modelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteModel', props);
  }

  public deleteRequestValidator(input: shapes.ApiGatewayDeleteRequestValidatorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteRequestValidator'),
        parameters: {
          restApiId: input.restApiId,
          requestValidatorId: input.requestValidatorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRequestValidator', props);
  }

  public deleteResource(input: shapes.ApiGatewayDeleteResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteResource'),
        parameters: {
          restApiId: input.restApiId,
          resourceId: input.resourceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResource', props);
  }

  public deleteRestApi(input: shapes.ApiGatewayDeleteRestApiRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteRestApi'),
        parameters: {
          restApiId: input.restApiId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRestApi', props);
  }

  public deleteStage(input: shapes.ApiGatewayDeleteStageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteStage'),
        parameters: {
          restApiId: input.restApiId,
          stageName: input.stageName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStage', props);
  }

  public deleteUsagePlan(input: shapes.ApiGatewayDeleteUsagePlanRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteUsagePlan'),
        parameters: {
          usagePlanId: input.usagePlanId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUsagePlan', props);
  }

  public deleteUsagePlanKey(input: shapes.ApiGatewayDeleteUsagePlanKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUsagePlanKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteUsagePlanKey'),
        parameters: {
          usagePlanId: input.usagePlanId,
          keyId: input.keyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUsagePlanKey', props);
  }

  public deleteVpcLink(input: shapes.ApiGatewayDeleteVpcLinkRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.DeleteVpcLink'),
        parameters: {
          vpcLinkId: input.vpcLinkId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVpcLink', props);
  }

  public flushStageAuthorizersCache(input: shapes.ApiGatewayFlushStageAuthorizersCacheRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'flushStageAuthorizersCache',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.FlushStageAuthorizersCache'),
        parameters: {
          restApiId: input.restApiId,
          stageName: input.stageName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'FlushStageAuthorizersCache', props);
  }

  public flushStageCache(input: shapes.ApiGatewayFlushStageCacheRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'flushStageCache',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.FlushStageCache'),
        parameters: {
          restApiId: input.restApiId,
          stageName: input.stageName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'FlushStageCache', props);
  }

  public generateClientCertificate(input: shapes.ApiGatewayGenerateClientCertificateRequest): APIGatewayGenerateClientCertificate {
    return new APIGatewayGenerateClientCertificate(this, 'GenerateClientCertificate', this.__resources, input);
  }

  public fetchAccount(): APIGatewayFetchAccount {
    return new APIGatewayFetchAccount(this, 'FetchAccount', this.__resources);
  }

  public fetchApiKey(input: shapes.ApiGatewayGetApiKeyRequest): APIGatewayFetchApiKey {
    return new APIGatewayFetchApiKey(this, 'FetchApiKey', this.__resources, input);
  }

  public fetchApiKeys(input: shapes.ApiGatewayGetApiKeysRequest): APIGatewayFetchApiKeys {
    return new APIGatewayFetchApiKeys(this, 'FetchApiKeys', this.__resources, input);
  }

  public fetchAuthorizer(input: shapes.ApiGatewayGetAuthorizerRequest): APIGatewayFetchAuthorizer {
    return new APIGatewayFetchAuthorizer(this, 'FetchAuthorizer', this.__resources, input);
  }

  public fetchAuthorizers(input: shapes.ApiGatewayGetAuthorizersRequest): APIGatewayFetchAuthorizers {
    return new APIGatewayFetchAuthorizers(this, 'FetchAuthorizers', this.__resources, input);
  }

  public fetchBasePathMapping(input: shapes.ApiGatewayGetBasePathMappingRequest): APIGatewayFetchBasePathMapping {
    return new APIGatewayFetchBasePathMapping(this, 'FetchBasePathMapping', this.__resources, input);
  }

  public fetchBasePathMappings(input: shapes.ApiGatewayGetBasePathMappingsRequest): APIGatewayFetchBasePathMappings {
    return new APIGatewayFetchBasePathMappings(this, 'FetchBasePathMappings', this.__resources, input);
  }

  public fetchClientCertificate(input: shapes.ApiGatewayGetClientCertificateRequest): APIGatewayFetchClientCertificate {
    return new APIGatewayFetchClientCertificate(this, 'FetchClientCertificate', this.__resources, input);
  }

  public fetchClientCertificates(input: shapes.ApiGatewayGetClientCertificatesRequest): APIGatewayFetchClientCertificates {
    return new APIGatewayFetchClientCertificates(this, 'FetchClientCertificates', this.__resources, input);
  }

  public fetchDeployment(input: shapes.ApiGatewayGetDeploymentRequest): APIGatewayFetchDeployment {
    return new APIGatewayFetchDeployment(this, 'FetchDeployment', this.__resources, input);
  }

  public fetchDeployments(input: shapes.ApiGatewayGetDeploymentsRequest): APIGatewayFetchDeployments {
    return new APIGatewayFetchDeployments(this, 'FetchDeployments', this.__resources, input);
  }

  public fetchDocumentationPart(input: shapes.ApiGatewayGetDocumentationPartRequest): APIGatewayFetchDocumentationPart {
    return new APIGatewayFetchDocumentationPart(this, 'FetchDocumentationPart', this.__resources, input);
  }

  public fetchDocumentationParts(input: shapes.ApiGatewayGetDocumentationPartsRequest): APIGatewayFetchDocumentationParts {
    return new APIGatewayFetchDocumentationParts(this, 'FetchDocumentationParts', this.__resources, input);
  }

  public fetchDocumentationVersion(input: shapes.ApiGatewayGetDocumentationVersionRequest): APIGatewayFetchDocumentationVersion {
    return new APIGatewayFetchDocumentationVersion(this, 'FetchDocumentationVersion', this.__resources, input);
  }

  public fetchDocumentationVersions(input: shapes.ApiGatewayGetDocumentationVersionsRequest): APIGatewayFetchDocumentationVersions {
    return new APIGatewayFetchDocumentationVersions(this, 'FetchDocumentationVersions', this.__resources, input);
  }

  public fetchDomainName(input: shapes.ApiGatewayGetDomainNameRequest): APIGatewayFetchDomainName {
    return new APIGatewayFetchDomainName(this, 'FetchDomainName', this.__resources, input);
  }

  public fetchDomainNames(input: shapes.ApiGatewayGetDomainNamesRequest): APIGatewayFetchDomainNames {
    return new APIGatewayFetchDomainNames(this, 'FetchDomainNames', this.__resources, input);
  }

  public fetchExport(input: shapes.ApiGatewayGetExportRequest): APIGatewayFetchExport {
    return new APIGatewayFetchExport(this, 'FetchExport', this.__resources, input);
  }

  public fetchGatewayResponse(input: shapes.ApiGatewayGetGatewayResponseRequest): APIGatewayFetchGatewayResponse {
    return new APIGatewayFetchGatewayResponse(this, 'FetchGatewayResponse', this.__resources, input);
  }

  public fetchGatewayResponses(input: shapes.ApiGatewayGetGatewayResponsesRequest): APIGatewayFetchGatewayResponses {
    return new APIGatewayFetchGatewayResponses(this, 'FetchGatewayResponses', this.__resources, input);
  }

  public fetchIntegration(input: shapes.ApiGatewayGetIntegrationRequest): APIGatewayFetchIntegration {
    return new APIGatewayFetchIntegration(this, 'FetchIntegration', this.__resources, input);
  }

  public fetchIntegrationResponse(input: shapes.ApiGatewayGetIntegrationResponseRequest): APIGatewayFetchIntegrationResponse {
    return new APIGatewayFetchIntegrationResponse(this, 'FetchIntegrationResponse', this.__resources, input);
  }

  public fetchMethod(input: shapes.ApiGatewayGetMethodRequest): APIGatewayFetchMethod {
    return new APIGatewayFetchMethod(this, 'FetchMethod', this.__resources, input);
  }

  public fetchMethodResponse(input: shapes.ApiGatewayGetMethodResponseRequest): APIGatewayFetchMethodResponse {
    return new APIGatewayFetchMethodResponse(this, 'FetchMethodResponse', this.__resources, input);
  }

  public fetchModel(input: shapes.ApiGatewayGetModelRequest): APIGatewayFetchModel {
    return new APIGatewayFetchModel(this, 'FetchModel', this.__resources, input);
  }

  public fetchModelTemplate(input: shapes.ApiGatewayGetModelTemplateRequest): APIGatewayFetchModelTemplate {
    return new APIGatewayFetchModelTemplate(this, 'FetchModelTemplate', this.__resources, input);
  }

  public fetchModels(input: shapes.ApiGatewayGetModelsRequest): APIGatewayFetchModels {
    return new APIGatewayFetchModels(this, 'FetchModels', this.__resources, input);
  }

  public fetchRequestValidator(input: shapes.ApiGatewayGetRequestValidatorRequest): APIGatewayFetchRequestValidator {
    return new APIGatewayFetchRequestValidator(this, 'FetchRequestValidator', this.__resources, input);
  }

  public fetchRequestValidators(input: shapes.ApiGatewayGetRequestValidatorsRequest): APIGatewayFetchRequestValidators {
    return new APIGatewayFetchRequestValidators(this, 'FetchRequestValidators', this.__resources, input);
  }

  public fetchResource(input: shapes.ApiGatewayGetResourceRequest): APIGatewayFetchResource {
    return new APIGatewayFetchResource(this, 'FetchResource', this.__resources, input);
  }

  public fetchResources(input: shapes.ApiGatewayGetResourcesRequest): APIGatewayFetchResources {
    return new APIGatewayFetchResources(this, 'FetchResources', this.__resources, input);
  }

  public fetchRestApi(input: shapes.ApiGatewayGetRestApiRequest): APIGatewayFetchRestApi {
    return new APIGatewayFetchRestApi(this, 'FetchRestApi', this.__resources, input);
  }

  public fetchRestApis(input: shapes.ApiGatewayGetRestApisRequest): APIGatewayFetchRestApis {
    return new APIGatewayFetchRestApis(this, 'FetchRestApis', this.__resources, input);
  }

  public fetchSdk(input: shapes.ApiGatewayGetSdkRequest): APIGatewayFetchSdk {
    return new APIGatewayFetchSdk(this, 'FetchSdk', this.__resources, input);
  }

  public fetchSdkType(input: shapes.ApiGatewayGetSdkTypeRequest): APIGatewayFetchSdkType {
    return new APIGatewayFetchSdkType(this, 'FetchSdkType', this.__resources, input);
  }

  public fetchSdkTypes(input: shapes.ApiGatewayGetSdkTypesRequest): APIGatewayFetchSdkTypes {
    return new APIGatewayFetchSdkTypes(this, 'FetchSdkTypes', this.__resources, input);
  }

  public fetchStage(input: shapes.ApiGatewayGetStageRequest): APIGatewayFetchStage {
    return new APIGatewayFetchStage(this, 'FetchStage', this.__resources, input);
  }

  public fetchStages(input: shapes.ApiGatewayGetStagesRequest): APIGatewayFetchStages {
    return new APIGatewayFetchStages(this, 'FetchStages', this.__resources, input);
  }

  public fetchTags(input: shapes.ApiGatewayGetTagsRequest): APIGatewayFetchTags {
    return new APIGatewayFetchTags(this, 'FetchTags', this.__resources, input);
  }

  public fetchUsage(input: shapes.ApiGatewayGetUsageRequest): APIGatewayFetchUsage {
    return new APIGatewayFetchUsage(this, 'FetchUsage', this.__resources, input);
  }

  public fetchUsagePlan(input: shapes.ApiGatewayGetUsagePlanRequest): APIGatewayFetchUsagePlan {
    return new APIGatewayFetchUsagePlan(this, 'FetchUsagePlan', this.__resources, input);
  }

  public fetchUsagePlanKey(input: shapes.ApiGatewayGetUsagePlanKeyRequest): APIGatewayFetchUsagePlanKey {
    return new APIGatewayFetchUsagePlanKey(this, 'FetchUsagePlanKey', this.__resources, input);
  }

  public fetchUsagePlanKeys(input: shapes.ApiGatewayGetUsagePlanKeysRequest): APIGatewayFetchUsagePlanKeys {
    return new APIGatewayFetchUsagePlanKeys(this, 'FetchUsagePlanKeys', this.__resources, input);
  }

  public fetchUsagePlans(input: shapes.ApiGatewayGetUsagePlansRequest): APIGatewayFetchUsagePlans {
    return new APIGatewayFetchUsagePlans(this, 'FetchUsagePlans', this.__resources, input);
  }

  public fetchVpcLink(input: shapes.ApiGatewayGetVpcLinkRequest): APIGatewayFetchVpcLink {
    return new APIGatewayFetchVpcLink(this, 'FetchVpcLink', this.__resources, input);
  }

  public fetchVpcLinks(input: shapes.ApiGatewayGetVpcLinksRequest): APIGatewayFetchVpcLinks {
    return new APIGatewayFetchVpcLinks(this, 'FetchVpcLinks', this.__resources, input);
  }

  public importApiKeys(input: shapes.ApiGatewayImportApiKeysRequest): APIGatewayImportApiKeys {
    return new APIGatewayImportApiKeys(this, 'ImportApiKeys', this.__resources, input);
  }

  public importDocumentationParts(input: shapes.ApiGatewayImportDocumentationPartsRequest): APIGatewayImportDocumentationParts {
    return new APIGatewayImportDocumentationParts(this, 'ImportDocumentationParts', this.__resources, input);
  }

  public importRestApi(input: shapes.ApiGatewayImportRestApiRequest): APIGatewayImportRestApi {
    return new APIGatewayImportRestApi(this, 'ImportRestApi', this.__resources, input);
  }

  public putGatewayResponse(input: shapes.ApiGatewayPutGatewayResponseRequest): APIGatewayPutGatewayResponse {
    return new APIGatewayPutGatewayResponse(this, 'PutGatewayResponse', this.__resources, input);
  }

  public putIntegration(input: shapes.ApiGatewayPutIntegrationRequest): APIGatewayPutIntegration {
    return new APIGatewayPutIntegration(this, 'PutIntegration', this.__resources, input);
  }

  public putIntegrationResponse(input: shapes.ApiGatewayPutIntegrationResponseRequest): APIGatewayPutIntegrationResponse {
    return new APIGatewayPutIntegrationResponse(this, 'PutIntegrationResponse', this.__resources, input);
  }

  public putMethod(input: shapes.ApiGatewayPutMethodRequest): APIGatewayPutMethod {
    return new APIGatewayPutMethod(this, 'PutMethod', this.__resources, input);
  }

  public putMethodResponse(input: shapes.ApiGatewayPutMethodResponseRequest): APIGatewayPutMethodResponse {
    return new APIGatewayPutMethodResponse(this, 'PutMethodResponse', this.__resources, input);
  }

  public putRestApi(input: shapes.ApiGatewayPutRestApiRequest): APIGatewayPutRestApi {
    return new APIGatewayPutRestApi(this, 'PutRestApi', this.__resources, input);
  }

  public tagResource(input: shapes.ApiGatewayTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public testInvokeAuthorizer(input: shapes.ApiGatewayTestInvokeAuthorizerRequest): APIGatewayTestInvokeAuthorizer {
    return new APIGatewayTestInvokeAuthorizer(this, 'TestInvokeAuthorizer', this.__resources, input);
  }

  public testInvokeMethod(input: shapes.ApiGatewayTestInvokeMethodRequest): APIGatewayTestInvokeMethod {
    return new APIGatewayTestInvokeMethod(this, 'TestInvokeMethod', this.__resources, input);
  }

  public untagResource(input: shapes.ApiGatewayUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAccount(input: shapes.ApiGatewayUpdateAccountRequest): APIGatewayUpdateAccount {
    return new APIGatewayUpdateAccount(this, 'UpdateAccount', this.__resources, input);
  }

  public updateApiKey(input: shapes.ApiGatewayUpdateApiKeyRequest): APIGatewayUpdateApiKey {
    return new APIGatewayUpdateApiKey(this, 'UpdateApiKey', this.__resources, input);
  }

  public updateAuthorizer(input: shapes.ApiGatewayUpdateAuthorizerRequest): APIGatewayUpdateAuthorizer {
    return new APIGatewayUpdateAuthorizer(this, 'UpdateAuthorizer', this.__resources, input);
  }

  public updateBasePathMapping(input: shapes.ApiGatewayUpdateBasePathMappingRequest): APIGatewayUpdateBasePathMapping {
    return new APIGatewayUpdateBasePathMapping(this, 'UpdateBasePathMapping', this.__resources, input);
  }

  public updateClientCertificate(input: shapes.ApiGatewayUpdateClientCertificateRequest): APIGatewayUpdateClientCertificate {
    return new APIGatewayUpdateClientCertificate(this, 'UpdateClientCertificate', this.__resources, input);
  }

  public updateDeployment(input: shapes.ApiGatewayUpdateDeploymentRequest): APIGatewayUpdateDeployment {
    return new APIGatewayUpdateDeployment(this, 'UpdateDeployment', this.__resources, input);
  }

  public updateDocumentationPart(input: shapes.ApiGatewayUpdateDocumentationPartRequest): APIGatewayUpdateDocumentationPart {
    return new APIGatewayUpdateDocumentationPart(this, 'UpdateDocumentationPart', this.__resources, input);
  }

  public updateDocumentationVersion(input: shapes.ApiGatewayUpdateDocumentationVersionRequest): APIGatewayUpdateDocumentationVersion {
    return new APIGatewayUpdateDocumentationVersion(this, 'UpdateDocumentationVersion', this.__resources, input);
  }

  public updateDomainName(input: shapes.ApiGatewayUpdateDomainNameRequest): APIGatewayUpdateDomainName {
    return new APIGatewayUpdateDomainName(this, 'UpdateDomainName', this.__resources, input);
  }

  public updateGatewayResponse(input: shapes.ApiGatewayUpdateGatewayResponseRequest): APIGatewayUpdateGatewayResponse {
    return new APIGatewayUpdateGatewayResponse(this, 'UpdateGatewayResponse', this.__resources, input);
  }

  public updateIntegration(input: shapes.ApiGatewayUpdateIntegrationRequest): APIGatewayUpdateIntegration {
    return new APIGatewayUpdateIntegration(this, 'UpdateIntegration', this.__resources, input);
  }

  public updateIntegrationResponse(input: shapes.ApiGatewayUpdateIntegrationResponseRequest): APIGatewayUpdateIntegrationResponse {
    return new APIGatewayUpdateIntegrationResponse(this, 'UpdateIntegrationResponse', this.__resources, input);
  }

  public updateMethod(input: shapes.ApiGatewayUpdateMethodRequest): APIGatewayUpdateMethod {
    return new APIGatewayUpdateMethod(this, 'UpdateMethod', this.__resources, input);
  }

  public updateMethodResponse(input: shapes.ApiGatewayUpdateMethodResponseRequest): APIGatewayUpdateMethodResponse {
    return new APIGatewayUpdateMethodResponse(this, 'UpdateMethodResponse', this.__resources, input);
  }

  public updateModel(input: shapes.ApiGatewayUpdateModelRequest): APIGatewayUpdateModel {
    return new APIGatewayUpdateModel(this, 'UpdateModel', this.__resources, input);
  }

  public updateRequestValidator(input: shapes.ApiGatewayUpdateRequestValidatorRequest): APIGatewayUpdateRequestValidator {
    return new APIGatewayUpdateRequestValidator(this, 'UpdateRequestValidator', this.__resources, input);
  }

  public updateResource(input: shapes.ApiGatewayUpdateResourceRequest): APIGatewayUpdateResource {
    return new APIGatewayUpdateResource(this, 'UpdateResource', this.__resources, input);
  }

  public updateRestApi(input: shapes.ApiGatewayUpdateRestApiRequest): APIGatewayUpdateRestApi {
    return new APIGatewayUpdateRestApi(this, 'UpdateRestApi', this.__resources, input);
  }

  public updateStage(input: shapes.ApiGatewayUpdateStageRequest): APIGatewayUpdateStage {
    return new APIGatewayUpdateStage(this, 'UpdateStage', this.__resources, input);
  }

  public updateUsage(input: shapes.ApiGatewayUpdateUsageRequest): APIGatewayUpdateUsage {
    return new APIGatewayUpdateUsage(this, 'UpdateUsage', this.__resources, input);
  }

  public updateUsagePlan(input: shapes.ApiGatewayUpdateUsagePlanRequest): APIGatewayUpdateUsagePlan {
    return new APIGatewayUpdateUsagePlan(this, 'UpdateUsagePlan', this.__resources, input);
  }

  public updateVpcLink(input: shapes.ApiGatewayUpdateVpcLinkRequest): APIGatewayUpdateVpcLink {
    return new APIGatewayUpdateVpcLink(this, 'UpdateVpcLink', this.__resources, input);
  }

}

export class APIGatewayCreateApiKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateApiKeyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.id'),
        outputPath: 'id',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.value'),
        outputPath: 'value',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.value', props);
    return resource.getResponseField('value') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get customerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.customerId'),
        outputPath: 'customerId',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.customerId', props);
    return resource.getResponseField('customerId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.description'),
        outputPath: 'description',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.enabled'),
        outputPath: 'enabled',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.enabled', props);
    return resource.getResponseField('enabled') as unknown as boolean;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.lastUpdatedDate'),
        outputPath: 'lastUpdatedDate',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.lastUpdatedDate', props);
    return resource.getResponseField('lastUpdatedDate') as unknown as string;
  }

  public get stageKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.stageKeys'),
        outputPath: 'stageKeys',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.stageKeys', props);
    return resource.getResponseField('stageKeys') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateApiKey.tags'),
        outputPath: 'tags',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          enabled: this.input.enabled,
          generateDistinctId: this.input.generateDistinctId,
          value: this.input.value,
          stageKeys: this.input.stageKeys,
          customerId: this.input.customerId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiKey.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayCreateAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateAuthorizerRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.type'),
        outputPath: 'type',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get providerArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.providerARNs'),
        outputPath: 'providerARNs',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.providerARNs', props);
    return resource.getResponseField('providerARNs') as unknown as string[];
  }

  public get authType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.authType'),
        outputPath: 'authType',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.authType', props);
    return resource.getResponseField('authType') as unknown as string;
  }

  public get authorizerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.authorizerUri'),
        outputPath: 'authorizerUri',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.authorizerUri', props);
    return resource.getResponseField('authorizerUri') as unknown as string;
  }

  public get authorizerCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.authorizerCredentials'),
        outputPath: 'authorizerCredentials',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.authorizerCredentials', props);
    return resource.getResponseField('authorizerCredentials') as unknown as string;
  }

  public get identitySource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.identitySource'),
        outputPath: 'identitySource',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.identitySource', props);
    return resource.getResponseField('identitySource') as unknown as string;
  }

  public get identityValidationExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.identityValidationExpression'),
        outputPath: 'identityValidationExpression',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.identityValidationExpression', props);
    return resource.getResponseField('identityValidationExpression') as unknown as string;
  }

  public get authorizerResultTtlInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateAuthorizer.authorizerResultTtlInSeconds'),
        outputPath: 'authorizerResultTtlInSeconds',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          type: this.input.type,
          providerARNs: this.input.providerARNs,
          authType: this.input.authType,
          authorizerUri: this.input.authorizerUri,
          authorizerCredentials: this.input.authorizerCredentials,
          identitySource: this.input.identitySource,
          identityValidationExpression: this.input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.authorizerResultTtlInSeconds', props);
    return resource.getResponseField('authorizerResultTtlInSeconds') as unknown as number;
  }

}

export class APIGatewayCreateBasePathMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateBasePathMappingRequest) {
    super(scope, id);
  }

  public get basePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateBasePathMapping.basePath'),
        outputPath: 'basePath',
        parameters: {
          domainName: this.input.domainName,
          basePath: this.input.basePath,
          restApiId: this.input.restApiId,
          stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBasePathMapping.basePath', props);
    return resource.getResponseField('basePath') as unknown as string;
  }

  public get restApiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateBasePathMapping.restApiId'),
        outputPath: 'restApiId',
        parameters: {
          domainName: this.input.domainName,
          basePath: this.input.basePath,
          restApiId: this.input.restApiId,
          stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBasePathMapping.restApiId', props);
    return resource.getResponseField('restApiId') as unknown as string;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateBasePathMapping.stage'),
        outputPath: 'stage',
        parameters: {
          domainName: this.input.domainName,
          basePath: this.input.basePath,
          restApiId: this.input.restApiId,
          stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBasePathMapping.stage', props);
    return resource.getResponseField('stage') as unknown as string;
  }

}

export class APIGatewayCreateDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateDeploymentRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDeployment.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          stageDescription: this.input.stageDescription,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDeployment.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          stageDescription: this.input.stageDescription,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDeployment.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          stageDescription: this.input.stageDescription,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get apiSummary(): Record<string, Record<string, shapes.ApiGatewayMethodSnapshot>> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDeployment.apiSummary'),
        outputPath: 'apiSummary',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          stageDescription: this.input.stageDescription,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.apiSummary', props);
    return resource.getResponseField('apiSummary') as unknown as Record<string, Record<string, shapes.ApiGatewayMethodSnapshot>>;
  }

}

export class APIGatewayCreateDocumentationPart extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateDocumentationPartRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationPart.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          location: {
            type: this.input.location.type,
            path: this.input.location.path,
            method: this.input.location.method,
            statusCode: this.input.location.statusCode,
            name: this.input.location.name,
          },
          properties: this.input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationPart.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get location(): APIGatewayCreateDocumentationPartLocation {
    return new APIGatewayCreateDocumentationPartLocation(this, 'Location', this.__resources, this.input);
  }

  public get properties(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationPart.properties'),
        outputPath: 'properties',
        parameters: {
          restApiId: this.input.restApiId,
          location: {
            type: this.input.location.type,
            path: this.input.location.path,
            method: this.input.location.method,
            statusCode: this.input.location.statusCode,
            name: this.input.location.name,
          },
          properties: this.input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationPart.properties', props);
    return resource.getResponseField('properties') as unknown as string;
  }

}

export class APIGatewayCreateDocumentationPartLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateDocumentationPartRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationPart.location.type'),
        outputPath: 'location.type',
        parameters: {
          restApiId: this.input.restApiId,
          location: {
            type: this.input.location.type,
            path: this.input.location.path,
            method: this.input.location.method,
            statusCode: this.input.location.statusCode,
            name: this.input.location.name,
          },
          properties: this.input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationPart.location.type', props);
    return resource.getResponseField('location.type') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationPart.location.path'),
        outputPath: 'location.path',
        parameters: {
          restApiId: this.input.restApiId,
          location: {
            type: this.input.location.type,
            path: this.input.location.path,
            method: this.input.location.method,
            statusCode: this.input.location.statusCode,
            name: this.input.location.name,
          },
          properties: this.input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationPart.location.path', props);
    return resource.getResponseField('location.path') as unknown as string;
  }

  public get method(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationPart.location.method'),
        outputPath: 'location.method',
        parameters: {
          restApiId: this.input.restApiId,
          location: {
            type: this.input.location.type,
            path: this.input.location.path,
            method: this.input.location.method,
            statusCode: this.input.location.statusCode,
            name: this.input.location.name,
          },
          properties: this.input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationPart.location.method', props);
    return resource.getResponseField('location.method') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationPart.location.statusCode'),
        outputPath: 'location.statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          location: {
            type: this.input.location.type,
            path: this.input.location.path,
            method: this.input.location.method,
            statusCode: this.input.location.statusCode,
            name: this.input.location.name,
          },
          properties: this.input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationPart.location.statusCode', props);
    return resource.getResponseField('location.statusCode') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationPart.location.name'),
        outputPath: 'location.name',
        parameters: {
          restApiId: this.input.restApiId,
          location: {
            type: this.input.location.type,
            path: this.input.location.path,
            method: this.input.location.method,
            statusCode: this.input.location.statusCode,
            name: this.input.location.name,
          },
          properties: this.input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationPart.location.name', props);
    return resource.getResponseField('location.name') as unknown as string;
  }

}

export class APIGatewayCreateDocumentationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateDocumentationVersionRequest) {
    super(scope, id);
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationVersion.version'),
        outputPath: 'version',
        parameters: {
          restApiId: this.input.restApiId,
          documentationVersion: this.input.documentationVersion,
          stageName: this.input.stageName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationVersion.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationVersion.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          documentationVersion: this.input.documentationVersion,
          stageName: this.input.stageName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationVersion.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDocumentationVersion.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          documentationVersion: this.input.documentationVersion,
          stageName: this.input.stageName,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentationVersion.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class APIGatewayCreateDomainName extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateDomainNameRequest) {
    super(scope, id);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.domainName'),
        outputPath: 'domainName',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.domainName', props);
    return resource.getResponseField('domainName') as unknown as string;
  }

  public get certificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.certificateName'),
        outputPath: 'certificateName',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.certificateName', props);
    return resource.getResponseField('certificateName') as unknown as string;
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.certificateArn'),
        outputPath: 'certificateArn',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.certificateArn', props);
    return resource.getResponseField('certificateArn') as unknown as string;
  }

  public get certificateUploadDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.certificateUploadDate'),
        outputPath: 'certificateUploadDate',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.certificateUploadDate', props);
    return resource.getResponseField('certificateUploadDate') as unknown as string;
  }

  public get regionalDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.regionalDomainName'),
        outputPath: 'regionalDomainName',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.regionalDomainName', props);
    return resource.getResponseField('regionalDomainName') as unknown as string;
  }

  public get regionalHostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.regionalHostedZoneId'),
        outputPath: 'regionalHostedZoneId',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.regionalHostedZoneId', props);
    return resource.getResponseField('regionalHostedZoneId') as unknown as string;
  }

  public get regionalCertificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.regionalCertificateName'),
        outputPath: 'regionalCertificateName',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.regionalCertificateName', props);
    return resource.getResponseField('regionalCertificateName') as unknown as string;
  }

  public get regionalCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.regionalCertificateArn'),
        outputPath: 'regionalCertificateArn',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.regionalCertificateArn', props);
    return resource.getResponseField('regionalCertificateArn') as unknown as string;
  }

  public get distributionDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.distributionDomainName'),
        outputPath: 'distributionDomainName',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.distributionDomainName', props);
    return resource.getResponseField('distributionDomainName') as unknown as string;
  }

  public get distributionHostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.distributionHostedZoneId'),
        outputPath: 'distributionHostedZoneId',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.distributionHostedZoneId', props);
    return resource.getResponseField('distributionHostedZoneId') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayCreateDomainNameEndpointConfiguration {
    return new APIGatewayCreateDomainNameEndpointConfiguration(this, 'EndpointConfiguration', this.__resources, this.input);
  }

  public get domainNameStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.domainNameStatus'),
        outputPath: 'domainNameStatus',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.domainNameStatus', props);
    return resource.getResponseField('domainNameStatus') as unknown as string;
  }

  public get domainNameStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.domainNameStatusMessage'),
        outputPath: 'domainNameStatusMessage',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.domainNameStatusMessage', props);
    return resource.getResponseField('domainNameStatusMessage') as unknown as string;
  }

  public get securityPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.securityPolicy'),
        outputPath: 'securityPolicy',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.securityPolicy', props);
    return resource.getResponseField('securityPolicy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.tags'),
        outputPath: 'tags',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get mutualTlsAuthentication(): APIGatewayCreateDomainNameMutualTlsAuthentication {
    return new APIGatewayCreateDomainNameMutualTlsAuthentication(this, 'MutualTlsAuthentication', this.__resources, this.input);
  }

}

export class APIGatewayCreateDomainNameEndpointConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateDomainNameRequest) {
    super(scope, id);
  }

  public get types(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.endpointConfiguration.types'),
        outputPath: 'endpointConfiguration.types',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.endpointConfiguration.types', props);
    return resource.getResponseField('endpointConfiguration.types') as unknown as string[];
  }

  public get vpcEndpointIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.endpointConfiguration.vpcEndpointIds'),
        outputPath: 'endpointConfiguration.vpcEndpointIds',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayCreateDomainNameMutualTlsAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateDomainNameRequest) {
    super(scope, id);
  }

  public get truststoreUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.mutualTlsAuthentication.truststoreUri'),
        outputPath: 'mutualTlsAuthentication.truststoreUri',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.mutualTlsAuthentication.truststoreUri', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreUri') as unknown as string;
  }

  public get truststoreVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.mutualTlsAuthentication.truststoreVersion'),
        outputPath: 'mutualTlsAuthentication.truststoreVersion',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.mutualTlsAuthentication.truststoreVersion', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreVersion') as unknown as string;
  }

  public get truststoreWarnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateDomainName.mutualTlsAuthentication.truststoreWarnings'),
        outputPath: 'mutualTlsAuthentication.truststoreWarnings',
        parameters: {
          domainName: this.input.domainName,
          certificateName: this.input.certificateName,
          certificateBody: this.input.certificateBody,
          certificatePrivateKey: this.input.certificatePrivateKey,
          certificateChain: this.input.certificateChain,
          certificateArn: this.input.certificateArn,
          regionalCertificateName: this.input.regionalCertificateName,
          regionalCertificateArn: this.input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.input.tags,
          securityPolicy: this.input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.mutualTlsAuthentication.truststoreWarnings', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreWarnings') as unknown as string[];
  }

}

export class APIGatewayCreateModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateModelRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateModel.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          description: this.input.description,
          schema: this.input.schema,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateModel.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          description: this.input.description,
          schema: this.input.schema,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateModel.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          description: this.input.description,
          schema: this.input.schema,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateModel.schema'),
        outputPath: 'schema',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          description: this.input.description,
          schema: this.input.schema,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.schema', props);
    return resource.getResponseField('schema') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateModel.contentType'),
        outputPath: 'contentType',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          description: this.input.description,
          schema: this.input.schema,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

}

export class APIGatewayCreateRequestValidator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateRequestValidatorRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRequestValidator.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          validateRequestBody: this.input.validateRequestBody,
          validateRequestParameters: this.input.validateRequestParameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRequestValidator.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRequestValidator.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          validateRequestBody: this.input.validateRequestBody,
          validateRequestParameters: this.input.validateRequestParameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRequestValidator.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get validateRequestBody(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRequestValidator.validateRequestBody'),
        outputPath: 'validateRequestBody',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          validateRequestBody: this.input.validateRequestBody,
          validateRequestParameters: this.input.validateRequestParameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRequestValidator.validateRequestBody', props);
    return resource.getResponseField('validateRequestBody') as unknown as boolean;
  }

  public get validateRequestParameters(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRequestValidator.validateRequestParameters'),
        outputPath: 'validateRequestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          name: this.input.name,
          validateRequestBody: this.input.validateRequestBody,
          validateRequestParameters: this.input.validateRequestParameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRequestValidator.validateRequestParameters', props);
    return resource.getResponseField('validateRequestParameters') as unknown as boolean;
  }

}

export class APIGatewayCreateResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateResourceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateResource.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          parentId: this.input.parentId,
          pathPart: this.input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResource.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get parentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateResource.parentId'),
        outputPath: 'parentId',
        parameters: {
          restApiId: this.input.restApiId,
          parentId: this.input.parentId,
          pathPart: this.input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResource.parentId', props);
    return resource.getResponseField('parentId') as unknown as string;
  }

  public get pathPart(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateResource.pathPart'),
        outputPath: 'pathPart',
        parameters: {
          restApiId: this.input.restApiId,
          parentId: this.input.parentId,
          pathPart: this.input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResource.pathPart', props);
    return resource.getResponseField('pathPart') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateResource.path'),
        outputPath: 'path',
        parameters: {
          restApiId: this.input.restApiId,
          parentId: this.input.parentId,
          pathPart: this.input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResource.path', props);
    return resource.getResponseField('path') as unknown as string;
  }

  public get resourceMethods(): Record<string, shapes.ApiGatewayMethod> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateResource.resourceMethods'),
        outputPath: 'resourceMethods',
        parameters: {
          restApiId: this.input.restApiId,
          parentId: this.input.parentId,
          pathPart: this.input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResource.resourceMethods', props);
    return resource.getResponseField('resourceMethods') as unknown as Record<string, shapes.ApiGatewayMethod>;
  }

}

export class APIGatewayCreateRestApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateRestApiRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.id'),
        outputPath: 'id',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.description'),
        outputPath: 'description',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.version'),
        outputPath: 'version',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.warnings'),
        outputPath: 'warnings',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

  public get binaryMediaTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.binaryMediaTypes'),
        outputPath: 'binaryMediaTypes',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.binaryMediaTypes', props);
    return resource.getResponseField('binaryMediaTypes') as unknown as string[];
  }

  public get minimumCompressionSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.minimumCompressionSize'),
        outputPath: 'minimumCompressionSize',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.minimumCompressionSize', props);
    return resource.getResponseField('minimumCompressionSize') as unknown as number;
  }

  public get apiKeySource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.apiKeySource'),
        outputPath: 'apiKeySource',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayCreateRestApiEndpointConfiguration {
    return new APIGatewayCreateRestApiEndpointConfiguration(this, 'EndpointConfiguration', this.__resources, this.input);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.policy'),
        outputPath: 'policy',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.tags'),
        outputPath: 'tags',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.disableExecuteApiEndpoint'),
        outputPath: 'disableExecuteApiEndpoint',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayCreateRestApiEndpointConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateRestApiRequest) {
    super(scope, id);
  }

  public get types(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.endpointConfiguration.types'),
        outputPath: 'endpointConfiguration.types',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.endpointConfiguration.types', props);
    return resource.getResponseField('endpointConfiguration.types') as unknown as string[];
  }

  public get vpcEndpointIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateRestApi.endpointConfiguration.vpcEndpointIds'),
        outputPath: 'endpointConfiguration.vpcEndpointIds',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          version: this.input.version,
          cloneFrom: this.input.cloneFrom,
          binaryMediaTypes: this.input.binaryMediaTypes,
          minimumCompressionSize: this.input.minimumCompressionSize,
          apiKeySource: this.input.apiKeySource,
          endpointConfiguration: {
            types: this.input.endpointConfiguration?.types,
            vpcEndpointIds: this.input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.input.policy,
          tags: this.input.tags,
          disableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayCreateStage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateStageRequest) {
    super(scope, id);
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.deploymentId'),
        outputPath: 'deploymentId',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.deploymentId', props);
    return resource.getResponseField('deploymentId') as unknown as string;
  }

  public get clientCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.clientCertificateId'),
        outputPath: 'clientCertificateId',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.clientCertificateId', props);
    return resource.getResponseField('clientCertificateId') as unknown as string;
  }

  public get stageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.stageName'),
        outputPath: 'stageName',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.stageName', props);
    return resource.getResponseField('stageName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get cacheClusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.cacheClusterEnabled'),
        outputPath: 'cacheClusterEnabled',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.cacheClusterEnabled', props);
    return resource.getResponseField('cacheClusterEnabled') as unknown as boolean;
  }

  public get cacheClusterSize(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.cacheClusterSize'),
        outputPath: 'cacheClusterSize',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.cacheClusterSize', props);
    return resource.getResponseField('cacheClusterSize') as unknown as string;
  }

  public get cacheClusterStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.cacheClusterStatus'),
        outputPath: 'cacheClusterStatus',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.cacheClusterStatus', props);
    return resource.getResponseField('cacheClusterStatus') as unknown as string;
  }

  public get methodSettings(): Record<string, shapes.ApiGatewayMethodSetting> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.methodSettings'),
        outputPath: 'methodSettings',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.methodSettings', props);
    return resource.getResponseField('methodSettings') as unknown as Record<string, shapes.ApiGatewayMethodSetting>;
  }

  public get variables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.variables'),
        outputPath: 'variables',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.variables', props);
    return resource.getResponseField('variables') as unknown as Record<string, string>;
  }

  public get documentationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.documentationVersion'),
        outputPath: 'documentationVersion',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.documentationVersion', props);
    return resource.getResponseField('documentationVersion') as unknown as string;
  }

  public get accessLogSettings(): APIGatewayCreateStageAccessLogSettings {
    return new APIGatewayCreateStageAccessLogSettings(this, 'AccessLogSettings', this.__resources, this.input);
  }

  public get canarySettings(): APIGatewayCreateStageCanarySettings {
    return new APIGatewayCreateStageCanarySettings(this, 'CanarySettings', this.__resources, this.input);
  }

  public get tracingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.tracingEnabled'),
        outputPath: 'tracingEnabled',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.tracingEnabled', props);
    return resource.getResponseField('tracingEnabled') as unknown as boolean;
  }

  public get webAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.webAclArn'),
        outputPath: 'webAclArn',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.webAclArn', props);
    return resource.getResponseField('webAclArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.tags'),
        outputPath: 'tags',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.lastUpdatedDate'),
        outputPath: 'lastUpdatedDate',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.lastUpdatedDate', props);
    return resource.getResponseField('lastUpdatedDate') as unknown as string;
  }

}

export class APIGatewayCreateStageAccessLogSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateStageRequest) {
    super(scope, id);
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.accessLogSettings.format'),
        outputPath: 'accessLogSettings.format',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.accessLogSettings.format', props);
    return resource.getResponseField('accessLogSettings.format') as unknown as string;
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.accessLogSettings.destinationArn'),
        outputPath: 'accessLogSettings.destinationArn',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.accessLogSettings.destinationArn', props);
    return resource.getResponseField('accessLogSettings.destinationArn') as unknown as string;
  }

}

export class APIGatewayCreateStageCanarySettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateStageRequest) {
    super(scope, id);
  }

  public get percentTraffic(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.canarySettings.percentTraffic'),
        outputPath: 'canarySettings.percentTraffic',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.canarySettings.percentTraffic', props);
    return resource.getResponseField('canarySettings.percentTraffic') as unknown as number;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.canarySettings.deploymentId'),
        outputPath: 'canarySettings.deploymentId',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.canarySettings.deploymentId', props);
    return resource.getResponseField('canarySettings.deploymentId') as unknown as string;
  }

  public get stageVariableOverrides(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.canarySettings.stageVariableOverrides'),
        outputPath: 'canarySettings.stageVariableOverrides',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.canarySettings.stageVariableOverrides', props);
    return resource.getResponseField('canarySettings.stageVariableOverrides') as unknown as Record<string, string>;
  }

  public get useStageCache(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateStage.canarySettings.useStageCache'),
        outputPath: 'canarySettings.useStageCache',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          deploymentId: this.input.deploymentId,
          description: this.input.description,
          cacheClusterEnabled: this.input.cacheClusterEnabled,
          cacheClusterSize: this.input.cacheClusterSize,
          variables: this.input.variables,
          documentationVersion: this.input.documentationVersion,
          canarySettings: {
            percentTraffic: this.input.canarySettings?.percentTraffic,
            deploymentId: this.input.canarySettings?.deploymentId,
            stageVariableOverrides: this.input.canarySettings?.stageVariableOverrides,
            useStageCache: this.input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.input.tracingEnabled,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.canarySettings.useStageCache', props);
    return resource.getResponseField('canarySettings.useStageCache') as unknown as boolean;
  }

}

export class APIGatewayCreateUsagePlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateUsagePlanRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.id'),
        outputPath: 'id',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.description'),
        outputPath: 'description',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get apiStages(): shapes.ApiGatewayApiStage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.apiStages'),
        outputPath: 'apiStages',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.apiStages', props);
    return resource.getResponseField('apiStages') as unknown as shapes.ApiGatewayApiStage[];
  }

  public get throttle(): APIGatewayCreateUsagePlanThrottle {
    return new APIGatewayCreateUsagePlanThrottle(this, 'Throttle', this.__resources, this.input);
  }

  public get quota(): APIGatewayCreateUsagePlanQuota {
    return new APIGatewayCreateUsagePlanQuota(this, 'Quota', this.__resources, this.input);
  }

  public get productCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.productCode'),
        outputPath: 'productCode',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.productCode', props);
    return resource.getResponseField('productCode') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.tags'),
        outputPath: 'tags',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayCreateUsagePlanThrottle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateUsagePlanRequest) {
    super(scope, id);
  }

  public get burstLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.throttle.burstLimit'),
        outputPath: 'throttle.burstLimit',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.throttle.burstLimit', props);
    return resource.getResponseField('throttle.burstLimit') as unknown as number;
  }

  public get rateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.throttle.rateLimit'),
        outputPath: 'throttle.rateLimit',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.throttle.rateLimit', props);
    return resource.getResponseField('throttle.rateLimit') as unknown as number;
  }

}

export class APIGatewayCreateUsagePlanQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateUsagePlanRequest) {
    super(scope, id);
  }

  public get limit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.quota.limit'),
        outputPath: 'quota.limit',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.quota.limit', props);
    return resource.getResponseField('quota.limit') as unknown as number;
  }

  public get offset(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.quota.offset'),
        outputPath: 'quota.offset',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.quota.offset', props);
    return resource.getResponseField('quota.offset') as unknown as number;
  }

  public get period(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlan.quota.period'),
        outputPath: 'quota.period',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          apiStages: this.input.apiStages,
          throttle: {
            burstLimit: this.input.throttle?.burstLimit,
            rateLimit: this.input.throttle?.rateLimit,
          },
          quota: {
            limit: this.input.quota?.limit,
            offset: this.input.quota?.offset,
            period: this.input.quota?.period,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlan.quota.period', props);
    return resource.getResponseField('quota.period') as unknown as string;
  }

}

export class APIGatewayCreateUsagePlanKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateUsagePlanKeyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlanKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlanKey.id'),
        outputPath: 'id',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          keyType: this.input.keyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlanKey.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlanKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlanKey.type'),
        outputPath: 'type',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          keyType: this.input.keyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlanKey.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlanKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlanKey.value'),
        outputPath: 'value',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          keyType: this.input.keyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlanKey.value', props);
    return resource.getResponseField('value') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsagePlanKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateUsagePlanKey.name'),
        outputPath: 'name',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          keyType: this.input.keyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsagePlanKey.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

}

export class APIGatewayCreateVpcLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayCreateVpcLinkRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateVpcLink.id'),
        outputPath: 'id',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          targetArns: this.input.targetArns,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateVpcLink.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          targetArns: this.input.targetArns,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateVpcLink.description'),
        outputPath: 'description',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          targetArns: this.input.targetArns,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get targetArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateVpcLink.targetArns'),
        outputPath: 'targetArns',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          targetArns: this.input.targetArns,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.targetArns', props);
    return resource.getResponseField('targetArns') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateVpcLink.status'),
        outputPath: 'status',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          targetArns: this.input.targetArns,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateVpcLink.statusMessage'),
        outputPath: 'statusMessage',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          targetArns: this.input.targetArns,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.statusMessage', props);
    return resource.getResponseField('statusMessage') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.CreateVpcLink.tags'),
        outputPath: 'tags',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          targetArns: this.input.targetArns,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayGenerateClientCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGenerateClientCertificateRequest) {
    super(scope, id);
  }

  public get clientCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GenerateClientCertificate.clientCertificateId'),
        outputPath: 'clientCertificateId',
        parameters: {
          description: this.input.description,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateClientCertificate.clientCertificateId', props);
    return resource.getResponseField('clientCertificateId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GenerateClientCertificate.description'),
        outputPath: 'description',
        parameters: {
          description: this.input.description,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateClientCertificate.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get pemEncodedCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GenerateClientCertificate.pemEncodedCertificate'),
        outputPath: 'pemEncodedCertificate',
        parameters: {
          description: this.input.description,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateClientCertificate.pemEncodedCertificate', props);
    return resource.getResponseField('pemEncodedCertificate') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GenerateClientCertificate.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          description: this.input.description,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateClientCertificate.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get expirationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GenerateClientCertificate.expirationDate'),
        outputPath: 'expirationDate',
        parameters: {
          description: this.input.description,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateClientCertificate.expirationDate', props);
    return resource.getResponseField('expirationDate') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GenerateClientCertificate.tags'),
        outputPath: 'tags',
        parameters: {
          description: this.input.description,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateClientCertificate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayFetchAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get cloudwatchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAccount.cloudwatchRoleArn'),
        outputPath: 'cloudwatchRoleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.cloudwatchRoleArn', props);
    return resource.getResponseField('cloudwatchRoleArn') as unknown as string;
  }

  public get throttleSettings(): APIGatewayFetchAccountThrottleSettings {
    return new APIGatewayFetchAccountThrottleSettings(this, 'ThrottleSettings', this.__resources);
  }

  public get features(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAccount.features'),
        outputPath: 'features',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.features', props);
    return resource.getResponseField('features') as unknown as string[];
  }

  public get apiKeyVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAccount.apiKeyVersion'),
        outputPath: 'apiKeyVersion',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.apiKeyVersion', props);
    return resource.getResponseField('apiKeyVersion') as unknown as string;
  }

}

export class APIGatewayFetchAccountThrottleSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get burstLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAccount.throttleSettings.burstLimit'),
        outputPath: 'throttleSettings.burstLimit',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.throttleSettings.burstLimit', props);
    return resource.getResponseField('throttleSettings.burstLimit') as unknown as number;
  }

  public get rateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAccount.throttleSettings.rateLimit'),
        outputPath: 'throttleSettings.rateLimit',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccount.throttleSettings.rateLimit', props);
    return resource.getResponseField('throttleSettings.rateLimit') as unknown as number;
  }

}

export class APIGatewayFetchApiKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetApiKeyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.id'),
        outputPath: 'id',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.value'),
        outputPath: 'value',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.value', props);
    return resource.getResponseField('value') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.name'),
        outputPath: 'name',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get customerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.customerId'),
        outputPath: 'customerId',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.customerId', props);
    return resource.getResponseField('customerId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.description'),
        outputPath: 'description',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.enabled'),
        outputPath: 'enabled',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.enabled', props);
    return resource.getResponseField('enabled') as unknown as boolean;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.lastUpdatedDate'),
        outputPath: 'lastUpdatedDate',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.lastUpdatedDate', props);
    return resource.getResponseField('lastUpdatedDate') as unknown as string;
  }

  public get stageKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.stageKeys'),
        outputPath: 'stageKeys',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.stageKeys', props);
    return resource.getResponseField('stageKeys') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKey.tags'),
        outputPath: 'tags',
        parameters: {
          apiKey: this.input.apiKey,
          includeValue: this.input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKey.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayFetchApiKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetApiKeysRequest) {
    super(scope, id);
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKeys',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKeys.warnings'),
        outputPath: 'warnings',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
          nameQuery: this.input.nameQuery,
          customerId: this.input.customerId,
          includeValues: this.input.includeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKeys.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKeys',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKeys.position'),
        outputPath: 'position',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
          nameQuery: this.input.nameQuery,
          customerId: this.input.customerId,
          includeValues: this.input.includeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKeys.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayApiKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiKeys',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetApiKeys.items'),
        outputPath: 'items',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
          nameQuery: this.input.nameQuery,
          customerId: this.input.customerId,
          includeValues: this.input.includeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiKeys.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayApiKey[];
  }

}

export class APIGatewayFetchAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetAuthorizerRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.type'),
        outputPath: 'type',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get providerArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.providerARNs'),
        outputPath: 'providerARNs',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.providerARNs', props);
    return resource.getResponseField('providerARNs') as unknown as string[];
  }

  public get authType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.authType'),
        outputPath: 'authType',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.authType', props);
    return resource.getResponseField('authType') as unknown as string;
  }

  public get authorizerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.authorizerUri'),
        outputPath: 'authorizerUri',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.authorizerUri', props);
    return resource.getResponseField('authorizerUri') as unknown as string;
  }

  public get authorizerCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.authorizerCredentials'),
        outputPath: 'authorizerCredentials',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.authorizerCredentials', props);
    return resource.getResponseField('authorizerCredentials') as unknown as string;
  }

  public get identitySource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.identitySource'),
        outputPath: 'identitySource',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.identitySource', props);
    return resource.getResponseField('identitySource') as unknown as string;
  }

  public get identityValidationExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.identityValidationExpression'),
        outputPath: 'identityValidationExpression',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.identityValidationExpression', props);
    return resource.getResponseField('identityValidationExpression') as unknown as string;
  }

  public get authorizerResultTtlInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizer.authorizerResultTtlInSeconds'),
        outputPath: 'authorizerResultTtlInSeconds',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.authorizerResultTtlInSeconds', props);
    return resource.getResponseField('authorizerResultTtlInSeconds') as unknown as number;
  }

}

export class APIGatewayFetchAuthorizers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetAuthorizersRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizers',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizers.position'),
        outputPath: 'position',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizers.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayAuthorizer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizers',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetAuthorizers.items'),
        outputPath: 'items',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizers.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayAuthorizer[];
  }

}

export class APIGatewayFetchBasePathMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetBasePathMappingRequest) {
    super(scope, id);
  }

  public get basePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetBasePathMapping.basePath'),
        outputPath: 'basePath',
        parameters: {
          domainName: this.input.domainName,
          basePath: this.input.basePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBasePathMapping.basePath', props);
    return resource.getResponseField('basePath') as unknown as string;
  }

  public get restApiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetBasePathMapping.restApiId'),
        outputPath: 'restApiId',
        parameters: {
          domainName: this.input.domainName,
          basePath: this.input.basePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBasePathMapping.restApiId', props);
    return resource.getResponseField('restApiId') as unknown as string;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetBasePathMapping.stage'),
        outputPath: 'stage',
        parameters: {
          domainName: this.input.domainName,
          basePath: this.input.basePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBasePathMapping.stage', props);
    return resource.getResponseField('stage') as unknown as string;
  }

}

export class APIGatewayFetchBasePathMappings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetBasePathMappingsRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBasePathMappings',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetBasePathMappings.position'),
        outputPath: 'position',
        parameters: {
          domainName: this.input.domainName,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBasePathMappings.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayBasePathMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBasePathMappings',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetBasePathMappings.items'),
        outputPath: 'items',
        parameters: {
          domainName: this.input.domainName,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBasePathMappings.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayBasePathMapping[];
  }

}

export class APIGatewayFetchClientCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetClientCertificateRequest) {
    super(scope, id);
  }

  public get clientCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetClientCertificate.clientCertificateId'),
        outputPath: 'clientCertificateId',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClientCertificate.clientCertificateId', props);
    return resource.getResponseField('clientCertificateId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetClientCertificate.description'),
        outputPath: 'description',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClientCertificate.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get pemEncodedCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetClientCertificate.pemEncodedCertificate'),
        outputPath: 'pemEncodedCertificate',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClientCertificate.pemEncodedCertificate', props);
    return resource.getResponseField('pemEncodedCertificate') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetClientCertificate.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClientCertificate.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get expirationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetClientCertificate.expirationDate'),
        outputPath: 'expirationDate',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClientCertificate.expirationDate', props);
    return resource.getResponseField('expirationDate') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetClientCertificate.tags'),
        outputPath: 'tags',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClientCertificate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayFetchClientCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetClientCertificatesRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClientCertificates',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetClientCertificates.position'),
        outputPath: 'position',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClientCertificates.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayClientCertificate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClientCertificates',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetClientCertificates.items'),
        outputPath: 'items',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClientCertificates.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayClientCertificate[];
  }

}

export class APIGatewayFetchDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDeploymentRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDeployment.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          deploymentId: this.input.deploymentId,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDeployment.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          deploymentId: this.input.deploymentId,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDeployment.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          deploymentId: this.input.deploymentId,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get apiSummary(): Record<string, Record<string, shapes.ApiGatewayMethodSnapshot>> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDeployment.apiSummary'),
        outputPath: 'apiSummary',
        parameters: {
          restApiId: this.input.restApiId,
          deploymentId: this.input.deploymentId,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.apiSummary', props);
    return resource.getResponseField('apiSummary') as unknown as Record<string, Record<string, shapes.ApiGatewayMethodSnapshot>>;
  }

}

export class APIGatewayFetchDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDeploymentsRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployments',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDeployments.position'),
        outputPath: 'position',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployments.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployments',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDeployments.items'),
        outputPath: 'items',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployments.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayDeployment[];
  }

}

export class APIGatewayFetchDocumentationPart extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDocumentationPartRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationPart.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationPart.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get location(): APIGatewayFetchDocumentationPartLocation {
    return new APIGatewayFetchDocumentationPartLocation(this, 'Location', this.__resources, this.input);
  }

  public get properties(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationPart.properties'),
        outputPath: 'properties',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationPart.properties', props);
    return resource.getResponseField('properties') as unknown as string;
  }

}

export class APIGatewayFetchDocumentationPartLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDocumentationPartRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationPart.location.type'),
        outputPath: 'location.type',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationPart.location.type', props);
    return resource.getResponseField('location.type') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationPart.location.path'),
        outputPath: 'location.path',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationPart.location.path', props);
    return resource.getResponseField('location.path') as unknown as string;
  }

  public get method(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationPart.location.method'),
        outputPath: 'location.method',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationPart.location.method', props);
    return resource.getResponseField('location.method') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationPart.location.statusCode'),
        outputPath: 'location.statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationPart.location.statusCode', props);
    return resource.getResponseField('location.statusCode') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationPart.location.name'),
        outputPath: 'location.name',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationPart.location.name', props);
    return resource.getResponseField('location.name') as unknown as string;
  }

}

export class APIGatewayFetchDocumentationParts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDocumentationPartsRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationParts',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationParts.position'),
        outputPath: 'position',
        parameters: {
          restApiId: this.input.restApiId,
          type: this.input.type,
          nameQuery: this.input.nameQuery,
          path: this.input.path,
          position: this.input.position,
          limit: this.input.limit,
          locationStatus: this.input.locationStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationParts.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayDocumentationPart[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationParts',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationParts.items'),
        outputPath: 'items',
        parameters: {
          restApiId: this.input.restApiId,
          type: this.input.type,
          nameQuery: this.input.nameQuery,
          path: this.input.path,
          position: this.input.position,
          limit: this.input.limit,
          locationStatus: this.input.locationStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationParts.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayDocumentationPart[];
  }

}

export class APIGatewayFetchDocumentationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDocumentationVersionRequest) {
    super(scope, id);
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationVersion.version'),
        outputPath: 'version',
        parameters: {
          restApiId: this.input.restApiId,
          documentationVersion: this.input.documentationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationVersion.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationVersion.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          documentationVersion: this.input.documentationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationVersion.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationVersion.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          documentationVersion: this.input.documentationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationVersion.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class APIGatewayFetchDocumentationVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDocumentationVersionsRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationVersions',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationVersions.position'),
        outputPath: 'position',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationVersions.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayDocumentationVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentationVersions',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDocumentationVersions.items'),
        outputPath: 'items',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentationVersions.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayDocumentationVersion[];
  }

}

export class APIGatewayFetchDomainName extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDomainNameRequest) {
    super(scope, id);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.domainName'),
        outputPath: 'domainName',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.domainName', props);
    return resource.getResponseField('domainName') as unknown as string;
  }

  public get certificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.certificateName'),
        outputPath: 'certificateName',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.certificateName', props);
    return resource.getResponseField('certificateName') as unknown as string;
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.certificateArn'),
        outputPath: 'certificateArn',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.certificateArn', props);
    return resource.getResponseField('certificateArn') as unknown as string;
  }

  public get certificateUploadDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.certificateUploadDate'),
        outputPath: 'certificateUploadDate',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.certificateUploadDate', props);
    return resource.getResponseField('certificateUploadDate') as unknown as string;
  }

  public get regionalDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.regionalDomainName'),
        outputPath: 'regionalDomainName',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.regionalDomainName', props);
    return resource.getResponseField('regionalDomainName') as unknown as string;
  }

  public get regionalHostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.regionalHostedZoneId'),
        outputPath: 'regionalHostedZoneId',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.regionalHostedZoneId', props);
    return resource.getResponseField('regionalHostedZoneId') as unknown as string;
  }

  public get regionalCertificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.regionalCertificateName'),
        outputPath: 'regionalCertificateName',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.regionalCertificateName', props);
    return resource.getResponseField('regionalCertificateName') as unknown as string;
  }

  public get regionalCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.regionalCertificateArn'),
        outputPath: 'regionalCertificateArn',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.regionalCertificateArn', props);
    return resource.getResponseField('regionalCertificateArn') as unknown as string;
  }

  public get distributionDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.distributionDomainName'),
        outputPath: 'distributionDomainName',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.distributionDomainName', props);
    return resource.getResponseField('distributionDomainName') as unknown as string;
  }

  public get distributionHostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.distributionHostedZoneId'),
        outputPath: 'distributionHostedZoneId',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.distributionHostedZoneId', props);
    return resource.getResponseField('distributionHostedZoneId') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayFetchDomainNameEndpointConfiguration {
    return new APIGatewayFetchDomainNameEndpointConfiguration(this, 'EndpointConfiguration', this.__resources, this.input);
  }

  public get domainNameStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.domainNameStatus'),
        outputPath: 'domainNameStatus',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.domainNameStatus', props);
    return resource.getResponseField('domainNameStatus') as unknown as string;
  }

  public get domainNameStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.domainNameStatusMessage'),
        outputPath: 'domainNameStatusMessage',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.domainNameStatusMessage', props);
    return resource.getResponseField('domainNameStatusMessage') as unknown as string;
  }

  public get securityPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.securityPolicy'),
        outputPath: 'securityPolicy',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.securityPolicy', props);
    return resource.getResponseField('securityPolicy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.tags'),
        outputPath: 'tags',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get mutualTlsAuthentication(): APIGatewayFetchDomainNameMutualTlsAuthentication {
    return new APIGatewayFetchDomainNameMutualTlsAuthentication(this, 'MutualTlsAuthentication', this.__resources, this.input);
  }

}

export class APIGatewayFetchDomainNameEndpointConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDomainNameRequest) {
    super(scope, id);
  }

  public get types(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.endpointConfiguration.types'),
        outputPath: 'endpointConfiguration.types',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.endpointConfiguration.types', props);
    return resource.getResponseField('endpointConfiguration.types') as unknown as string[];
  }

  public get vpcEndpointIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.endpointConfiguration.vpcEndpointIds'),
        outputPath: 'endpointConfiguration.vpcEndpointIds',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayFetchDomainNameMutualTlsAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDomainNameRequest) {
    super(scope, id);
  }

  public get truststoreUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.mutualTlsAuthentication.truststoreUri'),
        outputPath: 'mutualTlsAuthentication.truststoreUri',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.mutualTlsAuthentication.truststoreUri', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreUri') as unknown as string;
  }

  public get truststoreVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.mutualTlsAuthentication.truststoreVersion'),
        outputPath: 'mutualTlsAuthentication.truststoreVersion',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.mutualTlsAuthentication.truststoreVersion', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreVersion') as unknown as string;
  }

  public get truststoreWarnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainName.mutualTlsAuthentication.truststoreWarnings'),
        outputPath: 'mutualTlsAuthentication.truststoreWarnings',
        parameters: {
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.mutualTlsAuthentication.truststoreWarnings', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreWarnings') as unknown as string[];
  }

}

export class APIGatewayFetchDomainNames extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetDomainNamesRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainNames',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainNames.position'),
        outputPath: 'position',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainNames.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayDomainName[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainNames',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetDomainNames.items'),
        outputPath: 'items',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainNames.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayDomainName[];
  }

}

export class APIGatewayFetchExport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetExportRequest) {
    super(scope, id);
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExport',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetExport.contentType'),
        outputPath: 'contentType',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          exportType: this.input.exportType,
          parameters: this.input.parameters,
          accepts: this.input.accepts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExport.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

  public get contentDisposition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExport',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetExport.contentDisposition'),
        outputPath: 'contentDisposition',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          exportType: this.input.exportType,
          parameters: this.input.parameters,
          accepts: this.input.accepts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExport.contentDisposition', props);
    return resource.getResponseField('contentDisposition') as unknown as string;
  }

  public get body(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExport',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetExport.body'),
        outputPath: 'body',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          exportType: this.input.exportType,
          parameters: this.input.parameters,
          accepts: this.input.accepts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExport.body', props);
    return resource.getResponseField('body') as unknown as any;
  }

}

export class APIGatewayFetchGatewayResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetGatewayResponseRequest) {
    super(scope, id);
  }

  public get responseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetGatewayResponse.responseType'),
        outputPath: 'responseType',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGatewayResponse.responseType', props);
    return resource.getResponseField('responseType') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetGatewayResponse.statusCode'),
        outputPath: 'statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGatewayResponse.statusCode', props);
    return resource.getResponseField('statusCode') as unknown as string;
  }

  public get responseParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetGatewayResponse.responseParameters'),
        outputPath: 'responseParameters',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGatewayResponse.responseParameters', props);
    return resource.getResponseField('responseParameters') as unknown as Record<string, string>;
  }

  public get responseTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetGatewayResponse.responseTemplates'),
        outputPath: 'responseTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGatewayResponse.responseTemplates', props);
    return resource.getResponseField('responseTemplates') as unknown as Record<string, string>;
  }

  public get defaultResponse(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetGatewayResponse.defaultResponse'),
        outputPath: 'defaultResponse',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGatewayResponse.defaultResponse', props);
    return resource.getResponseField('defaultResponse') as unknown as boolean;
  }

}

export class APIGatewayFetchGatewayResponses extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetGatewayResponsesRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayResponses',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetGatewayResponses.position'),
        outputPath: 'position',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGatewayResponses.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayGatewayResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayResponses',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetGatewayResponses.items'),
        outputPath: 'items',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGatewayResponses.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayGatewayResponse[];
  }

}

export class APIGatewayFetchIntegration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetIntegrationRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.type'),
        outputPath: 'type',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.httpMethod'),
        outputPath: 'httpMethod',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.httpMethod', props);
    return resource.getResponseField('httpMethod') as unknown as string;
  }

  public get uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.uri'),
        outputPath: 'uri',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.uri', props);
    return resource.getResponseField('uri') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.connectionType'),
        outputPath: 'connectionType',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.connectionType', props);
    return resource.getResponseField('connectionType') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get credentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.credentials'),
        outputPath: 'credentials',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.credentials', props);
    return resource.getResponseField('credentials') as unknown as string;
  }

  public get requestParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.requestParameters'),
        outputPath: 'requestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.requestParameters', props);
    return resource.getResponseField('requestParameters') as unknown as Record<string, string>;
  }

  public get requestTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.requestTemplates'),
        outputPath: 'requestTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.requestTemplates', props);
    return resource.getResponseField('requestTemplates') as unknown as Record<string, string>;
  }

  public get passthroughBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.passthroughBehavior'),
        outputPath: 'passthroughBehavior',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.passthroughBehavior', props);
    return resource.getResponseField('passthroughBehavior') as unknown as string;
  }

  public get contentHandling(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.contentHandling'),
        outputPath: 'contentHandling',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.contentHandling', props);
    return resource.getResponseField('contentHandling') as unknown as string;
  }

  public get timeoutInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.timeoutInMillis'),
        outputPath: 'timeoutInMillis',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.timeoutInMillis', props);
    return resource.getResponseField('timeoutInMillis') as unknown as number;
  }

  public get cacheNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.cacheNamespace'),
        outputPath: 'cacheNamespace',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.cacheNamespace', props);
    return resource.getResponseField('cacheNamespace') as unknown as string;
  }

  public get cacheKeyParameters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.cacheKeyParameters'),
        outputPath: 'cacheKeyParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.cacheKeyParameters', props);
    return resource.getResponseField('cacheKeyParameters') as unknown as string[];
  }

  public get integrationResponses(): Record<string, shapes.ApiGatewayIntegrationResponse> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.integrationResponses'),
        outputPath: 'integrationResponses',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.integrationResponses', props);
    return resource.getResponseField('integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayFetchIntegrationTlsConfig {
    return new APIGatewayFetchIntegrationTlsConfig(this, 'TlsConfig', this.__resources, this.input);
  }

}

export class APIGatewayFetchIntegrationTlsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetIntegrationRequest) {
    super(scope, id);
  }

  public get insecureSkipVerification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegration.tlsConfig.insecureSkipVerification'),
        outputPath: 'tlsConfig.insecureSkipVerification',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayFetchIntegrationResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetIntegrationResponseRequest) {
    super(scope, id);
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegrationResponse.statusCode'),
        outputPath: 'statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.statusCode', props);
    return resource.getResponseField('statusCode') as unknown as string;
  }

  public get selectionPattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegrationResponse.selectionPattern'),
        outputPath: 'selectionPattern',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.selectionPattern', props);
    return resource.getResponseField('selectionPattern') as unknown as string;
  }

  public get responseParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegrationResponse.responseParameters'),
        outputPath: 'responseParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.responseParameters', props);
    return resource.getResponseField('responseParameters') as unknown as Record<string, string>;
  }

  public get responseTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegrationResponse.responseTemplates'),
        outputPath: 'responseTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.responseTemplates', props);
    return resource.getResponseField('responseTemplates') as unknown as Record<string, string>;
  }

  public get contentHandling(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetIntegrationResponse.contentHandling'),
        outputPath: 'contentHandling',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.contentHandling', props);
    return resource.getResponseField('contentHandling') as unknown as string;
  }

}

export class APIGatewayFetchMethod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetMethodRequest) {
    super(scope, id);
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.httpMethod'),
        outputPath: 'httpMethod',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.httpMethod', props);
    return resource.getResponseField('httpMethod') as unknown as string;
  }

  public get authorizationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.authorizationType'),
        outputPath: 'authorizationType',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.authorizationType', props);
    return resource.getResponseField('authorizationType') as unknown as string;
  }

  public get authorizerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.authorizerId'),
        outputPath: 'authorizerId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.authorizerId', props);
    return resource.getResponseField('authorizerId') as unknown as string;
  }

  public get apiKeyRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.apiKeyRequired'),
        outputPath: 'apiKeyRequired',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.apiKeyRequired', props);
    return resource.getResponseField('apiKeyRequired') as unknown as boolean;
  }

  public get requestValidatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.requestValidatorId'),
        outputPath: 'requestValidatorId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.requestValidatorId', props);
    return resource.getResponseField('requestValidatorId') as unknown as string;
  }

  public get operationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.operationName'),
        outputPath: 'operationName',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.operationName', props);
    return resource.getResponseField('operationName') as unknown as string;
  }

  public get requestParameters(): Record<string, boolean> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.requestParameters'),
        outputPath: 'requestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.requestParameters', props);
    return resource.getResponseField('requestParameters') as unknown as Record<string, boolean>;
  }

  public get requestModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.requestModels'),
        outputPath: 'requestModels',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.requestModels', props);
    return resource.getResponseField('requestModels') as unknown as Record<string, string>;
  }

  public get methodResponses(): Record<string, shapes.ApiGatewayMethodResponse> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodResponses'),
        outputPath: 'methodResponses',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodResponses', props);
    return resource.getResponseField('methodResponses') as unknown as Record<string, shapes.ApiGatewayMethodResponse>;
  }

  public get methodIntegration(): APIGatewayFetchMethodMethodIntegration {
    return new APIGatewayFetchMethodMethodIntegration(this, 'MethodIntegration', this.__resources, this.input);
  }

  public get authorizationScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.authorizationScopes'),
        outputPath: 'authorizationScopes',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.authorizationScopes', props);
    return resource.getResponseField('authorizationScopes') as unknown as string[];
  }

}

export class APIGatewayFetchMethodMethodIntegration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetMethodRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.type'),
        outputPath: 'methodIntegration.type',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.type', props);
    return resource.getResponseField('methodIntegration.type') as unknown as string;
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.httpMethod'),
        outputPath: 'methodIntegration.httpMethod',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.httpMethod', props);
    return resource.getResponseField('methodIntegration.httpMethod') as unknown as string;
  }

  public get uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.uri'),
        outputPath: 'methodIntegration.uri',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.uri', props);
    return resource.getResponseField('methodIntegration.uri') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.connectionType'),
        outputPath: 'methodIntegration.connectionType',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.connectionType', props);
    return resource.getResponseField('methodIntegration.connectionType') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.connectionId'),
        outputPath: 'methodIntegration.connectionId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.connectionId', props);
    return resource.getResponseField('methodIntegration.connectionId') as unknown as string;
  }

  public get credentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.credentials'),
        outputPath: 'methodIntegration.credentials',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.credentials', props);
    return resource.getResponseField('methodIntegration.credentials') as unknown as string;
  }

  public get requestParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.requestParameters'),
        outputPath: 'methodIntegration.requestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.requestParameters', props);
    return resource.getResponseField('methodIntegration.requestParameters') as unknown as Record<string, string>;
  }

  public get requestTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.requestTemplates'),
        outputPath: 'methodIntegration.requestTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.requestTemplates', props);
    return resource.getResponseField('methodIntegration.requestTemplates') as unknown as Record<string, string>;
  }

  public get passthroughBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.passthroughBehavior'),
        outputPath: 'methodIntegration.passthroughBehavior',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.passthroughBehavior', props);
    return resource.getResponseField('methodIntegration.passthroughBehavior') as unknown as string;
  }

  public get contentHandling(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.contentHandling'),
        outputPath: 'methodIntegration.contentHandling',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.contentHandling', props);
    return resource.getResponseField('methodIntegration.contentHandling') as unknown as string;
  }

  public get timeoutInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.timeoutInMillis'),
        outputPath: 'methodIntegration.timeoutInMillis',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.timeoutInMillis', props);
    return resource.getResponseField('methodIntegration.timeoutInMillis') as unknown as number;
  }

  public get cacheNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.cacheNamespace'),
        outputPath: 'methodIntegration.cacheNamespace',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.cacheNamespace', props);
    return resource.getResponseField('methodIntegration.cacheNamespace') as unknown as string;
  }

  public get cacheKeyParameters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.cacheKeyParameters'),
        outputPath: 'methodIntegration.cacheKeyParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.cacheKeyParameters', props);
    return resource.getResponseField('methodIntegration.cacheKeyParameters') as unknown as string[];
  }

  public get integrationResponses(): Record<string, shapes.ApiGatewayIntegrationResponse> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.integrationResponses'),
        outputPath: 'methodIntegration.integrationResponses',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.integrationResponses', props);
    return resource.getResponseField('methodIntegration.integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayFetchMethodMethodIntegrationTlsConfig {
    return new APIGatewayFetchMethodMethodIntegrationTlsConfig(this, 'TlsConfig', this.__resources, this.input);
  }

}

export class APIGatewayFetchMethodMethodIntegrationTlsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetMethodRequest) {
    super(scope, id);
  }

  public get insecureSkipVerification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethod.methodIntegration.tlsConfig.insecureSkipVerification'),
        outputPath: 'methodIntegration.tlsConfig.insecureSkipVerification',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethod.methodIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('methodIntegration.tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayFetchMethodResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetMethodResponseRequest) {
    super(scope, id);
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethodResponse.statusCode'),
        outputPath: 'statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethodResponse.statusCode', props);
    return resource.getResponseField('statusCode') as unknown as string;
  }

  public get responseParameters(): Record<string, boolean> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethodResponse.responseParameters'),
        outputPath: 'responseParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethodResponse.responseParameters', props);
    return resource.getResponseField('responseParameters') as unknown as Record<string, boolean>;
  }

  public get responseModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetMethodResponse.responseModels'),
        outputPath: 'responseModels',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMethodResponse.responseModels', props);
    return resource.getResponseField('responseModels') as unknown as Record<string, string>;
  }

}

export class APIGatewayFetchModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetModelRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetModel.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          flatten: this.input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetModel.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          flatten: this.input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetModel.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          flatten: this.input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetModel.schema'),
        outputPath: 'schema',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          flatten: this.input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.schema', props);
    return resource.getResponseField('schema') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetModel.contentType'),
        outputPath: 'contentType',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          flatten: this.input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

}

export class APIGatewayFetchModelTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetModelTemplateRequest) {
    super(scope, id);
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelTemplate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetModelTemplate.value'),
        outputPath: 'value',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelTemplate.value', props);
    return resource.getResponseField('value') as unknown as string;
  }

}

export class APIGatewayFetchModels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetModelsRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModels',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetModels.position'),
        outputPath: 'position',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModels.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayModel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModels',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetModels.items'),
        outputPath: 'items',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModels.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayModel[];
  }

}

export class APIGatewayFetchRequestValidator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetRequestValidatorRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRequestValidator.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          requestValidatorId: this.input.requestValidatorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestValidator.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRequestValidator.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          requestValidatorId: this.input.requestValidatorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestValidator.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get validateRequestBody(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRequestValidator.validateRequestBody'),
        outputPath: 'validateRequestBody',
        parameters: {
          restApiId: this.input.restApiId,
          requestValidatorId: this.input.requestValidatorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestValidator.validateRequestBody', props);
    return resource.getResponseField('validateRequestBody') as unknown as boolean;
  }

  public get validateRequestParameters(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRequestValidator.validateRequestParameters'),
        outputPath: 'validateRequestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          requestValidatorId: this.input.requestValidatorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestValidator.validateRequestParameters', props);
    return resource.getResponseField('validateRequestParameters') as unknown as boolean;
  }

}

export class APIGatewayFetchRequestValidators extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetRequestValidatorsRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestValidators',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRequestValidators.position'),
        outputPath: 'position',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestValidators.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayRequestValidator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestValidators',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRequestValidators.items'),
        outputPath: 'items',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestValidators.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayRequestValidator[];
  }

}

export class APIGatewayFetchResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetResourceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetResource.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResource.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get parentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetResource.parentId'),
        outputPath: 'parentId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResource.parentId', props);
    return resource.getResponseField('parentId') as unknown as string;
  }

  public get pathPart(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetResource.pathPart'),
        outputPath: 'pathPart',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResource.pathPart', props);
    return resource.getResponseField('pathPart') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetResource.path'),
        outputPath: 'path',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResource.path', props);
    return resource.getResponseField('path') as unknown as string;
  }

  public get resourceMethods(): Record<string, shapes.ApiGatewayMethod> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetResource.resourceMethods'),
        outputPath: 'resourceMethods',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResource.resourceMethods', props);
    return resource.getResponseField('resourceMethods') as unknown as Record<string, shapes.ApiGatewayMethod>;
  }

}

export class APIGatewayFetchResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetResourcesRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResources',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetResources.position'),
        outputPath: 'position',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResources.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResources',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetResources.items'),
        outputPath: 'items',
        parameters: {
          restApiId: this.input.restApiId,
          position: this.input.position,
          limit: this.input.limit,
          embed: this.input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResources.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayResource[];
  }

}

export class APIGatewayFetchRestApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetRestApiRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.version'),
        outputPath: 'version',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.warnings'),
        outputPath: 'warnings',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

  public get binaryMediaTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.binaryMediaTypes'),
        outputPath: 'binaryMediaTypes',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.binaryMediaTypes', props);
    return resource.getResponseField('binaryMediaTypes') as unknown as string[];
  }

  public get minimumCompressionSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.minimumCompressionSize'),
        outputPath: 'minimumCompressionSize',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.minimumCompressionSize', props);
    return resource.getResponseField('minimumCompressionSize') as unknown as number;
  }

  public get apiKeySource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.apiKeySource'),
        outputPath: 'apiKeySource',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayFetchRestApiEndpointConfiguration {
    return new APIGatewayFetchRestApiEndpointConfiguration(this, 'EndpointConfiguration', this.__resources, this.input);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.policy'),
        outputPath: 'policy',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.tags'),
        outputPath: 'tags',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.disableExecuteApiEndpoint'),
        outputPath: 'disableExecuteApiEndpoint',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayFetchRestApiEndpointConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetRestApiRequest) {
    super(scope, id);
  }

  public get types(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.endpointConfiguration.types'),
        outputPath: 'endpointConfiguration.types',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.endpointConfiguration.types', props);
    return resource.getResponseField('endpointConfiguration.types') as unknown as string[];
  }

  public get vpcEndpointIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApi.endpointConfiguration.vpcEndpointIds'),
        outputPath: 'endpointConfiguration.vpcEndpointIds',
        parameters: {
          restApiId: this.input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayFetchRestApis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetRestApisRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApis',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApis.position'),
        outputPath: 'position',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApis.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayRestApi[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRestApis',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetRestApis.items'),
        outputPath: 'items',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRestApis.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayRestApi[];
  }

}

export class APIGatewayFetchSdk extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetSdkRequest) {
    super(scope, id);
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSdk',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetSdk.contentType'),
        outputPath: 'contentType',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          sdkType: this.input.sdkType,
          parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSdk.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

  public get contentDisposition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSdk',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetSdk.contentDisposition'),
        outputPath: 'contentDisposition',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          sdkType: this.input.sdkType,
          parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSdk.contentDisposition', props);
    return resource.getResponseField('contentDisposition') as unknown as string;
  }

  public get body(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSdk',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetSdk.body'),
        outputPath: 'body',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          sdkType: this.input.sdkType,
          parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSdk.body', props);
    return resource.getResponseField('body') as unknown as any;
  }

}

export class APIGatewayFetchSdkType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetSdkTypeRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSdkType',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetSdkType.id'),
        outputPath: 'id',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSdkType.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get friendlyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSdkType',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetSdkType.friendlyName'),
        outputPath: 'friendlyName',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSdkType.friendlyName', props);
    return resource.getResponseField('friendlyName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSdkType',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetSdkType.description'),
        outputPath: 'description',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSdkType.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get configurationProperties(): shapes.ApiGatewaySdkConfigurationProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSdkType',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetSdkType.configurationProperties'),
        outputPath: 'configurationProperties',
        parameters: {
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSdkType.configurationProperties', props);
    return resource.getResponseField('configurationProperties') as unknown as shapes.ApiGatewaySdkConfigurationProperty[];
  }

}

export class APIGatewayFetchSdkTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetSdkTypesRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSdkTypes',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetSdkTypes.position'),
        outputPath: 'position',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSdkTypes.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewaySdkType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSdkTypes',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetSdkTypes.items'),
        outputPath: 'items',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSdkTypes.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewaySdkType[];
  }

}

export class APIGatewayFetchStage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetStageRequest) {
    super(scope, id);
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.deploymentId'),
        outputPath: 'deploymentId',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.deploymentId', props);
    return resource.getResponseField('deploymentId') as unknown as string;
  }

  public get clientCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.clientCertificateId'),
        outputPath: 'clientCertificateId',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.clientCertificateId', props);
    return resource.getResponseField('clientCertificateId') as unknown as string;
  }

  public get stageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.stageName'),
        outputPath: 'stageName',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.stageName', props);
    return resource.getResponseField('stageName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get cacheClusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.cacheClusterEnabled'),
        outputPath: 'cacheClusterEnabled',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.cacheClusterEnabled', props);
    return resource.getResponseField('cacheClusterEnabled') as unknown as boolean;
  }

  public get cacheClusterSize(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.cacheClusterSize'),
        outputPath: 'cacheClusterSize',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.cacheClusterSize', props);
    return resource.getResponseField('cacheClusterSize') as unknown as string;
  }

  public get cacheClusterStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.cacheClusterStatus'),
        outputPath: 'cacheClusterStatus',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.cacheClusterStatus', props);
    return resource.getResponseField('cacheClusterStatus') as unknown as string;
  }

  public get methodSettings(): Record<string, shapes.ApiGatewayMethodSetting> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.methodSettings'),
        outputPath: 'methodSettings',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.methodSettings', props);
    return resource.getResponseField('methodSettings') as unknown as Record<string, shapes.ApiGatewayMethodSetting>;
  }

  public get variables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.variables'),
        outputPath: 'variables',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.variables', props);
    return resource.getResponseField('variables') as unknown as Record<string, string>;
  }

  public get documentationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.documentationVersion'),
        outputPath: 'documentationVersion',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.documentationVersion', props);
    return resource.getResponseField('documentationVersion') as unknown as string;
  }

  public get accessLogSettings(): APIGatewayFetchStageAccessLogSettings {
    return new APIGatewayFetchStageAccessLogSettings(this, 'AccessLogSettings', this.__resources, this.input);
  }

  public get canarySettings(): APIGatewayFetchStageCanarySettings {
    return new APIGatewayFetchStageCanarySettings(this, 'CanarySettings', this.__resources, this.input);
  }

  public get tracingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.tracingEnabled'),
        outputPath: 'tracingEnabled',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.tracingEnabled', props);
    return resource.getResponseField('tracingEnabled') as unknown as boolean;
  }

  public get webAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.webAclArn'),
        outputPath: 'webAclArn',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.webAclArn', props);
    return resource.getResponseField('webAclArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.tags'),
        outputPath: 'tags',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.lastUpdatedDate'),
        outputPath: 'lastUpdatedDate',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.lastUpdatedDate', props);
    return resource.getResponseField('lastUpdatedDate') as unknown as string;
  }

}

export class APIGatewayFetchStageAccessLogSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetStageRequest) {
    super(scope, id);
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.accessLogSettings.format'),
        outputPath: 'accessLogSettings.format',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.accessLogSettings.format', props);
    return resource.getResponseField('accessLogSettings.format') as unknown as string;
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.accessLogSettings.destinationArn'),
        outputPath: 'accessLogSettings.destinationArn',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.accessLogSettings.destinationArn', props);
    return resource.getResponseField('accessLogSettings.destinationArn') as unknown as string;
  }

}

export class APIGatewayFetchStageCanarySettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetStageRequest) {
    super(scope, id);
  }

  public get percentTraffic(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.canarySettings.percentTraffic'),
        outputPath: 'canarySettings.percentTraffic',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.canarySettings.percentTraffic', props);
    return resource.getResponseField('canarySettings.percentTraffic') as unknown as number;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.canarySettings.deploymentId'),
        outputPath: 'canarySettings.deploymentId',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.canarySettings.deploymentId', props);
    return resource.getResponseField('canarySettings.deploymentId') as unknown as string;
  }

  public get stageVariableOverrides(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.canarySettings.stageVariableOverrides'),
        outputPath: 'canarySettings.stageVariableOverrides',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.canarySettings.stageVariableOverrides', props);
    return resource.getResponseField('canarySettings.stageVariableOverrides') as unknown as Record<string, string>;
  }

  public get useStageCache(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStage.canarySettings.useStageCache'),
        outputPath: 'canarySettings.useStageCache',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.canarySettings.useStageCache', props);
    return resource.getResponseField('canarySettings.useStageCache') as unknown as boolean;
  }

}

export class APIGatewayFetchStages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetStagesRequest) {
    super(scope, id);
  }

  public get item(): shapes.ApiGatewayStage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStages',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetStages.item'),
        outputPath: 'item',
        parameters: {
          restApiId: this.input.restApiId,
          deploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStages.item', props);
    return resource.getResponseField('item') as unknown as shapes.ApiGatewayStage[];
  }

}

export class APIGatewayFetchTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetTagsRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTags',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetTags.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTags.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayFetchUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetUsageRequest) {
    super(scope, id);
  }

  public get usagePlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsage.usagePlanId'),
        outputPath: 'usagePlanId',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          startDate: this.input.startDate,
          endDate: this.input.endDate,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsage.usagePlanId', props);
    return resource.getResponseField('usagePlanId') as unknown as string;
  }

  public get startDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsage.startDate'),
        outputPath: 'startDate',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          startDate: this.input.startDate,
          endDate: this.input.endDate,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsage.startDate', props);
    return resource.getResponseField('startDate') as unknown as string;
  }

  public get endDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsage.endDate'),
        outputPath: 'endDate',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          startDate: this.input.startDate,
          endDate: this.input.endDate,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsage.endDate', props);
    return resource.getResponseField('endDate') as unknown as string;
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsage.position'),
        outputPath: 'position',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          startDate: this.input.startDate,
          endDate: this.input.endDate,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsage.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): Record<string, number[][]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsage.items'),
        outputPath: 'items',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          startDate: this.input.startDate,
          endDate: this.input.endDate,
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsage.items', props);
    return resource.getResponseField('items') as unknown as Record<string, number[][]>;
  }

}

export class APIGatewayFetchUsagePlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetUsagePlanRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.id'),
        outputPath: 'id',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.name'),
        outputPath: 'name',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.description'),
        outputPath: 'description',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get apiStages(): shapes.ApiGatewayApiStage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.apiStages'),
        outputPath: 'apiStages',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.apiStages', props);
    return resource.getResponseField('apiStages') as unknown as shapes.ApiGatewayApiStage[];
  }

  public get throttle(): APIGatewayFetchUsagePlanThrottle {
    return new APIGatewayFetchUsagePlanThrottle(this, 'Throttle', this.__resources, this.input);
  }

  public get quota(): APIGatewayFetchUsagePlanQuota {
    return new APIGatewayFetchUsagePlanQuota(this, 'Quota', this.__resources, this.input);
  }

  public get productCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.productCode'),
        outputPath: 'productCode',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.productCode', props);
    return resource.getResponseField('productCode') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.tags'),
        outputPath: 'tags',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayFetchUsagePlanThrottle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetUsagePlanRequest) {
    super(scope, id);
  }

  public get burstLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.throttle.burstLimit'),
        outputPath: 'throttle.burstLimit',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.throttle.burstLimit', props);
    return resource.getResponseField('throttle.burstLimit') as unknown as number;
  }

  public get rateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.throttle.rateLimit'),
        outputPath: 'throttle.rateLimit',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.throttle.rateLimit', props);
    return resource.getResponseField('throttle.rateLimit') as unknown as number;
  }

}

export class APIGatewayFetchUsagePlanQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetUsagePlanRequest) {
    super(scope, id);
  }

  public get limit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.quota.limit'),
        outputPath: 'quota.limit',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.quota.limit', props);
    return resource.getResponseField('quota.limit') as unknown as number;
  }

  public get offset(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.quota.offset'),
        outputPath: 'quota.offset',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.quota.offset', props);
    return resource.getResponseField('quota.offset') as unknown as number;
  }

  public get period(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlan.quota.period'),
        outputPath: 'quota.period',
        parameters: {
          usagePlanId: this.input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlan.quota.period', props);
    return resource.getResponseField('quota.period') as unknown as string;
  }

}

export class APIGatewayFetchUsagePlanKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetUsagePlanKeyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlanKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlanKey.id'),
        outputPath: 'id',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlanKey.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlanKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlanKey.type'),
        outputPath: 'type',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlanKey.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlanKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlanKey.value'),
        outputPath: 'value',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlanKey.value', props);
    return resource.getResponseField('value') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlanKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlanKey.name'),
        outputPath: 'name',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlanKey.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

}

export class APIGatewayFetchUsagePlanKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetUsagePlanKeysRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlanKeys',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlanKeys.position'),
        outputPath: 'position',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          position: this.input.position,
          limit: this.input.limit,
          nameQuery: this.input.nameQuery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlanKeys.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayUsagePlanKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlanKeys',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlanKeys.items'),
        outputPath: 'items',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          position: this.input.position,
          limit: this.input.limit,
          nameQuery: this.input.nameQuery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlanKeys.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayUsagePlanKey[];
  }

}

export class APIGatewayFetchUsagePlans extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetUsagePlansRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlans',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlans.position'),
        outputPath: 'position',
        parameters: {
          position: this.input.position,
          keyId: this.input.keyId,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlans.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayUsagePlan[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUsagePlans',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetUsagePlans.items'),
        outputPath: 'items',
        parameters: {
          position: this.input.position,
          keyId: this.input.keyId,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUsagePlans.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayUsagePlan[];
  }

}

export class APIGatewayFetchVpcLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetVpcLinkRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetVpcLink.id'),
        outputPath: 'id',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetVpcLink.name'),
        outputPath: 'name',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetVpcLink.description'),
        outputPath: 'description',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get targetArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetVpcLink.targetArns'),
        outputPath: 'targetArns',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.targetArns', props);
    return resource.getResponseField('targetArns') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetVpcLink.status'),
        outputPath: 'status',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetVpcLink.statusMessage'),
        outputPath: 'statusMessage',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.statusMessage', props);
    return resource.getResponseField('statusMessage') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetVpcLink.tags'),
        outputPath: 'tags',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayFetchVpcLinks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayGetVpcLinksRequest) {
    super(scope, id);
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLinks',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetVpcLinks.position'),
        outputPath: 'position',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLinks.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): shapes.ApiGatewayVpcLink[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLinks',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.GetVpcLinks.items'),
        outputPath: 'items',
        parameters: {
          position: this.input.position,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLinks.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayVpcLink[];
  }

}

export class APIGatewayImportApiKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayImportApiKeysRequest) {
    super(scope, id);
  }

  public get ids(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApiKeys',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportApiKeys.ids'),
        outputPath: 'ids',
        parameters: {
          body: {
          },
          format: this.input.format,
          failOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApiKeys.ids', props);
    return resource.getResponseField('ids') as unknown as string[];
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApiKeys',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportApiKeys.warnings'),
        outputPath: 'warnings',
        parameters: {
          body: {
          },
          format: this.input.format,
          failOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApiKeys.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

}

export class APIGatewayImportDocumentationParts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayImportDocumentationPartsRequest) {
    super(scope, id);
  }

  public get ids(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importDocumentationParts',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportDocumentationParts.ids'),
        outputPath: 'ids',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportDocumentationParts.ids', props);
    return resource.getResponseField('ids') as unknown as string[];
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importDocumentationParts',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportDocumentationParts.warnings'),
        outputPath: 'warnings',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportDocumentationParts.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

}

export class APIGatewayImportRestApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayImportRestApiRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.id'),
        outputPath: 'id',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.name'),
        outputPath: 'name',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.description'),
        outputPath: 'description',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.version'),
        outputPath: 'version',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.warnings'),
        outputPath: 'warnings',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

  public get binaryMediaTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.binaryMediaTypes'),
        outputPath: 'binaryMediaTypes',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.binaryMediaTypes', props);
    return resource.getResponseField('binaryMediaTypes') as unknown as string[];
  }

  public get minimumCompressionSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.minimumCompressionSize'),
        outputPath: 'minimumCompressionSize',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.minimumCompressionSize', props);
    return resource.getResponseField('minimumCompressionSize') as unknown as number;
  }

  public get apiKeySource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.apiKeySource'),
        outputPath: 'apiKeySource',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayImportRestApiEndpointConfiguration {
    return new APIGatewayImportRestApiEndpointConfiguration(this, 'EndpointConfiguration', this.__resources, this.input);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.policy'),
        outputPath: 'policy',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.tags'),
        outputPath: 'tags',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.disableExecuteApiEndpoint'),
        outputPath: 'disableExecuteApiEndpoint',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayImportRestApiEndpointConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayImportRestApiRequest) {
    super(scope, id);
  }

  public get types(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.endpointConfiguration.types'),
        outputPath: 'endpointConfiguration.types',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.endpointConfiguration.types', props);
    return resource.getResponseField('endpointConfiguration.types') as unknown as string[];
  }

  public get vpcEndpointIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.ImportRestApi.endpointConfiguration.vpcEndpointIds'),
        outputPath: 'endpointConfiguration.vpcEndpointIds',
        parameters: {
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayPutGatewayResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutGatewayResponseRequest) {
    super(scope, id);
  }

  public get responseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutGatewayResponse.responseType'),
        outputPath: 'responseType',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          statusCode: this.input.statusCode,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutGatewayResponse.responseType', props);
    return resource.getResponseField('responseType') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutGatewayResponse.statusCode'),
        outputPath: 'statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          statusCode: this.input.statusCode,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutGatewayResponse.statusCode', props);
    return resource.getResponseField('statusCode') as unknown as string;
  }

  public get responseParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutGatewayResponse.responseParameters'),
        outputPath: 'responseParameters',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          statusCode: this.input.statusCode,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutGatewayResponse.responseParameters', props);
    return resource.getResponseField('responseParameters') as unknown as Record<string, string>;
  }

  public get responseTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutGatewayResponse.responseTemplates'),
        outputPath: 'responseTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          statusCode: this.input.statusCode,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutGatewayResponse.responseTemplates', props);
    return resource.getResponseField('responseTemplates') as unknown as Record<string, string>;
  }

  public get defaultResponse(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutGatewayResponse.defaultResponse'),
        outputPath: 'defaultResponse',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          statusCode: this.input.statusCode,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutGatewayResponse.defaultResponse', props);
    return resource.getResponseField('defaultResponse') as unknown as boolean;
  }

}

export class APIGatewayPutIntegration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutIntegrationRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.type'),
        outputPath: 'type',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.httpMethod'),
        outputPath: 'httpMethod',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.httpMethod', props);
    return resource.getResponseField('httpMethod') as unknown as string;
  }

  public get uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.uri'),
        outputPath: 'uri',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.uri', props);
    return resource.getResponseField('uri') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.connectionType'),
        outputPath: 'connectionType',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.connectionType', props);
    return resource.getResponseField('connectionType') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get credentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.credentials'),
        outputPath: 'credentials',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.credentials', props);
    return resource.getResponseField('credentials') as unknown as string;
  }

  public get requestParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.requestParameters'),
        outputPath: 'requestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.requestParameters', props);
    return resource.getResponseField('requestParameters') as unknown as Record<string, string>;
  }

  public get requestTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.requestTemplates'),
        outputPath: 'requestTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.requestTemplates', props);
    return resource.getResponseField('requestTemplates') as unknown as Record<string, string>;
  }

  public get passthroughBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.passthroughBehavior'),
        outputPath: 'passthroughBehavior',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.passthroughBehavior', props);
    return resource.getResponseField('passthroughBehavior') as unknown as string;
  }

  public get contentHandling(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.contentHandling'),
        outputPath: 'contentHandling',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.contentHandling', props);
    return resource.getResponseField('contentHandling') as unknown as string;
  }

  public get timeoutInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.timeoutInMillis'),
        outputPath: 'timeoutInMillis',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.timeoutInMillis', props);
    return resource.getResponseField('timeoutInMillis') as unknown as number;
  }

  public get cacheNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.cacheNamespace'),
        outputPath: 'cacheNamespace',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.cacheNamespace', props);
    return resource.getResponseField('cacheNamespace') as unknown as string;
  }

  public get cacheKeyParameters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.cacheKeyParameters'),
        outputPath: 'cacheKeyParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.cacheKeyParameters', props);
    return resource.getResponseField('cacheKeyParameters') as unknown as string[];
  }

  public get integrationResponses(): Record<string, shapes.ApiGatewayIntegrationResponse> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.integrationResponses'),
        outputPath: 'integrationResponses',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.integrationResponses', props);
    return resource.getResponseField('integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayPutIntegrationTlsConfig {
    return new APIGatewayPutIntegrationTlsConfig(this, 'TlsConfig', this.__resources, this.input);
  }

}

export class APIGatewayPutIntegrationTlsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutIntegrationRequest) {
    super(scope, id);
  }

  public get insecureSkipVerification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegration.tlsConfig.insecureSkipVerification'),
        outputPath: 'tlsConfig.insecureSkipVerification',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          type: this.input.type,
          integrationHttpMethod: this.input.integrationHttpMethod,
          uri: this.input.uri,
          connectionType: this.input.connectionType,
          connectionId: this.input.connectionId,
          credentials: this.input.credentials,
          requestParameters: this.input.requestParameters,
          requestTemplates: this.input.requestTemplates,
          passthroughBehavior: this.input.passthroughBehavior,
          cacheNamespace: this.input.cacheNamespace,
          cacheKeyParameters: this.input.cacheKeyParameters,
          contentHandling: this.input.contentHandling,
          timeoutInMillis: this.input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayPutIntegrationResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutIntegrationResponseRequest) {
    super(scope, id);
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegrationResponse.statusCode'),
        outputPath: 'statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          selectionPattern: this.input.selectionPattern,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
          contentHandling: this.input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegrationResponse.statusCode', props);
    return resource.getResponseField('statusCode') as unknown as string;
  }

  public get selectionPattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegrationResponse.selectionPattern'),
        outputPath: 'selectionPattern',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          selectionPattern: this.input.selectionPattern,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
          contentHandling: this.input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegrationResponse.selectionPattern', props);
    return resource.getResponseField('selectionPattern') as unknown as string;
  }

  public get responseParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegrationResponse.responseParameters'),
        outputPath: 'responseParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          selectionPattern: this.input.selectionPattern,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
          contentHandling: this.input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegrationResponse.responseParameters', props);
    return resource.getResponseField('responseParameters') as unknown as Record<string, string>;
  }

  public get responseTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegrationResponse.responseTemplates'),
        outputPath: 'responseTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          selectionPattern: this.input.selectionPattern,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
          contentHandling: this.input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegrationResponse.responseTemplates', props);
    return resource.getResponseField('responseTemplates') as unknown as Record<string, string>;
  }

  public get contentHandling(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutIntegrationResponse.contentHandling'),
        outputPath: 'contentHandling',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          selectionPattern: this.input.selectionPattern,
          responseParameters: this.input.responseParameters,
          responseTemplates: this.input.responseTemplates,
          contentHandling: this.input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutIntegrationResponse.contentHandling', props);
    return resource.getResponseField('contentHandling') as unknown as string;
  }

}

export class APIGatewayPutMethod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutMethodRequest) {
    super(scope, id);
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.httpMethod'),
        outputPath: 'httpMethod',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.httpMethod', props);
    return resource.getResponseField('httpMethod') as unknown as string;
  }

  public get authorizationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.authorizationType'),
        outputPath: 'authorizationType',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.authorizationType', props);
    return resource.getResponseField('authorizationType') as unknown as string;
  }

  public get authorizerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.authorizerId'),
        outputPath: 'authorizerId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.authorizerId', props);
    return resource.getResponseField('authorizerId') as unknown as string;
  }

  public get apiKeyRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.apiKeyRequired'),
        outputPath: 'apiKeyRequired',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.apiKeyRequired', props);
    return resource.getResponseField('apiKeyRequired') as unknown as boolean;
  }

  public get requestValidatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.requestValidatorId'),
        outputPath: 'requestValidatorId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.requestValidatorId', props);
    return resource.getResponseField('requestValidatorId') as unknown as string;
  }

  public get operationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.operationName'),
        outputPath: 'operationName',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.operationName', props);
    return resource.getResponseField('operationName') as unknown as string;
  }

  public get requestParameters(): Record<string, boolean> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.requestParameters'),
        outputPath: 'requestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.requestParameters', props);
    return resource.getResponseField('requestParameters') as unknown as Record<string, boolean>;
  }

  public get requestModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.requestModels'),
        outputPath: 'requestModels',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.requestModels', props);
    return resource.getResponseField('requestModels') as unknown as Record<string, string>;
  }

  public get methodResponses(): Record<string, shapes.ApiGatewayMethodResponse> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodResponses'),
        outputPath: 'methodResponses',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodResponses', props);
    return resource.getResponseField('methodResponses') as unknown as Record<string, shapes.ApiGatewayMethodResponse>;
  }

  public get methodIntegration(): APIGatewayPutMethodMethodIntegration {
    return new APIGatewayPutMethodMethodIntegration(this, 'MethodIntegration', this.__resources, this.input);
  }

  public get authorizationScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.authorizationScopes'),
        outputPath: 'authorizationScopes',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.authorizationScopes', props);
    return resource.getResponseField('authorizationScopes') as unknown as string[];
  }

}

export class APIGatewayPutMethodMethodIntegration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutMethodRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.type'),
        outputPath: 'methodIntegration.type',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.type', props);
    return resource.getResponseField('methodIntegration.type') as unknown as string;
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.httpMethod'),
        outputPath: 'methodIntegration.httpMethod',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.httpMethod', props);
    return resource.getResponseField('methodIntegration.httpMethod') as unknown as string;
  }

  public get uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.uri'),
        outputPath: 'methodIntegration.uri',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.uri', props);
    return resource.getResponseField('methodIntegration.uri') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.connectionType'),
        outputPath: 'methodIntegration.connectionType',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.connectionType', props);
    return resource.getResponseField('methodIntegration.connectionType') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.connectionId'),
        outputPath: 'methodIntegration.connectionId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.connectionId', props);
    return resource.getResponseField('methodIntegration.connectionId') as unknown as string;
  }

  public get credentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.credentials'),
        outputPath: 'methodIntegration.credentials',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.credentials', props);
    return resource.getResponseField('methodIntegration.credentials') as unknown as string;
  }

  public get requestParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.requestParameters'),
        outputPath: 'methodIntegration.requestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.requestParameters', props);
    return resource.getResponseField('methodIntegration.requestParameters') as unknown as Record<string, string>;
  }

  public get requestTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.requestTemplates'),
        outputPath: 'methodIntegration.requestTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.requestTemplates', props);
    return resource.getResponseField('methodIntegration.requestTemplates') as unknown as Record<string, string>;
  }

  public get passthroughBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.passthroughBehavior'),
        outputPath: 'methodIntegration.passthroughBehavior',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.passthroughBehavior', props);
    return resource.getResponseField('methodIntegration.passthroughBehavior') as unknown as string;
  }

  public get contentHandling(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.contentHandling'),
        outputPath: 'methodIntegration.contentHandling',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.contentHandling', props);
    return resource.getResponseField('methodIntegration.contentHandling') as unknown as string;
  }

  public get timeoutInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.timeoutInMillis'),
        outputPath: 'methodIntegration.timeoutInMillis',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.timeoutInMillis', props);
    return resource.getResponseField('methodIntegration.timeoutInMillis') as unknown as number;
  }

  public get cacheNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.cacheNamespace'),
        outputPath: 'methodIntegration.cacheNamespace',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.cacheNamespace', props);
    return resource.getResponseField('methodIntegration.cacheNamespace') as unknown as string;
  }

  public get cacheKeyParameters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.cacheKeyParameters'),
        outputPath: 'methodIntegration.cacheKeyParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.cacheKeyParameters', props);
    return resource.getResponseField('methodIntegration.cacheKeyParameters') as unknown as string[];
  }

  public get integrationResponses(): Record<string, shapes.ApiGatewayIntegrationResponse> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.integrationResponses'),
        outputPath: 'methodIntegration.integrationResponses',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.integrationResponses', props);
    return resource.getResponseField('methodIntegration.integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayPutMethodMethodIntegrationTlsConfig {
    return new APIGatewayPutMethodMethodIntegrationTlsConfig(this, 'TlsConfig', this.__resources, this.input);
  }

}

export class APIGatewayPutMethodMethodIntegrationTlsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutMethodRequest) {
    super(scope, id);
  }

  public get insecureSkipVerification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethod.methodIntegration.tlsConfig.insecureSkipVerification'),
        outputPath: 'methodIntegration.tlsConfig.insecureSkipVerification',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          authorizationType: this.input.authorizationType,
          authorizerId: this.input.authorizerId,
          apiKeyRequired: this.input.apiKeyRequired,
          operationName: this.input.operationName,
          requestParameters: this.input.requestParameters,
          requestModels: this.input.requestModels,
          requestValidatorId: this.input.requestValidatorId,
          authorizationScopes: this.input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethod.methodIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('methodIntegration.tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayPutMethodResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutMethodResponseRequest) {
    super(scope, id);
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethodResponse.statusCode'),
        outputPath: 'statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          responseParameters: this.input.responseParameters,
          responseModels: this.input.responseModels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethodResponse.statusCode', props);
    return resource.getResponseField('statusCode') as unknown as string;
  }

  public get responseParameters(): Record<string, boolean> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethodResponse.responseParameters'),
        outputPath: 'responseParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          responseParameters: this.input.responseParameters,
          responseModels: this.input.responseModels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethodResponse.responseParameters', props);
    return resource.getResponseField('responseParameters') as unknown as Record<string, boolean>;
  }

  public get responseModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutMethodResponse.responseModels'),
        outputPath: 'responseModels',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          responseParameters: this.input.responseParameters,
          responseModels: this.input.responseModels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutMethodResponse.responseModels', props);
    return resource.getResponseField('responseModels') as unknown as Record<string, string>;
  }

}

export class APIGatewayPutRestApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutRestApiRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.version'),
        outputPath: 'version',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.warnings'),
        outputPath: 'warnings',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

  public get binaryMediaTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.binaryMediaTypes'),
        outputPath: 'binaryMediaTypes',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.binaryMediaTypes', props);
    return resource.getResponseField('binaryMediaTypes') as unknown as string[];
  }

  public get minimumCompressionSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.minimumCompressionSize'),
        outputPath: 'minimumCompressionSize',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.minimumCompressionSize', props);
    return resource.getResponseField('minimumCompressionSize') as unknown as number;
  }

  public get apiKeySource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.apiKeySource'),
        outputPath: 'apiKeySource',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayPutRestApiEndpointConfiguration {
    return new APIGatewayPutRestApiEndpointConfiguration(this, 'EndpointConfiguration', this.__resources, this.input);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.policy'),
        outputPath: 'policy',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.tags'),
        outputPath: 'tags',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.disableExecuteApiEndpoint'),
        outputPath: 'disableExecuteApiEndpoint',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayPutRestApiEndpointConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayPutRestApiRequest) {
    super(scope, id);
  }

  public get types(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.endpointConfiguration.types'),
        outputPath: 'endpointConfiguration.types',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.endpointConfiguration.types', props);
    return resource.getResponseField('endpointConfiguration.types') as unknown as string[];
  }

  public get vpcEndpointIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.PutRestApi.endpointConfiguration.vpcEndpointIds'),
        outputPath: 'endpointConfiguration.vpcEndpointIds',
        parameters: {
          restApiId: this.input.restApiId,
          mode: this.input.mode,
          failOnWarnings: this.input.failOnWarnings,
          parameters: this.input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayTestInvokeAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayTestInvokeAuthorizerRequest) {
    super(scope, id);
  }

  public get clientStatus(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeAuthorizer.clientStatus'),
        outputPath: 'clientStatus',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          stageVariables: this.input.stageVariables,
          additionalContext: this.input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.clientStatus', props);
    return resource.getResponseField('clientStatus') as unknown as number;
  }

  public get log(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeAuthorizer.log'),
        outputPath: 'log',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          stageVariables: this.input.stageVariables,
          additionalContext: this.input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.log', props);
    return resource.getResponseField('log') as unknown as string;
  }

  public get latency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeAuthorizer.latency'),
        outputPath: 'latency',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          stageVariables: this.input.stageVariables,
          additionalContext: this.input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.latency', props);
    return resource.getResponseField('latency') as unknown as number;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeAuthorizer.principalId'),
        outputPath: 'principalId',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          stageVariables: this.input.stageVariables,
          additionalContext: this.input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.principalId', props);
    return resource.getResponseField('principalId') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeAuthorizer.policy'),
        outputPath: 'policy',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          stageVariables: this.input.stageVariables,
          additionalContext: this.input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

  public get authorization(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeAuthorizer.authorization'),
        outputPath: 'authorization',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          stageVariables: this.input.stageVariables,
          additionalContext: this.input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.authorization', props);
    return resource.getResponseField('authorization') as unknown as Record<string, string[]>;
  }

  public get claims(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeAuthorizer.claims'),
        outputPath: 'claims',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          stageVariables: this.input.stageVariables,
          additionalContext: this.input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.claims', props);
    return resource.getResponseField('claims') as unknown as Record<string, string>;
  }

}

export class APIGatewayTestInvokeMethod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayTestInvokeMethodRequest) {
    super(scope, id);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeMethod.status'),
        outputPath: 'status',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          clientCertificateId: this.input.clientCertificateId,
          stageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeMethod.status', props);
    return resource.getResponseField('status') as unknown as number;
  }

  public get body(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeMethod.body'),
        outputPath: 'body',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          clientCertificateId: this.input.clientCertificateId,
          stageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeMethod.body', props);
    return resource.getResponseField('body') as unknown as string;
  }

  public get headers(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeMethod.headers'),
        outputPath: 'headers',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          clientCertificateId: this.input.clientCertificateId,
          stageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeMethod.headers', props);
    return resource.getResponseField('headers') as unknown as Record<string, string>;
  }

  public get multiValueHeaders(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeMethod.multiValueHeaders'),
        outputPath: 'multiValueHeaders',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          clientCertificateId: this.input.clientCertificateId,
          stageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeMethod.multiValueHeaders', props);
    return resource.getResponseField('multiValueHeaders') as unknown as Record<string, string[]>;
  }

  public get log(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeMethod.log'),
        outputPath: 'log',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          clientCertificateId: this.input.clientCertificateId,
          stageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeMethod.log', props);
    return resource.getResponseField('log') as unknown as string;
  }

  public get latency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.TestInvokeMethod.latency'),
        outputPath: 'latency',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          pathWithQueryString: this.input.pathWithQueryString,
          body: this.input.body,
          headers: this.input.headers,
          multiValueHeaders: this.input.multiValueHeaders,
          clientCertificateId: this.input.clientCertificateId,
          stageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeMethod.latency', props);
    return resource.getResponseField('latency') as unknown as number;
  }

}

export class APIGatewayUpdateAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateAccountRequest) {
    super(scope, id);
  }

  public get cloudwatchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAccount.cloudwatchRoleArn'),
        outputPath: 'cloudwatchRoleArn',
        parameters: {
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.cloudwatchRoleArn', props);
    return resource.getResponseField('cloudwatchRoleArn') as unknown as string;
  }

  public get throttleSettings(): APIGatewayUpdateAccountThrottleSettings {
    return new APIGatewayUpdateAccountThrottleSettings(this, 'ThrottleSettings', this.__resources, this.input);
  }

  public get features(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAccount.features'),
        outputPath: 'features',
        parameters: {
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.features', props);
    return resource.getResponseField('features') as unknown as string[];
  }

  public get apiKeyVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAccount.apiKeyVersion'),
        outputPath: 'apiKeyVersion',
        parameters: {
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.apiKeyVersion', props);
    return resource.getResponseField('apiKeyVersion') as unknown as string;
  }

}

export class APIGatewayUpdateAccountThrottleSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateAccountRequest) {
    super(scope, id);
  }

  public get burstLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAccount.throttleSettings.burstLimit'),
        outputPath: 'throttleSettings.burstLimit',
        parameters: {
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.throttleSettings.burstLimit', props);
    return resource.getResponseField('throttleSettings.burstLimit') as unknown as number;
  }

  public get rateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccount',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAccount.throttleSettings.rateLimit'),
        outputPath: 'throttleSettings.rateLimit',
        parameters: {
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccount.throttleSettings.rateLimit', props);
    return resource.getResponseField('throttleSettings.rateLimit') as unknown as number;
  }

}

export class APIGatewayUpdateApiKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateApiKeyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.id'),
        outputPath: 'id',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.value'),
        outputPath: 'value',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.value', props);
    return resource.getResponseField('value') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.name'),
        outputPath: 'name',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get customerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.customerId'),
        outputPath: 'customerId',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.customerId', props);
    return resource.getResponseField('customerId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.description'),
        outputPath: 'description',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.enabled'),
        outputPath: 'enabled',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.enabled', props);
    return resource.getResponseField('enabled') as unknown as boolean;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.lastUpdatedDate'),
        outputPath: 'lastUpdatedDate',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.lastUpdatedDate', props);
    return resource.getResponseField('lastUpdatedDate') as unknown as string;
  }

  public get stageKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.stageKeys'),
        outputPath: 'stageKeys',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.stageKeys', props);
    return resource.getResponseField('stageKeys') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiKey',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateApiKey.tags'),
        outputPath: 'tags',
        parameters: {
          apiKey: this.input.apiKey,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiKey.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayUpdateAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateAuthorizerRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.type'),
        outputPath: 'type',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get providerArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.providerARNs'),
        outputPath: 'providerARNs',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.providerARNs', props);
    return resource.getResponseField('providerARNs') as unknown as string[];
  }

  public get authType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.authType'),
        outputPath: 'authType',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.authType', props);
    return resource.getResponseField('authType') as unknown as string;
  }

  public get authorizerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.authorizerUri'),
        outputPath: 'authorizerUri',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.authorizerUri', props);
    return resource.getResponseField('authorizerUri') as unknown as string;
  }

  public get authorizerCredentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.authorizerCredentials'),
        outputPath: 'authorizerCredentials',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.authorizerCredentials', props);
    return resource.getResponseField('authorizerCredentials') as unknown as string;
  }

  public get identitySource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.identitySource'),
        outputPath: 'identitySource',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.identitySource', props);
    return resource.getResponseField('identitySource') as unknown as string;
  }

  public get identityValidationExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.identityValidationExpression'),
        outputPath: 'identityValidationExpression',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.identityValidationExpression', props);
    return resource.getResponseField('identityValidationExpression') as unknown as string;
  }

  public get authorizerResultTtlInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateAuthorizer.authorizerResultTtlInSeconds'),
        outputPath: 'authorizerResultTtlInSeconds',
        parameters: {
          restApiId: this.input.restApiId,
          authorizerId: this.input.authorizerId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.authorizerResultTtlInSeconds', props);
    return resource.getResponseField('authorizerResultTtlInSeconds') as unknown as number;
  }

}

export class APIGatewayUpdateBasePathMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateBasePathMappingRequest) {
    super(scope, id);
  }

  public get basePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateBasePathMapping.basePath'),
        outputPath: 'basePath',
        parameters: {
          domainName: this.input.domainName,
          basePath: this.input.basePath,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBasePathMapping.basePath', props);
    return resource.getResponseField('basePath') as unknown as string;
  }

  public get restApiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateBasePathMapping.restApiId'),
        outputPath: 'restApiId',
        parameters: {
          domainName: this.input.domainName,
          basePath: this.input.basePath,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBasePathMapping.restApiId', props);
    return resource.getResponseField('restApiId') as unknown as string;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBasePathMapping',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateBasePathMapping.stage'),
        outputPath: 'stage',
        parameters: {
          domainName: this.input.domainName,
          basePath: this.input.basePath,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBasePathMapping.stage', props);
    return resource.getResponseField('stage') as unknown as string;
  }

}

export class APIGatewayUpdateClientCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateClientCertificateRequest) {
    super(scope, id);
  }

  public get clientCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateClientCertificate.clientCertificateId'),
        outputPath: 'clientCertificateId',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClientCertificate.clientCertificateId', props);
    return resource.getResponseField('clientCertificateId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateClientCertificate.description'),
        outputPath: 'description',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClientCertificate.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get pemEncodedCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateClientCertificate.pemEncodedCertificate'),
        outputPath: 'pemEncodedCertificate',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClientCertificate.pemEncodedCertificate', props);
    return resource.getResponseField('pemEncodedCertificate') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateClientCertificate.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClientCertificate.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get expirationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateClientCertificate.expirationDate'),
        outputPath: 'expirationDate',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClientCertificate.expirationDate', props);
    return resource.getResponseField('expirationDate') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClientCertificate',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateClientCertificate.tags'),
        outputPath: 'tags',
        parameters: {
          clientCertificateId: this.input.clientCertificateId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClientCertificate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayUpdateDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateDeploymentRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDeployment.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          deploymentId: this.input.deploymentId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDeployment.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          deploymentId: this.input.deploymentId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDeployment.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          deploymentId: this.input.deploymentId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get apiSummary(): Record<string, Record<string, shapes.ApiGatewayMethodSnapshot>> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDeployment.apiSummary'),
        outputPath: 'apiSummary',
        parameters: {
          restApiId: this.input.restApiId,
          deploymentId: this.input.deploymentId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.apiSummary', props);
    return resource.getResponseField('apiSummary') as unknown as Record<string, Record<string, shapes.ApiGatewayMethodSnapshot>>;
  }

}

export class APIGatewayUpdateDocumentationPart extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateDocumentationPartRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationPart.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationPart.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get location(): APIGatewayUpdateDocumentationPartLocation {
    return new APIGatewayUpdateDocumentationPartLocation(this, 'Location', this.__resources, this.input);
  }

  public get properties(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationPart.properties'),
        outputPath: 'properties',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationPart.properties', props);
    return resource.getResponseField('properties') as unknown as string;
  }

}

export class APIGatewayUpdateDocumentationPartLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateDocumentationPartRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationPart.location.type'),
        outputPath: 'location.type',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationPart.location.type', props);
    return resource.getResponseField('location.type') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationPart.location.path'),
        outputPath: 'location.path',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationPart.location.path', props);
    return resource.getResponseField('location.path') as unknown as string;
  }

  public get method(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationPart.location.method'),
        outputPath: 'location.method',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationPart.location.method', props);
    return resource.getResponseField('location.method') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationPart.location.statusCode'),
        outputPath: 'location.statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationPart.location.statusCode', props);
    return resource.getResponseField('location.statusCode') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationPart',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationPart.location.name'),
        outputPath: 'location.name',
        parameters: {
          restApiId: this.input.restApiId,
          documentationPartId: this.input.documentationPartId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationPart.location.name', props);
    return resource.getResponseField('location.name') as unknown as string;
  }

}

export class APIGatewayUpdateDocumentationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateDocumentationVersionRequest) {
    super(scope, id);
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationVersion.version'),
        outputPath: 'version',
        parameters: {
          restApiId: this.input.restApiId,
          documentationVersion: this.input.documentationVersion,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationVersion.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationVersion.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          documentationVersion: this.input.documentationVersion,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationVersion.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentationVersion',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDocumentationVersion.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          documentationVersion: this.input.documentationVersion,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentationVersion.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class APIGatewayUpdateDomainName extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateDomainNameRequest) {
    super(scope, id);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.domainName'),
        outputPath: 'domainName',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.domainName', props);
    return resource.getResponseField('domainName') as unknown as string;
  }

  public get certificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.certificateName'),
        outputPath: 'certificateName',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.certificateName', props);
    return resource.getResponseField('certificateName') as unknown as string;
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.certificateArn'),
        outputPath: 'certificateArn',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.certificateArn', props);
    return resource.getResponseField('certificateArn') as unknown as string;
  }

  public get certificateUploadDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.certificateUploadDate'),
        outputPath: 'certificateUploadDate',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.certificateUploadDate', props);
    return resource.getResponseField('certificateUploadDate') as unknown as string;
  }

  public get regionalDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.regionalDomainName'),
        outputPath: 'regionalDomainName',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.regionalDomainName', props);
    return resource.getResponseField('regionalDomainName') as unknown as string;
  }

  public get regionalHostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.regionalHostedZoneId'),
        outputPath: 'regionalHostedZoneId',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.regionalHostedZoneId', props);
    return resource.getResponseField('regionalHostedZoneId') as unknown as string;
  }

  public get regionalCertificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.regionalCertificateName'),
        outputPath: 'regionalCertificateName',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.regionalCertificateName', props);
    return resource.getResponseField('regionalCertificateName') as unknown as string;
  }

  public get regionalCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.regionalCertificateArn'),
        outputPath: 'regionalCertificateArn',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.regionalCertificateArn', props);
    return resource.getResponseField('regionalCertificateArn') as unknown as string;
  }

  public get distributionDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.distributionDomainName'),
        outputPath: 'distributionDomainName',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.distributionDomainName', props);
    return resource.getResponseField('distributionDomainName') as unknown as string;
  }

  public get distributionHostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.distributionHostedZoneId'),
        outputPath: 'distributionHostedZoneId',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.distributionHostedZoneId', props);
    return resource.getResponseField('distributionHostedZoneId') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayUpdateDomainNameEndpointConfiguration {
    return new APIGatewayUpdateDomainNameEndpointConfiguration(this, 'EndpointConfiguration', this.__resources, this.input);
  }

  public get domainNameStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.domainNameStatus'),
        outputPath: 'domainNameStatus',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.domainNameStatus', props);
    return resource.getResponseField('domainNameStatus') as unknown as string;
  }

  public get domainNameStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.domainNameStatusMessage'),
        outputPath: 'domainNameStatusMessage',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.domainNameStatusMessage', props);
    return resource.getResponseField('domainNameStatusMessage') as unknown as string;
  }

  public get securityPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.securityPolicy'),
        outputPath: 'securityPolicy',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.securityPolicy', props);
    return resource.getResponseField('securityPolicy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.tags'),
        outputPath: 'tags',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get mutualTlsAuthentication(): APIGatewayUpdateDomainNameMutualTlsAuthentication {
    return new APIGatewayUpdateDomainNameMutualTlsAuthentication(this, 'MutualTlsAuthentication', this.__resources, this.input);
  }

}

export class APIGatewayUpdateDomainNameEndpointConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateDomainNameRequest) {
    super(scope, id);
  }

  public get types(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.endpointConfiguration.types'),
        outputPath: 'endpointConfiguration.types',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.endpointConfiguration.types', props);
    return resource.getResponseField('endpointConfiguration.types') as unknown as string[];
  }

  public get vpcEndpointIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.endpointConfiguration.vpcEndpointIds'),
        outputPath: 'endpointConfiguration.vpcEndpointIds',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayUpdateDomainNameMutualTlsAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateDomainNameRequest) {
    super(scope, id);
  }

  public get truststoreUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.mutualTlsAuthentication.truststoreUri'),
        outputPath: 'mutualTlsAuthentication.truststoreUri',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.mutualTlsAuthentication.truststoreUri', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreUri') as unknown as string;
  }

  public get truststoreVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.mutualTlsAuthentication.truststoreVersion'),
        outputPath: 'mutualTlsAuthentication.truststoreVersion',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.mutualTlsAuthentication.truststoreVersion', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreVersion') as unknown as string;
  }

  public get truststoreWarnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateDomainName.mutualTlsAuthentication.truststoreWarnings'),
        outputPath: 'mutualTlsAuthentication.truststoreWarnings',
        parameters: {
          domainName: this.input.domainName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.mutualTlsAuthentication.truststoreWarnings', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreWarnings') as unknown as string[];
  }

}

export class APIGatewayUpdateGatewayResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateGatewayResponseRequest) {
    super(scope, id);
  }

  public get responseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateGatewayResponse.responseType'),
        outputPath: 'responseType',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewayResponse.responseType', props);
    return resource.getResponseField('responseType') as unknown as string;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateGatewayResponse.statusCode'),
        outputPath: 'statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewayResponse.statusCode', props);
    return resource.getResponseField('statusCode') as unknown as string;
  }

  public get responseParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateGatewayResponse.responseParameters'),
        outputPath: 'responseParameters',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewayResponse.responseParameters', props);
    return resource.getResponseField('responseParameters') as unknown as Record<string, string>;
  }

  public get responseTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateGatewayResponse.responseTemplates'),
        outputPath: 'responseTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewayResponse.responseTemplates', props);
    return resource.getResponseField('responseTemplates') as unknown as Record<string, string>;
  }

  public get defaultResponse(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateGatewayResponse.defaultResponse'),
        outputPath: 'defaultResponse',
        parameters: {
          restApiId: this.input.restApiId,
          responseType: this.input.responseType,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewayResponse.defaultResponse', props);
    return resource.getResponseField('defaultResponse') as unknown as boolean;
  }

}

export class APIGatewayUpdateIntegration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateIntegrationRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.type'),
        outputPath: 'type',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.httpMethod'),
        outputPath: 'httpMethod',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.httpMethod', props);
    return resource.getResponseField('httpMethod') as unknown as string;
  }

  public get uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.uri'),
        outputPath: 'uri',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.uri', props);
    return resource.getResponseField('uri') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.connectionType'),
        outputPath: 'connectionType',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.connectionType', props);
    return resource.getResponseField('connectionType') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get credentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.credentials'),
        outputPath: 'credentials',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.credentials', props);
    return resource.getResponseField('credentials') as unknown as string;
  }

  public get requestParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.requestParameters'),
        outputPath: 'requestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.requestParameters', props);
    return resource.getResponseField('requestParameters') as unknown as Record<string, string>;
  }

  public get requestTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.requestTemplates'),
        outputPath: 'requestTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.requestTemplates', props);
    return resource.getResponseField('requestTemplates') as unknown as Record<string, string>;
  }

  public get passthroughBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.passthroughBehavior'),
        outputPath: 'passthroughBehavior',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.passthroughBehavior', props);
    return resource.getResponseField('passthroughBehavior') as unknown as string;
  }

  public get contentHandling(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.contentHandling'),
        outputPath: 'contentHandling',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.contentHandling', props);
    return resource.getResponseField('contentHandling') as unknown as string;
  }

  public get timeoutInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.timeoutInMillis'),
        outputPath: 'timeoutInMillis',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.timeoutInMillis', props);
    return resource.getResponseField('timeoutInMillis') as unknown as number;
  }

  public get cacheNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.cacheNamespace'),
        outputPath: 'cacheNamespace',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.cacheNamespace', props);
    return resource.getResponseField('cacheNamespace') as unknown as string;
  }

  public get cacheKeyParameters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.cacheKeyParameters'),
        outputPath: 'cacheKeyParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.cacheKeyParameters', props);
    return resource.getResponseField('cacheKeyParameters') as unknown as string[];
  }

  public get integrationResponses(): Record<string, shapes.ApiGatewayIntegrationResponse> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.integrationResponses'),
        outputPath: 'integrationResponses',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.integrationResponses', props);
    return resource.getResponseField('integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayUpdateIntegrationTlsConfig {
    return new APIGatewayUpdateIntegrationTlsConfig(this, 'TlsConfig', this.__resources, this.input);
  }

}

export class APIGatewayUpdateIntegrationTlsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateIntegrationRequest) {
    super(scope, id);
  }

  public get insecureSkipVerification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegration.tlsConfig.insecureSkipVerification'),
        outputPath: 'tlsConfig.insecureSkipVerification',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayUpdateIntegrationResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateIntegrationResponseRequest) {
    super(scope, id);
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegrationResponse.statusCode'),
        outputPath: 'statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.statusCode', props);
    return resource.getResponseField('statusCode') as unknown as string;
  }

  public get selectionPattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegrationResponse.selectionPattern'),
        outputPath: 'selectionPattern',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.selectionPattern', props);
    return resource.getResponseField('selectionPattern') as unknown as string;
  }

  public get responseParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegrationResponse.responseParameters'),
        outputPath: 'responseParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.responseParameters', props);
    return resource.getResponseField('responseParameters') as unknown as Record<string, string>;
  }

  public get responseTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegrationResponse.responseTemplates'),
        outputPath: 'responseTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.responseTemplates', props);
    return resource.getResponseField('responseTemplates') as unknown as Record<string, string>;
  }

  public get contentHandling(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateIntegrationResponse.contentHandling'),
        outputPath: 'contentHandling',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.contentHandling', props);
    return resource.getResponseField('contentHandling') as unknown as string;
  }

}

export class APIGatewayUpdateMethod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateMethodRequest) {
    super(scope, id);
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.httpMethod'),
        outputPath: 'httpMethod',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.httpMethod', props);
    return resource.getResponseField('httpMethod') as unknown as string;
  }

  public get authorizationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.authorizationType'),
        outputPath: 'authorizationType',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.authorizationType', props);
    return resource.getResponseField('authorizationType') as unknown as string;
  }

  public get authorizerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.authorizerId'),
        outputPath: 'authorizerId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.authorizerId', props);
    return resource.getResponseField('authorizerId') as unknown as string;
  }

  public get apiKeyRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.apiKeyRequired'),
        outputPath: 'apiKeyRequired',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.apiKeyRequired', props);
    return resource.getResponseField('apiKeyRequired') as unknown as boolean;
  }

  public get requestValidatorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.requestValidatorId'),
        outputPath: 'requestValidatorId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.requestValidatorId', props);
    return resource.getResponseField('requestValidatorId') as unknown as string;
  }

  public get operationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.operationName'),
        outputPath: 'operationName',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.operationName', props);
    return resource.getResponseField('operationName') as unknown as string;
  }

  public get requestParameters(): Record<string, boolean> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.requestParameters'),
        outputPath: 'requestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.requestParameters', props);
    return resource.getResponseField('requestParameters') as unknown as Record<string, boolean>;
  }

  public get requestModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.requestModels'),
        outputPath: 'requestModels',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.requestModels', props);
    return resource.getResponseField('requestModels') as unknown as Record<string, string>;
  }

  public get methodResponses(): Record<string, shapes.ApiGatewayMethodResponse> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodResponses'),
        outputPath: 'methodResponses',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodResponses', props);
    return resource.getResponseField('methodResponses') as unknown as Record<string, shapes.ApiGatewayMethodResponse>;
  }

  public get methodIntegration(): APIGatewayUpdateMethodMethodIntegration {
    return new APIGatewayUpdateMethodMethodIntegration(this, 'MethodIntegration', this.__resources, this.input);
  }

  public get authorizationScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.authorizationScopes'),
        outputPath: 'authorizationScopes',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.authorizationScopes', props);
    return resource.getResponseField('authorizationScopes') as unknown as string[];
  }

}

export class APIGatewayUpdateMethodMethodIntegration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateMethodRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.type'),
        outputPath: 'methodIntegration.type',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.type', props);
    return resource.getResponseField('methodIntegration.type') as unknown as string;
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.httpMethod'),
        outputPath: 'methodIntegration.httpMethod',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.httpMethod', props);
    return resource.getResponseField('methodIntegration.httpMethod') as unknown as string;
  }

  public get uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.uri'),
        outputPath: 'methodIntegration.uri',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.uri', props);
    return resource.getResponseField('methodIntegration.uri') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.connectionType'),
        outputPath: 'methodIntegration.connectionType',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.connectionType', props);
    return resource.getResponseField('methodIntegration.connectionType') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.connectionId'),
        outputPath: 'methodIntegration.connectionId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.connectionId', props);
    return resource.getResponseField('methodIntegration.connectionId') as unknown as string;
  }

  public get credentials(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.credentials'),
        outputPath: 'methodIntegration.credentials',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.credentials', props);
    return resource.getResponseField('methodIntegration.credentials') as unknown as string;
  }

  public get requestParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.requestParameters'),
        outputPath: 'methodIntegration.requestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.requestParameters', props);
    return resource.getResponseField('methodIntegration.requestParameters') as unknown as Record<string, string>;
  }

  public get requestTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.requestTemplates'),
        outputPath: 'methodIntegration.requestTemplates',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.requestTemplates', props);
    return resource.getResponseField('methodIntegration.requestTemplates') as unknown as Record<string, string>;
  }

  public get passthroughBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.passthroughBehavior'),
        outputPath: 'methodIntegration.passthroughBehavior',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.passthroughBehavior', props);
    return resource.getResponseField('methodIntegration.passthroughBehavior') as unknown as string;
  }

  public get contentHandling(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.contentHandling'),
        outputPath: 'methodIntegration.contentHandling',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.contentHandling', props);
    return resource.getResponseField('methodIntegration.contentHandling') as unknown as string;
  }

  public get timeoutInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.timeoutInMillis'),
        outputPath: 'methodIntegration.timeoutInMillis',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.timeoutInMillis', props);
    return resource.getResponseField('methodIntegration.timeoutInMillis') as unknown as number;
  }

  public get cacheNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.cacheNamespace'),
        outputPath: 'methodIntegration.cacheNamespace',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.cacheNamespace', props);
    return resource.getResponseField('methodIntegration.cacheNamespace') as unknown as string;
  }

  public get cacheKeyParameters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.cacheKeyParameters'),
        outputPath: 'methodIntegration.cacheKeyParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.cacheKeyParameters', props);
    return resource.getResponseField('methodIntegration.cacheKeyParameters') as unknown as string[];
  }

  public get integrationResponses(): Record<string, shapes.ApiGatewayIntegrationResponse> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.integrationResponses'),
        outputPath: 'methodIntegration.integrationResponses',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.integrationResponses', props);
    return resource.getResponseField('methodIntegration.integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayUpdateMethodMethodIntegrationTlsConfig {
    return new APIGatewayUpdateMethodMethodIntegrationTlsConfig(this, 'TlsConfig', this.__resources, this.input);
  }

}

export class APIGatewayUpdateMethodMethodIntegrationTlsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateMethodRequest) {
    super(scope, id);
  }

  public get insecureSkipVerification(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethod',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethod.methodIntegration.tlsConfig.insecureSkipVerification'),
        outputPath: 'methodIntegration.tlsConfig.insecureSkipVerification',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethod.methodIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('methodIntegration.tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayUpdateMethodResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateMethodResponseRequest) {
    super(scope, id);
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethodResponse.statusCode'),
        outputPath: 'statusCode',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethodResponse.statusCode', props);
    return resource.getResponseField('statusCode') as unknown as string;
  }

  public get responseParameters(): Record<string, boolean> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethodResponse.responseParameters'),
        outputPath: 'responseParameters',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethodResponse.responseParameters', props);
    return resource.getResponseField('responseParameters') as unknown as Record<string, boolean>;
  }

  public get responseModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMethodResponse',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateMethodResponse.responseModels'),
        outputPath: 'responseModels',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          httpMethod: this.input.httpMethod,
          statusCode: this.input.statusCode,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMethodResponse.responseModels', props);
    return resource.getResponseField('responseModels') as unknown as Record<string, string>;
  }

}

export class APIGatewayUpdateModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateModelRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateModel.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateModel.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateModel.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateModel.schema'),
        outputPath: 'schema',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.schema', props);
    return resource.getResponseField('schema') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateModel.contentType'),
        outputPath: 'contentType',
        parameters: {
          restApiId: this.input.restApiId,
          modelName: this.input.modelName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

}

export class APIGatewayUpdateRequestValidator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateRequestValidatorRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRequestValidator.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          requestValidatorId: this.input.requestValidatorId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRequestValidator.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRequestValidator.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          requestValidatorId: this.input.requestValidatorId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRequestValidator.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get validateRequestBody(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRequestValidator.validateRequestBody'),
        outputPath: 'validateRequestBody',
        parameters: {
          restApiId: this.input.restApiId,
          requestValidatorId: this.input.requestValidatorId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRequestValidator.validateRequestBody', props);
    return resource.getResponseField('validateRequestBody') as unknown as boolean;
  }

  public get validateRequestParameters(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRequestValidator',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRequestValidator.validateRequestParameters'),
        outputPath: 'validateRequestParameters',
        parameters: {
          restApiId: this.input.restApiId,
          requestValidatorId: this.input.requestValidatorId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRequestValidator.validateRequestParameters', props);
    return resource.getResponseField('validateRequestParameters') as unknown as boolean;
  }

}

export class APIGatewayUpdateResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateResourceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateResource.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResource.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get parentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateResource.parentId'),
        outputPath: 'parentId',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResource.parentId', props);
    return resource.getResponseField('parentId') as unknown as string;
  }

  public get pathPart(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateResource.pathPart'),
        outputPath: 'pathPart',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResource.pathPart', props);
    return resource.getResponseField('pathPart') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateResource.path'),
        outputPath: 'path',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResource.path', props);
    return resource.getResponseField('path') as unknown as string;
  }

  public get resourceMethods(): Record<string, shapes.ApiGatewayMethod> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResource',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateResource.resourceMethods'),
        outputPath: 'resourceMethods',
        parameters: {
          restApiId: this.input.restApiId,
          resourceId: this.input.resourceId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResource.resourceMethods', props);
    return resource.getResponseField('resourceMethods') as unknown as Record<string, shapes.ApiGatewayMethod>;
  }

}

export class APIGatewayUpdateRestApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateRestApiRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.id'),
        outputPath: 'id',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.name'),
        outputPath: 'name',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.version'),
        outputPath: 'version',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.warnings'),
        outputPath: 'warnings',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

  public get binaryMediaTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.binaryMediaTypes'),
        outputPath: 'binaryMediaTypes',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.binaryMediaTypes', props);
    return resource.getResponseField('binaryMediaTypes') as unknown as string[];
  }

  public get minimumCompressionSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.minimumCompressionSize'),
        outputPath: 'minimumCompressionSize',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.minimumCompressionSize', props);
    return resource.getResponseField('minimumCompressionSize') as unknown as number;
  }

  public get apiKeySource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.apiKeySource'),
        outputPath: 'apiKeySource',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayUpdateRestApiEndpointConfiguration {
    return new APIGatewayUpdateRestApiEndpointConfiguration(this, 'EndpointConfiguration', this.__resources, this.input);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.policy'),
        outputPath: 'policy',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.tags'),
        outputPath: 'tags',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.disableExecuteApiEndpoint'),
        outputPath: 'disableExecuteApiEndpoint',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayUpdateRestApiEndpointConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateRestApiRequest) {
    super(scope, id);
  }

  public get types(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.endpointConfiguration.types'),
        outputPath: 'endpointConfiguration.types',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.endpointConfiguration.types', props);
    return resource.getResponseField('endpointConfiguration.types') as unknown as string[];
  }

  public get vpcEndpointIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRestApi',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateRestApi.endpointConfiguration.vpcEndpointIds'),
        outputPath: 'endpointConfiguration.vpcEndpointIds',
        parameters: {
          restApiId: this.input.restApiId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayUpdateStage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateStageRequest) {
    super(scope, id);
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.deploymentId'),
        outputPath: 'deploymentId',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.deploymentId', props);
    return resource.getResponseField('deploymentId') as unknown as string;
  }

  public get clientCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.clientCertificateId'),
        outputPath: 'clientCertificateId',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.clientCertificateId', props);
    return resource.getResponseField('clientCertificateId') as unknown as string;
  }

  public get stageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.stageName'),
        outputPath: 'stageName',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.stageName', props);
    return resource.getResponseField('stageName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.description'),
        outputPath: 'description',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get cacheClusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.cacheClusterEnabled'),
        outputPath: 'cacheClusterEnabled',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.cacheClusterEnabled', props);
    return resource.getResponseField('cacheClusterEnabled') as unknown as boolean;
  }

  public get cacheClusterSize(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.cacheClusterSize'),
        outputPath: 'cacheClusterSize',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.cacheClusterSize', props);
    return resource.getResponseField('cacheClusterSize') as unknown as string;
  }

  public get cacheClusterStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.cacheClusterStatus'),
        outputPath: 'cacheClusterStatus',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.cacheClusterStatus', props);
    return resource.getResponseField('cacheClusterStatus') as unknown as string;
  }

  public get methodSettings(): Record<string, shapes.ApiGatewayMethodSetting> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.methodSettings'),
        outputPath: 'methodSettings',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.methodSettings', props);
    return resource.getResponseField('methodSettings') as unknown as Record<string, shapes.ApiGatewayMethodSetting>;
  }

  public get variables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.variables'),
        outputPath: 'variables',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.variables', props);
    return resource.getResponseField('variables') as unknown as Record<string, string>;
  }

  public get documentationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.documentationVersion'),
        outputPath: 'documentationVersion',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.documentationVersion', props);
    return resource.getResponseField('documentationVersion') as unknown as string;
  }

  public get accessLogSettings(): APIGatewayUpdateStageAccessLogSettings {
    return new APIGatewayUpdateStageAccessLogSettings(this, 'AccessLogSettings', this.__resources, this.input);
  }

  public get canarySettings(): APIGatewayUpdateStageCanarySettings {
    return new APIGatewayUpdateStageCanarySettings(this, 'CanarySettings', this.__resources, this.input);
  }

  public get tracingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.tracingEnabled'),
        outputPath: 'tracingEnabled',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.tracingEnabled', props);
    return resource.getResponseField('tracingEnabled') as unknown as boolean;
  }

  public get webAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.webAclArn'),
        outputPath: 'webAclArn',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.webAclArn', props);
    return resource.getResponseField('webAclArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.tags'),
        outputPath: 'tags',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.createdDate'),
        outputPath: 'createdDate',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.createdDate', props);
    return resource.getResponseField('createdDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.lastUpdatedDate'),
        outputPath: 'lastUpdatedDate',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.lastUpdatedDate', props);
    return resource.getResponseField('lastUpdatedDate') as unknown as string;
  }

}

export class APIGatewayUpdateStageAccessLogSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateStageRequest) {
    super(scope, id);
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.accessLogSettings.format'),
        outputPath: 'accessLogSettings.format',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.accessLogSettings.format', props);
    return resource.getResponseField('accessLogSettings.format') as unknown as string;
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.accessLogSettings.destinationArn'),
        outputPath: 'accessLogSettings.destinationArn',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.accessLogSettings.destinationArn', props);
    return resource.getResponseField('accessLogSettings.destinationArn') as unknown as string;
  }

}

export class APIGatewayUpdateStageCanarySettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateStageRequest) {
    super(scope, id);
  }

  public get percentTraffic(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.canarySettings.percentTraffic'),
        outputPath: 'canarySettings.percentTraffic',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.canarySettings.percentTraffic', props);
    return resource.getResponseField('canarySettings.percentTraffic') as unknown as number;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.canarySettings.deploymentId'),
        outputPath: 'canarySettings.deploymentId',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.canarySettings.deploymentId', props);
    return resource.getResponseField('canarySettings.deploymentId') as unknown as string;
  }

  public get stageVariableOverrides(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.canarySettings.stageVariableOverrides'),
        outputPath: 'canarySettings.stageVariableOverrides',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.canarySettings.stageVariableOverrides', props);
    return resource.getResponseField('canarySettings.stageVariableOverrides') as unknown as Record<string, string>;
  }

  public get useStageCache(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateStage.canarySettings.useStageCache'),
        outputPath: 'canarySettings.useStageCache',
        parameters: {
          restApiId: this.input.restApiId,
          stageName: this.input.stageName,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.canarySettings.useStageCache', props);
    return resource.getResponseField('canarySettings.useStageCache') as unknown as boolean;
  }

}

export class APIGatewayUpdateUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateUsageRequest) {
    super(scope, id);
  }

  public get usagePlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsage.usagePlanId'),
        outputPath: 'usagePlanId',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsage.usagePlanId', props);
    return resource.getResponseField('usagePlanId') as unknown as string;
  }

  public get startDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsage.startDate'),
        outputPath: 'startDate',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsage.startDate', props);
    return resource.getResponseField('startDate') as unknown as string;
  }

  public get endDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsage.endDate'),
        outputPath: 'endDate',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsage.endDate', props);
    return resource.getResponseField('endDate') as unknown as string;
  }

  public get position(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsage.position'),
        outputPath: 'position',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsage.position', props);
    return resource.getResponseField('position') as unknown as string;
  }

  public get items(): Record<string, number[][]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsage',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsage.items'),
        outputPath: 'items',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          keyId: this.input.keyId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsage.items', props);
    return resource.getResponseField('items') as unknown as Record<string, number[][]>;
  }

}

export class APIGatewayUpdateUsagePlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateUsagePlanRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.id'),
        outputPath: 'id',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.name'),
        outputPath: 'name',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.description'),
        outputPath: 'description',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get apiStages(): shapes.ApiGatewayApiStage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.apiStages'),
        outputPath: 'apiStages',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.apiStages', props);
    return resource.getResponseField('apiStages') as unknown as shapes.ApiGatewayApiStage[];
  }

  public get throttle(): APIGatewayUpdateUsagePlanThrottle {
    return new APIGatewayUpdateUsagePlanThrottle(this, 'Throttle', this.__resources, this.input);
  }

  public get quota(): APIGatewayUpdateUsagePlanQuota {
    return new APIGatewayUpdateUsagePlanQuota(this, 'Quota', this.__resources, this.input);
  }

  public get productCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.productCode'),
        outputPath: 'productCode',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.productCode', props);
    return resource.getResponseField('productCode') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.tags'),
        outputPath: 'tags',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayUpdateUsagePlanThrottle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateUsagePlanRequest) {
    super(scope, id);
  }

  public get burstLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.throttle.burstLimit'),
        outputPath: 'throttle.burstLimit',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.throttle.burstLimit', props);
    return resource.getResponseField('throttle.burstLimit') as unknown as number;
  }

  public get rateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.throttle.rateLimit'),
        outputPath: 'throttle.rateLimit',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.throttle.rateLimit', props);
    return resource.getResponseField('throttle.rateLimit') as unknown as number;
  }

}

export class APIGatewayUpdateUsagePlanQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateUsagePlanRequest) {
    super(scope, id);
  }

  public get limit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.quota.limit'),
        outputPath: 'quota.limit',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.quota.limit', props);
    return resource.getResponseField('quota.limit') as unknown as number;
  }

  public get offset(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.quota.offset'),
        outputPath: 'quota.offset',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.quota.offset', props);
    return resource.getResponseField('quota.offset') as unknown as number;
  }

  public get period(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUsagePlan',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateUsagePlan.quota.period'),
        outputPath: 'quota.period',
        parameters: {
          usagePlanId: this.input.usagePlanId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUsagePlan.quota.period', props);
    return resource.getResponseField('quota.period') as unknown as string;
  }

}

export class APIGatewayUpdateVpcLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayUpdateVpcLinkRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateVpcLink.id'),
        outputPath: 'id',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateVpcLink.name'),
        outputPath: 'name',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateVpcLink.description'),
        outputPath: 'description',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get targetArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateVpcLink.targetArns'),
        outputPath: 'targetArns',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.targetArns', props);
    return resource.getResponseField('targetArns') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateVpcLink.status'),
        outputPath: 'status',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateVpcLink.statusMessage'),
        outputPath: 'statusMessage',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.statusMessage', props);
    return resource.getResponseField('statusMessage') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'APIGateway',
        physicalResourceId: cr.PhysicalResourceId.of('APIGateway.UpdateVpcLink.tags'),
        outputPath: 'tags',
        parameters: {
          vpcLinkId: this.input.vpcLinkId,
          patchOperations: this.input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

