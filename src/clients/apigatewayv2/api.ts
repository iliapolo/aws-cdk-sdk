import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ApiGatewayV2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApi(input: shapes.ApiGatewayV2CreateApiRequest): ApiGatewayV2CreateApi {
    return new ApiGatewayV2CreateApi(this, 'CreateApi', this.__resources, input);
  }

  public createApiMapping(input: shapes.ApiGatewayV2CreateApiMappingRequest): ApiGatewayV2CreateApiMapping {
    return new ApiGatewayV2CreateApiMapping(this, 'CreateApiMapping', this.__resources, input);
  }

  public createAuthorizer(input: shapes.ApiGatewayV2CreateAuthorizerRequest): ApiGatewayV2CreateAuthorizer {
    return new ApiGatewayV2CreateAuthorizer(this, 'CreateAuthorizer', this.__resources, input);
  }

  public createDeployment(input: shapes.ApiGatewayV2CreateDeploymentRequest): ApiGatewayV2CreateDeployment {
    return new ApiGatewayV2CreateDeployment(this, 'CreateDeployment', this.__resources, input);
  }

  public createDomainName(input: shapes.ApiGatewayV2CreateDomainNameRequest): ApiGatewayV2CreateDomainName {
    return new ApiGatewayV2CreateDomainName(this, 'CreateDomainName', this.__resources, input);
  }

  public createIntegration(input: shapes.ApiGatewayV2CreateIntegrationRequest): ApiGatewayV2CreateIntegration {
    return new ApiGatewayV2CreateIntegration(this, 'CreateIntegration', this.__resources, input);
  }

  public createIntegrationResponse(input: shapes.ApiGatewayV2CreateIntegrationResponseRequest): ApiGatewayV2CreateIntegrationResponse {
    return new ApiGatewayV2CreateIntegrationResponse(this, 'CreateIntegrationResponse', this.__resources, input);
  }

  public createModel(input: shapes.ApiGatewayV2CreateModelRequest): ApiGatewayV2CreateModel {
    return new ApiGatewayV2CreateModel(this, 'CreateModel', this.__resources, input);
  }

  public createRoute(input: shapes.ApiGatewayV2CreateRouteRequest): ApiGatewayV2CreateRoute {
    return new ApiGatewayV2CreateRoute(this, 'CreateRoute', this.__resources, input);
  }

  public createRouteResponse(input: shapes.ApiGatewayV2CreateRouteResponseRequest): ApiGatewayV2CreateRouteResponse {
    return new ApiGatewayV2CreateRouteResponse(this, 'CreateRouteResponse', this.__resources, input);
  }

  public createStage(input: shapes.ApiGatewayV2CreateStageRequest): ApiGatewayV2CreateStage {
    return new ApiGatewayV2CreateStage(this, 'CreateStage', this.__resources, input);
  }

  public createVpcLink(input: shapes.ApiGatewayV2CreateVpcLinkRequest): ApiGatewayV2CreateVpcLink {
    return new ApiGatewayV2CreateVpcLink(this, 'CreateVpcLink', this.__resources, input);
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

  public exportApi(input: shapes.ApiGatewayV2ExportApiRequest): ApiGatewayV2ExportApi {
    return new ApiGatewayV2ExportApi(this, 'ExportApi', this.__resources, input);
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

  public fetchApi(input: shapes.ApiGatewayV2GetApiRequest): ApiGatewayV2FetchApi {
    return new ApiGatewayV2FetchApi(this, 'FetchApi', this.__resources, input);
  }

  public fetchApiMapping(input: shapes.ApiGatewayV2GetApiMappingRequest): ApiGatewayV2FetchApiMapping {
    return new ApiGatewayV2FetchApiMapping(this, 'FetchApiMapping', this.__resources, input);
  }

  public fetchApiMappings(input: shapes.ApiGatewayV2GetApiMappingsRequest): ApiGatewayV2FetchApiMappings {
    return new ApiGatewayV2FetchApiMappings(this, 'FetchApiMappings', this.__resources, input);
  }

  public fetchApis(input: shapes.ApiGatewayV2GetApisRequest): ApiGatewayV2FetchApis {
    return new ApiGatewayV2FetchApis(this, 'FetchApis', this.__resources, input);
  }

  public fetchAuthorizer(input: shapes.ApiGatewayV2GetAuthorizerRequest): ApiGatewayV2FetchAuthorizer {
    return new ApiGatewayV2FetchAuthorizer(this, 'FetchAuthorizer', this.__resources, input);
  }

  public fetchAuthorizers(input: shapes.ApiGatewayV2GetAuthorizersRequest): ApiGatewayV2FetchAuthorizers {
    return new ApiGatewayV2FetchAuthorizers(this, 'FetchAuthorizers', this.__resources, input);
  }

  public fetchDeployment(input: shapes.ApiGatewayV2GetDeploymentRequest): ApiGatewayV2FetchDeployment {
    return new ApiGatewayV2FetchDeployment(this, 'FetchDeployment', this.__resources, input);
  }

  public fetchDeployments(input: shapes.ApiGatewayV2GetDeploymentsRequest): ApiGatewayV2FetchDeployments {
    return new ApiGatewayV2FetchDeployments(this, 'FetchDeployments', this.__resources, input);
  }

  public fetchDomainName(input: shapes.ApiGatewayV2GetDomainNameRequest): ApiGatewayV2FetchDomainName {
    return new ApiGatewayV2FetchDomainName(this, 'FetchDomainName', this.__resources, input);
  }

  public fetchDomainNames(input: shapes.ApiGatewayV2GetDomainNamesRequest): ApiGatewayV2FetchDomainNames {
    return new ApiGatewayV2FetchDomainNames(this, 'FetchDomainNames', this.__resources, input);
  }

  public fetchIntegration(input: shapes.ApiGatewayV2GetIntegrationRequest): ApiGatewayV2FetchIntegration {
    return new ApiGatewayV2FetchIntegration(this, 'FetchIntegration', this.__resources, input);
  }

  public fetchIntegrationResponse(input: shapes.ApiGatewayV2GetIntegrationResponseRequest): ApiGatewayV2FetchIntegrationResponse {
    return new ApiGatewayV2FetchIntegrationResponse(this, 'FetchIntegrationResponse', this.__resources, input);
  }

  public fetchIntegrationResponses(input: shapes.ApiGatewayV2GetIntegrationResponsesRequest): ApiGatewayV2FetchIntegrationResponses {
    return new ApiGatewayV2FetchIntegrationResponses(this, 'FetchIntegrationResponses', this.__resources, input);
  }

  public fetchIntegrations(input: shapes.ApiGatewayV2GetIntegrationsRequest): ApiGatewayV2FetchIntegrations {
    return new ApiGatewayV2FetchIntegrations(this, 'FetchIntegrations', this.__resources, input);
  }

  public fetchModel(input: shapes.ApiGatewayV2GetModelRequest): ApiGatewayV2FetchModel {
    return new ApiGatewayV2FetchModel(this, 'FetchModel', this.__resources, input);
  }

  public fetchModelTemplate(input: shapes.ApiGatewayV2GetModelTemplateRequest): ApiGatewayV2FetchModelTemplate {
    return new ApiGatewayV2FetchModelTemplate(this, 'FetchModelTemplate', this.__resources, input);
  }

  public fetchModels(input: shapes.ApiGatewayV2GetModelsRequest): ApiGatewayV2FetchModels {
    return new ApiGatewayV2FetchModels(this, 'FetchModels', this.__resources, input);
  }

  public fetchRoute(input: shapes.ApiGatewayV2GetRouteRequest): ApiGatewayV2FetchRoute {
    return new ApiGatewayV2FetchRoute(this, 'FetchRoute', this.__resources, input);
  }

  public fetchRouteResponse(input: shapes.ApiGatewayV2GetRouteResponseRequest): ApiGatewayV2FetchRouteResponse {
    return new ApiGatewayV2FetchRouteResponse(this, 'FetchRouteResponse', this.__resources, input);
  }

  public fetchRouteResponses(input: shapes.ApiGatewayV2GetRouteResponsesRequest): ApiGatewayV2FetchRouteResponses {
    return new ApiGatewayV2FetchRouteResponses(this, 'FetchRouteResponses', this.__resources, input);
  }

  public fetchRoutes(input: shapes.ApiGatewayV2GetRoutesRequest): ApiGatewayV2FetchRoutes {
    return new ApiGatewayV2FetchRoutes(this, 'FetchRoutes', this.__resources, input);
  }

  public fetchStage(input: shapes.ApiGatewayV2GetStageRequest): ApiGatewayV2FetchStage {
    return new ApiGatewayV2FetchStage(this, 'FetchStage', this.__resources, input);
  }

  public fetchStages(input: shapes.ApiGatewayV2GetStagesRequest): ApiGatewayV2FetchStages {
    return new ApiGatewayV2FetchStages(this, 'FetchStages', this.__resources, input);
  }

  public fetchTags(input: shapes.ApiGatewayV2GetTagsRequest): ApiGatewayV2FetchTags {
    return new ApiGatewayV2FetchTags(this, 'FetchTags', this.__resources, input);
  }

  public fetchVpcLink(input: shapes.ApiGatewayV2GetVpcLinkRequest): ApiGatewayV2FetchVpcLink {
    return new ApiGatewayV2FetchVpcLink(this, 'FetchVpcLink', this.__resources, input);
  }

  public fetchVpcLinks(input: shapes.ApiGatewayV2GetVpcLinksRequest): ApiGatewayV2FetchVpcLinks {
    return new ApiGatewayV2FetchVpcLinks(this, 'FetchVpcLinks', this.__resources, input);
  }

  public importApi(input: shapes.ApiGatewayV2ImportApiRequest): ApiGatewayV2ImportApi {
    return new ApiGatewayV2ImportApi(this, 'ImportApi', this.__resources, input);
  }

  public reimportApi(input: shapes.ApiGatewayV2ReimportApiRequest): ApiGatewayV2ReimportApi {
    return new ApiGatewayV2ReimportApi(this, 'ReimportApi', this.__resources, input);
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

  public updateApi(input: shapes.ApiGatewayV2UpdateApiRequest): ApiGatewayV2UpdateApi {
    return new ApiGatewayV2UpdateApi(this, 'UpdateApi', this.__resources, input);
  }

  public updateApiMapping(input: shapes.ApiGatewayV2UpdateApiMappingRequest): ApiGatewayV2UpdateApiMapping {
    return new ApiGatewayV2UpdateApiMapping(this, 'UpdateApiMapping', this.__resources, input);
  }

  public updateAuthorizer(input: shapes.ApiGatewayV2UpdateAuthorizerRequest): ApiGatewayV2UpdateAuthorizer {
    return new ApiGatewayV2UpdateAuthorizer(this, 'UpdateAuthorizer', this.__resources, input);
  }

  public updateDeployment(input: shapes.ApiGatewayV2UpdateDeploymentRequest): ApiGatewayV2UpdateDeployment {
    return new ApiGatewayV2UpdateDeployment(this, 'UpdateDeployment', this.__resources, input);
  }

  public updateDomainName(input: shapes.ApiGatewayV2UpdateDomainNameRequest): ApiGatewayV2UpdateDomainName {
    return new ApiGatewayV2UpdateDomainName(this, 'UpdateDomainName', this.__resources, input);
  }

  public updateIntegration(input: shapes.ApiGatewayV2UpdateIntegrationRequest): ApiGatewayV2UpdateIntegration {
    return new ApiGatewayV2UpdateIntegration(this, 'UpdateIntegration', this.__resources, input);
  }

  public updateIntegrationResponse(input: shapes.ApiGatewayV2UpdateIntegrationResponseRequest): ApiGatewayV2UpdateIntegrationResponse {
    return new ApiGatewayV2UpdateIntegrationResponse(this, 'UpdateIntegrationResponse', this.__resources, input);
  }

  public updateModel(input: shapes.ApiGatewayV2UpdateModelRequest): ApiGatewayV2UpdateModel {
    return new ApiGatewayV2UpdateModel(this, 'UpdateModel', this.__resources, input);
  }

  public updateRoute(input: shapes.ApiGatewayV2UpdateRouteRequest): ApiGatewayV2UpdateRoute {
    return new ApiGatewayV2UpdateRoute(this, 'UpdateRoute', this.__resources, input);
  }

  public updateRouteResponse(input: shapes.ApiGatewayV2UpdateRouteResponseRequest): ApiGatewayV2UpdateRouteResponse {
    return new ApiGatewayV2UpdateRouteResponse(this, 'UpdateRouteResponse', this.__resources, input);
  }

  public updateStage(input: shapes.ApiGatewayV2UpdateStageRequest): ApiGatewayV2UpdateStage {
    return new ApiGatewayV2UpdateStage(this, 'UpdateStage', this.__resources, input);
  }

  public updateVpcLink(input: shapes.ApiGatewayV2UpdateVpcLinkRequest): ApiGatewayV2UpdateVpcLink {
    return new ApiGatewayV2UpdateVpcLink(this, 'UpdateVpcLink', this.__resources, input);
  }

}

export class ApiGatewayV2CreateApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateApiRequest) {
    super(scope, id);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.ApiEndpoint', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.ApiGatewayManaged', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.ApiId', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2CreateApiCorsConfiguration {
    return new ApiGatewayV2CreateApiCorsConfiguration(this, 'CorsConfiguration', this.__resources, this.input);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.CreatedDate', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.Description', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.DisableSchemaValidation', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.DisableExecuteApiEndpoint', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.ImportInfo', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.Name', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.ProtocolType', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.RouteSelectionExpression', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.Tags', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.Version', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2CreateApiCorsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateApiRequest) {
    super(scope, id);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.CorsConfiguration.AllowCredentials', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.CorsConfiguration.AllowHeaders', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.CorsConfiguration.AllowMethods', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.CorsConfiguration.AllowOrigins', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.CorsConfiguration.ExposeHeaders', props);
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
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          ProtocolType: this.input.protocolType,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Tags: this.input.tags,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2CreateApiMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateApiMappingRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ApiMappingKey: this.input.apiMappingKey,
          DomainName: this.input.domainName,
          Stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiMapping.ApiId', props);
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
          ApiId: this.input.apiId,
          ApiMappingKey: this.input.apiMappingKey,
          DomainName: this.input.domainName,
          Stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiMapping.ApiMappingId', props);
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
          ApiId: this.input.apiId,
          ApiMappingKey: this.input.apiMappingKey,
          DomainName: this.input.domainName,
          Stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiMapping.ApiMappingKey', props);
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
          ApiId: this.input.apiId,
          ApiMappingKey: this.input.apiMappingKey,
          DomainName: this.input.domainName,
          Stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApiMapping.Stage', props);
    return resource.getResponseField('Stage') as unknown as string;
  }

}

export class ApiGatewayV2CreateAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateAuthorizerRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.AuthorizerCredentialsArn', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.AuthorizerId', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.AuthorizerPayloadFormatVersion', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.AuthorizerResultTtlInSeconds', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.AuthorizerType', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.AuthorizerUri', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.EnableSimpleResponses', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.IdentitySource', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.IdentityValidationExpression', props);
    return resource.getResponseField('IdentityValidationExpression') as unknown as string;
  }

  public get jwtConfiguration(): ApiGatewayV2CreateAuthorizerJwtConfiguration {
    return new ApiGatewayV2CreateAuthorizerJwtConfiguration(this, 'JwtConfiguration', this.__resources, this.input);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class ApiGatewayV2CreateAuthorizerJwtConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateAuthorizerRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.JwtConfiguration.Audience', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.JwtConfiguration.Issuer', props);
    return resource.getResponseField('JwtConfiguration.Issuer') as unknown as string;
  }

}

export class ApiGatewayV2CreateDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateDeploymentRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          Description: this.input.description,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.AutoDeployed', props);
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
          ApiId: this.input.apiId,
          Description: this.input.description,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.CreatedDate', props);
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
          ApiId: this.input.apiId,
          Description: this.input.description,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.DeploymentId', props);
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
          ApiId: this.input.apiId,
          Description: this.input.description,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.DeploymentStatus', props);
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
          ApiId: this.input.apiId,
          Description: this.input.description,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.DeploymentStatusMessage', props);
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
          ApiId: this.input.apiId,
          Description: this.input.description,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class ApiGatewayV2CreateDomainName extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateDomainNameRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.ApiMappingSelectionExpression', props);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.DomainName', props);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.DomainNameConfigurations', props);
    return resource.getResponseField('DomainNameConfigurations') as unknown as shapes.ApiGatewayV2DomainNameConfiguration[];
  }

  public get mutualTlsAuthentication(): ApiGatewayV2CreateDomainNameMutualTlsAuthentication {
    return new ApiGatewayV2CreateDomainNameMutualTlsAuthentication(this, 'MutualTlsAuthentication', this.__resources, this.input);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2CreateDomainNameMutualTlsAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateDomainNameRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.MutualTlsAuthentication.TruststoreUri', props);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.MutualTlsAuthentication.TruststoreVersion', props);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainName.MutualTlsAuthentication.TruststoreWarnings', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreWarnings') as unknown as string[];
  }

}

export class ApiGatewayV2CreateIntegration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateIntegrationRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.ConnectionId', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.ConnectionType', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.ContentHandlingStrategy', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.CredentialsArn', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.Description', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.IntegrationId', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.IntegrationMethod', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.IntegrationResponseSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.IntegrationSubtype', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.IntegrationType', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.IntegrationUri', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.PassthroughBehavior', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.PayloadFormatVersion', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.RequestParameters', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.RequestTemplates', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.TemplateSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.TimeoutInMillis', props);
    return resource.getResponseField('TimeoutInMillis') as unknown as number;
  }

  public get tlsConfig(): ApiGatewayV2CreateIntegrationTlsConfig {
    return new ApiGatewayV2CreateIntegrationTlsConfig(this, 'TlsConfig', this.__resources, this.input);
  }

}

export class ApiGatewayV2CreateIntegrationTlsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateIntegrationRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegration.TlsConfig.ServerNameToVerify', props);
    return resource.getResponseField('TlsConfig.ServerNameToVerify') as unknown as string;
  }

}

export class ApiGatewayV2CreateIntegrationResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateIntegrationResponseRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegrationResponse.ContentHandlingStrategy', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegrationResponse.IntegrationResponseId', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegrationResponse.IntegrationResponseKey', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegrationResponse.ResponseParameters', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegrationResponse.ResponseTemplates', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIntegrationResponse.TemplateSelectionExpression', props);
    return resource.getResponseField('TemplateSelectionExpression') as unknown as string;
  }

}

export class ApiGatewayV2CreateModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateModelRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.ContentType', props);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.Description', props);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.ModelId', props);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.Name', props);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

}

export class ApiGatewayV2CreateRoute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateRouteRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.ApiKeyRequired', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.AuthorizationScopes', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.AuthorizationType', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.AuthorizerId', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.ModelSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.OperationName', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.RequestModels', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.RequestParameters', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.RouteId', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.RouteKey', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.RouteResponseSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoute.Target', props);
    return resource.getResponseField('Target') as unknown as string;
  }

}

export class ApiGatewayV2CreateRouteResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateRouteResponseRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRouteResponse.ModelSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRouteResponse.ResponseModels', props);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRouteResponse.ResponseParameters', props);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRouteResponse.RouteResponseId', props);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRouteResponse.RouteResponseKey', props);
    return resource.getResponseField('RouteResponseKey') as unknown as string;
  }

}

export class ApiGatewayV2CreateStage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateStageRequest) {
    super(scope, id);
  }

  public get accessLogSettings(): ApiGatewayV2CreateStageAccessLogSettings {
    return new ApiGatewayV2CreateStageAccessLogSettings(this, 'AccessLogSettings', this.__resources, this.input);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.ApiGatewayManaged', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.AutoDeploy', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.ClientCertificateId', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get defaultRouteSettings(): ApiGatewayV2CreateStageDefaultRouteSettings {
    return new ApiGatewayV2CreateStageDefaultRouteSettings(this, 'DefaultRouteSettings', this.__resources, this.input);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.DeploymentId', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.Description', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.LastDeploymentStatusMessage', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.LastUpdatedDate', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.RouteSettings', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.StageName', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.StageVariables', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2CreateStageAccessLogSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateStageRequest) {
    super(scope, id);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.AccessLogSettings.DestinationArn', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.AccessLogSettings.Format', props);
    return resource.getResponseField('AccessLogSettings.Format') as unknown as string;
  }

}

export class ApiGatewayV2CreateStageDefaultRouteSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateStageRequest) {
    super(scope, id);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.DefaultRouteSettings.DataTraceEnabled', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.DefaultRouteSettings.DetailedMetricsEnabled', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.DefaultRouteSettings.LoggingLevel', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.DefaultRouteSettings.ThrottlingBurstLimit', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStage.DefaultRouteSettings.ThrottlingRateLimit', props);
    return resource.getResponseField('DefaultRouteSettings.ThrottlingRateLimit') as unknown as number;
  }

}

export class ApiGatewayV2CreateVpcLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2CreateVpcLinkRequest) {
    super(scope, id);
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
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.CreatedDate', props);
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
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.Name', props);
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
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.SecurityGroupIds', props);
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
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.SubnetIds', props);
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
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.Tags', props);
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
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.VpcLinkId', props);
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
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.VpcLinkStatus', props);
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
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.VpcLinkStatusMessage', props);
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
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVpcLink.VpcLinkVersion', props);
    return resource.getResponseField('VpcLinkVersion') as unknown as string;
  }

}

export class ApiGatewayV2ExportApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2ExportApiRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ExportVersion: this.input.exportVersion,
          IncludeExtensions: this.input.includeExtensions,
          OutputType: this.input.outputType,
          Specification: this.input.specification,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportApi.body', props);
    return resource.getResponseField('body') as unknown as any;
  }

}

export class ApiGatewayV2FetchApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetApiRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.ApiEndpoint', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.ApiId', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2FetchApiCorsConfiguration {
    return new ApiGatewayV2FetchApiCorsConfiguration(this, 'CorsConfiguration', this.__resources, this.input);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.CreatedDate', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.Description', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.DisableSchemaValidation', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.DisableExecuteApiEndpoint', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.ImportInfo', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.Name', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.ProtocolType', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.RouteSelectionExpression', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.Tags', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.Version', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2FetchApiCorsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetApiRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.CorsConfiguration.AllowCredentials', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.CorsConfiguration.AllowHeaders', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.CorsConfiguration.AllowMethods', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.CorsConfiguration.AllowOrigins', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.CorsConfiguration.ExposeHeaders', props);
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
          ApiId: this.input.apiId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2FetchApiMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetApiMappingRequest) {
    super(scope, id);
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
          ApiMappingId: this.input.apiMappingId,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiMapping.ApiId', props);
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
          ApiMappingId: this.input.apiMappingId,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiMapping.ApiMappingId', props);
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
          ApiMappingId: this.input.apiMappingId,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiMapping.ApiMappingKey', props);
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
          ApiMappingId: this.input.apiMappingId,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiMapping.Stage', props);
    return resource.getResponseField('Stage') as unknown as string;
  }

}

export class ApiGatewayV2FetchApiMappings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetApiMappingsRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiMappings.Items', props);
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
          DomainName: this.input.domainName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApiMappings.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchApis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetApisRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApis.Items', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApis.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetAuthorizerRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.AuthorizerCredentialsArn', props);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.AuthorizerId', props);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.AuthorizerPayloadFormatVersion', props);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.AuthorizerResultTtlInSeconds', props);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.AuthorizerType', props);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.AuthorizerUri', props);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.EnableSimpleResponses', props);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.IdentitySource', props);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.IdentityValidationExpression', props);
    return resource.getResponseField('IdentityValidationExpression') as unknown as string;
  }

  public get jwtConfiguration(): ApiGatewayV2FetchAuthorizerJwtConfiguration {
    return new ApiGatewayV2FetchAuthorizerJwtConfiguration(this, 'JwtConfiguration', this.__resources, this.input);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class ApiGatewayV2FetchAuthorizerJwtConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetAuthorizerRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.JwtConfiguration.Audience', props);
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
          ApiId: this.input.apiId,
          AuthorizerId: this.input.authorizerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizer.JwtConfiguration.Issuer', props);
    return resource.getResponseField('JwtConfiguration.Issuer') as unknown as string;
  }

}

export class ApiGatewayV2FetchAuthorizers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetAuthorizersRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizers.Items', props);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetDeploymentRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.AutoDeployed', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.CreatedDate', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.DeploymentId', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.DeploymentStatus', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.DeploymentStatusMessage', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class ApiGatewayV2FetchDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetDeploymentsRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployments.Items', props);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchDomainName extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetDomainNameRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.ApiMappingSelectionExpression', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.DomainName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.DomainNameConfigurations', props);
    return resource.getResponseField('DomainNameConfigurations') as unknown as shapes.ApiGatewayV2DomainNameConfiguration[];
  }

  public get mutualTlsAuthentication(): ApiGatewayV2FetchDomainNameMutualTlsAuthentication {
    return new ApiGatewayV2FetchDomainNameMutualTlsAuthentication(this, 'MutualTlsAuthentication', this.__resources, this.input);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2FetchDomainNameMutualTlsAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetDomainNameRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.MutualTlsAuthentication.TruststoreUri', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.MutualTlsAuthentication.TruststoreVersion', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainName.MutualTlsAuthentication.TruststoreWarnings', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreWarnings') as unknown as string[];
  }

}

export class ApiGatewayV2FetchDomainNames extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetDomainNamesRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainNames.Items', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainNames.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchIntegration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetIntegrationRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.ConnectionId', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.ConnectionType', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.ContentHandlingStrategy', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.CredentialsArn', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.Description', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.IntegrationId', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.IntegrationMethod', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.IntegrationResponseSelectionExpression', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.IntegrationSubtype', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.IntegrationType', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.IntegrationUri', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.PassthroughBehavior', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.PayloadFormatVersion', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.RequestParameters', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.RequestTemplates', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.TemplateSelectionExpression', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.TimeoutInMillis', props);
    return resource.getResponseField('TimeoutInMillis') as unknown as number;
  }

  public get tlsConfig(): ApiGatewayV2FetchIntegrationTlsConfig {
    return new ApiGatewayV2FetchIntegrationTlsConfig(this, 'TlsConfig', this.__resources, this.input);
  }

}

export class ApiGatewayV2FetchIntegrationTlsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetIntegrationRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegration.TlsConfig.ServerNameToVerify', props);
    return resource.getResponseField('TlsConfig.ServerNameToVerify') as unknown as string;
  }

}

export class ApiGatewayV2FetchIntegrationResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetIntegrationResponseRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.ContentHandlingStrategy', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.IntegrationResponseId', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.IntegrationResponseKey', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.ResponseParameters', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.ResponseTemplates', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponse.TemplateSelectionExpression', props);
    return resource.getResponseField('TemplateSelectionExpression') as unknown as string;
  }

}

export class ApiGatewayV2FetchIntegrationResponses extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetIntegrationResponsesRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponses.Items', props);
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
          ApiId: this.input.apiId,
          IntegrationId: this.input.integrationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrationResponses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchIntegrations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetIntegrationsRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrations.Items', props);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIntegrations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetModelRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ModelId: this.input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.ContentType', props);
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
          ApiId: this.input.apiId,
          ModelId: this.input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.Description', props);
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
          ApiId: this.input.apiId,
          ModelId: this.input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.ModelId', props);
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
          ApiId: this.input.apiId,
          ModelId: this.input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.Name', props);
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
          ApiId: this.input.apiId,
          ModelId: this.input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModel.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

}

export class ApiGatewayV2FetchModelTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetModelTemplateRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ModelId: this.input.modelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelTemplate.Value', props);
    return resource.getResponseField('Value') as unknown as string;
  }

}

export class ApiGatewayV2FetchModels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetModelsRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModels.Items', props);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchRoute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetRouteRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.ApiKeyRequired', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.AuthorizationScopes', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.AuthorizationType', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.AuthorizerId', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.ModelSelectionExpression', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.OperationName', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.RequestModels', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.RequestParameters', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.RouteId', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.RouteKey', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.RouteResponseSelectionExpression', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoute.Target', props);
    return resource.getResponseField('Target') as unknown as string;
  }

}

export class ApiGatewayV2FetchRouteResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetRouteResponseRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRouteResponse.ModelSelectionExpression', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRouteResponse.ResponseModels', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRouteResponse.ResponseParameters', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRouteResponse.RouteResponseId', props);
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
          ApiId: this.input.apiId,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRouteResponse.RouteResponseKey', props);
    return resource.getResponseField('RouteResponseKey') as unknown as string;
  }

}

export class ApiGatewayV2FetchRouteResponses extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetRouteResponsesRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRouteResponses.Items', props);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          RouteId: this.input.routeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRouteResponses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchRoutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetRoutesRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoutes.Items', props);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRoutes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchStage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetStageRequest) {
    super(scope, id);
  }

  public get accessLogSettings(): ApiGatewayV2FetchStageAccessLogSettings {
    return new ApiGatewayV2FetchStageAccessLogSettings(this, 'AccessLogSettings', this.__resources, this.input);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.AutoDeploy', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.ClientCertificateId', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get defaultRouteSettings(): ApiGatewayV2FetchStageDefaultRouteSettings {
    return new ApiGatewayV2FetchStageDefaultRouteSettings(this, 'DefaultRouteSettings', this.__resources, this.input);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.DeploymentId', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.Description', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.LastDeploymentStatusMessage', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.LastUpdatedDate', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.RouteSettings', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.StageName', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.StageVariables', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2FetchStageAccessLogSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetStageRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.AccessLogSettings.DestinationArn', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.AccessLogSettings.Format', props);
    return resource.getResponseField('AccessLogSettings.Format') as unknown as string;
  }

}

export class ApiGatewayV2FetchStageDefaultRouteSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetStageRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.DefaultRouteSettings.DataTraceEnabled', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.DefaultRouteSettings.DetailedMetricsEnabled', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.DefaultRouteSettings.LoggingLevel', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.DefaultRouteSettings.ThrottlingBurstLimit', props);
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
          ApiId: this.input.apiId,
          StageName: this.input.stageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStage.DefaultRouteSettings.ThrottlingRateLimit', props);
    return resource.getResponseField('DefaultRouteSettings.ThrottlingRateLimit') as unknown as number;
  }

}

export class ApiGatewayV2FetchStages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetStagesRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStages.Items', props);
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
          ApiId: this.input.apiId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2FetchTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetTagsRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2FetchVpcLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetVpcLinkRequest) {
    super(scope, id);
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
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.CreatedDate', props);
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
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.Name', props);
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
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.SecurityGroupIds', props);
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
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.SubnetIds', props);
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
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.Tags', props);
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
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.VpcLinkId', props);
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
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.VpcLinkStatus', props);
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
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.VpcLinkStatusMessage', props);
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
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLink.VpcLinkVersion', props);
    return resource.getResponseField('VpcLinkVersion') as unknown as string;
  }

}

export class ApiGatewayV2FetchVpcLinks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2GetVpcLinksRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLinks.Items', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVpcLinks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApiGatewayV2ImportApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2ImportApiRequest) {
    super(scope, id);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.ApiEndpoint', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.ApiGatewayManaged', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.ApiId', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2ImportApiCorsConfiguration {
    return new ApiGatewayV2ImportApiCorsConfiguration(this, 'CorsConfiguration', this.__resources, this.input);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.CreatedDate', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.Description', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.DisableSchemaValidation', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.DisableExecuteApiEndpoint', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.ImportInfo', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.Name', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.ProtocolType', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.RouteSelectionExpression', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.Tags', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.Version', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2ImportApiCorsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2ImportApiRequest) {
    super(scope, id);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.CorsConfiguration.AllowCredentials', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.CorsConfiguration.AllowHeaders', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.CorsConfiguration.AllowMethods', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.CorsConfiguration.AllowOrigins', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.CorsConfiguration.ExposeHeaders', props);
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
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2ReimportApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2ReimportApiRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.ApiEndpoint', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.ApiId', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2ReimportApiCorsConfiguration {
    return new ApiGatewayV2ReimportApiCorsConfiguration(this, 'CorsConfiguration', this.__resources, this.input);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.CreatedDate', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.Description', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.DisableSchemaValidation', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.DisableExecuteApiEndpoint', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.ImportInfo', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.Name', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.ProtocolType', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.RouteSelectionExpression', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.Tags', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.Version', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2ReimportApiCorsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2ReimportApiRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.CorsConfiguration.AllowCredentials', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.CorsConfiguration.AllowHeaders', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.CorsConfiguration.AllowMethods', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.CorsConfiguration.AllowOrigins', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.CorsConfiguration.ExposeHeaders', props);
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
          ApiId: this.input.apiId,
          Basepath: this.input.basepath,
          Body: this.input.body,
          FailOnWarnings: this.input.failOnWarnings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReimportApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2UpdateApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateApiRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.ApiEndpoint', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.ApiId', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.ApiKeySelectionExpression', props);
    return resource.getResponseField('ApiKeySelectionExpression') as unknown as string;
  }

  public get corsConfiguration(): ApiGatewayV2UpdateApiCorsConfiguration {
    return new ApiGatewayV2UpdateApiCorsConfiguration(this, 'CorsConfiguration', this.__resources, this.input);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.CreatedDate', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.Description', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.DisableSchemaValidation', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.DisableExecuteApiEndpoint', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.ImportInfo', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.Name', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.ProtocolType', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.RouteSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.Tags', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.Version', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as string[];
  }

}

export class ApiGatewayV2UpdateApiCorsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateApiRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.CorsConfiguration.AllowCredentials', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.CorsConfiguration.AllowHeaders', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.CorsConfiguration.AllowMethods', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.CorsConfiguration.AllowOrigins', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.CorsConfiguration.ExposeHeaders', props);
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
          ApiId: this.input.apiId,
          ApiKeySelectionExpression: this.input.apiKeySelectionExpression,
          CorsConfiguration: {
            AllowCredentials: this.input.corsConfiguration?.allowCredentials,
            AllowHeaders: this.input.corsConfiguration?.allowHeaders,
            AllowMethods: this.input.corsConfiguration?.allowMethods,
            AllowOrigins: this.input.corsConfiguration?.allowOrigins,
            ExposeHeaders: this.input.corsConfiguration?.exposeHeaders,
            MaxAge: this.input.corsConfiguration?.maxAge,
          },
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          DisableSchemaValidation: this.input.disableSchemaValidation,
          DisableExecuteApiEndpoint: this.input.disableExecuteApiEndpoint,
          Name: this.input.name,
          RouteKey: this.input.routeKey,
          RouteSelectionExpression: this.input.routeSelectionExpression,
          Target: this.input.target,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApi.CorsConfiguration.MaxAge', props);
    return resource.getResponseField('CorsConfiguration.MaxAge') as unknown as number;
  }

}

export class ApiGatewayV2UpdateApiMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateApiMappingRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ApiMappingId: this.input.apiMappingId,
          ApiMappingKey: this.input.apiMappingKey,
          DomainName: this.input.domainName,
          Stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiMapping.ApiId', props);
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
          ApiId: this.input.apiId,
          ApiMappingId: this.input.apiMappingId,
          ApiMappingKey: this.input.apiMappingKey,
          DomainName: this.input.domainName,
          Stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiMapping.ApiMappingId', props);
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
          ApiId: this.input.apiId,
          ApiMappingId: this.input.apiMappingId,
          ApiMappingKey: this.input.apiMappingKey,
          DomainName: this.input.domainName,
          Stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiMapping.ApiMappingKey', props);
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
          ApiId: this.input.apiId,
          ApiMappingId: this.input.apiMappingId,
          ApiMappingKey: this.input.apiMappingKey,
          DomainName: this.input.domainName,
          Stage: this.input.stage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApiMapping.Stage', props);
    return resource.getResponseField('Stage') as unknown as string;
  }

}

export class ApiGatewayV2UpdateAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateAuthorizerRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.AuthorizerCredentialsArn', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.AuthorizerId', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.AuthorizerPayloadFormatVersion', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.AuthorizerResultTtlInSeconds', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.AuthorizerType', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.AuthorizerUri', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.EnableSimpleResponses', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.IdentitySource', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.IdentityValidationExpression', props);
    return resource.getResponseField('IdentityValidationExpression') as unknown as string;
  }

  public get jwtConfiguration(): ApiGatewayV2UpdateAuthorizerJwtConfiguration {
    return new ApiGatewayV2UpdateAuthorizerJwtConfiguration(this, 'JwtConfiguration', this.__resources, this.input);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class ApiGatewayV2UpdateAuthorizerJwtConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateAuthorizerRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.JwtConfiguration.Audience', props);
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
          ApiId: this.input.apiId,
          AuthorizerCredentialsArn: this.input.authorizerCredentialsArn,
          AuthorizerId: this.input.authorizerId,
          AuthorizerPayloadFormatVersion: this.input.authorizerPayloadFormatVersion,
          AuthorizerResultTtlInSeconds: this.input.authorizerResultTtlInSeconds,
          AuthorizerType: this.input.authorizerType,
          AuthorizerUri: this.input.authorizerUri,
          EnableSimpleResponses: this.input.enableSimpleResponses,
          IdentitySource: this.input.identitySource,
          IdentityValidationExpression: this.input.identityValidationExpression,
          JwtConfiguration: {
            Audience: this.input.jwtConfiguration?.audience,
            Issuer: this.input.jwtConfiguration?.issuer,
          },
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.JwtConfiguration.Issuer', props);
    return resource.getResponseField('JwtConfiguration.Issuer') as unknown as string;
  }

}

export class ApiGatewayV2UpdateDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateDeploymentRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.AutoDeployed', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.CreatedDate', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.DeploymentId', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.DeploymentStatus', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.DeploymentStatusMessage', props);
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
          ApiId: this.input.apiId,
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeployment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class ApiGatewayV2UpdateDomainName extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateDomainNameRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.ApiMappingSelectionExpression', props);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.DomainName', props);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.DomainNameConfigurations', props);
    return resource.getResponseField('DomainNameConfigurations') as unknown as shapes.ApiGatewayV2DomainNameConfiguration[];
  }

  public get mutualTlsAuthentication(): ApiGatewayV2UpdateDomainNameMutualTlsAuthentication {
    return new ApiGatewayV2UpdateDomainNameMutualTlsAuthentication(this, 'MutualTlsAuthentication', this.__resources, this.input);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2UpdateDomainNameMutualTlsAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateDomainNameRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.MutualTlsAuthentication.TruststoreUri', props);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.MutualTlsAuthentication.TruststoreVersion', props);
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
          DomainName: this.input.domainName,
          DomainNameConfigurations: this.input.domainNameConfigurations,
          MutualTlsAuthentication: {
            TruststoreUri: this.input.mutualTlsAuthentication?.truststoreUri,
            TruststoreVersion: this.input.mutualTlsAuthentication?.truststoreVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainName.MutualTlsAuthentication.TruststoreWarnings', props);
    return resource.getResponseField('MutualTlsAuthentication.TruststoreWarnings') as unknown as string[];
  }

}

export class ApiGatewayV2UpdateIntegration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateIntegrationRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.ConnectionId', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.ConnectionType', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.ContentHandlingStrategy', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.CredentialsArn', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.Description', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.IntegrationId', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.IntegrationMethod', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.IntegrationResponseSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.IntegrationSubtype', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.IntegrationType', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.IntegrationUri', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.PassthroughBehavior', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.PayloadFormatVersion', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.RequestParameters', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.RequestTemplates', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.TemplateSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.TimeoutInMillis', props);
    return resource.getResponseField('TimeoutInMillis') as unknown as number;
  }

  public get tlsConfig(): ApiGatewayV2UpdateIntegrationTlsConfig {
    return new ApiGatewayV2UpdateIntegrationTlsConfig(this, 'TlsConfig', this.__resources, this.input);
  }

}

export class ApiGatewayV2UpdateIntegrationTlsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateIntegrationRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ConnectionId: this.input.connectionId,
          ConnectionType: this.input.connectionType,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          CredentialsArn: this.input.credentialsArn,
          Description: this.input.description,
          IntegrationId: this.input.integrationId,
          IntegrationMethod: this.input.integrationMethod,
          IntegrationSubtype: this.input.integrationSubtype,
          IntegrationType: this.input.integrationType,
          IntegrationUri: this.input.integrationUri,
          PassthroughBehavior: this.input.passthroughBehavior,
          PayloadFormatVersion: this.input.payloadFormatVersion,
          RequestParameters: this.input.requestParameters,
          RequestTemplates: this.input.requestTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
          TimeoutInMillis: this.input.timeoutInMillis,
          TlsConfig: {
            ServerNameToVerify: this.input.tlsConfig?.serverNameToVerify,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegration.TlsConfig.ServerNameToVerify', props);
    return resource.getResponseField('TlsConfig.ServerNameToVerify') as unknown as string;
  }

}

export class ApiGatewayV2UpdateIntegrationResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateIntegrationResponseRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.ContentHandlingStrategy', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.IntegrationResponseId', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.IntegrationResponseKey', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.ResponseParameters', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.ResponseTemplates', props);
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
          ApiId: this.input.apiId,
          ContentHandlingStrategy: this.input.contentHandlingStrategy,
          IntegrationId: this.input.integrationId,
          IntegrationResponseId: this.input.integrationResponseId,
          IntegrationResponseKey: this.input.integrationResponseKey,
          ResponseParameters: this.input.responseParameters,
          ResponseTemplates: this.input.responseTemplates,
          TemplateSelectionExpression: this.input.templateSelectionExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIntegrationResponse.TemplateSelectionExpression', props);
    return resource.getResponseField('TemplateSelectionExpression') as unknown as string;
  }

}

export class ApiGatewayV2UpdateModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateModelRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          ModelId: this.input.modelId,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.ContentType', props);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          ModelId: this.input.modelId,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.Description', props);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          ModelId: this.input.modelId,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.ModelId', props);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          ModelId: this.input.modelId,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.Name', props);
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
          ApiId: this.input.apiId,
          ContentType: this.input.contentType,
          Description: this.input.description,
          ModelId: this.input.modelId,
          Name: this.input.name,
          Schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModel.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

}

export class ApiGatewayV2UpdateRoute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateRouteRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.ApiGatewayManaged', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.ApiKeyRequired', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.AuthorizationScopes', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.AuthorizationType', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.AuthorizerId', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.ModelSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.OperationName', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.RequestModels', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.RequestParameters', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.RouteId', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.RouteKey', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.RouteResponseSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ApiKeyRequired: this.input.apiKeyRequired,
          AuthorizationScopes: this.input.authorizationScopes,
          AuthorizationType: this.input.authorizationType,
          AuthorizerId: this.input.authorizerId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          OperationName: this.input.operationName,
          RequestModels: this.input.requestModels,
          RequestParameters: this.input.requestParameters,
          RouteId: this.input.routeId,
          RouteKey: this.input.routeKey,
          RouteResponseSelectionExpression: this.input.routeResponseSelectionExpression,
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoute.Target', props);
    return resource.getResponseField('Target') as unknown as string;
  }

}

export class ApiGatewayV2UpdateRouteResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateRouteResponseRequest) {
    super(scope, id);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRouteResponse.ModelSelectionExpression', props);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRouteResponse.ResponseModels', props);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRouteResponse.ResponseParameters', props);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRouteResponse.RouteResponseId', props);
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
          ApiId: this.input.apiId,
          ModelSelectionExpression: this.input.modelSelectionExpression,
          ResponseModels: this.input.responseModels,
          ResponseParameters: this.input.responseParameters,
          RouteId: this.input.routeId,
          RouteResponseId: this.input.routeResponseId,
          RouteResponseKey: this.input.routeResponseKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRouteResponse.RouteResponseKey', props);
    return resource.getResponseField('RouteResponseKey') as unknown as string;
  }

}

export class ApiGatewayV2UpdateStage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateStageRequest) {
    super(scope, id);
  }

  public get accessLogSettings(): ApiGatewayV2UpdateStageAccessLogSettings {
    return new ApiGatewayV2UpdateStageAccessLogSettings(this, 'AccessLogSettings', this.__resources, this.input);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.ApiGatewayManaged', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.AutoDeploy', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.ClientCertificateId', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get defaultRouteSettings(): ApiGatewayV2UpdateStageDefaultRouteSettings {
    return new ApiGatewayV2UpdateStageDefaultRouteSettings(this, 'DefaultRouteSettings', this.__resources, this.input);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.DeploymentId', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.Description', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.LastDeploymentStatusMessage', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.LastUpdatedDate', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.RouteSettings', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.StageName', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.StageVariables', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ApiGatewayV2UpdateStageAccessLogSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateStageRequest) {
    super(scope, id);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.AccessLogSettings.DestinationArn', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.AccessLogSettings.Format', props);
    return resource.getResponseField('AccessLogSettings.Format') as unknown as string;
  }

}

export class ApiGatewayV2UpdateStageDefaultRouteSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateStageRequest) {
    super(scope, id);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.DefaultRouteSettings.DataTraceEnabled', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.DefaultRouteSettings.DetailedMetricsEnabled', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.DefaultRouteSettings.LoggingLevel', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.DefaultRouteSettings.ThrottlingBurstLimit', props);
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
            DestinationArn: this.input.accessLogSettings?.destinationArn,
            Format: this.input.accessLogSettings?.format,
          },
          ApiId: this.input.apiId,
          AutoDeploy: this.input.autoDeploy,
          ClientCertificateId: this.input.clientCertificateId,
          DefaultRouteSettings: {
            DataTraceEnabled: this.input.defaultRouteSettings?.dataTraceEnabled,
            DetailedMetricsEnabled: this.input.defaultRouteSettings?.detailedMetricsEnabled,
            LoggingLevel: this.input.defaultRouteSettings?.loggingLevel,
            ThrottlingBurstLimit: this.input.defaultRouteSettings?.throttlingBurstLimit,
            ThrottlingRateLimit: this.input.defaultRouteSettings?.throttlingRateLimit,
          },
          DeploymentId: this.input.deploymentId,
          Description: this.input.description,
          RouteSettings: this.input.routeSettings,
          StageName: this.input.stageName,
          StageVariables: this.input.stageVariables,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStage.DefaultRouteSettings.ThrottlingRateLimit', props);
    return resource.getResponseField('DefaultRouteSettings.ThrottlingRateLimit') as unknown as number;
  }

}

export class ApiGatewayV2UpdateVpcLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApiGatewayV2UpdateVpcLinkRequest) {
    super(scope, id);
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
          Name: this.input.name,
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.CreatedDate', props);
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
          Name: this.input.name,
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.Name', props);
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
          Name: this.input.name,
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.SecurityGroupIds', props);
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
          Name: this.input.name,
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.SubnetIds', props);
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
          Name: this.input.name,
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.Tags', props);
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
          Name: this.input.name,
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.VpcLinkId', props);
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
          Name: this.input.name,
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.VpcLinkStatus', props);
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
          Name: this.input.name,
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.VpcLinkStatusMessage', props);
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
          Name: this.input.name,
          VpcLinkId: this.input.vpcLinkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVpcLink.VpcLinkVersion', props);
    return resource.getResponseField('VpcLinkVersion') as unknown as string;
  }

}

