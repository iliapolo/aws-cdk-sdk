import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ApiGatewayClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApiKey(input: shapes.ApiGatewayCreateApiKeyRequest): APIGatewayResponsesCreateApiKey {
    return new APIGatewayResponsesCreateApiKey(this, this.__resources, input);
  }

  public createAuthorizer(input: shapes.ApiGatewayCreateAuthorizerRequest): APIGatewayResponsesCreateAuthorizer {
    return new APIGatewayResponsesCreateAuthorizer(this, this.__resources, input);
  }

  public createBasePathMapping(input: shapes.ApiGatewayCreateBasePathMappingRequest): APIGatewayResponsesCreateBasePathMapping {
    return new APIGatewayResponsesCreateBasePathMapping(this, this.__resources, input);
  }

  public createDeployment(input: shapes.ApiGatewayCreateDeploymentRequest): APIGatewayResponsesCreateDeployment {
    return new APIGatewayResponsesCreateDeployment(this, this.__resources, input);
  }

  public createDocumentationPart(input: shapes.ApiGatewayCreateDocumentationPartRequest): APIGatewayResponsesCreateDocumentationPart {
    return new APIGatewayResponsesCreateDocumentationPart(this, this.__resources, input);
  }

  public createDocumentationVersion(input: shapes.ApiGatewayCreateDocumentationVersionRequest): APIGatewayResponsesCreateDocumentationVersion {
    return new APIGatewayResponsesCreateDocumentationVersion(this, this.__resources, input);
  }

  public createDomainName(input: shapes.ApiGatewayCreateDomainNameRequest): APIGatewayResponsesCreateDomainName {
    return new APIGatewayResponsesCreateDomainName(this, this.__resources, input);
  }

  public createModel(input: shapes.ApiGatewayCreateModelRequest): APIGatewayResponsesCreateModel {
    return new APIGatewayResponsesCreateModel(this, this.__resources, input);
  }

  public createRequestValidator(input: shapes.ApiGatewayCreateRequestValidatorRequest): APIGatewayResponsesCreateRequestValidator {
    return new APIGatewayResponsesCreateRequestValidator(this, this.__resources, input);
  }

  public createResource(input: shapes.ApiGatewayCreateResourceRequest): APIGatewayResponsesCreateResource {
    return new APIGatewayResponsesCreateResource(this, this.__resources, input);
  }

  public createRestApi(input: shapes.ApiGatewayCreateRestApiRequest): APIGatewayResponsesCreateRestApi {
    return new APIGatewayResponsesCreateRestApi(this, this.__resources, input);
  }

  public createStage(input: shapes.ApiGatewayCreateStageRequest): APIGatewayResponsesCreateStage {
    return new APIGatewayResponsesCreateStage(this, this.__resources, input);
  }

  public createUsagePlan(input: shapes.ApiGatewayCreateUsagePlanRequest): APIGatewayResponsesCreateUsagePlan {
    return new APIGatewayResponsesCreateUsagePlan(this, this.__resources, input);
  }

  public createUsagePlanKey(input: shapes.ApiGatewayCreateUsagePlanKeyRequest): APIGatewayResponsesCreateUsagePlanKey {
    return new APIGatewayResponsesCreateUsagePlanKey(this, this.__resources, input);
  }

  public createVpcLink(input: shapes.ApiGatewayCreateVpcLinkRequest): APIGatewayResponsesCreateVpcLink {
    return new APIGatewayResponsesCreateVpcLink(this, this.__resources, input);
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

  public generateClientCertificate(input: shapes.ApiGatewayGenerateClientCertificateRequest): APIGatewayResponsesGenerateClientCertificate {
    return new APIGatewayResponsesGenerateClientCertificate(this, this.__resources, input);
  }

  public fetchAccount(): APIGatewayResponsesFetchAccount {
    return new APIGatewayResponsesFetchAccount(this, this.__resources);
  }

  public fetchApiKey(input: shapes.ApiGatewayGetApiKeyRequest): APIGatewayResponsesFetchApiKey {
    return new APIGatewayResponsesFetchApiKey(this, this.__resources, input);
  }

  public fetchApiKeys(input: shapes.ApiGatewayGetApiKeysRequest): APIGatewayResponsesFetchApiKeys {
    return new APIGatewayResponsesFetchApiKeys(this, this.__resources, input);
  }

  public fetchAuthorizer(input: shapes.ApiGatewayGetAuthorizerRequest): APIGatewayResponsesFetchAuthorizer {
    return new APIGatewayResponsesFetchAuthorizer(this, this.__resources, input);
  }

  public fetchAuthorizers(input: shapes.ApiGatewayGetAuthorizersRequest): APIGatewayResponsesFetchAuthorizers {
    return new APIGatewayResponsesFetchAuthorizers(this, this.__resources, input);
  }

  public fetchBasePathMapping(input: shapes.ApiGatewayGetBasePathMappingRequest): APIGatewayResponsesFetchBasePathMapping {
    return new APIGatewayResponsesFetchBasePathMapping(this, this.__resources, input);
  }

  public fetchBasePathMappings(input: shapes.ApiGatewayGetBasePathMappingsRequest): APIGatewayResponsesFetchBasePathMappings {
    return new APIGatewayResponsesFetchBasePathMappings(this, this.__resources, input);
  }

  public fetchClientCertificate(input: shapes.ApiGatewayGetClientCertificateRequest): APIGatewayResponsesFetchClientCertificate {
    return new APIGatewayResponsesFetchClientCertificate(this, this.__resources, input);
  }

  public fetchClientCertificates(input: shapes.ApiGatewayGetClientCertificatesRequest): APIGatewayResponsesFetchClientCertificates {
    return new APIGatewayResponsesFetchClientCertificates(this, this.__resources, input);
  }

  public fetchDeployment(input: shapes.ApiGatewayGetDeploymentRequest): APIGatewayResponsesFetchDeployment {
    return new APIGatewayResponsesFetchDeployment(this, this.__resources, input);
  }

  public fetchDeployments(input: shapes.ApiGatewayGetDeploymentsRequest): APIGatewayResponsesFetchDeployments {
    return new APIGatewayResponsesFetchDeployments(this, this.__resources, input);
  }

  public fetchDocumentationPart(input: shapes.ApiGatewayGetDocumentationPartRequest): APIGatewayResponsesFetchDocumentationPart {
    return new APIGatewayResponsesFetchDocumentationPart(this, this.__resources, input);
  }

  public fetchDocumentationParts(input: shapes.ApiGatewayGetDocumentationPartsRequest): APIGatewayResponsesFetchDocumentationParts {
    return new APIGatewayResponsesFetchDocumentationParts(this, this.__resources, input);
  }

  public fetchDocumentationVersion(input: shapes.ApiGatewayGetDocumentationVersionRequest): APIGatewayResponsesFetchDocumentationVersion {
    return new APIGatewayResponsesFetchDocumentationVersion(this, this.__resources, input);
  }

  public fetchDocumentationVersions(input: shapes.ApiGatewayGetDocumentationVersionsRequest): APIGatewayResponsesFetchDocumentationVersions {
    return new APIGatewayResponsesFetchDocumentationVersions(this, this.__resources, input);
  }

  public fetchDomainName(input: shapes.ApiGatewayGetDomainNameRequest): APIGatewayResponsesFetchDomainName {
    return new APIGatewayResponsesFetchDomainName(this, this.__resources, input);
  }

  public fetchDomainNames(input: shapes.ApiGatewayGetDomainNamesRequest): APIGatewayResponsesFetchDomainNames {
    return new APIGatewayResponsesFetchDomainNames(this, this.__resources, input);
  }

  public fetchExport(input: shapes.ApiGatewayGetExportRequest): APIGatewayResponsesFetchExport {
    return new APIGatewayResponsesFetchExport(this, this.__resources, input);
  }

  public fetchGatewayResponse(input: shapes.ApiGatewayGetGatewayResponseRequest): APIGatewayResponsesFetchGatewayResponse {
    return new APIGatewayResponsesFetchGatewayResponse(this, this.__resources, input);
  }

  public fetchGatewayResponses(input: shapes.ApiGatewayGetGatewayResponsesRequest): APIGatewayResponsesFetchGatewayResponses {
    return new APIGatewayResponsesFetchGatewayResponses(this, this.__resources, input);
  }

  public fetchIntegration(input: shapes.ApiGatewayGetIntegrationRequest): APIGatewayResponsesFetchIntegration {
    return new APIGatewayResponsesFetchIntegration(this, this.__resources, input);
  }

  public fetchIntegrationResponse(input: shapes.ApiGatewayGetIntegrationResponseRequest): APIGatewayResponsesFetchIntegrationResponse {
    return new APIGatewayResponsesFetchIntegrationResponse(this, this.__resources, input);
  }

  public fetchMethod(input: shapes.ApiGatewayGetMethodRequest): APIGatewayResponsesFetchMethod {
    return new APIGatewayResponsesFetchMethod(this, this.__resources, input);
  }

  public fetchMethodResponse(input: shapes.ApiGatewayGetMethodResponseRequest): APIGatewayResponsesFetchMethodResponse {
    return new APIGatewayResponsesFetchMethodResponse(this, this.__resources, input);
  }

  public fetchModel(input: shapes.ApiGatewayGetModelRequest): APIGatewayResponsesFetchModel {
    return new APIGatewayResponsesFetchModel(this, this.__resources, input);
  }

  public fetchModelTemplate(input: shapes.ApiGatewayGetModelTemplateRequest): APIGatewayResponsesFetchModelTemplate {
    return new APIGatewayResponsesFetchModelTemplate(this, this.__resources, input);
  }

  public fetchModels(input: shapes.ApiGatewayGetModelsRequest): APIGatewayResponsesFetchModels {
    return new APIGatewayResponsesFetchModels(this, this.__resources, input);
  }

  public fetchRequestValidator(input: shapes.ApiGatewayGetRequestValidatorRequest): APIGatewayResponsesFetchRequestValidator {
    return new APIGatewayResponsesFetchRequestValidator(this, this.__resources, input);
  }

  public fetchRequestValidators(input: shapes.ApiGatewayGetRequestValidatorsRequest): APIGatewayResponsesFetchRequestValidators {
    return new APIGatewayResponsesFetchRequestValidators(this, this.__resources, input);
  }

  public fetchResource(input: shapes.ApiGatewayGetResourceRequest): APIGatewayResponsesFetchResource {
    return new APIGatewayResponsesFetchResource(this, this.__resources, input);
  }

  public fetchResources(input: shapes.ApiGatewayGetResourcesRequest): APIGatewayResponsesFetchResources {
    return new APIGatewayResponsesFetchResources(this, this.__resources, input);
  }

  public fetchRestApi(input: shapes.ApiGatewayGetRestApiRequest): APIGatewayResponsesFetchRestApi {
    return new APIGatewayResponsesFetchRestApi(this, this.__resources, input);
  }

  public fetchRestApis(input: shapes.ApiGatewayGetRestApisRequest): APIGatewayResponsesFetchRestApis {
    return new APIGatewayResponsesFetchRestApis(this, this.__resources, input);
  }

  public fetchSdk(input: shapes.ApiGatewayGetSdkRequest): APIGatewayResponsesFetchSdk {
    return new APIGatewayResponsesFetchSdk(this, this.__resources, input);
  }

  public fetchSdkType(input: shapes.ApiGatewayGetSdkTypeRequest): APIGatewayResponsesFetchSdkType {
    return new APIGatewayResponsesFetchSdkType(this, this.__resources, input);
  }

  public fetchSdkTypes(input: shapes.ApiGatewayGetSdkTypesRequest): APIGatewayResponsesFetchSdkTypes {
    return new APIGatewayResponsesFetchSdkTypes(this, this.__resources, input);
  }

  public fetchStage(input: shapes.ApiGatewayGetStageRequest): APIGatewayResponsesFetchStage {
    return new APIGatewayResponsesFetchStage(this, this.__resources, input);
  }

  public fetchStages(input: shapes.ApiGatewayGetStagesRequest): APIGatewayResponsesFetchStages {
    return new APIGatewayResponsesFetchStages(this, this.__resources, input);
  }

  public fetchTags(input: shapes.ApiGatewayGetTagsRequest): APIGatewayResponsesFetchTags {
    return new APIGatewayResponsesFetchTags(this, this.__resources, input);
  }

  public fetchUsage(input: shapes.ApiGatewayGetUsageRequest): APIGatewayResponsesFetchUsage {
    return new APIGatewayResponsesFetchUsage(this, this.__resources, input);
  }

  public fetchUsagePlan(input: shapes.ApiGatewayGetUsagePlanRequest): APIGatewayResponsesFetchUsagePlan {
    return new APIGatewayResponsesFetchUsagePlan(this, this.__resources, input);
  }

  public fetchUsagePlanKey(input: shapes.ApiGatewayGetUsagePlanKeyRequest): APIGatewayResponsesFetchUsagePlanKey {
    return new APIGatewayResponsesFetchUsagePlanKey(this, this.__resources, input);
  }

  public fetchUsagePlanKeys(input: shapes.ApiGatewayGetUsagePlanKeysRequest): APIGatewayResponsesFetchUsagePlanKeys {
    return new APIGatewayResponsesFetchUsagePlanKeys(this, this.__resources, input);
  }

  public fetchUsagePlans(input: shapes.ApiGatewayGetUsagePlansRequest): APIGatewayResponsesFetchUsagePlans {
    return new APIGatewayResponsesFetchUsagePlans(this, this.__resources, input);
  }

  public fetchVpcLink(input: shapes.ApiGatewayGetVpcLinkRequest): APIGatewayResponsesFetchVpcLink {
    return new APIGatewayResponsesFetchVpcLink(this, this.__resources, input);
  }

  public fetchVpcLinks(input: shapes.ApiGatewayGetVpcLinksRequest): APIGatewayResponsesFetchVpcLinks {
    return new APIGatewayResponsesFetchVpcLinks(this, this.__resources, input);
  }

  public importApiKeys(input: shapes.ApiGatewayImportApiKeysRequest): APIGatewayResponsesImportApiKeys {
    return new APIGatewayResponsesImportApiKeys(this, this.__resources, input);
  }

  public importDocumentationParts(input: shapes.ApiGatewayImportDocumentationPartsRequest): APIGatewayResponsesImportDocumentationParts {
    return new APIGatewayResponsesImportDocumentationParts(this, this.__resources, input);
  }

  public importRestApi(input: shapes.ApiGatewayImportRestApiRequest): APIGatewayResponsesImportRestApi {
    return new APIGatewayResponsesImportRestApi(this, this.__resources, input);
  }

  public putGatewayResponse(input: shapes.ApiGatewayPutGatewayResponseRequest): APIGatewayResponsesPutGatewayResponse {
    return new APIGatewayResponsesPutGatewayResponse(this, this.__resources, input);
  }

  public putIntegration(input: shapes.ApiGatewayPutIntegrationRequest): APIGatewayResponsesPutIntegration {
    return new APIGatewayResponsesPutIntegration(this, this.__resources, input);
  }

  public putIntegrationResponse(input: shapes.ApiGatewayPutIntegrationResponseRequest): APIGatewayResponsesPutIntegrationResponse {
    return new APIGatewayResponsesPutIntegrationResponse(this, this.__resources, input);
  }

  public putMethod(input: shapes.ApiGatewayPutMethodRequest): APIGatewayResponsesPutMethod {
    return new APIGatewayResponsesPutMethod(this, this.__resources, input);
  }

  public putMethodResponse(input: shapes.ApiGatewayPutMethodResponseRequest): APIGatewayResponsesPutMethodResponse {
    return new APIGatewayResponsesPutMethodResponse(this, this.__resources, input);
  }

  public putRestApi(input: shapes.ApiGatewayPutRestApiRequest): APIGatewayResponsesPutRestApi {
    return new APIGatewayResponsesPutRestApi(this, this.__resources, input);
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

  public testInvokeAuthorizer(input: shapes.ApiGatewayTestInvokeAuthorizerRequest): APIGatewayResponsesTestInvokeAuthorizer {
    return new APIGatewayResponsesTestInvokeAuthorizer(this, this.__resources, input);
  }

  public testInvokeMethod(input: shapes.ApiGatewayTestInvokeMethodRequest): APIGatewayResponsesTestInvokeMethod {
    return new APIGatewayResponsesTestInvokeMethod(this, this.__resources, input);
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

  public updateAccount(input: shapes.ApiGatewayUpdateAccountRequest): APIGatewayResponsesUpdateAccount {
    return new APIGatewayResponsesUpdateAccount(this, this.__resources, input);
  }

  public updateApiKey(input: shapes.ApiGatewayUpdateApiKeyRequest): APIGatewayResponsesUpdateApiKey {
    return new APIGatewayResponsesUpdateApiKey(this, this.__resources, input);
  }

  public updateAuthorizer(input: shapes.ApiGatewayUpdateAuthorizerRequest): APIGatewayResponsesUpdateAuthorizer {
    return new APIGatewayResponsesUpdateAuthorizer(this, this.__resources, input);
  }

  public updateBasePathMapping(input: shapes.ApiGatewayUpdateBasePathMappingRequest): APIGatewayResponsesUpdateBasePathMapping {
    return new APIGatewayResponsesUpdateBasePathMapping(this, this.__resources, input);
  }

  public updateClientCertificate(input: shapes.ApiGatewayUpdateClientCertificateRequest): APIGatewayResponsesUpdateClientCertificate {
    return new APIGatewayResponsesUpdateClientCertificate(this, this.__resources, input);
  }

  public updateDeployment(input: shapes.ApiGatewayUpdateDeploymentRequest): APIGatewayResponsesUpdateDeployment {
    return new APIGatewayResponsesUpdateDeployment(this, this.__resources, input);
  }

  public updateDocumentationPart(input: shapes.ApiGatewayUpdateDocumentationPartRequest): APIGatewayResponsesUpdateDocumentationPart {
    return new APIGatewayResponsesUpdateDocumentationPart(this, this.__resources, input);
  }

  public updateDocumentationVersion(input: shapes.ApiGatewayUpdateDocumentationVersionRequest): APIGatewayResponsesUpdateDocumentationVersion {
    return new APIGatewayResponsesUpdateDocumentationVersion(this, this.__resources, input);
  }

  public updateDomainName(input: shapes.ApiGatewayUpdateDomainNameRequest): APIGatewayResponsesUpdateDomainName {
    return new APIGatewayResponsesUpdateDomainName(this, this.__resources, input);
  }

  public updateGatewayResponse(input: shapes.ApiGatewayUpdateGatewayResponseRequest): APIGatewayResponsesUpdateGatewayResponse {
    return new APIGatewayResponsesUpdateGatewayResponse(this, this.__resources, input);
  }

  public updateIntegration(input: shapes.ApiGatewayUpdateIntegrationRequest): APIGatewayResponsesUpdateIntegration {
    return new APIGatewayResponsesUpdateIntegration(this, this.__resources, input);
  }

  public updateIntegrationResponse(input: shapes.ApiGatewayUpdateIntegrationResponseRequest): APIGatewayResponsesUpdateIntegrationResponse {
    return new APIGatewayResponsesUpdateIntegrationResponse(this, this.__resources, input);
  }

  public updateMethod(input: shapes.ApiGatewayUpdateMethodRequest): APIGatewayResponsesUpdateMethod {
    return new APIGatewayResponsesUpdateMethod(this, this.__resources, input);
  }

  public updateMethodResponse(input: shapes.ApiGatewayUpdateMethodResponseRequest): APIGatewayResponsesUpdateMethodResponse {
    return new APIGatewayResponsesUpdateMethodResponse(this, this.__resources, input);
  }

  public updateModel(input: shapes.ApiGatewayUpdateModelRequest): APIGatewayResponsesUpdateModel {
    return new APIGatewayResponsesUpdateModel(this, this.__resources, input);
  }

  public updateRequestValidator(input: shapes.ApiGatewayUpdateRequestValidatorRequest): APIGatewayResponsesUpdateRequestValidator {
    return new APIGatewayResponsesUpdateRequestValidator(this, this.__resources, input);
  }

  public updateResource(input: shapes.ApiGatewayUpdateResourceRequest): APIGatewayResponsesUpdateResource {
    return new APIGatewayResponsesUpdateResource(this, this.__resources, input);
  }

  public updateRestApi(input: shapes.ApiGatewayUpdateRestApiRequest): APIGatewayResponsesUpdateRestApi {
    return new APIGatewayResponsesUpdateRestApi(this, this.__resources, input);
  }

  public updateStage(input: shapes.ApiGatewayUpdateStageRequest): APIGatewayResponsesUpdateStage {
    return new APIGatewayResponsesUpdateStage(this, this.__resources, input);
  }

  public updateUsage(input: shapes.ApiGatewayUpdateUsageRequest): APIGatewayResponsesUpdateUsage {
    return new APIGatewayResponsesUpdateUsage(this, this.__resources, input);
  }

  public updateUsagePlan(input: shapes.ApiGatewayUpdateUsagePlanRequest): APIGatewayResponsesUpdateUsagePlan {
    return new APIGatewayResponsesUpdateUsagePlan(this, this.__resources, input);
  }

  public updateVpcLink(input: shapes.ApiGatewayUpdateVpcLinkRequest): APIGatewayResponsesUpdateVpcLink {
    return new APIGatewayResponsesUpdateVpcLink(this, this.__resources, input);
  }

}

export class APIGatewayResponsesCreateApiKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateApiKeyRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.id', props);
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.value', props);
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.name', props);
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.customerId', props);
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.description', props);
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.enabled', props);
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.createdDate', props);
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.lastUpdatedDate', props);
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.stageKeys', props);
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
          name: this.__input.name,
          description: this.__input.description,
          enabled: this.__input.enabled,
          generateDistinctId: this.__input.generateDistinctId,
          value: this.__input.value,
          stageKeys: this.__input.stageKeys,
          customerId: this.__input.customerId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiKey.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesCreateAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateAuthorizerRequest) {
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.id', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.name', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.type', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.providerARNs', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.authType', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.authorizerUri', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.authorizerCredentials', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.identitySource', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.identityValidationExpression', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          type: this.__input.type,
          providerARNs: this.__input.providerARNs,
          authType: this.__input.authType,
          authorizerUri: this.__input.authorizerUri,
          authorizerCredentials: this.__input.authorizerCredentials,
          identitySource: this.__input.identitySource,
          identityValidationExpression: this.__input.identityValidationExpression,
          authorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.authorizerResultTtlInSeconds', props);
    return resource.getResponseField('authorizerResultTtlInSeconds') as unknown as number;
  }

}

export class APIGatewayResponsesCreateBasePathMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateBasePathMappingRequest) {
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
          domainName: this.__input.domainName,
          basePath: this.__input.basePath,
          restApiId: this.__input.restApiId,
          stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBasePathMapping.basePath', props);
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
          domainName: this.__input.domainName,
          basePath: this.__input.basePath,
          restApiId: this.__input.restApiId,
          stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBasePathMapping.restApiId', props);
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
          domainName: this.__input.domainName,
          basePath: this.__input.basePath,
          restApiId: this.__input.restApiId,
          stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBasePathMapping.stage', props);
    return resource.getResponseField('stage') as unknown as string;
  }

}

export class APIGatewayResponsesCreateDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateDeploymentRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          stageDescription: this.__input.stageDescription,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.id', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          stageDescription: this.__input.stageDescription,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.description', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          stageDescription: this.__input.stageDescription,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.createdDate', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          stageDescription: this.__input.stageDescription,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.apiSummary', props);
    return resource.getResponseField('apiSummary') as unknown as Record<string, Record<string, shapes.ApiGatewayMethodSnapshot>>;
  }

}

export class APIGatewayResponsesCreateDocumentationPart {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateDocumentationPartRequest) {
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
          restApiId: this.__input.restApiId,
          location: {
            type: this.__input.location.type,
            path: this.__input.location.path,
            method: this.__input.location.method,
            statusCode: this.__input.location.statusCode,
            name: this.__input.location.name,
          },
          properties: this.__input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationPart.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get location(): APIGatewayResponsesCreateDocumentationPartLocation {
    return new APIGatewayResponsesCreateDocumentationPartLocation(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          location: {
            type: this.__input.location.type,
            path: this.__input.location.path,
            method: this.__input.location.method,
            statusCode: this.__input.location.statusCode,
            name: this.__input.location.name,
          },
          properties: this.__input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationPart.properties', props);
    return resource.getResponseField('properties') as unknown as string;
  }

}

export class APIGatewayResponsesCreateDocumentationPartLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateDocumentationPartRequest) {
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
          restApiId: this.__input.restApiId,
          location: {
            type: this.__input.location.type,
            path: this.__input.location.path,
            method: this.__input.location.method,
            statusCode: this.__input.location.statusCode,
            name: this.__input.location.name,
          },
          properties: this.__input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationPart.location.type', props);
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
          restApiId: this.__input.restApiId,
          location: {
            type: this.__input.location.type,
            path: this.__input.location.path,
            method: this.__input.location.method,
            statusCode: this.__input.location.statusCode,
            name: this.__input.location.name,
          },
          properties: this.__input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationPart.location.path', props);
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
          restApiId: this.__input.restApiId,
          location: {
            type: this.__input.location.type,
            path: this.__input.location.path,
            method: this.__input.location.method,
            statusCode: this.__input.location.statusCode,
            name: this.__input.location.name,
          },
          properties: this.__input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationPart.location.method', props);
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
          restApiId: this.__input.restApiId,
          location: {
            type: this.__input.location.type,
            path: this.__input.location.path,
            method: this.__input.location.method,
            statusCode: this.__input.location.statusCode,
            name: this.__input.location.name,
          },
          properties: this.__input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationPart.location.statusCode', props);
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
          restApiId: this.__input.restApiId,
          location: {
            type: this.__input.location.type,
            path: this.__input.location.path,
            method: this.__input.location.method,
            statusCode: this.__input.location.statusCode,
            name: this.__input.location.name,
          },
          properties: this.__input.properties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationPart.location.name', props);
    return resource.getResponseField('location.name') as unknown as string;
  }

}

export class APIGatewayResponsesCreateDocumentationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateDocumentationVersionRequest) {
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
          restApiId: this.__input.restApiId,
          documentationVersion: this.__input.documentationVersion,
          stageName: this.__input.stageName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationVersion.version', props);
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
          restApiId: this.__input.restApiId,
          documentationVersion: this.__input.documentationVersion,
          stageName: this.__input.stageName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationVersion.createdDate', props);
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
          restApiId: this.__input.restApiId,
          documentationVersion: this.__input.documentationVersion,
          stageName: this.__input.stageName,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentationVersion.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class APIGatewayResponsesCreateDomainName {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateDomainNameRequest) {
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.domainName', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.certificateName', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.certificateArn', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.certificateUploadDate', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.regionalDomainName', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.regionalHostedZoneId', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.regionalCertificateName', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.regionalCertificateArn', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.distributionDomainName', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.distributionHostedZoneId', props);
    return resource.getResponseField('distributionHostedZoneId') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayResponsesCreateDomainNameEndpointConfiguration {
    return new APIGatewayResponsesCreateDomainNameEndpointConfiguration(this.__scope, this.__resources, this.__input);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.domainNameStatus', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.domainNameStatusMessage', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.securityPolicy', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get mutualTlsAuthentication(): APIGatewayResponsesCreateDomainNameMutualTlsAuthentication {
    return new APIGatewayResponsesCreateDomainNameMutualTlsAuthentication(this.__scope, this.__resources, this.__input);
  }

}

export class APIGatewayResponsesCreateDomainNameEndpointConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateDomainNameRequest) {
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.endpointConfiguration.types', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayResponsesCreateDomainNameMutualTlsAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateDomainNameRequest) {
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.mutualTlsAuthentication.truststoreUri', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.mutualTlsAuthentication.truststoreVersion', props);
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
          domainName: this.__input.domainName,
          certificateName: this.__input.certificateName,
          certificateBody: this.__input.certificateBody,
          certificatePrivateKey: this.__input.certificatePrivateKey,
          certificateChain: this.__input.certificateChain,
          certificateArn: this.__input.certificateArn,
          regionalCertificateName: this.__input.regionalCertificateName,
          regionalCertificateArn: this.__input.regionalCertificateArn,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          tags: this.__input.tags,
          securityPolicy: this.__input.securityPolicy,
          mutualTlsAuthentication: {
            truststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            truststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.mutualTlsAuthentication.truststoreWarnings', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreWarnings') as unknown as string[];
  }

}

export class APIGatewayResponsesCreateModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateModelRequest) {
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          description: this.__input.description,
          schema: this.__input.schema,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.id', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          description: this.__input.description,
          schema: this.__input.schema,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.name', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          description: this.__input.description,
          schema: this.__input.schema,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.description', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          description: this.__input.description,
          schema: this.__input.schema,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.schema', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          description: this.__input.description,
          schema: this.__input.schema,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

}

export class APIGatewayResponsesCreateRequestValidator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateRequestValidatorRequest) {
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          validateRequestBody: this.__input.validateRequestBody,
          validateRequestParameters: this.__input.validateRequestParameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRequestValidator.id', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          validateRequestBody: this.__input.validateRequestBody,
          validateRequestParameters: this.__input.validateRequestParameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRequestValidator.name', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          validateRequestBody: this.__input.validateRequestBody,
          validateRequestParameters: this.__input.validateRequestParameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRequestValidator.validateRequestBody', props);
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
          restApiId: this.__input.restApiId,
          name: this.__input.name,
          validateRequestBody: this.__input.validateRequestBody,
          validateRequestParameters: this.__input.validateRequestParameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRequestValidator.validateRequestParameters', props);
    return resource.getResponseField('validateRequestParameters') as unknown as boolean;
  }

}

export class APIGatewayResponsesCreateResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateResourceRequest) {
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
          restApiId: this.__input.restApiId,
          parentId: this.__input.parentId,
          pathPart: this.__input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResource.id', props);
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
          restApiId: this.__input.restApiId,
          parentId: this.__input.parentId,
          pathPart: this.__input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResource.parentId', props);
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
          restApiId: this.__input.restApiId,
          parentId: this.__input.parentId,
          pathPart: this.__input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResource.pathPart', props);
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
          restApiId: this.__input.restApiId,
          parentId: this.__input.parentId,
          pathPart: this.__input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResource.path', props);
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
          restApiId: this.__input.restApiId,
          parentId: this.__input.parentId,
          pathPart: this.__input.pathPart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResource.resourceMethods', props);
    return resource.getResponseField('resourceMethods') as unknown as Record<string, shapes.ApiGatewayMethod>;
  }

}

export class APIGatewayResponsesCreateRestApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateRestApiRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.id', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.name', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.description', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.createdDate', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.version', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.warnings', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.binaryMediaTypes', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.minimumCompressionSize', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayResponsesCreateRestApiEndpointConfiguration {
    return new APIGatewayResponsesCreateRestApiEndpointConfiguration(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.policy', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.tags', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayResponsesCreateRestApiEndpointConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateRestApiRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.endpointConfiguration.types', props);
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
          name: this.__input.name,
          description: this.__input.description,
          version: this.__input.version,
          cloneFrom: this.__input.cloneFrom,
          binaryMediaTypes: this.__input.binaryMediaTypes,
          minimumCompressionSize: this.__input.minimumCompressionSize,
          apiKeySource: this.__input.apiKeySource,
          endpointConfiguration: {
            types: this.__input.endpointConfiguration?.types,
            vpcEndpointIds: this.__input.endpointConfiguration?.vpcEndpointIds,
          },
          policy: this.__input.policy,
          tags: this.__input.tags,
          disableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayResponsesCreateStage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateStageRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.deploymentId', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.clientCertificateId', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.stageName', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.description', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.cacheClusterEnabled', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.cacheClusterSize', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.cacheClusterStatus', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.methodSettings', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.variables', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.documentationVersion', props);
    return resource.getResponseField('documentationVersion') as unknown as string;
  }

  public get accessLogSettings(): APIGatewayResponsesCreateStageAccessLogSettings {
    return new APIGatewayResponsesCreateStageAccessLogSettings(this.__scope, this.__resources, this.__input);
  }

  public get canarySettings(): APIGatewayResponsesCreateStageCanarySettings {
    return new APIGatewayResponsesCreateStageCanarySettings(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.tracingEnabled', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.webAclArn', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.tags', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.createdDate', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.lastUpdatedDate', props);
    return resource.getResponseField('lastUpdatedDate') as unknown as string;
  }

}

export class APIGatewayResponsesCreateStageAccessLogSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateStageRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.accessLogSettings.format', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.accessLogSettings.destinationArn', props);
    return resource.getResponseField('accessLogSettings.destinationArn') as unknown as string;
  }

}

export class APIGatewayResponsesCreateStageCanarySettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateStageRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.canarySettings.percentTraffic', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.canarySettings.deploymentId', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.canarySettings.stageVariableOverrides', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          deploymentId: this.__input.deploymentId,
          description: this.__input.description,
          cacheClusterEnabled: this.__input.cacheClusterEnabled,
          cacheClusterSize: this.__input.cacheClusterSize,
          variables: this.__input.variables,
          documentationVersion: this.__input.documentationVersion,
          canarySettings: {
            percentTraffic: this.__input.canarySettings?.percentTraffic,
            deploymentId: this.__input.canarySettings?.deploymentId,
            stageVariableOverrides: this.__input.canarySettings?.stageVariableOverrides,
            useStageCache: this.__input.canarySettings?.useStageCache,
          },
          tracingEnabled: this.__input.tracingEnabled,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.canarySettings.useStageCache', props);
    return resource.getResponseField('canarySettings.useStageCache') as unknown as boolean;
  }

}

export class APIGatewayResponsesCreateUsagePlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateUsagePlanRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.id', props);
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.name', props);
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.description', props);
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.apiStages', props);
    return resource.getResponseField('apiStages') as unknown as shapes.ApiGatewayApiStage[];
  }

  public get throttle(): APIGatewayResponsesCreateUsagePlanThrottle {
    return new APIGatewayResponsesCreateUsagePlanThrottle(this.__scope, this.__resources, this.__input);
  }

  public get quota(): APIGatewayResponsesCreateUsagePlanQuota {
    return new APIGatewayResponsesCreateUsagePlanQuota(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.productCode', props);
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesCreateUsagePlanThrottle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateUsagePlanRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.throttle.burstLimit', props);
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.throttle.rateLimit', props);
    return resource.getResponseField('throttle.rateLimit') as unknown as number;
  }

}

export class APIGatewayResponsesCreateUsagePlanQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateUsagePlanRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.quota.limit', props);
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.quota.offset', props);
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
          name: this.__input.name,
          description: this.__input.description,
          apiStages: this.__input.apiStages,
          throttle: {
            burstLimit: this.__input.throttle?.burstLimit,
            rateLimit: this.__input.throttle?.rateLimit,
          },
          quota: {
            limit: this.__input.quota?.limit,
            offset: this.__input.quota?.offset,
            period: this.__input.quota?.period,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlan.quota.period', props);
    return resource.getResponseField('quota.period') as unknown as string;
  }

}

export class APIGatewayResponsesCreateUsagePlanKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateUsagePlanKeyRequest) {
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          keyType: this.__input.keyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlanKey.id', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          keyType: this.__input.keyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlanKey.type', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          keyType: this.__input.keyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlanKey.value', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          keyType: this.__input.keyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsagePlanKey.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

}

export class APIGatewayResponsesCreateVpcLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayCreateVpcLinkRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          targetArns: this.__input.targetArns,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.id', props);
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
          name: this.__input.name,
          description: this.__input.description,
          targetArns: this.__input.targetArns,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.name', props);
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
          name: this.__input.name,
          description: this.__input.description,
          targetArns: this.__input.targetArns,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.description', props);
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
          name: this.__input.name,
          description: this.__input.description,
          targetArns: this.__input.targetArns,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.targetArns', props);
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
          name: this.__input.name,
          description: this.__input.description,
          targetArns: this.__input.targetArns,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.status', props);
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
          name: this.__input.name,
          description: this.__input.description,
          targetArns: this.__input.targetArns,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.statusMessage', props);
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
          name: this.__input.name,
          description: this.__input.description,
          targetArns: this.__input.targetArns,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesGenerateClientCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGenerateClientCertificateRequest) {
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
          description: this.__input.description,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateClientCertificate.clientCertificateId', props);
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
          description: this.__input.description,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateClientCertificate.description', props);
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
          description: this.__input.description,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateClientCertificate.pemEncodedCertificate', props);
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
          description: this.__input.description,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateClientCertificate.createdDate', props);
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
          description: this.__input.description,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateClientCertificate.expirationDate', props);
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
          description: this.__input.description,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateClientCertificate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesFetchAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.cloudwatchRoleArn', props);
    return resource.getResponseField('cloudwatchRoleArn') as unknown as string;
  }

  public get throttleSettings(): APIGatewayResponsesFetchAccountThrottleSettings {
    return new APIGatewayResponsesFetchAccountThrottleSettings(this.__scope, this.__resources);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.features', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.apiKeyVersion', props);
    return resource.getResponseField('apiKeyVersion') as unknown as string;
  }

}

export class APIGatewayResponsesFetchAccountThrottleSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.throttleSettings.burstLimit', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.throttleSettings.rateLimit', props);
    return resource.getResponseField('throttleSettings.rateLimit') as unknown as number;
  }

}

export class APIGatewayResponsesFetchApiKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetApiKeyRequest) {
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.id', props);
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.value', props);
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.name', props);
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.customerId', props);
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.description', props);
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.enabled', props);
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.createdDate', props);
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.lastUpdatedDate', props);
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.stageKeys', props);
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
          apiKey: this.__input.apiKey,
          includeValue: this.__input.includeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKey.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesFetchApiKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetApiKeysRequest) {
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
          position: this.__input.position,
          limit: this.__input.limit,
          nameQuery: this.__input.nameQuery,
          customerId: this.__input.customerId,
          includeValues: this.__input.includeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKeys.warnings', props);
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
          position: this.__input.position,
          limit: this.__input.limit,
          nameQuery: this.__input.nameQuery,
          customerId: this.__input.customerId,
          includeValues: this.__input.includeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKeys.position', props);
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
          position: this.__input.position,
          limit: this.__input.limit,
          nameQuery: this.__input.nameQuery,
          customerId: this.__input.customerId,
          includeValues: this.__input.includeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiKeys.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayApiKey[];
  }

}

export class APIGatewayResponsesFetchAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetAuthorizerRequest) {
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.id', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.name', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.type', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.providerARNs', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.authType', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.authorizerUri', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.authorizerCredentials', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.identitySource', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.identityValidationExpression', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.authorizerResultTtlInSeconds', props);
    return resource.getResponseField('authorizerResultTtlInSeconds') as unknown as number;
  }

}

export class APIGatewayResponsesFetchAuthorizers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetAuthorizersRequest) {
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizers.position', props);
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizers.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayAuthorizer[];
  }

}

export class APIGatewayResponsesFetchBasePathMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetBasePathMappingRequest) {
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
          domainName: this.__input.domainName,
          basePath: this.__input.basePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBasePathMapping.basePath', props);
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
          domainName: this.__input.domainName,
          basePath: this.__input.basePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBasePathMapping.restApiId', props);
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
          domainName: this.__input.domainName,
          basePath: this.__input.basePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBasePathMapping.stage', props);
    return resource.getResponseField('stage') as unknown as string;
  }

}

export class APIGatewayResponsesFetchBasePathMappings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetBasePathMappingsRequest) {
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
          domainName: this.__input.domainName,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBasePathMappings.position', props);
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
          domainName: this.__input.domainName,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBasePathMappings.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayBasePathMapping[];
  }

}

export class APIGatewayResponsesFetchClientCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetClientCertificateRequest) {
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
          clientCertificateId: this.__input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClientCertificate.clientCertificateId', props);
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
          clientCertificateId: this.__input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClientCertificate.description', props);
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
          clientCertificateId: this.__input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClientCertificate.pemEncodedCertificate', props);
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
          clientCertificateId: this.__input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClientCertificate.createdDate', props);
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
          clientCertificateId: this.__input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClientCertificate.expirationDate', props);
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
          clientCertificateId: this.__input.clientCertificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClientCertificate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesFetchClientCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetClientCertificatesRequest) {
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClientCertificates.position', props);
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClientCertificates.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayClientCertificate[];
  }

}

export class APIGatewayResponsesFetchDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDeploymentRequest) {
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
          restApiId: this.__input.restApiId,
          deploymentId: this.__input.deploymentId,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.id', props);
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
          restApiId: this.__input.restApiId,
          deploymentId: this.__input.deploymentId,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.description', props);
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
          restApiId: this.__input.restApiId,
          deploymentId: this.__input.deploymentId,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.createdDate', props);
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
          restApiId: this.__input.restApiId,
          deploymentId: this.__input.deploymentId,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.apiSummary', props);
    return resource.getResponseField('apiSummary') as unknown as Record<string, Record<string, shapes.ApiGatewayMethodSnapshot>>;
  }

}

export class APIGatewayResponsesFetchDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDeploymentsRequest) {
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployments.position', props);
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployments.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayDeployment[];
  }

}

export class APIGatewayResponsesFetchDocumentationPart {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDocumentationPartRequest) {
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationPart.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get location(): APIGatewayResponsesFetchDocumentationPartLocation {
    return new APIGatewayResponsesFetchDocumentationPartLocation(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationPart.properties', props);
    return resource.getResponseField('properties') as unknown as string;
  }

}

export class APIGatewayResponsesFetchDocumentationPartLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDocumentationPartRequest) {
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationPart.location.type', props);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationPart.location.path', props);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationPart.location.method', props);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationPart.location.statusCode', props);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationPart.location.name', props);
    return resource.getResponseField('location.name') as unknown as string;
  }

}

export class APIGatewayResponsesFetchDocumentationParts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDocumentationPartsRequest) {
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
          restApiId: this.__input.restApiId,
          type: this.__input.type,
          nameQuery: this.__input.nameQuery,
          path: this.__input.path,
          position: this.__input.position,
          limit: this.__input.limit,
          locationStatus: this.__input.locationStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationParts.position', props);
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
          restApiId: this.__input.restApiId,
          type: this.__input.type,
          nameQuery: this.__input.nameQuery,
          path: this.__input.path,
          position: this.__input.position,
          limit: this.__input.limit,
          locationStatus: this.__input.locationStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationParts.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayDocumentationPart[];
  }

}

export class APIGatewayResponsesFetchDocumentationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDocumentationVersionRequest) {
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
          restApiId: this.__input.restApiId,
          documentationVersion: this.__input.documentationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationVersion.version', props);
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
          restApiId: this.__input.restApiId,
          documentationVersion: this.__input.documentationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationVersion.createdDate', props);
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
          restApiId: this.__input.restApiId,
          documentationVersion: this.__input.documentationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationVersion.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class APIGatewayResponsesFetchDocumentationVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDocumentationVersionsRequest) {
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationVersions.position', props);
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentationVersions.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayDocumentationVersion[];
  }

}

export class APIGatewayResponsesFetchDomainName {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDomainNameRequest) {
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.domainName', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.certificateName', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.certificateArn', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.certificateUploadDate', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.regionalDomainName', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.regionalHostedZoneId', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.regionalCertificateName', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.regionalCertificateArn', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.distributionDomainName', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.distributionHostedZoneId', props);
    return resource.getResponseField('distributionHostedZoneId') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayResponsesFetchDomainNameEndpointConfiguration {
    return new APIGatewayResponsesFetchDomainNameEndpointConfiguration(this.__scope, this.__resources, this.__input);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.domainNameStatus', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.domainNameStatusMessage', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.securityPolicy', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get mutualTlsAuthentication(): APIGatewayResponsesFetchDomainNameMutualTlsAuthentication {
    return new APIGatewayResponsesFetchDomainNameMutualTlsAuthentication(this.__scope, this.__resources, this.__input);
  }

}

export class APIGatewayResponsesFetchDomainNameEndpointConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDomainNameRequest) {
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.endpointConfiguration.types', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayResponsesFetchDomainNameMutualTlsAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDomainNameRequest) {
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.mutualTlsAuthentication.truststoreUri', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.mutualTlsAuthentication.truststoreVersion', props);
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
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.mutualTlsAuthentication.truststoreWarnings', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreWarnings') as unknown as string[];
  }

}

export class APIGatewayResponsesFetchDomainNames {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetDomainNamesRequest) {
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainNames.position', props);
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainNames.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayDomainName[];
  }

}

export class APIGatewayResponsesFetchExport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetExportRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          exportType: this.__input.exportType,
          parameters: this.__input.parameters,
          accepts: this.__input.accepts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExport.contentType', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          exportType: this.__input.exportType,
          parameters: this.__input.parameters,
          accepts: this.__input.accepts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExport.contentDisposition', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          exportType: this.__input.exportType,
          parameters: this.__input.parameters,
          accepts: this.__input.accepts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExport.body', props);
    return resource.getResponseField('body') as unknown as any;
  }

}

export class APIGatewayResponsesFetchGatewayResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetGatewayResponseRequest) {
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayResponse.responseType', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayResponse.statusCode', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayResponse.responseParameters', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayResponse.responseTemplates', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayResponse.defaultResponse', props);
    return resource.getResponseField('defaultResponse') as unknown as boolean;
  }

}

export class APIGatewayResponsesFetchGatewayResponses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetGatewayResponsesRequest) {
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayResponses.position', props);
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayResponses.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayGatewayResponse[];
  }

}

export class APIGatewayResponsesFetchIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetIntegrationRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.type', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.httpMethod', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.uri', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.connectionType', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.connectionId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.credentials', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.requestParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.requestTemplates', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.passthroughBehavior', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.contentHandling', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.timeoutInMillis', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.cacheNamespace', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.cacheKeyParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.integrationResponses', props);
    return resource.getResponseField('integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayResponsesFetchIntegrationTlsConfig {
    return new APIGatewayResponsesFetchIntegrationTlsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class APIGatewayResponsesFetchIntegrationTlsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetIntegrationRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayResponsesFetchIntegrationResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetIntegrationResponseRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.statusCode', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.selectionPattern', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.responseParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.responseTemplates', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.contentHandling', props);
    return resource.getResponseField('contentHandling') as unknown as string;
  }

}

export class APIGatewayResponsesFetchMethod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.httpMethod', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.authorizationType', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.authorizerId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.apiKeyRequired', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.requestValidatorId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.operationName', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.requestParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.requestModels', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodResponses', props);
    return resource.getResponseField('methodResponses') as unknown as Record<string, shapes.ApiGatewayMethodResponse>;
  }

  public get methodIntegration(): APIGatewayResponsesFetchMethodMethodIntegration {
    return new APIGatewayResponsesFetchMethodMethodIntegration(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.authorizationScopes', props);
    return resource.getResponseField('authorizationScopes') as unknown as string[];
  }

}

export class APIGatewayResponsesFetchMethodMethodIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.type', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.httpMethod', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.uri', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.connectionType', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.connectionId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.credentials', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.requestParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.requestTemplates', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.passthroughBehavior', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.contentHandling', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.timeoutInMillis', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.cacheNamespace', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.cacheKeyParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.integrationResponses', props);
    return resource.getResponseField('methodIntegration.integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig {
    return new APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class APIGatewayResponsesFetchMethodMethodIntegrationTlsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethod.methodIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('methodIntegration.tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayResponsesFetchMethodResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetMethodResponseRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethodResponse.statusCode', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethodResponse.responseParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMethodResponse.responseModels', props);
    return resource.getResponseField('responseModels') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesFetchModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetModelRequest) {
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          flatten: this.__input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.id', props);
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          flatten: this.__input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.name', props);
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          flatten: this.__input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.description', props);
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          flatten: this.__input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.schema', props);
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          flatten: this.__input.flatten,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

}

export class APIGatewayResponsesFetchModelTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetModelTemplateRequest) {
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelTemplate.value', props);
    return resource.getResponseField('value') as unknown as string;
  }

}

export class APIGatewayResponsesFetchModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetModelsRequest) {
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModels.position', props);
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModels.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayModel[];
  }

}

export class APIGatewayResponsesFetchRequestValidator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetRequestValidatorRequest) {
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
          restApiId: this.__input.restApiId,
          requestValidatorId: this.__input.requestValidatorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestValidator.id', props);
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
          restApiId: this.__input.restApiId,
          requestValidatorId: this.__input.requestValidatorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestValidator.name', props);
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
          restApiId: this.__input.restApiId,
          requestValidatorId: this.__input.requestValidatorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestValidator.validateRequestBody', props);
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
          restApiId: this.__input.restApiId,
          requestValidatorId: this.__input.requestValidatorId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestValidator.validateRequestParameters', props);
    return resource.getResponseField('validateRequestParameters') as unknown as boolean;
  }

}

export class APIGatewayResponsesFetchRequestValidators {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetRequestValidatorsRequest) {
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestValidators.position', props);
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestValidators.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayRequestValidator[];
  }

}

export class APIGatewayResponsesFetchResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetResourceRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResource.id', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResource.parentId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResource.pathPart', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResource.path', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResource.resourceMethods', props);
    return resource.getResponseField('resourceMethods') as unknown as Record<string, shapes.ApiGatewayMethod>;
  }

}

export class APIGatewayResponsesFetchResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetResourcesRequest) {
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResources.position', props);
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
          restApiId: this.__input.restApiId,
          position: this.__input.position,
          limit: this.__input.limit,
          embed: this.__input.embed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResources.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayResource[];
  }

}

export class APIGatewayResponsesFetchRestApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetRestApiRequest) {
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.id', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.name', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.description', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.createdDate', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.version', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.warnings', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.binaryMediaTypes', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.minimumCompressionSize', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayResponsesFetchRestApiEndpointConfiguration {
    return new APIGatewayResponsesFetchRestApiEndpointConfiguration(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.policy', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.tags', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayResponsesFetchRestApiEndpointConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetRestApiRequest) {
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.endpointConfiguration.types', props);
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
          restApiId: this.__input.restApiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayResponsesFetchRestApis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetRestApisRequest) {
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApis.position', props);
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRestApis.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayRestApi[];
  }

}

export class APIGatewayResponsesFetchSdk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetSdkRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          sdkType: this.__input.sdkType,
          parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSdk.contentType', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          sdkType: this.__input.sdkType,
          parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSdk.contentDisposition', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          sdkType: this.__input.sdkType,
          parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSdk.body', props);
    return resource.getResponseField('body') as unknown as any;
  }

}

export class APIGatewayResponsesFetchSdkType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetSdkTypeRequest) {
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSdkType.id', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSdkType.friendlyName', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSdkType.description', props);
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
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSdkType.configurationProperties', props);
    return resource.getResponseField('configurationProperties') as unknown as shapes.ApiGatewaySdkConfigurationProperty[];
  }

}

export class APIGatewayResponsesFetchSdkTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetSdkTypesRequest) {
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSdkTypes.position', props);
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSdkTypes.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewaySdkType[];
  }

}

export class APIGatewayResponsesFetchStage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetStageRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.deploymentId', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.clientCertificateId', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.stageName', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.description', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.cacheClusterEnabled', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.cacheClusterSize', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.cacheClusterStatus', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.methodSettings', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.variables', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.documentationVersion', props);
    return resource.getResponseField('documentationVersion') as unknown as string;
  }

  public get accessLogSettings(): APIGatewayResponsesFetchStageAccessLogSettings {
    return new APIGatewayResponsesFetchStageAccessLogSettings(this.__scope, this.__resources, this.__input);
  }

  public get canarySettings(): APIGatewayResponsesFetchStageCanarySettings {
    return new APIGatewayResponsesFetchStageCanarySettings(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.tracingEnabled', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.webAclArn', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.tags', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.createdDate', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.lastUpdatedDate', props);
    return resource.getResponseField('lastUpdatedDate') as unknown as string;
  }

}

export class APIGatewayResponsesFetchStageAccessLogSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetStageRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.accessLogSettings.format', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.accessLogSettings.destinationArn', props);
    return resource.getResponseField('accessLogSettings.destinationArn') as unknown as string;
  }

}

export class APIGatewayResponsesFetchStageCanarySettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetStageRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.canarySettings.percentTraffic', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.canarySettings.deploymentId', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.canarySettings.stageVariableOverrides', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.canarySettings.useStageCache', props);
    return resource.getResponseField('canarySettings.useStageCache') as unknown as boolean;
  }

}

export class APIGatewayResponsesFetchStages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetStagesRequest) {
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
          restApiId: this.__input.restApiId,
          deploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStages.item', props);
    return resource.getResponseField('item') as unknown as shapes.ApiGatewayStage[];
  }

}

export class APIGatewayResponsesFetchTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetTagsRequest) {
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
          resourceArn: this.__input.resourceArn,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTags.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesFetchUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetUsageRequest) {
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          startDate: this.__input.startDate,
          endDate: this.__input.endDate,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsage.usagePlanId', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          startDate: this.__input.startDate,
          endDate: this.__input.endDate,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsage.startDate', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          startDate: this.__input.startDate,
          endDate: this.__input.endDate,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsage.endDate', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          startDate: this.__input.startDate,
          endDate: this.__input.endDate,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsage.position', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          startDate: this.__input.startDate,
          endDate: this.__input.endDate,
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsage.items', props);
    return resource.getResponseField('items') as unknown as Record<string, number[][]>;
  }

}

export class APIGatewayResponsesFetchUsagePlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetUsagePlanRequest) {
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.id', props);
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.name', props);
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.description', props);
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.apiStages', props);
    return resource.getResponseField('apiStages') as unknown as shapes.ApiGatewayApiStage[];
  }

  public get throttle(): APIGatewayResponsesFetchUsagePlanThrottle {
    return new APIGatewayResponsesFetchUsagePlanThrottle(this.__scope, this.__resources, this.__input);
  }

  public get quota(): APIGatewayResponsesFetchUsagePlanQuota {
    return new APIGatewayResponsesFetchUsagePlanQuota(this.__scope, this.__resources, this.__input);
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.productCode', props);
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesFetchUsagePlanThrottle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetUsagePlanRequest) {
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.throttle.burstLimit', props);
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.throttle.rateLimit', props);
    return resource.getResponseField('throttle.rateLimit') as unknown as number;
  }

}

export class APIGatewayResponsesFetchUsagePlanQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetUsagePlanRequest) {
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.quota.limit', props);
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.quota.offset', props);
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
          usagePlanId: this.__input.usagePlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlan.quota.period', props);
    return resource.getResponseField('quota.period') as unknown as string;
  }

}

export class APIGatewayResponsesFetchUsagePlanKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetUsagePlanKeyRequest) {
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlanKey.id', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlanKey.type', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlanKey.value', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlanKey.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

}

export class APIGatewayResponsesFetchUsagePlanKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetUsagePlanKeysRequest) {
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
          usagePlanId: this.__input.usagePlanId,
          position: this.__input.position,
          limit: this.__input.limit,
          nameQuery: this.__input.nameQuery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlanKeys.position', props);
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
          usagePlanId: this.__input.usagePlanId,
          position: this.__input.position,
          limit: this.__input.limit,
          nameQuery: this.__input.nameQuery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlanKeys.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayUsagePlanKey[];
  }

}

export class APIGatewayResponsesFetchUsagePlans {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetUsagePlansRequest) {
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
          position: this.__input.position,
          keyId: this.__input.keyId,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlans.position', props);
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
          position: this.__input.position,
          keyId: this.__input.keyId,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUsagePlans.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayUsagePlan[];
  }

}

export class APIGatewayResponsesFetchVpcLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetVpcLinkRequest) {
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
          vpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.id', props);
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
          vpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.name', props);
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
          vpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.description', props);
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
          vpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.targetArns', props);
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
          vpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.status', props);
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
          vpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.statusMessage', props);
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
          vpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesFetchVpcLinks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayGetVpcLinksRequest) {
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLinks.position', props);
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
          position: this.__input.position,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLinks.items', props);
    return resource.getResponseField('items') as unknown as shapes.ApiGatewayVpcLink[];
  }

}

export class APIGatewayResponsesImportApiKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayImportApiKeysRequest) {
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
          format: this.__input.format,
          failOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApiKeys.ids', props);
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
          format: this.__input.format,
          failOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApiKeys.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

}

export class APIGatewayResponsesImportDocumentationParts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayImportDocumentationPartsRequest) {
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportDocumentationParts.ids', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportDocumentationParts.warnings', props);
    return resource.getResponseField('warnings') as unknown as string[];
  }

}

export class APIGatewayResponsesImportRestApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayImportRestApiRequest) {
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.id', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.name', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.description', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.createdDate', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.version', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.warnings', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.binaryMediaTypes', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.minimumCompressionSize', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayResponsesImportRestApiEndpointConfiguration {
    return new APIGatewayResponsesImportRestApiEndpointConfiguration(this.__scope, this.__resources, this.__input);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.policy', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.tags', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayResponsesImportRestApiEndpointConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayImportRestApiRequest) {
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.endpointConfiguration.types', props);
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
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayResponsesPutGatewayResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutGatewayResponseRequest) {
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          statusCode: this.__input.statusCode,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutGatewayResponse.responseType', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          statusCode: this.__input.statusCode,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutGatewayResponse.statusCode', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          statusCode: this.__input.statusCode,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutGatewayResponse.responseParameters', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          statusCode: this.__input.statusCode,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutGatewayResponse.responseTemplates', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          statusCode: this.__input.statusCode,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutGatewayResponse.defaultResponse', props);
    return resource.getResponseField('defaultResponse') as unknown as boolean;
  }

}

export class APIGatewayResponsesPutIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutIntegrationRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.type', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.httpMethod', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.uri', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.connectionType', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.connectionId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.credentials', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.requestParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.requestTemplates', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.passthroughBehavior', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.contentHandling', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.timeoutInMillis', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.cacheNamespace', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.cacheKeyParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.integrationResponses', props);
    return resource.getResponseField('integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayResponsesPutIntegrationTlsConfig {
    return new APIGatewayResponsesPutIntegrationTlsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class APIGatewayResponsesPutIntegrationTlsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutIntegrationRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          type: this.__input.type,
          integrationHttpMethod: this.__input.integrationHttpMethod,
          uri: this.__input.uri,
          connectionType: this.__input.connectionType,
          connectionId: this.__input.connectionId,
          credentials: this.__input.credentials,
          requestParameters: this.__input.requestParameters,
          requestTemplates: this.__input.requestTemplates,
          passthroughBehavior: this.__input.passthroughBehavior,
          cacheNamespace: this.__input.cacheNamespace,
          cacheKeyParameters: this.__input.cacheKeyParameters,
          contentHandling: this.__input.contentHandling,
          timeoutInMillis: this.__input.timeoutInMillis,
          tlsConfig: {
            insecureSkipVerification: this.__input.tlsConfig?.insecureSkipVerification,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayResponsesPutIntegrationResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutIntegrationResponseRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          selectionPattern: this.__input.selectionPattern,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
          contentHandling: this.__input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegrationResponse.statusCode', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          selectionPattern: this.__input.selectionPattern,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
          contentHandling: this.__input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegrationResponse.selectionPattern', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          selectionPattern: this.__input.selectionPattern,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
          contentHandling: this.__input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegrationResponse.responseParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          selectionPattern: this.__input.selectionPattern,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
          contentHandling: this.__input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegrationResponse.responseTemplates', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          selectionPattern: this.__input.selectionPattern,
          responseParameters: this.__input.responseParameters,
          responseTemplates: this.__input.responseTemplates,
          contentHandling: this.__input.contentHandling,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegrationResponse.contentHandling', props);
    return resource.getResponseField('contentHandling') as unknown as string;
  }

}

export class APIGatewayResponsesPutMethod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.httpMethod', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.authorizationType', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.authorizerId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.apiKeyRequired', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.requestValidatorId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.operationName', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.requestParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.requestModels', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodResponses', props);
    return resource.getResponseField('methodResponses') as unknown as Record<string, shapes.ApiGatewayMethodResponse>;
  }

  public get methodIntegration(): APIGatewayResponsesPutMethodMethodIntegration {
    return new APIGatewayResponsesPutMethodMethodIntegration(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.authorizationScopes', props);
    return resource.getResponseField('authorizationScopes') as unknown as string[];
  }

}

export class APIGatewayResponsesPutMethodMethodIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.type', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.httpMethod', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.uri', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.connectionType', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.connectionId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.credentials', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.requestParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.requestTemplates', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.passthroughBehavior', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.contentHandling', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.timeoutInMillis', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.cacheNamespace', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.cacheKeyParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.integrationResponses', props);
    return resource.getResponseField('methodIntegration.integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayResponsesPutMethodMethodIntegrationTlsConfig {
    return new APIGatewayResponsesPutMethodMethodIntegrationTlsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class APIGatewayResponsesPutMethodMethodIntegrationTlsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          authorizationType: this.__input.authorizationType,
          authorizerId: this.__input.authorizerId,
          apiKeyRequired: this.__input.apiKeyRequired,
          operationName: this.__input.operationName,
          requestParameters: this.__input.requestParameters,
          requestModels: this.__input.requestModels,
          requestValidatorId: this.__input.requestValidatorId,
          authorizationScopes: this.__input.authorizationScopes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethod.methodIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('methodIntegration.tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayResponsesPutMethodResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutMethodResponseRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          responseParameters: this.__input.responseParameters,
          responseModels: this.__input.responseModels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethodResponse.statusCode', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          responseParameters: this.__input.responseParameters,
          responseModels: this.__input.responseModels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethodResponse.responseParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          responseParameters: this.__input.responseParameters,
          responseModels: this.__input.responseModels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutMethodResponse.responseModels', props);
    return resource.getResponseField('responseModels') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesPutRestApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutRestApiRequest) {
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.id', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.name', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.description', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.createdDate', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.version', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.warnings', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.binaryMediaTypes', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.minimumCompressionSize', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayResponsesPutRestApiEndpointConfiguration {
    return new APIGatewayResponsesPutRestApiEndpointConfiguration(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.policy', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.tags', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayResponsesPutRestApiEndpointConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayPutRestApiRequest) {
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.endpointConfiguration.types', props);
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
          restApiId: this.__input.restApiId,
          mode: this.__input.mode,
          failOnWarnings: this.__input.failOnWarnings,
          parameters: this.__input.parameters,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayResponsesTestInvokeAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayTestInvokeAuthorizerRequest) {
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          stageVariables: this.__input.stageVariables,
          additionalContext: this.__input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.clientStatus', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          stageVariables: this.__input.stageVariables,
          additionalContext: this.__input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.log', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          stageVariables: this.__input.stageVariables,
          additionalContext: this.__input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.latency', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          stageVariables: this.__input.stageVariables,
          additionalContext: this.__input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.principalId', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          stageVariables: this.__input.stageVariables,
          additionalContext: this.__input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.policy', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          stageVariables: this.__input.stageVariables,
          additionalContext: this.__input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.authorization', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          stageVariables: this.__input.stageVariables,
          additionalContext: this.__input.additionalContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.claims', props);
    return resource.getResponseField('claims') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesTestInvokeMethod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayTestInvokeMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          clientCertificateId: this.__input.clientCertificateId,
          stageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeMethod.status', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          clientCertificateId: this.__input.clientCertificateId,
          stageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeMethod.body', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          clientCertificateId: this.__input.clientCertificateId,
          stageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeMethod.headers', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          clientCertificateId: this.__input.clientCertificateId,
          stageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeMethod.multiValueHeaders', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          clientCertificateId: this.__input.clientCertificateId,
          stageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeMethod.log', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          pathWithQueryString: this.__input.pathWithQueryString,
          body: this.__input.body,
          headers: this.__input.headers,
          multiValueHeaders: this.__input.multiValueHeaders,
          clientCertificateId: this.__input.clientCertificateId,
          stageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeMethod.latency', props);
    return resource.getResponseField('latency') as unknown as number;
  }

}

export class APIGatewayResponsesUpdateAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateAccountRequest) {
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
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.cloudwatchRoleArn', props);
    return resource.getResponseField('cloudwatchRoleArn') as unknown as string;
  }

  public get throttleSettings(): APIGatewayResponsesUpdateAccountThrottleSettings {
    return new APIGatewayResponsesUpdateAccountThrottleSettings(this.__scope, this.__resources, this.__input);
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
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.features', props);
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
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.apiKeyVersion', props);
    return resource.getResponseField('apiKeyVersion') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateAccountThrottleSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateAccountRequest) {
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
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.throttleSettings.burstLimit', props);
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
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccount.throttleSettings.rateLimit', props);
    return resource.getResponseField('throttleSettings.rateLimit') as unknown as number;
  }

}

export class APIGatewayResponsesUpdateApiKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateApiKeyRequest) {
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.id', props);
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.value', props);
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.name', props);
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.customerId', props);
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.description', props);
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.enabled', props);
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.createdDate', props);
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.lastUpdatedDate', props);
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.stageKeys', props);
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
          apiKey: this.__input.apiKey,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiKey.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesUpdateAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateAuthorizerRequest) {
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.id', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.name', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.type', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.providerARNs', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.authType', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.authorizerUri', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.authorizerCredentials', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.identitySource', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.identityValidationExpression', props);
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
          restApiId: this.__input.restApiId,
          authorizerId: this.__input.authorizerId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.authorizerResultTtlInSeconds', props);
    return resource.getResponseField('authorizerResultTtlInSeconds') as unknown as number;
  }

}

export class APIGatewayResponsesUpdateBasePathMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateBasePathMappingRequest) {
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
          domainName: this.__input.domainName,
          basePath: this.__input.basePath,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBasePathMapping.basePath', props);
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
          domainName: this.__input.domainName,
          basePath: this.__input.basePath,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBasePathMapping.restApiId', props);
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
          domainName: this.__input.domainName,
          basePath: this.__input.basePath,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBasePathMapping.stage', props);
    return resource.getResponseField('stage') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateClientCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateClientCertificateRequest) {
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
          clientCertificateId: this.__input.clientCertificateId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClientCertificate.clientCertificateId', props);
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
          clientCertificateId: this.__input.clientCertificateId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClientCertificate.description', props);
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
          clientCertificateId: this.__input.clientCertificateId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClientCertificate.pemEncodedCertificate', props);
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
          clientCertificateId: this.__input.clientCertificateId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClientCertificate.createdDate', props);
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
          clientCertificateId: this.__input.clientCertificateId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClientCertificate.expirationDate', props);
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
          clientCertificateId: this.__input.clientCertificateId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClientCertificate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesUpdateDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateDeploymentRequest) {
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
          restApiId: this.__input.restApiId,
          deploymentId: this.__input.deploymentId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.id', props);
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
          restApiId: this.__input.restApiId,
          deploymentId: this.__input.deploymentId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.description', props);
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
          restApiId: this.__input.restApiId,
          deploymentId: this.__input.deploymentId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.createdDate', props);
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
          restApiId: this.__input.restApiId,
          deploymentId: this.__input.deploymentId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.apiSummary', props);
    return resource.getResponseField('apiSummary') as unknown as Record<string, Record<string, shapes.ApiGatewayMethodSnapshot>>;
  }

}

export class APIGatewayResponsesUpdateDocumentationPart {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateDocumentationPartRequest) {
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationPart.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get location(): APIGatewayResponsesUpdateDocumentationPartLocation {
    return new APIGatewayResponsesUpdateDocumentationPartLocation(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationPart.properties', props);
    return resource.getResponseField('properties') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateDocumentationPartLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateDocumentationPartRequest) {
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationPart.location.type', props);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationPart.location.path', props);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationPart.location.method', props);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationPart.location.statusCode', props);
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
          restApiId: this.__input.restApiId,
          documentationPartId: this.__input.documentationPartId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationPart.location.name', props);
    return resource.getResponseField('location.name') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateDocumentationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateDocumentationVersionRequest) {
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
          restApiId: this.__input.restApiId,
          documentationVersion: this.__input.documentationVersion,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationVersion.version', props);
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
          restApiId: this.__input.restApiId,
          documentationVersion: this.__input.documentationVersion,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationVersion.createdDate', props);
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
          restApiId: this.__input.restApiId,
          documentationVersion: this.__input.documentationVersion,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentationVersion.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateDomainName {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateDomainNameRequest) {
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.domainName', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.certificateName', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.certificateArn', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.certificateUploadDate', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.regionalDomainName', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.regionalHostedZoneId', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.regionalCertificateName', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.regionalCertificateArn', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.distributionDomainName', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.distributionHostedZoneId', props);
    return resource.getResponseField('distributionHostedZoneId') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayResponsesUpdateDomainNameEndpointConfiguration {
    return new APIGatewayResponsesUpdateDomainNameEndpointConfiguration(this.__scope, this.__resources, this.__input);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.domainNameStatus', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.domainNameStatusMessage', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.securityPolicy', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get mutualTlsAuthentication(): APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication {
    return new APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication(this.__scope, this.__resources, this.__input);
  }

}

export class APIGatewayResponsesUpdateDomainNameEndpointConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateDomainNameRequest) {
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.endpointConfiguration.types', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayResponsesUpdateDomainNameMutualTlsAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateDomainNameRequest) {
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.mutualTlsAuthentication.truststoreUri', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.mutualTlsAuthentication.truststoreVersion', props);
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
          domainName: this.__input.domainName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.mutualTlsAuthentication.truststoreWarnings', props);
    return resource.getResponseField('mutualTlsAuthentication.truststoreWarnings') as unknown as string[];
  }

}

export class APIGatewayResponsesUpdateGatewayResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateGatewayResponseRequest) {
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewayResponse.responseType', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewayResponse.statusCode', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewayResponse.responseParameters', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewayResponse.responseTemplates', props);
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
          restApiId: this.__input.restApiId,
          responseType: this.__input.responseType,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewayResponse.defaultResponse', props);
    return resource.getResponseField('defaultResponse') as unknown as boolean;
  }

}

export class APIGatewayResponsesUpdateIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateIntegrationRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.type', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.httpMethod', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.uri', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.connectionType', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.connectionId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.credentials', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.requestParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.requestTemplates', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.passthroughBehavior', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.contentHandling', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.timeoutInMillis', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.cacheNamespace', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.cacheKeyParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.integrationResponses', props);
    return resource.getResponseField('integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayResponsesUpdateIntegrationTlsConfig {
    return new APIGatewayResponsesUpdateIntegrationTlsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class APIGatewayResponsesUpdateIntegrationTlsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateIntegrationRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayResponsesUpdateIntegrationResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateIntegrationResponseRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.statusCode', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.selectionPattern', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.responseParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.responseTemplates', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.contentHandling', props);
    return resource.getResponseField('contentHandling') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateMethod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.httpMethod', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.authorizationType', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.authorizerId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.apiKeyRequired', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.requestValidatorId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.operationName', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.requestParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.requestModels', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodResponses', props);
    return resource.getResponseField('methodResponses') as unknown as Record<string, shapes.ApiGatewayMethodResponse>;
  }

  public get methodIntegration(): APIGatewayResponsesUpdateMethodMethodIntegration {
    return new APIGatewayResponsesUpdateMethodMethodIntegration(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.authorizationScopes', props);
    return resource.getResponseField('authorizationScopes') as unknown as string[];
  }

}

export class APIGatewayResponsesUpdateMethodMethodIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.type', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.httpMethod', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.uri', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.connectionType', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.connectionId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.credentials', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.requestParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.requestTemplates', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.passthroughBehavior', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.contentHandling', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.timeoutInMillis', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.cacheNamespace', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.cacheKeyParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.integrationResponses', props);
    return resource.getResponseField('methodIntegration.integrationResponses') as unknown as Record<string, shapes.ApiGatewayIntegrationResponse>;
  }

  public get tlsConfig(): APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig {
    return new APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class APIGatewayResponsesUpdateMethodMethodIntegrationTlsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateMethodRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethod.methodIntegration.tlsConfig.insecureSkipVerification', props);
    return resource.getResponseField('methodIntegration.tlsConfig.insecureSkipVerification') as unknown as boolean;
  }

}

export class APIGatewayResponsesUpdateMethodResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateMethodResponseRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethodResponse.statusCode', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethodResponse.responseParameters', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          httpMethod: this.__input.httpMethod,
          statusCode: this.__input.statusCode,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMethodResponse.responseModels', props);
    return resource.getResponseField('responseModels') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesUpdateModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateModelRequest) {
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.id', props);
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.name', props);
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.description', props);
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.schema', props);
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
          restApiId: this.__input.restApiId,
          modelName: this.__input.modelName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateRequestValidator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateRequestValidatorRequest) {
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
          restApiId: this.__input.restApiId,
          requestValidatorId: this.__input.requestValidatorId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRequestValidator.id', props);
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
          restApiId: this.__input.restApiId,
          requestValidatorId: this.__input.requestValidatorId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRequestValidator.name', props);
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
          restApiId: this.__input.restApiId,
          requestValidatorId: this.__input.requestValidatorId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRequestValidator.validateRequestBody', props);
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
          restApiId: this.__input.restApiId,
          requestValidatorId: this.__input.requestValidatorId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRequestValidator.validateRequestParameters', props);
    return resource.getResponseField('validateRequestParameters') as unknown as boolean;
  }

}

export class APIGatewayResponsesUpdateResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateResourceRequest) {
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResource.id', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResource.parentId', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResource.pathPart', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResource.path', props);
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
          restApiId: this.__input.restApiId,
          resourceId: this.__input.resourceId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResource.resourceMethods', props);
    return resource.getResponseField('resourceMethods') as unknown as Record<string, shapes.ApiGatewayMethod>;
  }

}

export class APIGatewayResponsesUpdateRestApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateRestApiRequest) {
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.id', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.name', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.description', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.createdDate', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.version', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.warnings', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.binaryMediaTypes', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.minimumCompressionSize', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.apiKeySource', props);
    return resource.getResponseField('apiKeySource') as unknown as string;
  }

  public get endpointConfiguration(): APIGatewayResponsesUpdateRestApiEndpointConfiguration {
    return new APIGatewayResponsesUpdateRestApiEndpointConfiguration(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.policy', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.tags', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.disableExecuteApiEndpoint', props);
    return resource.getResponseField('disableExecuteApiEndpoint') as unknown as boolean;
  }

}

export class APIGatewayResponsesUpdateRestApiEndpointConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateRestApiRequest) {
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.endpointConfiguration.types', props);
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
          restApiId: this.__input.restApiId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRestApi.endpointConfiguration.vpcEndpointIds', props);
    return resource.getResponseField('endpointConfiguration.vpcEndpointIds') as unknown as string[];
  }

}

export class APIGatewayResponsesUpdateStage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateStageRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.deploymentId', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.clientCertificateId', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.stageName', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.description', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.cacheClusterEnabled', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.cacheClusterSize', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.cacheClusterStatus', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.methodSettings', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.variables', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.documentationVersion', props);
    return resource.getResponseField('documentationVersion') as unknown as string;
  }

  public get accessLogSettings(): APIGatewayResponsesUpdateStageAccessLogSettings {
    return new APIGatewayResponsesUpdateStageAccessLogSettings(this.__scope, this.__resources, this.__input);
  }

  public get canarySettings(): APIGatewayResponsesUpdateStageCanarySettings {
    return new APIGatewayResponsesUpdateStageCanarySettings(this.__scope, this.__resources, this.__input);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.tracingEnabled', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.webAclArn', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.tags', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.createdDate', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.lastUpdatedDate', props);
    return resource.getResponseField('lastUpdatedDate') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateStageAccessLogSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateStageRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.accessLogSettings.format', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.accessLogSettings.destinationArn', props);
    return resource.getResponseField('accessLogSettings.destinationArn') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateStageCanarySettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateStageRequest) {
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.canarySettings.percentTraffic', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.canarySettings.deploymentId', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.canarySettings.stageVariableOverrides', props);
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
          restApiId: this.__input.restApiId,
          stageName: this.__input.stageName,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.canarySettings.useStageCache', props);
    return resource.getResponseField('canarySettings.useStageCache') as unknown as boolean;
  }

}

export class APIGatewayResponsesUpdateUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateUsageRequest) {
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsage.usagePlanId', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsage.startDate', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsage.endDate', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsage.position', props);
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
          usagePlanId: this.__input.usagePlanId,
          keyId: this.__input.keyId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsage.items', props);
    return resource.getResponseField('items') as unknown as Record<string, number[][]>;
  }

}

export class APIGatewayResponsesUpdateUsagePlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateUsagePlanRequest) {
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.id', props);
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.name', props);
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.description', props);
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.apiStages', props);
    return resource.getResponseField('apiStages') as unknown as shapes.ApiGatewayApiStage[];
  }

  public get throttle(): APIGatewayResponsesUpdateUsagePlanThrottle {
    return new APIGatewayResponsesUpdateUsagePlanThrottle(this.__scope, this.__resources, this.__input);
  }

  public get quota(): APIGatewayResponsesUpdateUsagePlanQuota {
    return new APIGatewayResponsesUpdateUsagePlanQuota(this.__scope, this.__resources, this.__input);
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.productCode', props);
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class APIGatewayResponsesUpdateUsagePlanThrottle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateUsagePlanRequest) {
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.throttle.burstLimit', props);
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.throttle.rateLimit', props);
    return resource.getResponseField('throttle.rateLimit') as unknown as number;
  }

}

export class APIGatewayResponsesUpdateUsagePlanQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateUsagePlanRequest) {
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.quota.limit', props);
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.quota.offset', props);
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
          usagePlanId: this.__input.usagePlanId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUsagePlan.quota.period', props);
    return resource.getResponseField('quota.period') as unknown as string;
  }

}

export class APIGatewayResponsesUpdateVpcLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayUpdateVpcLinkRequest) {
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
          vpcLinkId: this.__input.vpcLinkId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.id', props);
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
          vpcLinkId: this.__input.vpcLinkId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.name', props);
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
          vpcLinkId: this.__input.vpcLinkId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.description', props);
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
          vpcLinkId: this.__input.vpcLinkId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.targetArns', props);
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
          vpcLinkId: this.__input.vpcLinkId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.status', props);
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
          vpcLinkId: this.__input.vpcLinkId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.statusMessage', props);
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
          vpcLinkId: this.__input.vpcLinkId,
          patchOperations: this.__input.patchOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

