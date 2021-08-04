import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ApiGatewayV2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApi(input: shapes.ApiGatewayV2CreateApiRequest): ApiGatewayV2ResponsesCreateApi {
    return new ApiGatewayV2ResponsesCreateApi(this, this.__resources, input);
  }

  public createApiMapping(input: shapes.ApiGatewayV2CreateApiMappingRequest): ApiGatewayV2ResponsesCreateApiMapping {
    return new ApiGatewayV2ResponsesCreateApiMapping(this, this.__resources, input);
  }

  public createAuthorizer(input: shapes.ApiGatewayV2CreateAuthorizerRequest): ApiGatewayV2ResponsesCreateAuthorizer {
    return new ApiGatewayV2ResponsesCreateAuthorizer(this, this.__resources, input);
  }

  public createDeployment(input: shapes.ApiGatewayV2CreateDeploymentRequest): ApiGatewayV2ResponsesCreateDeployment {
    return new ApiGatewayV2ResponsesCreateDeployment(this, this.__resources, input);
  }

  public createDomainName(input: shapes.ApiGatewayV2CreateDomainNameRequest): ApiGatewayV2ResponsesCreateDomainName {
    return new ApiGatewayV2ResponsesCreateDomainName(this, this.__resources, input);
  }

  public createIntegration(input: shapes.ApiGatewayV2CreateIntegrationRequest): ApiGatewayV2ResponsesCreateIntegration {
    return new ApiGatewayV2ResponsesCreateIntegration(this, this.__resources, input);
  }

  public createIntegrationResponse(input: shapes.ApiGatewayV2CreateIntegrationResponseRequest): ApiGatewayV2ResponsesCreateIntegrationResponse {
    return new ApiGatewayV2ResponsesCreateIntegrationResponse(this, this.__resources, input);
  }

  public createModel(input: shapes.ApiGatewayV2CreateModelRequest): ApiGatewayV2ResponsesCreateModel {
    return new ApiGatewayV2ResponsesCreateModel(this, this.__resources, input);
  }

  public createRoute(input: shapes.ApiGatewayV2CreateRouteRequest): ApiGatewayV2ResponsesCreateRoute {
    return new ApiGatewayV2ResponsesCreateRoute(this, this.__resources, input);
  }

  public createRouteResponse(input: shapes.ApiGatewayV2CreateRouteResponseRequest): ApiGatewayV2ResponsesCreateRouteResponse {
    return new ApiGatewayV2ResponsesCreateRouteResponse(this, this.__resources, input);
  }

  public createStage(input: shapes.ApiGatewayV2CreateStageRequest): ApiGatewayV2ResponsesCreateStage {
    return new ApiGatewayV2ResponsesCreateStage(this, this.__resources, input);
  }

  public createVpcLink(input: shapes.ApiGatewayV2CreateVpcLinkRequest): ApiGatewayV2ResponsesCreateVpcLink {
    return new ApiGatewayV2ResponsesCreateVpcLink(this, this.__resources, input);
  }

  public deleteAccessLogSettings(input: shapes.ApiGatewayV2DeleteAccessLogSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccessLogSettings',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteAccessLogSettings'),
        parameters: {
          ApiId: input.apiId,
          StageName: input.stageName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccessLogSettings', props);
  }

  public deleteApi(input: shapes.ApiGatewayV2DeleteApiRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteApi'),
        parameters: {
          ApiId: input.apiId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApi', props);
  }

  public deleteApiMapping(input: shapes.ApiGatewayV2DeleteApiMappingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteApiMapping'),
        parameters: {
          ApiMappingId: input.apiMappingId,
          DomainName: input.domainName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApiMapping', props);
  }

  public deleteAuthorizer(input: shapes.ApiGatewayV2DeleteAuthorizerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteAuthorizer'),
        parameters: {
          ApiId: input.apiId,
          AuthorizerId: input.authorizerId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAuthorizer', props);
  }

  public deleteCorsConfiguration(input: shapes.ApiGatewayV2DeleteCorsConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCorsConfiguration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteCorsConfiguration'),
        parameters: {
          ApiId: input.apiId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCorsConfiguration', props);
  }

  public deleteDeployment(input: shapes.ApiGatewayV2DeleteDeploymentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteDeployment'),
        parameters: {
          ApiId: input.apiId,
          DeploymentId: input.deploymentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDeployment', props);
  }

  public deleteDomainName(input: shapes.ApiGatewayV2DeleteDomainNameRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteDomainName'),
        parameters: {
          DomainName: input.domainName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDomainName', props);
  }

  public deleteIntegration(input: shapes.ApiGatewayV2DeleteIntegrationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteIntegration'),
        parameters: {
          ApiId: input.apiId,
          IntegrationId: input.integrationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteIntegration', props);
  }

  public deleteIntegrationResponse(input: shapes.ApiGatewayV2DeleteIntegrationResponseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteIntegrationResponse'),
        parameters: {
          ApiId: input.apiId,
          IntegrationId: input.integrationId,
          IntegrationResponseId: input.integrationResponseId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteIntegrationResponse', props);
  }

  public deleteModel(input: shapes.ApiGatewayV2DeleteModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteModel'),
        parameters: {
          ApiId: input.apiId,
          ModelId: input.modelId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteModel', props);
  }

  public deleteRoute(input: shapes.ApiGatewayV2DeleteRouteRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteRoute'),
        parameters: {
          ApiId: input.apiId,
          RouteId: input.routeId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRoute', props);
  }

  public deleteRouteRequestParameter(input: shapes.ApiGatewayV2DeleteRouteRequestParameterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRouteRequestParameter',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteRouteRequestParameter'),
        parameters: {
          ApiId: input.apiId,
          RequestParameterKey: input.requestParameterKey,
          RouteId: input.routeId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRouteRequestParameter', props);
  }

  public deleteRouteResponse(input: shapes.ApiGatewayV2DeleteRouteResponseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteRouteResponse'),
        parameters: {
          ApiId: input.apiId,
          RouteId: input.routeId,
          RouteResponseId: input.routeResponseId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRouteResponse', props);
  }

  public deleteRouteSettings(input: shapes.ApiGatewayV2DeleteRouteSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRouteSettings',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteRouteSettings'),
        parameters: {
          ApiId: input.apiId,
          RouteKey: input.routeKey,
          StageName: input.stageName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRouteSettings', props);
  }

  public deleteStage(input: shapes.ApiGatewayV2DeleteStageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteStage'),
        parameters: {
          ApiId: input.apiId,
          StageName: input.stageName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStage', props);
  }

  public deleteVpcLink(input: shapes.ApiGatewayV2DeleteVpcLinkRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.DeleteVpcLink'),
        parameters: {
          VpcLinkId: input.vpcLinkId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVpcLink', props);
  }

  public exportApi(input: shapes.ApiGatewayV2ExportApiRequest): ApiGatewayV2ResponsesExportApi {
    return new ApiGatewayV2ResponsesExportApi(this, this.__resources, input);
  }

  public resetAuthorizersCache(input: shapes.ApiGatewayV2ResetAuthorizersCacheRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetAuthorizersCache',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ResetAuthorizersCache'),
        parameters: {
          ApiId: input.apiId,
          StageName: input.stageName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ResetAuthorizersCache', props);
  }

  public fetchApi(input: shapes.ApiGatewayV2GetApiRequest): ApiGatewayV2ResponsesFetchApi {
    return new ApiGatewayV2ResponsesFetchApi(this, this.__resources, input);
  }

  public fetchApiMapping(input: shapes.ApiGatewayV2GetApiMappingRequest): ApiGatewayV2ResponsesFetchApiMapping {
    return new ApiGatewayV2ResponsesFetchApiMapping(this, this.__resources, input);
  }

  public fetchApiMappings(input: shapes.ApiGatewayV2GetApiMappingsRequest): ApiGatewayV2ResponsesFetchApiMappings {
    return new ApiGatewayV2ResponsesFetchApiMappings(this, this.__resources, input);
  }

  public fetchApis(input: shapes.ApiGatewayV2GetApisRequest): ApiGatewayV2ResponsesFetchApis {
    return new ApiGatewayV2ResponsesFetchApis(this, this.__resources, input);
  }

  public fetchAuthorizer(input: shapes.ApiGatewayV2GetAuthorizerRequest): ApiGatewayV2ResponsesFetchAuthorizer {
    return new ApiGatewayV2ResponsesFetchAuthorizer(this, this.__resources, input);
  }

  public fetchAuthorizers(input: shapes.ApiGatewayV2GetAuthorizersRequest): ApiGatewayV2ResponsesFetchAuthorizers {
    return new ApiGatewayV2ResponsesFetchAuthorizers(this, this.__resources, input);
  }

  public fetchDeployment(input: shapes.ApiGatewayV2GetDeploymentRequest): ApiGatewayV2ResponsesFetchDeployment {
    return new ApiGatewayV2ResponsesFetchDeployment(this, this.__resources, input);
  }

  public fetchDeployments(input: shapes.ApiGatewayV2GetDeploymentsRequest): ApiGatewayV2ResponsesFetchDeployments {
    return new ApiGatewayV2ResponsesFetchDeployments(this, this.__resources, input);
  }

  public fetchDomainName(input: shapes.ApiGatewayV2GetDomainNameRequest): ApiGatewayV2ResponsesFetchDomainName {
    return new ApiGatewayV2ResponsesFetchDomainName(this, this.__resources, input);
  }

  public fetchDomainNames(input: shapes.ApiGatewayV2GetDomainNamesRequest): ApiGatewayV2ResponsesFetchDomainNames {
    return new ApiGatewayV2ResponsesFetchDomainNames(this, this.__resources, input);
  }

  public fetchIntegration(input: shapes.ApiGatewayV2GetIntegrationRequest): ApiGatewayV2ResponsesFetchIntegration {
    return new ApiGatewayV2ResponsesFetchIntegration(this, this.__resources, input);
  }

  public fetchIntegrationResponse(input: shapes.ApiGatewayV2GetIntegrationResponseRequest): ApiGatewayV2ResponsesFetchIntegrationResponse {
    return new ApiGatewayV2ResponsesFetchIntegrationResponse(this, this.__resources, input);
  }

  public fetchIntegrationResponses(input: shapes.ApiGatewayV2GetIntegrationResponsesRequest): ApiGatewayV2ResponsesFetchIntegrationResponses {
    return new ApiGatewayV2ResponsesFetchIntegrationResponses(this, this.__resources, input);
  }

  public fetchIntegrations(input: shapes.ApiGatewayV2GetIntegrationsRequest): ApiGatewayV2ResponsesFetchIntegrations {
    return new ApiGatewayV2ResponsesFetchIntegrations(this, this.__resources, input);
  }

  public fetchModel(input: shapes.ApiGatewayV2GetModelRequest): ApiGatewayV2ResponsesFetchModel {
    return new ApiGatewayV2ResponsesFetchModel(this, this.__resources, input);
  }

  public fetchModelTemplate(input: shapes.ApiGatewayV2GetModelTemplateRequest): ApiGatewayV2ResponsesFetchModelTemplate {
    return new ApiGatewayV2ResponsesFetchModelTemplate(this, this.__resources, input);
  }

  public fetchModels(input: shapes.ApiGatewayV2GetModelsRequest): ApiGatewayV2ResponsesFetchModels {
    return new ApiGatewayV2ResponsesFetchModels(this, this.__resources, input);
  }

  public fetchRoute(input: shapes.ApiGatewayV2GetRouteRequest): ApiGatewayV2ResponsesFetchRoute {
    return new ApiGatewayV2ResponsesFetchRoute(this, this.__resources, input);
  }

  public fetchRouteResponse(input: shapes.ApiGatewayV2GetRouteResponseRequest): ApiGatewayV2ResponsesFetchRouteResponse {
    return new ApiGatewayV2ResponsesFetchRouteResponse(this, this.__resources, input);
  }

  public fetchRouteResponses(input: shapes.ApiGatewayV2GetRouteResponsesRequest): ApiGatewayV2ResponsesFetchRouteResponses {
    return new ApiGatewayV2ResponsesFetchRouteResponses(this, this.__resources, input);
  }

  public fetchRoutes(input: shapes.ApiGatewayV2GetRoutesRequest): ApiGatewayV2ResponsesFetchRoutes {
    return new ApiGatewayV2ResponsesFetchRoutes(this, this.__resources, input);
  }

  public fetchStage(input: shapes.ApiGatewayV2GetStageRequest): ApiGatewayV2ResponsesFetchStage {
    return new ApiGatewayV2ResponsesFetchStage(this, this.__resources, input);
  }

  public fetchStages(input: shapes.ApiGatewayV2GetStagesRequest): ApiGatewayV2ResponsesFetchStages {
    return new ApiGatewayV2ResponsesFetchStages(this, this.__resources, input);
  }

  public fetchTags(input: shapes.ApiGatewayV2GetTagsRequest): ApiGatewayV2ResponsesFetchTags {
    return new ApiGatewayV2ResponsesFetchTags(this, this.__resources, input);
  }

  public fetchVpcLink(input: shapes.ApiGatewayV2GetVpcLinkRequest): ApiGatewayV2ResponsesFetchVpcLink {
    return new ApiGatewayV2ResponsesFetchVpcLink(this, this.__resources, input);
  }

  public fetchVpcLinks(input: shapes.ApiGatewayV2GetVpcLinksRequest): ApiGatewayV2ResponsesFetchVpcLinks {
    return new ApiGatewayV2ResponsesFetchVpcLinks(this, this.__resources, input);
  }

  public importApi(input: shapes.ApiGatewayV2ImportApiRequest): ApiGatewayV2ResponsesImportApi {
    return new ApiGatewayV2ResponsesImportApi(this, this.__resources, input);
  }

  public reimportApi(input: shapes.ApiGatewayV2ReimportApiRequest): ApiGatewayV2ResponsesReimportApi {
    return new ApiGatewayV2ResponsesReimportApi(this, this.__resources, input);
  }

  public tagResource(input: shapes.ApiGatewayV2TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.ApiGatewayV2UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApi(input: shapes.ApiGatewayV2UpdateApiRequest): ApiGatewayV2ResponsesUpdateApi {
    return new ApiGatewayV2ResponsesUpdateApi(this, this.__resources, input);
  }

  public updateApiMapping(input: shapes.ApiGatewayV2UpdateApiMappingRequest): ApiGatewayV2ResponsesUpdateApiMapping {
    return new ApiGatewayV2ResponsesUpdateApiMapping(this, this.__resources, input);
  }

  public updateAuthorizer(input: shapes.ApiGatewayV2UpdateAuthorizerRequest): ApiGatewayV2ResponsesUpdateAuthorizer {
    return new ApiGatewayV2ResponsesUpdateAuthorizer(this, this.__resources, input);
  }

  public updateDeployment(input: shapes.ApiGatewayV2UpdateDeploymentRequest): ApiGatewayV2ResponsesUpdateDeployment {
    return new ApiGatewayV2ResponsesUpdateDeployment(this, this.__resources, input);
  }

  public updateDomainName(input: shapes.ApiGatewayV2UpdateDomainNameRequest): ApiGatewayV2ResponsesUpdateDomainName {
    return new ApiGatewayV2ResponsesUpdateDomainName(this, this.__resources, input);
  }

  public updateIntegration(input: shapes.ApiGatewayV2UpdateIntegrationRequest): ApiGatewayV2ResponsesUpdateIntegration {
    return new ApiGatewayV2ResponsesUpdateIntegration(this, this.__resources, input);
  }

  public updateIntegrationResponse(input: shapes.ApiGatewayV2UpdateIntegrationResponseRequest): ApiGatewayV2ResponsesUpdateIntegrationResponse {
    return new ApiGatewayV2ResponsesUpdateIntegrationResponse(this, this.__resources, input);
  }

  public updateModel(input: shapes.ApiGatewayV2UpdateModelRequest): ApiGatewayV2ResponsesUpdateModel {
    return new ApiGatewayV2ResponsesUpdateModel(this, this.__resources, input);
  }

  public updateRoute(input: shapes.ApiGatewayV2UpdateRouteRequest): ApiGatewayV2ResponsesUpdateRoute {
    return new ApiGatewayV2ResponsesUpdateRoute(this, this.__resources, input);
  }

  public updateRouteResponse(input: shapes.ApiGatewayV2UpdateRouteResponseRequest): ApiGatewayV2ResponsesUpdateRouteResponse {
    return new ApiGatewayV2ResponsesUpdateRouteResponse(this, this.__resources, input);
  }

  public updateStage(input: shapes.ApiGatewayV2UpdateStageRequest): ApiGatewayV2ResponsesUpdateStage {
    return new ApiGatewayV2ResponsesUpdateStage(this, this.__resources, input);
  }

  public updateVpcLink(input: shapes.ApiGatewayV2UpdateVpcLinkRequest): ApiGatewayV2ResponsesUpdateVpcLink {
    return new ApiGatewayV2ResponsesUpdateVpcLink(this, this.__resources, input);
  }

}

export class ApiGatewayV2ResponsesCreateApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateApiRequest) {
  }

  public get apiEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.ApiEndpoint'),
        outputPath: 'ApiEndpoint',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.ApiEndpoint', props);
    return resource.getResponseField('ApiEndpoint') as unknown as string;
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.ApiId'),
        outputPath: 'ApiId',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.ApiId', props);
    return resource.getResponseField('ApiId') as unknown as string;
  }

  public get apiKeySelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.ApiKeySelectionExpression'),
        outputPath: 'ApiKeySelectionExpression',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2ResponsesCreateApiCorsConfiguration {
    return new ApiGatewayV2ResponsesCreateApiCorsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.Description'),
        outputPath: 'Description',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get disableSchemaValidation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.DisableSchemaValidation'),
        outputPath: 'DisableSchemaValidation',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.DisableSchemaValidation', props);
    return resource.getResponseField('DisableSchemaValidation') as unknown as boolean;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.DisableExecuteApiEndpoint'),
        outputPath: 'DisableExecuteApiEndpoint',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.DisableExecuteApiEndpoint', props);
    return resource.getResponseField('DisableExecuteApiEndpoint') as unknown as boolean;
  }

  public get importInfo(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.ImportInfo'),
        outputPath: 'ImportInfo',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.ImportInfo', props);
    return resource.getResponseField('ImportInfo') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.Name'),
        outputPath: 'Name',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get protocolType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.ProtocolType'),
        outputPath: 'ProtocolType',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.ProtocolType', props);
    return resource.getResponseField('ProtocolType') as unknown as string;
  }

  public get routeSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.RouteSelectionExpression'),
        outputPath: 'RouteSelectionExpression',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.RouteSelectionExpression', props);
    return resource.getResponseField('RouteSelectionExpression') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.Tags'),
        outputPath: 'Tags',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.Version'),
        outputPath: 'Version',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2ResponsesCreateApiCorsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateApiRequest) {
  }

  public get allowCredentials(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.CorsConfiguration.AllowCredentials'),
        outputPath: 'CorsConfiguration.AllowCredentials',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.CorsConfiguration.AllowCredentials', props);
    return resource.getResponseField('CorsConfiguration.AllowCredentials') as unknown as boolean;
  }

  public get allowHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.CorsConfiguration.AllowHeaders'),
        outputPath: 'CorsConfiguration.AllowHeaders',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.CorsConfiguration.AllowHeaders', props);
    return resource.getResponseField('CorsConfiguration.AllowHeaders') as unknown as string[];
  }

  public get allowMethods(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.CorsConfiguration.AllowMethods'),
        outputPath: 'CorsConfiguration.AllowMethods',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.CorsConfiguration.AllowMethods', props);
    return resource.getResponseField('CorsConfiguration.AllowMethods') as unknown as string[];
  }

  public get allowOrigins(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.CorsConfiguration.AllowOrigins'),
        outputPath: 'CorsConfiguration.AllowOrigins',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.CorsConfiguration.AllowOrigins', props);
    return resource.getResponseField('CorsConfiguration.AllowOrigins') as unknown as string[];
  }

  public get exposeHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.CorsConfiguration.ExposeHeaders'),
        outputPath: 'CorsConfiguration.ExposeHeaders',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.CorsConfiguration.ExposeHeaders', props);
    return resource.getResponseField('CorsConfiguration.ExposeHeaders') as unknown as string[];
  }

  public get maxAge(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApi.CorsConfiguration.MaxAge'),
        outputPath: 'CorsConfiguration.MaxAge',
        parameters: {
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          ProtocolType: this.__input.protocolType,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Tags: this.__input.tags,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2ResponsesCreateApiMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateApiMappingRequest) {
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApiMapping.ApiId'),
        outputPath: 'ApiId',
        parameters: {
          ApiId: this.__input.apiId,
          ApiMappingKey: this.__input.apiMappingKey,
          DomainName: this.__input.domainName,
          Stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiMapping.ApiId', props);
    return resource.getResponseField('ApiId') as unknown as string;
  }

  public get apiMappingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApiMapping.ApiMappingId'),
        outputPath: 'ApiMappingId',
        parameters: {
          ApiId: this.__input.apiId,
          ApiMappingKey: this.__input.apiMappingKey,
          DomainName: this.__input.domainName,
          Stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiMapping.ApiMappingId', props);
    return resource.getResponseField('ApiMappingId') as unknown as string;
  }

  public get apiMappingKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApiMapping.ApiMappingKey'),
        outputPath: 'ApiMappingKey',
        parameters: {
          ApiId: this.__input.apiId,
          ApiMappingKey: this.__input.apiMappingKey,
          DomainName: this.__input.domainName,
          Stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiMapping.ApiMappingKey', props);
    return resource.getResponseField('ApiMappingKey') as unknown as string;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateApiMapping.Stage'),
        outputPath: 'Stage',
        parameters: {
          ApiId: this.__input.apiId,
          ApiMappingKey: this.__input.apiMappingKey,
          DomainName: this.__input.domainName,
          Stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApiMapping.Stage', props);
    return resource.getResponseField('Stage') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateAuthorizerRequest) {
  }

  public get authorizerCredentialsArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.AuthorizerCredentialsArn'),
        outputPath: 'AuthorizerCredentialsArn',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.AuthorizerCredentialsArn', props);
    return resource.getResponseField('AuthorizerCredentialsArn') as unknown as string;
  }

  public get authorizerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.AuthorizerId'),
        outputPath: 'AuthorizerId',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.AuthorizerId', props);
    return resource.getResponseField('AuthorizerId') as unknown as string;
  }

  public get authorizerPayloadFormatVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.AuthorizerPayloadFormatVersion'),
        outputPath: 'AuthorizerPayloadFormatVersion',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.AuthorizerPayloadFormatVersion', props);
    return resource.getResponseField('AuthorizerPayloadFormatVersion') as unknown as string;
  }

  public get authorizerResultTtlInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.AuthorizerResultTtlInSeconds'),
        outputPath: 'AuthorizerResultTtlInSeconds',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.AuthorizerResultTtlInSeconds', props);
    return resource.getResponseField('AuthorizerResultTtlInSeconds') as unknown as number;
  }

  public get authorizerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.AuthorizerType'),
        outputPath: 'AuthorizerType',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.AuthorizerType', props);
    return resource.getResponseField('AuthorizerType') as unknown as string;
  }

  public get authorizerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.AuthorizerUri'),
        outputPath: 'AuthorizerUri',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.AuthorizerUri', props);
    return resource.getResponseField('AuthorizerUri') as unknown as string;
  }

  public get enableSimpleResponses(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.EnableSimpleResponses'),
        outputPath: 'EnableSimpleResponses',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.EnableSimpleResponses', props);
    return resource.getResponseField('EnableSimpleResponses') as unknown as boolean;
  }

  public get identitySource(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.IdentitySource'),
        outputPath: 'IdentitySource',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.IdentitySource', props);
    return resource.getResponseField('IdentitySource') as unknown as string[];
  }

  public get identityValidationExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.IdentityValidationExpression'),
        outputPath: 'IdentityValidationExpression',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.IdentityValidationExpression', props);
    return resource.getResponseField('IdentityValidationExpression') as unknown as string;
  }

  public get jwtConfiguration(): ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration {
    return new ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.Name'),
        outputPath: 'Name',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateAuthorizerJwtConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateAuthorizerRequest) {
  }

  public get audience(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.JwtConfiguration.Audience'),
        outputPath: 'JwtConfiguration.Audience',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.JwtConfiguration.Audience', props);
    return resource.getResponseField('JwtConfiguration.Audience') as unknown as string[];
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateAuthorizer.JwtConfiguration.Issuer'),
        outputPath: 'JwtConfiguration.Issuer',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.JwtConfiguration.Issuer', props);
    return resource.getResponseField('JwtConfiguration.Issuer') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateDeploymentRequest) {
  }

  public get autoDeployed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDeployment.AutoDeployed'),
        outputPath: 'AutoDeployed',
        parameters: {
          ApiId: this.__input.apiId,
          Description: this.__input.description,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.AutoDeployed', props);
    return resource.getResponseField('AutoDeployed') as unknown as boolean;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDeployment.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          ApiId: this.__input.apiId,
          Description: this.__input.description,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDeployment.DeploymentId'),
        outputPath: 'DeploymentId',
        parameters: {
          ApiId: this.__input.apiId,
          Description: this.__input.description,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDeployment.DeploymentStatus'),
        outputPath: 'DeploymentStatus',
        parameters: {
          ApiId: this.__input.apiId,
          Description: this.__input.description,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.DeploymentStatus', props);
    return resource.getResponseField('DeploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDeployment.DeploymentStatusMessage'),
        outputPath: 'DeploymentStatusMessage',
        parameters: {
          ApiId: this.__input.apiId,
          Description: this.__input.description,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.DeploymentStatusMessage', props);
    return resource.getResponseField('DeploymentStatusMessage') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDeployment.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          Description: this.__input.description,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateDomainName {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateDomainNameRequest) {
  }

  public get apiMappingSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDomainName.ApiMappingSelectionExpression'),
        outputPath: 'ApiMappingSelectionExpression',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.ApiMappingSelectionExpression', props);
    return resource.getResponseField('ApiMappingSelectionExpression') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDomainName.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get domainNameConfigurations(): shapes.ApiGatewayV2DomainNameConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDomainName.DomainNameConfigurations'),
        outputPath: 'DomainNameConfigurations',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.DomainNameConfigurations', props);
    return resource.getResponseField('DomainNameConfigurations') as unknown as shapes.ApiGatewayV2DomainNameConfiguration[];
  }

  public get mutualTlsAuthentication(): ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication {
    return new ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDomainName.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2ResponsesCreateDomainNameMutualTlsAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateDomainNameRequest) {
  }

  public get truststoreUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDomainName.MutualTlsAuthentication.TruststoreUri'),
        outputPath: 'MutualTlsAuthentication.TruststoreUri',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.MutualTlsAuthentication.TruststoreUri', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreUri') as unknown as string;
  }

  public get truststoreVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDomainName.MutualTlsAuthentication.TruststoreVersion'),
        outputPath: 'MutualTlsAuthentication.TruststoreVersion',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.MutualTlsAuthentication.TruststoreVersion', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreVersion') as unknown as string;
  }

  public get truststoreWarnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateDomainName.MutualTlsAuthentication.TruststoreWarnings'),
        outputPath: 'MutualTlsAuthentication.TruststoreWarnings',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainName.MutualTlsAuthentication.TruststoreWarnings', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreWarnings') as unknown as string[];
  }

}

export class ApiGatewayV2ResponsesCreateIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateIntegrationRequest) {
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.ConnectionId'),
        outputPath: 'ConnectionId',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.ConnectionId', props);
    return resource.getResponseField('ConnectionId') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.ConnectionType'),
        outputPath: 'ConnectionType',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.ConnectionType', props);
    return resource.getResponseField('ConnectionType') as unknown as string;
  }

  public get contentHandlingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.ContentHandlingStrategy'),
        outputPath: 'ContentHandlingStrategy',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.ContentHandlingStrategy', props);
    return resource.getResponseField('ContentHandlingStrategy') as unknown as string;
  }

  public get credentialsArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.CredentialsArn'),
        outputPath: 'CredentialsArn',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.CredentialsArn', props);
    return resource.getResponseField('CredentialsArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get integrationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.IntegrationId'),
        outputPath: 'IntegrationId',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.IntegrationId', props);
    return resource.getResponseField('IntegrationId') as unknown as string;
  }

  public get integrationMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.IntegrationMethod'),
        outputPath: 'IntegrationMethod',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.IntegrationMethod', props);
    return resource.getResponseField('IntegrationMethod') as unknown as string;
  }

  public get integrationResponseSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.IntegrationResponseSelectionExpression'),
        outputPath: 'IntegrationResponseSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.IntegrationResponseSelectionExpression', props);
    return resource.getResponseField('IntegrationResponseSelectionExpression') as unknown as string;
  }

  public get integrationSubtype(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.IntegrationSubtype'),
        outputPath: 'IntegrationSubtype',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.IntegrationSubtype', props);
    return resource.getResponseField('IntegrationSubtype') as unknown as string;
  }

  public get integrationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.IntegrationType'),
        outputPath: 'IntegrationType',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.IntegrationType', props);
    return resource.getResponseField('IntegrationType') as unknown as string;
  }

  public get integrationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.IntegrationUri'),
        outputPath: 'IntegrationUri',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.IntegrationUri', props);
    return resource.getResponseField('IntegrationUri') as unknown as string;
  }

  public get passthroughBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.PassthroughBehavior'),
        outputPath: 'PassthroughBehavior',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.PassthroughBehavior', props);
    return resource.getResponseField('PassthroughBehavior') as unknown as string;
  }

  public get payloadFormatVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.PayloadFormatVersion'),
        outputPath: 'PayloadFormatVersion',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.PayloadFormatVersion', props);
    return resource.getResponseField('PayloadFormatVersion') as unknown as string;
  }

  public get requestParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.RequestParameters'),
        outputPath: 'RequestParameters',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.RequestParameters', props);
    return resource.getResponseField('RequestParameters') as unknown as Record<string, string>;
  }

  public get requestTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.RequestTemplates'),
        outputPath: 'RequestTemplates',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.RequestTemplates', props);
    return resource.getResponseField('RequestTemplates') as unknown as Record<string, string>;
  }

  public get templateSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.TemplateSelectionExpression'),
        outputPath: 'TemplateSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.TemplateSelectionExpression', props);
    return resource.getResponseField('TemplateSelectionExpression') as unknown as string;
  }

  public get timeoutInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.TimeoutInMillis'),
        outputPath: 'TimeoutInMillis',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.TimeoutInMillis', props);
    return resource.getResponseField('TimeoutInMillis') as unknown as number;
  }

  public get tlsConfig(): ApiGatewayV2ResponsesCreateIntegrationTlsConfig {
    return new ApiGatewayV2ResponsesCreateIntegrationTlsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ApiGatewayV2ResponsesCreateIntegrationTlsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateIntegrationRequest) {
  }

  public get serverNameToVerify(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegration.TlsConfig.ServerNameToVerify'),
        outputPath: 'TlsConfig.ServerNameToVerify',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegration.TlsConfig.ServerNameToVerify', props);
    return resource.getResponseField('TlsConfig.ServerNameToVerify') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateIntegrationResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateIntegrationResponseRequest) {
  }

  public get contentHandlingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegrationResponse.ContentHandlingStrategy'),
        outputPath: 'ContentHandlingStrategy',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegrationResponse.ContentHandlingStrategy', props);
    return resource.getResponseField('ContentHandlingStrategy') as unknown as string;
  }

  public get integrationResponseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegrationResponse.IntegrationResponseId'),
        outputPath: 'IntegrationResponseId',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegrationResponse.IntegrationResponseId', props);
    return resource.getResponseField('IntegrationResponseId') as unknown as string;
  }

  public get integrationResponseKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegrationResponse.IntegrationResponseKey'),
        outputPath: 'IntegrationResponseKey',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegrationResponse.IntegrationResponseKey', props);
    return resource.getResponseField('IntegrationResponseKey') as unknown as string;
  }

  public get responseParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegrationResponse.ResponseParameters'),
        outputPath: 'ResponseParameters',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegrationResponse.ResponseParameters', props);
    return resource.getResponseField('ResponseParameters') as unknown as Record<string, string>;
  }

  public get responseTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegrationResponse.ResponseTemplates'),
        outputPath: 'ResponseTemplates',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegrationResponse.ResponseTemplates', props);
    return resource.getResponseField('ResponseTemplates') as unknown as Record<string, string>;
  }

  public get templateSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateIntegrationResponse.TemplateSelectionExpression'),
        outputPath: 'TemplateSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIntegrationResponse.TemplateSelectionExpression', props);
    return resource.getResponseField('TemplateSelectionExpression') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateModelRequest) {
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateModel.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateModel.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateModel.ModelId'),
        outputPath: 'ModelId',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelId', props);
    return resource.getResponseField('ModelId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateModel.Name'),
        outputPath: 'Name',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateModel.Schema'),
        outputPath: 'Schema',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateRoute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateRouteRequest) {
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get apiKeyRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.ApiKeyRequired'),
        outputPath: 'ApiKeyRequired',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.ApiKeyRequired', props);
    return resource.getResponseField('ApiKeyRequired') as unknown as boolean;
  }

  public get authorizationScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.AuthorizationScopes'),
        outputPath: 'AuthorizationScopes',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.AuthorizationScopes', props);
    return resource.getResponseField('AuthorizationScopes') as unknown as string[];
  }

  public get authorizationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.AuthorizationType'),
        outputPath: 'AuthorizationType',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.AuthorizationType', props);
    return resource.getResponseField('AuthorizationType') as unknown as string;
  }

  public get authorizerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.AuthorizerId'),
        outputPath: 'AuthorizerId',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.AuthorizerId', props);
    return resource.getResponseField('AuthorizerId') as unknown as string;
  }

  public get modelSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.ModelSelectionExpression'),
        outputPath: 'ModelSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.ModelSelectionExpression', props);
    return resource.getResponseField('ModelSelectionExpression') as unknown as string;
  }

  public get operationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.OperationName'),
        outputPath: 'OperationName',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.OperationName', props);
    return resource.getResponseField('OperationName') as unknown as string;
  }

  public get requestModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.RequestModels'),
        outputPath: 'RequestModels',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.RequestModels', props);
    return resource.getResponseField('RequestModels') as unknown as Record<string, string>;
  }

  public get requestParameters(): Record<string, shapes.ApiGatewayV2ParameterConstraints> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.RequestParameters'),
        outputPath: 'RequestParameters',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.RequestParameters', props);
    return resource.getResponseField('RequestParameters') as unknown as Record<string, shapes.ApiGatewayV2ParameterConstraints>;
  }

  public get routeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.RouteId'),
        outputPath: 'RouteId',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.RouteId', props);
    return resource.getResponseField('RouteId') as unknown as string;
  }

  public get routeKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.RouteKey'),
        outputPath: 'RouteKey',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.RouteKey', props);
    return resource.getResponseField('RouteKey') as unknown as string;
  }

  public get routeResponseSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.RouteResponseSelectionExpression'),
        outputPath: 'RouteResponseSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.RouteResponseSelectionExpression', props);
    return resource.getResponseField('RouteResponseSelectionExpression') as unknown as string;
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRoute.Target'),
        outputPath: 'Target',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoute.Target', props);
    return resource.getResponseField('Target') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateRouteResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateRouteResponseRequest) {
  }

  public get modelSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRouteResponse.ModelSelectionExpression'),
        outputPath: 'ModelSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRouteResponse.ModelSelectionExpression', props);
    return resource.getResponseField('ModelSelectionExpression') as unknown as string;
  }

  public get responseModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRouteResponse.ResponseModels'),
        outputPath: 'ResponseModels',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRouteResponse.ResponseModels', props);
    return resource.getResponseField('ResponseModels') as unknown as Record<string, string>;
  }

  public get responseParameters(): Record<string, shapes.ApiGatewayV2ParameterConstraints> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRouteResponse.ResponseParameters'),
        outputPath: 'ResponseParameters',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRouteResponse.ResponseParameters', props);
    return resource.getResponseField('ResponseParameters') as unknown as Record<string, shapes.ApiGatewayV2ParameterConstraints>;
  }

  public get routeResponseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRouteResponse.RouteResponseId'),
        outputPath: 'RouteResponseId',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRouteResponse.RouteResponseId', props);
    return resource.getResponseField('RouteResponseId') as unknown as string;
  }

  public get routeResponseKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateRouteResponse.RouteResponseKey'),
        outputPath: 'RouteResponseKey',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRouteResponse.RouteResponseKey', props);
    return resource.getResponseField('RouteResponseKey') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateStage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateStageRequest) {
  }

  public get accessLogSettings(): ApiGatewayV2ResponsesCreateStageAccessLogSettings {
    return new ApiGatewayV2ResponsesCreateStageAccessLogSettings(this.__scope, this.__resources, this.__input);
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get autoDeploy(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.AutoDeploy'),
        outputPath: 'AutoDeploy',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.AutoDeploy', props);
    return resource.getResponseField('AutoDeploy') as unknown as boolean;
  }

  public get clientCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.ClientCertificateId'),
        outputPath: 'ClientCertificateId',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.ClientCertificateId', props);
    return resource.getResponseField('ClientCertificateId') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get defaultRouteSettings(): ApiGatewayV2ResponsesCreateStageDefaultRouteSettings {
    return new ApiGatewayV2ResponsesCreateStageDefaultRouteSettings(this.__scope, this.__resources, this.__input);
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.DeploymentId'),
        outputPath: 'DeploymentId',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.Description'),
        outputPath: 'Description',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get lastDeploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.LastDeploymentStatusMessage'),
        outputPath: 'LastDeploymentStatusMessage',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.LastDeploymentStatusMessage', props);
    return resource.getResponseField('LastDeploymentStatusMessage') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.LastUpdatedDate'),
        outputPath: 'LastUpdatedDate',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.LastUpdatedDate', props);
    return resource.getResponseField('LastUpdatedDate') as unknown as string;
  }

  public get routeSettings(): Record<string, shapes.ApiGatewayV2RouteSettings> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.RouteSettings'),
        outputPath: 'RouteSettings',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.RouteSettings', props);
    return resource.getResponseField('RouteSettings') as unknown as Record<string, shapes.ApiGatewayV2RouteSettings>;
  }

  public get stageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.StageName'),
        outputPath: 'StageName',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.StageName', props);
    return resource.getResponseField('StageName') as unknown as string;
  }

  public get stageVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.StageVariables'),
        outputPath: 'StageVariables',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.StageVariables', props);
    return resource.getResponseField('StageVariables') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.Tags'),
        outputPath: 'Tags',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2ResponsesCreateStageAccessLogSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateStageRequest) {
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.AccessLogSettings.DestinationArn'),
        outputPath: 'AccessLogSettings.DestinationArn',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.AccessLogSettings.DestinationArn', props);
    return resource.getResponseField('AccessLogSettings.DestinationArn') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.AccessLogSettings.Format'),
        outputPath: 'AccessLogSettings.Format',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.AccessLogSettings.Format', props);
    return resource.getResponseField('AccessLogSettings.Format') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesCreateStageDefaultRouteSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateStageRequest) {
  }

  public get dataTraceEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.DefaultRouteSettings.DataTraceEnabled'),
        outputPath: 'DefaultRouteSettings.DataTraceEnabled',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.DefaultRouteSettings.DataTraceEnabled', props);
    return resource.getResponseField('DefaultRouteSettings.DataTraceEnabled') as unknown as boolean;
  }

  public get detailedMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.DefaultRouteSettings.DetailedMetricsEnabled'),
        outputPath: 'DefaultRouteSettings.DetailedMetricsEnabled',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.DefaultRouteSettings.DetailedMetricsEnabled', props);
    return resource.getResponseField('DefaultRouteSettings.DetailedMetricsEnabled') as unknown as boolean;
  }

  public get loggingLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.DefaultRouteSettings.LoggingLevel'),
        outputPath: 'DefaultRouteSettings.LoggingLevel',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.DefaultRouteSettings.LoggingLevel', props);
    return resource.getResponseField('DefaultRouteSettings.LoggingLevel') as unknown as string;
  }

  public get throttlingBurstLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.DefaultRouteSettings.ThrottlingBurstLimit'),
        outputPath: 'DefaultRouteSettings.ThrottlingBurstLimit',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.DefaultRouteSettings.ThrottlingBurstLimit', props);
    return resource.getResponseField('DefaultRouteSettings.ThrottlingBurstLimit') as unknown as number;
  }

  public get throttlingRateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateStage.DefaultRouteSettings.ThrottlingRateLimit'),
        outputPath: 'DefaultRouteSettings.ThrottlingRateLimit',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStage.DefaultRouteSettings.ThrottlingRateLimit', props);
    return resource.getResponseField('DefaultRouteSettings.ThrottlingRateLimit') as unknown as number;
  }

}

export class ApiGatewayV2ResponsesCreateVpcLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2CreateVpcLinkRequest) {
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateVpcLink.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateVpcLink.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateVpcLink.SecurityGroupIds'),
        outputPath: 'SecurityGroupIds',
        parameters: {
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.SecurityGroupIds', props);
    return resource.getResponseField('SecurityGroupIds') as unknown as string[];
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateVpcLink.SubnetIds'),
        outputPath: 'SubnetIds',
        parameters: {
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.SubnetIds', props);
    return resource.getResponseField('SubnetIds') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateVpcLink.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get vpcLinkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateVpcLink.VpcLinkId'),
        outputPath: 'VpcLinkId',
        parameters: {
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.VpcLinkId', props);
    return resource.getResponseField('VpcLinkId') as unknown as string;
  }

  public get vpcLinkStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateVpcLink.VpcLinkStatus'),
        outputPath: 'VpcLinkStatus',
        parameters: {
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.VpcLinkStatus', props);
    return resource.getResponseField('VpcLinkStatus') as unknown as string;
  }

  public get vpcLinkStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateVpcLink.VpcLinkStatusMessage'),
        outputPath: 'VpcLinkStatusMessage',
        parameters: {
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.VpcLinkStatusMessage', props);
    return resource.getResponseField('VpcLinkStatusMessage') as unknown as string;
  }

  public get vpcLinkVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.CreateVpcLink.VpcLinkVersion'),
        outputPath: 'VpcLinkVersion',
        parameters: {
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVpcLink.VpcLinkVersion', props);
    return resource.getResponseField('VpcLinkVersion') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesExportApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2ExportApiRequest) {
  }

  public get body(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ExportApi.body'),
        outputPath: 'body',
        parameters: {
          ApiId: this.__input.apiId,
          ExportVersion: this.__input.exportVersion,
          IncludeExtensions: this.__input.includeExtensions,
          OutputType: this.__input.outputType,
          Specification: this.__input.specification,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportApi.body', props);
    return resource.getResponseField('body') as unknown as any;
  }

}

export class ApiGatewayV2ResponsesFetchApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetApiRequest) {
  }

  public get apiEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.ApiEndpoint'),
        outputPath: 'ApiEndpoint',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.ApiEndpoint', props);
    return resource.getResponseField('ApiEndpoint') as unknown as string;
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.ApiId'),
        outputPath: 'ApiId',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.ApiId', props);
    return resource.getResponseField('ApiId') as unknown as string;
  }

  public get apiKeySelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.ApiKeySelectionExpression'),
        outputPath: 'ApiKeySelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2ResponsesFetchApiCorsConfiguration {
    return new ApiGatewayV2ResponsesFetchApiCorsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get disableSchemaValidation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.DisableSchemaValidation'),
        outputPath: 'DisableSchemaValidation',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.DisableSchemaValidation', props);
    return resource.getResponseField('DisableSchemaValidation') as unknown as boolean;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.DisableExecuteApiEndpoint'),
        outputPath: 'DisableExecuteApiEndpoint',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.DisableExecuteApiEndpoint', props);
    return resource.getResponseField('DisableExecuteApiEndpoint') as unknown as boolean;
  }

  public get importInfo(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.ImportInfo'),
        outputPath: 'ImportInfo',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.ImportInfo', props);
    return resource.getResponseField('ImportInfo') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.Name'),
        outputPath: 'Name',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get protocolType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.ProtocolType'),
        outputPath: 'ProtocolType',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.ProtocolType', props);
    return resource.getResponseField('ProtocolType') as unknown as string;
  }

  public get routeSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.RouteSelectionExpression'),
        outputPath: 'RouteSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.RouteSelectionExpression', props);
    return resource.getResponseField('RouteSelectionExpression') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.Tags'),
        outputPath: 'Tags',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.Version'),
        outputPath: 'Version',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2ResponsesFetchApiCorsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetApiRequest) {
  }

  public get allowCredentials(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.CorsConfiguration.AllowCredentials'),
        outputPath: 'CorsConfiguration.AllowCredentials',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.CorsConfiguration.AllowCredentials', props);
    return resource.getResponseField('CorsConfiguration.AllowCredentials') as unknown as boolean;
  }

  public get allowHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.CorsConfiguration.AllowHeaders'),
        outputPath: 'CorsConfiguration.AllowHeaders',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.CorsConfiguration.AllowHeaders', props);
    return resource.getResponseField('CorsConfiguration.AllowHeaders') as unknown as string[];
  }

  public get allowMethods(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.CorsConfiguration.AllowMethods'),
        outputPath: 'CorsConfiguration.AllowMethods',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.CorsConfiguration.AllowMethods', props);
    return resource.getResponseField('CorsConfiguration.AllowMethods') as unknown as string[];
  }

  public get allowOrigins(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.CorsConfiguration.AllowOrigins'),
        outputPath: 'CorsConfiguration.AllowOrigins',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.CorsConfiguration.AllowOrigins', props);
    return resource.getResponseField('CorsConfiguration.AllowOrigins') as unknown as string[];
  }

  public get exposeHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.CorsConfiguration.ExposeHeaders'),
        outputPath: 'CorsConfiguration.ExposeHeaders',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.CorsConfiguration.ExposeHeaders', props);
    return resource.getResponseField('CorsConfiguration.ExposeHeaders') as unknown as string[];
  }

  public get maxAge(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApi.CorsConfiguration.MaxAge'),
        outputPath: 'CorsConfiguration.MaxAge',
        parameters: {
          ApiId: this.__input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2ResponsesFetchApiMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetApiMappingRequest) {
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApiMapping.ApiId'),
        outputPath: 'ApiId',
        parameters: {
          ApiMappingId: this.__input.apiMappingId,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiMapping.ApiId', props);
    return resource.getResponseField('ApiId') as unknown as string;
  }

  public get apiMappingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApiMapping.ApiMappingId'),
        outputPath: 'ApiMappingId',
        parameters: {
          ApiMappingId: this.__input.apiMappingId,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiMapping.ApiMappingId', props);
    return resource.getResponseField('ApiMappingId') as unknown as string;
  }

  public get apiMappingKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApiMapping.ApiMappingKey'),
        outputPath: 'ApiMappingKey',
        parameters: {
          ApiMappingId: this.__input.apiMappingId,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiMapping.ApiMappingKey', props);
    return resource.getResponseField('ApiMappingKey') as unknown as string;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApiMapping.Stage'),
        outputPath: 'Stage',
        parameters: {
          ApiMappingId: this.__input.apiMappingId,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiMapping.Stage', props);
    return resource.getResponseField('Stage') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchApiMappings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetApiMappingsRequest) {
  }

  public get items(): shapes.ApiGatewayV2ApiMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiMappings',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApiMappings.Items'),
        outputPath: 'Items',
        parameters: {
          DomainName: this.__input.domainName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiMappings.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2ApiMapping[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApiMappings',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApiMappings.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DomainName: this.__input.domainName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApiMappings.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchApis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetApisRequest) {
  }

  public get items(): shapes.ApiGatewayV2Api[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApis',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApis.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApis.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2Api[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApis',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetApis.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApis.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetAuthorizerRequest) {
  }

  public get authorizerCredentialsArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.AuthorizerCredentialsArn'),
        outputPath: 'AuthorizerCredentialsArn',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.AuthorizerCredentialsArn', props);
    return resource.getResponseField('AuthorizerCredentialsArn') as unknown as string;
  }

  public get authorizerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.AuthorizerId'),
        outputPath: 'AuthorizerId',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.AuthorizerId', props);
    return resource.getResponseField('AuthorizerId') as unknown as string;
  }

  public get authorizerPayloadFormatVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.AuthorizerPayloadFormatVersion'),
        outputPath: 'AuthorizerPayloadFormatVersion',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.AuthorizerPayloadFormatVersion', props);
    return resource.getResponseField('AuthorizerPayloadFormatVersion') as unknown as string;
  }

  public get authorizerResultTtlInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.AuthorizerResultTtlInSeconds'),
        outputPath: 'AuthorizerResultTtlInSeconds',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.AuthorizerResultTtlInSeconds', props);
    return resource.getResponseField('AuthorizerResultTtlInSeconds') as unknown as number;
  }

  public get authorizerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.AuthorizerType'),
        outputPath: 'AuthorizerType',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.AuthorizerType', props);
    return resource.getResponseField('AuthorizerType') as unknown as string;
  }

  public get authorizerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.AuthorizerUri'),
        outputPath: 'AuthorizerUri',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.AuthorizerUri', props);
    return resource.getResponseField('AuthorizerUri') as unknown as string;
  }

  public get enableSimpleResponses(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.EnableSimpleResponses'),
        outputPath: 'EnableSimpleResponses',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.EnableSimpleResponses', props);
    return resource.getResponseField('EnableSimpleResponses') as unknown as boolean;
  }

  public get identitySource(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.IdentitySource'),
        outputPath: 'IdentitySource',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.IdentitySource', props);
    return resource.getResponseField('IdentitySource') as unknown as string[];
  }

  public get identityValidationExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.IdentityValidationExpression'),
        outputPath: 'IdentityValidationExpression',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.IdentityValidationExpression', props);
    return resource.getResponseField('IdentityValidationExpression') as unknown as string;
  }

  public get jwtConfiguration(): ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration {
    return new ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.Name'),
        outputPath: 'Name',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchAuthorizerJwtConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetAuthorizerRequest) {
  }

  public get audience(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.JwtConfiguration.Audience'),
        outputPath: 'JwtConfiguration.Audience',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.JwtConfiguration.Audience', props);
    return resource.getResponseField('JwtConfiguration.Audience') as unknown as string[];
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizer.JwtConfiguration.Issuer'),
        outputPath: 'JwtConfiguration.Issuer',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerId: this.__input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizer.JwtConfiguration.Issuer', props);
    return resource.getResponseField('JwtConfiguration.Issuer') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchAuthorizers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetAuthorizersRequest) {
  }

  public get items(): shapes.ApiGatewayV2Authorizer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizers',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizers.Items'),
        outputPath: 'Items',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizers.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2Authorizer[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizers',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetAuthorizers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetDeploymentRequest) {
  }

  public get autoDeployed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDeployment.AutoDeployed'),
        outputPath: 'AutoDeployed',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.AutoDeployed', props);
    return resource.getResponseField('AutoDeployed') as unknown as boolean;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDeployment.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDeployment.DeploymentId'),
        outputPath: 'DeploymentId',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDeployment.DeploymentStatus'),
        outputPath: 'DeploymentStatus',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.DeploymentStatus', props);
    return resource.getResponseField('DeploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDeployment.DeploymentStatusMessage'),
        outputPath: 'DeploymentStatusMessage',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.DeploymentStatusMessage', props);
    return resource.getResponseField('DeploymentStatusMessage') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDeployment.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetDeploymentsRequest) {
  }

  public get items(): shapes.ApiGatewayV2Deployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployments',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDeployments.Items'),
        outputPath: 'Items',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployments.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2Deployment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployments',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDeployments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchDomainName {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetDomainNameRequest) {
  }

  public get apiMappingSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDomainName.ApiMappingSelectionExpression'),
        outputPath: 'ApiMappingSelectionExpression',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.ApiMappingSelectionExpression', props);
    return resource.getResponseField('ApiMappingSelectionExpression') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDomainName.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get domainNameConfigurations(): shapes.ApiGatewayV2DomainNameConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDomainName.DomainNameConfigurations'),
        outputPath: 'DomainNameConfigurations',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.DomainNameConfigurations', props);
    return resource.getResponseField('DomainNameConfigurations') as unknown as shapes.ApiGatewayV2DomainNameConfiguration[];
  }

  public get mutualTlsAuthentication(): ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication {
    return new ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDomainName.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2ResponsesFetchDomainNameMutualTlsAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetDomainNameRequest) {
  }

  public get truststoreUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDomainName.MutualTlsAuthentication.TruststoreUri'),
        outputPath: 'MutualTlsAuthentication.TruststoreUri',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.MutualTlsAuthentication.TruststoreUri', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreUri') as unknown as string;
  }

  public get truststoreVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDomainName.MutualTlsAuthentication.TruststoreVersion'),
        outputPath: 'MutualTlsAuthentication.TruststoreVersion',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.MutualTlsAuthentication.TruststoreVersion', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreVersion') as unknown as string;
  }

  public get truststoreWarnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDomainName.MutualTlsAuthentication.TruststoreWarnings'),
        outputPath: 'MutualTlsAuthentication.TruststoreWarnings',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainName.MutualTlsAuthentication.TruststoreWarnings', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreWarnings') as unknown as string[];
  }

}

export class ApiGatewayV2ResponsesFetchDomainNames {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetDomainNamesRequest) {
  }

  public get items(): shapes.ApiGatewayV2DomainName[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainNames',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDomainNames.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainNames.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2DomainName[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainNames',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetDomainNames.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainNames.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetIntegrationRequest) {
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.ConnectionId'),
        outputPath: 'ConnectionId',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.ConnectionId', props);
    return resource.getResponseField('ConnectionId') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.ConnectionType'),
        outputPath: 'ConnectionType',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.ConnectionType', props);
    return resource.getResponseField('ConnectionType') as unknown as string;
  }

  public get contentHandlingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.ContentHandlingStrategy'),
        outputPath: 'ContentHandlingStrategy',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.ContentHandlingStrategy', props);
    return resource.getResponseField('ContentHandlingStrategy') as unknown as string;
  }

  public get credentialsArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.CredentialsArn'),
        outputPath: 'CredentialsArn',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.CredentialsArn', props);
    return resource.getResponseField('CredentialsArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get integrationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.IntegrationId'),
        outputPath: 'IntegrationId',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.IntegrationId', props);
    return resource.getResponseField('IntegrationId') as unknown as string;
  }

  public get integrationMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.IntegrationMethod'),
        outputPath: 'IntegrationMethod',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.IntegrationMethod', props);
    return resource.getResponseField('IntegrationMethod') as unknown as string;
  }

  public get integrationResponseSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.IntegrationResponseSelectionExpression'),
        outputPath: 'IntegrationResponseSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.IntegrationResponseSelectionExpression', props);
    return resource.getResponseField('IntegrationResponseSelectionExpression') as unknown as string;
  }

  public get integrationSubtype(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.IntegrationSubtype'),
        outputPath: 'IntegrationSubtype',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.IntegrationSubtype', props);
    return resource.getResponseField('IntegrationSubtype') as unknown as string;
  }

  public get integrationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.IntegrationType'),
        outputPath: 'IntegrationType',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.IntegrationType', props);
    return resource.getResponseField('IntegrationType') as unknown as string;
  }

  public get integrationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.IntegrationUri'),
        outputPath: 'IntegrationUri',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.IntegrationUri', props);
    return resource.getResponseField('IntegrationUri') as unknown as string;
  }

  public get passthroughBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.PassthroughBehavior'),
        outputPath: 'PassthroughBehavior',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.PassthroughBehavior', props);
    return resource.getResponseField('PassthroughBehavior') as unknown as string;
  }

  public get payloadFormatVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.PayloadFormatVersion'),
        outputPath: 'PayloadFormatVersion',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.PayloadFormatVersion', props);
    return resource.getResponseField('PayloadFormatVersion') as unknown as string;
  }

  public get requestParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.RequestParameters'),
        outputPath: 'RequestParameters',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.RequestParameters', props);
    return resource.getResponseField('RequestParameters') as unknown as Record<string, string>;
  }

  public get requestTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.RequestTemplates'),
        outputPath: 'RequestTemplates',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.RequestTemplates', props);
    return resource.getResponseField('RequestTemplates') as unknown as Record<string, string>;
  }

  public get templateSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.TemplateSelectionExpression'),
        outputPath: 'TemplateSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.TemplateSelectionExpression', props);
    return resource.getResponseField('TemplateSelectionExpression') as unknown as string;
  }

  public get timeoutInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.TimeoutInMillis'),
        outputPath: 'TimeoutInMillis',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.TimeoutInMillis', props);
    return resource.getResponseField('TimeoutInMillis') as unknown as number;
  }

  public get tlsConfig(): ApiGatewayV2ResponsesFetchIntegrationTlsConfig {
    return new ApiGatewayV2ResponsesFetchIntegrationTlsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ApiGatewayV2ResponsesFetchIntegrationTlsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetIntegrationRequest) {
  }

  public get serverNameToVerify(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegration.TlsConfig.ServerNameToVerify'),
        outputPath: 'TlsConfig.ServerNameToVerify',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.TlsConfig.ServerNameToVerify', props);
    return resource.getResponseField('TlsConfig.ServerNameToVerify') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchIntegrationResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetIntegrationResponseRequest) {
  }

  public get contentHandlingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrationResponse.ContentHandlingStrategy'),
        outputPath: 'ContentHandlingStrategy',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.ContentHandlingStrategy', props);
    return resource.getResponseField('ContentHandlingStrategy') as unknown as string;
  }

  public get integrationResponseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrationResponse.IntegrationResponseId'),
        outputPath: 'IntegrationResponseId',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.IntegrationResponseId', props);
    return resource.getResponseField('IntegrationResponseId') as unknown as string;
  }

  public get integrationResponseKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrationResponse.IntegrationResponseKey'),
        outputPath: 'IntegrationResponseKey',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.IntegrationResponseKey', props);
    return resource.getResponseField('IntegrationResponseKey') as unknown as string;
  }

  public get responseParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrationResponse.ResponseParameters'),
        outputPath: 'ResponseParameters',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.ResponseParameters', props);
    return resource.getResponseField('ResponseParameters') as unknown as Record<string, string>;
  }

  public get responseTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrationResponse.ResponseTemplates'),
        outputPath: 'ResponseTemplates',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.ResponseTemplates', props);
    return resource.getResponseField('ResponseTemplates') as unknown as Record<string, string>;
  }

  public get templateSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrationResponse.TemplateSelectionExpression'),
        outputPath: 'TemplateSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponse.TemplateSelectionExpression', props);
    return resource.getResponseField('TemplateSelectionExpression') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchIntegrationResponses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetIntegrationResponsesRequest) {
  }

  public get items(): shapes.ApiGatewayV2IntegrationResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponses',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrationResponses.Items'),
        outputPath: 'Items',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponses.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2IntegrationResponse[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrationResponses',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrationResponses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApiId: this.__input.apiId,
          IntegrationId: this.__input.integrationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrationResponses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchIntegrations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetIntegrationsRequest) {
  }

  public get items(): shapes.ApiGatewayV2Integration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrations',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrations.Items'),
        outputPath: 'Items',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrations.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2Integration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegrations',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetIntegrations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegrations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetModelRequest) {
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetModel.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          ApiId: this.__input.apiId,
          ModelId: this.__input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetModel.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          ModelId: this.__input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetModel.ModelId'),
        outputPath: 'ModelId',
        parameters: {
          ApiId: this.__input.apiId,
          ModelId: this.__input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.ModelId', props);
    return resource.getResponseField('ModelId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetModel.Name'),
        outputPath: 'Name',
        parameters: {
          ApiId: this.__input.apiId,
          ModelId: this.__input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetModel.Schema'),
        outputPath: 'Schema',
        parameters: {
          ApiId: this.__input.apiId,
          ModelId: this.__input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModel.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchModelTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetModelTemplateRequest) {
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelTemplate',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetModelTemplate.Value'),
        outputPath: 'Value',
        parameters: {
          ApiId: this.__input.apiId,
          ModelId: this.__input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelTemplate.Value', props);
    return resource.getResponseField('Value') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetModelsRequest) {
  }

  public get items(): shapes.ApiGatewayV2Model[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModels',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetModels.Items'),
        outputPath: 'Items',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModels.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2Model[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModels',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetModels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchRoute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetRouteRequest) {
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get apiKeyRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.ApiKeyRequired'),
        outputPath: 'ApiKeyRequired',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.ApiKeyRequired', props);
    return resource.getResponseField('ApiKeyRequired') as unknown as boolean;
  }

  public get authorizationScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.AuthorizationScopes'),
        outputPath: 'AuthorizationScopes',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.AuthorizationScopes', props);
    return resource.getResponseField('AuthorizationScopes') as unknown as string[];
  }

  public get authorizationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.AuthorizationType'),
        outputPath: 'AuthorizationType',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.AuthorizationType', props);
    return resource.getResponseField('AuthorizationType') as unknown as string;
  }

  public get authorizerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.AuthorizerId'),
        outputPath: 'AuthorizerId',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.AuthorizerId', props);
    return resource.getResponseField('AuthorizerId') as unknown as string;
  }

  public get modelSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.ModelSelectionExpression'),
        outputPath: 'ModelSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.ModelSelectionExpression', props);
    return resource.getResponseField('ModelSelectionExpression') as unknown as string;
  }

  public get operationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.OperationName'),
        outputPath: 'OperationName',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.OperationName', props);
    return resource.getResponseField('OperationName') as unknown as string;
  }

  public get requestModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.RequestModels'),
        outputPath: 'RequestModels',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.RequestModels', props);
    return resource.getResponseField('RequestModels') as unknown as Record<string, string>;
  }

  public get requestParameters(): Record<string, shapes.ApiGatewayV2ParameterConstraints> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.RequestParameters'),
        outputPath: 'RequestParameters',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.RequestParameters', props);
    return resource.getResponseField('RequestParameters') as unknown as Record<string, shapes.ApiGatewayV2ParameterConstraints>;
  }

  public get routeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.RouteId'),
        outputPath: 'RouteId',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.RouteId', props);
    return resource.getResponseField('RouteId') as unknown as string;
  }

  public get routeKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.RouteKey'),
        outputPath: 'RouteKey',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.RouteKey', props);
    return resource.getResponseField('RouteKey') as unknown as string;
  }

  public get routeResponseSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.RouteResponseSelectionExpression'),
        outputPath: 'RouteResponseSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.RouteResponseSelectionExpression', props);
    return resource.getResponseField('RouteResponseSelectionExpression') as unknown as string;
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoute.Target'),
        outputPath: 'Target',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoute.Target', props);
    return resource.getResponseField('Target') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchRouteResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetRouteResponseRequest) {
  }

  public get modelSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRouteResponse.ModelSelectionExpression'),
        outputPath: 'ModelSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRouteResponse.ModelSelectionExpression', props);
    return resource.getResponseField('ModelSelectionExpression') as unknown as string;
  }

  public get responseModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRouteResponse.ResponseModels'),
        outputPath: 'ResponseModels',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRouteResponse.ResponseModels', props);
    return resource.getResponseField('ResponseModels') as unknown as Record<string, string>;
  }

  public get responseParameters(): Record<string, shapes.ApiGatewayV2ParameterConstraints> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRouteResponse.ResponseParameters'),
        outputPath: 'ResponseParameters',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRouteResponse.ResponseParameters', props);
    return resource.getResponseField('ResponseParameters') as unknown as Record<string, shapes.ApiGatewayV2ParameterConstraints>;
  }

  public get routeResponseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRouteResponse.RouteResponseId'),
        outputPath: 'RouteResponseId',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRouteResponse.RouteResponseId', props);
    return resource.getResponseField('RouteResponseId') as unknown as string;
  }

  public get routeResponseKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRouteResponse.RouteResponseKey'),
        outputPath: 'RouteResponseKey',
        parameters: {
          ApiId: this.__input.apiId,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRouteResponse.RouteResponseKey', props);
    return resource.getResponseField('RouteResponseKey') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchRouteResponses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetRouteResponsesRequest) {
  }

  public get items(): shapes.ApiGatewayV2RouteResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRouteResponses',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRouteResponses.Items'),
        outputPath: 'Items',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRouteResponses.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2RouteResponse[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRouteResponses',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRouteResponses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RouteId: this.__input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRouteResponses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchRoutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetRoutesRequest) {
  }

  public get items(): shapes.ApiGatewayV2Route[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoutes',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoutes.Items'),
        outputPath: 'Items',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoutes.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2Route[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoutes',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetRoutes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoutes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchStage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetStageRequest) {
  }

  public get accessLogSettings(): ApiGatewayV2ResponsesFetchStageAccessLogSettings {
    return new ApiGatewayV2ResponsesFetchStageAccessLogSettings(this.__scope, this.__resources, this.__input);
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get autoDeploy(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.AutoDeploy'),
        outputPath: 'AutoDeploy',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.AutoDeploy', props);
    return resource.getResponseField('AutoDeploy') as unknown as boolean;
  }

  public get clientCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.ClientCertificateId'),
        outputPath: 'ClientCertificateId',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.ClientCertificateId', props);
    return resource.getResponseField('ClientCertificateId') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get defaultRouteSettings(): ApiGatewayV2ResponsesFetchStageDefaultRouteSettings {
    return new ApiGatewayV2ResponsesFetchStageDefaultRouteSettings(this.__scope, this.__resources, this.__input);
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.DeploymentId'),
        outputPath: 'DeploymentId',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get lastDeploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.LastDeploymentStatusMessage'),
        outputPath: 'LastDeploymentStatusMessage',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.LastDeploymentStatusMessage', props);
    return resource.getResponseField('LastDeploymentStatusMessage') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.LastUpdatedDate'),
        outputPath: 'LastUpdatedDate',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.LastUpdatedDate', props);
    return resource.getResponseField('LastUpdatedDate') as unknown as string;
  }

  public get routeSettings(): Record<string, shapes.ApiGatewayV2RouteSettings> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.RouteSettings'),
        outputPath: 'RouteSettings',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.RouteSettings', props);
    return resource.getResponseField('RouteSettings') as unknown as Record<string, shapes.ApiGatewayV2RouteSettings>;
  }

  public get stageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.StageName'),
        outputPath: 'StageName',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.StageName', props);
    return resource.getResponseField('StageName') as unknown as string;
  }

  public get stageVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.StageVariables'),
        outputPath: 'StageVariables',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.StageVariables', props);
    return resource.getResponseField('StageVariables') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.Tags'),
        outputPath: 'Tags',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2ResponsesFetchStageAccessLogSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetStageRequest) {
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.AccessLogSettings.DestinationArn'),
        outputPath: 'AccessLogSettings.DestinationArn',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.AccessLogSettings.DestinationArn', props);
    return resource.getResponseField('AccessLogSettings.DestinationArn') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.AccessLogSettings.Format'),
        outputPath: 'AccessLogSettings.Format',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.AccessLogSettings.Format', props);
    return resource.getResponseField('AccessLogSettings.Format') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchStageDefaultRouteSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetStageRequest) {
  }

  public get dataTraceEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.DefaultRouteSettings.DataTraceEnabled'),
        outputPath: 'DefaultRouteSettings.DataTraceEnabled',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.DefaultRouteSettings.DataTraceEnabled', props);
    return resource.getResponseField('DefaultRouteSettings.DataTraceEnabled') as unknown as boolean;
  }

  public get detailedMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.DefaultRouteSettings.DetailedMetricsEnabled'),
        outputPath: 'DefaultRouteSettings.DetailedMetricsEnabled',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.DefaultRouteSettings.DetailedMetricsEnabled', props);
    return resource.getResponseField('DefaultRouteSettings.DetailedMetricsEnabled') as unknown as boolean;
  }

  public get loggingLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.DefaultRouteSettings.LoggingLevel'),
        outputPath: 'DefaultRouteSettings.LoggingLevel',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.DefaultRouteSettings.LoggingLevel', props);
    return resource.getResponseField('DefaultRouteSettings.LoggingLevel') as unknown as string;
  }

  public get throttlingBurstLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.DefaultRouteSettings.ThrottlingBurstLimit'),
        outputPath: 'DefaultRouteSettings.ThrottlingBurstLimit',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.DefaultRouteSettings.ThrottlingBurstLimit', props);
    return resource.getResponseField('DefaultRouteSettings.ThrottlingBurstLimit') as unknown as number;
  }

  public get throttlingRateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStage.DefaultRouteSettings.ThrottlingRateLimit'),
        outputPath: 'DefaultRouteSettings.ThrottlingRateLimit',
        parameters: {
          ApiId: this.__input.apiId,
          StageName: this.__input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStage.DefaultRouteSettings.ThrottlingRateLimit', props);
    return resource.getResponseField('DefaultRouteSettings.ThrottlingRateLimit') as unknown as number;
  }

}

export class ApiGatewayV2ResponsesFetchStages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetStagesRequest) {
  }

  public get items(): shapes.ApiGatewayV2Stage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStages',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStages.Items'),
        outputPath: 'Items',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStages.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2Stage[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStages',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetStages.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApiId: this.__input.apiId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetTagsRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTags',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2ResponsesFetchVpcLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetVpcLinkRequest) {
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLink.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLink.Name'),
        outputPath: 'Name',
        parameters: {
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLink.SecurityGroupIds'),
        outputPath: 'SecurityGroupIds',
        parameters: {
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.SecurityGroupIds', props);
    return resource.getResponseField('SecurityGroupIds') as unknown as string[];
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLink.SubnetIds'),
        outputPath: 'SubnetIds',
        parameters: {
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.SubnetIds', props);
    return resource.getResponseField('SubnetIds') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLink.Tags'),
        outputPath: 'Tags',
        parameters: {
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get vpcLinkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLink.VpcLinkId'),
        outputPath: 'VpcLinkId',
        parameters: {
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.VpcLinkId', props);
    return resource.getResponseField('VpcLinkId') as unknown as string;
  }

  public get vpcLinkStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLink.VpcLinkStatus'),
        outputPath: 'VpcLinkStatus',
        parameters: {
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.VpcLinkStatus', props);
    return resource.getResponseField('VpcLinkStatus') as unknown as string;
  }

  public get vpcLinkStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLink.VpcLinkStatusMessage'),
        outputPath: 'VpcLinkStatusMessage',
        parameters: {
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.VpcLinkStatusMessage', props);
    return resource.getResponseField('VpcLinkStatusMessage') as unknown as string;
  }

  public get vpcLinkVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLink.VpcLinkVersion'),
        outputPath: 'VpcLinkVersion',
        parameters: {
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLink.VpcLinkVersion', props);
    return resource.getResponseField('VpcLinkVersion') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesFetchVpcLinks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2GetVpcLinksRequest) {
  }

  public get items(): shapes.ApiGatewayV2VpcLink[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLinks',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLinks.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLinks.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.ApiGatewayV2VpcLink[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpcLinks',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.GetVpcLinks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVpcLinks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesImportApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2ImportApiRequest) {
  }

  public get apiEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.ApiEndpoint'),
        outputPath: 'ApiEndpoint',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.ApiEndpoint', props);
    return resource.getResponseField('ApiEndpoint') as unknown as string;
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.ApiId'),
        outputPath: 'ApiId',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.ApiId', props);
    return resource.getResponseField('ApiId') as unknown as string;
  }

  public get apiKeySelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.ApiKeySelectionExpression'),
        outputPath: 'ApiKeySelectionExpression',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2ResponsesImportApiCorsConfiguration {
    return new ApiGatewayV2ResponsesImportApiCorsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.Description'),
        outputPath: 'Description',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get disableSchemaValidation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.DisableSchemaValidation'),
        outputPath: 'DisableSchemaValidation',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.DisableSchemaValidation', props);
    return resource.getResponseField('DisableSchemaValidation') as unknown as boolean;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.DisableExecuteApiEndpoint'),
        outputPath: 'DisableExecuteApiEndpoint',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.DisableExecuteApiEndpoint', props);
    return resource.getResponseField('DisableExecuteApiEndpoint') as unknown as boolean;
  }

  public get importInfo(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.ImportInfo'),
        outputPath: 'ImportInfo',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.ImportInfo', props);
    return resource.getResponseField('ImportInfo') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.Name'),
        outputPath: 'Name',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get protocolType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.ProtocolType'),
        outputPath: 'ProtocolType',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.ProtocolType', props);
    return resource.getResponseField('ProtocolType') as unknown as string;
  }

  public get routeSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.RouteSelectionExpression'),
        outputPath: 'RouteSelectionExpression',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.RouteSelectionExpression', props);
    return resource.getResponseField('RouteSelectionExpression') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.Tags'),
        outputPath: 'Tags',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.Version'),
        outputPath: 'Version',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2ResponsesImportApiCorsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2ImportApiRequest) {
  }

  public get allowCredentials(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.CorsConfiguration.AllowCredentials'),
        outputPath: 'CorsConfiguration.AllowCredentials',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.CorsConfiguration.AllowCredentials', props);
    return resource.getResponseField('CorsConfiguration.AllowCredentials') as unknown as boolean;
  }

  public get allowHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.CorsConfiguration.AllowHeaders'),
        outputPath: 'CorsConfiguration.AllowHeaders',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.CorsConfiguration.AllowHeaders', props);
    return resource.getResponseField('CorsConfiguration.AllowHeaders') as unknown as string[];
  }

  public get allowMethods(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.CorsConfiguration.AllowMethods'),
        outputPath: 'CorsConfiguration.AllowMethods',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.CorsConfiguration.AllowMethods', props);
    return resource.getResponseField('CorsConfiguration.AllowMethods') as unknown as string[];
  }

  public get allowOrigins(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.CorsConfiguration.AllowOrigins'),
        outputPath: 'CorsConfiguration.AllowOrigins',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.CorsConfiguration.AllowOrigins', props);
    return resource.getResponseField('CorsConfiguration.AllowOrigins') as unknown as string[];
  }

  public get exposeHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.CorsConfiguration.ExposeHeaders'),
        outputPath: 'CorsConfiguration.ExposeHeaders',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.CorsConfiguration.ExposeHeaders', props);
    return resource.getResponseField('CorsConfiguration.ExposeHeaders') as unknown as string[];
  }

  public get maxAge(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ImportApi.CorsConfiguration.MaxAge'),
        outputPath: 'CorsConfiguration.MaxAge',
        parameters: {
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2ResponsesReimportApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2ReimportApiRequest) {
  }

  public get apiEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.ApiEndpoint'),
        outputPath: 'ApiEndpoint',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.ApiEndpoint', props);
    return resource.getResponseField('ApiEndpoint') as unknown as string;
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.ApiId'),
        outputPath: 'ApiId',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.ApiId', props);
    return resource.getResponseField('ApiId') as unknown as string;
  }

  public get apiKeySelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.ApiKeySelectionExpression'),
        outputPath: 'ApiKeySelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2ResponsesReimportApiCorsConfiguration {
    return new ApiGatewayV2ResponsesReimportApiCorsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get disableSchemaValidation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.DisableSchemaValidation'),
        outputPath: 'DisableSchemaValidation',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.DisableSchemaValidation', props);
    return resource.getResponseField('DisableSchemaValidation') as unknown as boolean;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.DisableExecuteApiEndpoint'),
        outputPath: 'DisableExecuteApiEndpoint',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.DisableExecuteApiEndpoint', props);
    return resource.getResponseField('DisableExecuteApiEndpoint') as unknown as boolean;
  }

  public get importInfo(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.ImportInfo'),
        outputPath: 'ImportInfo',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.ImportInfo', props);
    return resource.getResponseField('ImportInfo') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.Name'),
        outputPath: 'Name',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get protocolType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.ProtocolType'),
        outputPath: 'ProtocolType',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.ProtocolType', props);
    return resource.getResponseField('ProtocolType') as unknown as string;
  }

  public get routeSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.RouteSelectionExpression'),
        outputPath: 'RouteSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.RouteSelectionExpression', props);
    return resource.getResponseField('RouteSelectionExpression') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.Tags'),
        outputPath: 'Tags',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.Version'),
        outputPath: 'Version',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2ResponsesReimportApiCorsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2ReimportApiRequest) {
  }

  public get allowCredentials(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.CorsConfiguration.AllowCredentials'),
        outputPath: 'CorsConfiguration.AllowCredentials',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.CorsConfiguration.AllowCredentials', props);
    return resource.getResponseField('CorsConfiguration.AllowCredentials') as unknown as boolean;
  }

  public get allowHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.CorsConfiguration.AllowHeaders'),
        outputPath: 'CorsConfiguration.AllowHeaders',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.CorsConfiguration.AllowHeaders', props);
    return resource.getResponseField('CorsConfiguration.AllowHeaders') as unknown as string[];
  }

  public get allowMethods(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.CorsConfiguration.AllowMethods'),
        outputPath: 'CorsConfiguration.AllowMethods',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.CorsConfiguration.AllowMethods', props);
    return resource.getResponseField('CorsConfiguration.AllowMethods') as unknown as string[];
  }

  public get allowOrigins(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.CorsConfiguration.AllowOrigins'),
        outputPath: 'CorsConfiguration.AllowOrigins',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.CorsConfiguration.AllowOrigins', props);
    return resource.getResponseField('CorsConfiguration.AllowOrigins') as unknown as string[];
  }

  public get exposeHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.CorsConfiguration.ExposeHeaders'),
        outputPath: 'CorsConfiguration.ExposeHeaders',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.CorsConfiguration.ExposeHeaders', props);
    return resource.getResponseField('CorsConfiguration.ExposeHeaders') as unknown as string[];
  }

  public get maxAge(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reimportApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.ReimportApi.CorsConfiguration.MaxAge'),
        outputPath: 'CorsConfiguration.MaxAge',
        parameters: {
          ApiId: this.__input.apiId,
          Basepath: this.__input.basepath,
          Body: this.__input.body,
          FailOnWarnings: this.__input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReimportApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2ResponsesUpdateApi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateApiRequest) {
  }

  public get apiEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.ApiEndpoint'),
        outputPath: 'ApiEndpoint',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.ApiEndpoint', props);
    return resource.getResponseField('ApiEndpoint') as unknown as string;
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.ApiId'),
        outputPath: 'ApiId',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.ApiId', props);
    return resource.getResponseField('ApiId') as unknown as string;
  }

  public get apiKeySelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.ApiKeySelectionExpression'),
        outputPath: 'ApiKeySelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2ResponsesUpdateApiCorsConfiguration {
    return new ApiGatewayV2ResponsesUpdateApiCorsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get disableSchemaValidation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.DisableSchemaValidation'),
        outputPath: 'DisableSchemaValidation',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.DisableSchemaValidation', props);
    return resource.getResponseField('DisableSchemaValidation') as unknown as boolean;
  }

  public get disableExecuteApiEndpoint(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.DisableExecuteApiEndpoint'),
        outputPath: 'DisableExecuteApiEndpoint',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.DisableExecuteApiEndpoint', props);
    return resource.getResponseField('DisableExecuteApiEndpoint') as unknown as boolean;
  }

  public get importInfo(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.ImportInfo'),
        outputPath: 'ImportInfo',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.ImportInfo', props);
    return resource.getResponseField('ImportInfo') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.Name'),
        outputPath: 'Name',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get protocolType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.ProtocolType'),
        outputPath: 'ProtocolType',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.ProtocolType', props);
    return resource.getResponseField('ProtocolType') as unknown as string;
  }

  public get routeSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.RouteSelectionExpression'),
        outputPath: 'RouteSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.RouteSelectionExpression', props);
    return resource.getResponseField('RouteSelectionExpression') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.Tags'),
        outputPath: 'Tags',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.Version'),
        outputPath: 'Version',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get warnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2ResponsesUpdateApiCorsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateApiRequest) {
  }

  public get allowCredentials(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.CorsConfiguration.AllowCredentials'),
        outputPath: 'CorsConfiguration.AllowCredentials',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.CorsConfiguration.AllowCredentials', props);
    return resource.getResponseField('CorsConfiguration.AllowCredentials') as unknown as boolean;
  }

  public get allowHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.CorsConfiguration.AllowHeaders'),
        outputPath: 'CorsConfiguration.AllowHeaders',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.CorsConfiguration.AllowHeaders', props);
    return resource.getResponseField('CorsConfiguration.AllowHeaders') as unknown as string[];
  }

  public get allowMethods(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.CorsConfiguration.AllowMethods'),
        outputPath: 'CorsConfiguration.AllowMethods',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.CorsConfiguration.AllowMethods', props);
    return resource.getResponseField('CorsConfiguration.AllowMethods') as unknown as string[];
  }

  public get allowOrigins(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.CorsConfiguration.AllowOrigins'),
        outputPath: 'CorsConfiguration.AllowOrigins',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.CorsConfiguration.AllowOrigins', props);
    return resource.getResponseField('CorsConfiguration.AllowOrigins') as unknown as string[];
  }

  public get exposeHeaders(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.CorsConfiguration.ExposeHeaders'),
        outputPath: 'CorsConfiguration.ExposeHeaders',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.CorsConfiguration.ExposeHeaders', props);
    return resource.getResponseField('CorsConfiguration.ExposeHeaders') as unknown as string[];
  }

  public get maxAge(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApi',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApi.CorsConfiguration.MaxAge'),
        outputPath: 'CorsConfiguration.MaxAge',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeySelectionExpression: this.__input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.__input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.__input.corsConfiguration?.allowHeaders,
            AllowMethods: this.__input.corsConfiguration?.allowMethods,
            AllowOrigins: this.__input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.__input.corsConfiguration?.exposeHeaders,
            MaxAge: this.__input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          DisableSchemaValidation: this.__input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.__input.disableExecuteApiEndpoint,
          Name: this.__input.name,
          RouteKey: this.__input.routeKey,
          RouteSelectionExpression: this.__input.routeSelectionExpression,
          Target: this.__input.target,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2ResponsesUpdateApiMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateApiMappingRequest) {
  }

  public get apiId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApiMapping.ApiId'),
        outputPath: 'ApiId',
        parameters: {
          ApiId: this.__input.apiId,
          ApiMappingId: this.__input.apiMappingId,
          ApiMappingKey: this.__input.apiMappingKey,
          DomainName: this.__input.domainName,
          Stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiMapping.ApiId', props);
    return resource.getResponseField('ApiId') as unknown as string;
  }

  public get apiMappingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApiMapping.ApiMappingId'),
        outputPath: 'ApiMappingId',
        parameters: {
          ApiId: this.__input.apiId,
          ApiMappingId: this.__input.apiMappingId,
          ApiMappingKey: this.__input.apiMappingKey,
          DomainName: this.__input.domainName,
          Stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiMapping.ApiMappingId', props);
    return resource.getResponseField('ApiMappingId') as unknown as string;
  }

  public get apiMappingKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApiMapping.ApiMappingKey'),
        outputPath: 'ApiMappingKey',
        parameters: {
          ApiId: this.__input.apiId,
          ApiMappingId: this.__input.apiMappingId,
          ApiMappingKey: this.__input.apiMappingKey,
          DomainName: this.__input.domainName,
          Stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiMapping.ApiMappingKey', props);
    return resource.getResponseField('ApiMappingKey') as unknown as string;
  }

  public get stage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApiMapping',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateApiMapping.Stage'),
        outputPath: 'Stage',
        parameters: {
          ApiId: this.__input.apiId,
          ApiMappingId: this.__input.apiMappingId,
          ApiMappingKey: this.__input.apiMappingKey,
          DomainName: this.__input.domainName,
          Stage: this.__input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApiMapping.Stage', props);
    return resource.getResponseField('Stage') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateAuthorizerRequest) {
  }

  public get authorizerCredentialsArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.AuthorizerCredentialsArn'),
        outputPath: 'AuthorizerCredentialsArn',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.AuthorizerCredentialsArn', props);
    return resource.getResponseField('AuthorizerCredentialsArn') as unknown as string;
  }

  public get authorizerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.AuthorizerId'),
        outputPath: 'AuthorizerId',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.AuthorizerId', props);
    return resource.getResponseField('AuthorizerId') as unknown as string;
  }

  public get authorizerPayloadFormatVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.AuthorizerPayloadFormatVersion'),
        outputPath: 'AuthorizerPayloadFormatVersion',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.AuthorizerPayloadFormatVersion', props);
    return resource.getResponseField('AuthorizerPayloadFormatVersion') as unknown as string;
  }

  public get authorizerResultTtlInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.AuthorizerResultTtlInSeconds'),
        outputPath: 'AuthorizerResultTtlInSeconds',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.AuthorizerResultTtlInSeconds', props);
    return resource.getResponseField('AuthorizerResultTtlInSeconds') as unknown as number;
  }

  public get authorizerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.AuthorizerType'),
        outputPath: 'AuthorizerType',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.AuthorizerType', props);
    return resource.getResponseField('AuthorizerType') as unknown as string;
  }

  public get authorizerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.AuthorizerUri'),
        outputPath: 'AuthorizerUri',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.AuthorizerUri', props);
    return resource.getResponseField('AuthorizerUri') as unknown as string;
  }

  public get enableSimpleResponses(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.EnableSimpleResponses'),
        outputPath: 'EnableSimpleResponses',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.EnableSimpleResponses', props);
    return resource.getResponseField('EnableSimpleResponses') as unknown as boolean;
  }

  public get identitySource(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.IdentitySource'),
        outputPath: 'IdentitySource',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.IdentitySource', props);
    return resource.getResponseField('IdentitySource') as unknown as string[];
  }

  public get identityValidationExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.IdentityValidationExpression'),
        outputPath: 'IdentityValidationExpression',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.IdentityValidationExpression', props);
    return resource.getResponseField('IdentityValidationExpression') as unknown as string;
  }

  public get jwtConfiguration(): ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration {
    return new ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.Name'),
        outputPath: 'Name',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateAuthorizerJwtConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateAuthorizerRequest) {
  }

  public get audience(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.JwtConfiguration.Audience'),
        outputPath: 'JwtConfiguration.Audience',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.JwtConfiguration.Audience', props);
    return resource.getResponseField('JwtConfiguration.Audience') as unknown as string[];
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateAuthorizer.JwtConfiguration.Issuer'),
        outputPath: 'JwtConfiguration.Issuer',
        parameters: {
          ApiId: this.__input.apiId,
          AuthorizerCredentialsArn: this.__input.authorizerCredentialsArn,
          AuthorizerId: this.__input.authorizerId,
          AuthorizerPayloadFormatVersion: this.__input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.__input.authorizerResultTtlInSeconds,
          AuthorizerType: this.__input.authorizerType,
          AuthorizerUri: this.__input.authorizerUri,
          EnableSimpleResponses: this.__input.enableSimpleResponses,
          IdentitySource: this.__input.identitySource,
          IdentityValidationExpression: this.__input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.__input.jwtConfiguration?.audience,
            Issuer: this.__input.jwtConfiguration?.issuer,
          },
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.JwtConfiguration.Issuer', props);
    return resource.getResponseField('JwtConfiguration.Issuer') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateDeploymentRequest) {
  }

  public get autoDeployed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDeployment.AutoDeployed'),
        outputPath: 'AutoDeployed',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.AutoDeployed', props);
    return resource.getResponseField('AutoDeployed') as unknown as boolean;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDeployment.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDeployment.DeploymentId'),
        outputPath: 'DeploymentId',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDeployment.DeploymentStatus'),
        outputPath: 'DeploymentStatus',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.DeploymentStatus', props);
    return resource.getResponseField('DeploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDeployment.DeploymentStatusMessage'),
        outputPath: 'DeploymentStatusMessage',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.DeploymentStatusMessage', props);
    return resource.getResponseField('DeploymentStatusMessage') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeployment',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDeployment.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeployment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateDomainName {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateDomainNameRequest) {
  }

  public get apiMappingSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDomainName.ApiMappingSelectionExpression'),
        outputPath: 'ApiMappingSelectionExpression',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.ApiMappingSelectionExpression', props);
    return resource.getResponseField('ApiMappingSelectionExpression') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDomainName.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get domainNameConfigurations(): shapes.ApiGatewayV2DomainNameConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDomainName.DomainNameConfigurations'),
        outputPath: 'DomainNameConfigurations',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.DomainNameConfigurations', props);
    return resource.getResponseField('DomainNameConfigurations') as unknown as shapes.ApiGatewayV2DomainNameConfiguration[];
  }

  public get mutualTlsAuthentication(): ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication {
    return new ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDomainName.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2ResponsesUpdateDomainNameMutualTlsAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateDomainNameRequest) {
  }

  public get truststoreUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDomainName.MutualTlsAuthentication.TruststoreUri'),
        outputPath: 'MutualTlsAuthentication.TruststoreUri',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.MutualTlsAuthentication.TruststoreUri', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreUri') as unknown as string;
  }

  public get truststoreVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDomainName.MutualTlsAuthentication.TruststoreVersion'),
        outputPath: 'MutualTlsAuthentication.TruststoreVersion',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.MutualTlsAuthentication.TruststoreVersion', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreVersion') as unknown as string;
  }

  public get truststoreWarnings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainName',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateDomainName.MutualTlsAuthentication.TruststoreWarnings'),
        outputPath: 'MutualTlsAuthentication.TruststoreWarnings',
        parameters: {
          DomainName: this.__input.domainName,
          DomainNameConfigurations: this.__input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.__input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.__input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainName.MutualTlsAuthentication.TruststoreWarnings', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreWarnings') as unknown as string[];
  }

}

export class ApiGatewayV2ResponsesUpdateIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateIntegrationRequest) {
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.ConnectionId'),
        outputPath: 'ConnectionId',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.ConnectionId', props);
    return resource.getResponseField('ConnectionId') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.ConnectionType'),
        outputPath: 'ConnectionType',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.ConnectionType', props);
    return resource.getResponseField('ConnectionType') as unknown as string;
  }

  public get contentHandlingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.ContentHandlingStrategy'),
        outputPath: 'ContentHandlingStrategy',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.ContentHandlingStrategy', props);
    return resource.getResponseField('ContentHandlingStrategy') as unknown as string;
  }

  public get credentialsArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.CredentialsArn'),
        outputPath: 'CredentialsArn',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.CredentialsArn', props);
    return resource.getResponseField('CredentialsArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get integrationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.IntegrationId'),
        outputPath: 'IntegrationId',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.IntegrationId', props);
    return resource.getResponseField('IntegrationId') as unknown as string;
  }

  public get integrationMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.IntegrationMethod'),
        outputPath: 'IntegrationMethod',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.IntegrationMethod', props);
    return resource.getResponseField('IntegrationMethod') as unknown as string;
  }

  public get integrationResponseSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.IntegrationResponseSelectionExpression'),
        outputPath: 'IntegrationResponseSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.IntegrationResponseSelectionExpression', props);
    return resource.getResponseField('IntegrationResponseSelectionExpression') as unknown as string;
  }

  public get integrationSubtype(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.IntegrationSubtype'),
        outputPath: 'IntegrationSubtype',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.IntegrationSubtype', props);
    return resource.getResponseField('IntegrationSubtype') as unknown as string;
  }

  public get integrationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.IntegrationType'),
        outputPath: 'IntegrationType',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.IntegrationType', props);
    return resource.getResponseField('IntegrationType') as unknown as string;
  }

  public get integrationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.IntegrationUri'),
        outputPath: 'IntegrationUri',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.IntegrationUri', props);
    return resource.getResponseField('IntegrationUri') as unknown as string;
  }

  public get passthroughBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.PassthroughBehavior'),
        outputPath: 'PassthroughBehavior',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.PassthroughBehavior', props);
    return resource.getResponseField('PassthroughBehavior') as unknown as string;
  }

  public get payloadFormatVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.PayloadFormatVersion'),
        outputPath: 'PayloadFormatVersion',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.PayloadFormatVersion', props);
    return resource.getResponseField('PayloadFormatVersion') as unknown as string;
  }

  public get requestParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.RequestParameters'),
        outputPath: 'RequestParameters',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.RequestParameters', props);
    return resource.getResponseField('RequestParameters') as unknown as Record<string, string>;
  }

  public get requestTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.RequestTemplates'),
        outputPath: 'RequestTemplates',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.RequestTemplates', props);
    return resource.getResponseField('RequestTemplates') as unknown as Record<string, string>;
  }

  public get templateSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.TemplateSelectionExpression'),
        outputPath: 'TemplateSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.TemplateSelectionExpression', props);
    return resource.getResponseField('TemplateSelectionExpression') as unknown as string;
  }

  public get timeoutInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.TimeoutInMillis'),
        outputPath: 'TimeoutInMillis',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.TimeoutInMillis', props);
    return resource.getResponseField('TimeoutInMillis') as unknown as number;
  }

  public get tlsConfig(): ApiGatewayV2ResponsesUpdateIntegrationTlsConfig {
    return new ApiGatewayV2ResponsesUpdateIntegrationTlsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ApiGatewayV2ResponsesUpdateIntegrationTlsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateIntegrationRequest) {
  }

  public get serverNameToVerify(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegration',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegration.TlsConfig.ServerNameToVerify'),
        outputPath: 'TlsConfig.ServerNameToVerify',
        parameters: {
          ApiId: this.__input.apiId,
          ConnectionId: this.__input.connectionId,
          ConnectionType: this.__input.connectionType,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          CredentialsArn: this.__input.credentialsArn,
          Description: this.__input.description,
          IntegrationId: this.__input.integrationId,
          IntegrationMethod: this.__input.integrationMethod,
          IntegrationSubtype: this.__input.integrationSubtype,
          IntegrationType: this.__input.integrationType,
          IntegrationUri: this.__input.integrationUri,
          PassthroughBehavior: this.__input.passthroughBehavior,
          PayloadFormatVersion: this.__input.payloadFormatVersion,
          RequestParameters: this.__input.requestParameters,
          RequestTemplates: this.__input.requestTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
          TimeoutInMillis: this.__input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.__input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegration.TlsConfig.ServerNameToVerify', props);
    return resource.getResponseField('TlsConfig.ServerNameToVerify') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateIntegrationResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateIntegrationResponseRequest) {
  }

  public get contentHandlingStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegrationResponse.ContentHandlingStrategy'),
        outputPath: 'ContentHandlingStrategy',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.ContentHandlingStrategy', props);
    return resource.getResponseField('ContentHandlingStrategy') as unknown as string;
  }

  public get integrationResponseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegrationResponse.IntegrationResponseId'),
        outputPath: 'IntegrationResponseId',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.IntegrationResponseId', props);
    return resource.getResponseField('IntegrationResponseId') as unknown as string;
  }

  public get integrationResponseKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegrationResponse.IntegrationResponseKey'),
        outputPath: 'IntegrationResponseKey',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.IntegrationResponseKey', props);
    return resource.getResponseField('IntegrationResponseKey') as unknown as string;
  }

  public get responseParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegrationResponse.ResponseParameters'),
        outputPath: 'ResponseParameters',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.ResponseParameters', props);
    return resource.getResponseField('ResponseParameters') as unknown as Record<string, string>;
  }

  public get responseTemplates(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegrationResponse.ResponseTemplates'),
        outputPath: 'ResponseTemplates',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.ResponseTemplates', props);
    return resource.getResponseField('ResponseTemplates') as unknown as Record<string, string>;
  }

  public get templateSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIntegrationResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateIntegrationResponse.TemplateSelectionExpression'),
        outputPath: 'TemplateSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ContentHandlingStrategy: this.__input.contentHandlingStrategy,
          IntegrationId: this.__input.integrationId,
          IntegrationResponseId: this.__input.integrationResponseId,
          IntegrationResponseKey: this.__input.integrationResponseKey,
          ResponseParameters: this.__input.responseParameters,
          ResponseTemplates: this.__input.responseTemplates,
          TemplateSelectionExpression: this.__input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIntegrationResponse.TemplateSelectionExpression', props);
    return resource.getResponseField('TemplateSelectionExpression') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateModelRequest) {
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateModel.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          ModelId: this.__input.modelId,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateModel.Description'),
        outputPath: 'Description',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          ModelId: this.__input.modelId,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateModel.ModelId'),
        outputPath: 'ModelId',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          ModelId: this.__input.modelId,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.ModelId', props);
    return resource.getResponseField('ModelId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateModel.Name'),
        outputPath: 'Name',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          ModelId: this.__input.modelId,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateModel.Schema'),
        outputPath: 'Schema',
        parameters: {
          ApiId: this.__input.apiId,
          ContentType: this.__input.contentType,
          Description: this.__input.description,
          ModelId: this.__input.modelId,
          Name: this.__input.name,
          Schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModel.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateRoute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateRouteRequest) {
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get apiKeyRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.ApiKeyRequired'),
        outputPath: 'ApiKeyRequired',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.ApiKeyRequired', props);
    return resource.getResponseField('ApiKeyRequired') as unknown as boolean;
  }

  public get authorizationScopes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.AuthorizationScopes'),
        outputPath: 'AuthorizationScopes',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.AuthorizationScopes', props);
    return resource.getResponseField('AuthorizationScopes') as unknown as string[];
  }

  public get authorizationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.AuthorizationType'),
        outputPath: 'AuthorizationType',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.AuthorizationType', props);
    return resource.getResponseField('AuthorizationType') as unknown as string;
  }

  public get authorizerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.AuthorizerId'),
        outputPath: 'AuthorizerId',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.AuthorizerId', props);
    return resource.getResponseField('AuthorizerId') as unknown as string;
  }

  public get modelSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.ModelSelectionExpression'),
        outputPath: 'ModelSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.ModelSelectionExpression', props);
    return resource.getResponseField('ModelSelectionExpression') as unknown as string;
  }

  public get operationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.OperationName'),
        outputPath: 'OperationName',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.OperationName', props);
    return resource.getResponseField('OperationName') as unknown as string;
  }

  public get requestModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.RequestModels'),
        outputPath: 'RequestModels',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.RequestModels', props);
    return resource.getResponseField('RequestModels') as unknown as Record<string, string>;
  }

  public get requestParameters(): Record<string, shapes.ApiGatewayV2ParameterConstraints> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.RequestParameters'),
        outputPath: 'RequestParameters',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.RequestParameters', props);
    return resource.getResponseField('RequestParameters') as unknown as Record<string, shapes.ApiGatewayV2ParameterConstraints>;
  }

  public get routeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.RouteId'),
        outputPath: 'RouteId',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.RouteId', props);
    return resource.getResponseField('RouteId') as unknown as string;
  }

  public get routeKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.RouteKey'),
        outputPath: 'RouteKey',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.RouteKey', props);
    return resource.getResponseField('RouteKey') as unknown as string;
  }

  public get routeResponseSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.RouteResponseSelectionExpression'),
        outputPath: 'RouteResponseSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.RouteResponseSelectionExpression', props);
    return resource.getResponseField('RouteResponseSelectionExpression') as unknown as string;
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoute',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRoute.Target'),
        outputPath: 'Target',
        parameters: {
          ApiId: this.__input.apiId,
          ApiKeyRequired: this.__input.apiKeyRequired,
          AuthorizationScopes: this.__input.authorizationScopes,
          AuthorizationType: this.__input.authorizationType,
          AuthorizerId: this.__input.authorizerId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          OperationName: this.__input.operationName,
          RequestModels: this.__input.requestModels,
          RequestParameters: this.__input.requestParameters,
          RouteId: this.__input.routeId,
          RouteKey: this.__input.routeKey,
          RouteResponseSelectionExpression: this.__input.routeResponseSelectionExpression,
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoute.Target', props);
    return resource.getResponseField('Target') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateRouteResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateRouteResponseRequest) {
  }

  public get modelSelectionExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRouteResponse.ModelSelectionExpression'),
        outputPath: 'ModelSelectionExpression',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRouteResponse.ModelSelectionExpression', props);
    return resource.getResponseField('ModelSelectionExpression') as unknown as string;
  }

  public get responseModels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRouteResponse.ResponseModels'),
        outputPath: 'ResponseModels',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRouteResponse.ResponseModels', props);
    return resource.getResponseField('ResponseModels') as unknown as Record<string, string>;
  }

  public get responseParameters(): Record<string, shapes.ApiGatewayV2ParameterConstraints> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRouteResponse.ResponseParameters'),
        outputPath: 'ResponseParameters',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRouteResponse.ResponseParameters', props);
    return resource.getResponseField('ResponseParameters') as unknown as Record<string, shapes.ApiGatewayV2ParameterConstraints>;
  }

  public get routeResponseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRouteResponse.RouteResponseId'),
        outputPath: 'RouteResponseId',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRouteResponse.RouteResponseId', props);
    return resource.getResponseField('RouteResponseId') as unknown as string;
  }

  public get routeResponseKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRouteResponse',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateRouteResponse.RouteResponseKey'),
        outputPath: 'RouteResponseKey',
        parameters: {
          ApiId: this.__input.apiId,
          ModelSelectionExpression: this.__input.modelSelectionExpression,
          ResponseModels: this.__input.responseModels,
          ResponseParameters: this.__input.responseParameters,
          RouteId: this.__input.routeId,
          RouteResponseId: this.__input.routeResponseId,
          RouteResponseKey: this.__input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRouteResponse.RouteResponseKey', props);
    return resource.getResponseField('RouteResponseKey') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateStage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateStageRequest) {
  }

  public get accessLogSettings(): ApiGatewayV2ResponsesUpdateStageAccessLogSettings {
    return new ApiGatewayV2ResponsesUpdateStageAccessLogSettings(this.__scope, this.__resources, this.__input);
  }

  public get apiGatewayManaged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.ApiGatewayManaged'),
        outputPath: 'ApiGatewayManaged',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.ApiGatewayManaged', props);
    return resource.getResponseField('ApiGatewayManaged') as unknown as boolean;
  }

  public get autoDeploy(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.AutoDeploy'),
        outputPath: 'AutoDeploy',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.AutoDeploy', props);
    return resource.getResponseField('AutoDeploy') as unknown as boolean;
  }

  public get clientCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.ClientCertificateId'),
        outputPath: 'ClientCertificateId',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.ClientCertificateId', props);
    return resource.getResponseField('ClientCertificateId') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get defaultRouteSettings(): ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings {
    return new ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings(this.__scope, this.__resources, this.__input);
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.DeploymentId'),
        outputPath: 'DeploymentId',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.Description'),
        outputPath: 'Description',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get lastDeploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.LastDeploymentStatusMessage'),
        outputPath: 'LastDeploymentStatusMessage',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.LastDeploymentStatusMessage', props);
    return resource.getResponseField('LastDeploymentStatusMessage') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.LastUpdatedDate'),
        outputPath: 'LastUpdatedDate',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.LastUpdatedDate', props);
    return resource.getResponseField('LastUpdatedDate') as unknown as string;
  }

  public get routeSettings(): Record<string, shapes.ApiGatewayV2RouteSettings> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.RouteSettings'),
        outputPath: 'RouteSettings',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.RouteSettings', props);
    return resource.getResponseField('RouteSettings') as unknown as Record<string, shapes.ApiGatewayV2RouteSettings>;
  }

  public get stageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.StageName'),
        outputPath: 'StageName',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.StageName', props);
    return resource.getResponseField('StageName') as unknown as string;
  }

  public get stageVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.StageVariables'),
        outputPath: 'StageVariables',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.StageVariables', props);
    return resource.getResponseField('StageVariables') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.Tags'),
        outputPath: 'Tags',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2ResponsesUpdateStageAccessLogSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateStageRequest) {
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.AccessLogSettings.DestinationArn'),
        outputPath: 'AccessLogSettings.DestinationArn',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.AccessLogSettings.DestinationArn', props);
    return resource.getResponseField('AccessLogSettings.DestinationArn') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.AccessLogSettings.Format'),
        outputPath: 'AccessLogSettings.Format',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.AccessLogSettings.Format', props);
    return resource.getResponseField('AccessLogSettings.Format') as unknown as string;
  }

}

export class ApiGatewayV2ResponsesUpdateStageDefaultRouteSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateStageRequest) {
  }

  public get dataTraceEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.DefaultRouteSettings.DataTraceEnabled'),
        outputPath: 'DefaultRouteSettings.DataTraceEnabled',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.DefaultRouteSettings.DataTraceEnabled', props);
    return resource.getResponseField('DefaultRouteSettings.DataTraceEnabled') as unknown as boolean;
  }

  public get detailedMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.DefaultRouteSettings.DetailedMetricsEnabled'),
        outputPath: 'DefaultRouteSettings.DetailedMetricsEnabled',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.DefaultRouteSettings.DetailedMetricsEnabled', props);
    return resource.getResponseField('DefaultRouteSettings.DetailedMetricsEnabled') as unknown as boolean;
  }

  public get loggingLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.DefaultRouteSettings.LoggingLevel'),
        outputPath: 'DefaultRouteSettings.LoggingLevel',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.DefaultRouteSettings.LoggingLevel', props);
    return resource.getResponseField('DefaultRouteSettings.LoggingLevel') as unknown as string;
  }

  public get throttlingBurstLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.DefaultRouteSettings.ThrottlingBurstLimit'),
        outputPath: 'DefaultRouteSettings.ThrottlingBurstLimit',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.DefaultRouteSettings.ThrottlingBurstLimit', props);
    return resource.getResponseField('DefaultRouteSettings.ThrottlingBurstLimit') as unknown as number;
  }

  public get throttlingRateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStage',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateStage.DefaultRouteSettings.ThrottlingRateLimit'),
        outputPath: 'DefaultRouteSettings.ThrottlingRateLimit',
        parameters: {
          AccessLogSettings: {
            DestinationArn: this.__input.accessLogSettings?.destinationArn,
            Format: this.__input.accessLogSettings?.format,
          },
          ApiId: this.__input.apiId,
          AutoDeploy: this.__input.autoDeploy,
          ClientCertificateId: this.__input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.__input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.__input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.__input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.__input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.__input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.__input.deploymentId,
          Description: this.__input.description,
          RouteSettings: this.__input.routeSettings,
          StageName: this.__input.stageName,
          StageVariables: this.__input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStage.DefaultRouteSettings.ThrottlingRateLimit', props);
    return resource.getResponseField('DefaultRouteSettings.ThrottlingRateLimit') as unknown as number;
  }

}

export class ApiGatewayV2ResponsesUpdateVpcLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayV2UpdateVpcLinkRequest) {
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateVpcLink.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          Name: this.__input.name,
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateVpcLink.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateVpcLink.SecurityGroupIds'),
        outputPath: 'SecurityGroupIds',
        parameters: {
          Name: this.__input.name,
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.SecurityGroupIds', props);
    return resource.getResponseField('SecurityGroupIds') as unknown as string[];
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateVpcLink.SubnetIds'),
        outputPath: 'SubnetIds',
        parameters: {
          Name: this.__input.name,
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.SubnetIds', props);
    return resource.getResponseField('SubnetIds') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateVpcLink.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get vpcLinkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateVpcLink.VpcLinkId'),
        outputPath: 'VpcLinkId',
        parameters: {
          Name: this.__input.name,
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.VpcLinkId', props);
    return resource.getResponseField('VpcLinkId') as unknown as string;
  }

  public get vpcLinkStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateVpcLink.VpcLinkStatus'),
        outputPath: 'VpcLinkStatus',
        parameters: {
          Name: this.__input.name,
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.VpcLinkStatus', props);
    return resource.getResponseField('VpcLinkStatus') as unknown as string;
  }

  public get vpcLinkStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateVpcLink.VpcLinkStatusMessage'),
        outputPath: 'VpcLinkStatusMessage',
        parameters: {
          Name: this.__input.name,
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.VpcLinkStatusMessage', props);
    return resource.getResponseField('VpcLinkStatusMessage') as unknown as string;
  }

  public get vpcLinkVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpcLink',
        service: 'ApiGatewayV2',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayV2.UpdateVpcLink.VpcLinkVersion'),
        outputPath: 'VpcLinkVersion',
        parameters: {
          Name: this.__input.name,
          VpcLinkId: this.__input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVpcLink.VpcLinkVersion', props);
    return resource.getResponseField('VpcLinkVersion') as unknown as string;
  }

}

